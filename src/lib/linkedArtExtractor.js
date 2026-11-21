import { parseWKT } from './wktParser';
import { geocodePlaceName, lookupCachedCoordinates } from './placeResolver';

function getLabel(entity, fallback = 'Untitled') {
  if (!entity) return fallback;
  if (typeof entity._label === 'string' && entity._label.trim()) return entity._label.trim();
  if (Array.isArray(entity.identified_by)) {
    const primaryName =
      entity.identified_by.find(
        (i) =>
          i.type === 'Name' &&
          Array.isArray(i.classified_as) &&
          i.classified_as.some((c) => String(c.id).includes('300404670'))
      ) || entity.identified_by.find((i) => i.type === 'Name');

    if (primaryName?.content) return String(primaryName.content);
  }
  return fallback;
}

function hasClassification(entity, pattern) {
  return (
    Array.isArray(entity?.classified_as) &&
    entity.classified_as.some(
      (c) => String(c.id || '').includes(pattern) || String(c._label || '').toLowerCase().includes(pattern.toLowerCase())
    )
  );
}

function getDescription(entity) {
  if (!Array.isArray(entity?.referred_to_by)) return undefined;
  const stmt =
    entity.referred_to_by.find(
      (r) => r.type === 'LinguisticObject' && typeof r.content === 'string' && hasClassification(r, '300080091')
    ) ||
    entity.referred_to_by.find(
      (r) =>
        r.type === 'LinguisticObject' &&
        typeof r.content === 'string' &&
        (hasClassification(r, '300444172') || hasClassification(r, '300444174'))
    );
  return stmt?.content;
}

/**
 * Extracts text-only place mentions from LinguisticObjects such as
 * Creation Place Description (aat:300435448) or Provenance Location Statement (aat:300444175).
 */
function extractPlaceMentionFromStatements(entity) {
  if (!Array.isArray(entity?.referred_to_by)) return null;

  const placeStmt = entity.referred_to_by.find(
    (r) =>
      r.type === 'LinguisticObject' &&
      typeof r.content === 'string' &&
      (hasClassification(r, '300435448') ||
        hasClassification(r, '300444175') ||
        hasClassification(r, 'place'))
  );

  if (placeStmt?.content) {
    return placeStmt.content.trim();
  }

  // Secondary check: auction/sale statements mentioning known cities (e.g., "Christie's, London")
  const saleStmt = entity.referred_to_by.find(
    (r) => r.type === 'LinguisticObject' && typeof r.content === 'string' && hasClassification(r, '300444172')
  );
  if (saleStmt?.content) {
    const cityMatch = saleStmt.content.match(/\b(London|Paris|New York|Rome|Athens|Los Angeles|Malibu|Amsterdam|Berlin)\b/i);
    if (cityMatch) return cityMatch[1];
  }

  return null;
}

function parseTimespan(timespan) {
  if (!timespan) return { display: 'Date unknown', sortTs: Number.MAX_SAFE_INTEGER };

  let label = typeof timespan._label === 'string' ? timespan._label.trim() : '';
  if (!label && Array.isArray(timespan.identified_by)) {
    const displayName = timespan.identified_by.find((i) => i.type === 'Name' && i.content);
    if (displayName?.content) label = String(displayName.content);
  }

  const begin = timespan.begin_of_the_begin || timespan.end_of_the_begin;
  const end = timespan.end_of_the_end || timespan.begin_of_the_end;

  let sortTs = Number.MAX_SAFE_INTEGER;
  const isoCandidate = begin || end;
  if (isoCandidate) {
    const yearMatch = String(isoCandidate).match(/^([+-]?\d{1,6})/);
    if (yearMatch) {
      sortTs = parseInt(yearMatch[1], 10);
    }
  } else if (label) {
    const labelYear = label.match(/([+-]?\d{4})/);
    if (labelYear) {
      sortTs = parseInt(labelYear[1], 10);
    }
  }

  if (label) return { display: label, sortTs };
  if (begin && end && begin !== end) {
    return { display: `${String(begin).slice(0, 10)} – ${String(end).slice(0, 10)}`, sortTs };
  }
  if (begin) return { display: String(begin).slice(0, 10), sortTs };
  if (end) return { display: String(end).slice(0, 10), sortTs };

  return { display: 'Date unknown', sortTs };
}

