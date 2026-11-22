import { beforeEach, describe, expect, it, vi } from 'vitest';
import { extractLinkedArtTrail, enrichTrailWithGeocoding } from './linkedArtExtractor';
import { geocodePlaceName } from './placeResolver';

vi.mock('./placeResolver', () => ({
  lookupCachedCoordinates: vi.fn(() => null),
  geocodePlaceName: vi.fn(),
}));

describe('indoor location geocoding', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('tries the owner if the gallery cannot be resolved', async () => {
    vi.mocked(geocodePlaceName)
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce([7, 46]);
    const trail = extractLinkedArtTrail({
      current_location: {
        _label: 'Gallery A',
        classified_as: [{ id: 'http://vocab.getty.edu/aat/300240057' }],
      },
      current_owner: [{ _label: 'Museum in Testville' }],
    });
    const enriched = await enrichTrailWithGeocoding(trail);
    expect(geocodePlaceName.mock.calls.map(([name]) => name)).toEqual(['Gallery A', 'Museum in Testville']);
    expect(enriched.events[0]).toMatchObject({
      placeLabel: 'Gallery A',
      coordinates: [7, 46],
      isApproximate: true,
    });
  });

  it('prefers a successfully geocoded gallery over its owner', async () => {
    vi.mocked(geocodePlaceName).mockResolvedValue([8, 47]);
    const trail = extractLinkedArtTrail({
      current_location: {
        _label: 'Gallery B',
        classified_as: [{ id: 'http://vocab.getty.edu/aat/300240057' }],
      },
      current_owner: [{ _label: 'Museum in Testville' }],
    });
    const enriched = await enrichTrailWithGeocoding(trail);
    expect(geocodePlaceName).toHaveBeenCalledOnce();
    expect(enriched.events[0].coordinates).toEqual([8, 47]);
  });
});
