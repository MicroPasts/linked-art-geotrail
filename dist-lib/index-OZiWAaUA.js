import rt, { useState as I, lazy as Ot, useRef as $t, useEffect as ue, Suspense as Lt } from "react";
import { Moon as Ft, Sun as Dt, FileJson as Ut, Loader2 as Mt, Pause as It, Play as Wt, RotateCcw as Yt, Calendar as Gt, MapPin as Jt, ExternalLink as Vt, Users as Kt, Image as Bt } from "lucide-react";
var de = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function zt() {
  if (He) return te;
  He = 1;
  var t = rt, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, h, s) {
    var f, o = {}, b = null, T = null;
    s !== void 0 && (b = "" + s), h.key !== void 0 && (b = "" + h.key), h.ref !== void 0 && (T = h.ref);
    for (f in h) n.call(h, f) && !d.hasOwnProperty(f) && (o[f] = h[f]);
    if (m && m.defaultProps) for (f in h = m.defaultProps, h) o[f] === void 0 && (o[f] = h[f]);
    return { $$typeof: r, type: m, key: b, ref: T, props: o, _owner: c.current };
  }
  return te.Fragment = i, te.jsx = p, te.jsxs = p, te;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Ht() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = rt, r = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), $ = Symbol.iterator, W = "@@iterator";
    function U(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = $ && e[$] || e[W];
      return typeof a == "function" ? a : null;
    }
    var _ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), g = 1; g < a; g++)
          l[g - 1] = arguments[g];
        Y("error", e, l);
      }
    }
    function Y(e, a, l) {
      {
        var g = _.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (a += "%s", l = l.concat([w]));
        var j = l.map(function(x) {
          return String(x);
        });
        j.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var G = !1, N = !1, y = !1, k = !1, P = !1, R;
    R = Symbol.for("react.module.reference");
    function H(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === d || P || e === c || e === s || e === f || k || e === T || G || N || y || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === o || e.$$typeof === p || e.$$typeof === m || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === R || e.getModuleId !== void 0));
    }
    function J(e, a, l) {
      var g = e.displayName;
      if (g)
        return g;
      var w = a.displayName || a.name || "";
      return w !== "" ? l + "(" + w + ")" : l;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case i:
          return "Portal";
        case d:
          return "Profiler";
        case c:
          return "StrictMode";
        case s:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var a = e;
            return se(a) + ".Consumer";
          case p:
            var l = e;
            return se(l._context) + ".Provider";
          case h:
            return J(e, e.render, "ForwardRef");
          case o:
            var g = e.displayName || null;
            return g !== null ? g : D(e.type) || "Memo";
          case b: {
            var w = e, j = w._payload, x = w._init;
            try {
              return D(x(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, V = 0, Re, Se, Ae, Te, Pe, Ce, Ne;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function it() {
      {
        if (V === 0) {
          Re = console.log, Se = console.info, Ae = console.warn, Te = console.error, Pe = console.group, Ce = console.groupCollapsed, Ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function ot() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: Re
            }),
            info: M({}, e, {
              value: Se
            }),
            warn: M({}, e, {
              value: Ae
            }),
            error: M({}, e, {
              value: Te
            }),
            group: M({}, e, {
              value: Pe
            }),
            groupCollapsed: M({}, e, {
              value: Ce
            }),
            groupEnd: M({}, e, {
              value: Ne
            })
          });
        }
        V < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = _.ReactCurrentDispatcher, be;
    function ie(e, a, l) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            be = g && g[1] || "";
          }
        return `
` + be + e;
      }
    }
    var ge = !1, oe;
    {
      var lt = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new lt();
    }
    function $e(e, a) {
      if (!e || ge)
        return "";
      {
        var l = oe.get(e);
        if (l !== void 0)
          return l;
      }
      var g;
      ge = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = me.current, me.current = null, it();
      try {
        if (a) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (O) {
              g = O;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (O) {
              g = O;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            g = O;
          }
          e();
        }
      } catch (O) {
        if (O && g && typeof O.stack == "string") {
          for (var v = O.stack.split(`
`), C = g.stack.split(`
`), S = v.length - 1, A = C.length - 1; S >= 1 && A >= 0 && v[S] !== C[A]; )
            A--;
          for (; S >= 1 && A >= 0; S--, A--)
            if (v[S] !== C[A]) {
              if (S !== 1 || A !== 1)
                do
                  if (S--, A--, A < 0 || v[S] !== C[A]) {
                    var L = `
` + v[S].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, L), L;
                  }
                while (S >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        ge = !1, me.current = j, ot(), Error.prepareStackTrace = w;
      }
      var Z = e ? e.displayName || e.name : "", B = Z ? ie(Z) : "";
      return typeof e == "function" && oe.set(e, B), B;
    }
    function ct(e, a, l) {
      return $e(e, !1);
    }
    function ut(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function le(e, a, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return $e(e, ut(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case s:
          return ie("Suspense");
        case f:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ct(e.render);
          case o:
            return le(e.type, a, l);
          case b: {
            var g = e, w = g._payload, j = g._init;
            try {
              return le(j(w), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Le = {}, Fe = _.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var a = e._owner, l = le(e.type, e._source, a ? a.type : null);
        Fe.setExtraStackFrame(l);
      } else
        Fe.setExtraStackFrame(null);
    }
    function dt(e, a, l, g, w) {
      {
        var j = Function.call.bind(ee);
        for (var x in e)
          if (j(e, x)) {
            var v = void 0;
            try {
              if (typeof e[x] != "function") {
                var C = Error((g || "React class") + ": " + l + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              v = e[x](a, x, g, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              v = S;
            }
            v && !(v instanceof Error) && (ce(w), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", l, x, typeof v), ce(null)), v instanceof Error && !(v.message in Le) && (Le[v.message] = !0, ce(w), E("Failed %s type: %s", l, v.message), ce(null));
          }
      }
    }
    var ft = Array.isArray;
    function he(e) {
      return ft(e);
    }
    function pt(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function mt(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Ue(e) {
      if (mt(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), De(e);
    }
    var Me = _.ReactCurrentOwner, bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, We;
    function gt(e) {
      if (ee.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ht(e) {
      if (ee.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yt(e, a) {
      typeof e.ref == "string" && Me.current;
    }
    function _t(e, a) {
      {
        var l = function() {
          Ie || (Ie = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function vt(e, a) {
      {
        var l = function() {
          We || (We = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var xt = function(e, a, l, g, w, j, x) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: l,
        props: x,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function wt(e, a, l, g, w) {
      {
        var j, x = {}, v = null, C = null;
        l !== void 0 && (Ue(l), v = "" + l), ht(a) && (Ue(a.key), v = "" + a.key), gt(a) && (C = a.ref, yt(a, w));
        for (j in a)
          ee.call(a, j) && !bt.hasOwnProperty(j) && (x[j] = a[j]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (j in S)
            x[j] === void 0 && (x[j] = S[j]);
        }
        if (v || C) {
          var A = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && _t(x, A), C && vt(x, A);
        }
        return xt(e, v, C, w, g, Me.current, x);
      }
    }
    var ye = _.ReactCurrentOwner, Ye = _.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var a = e._owner, l = le(e.type, e._source, a ? a.type : null);
        Ye.setExtraStackFrame(l);
      } else
        Ye.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ge() {
      {
        if (ye.current) {
          var e = D(ye.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function jt(e) {
      return "";
    }
    var Je = {};
    function kt(e) {
      {
        var a = Ge();
        if (!a) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ve(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = kt(a);
        if (Je[l])
          return;
        Je[l] = !0;
        var g = "";
        e && e._owner && e._owner !== ye.current && (g = " It was passed a child from " + D(e._owner.type) + "."), X(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, g), X(null);
      }
    }
    function Ke(e, a) {
      {
        if (typeof e != "object")
          return;
        if (he(e))
          for (var l = 0; l < e.length; l++) {
            var g = e[l];
            ve(g) && Ve(g, a);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = U(e);
          if (typeof w == "function" && w !== e.entries)
            for (var j = w.call(e), x; !(x = j.next()).done; )
              ve(x.value) && Ve(x.value, a);
        }
      }
    }
    function Et(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === o))
          l = a.propTypes;
        else
          return;
        if (l) {
          var g = D(a);
          dt(l, e.props, "prop", g, e);
        } else if (a.PropTypes !== void 0 && !_e) {
          _e = !0;
          var w = D(a);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rt(e) {
      {
        for (var a = Object.keys(e.props), l = 0; l < a.length; l++) {
          var g = a[l];
          if (g !== "children" && g !== "key") {
            X(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var Be = {};
    function ze(e, a, l, g, w, j) {
      {
        var x = H(e);
        if (!x) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = jt();
          C ? v += C : v += Ge();
          var S;
          e === null ? S = "null" : he(e) ? S = "array" : e !== void 0 && e.$$typeof === r ? (S = "<" + (D(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, v);
        }
        var A = wt(e, a, l, w, j);
        if (A == null)
          return A;
        if (x) {
          var L = a.children;
          if (L !== void 0)
            if (g)
              if (he(L)) {
                for (var Z = 0; Z < L.length; Z++)
                  Ke(L[Z], e);
                Object.freeze && Object.freeze(L);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(L, e);
        }
        if (ee.call(a, "key")) {
          var B = D(e), O = Object.keys(a).filter(function(Nt) {
            return Nt !== "key";
          }), xe = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[B + xe]) {
            var Ct = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, B, Ct, B), Be[B + xe] = !0;
          }
        }
        return e === n ? Rt(A) : Et(A), A;
      }
    }
    function St(e, a, l) {
      return ze(e, a, l, !0);
    }
    function At(e, a, l) {
      return ze(e, a, l, !1);
    }
    var Tt = At, Pt = St;
    re.Fragment = n, re.jsx = Tt, re.jsxs = Pt;
  })()), re;
}
var Ze;
function Xt() {
  return Ze || (Ze = 1, process.env.NODE_ENV === "production" ? de.exports = zt() : de.exports = Ht()), de.exports;
}
var u = Xt();
function Zt(t) {
  if (!t || typeof t != "string") return null;
  const r = t.replace(/^<[^>]+>\s*/i, "").trim(), i = r.match(/^POINT\s*\(\s*([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)\s*\)$/i);
  if (i) {
    const d = parseFloat(i[1]), p = parseFloat(i[2]);
    if (Number.isFinite(d) && Number.isFinite(p))
      return { centroid: [d, p] };
  }
  const n = r.match(/^POLYGON\s*\(\((.+)\)\)$/i);
  if (n) {
    const d = n[1].split(/\)\s*,\s*\(/).map(
      (p) => p.split(",").map((m) => {
        const [h, s] = m.trim().split(/\s+/);
        return [parseFloat(h), parseFloat(s)];
      }).filter(([m, h]) => Number.isFinite(m) && Number.isFinite(h))
    );
    if (d[0] && d[0].length > 0)
      return { centroid: qe(d[0]), polygon: d };
  }
  const c = r.match(/^MULTIPOLYGON\s*\(\(\((.+)\)\)\)$/i);
  if (c) {
    const p = c[1].split(/\)\)\s*,\s*\(\(/)[0].split(",").map((m) => {
      const [h, s] = m.trim().split(/\s+/);
      return [parseFloat(h), parseFloat(s)];
    }).filter(([m, h]) => Number.isFinite(m) && Number.isFinite(h));
    if (p.length > 0)
      return { centroid: qe(p), polygon: [p] };
  }
  return null;
}
function qe(t) {
  let r = 0, i = 0;
  const n = t.length;
  for (const [c, d] of t)
    r += c, i += d;
  return [r / n, i / n];
}
const we = {
  greece: [21.8243, 39.0742],
  athens: [23.7275, 37.9838],
  "athens, greece": [23.7275, 37.9838],
  rome: [12.4964, 41.9028],
  "rome, italy": [12.4964, 41.9028],
  london: [-0.1276, 51.5072],
  "london, united kingdom": [-0.1276, 51.5072],
  "london, england": [-0.1276, 51.5072],
  paris: [2.3522, 48.8566],
  "paris, france": [2.3522, 48.8566],
  versailles: [2.1204, 48.8049],
  "versailles, france": [2.1204, 48.8049],
  "château de versailles": [2.1204, 48.8049],
  "malibu, california": [-118.6923, 34.0381],
  malibu: [-118.6923, 34.0381],
  "los angeles": [-118.4741, 34.078],
  "los angeles, california": [-118.4741, 34.078],
  "j. paul getty museum, los angeles, california": [-118.4741, 34.078],
  "getty research institute, los angeles": [-118.4754, 34.0772],
  "new york": [-73.9632, 40.7794],
  "new york, united states": [-73.9632, 40.7794],
  munich: [11.582, 48.1351],
  münchen: [11.582, 48.1351],
  "the hague": [4.3007, 52.0705],
  mauritshuis: [4.3045, 52.0804],
  cambridge: [0.1218, 52.2053],
  oxford: [-1.2577, 51.752],
  edinburgh: [-3.1883, 55.9533],
  florence: [11.2558, 43.7696],
  venice: [12.3155, 45.4408],
  berlin: [13.405, 52.52],
  amsterdam: [4.9041, 52.3676],
  madrid: [-3.7038, 40.4168],
  cairo: [31.2357, 30.0444]
}, nt = "linked-art-geotrail:geocode-cache:v1", fe = /* @__PURE__ */ new Set();
let Qe = Promise.resolve(), et = 0;
function Ee() {
  try {
    return JSON.parse(localStorage.getItem(nt) || "{}");
  } catch {
    return {};
  }
}
function qt(t) {
  try {
    localStorage.setItem(nt, JSON.stringify(t));
  } catch {
  }
}
function at(t) {
  if (!t || typeof t != "string") return "";
  let r = t.replace(/^Storage\s*[—-]\s*/i, "").trim();
  const i = r.match(/\bat\s+([^,]+(?:,\s*[^,]+){0,2})$/i);
  if (i && i[1])
    r = i[1].trim();
  else if (r.length > 65) {
    const n = r.split(",").map((c) => c.trim()).filter(Boolean);
    n.length >= 2 ? r = n.slice(-2).join(", ") : r = n[0].slice(0, 65);
  }
  return r;
}
function st(t) {
  if (!t || typeof t != "string") return null;
  const r = [t, at(t)].map((n) => n.trim().toLowerCase()).filter(Boolean), i = Ee();
  for (const n of r) {
    if (we[n])
      return we[n];
    if (Array.isArray(i[n]) && i[n].length === 2)
      return i[n];
  }
  for (const n of r)
    for (const [c, d] of Object.entries(we))
      if (n.includes(c))
        return d;
  return null;
}
function Qt(t) {
  const r = Qe.then(async () => {
    const i = Date.now() - et;
    return i < 1100 && await new Promise((n) => setTimeout(n, 1100 - i)), et = Date.now(), t();
  });
  return Qe = r.catch(() => null), r;
}
async function er(t) {
  const r = st(t);
  if (r) return r;
  const i = at(t), n = i.split(",").map((p) => p.trim()).filter(Boolean), c = n.length > 1 ? n[n.length - 1] : i, d = i.toLowerCase();
  return !c || fe.has(d) ? null : Qt(async () => {
    const p = Ee();
    if (Array.isArray(p[d]) && p[d].length === 2)
      return p[d];
    try {
      const m = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        c
      )}&count=1&language=en&format=json`, h = await fetch(m);
      if (!h.ok)
        return fe.add(d), null;
      const s = await h.json(), f = Array.isArray(s == null ? void 0 : s.results) ? s.results[0] : null;
      if (f && Number.isFinite(f.longitude) && Number.isFinite(f.latitude)) {
        const o = [f.longitude, f.latitude], b = Ee();
        return b[d] = o, qt(b), o;
      }
      fe.add(d);
    } catch {
      fe.add(d);
    }
    return null;
  });
}
function F(t, r = "Untitled") {
  if (!t) return r;
  if (typeof t._label == "string" && t._label.trim()) return t._label.trim();
  if (Array.isArray(t.identified_by)) {
    const i = t.identified_by.find(
      (n) => n.type === "Name" && Array.isArray(n.classified_as) && n.classified_as.some((c) => String(c.id).includes("300404670"))
    ) || t.identified_by.find((n) => n.type === "Name");
    if (i != null && i.content) return String(i.content);
  }
  return r;
}
function K(t, r) {
  return Array.isArray(t == null ? void 0 : t.classified_as) && t.classified_as.some(
    (i) => String(i.id || "").includes(r) || String(i._label || "").toLowerCase().includes(r.toLowerCase())
  );
}
function z(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return;
  const r = t.referred_to_by.find(
    (i) => i.type === "LinguisticObject" && typeof i.content == "string" && K(i, "300080091")
  ) || t.referred_to_by.find(
    (i) => i.type === "LinguisticObject" && typeof i.content == "string" && (K(i, "300444172") || K(i, "300444174"))
  );
  return r == null ? void 0 : r.content;
}
function ne(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return null;
  const r = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && (K(n, "300435448") || K(n, "300444175") || K(n, "place"))
  );
  if (r != null && r.content)
    return r.content.trim();
  const i = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && K(n, "300444172")
  );
  if (i != null && i.content) {
    const n = i.content.match(/\b(London|Paris|New York|Rome|Athens|Los Angeles|Malibu|Amsterdam|Berlin)\b/i);
    if (n) return n[1];
  }
  return null;
}
function tr(t) {
  if (!t) return { display: "Date unknown", sortTs: Number.MAX_SAFE_INTEGER };
  let r = typeof t._label == "string" ? t._label.trim() : "";
  if (!r && Array.isArray(t.identified_by)) {
    const p = t.identified_by.find((m) => m.type === "Name" && m.content);
    p != null && p.content && (r = String(p.content));
  }
  const i = t.begin_of_the_begin || t.end_of_the_begin, n = t.end_of_the_end || t.begin_of_the_end;
  let c = Number.MAX_SAFE_INTEGER;
  const d = i || n;
  if (d) {
    const p = String(d).match(/^([+-]?\d{1,6})/);
    p && (c = parseInt(p[1], 10));
  } else if (r) {
    const p = r.match(/([+-]?\d{4})/);
    p && (c = parseInt(p[1], 10));
  }
  return r ? { display: r, sortTs: c } : i && n && i !== n ? { display: `${String(i).slice(0, 10)} – ${String(n).slice(0, 10)}`, sortTs: c } : i ? { display: String(i).slice(0, 10), sortTs: c } : n ? { display: String(n).slice(0, 10), sortTs: c } : { display: "Date unknown", sortTs: c };
}
function pe(t) {
  return typeof t != "string" || /rightsstatements\.org\/files\/icons/i.test(t) ? !1 : /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(t) || /\/iiif\/image\//i.test(t);
}
function Q(t, r) {
  const i = [];
  if (!t) return i;
  const n = (c) => {
    var p;
    if (!c || typeof c != "object") return;
    const d = F(c, "Attached image");
    if (Array.isArray(c.access_point))
      for (const m of c.access_point)
        m != null && m.id && pe(m.id) && i.push({ id: m.id, url: m.id, label: d, source: r });
    if (pe(c.id) && i.push({ id: c.id, url: c.id, label: d, source: r }), Array.isArray(c.digitally_shown_by))
      for (const m of c.digitally_shown_by) {
        const h = F(m, d), s = Array.isArray(m.conforms_to) ? (p = m.conforms_to.find((f) => String(f.id).includes("iiif.io/api/image"))) == null ? void 0 : p.id : void 0;
        if (Array.isArray(m.access_point))
          for (const f of m.access_point)
            f != null && f.id && pe(f.id) && i.push({ id: f.id, url: f.id, label: h, iiifService: s, source: r });
        else pe(m.id) && i.push({ id: m.id, url: m.id, label: h, iiifService: s, source: r });
      }
  };
  return Array.isArray(t.representation) && t.representation.forEach(n), Array.isArray(t.digitally_shown_by) && n(t), Array.from(new Map(i.map((c) => [c.url, c])).values());
}
function ae(t) {
  const r = [], i = (n) => {
    if (Array.isArray(n))
      for (const c of n) {
        const d = F(c, "");
        d && d.toLowerCase() !== "unknown" && r.push(d);
      }
  };
  return i(t == null ? void 0 : t.carried_out_by), i(t == null ? void 0 : t.transferred_title_from), i(t == null ? void 0 : t.transferred_title_to), Array.from(new Set(r));
}
function q(t) {
  const r = Array.isArray(t) ? t[0] : t;
  if (!r || typeof r != "object") return null;
  let i = r.defined_by;
  if (!i && Array.isArray(r.part_of)) {
    const n = r.part_of.find((c) => typeof (c == null ? void 0 : c.defined_by) == "string");
    n && (i = n.defined_by);
  }
  return {
    label: F(r, "Unnamed Place"),
    uri: r.id,
    wkt: i,
    isStorage: K(r, "300004465"),
    images: Q(r, "place")
  };
}
function je(t) {
  const r = [], i = F(t, "Linked Art Object"), n = Q(t, "object"), c = [], d = ({
    id: s,
    title: f,
    category: o,
    timespan: b,
    placeLabel: T,
    placeUri: $,
    wkt: W,
    actors: U = [],
    description: _,
    images: E = [],
    defaultOrder: Y,
    precisionNote: G
  }) => {
    const N = Zt(W), y = N ? N.centroid : st(T), { display: k, sortTs: P } = tr(b);
    !N && G && r.push(G), c.push({
      id: s,
      title: f,
      category: o,
      dateDisplay: k,
      sortTimestamp: P === Number.MAX_SAFE_INTEGER ? Y : P,
      placeLabel: T,
      placeUri: $,
      coordinates: y,
      // May be null until async geocoding completes
      polygon: N == null ? void 0 : N.polygon,
      isApproximate: !N,
      actors: U,
      description: _,
      images: E
    });
  };
  if (t.produced_by) {
    const s = q(t.produced_by.took_place_at), f = ne(t.produced_by) || ne(t), o = (s == null ? void 0 : s.label) || f;
    o && d({
      id: t.produced_by.id || "production-0",
      title: F(t.produced_by, "Production / Creation"),
      category: "production",
      timespan: t.produced_by.timespan,
      placeLabel: o,
      placeUri: s == null ? void 0 : s.uri,
      wkt: s == null ? void 0 : s.wkt,
      actors: ae(t.produced_by),
      description: z(t.produced_by),
      images: [...Q(t.produced_by, "event"), ...(s == null ? void 0 : s.images) || []],
      defaultOrder: -1e5,
      precisionNote: s != null && s.wkt ? void 0 : `Production place "${o}" resolved from text statement (no WKT defined_by).`
    });
  }
  if ((Array.isArray(t.encountered) ? t.encountered : t.found_by ? [t.found_by] : []).forEach((s, f) => {
    const o = q(s.took_place_at), b = (o == null ? void 0 : o.label) || ne(s);
    b && d({
      id: s.id || `discovery-${f}`,
      title: F(s, "Archaeological Encounter / Findspot"),
      category: "discovery",
      timespan: s.timespan,
      placeLabel: b,
      placeUri: o == null ? void 0 : o.uri,
      wkt: o == null ? void 0 : o.wkt,
      actors: ae(s),
      description: z(s),
      images: [...Q(s, "event"), ...(o == null ? void 0 : o.images) || []],
      defaultOrder: -5e4 + f
    });
  }), Array.isArray(t.changed_ownership_through) && t.changed_ownership_through.forEach((s, f) => {
    const o = Array.isArray(s.part_of) ? s.part_of[0] : s.part_of, b = q(s.took_place_at) || q(o == null ? void 0 : o.took_place_at), T = ne(s) || ne(o), $ = (b == null ? void 0 : b.label) || T;
    $ && d({
      id: s.id || `provenance-${f}`,
      title: F(s, `Transfer of Custody #${f + 1}`),
      category: "provenance",
      timespan: s.timespan || (o == null ? void 0 : o.timespan),
      placeLabel: $,
      placeUri: b == null ? void 0 : b.uri,
      wkt: b == null ? void 0 : b.wkt,
      actors: [...ae(s), ...ae(o)],
      description: z(s) || z(o),
      images: [...Q(s, "event"), ...(b == null ? void 0 : b.images) || []],
      defaultOrder: 1e3 + f,
      precisionNote: b != null && b.wkt ? void 0 : `Provenance location "${$}" resolved from text statement (no WKT defined_by).`
    });
  }), [
    ...Array.isArray(t.used_for) ? t.used_for : [],
    ...Array.isArray(t.member_of) ? t.member_of.flatMap((s) => Array.isArray(s.used_for) ? s.used_for : []) : []
  ].forEach((s, f) => {
    const o = q(s.took_place_at), b = (o == null ? void 0 : o.label) || F(s, "");
    b && d({
      id: s.id || `exhibition-${f}`,
      title: F(s, `Exhibition #${f + 1}`),
      category: "exhibition",
      timespan: s.timespan,
      placeLabel: b,
      placeUri: o == null ? void 0 : o.uri,
      wkt: o == null ? void 0 : o.wkt,
      actors: ae(s),
      description: z(s),
      images: [...Q(s, "event"), ...(o == null ? void 0 : o.images) || []],
      defaultOrder: 2e3 + f,
      precisionNote: o != null && o.wkt ? void 0 : `Exhibition venue "${b}" geocoded from activity label (no WKT defined_by).`
    });
  }), t.current_location) {
    const s = q(t.current_location), f = Array.isArray(t.current_owner) ? F(t.current_owner[0], "") : "";
    if (s) {
      const o = !s.wkt && s.isStorage && f ? `${s.label} — ${f}` : s.label;
      d({
        id: `${t.id || "obj"}-current-location`,
        title: "Current Repository Location",
        category: "current_location",
        timespan: { _label: "Present" },
        placeLabel: o,
        placeUri: s.uri,
        wkt: s.wkt,
        actors: Array.isArray(t.current_owner) ? t.current_owner.map((b) => F(b)) : [],
        description: z(t.current_location),
        images: [...s.images, ...n],
        defaultOrder: 999999,
        precisionNote: s.wkt ? void 0 : `Current location "${o}" has no WKT defined_by; resolved via institution/place name.`
      });
    }
  }
  const h = c.sort((s, f) => s.sortTimestamp - f.sortTimestamp).map((s, f) => ({
    ...s,
    index: f,
    images: s.images.length > 0 ? s.images : n.slice(0, 1)
  }));
  return {
    objectId: t.id || "urn:linked-art:object",
    objectLabel: i,
    objectSummary: z(t),
    heroImage: n[0],
    events: h,
    warnings: Array.from(new Set(r))
  };
}
async function rr(t) {
  let r = !1;
  const i = await Promise.all(
    t.events.map(async (n) => {
      if (Array.isArray(n.coordinates) && n.coordinates.length === 2)
        return n;
      const c = await er(n.placeLabel);
      return c ? (r = !0, { ...n, coordinates: c }) : n;
    })
  );
  return r ? { ...t, events: i } : t;
}
const nr = [
  (t) => `https://corsproxy.io/?${encodeURIComponent(t)}`,
  (t) => `https://api.allorigins.win/raw?url=${encodeURIComponent(t)}`
];
async function ar(t) {
  const r = await fetch(t, {
    headers: {
      Accept: 'application/ld+json; profile="https://linked.art/ns/v1/linked-art.json", application/ld+json, application/json'
    }
  });
  if (!r.ok)
    throw new Error(`HTTP ${r.status} (${r.statusText})`);
  return r.json();
}
async function sr(t) {
  let r = null;
  for (const i of nr)
    try {
      const n = await fetch(i(t));
      if (!n.ok) {
        r = new Error(`Proxy HTTP ${n.status}`);
        continue;
      }
      return await n.json();
    } catch (n) {
      r = n;
    }
  throw r || new Error("Unable to fetch URL directly or via CORS proxy");
}
async function ir(t) {
  const r = String(t || "").trim();
  if (!r)
    throw new Error("Enter a Linked Art URL or paste JSON-LD.");
  if (/^https?:\/\//i.test(r))
    try {
      return await ar(r);
    } catch (i) {
      try {
        return await sr(r);
      } catch {
        throw new Error(
          `Could not fetch "${r}" (${i instanceof Error ? i.message : "CORS or network error"}). Paste the JSON-LD directly instead.`
        );
      }
    }
  return JSON.parse(r);
}
const tt = {
  "@context": "https://linked.art/ns/v1/linked-art.json",
  id: "https://example.org/linked-art/object/medallion-severus-01",
  type: "HumanMadeObject",
  _label: "Gold Medallion of Septimius Severus (Arras Hoard Type)",
  identified_by: [
    {
      type: "Name",
      classified_as: [
        { id: "http://vocab.getty.edu/aat/300404670", type: "Type", _label: "Primary Name" }
      ],
      content: "Gold Medallion of Septimius Severus"
    }
  ],
  referred_to_by: [
    {
      type: "LinguisticObject",
      content: "Struck in Rome c. 202 CE, transported to northern Gaul in the late 3rd century, recovered during clay extraction in Arras in 1922, and later exhibited internationally."
    }
  ],
  representation: [
    {
      type: "VisualItem",
      _label: "Obverse & Reverse High-Resolution View",
      digitally_shown_by: [
        {
          id: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/MSR-2000-14-167-d.jpg/250px-MSR-2000-14-167-d.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail?width=250",
          type: "DigitalObject",
          _label: "Imperial Gold Coinage Reference Image",
          access_point: [
            {
              id: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/MSR-2000-14-167-d.jpg/250px-MSR-2000-14-167-d.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
              type: "DigitalObject"
            }
          ]
        }
      ]
    }
  ],
  produced_by: {
    id: "https://example.org/linked-art/activity/minting-rome",
    type: "Production",
    _label: "Imperial Minting in Rome",
    timespan: {
      type: "TimeSpan",
      _label: "202 CE",
      begin_of_the_begin: "0202-01-01T00:00:00Z",
      end_of_the_end: "0202-12-31T23:59:59Z"
    },
    carried_out_by: [
      { id: "https://vocab.getty.edu/ulan/500115700", type: "Group", _label: "Mint of Rome" }
    ],
    took_place_at: {
      id: "https://vocab.getty.edu/tgn/7000874",
      type: "Place",
      _label: "Rome (Imperial Mint)",
      defined_by: "POINT (12.4964 41.9028)"
    }
  },
  encountered: [
    {
      id: "https://example.org/linked-art/activity/discovery-arras",
      type: "Encounter",
      _label: "Hoard Recovery at Beaurains / Arras",
      timespan: {
        type: "TimeSpan",
        _label: "21 September 1922",
        begin_of_the_begin: "1922-09-21T00:00:00Z"
      },
      referred_to_by: [
        {
          type: "LinguisticObject",
          content: "Uncovered in a clay pit south of Arras alongside Tetrarchic gold medallions and jewellery."
        }
      ],
      took_place_at: {
        id: "https://vocab.getty.edu/tgn/7008369",
        type: "Place",
        _label: "Beaurains, Arras (Pas-de-Calais)",
        defined_by: "POLYGON ((2.765 50.255, 2.805 50.255, 2.805 50.285, 2.765 50.285, 2.765 50.255))"
      }
    }
  ],
  changed_ownership_through: [
    {
      id: "https://example.org/linked-art/activity/acquisition-paris",
      type: "Acquisition",
      _label: "Private Collection & Numismatic Dispersal",
      timespan: {
        type: "TimeSpan",
        _label: "1924",
        begin_of_the_begin: "1924-05-01T00:00:00Z"
      },
      carried_out_by: [{ type: "Person", _label: "Parisian Numismatic Dealer" }],
      took_place_at: {
        id: "https://vocab.getty.edu/tgn/7008038",
        type: "Place",
        _label: "Paris, France",
        defined_by: "POINT (2.3522 48.8566)"
      }
    }
  ],
  used_for: [
    {
      id: "https://example.org/linked-art/activity/exhibition-new-york",
      type: "Activity",
      _label: "Loan Exhibition: Rome and the Northern Frontier",
      timespan: {
        type: "TimeSpan",
        _label: "1998",
        begin_of_the_begin: "1998-03-10T00:00:00Z"
      },
      took_place_at: {
        id: "https://vocab.getty.edu/tgn/7007567",
        type: "Place",
        _label: "New York, United States",
        defined_by: "POINT (-73.9632 40.7794)"
      }
    }
  ],
  current_location: {
    id: "https://vocab.getty.edu/tgn/7011781",
    type: "Place",
    _label: "London, United Kingdom",
    defined_by: "POINT (-0.1269 51.5194)"
  }
}, ke = /* @__PURE__ */ new Map();
function or(t, r = 400) {
  if (!t || typeof t != "string") return t;
  const i = /(\/iiif\/(?:image\/)?[^/]+)\/([^/]+)\/((?:full|max|pct:\d+(?:\.\d+)?|!?\d*,\d*))\/([^/]+)\/([^/.]+)\.([a-zA-Z0-9]+)(\?.*)?$/;
  return i.test(t) ? t.replace(
    i,
    (n, c, d, p, m, h, s, f = "") => `${c}/${p || "full"}/!${r},${r}/${m || "0"}/${h || "default"}.jpg${f}`
  ) : /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i.test(t) ? t.replace(
    /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i,
    `/full/!${r},${r}/0/default.jpg`
  ) : t;
}
function lr(t, { maxWidth: r = 480, quality: i = 0.72 } = {}) {
  if (!t || typeof t != "string") return "";
  const n = `${t}::${r}::${i}`;
  if (ke.has(n))
    return ke.get(n);
  const c = or(t, r);
  return ke.set(n, c), c;
}
function br(t, { maxWidth: r = 480, quality: i = 0.72 } = {}) {
  if (!t || !t.naturalWidth || !t.naturalHeight) return null;
  const n = Math.min(1, r / t.naturalWidth), c = Math.max(1, Math.round(t.naturalWidth * n)), d = Math.max(1, Math.round(t.naturalHeight * n)), p = document.createElement("canvas");
  p.width = c, p.height = d;
  const m = p.getContext("2d");
  if (!m) return null;
  try {
    m.drawImage(t, 0, 0, c, d);
    const h = "image/webp", s = p.toDataURL(h, i);
    return s.startsWith(`data:${h}`) ? s : p.toDataURL("image/jpeg", i);
  } catch {
    return null;
  }
}
const cr = {
  dark: {
    production: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    discovery: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    provenance: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    exhibition: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    current_location: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    other: "bg-slate-700/40 text-slate-300 border-slate-600"
  },
  light: {
    production: "bg-amber-50 text-amber-800 border-amber-200",
    discovery: "bg-emerald-50 text-emerald-800 border-emerald-200",
    provenance: "bg-sky-50 text-sky-800 border-sky-200",
    exhibition: "bg-purple-50 text-purple-800 border-purple-200",
    current_location: "bg-rose-50 text-rose-800 border-rose-200",
    other: "bg-slate-100 text-slate-700 border-slate-200"
  }
};
function ur({
  trail: t,
  activeLegIndex: r,
  isPlaying: i,
  isLoading: n,
  allowInput: c = !0,
  theme: d = "dark",
  onToggleTheme: p,
  onTogglePlay: m,
  onReset: h,
  onSelectStep: s,
  onLoadInput: f
}) {
  var N;
  const [o, b] = I(!1), [T, $] = I(""), [W, U] = I(null), _ = d === "light", E = cr[_ ? "light" : "dark"], Y = async (y) => {
    if (y && y.preventDefault(), !T.trim() || n) return;
    await f(T) && b(!1);
  }, G = (y) => {
    const k = /^https?:\/\/\S+$/i.test(T.trim());
    y.key === "Enter" && !y.shiftKey && k && (y.preventDefault(), Y());
  };
  return /* @__PURE__ */ u.jsxs(
    "aside",
    {
      className: `w-full lg:w-[410px] h-[48vh] lg:h-full border-t lg:border-t-0 lg:border-r flex flex-col z-10 transition-colors ${_ ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-slate-800 text-slate-100"}`,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: `p-4 border-b ${_ ? "border-slate-200" : "border-slate-800"}`, children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ u.jsx(
                "span",
                {
                  className: `text-[11px] font-semibold uppercase tracking-widest ${_ ? "text-sky-700" : "text-sky-400"}`,
                  children: "Linked Art GeoTrail"
                }
              ),
              /* @__PURE__ */ u.jsx("h1", { className: "text-base font-semibold leading-snug mt-0.5 truncate", children: t.objectLabel })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
              p && /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: p,
                  className: `inline-flex items-center justify-center w-8 h-8 rounded-lg border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                  title: _ ? "Switch to dark mode" : "Switch to light mode",
                  children: _ ? /* @__PURE__ */ u.jsx(Ft, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ u.jsx(Dt, { className: "w-3.5 h-3.5 text-amber-400" })
                }
              ),
              c && /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => b((y) => !y),
                  className: `inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ u.jsx(Ut, { className: `w-3.5 h-3.5 ${_ ? "text-sky-700" : "text-sky-400"}` }),
                    o ? "Close" : "Load URL / JSON"
                  ]
                }
              )
            ] })
          ] }),
          t.objectSummary && (!o || !c) && /* @__PURE__ */ u.jsx("p", { className: `text-xs mt-2 line-clamp-2 ${_ ? "text-slate-600" : "text-slate-400"}`, children: t.objectSummary }),
          c && o && /* @__PURE__ */ u.jsxs("form", { onSubmit: Y, className: "mt-3 space-y-2", children: [
            /* @__PURE__ */ u.jsx(
              "textarea",
              {
                value: T,
                onChange: (y) => $(y.target.value),
                onKeyDown: G,
                placeholder: "Paste a Linked Art URL (https://...) or JSON-LD payload...",
                rows: 4,
                className: `w-full rounded-lg border p-2.5 text-xs font-mono focus:outline-none focus:border-sky-500 ${_ ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-slate-950 border-slate-700 text-slate-200"}`
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "submit",
                disabled: n,
                className: "w-full inline-flex items-center justify-center gap-2 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-xs font-semibold text-white transition",
                children: n ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  /* @__PURE__ */ u.jsx(Mt, { className: "w-3.5 h-3.5 animate-spin" }),
                  "Fetching & Parsing..."
                ] }) : "Fetch / Parse & Plot Events"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: `px-4 py-3 border-b flex items-center gap-3 ${_ ? "bg-slate-50 border-slate-200" : "bg-slate-950/60 border-slate-800"}`,
            children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: m,
                  className: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white transition",
                  title: i ? "Pause animation" : "Play trajectory",
                  children: i ? /* @__PURE__ */ u.jsx(It, { className: "w-4 h-4" }) : /* @__PURE__ */ u.jsx(Wt, { className: "w-4 h-4 ml-0.5" })
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: h,
                  className: `inline-flex items-center justify-center w-8 h-8 rounded-full transition ${_ ? "bg-slate-200 hover:bg-slate-300 text-slate-700" : "bg-slate-800 hover:bg-slate-700 text-slate-300"}`,
                  title: "Restart from origin",
                  children: /* @__PURE__ */ u.jsx(Yt, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ u.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: Math.max(0, t.events.length - 1),
                    value: r,
                    onChange: (y) => s(Number(y.target.value)),
                    className: "w-full accent-sky-600 cursor-pointer"
                  }
                ),
                /* @__PURE__ */ u.jsxs(
                  "div",
                  {
                    className: `flex justify-between text-[11px] mt-0.5 ${_ ? "text-slate-600" : "text-slate-400"}`,
                    children: [
                      /* @__PURE__ */ u.jsxs("span", { children: [
                        "Stop ",
                        r + 1,
                        " of ",
                        t.events.length
                      ] }),
                      /* @__PURE__ */ u.jsx("span", { children: (N = t.events[r]) == null ? void 0 : N.dateDisplay })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "flex-1 overflow-y-auto p-3 space-y-2.5", children: [
          t.events.map((y) => {
            const k = y.index === r, P = y.index <= r;
            return /* @__PURE__ */ u.jsxs(
              "div",
              {
                onClick: () => s(y.index),
                className: `rounded-xl p-3 border cursor-pointer transition ${k ? _ ? "bg-sky-50/70 border-sky-500 shadow-sm" : "bg-slate-800/90 border-sky-500/70 shadow-lg" : P ? _ ? "bg-white border-slate-200 hover:border-slate-300" : "bg-slate-900 border-slate-700/80 hover:border-slate-600" : _ ? "bg-slate-50/70 border-slate-200/80 opacity-80 hover:opacity-100" : "bg-slate-900/40 border-slate-800/70 opacity-70 hover:opacity-100"}`,
                children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ u.jsxs(
                      "span",
                      {
                        className: `text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${E[y.category] || E.other}`,
                        children: [
                          y.index + 1,
                          ". ",
                          y.category.replace("_", " ")
                        ]
                      }
                    ),
                    /* @__PURE__ */ u.jsxs(
                      "span",
                      {
                        className: `inline-flex items-center gap-1 text-xs ${_ ? "text-slate-600" : "text-slate-400"}`,
                        children: [
                          /* @__PURE__ */ u.jsx(Gt, { className: "w-3 h-3" }),
                          y.dateDisplay
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u.jsx("h2", { className: "text-sm font-semibold mt-1.5", children: y.title }),
                  /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${_ ? "text-slate-700" : "text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ u.jsx(
                          Jt,
                          {
                            className: `w-3.5 h-3.5 shrink-0 ${_ ? "text-sky-700" : "text-sky-400"}`
                          }
                        ),
                        /* @__PURE__ */ u.jsx("span", { className: "truncate", children: y.placeLabel }),
                        y.placeUri && /* @__PURE__ */ u.jsx(
                          "a",
                          {
                            href: y.placeUri,
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: (R) => R.stopPropagation(),
                            className: "text-slate-400 hover:text-sky-500 ml-auto",
                            title: "Open Place URI",
                            children: /* @__PURE__ */ u.jsx(Vt, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    }
                  ),
                  y.actors.length > 0 && /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${_ ? "text-slate-600" : "text-slate-400"}`,
                      children: [
                        /* @__PURE__ */ u.jsx(Kt, { className: "w-3.5 h-3.5 shrink-0" }),
                        /* @__PURE__ */ u.jsx("span", { className: "truncate", children: y.actors.join(", ") })
                      ]
                    }
                  ),
                  y.description && /* @__PURE__ */ u.jsx(
                    "p",
                    {
                      className: `text-xs mt-1.5 leading-relaxed ${_ ? "text-slate-600" : "text-slate-400"}`,
                      children: y.description
                    }
                  ),
                  y.images.length > 0 && /* @__PURE__ */ u.jsx("div", { className: "mt-2.5 flex gap-2 overflow-x-auto pb-1", children: y.images.map((R) => {
                    const H = lr(R.url, { maxWidth: 240 });
                    return /* @__PURE__ */ u.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: (J) => {
                          J.stopPropagation(), U(R.url);
                        },
                        className: `group relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${_ ? "border-slate-300 hover:border-sky-600" : "border-slate-700 hover:border-sky-400"}`,
                        children: [
                          /* @__PURE__ */ u.jsx(
                            "img",
                            {
                              src: H,
                              alt: R.label,
                              loading: "lazy",
                              decoding: "async",
                              onError: (J) => {
                                J.currentTarget.src !== R.url && (J.currentTarget.src = R.url);
                              },
                              className: "w-full h-full object-cover group-hover:scale-105 transition"
                            }
                          ),
                          /* @__PURE__ */ u.jsx("span", { className: "absolute bottom-1 right-1 bg-slate-950/80 p-0.5 rounded text-slate-200", children: /* @__PURE__ */ u.jsx(Bt, { className: "w-2.5 h-2.5" }) })
                        ]
                      },
                      R.id
                    );
                  }) })
                ]
              },
              y.id
            );
          }),
          t.warnings.length > 0 && /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `rounded-lg border p-2.5 text-[11px] space-y-1 ${_ ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-amber-950/30 border-amber-500/30 text-amber-200"}`,
              children: [
                /* @__PURE__ */ u.jsx("div", { className: "font-semibold", children: "Spatial Resolution Notes" }),
                t.warnings.map((y, k) => /* @__PURE__ */ u.jsxs("div", { children: [
                  "• ",
                  y
                ] }, k))
              ]
            }
          )
        ] }),
        W && /* @__PURE__ */ u.jsx(
          "div",
          {
            onClick: () => U(null),
            className: "fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-6 cursor-zoom-out",
            children: /* @__PURE__ */ u.jsx(
              "img",
              {
                src: W,
                alt: "Linked Art representation",
                className: "max-w-full max-h-full rounded-xl border border-slate-700 shadow-2xl"
              }
            )
          }
        )
      ]
    }
  );
}
const dr = Ot(
  () => import("./GeoArcMap-BVLVUkjZ.js").then((t) => ({ default: t.GeoArcMap }))
), fr = 4500;
function gr({
  record: t = tt,
  allowInput: r = !0,
  theme: i = "dark"
}) {
  const [n, c] = I(i), [d, p] = I(() => je(t)), [m, h] = I(0), [s, f] = I(0), [o, b] = I(!1), [T, $] = I(!1), [W, U] = I(null), _ = $t(m);
  _.current = m, ue(() => {
    c(i);
  }, [i]), ue(() => {
    const k = je(t || tt);
    p(k), h(0), f(0), b(!1), U(null);
  }, [t]), ue(() => {
    let k = !1;
    if (d.events.some((R) => !R.coordinates))
      return rr(d).then((R) => {
        !k && R !== d && p(R);
      }), () => {
        k = !0;
      };
  }, [d]), ue(() => {
    if (!o || d.events.length < 2) return;
    let k, P = performance.now();
    const R = (H) => {
      const J = Math.min(H - P, 100);
      P = H, f((se) => {
        const D = se + J / fr;
        if (D >= 1) {
          const M = _.current;
          if (M < d.events.length - 1) {
            const V = M + 1;
            return _.current = V, h(V), 0;
          }
          return b(!1), 1;
        }
        return D;
      }), k = requestAnimationFrame(R);
    };
    return k = requestAnimationFrame(R), () => cancelAnimationFrame(k);
  }, [o, d.events.length]);
  const E = async (k) => {
    $(!0);
    try {
      const P = await ir(k), R = je(P);
      return p(R), h(0), f(0), b(!1), U(null), !0;
    } catch (P) {
      return U(P instanceof Error ? P.message : "Unable to parse Linked Art input"), !1;
    } finally {
      $(!1);
    }
  }, Y = (k) => {
    b(!1), h(k), f(k > 0 ? 1 : 0);
  }, G = () => {
    b(!1), h(0), f(0);
  }, N = () => {
    if (!(d.events.length < 2)) {
      if (o) {
        b(!1);
        return;
      }
      m >= d.events.length - 1 && (h(0), f(0)), b(!0);
    }
  }, y = n === "light";
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${y ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"}`,
      children: [
        /* @__PURE__ */ u.jsx(
          ur,
          {
            trail: d,
            activeLegIndex: m,
            isPlaying: o,
            isLoading: T,
            allowInput: r,
            theme: n,
            onToggleTheme: () => c((k) => k === "dark" ? "light" : "dark"),
            onTogglePlay: N,
            onReset: G,
            onSelectStep: Y,
            onLoadInput: E
          }
        ),
        /* @__PURE__ */ u.jsxs("main", { className: "relative flex-1 h-[52vh] lg:h-full", children: [
          W && /* @__PURE__ */ u.jsxs("div", { className: "absolute top-3 left-3 z-20 max-w-md bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs px-3 py-2 rounded-lg", children: [
            "Load Error: ",
            W
          ] }),
          /* @__PURE__ */ u.jsx(
            Lt,
            {
              fallback: /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: `w-full h-full flex items-center justify-center text-xs ${y ? "bg-slate-100 text-slate-600" : "bg-slate-950 text-slate-400"}`,
                  children: "Loading map engine..."
                }
              ),
              children: /* @__PURE__ */ u.jsx(
                dr,
                {
                  events: d.events,
                  activeLegIndex: m,
                  legProgress: s,
                  isPlaying: o,
                  onSelectEvent: Y,
                  theme: n
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
export {
  gr as A,
  br as c,
  lr as g,
  u as j
};
