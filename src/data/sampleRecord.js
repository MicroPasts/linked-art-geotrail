export const SAMPLE_LINKED_ART_RECORD = {
  '@context': 'https://linked.art/ns/v1/linked-art.json',
  id: 'https://example.org/linked-art/object/medallion-severus-01',
  type: 'HumanMadeObject',
  _label: 'Gold Medallion of Septimius Severus (Arras Hoard Type)',
  identified_by: [
    {
      type: 'Name',
      classified_as: [
        { id: 'http://vocab.getty.edu/aat/300404670', type: 'Type', _label: 'Primary Name' },
      ],
      content: 'Gold Medallion of Septimius Severus',
    },
  ],
  referred_to_by: [
    {
      type: 'LinguisticObject',
      content:
        'Struck in Rome c. 202 CE, transported to northern Gaul in the late 3rd century, recovered during clay extraction in Arras in 1922, and later exhibited internationally.',
    },
  ],
  representation: [
    {
      type: 'VisualItem',
      _label: 'Obverse & Reverse High-Resolution View',
      digitally_shown_by: [
        {
          id: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/MSR-2000-14-167-d.jpg/250px-MSR-2000-14-167-d.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail?width=250',
          type: 'DigitalObject',
          _label: 'Imperial Gold Coinage Reference Image',
          access_point: [
            {
              id: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/MSR-2000-14-167-d.jpg/250px-MSR-2000-14-167-d.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
              type: 'DigitalObject',
            },
          ],
        },
      ],
    },
  ],
  produced_by: {
    id: 'https://example.org/linked-art/activity/minting-rome',
    type: 'Production',
    _label: 'Imperial Minting in Rome',
    timespan: {
      type: 'TimeSpan',
      _label: '202 CE',
      begin_of_the_begin: '0202-01-01T00:00:00Z',
      end_of_the_end: '0202-12-31T23:59:59Z',
    },
    carried_out_by: [
      { id: 'https://vocab.getty.edu/ulan/500115700', type: 'Group', _label: 'Mint of Rome' },
    ],
    took_place_at: {
      id: 'https://vocab.getty.edu/tgn/7000874',
      type: 'Place',
      _label: 'Rome (Imperial Mint)',
      defined_by: 'POINT (12.4964 41.9028)',
    },
  },
  encountered: [
    {
      id: 'https://example.org/linked-art/activity/discovery-arras',
      type: 'Encounter',
      _label: 'Hoard Recovery at Beaurains / Arras',
      timespan: {
        type: 'TimeSpan',
        _label: '21 September 1922',
        begin_of_the_begin: '1922-09-21T00:00:00Z',
      },
      referred_to_by: [
        {
          type: 'LinguisticObject',
          content:
            'Uncovered in a clay pit south of Arras alongside Tetrarchic gold medallions and jewellery.',
        },
      ],
      took_place_at: {
        id: 'https://vocab.getty.edu/tgn/7008369',
        type: 'Place',
        _label: 'Beaurains, Arras (Pas-de-Calais)',
        defined_by:
          'POLYGON ((2.765 50.255, 2.805 50.255, 2.805 50.285, 2.765 50.285, 2.765 50.255))',
      },
    },
  ],
  changed_ownership_through: [
    {
      id: 'https://example.org/linked-art/activity/acquisition-paris',
      type: 'Acquisition',
      _label: 'Private Collection & Numismatic Dispersal',
      timespan: {
        type: 'TimeSpan',
        _label: '1924',
        begin_of_the_begin: '1924-05-01T00:00:00Z',
      },
      carried_out_by: [{ type: 'Person', _label: 'Parisian Numismatic Dealer' }],
      took_place_at: {
        id: 'https://vocab.getty.edu/tgn/7008038',
        type: 'Place',
        _label: 'Paris, France',
        defined_by: 'POINT (2.3522 48.8566)',
      },
    },
  ],
  used_for: [
    {
      id: 'https://example.org/linked-art/activity/exhibition-new-york',
      type: 'Activity',
      _label: 'Loan Exhibition: Rome and the Northern Frontier',
      timespan: {
        type: 'TimeSpan',
        _label: '1998',
        begin_of_the_begin: '1998-03-10T00:00:00Z',
      },
      took_place_at: {
        id: 'https://vocab.getty.edu/tgn/7007567',
        type: 'Place',
        _label: 'New York, United States',
        defined_by: 'POINT (-73.9632 40.7794)',
      },
    },
  ],
  current_location: {
    id: 'https://vocab.getty.edu/tgn/7011781',
    type: 'Place',
    _label: 'London, United Kingdom',
    defined_by: 'POINT (-0.1269 51.5194)',
  },
};