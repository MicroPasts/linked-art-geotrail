import React, { useEffect, useMemo, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import { buildBezierArc, sliceArcAtProgress } from '../lib/arcGeometry';
import { compressLoadedImageToBlobUrl, getLightweightImageUrl } from '../lib/imageOptimizer';

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

export function GeoArcMap({
  events,
  activeLegIndex = 0,
  legProgress = 0,
  onSelectEvent,
  theme = 'dark',
}) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const popupRef = useRef(null);
  const isLoadedRef = useRef(false);
  const hasStartedRef = useRef(false);

  const isLight = theme === 'light';

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

  // Initialize MapLibre GL once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP_STYLES[isLight ? 'light' : 'dark'],
      center: plottableEvents[0]?.coordinates || [5, 46],
      zoom: 13,
      pitch: 24,
      attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'top-right');

    map.on('load', () => {
      isLoadedRef.current = true;

      map.addSource('place-polygons', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      });
      map.addLayer({
        id: 'place-polygons-fill',
        type: 'fill',
        source: 'place-polygons',
        paint: { 'fill-color': '#10b981', 'fill-opacity': 0.16 },
      });
      map.addLayer({
        id: 'place-polygons-outline',
        type: 'line',
        source: 'place-polygons',
        paint: { 'line-color': '#059669', 'line-width': 1.5, 'line-dasharray': [2, 2] },
      });

      map.addSource('ghost-arcs', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      });
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

      map.addSource('active-trail', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      });
      map.addLayer({
        id: 'active-trail-glow',
        type: 'line',
        source: 'active-trail',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': '#0284c7', 'line-width': 8, 'line-opacity': 0.22, 'line-blur': 4 },
      });
      map.addLayer({
        id: 'active-trail-line',
        type: 'line',
        source: 'active-trail',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: {
          'line-color': ['coalesce', ['get', 'color'], '#0284c7'],
          'line-width': 3,
          'line-opacity': 0.95,
        },
      });

      map.addSource('event-nodes', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      });
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

      map.addSource('transit-head', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      });
      map.addLayer({
        id: 'transit-head-halo',
        type: 'circle',
        source: 'transit-head',
        paint: { 'circle-radius': 14, 'circle-color': '#0284c7', 'circle-opacity': 0.25 },
      });
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

      map.on('click', 'event-nodes-circle', (e) => {
        const feature = e.features?.[0];
        if (!feature?.properties) return;
        const origIdx = Number(feature.properties.origIndex);
        onSelectEvent?.(Number.isFinite(origIdx) ? origIdx : Number(feature.properties.index));
      });

      map.on('mouseenter', 'event-nodes-circle', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'event-nodes-circle', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
      isLoadedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Switch basemap style dynamically when theme changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isLoadedRef.current) return;
    map.setStyle(MAP_STYLES[isLight ? 'light' : 'dark']);
  }, [isLight]);

  // Sync static arc & polygon data (without auto-animating before user starts)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const syncStaticData = () => {
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

      if (plottableEvents.length > 0 && !hasStartedRef.current) {
        map.jumpTo({
          center: plottableEvents[0].coordinates,
          zoom: 13,
        });
      }
    };

    if (isLoadedRef.current) {
      syncStaticData();
    } else {
      map.once('load', syncStaticData);
    }
  }, [plottableEvents, legArcs]);

  // Focus & popup only once playback/stepping starts or user selects an event
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isLoadedRef.current || plottableEvents.length === 0) return;

    const shouldMove = activeLegIndex > 0 || legProgress > 0;
    if (!shouldMove && !hasStartedRef.current) {
      return;
    }
    hasStartedRef.current = true;

    const selectedOrig = events?.[Math.min(activeLegIndex, (events?.length || 1) - 1)];
    const activeEvent =
      plottableEvents.find((ev) => ev.index === selectedOrig?.index) ||
      plottableEvents[Math.min(activeLegIndex, plottableEvents.length - 1)];
    if (!activeEvent) return;

    map.easeTo({
      center: activeEvent.coordinates,
      zoom: 13,
      duration: 800,
    });

    popupRef.current?.remove();

    const rawImg = activeEvent.images?.[0];
    const lightUrl = rawImg ? getLightweightImageUrl(rawImg.url, { maxWidth: 420 }) : '';
    const safeLabel = String(rawImg?.label || activeEvent.title).replace(/"/g, '&quot;');

    const imgHtml = lightUrl
      ? `<div class="w-full h-32 overflow-hidden ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'} rounded-t-xl border-b">
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
      <div class="w-[264px] max-w-full overflow-hidden ${isLight ? 'bg-white text-slate-900' : 'bg-slate-900 text-slate-100'}">
        ${imgHtml}
        <div class="p-3">
          <div class="text-[11px] font-semibold uppercase tracking-wider ${isLight ? 'text-sky-700' : 'text-sky-400'}">${activeEvent.dateDisplay}</div>
          <div class="text-sm font-semibold mt-0.5 line-clamp-2">${activeEvent.title}</div>
          <div class="text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'} mt-0.5 truncate">${activeEvent.placeLabel}</div>
        </div>
      </div>
    `;

    const popup = new maplibregl.Popup({
      offset: 14,
      maxWidth: '272px',
      closeButton: true,
      closeOnClick: false,
    })
      .setLngLat(activeEvent.coordinates)
      .setHTML(html)
      .addTo(map);

    const popupEl = popup.getElement();
    const popupImg = popupEl?.querySelector('img[data-popup-img]');
    if (popupImg && rawImg?.url) {
      popupImg.addEventListener('load', () => {
        const compressed = compressLoadedImageToBlobUrl(popupImg, {
          maxWidth: 420,
          quality: 0.72,
        });
        if (compressed && compressed.length < popupImg.src.length) {
          popupImg.src = compressed;
        }
      });
      popupImg.addEventListener('error', () => {
        if (popupImg.src !== rawImg.url) {
          popupImg.src = rawImg.url;
        }
      });
    }

    popupRef.current = popup;
  }, [activeLegIndex, legProgress, events, plottableEvents, isLight]);

  // Update progressive trail & transit marker
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isLoadedRef.current || plottableEvents.length === 0) return;

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

    for (let i = 0; i < activePlotIdx - 1 && i < legArcs.length; i++) {
      trailFeatures.push({
        type: 'Feature',
        properties: { color: CATEGORY_COLORS[legArcs[i].to.category] || CATEGORY_COLORS.other },
        geometry: { type: 'LineString', coordinates: legArcs[i].coords },
      });
    }

    let headCoord = plottableEvents[0].coordinates;

    if (activePlotIdx === 0) {
      headCoord = plottableEvents[0].coordinates;
    } else if (activePlotIdx - 1 < legArcs.length) {
      const currentLeg = legArcs[activePlotIdx - 1];
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
  }, [activeLegIndex, legProgress, plottableEvents, legArcs]);

  return <div ref={containerRef} className="w-full h-full" />;
}