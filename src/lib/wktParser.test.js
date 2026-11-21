import { describe, expect, it } from 'vitest';
import { parseWKT } from './wktParser';

describe('parseWKT', () => {
  it('parses points with a CRS prefix', () => {
    expect(parseWKT('<http://www.opengis.net/def/crs/OGC/1.3/CRS84> POINT (-0.12 51.5)'))
      .toEqual({ centroid: [-0.12, 51.5] });
  });

  it('extracts polygon rings', () => {
    expect(parseWKT('POLYGON ((0 0, 4 0, 4 4, 0 0))').polygon)
      .toEqual([[[0, 0], [4, 0], [4, 4], [0, 0]]]);
  });

  it('extracts the first multipolygon', () => {
    const parsed = parseWKT('MULTIPOLYGON (((0 0, 4 0, 0 4, 0 0)), ((10 10, 11 10, 10 11, 10 10)))');
    expect(parsed.polygon).toEqual([[[0, 0], [4, 0], [0, 4], [0, 0]]]);
  });

  it('rejects unsupported or invalid inputs', () => {
    expect(parseWKT('LINESTRING (0 0, 1 1)')).toBeNull();
    expect(parseWKT('POINT (x y)')).toBeNull();
    expect(parseWKT(null)).toBeNull();
  });
});
