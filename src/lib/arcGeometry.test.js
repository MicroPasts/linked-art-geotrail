import { describe, expect, it } from 'vitest';
import { buildBezierArc, sliceArcAtProgress } from './arcGeometry';

describe('buildBezierArc', () => {
  it('creates a curved trajectory with the requested endpoints and segments', () => {
    const points = buildBezierArc([0, 0], [10, 0], 10);
    expect(points).toHaveLength(11);
    expect(points[0]).toEqual([0, 0]);
    expect(points[10]).toEqual([10, 0]);
    expect(points[5][1]).toBeGreaterThan(0);
  });

  it('handles coincident and missing endpoints', () => {
    expect(buildBezierArc([1, 2], [1, 2])).toEqual([[1, 2], [1, 2]]);
    expect(buildBezierArc(null, [1, 2])).toEqual([]);
  });

  it('crosses the antimeridian on the short path without leaving map latitude bounds', () => {
    const points = buildBezierArc([170, 75], [-170, 75]);
    expect(points[0]).toEqual([170, 75]);
    expect(points.at(-1)).toEqual([190, 75]);
    expect(points.every(([lon, lat]) => lon >= 170 && lon <= 190 && lat <= 85)).toBe(true);
    const opposite = buildBezierArc([-170, 75], [170, 75]);
    expect(opposite.at(-1)).toEqual([-190, 75]);
    const long = buildBezierArc([-170, 80], [0, 80]);
    expect(long.every(([, lat]) => lat <= 85)).toBe(true);
  });
});

describe('sliceArcAtProgress', () => {
  const points = [[0, 0], [2, 0], [4, 2]];

  it('interpolates the moving head and partial trail', () => {
    expect(sliceArcAtProgress(points, 0.75)).toEqual({
      head: [3, 1],
      trail: [[0, 0], [2, 0], [3, 1]],
    });
  });

  it('clamps progress and handles empty or single-point arcs', () => {
    expect(sliceArcAtProgress(points, -1)).toEqual({ trail: [[0, 0]], head: [0, 0] });
    expect(sliceArcAtProgress(points, 2)).toEqual({ trail: points, head: [4, 2] });
    expect(sliceArcAtProgress([], 0.5)).toEqual({ trail: [], head: [0, 0] });
    expect(sliceArcAtProgress([[1, 2]], 0.5)).toEqual({ trail: [[1, 2]], head: [1, 2] });
  });
});
