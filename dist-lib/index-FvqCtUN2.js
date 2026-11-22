import Ne, { useState as B, useRef as Dt, useEffect as ue, createElement as Ut, useMemo as It, useCallback as ge, Suspense as Wt, lazy as Yt } from "react";
import { Moon as Bt, Sun as Jt, FileJson as Gt, Loader2 as Kt, Pause as Vt, Play as Ht, RotateCcw as zt, Calendar as Xt, MapPin as qt, ExternalLink as Zt, Users as Qt, Image as er } from "lucide-react";
var he = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function tr() {
  if (et) return oe;
  et = 1;
  var t = Ne, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(s, c, i) {
    var p, u = {}, b = null, $ = null;
    i !== void 0 && (b = "" + i), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && ($ = c.ref);
    for (p in c) a.call(c, p) && !m.hasOwnProperty(p) && (u[p] = c[p]);
    if (s && s.defaultProps) for (p in c = s.defaultProps, c) u[p] === void 0 && (u[p] = c[p]);
    return { $$typeof: r, type: s, key: b, ref: $, props: u, _owner: l.current };
  }
  return oe.Fragment = n, oe.jsx = h, oe.jsxs = h, oe;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function rr() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Ne, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), i = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), T = Symbol.iterator, F = "@@iterator";
    function O(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = T && e[T] || e[F];
      return typeof o == "function" ? o : null;
    }
    var U = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(e) {
      {
        for (var o = arguments.length, d = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          d[g - 1] = arguments[g];
        J("error", e, d);
      }
    }
    function J(e, o, d) {
      {
        var g = U.ReactDebugCurrentFrame, j = g.getStackAddendum();
        j !== "" && (o += "%s", d = d.concat([j]));
        var k = d.map(function(x) {
          return String(x);
        });
        k.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var I = !1, _ = !1, K = !1, G = !1, V = !1, X;
    X = Symbol.for("react.module.reference");
    function y(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === m || V || e === l || e === i || e === p || G || e === $ || I || _ || K || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === u || e.$$typeof === h || e.$$typeof === s || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function R(e, o, d) {
      var g = e.displayName;
      if (g)
        return g;
      var j = o.displayName || o.name || "";
      return j !== "" ? d + "(" + j + ")" : d;
    }
    function C(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case m:
          return "Profiler";
        case l:
          return "StrictMode";
        case i:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var o = e;
            return C(o) + ".Consumer";
          case h:
            var d = e;
            return C(d._context) + ".Provider";
          case c:
            return R(e, e.render, "ForwardRef");
          case u:
            var g = e.displayName || null;
            return g !== null ? g : E(e.type) || "Memo";
          case b: {
            var j = e, k = j._payload, x = j._init;
            try {
              return E(x(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, N = 0, H, ae, q, de, Le, Me, Fe;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function dt() {
      {
        if (N === 0) {
          H = console.log, ae = console.info, q = console.warn, de = console.error, Le = console.group, Me = console.groupCollapsed, Fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: De,
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
        N++;
      }
    }
    function ft() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: H
            }),
            info: D({}, e, {
              value: ae
            }),
            warn: D({}, e, {
              value: q
            }),
            error: D({}, e, {
              value: de
            }),
            group: D({}, e, {
              value: Le
            }),
            groupCollapsed: D({}, e, {
              value: Me
            }),
            groupEnd: D({}, e, {
              value: Fe
            })
          });
        }
        N < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = U.ReactCurrentDispatcher, we;
    function fe(e, o, d) {
      {
        if (we === void 0)
          try {
            throw Error();
          } catch (j) {
            var g = j.stack.trim().match(/\n( *(at )?)/);
            we = g && g[1] || "";
          }
        return `
` + we + e;
      }
    }
    var je = !1, pe;
    {
      var pt = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new pt();
    }
    function Ue(e, o) {
      if (!e || je)
        return "";
      {
        var d = pe.get(e);
        if (d !== void 0)
          return d;
      }
      var g;
      je = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = xe.current, xe.current = null, dt();
      try {
        if (o) {
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
            } catch (M) {
              g = M;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (M) {
              g = M;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            g = M;
          }
          e();
        }
      } catch (M) {
        if (M && g && typeof M.stack == "string") {
          for (var v = M.stack.split(`
`), L = g.stack.split(`
`), S = v.length - 1, P = L.length - 1; S >= 1 && P >= 0 && v[S] !== L[P]; )
            P--;
          for (; S >= 1 && P >= 0; S--, P--)
            if (v[S] !== L[P]) {
              if (S !== 1 || P !== 1)
                do
                  if (S--, P--, P < 0 || v[S] !== L[P]) {
                    var W = `
` + v[S].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && pe.set(e, W), W;
                  }
                while (S >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        je = !1, xe.current = k, ft(), Error.prepareStackTrace = j;
      }
      var te = e ? e.displayName || e.name : "", Z = te ? fe(te) : "";
      return typeof e == "function" && pe.set(e, Z), Z;
    }
    function mt(e, o, d) {
      return Ue(e, !1);
    }
    function bt(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function me(e, o, d) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ue(e, bt(e));
      if (typeof e == "string")
        return fe(e);
      switch (e) {
        case i:
          return fe("Suspense");
        case p:
          return fe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return mt(e.render);
          case u:
            return me(e.type, o, d);
          case b: {
            var g = e, j = g._payload, k = g._init;
            try {
              return me(k(j), o, d);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, Ie = {}, We = U.ReactDebugCurrentFrame;
    function be(e) {
      if (e) {
        var o = e._owner, d = me(e.type, e._source, o ? o.type : null);
        We.setExtraStackFrame(d);
      } else
        We.setExtraStackFrame(null);
    }
    function gt(e, o, d, g, j) {
      {
        var k = Function.call.bind(ie);
        for (var x in e)
          if (k(e, x)) {
            var v = void 0;
            try {
              if (typeof e[x] != "function") {
                var L = Error((g || "React class") + ": " + d + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              v = e[x](o, x, g, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              v = S;
            }
            v && !(v instanceof Error) && (be(j), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", d, x, typeof v), be(null)), v instanceof Error && !(v.message in Ie) && (Ie[v.message] = !0, be(j), A("Failed %s type: %s", d, v.message), be(null));
          }
      }
    }
    var ht = Array.isArray;
    function Ee(e) {
      return ht(e);
    }
    function yt(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, d = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d;
      }
    }
    function _t(e) {
      try {
        return Ye(e), !1;
      } catch {
        return !0;
      }
    }
    function Ye(e) {
      return "" + e;
    }
    function Be(e) {
      if (_t(e))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yt(e)), Ye(e);
    }
    var Je = U.ReactCurrentOwner, vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ge, Ke;
    function xt(e) {
      if (ie.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function wt(e) {
      if (ie.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function jt(e, o) {
      typeof e.ref == "string" && Je.current;
    }
    function Et(e, o) {
      {
        var d = function() {
          Ge || (Ge = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function kt(e, o) {
      {
        var d = function() {
          Ke || (Ke = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Rt = function(e, o, d, g, j, k, x) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: d,
        props: x,
        // Record the component responsible for creating this element.
        _owner: k
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
        value: j
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function At(e, o, d, g, j) {
      {
        var k, x = {}, v = null, L = null;
        d !== void 0 && (Be(d), v = "" + d), wt(o) && (Be(o.key), v = "" + o.key), xt(o) && (L = o.ref, jt(o, j));
        for (k in o)
          ie.call(o, k) && !vt.hasOwnProperty(k) && (x[k] = o[k]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (k in S)
            x[k] === void 0 && (x[k] = S[k]);
        }
        if (v || L) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && Et(x, P), L && kt(x, P);
        }
        return Rt(e, v, L, j, g, Je.current, x);
      }
    }
    var ke = U.ReactCurrentOwner, Ve = U.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var o = e._owner, d = me(e.type, e._source, o ? o.type : null);
        Ve.setExtraStackFrame(d);
      } else
        Ve.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function He() {
      {
        if (ke.current) {
          var e = E(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function St(e) {
      return "";
    }
    var ze = {};
    function Tt(e) {
      {
        var o = He();
        if (!o) {
          var d = typeof e == "string" ? e : e.displayName || e.name;
          d && (o = `

Check the top-level render call using <` + d + ">.");
        }
        return o;
      }
    }
    function Xe(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var d = Tt(o);
        if (ze[d])
          return;
        ze[d] = !0;
        var g = "";
        e && e._owner && e._owner !== ke.current && (g = " It was passed a child from " + E(e._owner.type) + "."), ee(e), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, g), ee(null);
      }
    }
    function qe(e, o) {
      {
        if (typeof e != "object")
          return;
        if (Ee(e))
          for (var d = 0; d < e.length; d++) {
            var g = e[d];
            Ae(g) && Xe(g, o);
          }
        else if (Ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var j = O(e);
          if (typeof j == "function" && j !== e.entries)
            for (var k = j.call(e), x; !(x = k.next()).done; )
              Ae(x.value) && Xe(x.value, o);
        }
      }
    }
    function Pt(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var d;
        if (typeof o == "function")
          d = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === u))
          d = o.propTypes;
        else
          return;
        if (d) {
          var g = E(o);
          gt(d, e.props, "prop", g, e);
        } else if (o.PropTypes !== void 0 && !Re) {
          Re = !0;
          var j = E(o);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ct(e) {
      {
        for (var o = Object.keys(e.props), d = 0; d < o.length; d++) {
          var g = o[d];
          if (g !== "children" && g !== "key") {
            ee(e), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), A("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var Ze = {};
    function Qe(e, o, d, g, j, k) {
      {
        var x = y(e);
        if (!x) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = St();
          L ? v += L : v += He();
          var S;
          e === null ? S = "null" : Ee(e) ? S = "array" : e !== void 0 && e.$$typeof === r ? (S = "<" + (E(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, v);
        }
        var P = At(e, o, d, j, k);
        if (P == null)
          return P;
        if (x) {
          var W = o.children;
          if (W !== void 0)
            if (g)
              if (Ee(W)) {
                for (var te = 0; te < W.length; te++)
                  qe(W[te], e);
                Object.freeze && Object.freeze(W);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qe(W, e);
        }
        if (ie.call(o, "key")) {
          var Z = E(e), M = Object.keys(o).filter(function(Ft) {
            return Ft !== "key";
          }), Se = M.length > 0 ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ze[Z + Se]) {
            var Mt = M.length > 0 ? "{" + M.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Se, Z, Mt, Z), Ze[Z + Se] = !0;
          }
        }
        return e === a ? Ct(P) : Pt(P), P;
      }
    }
    function Ot(e, o, d) {
      return Qe(e, o, d, !0);
    }
    function $t(e, o, d) {
      return Qe(e, o, d, !1);
    }
    var Nt = $t, Lt = Ot;
    se.Fragment = a, se.jsx = Nt, se.jsxs = Lt;
  })()), se;
}
var rt;
function nr() {
  return rt || (rt = 1, process.env.NODE_ENV === "production" ? he.exports = tr() : he.exports = rr()), he.exports;
}
var f = nr();
function ar(t) {
  if (!t || typeof t != "string") return null;
  const r = t.replace(/^<[^>]+>\s*/i, "").trim(), n = r.match(/^POINT\s*\(\s*([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)\s*\)$/i);
  if (n) {
    const m = parseFloat(n[1]), h = parseFloat(n[2]);
    if (Number.isFinite(m) && Number.isFinite(h))
      return { centroid: [m, h] };
  }
  const a = r.match(/^POLYGON\s*\(\((.+)\)\)$/i);
  if (a) {
    const m = a[1].split(/\)\s*,\s*\(/).map(
      (h) => h.split(",").map((s) => {
        const [c, i] = s.trim().split(/\s+/);
        return [parseFloat(c), parseFloat(i)];
      }).filter(([s, c]) => Number.isFinite(s) && Number.isFinite(c))
    );
    if (m[0] && m[0].length > 0)
      return { centroid: nt(m[0]), polygon: m };
  }
  const l = r.match(/^MULTIPOLYGON\s*\(\(\((.+)\)\)\)$/i);
  if (l) {
    const h = l[1].split(/\)\)\s*,\s*\(\(/)[0].split(",").map((s) => {
      const [c, i] = s.trim().split(/\s+/);
      return [parseFloat(c), parseFloat(i)];
    }).filter(([s, c]) => Number.isFinite(s) && Number.isFinite(c));
    if (h.length > 0)
      return { centroid: nt(h), polygon: [h] };
  }
  return null;
}
function nt(t) {
  let r = 0, n = 0;
  const a = t.length;
  for (const [l, m] of t)
    r += l, n += m;
  return [r / a, n / a];
}
const Te = {
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
}, lt = "linked-art-geotrail:geocode-cache:v1", ye = /* @__PURE__ */ new Set();
let at = Promise.resolve(), it = 0;
function $e() {
  try {
    return JSON.parse(localStorage.getItem(lt) || "{}");
  } catch {
    return {};
  }
}
function ir(t) {
  try {
    localStorage.setItem(lt, JSON.stringify(t));
  } catch {
  }
}
function ct(t) {
  if (!t || typeof t != "string") return "";
  let r = t.replace(/^Storage\s*[—-]\s*/i, "").trim();
  const n = r.match(/\bat\s+([^,]+(?:,\s*[^,]+){0,2})$/i);
  if (n && n[1])
    r = n[1].trim();
  else if (r.length > 65) {
    const a = r.split(",").map((l) => l.trim()).filter(Boolean);
    a.length >= 2 ? r = a.slice(-2).join(", ") : r = a[0].slice(0, 65);
  }
  return r;
}
function ut(t) {
  if (!t || typeof t != "string") return null;
  const r = [t, ct(t)].map((a) => a.trim().toLowerCase()).filter(Boolean), n = $e();
  for (const a of r) {
    if (Te[a])
      return Te[a];
    if (Array.isArray(n[a]) && n[a].length === 2)
      return n[a];
  }
  for (const a of r)
    for (const [l, m] of Object.entries(Te))
      if (a.includes(l))
        return m;
  return null;
}
function or(t) {
  const r = at.then(async () => {
    const n = Date.now() - it;
    return n < 1100 && await new Promise((a) => setTimeout(a, 1100 - n)), it = Date.now(), t();
  });
  return at = r.catch(() => null), r;
}
async function sr(t) {
  const r = ut(t);
  if (r) return r;
  const n = ct(t), a = n.split(",").map((h) => h.trim()).filter(Boolean), l = a.length > 1 ? a[a.length - 1] : n, m = n.toLowerCase();
  return !l || ye.has(m) ? null : or(async () => {
    const h = $e();
    if (Array.isArray(h[m]) && h[m].length === 2)
      return h[m];
    try {
      const s = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        l
      )}&count=1&language=en&format=json`, c = await fetch(s);
      if (!c.ok)
        return ye.add(m), null;
      const i = await c.json(), p = Array.isArray(i == null ? void 0 : i.results) ? i.results[0] : null;
      if (p && Number.isFinite(p.longitude) && Number.isFinite(p.latitude)) {
        const u = [p.longitude, p.latitude], b = $e();
        return b[m] = u, ir(b), u;
      }
      ye.add(m);
    } catch {
      ye.add(m);
    }
    return null;
  });
}
function ve(t) {
  if (typeof t != "string" || !/^https?:\/\//i.test(t.trim())) return null;
  try {
    const r = new URL(t.trim());
    return !["http:", "https:"].includes(r.protocol) || r.username || r.password ? null : r.href;
  } catch {
    return null;
  }
}
function Y(t, r = "Untitled") {
  if (!t) return r;
  if (typeof t._label == "string" && t._label.trim()) return t._label.trim();
  if (Array.isArray(t.identified_by)) {
    const n = t.identified_by.find(
      (a) => a.type === "Name" && Array.isArray(a.classified_as) && a.classified_as.some((l) => String(l.id).includes("300404670"))
    ) || t.identified_by.find((a) => a.type === "Name");
    if (n != null && n.content) return String(n.content);
  }
  return r;
}
function z(t, r) {
  return Array.isArray(t == null ? void 0 : t.classified_as) && t.classified_as.some(
    (n) => String(n.id || "").includes(r) || String(n._label || "").toLowerCase().includes(r.toLowerCase())
  );
}
function Q(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return;
  const r = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && z(n, "300080091")
  ) || t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && (z(n, "300444172") || z(n, "300444174"))
  );
  return r == null ? void 0 : r.content;
}
function le(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return null;
  const r = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && (z(a, "300435448") || z(a, "300444175") || z(a, "place"))
  );
  if (r != null && r.content)
    return r.content.trim();
  const n = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && z(a, "300444172")
  );
  if (n != null && n.content) {
    const a = n.content.match(/\b(London|Paris|New York|Rome|Athens|Los Angeles|Malibu|Amsterdam|Berlin)\b/i);
    if (a) return a[1];
  }
  return null;
}
function lr(t) {
  if (!t) return { display: "Date unknown", sortTs: Number.MAX_SAFE_INTEGER };
  let r = typeof t._label == "string" ? t._label.trim() : "";
  if (!r && Array.isArray(t.identified_by)) {
    const h = t.identified_by.find((s) => s.type === "Name" && s.content);
    h != null && h.content && (r = String(h.content));
  }
  const n = t.begin_of_the_begin || t.end_of_the_begin, a = t.end_of_the_end || t.begin_of_the_end;
  let l = Number.MAX_SAFE_INTEGER;
  const m = n || a;
  if (m) {
    const h = String(m).match(/^([+-]?\d{1,6})/);
    h && (l = parseInt(h[1], 10));
  } else if (r) {
    const h = r.match(/([+-]?\d{4})/);
    h && (l = parseInt(h[1], 10));
  }
  return r ? { display: r, sortTs: l } : n && a && n !== a ? { display: `${String(n).slice(0, 10)} – ${String(a).slice(0, 10)}`, sortTs: l } : n ? { display: String(n).slice(0, 10), sortTs: l } : a ? { display: String(a).slice(0, 10), sortTs: l } : { display: "Date unknown", sortTs: l };
}
function _e(t) {
  return !ve(t) || /rightsstatements\.org\/files\/icons/i.test(t) ? !1 : /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(t) || /\/iiif\/image\//i.test(t);
}
function ne(t, r) {
  const n = [];
  if (!t) return n;
  const a = (l) => {
    var h;
    if (!l || typeof l != "object") return;
    const m = Y(l, "Attached image");
    if (Array.isArray(l.access_point))
      for (const s of l.access_point)
        s != null && s.id && _e(s.id) && n.push({ id: s.id, url: s.id, label: m, source: r });
    if (_e(l.id) && n.push({ id: l.id, url: l.id, label: m, source: r }), Array.isArray(l.digitally_shown_by))
      for (const s of l.digitally_shown_by) {
        const c = Y(s, m), i = Array.isArray(s.conforms_to) ? (h = s.conforms_to.find((p) => String(p.id).includes("iiif.io/api/image"))) == null ? void 0 : h.id : void 0;
        if (Array.isArray(s.access_point))
          for (const p of s.access_point)
            p != null && p.id && _e(p.id) && n.push({ id: p.id, url: p.id, label: c, iiifService: i, source: r });
        else _e(s.id) && n.push({ id: s.id, url: s.id, label: c, iiifService: i, source: r });
      }
  };
  return Array.isArray(t.representation) && t.representation.forEach(a), Array.isArray(t.digitally_shown_by) && a(t), Array.from(new Map(n.map((l) => [l.url, l])).values());
}
function ce(t) {
  const r = [], n = (a) => {
    if (Array.isArray(a))
      for (const l of a) {
        const m = Y(l, "");
        m && m.toLowerCase() !== "unknown" && r.push(m);
      }
  };
  return n(t == null ? void 0 : t.carried_out_by), n(t == null ? void 0 : t.transferred_title_from), n(t == null ? void 0 : t.transferred_title_to), Array.from(new Set(r));
}
function re(t) {
  const r = Array.isArray(t) ? t[0] : t;
  if (!r || typeof r != "object") return null;
  let n = r.defined_by;
  if (!n && Array.isArray(r.part_of)) {
    const a = r.part_of.find((l) => typeof (l == null ? void 0 : l.defined_by) == "string");
    a && (n = a.defined_by);
  }
  return {
    label: Y(r, "Unnamed Place"),
    uri: r.id,
    wkt: n,
    isStorage: z(r, "300004465"),
    images: ne(r, "place")
  };
}
function Pe(t) {
  const r = [], n = Y(t, "Linked Art Object"), a = ne(t, "object"), l = [], m = ({
    id: i,
    title: p,
    category: u,
    timespan: b,
    placeLabel: $,
    placeUri: T,
    wkt: F,
    actors: O = [],
    description: U,
    images: A = [],
    defaultOrder: J,
    precisionNote: I
  }) => {
    const _ = ar(F), K = _ ? _.centroid : ut($), { display: G, sortTs: V } = lr(b);
    !_ && I && r.push(I), l.push({
      id: i,
      title: p,
      category: u,
      dateDisplay: G,
      sortTimestamp: V === Number.MAX_SAFE_INTEGER ? J : V,
      placeLabel: $,
      placeUri: T,
      coordinates: K,
      // May be null until async geocoding completes
      polygon: _ == null ? void 0 : _.polygon,
      isApproximate: !_,
      actors: O,
      description: U,
      images: A
    });
  };
  if (t.produced_by) {
    const i = re(t.produced_by.took_place_at), p = le(t.produced_by) || le(t), u = (i == null ? void 0 : i.label) || p;
    u && m({
      id: t.produced_by.id || "production-0",
      title: Y(t.produced_by, "Production / Creation"),
      category: "production",
      timespan: t.produced_by.timespan,
      placeLabel: u,
      placeUri: i == null ? void 0 : i.uri,
      wkt: i == null ? void 0 : i.wkt,
      actors: ce(t.produced_by),
      description: Q(t.produced_by),
      images: [...ne(t.produced_by, "event"), ...(i == null ? void 0 : i.images) || []],
      defaultOrder: -1e5,
      precisionNote: i != null && i.wkt ? void 0 : `Production place "${u}" resolved from text statement (no WKT defined_by).`
    });
  }
  if ((Array.isArray(t.encountered) ? t.encountered : t.found_by ? [t.found_by] : []).forEach((i, p) => {
    const u = re(i.took_place_at), b = (u == null ? void 0 : u.label) || le(i);
    b && m({
      id: i.id || `discovery-${p}`,
      title: Y(i, "Archaeological Encounter / Findspot"),
      category: "discovery",
      timespan: i.timespan,
      placeLabel: b,
      placeUri: u == null ? void 0 : u.uri,
      wkt: u == null ? void 0 : u.wkt,
      actors: ce(i),
      description: Q(i),
      images: [...ne(i, "event"), ...(u == null ? void 0 : u.images) || []],
      defaultOrder: -5e4 + p
    });
  }), Array.isArray(t.changed_ownership_through) && t.changed_ownership_through.forEach((i, p) => {
    const u = Array.isArray(i.part_of) ? i.part_of[0] : i.part_of, b = re(i.took_place_at) || re(u == null ? void 0 : u.took_place_at), $ = le(i) || le(u), T = (b == null ? void 0 : b.label) || $;
    T && m({
      id: i.id || `provenance-${p}`,
      title: Y(i, `Transfer of Custody #${p + 1}`),
      category: "provenance",
      timespan: i.timespan || (u == null ? void 0 : u.timespan),
      placeLabel: T,
      placeUri: b == null ? void 0 : b.uri,
      wkt: b == null ? void 0 : b.wkt,
      actors: [...ce(i), ...ce(u)],
      description: Q(i) || Q(u),
      images: [...ne(i, "event"), ...(b == null ? void 0 : b.images) || []],
      defaultOrder: 1e3 + p,
      precisionNote: b != null && b.wkt ? void 0 : `Provenance location "${T}" resolved from text statement (no WKT defined_by).`
    });
  }), [
    ...Array.isArray(t.used_for) ? t.used_for : [],
    ...Array.isArray(t.member_of) ? t.member_of.flatMap((i) => Array.isArray(i.used_for) ? i.used_for : []) : []
  ].forEach((i, p) => {
    const u = re(i.took_place_at), b = (u == null ? void 0 : u.label) || Y(i, "");
    b && m({
      id: i.id || `exhibition-${p}`,
      title: Y(i, `Exhibition #${p + 1}`),
      category: "exhibition",
      timespan: i.timespan,
      placeLabel: b,
      placeUri: u == null ? void 0 : u.uri,
      wkt: u == null ? void 0 : u.wkt,
      actors: ce(i),
      description: Q(i),
      images: [...ne(i, "event"), ...(u == null ? void 0 : u.images) || []],
      defaultOrder: 2e3 + p,
      precisionNote: u != null && u.wkt ? void 0 : `Exhibition venue "${b}" geocoded from activity label (no WKT defined_by).`
    });
  }), t.current_location) {
    const i = re(t.current_location), p = Array.isArray(t.current_owner) ? Y(t.current_owner[0], "") : "";
    if (i) {
      const u = !i.wkt && i.isStorage && p ? `${i.label} — ${p}` : i.label;
      m({
        id: `${t.id || "obj"}-current-location`,
        title: "Current Repository Location",
        category: "current_location",
        timespan: { _label: "Present" },
        placeLabel: u,
        placeUri: i.uri,
        wkt: i.wkt,
        actors: Array.isArray(t.current_owner) ? t.current_owner.map((b) => Y(b)) : [],
        description: Q(t.current_location),
        images: [...i.images, ...a],
        defaultOrder: 999999,
        precisionNote: i.wkt ? void 0 : `Current location "${u}" has no WKT defined_by; resolved via institution/place name.`
      });
    }
  }
  const c = l.sort((i, p) => i.sortTimestamp - p.sortTimestamp).map((i, p) => ({
    ...i,
    index: p,
    images: i.images.length > 0 ? i.images : a.slice(0, 1)
  }));
  return {
    objectId: t.id || "urn:linked-art:object",
    objectLabel: n,
    objectSummary: Q(t),
    heroImage: a[0],
    events: c,
    warnings: Array.from(new Set(r))
  };
}
async function cr(t) {
  let r = !1;
  const n = await Promise.all(
    t.events.map(async (a) => {
      if (Array.isArray(a.coordinates) && a.coordinates.length === 2)
        return a;
      const l = await sr(a.placeLabel);
      return l ? (r = !0, { ...a, coordinates: l }) : a;
    })
  );
  return r ? { ...t, events: n } : t;
}
const Ce = 4500, ur = 18e3, dr = 2e3, fr = 6371;
function ot(t) {
  return Array.isArray(t == null ? void 0 : t.coordinates) && t.coordinates.length === 2 && t.coordinates.every(Number.isFinite);
}
function pr(t, r) {
  const n = t[r + 1];
  if (!ot(n)) return Ce;
  let a = r;
  for (; a >= 0 && !ot(t[a]); ) a--;
  if (a < 0) return Ce;
  const [l, m] = t[a].coordinates.map((p) => p * Math.PI / 180), [h, s] = n.coordinates.map((p) => p * Math.PI / 180), c = Math.sin((s - m) / 2) ** 2 + Math.cos(m) * Math.cos(s) * Math.sin((h - l) / 2) ** 2, i = 2 * fr * Math.asin(Math.sqrt(Math.min(1, Math.max(0, c))));
  return Math.min(ur, Ce + Math.max(0, i - dr));
}
const mr = [
  (t) => `https://corsproxy.io/?${encodeURIComponent(t)}`,
  (t) => `https://api.allorigins.win/raw?url=${encodeURIComponent(t)}`
];
async function br(t) {
  const r = await fetch(t, {
    credentials: "omit",
    headers: {
      Accept: 'application/ld+json; profile="https://linked.art/ns/v1/linked-art.json", application/ld+json, application/json'
    }
  });
  if (!r.ok)
    throw new Error(`HTTP ${r.status} (${r.statusText})`);
  return r.json();
}
async function gr(t) {
  let r = null;
  for (const n of mr)
    try {
      const a = await fetch(n(t), { credentials: "omit" });
      if (!a.ok) {
        r = new Error(`Proxy HTTP ${a.status}`);
        continue;
      }
      return await a.json();
    } catch (a) {
      r = a;
    }
  throw r || new Error("Unable to fetch URL directly or via CORS proxy");
}
async function hr(t) {
  const r = String(t || "").trim();
  if (!r)
    throw new Error("Enter a Linked Art URL or paste JSON-LD.");
  let n;
  if (!r.startsWith("{") && !r.startsWith("[")) {
    const a = ve(r);
    if (!a)
      throw new Error("Enter a valid HTTP(S) URL without embedded credentials, or paste JSON-LD.");
    try {
      n = await br(a);
    } catch (l) {
      try {
        n = await gr(a);
      } catch {
        throw new Error(
          `Could not fetch "${a}" (${l instanceof Error ? l.message : "CORS or network error"}). Paste the JSON-LD directly instead.`
        );
      }
    }
  } else
    n = JSON.parse(r);
  if (!n || typeof n != "object" || Array.isArray(n) || typeof n.id != "string" || !n.id.trim() || typeof n.type != "string" || !n.type.trim())
    throw new Error("Expected a Linked Art JSON object with non-empty id and type fields.");
  return n;
}
const st = {
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
}, Oe = /* @__PURE__ */ new Map();
function yr(t, r = 400) {
  if (!t || typeof t != "string") return t;
  const n = /(\/iiif\/(?:image\/)?[^/]+)\/([^/]+)\/((?:full|max|pct:\d+(?:\.\d+)?|!?\d*,\d*))\/([^/]+)\/([^/.]+)\.([a-zA-Z0-9]+)(\?.*)?$/;
  return n.test(t) ? t.replace(
    n,
    (a, l, m, h, s, c, i, p = "") => `${l}/${h || "full"}/!${r},${r}/${s || "0"}/${c || "default"}.jpg${p}`
  ) : /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i.test(t) ? t.replace(
    /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i,
    `/full/!${r},${r}/0/default.jpg`
  ) : t;
}
function _r(t, { maxWidth: r = 480, quality: n = 0.72 } = {}) {
  if (!t || typeof t != "string") return "";
  const a = `${t}::${r}::${n}`;
  if (Oe.has(a))
    return Oe.get(a);
  const l = yr(t, r);
  return Oe.set(a, l), l;
}
function w(t, r, n) {
  return {
    className: ["geotrail-" + t, r == null ? void 0 : r[t]].filter(Boolean).join(" "),
    style: n == null ? void 0 : n[t]
  };
}
const vr = {
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
}, xr = Ne.memo(function({
  trail: r,
  activeLegIndex: n,
  isPlaying: a,
  isLoading: l,
  allowInput: m = !0,
  theme: h = "dark",
  classNames: s,
  styles: c,
  onToggleTheme: i,
  onTogglePlay: p,
  onReset: u,
  onSelectStep: b,
  onLoadInput: $
}) {
  var X;
  const [T, F] = B(!1), [O, U] = B(""), [A, J] = B(null), I = Dt([]), _ = h === "light", K = vr[_ ? "light" : "dark"];
  ue(() => {
    var y;
    (y = I.current[n]) == null || y.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [n, r.events.length]);
  const G = async (y) => {
    if (y && y.preventDefault(), !O.trim() || l) return;
    await $(O) && F(!1);
  }, V = (y) => {
    const R = /^https?:\/\/\S+$/i.test(O.trim());
    y.key === "Enter" && !y.shiftKey && R && (y.preventDefault(), G());
  };
  return /* @__PURE__ */ f.jsxs(
    "aside",
    {
      ...w("sidebar", s, c),
      className: `${w("sidebar", s, c).className} w-full lg:w-[410px] h-[48vh] lg:h-full border-t lg:border-t-0 lg:border-r flex flex-col z-10 transition-colors ${_ ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-slate-800 text-slate-100"}`,
      children: [
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            ...w("sidebarHeader", s, c),
            className: `${w("sidebarHeader", s, c).className} p-4 border-b ${_ ? "border-slate-200" : "border-slate-800"}`,
            children: [
              /* @__PURE__ */ f.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ f.jsx(
                    "span",
                    {
                      className: `text-[11px] font-semibold uppercase tracking-widest ${_ ? "text-sky-700" : "text-sky-400"}`,
                      children: "Linked Art GeoTrail"
                    }
                  ),
                  /* @__PURE__ */ f.jsx("h1", { className: "text-base font-semibold leading-snug mt-0.5 truncate", children: r.objectLabel })
                ] }),
                /* @__PURE__ */ f.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                  i && /* @__PURE__ */ f.jsx(
                    "button",
                    {
                      ...w("themeButton", s, c),
                      type: "button",
                      onClick: i,
                      className: `${w("themeButton", s, c).className} inline-flex items-center justify-center w-8 h-8 rounded-lg border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      title: _ ? "Switch to dark mode" : "Switch to light mode",
                      children: _ ? /* @__PURE__ */ f.jsx(Bt, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ f.jsx(Jt, { className: "w-3.5 h-3.5 text-amber-400" })
                    }
                  ),
                  m && /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      ...w("loadButton", s, c),
                      type: "button",
                      onClick: () => F((y) => !y),
                      className: `${w("loadButton", s, c).className} inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(Gt, { className: `w-3.5 h-3.5 ${_ ? "text-sky-700" : "text-sky-400"}` }),
                        T ? "Close" : "Load URL / JSON"
                      ]
                    }
                  )
                ] })
              ] }),
              r.objectSummary && (!T || !m) && /* @__PURE__ */ f.jsx("p", { className: `text-xs mt-2 line-clamp-2 ${_ ? "text-slate-600" : "text-slate-400"}`, children: r.objectSummary }),
              m && T && /* @__PURE__ */ f.jsxs(
                "form",
                {
                  ...w("loadForm", s, c),
                  onSubmit: G,
                  className: `${w("loadForm", s, c).className} mt-3 space-y-2`,
                  children: [
                    /* @__PURE__ */ f.jsx(
                      "textarea",
                      {
                        ...w("loadInput", s, c),
                        "aria-label": "Linked Art URL or JSON-LD",
                        value: O,
                        onChange: (y) => U(y.target.value),
                        onKeyDown: V,
                        placeholder: "Paste a Linked Art URL (https://...) or JSON-LD payload...",
                        rows: 4,
                        className: `${w("loadInput", s, c).className} w-full rounded-lg border p-2.5 text-xs font-mono focus:outline-none focus:border-sky-500 ${_ ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-slate-950 border-slate-700 text-slate-200"}`
                      }
                    ),
                    /* @__PURE__ */ f.jsx("p", { className: `text-xs ${_ ? "text-slate-600" : "text-slate-400"}`, children: "If direct loading fails, the URL is sent to public CORS proxies. Do not enter private URLs or tokens." }),
                    /* @__PURE__ */ f.jsx(
                      "button",
                      {
                        type: "submit",
                        disabled: l,
                        className: "w-full inline-flex items-center justify-center gap-2 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-xs font-semibold text-white transition",
                        children: l ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                          /* @__PURE__ */ f.jsx(Kt, { className: "w-3.5 h-3.5 animate-spin" }),
                          "Fetching & Parsing..."
                        ] }) : "Fetch / Parse & Plot Events"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            ...w("controls", s, c),
            className: `${w("controls", s, c).className} px-4 py-3 border-b flex items-center gap-3 ${_ ? "bg-slate-50 border-slate-200" : "bg-slate-950/60 border-slate-800"}`,
            children: [
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  ...w("playButton", s, c),
                  type: "button",
                  onClick: p,
                  className: `${w("playButton", s, c).className} inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white transition`,
                  title: a ? "Pause animation" : "Play trajectory",
                  children: a ? /* @__PURE__ */ f.jsx(Vt, { className: "w-4 h-4" }) : /* @__PURE__ */ f.jsx(Ht, { className: "w-4 h-4 ml-0.5" })
                }
              ),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  ...w("resetButton", s, c),
                  type: "button",
                  onClick: u,
                  className: `${w("resetButton", s, c).className} inline-flex items-center justify-center w-8 h-8 rounded-full transition ${_ ? "bg-slate-200 hover:bg-slate-300 text-slate-700" : "bg-slate-800 hover:bg-slate-700 text-slate-300"}`,
                  title: "Restart from origin",
                  children: /* @__PURE__ */ f.jsx(zt, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ f.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ f.jsx(
                  "input",
                  {
                    ...w("timeline", s, c),
                    type: "range",
                    min: 0,
                    max: Math.max(0, r.events.length - 1),
                    value: n,
                    onChange: (y) => b(Number(y.target.value)),
                    className: `${w("timeline", s, c).className} w-full accent-sky-600 cursor-pointer`
                  }
                ),
                /* @__PURE__ */ f.jsxs(
                  "div",
                  {
                    className: `flex justify-between text-[11px] mt-0.5 ${_ ? "text-slate-600" : "text-slate-400"}`,
                    children: [
                      /* @__PURE__ */ f.jsxs("span", { children: [
                        "Stop ",
                        n + 1,
                        " of ",
                        r.events.length
                      ] }),
                      /* @__PURE__ */ f.jsx("span", { children: (X = r.events[n]) == null ? void 0 : X.dateDisplay })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            ...w("eventList", s, c),
            className: `${w("eventList", s, c).className} flex-1 overflow-y-auto p-3 space-y-2.5`,
            children: [
              r.events.map((y) => {
                const R = y.index === n, C = y.index <= n;
                return /* @__PURE__ */ Ut(
                  "div",
                  {
                    ...w("eventCard", s, c),
                    "data-active": R,
                    "data-visited": C,
                    "data-category": y.category,
                    ref: (E) => {
                      I.current[y.index] = E;
                    },
                    key: y.id,
                    onClick: () => b(y.index),
                    className: `${w("eventCard", s, c).className} rounded-xl p-3 border cursor-pointer transition ${R ? _ ? "bg-sky-50/70 border-sky-500 shadow-sm" : "bg-slate-800/90 border-sky-500/70 shadow-lg" : C ? _ ? "bg-white border-slate-200 hover:border-slate-300" : "bg-slate-900 border-slate-700/80 hover:border-slate-600" : _ ? "bg-slate-50/70 border-slate-200/80 opacity-80 hover:opacity-100" : "bg-slate-900/40 border-slate-800/70 opacity-70 hover:opacity-100"}`
                  },
                  /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ f.jsxs(
                      "span",
                      {
                        ...w("eventBadge", s, c),
                        className: `${w("eventBadge", s, c).className} text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${K[y.category] || K.other}`,
                        children: [
                          y.index + 1,
                          ". ",
                          y.category.replace("_", " ")
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.jsxs(
                      "span",
                      {
                        className: `inline-flex items-center gap-1 text-xs ${_ ? "text-slate-600" : "text-slate-400"}`,
                        children: [
                          /* @__PURE__ */ f.jsx(Xt, { className: "w-3 h-3" }),
                          y.dateDisplay
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ f.jsx("h2", { className: "text-sm font-semibold mt-1.5", children: y.title }),
                  /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${_ ? "text-slate-700" : "text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(
                          qt,
                          {
                            className: `w-3.5 h-3.5 shrink-0 ${_ ? "text-sky-700" : "text-sky-400"}`
                          }
                        ),
                        /* @__PURE__ */ f.jsx("span", { className: "truncate", children: y.placeLabel }),
                        ve(y.placeUri) && /* @__PURE__ */ f.jsx(
                          "a",
                          {
                            href: ve(y.placeUri),
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: (E) => E.stopPropagation(),
                            className: "text-slate-400 hover:text-sky-500 ml-auto",
                            title: "Open Place URI",
                            children: /* @__PURE__ */ f.jsx(Zt, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    }
                  ),
                  y.actors.length > 0 && /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${_ ? "text-slate-600" : "text-slate-400"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(Qt, { className: "w-3.5 h-3.5 shrink-0" }),
                        /* @__PURE__ */ f.jsx("span", { className: "truncate", children: y.actors.join(", ") })
                      ]
                    }
                  ),
                  y.description && /* @__PURE__ */ f.jsx(
                    "p",
                    {
                      className: `text-xs mt-1.5 leading-relaxed ${_ ? "text-slate-600" : "text-slate-400"}`,
                      children: y.description
                    }
                  ),
                  y.images.length > 0 && /* @__PURE__ */ f.jsx("div", { className: "mt-2.5 flex gap-2 overflow-x-auto pb-1", children: y.images.map((E) => {
                    const D = _r(E.url, { maxWidth: 240 });
                    return /* @__PURE__ */ f.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: (N) => {
                          N.stopPropagation(), J(E.url);
                        },
                        className: `group relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${_ ? "border-slate-300 hover:border-sky-600" : "border-slate-700 hover:border-sky-400"}`,
                        children: [
                          /* @__PURE__ */ f.jsx(
                            "img",
                            {
                              src: D,
                              alt: E.label,
                              loading: "lazy",
                              decoding: "async",
                              onError: (N) => {
                                N.currentTarget.src !== E.url && (N.currentTarget.src = E.url);
                              },
                              className: "w-full h-full object-cover group-hover:scale-105 transition"
                            }
                          ),
                          /* @__PURE__ */ f.jsx("span", { className: "absolute bottom-1 right-1 bg-slate-950/80 p-0.5 rounded text-slate-200", children: /* @__PURE__ */ f.jsx(er, { className: "w-2.5 h-2.5" }) })
                        ]
                      },
                      E.id
                    );
                  }) })
                );
              }),
              r.warnings.length > 0 && /* @__PURE__ */ f.jsxs(
                "div",
                {
                  ...w("warnings", s, c),
                  className: `${w("warnings", s, c).className} rounded-lg border p-2.5 text-[11px] space-y-1 ${_ ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-amber-950/30 border-amber-500/30 text-amber-200"}`,
                  children: [
                    /* @__PURE__ */ f.jsx("div", { className: "font-semibold", children: "Spatial Resolution Notes" }),
                    r.warnings.map((y, R) => /* @__PURE__ */ f.jsxs("div", { children: [
                      "• ",
                      y
                    ] }, R))
                  ]
                }
              )
            ]
          }
        ),
        A && /* @__PURE__ */ f.jsx(
          "div",
          {
            ...w("lightbox", s, c),
            onClick: () => J(null),
            className: `${w("lightbox", s, c).className} fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-6 cursor-zoom-out`,
            children: /* @__PURE__ */ f.jsx(
              "img",
              {
                src: A,
                alt: "Linked Art representation",
                className: "max-w-full max-h-full rounded-xl border border-slate-700 shadow-2xl"
              }
            )
          }
        )
      ]
    }
  );
}), wr = Yt(
  () => import("./GeoArcMap-CoGy9AVk.js").then((t) => ({ default: t.GeoArcMap }))
), jr = 1e3 / 30;
function Rr({
  record: t = st,
  allowInput: r = !0,
  theme: n = "dark",
  classNames: a,
  styles: l,
  mapStyles: m,
  mapAppearance: h
}) {
  const [s, c] = B(n), [i, p] = B(() => Pe(t)), [u, b] = B(0), [$, T] = B(0), [F, O] = B(!1), [U, A] = B(!1), [J, I] = B(null), _ = It(
    () => i.events.map((R, C) => pr(i.events, C)),
    [i.events]
  );
  ue(() => {
    c(n);
  }, [n]), ue(() => {
    const R = Pe(t || st);
    p(R), b(0), T(0), O(!1), I(null);
  }, [t]), ue(() => {
    let R = !1;
    if (i.events.some((E) => !E.coordinates))
      return cr(i).then((E) => {
        !R && E !== i && p(E);
      }), () => {
        R = !0;
      };
  }, [i]), ue(() => {
    if (!F || i.events.length < 2) return;
    let R, C = performance.now(), E = C, D = 0, N = u, H = $;
    const ae = (q) => {
      const de = Math.min(q - C, 100);
      if (C = q, D += de, q - E >= jr) {
        if (E = q, H += D / _[N], D = 0, H >= 1 && (N += 1, b(N), H = 0, N >= i.events.length - 1)) {
          T(H), O(!1);
          return;
        }
        T(H);
      }
      R = requestAnimationFrame(ae);
    };
    return R = requestAnimationFrame(ae), () => cancelAnimationFrame(R);
  }, [F, i.events.length, _]);
  const K = ge(async (R) => {
    A(!0), I(null);
    try {
      const C = await hr(R), E = Pe(C);
      return p(E), b(0), T(0), O(!1), I(null), !0;
    } catch (C) {
      return I(C instanceof Error ? C.message : "Unable to parse Linked Art input"), !1;
    } finally {
      A(!1);
    }
  }, []), G = ge((R) => {
    O(!1), b(R), T(0);
  }, []), V = ge(() => {
    O(!1), b(0), T(0);
  }, []), X = ge(() => {
    if (!(i.events.length < 2)) {
      if (F) {
        O(!1);
        return;
      }
      u >= i.events.length - 1 && (b(0), T(0)), O(!0);
    }
  }, [u, F, i.events.length]), y = s === "light";
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      ...w("root", a, l),
      className: `${w("root", a, l).className} w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${y ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"}`,
      "data-theme": s,
      children: [
        /* @__PURE__ */ f.jsx(
          xr,
          {
            trail: i,
            activeLegIndex: u,
            isPlaying: F,
            isLoading: U,
            allowInput: r,
            theme: s,
            classNames: a,
            styles: l,
            onToggleTheme: () => c((R) => R === "dark" ? "light" : "dark"),
            onTogglePlay: X,
            onReset: V,
            onSelectStep: G,
            onLoadInput: K
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "main",
          {
            ...w("mapContainer", a, l),
            className: `${w("mapContainer", a, l).className} relative flex-1 h-[52vh] lg:h-full`,
            children: [
              J && /* @__PURE__ */ f.jsxs("div", { role: "alert", className: "absolute top-3 left-3 z-20 max-w-md bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs px-3 py-2 rounded-lg", children: [
                "Load Error: ",
                J
              ] }),
              /* @__PURE__ */ f.jsx(
                Wt,
                {
                  fallback: /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      className: `w-full h-full flex items-center justify-center text-xs ${y ? "bg-slate-100 text-slate-600" : "bg-slate-950 text-slate-400"}`,
                      children: "Loading map engine..."
                    }
                  ),
                  children: /* @__PURE__ */ f.jsx(
                    wr,
                    {
                      events: i.events,
                      activeLegIndex: u,
                      legProgress: $,
                      isPlaying: F,
                      onSelectEvent: G,
                      theme: s,
                      classNames: a,
                      styles: l,
                      mapStyles: m,
                      mapAppearance: h
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  Rr as A,
  w as c,
  _r as g,
  f as j,
  ve as s
};
