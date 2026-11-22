// @vitest-environment jsdom
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { setWorkerUrl } from 'maplibre-gl';
import { GeoArcMap } from './GeoArcMap';

const mocks = vi.hoisted(() => ({ maps: [], popups: [] }));

vi.mock('maplibre-gl', () => {
  class Map {
    constructor(options) {
      this.style = options.style;
      this.sources = {};
      this.layers = {};
      this.handlers = {};
      this.canvas = document.createElement('canvas');
      mocks.maps.push(this);
    }
    on(event, layerOrHandler, handler) {
      this.handlers[event] = handler || layerOrHandler;
    }
    emit(event, data) { this.handlers[event]?.(data); }
    addControl() {}
    getCanvas() { return this.canvas; }
    getSource(id) { return this.sources[id]; }
    addSource(id, source) {
      this.sources[id] = { data: source.data, setData(data) { this.data = data; } };
    }
    getLayer(id) { return this.layers[id]; }
    addLayer(layer) { this.layers[layer.id] = layer; }
    setPaintProperty(id, name, value) { this.layers[id].paint[name] = value; }
    setStyle(url, options) {
      this.style = url;
      this.styleOptions = options;
      this.sources = {};
      this.layers = {};
      if (this.syncStyleLoad) this.emit('style.load');
    }
    jumpTo() {}
    easeTo() {}
    resize() {}
    remove() {}
  }
  class Popup {
    constructor() { mocks.popups.push(this); }
    setLngLat(coordinates) { this.coordinates = coordinates; return this; }
    setHTML(html) {
      this.element = document.createElement('div');
      this.element.innerHTML = html;
      return this;
    }
    addTo() { return this; }
    on(event, handler) { this[event] = handler; return this; }
    remove() { this.close?.(); }
    getElement() { return this.element; }
  }
  return { Map, Popup, NavigationControl: class {}, setWorkerUrl: vi.fn() };
});

vi.mock('maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url', () => ({
  default: '/maplibre-gl-worker.js',
}));

const events = [
  { index: 0, id: 'a', title: 'A', placeLabel: 'Rome', category: 'production', coordinates: [12, 41], images: [] },
  { index: 1, id: 'b', title: 'B', placeLabel: 'London', category: 'discovery', coordinates: [-1, 51], images: [] },
];

