import { g as N, c as B, j as _ } from "./index-OZiWAaUA.js";
import { useRef as R, useState as q, useMemo as D, useEffect as k } from "react";
import U from "maplibre-gl";
function G(e, i, x = 90, y = 0.22) {
  if (!Array.isArray(e) || !Array.isArray(i) || e.length < 2 || i.length < 2)
    return [];
  const [g, h] = e, [f, c] = i;
  if (Math.abs(f - g) < 1e-6 && Math.abs(c - h) < 1e-6)
    return [[g, h], [f, c]];
  const v = (g + f) / 2, j = (h + c) / 2, M = f - g;
  let d = -(c - h) * y, S = M * y;
  S < 0 && (d = -d, S = -S);
  const p = v + d, C = j + S, n = [];
  for (let m = 0; m <= x; m++) {
    const l = m / x, t = 1 - l, r = t * t * g + 2 * t * l * p + l * l * f, s = t * t * h + 2 * t * l * C + l * l * c;
    n.push([r, s]);
  }
  return n;
}
function W(e, i) {
  if (!Array.isArray(e) || e.length === 0)
    return { trail: [], head: [0, 0] };
  if (e.length === 1)
    return { trail: [e[0]], head: e[0] };
  const x = Math.max(0, Math.min(1, Number(i) || 0));
  if (x <= 0)
    return { trail: [e[0]], head: e[0] };
  if (x >= 1)
    return { trail: e, head: e[e.length - 1] };
  const y = e.length - 1, g = x * y, h = Math.min(Math.floor(g), y - 1), f = g - h, [c, v] = e[h], [j, M] = e[h + 1], w = [c + (j - c) * f, v + (M - v) * f];
  return { trail: [...e.slice(0, h + 1), w], head: w };
}
const $ = {
  production: "#d97706",
  discovery: "#059669",
  provenance: "#0284c7",
  exhibition: "#9333ea",
  current_location: "#e11d48",
  other: "#64748b"
}, Y = {
  dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
  light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
}, T = 6;
function E(e, i) {
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
      "line-color": i ? "#94a3b8" : "#475569",
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
      "circle-stroke-color": i ? "#ffffff" : "#020617"
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
      "text-color": i ? "#0f172a" : "#f8fafc",
      "text-halo-color": i ? "#ffffff" : "#020617",
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
function Z({
  events: e,
  activeLegIndex: i = 0,
  legProgress: x = 0,
  isPlaying: y = !1,
  onSelectEvent: g,
  theme: h = "dark"
}) {
  const f = R(null), c = R(null), v = R(null), j = R(!1), M = R(null), w = R(null), [d, S] = q(0), p = h === "light", C = Y[p ? "light" : "dark"], n = D(
    () => (Array.isArray(e) ? e : []).filter(
      (t) => Array.isArray(t.coordinates) && t.coordinates.length === 2
    ),
    [e]
  ), m = D(() => {
    const t = [];
    for (let r = 0; r < n.length - 1; r++)
      t.push({
        from: n[r],
        to: n[r + 1],
        coords: G(
          n[r].coordinates,
          n[r + 1].coordinates,
          90,
          0.22
        )
      });
    return t;
  }, [n]), l = D(() => {
    if (n.length === 0) return null;
    if (y && i < n.length - 1)
      return n[i + 1];
    const t = e == null ? void 0 : e[Math.min(i, ((e == null ? void 0 : e.length) || 1) - 1)];
    return n.find((r) => r.index === (t == null ? void 0 : t.index)) || n[Math.min(i, n.length - 1)];
  }, [e, n, i, y]);
  return k(() => {
    var F;
    if (!f.current || c.current) return;
    w.current = C;
    const t = new U.Map({
      container: f.current,
      style: C,
      center: ((F = n[0]) == null ? void 0 : F.coordinates) || [5, 46],
      zoom: T,
      pitch: 24,
      attributionControl: !1
    });
    t.addControl(new U.NavigationControl({ showCompass: !0 }), "top-right");
    const r = () => {
      E(t, p), S((o) => o + 1);
    };
    t.on("load", r), t.on("style.load", r), t.on("error", (o) => {
      var L;
      const a = ((L = o == null ? void 0 : o.error) == null ? void 0 : L.message) || "";
      a && a !== "Load failed" && console.warn("MapLibre warning:", a);
    }), t.on("click", "event-nodes-circle", (o) => {
      var z;
      const a = (z = o.features) == null ? void 0 : z[0];
      if (!(a != null && a.properties)) return;
      const L = Number(a.properties.origIndex);
      g == null || g(Number.isFinite(L) ? L : Number(a.properties.index));
    }), t.on("mouseenter", "event-nodes-circle", () => {
      t.getCanvas().style.cursor = "pointer";
    }), t.on("mouseleave", "event-nodes-circle", () => {
      t.getCanvas().style.cursor = "";
    });
    const s = t.getCanvas(), u = (o) => {
      o.preventDefault(), S(0);
    }, b = () => {
      E(t, p), S((o) => o + 1);
    };
    s.addEventListener("webglcontextlost", u, !1), s.addEventListener("webglcontextrestored", b, !1);
    const A = new ResizeObserver(() => {
      t.resize();
    });
    return A.observe(f.current), c.current = t, () => {
      var o;
      A.disconnect(), s.removeEventListener("webglcontextlost", u), s.removeEventListener("webglcontextrestored", b), (o = v.current) == null || o.remove(), v.current = null, t.remove(), c.current = null, w.current = null;
    };
  }, []), k(() => {
    const t = c.current;
    !t || d === 0 || w.current !== C && (w.current = C, S(0), t.setStyle(C));
  }, [C, d]), k(() => {
    const t = c.current;
    if (!t || d === 0) return;
    E(t, p);
    const r = t.getSource("ghost-arcs"), s = t.getSource("place-polygons");
    !r || !s || (r.setData({
      type: "FeatureCollection",
      features: m.map((u) => ({
        type: "Feature",
        properties: {},
        geometry: { type: "LineString", coordinates: u.coords }
      }))
    }), s.setData({
      type: "FeatureCollection",
      features: n.filter((u) => u.polygon && u.polygon.length > 0).map((u) => ({
        type: "Feature",
        properties: { title: u.placeLabel },
        geometry: { type: "Polygon", coordinates: u.polygon }
      }))
    }), n.length > 0 && !j.current && t.jumpTo({
      center: n[0].coordinates,
      zoom: T
    }));
  }, [n, m, p, d]), k(() => {
    const t = c.current;
    if (!t || d === 0 || !l) return;
    const r = `${l.id ?? l.index}:${l.coordinates.join(",")}:${y ? "play" : "idle"}`;
    if (M.current === r) return;
    const s = i === 0 && !y && !j.current;
    M.current = r, s ? t.jumpTo({
      center: l.coordinates,
      zoom: T
    }) : (j.current = !0, t.easeTo({
      center: l.coordinates,
      zoom: T,
      duration: 1200,
      essential: !0
    }));
  }, [i, y, l, d]), k(() => {
    var L, z;
    const t = c.current;
    if (!t || d === 0 || !l) return;
    (L = v.current) == null || L.remove();
    const r = (z = l.images) == null ? void 0 : z[0], s = r ? N(r.url, { maxWidth: 420 }) : "", u = String((r == null ? void 0 : r.label) || l.title).replace(/"/g, "&quot;"), b = s ? `<div class="w-full h-32 overflow-hidden ${p ? "bg-slate-100 border-slate-200" : "bg-slate-950 border-slate-800"} rounded-t-xl border-b">
           <img
             data-popup-img
             src="${s}"
             alt="${u}"
             loading="lazy"
             decoding="async"
             class="w-full h-full object-cover block"
           />
         </div>` : "", A = `
      <div class="w-[264px] max-w-full overflow-hidden ${p ? "bg-white text-slate-900" : "bg-slate-900 text-slate-100"}">
        ${b}
        <div class="p-3">
          <div class="text-[11px] font-semibold uppercase tracking-wider ${p ? "text-sky-700" : "text-sky-400"}">${l.dateDisplay}</div>
          <div class="text-sm font-semibold mt-0.5 line-clamp-2">${l.title}</div>
          <div class="text-xs ${p ? "text-slate-600" : "text-slate-400"} mt-0.5 truncate">${l.placeLabel}</div>
        </div>
      </div>
    `, F = new U.Popup({
      offset: 14,
      maxWidth: "272px",
      closeButton: !0,
      closeOnClick: !1
    }).setLngLat(l.coordinates).setHTML(A).addTo(t), o = F.getElement(), a = o == null ? void 0 : o.querySelector("img[data-popup-img]");
    a && (r != null && r.url) && (a.addEventListener("load", () => {
      const O = B(a, {
        maxWidth: 420,
        quality: 0.72
      });
      O && O.length < a.src.length && (a.src = O);
    }), a.addEventListener("error", () => {
      a.src !== r.url && (a.src = r.url);
    })), v.current = F;
  }, [l, p, d]), k(() => {
    const t = c.current;
    if (!t || d === 0 || n.length === 0) return;
    E(t, p);
    const r = t.getSource("active-trail"), s = t.getSource("transit-head"), u = t.getSource("event-nodes");
    if (!r || !s || !u) return;
    const b = Math.min(i, n.length - 1);
    u.setData({
      type: "FeatureCollection",
      features: n.map((o, a) => ({
        type: "Feature",
        properties: {
          index: a,
          origIndex: o.index,
          placeLabel: o.placeLabel,
          color: $[o.category] || $.other,
          isActive: a === b
        },
        geometry: { type: "Point", coordinates: o.coordinates }
      }))
    });
    const A = [];
    for (let o = 0; o < b && o < m.length; o++)
      A.push({
        type: "Feature",
        properties: { color: $[m[o].to.category] || $.other },
        geometry: { type: "LineString", coordinates: m[o].coords }
      });
    let F = n[b].coordinates;
    if (b < m.length && (y || x > 0)) {
      const o = m[b], { trail: a, head: L } = W(o.coords, x);
      F = L, a.length >= 2 && A.push({
        type: "Feature",
        properties: { color: $[o.to.category] || $.other },
        geometry: { type: "LineString", coordinates: a }
      });
    }
    r.setData({ type: "FeatureCollection", features: A }), s.setData({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: { type: "Point", coordinates: F }
        }
      ]
    });
  }, [i, x, y, n, m, p, d]), /* @__PURE__ */ _.jsx("div", { ref: f, className: "w-full h-full" });
}
export {
  Z as GeoArcMap
};