function isImageUrl(url) {
  if (typeof url !== 'string') return false;
  if (/rightsstatements\.org\/files\/icons/i.test(url)) return false;
  return /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(url) || /\/iiif\/image\//i.test(url);
}

function extractImages(entity, source) {
  const results = [];
  if (!entity) return results;

  const inspectVisual = (node) => {
    if (!node || typeof node !== 'object') return;
    const nodeLabel = getLabel(node, 'Attached image');

    if (Array.isArray(node.access_point)) {
      for (const ap of node.access_point) {
        if (ap?.id && isImageUrl(ap.id)) {
          results.push({ id: ap.id, url: ap.id, label: nodeLabel, source });
        }
      }
    }

    if (isImageUrl(node.id)) {
      results.push({ id: node.id, url: node.id, label: nodeLabel, source });
    }

    if (Array.isArray(node.digitally_shown_by)) {
      for (const dig of node.digitally_shown_by) {
        const label = getLabel(dig, nodeLabel);
        const iiifService = Array.isArray(dig.conforms_to)
          ? dig.conforms_to.find((c) => String(c.id).includes('iiif.io/api/image'))?.id
          : undefined;

        if (Array.isArray(dig.access_point)) {
          for (const ap of dig.access_point) {
            if (ap?.id && isImageUrl(ap.id)) {
              results.push({ id: ap.id, url: ap.id, label, iiifService, source });
            }
          }
        } else if (isImageUrl(dig.id)) {
          results.push({ id: dig.id, url: dig.id, label, iiifService, source });
        }
      }
    }
  };

  if (Array.isArray(entity.representation)) {
    entity.representation.forEach(inspectVisual);
  }
  if (Array.isArray(entity.digitally_shown_by)) {
    inspectVisual(entity);
  }

  return Array.from(new Map(results.map((item) => [item.url, item])).values());
}

function extractActors(activity) {
  const actors = [];
  const collect = (arr) => {
    if (!Array.isArray(arr)) return;
    for (const actor of arr) {
      const lbl = getLabel(actor, '');
      if (lbl && lbl.toLowerCase() !== 'unknown') {
        actors.push(lbl);
      }
    }
  };
  collect(activity?.carried_out_by);
  collect(activity?.transferred_title_from);
  collect(activity?.transferred_title_to);
  return Array.from(new Set(actors));
}

function resolvePlace(placeInput) {
  const place = Array.isArray(placeInput) ? placeInput[0] : placeInput;
  if (!place || typeof place !== 'object') return null;

  let wkt = place.defined_by;
  if (!wkt && Array.isArray(place.part_of)) {
    const parentWithWkt = place.part_of.find((p) => typeof p?.defined_by === 'string');
    if (parentWithWkt) wkt = parentWithWkt.defined_by;
  }

  return {
    label: getLabel(place, 'Unnamed Place'),
    uri: place.id,
    wkt,
    isStorage: hasClassification(place, '300004465'),
    images: extractImages(place, 'place'),
  };
}

