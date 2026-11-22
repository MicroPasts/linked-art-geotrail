import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { LocateFixed } from 'lucide-react';
import { Map, NavigationControl, Popup, setWorkerUrl } from 'maplibre-gl';
import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
import { buildBezierArc, sliceArcAtProgress } from '../lib/arcGeometry';
import { getLightweightImageUrl } from '../lib/imageOptimizer';
import { componentStyle } from '../lib/componentStyles';
import { safeHttpUrl } from '../lib/safeUrl';

const CATEGORY_COLORS = {
  production: '#d97706',
  discovery: '#059669',
  provenance: '#0284c7',
  exhibition: '#9333ea',
  current_location: '#e11d48',
  other: '#64748b',
};

const CATEGORY_LABELS = {
  production: 'Production',
  discovery: 'Discovery',
  provenance: 'Provenance',
  exhibition: 'Exhibition',
  current_location: 'Current location',
  other: 'Other',
};

function categoryColor(category, overrides) {
  return overrides?.[category] ?? CATEGORY_COLORS[category] ?? overrides?.other ?? CATEGORY_COLORS.other;
}

const MAP_STYLES = {
  dark: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  light: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
};

const OPENFREEMAP_GLYPHS = 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf';
const MIERUNE_MONO = {
  version: 8,
  glyphs: OPENFREEMAP_GLYPHS,
  sources: {
    mierune: {
      type: 'raster',
      tiles: ['https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: 'Map tiles &copy; <a href="https://mierune.co.jp/">MIERUNE</a> (CC BY); data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  },
  layers: [{ id: 'mierune-mono', type: 'raster', source: 'mierune' }],
};

const BASEMAPS = {
  positron: { label: 'CARTO Positron', style: MAP_STYLES.light, isLight: true },
  dark: { label: 'CARTO Dark Matter', style: MAP_STYLES.dark, isLight: false },
  voyager: { label: 'CARTO Voyager', style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json', isLight: true },
  mierune: { label: 'MIERUNE Mono', style: MIERUNE_MONO, isLight: true, font: ['Noto Sans Bold'] },
  fiord: { label: 'OpenFreeMap Fiord', style: 'https://tiles.openfreemap.org/styles/fiord', isLight: false, font: ['Noto Sans Bold'] },
  liberty: { label: 'OpenFreeMap Liberty', style: 'https://tiles.openfreemap.org/styles/liberty', isLight: true, font: ['Noto Sans Bold'] },
};

const DEFAULT_ZOOM = 6;
const EMPTY_APPEARANCE = {};
const DEFAULT_FONT = ['Open Sans Bold', 'Arial Unicode MS Bold'];

setWorkerUrl(maplibreWorkerUrl);

function ensureGeoTrailLayers(map, isLight, font) {
  if (!map.getSource('place-polygons')) {
    map.addSource('place-polygons', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    });
  }
  if (!map.getLayer('place-polygons-fill')) {
    map.addLayer({
      id: 'place-polygons-fill',
      type: 'fill',
      source: 'place-polygons',
      paint: { 'fill-color': '#10b981', 'fill-opacity': 0.16 },
    });
  }
  if (!map.getLayer('place-polygons-outline')) {
    map.addLayer({
      id: 'place-polygons-outline',
      type: 'line',
      source: 'place-polygons',
      paint: { 'line-color': '#059669', 'line-width': 1.5, 'line-dasharray': [2, 2] },
    });
  }

  if (!map.getSource('ghost-arcs')) {
    map.addSource('ghost-arcs', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    });
  }
  if (!map.getLayer('ghost-arcs-layer')) {
    map.addLayer({
      id: 'ghost-arcs-layer',
      type: 'line',
      source: 'ghost-arcs',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': isLight ? '#94a3b8' : '#475569',
        'line-width': 2,
        'line-dasharray': [2, 3],
        'line-opacity': 0.65,
      },
    });
  }

  if (!map.getSource('active-trail')) {
    map.addSource('active-trail', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    });
  }
  if (!map.getLayer('active-trail-glow')) {
    map.addLayer({
      id: 'active-trail-glow',
      type: 'line',
      source: 'active-trail',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': '#0284c7', 'line-width': 8, 'line-opacity': 0.22, 'line-blur': 4 },
    });
  }
  if (!map.getLayer('active-trail-line')) {
    map.addLayer({
      id: 'active-trail-line',
      type: 'line',
      source: 'active-trail',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': ['coalesce', ['get', 'color'], '#0284c7'],
        'line-width': 3.5,
        'line-opacity': 0.95,
      },
    });
  }

  if (!map.getSource('event-nodes')) {
    map.addSource('event-nodes', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    });
  }
  if (!map.getLayer('event-nodes-pulse')) {
    map.addLayer({
      id: 'event-nodes-pulse',
      type: 'circle',
      source: 'event-nodes',
      filter: ['==', ['get', 'pulseOwner'], true],
      paint: {
        'circle-radius': 19,
        'circle-radius-transition': { duration: 0 },
        'circle-color': ['get', 'color'],
        'circle-opacity': 0.45,
        'circle-opacity-transition': { duration: 0 },
      },
    });
  }
  if (!map.getLayer('event-nodes-circle')) {
    map.addLayer({
      id: 'event-nodes-circle',
      type: 'circle',
      source: 'event-nodes',
      paint: {
        'circle-radius': ['case', ['boolean', ['get', 'isActive'], false], 10, 7],
        'circle-color': ['get', 'color'],
        'circle-stroke-width': 2.5,
        'circle-stroke-color': isLight ? '#ffffff' : '#020617',
      },
    });
  }
  if (!map.getLayer('event-nodes-label')) {
    map.addLayer({
      id: 'event-nodes-label',
      type: 'symbol',
      source: 'event-nodes',
      layout: {
        'text-field': [
          'concat',
          ['to-string', ['+', ['get', 'index'], 1]],
          '. ',
          ['get', 'placeLabel'],
        ],
        'text-size': 12,
        'text-offset': [0, 1.35],
        'text-anchor': 'top',
        'text-font': font,
      },
      paint: {
        'text-color': isLight ? '#0f172a' : '#f8fafc',
        'text-halo-color': isLight ? '#ffffff' : '#020617',
        'text-halo-width': 1.5,
      },
    });
  }

  if (!map.getSource('transit-head')) {
    map.addSource('transit-head', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    });
  }
  if (!map.getLayer('transit-head-halo')) {
    map.addLayer({
      id: 'transit-head-halo',
      type: 'circle',
      source: 'transit-head',
      paint: { 'circle-radius': 14, 'circle-color': '#0284c7', 'circle-opacity': 0.25 },
    });
  }
  if (!map.getLayer('transit-head-core')) {
    map.addLayer({
      id: 'transit-head-core',
      type: 'circle',
      source: 'transit-head',
      paint: {
        'circle-radius': 5.5,
        'circle-color': '#ffffff',
        'circle-stroke-width': 2.5,
        'circle-stroke-color': '#0284c7',
      },
    });
  }
}

