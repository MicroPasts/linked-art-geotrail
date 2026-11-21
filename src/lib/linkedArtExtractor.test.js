import { describe, expect, it } from 'vitest';
import { extractLinkedArtTrail, enrichTrailWithGeocoding } from './linkedArtExtractor';

const place = (label, coordinates) => ({ _label: label, defined_by: `POINT (${coordinates})` });
const timespan = (year) => ({ begin_of_the_begin: `${year}-01-01`, _label: String(year) });

describe('extractLinkedArtTrail', () => {
  it('extracts, sorts, and indexes events across linked art activity types', () => {
    const result = extractLinkedArtTrail({
      id: 'object',
      _label: 'Object',
      produced_by: { id: 'production', timespan: timespan(1800), took_place_at: place('Rome', '12 41') },
      encountered: [{ id: 'find', timespan: timespan(1850), took_place_at: place('London', '-1 51') }],
      changed_ownership_through: [{
        id: 'transfer',
        part_of: [{ timespan: timespan(1900), took_place_at: place('Paris', '2 48') }],
      }],
      member_of: [{ used_for: [{ id: 'show', timespan: timespan(1950), took_place_at: place('Berlin', '13 52') }] }],
      current_location: place('Museum', '0 52'),
    });
    expect(result.objectLabel).toBe('Object');
    expect(result.events.map(({ category }) => category)).toEqual([
      'production', 'discovery', 'provenance', 'exhibition', 'current_location',
    ]);
    expect(result.events.map(({ index }) => index)).toEqual([0, 1, 2, 3, 4]);
    expect(result.events[2]).toMatchObject({ placeLabel: 'Paris', coordinates: [2, 48], dateDisplay: '1900' });
  });

  it('uses a parent place geometry and built-in gazetteer for text places', () => {
    const result = extractLinkedArtTrail({
      produced_by: {
        took_place_at: { _label: 'Workshop', part_of: [place('Rome', '12 41')] },
      },
      found_by: { took_place_at: { _label: 'London' } },
    });
    expect(result.events[0]).toMatchObject({ coordinates: [12, 41], isApproximate: false });
    expect(result.events[1]).toMatchObject({ coordinates: [-0.1276, 51.5072], isApproximate: true });
  });

  it('does not replace a trail when no geocoding is needed', async () => {
    const trail = extractLinkedArtTrail({ produced_by: { took_place_at: place('Rome', '12 41') } });
    await expect(enrichTrailWithGeocoding(trail)).resolves.toBe(trail);
  });
});
