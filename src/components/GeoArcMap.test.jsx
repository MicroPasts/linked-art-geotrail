// @vitest-environment jsdom
import React from 'react';
import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { setWorkerUrl } from 'maplibre-gl';
import { GeoArcMap } from './GeoArcMap';

const mocks = vi.hoisted(() => ({ maps: [], popups: [] }));

vi.mock('maplibre-gl', () => {
  class Map {
    constructor(options) {
      this.style = options.style;
      this.options = options;
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
    jumpTo = vi.fn();
    easeTo = vi.fn();
    resize() {}
    remove() {}
  }
  class Popup {
    constructor() { mocks.popups.push(this); }
    setLngLat(coordinates) { this.coordinates = coordinates; return this; }
    setDOMContent(content) {
      this.element = document.createElement('div');
      this.element.appendChild(content);
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

  it('follows the moving trail head through playback, pause, resume and arrival', () => {
    const stops = [events[0], { ...events[1], coordinates: [-74, 40] }];
    const { rerender } = render(<GeoArcMap events={stops} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    map.jumpTo.mockClear();
    map.easeTo.mockClear();
    for (const progress of [0.1, 0.5, 0.98]) {
      rerender(<GeoArcMap events={stops} isPlaying legProgress={progress} />);
      const trail = map.getSource('active-trail').data.features[0].geometry.coordinates;
      expect(map.jumpTo).toHaveBeenLastCalledWith({ center: trail.at(-1) });
      expect(map.jumpTo.mock.lastCall[0].center).toEqual(map.getSource('transit-head').data.features[0].geometry.coordinates);
    }
    expect(map.easeTo).not.toHaveBeenCalled();
    map.jumpTo.mockClear();
    rerender(<GeoArcMap events={stops} legProgress={0.98} />);
    expect(map.jumpTo).not.toHaveBeenCalled();
    expect(map.easeTo).not.toHaveBeenCalled();
    rerender(<GeoArcMap events={stops} isPlaying legProgress={0.98} />);
    expect(map.jumpTo).toHaveBeenCalledOnce();
    rerender(<GeoArcMap events={stops} activeLegIndex={1} />);
    expect(map.jumpTo).toHaveBeenLastCalledWith({ center: stops[1].coordinates });
    expect(map.easeTo).not.toHaveBeenCalled();
    rerender(<GeoArcMap events={stops} activeLegIndex={0} />);
    expect(map.easeTo).toHaveBeenLastCalledWith({ center: stops[0].coordinates, zoom: 6, duration: 1200, essential: true });
  });

  it('lets users pan or recenter during playback until playback resumes or advances', () => {
    const { rerender } = render(<GeoArcMap events={events} isPlaying legProgress={0.2} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    act(() => map.emit('dragstart', { originalEvent: {} }));
    map.jumpTo.mockClear();
    rerender(<GeoArcMap events={events} isPlaying legProgress={0.3} />);
    expect(map.jumpTo).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'Recenter map on current stop' }));
    expect(map.easeTo).toHaveBeenLastCalledWith({ center: events[0].coordinates, duration: 800 });
    rerender(<GeoArcMap events={events} isPlaying legProgress={0.4} />);
    expect(map.jumpTo).not.toHaveBeenCalled();
    rerender(<GeoArcMap events={events} legProgress={0.4} />);
    rerender(<GeoArcMap events={events} isPlaying legProgress={0.4} />);
    expect(map.jumpTo).toHaveBeenCalledOnce();
  });

  it('does not follow a future stop across an unresolved event', () => {
    const stops = [events[0], { ...events[1], coordinates: null }, { ...events[1], index: 2 }];
    const { rerender } = render(<GeoArcMap events={stops} isPlaying legProgress={0.5} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    map.jumpTo.mockClear();
    rerender(<GeoArcMap events={stops} isPlaying legProgress={0.75} />);
    expect(map.jumpTo).not.toHaveBeenCalled();
    rerender(<GeoArcMap events={stops} activeLegIndex={1} isPlaying legProgress={0.5} />);
    expect(map.jumpTo).toHaveBeenLastCalledWith({
      center: map.getSource('transit-head').data.features[0].geometry.coordinates,
    });
  });

  it('switches basemaps without losing trail state, popup dismissal or custom theme styles', () => {
    const mapStyles = { dark: 'https://example.test/dark', light: 'https://example.test/light' };
    const props = { events, mapStyles, activeLegIndex: 0, legProgress: 0.5, isPlaying: true };
    const { rerender } = render(<GeoArcMap {...props} classNames={{ basemapSelect: 'custom-select' }} />);
    const map = mocks.maps[0];
    expect(map.options.attributionControl).toBe(true);
    act(() => map.emit('style.load'));
    const select = screen.getByRole('combobox', { name: 'Map style' });
    expect(select.value).toBe('auto');
    expect(select.classList.contains('custom-select')).toBe(true);
    expect(map.style).toBe(mapStyles.dark);
    act(() => mocks.popups[0].remove());
    map.jumpTo.mockClear();
    map.easeTo.mockClear();

    fireEvent.change(select, { target: { value: 'voyager' } });
    expect(map.style).toContain('voyager-gl-style');
    expect(map.styleOptions).toEqual({ diff: false });
    act(() => map.emit('style.load'));
    expect(map.getSource('active-trail').data.features).toHaveLength(1);
    expect(map.getSource('event-nodes').data.features).toHaveLength(1);
    expect(map.getLayer('ghost-arcs-layer').paint['line-color']).toBe('#94a3b8');
    expect(map.getLayer('event-nodes-label').paint['text-color']).toBe('#0f172a');
    expect(mocks.popups).toHaveLength(1);
    expect(map.jumpTo).not.toHaveBeenCalled();
    expect(map.easeTo).not.toHaveBeenCalled();

    rerender(<GeoArcMap {...props} theme="light" />);
    act(() => map.emit('style.load'));
    expect(select.value).toBe('voyager');
    expect(map.style).toContain('voyager-gl-style');
    fireEvent.change(select, { target: { value: 'dark' } });
    act(() => map.emit('style.load'));
    expect(map.getLayer('event-nodes-label').paint['text-color']).toBe('#f8fafc');
    fireEvent.change(select, { target: { value: 'positron' } });
    act(() => map.emit('style.load'));
    expect(map.style).toContain('positron-gl-style');
    fireEvent.change(select, { target: { value: 'auto' } });
    act(() => map.emit('style.load'));
    expect(map.style).toBe(mapStyles.light);
    expect(map.getSource('active-trail').data.features).toHaveLength(1);
  });

  it('loads MIERUNE Mono, Fiord and Liberty with their compatible label fonts', () => {
    const { rerender } = render(<GeoArcMap events={events} activeLegIndex={1} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    const select = screen.getByRole('combobox', { name: 'Map style' });
    for (const [value, url, light] of [
      ['fiord', 'https://tiles.openfreemap.org/styles/fiord', false],
      ['liberty', 'https://tiles.openfreemap.org/styles/liberty', true],
    ]) {
      fireEvent.change(select, { target: { value } });
      expect(map.style).toBe(url);
      act(() => map.emit('style.load'));
      expect(map.getLayer('event-nodes-label').layout['text-font']).toEqual(['Noto Sans Bold']);
      expect(map.getLayer('event-nodes-label').paint['text-color']).toBe(light ? '#0f172a' : '#f8fafc');
      expect(map.getSource('event-nodes').data.features).toHaveLength(2);
      expect(map.getSource('active-trail').data.features).toHaveLength(1);
    }
    fireEvent.change(select, { target: { value: 'mierune' } });
    expect(map.style.glyphs).toContain('tiles.openfreemap.org/fonts');
    expect(map.style.sources.mierune.tiles).toEqual(['https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png']);
    expect(map.style.sources.mierune.attribution).toContain('MIERUNE');
    expect(map.style.sources.mierune.attribution).toContain('OpenStreetMap');
    act(() => map.emit('style.load'));
    expect(map.getLayer('event-nodes-label').layout['text-font']).toEqual(['Noto Sans Bold']);
    expect(map.getSource('event-nodes').data.features).toHaveLength(2);
    rerender(<GeoArcMap events={events} activeLegIndex={1} theme="light" />);
    act(() => map.emit('style.load'));
    expect(select.value).toBe('mierune');
    fireEvent.change(select, { target: { value: 'auto' } });
    act(() => map.emit('style.load'));
    expect(map.getLayer('event-nodes-label').layout['text-font']).toEqual(['Open Sans Bold', 'Arial Unicode MS Bold']);
  });

  it('recenters on the current revealed stop without changing zoom or reopening the popup', () => {
    const stops = [events[0], { ...events[1], coordinates: null }, { ...events[1], index: 2 }];
    const props = { events: stops, classNames: { recenterButton: 'custom-recenter' }, styles: { recenterButton: { opacity: 0.8 } } };
    const { rerender } = render(<GeoArcMap {...props} isPlaying legProgress={0.5} />);
    const map = mocks.maps[0];
    const button = screen.getByRole('button', { name: 'Recenter map on current stop' });
    expect(button.disabled).toBe(true);
    expect(button.classList.contains('custom-recenter')).toBe(true);
    expect(button.style.opacity).toBe('0.8');
    act(() => map.emit('style.load'));
    expect(button.disabled).toBe(false);
    act(() => mocks.popups[0].remove());
    map.easeTo.mockClear();
    fireEvent.click(button);
    expect(map.easeTo).toHaveBeenCalledWith({ center: stops[0].coordinates, duration: 800 });
    expect(mocks.popups).toHaveLength(1);

    rerender(<GeoArcMap {...props} activeLegIndex={1} isPlaying legProgress={0.5} />);
    map.easeTo.mockClear();
    fireEvent.click(button);
    expect(map.easeTo).toHaveBeenCalledWith({ center: stops[0].coordinates, duration: 800 });
    rerender(<GeoArcMap {...props} activeLegIndex={2} />);
    map.easeTo.mockClear();
    fireEvent.click(button);
    expect(map.easeTo).toHaveBeenCalledWith({ center: stops[2].coordinates, duration: 800 });
    rerender(<GeoArcMap {...props} events={[]} />);
    expect(button.disabled).toBe(true);
  });

  it('pulses only shared revealed coordinates and restores the pulse after a style change', () => {
    let callback;
    const requestFrame = vi.fn((fn) => { callback = fn; return 42; });
    const cancelFrame = vi.fn();
    vi.stubGlobal('requestAnimationFrame', requestFrame);
    vi.stubGlobal('cancelAnimationFrame', cancelFrame);
    const stops = [
      events[0],
      { ...events[1], coordinates: events[0].coordinates },
      { ...events[1], index: 2 },
    ];
    const { rerender, unmount } = render(<GeoArcMap events={stops} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    const nodes = () => map.getSource('event-nodes').data.features;
    expect(nodes().map((node) => node.properties.pulseOwner)).toEqual([false]);
    expect(requestFrame).not.toHaveBeenCalled();

    rerender(<GeoArcMap events={stops} activeLegIndex={1} />);
    expect(nodes().map((node) => node.properties.pulseOwner)).toEqual([true]);
    expect(map.getLayer('event-nodes-pulse').filter).toEqual(['==', ['get', 'pulseOwner'], true]);
    act(() => callback(800));
    expect(map.getLayer('event-nodes-pulse').paint['circle-radius']).toBe(26);
    expect(map.getLayer('event-nodes-pulse').paint['circle-opacity']).toBeCloseTo(0.35);

    rerender(<GeoArcMap events={stops} activeLegIndex={2} theme="light" />);
    act(() => map.emit('style.load'));
    expect(nodes().map((node) => node.properties.pulseOwner)).toEqual([true, false]);
    act(() => callback(1200));
    expect(map.getLayer('event-nodes-pulse').paint['circle-radius']).toBe(31);
    rerender(<GeoArcMap events={stops} activeLegIndex={0} theme="light" />);
    expect(nodes().map((node) => node.properties.pulseOwner)).toEqual([false]);
    expect(cancelFrame).toHaveBeenCalledWith(42);
    unmount();
  });

  it('updates the shared marker and label to the latest revealed event and its category', () => {
    const stops = [
      { ...events[0], title: 'Made', placeLabel: 'Rome' },
      { ...events[1], title: 'Found', placeLabel: 'Rome', coordinates: events[0].coordinates },
      { ...events[0], index: 2, id: 'c', title: 'Exhibited', placeLabel: 'Rome', category: 'exhibition' },
      { ...events[1], index: 3 },
    ];
    const onSelectEvent = vi.fn();
    const props = { events: stops, onSelectEvent, mapAppearance: { categoryColors: { discovery: '#abcdef' } } };
    const { rerender } = render(<GeoArcMap {...props} isPlaying legProgress={0.5} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    const nodes = () => map.getSource('event-nodes').data.features;
    expect(nodes()[0].properties).toMatchObject({ origIndex: 0, index: 0, title: 'Made', color: '#d97706', sharedPlace: true, pulseOwner: false });

    rerender(<GeoArcMap {...props} activeLegIndex={1} isPlaying legProgress={0.5} />);
    expect(nodes()).toHaveLength(1);
    expect(nodes()[0].properties).toMatchObject({ origIndex: 1, index: 1, title: 'Found', placeLabel: 'Rome', color: '#abcdef', pulseOwner: true, isActive: true });
    expect(map.getSource('transit-head').data.features).toHaveLength(0);
    const label = map.getLayer('event-nodes-label').layout['text-field'];
    expect(label).toEqual(['concat', ['to-string', ['+', ['get', 'index'], 1]], '. ', ['case', ['boolean', ['get', 'sharedPlace'], false], ['concat', ['get', 'title'], ' — '], ''], ['get', 'placeLabel']]);
    act(() => map.emit('click', { features: [nodes()[0]] }));
    expect(onSelectEvent).toHaveBeenCalledWith(1);

    rerender(<GeoArcMap {...props} activeLegIndex={2} />);
    expect(nodes()).toHaveLength(1);
    expect(nodes()[0].properties).toMatchObject({ origIndex: 2, index: 2, title: 'Exhibited', color: '#9333ea', pulseOwner: true });
    rerender(<GeoArcMap {...props} activeLegIndex={3} />);
    expect(nodes().map((node) => node.properties.origIndex)).toEqual([2, 3]);
    expect(nodes()[0].properties.isActive).toBe(false);
    rerender(<GeoArcMap {...props} activeLegIndex={1} theme="light" />);
    act(() => map.emit('style.load'));
    expect(nodes()[0].properties).toMatchObject({ origIndex: 1, title: 'Found', color: '#abcdef', pulseOwner: true });
    rerender(<GeoArcMap {...props} activeLegIndex={0} theme="light" />);
    expect(nodes()[0].properties).toMatchObject({ origIndex: 0, title: 'Made', color: '#d97706', pulseOwner: false });
  });

  it('keeps a static shared-place halo when reduced motion is requested', () => {
    const motion = { matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() };
    vi.stubGlobal('matchMedia', vi.fn(() => motion));
    const requestFrame = vi.fn();
    vi.stubGlobal('requestAnimationFrame', requestFrame);
    const stops = [events[0], { ...events[1], coordinates: events[0].coordinates }];
    const { unmount } = render(<GeoArcMap events={stops} activeLegIndex={1} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    expect(requestFrame).not.toHaveBeenCalled();
    expect(map.getLayer('event-nodes-pulse').paint['circle-radius']).toBe(19);
    expect(map.getLayer('event-nodes-pulse').paint['circle-opacity']).toBe(0.45);
    motion.matches = false;
    act(() => motion.addEventListener.mock.calls[0][1]());
    expect(requestFrame).toHaveBeenCalled();
    unmount();
    expect(motion.removeEventListener).toHaveBeenCalled();
  });

  it('shows a collapsible legend using custom map colours', () => {
    const appearance = {
      categoryColors: { production: '#123456' },
      ghostColor: '#abcdef',
      transitColor: '#654321',
      polygonFillColor: '#aabbcc',
      polygonOutlineColor: '#112233',
    };
    const { rerender } = render(
      <GeoArcMap events={events} mapAppearance={appearance} classNames={{ legend: 'custom-legend' }} styles={{ legend: { opacity: 0.9 } }} />
    );
    const legend = screen.getByRole('complementary', { name: 'Map legend' });
    const button = within(legend).getByRole('button', { name: 'Map legend' });
    expect(legend.classList.contains('custom-legend')).toBe(true);
    expect(legend.style.opacity).toBe('0.9');
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(within(legend).getByText('Production').querySelector('span').style.backgroundColor).toBe('rgb(18, 52, 86)');
    expect(within(legend).getByText('Route preview').querySelector('span').style.borderColor).toBe('rgb(171, 205, 239)');
    fireEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(document.getElementById(button.getAttribute('aria-controls')).hidden).toBe(true);
    rerender(<GeoArcMap events={events} theme="light" />);
    expect(button.getAttribute('aria-expanded')).toBe('false');
    fireEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(within(legend).getByText('Production').querySelector('span').style.backgroundColor).toBe('rgb(217, 119, 6)');
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
    expect(map.getSource('event-nodes').data.features).toHaveLength(1);
    expect(mocks.popups.at(-1).coordinates).toEqual(events[0].coordinates);

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

  it('reveals each point, polygon and popup only after arriving, including pause and reset', () => {
    const stops = [
      events[0],
      { ...events[1], polygon: [[[0, 0], [1, 0], [1, 1], [0, 0]]] },
      { ...events[1], id: 'c', index: 2, title: 'C', coordinates: [2, 48] },
    ];
    const props = { events: stops };
    const { rerender } = render(<GeoArcMap {...props} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    const nodes = () => map.getSource('event-nodes').data.features;
    const trails = () => map.getSource('active-trail').data.features;
    const polygons = () => map.getSource('place-polygons').data.features;
    expect(nodes().map((node) => node.properties.origIndex)).toEqual([0]);
    expect(polygons()).toHaveLength(0);
    expect(mocks.popups.at(-1).coordinates).toEqual(stops[0].coordinates);

    rerender(<GeoArcMap {...props} activeLegIndex={0} legProgress={0.5} isPlaying />);
    expect(nodes()).toHaveLength(1);
    expect(trails()).toHaveLength(1);
    expect(trails()[0].geometry.coordinates.at(-1)).not.toEqual(stops[1].coordinates);
    expect(mocks.popups.at(-1).coordinates).toEqual(stops[0].coordinates);
    expect(mocks.popups).toHaveLength(1);

    rerender(<GeoArcMap {...props} activeLegIndex={0} legProgress={0.5} />);
    expect(nodes()).toHaveLength(1);
    expect(trails()).toHaveLength(1);

    rerender(<GeoArcMap {...props} activeLegIndex={1} legProgress={0} isPlaying />);
    expect(nodes().map((node) => node.properties.origIndex)).toEqual([0, 1]);
    expect(trails()[0].geometry.coordinates.at(-1)).toEqual(stops[1].coordinates);
    expect(polygons()).toHaveLength(1);
    expect(mocks.popups.at(-1).coordinates).toEqual(stops[1].coordinates);

    rerender(<GeoArcMap {...props} activeLegIndex={2} />);
    expect(nodes()).toHaveLength(3);
    expect(trails()).toHaveLength(2);
    rerender(<GeoArcMap {...props} activeLegIndex={0} />);
    expect(nodes()).toHaveLength(1);
    expect(polygons()).toHaveLength(0);
    expect(trails()).toHaveLength(0);
  });

  it('does not reveal a later mapped event while an earlier event has no coordinates', () => {
    const stops = [
      events[0],
      { ...events[1], index: 1, coordinates: null },
      { ...events[1], index: 2 },
    ];
    const { rerender } = render(<GeoArcMap events={stops} activeLegIndex={0} isPlaying legProgress={0.5} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    expect(map.getSource('event-nodes').data.features).toHaveLength(1);
    expect(map.getSource('active-trail').data.features).toHaveLength(0);

    rerender(<GeoArcMap events={stops} activeLegIndex={1} isPlaying legProgress={0.5} />);
    expect(map.getSource('event-nodes').data.features).toHaveLength(1);
    expect(map.getSource('active-trail').data.features).toHaveLength(1);
    expect(mocks.popups.at(-1).coordinates).toEqual(stops[0].coordinates);

    rerender(<GeoArcMap events={stops} activeLegIndex={2} />);
    expect(map.getSource('event-nodes').data.features.map((node) => node.properties.origIndex)).toEqual([0, 2]);
    expect(mocks.popups.at(-1).coordinates).toEqual(stops[2].coordinates);
  });

  it('clears markers and popup when no visited event has coordinates', () => {
    const stops = [{ ...events[0], coordinates: null }, events[1]];
    const { rerender } = render(<GeoArcMap events={stops} activeLegIndex={1} />);
    const map = mocks.maps[0];
    act(() => map.emit('style.load'));
    const popup = mocks.popups.at(-1);
    const removePopup = vi.spyOn(popup, 'remove');
    expect(map.getSource('event-nodes').data.features).toHaveLength(1);
    rerender(<GeoArcMap events={stops} activeLegIndex={0} />);
    expect(map.getSource('event-nodes').data.features).toHaveLength(0);
    expect(map.getSource('active-trail').data.features).toHaveLength(0);
    expect(map.getSource('transit-head').data.features).toHaveLength(0);
    expect(mocks.popups).toHaveLength(1);
    expect(removePopup).toHaveBeenCalledOnce();

    rerender(<GeoArcMap events={[]} />);
    expect(map.getSource('event-nodes').data.features).toHaveLength(0);
    expect(map.getSource('ghost-arcs').data.features).toHaveLength(0);
  });

  it('renders record text without interpreting HTML and rejects unsafe popup image URLs', () => {
    const malicious = [{
      ...events[0],
      title: '<img src=x onerror=alert(1)>',
      placeLabel: '<script>alert(1)</script>',
      dateDisplay: '<svg onload=alert(1)>',
      images: [{ url: 'javascript:alert(1)//.jpg', label: 'bad' }],
    }];
    render(<GeoArcMap events={malicious} />);
    act(() => mocks.maps[0].emit('style.load'));
    const content = mocks.popups[0].getElement();
    expect(content.textContent).toContain('<img src=x onerror=alert(1)>');
    expect(content.textContent).toContain('<script>alert(1)</script>');
    expect(content.querySelector('img, script, svg')).toBeNull();
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
    expect(map.getSource('event-nodes').data.features).toHaveLength(1);
  });
});
