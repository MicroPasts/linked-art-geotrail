// @vitest-environment jsdom
import React, { StrictMode } from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from './App';
import { SAMPLE_PIEBALD_RECORD } from './data/piebaldRecord';

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
  it('updates animation progress on consecutive 60 Hz frames', async () => {
    render(<App record={record} />);
    await act(async () => {});
    fireEvent.click(screen.getByTitle('Play trajectory'));
    let previous = 0;
    for (let frame = 0; frame < 5; frame++) {
      await act(async () => { await vi.advanceTimersByTimeAsync(16); });
      expect(mapState().legProgress).toBeGreaterThan(previous);
      previous = mapState().legProgress;
    }
  });

  it('plays the Piebald Horse final leg through to its last event', async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ results: [] }) });
    vi.stubGlobal('fetch', fetch);
    render(<StrictMode><App record={SAMPLE_PIEBALD_RECORD} /></StrictMode>);
    await act(async () => {});
    fireEvent.change(screen.getByRole('slider'), { target: { value: '22' } });
    fireEvent.click(screen.getByTitle('Play trajectory'));
    await act(async () => { await vi.advanceTimersByTimeAsync(5000); });
    expect(mapState().activeLegIndex).toBe(22);
    expect(mapState().legProgress).toBeGreaterThan(0.3);
    expect(mapState().legProgress).toBeLessThan(0.6);
    await act(async () => { await vi.advanceTimersByTimeAsync(10000); });
    expect(mapState()).toEqual({ activeLegIndex: 23, legProgress: 0, isPlaying: false });
  });

  it('pauses at a long-distance arrival, preserves the pause, then draws the final leg', async () => {
    const journey = {
      ...record,
      encountered: [{ _label: 'New York', took_place_at: { _label: 'New York', defined_by: 'POINT (-74 40.7)' } }],
      current_location: { _label: 'Boston', defined_by: 'POINT (-71 42)' },
    };
    render(<StrictMode><App record={journey} /></StrictMode>);
    await act(async () => {});
    fireEvent.click(screen.getByTitle('Play trajectory'));
    await act(async () => { await vi.advanceTimersByTimeAsync(9800); });
    expect(mapState()).toEqual({ activeLegIndex: 1, legProgress: 0, isPlaying: true });
    fireEvent.click(screen.getByTitle('Pause animation'));
    await act(async () => { await vi.advanceTimersByTimeAsync(3000); });
    expect(mapState()).toEqual({ activeLegIndex: 1, legProgress: 0, isPlaying: false });
    fireEvent.click(screen.getByTitle('Play trajectory'));
    await act(async () => { await vi.advanceTimersByTimeAsync(800); });
    expect(mapState()).toEqual({ activeLegIndex: 1, legProgress: 0, isPlaying: true });
    await act(async () => { await vi.advanceTimersByTimeAsync(2500); });
    expect(mapState().activeLegIndex).toBe(1);
    expect(mapState().legProgress).toBeGreaterThan(0);
    await act(async () => { await vi.advanceTimersByTimeAsync(5000); });
    expect(mapState()).toEqual({ activeLegIndex: 2, legProgress: 0, isPlaying: false });
  });

  it('clears the arrival pause when resetting or seeking', async () => {
    const journey = {
      ...record,
      encountered: [{ took_place_at: { _label: 'New York', defined_by: 'POINT (-74 40.7)' } }],
      current_location: { _label: 'Boston', defined_by: 'POINT (-71 42)' },
    };
    render(<App record={journey} />);
    await act(async () => {});
    fireEvent.click(screen.getByTitle('Play trajectory'));
    await act(async () => { await vi.advanceTimersByTimeAsync(9800); });
    fireEvent.click(screen.getByTitle('Restart from origin'));
    fireEvent.change(screen.getByRole('slider'), { target: { value: '1' } });
    fireEvent.click(screen.getByTitle('Play trajectory'));
    await act(async () => { await vi.advanceTimersByTimeAsync(1000); });
    expect(mapState().legProgress).toBeGreaterThan(0.2);
  });

  it('takes longer to draw long-distance legs', async () => {
    const longRecord = {
      ...record,
      current_location: { _label: 'New York', defined_by: 'POINT (-74 40.7)' },
    };
    render(<App record={longRecord} />);
    await act(async () => {});
    fireEvent.click(screen.getByTitle('Play trajectory'));
    await act(async () => { await vi.advanceTimersByTimeAsync(5000); });
    expect(mapState().activeLegIndex).toBe(0);
    expect(mapState().legProgress).toBeGreaterThan(0.4);
    expect(mapState().legProgress).toBeLessThan(0.6);
    await act(async () => { await vi.advanceTimersByTimeAsync(7000); });
    expect(mapState()).toEqual({ activeLegIndex: 1, legProgress: 0, isPlaying: false });
  });

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
