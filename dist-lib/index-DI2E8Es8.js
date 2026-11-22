import Fe, { useState as J, useRef as ut, useEffect as de, createElement as It, useMemo as Wt, useCallback as ye, Suspense as Yt, lazy as Bt } from "react";
import { Moon as Gt, Sun as Jt, FileJson as Kt, Loader2 as Vt, Pause as Ht, Play as zt, RotateCcw as Xt, Calendar as qt, MapPin as Zt, ExternalLink as Qt, Users as er, Image as tr } from "lucide-react";
var _e = { exports: {} }, se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function rr() {
  if (tt) return se;
  tt = 1;
  var t = Fe, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(s, u, i) {
    var f, c = {}, b = null, O = null;
    i !== void 0 && (b = "" + i), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (O = u.ref);
    for (f in u) n.call(u, f) && !m.hasOwnProperty(f) && (c[f] = u[f]);
    if (s && s.defaultProps) for (f in u = s.defaultProps, u) c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: r, type: s, key: b, ref: O, props: c, _owner: l.current };
  }
  return se.Fragment = a, se.jsx = h, se.jsxs = h, se;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function nr() {
  return rt || (rt = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Fe, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), i = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), T = Symbol.iterator, D = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = T && e[T] || e[D];
      return typeof o == "function" ? o : null;
    }
    var U = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var o = arguments.length, d = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          d[g - 1] = arguments[g];
        K("error", e, d);
      }
    }
    function K(e, o, d) {
      {
        var g = U.ReactDebugCurrentFrame, E = g.getStackAddendum();
        E !== "" && (o += "%s", d = d.concat([E]));
        var k = d.map(function(x) {
          return String(x);
        });
        k.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var I = !1, _ = !1, N = !1, H = !1, z = !1, G;
    G = Symbol.for("react.module.reference");
    function y(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === m || z || e === l || e === i || e === f || H || e === O || I || _ || N || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === c || e.$$typeof === h || e.$$typeof === s || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === G || e.getModuleId !== void 0));
    }
    function W(e, o, d) {
      var g = e.displayName;
      if (g)
        return g;
      var E = o.displayName || o.name || "";
      return E !== "" ? d + "(" + E + ")" : d;
    }
    function A(e) {
      return e.displayName || "Context";
    }
    function j(e) {
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
            return A(o) + ".Consumer";
          case h:
            var d = e;
            return A(d._context) + ".Provider";
          case u:
            return W(e, e.render, "ForwardRef");
          case c:
            var g = e.displayName || null;
            return g !== null ? g : j(e.type) || "Memo";
          case b: {
            var E = e, k = E._payload, x = E._init;
            try {
              return j(x(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, L = 0, X, q, te, Z, fe, pe, De;
    function Ue() {
    }
    Ue.__reactDisabledLog = !0;
    function pt() {
      {
        if (L === 0) {
          X = console.log, q = console.info, te = console.warn, Z = console.error, fe = console.group, pe = console.groupCollapsed, De = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ue,
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
        L++;
      }
    }
    function mt() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: X
            }),
            info: C({}, e, {
              value: q
            }),
            warn: C({}, e, {
              value: te
            }),
            error: C({}, e, {
              value: Z
            }),
            group: C({}, e, {
              value: fe
            }),
            groupCollapsed: C({}, e, {
              value: pe
            }),
            groupEnd: C({}, e, {
              value: De
            })
          });
        }
        L < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = U.ReactCurrentDispatcher, ke;
    function me(e, o, d) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (E) {
            var g = E.stack.trim().match(/\n( *(at )?)/);
            ke = g && g[1] || "";
          }
        return `
` + ke + e;
      }
    }
    var Re = !1, be;
    {
      var bt = typeof WeakMap == "function" ? WeakMap : Map;
      be = new bt();
    }
    function Ie(e, o) {
      if (!e || Re)
        return "";
      {
        var d = be.get(e);
        if (d !== void 0)
          return d;
      }
      var g;
      Re = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = Ee.current, Ee.current = null, pt();
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
              g = F;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (F) {
              g = F;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            g = F;
          }
          e();
        }
      } catch (F) {
        if (F && g && typeof F.stack == "string") {
          for (var v = F.stack.split(`
`), M = g.stack.split(`
`), S = v.length - 1, P = M.length - 1; S >= 1 && P >= 0 && v[S] !== M[P]; )
            P--;
          for (; S >= 1 && P >= 0; S--, P--)
            if (v[S] !== M[P]) {
              if (S !== 1 || P !== 1)
                do
                  if (S--, P--, P < 0 || v[S] !== M[P]) {
                    var Y = `
` + v[S].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && be.set(e, Y), Y;
                  }
                while (S >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        Re = !1, Ee.current = k, mt(), Error.prepareStackTrace = E;
      }
      var ne = e ? e.displayName || e.name : "", Q = ne ? me(ne) : "";
      return typeof e == "function" && be.set(e, Q), Q;
    }
    function gt(e, o, d) {
      return Ie(e, !1);
    }
    function ht(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function ge(e, o, d) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ie(e, ht(e));
      if (typeof e == "string")
        return me(e);
      switch (e) {
        case i:
          return me("Suspense");
        case f:
          return me("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return gt(e.render);
          case c:
            return ge(e.type, o, d);
          case b: {
            var g = e, E = g._payload, k = g._init;
            try {
              return ge(k(E), o, d);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, We = {}, Ye = U.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var o = e._owner, d = ge(e.type, e._source, o ? o.type : null);
        Ye.setExtraStackFrame(d);
      } else
        Ye.setExtraStackFrame(null);
    }
    function yt(e, o, d, g, E) {
      {
        var k = Function.call.bind(oe);
        for (var x in e)
          if (k(e, x)) {
            var v = void 0;
            try {
              if (typeof e[x] != "function") {
                var M = Error((g || "React class") + ": " + d + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              v = e[x](o, x, g, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              v = S;
            }
            v && !(v instanceof Error) && (he(E), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", d, x, typeof v), he(null)), v instanceof Error && !(v.message in We) && (We[v.message] = !0, he(E), R("Failed %s type: %s", d, v.message), he(null));
          }
      }
    }
    var _t = Array.isArray;
    function Ae(e) {
      return _t(e);
    }
    function vt(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, d = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d;
      }
    }
    function xt(e) {
      try {
        return Be(e), !1;
      } catch {
        return !0;
      }
    }
    function Be(e) {
      return "" + e;
    }
    function Ge(e) {
      if (xt(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(e)), Be(e);
    }
    var Je = U.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, Ve;
    function jt(e) {
      if (oe.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Et(e) {
      if (oe.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function kt(e, o) {
      typeof e.ref == "string" && Je.current;
    }
    function Rt(e, o) {
      {
        var d = function() {
          Ke || (Ke = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function At(e, o) {
      {
        var d = function() {
          Ve || (Ve = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var St = function(e, o, d, g, E, k, x) {
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
        value: E
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Tt(e, o, d, g, E) {
      {
        var k, x = {}, v = null, M = null;
        d !== void 0 && (Ge(d), v = "" + d), Et(o) && (Ge(o.key), v = "" + o.key), jt(o) && (M = o.ref, kt(o, E));
        for (k in o)
          oe.call(o, k) && !wt.hasOwnProperty(k) && (x[k] = o[k]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (k in S)
            x[k] === void 0 && (x[k] = S[k]);
        }
        if (v || M) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && Rt(x, P), M && At(x, P);
        }
        return St(e, v, M, E, g, Je.current, x);
      }
    }
    var Se = U.ReactCurrentOwner, He = U.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var o = e._owner, d = ge(e.type, e._source, o ? o.type : null);
        He.setExtraStackFrame(d);
      } else
        He.setExtraStackFrame(null);
    }
    var Te;
    Te = !1;
    function Pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function ze() {
      {
        if (Se.current) {
          var e = j(Se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Pt(e) {
      return "";
    }
    var Xe = {};
    function Ct(e) {
      {
        var o = ze();
        if (!o) {
          var d = typeof e == "string" ? e : e.displayName || e.name;
          d && (o = `

Check the top-level render call using <` + d + ">.");
        }
        return o;
      }
    }
    function qe(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var d = Ct(o);
        if (Xe[d])
          return;
        Xe[d] = !0;
        var g = "";
        e && e._owner && e._owner !== Se.current && (g = " It was passed a child from " + j(e._owner.type) + "."), re(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, g), re(null);
      }
    }
    function Ze(e, o) {
      {
        if (typeof e != "object")
          return;
        if (Ae(e))
          for (var d = 0; d < e.length; d++) {
            var g = e[d];
            Pe(g) && qe(g, o);
          }
        else if (Pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = $(e);
          if (typeof E == "function" && E !== e.entries)
            for (var k = E.call(e), x; !(x = k.next()).done; )
              Pe(x.value) && qe(x.value, o);
        }
      }
    }
    function Ot(e) {
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
          var g = j(o);
          yt(d, e.props, "prop", g, e);
        } else if (o.PropTypes !== void 0 && !Te) {
          Te = !0;
          var E = j(o);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $t(e) {
      {
        for (var o = Object.keys(e.props), d = 0; d < o.length; d++) {
          var g = o[d];
          if (g !== "children" && g !== "key") {
            re(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), re(null);
            break;
          }
        }
        e.ref !== null && (re(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), re(null));
      }
    }
    var Qe = {};
    function et(e, o, d, g, E, k) {
      {
        var x = y(e);
        if (!x) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = Pt();
          M ? v += M : v += ze();
          var S;
          e === null ? S = "null" : Ae(e) ? S = "array" : e !== void 0 && e.$$typeof === r ? (S = "<" + (j(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, v);
        }
        var P = Tt(e, o, d, E, k);
        if (P == null)
          return P;
        if (x) {
          var Y = o.children;
          if (Y !== void 0)
            if (g)
              if (Ae(Y)) {
                for (var ne = 0; ne < Y.length; ne++)
                  Ze(Y[ne], e);
                Object.freeze && Object.freeze(Y);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ze(Y, e);
        }
        if (oe.call(o, "key")) {
          var Q = j(e), F = Object.keys(o).filter(function(Ut) {
            return Ut !== "key";
          }), Ce = F.length > 0 ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qe[Q + Ce]) {
            var Dt = F.length > 0 ? "{" + F.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ce, Q, Dt, Q), Qe[Q + Ce] = !0;
          }
        }
        return e === n ? $t(P) : Ot(P), P;
      }
    }
    function Nt(e, o, d) {
      return et(e, o, d, !0);
    }
    function Lt(e, o, d) {
      return et(e, o, d, !1);
    }
    var Mt = Lt, Ft = Nt;
    le.Fragment = n, le.jsx = Mt, le.jsxs = Ft;
  })()), le;
}
var nt;
function ar() {
  return nt || (nt = 1, process.env.NODE_ENV === "production" ? _e.exports = rr() : _e.exports = nr()), _e.exports;
}
var p = ar();
function ir(t) {
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
      return { centroid: at(m[0]), polygon: m };
  }
  const l = r.match(/^MULTIPOLYGON\s*\(\(\((.+)\)\)\)$/i);
  if (l) {
    const h = l[1].split(/\)\)\s*,\s*\(\(/)[0].split(",").map((s) => {
      const [u, i] = s.trim().split(/\s+/);
      return [parseFloat(u), parseFloat(i)];
    }).filter(([s, u]) => Number.isFinite(s) && Number.isFinite(u));
    if (h.length > 0)
      return { centroid: at(h), polygon: [h] };
  }
  return null;
}
function at(t) {
  let r = 0, a = 0;
  const n = t.length;
  for (const [l, m] of t)
    r += l, a += m;
  return [r / n, a / n];
}
const Oe = {
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
}, dt = "linked-art-geotrail:geocode-cache:v1", ve = /* @__PURE__ */ new Set();
let it = Promise.resolve(), ot = 0;
function Le() {
  try {
    return JSON.parse(localStorage.getItem(dt) || "{}");
  } catch {
    return {};
  }
}
function or(t) {
  try {
    localStorage.setItem(dt, JSON.stringify(t));
  } catch {
  }
}
function ft(t) {
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
function Me(t) {
  if (!t || typeof t != "string") return null;
  const r = [t, ft(t)].map((n) => n.trim().toLowerCase()).filter(Boolean), a = Le();
  for (const n of r) {
    if (Oe[n])
      return Oe[n];
    if (Array.isArray(a[n]) && a[n].length === 2)
      return a[n];
  }
  for (const n of r)
    for (const [l, m] of Object.entries(Oe))
      if (n.includes(l))
        return m;
  return null;
}
function sr(t) {
  const r = it.then(async () => {
    const a = Date.now() - ot;
    return a < 1100 && await new Promise((n) => setTimeout(n, 1100 - a)), ot = Date.now(), t();
  });
  return it = r.catch(() => null), r;
}
async function st(t) {
  const r = Me(t);
  if (r) return r;
  const a = ft(t), n = a.split(",").map((h) => h.trim()).filter(Boolean), l = n.length > 1 ? n[n.length - 1] : a, m = a.toLowerCase();
  return !l || ve.has(m) ? null : sr(async () => {
    const h = Le();
    if (Array.isArray(h[m]) && h[m].length === 2)
      return h[m];
    try {
      const s = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        l
      )}&count=1&language=en&format=json`, u = await fetch(s);
      if (!u.ok)
        return ve.add(m), null;
      const i = await u.json(), f = Array.isArray(i == null ? void 0 : i.results) ? i.results[0] : null;
      if (f && Number.isFinite(f.longitude) && Number.isFinite(f.latitude)) {
        const c = [f.longitude, f.latitude], b = Le();
        return b[m] = c, or(b), c;
      }
      ve.add(m);
    } catch {
      ve.add(m);
    }
    return null;
  });
}
function je(t) {
  if (typeof t != "string" || !/^https?:\/\//i.test(t.trim())) return null;
  try {
    const r = new URL(t.trim());
    return !["http:", "https:"].includes(r.protocol) || r.username || r.password ? null : r.href;
  } catch {
    return null;
  }
}
function B(t, r = "Untitled") {
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
function V(t, r) {
  return Array.isArray(t == null ? void 0 : t.classified_as) && t.classified_as.some(
    (a) => String(a.id || "").includes(r) || String(a._label || "").toLowerCase().includes(r.toLowerCase())
  );
}
function ee(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return;
  const r = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && V(a, "300080091")
  ) || t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && (V(a, "300444172") || V(a, "300444174"))
  );
  return r == null ? void 0 : r.content;
}
function ce(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return null;
  const r = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && (V(n, "300435448") || V(n, "300444175") || V(n, "place"))
  );
  if (r != null && r.content)
    return r.content.trim();
  const a = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && V(n, "300444172")
  );
  if (a != null && a.content) {
    const n = a.content.match(/\b(London|Paris|New York|Rome|Athens|Los Angeles|Malibu|Amsterdam|Berlin)\b/i);
    if (n) return n[1];
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
function xe(t) {
  return !je(t) || /rightsstatements\.org\/files\/icons/i.test(t) ? !1 : /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(t) || /\/iiif\/image\//i.test(t);
}
function ie(t, r) {
  const a = [];
  if (!t) return a;
  const n = (l) => {
    var h;
    if (!l || typeof l != "object") return;
    const m = B(l, "Attached image");
    if (Array.isArray(l.access_point))
      for (const s of l.access_point)
        s != null && s.id && xe(s.id) && a.push({ id: s.id, url: s.id, label: m, source: r });
    if (xe(l.id) && a.push({ id: l.id, url: l.id, label: m, source: r }), Array.isArray(l.digitally_shown_by))
      for (const s of l.digitally_shown_by) {
        const u = B(s, m), i = Array.isArray(s.conforms_to) ? (h = s.conforms_to.find((f) => String(f.id).includes("iiif.io/api/image"))) == null ? void 0 : h.id : void 0;
        if (Array.isArray(s.access_point))
          for (const f of s.access_point)
            f != null && f.id && xe(f.id) && a.push({ id: f.id, url: f.id, label: u, iiifService: i, source: r });
        else xe(s.id) && a.push({ id: s.id, url: s.id, label: u, iiifService: i, source: r });
      }
  };
  return Array.isArray(t.representation) && t.representation.forEach(n), Array.isArray(t.digitally_shown_by) && n(t), Array.from(new Map(a.map((l) => [l.url, l])).values());
}
function ue(t) {
  const r = [], a = (n) => {
    if (Array.isArray(n))
      for (const l of n) {
        const m = B(l, "");
        m && m.toLowerCase() !== "unknown" && r.push(m);
      }
  };
  return a(t == null ? void 0 : t.carried_out_by), a(t == null ? void 0 : t.transferred_title_from), a(t == null ? void 0 : t.transferred_title_to), Array.from(new Set(r));
}
function ae(t) {
  const r = Array.isArray(t) ? t[0] : t;
  if (!r || typeof r != "object") return null;
  let a = r.defined_by;
  if (!a && Array.isArray(r.part_of)) {
    const n = r.part_of.find((l) => typeof (l == null ? void 0 : l.defined_by) == "string");
    n && (a = n.defined_by);
  }
  return {
    label: B(r, "Unnamed Place"),
    uri: r.id,
    wkt: a,
    isStorage: V(r, "300004465"),
    isGallery: V(r, "300240057"),
    images: ie(r, "place")
  };
}
function $e(t) {
  const r = [], a = B(t, "Linked Art Object"), n = ie(t, "object"), l = [], m = ({
    id: i,
    title: f,
    category: c,
    timespan: b,
    placeLabel: O,
    placeUri: T,
    wkt: D,
    actors: $ = [],
    description: U,
    images: R = [],
    defaultOrder: K,
    precisionNote: I,
    fallbackPlaceLabel: _
  }) => {
    const N = ir(D), H = N ? N.centroid : Me(O) || _ && Me(_), { display: z, sortTs: G } = lr(b);
    !N && I && r.push(I), l.push({
      id: i,
      title: f,
      category: c,
      dateDisplay: z,
      sortTimestamp: G === Number.MAX_SAFE_INTEGER ? K : G,
      placeLabel: O,
      placeUri: T,
      coordinates: H || null,
      // May be null until async geocoding completes
      fallbackPlaceLabel: _,
      polygon: N == null ? void 0 : N.polygon,
      isApproximate: !N,
      actors: $,
      description: U,
      images: R
    });
  };
  if (t.produced_by) {
    const i = ae(t.produced_by.took_place_at), f = ce(t.produced_by) || ce(t), c = (i == null ? void 0 : i.label) || f;
    c && m({
      id: t.produced_by.id || "production-0",
      title: B(t.produced_by, "Production / Creation"),
      category: "production",
      timespan: t.produced_by.timespan,
      placeLabel: c,
      placeUri: i == null ? void 0 : i.uri,
      wkt: i == null ? void 0 : i.wkt,
      actors: ue(t.produced_by),
      description: ee(t.produced_by),
      images: [...ie(t.produced_by, "event"), ...(i == null ? void 0 : i.images) || []],
      defaultOrder: -1e5,
      precisionNote: i != null && i.wkt ? void 0 : `Production place "${c}" resolved from text statement (no WKT defined_by).`
    });
  }
  if ((Array.isArray(t.encountered) ? t.encountered : t.found_by ? [t.found_by] : []).forEach((i, f) => {
    const c = ae(i.took_place_at), b = (c == null ? void 0 : c.label) || ce(i);
    b && m({
      id: i.id || `discovery-${f}`,
      title: B(i, "Archaeological Encounter / Findspot"),
      category: "discovery",
      timespan: i.timespan,
      placeLabel: b,
      placeUri: c == null ? void 0 : c.uri,
      wkt: c == null ? void 0 : c.wkt,
      actors: ue(i),
      description: ee(i),
      images: [...ie(i, "event"), ...(c == null ? void 0 : c.images) || []],
      defaultOrder: -5e4 + f
    });
  }), Array.isArray(t.changed_ownership_through) && t.changed_ownership_through.forEach((i, f) => {
    const c = Array.isArray(i.part_of) ? i.part_of[0] : i.part_of, b = ae(i.took_place_at) || ae(c == null ? void 0 : c.took_place_at), O = ce(i) || ce(c), T = (b == null ? void 0 : b.label) || O;
    T && m({
      id: i.id || `provenance-${f}`,
      title: B(i, `Transfer of Custody #${f + 1}`),
      category: "provenance",
      timespan: i.timespan || (c == null ? void 0 : c.timespan),
      placeLabel: T,
      placeUri: b == null ? void 0 : b.uri,
      wkt: b == null ? void 0 : b.wkt,
      actors: [...ue(i), ...ue(c)],
      description: ee(i) || ee(c),
      images: [...ie(i, "event"), ...(b == null ? void 0 : b.images) || []],
      defaultOrder: 1e3 + f,
      precisionNote: b != null && b.wkt ? void 0 : `Provenance location "${T}" resolved from text statement (no WKT defined_by).`
    });
  }), [
    ...Array.isArray(t.used_for) ? t.used_for : [],
    ...Array.isArray(t.member_of) ? t.member_of.flatMap((i) => Array.isArray(i.used_for) ? i.used_for : []) : []
  ].forEach((i, f) => {
    const c = ae(i.took_place_at), b = (c == null ? void 0 : c.label) || B(i, "");
    b && m({
      id: i.id || `exhibition-${f}`,
      title: B(i, `Exhibition #${f + 1}`),
      category: "exhibition",
      timespan: i.timespan,
      placeLabel: b,
      placeUri: c == null ? void 0 : c.uri,
      wkt: c == null ? void 0 : c.wkt,
      actors: ue(i),
      description: ee(i),
      images: [...ie(i, "event"), ...(c == null ? void 0 : c.images) || []],
      defaultOrder: 2e3 + f,
      precisionNote: c != null && c.wkt ? void 0 : `Exhibition venue "${b}" geocoded from activity label (no WKT defined_by).`
    });
  }), t.current_location) {
    const i = ae(t.current_location), f = Array.isArray(t.current_owner) ? B(t.current_owner[0], "") : "";
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
        actors: Array.isArray(t.current_owner) ? t.current_owner.map((O) => B(O)) : [],
        description: ee(t.current_location),
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
    objectSummary: ee(t),
    heroImage: n[0],
    events: u,
    warnings: Array.from(new Set(r))
  };
}
async function cr(t) {
  let r = !1;
  const a = await Promise.all(
    t.events.map(async (n) => {
      if (Array.isArray(n.coordinates) && n.coordinates.length === 2)
        return n;
      const l = await st(n.placeLabel) || n.fallbackPlaceLabel && await st(n.fallbackPlaceLabel);
      return l ? (r = !0, { ...n, coordinates: l }) : n;
    })
  );
  return r ? { ...t, events: a } : t;
}
const we = 4500, ur = 2e3, dr = 18e3, fr = 2e3, pr = 6371;
function lt(t) {
  return Array.isArray(t == null ? void 0 : t.coordinates) && t.coordinates.length === 2 && t.coordinates.every(Number.isFinite);
}
function mr(t, r) {
  const a = t[r + 1];
  if (!lt(a)) return we;
  let n = r;
  for (; n >= 0 && !lt(t[n]); ) n--;
  if (n < 0) return we;
  const [l, m] = t[n].coordinates.map((f) => f * Math.PI / 180), [h, s] = a.coordinates.map((f) => f * Math.PI / 180), u = Math.sin((s - m) / 2) ** 2 + Math.cos(m) * Math.cos(s) * Math.sin((h - l) / 2) ** 2, i = 2 * pr * Math.asin(Math.sqrt(Math.min(1, Math.max(0, u))));
  return Math.min(dr, we + Math.max(0, i - fr));
}
const br = [
  (t) => `https://corsproxy.io/?${encodeURIComponent(t)}`,
  (t) => `https://api.allorigins.win/raw?url=${encodeURIComponent(t)}`
];
async function gr(t) {
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
async function hr(t) {
  let r = null;
  for (const a of br)
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
async function yr(t) {
  const r = String(t || "").trim();
  if (!r)
    throw new Error("Enter a Linked Art URL or paste JSON-LD.");
  let a;
  if (!r.startsWith("{") && !r.startsWith("[")) {
    const n = je(r);
    if (!n)
      throw new Error("Enter a valid HTTP(S) URL without embedded credentials, or paste JSON-LD.");
    try {
      a = await gr(n);
    } catch (l) {
      try {
        a = await hr(n);
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
const ct = {
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
}, Ne = /* @__PURE__ */ new Map();
function _r(t, r = 400) {
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
function vr(t, { maxWidth: r = 480, quality: a = 0.72 } = {}) {
  if (!t || typeof t != "string") return "";
  const n = `${t}::${r}::${a}`;
  if (Ne.has(n))
    return Ne.get(n);
  const l = _r(t, r);
  return Ne.set(n, l), l;
}
function w(t, r, a) {
  return {
    className: ["geotrail-" + t, r == null ? void 0 : r[t]].filter(Boolean).join(" "),
    style: a == null ? void 0 : a[t]
  };
}
const xr = {
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
}, wr = Fe.memo(function({
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
  var G;
  const [T, D] = J(!1), [$, U] = J(""), [R, K] = J(null), I = ut([]), _ = h === "light", N = xr[_ ? "light" : "dark"];
  de(() => {
    var y;
    (y = I.current[a]) == null || y.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [a, r.events.length]);
  const H = async (y) => {
    if (y && y.preventDefault(), !$.trim() || l) return;
    await O($) && D(!1);
  }, z = (y) => {
    const W = /^https?:\/\/\S+$/i.test($.trim());
    y.key === "Enter" && !y.shiftKey && W && (y.preventDefault(), H());
  };
  return /* @__PURE__ */ p.jsxs(
    "aside",
    {
      ...w("sidebar", s, u),
      className: `${w("sidebar", s, u).className} w-full lg:w-[410px] h-[48vh] lg:h-full border-t lg:border-t-0 lg:border-r flex flex-col z-10 transition-colors ${_ ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-slate-800 text-slate-100"}`,
      children: [
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            ...w("sidebarHeader", s, u),
            className: `${w("sidebarHeader", s, u).className} p-4 border-b ${_ ? "border-slate-200" : "border-slate-800"}`,
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
                      ...w("themeButton", s, u),
                      type: "button",
                      onClick: i,
                      className: `${w("themeButton", s, u).className} inline-flex items-center justify-center w-8 h-8 rounded-lg border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      title: _ ? "Switch to dark mode" : "Switch to light mode",
                      children: _ ? /* @__PURE__ */ p.jsx(Gt, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ p.jsx(Jt, { className: "w-3.5 h-3.5 text-amber-400" })
                    }
                  ),
                  m && /* @__PURE__ */ p.jsxs(
                    "button",
                    {
                      ...w("loadButton", s, u),
                      type: "button",
                      onClick: () => D((y) => !y),
                      className: `${w("loadButton", s, u).className} inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      children: [
                        /* @__PURE__ */ p.jsx(Kt, { className: `w-3.5 h-3.5 ${_ ? "text-sky-700" : "text-sky-400"}` }),
                        T ? "Close" : "Load URL / JSON"
                      ]
                    }
                  )
                ] })
              ] }),
              r.objectSummary && (!T || !m) && /* @__PURE__ */ p.jsx("p", { className: `text-xs mt-2 line-clamp-2 ${_ ? "text-slate-600" : "text-slate-400"}`, children: r.objectSummary }),
              m && T && /* @__PURE__ */ p.jsxs(
                "form",
                {
                  ...w("loadForm", s, u),
                  onSubmit: H,
                  className: `${w("loadForm", s, u).className} mt-3 space-y-2`,
                  children: [
                    /* @__PURE__ */ p.jsx(
                      "textarea",
                      {
                        ...w("loadInput", s, u),
                        "aria-label": "Linked Art URL or JSON-LD",
                        value: $,
                        onChange: (y) => U(y.target.value),
                        onKeyDown: z,
                        placeholder: "Paste a Linked Art URL (https://...) or JSON-LD payload...",
                        rows: 4,
                        className: `${w("loadInput", s, u).className} w-full rounded-lg border p-2.5 text-xs font-mono focus:outline-none focus:border-sky-500 ${_ ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-slate-950 border-slate-700 text-slate-200"}`
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
                          /* @__PURE__ */ p.jsx(Vt, { className: "w-3.5 h-3.5 animate-spin" }),
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
            ...w("controls", s, u),
            className: `${w("controls", s, u).className} px-4 py-3 border-b flex items-center gap-3 ${_ ? "bg-slate-50 border-slate-200" : "bg-slate-950/60 border-slate-800"}`,
            children: [
              /* @__PURE__ */ p.jsx(
                "button",
                {
                  ...w("playButton", s, u),
                  type: "button",
                  onClick: f,
                  className: `${w("playButton", s, u).className} inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white transition`,
                  title: n ? "Pause animation" : "Play trajectory",
                  children: n ? /* @__PURE__ */ p.jsx(Ht, { className: "w-4 h-4" }) : /* @__PURE__ */ p.jsx(zt, { className: "w-4 h-4 ml-0.5" })
                }
              ),
              /* @__PURE__ */ p.jsx(
                "button",
                {
                  ...w("resetButton", s, u),
                  type: "button",
                  onClick: c,
                  className: `${w("resetButton", s, u).className} inline-flex items-center justify-center w-8 h-8 rounded-full transition ${_ ? "bg-slate-200 hover:bg-slate-300 text-slate-700" : "bg-slate-800 hover:bg-slate-700 text-slate-300"}`,
                  title: "Restart from origin",
                  children: /* @__PURE__ */ p.jsx(Xt, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ p.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    ...w("timeline", s, u),
                    type: "range",
                    min: 0,
                    max: Math.max(0, r.events.length - 1),
                    value: a,
                    onChange: (y) => b(Number(y.target.value)),
                    className: `${w("timeline", s, u).className} w-full accent-sky-600 cursor-pointer`
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
                      /* @__PURE__ */ p.jsx("span", { children: (G = r.events[a]) == null ? void 0 : G.dateDisplay })
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
            ...w("eventList", s, u),
            className: `${w("eventList", s, u).className} flex-1 overflow-y-auto p-3 space-y-2.5`,
            children: [
              r.events.map((y) => {
                const W = y.index === a, A = y.index <= a;
                return /* @__PURE__ */ It(
                  "div",
                  {
                    ...w("eventCard", s, u),
                    "data-active": W,
                    "data-visited": A,
                    "data-category": y.category,
                    ref: (j) => {
                      I.current[y.index] = j;
                    },
                    key: y.id,
                    onClick: () => b(y.index),
                    className: `${w("eventCard", s, u).className} rounded-xl p-3 border cursor-pointer transition ${W ? _ ? "bg-sky-50/70 border-sky-500 shadow-sm" : "bg-slate-800/90 border-sky-500/70 shadow-lg" : A ? _ ? "bg-white border-slate-200 hover:border-slate-300" : "bg-slate-900 border-slate-700/80 hover:border-slate-600" : _ ? "bg-slate-50/70 border-slate-200/80 opacity-80 hover:opacity-100" : "bg-slate-900/40 border-slate-800/70 opacity-70 hover:opacity-100"}`
                  },
                  /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ p.jsxs(
                      "span",
                      {
                        ...w("eventBadge", s, u),
                        className: `${w("eventBadge", s, u).className} text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${N[y.category] || N.other}`,
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
                          /* @__PURE__ */ p.jsx(qt, { className: "w-3 h-3" }),
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
                          Zt,
                          {
                            className: `w-3.5 h-3.5 shrink-0 ${_ ? "text-sky-700" : "text-sky-400"}`
                          }
                        ),
                        /* @__PURE__ */ p.jsx("span", { className: "truncate", children: y.placeLabel }),
                        je(y.placeUri) && /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: je(y.placeUri),
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: (j) => j.stopPropagation(),
                            className: "text-slate-400 hover:text-sky-500 ml-auto",
                            title: "Open Place URI",
                            children: /* @__PURE__ */ p.jsx(Qt, { className: "w-3 h-3" })
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
                        /* @__PURE__ */ p.jsx(er, { className: "w-3.5 h-3.5 shrink-0" }),
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
                  y.images.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "mt-2.5 flex gap-2 overflow-x-auto pb-1", children: y.images.map((j) => {
                    const C = vr(j.url, { maxWidth: 240 });
                    return /* @__PURE__ */ p.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: (L) => {
                          L.stopPropagation(), K(j.url);
                        },
                        className: `group relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${_ ? "border-slate-300 hover:border-sky-600" : "border-slate-700 hover:border-sky-400"}`,
                        children: [
                          /* @__PURE__ */ p.jsx(
                            "img",
                            {
                              src: C,
                              alt: j.label,
                              loading: "lazy",
                              decoding: "async",
                              onError: (L) => {
                                L.currentTarget.src !== j.url && (L.currentTarget.src = j.url);
                              },
                              className: "w-full h-full object-cover group-hover:scale-105 transition"
                            }
                          ),
                          /* @__PURE__ */ p.jsx("span", { className: "absolute bottom-1 right-1 bg-slate-950/80 p-0.5 rounded text-slate-200", children: /* @__PURE__ */ p.jsx(tr, { className: "w-2.5 h-2.5" }) })
                        ]
                      },
                      j.id
                    );
                  }) })
                );
              }),
              r.warnings.length > 0 && /* @__PURE__ */ p.jsxs(
                "div",
                {
                  ...w("warnings", s, u),
                  className: `${w("warnings", s, u).className} rounded-lg border p-2.5 text-[11px] space-y-1 ${_ ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-amber-950/30 border-amber-500/30 text-amber-200"}`,
                  children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-semibold", children: "Spatial Resolution Notes" }),
                    r.warnings.map((y, W) => /* @__PURE__ */ p.jsxs("div", { children: [
                      "• ",
                      y
                    ] }, W))
                  ]
                }
              )
            ]
          }
        ),
        R && /* @__PURE__ */ p.jsx(
          "div",
          {
            ...w("lightbox", s, u),
            onClick: () => K(null),
            className: `${w("lightbox", s, u).className} fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-6 cursor-zoom-out`,
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
}), jr = Bt(
  () => import("./GeoArcMap-D9-JhLAW.js").then((t) => ({ default: t.GeoArcMap }))
), Er = 1e3 / 30;
function Ar({
  record: t = ct,
  allowInput: r = !0,
  theme: a = "dark",
  classNames: n,
  styles: l,
  mapStyles: m,
  mapAppearance: h
}) {
  const [s, u] = J(a), [i, f] = J(() => $e(t)), [c, b] = J(0), [O, T] = J(0), [D, $] = J(!1), [U, R] = J(!1), [K, I] = J(null), _ = ut(0), N = Wt(
    () => i.events.map((A, j) => mr(i.events, j)),
    [i.events]
  );
  de(() => {
    u(a);
  }, [a]), de(() => {
    const A = $e(t || ct);
    _.current = 0, f(A), b(0), T(0), $(!1), I(null);
  }, [t]), de(() => {
    let A = !1;
    if (i.events.some((C) => !C.coordinates))
      return cr(i).then((C) => {
        !A && C !== i && f(C);
      }), () => {
        A = !0;
      };
  }, [i]), de(() => {
    if (!D || i.events.length < 2) return;
    let A, j = performance.now(), C = j, L = 0, X = c, q = O;
    const te = (Z) => {
      const fe = Math.min(Z - j, 100);
      if (j = Z, L += fe, Z - C >= Er) {
        if (C = Z, _.current > 0) {
          _.current = Math.max(0, _.current - L), L = 0, A = requestAnimationFrame(te);
          return;
        }
        if (q += L / N[X], L = 0, q >= 1) {
          const pe = N[X];
          if (X += 1, b(X), q = 0, X >= i.events.length - 1) {
            T(q), $(!1);
            return;
          }
          pe > we && (_.current = ur);
        }
        T(q);
      }
      A = requestAnimationFrame(te);
    };
    return A = requestAnimationFrame(te), () => cancelAnimationFrame(A);
  }, [D, i.events.length, N]);
  const H = ye(async (A) => {
    R(!0), I(null);
    try {
      const j = await yr(A), C = $e(j);
      return _.current = 0, f(C), b(0), T(0), $(!1), I(null), !0;
    } catch (j) {
      return I(j instanceof Error ? j.message : "Unable to parse Linked Art input"), !1;
    } finally {
      R(!1);
    }
  }, []), z = ye((A) => {
    _.current = 0, $(!1), b(A), T(0);
  }, []), G = ye(() => {
    _.current = 0, $(!1), b(0), T(0);
  }, []), y = ye(() => {
    if (!(i.events.length < 2)) {
      if (D) {
        $(!1);
        return;
      }
      c >= i.events.length - 1 && (_.current = 0, b(0), T(0)), $(!0);
    }
  }, [c, D, i.events.length]), W = s === "light";
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      ...w("root", n, l),
      className: `${w("root", n, l).className} w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${W ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"}`,
      "data-theme": s,
      children: [
        /* @__PURE__ */ p.jsx(
          wr,
          {
            trail: i,
            activeLegIndex: c,
            isPlaying: D,
            isLoading: U,
            allowInput: r,
            theme: s,
            classNames: n,
            styles: l,
            onToggleTheme: () => u((A) => A === "dark" ? "light" : "dark"),
            onTogglePlay: y,
            onReset: G,
            onSelectStep: z,
            onLoadInput: H
          }
        ),
        /* @__PURE__ */ p.jsxs(
          "main",
          {
            ...w("mapContainer", n, l),
            className: `${w("mapContainer", n, l).className} relative flex-1 h-[52vh] lg:h-full`,
            children: [
              K && /* @__PURE__ */ p.jsxs("div", { role: "alert", className: "absolute top-3 left-3 z-20 max-w-md bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs px-3 py-2 rounded-lg", children: [
                "Load Error: ",
                K
              ] }),
              /* @__PURE__ */ p.jsx(
                Yt,
                {
                  fallback: /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: `w-full h-full flex items-center justify-center text-xs ${W ? "bg-slate-100 text-slate-600" : "bg-slate-950 text-slate-400"}`,
                      children: "Loading map engine..."
                    }
                  ),
                  children: /* @__PURE__ */ p.jsx(
                    jr,
                    {
                      events: i.events,
                      activeLegIndex: c,
                      legProgress: O,
                      isPlaying: D,
                      onSelectEvent: z,
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
  w as c,
  vr as g,
  p as j,
  je as s
};
