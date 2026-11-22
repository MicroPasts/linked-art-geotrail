# @micropasts/linked-art-geotrail

An interactive geospatial event-arc viewer for **Linked Art** (`application/ld+json`) cultural heritage records. It uses React 18, Vite, Tailwind CSS, Lucide, and MapLibre GL JS 6.4.1, and complements [`linked-art-viewer`](https://github.com/MicroPasts/linked-art-viewer) and [`provenance-timeline`](https://github.com/MicroPasts/provenance-timeline).

## Features

* **Event-to-place arcs:** Extracts spatial events from production, discovery, provenance, exhibitions, and current-location fields, then plots and animates quadratic Bezier trajectories.
* **Manual playback:** Starts at the origin and advances through **Play**, timeline scrubbing, or event selection.
  During playback, each solid trail draws to the next mapped stop before its
  marker, label, polygon, and popup appear, with the camera following the
  moving trail. Legs over 2,000 km take longer, up to 18 seconds, and pause
  for two seconds at arrival before continuing. Dragging the map or using
  recenter temporarily stops camera following until playback resumes or
  advances to the next event. Dashed arcs preview the route. Routes crossing
  the antimeridian take the shorter path.
  Pausing preserves the current progress; selecting an event reveals it
  immediately, and resetting returns to the origin. If intermediate events
  have no coordinates, the trail to the next mapped stop draws during the
  final leg before that stop.
* **Map legend and shared places:** A collapsible floating legend explains the
  map colours. When two or more revealed events have identical coordinates,
  their shared point pulses and shows the latest revealed event's title, place
  and category colour. Clicking it selects that event. The point uses a static
  halo when reduced motion is preferred.
* **Recenter map:** Return to the most recently revealed mapped stop without
  changing the zoom. The control is disabled until a mapped stop is available.
* **WKT and text-place resolution:** Supports `POINT`, `POLYGON`, and `MULTIPOLYGON`; text places can use the built-in gazetteer or a cached Nominatim fallback.
* **Attached imagery:** Finds representations and digital images, optimizes IIIF Image API URLs, compresses CORS-accessible images, and provides a full-resolution lightbox.
* **URL and JSON-LD loading:** Accepts raw Linked Art JSON-LD or an `http(s)://` record URL.
* **Embeddable props:** Passes a record directly and can hide the loader with `allowInput={false}`.
* **Dark and light themes:** Switches the interface and MapLibre basemap between dark-matter and positron.
* **Basemap selector:** Choose CARTO Positron, Dark Matter, or Voyager,
  MIERUNE Mono, or OpenFreeMap Fiord or Liberty without an API key, or follow
  the interface theme. Map attribution remains visible; providers' service
  availability and usage terms apply.

## Project Structure

```text
linked-art-geotrail/
├── index.html
├── examples/
│   └── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
├── LICENSE.md
├── dist/
├── dist-lib/
├── dist-umd/
├── docs/
└── src/
    ├── main.jsx
    ├── index.jsx
    ├── umd.jsx
    ├── index.css
    ├── App.jsx
    ├── docs/
    │   ├── main.jsx
    │   └── DocsApp.jsx
    ├── data/
    │   ├── exampleRecords.js
    │   ├── gettyRecord.js
    │   ├── piebaldRecord.js
    │   └── sampleRecord.js
    ├── lib/
    │   ├── arcGeometry.js
    │   ├── imageOptimizer.js
    │   ├── linkedArtExtractor.js
    │   ├── linkedArtFetcher.js
    │   ├── placeResolver.js
    │   └── wktParser.js
    └── components/
        ├── EventSidebar.jsx
        └── GeoArcMap.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

Open the address printed by Vite (normally `http://localhost:5173`).

In the interactive examples, select **Load URL / JSON**, paste a public
HTTP(S) Linked Art URL or a JSON-LD document, and select **Fetch / Parse &
Plot Events**. The loader requires a JSON object with non-empty `id` and `type`
fields; it does not perform full Linked Art schema validation. If direct
loading fails, it sends the URL to the public `corsproxy.io` and
`api.allorigins.win` proxies in sequence. Do not use private URLs, credentials,
or tokens in URLs. Record content is displayed as text, and image and place
links are limited to HTTP(S).

### Tests

Run the automated unit and component tests with a supported Node.js version
(20, 22, or 24 and newer):

```bash
npm test
```

The map component tests mock MapLibre; they do not exercise WebGL or remote basemaps.

## Install in a Third-Party npm Project

Install the package and its React peer dependencies:

```bash
npm install @micropasts/linked-art-geotrail react react-dom
```

Import the component and stylesheet, then give it a sized container:

```jsx
import GeoTrail from '@micropasts/linked-art-geotrail';
import '@micropasts/linked-art-geotrail/style.css';

export function MuseumObjectTrail({ record }) {
  return (
    <div style={{ height: '700px', width: '100%' }}>
      <GeoTrail
        record={record}
        allowInput={false}
        theme="light"
      />
    </div>
  );
}
```

The host must provide React and React DOM 18. The library bundles MapLibre GL JS
and includes its styles; React, React DOM, and Lucide are external dependencies.

The package also exports `App` as a named export:

```jsx
import { App } from '@micropasts/linked-art-geotrail';
```

For a package from this repository rather than a published registry release:

```bash
npm install github:MicroPasts/linked-art-geotrail
```

Publishing and installing the scoped npm package requires npm registry access to `@micropasts`. A release build is produced with:

```bash
npm run build:lib
npm publish --access public
```

### Static app build

Build the full app and the examples/docs page:

```bash
npm run build
npm run preview
```

The output is written to `dist/` and can be deployed to static hosting such as GitHub Pages.

### Documentation and examples build

```bash
npm run build:docs
```

This writes the examples/docs page to `docs/`.

### UMD browser build

Create a browser-ready UMD bundle:

```bash
npm run build:umd
```

The build writes `linked-art-geotrail.umd.js`, `linked-art-geotrail.css`, and
an `assets/` directory containing the MapLibre worker to `dist-umd/`. Deploy
the entire directory, preserving the relative paths. The worker must be served
as JavaScript; a content security policy must allow workers from its origin.

Serve or deploy that directory, then mount the viewer from a plain HTML page:

```html
<link rel="stylesheet" href="/dist-umd/linked-art-geotrail.css">
<div id="geotrail" style="height: 700px"></div>

<script src="/dist-umd/linked-art-geotrail.umd.js"></script>
<script>
  const root = LinkedArtGeoTrail.mount('#geotrail', {
    record: window.myLinkedArtRecord,
    allowInput: false,
    theme: 'light'
  });
</script>
```

The mount target can also be an element:

```js
const root = LinkedArtGeoTrail.mount(
  document.getElementById('geotrail'),
  { allowInput: false, theme: 'dark' }
);
```

Call `root.unmount()` when removing the mounted component.

## Embedding & Component Props

You can render `App` with an initial Linked Art object, lock it to read-only display mode without the URL/JSON input drawer, and choose `light` or `dark` mode:

```jsx
import App from './App';
import myLinkedArtRecord from './data/myObject.json';

export function MuseumObjectTrail() {
  return (
    <App allowInput={false} record={myLinkedArtRecord} theme="light" />
  );
}
```

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `record` | `Object` | `SAMPLE_LINKED_ART_RECORD` | Initial Linked Art JSON-LD document to parse and plot. |
| `allowInput` | `boolean` | `true` | Shows or hides the **Load URL / JSON** button and input drawer. |
| `theme` | `'dark' \| 'light'` | `'dark'` | Sets the initial visual theme for the sidebar, popups, and map style. |
| `classNames` | `Object` | — | Additional CSS classes for named interface parts. |
| `styles` | `Object` | — | Inline React style objects for named interface parts. |
| `mapStyles` | `Object` | Built-in basemaps | Optional `dark` and `light` MapLibre style URLs or style specification objects. |
| `mapAppearance` | `Object` | Built-in colors | Optional map trail, node, and polygon color overrides. |

### Customizing styles

The default stylesheet and light/dark themes remain the starting point.
Provide `classNames` or `styles` to customize individual parts without
replacing the component. Both props also work with the UMD `mount` function.

```jsx
import GeoTrail from '@micropasts/linked-art-geotrail';
import '@micropasts/linked-art-geotrail/style.css';
import './museum-geotrail.css';

const mapStyles = {
  dark: 'https://example.org/maps/dark/style.json',
  light: 'https://example.org/maps/light/style.json',
};

export function MuseumTrail({ record }) {
  return (
    <div style={{ height: 700 }}>
      <GeoTrail
        record={record}
        classNames={{ root: 'museum-trail', eventCard: 'museum-card' }}
        styles={{ sidebar: { width: '350px' }, popup: { color: '#222' } }}
        mapStyles={mapStyles}
        mapAppearance={{
          ghostColor: '#777777',
          transitColor: '#9b2861',
          polygonFillColor: '#b3d9bd',
          polygonOutlineColor: '#438553',
          categoryColors: { production: '#a44a16', provenance: '#9b2861' },
        }}
      />
    </div>
  );
}
```

In the stylesheet, use the stable `geotrail-*` hooks or your own classes.
For example:

```css
.museum-trail .geotrail-sidebar { font-family: Georgia, serif; }
.museum-trail .museum-card[data-active="true"] { border-color: #9b2861; }
.museum-trail .geotrail-popup { font-family: Georgia, serif; }
```

Load overrides after the package stylesheet and use selectors with sufficient
specificity to override the default utilities. `styles` takes precedence for
normal CSS properties; CSS variables can also be supplied with keys such as
`'--accent'`. The root has a `data-theme` attribute, and event cards expose
`data-active`, `data-visited`, and `data-category`.

The keys supported by both `classNames` and `styles` are `root`, `sidebar`,
`sidebarHeader`, `themeButton`, `loadButton`, `loadForm`, `loadInput`,
`controls`, `playButton`, `resetButton`, `timeline`, `eventList`, `eventCard`,
`eventBadge`, `warnings`, `lightbox`, `mapContainer`, `map`, `popup`,
`recenterButton`, `basemapSelect`, `legend`, `legendButton`, and `legendContent`.
Their stable CSS hooks use the same key prefixed with `geotrail-`, for example
`.geotrail-eventCard`. The `popup` hook applies to the popup's inner content;
MapLibre's outer popup controls can be targeted with descendant selectors
such as `.museum-trail .maplibregl-popup-close-button`.

`mapStyles` accepts a MapLibre style URL or style specification for either
theme; omitted entries use the built-in basemaps. Custom styles must provide
the glyphs required to render the map labels. Keep style objects stable between
React renders to avoid unnecessary map reloads. The selector defaults to
**Follow theme**, which uses these custom styles when provided; selecting a
basemap overrides the theme's map until **Follow theme** is selected
again. The interface theme remains independent of an explicitly chosen map.
MIERUNE Mono uses raster tiles from MIERUNE and map-label fonts from
OpenFreeMap; Fiord and Liberty use OpenFreeMap's vector tiles and fonts.
`mapAppearance` accepts
`ghostColor`, `transitColor`, `polygonFillColor`, `polygonOutlineColor`, and
`categoryColors` (`production`, `discovery`, `provenance`, `exhibition`,
`current_location`, or `other`). Missing colors retain the defaults. Map colors
must be valid MapLibre color values, not CSS variables. The floating legend
reflects the supplied map colours.

## How Linked Art Records Are Extracted

1. **Production (`produced_by`):** Extracts creation events, `timespan` display labels/dates, `carried_out_by` makers, `took_place_at` WKT geometries, or object/activity `Creation Place Description` (`aat:300435448`) text statements.
2. **Discovery (`encountered` / `found_by`):** Captures findspot or archaeological encounter events and any associated `POLYGON` or `POINT` geometries.
3. **Provenance (`changed_ownership_through`):** Reads ownership transfers and nested `part_of` provenance activities, timespans, and provenance location statements (`aat:300444175`).
4. **Exhibitions (`used_for` / `member_of[].used_for`):** Collects exhibition activities and venues.
5. **Current Location (`current_location`):** Plots repository locations; if `current_location` is an internal space (such as Getty `"Storage"`, `aat:300004465`) without WKT coordinates, it pairs the label with `current_owner` institution details for geocoding.

## License

MIT