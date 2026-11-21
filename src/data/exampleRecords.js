import { SAMPLE_LINKED_ART_RECORD } from './sampleRecord';
import { SAMPLE_GETTY_LINKED_ART_RECORD } from './gettyRecord';
import { SAMPLE_PIEBALD_RECORD } from './piebaldRecord';

export const EXAMPLE_PRESETS = [
{
    id: 'piebald',
    title: 'Piebald Example',
    description: 'Interactive mode with Piebald record.',
    record: SAMPLE_PIEBALD_RECORD,
    allowInput: false,
    theme: 'dark',
  },
  {
    id: 'severus-medallion',
    title: 'Roman Imperial Medallion (WKT + Polygons)',
    description: 'Interactive mode with URL/JSON input enabled, WKT point & polygon findspot, and dark theme.',
    record: SAMPLE_LINKED_ART_RECORD,
    allowInput: false,
    theme: 'dark',
  },
  {
    id: 'belvedere',
    title: 'Belvedere Antinous - Getty',
    description: 'Interactive mode',
    record: SAMPLE_GETTY_LINKED_ART_RECORD,
    allowInput: true,
    theme: 'dark'
  },
  {
    id: 'readonly-light-embed',
    title: 'Embedded Read-Only View (Light Mode)',
    description: 'Demonstrates allowInput={false} and theme="light" for museum object pages.',
    record: {
      '@context': 'https://linked.art/ns/v1/linked-art.json',
      id: 'https://example.org/linked-art/object/roman-ring-02',
      type: 'HumanMadeObject',
      _label: 'Gold Intaglio Ring with Mars (Roman Britain)',
      referred_to_by: [
        {
          type: 'LinguisticObject',
          content: 'Recovered in Hertfordshire, traded through London, and held in Cambridge.',
        },
      ],
      produced_by: {
        id: 'https://example.org/activity/prod-02',
        type: 'Production',
        _label: 'Workshop Manufacture',
        timespan: { _label: '2nd century CE' },
        took_place_at: {
          type: 'Place',
          _label: 'Rome, Italy',
          defined_by: 'POINT (12.4964 41.9028)',
        },
      },
      encountered: [
        {
          id: 'https://example.org/activity/find-02',
          type: 'Encounter',
          _label: 'Metal-Detected Findspot',
          timespan: { _label: '2019' },
          took_place_at: {
            type: 'Place',
            _label: 'Near Tring, Hertfordshire',
            defined_by: 'POINT (-0.6615 51.7927)',
          },
        },
      ],
      changed_ownership_through: [
        {
          id: 'https://example.org/activity/acq-02',
          type: 'Acquisition',
          _label: 'Auction Sale',
          timespan: { _label: '2020' },
          took_place_at: {
            type: 'Place',
            _label: 'London, United Kingdom',
            defined_by: 'POINT (-0.1276 51.5072)',
          },
        },
      ],
      current_location: {
        type: 'Place',
        _label: 'Cambridge, United Kingdom',
        defined_by: 'POINT (0.1218 52.2053)',
      },
    },
    allowInput: false,
    theme: 'light',
  },
];