beforeEach(() => {
  mocks.maps.length = 0;
  mocks.popups.length = 0;
  vi.stubGlobal('ResizeObserver', class { observe() {} disconnect() {} });
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe('map style and popup lifecycle', () => {
  it('configures the bundled MapLibre worker', () => {
    expect(setWorkerUrl).toHaveBeenCalledWith('/maplibre-gl-worker.js');
  });

  it('restores moving and ghost trails after switching light and dark styles', () => {
    const props = { events, activeLegIndex: 0, legProgress: 0.5, isPlaying: true };
    const { rerender } = render(<GeoArcMap {...props} theme="dark" />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    expect(map.getSource('active-trail').data.features).toHaveLength(1);
    expect(map.getLayer('ghost-arcs-layer').paint['line-color']).toBe('#475569');

    rerender(<GeoArcMap {...props} theme="light" />);
    expect(map.styleOptions).toEqual({ diff: false });
    expect(map.style).toContain('positron');
    act(() => map.emit('style.load'));
    expect(map.getLayer('ghost-arcs-layer').paint['line-color']).toBe('#94a3b8');
    expect(map.getSource('ghost-arcs').data.features).toHaveLength(1);
    expect(map.getSource('active-trail').data.features).toHaveLength(1);
    expect(map.getSource('transit-head').data.features).toHaveLength(1);

    rerender(<GeoArcMap {...props} theme="dark" />);
    act(() => map.emit('style.load'));
    expect(map.getLayer('ghost-arcs-layer').paint['line-color']).toBe('#475569');
    expect(map.getSource('active-trail').data.features).toHaveLength(1);
  });

  it('keeps a dismissed popup closed until an event node is clicked', () => {
    const onSelectEvent = vi.fn();
    const { rerender } = render(<GeoArcMap events={events} onSelectEvent={onSelectEvent} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    expect(mocks.popups).toHaveLength(1);
    act(() => mocks.popups[0].remove());
    rerender(<GeoArcMap events={events} activeLegIndex={1} onSelectEvent={onSelectEvent} />);
    expect(mocks.popups).toHaveLength(1);
    act(() => map.emit('click', { features: [{ properties: { origIndex: 1 } }] }));
    expect(onSelectEvent).toHaveBeenCalledWith(1);
    expect(mocks.popups).toHaveLength(2);
  });

  it('applies custom basemaps, trail colors, and popup styles across theme switches', () => {
    const mapStyles = { dark: 'https://example.test/dark.json', light: 'https://example.test/light.json' };
    const mapAppearance = {
      ghostColor: '#123456',
      transitColor: '#abcdef',
      polygonFillColor: '#112233',
      categoryColors: { discovery: '#654321' },
    };
    const props = {
      events, mapStyles, mapAppearance, activeLegIndex: 0, legProgress: 0.5,
      isPlaying: true, classNames: { popup: 'custom-popup', map: 'custom-map' },
      styles: { popup: { color: 'red' }, map: { opacity: 0.7 } },
    };
    const { rerender, container } = render(<GeoArcMap {...props} theme="dark" />);
    const map = mocks.maps[0];
    expect(map.style).toBe(mapStyles.dark);
    act(() => map.emit('style.load'));
    expect(container.querySelector('.geotrail-map.custom-map').style.opacity).toBe('0.7');
    expect(map.getLayer('ghost-arcs-layer').paint['line-color']).toBe('#123456');
    expect(map.getLayer('transit-head-halo').paint['circle-color']).toBe('#abcdef');
    expect(map.getLayer('place-polygons-fill').paint['fill-color']).toBe('#112233');
    expect(map.getSource('active-trail').data.features[0].properties.color).toBe('#654321');
    expect(mocks.popups.at(-1).getElement().querySelector('.geotrail-popup.custom-popup').style.color).toBe('red');

    rerender(<GeoArcMap {...props} theme="light" />);
    expect(map.style).toBe(mapStyles.light);
    act(() => map.emit('style.load'));
    expect(map.getLayer('event-nodes-circle').paint['circle-stroke-color']).toBe('#ffffff');
    expect(map.getLayer('ghost-arcs-layer').paint['line-color']).toBe('#123456');
    expect(map.getSource('active-trail').data.features[0].properties.color).toBe('#654321');

    rerender(<GeoArcMap {...props} mapAppearance={{ ghostColor: '#987654' }} theme="light" />);
    expect(map.getLayer('ghost-arcs-layer').paint['line-color']).toBe('#987654');
    expect(map.getLayer('transit-head-halo').paint['circle-color']).toBe('#0284c7');
    expect(map.getSource('active-trail').data.features[0].properties.color).toBe('#059669');
  });

  it('uses the active theme even when both custom basemap URLs are identical', () => {
    const mapStyles = { dark: 'https://example.test/map.json', light: 'https://example.test/map.json' };
    const { rerender } = render(<GeoArcMap events={events} mapStyles={mapStyles} theme="dark" />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    rerender(<GeoArcMap events={events} mapStyles={mapStyles} theme="light" />);
    act(() => map.emit('style.load'));
    expect(map.getLayer('ghost-arcs-layer').paint['line-color']).toBe('#94a3b8');
  });

  it('reapplies custom colors when a style loads synchronously', () => {
    const mapStyles = { dark: { version: 8 }, light: { version: 8 } };
    const mapAppearance = { ghostColor: '#123456' };
    const { rerender } = render(
      <GeoArcMap events={events} mapStyles={mapStyles} mapAppearance={mapAppearance} theme="dark" />
    );
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    map.syncStyleLoad = true;
    rerender(
      <GeoArcMap events={events} mapStyles={mapStyles} mapAppearance={mapAppearance} theme="light" />
    );
    expect(map.getLayer('ghost-arcs-layer').paint['line-color']).toBe('#123456');
    expect(map.getSource('event-nodes').data.features).toHaveLength(2);
  });
});
