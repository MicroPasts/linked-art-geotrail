import Oe, { useState as B, useRef as Ft, useEffect as ce, createElement as Dt, useCallback as me, Suspense as Ut, lazy as Mt } from "react";
import { Moon as It, Sun as Wt, FileJson as Yt, Loader2 as Bt, Pause as Jt, Play as Gt, RotateCcw as Vt, Calendar as Kt, MapPin as zt, ExternalLink as Ht, Users as Xt, Image as Zt } from "lucide-react";
var ge = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function qt() {
  if (Qe) return ie;
  Qe = 1;
  var t = Oe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(s, d, i) {
    var p, c = {}, g = null, $ = null;
    i !== void 0 && (g = "" + i), d.key !== void 0 && (g = "" + d.key), d.ref !== void 0 && ($ = d.ref);
    for (p in d) a.call(d, p) && !m.hasOwnProperty(p) && (c[p] = d[p]);
    if (s && s.defaultProps) for (p in d = s.defaultProps, d) c[p] === void 0 && (c[p] = d[p]);
    return { $$typeof: r, type: s, key: g, ref: $, props: c, _owner: l.current };
  }
  return ie.Fragment = n, ie.jsx = y, ie.jsxs = y, ie;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Qt() {
  return et || (et = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Oe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), i = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), A = Symbol.iterator, D = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = A && e[A] || e[D];
      return typeof o == "function" ? o : null;
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
          u[h - 1] = arguments[h];
        J("error", e, u);
      }
    }
    function J(e, o, u) {
      {
        var h = M.ReactDebugCurrentFrame, j = h.getStackAddendum();
        j !== "" && (o += "%s", u = u.concat([j]));
        var k = u.map(function(x) {
          return String(x);
        });
        k.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var I = !1, _ = !1, G = !1, V = !1, K = !1, z;
    z = Symbol.for("react.module.reference");
    function b(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === m || K || e === l || e === i || e === p || V || e === $ || I || _ || G || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === c || e.$$typeof === y || e.$$typeof === s || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === z || e.getModuleId !== void 0));
    }
    function P(e, o, u) {
      var h = e.displayName;
      if (h)
        return h;
      var j = o.displayName || o.name || "";
      return j !== "" ? u + "(" + j + ")" : u;
    }
    function N(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
            return N(o) + ".Consumer";
          case y:
            var u = e;
            return N(u._context) + ".Provider";
          case d:
            return P(e, e.render, "ForwardRef");
          case c:
            var h = e.displayName || null;
            return h !== null ? h : R(e.type) || "Memo";
          case g: {
            var j = e, k = j._payload, x = j._init;
            try {
              return R(x(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, O = 0, ne, X, ue, $e, Ne, Le, Fe;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function ct() {
      {
        if (O === 0) {
          ne = console.log, X = console.info, ue = console.warn, $e = console.error, Ne = console.group, Le = console.groupCollapsed, Fe = console.groupEnd;
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
        O++;
      }
    }
    function ut() {
      {
        if (O--, O === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, e, {
              value: ne
            }),
            info: U({}, e, {
              value: X
            }),
            warn: U({}, e, {
              value: ue
            }),
            error: U({}, e, {
              value: $e
            }),
            group: U({}, e, {
              value: Ne
            }),
            groupCollapsed: U({}, e, {
              value: Le
            }),
            groupEnd: U({}, e, {
              value: Fe
            })
          });
        }
        O < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = M.ReactCurrentDispatcher, xe;
    function de(e, o, u) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (j) {
            var h = j.stack.trim().match(/\n( *(at )?)/);
            xe = h && h[1] || "";
          }
        return `
` + xe + e;
      }
    }
    var we = !1, fe;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new dt();
    }
    function Ue(e, o) {
      if (!e || we)
        return "";
      {
        var u = fe.get(e);
        if (u !== void 0)
          return u;
      }
      var h;
      we = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = ve.current, ve.current = null, ct();
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
            } catch (F) {
              h = F;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (F) {
              h = F;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            h = F;
          }
          e();
        }
      } catch (F) {
        if (F && h && typeof F.stack == "string") {
          for (var v = F.stack.split(`
`), L = h.stack.split(`
`), S = v.length - 1, T = L.length - 1; S >= 1 && T >= 0 && v[S] !== L[T]; )
            T--;
          for (; S >= 1 && T >= 0; S--, T--)
            if (v[S] !== L[T]) {
              if (S !== 1 || T !== 1)
                do
                  if (S--, T--, T < 0 || v[S] !== L[T]) {
                    var W = `
` + v[S].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && fe.set(e, W), W;
                  }
                while (S >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        we = !1, ve.current = k, ut(), Error.prepareStackTrace = j;
      }
      var ee = e ? e.displayName || e.name : "", Z = ee ? de(ee) : "";
      return typeof e == "function" && fe.set(e, Z), Z;
    }
    function ft(e, o, u) {
      return Ue(e, !1);
    }
    function pt(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function pe(e, o, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ue(e, pt(e));
      if (typeof e == "string")
        return de(e);
      switch (e) {
        case i:
          return de("Suspense");
        case p:
          return de("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ft(e.render);
          case c:
            return pe(e.type, o, u);
          case g: {
            var h = e, j = h._payload, k = h._init;
            try {
              return pe(k(j), o, u);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, Me = {}, Ie = M.ReactDebugCurrentFrame;
    function be(e) {
      if (e) {
        var o = e._owner, u = pe(e.type, e._source, o ? o.type : null);
        Ie.setExtraStackFrame(u);
      } else
        Ie.setExtraStackFrame(null);
    }
    function bt(e, o, u, h, j) {
      {
        var k = Function.call.bind(ae);
        for (var x in e)
          if (k(e, x)) {
            var v = void 0;
            try {
              if (typeof e[x] != "function") {
                var L = Error((h || "React class") + ": " + u + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              v = e[x](o, x, h, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              v = S;
            }
            v && !(v instanceof Error) && (be(j), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", u, x, typeof v), be(null)), v instanceof Error && !(v.message in Me) && (Me[v.message] = !0, be(j), E("Failed %s type: %s", u, v.message), be(null));
          }
      }
    }
    var mt = Array.isArray;
    function je(e) {
      return mt(e);
    }
    function gt(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, u = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function ht(e) {
      try {
        return We(e), !1;
      } catch {
        return !0;
      }
    }
    function We(e) {
      return "" + e;
    }
    function Ye(e) {
      if (ht(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), We(e);
    }
    var Be = M.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Je, Ge;
    function _t(e) {
      if (ae.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vt(e) {
      if (ae.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xt(e, o) {
      typeof e.ref == "string" && Be.current;
    }
    function wt(e, o) {
      {
        var u = function() {
          Je || (Je = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function jt(e, o) {
      {
        var u = function() {
          Ge || (Ge = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var kt = function(e, o, u, h, j, k, x) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: u,
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
        value: h
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Et(e, o, u, h, j) {
      {
        var k, x = {}, v = null, L = null;
        u !== void 0 && (Ye(u), v = "" + u), vt(o) && (Ye(o.key), v = "" + o.key), _t(o) && (L = o.ref, xt(o, j));
        for (k in o)
          ae.call(o, k) && !yt.hasOwnProperty(k) && (x[k] = o[k]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (k in S)
            x[k] === void 0 && (x[k] = S[k]);
        }
        if (v || L) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && wt(x, T), L && jt(x, T);
        }
        return kt(e, v, L, j, h, Be.current, x);
      }
    }
    var ke = M.ReactCurrentOwner, Ve = M.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var o = e._owner, u = pe(e.type, e._source, o ? o.type : null);
        Ve.setExtraStackFrame(u);
      } else
        Ve.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ke() {
      {
        if (ke.current) {
          var e = R(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Rt(e) {
      return "";
    }
    var ze = {};
    function St(e) {
      {
        var o = Ke();
        if (!o) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (o = `

Check the top-level render call using <` + u + ">.");
        }
        return o;
      }
    }
    function He(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = St(o);
        if (ze[u])
          return;
        ze[u] = !0;
        var h = "";
        e && e._owner && e._owner !== ke.current && (h = " It was passed a child from " + R(e._owner.type) + "."), Q(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, h), Q(null);
      }
    }
    function Xe(e, o) {
      {
        if (typeof e != "object")
          return;
        if (je(e))
          for (var u = 0; u < e.length; u++) {
            var h = e[u];
            Re(h) && He(h, o);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var j = C(e);
          if (typeof j == "function" && j !== e.entries)
            for (var k = j.call(e), x; !(x = k.next()).done; )
              Re(x.value) && He(x.value, o);
        }
      }
    }
    function At(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var u;
        if (typeof o == "function")
          u = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === c))
          u = o.propTypes;
        else
          return;
        if (u) {
          var h = R(o);
          bt(u, e.props, "prop", h, e);
        } else if (o.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var j = R(o);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(e) {
      {
        for (var o = Object.keys(e.props), u = 0; u < o.length; u++) {
          var h = o[u];
          if (h !== "children" && h !== "key") {
            Q(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Q(null);
            break;
          }
        }
        e.ref !== null && (Q(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    var Ze = {};
    function qe(e, o, u, h, j, k) {
      {
        var x = b(e);
        if (!x) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Rt();
          L ? v += L : v += Ke();
          var S;
          e === null ? S = "null" : je(e) ? S = "array" : e !== void 0 && e.$$typeof === r ? (S = "<" + (R(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, v);
        }
        var T = Et(e, o, u, j, k);
        if (T == null)
          return T;
        if (x) {
          var W = o.children;
          if (W !== void 0)
            if (h)
              if (je(W)) {
                for (var ee = 0; ee < W.length; ee++)
                  Xe(W[ee], e);
                Object.freeze && Object.freeze(W);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(W, e);
        }
        if (ae.call(o, "key")) {
          var Z = R(e), F = Object.keys(o).filter(function(Lt) {
            return Lt !== "key";
          }), Se = F.length > 0 ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ze[Z + Se]) {
            var Nt = F.length > 0 ? "{" + F.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Se, Z, Nt, Z), Ze[Z + Se] = !0;
          }
        }
        return e === a ? Tt(T) : At(T), T;
      }
    }
    function Pt(e, o, u) {
      return qe(e, o, u, !0);
    }
    function Ct(e, o, u) {
      return qe(e, o, u, !1);
    }
    var Ot = Ct, $t = Pt;
    oe.Fragment = a, oe.jsx = Ot, oe.jsxs = $t;
  })()), oe;
}
var tt;
function er() {
  return tt || (tt = 1, process.env.NODE_ENV === "production" ? ge.exports = qt() : ge.exports = Qt()), ge.exports;
}
var f = er();
function tr(t) {
  if (!t || typeof t != "string") return null;
  const r = t.replace(/^<[^>]+>\s*/i, "").trim(), n = r.match(/^POINT\s*\(\s*([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)\s*\)$/i);
  if (n) {
    const m = parseFloat(n[1]), y = parseFloat(n[2]);
    if (Number.isFinite(m) && Number.isFinite(y))
      return { centroid: [m, y] };
  }
  const a = r.match(/^POLYGON\s*\(\((.+)\)\)$/i);
  if (a) {
    const m = a[1].split(/\)\s*,\s*\(/).map(
      (y) => y.split(",").map((s) => {
        const [d, i] = s.trim().split(/\s+/);
        return [parseFloat(d), parseFloat(i)];
      }).filter(([s, d]) => Number.isFinite(s) && Number.isFinite(d))
    );
    if (m[0] && m[0].length > 0)
      return { centroid: rt(m[0]), polygon: m };
  }
  const l = r.match(/^MULTIPOLYGON\s*\(\(\((.+)\)\)\)$/i);
  if (l) {
    const y = l[1].split(/\)\)\s*,\s*\(\(/)[0].split(",").map((s) => {
      const [d, i] = s.trim().split(/\s+/);
      return [parseFloat(d), parseFloat(i)];
    }).filter(([s, d]) => Number.isFinite(s) && Number.isFinite(d));
    if (y.length > 0)
      return { centroid: rt(y), polygon: [y] };
  }
  return null;
}
function rt(t) {
  let r = 0, n = 0;
  const a = t.length;
  for (const [l, m] of t)
    r += l, n += m;
  return [r / a, n / a];
}
const Ae = {
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
}, ot = "linked-art-geotrail:geocode-cache:v1", he = /* @__PURE__ */ new Set();
let nt = Promise.resolve(), at = 0;
function Ce() {
  try {
    return JSON.parse(localStorage.getItem(ot) || "{}");
  } catch {
    return {};
  }
}
function rr(t) {
  try {
    localStorage.setItem(ot, JSON.stringify(t));
  } catch {
  }
}
function st(t) {
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
function lt(t) {
  if (!t || typeof t != "string") return null;
  const r = [t, st(t)].map((a) => a.trim().toLowerCase()).filter(Boolean), n = Ce();
  for (const a of r) {
    if (Ae[a])
      return Ae[a];
    if (Array.isArray(n[a]) && n[a].length === 2)
      return n[a];
  }
  for (const a of r)
    for (const [l, m] of Object.entries(Ae))
      if (a.includes(l))
        return m;
  return null;
}
function nr(t) {
  const r = nt.then(async () => {
    const n = Date.now() - at;
    return n < 1100 && await new Promise((a) => setTimeout(a, 1100 - n)), at = Date.now(), t();
  });
  return nt = r.catch(() => null), r;
}
async function ar(t) {
  const r = lt(t);
  if (r) return r;
  const n = st(t), a = n.split(",").map((y) => y.trim()).filter(Boolean), l = a.length > 1 ? a[a.length - 1] : n, m = n.toLowerCase();
  return !l || he.has(m) ? null : nr(async () => {
    const y = Ce();
    if (Array.isArray(y[m]) && y[m].length === 2)
      return y[m];
    try {
      const s = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        l
      )}&count=1&language=en&format=json`, d = await fetch(s);
      if (!d.ok)
        return he.add(m), null;
      const i = await d.json(), p = Array.isArray(i == null ? void 0 : i.results) ? i.results[0] : null;
      if (p && Number.isFinite(p.longitude) && Number.isFinite(p.latitude)) {
        const c = [p.longitude, p.latitude], g = Ce();
        return g[m] = c, rr(g), c;
      }
      he.add(m);
    } catch {
      he.add(m);
    }
    return null;
  });
}
function _e(t) {
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
function H(t, r) {
  return Array.isArray(t == null ? void 0 : t.classified_as) && t.classified_as.some(
    (n) => String(n.id || "").includes(r) || String(n._label || "").toLowerCase().includes(r.toLowerCase())
  );
}
function q(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return;
  const r = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && H(n, "300080091")
  ) || t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && (H(n, "300444172") || H(n, "300444174"))
  );
  return r == null ? void 0 : r.content;
}
function se(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return null;
  const r = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && (H(a, "300435448") || H(a, "300444175") || H(a, "place"))
  );
  if (r != null && r.content)
    return r.content.trim();
  const n = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && H(a, "300444172")
  );
  if (n != null && n.content) {
    const a = n.content.match(/\b(London|Paris|New York|Rome|Athens|Los Angeles|Malibu|Amsterdam|Berlin)\b/i);
    if (a) return a[1];
  }
  return null;
}
function ir(t) {
  if (!t) return { display: "Date unknown", sortTs: Number.MAX_SAFE_INTEGER };
  let r = typeof t._label == "string" ? t._label.trim() : "";
  if (!r && Array.isArray(t.identified_by)) {
    const y = t.identified_by.find((s) => s.type === "Name" && s.content);
    y != null && y.content && (r = String(y.content));
  }
  const n = t.begin_of_the_begin || t.end_of_the_begin, a = t.end_of_the_end || t.begin_of_the_end;
  let l = Number.MAX_SAFE_INTEGER;
  const m = n || a;
  if (m) {
    const y = String(m).match(/^([+-]?\d{1,6})/);
    y && (l = parseInt(y[1], 10));
  } else if (r) {
    const y = r.match(/([+-]?\d{4})/);
    y && (l = parseInt(y[1], 10));
  }
  return r ? { display: r, sortTs: l } : n && a && n !== a ? { display: `${String(n).slice(0, 10)} – ${String(a).slice(0, 10)}`, sortTs: l } : n ? { display: String(n).slice(0, 10), sortTs: l } : a ? { display: String(a).slice(0, 10), sortTs: l } : { display: "Date unknown", sortTs: l };
}
function ye(t) {
  return !_e(t) || /rightsstatements\.org\/files\/icons/i.test(t) ? !1 : /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(t) || /\/iiif\/image\//i.test(t);
}
function re(t, r) {
  const n = [];
  if (!t) return n;
  const a = (l) => {
    var y;
    if (!l || typeof l != "object") return;
    const m = Y(l, "Attached image");
    if (Array.isArray(l.access_point))
      for (const s of l.access_point)
        s != null && s.id && ye(s.id) && n.push({ id: s.id, url: s.id, label: m, source: r });
    if (ye(l.id) && n.push({ id: l.id, url: l.id, label: m, source: r }), Array.isArray(l.digitally_shown_by))
      for (const s of l.digitally_shown_by) {
        const d = Y(s, m), i = Array.isArray(s.conforms_to) ? (y = s.conforms_to.find((p) => String(p.id).includes("iiif.io/api/image"))) == null ? void 0 : y.id : void 0;
        if (Array.isArray(s.access_point))
          for (const p of s.access_point)
            p != null && p.id && ye(p.id) && n.push({ id: p.id, url: p.id, label: d, iiifService: i, source: r });
        else ye(s.id) && n.push({ id: s.id, url: s.id, label: d, iiifService: i, source: r });
      }
  };
  return Array.isArray(t.representation) && t.representation.forEach(a), Array.isArray(t.digitally_shown_by) && a(t), Array.from(new Map(n.map((l) => [l.url, l])).values());
}
function le(t) {
  const r = [], n = (a) => {
    if (Array.isArray(a))
      for (const l of a) {
        const m = Y(l, "");
        m && m.toLowerCase() !== "unknown" && r.push(m);
      }
  };
  return n(t == null ? void 0 : t.carried_out_by), n(t == null ? void 0 : t.transferred_title_from), n(t == null ? void 0 : t.transferred_title_to), Array.from(new Set(r));
}
function te(t) {
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
    isStorage: H(r, "300004465"),
    images: re(r, "place")
  };
}
function Te(t) {
  const r = [], n = Y(t, "Linked Art Object"), a = re(t, "object"), l = [], m = ({
    id: i,
    title: p,
    category: c,
    timespan: g,
    placeLabel: $,
    placeUri: A,
    wkt: D,
    actors: C = [],
    description: M,
    images: E = [],
    defaultOrder: J,
    precisionNote: I
  }) => {
    const _ = tr(D), G = _ ? _.centroid : lt($), { display: V, sortTs: K } = ir(g);
    !_ && I && r.push(I), l.push({
      id: i,
      title: p,
      category: c,
      dateDisplay: V,
      sortTimestamp: K === Number.MAX_SAFE_INTEGER ? J : K,
      placeLabel: $,
      placeUri: A,
      coordinates: G,
      // May be null until async geocoding completes
      polygon: _ == null ? void 0 : _.polygon,
      isApproximate: !_,
      actors: C,
      description: M,
      images: E
    });
  };
  if (t.produced_by) {
    const i = te(t.produced_by.took_place_at), p = se(t.produced_by) || se(t), c = (i == null ? void 0 : i.label) || p;
    c && m({
      id: t.produced_by.id || "production-0",
      title: Y(t.produced_by, "Production / Creation"),
      category: "production",
      timespan: t.produced_by.timespan,
      placeLabel: c,
      placeUri: i == null ? void 0 : i.uri,
      wkt: i == null ? void 0 : i.wkt,
      actors: le(t.produced_by),
      description: q(t.produced_by),
      images: [...re(t.produced_by, "event"), ...(i == null ? void 0 : i.images) || []],
      defaultOrder: -1e5,
      precisionNote: i != null && i.wkt ? void 0 : `Production place "${c}" resolved from text statement (no WKT defined_by).`
    });
  }
  if ((Array.isArray(t.encountered) ? t.encountered : t.found_by ? [t.found_by] : []).forEach((i, p) => {
    const c = te(i.took_place_at), g = (c == null ? void 0 : c.label) || se(i);
    g && m({
      id: i.id || `discovery-${p}`,
      title: Y(i, "Archaeological Encounter / Findspot"),
      category: "discovery",
      timespan: i.timespan,
      placeLabel: g,
      placeUri: c == null ? void 0 : c.uri,
      wkt: c == null ? void 0 : c.wkt,
      actors: le(i),
      description: q(i),
      images: [...re(i, "event"), ...(c == null ? void 0 : c.images) || []],
      defaultOrder: -5e4 + p
    });
  }), Array.isArray(t.changed_ownership_through) && t.changed_ownership_through.forEach((i, p) => {
    const c = Array.isArray(i.part_of) ? i.part_of[0] : i.part_of, g = te(i.took_place_at) || te(c == null ? void 0 : c.took_place_at), $ = se(i) || se(c), A = (g == null ? void 0 : g.label) || $;
    A && m({
      id: i.id || `provenance-${p}`,
      title: Y(i, `Transfer of Custody #${p + 1}`),
      category: "provenance",
      timespan: i.timespan || (c == null ? void 0 : c.timespan),
      placeLabel: A,
      placeUri: g == null ? void 0 : g.uri,
      wkt: g == null ? void 0 : g.wkt,
      actors: [...le(i), ...le(c)],
      description: q(i) || q(c),
      images: [...re(i, "event"), ...(g == null ? void 0 : g.images) || []],
      defaultOrder: 1e3 + p,
      precisionNote: g != null && g.wkt ? void 0 : `Provenance location "${A}" resolved from text statement (no WKT defined_by).`
    });
  }), [
    ...Array.isArray(t.used_for) ? t.used_for : [],
    ...Array.isArray(t.member_of) ? t.member_of.flatMap((i) => Array.isArray(i.used_for) ? i.used_for : []) : []
  ].forEach((i, p) => {
    const c = te(i.took_place_at), g = (c == null ? void 0 : c.label) || Y(i, "");
    g && m({
      id: i.id || `exhibition-${p}`,
      title: Y(i, `Exhibition #${p + 1}`),
      category: "exhibition",
      timespan: i.timespan,
      placeLabel: g,
      placeUri: c == null ? void 0 : c.uri,
      wkt: c == null ? void 0 : c.wkt,
      actors: le(i),
      description: q(i),
      images: [...re(i, "event"), ...(c == null ? void 0 : c.images) || []],
      defaultOrder: 2e3 + p,
      precisionNote: c != null && c.wkt ? void 0 : `Exhibition venue "${g}" geocoded from activity label (no WKT defined_by).`
    });
  }), t.current_location) {
    const i = te(t.current_location), p = Array.isArray(t.current_owner) ? Y(t.current_owner[0], "") : "";
    if (i) {
      const c = !i.wkt && i.isStorage && p ? `${i.label} — ${p}` : i.label;
      m({
        id: `${t.id || "obj"}-current-location`,
        title: "Current Repository Location",
        category: "current_location",
        timespan: { _label: "Present" },
        placeLabel: c,
        placeUri: i.uri,
        wkt: i.wkt,
        actors: Array.isArray(t.current_owner) ? t.current_owner.map((g) => Y(g)) : [],
        description: q(t.current_location),
        images: [...i.images, ...a],
        defaultOrder: 999999,
        precisionNote: i.wkt ? void 0 : `Current location "${c}" has no WKT defined_by; resolved via institution/place name.`
      });
    }
  }
  const d = l.sort((i, p) => i.sortTimestamp - p.sortTimestamp).map((i, p) => ({
    ...i,
    index: p,
    images: i.images.length > 0 ? i.images : a.slice(0, 1)
  }));
  return {
    objectId: t.id || "urn:linked-art:object",
    objectLabel: n,
    objectSummary: q(t),
    heroImage: a[0],
    events: d,
    warnings: Array.from(new Set(r))
  };
}
async function or(t) {
  let r = !1;
  const n = await Promise.all(
    t.events.map(async (a) => {
      if (Array.isArray(a.coordinates) && a.coordinates.length === 2)
        return a;
      const l = await ar(a.placeLabel);
      return l ? (r = !0, { ...a, coordinates: l }) : a;
    })
  );
  return r ? { ...t, events: n } : t;
}
const sr = [
  (t) => `https://corsproxy.io/?${encodeURIComponent(t)}`,
  (t) => `https://api.allorigins.win/raw?url=${encodeURIComponent(t)}`
];
async function lr(t) {
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
async function cr(t) {
  let r = null;
  for (const n of sr)
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
async function ur(t) {
  const r = String(t || "").trim();
  if (!r)
    throw new Error("Enter a Linked Art URL or paste JSON-LD.");
  let n;
  if (!r.startsWith("{") && !r.startsWith("[")) {
    const a = _e(r);
    if (!a)
      throw new Error("Enter a valid HTTP(S) URL without embedded credentials, or paste JSON-LD.");
    try {
      n = await lr(a);
    } catch (l) {
      try {
        n = await cr(a);
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
const it = {
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
}, Pe = /* @__PURE__ */ new Map();
function dr(t, r = 400) {
  if (!t || typeof t != "string") return t;
  const n = /(\/iiif\/(?:image\/)?[^/]+)\/([^/]+)\/((?:full|max|pct:\d+(?:\.\d+)?|!?\d*,\d*))\/([^/]+)\/([^/.]+)\.([a-zA-Z0-9]+)(\?.*)?$/;
  return n.test(t) ? t.replace(
    n,
    (a, l, m, y, s, d, i, p = "") => `${l}/${y || "full"}/!${r},${r}/${s || "0"}/${d || "default"}.jpg${p}`
  ) : /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i.test(t) ? t.replace(
    /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i,
    `/full/!${r},${r}/0/default.jpg`
  ) : t;
}
function fr(t, { maxWidth: r = 480, quality: n = 0.72 } = {}) {
  if (!t || typeof t != "string") return "";
  const a = `${t}::${r}::${n}`;
  if (Pe.has(a))
    return Pe.get(a);
  const l = dr(t, r);
  return Pe.set(a, l), l;
}
function w(t, r, n) {
  return {
    className: ["geotrail-" + t, r == null ? void 0 : r[t]].filter(Boolean).join(" "),
    style: n == null ? void 0 : n[t]
  };
}
const pr = {
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
}, br = Oe.memo(function({
  trail: r,
  activeLegIndex: n,
  isPlaying: a,
  isLoading: l,
  allowInput: m = !0,
  theme: y = "dark",
  classNames: s,
  styles: d,
  onToggleTheme: i,
  onTogglePlay: p,
  onReset: c,
  onSelectStep: g,
  onLoadInput: $
}) {
  var z;
  const [A, D] = B(!1), [C, M] = B(""), [E, J] = B(null), I = Ft([]), _ = y === "light", G = pr[_ ? "light" : "dark"];
  ce(() => {
    var b;
    (b = I.current[n]) == null || b.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [n, r.events.length]);
  const V = async (b) => {
    if (b && b.preventDefault(), !C.trim() || l) return;
    await $(C) && D(!1);
  }, K = (b) => {
    const P = /^https?:\/\/\S+$/i.test(C.trim());
    b.key === "Enter" && !b.shiftKey && P && (b.preventDefault(), V());
  };
  return /* @__PURE__ */ f.jsxs(
    "aside",
    {
      ...w("sidebar", s, d),
      className: `${w("sidebar", s, d).className} w-full lg:w-[410px] h-[48vh] lg:h-full border-t lg:border-t-0 lg:border-r flex flex-col z-10 transition-colors ${_ ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-slate-800 text-slate-100"}`,
      children: [
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            ...w("sidebarHeader", s, d),
            className: `${w("sidebarHeader", s, d).className} p-4 border-b ${_ ? "border-slate-200" : "border-slate-800"}`,
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
                      ...w("themeButton", s, d),
                      type: "button",
                      onClick: i,
                      className: `${w("themeButton", s, d).className} inline-flex items-center justify-center w-8 h-8 rounded-lg border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      title: _ ? "Switch to dark mode" : "Switch to light mode",
                      children: _ ? /* @__PURE__ */ f.jsx(It, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ f.jsx(Wt, { className: "w-3.5 h-3.5 text-amber-400" })
                    }
                  ),
                  m && /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      ...w("loadButton", s, d),
                      type: "button",
                      onClick: () => D((b) => !b),
                      className: `${w("loadButton", s, d).className} inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(Yt, { className: `w-3.5 h-3.5 ${_ ? "text-sky-700" : "text-sky-400"}` }),
                        A ? "Close" : "Load URL / JSON"
                      ]
                    }
                  )
                ] })
              ] }),
              r.objectSummary && (!A || !m) && /* @__PURE__ */ f.jsx("p", { className: `text-xs mt-2 line-clamp-2 ${_ ? "text-slate-600" : "text-slate-400"}`, children: r.objectSummary }),
              m && A && /* @__PURE__ */ f.jsxs(
                "form",
                {
                  ...w("loadForm", s, d),
                  onSubmit: V,
                  className: `${w("loadForm", s, d).className} mt-3 space-y-2`,
                  children: [
                    /* @__PURE__ */ f.jsx(
                      "textarea",
                      {
                        ...w("loadInput", s, d),
                        "aria-label": "Linked Art URL or JSON-LD",
                        value: C,
                        onChange: (b) => M(b.target.value),
                        onKeyDown: K,
                        placeholder: "Paste a Linked Art URL (https://...) or JSON-LD payload...",
                        rows: 4,
                        className: `${w("loadInput", s, d).className} w-full rounded-lg border p-2.5 text-xs font-mono focus:outline-none focus:border-sky-500 ${_ ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-slate-950 border-slate-700 text-slate-200"}`
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
                          /* @__PURE__ */ f.jsx(Bt, { className: "w-3.5 h-3.5 animate-spin" }),
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
            ...w("controls", s, d),
            className: `${w("controls", s, d).className} px-4 py-3 border-b flex items-center gap-3 ${_ ? "bg-slate-50 border-slate-200" : "bg-slate-950/60 border-slate-800"}`,
            children: [
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  ...w("playButton", s, d),
                  type: "button",
                  onClick: p,
                  className: `${w("playButton", s, d).className} inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white transition`,
                  title: a ? "Pause animation" : "Play trajectory",
                  children: a ? /* @__PURE__ */ f.jsx(Jt, { className: "w-4 h-4" }) : /* @__PURE__ */ f.jsx(Gt, { className: "w-4 h-4 ml-0.5" })
                }
              ),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  ...w("resetButton", s, d),
                  type: "button",
                  onClick: c,
                  className: `${w("resetButton", s, d).className} inline-flex items-center justify-center w-8 h-8 rounded-full transition ${_ ? "bg-slate-200 hover:bg-slate-300 text-slate-700" : "bg-slate-800 hover:bg-slate-700 text-slate-300"}`,
                  title: "Restart from origin",
                  children: /* @__PURE__ */ f.jsx(Vt, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ f.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ f.jsx(
                  "input",
                  {
                    ...w("timeline", s, d),
                    type: "range",
                    min: 0,
                    max: Math.max(0, r.events.length - 1),
                    value: n,
                    onChange: (b) => g(Number(b.target.value)),
                    className: `${w("timeline", s, d).className} w-full accent-sky-600 cursor-pointer`
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
                      /* @__PURE__ */ f.jsx("span", { children: (z = r.events[n]) == null ? void 0 : z.dateDisplay })
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
            ...w("eventList", s, d),
            className: `${w("eventList", s, d).className} flex-1 overflow-y-auto p-3 space-y-2.5`,
            children: [
              r.events.map((b) => {
                const P = b.index === n, N = b.index <= n;
                return /* @__PURE__ */ Dt(
                  "div",
                  {
                    ...w("eventCard", s, d),
                    "data-active": P,
                    "data-visited": N,
                    "data-category": b.category,
                    ref: (R) => {
                      I.current[b.index] = R;
                    },
                    key: b.id,
                    onClick: () => g(b.index),
                    className: `${w("eventCard", s, d).className} rounded-xl p-3 border cursor-pointer transition ${P ? _ ? "bg-sky-50/70 border-sky-500 shadow-sm" : "bg-slate-800/90 border-sky-500/70 shadow-lg" : N ? _ ? "bg-white border-slate-200 hover:border-slate-300" : "bg-slate-900 border-slate-700/80 hover:border-slate-600" : _ ? "bg-slate-50/70 border-slate-200/80 opacity-80 hover:opacity-100" : "bg-slate-900/40 border-slate-800/70 opacity-70 hover:opacity-100"}`
                  },
                  /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ f.jsxs(
                      "span",
                      {
                        ...w("eventBadge", s, d),
                        className: `${w("eventBadge", s, d).className} text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${G[b.category] || G.other}`,
                        children: [
                          b.index + 1,
                          ". ",
                          b.category.replace("_", " ")
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.jsxs(
                      "span",
                      {
                        className: `inline-flex items-center gap-1 text-xs ${_ ? "text-slate-600" : "text-slate-400"}`,
                        children: [
                          /* @__PURE__ */ f.jsx(Kt, { className: "w-3 h-3" }),
                          b.dateDisplay
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ f.jsx("h2", { className: "text-sm font-semibold mt-1.5", children: b.title }),
                  /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${_ ? "text-slate-700" : "text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(
                          zt,
                          {
                            className: `w-3.5 h-3.5 shrink-0 ${_ ? "text-sky-700" : "text-sky-400"}`
                          }
                        ),
                        /* @__PURE__ */ f.jsx("span", { className: "truncate", children: b.placeLabel }),
                        _e(b.placeUri) && /* @__PURE__ */ f.jsx(
                          "a",
                          {
                            href: _e(b.placeUri),
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: (R) => R.stopPropagation(),
                            className: "text-slate-400 hover:text-sky-500 ml-auto",
                            title: "Open Place URI",
                            children: /* @__PURE__ */ f.jsx(Ht, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    }
                  ),
                  b.actors.length > 0 && /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${_ ? "text-slate-600" : "text-slate-400"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(Xt, { className: "w-3.5 h-3.5 shrink-0" }),
                        /* @__PURE__ */ f.jsx("span", { className: "truncate", children: b.actors.join(", ") })
                      ]
                    }
                  ),
                  b.description && /* @__PURE__ */ f.jsx(
                    "p",
                    {
                      className: `text-xs mt-1.5 leading-relaxed ${_ ? "text-slate-600" : "text-slate-400"}`,
                      children: b.description
                    }
                  ),
                  b.images.length > 0 && /* @__PURE__ */ f.jsx("div", { className: "mt-2.5 flex gap-2 overflow-x-auto pb-1", children: b.images.map((R) => {
                    const U = fr(R.url, { maxWidth: 240 });
                    return /* @__PURE__ */ f.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: (O) => {
                          O.stopPropagation(), J(R.url);
                        },
                        className: `group relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${_ ? "border-slate-300 hover:border-sky-600" : "border-slate-700 hover:border-sky-400"}`,
                        children: [
                          /* @__PURE__ */ f.jsx(
                            "img",
                            {
                              src: U,
                              alt: R.label,
                              loading: "lazy",
                              decoding: "async",
                              onError: (O) => {
                                O.currentTarget.src !== R.url && (O.currentTarget.src = R.url);
                              },
                              className: "w-full h-full object-cover group-hover:scale-105 transition"
                            }
                          ),
                          /* @__PURE__ */ f.jsx("span", { className: "absolute bottom-1 right-1 bg-slate-950/80 p-0.5 rounded text-slate-200", children: /* @__PURE__ */ f.jsx(Zt, { className: "w-2.5 h-2.5" }) })
                        ]
                      },
                      R.id
                    );
                  }) })
                );
              }),
              r.warnings.length > 0 && /* @__PURE__ */ f.jsxs(
                "div",
                {
                  ...w("warnings", s, d),
                  className: `${w("warnings", s, d).className} rounded-lg border p-2.5 text-[11px] space-y-1 ${_ ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-amber-950/30 border-amber-500/30 text-amber-200"}`,
                  children: [
                    /* @__PURE__ */ f.jsx("div", { className: "font-semibold", children: "Spatial Resolution Notes" }),
                    r.warnings.map((b, P) => /* @__PURE__ */ f.jsxs("div", { children: [
                      "• ",
                      b
                    ] }, P))
                  ]
                }
              )
            ]
          }
        ),
        E && /* @__PURE__ */ f.jsx(
          "div",
          {
            ...w("lightbox", s, d),
            onClick: () => J(null),
            className: `${w("lightbox", s, d).className} fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-6 cursor-zoom-out`,
            children: /* @__PURE__ */ f.jsx(
              "img",
              {
                src: E,
                alt: "Linked Art representation",
                className: "max-w-full max-h-full rounded-xl border border-slate-700 shadow-2xl"
              }
            )
          }
        )
      ]
    }
  );
}), mr = Mt(
  () => import("./GeoArcMap-C-V8Sv_c.js").then((t) => ({ default: t.GeoArcMap }))
), gr = 4500, hr = 1e3 / 30;
function vr({
  record: t = it,
  allowInput: r = !0,
  theme: n = "dark",
  classNames: a,
  styles: l,
  mapStyles: m,
  mapAppearance: y
}) {
  const [s, d] = B(n), [i, p] = B(() => Te(t)), [c, g] = B(0), [$, A] = B(0), [D, C] = B(!1), [M, E] = B(!1), [J, I] = B(null);
  ce(() => {
    d(n);
  }, [n]), ce(() => {
    const b = Te(t || it);
    p(b), g(0), A(0), C(!1), I(null);
  }, [t]), ce(() => {
    let b = !1;
    if (i.events.some((N) => !N.coordinates))
      return or(i).then((N) => {
        !b && N !== i && p(N);
      }), () => {
        b = !0;
      };
  }, [i]), ce(() => {
    if (!D || i.events.length < 2) return;
    let b, P = performance.now(), N = P, R = 0, U = c, O = $;
    const ne = (X) => {
      const ue = Math.min(X - P, 100);
      if (P = X, R += ue, X - N >= hr) {
        if (N = X, O += R / gr, R = 0, O >= 1 && (U += 1, g(U), O = 0, U >= i.events.length - 1)) {
          A(O), C(!1);
          return;
        }
        A(O);
      }
      b = requestAnimationFrame(ne);
    };
    return b = requestAnimationFrame(ne), () => cancelAnimationFrame(b);
  }, [D, i.events.length]);
  const _ = me(async (b) => {
    E(!0), I(null);
    try {
      const P = await ur(b), N = Te(P);
      return p(N), g(0), A(0), C(!1), I(null), !0;
    } catch (P) {
      return I(P instanceof Error ? P.message : "Unable to parse Linked Art input"), !1;
    } finally {
      E(!1);
    }
  }, []), G = me((b) => {
    C(!1), g(b), A(0);
  }, []), V = me(() => {
    C(!1), g(0), A(0);
  }, []), K = me(() => {
    if (!(i.events.length < 2)) {
      if (D) {
        C(!1);
        return;
      }
      c >= i.events.length - 1 && (g(0), A(0)), C(!0);
    }
  }, [c, D, i.events.length]), z = s === "light";
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      ...w("root", a, l),
      className: `${w("root", a, l).className} w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${z ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"}`,
      "data-theme": s,
      children: [
        /* @__PURE__ */ f.jsx(
          br,
          {
            trail: i,
            activeLegIndex: c,
            isPlaying: D,
            isLoading: M,
            allowInput: r,
            theme: s,
            classNames: a,
            styles: l,
            onToggleTheme: () => d((b) => b === "dark" ? "light" : "dark"),
            onTogglePlay: K,
            onReset: V,
            onSelectStep: G,
            onLoadInput: _
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
                Ut,
                {
                  fallback: /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      className: `w-full h-full flex items-center justify-center text-xs ${z ? "bg-slate-100 text-slate-600" : "bg-slate-950 text-slate-400"}`,
                      children: "Loading map engine..."
                    }
                  ),
                  children: /* @__PURE__ */ f.jsx(
                    mr,
                    {
                      events: i.events,
                      activeLegIndex: c,
                      legProgress: $,
                      isPlaying: D,
                      onSelectEvent: G,
                      theme: s,
                      classNames: a,
                      styles: l,
                      mapStyles: m,
                      mapAppearance: y
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
  vr as A,
  w as c,
  fr as g,
  f as j,
  _e as s
};
