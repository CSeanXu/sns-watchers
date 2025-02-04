!(function (r, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((r = 'undefined' != typeof globalThis ? globalThis : r || self).Redux = {}))
})(this, function (r) {
  'use strict'
  function t(r) {
    return (
      'Minified Redux error #' +
      r +
      '; visit https://redux.js.org/Errors?code=' +
      r +
      ' for the full message or use the non-minified dev environment for full errors. '
    )
  }
  var e = ('function' == typeof Symbol && Symbol.observable) || '@@observable',
    n = function () {
      return Math.random().toString(36).substring(7).split('').join('.')
    },
    o = {
      INIT: '@@redux/INIT' + n(),
      REPLACE: '@@redux/REPLACE' + n(),
      PROBE_UNKNOWN_ACTION: function () {
        return '@@redux/PROBE_UNKNOWN_ACTION' + n()
      },
    }
  function i(r) {
    if ('object' != typeof r || null === r) return !1
    for (var t = r; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t)
    return Object.getPrototypeOf(r) === t
  }
  function f(r, t) {
    return function () {
      return t(r.apply(this, arguments))
    }
  }
  function u(r, t, e) {
    return (
      t in r ? Object.defineProperty(r, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (r[t] = e), r
    )
  }
  function c(r, t) {
    var e = Object.keys(r)
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(r)
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(r, t).enumerable
        })),
        e.push.apply(e, n)
    }
    return e
  }
  function p(r) {
    for (var t = 1; arguments.length > t; t++) {
      var e = null != arguments[t] ? arguments[t] : {}
      t % 2
        ? c(Object(e), !0).forEach(function (t) {
            u(r, t, e[t])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e))
        : c(Object(e)).forEach(function (t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
          })
    }
    return r
  }
  function a() {
    for (var r = arguments.length, t = Array(r), e = 0; r > e; e++) t[e] = arguments[e]
    return 0 === t.length
      ? function (r) {
          return r
        }
      : 1 === t.length
      ? t[0]
      : t.reduce(function (r, t) {
          return function () {
            return r(t.apply(void 0, arguments))
          }
        })
  }
  ;(r.__DO_NOT_USE__ActionTypes = o),
    (r.applyMiddleware = function () {
      for (var r = arguments.length, e = Array(r), n = 0; r > n; n++) e[n] = arguments[n]
      return function (r) {
        return function () {
          var n = r.apply(void 0, arguments),
            o = function () {
              throw Error(t(15))
            },
            i = {
              getState: n.getState,
              dispatch: function () {
                return o.apply(void 0, arguments)
              },
            },
            f = e.map(function (r) {
              return r(i)
            })
          return (o = a.apply(void 0, f)(n.dispatch)), p(p({}, n), {}, { dispatch: o })
        }
      }
    }),
    (r.bindActionCreators = function (r, e) {
      if ('function' == typeof r) return f(r, e)
      if ('object' != typeof r || null === r) throw Error(t(16))
      var n = {}
      for (var o in r) {
        var i = r[o]
        'function' == typeof i && (n[o] = f(i, e))
      }
      return n
    }),
    (r.combineReducers = function (r) {
      for (var e = Object.keys(r), n = {}, i = 0; e.length > i; i++) {
        var f = e[i]
        'function' == typeof r[f] && (n[f] = r[f])
      }
      var u,
        c = Object.keys(n)
      try {
        !(function (r) {
          Object.keys(r).forEach(function (e) {
            var n = r[e]
            if (void 0 === n(void 0, { type: o.INIT })) throw Error(t(12))
            if (void 0 === n(void 0, { type: o.PROBE_UNKNOWN_ACTION() })) throw Error(t(13))
          })
        })(n)
      } catch (r) {
        u = r
      }
      return function (r, e) {
        if ((void 0 === r && (r = {}), u)) throw u
        for (var o = !1, i = {}, f = 0; c.length > f; f++) {
          var p = c[f],
            a = r[p],
            l = (0, n[p])(a, e)
          if (void 0 === l) throw Error(t(14))
          ;(i[p] = l), (o = o || l !== a)
        }
        return (o = o || c.length !== Object.keys(r).length) ? i : r
      }
    }),
    (r.compose = a),
    (r.createStore = function r(n, f, u) {
      var c
      if (
        ('function' == typeof f && 'function' == typeof u) ||
        ('function' == typeof u && 'function' == typeof arguments[3])
      )
        throw Error(t(0))
      if (('function' == typeof f && void 0 === u && ((u = f), (f = void 0)), void 0 !== u)) {
        if ('function' != typeof u) throw Error(t(1))
        return u(r)(n, f)
      }
      if ('function' != typeof n) throw Error(t(2))
      var p = n,
        a = f,
        l = [],
        y = l,
        s = !1
      function d() {
        y === l && (y = l.slice())
      }
      function b() {
        if (s) throw Error(t(3))
        return a
      }
      function h(r) {
        if ('function' != typeof r) throw Error(t(4))
        if (s) throw Error(t(5))
        var e = !0
        return (
          d(),
          y.push(r),
          function () {
            if (e) {
              if (s) throw Error(t(6))
              ;(e = !1), d()
              var n = y.indexOf(r)
              y.splice(n, 1), (l = null)
            }
          }
        )
      }
      function v(r) {
        if (!i(r)) throw Error(t(7))
        if (void 0 === r.type) throw Error(t(8))
        if (s) throw Error(t(9))
        try {
          ;(s = !0), (a = p(a, r))
        } finally {
          s = !1
        }
        for (var e = (l = y), n = 0; e.length > n; n++) {
          ;(0, e[n])()
        }
        return r
      }
      function O(r) {
        if ('function' != typeof r) throw Error(t(10))
        ;(p = r), v({ type: o.REPLACE })
      }
      function E() {
        var r,
          n = h
        return (
          ((r = {
            subscribe: function (r) {
              if ('object' != typeof r || null === r) throw Error(t(11))
              function e() {
                r.next && r.next(b())
              }
              return e(), { unsubscribe: n(e) }
            },
          })[e] = function () {
            return this
          }),
          r
        )
      }
      return v({ type: o.INIT }), ((c = { dispatch: v, subscribe: h, getState: b, replaceReducer: O })[e] = E), c
    }),
    Object.defineProperty(r, '__esModule', { value: !0 })
})
