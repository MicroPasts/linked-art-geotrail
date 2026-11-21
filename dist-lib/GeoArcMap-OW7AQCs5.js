import { g as Y, j as H } from "./index-B9ml53ri.js";
import K, { useRef as j, useState as G, useMemo as _, useEffect as z } from "react";
import P from "maplibre-gl";
function W(e, a, x = 90, f = 0.22) {
  if (!Array.isArray(e) || !Array.isArray(a) || e.length < 2 || a.length < 2)
    return [];
  const [g, h] = e, [y, c] = a;
  if (Math.abs(y - g) < 1e-6 && Math.abs(c - h) < 1e-6)
    return [[g, h], [y, c]];
  const m = (g + y) / 2, M = (h + c) / 2, $ = y - g;
  let b = -(c - h) * f, s = $ * f;
  s < 0 && (b = -b, s = -s);
  const k = m + b, N = M + s, O = [];
  for (let T = 0; T <= x; T++) {
    const S = T / x, i = 1 - S, A = i * i * g + 2 * i * S * k + S * S * y, n = i * i * h + 2 * i * S * N + S * S * c;
    O.push([A, n]);
  }
  return O;
}
function X(e, a) {
  if (!Array.isArray(e) || e.length === 0)
    return { trail: [], head: [0, 0] };
  if (e.length === 1)
    return { trail: [e[0]], head: e[0] };
  const x = Math.max(0, Math.min(1, Number(a) || 0));
  if (x <= 0)
    return { trail: [e[0]], head: e[0] };
  if (x >= 1)
    return { trail: e, head: e[e.length - 1] };
  const f = e.length - 1, g = x * f, h = Math.min(Math.floor(g), f - 1), y = g - h, [c, m] = e[h], [M, $] = e[h + 1], C = [c + (M - c) * y, m + ($ - m) * y];
  return { trail: [...e.slice(0, h + 1), C], head: C };
}
const D = {
  production: "#d97706",
  discovery: "#059669",
  provenance: "#0284c7",
  exhibition: "#9333ea",
  current_location: "#e11d48",
  other: "#64748b"
}, Z = {
  dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
  light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
}, q = 6;
function B(e, a) {
  e.getSource("place-polygons") || e.addSource("place-polygons", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  }), e.getLayer("place-polygons-fill") || e.addLayer({
    id: "place-polygons-fill",
    type: "fill",
    source: "place-polygons",
    paint: { "fill-color": "#10b981", "fill-opacity": 0.16 }
  }), e.getLayer("place-polygons-outline") || e.addLayer({
    id: "place-polygons-outline",
    type: "line",
    source: "place-polygons",
    paint: { "line-color": "#059669", "line-width": 1.5, "line-dasharray": [2, 2] }
  }), e.getSource("ghost-arcs") || e.addSource("ghost-arcs", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  }), e.getLayer("ghost-arcs-layer") || e.addLayer({
    id: "ghost-arcs-layer",
    type: "line",
    source: "ghost-arcs",
    layout: { "line-cap": "round", "line-join": "round" },
    paint: {
      "line-color": a ? "#94a3b8" : "#475569",
      "line-width": 2,
      "line-dasharray": [2, 3],
      "line-opacity": 0.65
    }
  }), e.getSource("active-trail") || e.addSource("active-trail", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  }), e.getLayer("active-trail-glow") || e.addLayer({
    id: "active-trail-glow",
    type: "line",
    source: "active-trail",
    layout: { "line-cap": "round", "line-join": "round" },
    paint: { "line-color": "#0284c7", "line-width": 8, "line-opacity": 0.22, "line-blur": 4 }
  }), e.getLayer("active-trail-line") || e.addLayer({
    id: "active-trail-line",
    type: "line",
    source: "active-trail",
    layout: { "line-cap": "round", "line-join": "round" },
    paint: {
      "line-color": ["coalesce", ["get", "color"], "#0284c7"],
      "line-width": 3.5,
      "line-opacity": 0.95
    }
  }), e.getSource("event-nodes") || e.addSource("event-nodes", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  }), e.getLayer("event-nodes-circle") || e.addLayer({
    id: "event-nodes-circle",
    type: "circle",
    source: "event-nodes",
    paint: {
      "circle-radius": ["case", ["boolean", ["get", "isActive"], !1], 10, 7],
      "circle-color": ["get", "color"],
      "circle-stroke-width": 2.5,
      "circle-stroke-color": a ? "#ffffff" : "#020617"
    }
  }), e.getLayer("event-nodes-label") || e.addLayer({
    id: "event-nodes-label",
    type: "symbol",
    source: "event-nodes",
    layout: {
      "text-field": [
        "concat",
        ["to-string", ["+", ["get", "index"], 1]],
        ". ",
        ["get", "placeLabel"]
      ],
      "text-size": 12,
      "text-offset": [0, 1.35],
      "text-anchor": "top",
      "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"]
    },
    paint: {
      "text-color": a ? "#0f172a" : "#f8fafc",
      "text-halo-color": a ? "#ffffff" : "#020617",
      "text-halo-width": 1.5
    }
  }), e.getSource("transit-head") || e.addSource("transit-head", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  }), e.getLayer("transit-head-halo") || e.addLayer({
    id: "transit-head-halo",
    type: "circle",
    source: "transit-head",
    paint: { "circle-radius": 14, "circle-color": "#0284c7", "circle-opacity": 0.25 }
  }), e.getLayer("transit-head-core") || e.addLayer({
    id: "transit-head-core",
    type: "circle",
    source: "transit-head",
    paint: {
      "circle-radius": 5.5,
      "circle-color": "#ffffff",
      "circle-stroke-width": 2.5,
      "circle-stroke-color": "#0284c7"
    }
  });
}
function J({
  events: e,
  activeLegIndex: a = 0,
  legProgress: x = 0,
  isPlaying: f = !1,
  onSelectEvent: g,
  theme: h = "dark"
}) {
  const y = j(null), c = j(null), m = j(null), M = j(!1), $ = j(null), C = j(null), b = j(!1), [s, k] = G(0), [N, O] = G(!1), [T, S] = G(0), i = h === "light", A = Z[i ? "light" : "dark"], n = _(
    () => (Array.isArray(e) ? e : []).filter(
      (t) => Array.isArray(t.coordinates) && t.coordinates.length === 2
    ),
    [e]
  ), F = _(() => {
    const t = [];
    for (let o = 0; o < n.length - 1; o++)
      t.push({
        from: n[o],
        to: n[o + 1],
        coords: W(
          n[o].coordinates,
          n[o + 1].coordinates,
          90,
          0.22
        )
      });
    return t;
  }, [n]), u = _(() => {
    if (n.length === 0) return null;
    if (f && a < n.length - 1)
      return n[a + 1];
    const t = e == null ? void 0 : e[Math.min(a, ((e == null ? void 0 : e.length) || 1) - 1)];
    return n.find((o) => o.index === (t == null ? void 0 : t.index)) || n[Math.min(a, n.length - 1)];
  }, [e, n, a, f]);
  return z(() => {
    var w;
    if (!y.current || c.current) return;
    C.current = A;
    const t = new P.Map({
      container: y.current,
      style: A,
      center: ((w = n[0]) == null ? void 0 : w.coordinates) || [5, 46],
      zoom: q,
      pitch: 24,
      attributionControl: !1
    });
    t.addControl(new P.NavigationControl({ showCompass: !0 }), "top-right");
    const o = () => {
      B(t, i), k((r) => r + 1);
    };
    t.on("load", o), t.on("style.load", o), t.on("error", (r) => {
      var L;
      const l = ((L = r == null ? void 0 : r.error) == null ? void 0 : L.message) || "";
      l && l !== "Load failed" && console.warn("MapLibre warning:", l);
    }), t.on("click", "event-nodes-circle", (r) => {
      var E;
      const l = (E = r.features) == null ? void 0 : E[0];
      if (!(l != null && l.properties)) return;
      const L = Number(l.properties.origIndex);
      O(!1), S((U) => U + 1), g == null || g(Number.isFinite(L) ? L : Number(l.properties.index));
    }), t.on("mouseenter", "event-nodes-circle", () => {
      t.getCanvas().style.cursor = "pointer";
    }), t.on("mouseleave", "event-nodes-circle", () => {
      t.getCanvas().style.cursor = "";
    });
    const d = t.getCanvas(), p = (r) => {
      r.preventDefault(), k(0);
    }, v = () => {
      B(t, i), k((r) => r + 1);
    };
    d.addEventListener("webglcontextlost", p, !1), d.addEventListener("webglcontextrestored", v, !1);
    const R = new ResizeObserver(() => {
      t.resize();
    });
    return R.observe(y.current), c.current = t, () => {
      var r;
      R.disconnect(), d.removeEventListener("webglcontextlost", p), d.removeEventListener("webglcontextrestored", v), (r = m.current) == null || r.remove(), m.current = null, t.remove(), c.current = null, C.current = null;
    };
  }, []), z(() => {
    const t = c.current;
    !t || s === 0 || C.current !== A && (C.current = A, k(0), t.setStyle(A));
  }, [A, s]), z(() => {
    const t = c.current;
    if (!t || s === 0) return;
    B(t, i);
    const o = t.getSource("ghost-arcs"), d = t.getSource("place-polygons");
    !o || !d || (o.setData({
      type: "FeatureCollection",
      features: F.map((p) => ({
        type: "Feature",
        properties: {},
        geometry: { type: "LineString", coordinates: p.coords }
      }))
    }), d.setData({
      type: "FeatureCollection",
      features: n.filter((p) => p.polygon && p.polygon.length > 0).map((p) => ({
        type: "Feature",
        properties: { title: p.placeLabel },
        geometry: { type: "Polygon", coordinates: p.polygon }
      }))
    }), n.length > 0 && !M.current && t.jumpTo({
      center: n[0].coordinates,
      zoom: q
    }));
  }, [n, F, i, s]), z(() => {
    const t = c.current;
    if (!t || s === 0 || !u) return;
    const o = `${u.id ?? u.index}:${u.coordinates.join(",")}:${f ? "play" : "idle"}`;
    if ($.current === o) return;
    const d = a === 0 && !f && !M.current;
    $.current = o, d ? t.jumpTo({
      center: u.coordinates,
      zoom: q
    }) : (M.current = !0, t.easeTo({
      center: u.coordinates,
      zoom: q,
      duration: 1200,
      essential: !0
    }));
  }, [a, f, u, s]), z(() => {
    var L, E, U;
    const t = c.current;
    if (!t || s === 0 || !u) return;
    if (N) {
      b.current = !0, (L = m.current) == null || L.remove(), m.current = null, b.current = !1;
      return;
    }
    b.current = !0, (E = m.current) == null || E.remove(), b.current = !1;
    const o = (U = u.images) == null ? void 0 : U[0], d = o ? Y(o.url, { maxWidth: 420 }) : "", p = String((o == null ? void 0 : o.label) || u.title).replace(/"/g, "&quot;"), v = d ? `<div class="w-full h-32 overflow-hidden ${i ? "bg-slate-100 border-slate-200" : "bg-slate-950 border-slate-800"} rounded-t-xl border-b">
           <img
             data-popup-img
             src="${d}"
             alt="${p}"
             loading="lazy"
             decoding="async"
             class="w-full h-full object-cover block"
           />
         </div>` : "", R = `
      <div class="w-[264px] max-w-full overflow-hidden ${i ? "bg-white text-slate-900" : "bg-slate-900 text-slate-100"}">
        ${v}
        <div class="p-3">
          <div class="text-[11px] font-semibold uppercase tracking-wider ${i ? "text-sky-700" : "text-sky-400"}">${u.dateDisplay}</div>
          <div class="text-sm font-semibold mt-0.5 line-clamp-2">${u.title}</div>
          <div class="text-xs ${i ? "text-slate-600" : "text-slate-400"} mt-0.5 truncate">${u.placeLabel}</div>
        </div>
      </div>
    `, w = new P.Popup({
      offset: 14,
      maxWidth: "272px",
      closeButton: !0,
      closeOnClick: !1
    }).setLngLat(u.coordinates).setHTML(R).addTo(t);
    w.on("close", () => {
      b.current || O(!0);
    });
    const r = w.getElement(), l = r == null ? void 0 : r.querySelector("img[data-popup-img]");
    l && (o != null && o.url) && l.addEventListener("error", () => {
      l.src !== o.url && (l.src = o.url);
    }), m.current = w;
  }, [u, i, s, N, T]), z(() => {
    const t = c.current;
    if (!t || s === 0 || n.length === 0) return;
    B(t, i);
    const o = t.getSource("active-trail"), d = t.getSource("transit-head"), p = t.getSource("event-nodes");
    if (!o || !d || !p) return;
    const v = Math.min(a, n.length - 1);
    p.setData({
      type: "FeatureCollection",
      features: n.map((r, l) => ({
        type: "Feature",
        properties: {
          index: l,
          origIndex: r.index,
          placeLabel: r.placeLabel,
          color: D[r.category] || D.other,
          isActive: l === v
        },
        geometry: { type: "Point", coordinates: r.coordinates }
      }))
    });
    const R = [];
    for (let r = 0; r < v && r < F.length; r++)
      R.push({
        type: "Feature",
        properties: { color: D[F[r].to.category] || D.other },
        geometry: { type: "LineString", coordinates: F[r].coords }
      });
    let w = n[v].coordinates;
    if (v < F.length && (f || x > 0)) {
      const r = F[v], { trail: l, head: L } = X(r.coords, x);
      w = L, l.length >= 2 && R.push({
        type: "Feature",
        properties: { color: D[r.to.category] || D.other },
        geometry: { type: "LineString", coordinates: l }
      });
    }
    o.setData({ type: "FeatureCollection", features: R }), d.setData({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: { type: "Point", coordinates: w }
        }
      ]
    });
  }, [a, x, f, n, F, i, s]), /* @__PURE__ */ H.jsx("div", { ref: y, className: "w-full h-full" });
}
const ee = K.memo(J);
export {
  ee as GeoArcMap,
  J as GeoArcMapComponent
};
