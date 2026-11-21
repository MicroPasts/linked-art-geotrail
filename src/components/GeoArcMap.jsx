import React, { useEffect, useMemo, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { buildBezierArc, sliceArcAtProgress } from '../lib/arcGeometry';
import { getLightweightImageUrl } from '../lib/imageOptimizer';

const CATEGORY_COLORS = {
  production: '#d97706',
  discovery: '#059669',
  provenance: '#0284c7',
  exhibition: '#9333ea',
  current_location: '#e11d48',
  other: '#64748b',
};

const MAP_STYLES = {
  dark: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  light: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
};

const DEFAULT_ZOOM = 6;

function ensureGeoTrailLayers(map, isLight) {
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
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
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
}) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const popupRef = useRef(null);
  const hasCenteredStepRef = useRef(false);
  const lastCenteredKeyRef = useRef(null);
  const currentStyleUrlRef = useRef(null);
  const isReplacingPopupRef = useRef(false);
  const [styleReady, setStyleReady] = useState(0);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [popupRequest, setPopupRequest] = useState(0);

  const isLight = theme === 'light';
  const targetStyleUrl = MAP_STYLES[isLight ? 'light' : 'dark'];

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

  // While animating from leg index `i` (0..N-2) toward `i+1`, the moving target is `plottableEvents[i + 1]`;
  // otherwise the focused stop is `plottableEvents[activeLegIndex]`.
  const targetEvent = useMemo(() => {
    if (plottableEvents.length === 0) return null;
    if (isPlaying && activeLegIndex < plottableEvents.length - 1) {
      return plottableEvents[activeLegIndex + 1];
    }
    const selectedOrig = events?.[Math.min(activeLegIndex, (events?.length || 1) - 1)];
    return (
      plottableEvents.find((ev) => ev.index === selectedOrig?.index) ||
      plottableEvents[Math.min(activeLegIndex, plottableEvents.length - 1)]
    );
  }, [events, plottableEvents, activeLegIndex, isPlaying]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    currentStyleUrlRef.current = targetStyleUrl;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: targetStyleUrl,
      center: plottableEvents[0]?.coordinates || [5, 46],
      zoom: DEFAULT_ZOOM,
      pitch: 24,
      attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'top-right');

    const handleReady = () => {
      ensureGeoTrailLayers(map, isLight);
      setStyleReady((n) => n + 1);
    };

    map.on('load', handleReady);
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
      setStyleReady(0);
    };
    const handleContextRestored = () => {
      ensureGeoTrailLayers(map, isLight);
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
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0) return;
    if (currentStyleUrlRef.current === targetStyleUrl) return;

    currentStyleUrlRef.current = targetStyleUrl;
    setStyleReady(0);
    map.setStyle(targetStyleUrl);
  }, [targetStyleUrl, styleReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0) return;

    ensureGeoTrailLayers(map, isLight);
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
        .filter((ev) => ev.polygon && ev.polygon.length > 0)
        .map((ev) => ({
          type: 'Feature',
          properties: { title: ev.placeLabel },
          geometry: { type: 'Polygon', coordinates: ev.polygon },
        })),
    });

    if (plottableEvents.length > 0 && !hasCenteredStepRef.current) {
      map.jumpTo({
        center: plottableEvents[0].coordinates,
        zoom: DEFAULT_ZOOM,
      });
    }
  }, [plottableEvents, legArcs, isLight, styleReady]);

  // Center camera smoothly on target stop whenever the target changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0 || !targetEvent) return;

    const focusKey = `${targetEvent.id ?? targetEvent.index}:${targetEvent.coordinates.join(',')}:${isPlaying ? 'play' : 'idle'}`;
    if (lastCenteredKeyRef.current === focusKey) return;

    const isInitialOrigin = activeLegIndex === 0 && !isPlaying && !hasCenteredStepRef.current;
    lastCenteredKeyRef.current = focusKey;

    if (isInitialOrigin) {
      map.jumpTo({
        center: targetEvent.coordinates,
        zoom: DEFAULT_ZOOM,
      });
    } else {
      hasCenteredStepRef.current = true;
      map.easeTo({
        center: targetEvent.coordinates,
        zoom: DEFAULT_ZOOM,
        duration: 1200,
        essential: true,
      });
    }
  }, [activeLegIndex, isPlaying, targetEvent, styleReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0 || !targetEvent) return;

    if (popupDismissed) {
      isReplacingPopupRef.current = true;
      popupRef.current?.remove();
      popupRef.current = null;
      isReplacingPopupRef.current = false;
      return;
    }

    isReplacingPopupRef.current = true;
    popupRef.current?.remove();
    isReplacingPopupRef.current = false;

    const rawImg = targetEvent.images?.[0];
    const lightUrl = rawImg ? getLightweightImageUrl(rawImg.url, { maxWidth: 420 }) : '';
    const safeLabel = String(rawImg?.label || targetEvent.title).replace(/"/g, '&quot;');

    const imgHtml = lightUrl
      ? `<div class="w-full h-32 overflow-hidden ${
          isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
        } rounded-t-xl border-b">
           <img
             data-popup-img
             src="${lightUrl}"
             alt="${safeLabel}"
             loading="lazy"
             decoding="async"
             class="w-full h-full object-cover block"
           />
         </div>`
      : '';

    const html = `
      <div class="w-[264px] max-w-full overflow-hidden ${
        isLight ? 'bg-white text-slate-900' : 'bg-slate-900 text-slate-100'
      }">
        ${imgHtml}
        <div class="p-3">
          <div class="text-[11px] font-semibold uppercase tracking-wider ${
            isLight ? 'text-sky-700' : 'text-sky-400'
          }">${targetEvent.dateDisplay}</div>
          <div class="text-sm font-semibold mt-0.5 line-clamp-2">${targetEvent.title}</div>
          <div class="text-xs ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          } mt-0.5 truncate">${targetEvent.placeLabel}</div>
        </div>
      </div>
    `;

    const popup = new maplibregl.Popup({
      offset: 14,
      maxWidth: '272px',
      closeButton: true,
      closeOnClick: false,
    })
      .setLngLat(targetEvent.coordinates)
      .setHTML(html)
      .addTo(map);

    popup.on('close', () => {
      if (!isReplacingPopupRef.current) {
        setPopupDismissed(true);
      }
    });

    const popupEl = popup.getElement();
    const popupImg = popupEl?.querySelector('img[data-popup-img]');
    if (popupImg && rawImg?.url) {
      popupImg.addEventListener('error', () => {
        if (popupImg.src !== rawImg.url) {
          popupImg.src = rawImg.url;
        }
      });
    }

    popupRef.current = popup;
  }, [targetEvent, isLight, styleReady, popupDismissed, popupRequest]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleReady === 0 || plottableEvents.length === 0) return;

    ensureGeoTrailLayers(map, isLight);
    const trailSource = map.getSource('active-trail');
    const headSource = map.getSource('transit-head');
    const nodesSource = map.getSource('event-nodes');
    if (!trailSource || !headSource || !nodesSource) return;

    const activePlotIdx = Math.min(activeLegIndex, plottableEvents.length - 1);

    nodesSource.setData({
      type: 'FeatureCollection',
      features: plottableEvents.map((ev, plotIdx) => ({
        type: 'Feature',
        properties: {
          index: plotIdx,
          origIndex: ev.index,
          placeLabel: ev.placeLabel,
          color: CATEGORY_COLORS[ev.category] || CATEGORY_COLORS.other,
          isActive: plotIdx === activePlotIdx,
        },
        geometry: { type: 'Point', coordinates: ev.coordinates },
      })),
    });

    const trailFeatures = [];

    // Draw all completed arcs prior to the active leg
    for (let i = 0; i < activePlotIdx && i < legArcs.length; i++) {
      trailFeatures.push({
        type: 'Feature',
        properties: { color: CATEGORY_COLORS[legArcs[i].to.category] || CATEGORY_COLORS.other },
        geometry: { type: 'LineString', coordinates: legArcs[i].coords },
      });
    }

    let headCoord = plottableEvents[activePlotIdx].coordinates;

    // Draw the currently advancing arc from `activePlotIdx` -> `activePlotIdx + 1`
    if (activePlotIdx < legArcs.length && (isPlaying || legProgress > 0)) {
      const currentLeg = legArcs[activePlotIdx];
      const { trail, head } = sliceArcAtProgress(currentLeg.coords, legProgress);
      headCoord = head;
      if (trail.length >= 2) {
        trailFeatures.push({
          type: 'Feature',
          properties: { color: CATEGORY_COLORS[currentLeg.to.category] || CATEGORY_COLORS.other },
          geometry: { type: 'LineString', coordinates: trail },
        });
      }
    }

    trailSource.setData({ type: 'FeatureCollection', features: trailFeatures });
    headSource.setData({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: { type: 'Point', coordinates: headCoord },
        },
      ],
    });
  }, [activeLegIndex, legProgress, isPlaying, plottableEvents, legArcs, isLight, styleReady]);

  return <div ref={containerRef} className="w-full h-full" />;
}

export const GeoArcMap = React.memo(GeoArcMapComponent);