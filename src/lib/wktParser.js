/**
 * Parses WKT POINT, POLYGON, and MULTIPOLYGON strings into [lng, lat] coordinates
 * as used by Linked Art `Place.defined_by` (WGS84 lon-lat order).
 */
export function parseWKT(wkt) {
  if (!wkt || typeof wkt !== 'string') return null;

  const cleaned = wkt.replace(/^<[^>]+>\s*/i, '').trim();

  // POINT (lng lat)
  const pointMatch = cleaned.match(/^POINT\s*\(\s*([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)\s*\)$/i);
  if (pointMatch) {
    const lng = parseFloat(pointMatch[1]);
    const lat = parseFloat(pointMatch[2]);
    if (Number.isFinite(lng) && Number.isFinite(lat)) {
      return { centroid: [lng, lat] };
    }
  }

  // POLYGON ((lng lat, lng lat, ...))
  const polyMatch = cleaned.match(/^POLYGON\s*\(\((.+)\)\)$/i);
  if (polyMatch) {
    const rings = polyMatch[1].split(/\)\s*,\s*\(/).map((ringStr) =>
      ringStr
        .split(',')
        .map((pair) => {
          const [lngStr, latStr] = pair.trim().split(/\s+/);
          return [parseFloat(lngStr), parseFloat(latStr)];
        })
        .filter(([lng, lat]) => Number.isFinite(lng) && Number.isFinite(lat))
    );

    if (rings[0] && rings[0].length > 0) {
      return { centroid: computeCentroid(rings[0]), polygon: rings };
    }
  }

  // MULTIPOLYGON (((lng lat, ...)))
  const multiMatch = cleaned.match(/^MULTIPOLYGON\s*\(\(\((.+)\)\)\)$/i);
  if (multiMatch) {
    const firstPoly = multiMatch[1].split(/\)\)\s*,\s*\(\(/)[0];
    const coords = firstPoly
      .split(',')
      .map((pair) => {
        const [lngStr, latStr] = pair.trim().split(/\s+/);
        return [parseFloat(lngStr), parseFloat(latStr)];
      })
      .filter(([lng, lat]) => Number.isFinite(lng) && Number.isFinite(lat));

    if (coords.length > 0) {
      return { centroid: computeCentroid(coords), polygon: [coords] };
    }
  }

  return null;
}

function computeCentroid(ring) {
  let sumLng = 0;
  let sumLat = 0;
  const count = ring.length;
  for (const [lng, lat] of ring) {
    sumLng += lng;
    sumLat += lat;
  }
  return [sumLng / count, sumLat / count];
}