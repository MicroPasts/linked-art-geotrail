import { describe, expect, it } from 'vitest';
import { legDuration } from './animationTiming';

describe('legDuration', () => {
  const stop = (coordinates) => ({ coordinates });

  it('keeps short or same-place legs at the existing duration', () => {
    expect(legDuration([stop([12, 41]), stop([-1, 51])], 0)).toBe(4500);
    expect(legDuration([stop([12, 41]), stop([12, 41])], 0)).toBe(4500);
  });

  it('slows long legs proportionally and caps very long legs', () => {
    const atlantic = legDuration([stop([12.5, 41.9]), stop([-74, 40.7])], 0);
    expect(atlantic).toBeGreaterThan(9300);
    expect(atlantic).toBeLessThan(9500);
    expect(legDuration([stop([0, 0]), stop([180, 0])], 0)).toBe(18000);
  });

  it('uses the last mapped stop when intermediate events have no coordinates', () => {
    const stops = [stop([12.5, 41.9]), stop(null), stop([-74, 40.7])];
    expect(legDuration(stops, 0)).toBe(4500);
    expect(legDuration(stops, 1)).toBe(legDuration([stops[0], stops[2]], 0));
    expect(legDuration([stop(null), stops[2]], 0)).toBe(4500);
  });
});
