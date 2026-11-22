import Me, { useState as G, useRef as lt, useEffect as de, createElement as Ut, useMemo as It, useCallback as ye, Suspense as Wt, lazy as Yt } from "react";
import { Moon as Bt, Sun as Gt, FileJson as Jt, Loader2 as Kt, Pause as Vt, Play as Ht, RotateCcw as zt, Calendar as Xt, MapPin as qt, ExternalLink as Zt, Users as Qt, Image as er } from "lucide-react";
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
var et;
function tr() {
  if (et) return se;
  et = 1;
  var t = Me, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(s, c, i) {
    var p, u = {}, b = null, N = null;
    i !== void 0 && (b = "" + i), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (N = c.ref);
    for (p in c) a.call(c, p) && !m.hasOwnProperty(p) && (u[p] = c[p]);
    if (s && s.defaultProps) for (p in c = s.defaultProps, c) u[p] === void 0 && (u[p] = c[p]);
    return { $$typeof: r, type: s, key: b, ref: N, props: u, _owner: l.current };
  }
  return se.Fragment = n, se.jsx = y, se.jsxs = y, se;
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
var tt;
function rr() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Me, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), i = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), T = Symbol.iterator, F = "@@iterator";
    function O(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = T && e[T] || e[F];
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
        var k = d.map(function(x) {
          return String(x);
        });
        k.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var U = !1, h = !1, B = !1, V = !1, K = !1, q;
    q = Symbol.for("react.module.reference");
    function _(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === m || K || e === l || e === i || e === p || V || e === N || U || h || B || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === u || e.$$typeof === y || e.$$typeof === s || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === q || e.getModuleId !== void 0));
    }
    function I(e, o, d) {
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
            return A(o) + ".Consumer";
          case y:
            var d = e;
            return A(d._context) + ".Provider";
          case c:
            return I(e, e.render, "ForwardRef");
          case u:
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
    var C = Object.assign, $ = 0, H, z, te, Z, fe, pe, Fe;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function ft() {
      {
        if ($ === 0) {
          H = console.log, z = console.info, te = console.warn, Z = console.error, fe = console.group, pe = console.groupCollapsed, Fe = console.groupEnd;
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
        $++;
      }
    }
    function pt() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: H
            }),
            info: C({}, e, {
              value: z
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
              value: Fe
            })
          });
        }
        $ < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = D.ReactCurrentDispatcher, ke;
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
      var mt = typeof WeakMap == "function" ? WeakMap : Map;
      be = new mt();
    }
    function Ue(e, o) {
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
      k = Ee.current, Ee.current = null, ft();
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
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && be.set(e, W), W;
                  }
                while (S >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        Re = !1, Ee.current = k, pt(), Error.prepareStackTrace = E;
      }
      var ne = e ? e.displayName || e.name : "", Q = ne ? me(ne) : "";
      return typeof e == "function" && be.set(e, Q), Q;
    }
    function bt(e, o, d) {
      return Ue(e, !1);
    }
    function gt(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function ge(e, o, d) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ue(e, gt(e));
      if (typeof e == "string")
        return me(e);
      switch (e) {
        case i:
          return me("Suspense");
        case p:
          return me("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return bt(e.render);
          case u:
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
    var oe = Object.prototype.hasOwnProperty, Ie = {}, We = D.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var o = e._owner, d = ge(e.type, e._source, o ? o.type : null);
        We.setExtraStackFrame(d);
      } else
        We.setExtraStackFrame(null);
    }
    function ht(e, o, d, g, E) {
      {
        var k = Function.call.bind(oe);
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
            v && !(v instanceof Error) && (he(E), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", d, x, typeof v), he(null)), v instanceof Error && !(v.message in Ie) && (Ie[v.message] = !0, he(E), R("Failed %s type: %s", d, v.message), he(null));
          }
      }
    }
    var yt = Array.isArray;
    function Ae(e) {
      return yt(e);
    }
    function _t(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, d = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d;
      }
    }
    function vt(e) {
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
      if (vt(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _t(e)), Ye(e);
    }
    var Ge = D.ReactCurrentOwner, xt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Je, Ke;
    function wt(e) {
      if (oe.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function jt(e) {
      if (oe.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Et(e, o) {
      typeof e.ref == "string" && Ge.current;
    }
    function kt(e, o) {
      {
        var d = function() {
          Je || (Je = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function Rt(e, o) {
      {
        var d = function() {
          Ke || (Ke = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        d.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var At = function(e, o, d, g, E, k, x) {
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
    function St(e, o, d, g, E) {
      {
        var k, x = {}, v = null, L = null;
        d !== void 0 && (Be(d), v = "" + d), jt(o) && (Be(o.key), v = "" + o.key), wt(o) && (L = o.ref, Et(o, E));
        for (k in o)
          oe.call(o, k) && !xt.hasOwnProperty(k) && (x[k] = o[k]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (k in S)
            x[k] === void 0 && (x[k] = S[k]);
        }
        if (v || L) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && kt(x, P), L && Rt(x, P);
        }
        return At(e, v, L, E, g, Ge.current, x);
      }
    }
    var Se = D.ReactCurrentOwner, Ve = D.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var o = e._owner, d = ge(e.type, e._source, o ? o.type : null);
        Ve.setExtraStackFrame(d);
      } else
        Ve.setExtraStackFrame(null);
    }
    var Te;
    Te = !1;
    function Pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function He() {
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
    function Tt(e) {
      return "";
    }
    var ze = {};
    function Pt(e) {
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
        var d = Pt(o);
        if (ze[d])
          return;
        ze[d] = !0;
        var g = "";
        e && e._owner && e._owner !== Se.current && (g = " It was passed a child from " + j(e._owner.type) + "."), re(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, g), re(null);
      }
    }
    function qe(e, o) {
      {
        if (typeof e != "object")
          return;
        if (Ae(e))
          for (var d = 0; d < e.length; d++) {
            var g = e[d];
            Pe(g) && Xe(g, o);
          }
        else if (Pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = O(e);
          if (typeof E == "function" && E !== e.entries)
            for (var k = E.call(e), x; !(x = k.next()).done; )
              Pe(x.value) && Xe(x.value, o);
        }
      }
    }
    function Ct(e) {
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
          var g = j(o);
          ht(d, e.props, "prop", g, e);
        } else if (o.PropTypes !== void 0 && !Te) {
          Te = !0;
          var E = j(o);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
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
    var Ze = {};
    function Qe(e, o, d, g, E, k) {
      {
        var x = _(e);
        if (!x) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Tt();
          L ? v += L : v += He();
          var S;
          e === null ? S = "null" : Ae(e) ? S = "array" : e !== void 0 && e.$$typeof === r ? (S = "<" + (j(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, v);
        }
        var P = St(e, o, d, E, k);
        if (P == null)
          return P;
        if (x) {
          var W = o.children;
          if (W !== void 0)
            if (g)
              if (Ae(W)) {
                for (var ne = 0; ne < W.length; ne++)
                  qe(W[ne], e);
                Object.freeze && Object.freeze(W);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qe(W, e);
        }
        if (oe.call(o, "key")) {
          var Q = j(e), M = Object.keys(o).filter(function(Dt) {
            return Dt !== "key";
          }), Ce = M.length > 0 ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ze[Q + Ce]) {
            var Ft = M.length > 0 ? "{" + M.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ce, Q, Ft, Q), Ze[Q + Ce] = !0;
          }
        }
        return e === a ? Ot(P) : Ct(P), P;
      }
    }
    function $t(e, o, d) {
      return Qe(e, o, d, !0);
    }
    function Nt(e, o, d) {
      return Qe(e, o, d, !1);
    }
    var Lt = Nt, Mt = $t;
    le.Fragment = a, le.jsx = Lt, le.jsxs = Mt;
  })()), le;
}
var rt;
function nr() {
  return rt || (rt = 1, process.env.NODE_ENV === "production" ? _e.exports = tr() : _e.exports = rr()), _e.exports;
}
var f = nr();
function ar(t) {
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
        const [c, i] = s.trim().split(/\s+/);
        return [parseFloat(c), parseFloat(i)];
      }).filter(([s, c]) => Number.isFinite(s) && Number.isFinite(c))
    );
    if (m[0] && m[0].length > 0)
      return { centroid: nt(m[0]), polygon: m };
  }
  const l = r.match(/^MULTIPOLYGON\s*\(\(\((.+)\)\)\)$/i);
  if (l) {
    const y = l[1].split(/\)\)\s*,\s*\(\(/)[0].split(",").map((s) => {
      const [c, i] = s.trim().split(/\s+/);
      return [parseFloat(c), parseFloat(i)];
    }).filter(([s, c]) => Number.isFinite(s) && Number.isFinite(c));
    if (y.length > 0)
      return { centroid: nt(y), polygon: [y] };
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
}, ct = "linked-art-geotrail:geocode-cache:v1", ve = /* @__PURE__ */ new Set();
let at = Promise.resolve(), it = 0;
function Le() {
  try {
    return JSON.parse(localStorage.getItem(ct) || "{}");
  } catch {
    return {};
  }
}
function ir(t) {
  try {
    localStorage.setItem(ct, JSON.stringify(t));
  } catch {
  }
}
function ut(t) {
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
function dt(t) {
  if (!t || typeof t != "string") return null;
  const r = [t, ut(t)].map((a) => a.trim().toLowerCase()).filter(Boolean), n = Le();
  for (const a of r) {
    if (Oe[a])
      return Oe[a];
    if (Array.isArray(n[a]) && n[a].length === 2)
      return n[a];
  }
  for (const a of r)
    for (const [l, m] of Object.entries(Oe))
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
  const r = dt(t);
  if (r) return r;
  const n = ut(t), a = n.split(",").map((y) => y.trim()).filter(Boolean), l = a.length > 1 ? a[a.length - 1] : n, m = n.toLowerCase();
  return !l || ve.has(m) ? null : or(async () => {
    const y = Le();
    if (Array.isArray(y[m]) && y[m].length === 2)
      return y[m];
    try {
      const s = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        l
      )}&count=1&language=en&format=json`, c = await fetch(s);
      if (!c.ok)
        return ve.add(m), null;
      const i = await c.json(), p = Array.isArray(i == null ? void 0 : i.results) ? i.results[0] : null;
      if (p && Number.isFinite(p.longitude) && Number.isFinite(p.latitude)) {
        const u = [p.longitude, p.latitude], b = Le();
        return b[m] = u, ir(b), u;
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
function X(t, r) {
  return Array.isArray(t == null ? void 0 : t.classified_as) && t.classified_as.some(
    (n) => String(n.id || "").includes(r) || String(n._label || "").toLowerCase().includes(r.toLowerCase())
  );
}
function ee(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return;
  const r = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && X(n, "300080091")
  ) || t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && (X(n, "300444172") || X(n, "300444174"))
  );
  return r == null ? void 0 : r.content;
}
function ce(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return null;
  const r = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && (X(a, "300435448") || X(a, "300444175") || X(a, "place"))
  );
  if (r != null && r.content)
    return r.content.trim();
  const n = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && X(a, "300444172")
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
function xe(t) {
  return !je(t) || /rightsstatements\.org\/files\/icons/i.test(t) ? !1 : /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(t) || /\/iiif\/image\//i.test(t);
}
function ie(t, r) {
  const n = [];
  if (!t) return n;
  const a = (l) => {
    var y;
    if (!l || typeof l != "object") return;
    const m = Y(l, "Attached image");
    if (Array.isArray(l.access_point))
      for (const s of l.access_point)
        s != null && s.id && xe(s.id) && n.push({ id: s.id, url: s.id, label: m, source: r });
    if (xe(l.id) && n.push({ id: l.id, url: l.id, label: m, source: r }), Array.isArray(l.digitally_shown_by))
      for (const s of l.digitally_shown_by) {
        const c = Y(s, m), i = Array.isArray(s.conforms_to) ? (y = s.conforms_to.find((p) => String(p.id).includes("iiif.io/api/image"))) == null ? void 0 : y.id : void 0;
        if (Array.isArray(s.access_point))
          for (const p of s.access_point)
            p != null && p.id && xe(p.id) && n.push({ id: p.id, url: p.id, label: c, iiifService: i, source: r });
        else xe(s.id) && n.push({ id: s.id, url: s.id, label: c, iiifService: i, source: r });
      }
  };
  return Array.isArray(t.representation) && t.representation.forEach(a), Array.isArray(t.digitally_shown_by) && a(t), Array.from(new Map(n.map((l) => [l.url, l])).values());
}
function ue(t) {
  const r = [], n = (a) => {
    if (Array.isArray(a))
      for (const l of a) {
        const m = Y(l, "");
        m && m.toLowerCase() !== "unknown" && r.push(m);
      }
  };
  return n(t == null ? void 0 : t.carried_out_by), n(t == null ? void 0 : t.transferred_title_from), n(t == null ? void 0 : t.transferred_title_to), Array.from(new Set(r));
}
function ae(t) {
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
    isStorage: X(r, "300004465"),
    images: ie(r, "place")
  };
}
function $e(t) {
  const r = [], n = Y(t, "Linked Art Object"), a = ie(t, "object"), l = [], m = ({
    id: i,
    title: p,
    category: u,
    timespan: b,
    placeLabel: N,
    placeUri: T,
    wkt: F,
    actors: O = [],
    description: D,
    images: R = [],
    defaultOrder: J,
    precisionNote: U
  }) => {
    const h = ar(F), B = h ? h.centroid : dt(N), { display: V, sortTs: K } = lr(b);
    !h && U && r.push(U), l.push({
      id: i,
      title: p,
      category: u,
      dateDisplay: V,
      sortTimestamp: K === Number.MAX_SAFE_INTEGER ? J : K,
      placeLabel: N,
      placeUri: T,
      coordinates: B,
      // May be null until async geocoding completes
      polygon: h == null ? void 0 : h.polygon,
      isApproximate: !h,
      actors: O,
      description: D,
      images: R
    });
  };
  if (t.produced_by) {
    const i = ae(t.produced_by.took_place_at), p = ce(t.produced_by) || ce(t), u = (i == null ? void 0 : i.label) || p;
    u && m({
      id: t.produced_by.id || "production-0",
      title: Y(t.produced_by, "Production / Creation"),
      category: "production",
      timespan: t.produced_by.timespan,
      placeLabel: u,
      placeUri: i == null ? void 0 : i.uri,
      wkt: i == null ? void 0 : i.wkt,
      actors: ue(t.produced_by),
      description: ee(t.produced_by),
      images: [...ie(t.produced_by, "event"), ...(i == null ? void 0 : i.images) || []],
      defaultOrder: -1e5,
      precisionNote: i != null && i.wkt ? void 0 : `Production place "${u}" resolved from text statement (no WKT defined_by).`
    });
  }
  if ((Array.isArray(t.encountered) ? t.encountered : t.found_by ? [t.found_by] : []).forEach((i, p) => {
    const u = ae(i.took_place_at), b = (u == null ? void 0 : u.label) || ce(i);
    b && m({
      id: i.id || `discovery-${p}`,
      title: Y(i, "Archaeological Encounter / Findspot"),
      category: "discovery",
      timespan: i.timespan,
      placeLabel: b,
      placeUri: u == null ? void 0 : u.uri,
      wkt: u == null ? void 0 : u.wkt,
      actors: ue(i),
      description: ee(i),
      images: [...ie(i, "event"), ...(u == null ? void 0 : u.images) || []],
      defaultOrder: -5e4 + p
    });
  }), Array.isArray(t.changed_ownership_through) && t.changed_ownership_through.forEach((i, p) => {
    const u = Array.isArray(i.part_of) ? i.part_of[0] : i.part_of, b = ae(i.took_place_at) || ae(u == null ? void 0 : u.took_place_at), N = ce(i) || ce(u), T = (b == null ? void 0 : b.label) || N;
    T && m({
      id: i.id || `provenance-${p}`,
      title: Y(i, `Transfer of Custody #${p + 1}`),
      category: "provenance",
      timespan: i.timespan || (u == null ? void 0 : u.timespan),
      placeLabel: T,
      placeUri: b == null ? void 0 : b.uri,
      wkt: b == null ? void 0 : b.wkt,
      actors: [...ue(i), ...ue(u)],
      description: ee(i) || ee(u),
      images: [...ie(i, "event"), ...(b == null ? void 0 : b.images) || []],
      defaultOrder: 1e3 + p,
      precisionNote: b != null && b.wkt ? void 0 : `Provenance location "${T}" resolved from text statement (no WKT defined_by).`
    });
  }), [
    ...Array.isArray(t.used_for) ? t.used_for : [],
    ...Array.isArray(t.member_of) ? t.member_of.flatMap((i) => Array.isArray(i.used_for) ? i.used_for : []) : []
  ].forEach((i, p) => {
    const u = ae(i.took_place_at), b = (u == null ? void 0 : u.label) || Y(i, "");
    b && m({
      id: i.id || `exhibition-${p}`,
      title: Y(i, `Exhibition #${p + 1}`),
      category: "exhibition",
      timespan: i.timespan,
      placeLabel: b,
      placeUri: u == null ? void 0 : u.uri,
      wkt: u == null ? void 0 : u.wkt,
      actors: ue(i),
      description: ee(i),
      images: [...ie(i, "event"), ...(u == null ? void 0 : u.images) || []],
      defaultOrder: 2e3 + p,
      precisionNote: u != null && u.wkt ? void 0 : `Exhibition venue "${b}" geocoded from activity label (no WKT defined_by).`
    });
  }), t.current_location) {
    const i = ae(t.current_location), p = Array.isArray(t.current_owner) ? Y(t.current_owner[0], "") : "";
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
        description: ee(t.current_location),
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
    objectSummary: ee(t),
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
const we = 4500, ur = 2e3, dr = 18e3, fr = 2e3, pr = 6371;
function ot(t) {
  return Array.isArray(t == null ? void 0 : t.coordinates) && t.coordinates.length === 2 && t.coordinates.every(Number.isFinite);
}
function mr(t, r) {
  const n = t[r + 1];
  if (!ot(n)) return we;
  let a = r;
  for (; a >= 0 && !ot(t[a]); ) a--;
  if (a < 0) return we;
  const [l, m] = t[a].coordinates.map((p) => p * Math.PI / 180), [y, s] = n.coordinates.map((p) => p * Math.PI / 180), c = Math.sin((s - m) / 2) ** 2 + Math.cos(m) * Math.cos(s) * Math.sin((y - l) / 2) ** 2, i = 2 * pr * Math.asin(Math.sqrt(Math.min(1, Math.max(0, c))));
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
  for (const n of br)
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
async function yr(t) {
  const r = String(t || "").trim();
  if (!r)
    throw new Error("Enter a Linked Art URL or paste JSON-LD.");
  let n;
  if (!r.startsWith("{") && !r.startsWith("[")) {
    const a = je(r);
    if (!a)
      throw new Error("Enter a valid HTTP(S) URL without embedded credentials, or paste JSON-LD.");
    try {
      n = await gr(a);
    } catch (l) {
      try {
        n = await hr(a);
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
}, Ne = /* @__PURE__ */ new Map();
function _r(t, r = 400) {
  if (!t || typeof t != "string") return t;
  const n = /(\/iiif\/(?:image\/)?[^/]+)\/([^/]+)\/((?:full|max|pct:\d+(?:\.\d+)?|!?\d*,\d*))\/([^/]+)\/([^/.]+)\.([a-zA-Z0-9]+)(\?.*)?$/;
  return n.test(t) ? t.replace(
    n,
    (a, l, m, y, s, c, i, p = "") => `${l}/${y || "full"}/!${r},${r}/${s || "0"}/${c || "default"}.jpg${p}`
  ) : /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i.test(t) ? t.replace(
    /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i,
    `/full/!${r},${r}/0/default.jpg`
  ) : t;
}
function vr(t, { maxWidth: r = 480, quality: n = 0.72 } = {}) {
  if (!t || typeof t != "string") return "";
  const a = `${t}::${r}::${n}`;
  if (Ne.has(a))
    return Ne.get(a);
  const l = _r(t, r);
  return Ne.set(a, l), l;
}
function w(t, r, n) {
  return {
    className: ["geotrail-" + t, r == null ? void 0 : r[t]].filter(Boolean).join(" "),
    style: n == null ? void 0 : n[t]
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
}, wr = Me.memo(function({
  trail: r,
  activeLegIndex: n,
  isPlaying: a,
  isLoading: l,
  allowInput: m = !0,
  theme: y = "dark",
  classNames: s,
  styles: c,
  onToggleTheme: i,
  onTogglePlay: p,
  onReset: u,
  onSelectStep: b,
  onLoadInput: N
}) {
  var q;
  const [T, F] = G(!1), [O, D] = G(""), [R, J] = G(null), U = lt([]), h = y === "light", B = xr[h ? "light" : "dark"];
  de(() => {
    var _;
    (_ = U.current[n]) == null || _.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [n, r.events.length]);
  const V = async (_) => {
    if (_ && _.preventDefault(), !O.trim() || l) return;
    await N(O) && F(!1);
  }, K = (_) => {
    const I = /^https?:\/\/\S+$/i.test(O.trim());
    _.key === "Enter" && !_.shiftKey && I && (_.preventDefault(), V());
  };
  return /* @__PURE__ */ f.jsxs(
    "aside",
    {
      ...w("sidebar", s, c),
      className: `${w("sidebar", s, c).className} w-full lg:w-[410px] h-[48vh] lg:h-full border-t lg:border-t-0 lg:border-r flex flex-col z-10 transition-colors ${h ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-slate-800 text-slate-100"}`,
      children: [
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            ...w("sidebarHeader", s, c),
            className: `${w("sidebarHeader", s, c).className} p-4 border-b ${h ? "border-slate-200" : "border-slate-800"}`,
            children: [
              /* @__PURE__ */ f.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ f.jsx(
                    "span",
                    {
                      className: `text-[11px] font-semibold uppercase tracking-widest ${h ? "text-sky-700" : "text-sky-400"}`,
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
                      className: `${w("themeButton", s, c).className} inline-flex items-center justify-center w-8 h-8 rounded-lg border transition ${h ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      title: h ? "Switch to dark mode" : "Switch to light mode",
                      children: h ? /* @__PURE__ */ f.jsx(Bt, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ f.jsx(Gt, { className: "w-3.5 h-3.5 text-amber-400" })
                    }
                  ),
                  m && /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      ...w("loadButton", s, c),
                      type: "button",
                      onClick: () => F((_) => !_),
                      className: `${w("loadButton", s, c).className} inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${h ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(Jt, { className: `w-3.5 h-3.5 ${h ? "text-sky-700" : "text-sky-400"}` }),
                        T ? "Close" : "Load URL / JSON"
                      ]
                    }
                  )
                ] })
              ] }),
              r.objectSummary && (!T || !m) && /* @__PURE__ */ f.jsx("p", { className: `text-xs mt-2 line-clamp-2 ${h ? "text-slate-600" : "text-slate-400"}`, children: r.objectSummary }),
              m && T && /* @__PURE__ */ f.jsxs(
                "form",
                {
                  ...w("loadForm", s, c),
                  onSubmit: V,
                  className: `${w("loadForm", s, c).className} mt-3 space-y-2`,
                  children: [
                    /* @__PURE__ */ f.jsx(
                      "textarea",
                      {
                        ...w("loadInput", s, c),
                        "aria-label": "Linked Art URL or JSON-LD",
                        value: O,
                        onChange: (_) => D(_.target.value),
                        onKeyDown: K,
                        placeholder: "Paste a Linked Art URL (https://...) or JSON-LD payload...",
                        rows: 4,
                        className: `${w("loadInput", s, c).className} w-full rounded-lg border p-2.5 text-xs font-mono focus:outline-none focus:border-sky-500 ${h ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-slate-950 border-slate-700 text-slate-200"}`
                      }
                    ),
                    /* @__PURE__ */ f.jsx("p", { className: `text-xs ${h ? "text-slate-600" : "text-slate-400"}`, children: "If direct loading fails, the URL is sent to public CORS proxies. Do not enter private URLs or tokens." }),
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
            className: `${w("controls", s, c).className} px-4 py-3 border-b flex items-center gap-3 ${h ? "bg-slate-50 border-slate-200" : "bg-slate-950/60 border-slate-800"}`,
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
                  className: `${w("resetButton", s, c).className} inline-flex items-center justify-center w-8 h-8 rounded-full transition ${h ? "bg-slate-200 hover:bg-slate-300 text-slate-700" : "bg-slate-800 hover:bg-slate-700 text-slate-300"}`,
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
                    onChange: (_) => b(Number(_.target.value)),
                    className: `${w("timeline", s, c).className} w-full accent-sky-600 cursor-pointer`
                  }
                ),
                /* @__PURE__ */ f.jsxs(
                  "div",
                  {
                    className: `flex justify-between text-[11px] mt-0.5 ${h ? "text-slate-600" : "text-slate-400"}`,
                    children: [
                      /* @__PURE__ */ f.jsxs("span", { children: [
                        "Stop ",
                        n + 1,
                        " of ",
                        r.events.length
                      ] }),
                      /* @__PURE__ */ f.jsx("span", { children: (q = r.events[n]) == null ? void 0 : q.dateDisplay })
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
              r.events.map((_) => {
                const I = _.index === n, A = _.index <= n;
                return /* @__PURE__ */ Ut(
                  "div",
                  {
                    ...w("eventCard", s, c),
                    "data-active": I,
                    "data-visited": A,
                    "data-category": _.category,
                    ref: (j) => {
                      U.current[_.index] = j;
                    },
                    key: _.id,
                    onClick: () => b(_.index),
                    className: `${w("eventCard", s, c).className} rounded-xl p-3 border cursor-pointer transition ${I ? h ? "bg-sky-50/70 border-sky-500 shadow-sm" : "bg-slate-800/90 border-sky-500/70 shadow-lg" : A ? h ? "bg-white border-slate-200 hover:border-slate-300" : "bg-slate-900 border-slate-700/80 hover:border-slate-600" : h ? "bg-slate-50/70 border-slate-200/80 opacity-80 hover:opacity-100" : "bg-slate-900/40 border-slate-800/70 opacity-70 hover:opacity-100"}`
                  },
                  /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ f.jsxs(
                      "span",
                      {
                        ...w("eventBadge", s, c),
                        className: `${w("eventBadge", s, c).className} text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${B[_.category] || B.other}`,
                        children: [
                          _.index + 1,
                          ". ",
                          _.category.replace("_", " ")
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.jsxs(
                      "span",
                      {
                        className: `inline-flex items-center gap-1 text-xs ${h ? "text-slate-600" : "text-slate-400"}`,
                        children: [
                          /* @__PURE__ */ f.jsx(Xt, { className: "w-3 h-3" }),
                          _.dateDisplay
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ f.jsx("h2", { className: "text-sm font-semibold mt-1.5", children: _.title }),
                  /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${h ? "text-slate-700" : "text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(
                          qt,
                          {
                            className: `w-3.5 h-3.5 shrink-0 ${h ? "text-sky-700" : "text-sky-400"}`
                          }
                        ),
                        /* @__PURE__ */ f.jsx("span", { className: "truncate", children: _.placeLabel }),
                        je(_.placeUri) && /* @__PURE__ */ f.jsx(
                          "a",
                          {
                            href: je(_.placeUri),
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: (j) => j.stopPropagation(),
                            className: "text-slate-400 hover:text-sky-500 ml-auto",
                            title: "Open Place URI",
                            children: /* @__PURE__ */ f.jsx(Zt, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    }
                  ),
                  _.actors.length > 0 && /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${h ? "text-slate-600" : "text-slate-400"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(Qt, { className: "w-3.5 h-3.5 shrink-0" }),
                        /* @__PURE__ */ f.jsx("span", { className: "truncate", children: _.actors.join(", ") })
                      ]
                    }
                  ),
                  _.description && /* @__PURE__ */ f.jsx(
                    "p",
                    {
                      className: `text-xs mt-1.5 leading-relaxed ${h ? "text-slate-600" : "text-slate-400"}`,
                      children: _.description
                    }
                  ),
                  _.images.length > 0 && /* @__PURE__ */ f.jsx("div", { className: "mt-2.5 flex gap-2 overflow-x-auto pb-1", children: _.images.map((j) => {
                    const C = vr(j.url, { maxWidth: 240 });
                    return /* @__PURE__ */ f.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: ($) => {
                          $.stopPropagation(), J(j.url);
                        },
                        className: `group relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${h ? "border-slate-300 hover:border-sky-600" : "border-slate-700 hover:border-sky-400"}`,
                        children: [
                          /* @__PURE__ */ f.jsx(
                            "img",
                            {
                              src: C,
                              alt: j.label,
                              loading: "lazy",
                              decoding: "async",
                              onError: ($) => {
                                $.currentTarget.src !== j.url && ($.currentTarget.src = j.url);
                              },
                              className: "w-full h-full object-cover group-hover:scale-105 transition"
                            }
                          ),
                          /* @__PURE__ */ f.jsx("span", { className: "absolute bottom-1 right-1 bg-slate-950/80 p-0.5 rounded text-slate-200", children: /* @__PURE__ */ f.jsx(er, { className: "w-2.5 h-2.5" }) })
                        ]
                      },
                      j.id
                    );
                  }) })
                );
              }),
              r.warnings.length > 0 && /* @__PURE__ */ f.jsxs(
                "div",
                {
                  ...w("warnings", s, c),
                  className: `${w("warnings", s, c).className} rounded-lg border p-2.5 text-[11px] space-y-1 ${h ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-amber-950/30 border-amber-500/30 text-amber-200"}`,
                  children: [
                    /* @__PURE__ */ f.jsx("div", { className: "font-semibold", children: "Spatial Resolution Notes" }),
                    r.warnings.map((_, I) => /* @__PURE__ */ f.jsxs("div", { children: [
                      "• ",
                      _
                    ] }, I))
                  ]
                }
              )
            ]
          }
        ),
        R && /* @__PURE__ */ f.jsx(
          "div",
          {
            ...w("lightbox", s, c),
            onClick: () => J(null),
            className: `${w("lightbox", s, c).className} fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-6 cursor-zoom-out`,
            children: /* @__PURE__ */ f.jsx(
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
}), jr = Yt(
  () => import("./GeoArcMap-CTxAxVRv.js").then((t) => ({ default: t.GeoArcMap }))
), Er = 1e3 / 30;
function Ar({
  record: t = st,
  allowInput: r = !0,
  theme: n = "dark",
  classNames: a,
  styles: l,
  mapStyles: m,
  mapAppearance: y
}) {
  const [s, c] = G(n), [i, p] = G(() => $e(t)), [u, b] = G(0), [N, T] = G(0), [F, O] = G(!1), [D, R] = G(!1), [J, U] = G(null), h = lt(0), B = It(
    () => i.events.map((A, j) => mr(i.events, j)),
    [i.events]
  );
  de(() => {
    c(n);
  }, [n]), de(() => {
    const A = $e(t || st);
    h.current = 0, p(A), b(0), T(0), O(!1), U(null);
  }, [t]), de(() => {
    let A = !1;
    if (i.events.some((C) => !C.coordinates))
      return cr(i).then((C) => {
        !A && C !== i && p(C);
      }), () => {
        A = !0;
      };
  }, [i]), de(() => {
    if (!F || i.events.length < 2) return;
    let A, j = performance.now(), C = j, $ = 0, H = u, z = N;
    const te = (Z) => {
      const fe = Math.min(Z - j, 100);
      if (j = Z, $ += fe, Z - C >= Er) {
        if (C = Z, h.current > 0) {
          h.current = Math.max(0, h.current - $), $ = 0, A = requestAnimationFrame(te);
          return;
        }
        if (z += $ / B[H], $ = 0, z >= 1) {
          const pe = B[H];
          if (H += 1, b(H), z = 0, H >= i.events.length - 1) {
            T(z), O(!1);
            return;
          }
          pe > we && (h.current = ur);
        }
        T(z);
      }
      A = requestAnimationFrame(te);
    };
    return A = requestAnimationFrame(te), () => cancelAnimationFrame(A);
  }, [F, i.events.length, B]);
  const V = ye(async (A) => {
    R(!0), U(null);
    try {
      const j = await yr(A), C = $e(j);
      return h.current = 0, p(C), b(0), T(0), O(!1), U(null), !0;
    } catch (j) {
      return U(j instanceof Error ? j.message : "Unable to parse Linked Art input"), !1;
    } finally {
      R(!1);
    }
  }, []), K = ye((A) => {
    h.current = 0, O(!1), b(A), T(0);
  }, []), q = ye(() => {
    h.current = 0, O(!1), b(0), T(0);
  }, []), _ = ye(() => {
    if (!(i.events.length < 2)) {
      if (F) {
        O(!1);
        return;
      }
      u >= i.events.length - 1 && (h.current = 0, b(0), T(0)), O(!0);
    }
  }, [u, F, i.events.length]), I = s === "light";
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      ...w("root", a, l),
      className: `${w("root", a, l).className} w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${I ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"}`,
      "data-theme": s,
      children: [
        /* @__PURE__ */ f.jsx(
          wr,
          {
            trail: i,
            activeLegIndex: u,
            isPlaying: F,
            isLoading: D,
            allowInput: r,
            theme: s,
            classNames: a,
            styles: l,
            onToggleTheme: () => c((A) => A === "dark" ? "light" : "dark"),
            onTogglePlay: _,
            onReset: q,
            onSelectStep: K,
            onLoadInput: V
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
                      className: `w-full h-full flex items-center justify-center text-xs ${I ? "bg-slate-100 text-slate-600" : "bg-slate-950 text-slate-400"}`,
                      children: "Loading map engine..."
                    }
                  ),
                  children: /* @__PURE__ */ f.jsx(
                    jr,
                    {
                      events: i.events,
                      activeLegIndex: u,
                      legProgress: N,
                      isPlaying: F,
                      onSelectEvent: K,
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
  Ar as A,
  w as c,
  vr as g,
  f as j,
  je as s
};