export function GeoArcMapComponent({
  events,
  activeLegIndex = 0,
  legProgress = 0,
  isPlaying = false,
  onSelectEvent,
  theme = 'dark',
  classNames,
  styles,
  mapStyles,
  mapAppearance = EMPTY_APPEARANCE,
}) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const popupRef = useRef(null);
  const hasCenteredStepRef = useRef(false);
  const lastCenteredKeyRef = useRef(null);
  const currentStyleUrlRef = useRef(null);
  const currentStyleThemeRef = useRef(null);
  const currentMapLightRef = useRef(false);
  const currentMapFontRef = useRef(DEFAULT_FONT);
  const isStyleReadyRef = useRef(false);
  const isReplacingPopupRef = useRef(false);
  const [styleReady, setStyleReady] = useState(0);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [popupRequest, setPopupRequest] = useState(0);
  const [legendOpen, setLegendOpen] = useState(true);
  const [basemap, setBasemap] = useState('auto');
  const legendId = useId();

  const isLight = theme === 'light';
  const selectedBasemap = BASEMAPS[basemap];
  const targetStyleUrl = selectedBasemap?.style ?? mapStyles?.[theme] ?? MAP_STYLES[isLight ? 'light' : 'dark'];
  const isLightMap = selectedBasemap?.isLight ?? isLight;
  const mapFont = selectedBasemap?.font ?? DEFAULT_FONT;
  const categoryColors = mapAppearance.categoryColors;

  const plottableEvents = useMemo(
    () =>
      (Array.isArray(events) ? events : []).filter(
        (ev) => Array.isArray(ev.coordinates) && ev.coordinates.length === 2
      ),
    [events]
  );

  const legArcs = useMemo(() => {
    const arcs = [];
    for (let i = 0; i < plottableEvents.length - 1; i++) {
      arcs.push({
        from: plottableEvents[i],
        to: plottableEvents[i + 1],
        coords: buildBezierArc(
          plottableEvents[i].coordinates,
          plottableEvents[i + 1].coordinates,
          90,
          0.22
        ),
      });
    }
    return arcs;
  }, [plottableEvents]);

  const activePlotIdx = useMemo(() => {
    let index = -1;
    for (let i = 0; i < plottableEvents.length; i++) {
      if (plottableEvents[i].index <= activeLegIndex) index = i;
    }
    return index;
  }, [plottableEvents, activeLegIndex]);
  const visibleNodes = useMemo(() => {
    const visible = plottableEvents.slice(0, activePlotIdx + 1);
    const groups = new globalThis.Map();
    visible.forEach((event, index) => {
      const key = event.coordinates.join(',');
      const group = groups.get(key) ?? { count: 0, lastIndex: index };
      group.count += 1;
      group.lastIndex = index;
      groups.set(key, group);
    });
    return visible.map((event, index) => {
      const group = groups.get(event.coordinates.join(','));
      return { event, index, pulseOwner: group.count > 1 && group.lastIndex === index };
    });
  }, [plottableEvents, activePlotIdx]);
  const hasSharedPlace = visibleNodes.some((node) => node.pulseOwner);
  const currentEvent = plottableEvents[activePlotIdx] ?? null;
  const nextEvent = plottableEvents[activePlotIdx + 1];
  const isDrawingLeg = activePlotIdx >= 0 && nextEvent?.index === activeLegIndex + 1;
  const cameraEvent = isPlaying && isDrawingLeg ? nextEvent : currentEvent;

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    currentStyleUrlRef.current = targetStyleUrl;
    currentStyleThemeRef.current = theme;
    currentMapLightRef.current = isLightMap;
    currentMapFontRef.current = mapFont;

    const map = new Map({
      container: containerRef.current,
      style: targetStyleUrl,
      center: plottableEvents[0]?.coordinates || [5, 46],
      zoom: DEFAULT_ZOOM,
      pitch: 24,
      attributionControl: true,
    });

    map.addControl(new NavigationControl({ showCompass: true }), 'top-right');

    const handleReady = () => {
      ensureGeoTrailLayers(map, currentMapLightRef.current, currentMapFontRef.current);
      isStyleReadyRef.current = true;
      setStyleReady((n) => n + 1);
    };

    map.on('style.load', handleReady);

    map.on('error', (err) => {
      const msg = err?.error?.message || '';
      if (msg && msg !== 'Load failed') {
        console.warn('MapLibre warning:', msg);
      }
    });

    map.on('click', 'event-nodes-circle', (e) => {
      const feature = e.features?.[0];
      if (!feature?.properties) return;
      const origIdx = Number(feature.properties.origIndex);
      setPopupDismissed(false);
      setPopupRequest((request) => request + 1);
      onSelectEvent?.(Number.isFinite(origIdx) ? origIdx : Number(feature.properties.index));
    });

    map.on('mouseenter', 'event-nodes-circle', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'event-nodes-circle', () => {
      map.getCanvas().style.cursor = '';
    });

    const canvas = map.getCanvas();
    const handleContextLost = (e) => {
      e.preventDefault();
      isStyleReadyRef.current = false;
    };
    const handleContextRestored = () => {
      ensureGeoTrailLayers(map, currentMapLightRef.current, currentMapFontRef.current);
      isStyleReadyRef.current = true;
      setStyleReady((n) => n + 1);
    };

    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });
    resizeObserver.observe(containerRef.current);

    mapRef.current = map;
    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      popupRef.current?.remove();
      popupRef.current = null;
      map.remove();
      mapRef.current = null;
      currentStyleUrlRef.current = null;
      currentStyleThemeRef.current = null;
      isStyleReadyRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0) return;
    if (currentStyleUrlRef.current === targetStyleUrl && currentStyleThemeRef.current === theme) return;

    currentStyleUrlRef.current = targetStyleUrl;
    currentStyleThemeRef.current = theme;
    currentMapLightRef.current = isLightMap;
    currentMapFontRef.current = mapFont;
    isStyleReadyRef.current = false;
    // Style diffing removes custom layers without emitting style.load.
    map.setStyle(targetStyleUrl, { diff: false });
  }, [targetStyleUrl, theme, isLightMap, mapFont, styleReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isStyleReadyRef.current || styleReady === 0 ||
        currentStyleUrlRef.current !== targetStyleUrl || currentStyleThemeRef.current !== theme) return;

    const paint = [
      ['ghost-arcs-layer', 'line-color', mapAppearance.ghostColor ?? (isLightMap ? '#94a3b8' : '#475569')],
      ['active-trail-glow', 'line-color', mapAppearance.transitColor ?? '#0284c7'],
      ['transit-head-halo', 'circle-color', mapAppearance.transitColor ?? '#0284c7'],
      ['transit-head-core', 'circle-stroke-color', mapAppearance.transitColor ?? '#0284c7'],
      ['place-polygons-fill', 'fill-color', mapAppearance.polygonFillColor ?? '#10b981'],
      ['place-polygons-outline', 'line-color', mapAppearance.polygonOutlineColor ?? '#059669'],
    ];
    paint.forEach(([layer, property, value]) => map.setPaintProperty(layer, property, value));
  }, [mapAppearance, isLightMap, targetStyleUrl, theme, styleReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0 || !isStyleReadyRef.current ||
        currentStyleUrlRef.current !== targetStyleUrl || currentStyleThemeRef.current !== theme) return;

    ensureGeoTrailLayers(map, isLightMap, mapFont);
    const ghostSource = map.getSource('ghost-arcs');
    const polySource = map.getSource('place-polygons');
    if (!ghostSource || !polySource) return;

    ghostSource.setData({
      type: 'FeatureCollection',
      features: legArcs.map((leg) => ({
        type: 'Feature',
        properties: {},
        geometry: { type: 'LineString', coordinates: leg.coords },
      })),
    });

    polySource.setData({
      type: 'FeatureCollection',
      features: plottableEvents
        .filter((ev) => ev.index <= activeLegIndex && ev.polygon && ev.polygon.length > 0)
        .map((ev) => ({
          type: 'Feature',
          properties: { title: ev.placeLabel },
          geometry: { type: 'Polygon', coordinates: ev.polygon },
        })),
    });

  }, [plottableEvents, legArcs, activeLegIndex, isLightMap, mapFont, targetStyleUrl, theme, styleReady]);

  // Center camera smoothly on target stop whenever the target changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0 || !isStyleReadyRef.current ||
        currentStyleUrlRef.current !== targetStyleUrl || currentStyleThemeRef.current !== theme || !cameraEvent) return;

    const focusKey = `${cameraEvent.id ?? cameraEvent.index}:${cameraEvent.coordinates.join(',')}:${isPlaying ? 'play' : 'idle'}`;
    if (lastCenteredKeyRef.current === focusKey) return;

    const isInitialOrigin = activeLegIndex === 0 && !isPlaying && !hasCenteredStepRef.current;
    lastCenteredKeyRef.current = focusKey;

    if (isInitialOrigin) {
      map.jumpTo({
        center: cameraEvent.coordinates,
        zoom: DEFAULT_ZOOM,
      });
    } else {
      hasCenteredStepRef.current = true;
      map.easeTo({
        center: cameraEvent.coordinates,
        zoom: DEFAULT_ZOOM,
        duration: 1200,
        essential: true,
      });
    }
  }, [activeLegIndex, isPlaying, cameraEvent, targetStyleUrl, theme, styleReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0 || !isStyleReadyRef.current ||
        currentStyleUrlRef.current !== targetStyleUrl || currentStyleThemeRef.current !== theme) return;

    if (popupDismissed || !currentEvent) {
      isReplacingPopupRef.current = true;
      popupRef.current?.remove();
      popupRef.current = null;
      isReplacingPopupRef.current = false;
      return;
    }

    isReplacingPopupRef.current = true;
    popupRef.current?.remove();
    isReplacingPopupRef.current = false;

    const rawImg = currentEvent.images?.[0];
    const imageUrl = safeHttpUrl(rawImg?.url);
    const popupBody = document.createElement('div');
    popupBody.className = `geotrail-popup w-[264px] max-w-full overflow-hidden ${
      isLight ? 'bg-white text-slate-900' : 'bg-slate-900 text-slate-100'
    }`;
    if (imageUrl) {
      const wrapper = document.createElement('div');
      wrapper.className = `w-full h-32 overflow-hidden rounded-t-xl border-b ${
        isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
      }`;
      const image = document.createElement('img');
      image.dataset.popupImg = '';
      image.src = getLightweightImageUrl(imageUrl, { maxWidth: 420 });
      image.alt = rawImg.label || currentEvent.title;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.className = 'w-full h-full object-cover block';
      wrapper.appendChild(image);
      popupBody.appendChild(wrapper);
    }

    const details = document.createElement('div');
    details.className = 'p-3';
    const date = document.createElement('div');
    date.className = `text-[11px] font-semibold uppercase tracking-wider ${isLight ? 'text-sky-700' : 'text-sky-400'}`;
    date.textContent = currentEvent.dateDisplay;
    const title = document.createElement('div');
    title.className = 'text-sm font-semibold mt-0.5 line-clamp-2';
    title.textContent = currentEvent.title;
    const place = document.createElement('div');
    place.className = `text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'} mt-0.5 truncate`;
    place.textContent = currentEvent.placeLabel;
    details.append(date, title, place);
    popupBody.appendChild(details);

    const popup = new Popup({
      offset: 14,
      maxWidth: '272px',
      closeButton: true,
      closeOnClick: false,
    })
      .setLngLat(currentEvent.coordinates)
      .setDOMContent(popupBody)
      .addTo(map);

    popup.on('close', () => {
      if (!isReplacingPopupRef.current) {
        setPopupDismissed(true);
      }
    });

    const popupEl = popup.getElement();
    if (popupBody) {
      if (classNames?.popup) {
        popupBody.classList.add(...classNames.popup.split(/\s+/).filter(Boolean));
      }
      if (styles?.popup) {
        for (const [property, value] of Object.entries(styles.popup)) {
          if (property.startsWith('--')) popupBody.style.setProperty(property, value);
          else popupBody.style[property] = value;
        }
      }
    }
    const popupImg = popupEl?.querySelector('img[data-popup-img]');
    if (popupImg && imageUrl) {
      popupImg.addEventListener('error', () => {
        if (popupImg.src !== imageUrl) {
          popupImg.src = imageUrl;
        }
      });
    }

    popupRef.current = popup;
  }, [currentEvent, isLight, targetStyleUrl, theme, styleReady, popupDismissed, popupRequest, classNames?.popup, styles?.popup]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0 || !isStyleReadyRef.current ||
        currentStyleUrlRef.current !== targetStyleUrl || currentStyleThemeRef.current !== theme) return;

    ensureGeoTrailLayers(map, isLightMap, mapFont);
    const nodesSource = map.getSource('event-nodes');
    if (!nodesSource) return;

    nodesSource.setData({
      type: 'FeatureCollection',
      features: visibleNodes.map(({ event: ev, index: plotIdx, pulseOwner }) => ({
        type: 'Feature',
        properties: {
          index: plotIdx,
          origIndex: ev.index,
          placeLabel: ev.placeLabel,
          color: categoryColor(ev.category, categoryColors),
          isActive: plotIdx === activePlotIdx,
          pulseOwner,
        },
        geometry: { type: 'Point', coordinates: ev.coordinates },
      })),
    });
  }, [activePlotIdx, visibleNodes, isLightMap, mapFont, targetStyleUrl, theme, styleReady, categoryColors]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !hasSharedPlace || styleReady === 0 || !isStyleReadyRef.current ||
        currentStyleUrlRef.current !== targetStyleUrl || currentStyleThemeRef.current !== theme) return;

    const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    let frameId;
    let lastUpdate = 0;
    const setPulse = (radius, opacity) => {
      if (!isStyleReadyRef.current || !map.getLayer('event-nodes-pulse')) return;
      map.setPaintProperty('event-nodes-pulse', 'circle-radius', radius);
      map.setPaintProperty('event-nodes-pulse', 'circle-opacity', opacity);
    };
    const animate = (time) => {
      if (time - lastUpdate >= 33) {
        const progress = (time % 1600) / 1600;
        setPulse(16 + progress * 20, 0.7 * (1 - progress));
        lastUpdate = time;
      }
      frameId = requestAnimationFrame(animate);
    };
    const updateMotion = () => {
      cancelAnimationFrame(frameId);
      if (motion?.matches) setPulse(19, 0.45);
      else frameId = requestAnimationFrame(animate);
    };
    updateMotion();
    motion?.addEventListener('change', updateMotion);
    return () => {
      cancelAnimationFrame(frameId);
      motion?.removeEventListener('change', updateMotion);
    };
  }, [hasSharedPlace, targetStyleUrl, theme, styleReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0 || !isStyleReadyRef.current ||
        currentStyleUrlRef.current !== targetStyleUrl || currentStyleThemeRef.current !== theme) return;

    ensureGeoTrailLayers(map, isLightMap, mapFont);
    const trailSource = map.getSource('active-trail');
    const headSource = map.getSource('transit-head');
    if (!trailSource || !headSource) return;

    const trailFeatures = [];

    // Draw all completed arcs prior to the active leg
    for (let i = 0; i < activePlotIdx && i < legArcs.length; i++) {
      trailFeatures.push({
        type: 'Feature',
        properties: { color: categoryColor(legArcs[i].to.category, categoryColors) },
        geometry: { type: 'LineString', coordinates: legArcs[i].coords },
      });
    }

    let headCoord = currentEvent?.coordinates;

    // Draw the currently advancing arc from `activePlotIdx` -> `activePlotIdx + 1`
    if (isDrawingLeg && (isPlaying || legProgress > 0)) {
      const currentLeg = legArcs[activePlotIdx];
      const { trail, head } = sliceArcAtProgress(currentLeg.coords, legProgress);
      headCoord = head;
      if (trail.length >= 2) {
        trailFeatures.push({
          type: 'Feature',
          properties: { color: categoryColor(currentLeg.to.category, categoryColors) },
          geometry: { type: 'LineString', coordinates: trail },
        });
      }
    }

    trailSource.setData({ type: 'FeatureCollection', features: trailFeatures });
    headSource.setData({
      type: 'FeatureCollection',
      features: headCoord ? [
        {
          type: 'Feature',
          properties: {},
          geometry: { type: 'Point', coordinates: headCoord },
        },
      ] : [],
    });
  }, [activePlotIdx, currentEvent, isDrawingLeg, legProgress, isPlaying, plottableEvents, legArcs, isLightMap, mapFont, targetStyleUrl, theme, styleReady, categoryColors]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        {...componentStyle('map', classNames, styles)}
        className={`${componentStyle('map', classNames, styles).className} w-full h-full`}
      />
      <label className={`absolute top-3 left-3 z-10 flex items-center gap-2 rounded-lg border px-2 py-1.5 shadow-lg text-xs ${
        isLight ? 'bg-white text-slate-900 border-slate-300' : 'bg-slate-900 text-slate-100 border-slate-700'
      }`}>
        <span>Map style</span>
        <select
          {...componentStyle('basemapSelect', classNames, styles)}
          className={`${componentStyle('basemapSelect', classNames, styles).className} max-w-[10rem] bg-transparent font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500`}
          value={basemap}
          onChange={(event) => setBasemap(event.target.value)}
        >
          <option value="auto" className="text-slate-900">Follow theme</option>
          {Object.entries(BASEMAPS).map(([key, option]) => (
            <option key={key} value={key} className="text-slate-900">{option.label}</option>
          ))}
        </select>
      </label>
      <button
        type="button"
        {...componentStyle('recenterButton', classNames, styles)}
        className={`${componentStyle('recenterButton', classNames, styles).className} absolute top-28 right-2.5 z-10 flex h-8 w-8 items-center justify-center rounded border shadow-md disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 ${
          isLight ? 'bg-white text-slate-900 border-slate-300 hover:bg-slate-100' : 'bg-slate-900 text-slate-100 border-slate-700 hover:bg-slate-800'
        }`}
        aria-label="Recenter map on current stop"
        title="Recenter map on current stop"
        disabled={!currentEvent || styleReady === 0}
        onClick={() => mapRef.current?.easeTo({ center: currentEvent.coordinates, duration: 800 })}
      >
        <LocateFixed size={18} aria-hidden="true" />
      </button>
      <aside
        {...componentStyle('legend', classNames, styles)}
        aria-label="Map legend"
        className={`${componentStyle('legend', classNames, styles).className} absolute bottom-3 left-3 z-10 rounded-lg border shadow-lg text-xs ${
          isLight ? 'bg-white text-slate-900 border-slate-300' : 'bg-slate-900 text-slate-100 border-slate-700'
        }`}
      >
        <button
          type="button"
          {...componentStyle('legendButton', classNames, styles)}
          className={`${componentStyle('legendButton', classNames, styles).className} flex items-center justify-between gap-4 w-full px-3 py-2 font-semibold`}
          aria-expanded={legendOpen}
          aria-controls={legendId}
          onClick={() => setLegendOpen((open) => !open)}
        >
          <span>Map legend</span>
          <span aria-hidden="true">{legendOpen ? '−' : '+'}</span>
        </button>
        <div
          id={legendId}
          hidden={!legendOpen}
          {...componentStyle('legendContent', classNames, styles)}
          className={`${componentStyle('legendContent', classNames, styles).className} max-h-[35vh] overflow-y-auto`}
        >
          <ul className="px-3 pb-3 space-y-1.5">
            {Object.entries(CATEGORY_LABELS).map(([category, label]) => (
              <li key={category} className="flex items-center gap-2">
                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: categoryColor(category, categoryColors) }} />
                {label}
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2.5 border-t-2 border-dashed" style={{ borderColor: mapAppearance.ghostColor ?? (isLightMap ? '#94a3b8' : '#475569') }} />
              Route preview
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor: mapAppearance.transitColor ?? '#0284c7' }} />
              Moving position
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2.5 h-2.5 border" style={{ backgroundColor: mapAppearance.polygonFillColor ?? '#10b981', borderColor: mapAppearance.polygonOutlineColor ?? '#059669' }} />
              Place area
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export const GeoArcMap = React.memo(GeoArcMapComponent);