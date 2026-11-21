// @vitest-environment jsdom
import React, { StrictMode } from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from './App';

vi.mock('./components/GeoArcMap', () => ({
  GeoArcMap: ({ activeLegIndex, legProgress, isPlaying }) => (
    <output data-testid="map-state">{JSON.stringify({ activeLegIndex, legProgress, isPlaying })}</output>
  ),
}));

const record = {
  id: 'test-object',
  produced_by: { took_place_at: { _label: 'Rome', defined_by: 'POINT (12 41)' } },
  current_location: { _label: 'London', defined_by: 'POINT (-1 51)' },
};

const mapState = () => JSON.parse(screen.getByTestId('map-state').textContent);

beforeEach(() => {
  vi.useFakeTimers();
  vi.stubGlobal('requestAnimationFrame', (callback) => setTimeout(() => callback(performance.now()), 16));
  vi.stubGlobal('cancelAnimationFrame', clearTimeout);
  Element.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('playback in Strict Mode', () => {
  it('advances, pauses, resumes, ends on the last stop and restarts', async () => {
    render(<StrictMode><App record={record} /></StrictMode>);
    await act(async () => {});

    fireEvent.click(screen.getByTitle('Play trajectory'));
    await act(async () => { await vi.advanceTimersByTimeAsync(1600); });
    expect(mapState().activeLegIndex).toBe(0);
    expect(mapState().legProgress).toBeGreaterThan(0.3);

    fireEvent.click(screen.getByTitle('Pause animation'));
    const paused = mapState().legProgress;
    await act(async () => { await vi.advanceTimersByTimeAsync(1000); });
    expect(mapState().legProgress).toBe(paused);

    fireEvent.click(screen.getByTitle('Play trajectory'));
    await act(async () => { await vi.advanceTimersByTimeAsync(4000); });
    expect(mapState()).toEqual({ activeLegIndex: 1, legProgress: 0, isPlaying: false });

    fireEvent.click(screen.getByTitle('Play trajectory'));
    expect(mapState()).toEqual({ activeLegIndex: 0, legProgress: 0, isPlaying: true });
  });
});
