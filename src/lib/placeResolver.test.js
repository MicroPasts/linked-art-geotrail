// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { geocodePlaceName, lookupCachedCoordinates, refinePlaceQuery } from './placeResolver';

afterEach(() => {
  localStorage.clear();
  vi.unstubAllGlobals();
});

describe('place resolution', () => {
  it('refines storage and exhibition names and matches built-in places', () => {
    expect(refinePlaceQuery('Storage — London')).toBe('London');
    expect(refinePlaceQuery('Exhibition at Mauritshuis, The Hague')).toBe('Mauritshuis, The Hague');
    expect(lookupCachedCoordinates('London')).toEqual([-0.1276, 51.5072]);
  });

  it('caches successful geocoding results for later lookups', async () => {
    const fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ results: [{ longitude: 7.1, latitude: 46.2 }] }),
    });
    vi.stubGlobal('fetch', fetch);
    await expect(geocodePlaceName('TestvilleUnique')).resolves.toEqual([7.1, 46.2]);
    await expect(geocodePlaceName('TestvilleUnique')).resolves.toEqual([7.1, 46.2]);
    expect(fetch).toHaveBeenCalledOnce();
  });
});
