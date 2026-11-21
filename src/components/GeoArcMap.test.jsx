// @vitest-environment jsdom
import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { GeoArcMap } from './GeoArcMap';

const mocks = vi.hoisted(() => ({ maps: [], popups: [] }));

vi.mock('maplibre-gl', () => {
  class Map {
    constructor() {
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
    setStyle(url, options) {
      this.style = url;
      this.styleOptions = options;
      this.sources = {};
      this.layers = {};
    }
    jumpTo() {}
    easeTo() {}
    resize() {}
    remove() {}
  }
  class Popup {
    constructor() { mocks.popups.push(this); }
    setLngLat(coordinates) { this.coordinates = coordinates; return this; }
    setHTML() { return this; }
    addTo() { return this; }
    on(event, handler) { this[event] = handler; return this; }
    remove() { this.close?.(); }
    getElement() { return null; }
  }
  return { default: { Map, Popup, NavigationControl: class {} } };
});

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
});
