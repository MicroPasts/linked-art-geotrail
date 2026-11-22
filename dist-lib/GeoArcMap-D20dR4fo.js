import { g as te, j as re, c as I } from "./index-CLVDdt3U.js";
import oe, { useRef as k, useState as K, useMemo as X, useEffect as E } from "react";
import Z from "maplibre-gl";
function ne(e, c, j = 90, x = 0.22) {
  if (!Array.isArray(e) || !Array.isArray(c) || e.length < 2 || c.length < 2)
    return [];
  const [S, n] = e, [u, d] = c;
  if (Math.abs(u - S) < 1e-6 && Math.abs(d - n) < 1e-6)
    return [[S, n], [u, d]];
  const O = (S + u) / 2, w = (n + d) / 2, T = u - S;
  let F = -(d - n) * x, z = T * x;
  z < 0 && (F = -F, z = -z);
  const B = O + F, M = w + z, h = [];
  for (let b = 0; b <= j; b++) {
    const L = b / j, a = 1 - L, U = a * a * S + 2 * a * L * B + L * L * u, _ = a * a * n + 2 * a * L * M + L * L * d;
    h.push([U, _]);
  }
  return h;
}
function ie(e, c) {
  if (!Array.isArray(e) || e.length === 0)
    return { trail: [], head: [0, 0] };
  if (e.length === 1)
    return { trail: [e[0]], head: e[0] };
  const j = Math.max(0, Math.min(1, Number(c) || 0));
  if (j <= 0)
    return { trail: [e[0]], head: e[0] };
  if (j >= 1)
    return { trail: e, head: e[e.length - 1] };
  const x = e.length - 1, S = j * x, n = Math.min(Math.floor(S), x - 1), u = S - n, [d, O] = e[n], [w, T] = e[n + 1], v = [d + (w - d) * u, O + (T - O) * u];
  return { trail: [...e.slice(0, n + 1), v], head: v };
}
const P = {
  production: "#d97706",
  discovery: "#059669",
  provenance: "#0284c7",
  exhibition: "#9333ea",
  current_location: "#e11d48",
  other: "#64748b"
}, ce = {
  dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
  light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
}, Y = 6, le = {};
function W(e, c) {
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
      "line-color": c ? "#94a3b8" : "#475569",
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
      "circle-stroke-color": c ? "#ffffff" : "#020617"
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
      "text-color": c ? "#0f172a" : "#f8fafc",
      "text-halo-color": c ? "#ffffff" : "#020617",
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
function ae({
  events: e,
  activeLegIndex: c = 0,
  legProgress: j = 0,
  isPlaying: x = !1,
  onSelectEvent: S,
  theme: n = "dark",
  classNames: u,
  styles: d,
  mapStyles: O,
  mapAppearance: w = le
}) {
  const T = k(null), v = k(null), F = k(null), z = k(!1), B = k(null), M = k(null), h = k(null), b = k(!1), L = k(!1), [a, U] = K(0), [_, J] = K(!1), [N, ee] = K(0), m = n === "light", y = (O == null ? void 0 : O[n]) ?? ce[m ? "light" : "dark"], s = w.categoryColors, i = X(
    () => (Array.isArray(e) ? e : []).filter(
      (t) => Array.isArray(t.coordinates) && t.coordinates.length === 2
    ),
    [e]
  ), A = X(() => {
    const t = [];
    for (let o = 0; o < i.length - 1; o++)
      t.push({
        from: i[o],
        to: i[o + 1],
        coords: ne(
          i[o].coordinates,
          i[o + 1].coordinates,
          90,
          0.22
        )
      });
    return t;
  }, [i]), g = X(() => {
    if (i.length === 0) return null;
    if (x && c < i.length - 1)
      return i[c + 1];
    const t = e == null ? void 0 : e[Math.min(c, ((e == null ? void 0 : e.length) || 1) - 1)];
    return i.find((o) => o.index === (t == null ? void 0 : t.index)) || i[Math.min(c, i.length - 1)];
  }, [e, i, c, x]);
  return E(() => {
    var $;
    if (!T.current || v.current) return;
    M.current = y, h.current = n;
    const t = new Z.Map({
      container: T.current,
      style: y,
      center: (($ = i[0]) == null ? void 0 : $.coordinates) || [5, 46],
      zoom: Y,
      pitch: 24,
      attributionControl: !1
    });
    t.addControl(new Z.NavigationControl({ showCompass: !0 }), "top-right");
    const o = () => {
      W(t, h.current === "light"), b.current = !0, U((r) => r + 1);
    };
    t.on("style.load", o), t.on("error", (r) => {
      var R;
      const l = ((R = r == null ? void 0 : r.error) == null ? void 0 : R.message) || "";
      l && l !== "Load failed" && console.warn("MapLibre warning:", l);
    }), t.on("click", "event-nodes-circle", (r) => {
      var q;
      const l = (q = r.features) == null ? void 0 : q[0];
      if (!(l != null && l.properties)) return;
      const R = Number(l.properties.origIndex);
      J(!1), ee((G) => G + 1), S == null || S(Number.isFinite(R) ? R : Number(l.properties.index));
    }), t.on("mouseenter", "event-nodes-circle", () => {
      t.getCanvas().style.cursor = "pointer";
    }), t.on("mouseleave", "event-nodes-circle", () => {
      t.getCanvas().style.cursor = "";
    });
    const p = t.getCanvas(), f = (r) => {
      r.preventDefault(), b.current = !1;
    }, C = () => {
      W(t, h.current === "light"), b.current = !0, U((r) => r + 1);
    };
    p.addEventListener("webglcontextlost", f, !1), p.addEventListener("webglcontextrestored", C, !1);
    const D = new ResizeObserver(() => {
      t.resize();
    });
    return D.observe(T.current), v.current = t, () => {
      var r;
      D.disconnect(), p.removeEventListener("webglcontextlost", f), p.removeEventListener("webglcontextrestored", C), (r = F.current) == null || r.remove(), F.current = null, t.remove(), v.current = null, M.current = null, h.current = null, b.current = !1;
    };
  }, []), E(() => {
    const t = v.current;
    !t || a === 0 || M.current === y && h.current === n || (M.current = y, h.current = n, b.current = !1, t.setStyle(y, { diff: !1 }));
  }, [y, n, a]), E(() => {
    const t = v.current;
    if (!t || !b.current || a === 0 || M.current !== y || h.current !== n) return;
    [
      ["ghost-arcs-layer", "line-color", w.ghostColor ?? (m ? "#94a3b8" : "#475569")],
      ["active-trail-glow", "line-color", w.transitColor ?? "#0284c7"],
      ["transit-head-halo", "circle-color", w.transitColor ?? "#0284c7"],
      ["transit-head-core", "circle-stroke-color", w.transitColor ?? "#0284c7"],
      ["place-polygons-fill", "fill-color", w.polygonFillColor ?? "#10b981"],
      ["place-polygons-outline", "line-color", w.polygonOutlineColor ?? "#059669"]
    ].forEach(([p, f, C]) => t.setPaintProperty(p, f, C));
  }, [w, m, y, n, a]), E(() => {
    const t = v.current;
    if (!t || a === 0 || !b.current || M.current !== y || h.current !== n) return;
    W(t, m);
    const o = t.getSource("ghost-arcs"), p = t.getSource("place-polygons");
    !o || !p || (o.setData({
      type: "FeatureCollection",
      features: A.map((f) => ({
        type: "Feature",
        properties: {},
        geometry: { type: "LineString", coordinates: f.coords }
      }))
    }), p.setData({
      type: "FeatureCollection",
      features: i.filter((f) => f.polygon && f.polygon.length > 0).map((f) => ({
        type: "Feature",
        properties: { title: f.placeLabel },
        geometry: { type: "Polygon", coordinates: f.polygon }
      }))
    }), i.length > 0 && !z.current && t.jumpTo({
      center: i[0].coordinates,
      zoom: Y
    }));
  }, [i, A, m, y, n, a]), E(() => {
    const t = v.current;
    if (!t || a === 0 || !b.current || M.current !== y || h.current !== n || !g) return;
    const o = `${g.id ?? g.index}:${g.coordinates.join(",")}:${x ? "play" : "idle"}`;
    if (B.current === o) return;
    const p = c === 0 && !x && !z.current;
    B.current = o, p ? t.jumpTo({
      center: g.coordinates,
      zoom: Y
    }) : (z.current = !0, t.easeTo({
      center: g.coordinates,
      zoom: Y,
      duration: 1200,
      essential: !0
    }));
  }, [c, x, g, y, n, a]), E(() => {
    var q, G, Q;
    const t = v.current;
    if (!t || a === 0 || !b.current || M.current !== y || h.current !== n || !g) return;
    if (_) {
      L.current = !0, (q = F.current) == null || q.remove(), F.current = null, L.current = !1;
      return;
    }
    L.current = !0, (G = F.current) == null || G.remove(), L.current = !1;
    const o = (Q = g.images) == null ? void 0 : Q[0], p = o ? te(o.url, { maxWidth: 420 }) : "", f = String((o == null ? void 0 : o.label) || g.title).replace(/"/g, "&quot;"), C = p ? `<div class="w-full h-32 overflow-hidden ${m ? "bg-slate-100 border-slate-200" : "bg-slate-950 border-slate-800"} rounded-t-xl border-b">
           <img
             data-popup-img
             src="${p}"
             alt="${f}"
             loading="lazy"
             decoding="async"
             class="w-full h-full object-cover block"
           />
         </div>` : "", D = `
      <div class="geotrail-popup w-[264px] max-w-full overflow-hidden ${m ? "bg-white text-slate-900" : "bg-slate-900 text-slate-100"}">
        ${C}
        <div class="p-3">
          <div class="text-[11px] font-semibold uppercase tracking-wider ${m ? "text-sky-700" : "text-sky-400"}">${g.dateDisplay}</div>
          <div class="text-sm font-semibold mt-0.5 line-clamp-2">${g.title}</div>
          <div class="text-xs ${m ? "text-slate-600" : "text-slate-400"} mt-0.5 truncate">${g.placeLabel}</div>
        </div>
      </div>
    `, $ = new Z.Popup({
      offset: 14,
      maxWidth: "272px",
      closeButton: !0,
      closeOnClick: !1
    }).setLngLat(g.coordinates).setHTML(D).addTo(t);
    $.on("close", () => {
      L.current || J(!0);
    });
    const r = $.getElement(), l = r == null ? void 0 : r.querySelector(".geotrail-popup");
    if (l && (u != null && u.popup && l.classList.add(...u.popup.split(/\s+/).filter(Boolean)), d != null && d.popup))
      for (const [H, V] of Object.entries(d.popup))
        H.startsWith("--") ? l.style.setProperty(H, V) : l.style[H] = V;
    const R = r == null ? void 0 : r.querySelector("img[data-popup-img]");
    R && (o != null && o.url) && R.addEventListener("error", () => {
      R.src !== o.url && (R.src = o.url);
    }), F.current = $;
  }, [g, m, y, n, a, _, N, u == null ? void 0 : u.popup, d == null ? void 0 : d.popup]), E(() => {
    const t = v.current;
    if (!t || a === 0 || !b.current || M.current !== y || h.current !== n || i.length === 0) return;
    W(t, m);
    const o = t.getSource("active-trail"), p = t.getSource("transit-head"), f = t.getSource("event-nodes");
    if (!o || !p || !f) return;
    const C = Math.min(c, i.length - 1);
    f.setData({
      type: "FeatureCollection",
      features: i.map((r, l) => ({
        type: "Feature",
        properties: {
          index: l,
          origIndex: r.index,
          placeLabel: r.placeLabel,
          color: (s == null ? void 0 : s[r.category]) ?? P[r.category] ?? (s == null ? void 0 : s.other) ?? P.other,
          isActive: l === C
        },
        geometry: { type: "Point", coordinates: r.coordinates }
      }))
    });
    const D = [];
    for (let r = 0; r < C && r < A.length; r++)
      D.push({
        type: "Feature",
        properties: { color: (s == null ? void 0 : s[A[r].to.category]) ?? P[A[r].to.category] ?? (s == null ? void 0 : s.other) ?? P.other },
        geometry: { type: "LineString", coordinates: A[r].coords }
      });
    let $ = i[C].coordinates;
    if (C < A.length && (x || j > 0)) {
      const r = A[C], { trail: l, head: R } = ie(r.coords, j);
      $ = R, l.length >= 2 && D.push({
        type: "Feature",
        properties: { color: (s == null ? void 0 : s[r.to.category]) ?? P[r.to.category] ?? (s == null ? void 0 : s.other) ?? P.other },
        geometry: { type: "LineString", coordinates: l }
      });
    }
    o.setData({ type: "FeatureCollection", features: D }), p.setData({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: { type: "Point", coordinates: $ }
        }
      ]
    });
  }, [c, j, x, i, A, m, y, n, a, s]), /* @__PURE__ */ re.jsx(
    "div",
    {
      ref: T,
      ...I("map", u, d),
      className: `${I("map", u, d).className} w-full h-full`
    }
  );
}
const pe = oe.memo(ae);
export {
  pe as GeoArcMap,
  ae as GeoArcMapComponent
};
