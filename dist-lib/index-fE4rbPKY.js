import Ce, { useState as B, useRef as Lt, useEffect as ce, createElement as Ft, useCallback as ge, Suspense as Dt, lazy as Mt } from "react";
import { Moon as Ut, Sun as It, FileJson as Wt, Loader2 as Yt, Pause as Bt, Play as Gt, RotateCcw as Jt, Calendar as Vt, MapPin as Kt, ExternalLink as zt, Users as Ht, Image as Xt } from "lucide-react";
var me = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Zt() {
  if (qe) return ie;
  qe = 1;
  var t = Ce, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(s, d, n) {
    var p, l = {}, m = null, $ = null;
    n !== void 0 && (m = "" + n), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && ($ = d.ref);
    for (p in d) i.call(d, p) && !g.hasOwnProperty(p) && (l[p] = d[p]);
    if (s && s.defaultProps) for (p in d = s.defaultProps, d) l[p] === void 0 && (l[p] = d[p]);
    return { $$typeof: r, type: s, key: m, ref: $, props: l, _owner: c.current };
  }
  return ie.Fragment = a, ie.jsx = y, ie.jsxs = y, ie;
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
var Qe;
function qt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Ce, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), A = Symbol.iterator, D = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = A && e[A] || e[D];
      return typeof o == "function" ? o : null;
    }
    var U = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
          u[h - 1] = arguments[h];
        G("error", e, u);
      }
    }
    function G(e, o, u) {
      {
        var h = U.ReactDebugCurrentFrame, j = h.getStackAddendum();
        j !== "" && (o += "%s", u = u.concat([j]));
        var k = u.map(function(x) {
          return String(x);
        });
        k.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, k);
      }
    }
    var Y = !1, _ = !1, J = !1, V = !1, K = !1, z;
    z = Symbol.for("react.module.reference");
    function b(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === g || K || e === c || e === n || e === p || V || e === $ || Y || _ || J || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === l || e.$$typeof === y || e.$$typeof === s || e.$$typeof === d || // This needs to include all possible module reference object
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
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case g:
          return "Profiler";
        case c:
          return "StrictMode";
        case n:
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
          case l:
            var h = e.displayName || null;
            return h !== null ? h : R(e.type) || "Memo";
          case m: {
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
    var M = Object.assign, O = 0, ne, X, ue, Oe, $e, Ne, Le;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function lt() {
      {
        if (O === 0) {
          ne = console.log, X = console.info, ue = console.warn, Oe = console.error, $e = console.group, Ne = console.groupCollapsed, Le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
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
    function ct() {
      {
        if (O--, O === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: ne
            }),
            info: M({}, e, {
              value: X
            }),
            warn: M({}, e, {
              value: ue
            }),
            error: M({}, e, {
              value: Oe
            }),
            group: M({}, e, {
              value: $e
            }),
            groupCollapsed: M({}, e, {
              value: Ne
            }),
            groupEnd: M({}, e, {
              value: Le
            })
          });
        }
        O < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = U.ReactCurrentDispatcher, ve;
    function de(e, o, u) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (j) {
            var h = j.stack.trim().match(/\n( *(at )?)/);
            ve = h && h[1] || "";
          }
        return `
` + ve + e;
      }
    }
    var xe = !1, fe;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new ut();
    }
    function De(e, o) {
      if (!e || xe)
        return "";
      {
        var u = fe.get(e);
        if (u !== void 0)
          return u;
      }
      var h;
      xe = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = _e.current, _e.current = null, lt();
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
                    var I = `
` + v[S].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && fe.set(e, I), I;
                  }
                while (S >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        xe = !1, _e.current = k, ct(), Error.prepareStackTrace = j;
      }
      var ee = e ? e.displayName || e.name : "", Z = ee ? de(ee) : "";
      return typeof e == "function" && fe.set(e, Z), Z;
    }
    function dt(e, o, u) {
      return De(e, !1);
    }
    function ft(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function pe(e, o, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return De(e, ft(e));
      if (typeof e == "string")
        return de(e);
      switch (e) {
        case n:
          return de("Suspense");
        case p:
          return de("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return dt(e.render);
          case l:
            return pe(e.type, o, u);
          case m: {
            var h = e, j = h._payload, k = h._init;
            try {
              return pe(k(j), o, u);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, Me = {}, Ue = U.ReactDebugCurrentFrame;
    function be(e) {
      if (e) {
        var o = e._owner, u = pe(e.type, e._source, o ? o.type : null);
        Ue.setExtraStackFrame(u);
      } else
        Ue.setExtraStackFrame(null);
    }
    function pt(e, o, u, h, j) {
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
    var bt = Array.isArray;
    function we(e) {
      return bt(e);
    }
    function gt(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, u = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function mt(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function We(e) {
      if (mt(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Ie(e);
    }
    var Ye = U.ReactCurrentOwner, ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Be, Ge;
    function yt(e) {
      if (ae.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function _t(e) {
      if (ae.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function vt(e, o) {
      typeof e.ref == "string" && Ye.current;
    }
    function xt(e, o) {
      {
        var u = function() {
          Be || (Be = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function wt(e, o) {
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
    var jt = function(e, o, u, h, j, k, x) {
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
    function kt(e, o, u, h, j) {
      {
        var k, x = {}, v = null, L = null;
        u !== void 0 && (We(u), v = "" + u), _t(o) && (We(o.key), v = "" + o.key), yt(o) && (L = o.ref, vt(o, j));
        for (k in o)
          ae.call(o, k) && !ht.hasOwnProperty(k) && (x[k] = o[k]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (k in S)
            x[k] === void 0 && (x[k] = S[k]);
        }
        if (v || L) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && xt(x, T), L && wt(x, T);
        }
        return jt(e, v, L, j, h, Ye.current, x);
      }
    }
    var je = U.ReactCurrentOwner, Je = U.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var o = e._owner, u = pe(e.type, e._source, o ? o.type : null);
        Je.setExtraStackFrame(u);
      } else
        Je.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ve() {
      {
        if (je.current) {
          var e = R(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Et(e) {
      return "";
    }
    var Ke = {};
    function Rt(e) {
      {
        var o = Ve();
        if (!o) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (o = `

Check the top-level render call using <` + u + ">.");
        }
        return o;
      }
    }
    function ze(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Rt(o);
        if (Ke[u])
          return;
        Ke[u] = !0;
        var h = "";
        e && e._owner && e._owner !== je.current && (h = " It was passed a child from " + R(e._owner.type) + "."), Q(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, h), Q(null);
      }
    }
    function He(e, o) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var u = 0; u < e.length; u++) {
            var h = e[u];
            Ee(h) && ze(h, o);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var j = C(e);
          if (typeof j == "function" && j !== e.entries)
            for (var k = j.call(e), x; !(x = k.next()).done; )
              Ee(x.value) && ze(x.value, o);
        }
      }
    }
    function St(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var u;
        if (typeof o == "function")
          u = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === l))
          u = o.propTypes;
        else
          return;
        if (u) {
          var h = R(o);
          pt(u, e.props, "prop", h, e);
        } else if (o.PropTypes !== void 0 && !ke) {
          ke = !0;
          var j = R(o);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(e) {
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
    var Xe = {};
    function Ze(e, o, u, h, j, k) {
      {
        var x = b(e);
        if (!x) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Et();
          L ? v += L : v += Ve();
          var S;
          e === null ? S = "null" : we(e) ? S = "array" : e !== void 0 && e.$$typeof === r ? (S = "<" + (R(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, v);
        }
        var T = kt(e, o, u, j, k);
        if (T == null)
          return T;
        if (x) {
          var I = o.children;
          if (I !== void 0)
            if (h)
              if (we(I)) {
                for (var ee = 0; ee < I.length; ee++)
                  He(I[ee], e);
                Object.freeze && Object.freeze(I);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(I, e);
        }
        if (ae.call(o, "key")) {
          var Z = R(e), F = Object.keys(o).filter(function(Nt) {
            return Nt !== "key";
          }), Re = F.length > 0 ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xe[Z + Re]) {
            var $t = F.length > 0 ? "{" + F.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Re, Z, $t, Z), Xe[Z + Re] = !0;
          }
        }
        return e === i ? At(T) : St(T), T;
      }
    }
    function Tt(e, o, u) {
      return Ze(e, o, u, !0);
    }
    function Pt(e, o, u) {
      return Ze(e, o, u, !1);
    }
    var Ct = Pt, Ot = Tt;
    oe.Fragment = i, oe.jsx = Ct, oe.jsxs = Ot;
  })()), oe;
}
var et;
function Qt() {
  return et || (et = 1, process.env.NODE_ENV === "production" ? me.exports = Zt() : me.exports = qt()), me.exports;
}
var f = Qt();
function er(t) {
  if (!t || typeof t != "string") return null;
  const r = t.replace(/^<[^>]+>\s*/i, "").trim(), a = r.match(/^POINT\s*\(\s*([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)\s*\)$/i);
  if (a) {
    const g = parseFloat(a[1]), y = parseFloat(a[2]);
    if (Number.isFinite(g) && Number.isFinite(y))
      return { centroid: [g, y] };
  }
  const i = r.match(/^POLYGON\s*\(\((.+)\)\)$/i);
  if (i) {
    const g = i[1].split(/\)\s*,\s*\(/).map(
      (y) => y.split(",").map((s) => {
        const [d, n] = s.trim().split(/\s+/);
        return [parseFloat(d), parseFloat(n)];
      }).filter(([s, d]) => Number.isFinite(s) && Number.isFinite(d))
    );
    if (g[0] && g[0].length > 0)
      return { centroid: tt(g[0]), polygon: g };
  }
  const c = r.match(/^MULTIPOLYGON\s*\(\(\((.+)\)\)\)$/i);
  if (c) {
    const y = c[1].split(/\)\)\s*,\s*\(\(/)[0].split(",").map((s) => {
      const [d, n] = s.trim().split(/\s+/);
      return [parseFloat(d), parseFloat(n)];
    }).filter(([s, d]) => Number.isFinite(s) && Number.isFinite(d));
    if (y.length > 0)
      return { centroid: tt(y), polygon: [y] };
  }
  return null;
}
function tt(t) {
  let r = 0, a = 0;
  const i = t.length;
  for (const [c, g] of t)
    r += c, a += g;
  return [r / i, a / i];
}
const Se = {
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
}, it = "linked-art-geotrail:geocode-cache:v1", he = /* @__PURE__ */ new Set();
let rt = Promise.resolve(), nt = 0;
function Pe() {
  try {
    return JSON.parse(localStorage.getItem(it) || "{}");
  } catch {
    return {};
  }
}
function tr(t) {
  try {
    localStorage.setItem(it, JSON.stringify(t));
  } catch {
  }
}
function ot(t) {
  if (!t || typeof t != "string") return "";
  let r = t.replace(/^Storage\s*[—-]\s*/i, "").trim();
  const a = r.match(/\bat\s+([^,]+(?:,\s*[^,]+){0,2})$/i);
  if (a && a[1])
    r = a[1].trim();
  else if (r.length > 65) {
    const i = r.split(",").map((c) => c.trim()).filter(Boolean);
    i.length >= 2 ? r = i.slice(-2).join(", ") : r = i[0].slice(0, 65);
  }
  return r;
}
function st(t) {
  if (!t || typeof t != "string") return null;
  const r = [t, ot(t)].map((i) => i.trim().toLowerCase()).filter(Boolean), a = Pe();
  for (const i of r) {
    if (Se[i])
      return Se[i];
    if (Array.isArray(a[i]) && a[i].length === 2)
      return a[i];
  }
  for (const i of r)
    for (const [c, g] of Object.entries(Se))
      if (i.includes(c))
        return g;
  return null;
}
function rr(t) {
  const r = rt.then(async () => {
    const a = Date.now() - nt;
    return a < 1100 && await new Promise((i) => setTimeout(i, 1100 - a)), nt = Date.now(), t();
  });
  return rt = r.catch(() => null), r;
}
async function nr(t) {
  const r = st(t);
  if (r) return r;
  const a = ot(t), i = a.split(",").map((y) => y.trim()).filter(Boolean), c = i.length > 1 ? i[i.length - 1] : a, g = a.toLowerCase();
  return !c || he.has(g) ? null : rr(async () => {
    const y = Pe();
    if (Array.isArray(y[g]) && y[g].length === 2)
      return y[g];
    try {
      const s = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        c
      )}&count=1&language=en&format=json`, d = await fetch(s);
      if (!d.ok)
        return he.add(g), null;
      const n = await d.json(), p = Array.isArray(n == null ? void 0 : n.results) ? n.results[0] : null;
      if (p && Number.isFinite(p.longitude) && Number.isFinite(p.latitude)) {
        const l = [p.longitude, p.latitude], m = Pe();
        return m[g] = l, tr(m), l;
      }
      he.add(g);
    } catch {
      he.add(g);
    }
    return null;
  });
}
function W(t, r = "Untitled") {
  if (!t) return r;
  if (typeof t._label == "string" && t._label.trim()) return t._label.trim();
  if (Array.isArray(t.identified_by)) {
    const a = t.identified_by.find(
      (i) => i.type === "Name" && Array.isArray(i.classified_as) && i.classified_as.some((c) => String(c.id).includes("300404670"))
    ) || t.identified_by.find((i) => i.type === "Name");
    if (a != null && a.content) return String(a.content);
  }
  return r;
}
function H(t, r) {
  return Array.isArray(t == null ? void 0 : t.classified_as) && t.classified_as.some(
    (a) => String(a.id || "").includes(r) || String(a._label || "").toLowerCase().includes(r.toLowerCase())
  );
}
function q(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return;
  const r = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && H(a, "300080091")
  ) || t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && (H(a, "300444172") || H(a, "300444174"))
  );
  return r == null ? void 0 : r.content;
}
function se(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return null;
  const r = t.referred_to_by.find(
    (i) => i.type === "LinguisticObject" && typeof i.content == "string" && (H(i, "300435448") || H(i, "300444175") || H(i, "place"))
  );
  if (r != null && r.content)
    return r.content.trim();
  const a = t.referred_to_by.find(
    (i) => i.type === "LinguisticObject" && typeof i.content == "string" && H(i, "300444172")
  );
  if (a != null && a.content) {
    const i = a.content.match(/\b(London|Paris|New York|Rome|Athens|Los Angeles|Malibu|Amsterdam|Berlin)\b/i);
    if (i) return i[1];
  }
  return null;
}
function ar(t) {
  if (!t) return { display: "Date unknown", sortTs: Number.MAX_SAFE_INTEGER };
  let r = typeof t._label == "string" ? t._label.trim() : "";
  if (!r && Array.isArray(t.identified_by)) {
    const y = t.identified_by.find((s) => s.type === "Name" && s.content);
    y != null && y.content && (r = String(y.content));
  }
  const a = t.begin_of_the_begin || t.end_of_the_begin, i = t.end_of_the_end || t.begin_of_the_end;
  let c = Number.MAX_SAFE_INTEGER;
  const g = a || i;
  if (g) {
    const y = String(g).match(/^([+-]?\d{1,6})/);
    y && (c = parseInt(y[1], 10));
  } else if (r) {
    const y = r.match(/([+-]?\d{4})/);
    y && (c = parseInt(y[1], 10));
  }
  return r ? { display: r, sortTs: c } : a && i && a !== i ? { display: `${String(a).slice(0, 10)} – ${String(i).slice(0, 10)}`, sortTs: c } : a ? { display: String(a).slice(0, 10), sortTs: c } : i ? { display: String(i).slice(0, 10), sortTs: c } : { display: "Date unknown", sortTs: c };
}
function ye(t) {
  return typeof t != "string" || /rightsstatements\.org\/files\/icons/i.test(t) ? !1 : /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(t) || /\/iiif\/image\//i.test(t);
}
function re(t, r) {
  const a = [];
  if (!t) return a;
  const i = (c) => {
    var y;
    if (!c || typeof c != "object") return;
    const g = W(c, "Attached image");
    if (Array.isArray(c.access_point))
      for (const s of c.access_point)
        s != null && s.id && ye(s.id) && a.push({ id: s.id, url: s.id, label: g, source: r });
    if (ye(c.id) && a.push({ id: c.id, url: c.id, label: g, source: r }), Array.isArray(c.digitally_shown_by))
      for (const s of c.digitally_shown_by) {
        const d = W(s, g), n = Array.isArray(s.conforms_to) ? (y = s.conforms_to.find((p) => String(p.id).includes("iiif.io/api/image"))) == null ? void 0 : y.id : void 0;
        if (Array.isArray(s.access_point))
          for (const p of s.access_point)
            p != null && p.id && ye(p.id) && a.push({ id: p.id, url: p.id, label: d, iiifService: n, source: r });
        else ye(s.id) && a.push({ id: s.id, url: s.id, label: d, iiifService: n, source: r });
      }
  };
  return Array.isArray(t.representation) && t.representation.forEach(i), Array.isArray(t.digitally_shown_by) && i(t), Array.from(new Map(a.map((c) => [c.url, c])).values());
}
function le(t) {
  const r = [], a = (i) => {
    if (Array.isArray(i))
      for (const c of i) {
        const g = W(c, "");
        g && g.toLowerCase() !== "unknown" && r.push(g);
      }
  };
  return a(t == null ? void 0 : t.carried_out_by), a(t == null ? void 0 : t.transferred_title_from), a(t == null ? void 0 : t.transferred_title_to), Array.from(new Set(r));
}
function te(t) {
  const r = Array.isArray(t) ? t[0] : t;
  if (!r || typeof r != "object") return null;
  let a = r.defined_by;
  if (!a && Array.isArray(r.part_of)) {
    const i = r.part_of.find((c) => typeof (c == null ? void 0 : c.defined_by) == "string");
    i && (a = i.defined_by);
  }
  return {
    label: W(r, "Unnamed Place"),
    uri: r.id,
    wkt: a,
    isStorage: H(r, "300004465"),
    images: re(r, "place")
  };
}
function Ae(t) {
  const r = [], a = W(t, "Linked Art Object"), i = re(t, "object"), c = [], g = ({
    id: n,
    title: p,
    category: l,
    timespan: m,
    placeLabel: $,
    placeUri: A,
    wkt: D,
    actors: C = [],
    description: U,
    images: E = [],
    defaultOrder: G,
    precisionNote: Y
  }) => {
    const _ = er(D), J = _ ? _.centroid : st($), { display: V, sortTs: K } = ar(m);
    !_ && Y && r.push(Y), c.push({
      id: n,
      title: p,
      category: l,
      dateDisplay: V,
      sortTimestamp: K === Number.MAX_SAFE_INTEGER ? G : K,
      placeLabel: $,
      placeUri: A,
      coordinates: J,
      // May be null until async geocoding completes
      polygon: _ == null ? void 0 : _.polygon,
      isApproximate: !_,
      actors: C,
      description: U,
      images: E
    });
  };
  if (t.produced_by) {
    const n = te(t.produced_by.took_place_at), p = se(t.produced_by) || se(t), l = (n == null ? void 0 : n.label) || p;
    l && g({
      id: t.produced_by.id || "production-0",
      title: W(t.produced_by, "Production / Creation"),
      category: "production",
      timespan: t.produced_by.timespan,
      placeLabel: l,
      placeUri: n == null ? void 0 : n.uri,
      wkt: n == null ? void 0 : n.wkt,
      actors: le(t.produced_by),
      description: q(t.produced_by),
      images: [...re(t.produced_by, "event"), ...(n == null ? void 0 : n.images) || []],
      defaultOrder: -1e5,
      precisionNote: n != null && n.wkt ? void 0 : `Production place "${l}" resolved from text statement (no WKT defined_by).`
    });
  }
  if ((Array.isArray(t.encountered) ? t.encountered : t.found_by ? [t.found_by] : []).forEach((n, p) => {
    const l = te(n.took_place_at), m = (l == null ? void 0 : l.label) || se(n);
    m && g({
      id: n.id || `discovery-${p}`,
      title: W(n, "Archaeological Encounter / Findspot"),
      category: "discovery",
      timespan: n.timespan,
      placeLabel: m,
      placeUri: l == null ? void 0 : l.uri,
      wkt: l == null ? void 0 : l.wkt,
      actors: le(n),
      description: q(n),
      images: [...re(n, "event"), ...(l == null ? void 0 : l.images) || []],
      defaultOrder: -5e4 + p
    });
  }), Array.isArray(t.changed_ownership_through) && t.changed_ownership_through.forEach((n, p) => {
    const l = Array.isArray(n.part_of) ? n.part_of[0] : n.part_of, m = te(n.took_place_at) || te(l == null ? void 0 : l.took_place_at), $ = se(n) || se(l), A = (m == null ? void 0 : m.label) || $;
    A && g({
      id: n.id || `provenance-${p}`,
      title: W(n, `Transfer of Custody #${p + 1}`),
      category: "provenance",
      timespan: n.timespan || (l == null ? void 0 : l.timespan),
      placeLabel: A,
      placeUri: m == null ? void 0 : m.uri,
      wkt: m == null ? void 0 : m.wkt,
      actors: [...le(n), ...le(l)],
      description: q(n) || q(l),
      images: [...re(n, "event"), ...(m == null ? void 0 : m.images) || []],
      defaultOrder: 1e3 + p,
      precisionNote: m != null && m.wkt ? void 0 : `Provenance location "${A}" resolved from text statement (no WKT defined_by).`
    });
  }), [
    ...Array.isArray(t.used_for) ? t.used_for : [],
    ...Array.isArray(t.member_of) ? t.member_of.flatMap((n) => Array.isArray(n.used_for) ? n.used_for : []) : []
  ].forEach((n, p) => {
    const l = te(n.took_place_at), m = (l == null ? void 0 : l.label) || W(n, "");
    m && g({
      id: n.id || `exhibition-${p}`,
      title: W(n, `Exhibition #${p + 1}`),
      category: "exhibition",
      timespan: n.timespan,
      placeLabel: m,
      placeUri: l == null ? void 0 : l.uri,
      wkt: l == null ? void 0 : l.wkt,
      actors: le(n),
      description: q(n),
      images: [...re(n, "event"), ...(l == null ? void 0 : l.images) || []],
      defaultOrder: 2e3 + p,
      precisionNote: l != null && l.wkt ? void 0 : `Exhibition venue "${m}" geocoded from activity label (no WKT defined_by).`
    });
  }), t.current_location) {
    const n = te(t.current_location), p = Array.isArray(t.current_owner) ? W(t.current_owner[0], "") : "";
    if (n) {
      const l = !n.wkt && n.isStorage && p ? `${n.label} — ${p}` : n.label;
      g({
        id: `${t.id || "obj"}-current-location`,
        title: "Current Repository Location",
        category: "current_location",
        timespan: { _label: "Present" },
        placeLabel: l,
        placeUri: n.uri,
        wkt: n.wkt,
        actors: Array.isArray(t.current_owner) ? t.current_owner.map((m) => W(m)) : [],
        description: q(t.current_location),
        images: [...n.images, ...i],
        defaultOrder: 999999,
        precisionNote: n.wkt ? void 0 : `Current location "${l}" has no WKT defined_by; resolved via institution/place name.`
      });
    }
  }
  const d = c.sort((n, p) => n.sortTimestamp - p.sortTimestamp).map((n, p) => ({
    ...n,
    index: p,
    images: n.images.length > 0 ? n.images : i.slice(0, 1)
  }));
  return {
    objectId: t.id || "urn:linked-art:object",
    objectLabel: a,
    objectSummary: q(t),
    heroImage: i[0],
    events: d,
    warnings: Array.from(new Set(r))
  };
}
async function ir(t) {
  let r = !1;
  const a = await Promise.all(
    t.events.map(async (i) => {
      if (Array.isArray(i.coordinates) && i.coordinates.length === 2)
        return i;
      const c = await nr(i.placeLabel);
      return c ? (r = !0, { ...i, coordinates: c }) : i;
    })
  );
  return r ? { ...t, events: a } : t;
}
const or = [
  (t) => `https://corsproxy.io/?${encodeURIComponent(t)}`,
  (t) => `https://api.allorigins.win/raw?url=${encodeURIComponent(t)}`
];
async function sr(t) {
  const r = await fetch(t, {
    headers: {
      Accept: 'application/ld+json; profile="https://linked.art/ns/v1/linked-art.json", application/ld+json, application/json'
    }
  });
  if (!r.ok)
    throw new Error(`HTTP ${r.status} (${r.statusText})`);
  return r.json();
}
async function lr(t) {
  let r = null;
  for (const a of or)
    try {
      const i = await fetch(a(t));
      if (!i.ok) {
        r = new Error(`Proxy HTTP ${i.status}`);
        continue;
      }
      return await i.json();
    } catch (i) {
      r = i;
    }
  throw r || new Error("Unable to fetch URL directly or via CORS proxy");
}
async function cr(t) {
  const r = String(t || "").trim();
  if (!r)
    throw new Error("Enter a Linked Art URL or paste JSON-LD.");
  if (/^https?:\/\//i.test(r))
    try {
      return await sr(r);
    } catch (a) {
      try {
        return await lr(r);
      } catch {
        throw new Error(
          `Could not fetch "${r}" (${a instanceof Error ? a.message : "CORS or network error"}). Paste the JSON-LD directly instead.`
        );
      }
    }
  return JSON.parse(r);
}
const at = {
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
}, Te = /* @__PURE__ */ new Map();
function ur(t, r = 400) {
  if (!t || typeof t != "string") return t;
  const a = /(\/iiif\/(?:image\/)?[^/]+)\/([^/]+)\/((?:full|max|pct:\d+(?:\.\d+)?|!?\d*,\d*))\/([^/]+)\/([^/.]+)\.([a-zA-Z0-9]+)(\?.*)?$/;
  return a.test(t) ? t.replace(
    a,
    (i, c, g, y, s, d, n, p = "") => `${c}/${y || "full"}/!${r},${r}/${s || "0"}/${d || "default"}.jpg${p}`
  ) : /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i.test(t) ? t.replace(
    /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i,
    `/full/!${r},${r}/0/default.jpg`
  ) : t;
}
function dr(t, { maxWidth: r = 480, quality: a = 0.72 } = {}) {
  if (!t || typeof t != "string") return "";
  const i = `${t}::${r}::${a}`;
  if (Te.has(i))
    return Te.get(i);
  const c = ur(t, r);
  return Te.set(i, c), c;
}
function w(t, r, a) {
  return {
    className: ["geotrail-" + t, r == null ? void 0 : r[t]].filter(Boolean).join(" "),
    style: a == null ? void 0 : a[t]
  };
}
const fr = {
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
}, pr = Ce.memo(function({
  trail: r,
  activeLegIndex: a,
  isPlaying: i,
  isLoading: c,
  allowInput: g = !0,
  theme: y = "dark",
  classNames: s,
  styles: d,
  onToggleTheme: n,
  onTogglePlay: p,
  onReset: l,
  onSelectStep: m,
  onLoadInput: $
}) {
  var z;
  const [A, D] = B(!1), [C, U] = B(""), [E, G] = B(null), Y = Lt([]), _ = y === "light", J = fr[_ ? "light" : "dark"];
  ce(() => {
    var b;
    (b = Y.current[a]) == null || b.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [a, r.events.length]);
  const V = async (b) => {
    if (b && b.preventDefault(), !C.trim() || c) return;
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
                  n && /* @__PURE__ */ f.jsx(
                    "button",
                    {
                      ...w("themeButton", s, d),
                      type: "button",
                      onClick: n,
                      className: `${w("themeButton", s, d).className} inline-flex items-center justify-center w-8 h-8 rounded-lg border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      title: _ ? "Switch to dark mode" : "Switch to light mode",
                      children: _ ? /* @__PURE__ */ f.jsx(Ut, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ f.jsx(It, { className: "w-3.5 h-3.5 text-amber-400" })
                    }
                  ),
                  g && /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      ...w("loadButton", s, d),
                      type: "button",
                      onClick: () => D((b) => !b),
                      className: `${w("loadButton", s, d).className} inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${_ ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                      children: [
                        /* @__PURE__ */ f.jsx(Wt, { className: `w-3.5 h-3.5 ${_ ? "text-sky-700" : "text-sky-400"}` }),
                        A ? "Close" : "Load URL / JSON"
                      ]
                    }
                  )
                ] })
              ] }),
              r.objectSummary && (!A || !g) && /* @__PURE__ */ f.jsx("p", { className: `text-xs mt-2 line-clamp-2 ${_ ? "text-slate-600" : "text-slate-400"}`, children: r.objectSummary }),
              g && A && /* @__PURE__ */ f.jsxs(
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
                        value: C,
                        onChange: (b) => U(b.target.value),
                        onKeyDown: K,
                        placeholder: "Paste a Linked Art URL (https://...) or JSON-LD payload...",
                        rows: 4,
                        className: `${w("loadInput", s, d).className} w-full rounded-lg border p-2.5 text-xs font-mono focus:outline-none focus:border-sky-500 ${_ ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-slate-950 border-slate-700 text-slate-200"}`
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "button",
                      {
                        type: "submit",
                        disabled: c,
                        className: "w-full inline-flex items-center justify-center gap-2 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-xs font-semibold text-white transition",
                        children: c ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                          /* @__PURE__ */ f.jsx(Yt, { className: "w-3.5 h-3.5 animate-spin" }),
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
                  title: i ? "Pause animation" : "Play trajectory",
                  children: i ? /* @__PURE__ */ f.jsx(Bt, { className: "w-4 h-4" }) : /* @__PURE__ */ f.jsx(Gt, { className: "w-4 h-4 ml-0.5" })
                }
              ),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  ...w("resetButton", s, d),
                  type: "button",
                  onClick: l,
                  className: `${w("resetButton", s, d).className} inline-flex items-center justify-center w-8 h-8 rounded-full transition ${_ ? "bg-slate-200 hover:bg-slate-300 text-slate-700" : "bg-slate-800 hover:bg-slate-700 text-slate-300"}`,
                  title: "Restart from origin",
                  children: /* @__PURE__ */ f.jsx(Jt, { className: "w-3.5 h-3.5" })
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
                    value: a,
                    onChange: (b) => m(Number(b.target.value)),
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
                        a + 1,
                        " of ",
                        r.events.length
                      ] }),
                      /* @__PURE__ */ f.jsx("span", { children: (z = r.events[a]) == null ? void 0 : z.dateDisplay })
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
                const P = b.index === a, N = b.index <= a;
                return /* @__PURE__ */ Ft(
                  "div",
                  {
                    ...w("eventCard", s, d),
                    "data-active": P,
                    "data-visited": N,
                    "data-category": b.category,
                    ref: (R) => {
                      Y.current[b.index] = R;
                    },
                    key: b.id,
                    onClick: () => m(b.index),
                    className: `${w("eventCard", s, d).className} rounded-xl p-3 border cursor-pointer transition ${P ? _ ? "bg-sky-50/70 border-sky-500 shadow-sm" : "bg-slate-800/90 border-sky-500/70 shadow-lg" : N ? _ ? "bg-white border-slate-200 hover:border-slate-300" : "bg-slate-900 border-slate-700/80 hover:border-slate-600" : _ ? "bg-slate-50/70 border-slate-200/80 opacity-80 hover:opacity-100" : "bg-slate-900/40 border-slate-800/70 opacity-70 hover:opacity-100"}`
                  },
                  /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ f.jsxs(
                      "span",
                      {
                        ...w("eventBadge", s, d),
                        className: `${w("eventBadge", s, d).className} text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${J[b.category] || J.other}`,
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
                          /* @__PURE__ */ f.jsx(Vt, { className: "w-3 h-3" }),
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
                          Kt,
                          {
                            className: `w-3.5 h-3.5 shrink-0 ${_ ? "text-sky-700" : "text-sky-400"}`
                          }
                        ),
                        /* @__PURE__ */ f.jsx("span", { className: "truncate", children: b.placeLabel }),
                        b.placeUri && /* @__PURE__ */ f.jsx(
                          "a",
                          {
                            href: b.placeUri,
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: (R) => R.stopPropagation(),
                            className: "text-slate-400 hover:text-sky-500 ml-auto",
                            title: "Open Place URI",
                            children: /* @__PURE__ */ f.jsx(zt, { className: "w-3 h-3" })
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
                        /* @__PURE__ */ f.jsx(Ht, { className: "w-3.5 h-3.5 shrink-0" }),
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
                    const M = dr(R.url, { maxWidth: 240 });
                    return /* @__PURE__ */ f.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: (O) => {
                          O.stopPropagation(), G(R.url);
                        },
                        className: `group relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${_ ? "border-slate-300 hover:border-sky-600" : "border-slate-700 hover:border-sky-400"}`,
                        children: [
                          /* @__PURE__ */ f.jsx(
                            "img",
                            {
                              src: M,
                              alt: R.label,
                              loading: "lazy",
                              decoding: "async",
                              onError: (O) => {
                                O.currentTarget.src !== R.url && (O.currentTarget.src = R.url);
                              },
                              className: "w-full h-full object-cover group-hover:scale-105 transition"
                            }
                          ),
                          /* @__PURE__ */ f.jsx("span", { className: "absolute bottom-1 right-1 bg-slate-950/80 p-0.5 rounded text-slate-200", children: /* @__PURE__ */ f.jsx(Xt, { className: "w-2.5 h-2.5" }) })
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
            onClick: () => G(null),
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
}), br = Mt(
  () => import("./GeoArcMap-CfqP3qG4.js").then((t) => ({ default: t.GeoArcMap }))
), gr = 4500, mr = 1e3 / 30;
function _r({
  record: t = at,
  allowInput: r = !0,
  theme: a = "dark",
  classNames: i,
  styles: c,
  mapStyles: g,
  mapAppearance: y
}) {
  const [s, d] = B(a), [n, p] = B(() => Ae(t)), [l, m] = B(0), [$, A] = B(0), [D, C] = B(!1), [U, E] = B(!1), [G, Y] = B(null);
  ce(() => {
    d(a);
  }, [a]), ce(() => {
    const b = Ae(t || at);
    p(b), m(0), A(0), C(!1), Y(null);
  }, [t]), ce(() => {
    let b = !1;
    if (n.events.some((N) => !N.coordinates))
      return ir(n).then((N) => {
        !b && N !== n && p(N);
      }), () => {
        b = !0;
      };
  }, [n]), ce(() => {
    if (!D || n.events.length < 2) return;
    let b, P = performance.now(), N = P, R = 0, M = l, O = $;
    const ne = (X) => {
      const ue = Math.min(X - P, 100);
      if (P = X, R += ue, X - N >= mr) {
        if (N = X, O += R / gr, R = 0, O >= 1 && (M += 1, m(M), O = 0, M >= n.events.length - 1)) {
          A(O), C(!1);
          return;
        }
        A(O);
      }
      b = requestAnimationFrame(ne);
    };
    return b = requestAnimationFrame(ne), () => cancelAnimationFrame(b);
  }, [D, n.events.length]);
  const _ = ge(async (b) => {
    E(!0);
    try {
      const P = await cr(b), N = Ae(P);
      return p(N), m(0), A(0), C(!1), Y(null), !0;
    } catch (P) {
      return Y(P instanceof Error ? P.message : "Unable to parse Linked Art input"), !1;
    } finally {
      E(!1);
    }
  }, []), J = ge((b) => {
    C(!1), m(b), A(0);
  }, []), V = ge(() => {
    C(!1), m(0), A(0);
  }, []), K = ge(() => {
    if (!(n.events.length < 2)) {
      if (D) {
        C(!1);
        return;
      }
      l >= n.events.length - 1 && (m(0), A(0)), C(!0);
    }
  }, [l, D, n.events.length]), z = s === "light";
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      ...w("root", i, c),
      className: `${w("root", i, c).className} w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${z ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"}`,
      "data-theme": s,
      children: [
        /* @__PURE__ */ f.jsx(
          pr,
          {
            trail: n,
            activeLegIndex: l,
            isPlaying: D,
            isLoading: U,
            allowInput: r,
            theme: s,
            classNames: i,
            styles: c,
            onToggleTheme: () => d((b) => b === "dark" ? "light" : "dark"),
            onTogglePlay: K,
            onReset: V,
            onSelectStep: J,
            onLoadInput: _
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "main",
          {
            ...w("mapContainer", i, c),
            className: `${w("mapContainer", i, c).className} relative flex-1 h-[52vh] lg:h-full`,
            children: [
              G && /* @__PURE__ */ f.jsxs("div", { className: "absolute top-3 left-3 z-20 max-w-md bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs px-3 py-2 rounded-lg", children: [
                "Load Error: ",
                G
              ] }),
              /* @__PURE__ */ f.jsx(
                Dt,
                {
                  fallback: /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      className: `w-full h-full flex items-center justify-center text-xs ${z ? "bg-slate-100 text-slate-600" : "bg-slate-950 text-slate-400"}`,
                      children: "Loading map engine..."
                    }
                  ),
                  children: /* @__PURE__ */ f.jsx(
                    br,
                    {
                      events: n.events,
                      activeLegIndex: l,
                      legProgress: $,
                      isPlaying: D,
                      onSelectEvent: J,
                      theme: s,
                      classNames: i,
                      styles: c,
                      mapStyles: g,
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
  _r as A,
  w as c,
  dr as g,
  f as j
};