export function extractLinkedArtTrail(doc) {
  const warnings = [];
  const objectLabel = getLabel(doc, 'Linked Art Object');
  const objectImages = extractImages(doc, 'object');
  const rawEvents = [];

  const pushEvent = ({
    id,
    title,
    category,
    timespan,
    placeLabel,
    placeUri,
    wkt,
    actors = [],
    description,
    images = [],
    defaultOrder,
    precisionNote,
  }) => {
    const parsedWkt = parseWKT(wkt);
    const cachedCoords = parsedWkt ? parsedWkt.centroid : lookupCachedCoordinates(placeLabel);
    const { display, sortTs } = parseTimespan(timespan);

    if (!parsedWkt && precisionNote) {
      warnings.push(precisionNote);
    }

    rawEvents.push({
      id,
      title,
      category,
      dateDisplay: display,
      sortTimestamp: sortTs === Number.MAX_SAFE_INTEGER ? defaultOrder : sortTs,
      placeLabel,
      placeUri,
      coordinates: cachedCoords, // May be null until async geocoding completes
      polygon: parsedWkt?.polygon,
      isApproximate: !parsedWkt,
      actors,
      description,
      images,
    });
  };

  // 1. Production (`produced_by`) + fallback to object-level Creation Place Description
  if (doc.produced_by) {
    const prodPlace = resolvePlace(doc.produced_by.took_place_at);
    const statementPlace =
      extractPlaceMentionFromStatements(doc.produced_by) || extractPlaceMentionFromStatements(doc);
    const resolvedLabel = prodPlace?.label || statementPlace;

    if (resolvedLabel) {
      pushEvent({
        id: doc.produced_by.id || 'production-0',
        title: getLabel(doc.produced_by, 'Production / Creation'),
        category: 'production',
        timespan: doc.produced_by.timespan,
        placeLabel: resolvedLabel,
        placeUri: prodPlace?.uri,
        wkt: prodPlace?.wkt,
        actors: extractActors(doc.produced_by),
        description: getDescription(doc.produced_by),
        images: [...extractImages(doc.produced_by, 'event'), ...(prodPlace?.images || [])],
        defaultOrder: -100000,
        precisionNote: !prodPlace?.wkt
          ? `Production place "${resolvedLabel}" resolved from text statement (no WKT defined_by).`
          : undefined,
      });
    }
  }

  // 2. Encounter / Excavation / Findspot
  const encounters = Array.isArray(doc.encountered)
    ? doc.encountered
    : doc.found_by
      ? [doc.found_by]
      : [];
  encounters.forEach((enc, idx) => {
    const placeInfo = resolvePlace(enc.took_place_at);
    const label = placeInfo?.label || extractPlaceMentionFromStatements(enc);
    if (!label) return;
    pushEvent({
      id: enc.id || `discovery-${idx}`,
      title: getLabel(enc, 'Archaeological Encounter / Findspot'),
      category: 'discovery',
      timespan: enc.timespan,
      placeLabel: label,
      placeUri: placeInfo?.uri,
      wkt: placeInfo?.wkt,
      actors: extractActors(enc),
      description: getDescription(enc),
      images: [...extractImages(enc, 'event'), ...(placeInfo?.images || [])],
      defaultOrder: -50000 + idx,
    });
  });

  // 3. Provenance / Ownership transfers (`changed_ownership_through` + Getty `part_of` wrappers)
  if (Array.isArray(doc.changed_ownership_through)) {
    doc.changed_ownership_through.forEach((acq, idx) => {
      const parentAct = Array.isArray(acq.part_of) ? acq.part_of[0] : acq.part_of;
      const placeInfo =
        resolvePlace(acq.took_place_at) || resolvePlace(parentAct?.took_place_at);
      const textPlace =
        extractPlaceMentionFromStatements(acq) || extractPlaceMentionFromStatements(parentAct);
      const label = placeInfo?.label || textPlace;

      if (!label) return;

      pushEvent({
        id: acq.id || `provenance-${idx}`,
        title: getLabel(acq, `Transfer of Custody #${idx + 1}`),
        category: 'provenance',
        timespan: acq.timespan || parentAct?.timespan,
        placeLabel: label,
        placeUri: placeInfo?.uri,
        wkt: placeInfo?.wkt,
        actors: [...extractActors(acq), ...extractActors(parentAct)],
        description: getDescription(acq) || getDescription(parentAct),
        images: [...extractImages(acq, 'event'), ...(placeInfo?.images || [])],
        defaultOrder: 1000 + idx,
        precisionNote: !placeInfo?.wkt
          ? `Provenance location "${label}" resolved from text statement (no WKT defined_by).`
          : undefined,
      });
    });
  }

  // 4. Exhibitions (`used_for` directly or nested in `member_of[].used_for`)
  const exhibitionActivities = [
    ...(Array.isArray(doc.used_for) ? doc.used_for : []),
    ...(Array.isArray(doc.member_of)
      ? doc.member_of.flatMap((set) => (Array.isArray(set.used_for) ? set.used_for : []))
      : []),
  ];

  exhibitionActivities.forEach((exh, idx) => {
    const placeInfo = resolvePlace(exh.took_place_at);
    const label = placeInfo?.label || getLabel(exh, '');
    if (!label) return;

    pushEvent({
      id: exh.id || `exhibition-${idx}`,
      title: getLabel(exh, `Exhibition #${idx + 1}`),
      category: 'exhibition',
      timespan: exh.timespan,
      placeLabel: label,
      placeUri: placeInfo?.uri,
      wkt: placeInfo?.wkt,
      actors: extractActors(exh),
      description: getDescription(exh),
      images: [...extractImages(exh, 'event'), ...(placeInfo?.images || [])],
      defaultOrder: 2000 + idx,
      precisionNote: !placeInfo?.wkt
        ? `Exhibition venue "${label}" geocoded from activity label (no WKT defined_by).`
        : undefined,
    });
  });

  // 5. Current Location (`current_location`, falling back to `current_owner` institution if internal storage)
  if (doc.current_location) {
    const locInfo = resolvePlace(doc.current_location);
    const ownerLabel = Array.isArray(doc.current_owner)
      ? getLabel(doc.current_owner[0], '')
      : '';

    if (locInfo) {
      const displayPlace =
        !locInfo.wkt && locInfo.isStorage && ownerLabel
          ? `${locInfo.label} — ${ownerLabel}`
          : locInfo.label;

      pushEvent({
        id: `${doc.id || 'obj'}-current-location`,
        title: 'Current Repository Location',
        category: 'current_location',
        timespan: { _label: 'Present' },
        placeLabel: displayPlace,
        placeUri: locInfo.uri,
        wkt: locInfo.wkt,
        actors: Array.isArray(doc.current_owner)
          ? doc.current_owner.map((o) => getLabel(o))
          : [],
        description: getDescription(doc.current_location),
        images: [...locInfo.images, ...objectImages],
        defaultOrder: 999999,
        precisionNote: !locInfo.wkt
          ? `Current location "${displayPlace}" has no WKT defined_by; resolved via institution/place name.`
          : undefined,
      });
    }
  }

  const sorted = rawEvents
    .sort((a, b) => a.sortTimestamp - b.sortTimestamp)
    .map((ev, index) => ({
      ...ev,
      index,
      images: ev.images.length > 0 ? ev.images : objectImages.slice(0, 1),
    }));

  return {
    objectId: doc.id || 'urn:linked-art:object',
    objectLabel,
    objectSummary: getDescription(doc),
    heroImage: objectImages[0],
    events: sorted,
    warnings: Array.from(new Set(warnings)),
  };
}

/**
 * Resolves any remaining text-only places that were not in the built-in gazetteer
 * via Nominatim geocoding, returning an updated trail object.
 */
export async function enrichTrailWithGeocoding(trail) {
  let updated = false;
  const nextEvents = await Promise.all(
    trail.events.map(async (ev) => {
      if (Array.isArray(ev.coordinates) && ev.coordinates.length === 2) {
        return ev;
      }
      const coords = await geocodePlaceName(ev.placeLabel);
      if (coords) {
        updated = true;
        return { ...ev, coordinates: coords };
      }
      return ev;
    })
  );

  if (!updated) return trail;
  return { ...trail, events: nextEvents };
}