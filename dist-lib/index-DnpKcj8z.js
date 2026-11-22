import Ue, { useState as G, useRef as dt, useEffect as pe, createElement as Wt, useMemo as Yt, useCallback as le, Suspense as Bt, lazy as Gt } from "react";
import { Moon as Jt, Sun as Kt, FileJson as Vt, Loader2 as Ht, Pause as zt, Play as Xt, RotateCcw as qt, Calendar as Zt, MapPin as Qt, ExternalLink as er, Users as tr, Image as rr } from "lucide-react";
var ve = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function nr() {
  if (rt) return ce;
  rt = 1;
  var t = Ue, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(s, u, i) {
    var f, c = {}, b = null, O = null;
    i !== void 0 && (b = "" + i), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (O = u.ref);
    for (f in u) n.call(u, f) && !m.hasOwnProperty(f) && (c[f] = u[f]);
    if (s && s.defaultProps) for (f in u = s.defaultProps, u) c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: r, type: s, key: b, ref: O, props: c, _owner: l.current };
  }
  return ce.Fragment = a, ce.jsx = h, ce.jsxs = h, ce;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function ar() {
  return nt || (nt = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Ue, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), i = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), P = Symbol.iterator, F = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = P && e[P] || e[F];
      return typeof o == "function" ? o : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var o = arguments.length, d = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          d[g - 1] = arguments[g];
        J("error", e, d);
      }
    }
    function J(e, o, d) {
      {
        var g = D.ReactDebugCurrentFrame, E = g.getStackAddendum();
        E !== "" && (o += "%s", d = d.concat([E]));
        var k = d.map(function(w) {
          return String(w);
        });
        k.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var U = !1, _ = !1, N = !1, V = !1, H = !1, B;
    B = Symbol.for("react.module.reference");
    function y(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === m || H || e === l || e === i || e === f || V || e === O || U || _ || N || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === c || e.$$typeof === h || e.$$typeof === s || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === B || e.getModuleId !== void 0));
    }
    function Y(e, o, d) {
      var g = e.displayName;
      if (g)
        return g;
      var E = o.displayName || o.name || "";
      return E !== "" ? d + "(" + E + ")" : d;
    }
    function z(e) {
      return e.displayName || "Context";
    }
    function v(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case m:
          return "Profiler";
        case l:
          return "StrictMode";
        case i:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var o = e;
            return z(o) + ".Consumer";
          case h:
            var d = e;
            return z(d._context) + ".Provider";
          case u:
            return Y(e, e.render, "ForwardRef");
          case c:
            var g = e.displayName || null;
            return g !== null ? g : v(e.type) || "Memo";
          case b: {
            var E = e, k = E._payload, w = E._init;
            try {
              return v(w(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, S = 0, X, q, Z, re, Q, me, be;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function mt() {
      {
        if (S === 0) {
          X = console.log, q = console.info, Z = console.warn, re = console.error, Q = console.group, me = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
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
        S++;
      }
    }
    function bt() {
      {
        if (S--, S === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: X
            }),
            info: A({}, e, {
              value: q
            }),
            warn: A({}, e, {
              value: Z
            }),
            error: A({}, e, {
              value: re
            }),
            group: A({}, e, {
              value: Q
            }),
            groupCollapsed: A({}, e, {
              value: me
            }),
            groupEnd: A({}, e, {
              value: be
            })
          });
        }
        S < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = D.ReactCurrentDispatcher, Re;
    function ge(e, o, d) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (E) {
            var g = E.stack.trim().match(/\n( *(at )?)/);
            Re = g && g[1] || "";
          }
        return `
` + Re + e;
      }
    }
    var Ae = !1, he;
    {
      var gt = typeof WeakMap == "function" ? WeakMap : Map;
      he = new gt();
    }
    function We(e, o) {
      if (!e || Ae)
        return "";
      {
        var d = he.get(e);
        if (d !== void 0)
          return d;
      }
      var g;
      Ae = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = ke.current, ke.current = null, mt();
      try {
        if (o) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (M) {
              g = M;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (M) {
              g = M;
            }
            e.call(w.prototype);
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
          for (var x = M.stack.split(`
`), L = g.stack.split(`
`), T = x.length - 1, C = L.length - 1; T >= 1 && C >= 0 && x[T] !== L[C]; )
            C--;
          for (; T >= 1 && C >= 0; T--, C--)
            if (x[T] !== L[C]) {
              if (T !== 1 || C !== 1)
                do
                  if (T--, C--, C < 0 || x[T] !== L[C]) {
                    var I = `
` + x[T].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && he.set(e, I), I;
                  }
                while (T >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        Ae = !1, ke.current = k, bt(), Error.prepareStackTrace = E;
      }
      var ae = e ? e.displayName || e.name : "", ee = ae ? ge(ae) : "";
      return typeof e == "function" && he.set(e, ee), ee;
    }
    function ht(e, o, d) {
      return We(e, !1);
    }
    function yt(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function ye(e, o, d) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return We(e, yt(e));
      if (typeof e == "string")
        return ge(e);
      switch (e) {
        case i:
          return ge("Suspense");
        case f:
          return ge("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return ht(e.render);
          case c:
            return ye(e.type, o, d);
          case b: {
            var g = e, E = g._payload, k = g._init;
            try {
              return ye(k(E), o, d);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, Ye = {}, Be = D.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var o = e._owner, d = ye(e.type, e._source, o ? o.type : null);
        Be.setExtraStackFrame(d);
      } else
        Be.setExtraStackFrame(null);
    }
    function _t(e, o, d, g, E) {
      {
        var k = Function.call.bind(se);
        for (var w in e)
          if (k(e, w)) {
            var x = void 0;
            try {
              if (typeof e[w] != "function") {
                var L = Error((g || "React class") + ": " + d + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              x = e[w](o, w, g, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              x = T;
            }
            x && !(x instanceof Error) && (_e(E), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", d, w, typeof x), _e(null)), x instanceof Error && !(x.message in Ye) && (Ye[x.message] = !0, _e(E), R("Failed %s type: %s", d, x.message), _e(null));
          }
      }
    }
    var vt = Array.isArray;
    function Se(e) {
      return vt(e);
    }
    function xt(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, d = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d;
      }
    }
    function wt(e) {
      try {
        return Ge(e), !1;
      } catch {
        return !0;
      }
    }
    function Ge(e) {
      return "" + e;
    }
    function Je(e) {
      if (wt(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xt(e)), Ge(e);
    }
    var Ke = D.ReactCurrentOwner, jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, He;
    function Et(e) {
      if (se.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function kt(e) {
      if (se.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Rt(e, o) {
      typeof e.ref == "string" && Ke.current;
    }
    function At(e, o) {
      {
        var d = function() {
          Ve || (Ve = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function St(e, o) {
      {
        var d = function() {
          He || (He = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Tt = function(e, o, d, g, E, k, w) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: d,
        props: w,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function Pt(e, o, d, g, E) {
      {
        var k, w = {}, x = null, L = null;
        d !== void 0 && (Je(d), x = "" + d), kt(o) && (Je(o.key), x = "" + o.key), Et(o) && (L = o.ref, Rt(o, E));
        for (k in o)
          se.call(o, k) && !jt.hasOwnProperty(k) && (w[k] = o[k]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (k in T)
            w[k] === void 0 && (w[k] = T[k]);
        }
        if (x || L) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          x && At(w, C), L && St(w, C);
        }
        return Tt(e, x, L, E, g, Ke.current, w);
      }
    }
    var Te = D.ReactCurrentOwner, ze = D.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var o = e._owner, d = ye(e.type, e._source, o ? o.type : null);
        ze.setExtraStackFrame(d);
      } else
        ze.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Xe() {
      {
        if (Te.current) {
          var e = v(Te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ct(e) {
      return "";
    }
    var qe = {};
    function Ot(e) {
      {
        var o = Xe();
        if (!o) {
          var d = typeof e == "string" ? e : e.displayName || e.name;
          d && (o = `

Check the top-level render call using <` + d + ">.");
        }
        return o;
      }
    }
    function Ze(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var d = Ot(o);
        if (qe[d])
          return;
        qe[d] = !0;
        var g = "";
        e && e._owner && e._owner !== Te.current && (g = " It was passed a child from " + v(e._owner.type) + "."), ne(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, g), ne(null);
      }
    }
    function Qe(e, o) {
      {
        if (typeof e != "object")
          return;
        if (Se(e))
          for (var d = 0; d < e.length; d++) {
            var g = e[d];
            Ce(g) && Ze(g, o);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = $(e);
          if (typeof E == "function" && E !== e.entries)
            for (var k = E.call(e), w; !(w = k.next()).done; )
              Ce(w.value) && Ze(w.value, o);
        }
      }
    }
    function $t(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var d;
        if (typeof o == "function")
          d = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === c))
          d = o.propTypes;
        else
          return;
        if (d) {
          var g = v(o);
          _t(d, e.props, "prop", g, e);
        } else if (o.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var E = v(o);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nt(e) {
      {
        for (var o = Object.keys(e.props), d = 0; d < o.length; d++) {
          var g = o[d];
          if (g !== "children" && g !== "key") {
            ne(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), ne(null);
            break;
          }
        }
        e.ref !== null && (ne(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    var et = {};
    function tt(e, o, d, g, E, k) {
      {
        var w = y(e);
        if (!w) {
          var x = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Ct();
          L ? x += L : x += Xe();
          var T;
          e === null ? T = "null" : Se(e) ? T = "array" : e !== void 0 && e.$$typeof === r ? (T = "<" + (v(e.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, x);
        }
        var C = Pt(e, o, d, E, k);
        if (C == null)
          return C;
        if (w) {
          var I = o.children;
          if (I !== void 0)
            if (g)
              if (Se(I)) {
                for (var ae = 0; ae < I.length; ae++)
                  Qe(I[ae], e);
                Object.freeze && Object.freeze(I);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(I, e);
        }
        if (se.call(o, "key")) {
          var ee = v(e), M = Object.keys(o).filter(function(It) {
            return It !== "key";
          }), Oe = M.length > 0 ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!et[ee + Oe]) {
            var Ut = M.length > 0 ? "{" + M.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Oe, ee, Ut, ee), et[ee + Oe] = !0;
          }
        }
        return e === n ? Nt(C) : $t(C), C;
      }
    }
    function Lt(e, o, d) {
      return tt(e, o, d, !0);
    }
    function Mt(e, o, d) {
      return tt(e, o, d, !1);
    }
    var Ft = Mt, Dt = Lt;
    ue.Fragment = n, ue.jsx = Ft, ue.jsxs = Dt;
  })()), ue;
}
var at;
function ir() {
  return at || (at = 1, process.env.NODE_ENV === "production" ? ve.exports = nr() : ve.exports = ar()), ve.exports;
}
var p = ir();
function or(t) {
  if (!t || typeof t != "string") return null;
  const r = t.replace(/^<[^>]+>\s*/i, "").trim(), a = r.match(/^POINT\s*\(\s*([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)\s*\)$/i);
  if (a) {
    const m = parseFloat(a[1]), h = parseFloat(a[2]);
    if (Number.isFinite(m) && Number.isFinite(h))
      return { centroid: [m, h] };
  }
  const n = r.match(/^POLYGON\s*\(\((.+)\)\)$/i);
  if (n) {
    const m = n[1].split(/\)\s*,\s*\(/).map(
      (h) => h.split(",").map((s) => {
        const [u, i] = s.trim().split(/\s+/);
        return [parseFloat(u), parseFloat(i)];
      }).filter(([s, u]) => Number.isFinite(s) && Number.isFinite(u))
    );
    if (m[0] && m[0].length > 0)
      return { centroid: it(m[0]), polygon: m };
  }
  const l = r.match(/^MULTIPOLYGON\s*\(\(\((.+)\)\)\)$/i);
  if (l) {
    const h = l[1].split(/\)\)\s*,\s*\(\(/)[0].split(",").map((s) => {
      const [u, i] = s.trim().split(/\s+/);
      return [parseFloat(u), parseFloat(i)];
    }).filter(([s, u]) => Number.isFinite(s) && Number.isFinite(u));
    if (h.length > 0)
      return { centroid: it(h), polygon: [h] };
  }
  return null;
}
function it(t) {
  let r = 0, a = 0;
  const n = t.length;
  for (const [l, m] of t)
    r += l, a += m;
  return [r / n, a / n];
}
const $e = {
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
}, ft = "linked-art-geotrail:geocode-cache:v1", xe = /* @__PURE__ */ new Set();
let ot = Promise.resolve(), st = 0;
function Fe() {
  try {
    return JSON.parse(localStorage.getItem(ft) || "{}");
  } catch {
    return {};
  }
}
function sr(t) {
  try {
    localStorage.setItem(ft, JSON.stringify(t));
  } catch {
  }
}
function pt(t) {
  if (!t || typeof t != "string") return "";
  let r = t.replace(/^Storage\s*[—-]\s*/i, "").trim();
  const a = r.match(/\bat\s+([^,]+(?:,\s*[^,]+){0,2})$/i);
  if (a && a[1])
    r = a[1].trim();
  else if (r.length > 65) {
    const n = r.split(",").map((l) => l.trim()).filter(Boolean);
    n.length >= 2 ? r = n.slice(-2).join(", ") : r = n[0].slice(0, 65);
  }
  return r;
}
function De(t) {
  if (!t || typeof t != "string") return null;
  const r = [t, pt(t)].map((n) => n.trim().toLowerCase()).filter(Boolean), a = Fe();
  for (const n of r) {
    if ($e[n])
      return $e[n];
    if (Array.isArray(a[n]) && a[n].length === 2)
      return a[n];
  }
  for (const n of r)
    for (const [l, m] of Object.entries($e))
      if (n.includes(l))
        return m;
  return null;
}
function lr(t) {
  const r = ot.then(async () => {
    const a = Date.now() - st;
    return a < 1100 && await new Promise((n) => setTimeout(n, 1100 - a)), st = Date.now(), t();
  });
  return ot = r.catch(() => null), r;
}
async function lt(t) {
  const r = De(t);
  if (r) return r;
  const a = pt(t), n = a.split(",").map((h) => h.trim()).filter(Boolean), l = n.length > 1 ? n[n.length - 1] : a, m = a.toLowerCase();
  return !l || xe.has(m) ? null : lr(async () => {
    const h = Fe();
    if (Array.isArray(h[m]) && h[m].length === 2)
      return h[m];
    try {
      const s = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        l
      )}&count=1&language=en&format=json`, u = await fetch(s);
      if (!u.ok)
        return xe.add(m), null;
      const i = await u.json(), f = Array.isArray(i == null ? void 0 : i.results) ? i.results[0] : null;
      if (f && Number.isFinite(f.longitude) && Number.isFinite(f.latitude)) {
        const c = [f.longitude, f.latitude], b = Fe();
        return b[m] = c, sr(b), c;
      }
      xe.add(m);
    } catch {
      xe.add(m);
    }
    return null;
  });
}
function Ee(t) {
  if (typeof t != "string" || !/^https?:\/\//i.test(t.trim())) return null;
  try {
    const r = new URL(t.trim());
    return !["http:", "https:"].includes(r.protocol) || r.username || r.password ? null : r.href;
  } catch {
    return null;
  }
}
function W(t, r = "Untitled") {
  if (!t) return r;
  if (typeof t._label == "string" && t._label.trim()) return t._label.trim();
  if (Array.isArray(t.identified_by)) {
    const a = t.identified_by.find(
      (n) => n.type === "Name" && Array.isArray(n.classified_as) && n.classified_as.some((l) => String(l.id).includes("300404670"))
    ) || t.identified_by.find((n) => n.type === "Name");
    if (a != null && a.content) return String(a.content);
  }
  return r;
}
function K(t, r) {
  return Array.isArray(t == null ? void 0 : t.classified_as) && t.classified_as.some(
    (a) => String(a.id || "").includes(r) || String(a._label || "").toLowerCase().includes(r.toLowerCase())
  );
}
function te(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return;
  const r = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && K(a, "300080091")
  ) || t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && (K(a, "300444172") || K(a, "300444174"))
  );
  return r == null ? void 0 : r.content;
}
function de(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return null;
  const r = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && (K(n, "300435448") || K(n, "300444175") || K(n, "place"))
  );
  if (r != null && r.content)
    return r.content.trim();
  const a = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && K(n, "300444172")
  );
  if (a != null && a.content) {
    const n = a.content.match(/\b(London|Paris|New York|Rome|Athens|Los Angeles|Malibu|Amsterdam|Berlin)\b/i);
    if (n) return n[1];
  }
  return null;
}
function cr(t) {
  if (!t) return { display: "Date unknown", sortTs: Number.MAX_SAFE_INTEGER };
  let r = typeof t._label == "string" ? t._label.trim() : "";
  if (!r && Array.isArray(t.identified_by)) {
    const h = t.identified_by.find((s) => s.type === "Name" && s.content);
    h != null && h.content && (r = String(h.content));
  }
  const a = t.begin_of_the_begin || t.end_of_the_begin, n = t.end_of_the_end || t.begin_of_the_end;
  let l = Number.MAX_SAFE_INTEGER;
  const m = a || n;
  if (m) {
    const h = String(m).match(/^([+-]?\d{1,6})/);
    h && (l = parseInt(h[1], 10));
  } else if (r) {
    const h = r.match(/([+-]?\d{4})/);
    h && (l = parseInt(h[1], 10));
  }
  return r ? { display: r, sortTs: l } : a && n && a !== n ? { display: `${String(a).slice(0, 10)} – ${String(n).slice(0, 10)}`, sortTs: l } : a ? { display: String(a).slice(0, 10), sortTs: l } : n ? { display: String(n).slice(0, 10), sortTs: l } : { display: "Date unknown", sortTs: l };
}
function we(t) {
  return !Ee(t) || /rightsstatements\.org\/files\/icons/i.test(t) ? !1 : /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(t) || /\/iiif\/image\//i.test(t);
}
function oe(t, r) {
  const a = [];
  if (!t) return a;
  const n = (l) => {
    var h;
    if (!l || typeof l != "object") return;
    const m = W(l, "Attached image");
    if (Array.isArray(l.access_point))
      for (const s of l.access_point)
        s != null && s.id && we(s.id) && a.push({ id: s.id, url: s.id, label: m, source: r });
    if (we(l.id) && a.push({ id: l.id, url: l.id, label: m, source: r }), Array.isArray(l.digitally_shown_by))
      for (const s of l.digitally_shown_by) {
        const u = W(s, m), i = Array.isArray(s.conforms_to) ? (h = s.conforms_to.find((f) => String(f.id).includes("iiif.io/api/image"))) == null ? void 0 : h.id : void 0;
        if (Array.isArray(s.access_point))
          for (const f of s.access_point)
            f != null && f.id && we(f.id) && a.push({ id: f.id, url: f.id, label: u, iiifService: i, source: r });
        else we(s.id) && a.push({ id: s.id, url: s.id, label: u, iiifService: i, source: r });
      }
  };
  return Array.isArray(t.representation) && t.representation.forEach(n), Array.isArray(t.digitally_shown_by) && n(t), Array.from(new Map(a.map((l) => [l.url, l])).values());
}
function fe(t) {
  const r = [], a = (n) => {
    if (Array.isArray(n))
      for (const l of n) {
        const m = W(l, "");
        m && m.toLowerCase() !== "unknown" && r.push(m);
      }
  };
  return a(t == null ? void 0 : t.carried_out_by), a(t == null ? void 0 : t.transferred_title_from), a(t == null ? void 0 : t.transferred_title_to), Array.from(new Set(r));
}
function ie(t) {
  const r = Array.isArray(t) ? t[0] : t;
  if (!r || typeof r != "object") return null;
  let a = r.defined_by;
  if (!a && Array.isArray(r.part_of)) {
    const n = r.part_of.find((l) => typeof (l == null ? void 0 : l.defined_by) == "string");
    n && (a = n.defined_by);
  }
  return {
    label: W(r, "Unnamed Place"),
    uri: r.id,
    wkt: a,
    isStorage: K(r, "300004465"),
    isGallery: K(r, "300240057"),
    images: oe(r, "place")
  };
}
function Ne(t) {
  const r = [], a = W(t, "Linked Art Object"), n = oe(t, "object"), l = [], m = ({
    id: i,
    title: f,
    category: c,
    timespan: b,
    placeLabel: O,
    placeUri: P,
    wkt: F,
    actors: $ = [],
    description: D,
    images: R = [],
    defaultOrder: J,
    precisionNote: U,
    fallbackPlaceLabel: _
  }) => {
    const N = or(F), V = N ? N.centroid : De(O) || _ && De(_), { display: H, sortTs: B } = cr(b);
    !N && U && r.push(U), l.push({
      id: i,
      title: f,
      category: c,
      dateDisplay: H,
      sortTimestamp: B === Number.MAX_SAFE_INTEGER ? J : B,
      placeLabel: O,
      placeUri: P,
      coordinates: V || null,
      // May be null until async geocoding completes
      fallbackPlaceLabel: _,
      polygon: N == null ? void 0 : N.polygon,
      isApproximate: !N,
      actors: $,
      description: D,
      images: R
    });
  };
  if (t.produced_by) {
    const i = ie(t.produced_by.took_place_at), f = de(t.produced_by) || de(t), c = (i == null ? void 0 : i.label) || f;
    c && m({
      id: t.produced_by.id || "production-0",
      title: W(t.produced_by, "Production / Creation"),
      category: "production",
      timespan: t.produced_by.timespan,
      placeLabel: c,
      placeUri: i == null ? void 0 : i.uri,
      wkt: i == null ? void 0 : i.wkt,
      actors: fe(t.produced_by),
      description: te(t.produced_by),
      images: [...oe(t.produced_by, "event"), ...(i == null ? void 0 : i.images) || []],
      defaultOrder: -1e5,
      precisionNote: i != null && i.wkt ? void 0 : `Production place "${c}" resolved from text statement (no WKT defined_by).`
    });
  }
  if ((Array.isArray(t.encountered) ? t.encountered : t.found_by ? [t.found_by] : []).forEach((i, f) => {
    const c = ie(i.took_place_at), b = (c == null ? void 0 : c.label) || de(i);
    b && m({
      id: i.id || `discovery-${f}`,
      title: W(i, "Archaeological Encounter / Findspot"),
      category: "discovery",
      timespan: i.timespan,
      placeLabel: b,
      placeUri: c == null ? void 0 : c.uri,
      wkt: c == null ? void 0 : c.wkt,
      actors: fe(i),
      description: te(i),
      images: [...oe(i, "event"), ...(c == null ? void 0 : c.images) || []],
      defaultOrder: -5e4 + f
    });
  }), Array.isArray(t.changed_ownership_through) && t.changed_ownership_through.forEach((i, f) => {
    const c = Array.isArray(i.part_of) ? i.part_of[0] : i.part_of, b = ie(i.took_place_at) || ie(c == null ? void 0 : c.took_place_at), O = de(i) || de(c), P = (b == null ? void 0 : b.label) || O;
    P && m({
      id: i.id || `provenance-${f}`,
      title: W(i, `Transfer of Custody #${f + 1}`),
      category: "provenance",
      timespan: i.timespan || (c == null ? void 0 : c.timespan),
      placeLabel: P,
      placeUri: b == null ? void 0 : b.uri,
      wkt: b == null ? void 0 : b.wkt,
      actors: [...fe(i), ...fe(c)],
      description: te(i) || te(c),
      images: [...oe(i, "event"), ...(b == null ? void 0 : b.images) || []],
      defaultOrder: 1e3 + f,
      precisionNote: b != null && b.wkt ? void 0 : `Provenance location "${P}" resolved from text statement (no WKT defined_by).`
    });
  }), [
    ...Array.isArray(t.used_for) ? t.used_for : [],
    ...Array.isArray(t.member_of) ? t.member_of.flatMap((i) => Array.isArray(i.used_for) ? i.used_for : []) : []
  ].forEach((i, f) => {
    const c = ie(i.took_place_at), b = (c == null ? void 0 : c.label) || W(i, "");
    b && m({
      id: i.id || `exhibition-${f}`,
      title: W(i, `Exhibition #${f + 1}`),
      category: "exhibition",
      timespan: i.timespan,
      placeLabel: b,
      placeUri: c == null ? void 0 : c.uri,
      wkt: c == null ? void 0 : c.wkt,
      actors: fe(i),
      description: te(i),
      images: [...oe(i, "event"), ...(c == null ? void 0 : c.images) || []],
      defaultOrder: 2e3 + f,
      precisionNote: c != null && c.wkt ? void 0 : `Exhibition venue "${b}" geocoded from activity label (no WKT defined_by).`
    });
  }), t.current_location) {
    const i = ie(t.current_location), f = Array.isArray(t.current_owner) ? W(t.current_owner[0], "") : "";
    if (i) {
      const c = !i.wkt && (i.isStorage || i.isGallery) && f ? f : void 0, b = !i.wkt && i.isStorage && f ? `${i.label} — ${f}` : i.label;
      m({
        id: `${t.id || "obj"}-current-location`,
        title: "Current Repository Location",
        category: "current_location",
        timespan: { _label: "Present" },
        placeLabel: b,
        placeUri: i.uri,
        wkt: i.wkt,
        actors: Array.isArray(t.current_owner) ? t.current_owner.map((O) => W(O)) : [],
        description: te(t.current_location),
        images: [...i.images, ...n],
        defaultOrder: 999999,
        fallbackPlaceLabel: c,
        precisionNote: i.wkt ? void 0 : `Current location "${b}" has no WKT defined_by; ${c ? `the owner "${c}" may be used as an approximate location` : "resolved via place name"}.`
      });
    }
  }
  const u = l.sort((i, f) => i.sortTimestamp - f.sortTimestamp).map((i, f) => ({
    ...i,
    index: f,
    images: i.images.length > 0 ? i.images : n.slice(0, 1)
  }));
  return {
    objectId: t.id || "urn:linked-art:object",
    objectLabel: a,
    objectSummary: te(t),
    heroImage: n[0],
    events: u,
    warnings: Array.from(new Set(r))
  };
}
async function ur(t) {
  let r = !1;
  const a = await Promise.all(
    t.events.map(async (n) => {
      if (Array.isArray(n.coordinates) && n.coordinates.length === 2)
        return n;
      const l = await lt(n.placeLabel) || n.fallbackPlaceLabel && await lt(n.fallbackPlaceLabel);
      return l ? (r = !0, { ...n, coordinates: l }) : n;
    })
  );
  return r ? { ...t, events: a } : t;
}
const je = 4500, dr = 2e3, fr = 18e3, pr = 2e3, mr = 6371;
function ct(t) {
  return Array.isArray(t == null ? void 0 : t.coordinates) && t.coordinates.length === 2 && t.coordinates.every(Number.isFinite);
}
function br(t, r) {
  const a = t[r + 1];
  if (!ct(a)) return je;
  let n = r;
  for (; n >= 0 && !ct(t[n]); ) n--;
  if (n < 0) return je;
  const [l, m] = t[n].coordinates.map((f) => f * Math.PI / 180), [h, s] = a.coordinates.map((f) => f * Math.PI / 180), u = Math.sin((s - m) / 2) ** 2 + Math.cos(m) * Math.cos(s) * Math.sin((h - l) / 2) ** 2, i = 2 * mr * Math.asin(Math.sqrt(Math.min(1, Math.max(0, u))));
  return Math.min(fr, je + Math.max(0, i - pr));
}
const gr = [
  (t) => `https://corsproxy.io/?${encodeURIComponent(t)}`,
  (t) => `https://api.allorigins.win/raw?url=${encodeURIComponent(t)}`
];
async function hr(t) {
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
async function yr(t) {
  let r = null;
  for (const a of gr)
    try {
      const n = await fetch(a(t), { credentials: "omit" });
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
async function _r(t) {
  const r = String(t || "").trim();
  if (!r)
    throw new Error("Enter a Linked Art URL or paste JSON-LD.");
  let a;
  if (!r.startsWith("{") && !r.startsWith("[")) {
    const n = Ee(r);
    if (!n)
      throw new Error("Enter a valid HTTP(S) URL without embedded credentials, or paste JSON-LD.");
    try {
      a = await hr(n);
    } catch (l) {
      try {
        a = await yr(n);
      } catch {
        throw new Error(
          `Could not fetch "${n}" (${l instanceof Error ? l.message : "CORS or network error"}). Paste the JSON-LD directly instead.`
        );
      }
    }
  } else
    a = JSON.parse(r);
  if (!a || typeof a != "object" || Array.isArray(a) || typeof a.id != "string" || !a.id.trim() || typeof a.type != "string" || !a.type.trim())
    throw new Error("Expected a Linked Art JSON object with non-empty id and type fields.");
  return a;
}
const ut = {
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
}, Le = /* @__PURE__ */ new Map();
function vr(t, r = 400) {
  if (!t || typeof t != "string") return t;
  const a = /(\/iiif\/(?:image\/)?[^/]+)\/([^/]+)\/((?:full|max|pct:\d+(?:\.\d+)?|!?\d*,\d*))\/([^/]+)\/([^/.]+)\.([a-zA-Z0-9]+)(\?.*)?$/;
  return a.test(t) ? t.replace(
    a,
    (n, l, m, h, s, u, i, f = "") => `${l}/${h || "full"}/!${r},${r}/${s || "0"}/${u || "default"}.jpg${f}`
  ) : /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i.test(t) ? t.replace(
    /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i,
    `/full/!${r},${r}/0/default.jpg`
  ) : t;
}
function xr(t, { maxWidth: r = 480, quality: a = 0.72 } = {}) {
  if (!t || typeof t != "string") return "";
  const n = `${t}::${r}::${a}`;
  if (Le.has(n))
    return Le.get(n);
  const l = vr(t, r);
  return Le.set(n, l), l;
}
function j(t, r, a) {
  return {
    className: ["geotrail-" + t, r == null ? void 0 : r[t]].filter(Boolean).join(" "),
    style: a == null ? void 0 : a[t]
  };
}
const wr = {
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
}, jr = Ue.memo(function({
  trail: r,
  activeLegIndex: a,
  isPlaying: n,
  isLoading: l,
  allowInput: m = !0,
  theme: h = "dark",
  classNames: s,
  styles: u,
  onToggleTheme: i,
  onTogglePlay: f,
  onReset: c,
  onSelectStep: b,
  onLoadInput: O
}) {
  var B;
  const [P, F] = G(!1), [$, D] = G(""), [R, J] = G(null), U = dt([]), _ = h === "light", N = wr[_ ? "light" : "dark"];
  pe(() => {
    var y;
    (y = U.current[a]) == null || y.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [a, r.events.length]);
  const V = async (y) => {
    if (y && y.preventDefault(), !$.trim() || l) return;
    await O($) && F(!1);
  }, H = (y) => {
    const Y = /^https?:\/\/\S+$/i.test($.trim());
    y.key === "Enter" && !y.shiftKey && Y && (y.preventDefault(), V());
  };
  return /* @__PURE__ */ p.jsxs(
    "aside",
    {
      ...j("sidebar", s, u),
      className: `${j("sidebar", s, u).className} w-full lg:w-[410px] h-[48vh] lg:h-full border-t lg:border-t-0 lg:border-r flex flex-col z-10 transition-colors ${_ ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-slate-800 text-slate-100"}`,
      children: [
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            ...j("sidebarHeader", s, u),
            className: `${j("sidebarHeader", s, u).className} p-4 border-b ${_ ? "border-slate-200" : "border-slate-800"}`,
            children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ p.jsx(
                    "span",
                    {
                      className: `text-[11px] font-semibold uppercase tracking-widest ${_ ? "text-sky-700" : "text-sky-400"}`,
                      children: "Linked Art GeoTrail"
                    }
                  ),
                  /* @__PURE__ */ p.jsx("h1", { className: "text-base font-semibold leading-snug mt-0.5 truncate", children: r.objectLabel })
                ] }),
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                  i && /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      ...j("themeButton", s, u),
                      type: "button",
                      onClick: i,
                      className: `${j("themeButton", s, u).className} inline-flex items-center justify-center w-8 h-8 rounded-lg border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      title: _ ? "Switch to dark mode" : "Switch to light mode",
                      children: _ ? /* @__PURE__ */ p.jsx(Jt, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ p.jsx(Kt, { className: "w-3.5 h-3.5 text-amber-400" })
                    }
                  ),
                  m && /* @__PURE__ */ p.jsxs(
                    "button",
                    {
                      ...j("loadButton", s, u),
                      type: "button",
                      onClick: () => F((y) => !y),
                      className: `${j("loadButton", s, u).className} inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      children: [
                        /* @__PURE__ */ p.jsx(Vt, { className: `w-3.5 h-3.5 ${_ ? "text-sky-700" : "text-sky-400"}` }),
                        P ? "Close" : "Load URL / JSON"
                      ]
                    }
                  )
                ] })
              ] }),
              r.objectSummary && (!P || !m) && /* @__PURE__ */ p.jsx("p", { className: `text-xs mt-2 line-clamp-2 ${_ ? "text-slate-600" : "text-slate-400"}`, children: r.objectSummary }),
              m && P && /* @__PURE__ */ p.jsxs(
                "form",
                {
                  ...j("loadForm", s, u),
                  onSubmit: V,
                  className: `${j("loadForm", s, u).className} mt-3 space-y-2`,
                  children: [
                    /* @__PURE__ */ p.jsx(
                      "textarea",
                      {
                        ...j("loadInput", s, u),
                        "aria-label": "Linked Art URL or JSON-LD",
                        value: $,
                        onChange: (y) => D(y.target.value),
                        onKeyDown: H,
                        placeholder: "Paste a Linked Art URL (https://...) or JSON-LD payload...",
                        rows: 4,
                        className: `${j("loadInput", s, u).className} w-full rounded-lg border p-2.5 text-xs font-mono focus:outline-none focus:border-sky-500 ${_ ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-slate-950 border-slate-700 text-slate-200"}`
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: `text-xs ${_ ? "text-slate-600" : "text-slate-400"}`, children: "If direct loading fails, the URL is sent to public CORS proxies. Do not enter private URLs or tokens." }),
                    /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        type: "submit",
                        disabled: l,
                        className: "w-full inline-flex items-center justify-center gap-2 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-xs font-semibold text-white transition",
                        children: l ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                          /* @__PURE__ */ p.jsx(Ht, { className: "w-3.5 h-3.5 animate-spin" }),
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
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            ...j("controls", s, u),
            className: `${j("controls", s, u).className} px-4 py-3 border-b flex items-center gap-3 ${_ ? "bg-slate-50 border-slate-200" : "bg-slate-950/60 border-slate-800"}`,
            children: [
              /* @__PURE__ */ p.jsx(
                "button",
                {
                  ...j("playButton", s, u),
                  type: "button",
                  onClick: f,
                  className: `${j("playButton", s, u).className} inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white transition`,
                  title: n ? "Pause animation" : "Play trajectory",
                  children: n ? /* @__PURE__ */ p.jsx(zt, { className: "w-4 h-4" }) : /* @__PURE__ */ p.jsx(Xt, { className: "w-4 h-4 ml-0.5" })
                }
              ),
              /* @__PURE__ */ p.jsx(
                "button",
                {
                  ...j("resetButton", s, u),
                  type: "button",
                  onClick: c,
                  className: `${j("resetButton", s, u).className} inline-flex items-center justify-center w-8 h-8 rounded-full transition ${_ ? "bg-slate-200 hover:bg-slate-300 text-slate-700" : "bg-slate-800 hover:bg-slate-700 text-slate-300"}`,
                  title: "Restart from origin",
                  children: /* @__PURE__ */ p.jsx(qt, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ p.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    ...j("timeline", s, u),
                    type: "range",
                    min: 0,
                    max: Math.max(0, r.events.length - 1),
                    value: a,
                    onChange: (y) => b(Number(y.target.value)),
                    className: `${j("timeline", s, u).className} w-full accent-sky-600 cursor-pointer`
                  }
                ),
                /* @__PURE__ */ p.jsxs(
                  "div",
                  {
                    className: `flex justify-between text-[11px] mt-0.5 ${_ ? "text-slate-600" : "text-slate-400"}`,
                    children: [
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        "Stop ",
                        a + 1,
                        " of ",
                        r.events.length
                      ] }),
                      /* @__PURE__ */ p.jsx("span", { children: (B = r.events[a]) == null ? void 0 : B.dateDisplay })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            ...j("eventList", s, u),
            className: `${j("eventList", s, u).className} flex-1 overflow-y-auto p-3 space-y-2.5`,
            children: [
              r.events.map((y) => {
                const Y = y.index === a, z = y.index <= a;
                return /* @__PURE__ */ Wt(
                  "div",
                  {
                    ...j("eventCard", s, u),
                    "data-active": Y,
                    "data-visited": z,
                    "data-category": y.category,
                    ref: (v) => {
                      U.current[y.index] = v;
                    },
                    key: y.id,
                    onClick: () => b(y.index),
                    className: `${j("eventCard", s, u).className} rounded-xl p-3 border cursor-pointer transition ${Y ? _ ? "bg-sky-50/70 border-sky-500 shadow-sm" : "bg-slate-800/90 border-sky-500/70 shadow-lg" : z ? _ ? "bg-white border-slate-200 hover:border-slate-300" : "bg-slate-900 border-slate-700/80 hover:border-slate-600" : _ ? "bg-slate-50/70 border-slate-200/80 opacity-80 hover:opacity-100" : "bg-slate-900/40 border-slate-800/70 opacity-70 hover:opacity-100"}`
                  },
                  /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ p.jsxs(
                      "span",
                      {
                        ...j("eventBadge", s, u),
                        className: `${j("eventBadge", s, u).className} text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${N[y.category] || N.other}`,
                        children: [
                          y.index + 1,
                          ". ",
                          y.category.replace("_", " ")
                        ]
                      }
                    ),
                    /* @__PURE__ */ p.jsxs(
                      "span",
                      {
                        className: `inline-flex items-center gap-1 text-xs ${_ ? "text-slate-600" : "text-slate-400"}`,
                        children: [
                          /* @__PURE__ */ p.jsx(Zt, { className: "w-3 h-3" }),
                          y.dateDisplay
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ p.jsx("h2", { className: "text-sm font-semibold mt-1.5", children: y.title }),
                  /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${_ ? "text-slate-700" : "text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ p.jsx(
                          Qt,
                          {
                            className: `w-3.5 h-3.5 shrink-0 ${_ ? "text-sky-700" : "text-sky-400"}`
                          }
                        ),
                        /* @__PURE__ */ p.jsx("span", { className: "truncate", children: y.placeLabel }),
                        Ee(y.placeUri) && /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: Ee(y.placeUri),
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: (v) => v.stopPropagation(),
                            className: "text-slate-400 hover:text-sky-500 ml-auto",
                            title: "Open Place URI",
                            children: /* @__PURE__ */ p.jsx(er, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    }
                  ),
                  y.actors.length > 0 && /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${_ ? "text-slate-600" : "text-slate-400"}`,
                      children: [
                        /* @__PURE__ */ p.jsx(tr, { className: "w-3.5 h-3.5 shrink-0" }),
                        /* @__PURE__ */ p.jsx("span", { className: "truncate", children: y.actors.join(", ") })
                      ]
                    }
                  ),
                  y.description && /* @__PURE__ */ p.jsx(
                    "p",
                    {
                      className: `text-xs mt-1.5 leading-relaxed ${_ ? "text-slate-600" : "text-slate-400"}`,
                      children: y.description
                    }
                  ),
                  y.images.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "mt-2.5 flex gap-2 overflow-x-auto pb-1", children: y.images.map((v) => {
                    const A = xr(v.url, { maxWidth: 240 });
                    return /* @__PURE__ */ p.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: (S) => {
                          S.stopPropagation(), J(v.url);
                        },
                        className: `group relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${_ ? "border-slate-300 hover:border-sky-600" : "border-slate-700 hover:border-sky-400"}`,
                        children: [
                          /* @__PURE__ */ p.jsx(
                            "img",
                            {
                              src: A,
                              alt: v.label,
                              loading: "lazy",
                              decoding: "async",
                              onError: (S) => {
                                S.currentTarget.src !== v.url && (S.currentTarget.src = v.url);
                              },
                              className: "w-full h-full object-cover group-hover:scale-105 transition"
                            }
                          ),
                          /* @__PURE__ */ p.jsx("span", { className: "absolute bottom-1 right-1 bg-slate-950/80 p-0.5 rounded text-slate-200", children: /* @__PURE__ */ p.jsx(rr, { className: "w-2.5 h-2.5" }) })
                        ]
                      },
                      v.id
                    );
                  }) })
                );
              }),
              r.warnings.length > 0 && /* @__PURE__ */ p.jsxs(
                "div",
                {
                  ...j("warnings", s, u),
                  className: `${j("warnings", s, u).className} rounded-lg border p-2.5 text-[11px] space-y-1 ${_ ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-amber-950/30 border-amber-500/30 text-amber-200"}`,
                  children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-semibold", children: "Spatial Resolution Notes" }),
                    r.warnings.map((y, Y) => /* @__PURE__ */ p.jsxs("div", { children: [
                      "• ",
                      y
                    ] }, Y))
                  ]
                }
              )
            ]
          }
        ),
        R && /* @__PURE__ */ p.jsx(
          "div",
          {
            ...j("lightbox", s, u),
            onClick: () => J(null),
            className: `${j("lightbox", s, u).className} fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-6 cursor-zoom-out`,
            children: /* @__PURE__ */ p.jsx(
              "img",
              {
                src: R,
                alt: "Linked Art representation",
                className: "max-w-full max-h-full rounded-xl border border-slate-700 shadow-2xl"
              }
            )
          }
        )
      ]
    }
  );
}), Er = Gt(
  () => import("./GeoArcMap-Cb3W1rvM.js").then((t) => ({ default: t.GeoArcMap }))
), Me = 1e3 / 60;
function Ar({
  record: t = ut,
  allowInput: r = !0,
  theme: a = "dark",
  classNames: n,
  styles: l,
  mapStyles: m,
  mapAppearance: h
}) {
  const [s, u] = G(a), [i, f] = G(() => Ne(t)), [c, b] = G(0), [O, P] = G(0), [F, $] = G(!1), [D, R] = G(!1), [J, U] = G(null), _ = dt(0), N = Yt(
    () => i.events.map((v, A) => br(i.events, A)),
    [i.events]
  );
  pe(() => {
    u(a);
  }, [a]), pe(() => {
    const v = Ne(t || ut);
    _.current = 0, f(v), b(0), P(0), $(!1), U(null);
  }, [t]), pe(() => {
    let v = !1;
    if (i.events.some((S) => !S.coordinates))
      return ur(i).then((S) => {
        !v && S !== i && f(S);
      }), () => {
        v = !0;
      };
  }, [i]), pe(() => {
    if (!F || i.events.length < 2) return;
    let v, A = performance.now(), S = A, X = 0, q = c, Z = O;
    const re = (Q) => {
      const me = Math.min(Q - A, 100);
      if (A = Q, X += me, Q - S >= Me - 1) {
        if (S = Math.min(Q, Math.max(S + Me, Q - Me)), _.current > 0) {
          _.current = Math.max(0, _.current - X), X = 0, v = requestAnimationFrame(re);
          return;
        }
        if (Z += X / N[q], X = 0, Z >= 1) {
          const be = N[q];
          if (q += 1, b(q), Z = 0, q >= i.events.length - 1) {
            P(Z), $(!1);
            return;
          }
          be > je && (_.current = dr);
        }
        P(Z);
      }
      v = requestAnimationFrame(re);
    };
    return v = requestAnimationFrame(re), () => cancelAnimationFrame(v);
  }, [F, i.events.length, N]);
  const V = le(async (v) => {
    R(!0), U(null);
    try {
      const A = await _r(v), S = Ne(A);
      return _.current = 0, f(S), b(0), P(0), $(!1), U(null), !0;
    } catch (A) {
      return U(A instanceof Error ? A.message : "Unable to parse Linked Art input"), !1;
    } finally {
      R(!1);
    }
  }, []), H = le((v) => {
    _.current = 0, $(!1), b(v), P(0);
  }, []), B = le(() => {
    _.current = 0, $(!1), b(0), P(0);
  }, []), y = le(() => {
    u((v) => v === "dark" ? "light" : "dark");
  }, []), Y = le(() => {
    if (!(i.events.length < 2)) {
      if (F) {
        $(!1);
        return;
      }
      c >= i.events.length - 1 && (_.current = 0, b(0), P(0)), $(!0);
    }
  }, [c, F, i.events.length]), z = s === "light";
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      ...j("root", n, l),
      className: `${j("root", n, l).className} w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${z ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"}`,
      "data-theme": s,
      children: [
        /* @__PURE__ */ p.jsx(
          jr,
          {
            trail: i,
            activeLegIndex: c,
            isPlaying: F,
            isLoading: D,
            allowInput: r,
            theme: s,
            classNames: n,
            styles: l,
            onToggleTheme: y,
            onTogglePlay: Y,
            onReset: B,
            onSelectStep: H,
            onLoadInput: V
          }
        ),
        /* @__PURE__ */ p.jsxs(
          "main",
          {
            ...j("mapContainer", n, l),
            className: `${j("mapContainer", n, l).className} relative flex-1 h-[52vh] lg:h-full`,
            children: [
              J && /* @__PURE__ */ p.jsxs("div", { role: "alert", className: "absolute top-3 left-3 z-20 max-w-md bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs px-3 py-2 rounded-lg", children: [
                "Load Error: ",
                J
              ] }),
              /* @__PURE__ */ p.jsx(
                Bt,
                {
                  fallback: /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: `w-full h-full flex items-center justify-center text-xs ${z ? "bg-slate-100 text-slate-600" : "bg-slate-950 text-slate-400"}`,
                      children: "Loading map engine..."
                    }
                  ),
                  children: /* @__PURE__ */ p.jsx(
                    Er,
                    {
                      events: i.events,
                      activeLegIndex: c,
                      legProgress: O,
                      isPlaying: F,
                      onSelectEvent: H,
                      theme: s,
                      classNames: n,
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
  Ar as A,
  j as c,
  xr as g,
  p as j,
  Ee as s
};
