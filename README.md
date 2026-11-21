# Linked Art GeoTrail

An interactive geospatial event-arc viewer for **Linked Art** (`application/ld+json`) cultural heritage records. It uses React 18, Vite, Tailwind CSS, Lucide, and MapLibre GL, and complements [`linked-art-viewer`](https://github.com/MicroPasts/linked-art-viewer) and [`provenance-timeline`](https://github.com/MicroPasts/provenance-timeline).

## Features

* **Event-to-place arcs:** Extracts spatial events from production, discovery, provenance, exhibitions, and current-location fields, then plots and animates quadratic Bezier trajectories.
* **Manual playback:** Starts at the origin and advances through **Play**, timeline scrubbing, or event selection.
* **WKT and text-place resolution:** Supports `POINT`, `POLYGON`, and `MULTIPOLYGON`; text places can use the built-in gazetteer or a cached Nominatim fallback.
* **Attached imagery:** Finds representations and digital images, optimizes IIIF Image API URLs, compresses CORS-accessible images, and provides a full-resolution lightbox.
* **URL and JSON-LD loading:** Accepts raw Linked Art JSON-LD or an `http(s)://` record URL.
* **Embeddable props:** Passes a record directly and can hide the loader with `allowInput={false}`.
* **Dark and light themes:** Switches the interface and MapLibre basemap between dark-matter and positron.

## Project Structure

```text
linked-art-geotrail/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── umd.jsx
    ├── index.css
    ├── App.jsx
    ├── data/
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

The build writes `linked-art-geotrail.umd.js` and `linked-art-geotrail.css` to `dist-umd/`.

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

## How Linked Art Records Are Extracted

1. **Production (`produced_by`):** Extracts creation events, `timespan` display labels/dates, `carried_out_by` makers, `took_place_at` WKT geometries, or object/activity `Creation Place Description` (`aat:300435448`) text statements.
2. **Discovery (`encountered` / `found_by`):** Captures findspot or archaeological encounter events and any associated `POLYGON` or `POINT` geometries.
3. **Provenance (`changed_ownership_through`):** Reads ownership transfers and nested `part_of` provenance activities, timespans, and provenance location statements (`aat:300444175`).
4. **Exhibitions (`used_for` / `member_of[].used_for`):** Collects exhibition activities and venues.
5. **Current Location (`current_location`):** Plots repository locations; if `current_location` is an internal space (such as Getty `"Storage"`, `aat:300004465`) without WKT coordinates, it pairs the label with `current_owner` institution details for geocoding.

## License

MIT