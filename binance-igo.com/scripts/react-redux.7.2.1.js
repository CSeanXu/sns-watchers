!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react'), require('redux'), require('react-dom'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react', 'redux', 'react-dom'], t)
    : t(((e = e || self).ReactRedux = {}), e.React, e.Redux, e.ReactDOM)
})(this, function (e, t, r, n) {
  'use strict'
  var o = 'default' in t ? t.default : t
  function u(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports
  }
  var a = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  function i() {}
  function c() {}
  c.resetWarningCache = i
  u(function (e) {
    e.exports = (function () {
      function e(e, t, r, n, o, u) {
        if (u !== a) {
          var i = Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          )
          throw ((i.name = 'Invariant Violation'), i)
        }
      }
      function t() {
        return e
      }
      e.isRequired = e
      var r = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: c,
        resetWarningCache: i,
      }
      return (r.PropTypes = r), r
    })()
  })
  var s = o.createContext(null)
  var f = function (e) {
      e()
    },
    p = function () {
      return f
    },
    l = { notify: function () {} }
  var d = (function () {
    function e(e, t) {
      ;(this.store = e),
        (this.parentSub = t),
        (this.unsubscribe = null),
        (this.listeners = l),
        (this.handleChangeWrapper = this.handleChangeWrapper.bind(this))
    }
    var t = e.prototype
    return (
      (t.addNestedSub = function (e) {
        return this.trySubscribe(), this.listeners.subscribe(e)
      }),
      (t.notifyNestedSubs = function () {
        this.listeners.notify()
      }),
      (t.handleChangeWrapper = function () {
        this.onStateChange && this.onStateChange()
      }),
      (t.isSubscribed = function () {
        return !!this.unsubscribe
      }),
      (t.trySubscribe = function () {
        this.unsubscribe ||
          ((this.unsubscribe = this.parentSub
            ? this.parentSub.addNestedSub(this.handleChangeWrapper)
            : this.store.subscribe(this.handleChangeWrapper)),
          (this.listeners = (function () {
            var e = p(),
              t = null,
              r = null
            return {
              clear: function () {
                ;(t = null), (r = null)
              },
              notify: function () {
                e(function () {
                  for (var e = t; e; ) e.callback(), (e = e.next)
                })
              },
              get: function () {
                for (var e = [], r = t; r; ) e.push(r), (r = r.next)
                return e
              },
              subscribe: function (e) {
                var n = !0,
                  o = (r = { callback: e, next: null, prev: r })
                return (
                  o.prev ? (o.prev.next = o) : (t = o),
                  function () {
                    n &&
                      null !== t &&
                      ((n = !1),
                      o.next ? (o.next.prev = o.prev) : (r = o.prev),
                      o.prev ? (o.prev.next = o.next) : (t = o.next))
                  }
                )
              },
            }
          })()))
      }),
      (t.tryUnsubscribe = function () {
        this.unsubscribe &&
          (this.unsubscribe(), (this.unsubscribe = null), this.listeners.clear(), (this.listeners = l))
      }),
      e
    )
  })()
  function y() {
    return (y =
      Object.assign ||
      function (e) {
        for (var t = 1; arguments.length > t; t++) {
          var r = arguments[t]
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      }).apply(this, arguments)
  }
  function v(e, t) {
    if (null == e) return {}
    var r,
      n,
      o = {},
      u = Object.keys(e)
    for (n = 0; u.length > n; n++) 0 > t.indexOf((r = u[n])) && (o[r] = e[r])
    return o
  }
  var m,
    b = u(function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = 'function' == typeof Symbol && Symbol.for,
        n = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        u = r ? Symbol.for('react.fragment') : 60107,
        a = r ? Symbol.for('react.strict_mode') : 60108,
        i = r ? Symbol.for('react.profiler') : 60114,
        c = r ? Symbol.for('react.provider') : 60109,
        s = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        p = r ? Symbol.for('react.concurrent_mode') : 60111,
        l = r ? Symbol.for('react.forward_ref') : 60112,
        d = r ? Symbol.for('react.suspense') : 60113,
        y = r ? Symbol.for('react.suspense_list') : 60120,
        v = r ? Symbol.for('react.memo') : 60115,
        m = r ? Symbol.for('react.lazy') : 60116,
        b = r ? Symbol.for('react.fundamental') : 60117,
        h = r ? Symbol.for('react.responder') : 60118
      function S(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case f:
                case p:
                case u:
                case i:
                case a:
                case d:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case l:
                    case c:
                      return e
                    default:
                      return t
                  }
              }
            case m:
            case v:
            case o:
              return t
          }
        }
      }
      function P(e) {
        return S(e) === p
      }
      ;(t.typeOf = S),
        (t.AsyncMode = f),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = s),
        (t.ContextProvider = c),
        (t.Element = n),
        (t.ForwardRef = l),
        (t.Fragment = u),
        (t.Lazy = m),
        (t.Memo = v),
        (t.Portal = o),
        (t.Profiler = i),
        (t.StrictMode = a),
        (t.Suspense = d),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === u ||
            e === p ||
            e === i ||
            e === a ||
            e === d ||
            e === y ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === v ||
                e.$$typeof === c ||
                e.$$typeof === s ||
                e.$$typeof === l ||
                e.$$typeof === b ||
                e.$$typeof === h))
          )
        }),
        (t.isAsyncMode = function (e) {
          return P(e) || S(e) === f
        }),
        (t.isConcurrentMode = P),
        (t.isContextConsumer = function (e) {
          return S(e) === s
        }),
        (t.isContextProvider = function (e) {
          return S(e) === c
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return S(e) === l
        }),
        (t.isFragment = function (e) {
          return S(e) === u
        }),
        (t.isLazy = function (e) {
          return S(e) === m
        }),
        (t.isMemo = function (e) {
          return S(e) === v
        }),
        (t.isPortal = function (e) {
          return S(e) === o
        }),
        (t.isProfiler = function (e) {
          return S(e) === i
        }),
        (t.isStrictMode = function (e) {
          return S(e) === a
        }),
        (t.isSuspense = function (e) {
          return S(e) === d
        })
    })
  ;(m = b) && m.__esModule && Object.prototype.hasOwnProperty.call(m, 'default')
  var h = u(function (e) {
      e.exports = b
    }),
    S = h.isContextConsumer,
    P = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    g = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    O = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    w = {}
  function C(e) {
    return h.isMemo(e) ? O : w[e.$$typeof] || P
  }
  w[h.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }
  var x = Object.defineProperty,
    E = Object.getOwnPropertyNames,
    M = Object.getOwnPropertySymbols,
    R = Object.getOwnPropertyDescriptor,
    T = Object.getPrototypeOf,
    $ = Object.prototype
  var j = function e(t, r, n) {
      if ('string' != typeof r) {
        if ($) {
          var o = T(r)
          o && o !== $ && e(t, o, n)
        }
        var u = E(r)
        M && (u = u.concat(M(r)))
        for (var a = C(t), i = C(r), c = 0; u.length > c; ++c) {
          var s = u[c]
          if (!(g[s] || (n && n[s]) || (i && i[s]) || (a && a[s]))) {
            var f = R(r, s)
            try {
              x(t, s, f)
            } catch (e) {}
          }
        }
        return t
      }
      return t
    },
    N =
      'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement
        ? t.useLayoutEffect
        : t.useEffect,
    _ = [],
    q = [null, null]
  function D(e, t) {
    return [t.payload, e[1] + 1]
  }
  function F(e, t, r) {
    N(function () {
      return e.apply(void 0, t)
    }, r)
  }
  function k(e, t, r, n, o, u, a) {
    ;(e.current = n), (t.current = o), (r.current = !1), u.current && ((u.current = null), a())
  }
  function W(e, t, r, n, o, u, a, i, c, s) {
    if (e) {
      var f = !1,
        p = null,
        l = function () {
          if (!f) {
            var e,
              r,
              l = t.getState()
            try {
              e = n(l, o.current)
            } catch (e) {
              ;(r = e), (p = e)
            }
            r || (p = null),
              e === u.current
                ? a.current || c()
                : ((u.current = e),
                  (i.current = e),
                  (a.current = !0),
                  s({ type: 'STORE_UPDATED', payload: { error: r } }))
          }
        }
      ;(r.onStateChange = l), r.trySubscribe(), l()
      return function () {
        if (((f = !0), r.tryUnsubscribe(), (r.onStateChange = null), p)) throw p
      }
    }
  }
  var H = function () {
    return [null, 0]
  }
  function U(e, r) {
    void 0 === r && (r = {})
    var n = r.getDisplayName,
      u =
        void 0 === n
          ? function (e) {
              return 'ConnectAdvanced(' + e + ')'
            }
          : n,
      a = r.methodName,
      i = void 0 === a ? 'connectAdvanced' : a,
      c = r.renderCountProp,
      f = void 0 === c ? void 0 : c,
      p = r.shouldHandleStateChanges,
      l = void 0 === p || p,
      m = r.storeKey,
      b = void 0 === m ? 'store' : m,
      h = r.forwardRef,
      P = void 0 !== h && h,
      g = r.context,
      O = void 0 === g ? s : g,
      w = v(r, [
        'getDisplayName',
        'methodName',
        'renderCountProp',
        'shouldHandleStateChanges',
        'storeKey',
        'withRef',
        'forwardRef',
        'context',
      ]),
      C = O
    return function (r) {
      var n = r.displayName || r.name || 'Component',
        a = u(n),
        c = y({}, w, {
          getDisplayName: u,
          methodName: i,
          renderCountProp: f,
          shouldHandleStateChanges: l,
          storeKey: b,
          displayName: a,
          wrappedComponentName: n,
          WrappedComponent: r,
        }),
        s = w.pure
      var p = s
        ? t.useMemo
        : function (e) {
            return e()
          }
      function m(n) {
        var u = t.useMemo(
            function () {
              var e = n.reactReduxForwardedRef,
                t = v(n, ['reactReduxForwardedRef'])
              return [n.context, e, t]
            },
            [n],
          ),
          a = u[0],
          i = u[1],
          s = u[2],
          f = t.useMemo(
            function () {
              return a && a.Consumer && S(o.createElement(a.Consumer, null)) ? a : C
            },
            [a, C],
          ),
          m = t.useContext(f),
          b = !!n.store && !!n.store.getState && !!n.store.dispatch,
          h = b ? n.store : m.store,
          P = t.useMemo(
            function () {
              return (function (t) {
                return e(t.dispatch, c)
              })(h)
            },
            [h],
          ),
          g = t.useMemo(
            function () {
              if (!l) return q
              var e = new d(h, b ? null : m.subscription),
                t = e.notifyNestedSubs.bind(e)
              return [e, t]
            },
            [h, b, m],
          ),
          O = g[0],
          w = g[1],
          x = t.useMemo(
            function () {
              return b ? m : y({}, m, { subscription: O })
            },
            [b, m, O],
          ),
          E = t.useReducer(D, _, H),
          M = E[0][0],
          R = E[1]
        if (M && M.error) throw M.error
        var T = t.useRef(),
          $ = t.useRef(s),
          j = t.useRef(),
          N = t.useRef(!1),
          U = p(
            function () {
              return j.current && s === $.current ? j.current : P(h.getState(), s)
            },
            [h, M, s],
          )
        F(k, [$, T, N, s, U, j, w]), F(W, [l, h, O, P, $, T, N, j, w, R], [h, O, P])
        var A = t.useMemo(
          function () {
            return o.createElement(r, y({}, U, { ref: i }))
          },
          [i, r, U],
        )
        return t.useMemo(
          function () {
            return l ? o.createElement(f.Provider, { value: x }, A) : A
          },
          [f, A, x],
        )
      }
      var h = s ? o.memo(m) : m
      if (((h.WrappedComponent = r), (h.displayName = a), P)) {
        var g = o.forwardRef(function (e, t) {
          return o.createElement(h, y({}, e, { reactReduxForwardedRef: t }))
        })
        return (g.displayName = a), (g.WrappedComponent = r), j(g, r)
      }
      return j(h, r)
    }
  }
  function A(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
  }
  function I(e, t) {
    if (A(e, t)) return !0
    if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1
    var r = Object.keys(e)
    if (r.length !== Object.keys(t).length) return !1
    for (var n = 0; r.length > n; n++)
      if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !A(e[r[n]], t[r[n]])) return !1
    return !0
  }
  function L(e) {
    return function (t, r) {
      var n = e(t, r)
      function o() {
        return n
      }
      return (o.dependsOnOwnProps = !1), o
    }
  }
  function z(e) {
    return null != e.dependsOnOwnProps ? !!e.dependsOnOwnProps : 1 !== e.length
  }
  function K(e, t) {
    return function (t, r) {
      var n = function (e, t) {
        return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e)
      }
      return (
        (n.dependsOnOwnProps = !0),
        (n.mapToProps = function (t, r) {
          ;(n.mapToProps = e), (n.dependsOnOwnProps = z(e))
          var o = n(t, r)
          return 'function' == typeof o && ((n.mapToProps = o), (n.dependsOnOwnProps = z(o)), (o = n(t, r))), o
        }),
        n
      )
    }
  }
  var V = [
    function (e) {
      return 'function' == typeof e ? K(e) : void 0
    },
    function (e) {
      return e
        ? void 0
        : L(function (e) {
            return { dispatch: e }
          })
    },
    function (e) {
      return e && 'object' == typeof e
        ? L(function (t) {
            return r.bindActionCreators(e, t)
          })
        : void 0
    },
  ]
  var B = [
    function (e) {
      return 'function' == typeof e ? K(e) : void 0
    },
    function (e) {
      return e
        ? void 0
        : L(function () {
            return {}
          })
    },
  ]
  function Y(e, t, r) {
    return y({}, r, {}, e, {}, t)
  }
  var G = [
    function (e) {
      return 'function' == typeof e
        ? (function (e) {
            return function (t, r) {
              var n,
                o = r.pure,
                u = r.areMergedPropsEqual,
                a = !1
              return function (t, r, i) {
                var c = e(t, r, i)
                return a ? (o && u(c, n)) || (n = c) : ((a = !0), (n = c)), n
              }
            }
          })(e)
        : void 0
    },
    function (e) {
      return e
        ? void 0
        : function () {
            return Y
          }
    },
  ]
  function J(e, t, r, n) {
    return function (o, u) {
      return r(e(o, u), t(n, u), u)
    }
  }
  function Q(e, t, r, n, o) {
    var u,
      a,
      i,
      c,
      s,
      f = o.areStatesEqual,
      p = o.areOwnPropsEqual,
      l = o.areStatePropsEqual,
      d = !1
    function y(o, d) {
      var y,
        v,
        m = !p(d, a),
        b = !f(o, u)
      return (
        (u = o),
        (a = d),
        m && b
          ? ((i = e(u, a)), t.dependsOnOwnProps && (c = t(n, a)), (s = r(i, c, a)))
          : m
          ? (e.dependsOnOwnProps && (i = e(u, a)), t.dependsOnOwnProps && (c = t(n, a)), (s = r(i, c, a)))
          : b
          ? ((y = e(u, a)), (v = !l(y, i)), (i = y), v && (s = r(i, c, a)), s)
          : s
      )
    }
    return function (o, f) {
      return d ? y(o, f) : ((i = e((u = o), (a = f))), (c = t(n, a)), (s = r(i, c, a)), (d = !0), s)
    }
  }
  function X(e, t) {
    var r = t.initMapStateToProps,
      n = t.initMapDispatchToProps,
      o = t.initMergeProps,
      u = v(t, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']),
      a = r(e, u),
      i = n(e, u),
      c = o(e, u)
    return (u.pure ? Q : J)(a, i, c, e, u)
  }
  function Z(e, t, r) {
    for (var n = t.length - 1; n >= 0; n--) {
      var o = t[n](e)
      if (o) return o
    }
    return function (t, n) {
      throw Error(
        'Invalid value of type ' +
          typeof e +
          ' for ' +
          r +
          ' argument when connecting component ' +
          n.wrappedComponentName +
          '.',
      )
    }
  }
  function ee(e, t) {
    return e === t
  }
  function te(e) {
    var t = void 0 === e ? {} : e,
      r = t.connectHOC,
      n = void 0 === r ? U : r,
      o = t.mapStateToPropsFactories,
      u = void 0 === o ? B : o,
      a = t.mapDispatchToPropsFactories,
      i = void 0 === a ? V : a,
      c = t.mergePropsFactories,
      s = void 0 === c ? G : c,
      f = t.selectorFactory,
      p = void 0 === f ? X : f
    return function (e, t, r, o) {
      void 0 === o && (o = {})
      var a = o.pure,
        c = void 0 === a || a,
        f = o.areStatesEqual,
        l = void 0 === f ? ee : f,
        d = o.areOwnPropsEqual,
        m = void 0 === d ? I : d,
        b = o.areStatePropsEqual,
        h = void 0 === b ? I : b,
        S = o.areMergedPropsEqual,
        P = void 0 === S ? I : S,
        g = v(o, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']),
        O = Z(e, u, 'mapStateToProps'),
        w = Z(t, i, 'mapDispatchToProps'),
        C = Z(r, s, 'mergeProps')
      return n(
        p,
        y(
          {
            methodName: 'connect',
            getDisplayName: function (e) {
              return 'Connect(' + e + ')'
            },
            shouldHandleStateChanges: !!e,
            initMapStateToProps: O,
            initMapDispatchToProps: w,
            initMergeProps: C,
            pure: c,
            areStatesEqual: l,
            areOwnPropsEqual: m,
            areStatePropsEqual: h,
            areMergedPropsEqual: P,
          },
          g,
        ),
      )
    }
  }
  var re = te()
  function ne() {
    return t.useContext(s)
  }
  function oe(e) {
    void 0 === e && (e = s)
    var r =
      e === s
        ? ne
        : function () {
            return t.useContext(e)
          }
    return function () {
      return r().store
    }
  }
  var ue = oe()
  function ae(e) {
    void 0 === e && (e = s)
    var t = e === s ? ue : oe(e)
    return function () {
      return t().dispatch
    }
  }
  var ie = ae(),
    ce = function (e, t) {
      return e === t
    }
  function se(e) {
    void 0 === e && (e = s)
    var r =
      e === s
        ? ne
        : function () {
            return t.useContext(e)
          }
    return function (e, n) {
      void 0 === n && (n = ce)
      var o = r(),
        u = (function (e, r, n, o) {
          var u,
            a = t.useReducer(function (e) {
              return e + 1
            }, 0)[1],
            i = t.useMemo(
              function () {
                return new d(n, o)
              },
              [n, o],
            ),
            c = t.useRef(),
            s = t.useRef(),
            f = t.useRef(),
            p = t.useRef(),
            l = n.getState()
          try {
            u = e !== s.current || l !== f.current || c.current ? e(l) : p.current
          } catch (e) {
            throw (
              (c.current &&
                (e.message += '\nThe error may be correlated with this previous error:\n' + c.current.stack + '\n\n'),
              e)
            )
          }
          return (
            N(function () {
              ;(s.current = e), (f.current = l), (p.current = u), (c.current = void 0)
            }),
            N(
              function () {
                function e() {
                  try {
                    var e = s.current(n.getState())
                    if (r(e, p.current)) return
                    p.current = e
                  } catch (e) {
                    c.current = e
                  }
                  a()
                }
                return (
                  (i.onStateChange = e),
                  i.trySubscribe(),
                  e(),
                  function () {
                    return i.tryUnsubscribe()
                  }
                )
              },
              [n, i],
            ),
            u
          )
        })(e, n, o.store, o.subscription)
      return t.useDebugValue(u), u
    }
  }
  var fe = se()
  ;(f = n.unstable_batchedUpdates),
    Object.defineProperty(e, 'batch', {
      enumerable: !0,
      get: function () {
        return n.unstable_batchedUpdates
      },
    }),
    (e.Provider = function (e) {
      var r = e.store,
        n = e.context,
        u = e.children,
        a = t.useMemo(
          function () {
            var e = new d(r)
            return (e.onStateChange = e.notifyNestedSubs), { store: r, subscription: e }
          },
          [r],
        ),
        i = t.useMemo(
          function () {
            return r.getState()
          },
          [r],
        )
      return (
        t.useEffect(
          function () {
            var e = a.subscription
            return (
              e.trySubscribe(),
              i !== r.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null)
              }
            )
          },
          [a, i],
        ),
        o.createElement((n || s).Provider, { value: a }, u)
      )
    }),
    (e.ReactReduxContext = s),
    (e.connect = re),
    (e.connectAdvanced = U),
    (e.createDispatchHook = ae),
    (e.createSelectorHook = se),
    (e.createStoreHook = oe),
    (e.shallowEqual = I),
    (e.useDispatch = ie),
    (e.useSelector = fe),
    (e.useStore = ue),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
