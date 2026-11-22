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

describe('record loader', () => {
  it('loads a URL, renders its events, and reports invalid URLs without fetching', async () => {
    const fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        id: 'https://example.org/object',
        type: 'HumanMadeObject',
        _label: 'Loaded object',
        produced_by: {
          _label: '<img src=x onerror=alert(1)>',
          took_place_at: { id: 'javascript:alert(1)', _label: 'Rome', defined_by: 'POINT (12 41)' },
        },
      }),
    });
    vi.stubGlobal('fetch', fetch);
    const { container } = render(<App record={record} />);
    await act(async () => {});
    fireEvent.click(screen.getByText('Load URL / JSON'));
    const input = screen.getByLabelText('Linked Art URL or JSON-LD');
    fireEvent.change(input, { target: { value: 'javascript:alert(1)' } });
    fireEvent.click(screen.getByText('Fetch / Parse & Plot Events'));
    await act(async () => {});
    expect(screen.getByRole('alert').textContent).toContain('valid HTTP(S) URL');
    expect(fetch).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: 'https://example.org/object' } });
    fireEvent.click(screen.getByText('Fetch / Parse & Plot Events'));
    await act(async () => {});
    expect(screen.getByText('Loaded object')).toBeTruthy();
    expect(screen.getByText('<img src=x onerror=alert(1)>')).toBeTruthy();
    expect(container.querySelector('img[src="x"]')).toBeNull();
    expect(screen.queryByTitle('Open Place URI')).toBeNull();
    expect(screen.queryByRole('alert')).toBeNull();
    expect(fetch).toHaveBeenCalledOnce();
  });
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

  describe('interface customization', () => {
    it('applies named styles and classes without removing default theme or behavior', async () => {
      const { container, rerender } = render(
        <App
          record={record}
          classNames={{ root: 'host-root', sidebar: 'host-sidebar', eventCard: 'host-card' }}
          styles={{ sidebar: { width: '350px' }, eventCard: { borderRadius: '2px' } }}
        />
      );
      await act(async () => {});
      expect(container.querySelector('.geotrail-root.host-root').dataset.theme).toBe('dark');
      expect(container.querySelector('.geotrail-sidebar.host-sidebar').style.width).toBe('350px');
      const cards = container.querySelectorAll('.geotrail-eventCard.host-card');
      expect(cards).toHaveLength(2);
      expect(cards[0].style.borderRadius).toBe('2px');
      expect(cards[0].dataset.active).toBe('true');
      fireEvent.click(cards[1]);
      expect(cards[1].dataset.active).toBe('true');

      rerender(<App record={record} theme="light" />);
      expect(container.querySelector('.geotrail-root').dataset.theme).toBe('light');
      expect(container.querySelector('.geotrail-sidebar').style.width).toBe('');
      expect(container.querySelector('.geotrail-eventCard').classList.contains('host-card')).toBe(false);
    });
  });
});
