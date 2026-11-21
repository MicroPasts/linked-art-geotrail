import Te, { useState as I, useRef as at, useEffect as le, useCallback as pe, Suspense as Lt, lazy as Ft } from "react";
import { Moon as Dt, Sun as Mt, FileJson as Ut, Loader2 as It, Pause as Wt, Play as Yt, RotateCcw as Gt, Calendar as Jt, MapPin as Vt, ExternalLink as Kt, Users as Bt, Image as zt } from "lucide-react";
var me = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Ht() {
  if (Ze) return ae;
  Ze = 1;
  var t = Te, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(b, y, i) {
    var d, o = {}, m = null, N = null;
    i !== void 0 && (m = "" + i), y.key !== void 0 && (m = "" + y.key), y.ref !== void 0 && (N = y.ref);
    for (d in y) n.call(y, d) && !f.hasOwnProperty(d) && (o[d] = y[d]);
    if (b && b.defaultProps) for (d in y = b.defaultProps, y) o[d] === void 0 && (o[d] = y[d]);
    return { $$typeof: r, type: b, key: m, ref: N, props: o, _owner: c.current };
  }
  return ae.Fragment = a, ae.jsx = h, ae.jsxs = h, ae;
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
var qe;
function Xt() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Te, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), b = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), i = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), P = Symbol.iterator, J = "@@iterator";
    function U(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = P && e[P] || e[J];
      return typeof s == "function" ? s : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), g = 1; g < s; g++)
          l[g - 1] = arguments[g];
        x("error", e, l);
      }
    }
    function x(e, s, l) {
      {
        var g = T.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (s += "%s", l = l.concat([w]));
        var j = l.map(function(v) {
          return String(v);
        });
        j.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var W = !1, L = !1, V = !1, k = !1, p = !1, A;
    A = Symbol.for("react.module.reference");
    function z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === f || p || e === c || e === i || e === d || k || e === N || W || L || V || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === o || e.$$typeof === h || e.$$typeof === b || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === A || e.getModuleId !== void 0));
    }
    function C(e, s, l) {
      var g = e.displayName;
      if (g)
        return g;
      var w = s.displayName || s.name || "";
      return w !== "" ? l + "(" + w + ")" : l;
    }
    function Y(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case f:
          return "Profiler";
        case c:
          return "StrictMode";
        case i:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var s = e;
            return Y(s) + ".Consumer";
          case h:
            var l = e;
            return Y(l._context) + ".Provider";
          case y:
            return C(e, e.render, "ForwardRef");
          case o:
            var g = e.displayName || null;
            return g !== null ? g : O(e.type) || "Memo";
          case m: {
            var w = e, j = w._payload, v = w._init;
            try {
              return O(v(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, K = 0, te, re, Pe, Ne, Ce, Oe, $e;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function lt() {
      {
        if (K === 0) {
          te = console.log, re = console.info, Pe = console.warn, Ne = console.error, Ce = console.group, Oe = console.groupCollapsed, $e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Le,
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
        K++;
      }
    }
    function ct() {
      {
        if (K--, K === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, e, {
              value: te
            }),
            info: G({}, e, {
              value: re
            }),
            warn: G({}, e, {
              value: Pe
            }),
            error: G({}, e, {
              value: Ne
            }),
            group: G({}, e, {
              value: Ce
            }),
            groupCollapsed: G({}, e, {
              value: Oe
            }),
            groupEnd: G({}, e, {
              value: $e
            })
          });
        }
        K < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = T.ReactCurrentDispatcher, ye;
    function ce(e, s, l) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            ye = g && g[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var _e = !1, ue;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new ut();
    }
    function Fe(e, s) {
      if (!e || _e)
        return "";
      {
        var l = ue.get(e);
        if (l !== void 0)
          return l;
      }
      var g;
      _e = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = he.current, he.current = null, lt();
      try {
        if (s) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (F) {
              g = F;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (F) {
              g = F;
            }
            e.call(v.prototype);
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
          for (var _ = F.stack.split(`
`), $ = g.stack.split(`
`), R = _.length - 1, S = $.length - 1; R >= 1 && S >= 0 && _[R] !== $[S]; )
            S--;
          for (; R >= 1 && S >= 0; R--, S--)
            if (_[R] !== $[S]) {
              if (R !== 1 || S !== 1)
                do
                  if (R--, S--, S < 0 || _[R] !== $[S]) {
                    var D = `
` + _[R].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ue.set(e, D), D;
                  }
                while (R >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        _e = !1, he.current = j, ct(), Error.prepareStackTrace = w;
      }
      var q = e ? e.displayName || e.name : "", H = q ? ce(q) : "";
      return typeof e == "function" && ue.set(e, H), H;
    }
    function dt(e, s, l) {
      return Fe(e, !1);
    }
    function ft(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function de(e, s, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fe(e, ft(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case i:
          return ce("Suspense");
        case d:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return dt(e.render);
          case o:
            return de(e.type, s, l);
          case m: {
            var g = e, w = g._payload, j = g._init;
            try {
              return de(j(w), s, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, De = {}, Me = T.ReactDebugCurrentFrame;
    function fe(e) {
      if (e) {
        var s = e._owner, l = de(e.type, e._source, s ? s.type : null);
        Me.setExtraStackFrame(l);
      } else
        Me.setExtraStackFrame(null);
    }
    function pt(e, s, l, g, w) {
      {
        var j = Function.call.bind(ne);
        for (var v in e)
          if (j(e, v)) {
            var _ = void 0;
            try {
              if (typeof e[v] != "function") {
                var $ = Error((g || "React class") + ": " + l + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              _ = e[v](s, v, g, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              _ = R;
            }
            _ && !(_ instanceof Error) && (fe(w), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", l, v, typeof _), fe(null)), _ instanceof Error && !(_.message in De) && (De[_.message] = !0, fe(w), E("Failed %s type: %s", l, _.message), fe(null));
          }
      }
    }
    var mt = Array.isArray;
    function ve(e) {
      return mt(e);
    }
    function bt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, l = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function gt(e) {
      try {
        return Ue(e), !1;
      } catch {
        return !0;
      }
    }
    function Ue(e) {
      return "" + e;
    }
    function Ie(e) {
      if (gt(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(e)), Ue(e);
    }
    var We = T.ReactCurrentOwner, ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, Ge;
    function yt(e) {
      if (ne.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function _t(e) {
      if (ne.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function vt(e, s) {
      typeof e.ref == "string" && We.current;
    }
    function xt(e, s) {
      {
        var l = function() {
          Ye || (Ye = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function wt(e, s) {
      {
        var l = function() {
          Ge || (Ge = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var jt = function(e, s, l, g, w, j, v) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: l,
        props: v,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function kt(e, s, l, g, w) {
      {
        var j, v = {}, _ = null, $ = null;
        l !== void 0 && (Ie(l), _ = "" + l), _t(s) && (Ie(s.key), _ = "" + s.key), yt(s) && ($ = s.ref, vt(s, w));
        for (j in s)
          ne.call(s, j) && !ht.hasOwnProperty(j) && (v[j] = s[j]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (j in R)
            v[j] === void 0 && (v[j] = R[j]);
        }
        if (_ || $) {
          var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && xt(v, S), $ && wt(v, S);
        }
        return jt(e, _, $, w, g, We.current, v);
      }
    }
    var xe = T.ReactCurrentOwner, Je = T.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var s = e._owner, l = de(e.type, e._source, s ? s.type : null);
        Je.setExtraStackFrame(l);
      } else
        Je.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function je(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ve() {
      {
        if (xe.current) {
          var e = O(xe.current.type);
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
        var s = Ve();
        if (!s) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (s = `

Check the top-level render call using <` + l + ">.");
        }
        return s;
      }
    }
    function Be(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = Rt(s);
        if (Ke[l])
          return;
        Ke[l] = !0;
        var g = "";
        e && e._owner && e._owner !== xe.current && (g = " It was passed a child from " + O(e._owner.type) + "."), Z(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, g), Z(null);
      }
    }
    function ze(e, s) {
      {
        if (typeof e != "object")
          return;
        if (ve(e))
          for (var l = 0; l < e.length; l++) {
            var g = e[l];
            je(g) && Be(g, s);
          }
        else if (je(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = U(e);
          if (typeof w == "function" && w !== e.entries)
            for (var j = w.call(e), v; !(v = j.next()).done; )
              je(v.value) && Be(v.value, s);
        }
      }
    }
    function St(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var l;
        if (typeof s == "function")
          l = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === o))
          l = s.propTypes;
        else
          return;
        if (l) {
          var g = O(s);
          pt(l, e.props, "prop", g, e);
        } else if (s.PropTypes !== void 0 && !we) {
          we = !0;
          var w = O(s);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(e) {
      {
        for (var s = Object.keys(e.props), l = 0; l < s.length; l++) {
          var g = s[l];
          if (g !== "children" && g !== "key") {
            Z(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    var He = {};
    function Xe(e, s, l, g, w, j) {
      {
        var v = z(e);
        if (!v) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = Et();
          $ ? _ += $ : _ += Ve();
          var R;
          e === null ? R = "null" : ve(e) ? R = "array" : e !== void 0 && e.$$typeof === r ? (R = "<" + (O(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, _);
        }
        var S = kt(e, s, l, w, j);
        if (S == null)
          return S;
        if (v) {
          var D = s.children;
          if (D !== void 0)
            if (g)
              if (ve(D)) {
                for (var q = 0; q < D.length; q++)
                  ze(D[q], e);
                Object.freeze && Object.freeze(D);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(D, e);
        }
        if (ne.call(s, "key")) {
          var H = O(e), F = Object.keys(s).filter(function($t) {
            return $t !== "key";
          }), ke = F.length > 0 ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[H + ke]) {
            var Ot = F.length > 0 ? "{" + F.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ke, H, Ot, H), He[H + ke] = !0;
          }
        }
        return e === n ? At(S) : St(S), S;
      }
    }
    function Tt(e, s, l) {
      return Xe(e, s, l, !0);
    }
    function Pt(e, s, l) {
      return Xe(e, s, l, !1);
    }
    var Nt = Pt, Ct = Tt;
    se.Fragment = n, se.jsx = Nt, se.jsxs = Ct;
  })()), se;
}
var Qe;
function Zt() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? me.exports = Ht() : me.exports = Xt()), me.exports;
}
var u = Zt();
function qt(t) {
  if (!t || typeof t != "string") return null;
  const r = t.replace(/^<[^>]+>\s*/i, "").trim(), a = r.match(/^POINT\s*\(\s*([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)\s*\)$/i);
  if (a) {
    const f = parseFloat(a[1]), h = parseFloat(a[2]);
    if (Number.isFinite(f) && Number.isFinite(h))
      return { centroid: [f, h] };
  }
  const n = r.match(/^POLYGON\s*\(\((.+)\)\)$/i);
  if (n) {
    const f = n[1].split(/\)\s*,\s*\(/).map(
      (h) => h.split(",").map((b) => {
        const [y, i] = b.trim().split(/\s+/);
        return [parseFloat(y), parseFloat(i)];
      }).filter(([b, y]) => Number.isFinite(b) && Number.isFinite(y))
    );
    if (f[0] && f[0].length > 0)
      return { centroid: et(f[0]), polygon: f };
  }
  const c = r.match(/^MULTIPOLYGON\s*\(\(\((.+)\)\)\)$/i);
  if (c) {
    const h = c[1].split(/\)\)\s*,\s*\(\(/)[0].split(",").map((b) => {
      const [y, i] = b.trim().split(/\s+/);
      return [parseFloat(y), parseFloat(i)];
    }).filter(([b, y]) => Number.isFinite(b) && Number.isFinite(y));
    if (h.length > 0)
      return { centroid: et(h), polygon: [h] };
  }
  return null;
}
function et(t) {
  let r = 0, a = 0;
  const n = t.length;
  for (const [c, f] of t)
    r += c, a += f;
  return [r / n, a / n];
}
const Ee = {
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
}, st = "linked-art-geotrail:geocode-cache:v1", be = /* @__PURE__ */ new Set();
let tt = Promise.resolve(), rt = 0;
function Ae() {
  try {
    return JSON.parse(localStorage.getItem(st) || "{}");
  } catch {
    return {};
  }
}
function Qt(t) {
  try {
    localStorage.setItem(st, JSON.stringify(t));
  } catch {
  }
}
function it(t) {
  if (!t || typeof t != "string") return "";
  let r = t.replace(/^Storage\s*[—-]\s*/i, "").trim();
  const a = r.match(/\bat\s+([^,]+(?:,\s*[^,]+){0,2})$/i);
  if (a && a[1])
    r = a[1].trim();
  else if (r.length > 65) {
    const n = r.split(",").map((c) => c.trim()).filter(Boolean);
    n.length >= 2 ? r = n.slice(-2).join(", ") : r = n[0].slice(0, 65);
  }
  return r;
}
function ot(t) {
  if (!t || typeof t != "string") return null;
  const r = [t, it(t)].map((n) => n.trim().toLowerCase()).filter(Boolean), a = Ae();
  for (const n of r) {
    if (Ee[n])
      return Ee[n];
    if (Array.isArray(a[n]) && a[n].length === 2)
      return a[n];
  }
  for (const n of r)
    for (const [c, f] of Object.entries(Ee))
      if (n.includes(c))
        return f;
  return null;
}
function er(t) {
  const r = tt.then(async () => {
    const a = Date.now() - rt;
    return a < 1100 && await new Promise((n) => setTimeout(n, 1100 - a)), rt = Date.now(), t();
  });
  return tt = r.catch(() => null), r;
}
async function tr(t) {
  const r = ot(t);
  if (r) return r;
  const a = it(t), n = a.split(",").map((h) => h.trim()).filter(Boolean), c = n.length > 1 ? n[n.length - 1] : a, f = a.toLowerCase();
  return !c || be.has(f) ? null : er(async () => {
    const h = Ae();
    if (Array.isArray(h[f]) && h[f].length === 2)
      return h[f];
    try {
      const b = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        c
      )}&count=1&language=en&format=json`, y = await fetch(b);
      if (!y.ok)
        return be.add(f), null;
      const i = await y.json(), d = Array.isArray(i == null ? void 0 : i.results) ? i.results[0] : null;
      if (d && Number.isFinite(d.longitude) && Number.isFinite(d.latitude)) {
        const o = [d.longitude, d.latitude], m = Ae();
        return m[f] = o, Qt(m), o;
      }
      be.add(f);
    } catch {
      be.add(f);
    }
    return null;
  });
}
function M(t, r = "Untitled") {
  if (!t) return r;
  if (typeof t._label == "string" && t._label.trim()) return t._label.trim();
  if (Array.isArray(t.identified_by)) {
    const a = t.identified_by.find(
      (n) => n.type === "Name" && Array.isArray(n.classified_as) && n.classified_as.some((c) => String(c.id).includes("300404670"))
    ) || t.identified_by.find((n) => n.type === "Name");
    if (a != null && a.content) return String(a.content);
  }
  return r;
}
function B(t, r) {
  return Array.isArray(t == null ? void 0 : t.classified_as) && t.classified_as.some(
    (a) => String(a.id || "").includes(r) || String(a._label || "").toLowerCase().includes(r.toLowerCase())
  );
}
function X(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return;
  const r = t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && B(a, "300080091")
  ) || t.referred_to_by.find(
    (a) => a.type === "LinguisticObject" && typeof a.content == "string" && (B(a, "300444172") || B(a, "300444174"))
  );
  return r == null ? void 0 : r.content;
}
function ie(t) {
  if (!Array.isArray(t == null ? void 0 : t.referred_to_by)) return null;
  const r = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && (B(n, "300435448") || B(n, "300444175") || B(n, "place"))
  );
  if (r != null && r.content)
    return r.content.trim();
  const a = t.referred_to_by.find(
    (n) => n.type === "LinguisticObject" && typeof n.content == "string" && B(n, "300444172")
  );
  if (a != null && a.content) {
    const n = a.content.match(/\b(London|Paris|New York|Rome|Athens|Los Angeles|Malibu|Amsterdam|Berlin)\b/i);
    if (n) return n[1];
  }
  return null;
}
function rr(t) {
  if (!t) return { display: "Date unknown", sortTs: Number.MAX_SAFE_INTEGER };
  let r = typeof t._label == "string" ? t._label.trim() : "";
  if (!r && Array.isArray(t.identified_by)) {
    const h = t.identified_by.find((b) => b.type === "Name" && b.content);
    h != null && h.content && (r = String(h.content));
  }
  const a = t.begin_of_the_begin || t.end_of_the_begin, n = t.end_of_the_end || t.begin_of_the_end;
  let c = Number.MAX_SAFE_INTEGER;
  const f = a || n;
  if (f) {
    const h = String(f).match(/^([+-]?\d{1,6})/);
    h && (c = parseInt(h[1], 10));
  } else if (r) {
    const h = r.match(/([+-]?\d{4})/);
    h && (c = parseInt(h[1], 10));
  }
  return r ? { display: r, sortTs: c } : a && n && a !== n ? { display: `${String(a).slice(0, 10)} – ${String(n).slice(0, 10)}`, sortTs: c } : a ? { display: String(a).slice(0, 10), sortTs: c } : n ? { display: String(n).slice(0, 10), sortTs: c } : { display: "Date unknown", sortTs: c };
}
function ge(t) {
  return typeof t != "string" || /rightsstatements\.org\/files\/icons/i.test(t) ? !1 : /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(t) || /\/iiif\/image\//i.test(t);
}
function ee(t, r) {
  const a = [];
  if (!t) return a;
  const n = (c) => {
    var h;
    if (!c || typeof c != "object") return;
    const f = M(c, "Attached image");
    if (Array.isArray(c.access_point))
      for (const b of c.access_point)
        b != null && b.id && ge(b.id) && a.push({ id: b.id, url: b.id, label: f, source: r });
    if (ge(c.id) && a.push({ id: c.id, url: c.id, label: f, source: r }), Array.isArray(c.digitally_shown_by))
      for (const b of c.digitally_shown_by) {
        const y = M(b, f), i = Array.isArray(b.conforms_to) ? (h = b.conforms_to.find((d) => String(d.id).includes("iiif.io/api/image"))) == null ? void 0 : h.id : void 0;
        if (Array.isArray(b.access_point))
          for (const d of b.access_point)
            d != null && d.id && ge(d.id) && a.push({ id: d.id, url: d.id, label: y, iiifService: i, source: r });
        else ge(b.id) && a.push({ id: b.id, url: b.id, label: y, iiifService: i, source: r });
      }
  };
  return Array.isArray(t.representation) && t.representation.forEach(n), Array.isArray(t.digitally_shown_by) && n(t), Array.from(new Map(a.map((c) => [c.url, c])).values());
}
function oe(t) {
  const r = [], a = (n) => {
    if (Array.isArray(n))
      for (const c of n) {
        const f = M(c, "");
        f && f.toLowerCase() !== "unknown" && r.push(f);
      }
  };
  return a(t == null ? void 0 : t.carried_out_by), a(t == null ? void 0 : t.transferred_title_from), a(t == null ? void 0 : t.transferred_title_to), Array.from(new Set(r));
}
function Q(t) {
  const r = Array.isArray(t) ? t[0] : t;
  if (!r || typeof r != "object") return null;
  let a = r.defined_by;
  if (!a && Array.isArray(r.part_of)) {
    const n = r.part_of.find((c) => typeof (c == null ? void 0 : c.defined_by) == "string");
    n && (a = n.defined_by);
  }
  return {
    label: M(r, "Unnamed Place"),
    uri: r.id,
    wkt: a,
    isStorage: B(r, "300004465"),
    images: ee(r, "place")
  };
}
function Re(t) {
  const r = [], a = M(t, "Linked Art Object"), n = ee(t, "object"), c = [], f = ({
    id: i,
    title: d,
    category: o,
    timespan: m,
    placeLabel: N,
    placeUri: P,
    wkt: J,
    actors: U = [],
    description: T,
    images: E = [],
    defaultOrder: x,
    precisionNote: W
  }) => {
    const L = qt(J), V = L ? L.centroid : ot(N), { display: k, sortTs: p } = rr(m);
    !L && W && r.push(W), c.push({
      id: i,
      title: d,
      category: o,
      dateDisplay: k,
      sortTimestamp: p === Number.MAX_SAFE_INTEGER ? x : p,
      placeLabel: N,
      placeUri: P,
      coordinates: V,
      // May be null until async geocoding completes
      polygon: L == null ? void 0 : L.polygon,
      isApproximate: !L,
      actors: U,
      description: T,
      images: E
    });
  };
  if (t.produced_by) {
    const i = Q(t.produced_by.took_place_at), d = ie(t.produced_by) || ie(t), o = (i == null ? void 0 : i.label) || d;
    o && f({
      id: t.produced_by.id || "production-0",
      title: M(t.produced_by, "Production / Creation"),
      category: "production",
      timespan: t.produced_by.timespan,
      placeLabel: o,
      placeUri: i == null ? void 0 : i.uri,
      wkt: i == null ? void 0 : i.wkt,
      actors: oe(t.produced_by),
      description: X(t.produced_by),
      images: [...ee(t.produced_by, "event"), ...(i == null ? void 0 : i.images) || []],
      defaultOrder: -1e5,
      precisionNote: i != null && i.wkt ? void 0 : `Production place "${o}" resolved from text statement (no WKT defined_by).`
    });
  }
  if ((Array.isArray(t.encountered) ? t.encountered : t.found_by ? [t.found_by] : []).forEach((i, d) => {
    const o = Q(i.took_place_at), m = (o == null ? void 0 : o.label) || ie(i);
    m && f({
      id: i.id || `discovery-${d}`,
      title: M(i, "Archaeological Encounter / Findspot"),
      category: "discovery",
      timespan: i.timespan,
      placeLabel: m,
      placeUri: o == null ? void 0 : o.uri,
      wkt: o == null ? void 0 : o.wkt,
      actors: oe(i),
      description: X(i),
      images: [...ee(i, "event"), ...(o == null ? void 0 : o.images) || []],
      defaultOrder: -5e4 + d
    });
  }), Array.isArray(t.changed_ownership_through) && t.changed_ownership_through.forEach((i, d) => {
    const o = Array.isArray(i.part_of) ? i.part_of[0] : i.part_of, m = Q(i.took_place_at) || Q(o == null ? void 0 : o.took_place_at), N = ie(i) || ie(o), P = (m == null ? void 0 : m.label) || N;
    P && f({
      id: i.id || `provenance-${d}`,
      title: M(i, `Transfer of Custody #${d + 1}`),
      category: "provenance",
      timespan: i.timespan || (o == null ? void 0 : o.timespan),
      placeLabel: P,
      placeUri: m == null ? void 0 : m.uri,
      wkt: m == null ? void 0 : m.wkt,
      actors: [...oe(i), ...oe(o)],
      description: X(i) || X(o),
      images: [...ee(i, "event"), ...(m == null ? void 0 : m.images) || []],
      defaultOrder: 1e3 + d,
      precisionNote: m != null && m.wkt ? void 0 : `Provenance location "${P}" resolved from text statement (no WKT defined_by).`
    });
  }), [
    ...Array.isArray(t.used_for) ? t.used_for : [],
    ...Array.isArray(t.member_of) ? t.member_of.flatMap((i) => Array.isArray(i.used_for) ? i.used_for : []) : []
  ].forEach((i, d) => {
    const o = Q(i.took_place_at), m = (o == null ? void 0 : o.label) || M(i, "");
    m && f({
      id: i.id || `exhibition-${d}`,
      title: M(i, `Exhibition #${d + 1}`),
      category: "exhibition",
      timespan: i.timespan,
      placeLabel: m,
      placeUri: o == null ? void 0 : o.uri,
      wkt: o == null ? void 0 : o.wkt,
      actors: oe(i),
      description: X(i),
      images: [...ee(i, "event"), ...(o == null ? void 0 : o.images) || []],
      defaultOrder: 2e3 + d,
      precisionNote: o != null && o.wkt ? void 0 : `Exhibition venue "${m}" geocoded from activity label (no WKT defined_by).`
    });
  }), t.current_location) {
    const i = Q(t.current_location), d = Array.isArray(t.current_owner) ? M(t.current_owner[0], "") : "";
    if (i) {
      const o = !i.wkt && i.isStorage && d ? `${i.label} — ${d}` : i.label;
      f({
        id: `${t.id || "obj"}-current-location`,
        title: "Current Repository Location",
        category: "current_location",
        timespan: { _label: "Present" },
        placeLabel: o,
        placeUri: i.uri,
        wkt: i.wkt,
        actors: Array.isArray(t.current_owner) ? t.current_owner.map((m) => M(m)) : [],
        description: X(t.current_location),
        images: [...i.images, ...n],
        defaultOrder: 999999,
        precisionNote: i.wkt ? void 0 : `Current location "${o}" has no WKT defined_by; resolved via institution/place name.`
      });
    }
  }
  const y = c.sort((i, d) => i.sortTimestamp - d.sortTimestamp).map((i, d) => ({
    ...i,
    index: d,
    images: i.images.length > 0 ? i.images : n.slice(0, 1)
  }));
  return {
    objectId: t.id || "urn:linked-art:object",
    objectLabel: a,
    objectSummary: X(t),
    heroImage: n[0],
    events: y,
    warnings: Array.from(new Set(r))
  };
}
async function nr(t) {
  let r = !1;
  const a = await Promise.all(
    t.events.map(async (n) => {
      if (Array.isArray(n.coordinates) && n.coordinates.length === 2)
        return n;
      const c = await tr(n.placeLabel);
      return c ? (r = !0, { ...n, coordinates: c }) : n;
    })
  );
  return r ? { ...t, events: a } : t;
}
const ar = [
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
async function ir(t) {
  let r = null;
  for (const a of ar)
    try {
      const n = await fetch(a(t));
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
async function or(t) {
  const r = String(t || "").trim();
  if (!r)
    throw new Error("Enter a Linked Art URL or paste JSON-LD.");
  if (/^https?:\/\//i.test(r))
    try {
      return await sr(r);
    } catch (a) {
      try {
        return await ir(r);
      } catch {
        throw new Error(
          `Could not fetch "${r}" (${a instanceof Error ? a.message : "CORS or network error"}). Paste the JSON-LD directly instead.`
        );
      }
    }
  return JSON.parse(r);
}
const nt = {
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
}, Se = /* @__PURE__ */ new Map();
function lr(t, r = 400) {
  if (!t || typeof t != "string") return t;
  const a = /(\/iiif\/(?:image\/)?[^/]+)\/([^/]+)\/((?:full|max|pct:\d+(?:\.\d+)?|!?\d*,\d*))\/([^/]+)\/([^/.]+)\.([a-zA-Z0-9]+)(\?.*)?$/;
  return a.test(t) ? t.replace(
    a,
    (n, c, f, h, b, y, i, d = "") => `${c}/${h || "full"}/!${r},${r}/${b || "0"}/${y || "default"}.jpg${d}`
  ) : /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i.test(t) ? t.replace(
    /\/full\/(?:full|max)\/0\/default\.(?:jpg|jpeg|png|webp)/i,
    `/full/!${r},${r}/0/default.jpg`
  ) : t;
}
function cr(t, { maxWidth: r = 480, quality: a = 0.72 } = {}) {
  if (!t || typeof t != "string") return "";
  const n = `${t}::${r}::${a}`;
  if (Se.has(n))
    return Se.get(n);
  const c = lr(t, r);
  return Se.set(n, c), c;
}
const ur = {
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
}, dr = Te.memo(function({
  trail: r,
  activeLegIndex: a,
  isPlaying: n,
  isLoading: c,
  allowInput: f = !0,
  theme: h = "dark",
  onToggleTheme: b,
  onTogglePlay: y,
  onReset: i,
  onSelectStep: d,
  onLoadInput: o
}) {
  var k;
  const [m, N] = I(!1), [P, J] = I(""), [U, T] = I(null), E = at([]), x = h === "light", W = ur[x ? "light" : "dark"];
  le(() => {
    var p;
    (p = E.current[a]) == null || p.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [a, r.events.length]);
  const L = async (p) => {
    if (p && p.preventDefault(), !P.trim() || c) return;
    await o(P) && N(!1);
  }, V = (p) => {
    const A = /^https?:\/\/\S+$/i.test(P.trim());
    p.key === "Enter" && !p.shiftKey && A && (p.preventDefault(), L());
  };
  return /* @__PURE__ */ u.jsxs(
    "aside",
    {
      className: `w-full lg:w-[410px] h-[48vh] lg:h-full border-t lg:border-t-0 lg:border-r flex flex-col z-10 transition-colors ${x ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-slate-800 text-slate-100"}`,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: `p-4 border-b ${x ? "border-slate-200" : "border-slate-800"}`, children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ u.jsx(
                "span",
                {
                  className: `text-[11px] font-semibold uppercase tracking-widest ${x ? "text-sky-700" : "text-sky-400"}`,
                  children: "Linked Art GeoTrail"
                }
              ),
              /* @__PURE__ */ u.jsx("h1", { className: "text-base font-semibold leading-snug mt-0.5 truncate", children: r.objectLabel })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
              b && /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: b,
                  className: `inline-flex items-center justify-center w-8 h-8 rounded-lg border transition ${x ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                  title: x ? "Switch to dark mode" : "Switch to light mode",
                  children: x ? /* @__PURE__ */ u.jsx(Dt, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ u.jsx(Mt, { className: "w-3.5 h-3.5 text-amber-400" })
                }
              ),
              f && /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => N((p) => !p),
                  className: `inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${x ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                  children: [
                    /* @__PURE__ */ u.jsx(Ut, { className: `w-3.5 h-3.5 ${x ? "text-sky-700" : "text-sky-400"}` }),
                    m ? "Close" : "Load URL / JSON"
                  ]
                }
              )
            ] })
          ] }),
          r.objectSummary && (!m || !f) && /* @__PURE__ */ u.jsx("p", { className: `text-xs mt-2 line-clamp-2 ${x ? "text-slate-600" : "text-slate-400"}`, children: r.objectSummary }),
          f && m && /* @__PURE__ */ u.jsxs("form", { onSubmit: L, className: "mt-3 space-y-2", children: [
            /* @__PURE__ */ u.jsx(
              "textarea",
              {
                value: P,
                onChange: (p) => J(p.target.value),
                onKeyDown: V,
                placeholder: "Paste a Linked Art URL (https://...) or JSON-LD payload...",
                rows: 4,
                className: `w-full rounded-lg border p-2.5 text-xs font-mono focus:outline-none focus:border-sky-500 ${x ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-slate-950 border-slate-700 text-slate-200"}`
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "submit",
                disabled: c,
                className: "w-full inline-flex items-center justify-center gap-2 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-xs font-semibold text-white transition",
                children: c ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  /* @__PURE__ */ u.jsx(It, { className: "w-3.5 h-3.5 animate-spin" }),
                  "Fetching & Parsing..."
                ] }) : "Fetch / Parse & Plot Events"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: `px-4 py-3 border-b flex items-center gap-3 ${x ? "bg-slate-50 border-slate-200" : "bg-slate-950/60 border-slate-800"}`,
            children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: y,
                  className: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white transition",
                  title: n ? "Pause animation" : "Play trajectory",
                  children: n ? /* @__PURE__ */ u.jsx(Wt, { className: "w-4 h-4" }) : /* @__PURE__ */ u.jsx(Yt, { className: "w-4 h-4 ml-0.5" })
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  onClick: i,
                  className: `inline-flex items-center justify-center w-8 h-8 rounded-full transition ${x ? "bg-slate-200 hover:bg-slate-300 text-slate-700" : "bg-slate-800 hover:bg-slate-700 text-slate-300"}`,
                  title: "Restart from origin",
                  children: /* @__PURE__ */ u.jsx(Gt, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ u.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: Math.max(0, r.events.length - 1),
                    value: a,
                    onChange: (p) => d(Number(p.target.value)),
                    className: "w-full accent-sky-600 cursor-pointer"
                  }
                ),
                /* @__PURE__ */ u.jsxs(
                  "div",
                  {
                    className: `flex justify-between text-[11px] mt-0.5 ${x ? "text-slate-600" : "text-slate-400"}`,
                    children: [
                      /* @__PURE__ */ u.jsxs("span", { children: [
                        "Stop ",
                        a + 1,
                        " of ",
                        r.events.length
                      ] }),
                      /* @__PURE__ */ u.jsx("span", { children: (k = r.events[a]) == null ? void 0 : k.dateDisplay })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "flex-1 overflow-y-auto p-3 space-y-2.5", children: [
          r.events.map((p) => {
            const A = p.index === a, z = p.index <= a;
            return /* @__PURE__ */ u.jsxs(
              "div",
              {
                ref: (C) => {
                  E.current[p.index] = C;
                },
                onClick: () => d(p.index),
                className: `rounded-xl p-3 border cursor-pointer transition ${A ? x ? "bg-sky-50/70 border-sky-500 shadow-sm" : "bg-slate-800/90 border-sky-500/70 shadow-lg" : z ? x ? "bg-white border-slate-200 hover:border-slate-300" : "bg-slate-900 border-slate-700/80 hover:border-slate-600" : x ? "bg-slate-50/70 border-slate-200/80 opacity-80 hover:opacity-100" : "bg-slate-900/40 border-slate-800/70 opacity-70 hover:opacity-100"}`,
                children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ u.jsxs(
                      "span",
                      {
                        className: `text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${W[p.category] || W.other}`,
                        children: [
                          p.index + 1,
                          ". ",
                          p.category.replace("_", " ")
                        ]
                      }
                    ),
                    /* @__PURE__ */ u.jsxs(
                      "span",
                      {
                        className: `inline-flex items-center gap-1 text-xs ${x ? "text-slate-600" : "text-slate-400"}`,
                        children: [
                          /* @__PURE__ */ u.jsx(Jt, { className: "w-3 h-3" }),
                          p.dateDisplay
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u.jsx("h2", { className: "text-sm font-semibold mt-1.5", children: p.title }),
                  /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${x ? "text-slate-700" : "text-slate-300"}`,
                      children: [
                        /* @__PURE__ */ u.jsx(
                          Vt,
                          {
                            className: `w-3.5 h-3.5 shrink-0 ${x ? "text-sky-700" : "text-sky-400"}`
                          }
                        ),
                        /* @__PURE__ */ u.jsx("span", { className: "truncate", children: p.placeLabel }),
                        p.placeUri && /* @__PURE__ */ u.jsx(
                          "a",
                          {
                            href: p.placeUri,
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: (C) => C.stopPropagation(),
                            className: "text-slate-400 hover:text-sky-500 ml-auto",
                            title: "Open Place URI",
                            children: /* @__PURE__ */ u.jsx(Kt, { className: "w-3 h-3" })
                          }
                        )
                      ]
                    }
                  ),
                  p.actors.length > 0 && /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-1.5 text-xs mt-1 ${x ? "text-slate-600" : "text-slate-400"}`,
                      children: [
                        /* @__PURE__ */ u.jsx(Bt, { className: "w-3.5 h-3.5 shrink-0" }),
                        /* @__PURE__ */ u.jsx("span", { className: "truncate", children: p.actors.join(", ") })
                      ]
                    }
                  ),
                  p.description && /* @__PURE__ */ u.jsx(
                    "p",
                    {
                      className: `text-xs mt-1.5 leading-relaxed ${x ? "text-slate-600" : "text-slate-400"}`,
                      children: p.description
                    }
                  ),
                  p.images.length > 0 && /* @__PURE__ */ u.jsx("div", { className: "mt-2.5 flex gap-2 overflow-x-auto pb-1", children: p.images.map((C) => {
                    const Y = cr(C.url, { maxWidth: 240 });
                    return /* @__PURE__ */ u.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: (O) => {
                          O.stopPropagation(), T(C.url);
                        },
                        className: `group relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border ${x ? "border-slate-300 hover:border-sky-600" : "border-slate-700 hover:border-sky-400"}`,
                        children: [
                          /* @__PURE__ */ u.jsx(
                            "img",
                            {
                              src: Y,
                              alt: C.label,
                              loading: "lazy",
                              decoding: "async",
                              onError: (O) => {
                                O.currentTarget.src !== C.url && (O.currentTarget.src = C.url);
                              },
                              className: "w-full h-full object-cover group-hover:scale-105 transition"
                            }
                          ),
                          /* @__PURE__ */ u.jsx("span", { className: "absolute bottom-1 right-1 bg-slate-950/80 p-0.5 rounded text-slate-200", children: /* @__PURE__ */ u.jsx(zt, { className: "w-2.5 h-2.5" }) })
                        ]
                      },
                      C.id
                    );
                  }) })
                ]
              },
              p.id
            );
          }),
          r.warnings.length > 0 && /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `rounded-lg border p-2.5 text-[11px] space-y-1 ${x ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-amber-950/30 border-amber-500/30 text-amber-200"}`,
              children: [
                /* @__PURE__ */ u.jsx("div", { className: "font-semibold", children: "Spatial Resolution Notes" }),
                r.warnings.map((p, A) => /* @__PURE__ */ u.jsxs("div", { children: [
                  "• ",
                  p
                ] }, A))
              ]
            }
          )
        ] }),
        U && /* @__PURE__ */ u.jsx(
          "div",
          {
            onClick: () => T(null),
            className: "fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-6 cursor-zoom-out",
            children: /* @__PURE__ */ u.jsx(
              "img",
              {
                src: U,
                alt: "Linked Art representation",
                className: "max-w-full max-h-full rounded-xl border border-slate-700 shadow-2xl"
              }
            )
          }
        )
      ]
    }
  );
}), fr = Ft(
  () => import("./GeoArcMap-OW7AQCs5.js").then((t) => ({ default: t.GeoArcMap }))
), pr = 4500, mr = 1e3 / 30;
function hr({
  record: t = nt,
  allowInput: r = !0,
  theme: a = "dark"
}) {
  const [n, c] = I(a), [f, h] = I(() => Re(t)), [b, y] = I(0), [i, d] = I(0), [o, m] = I(!1), [N, P] = I(!1), [J, U] = I(null), T = at(b);
  T.current = b, le(() => {
    c(a);
  }, [a]), le(() => {
    const k = Re(t || nt);
    h(k), y(0), d(0), m(!1), U(null);
  }, [t]), le(() => {
    let k = !1;
    if (f.events.some((A) => !A.coordinates))
      return nr(f).then((A) => {
        !k && A !== f && h(A);
      }), () => {
        k = !0;
      };
  }, [f]), le(() => {
    if (!o || f.events.length < 2) return;
    let k, p = performance.now(), A = p, z = 0;
    const C = (Y) => {
      const O = Math.min(Y - p, 100);
      p = Y, z += O, Y - A >= mr && (A = Y, d((G) => {
        const K = G + z / pr;
        if (z = 0, K >= 1) {
          const te = T.current;
          if (te < f.events.length - 1) {
            const re = te + 1;
            return T.current = re, y(re), 0;
          }
          return m(!1), 1;
        }
        return K;
      })), k = requestAnimationFrame(C);
    };
    return k = requestAnimationFrame(C), () => cancelAnimationFrame(k);
  }, [o, f.events.length]);
  const E = pe(async (k) => {
    P(!0);
    try {
      const p = await or(k), A = Re(p);
      return h(A), y(0), d(0), m(!1), U(null), !0;
    } catch (p) {
      return U(p instanceof Error ? p.message : "Unable to parse Linked Art input"), !1;
    } finally {
      P(!1);
    }
  }, []), x = pe((k) => {
    m(!1), y(k), d(k > 0 ? 1 : 0), T.current = k;
  }, []), W = pe(() => {
    m(!1), y(0), d(0), T.current = 0;
  }, []), L = pe(() => {
    if (!(f.events.length < 2)) {
      if (o) {
        m(!1);
        return;
      }
      b >= f.events.length - 1 && (y(0), d(0)), m(!0);
    }
  }, [b, o, f.events.length]), V = n === "light";
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `w-full h-full flex flex-col-reverse lg:flex-row overflow-hidden transition-colors ${V ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100"}`,
      children: [
        /* @__PURE__ */ u.jsx(
          dr,
          {
            trail: f,
            activeLegIndex: b,
            isPlaying: o,
            isLoading: N,
            allowInput: r,
            theme: n,
            onToggleTheme: () => c((k) => k === "dark" ? "light" : "dark"),
            onTogglePlay: L,
            onReset: W,
            onSelectStep: x,
            onLoadInput: E
          }
        ),
        /* @__PURE__ */ u.jsxs("main", { className: "relative flex-1 h-[52vh] lg:h-full", children: [
          J && /* @__PURE__ */ u.jsxs("div", { className: "absolute top-3 left-3 z-20 max-w-md bg-rose-950/90 border border-rose-500/50 text-rose-200 text-xs px-3 py-2 rounded-lg", children: [
            "Load Error: ",
            J
          ] }),
          /* @__PURE__ */ u.jsx(
            Lt,
            {
              fallback: /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: `w-full h-full flex items-center justify-center text-xs ${V ? "bg-slate-100 text-slate-600" : "bg-slate-950 text-slate-400"}`,
                  children: "Loading map engine..."
                }
              ),
              children: /* @__PURE__ */ u.jsx(
                fr,
                {
                  events: f.events,
                  activeLegIndex: b,
                  legProgress: i,
                  isPlaying: o,
                  onSelectEvent: x,
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
  hr as A,
  cr as g,
  u as j
};
