;(self.webpackChunknft_ui = self.webpackChunknft_ui || []).push([
  [774],
  {
    emlf: (e, r, t) => {
      'use strict'
      var n = t('YjNL')
      function u() {}
      function a() {}
      ;(a.resetWarningCache = u),
        (e.exports = function () {
          function e(e, r, t, u, a, s) {
            if (s !== n) {
              var c = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              )
              throw ((c.name = 'Invariant Violation'), c)
            }
          }
          function r() {
            return e
          }
          e.isRequired = e
          var t = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: r,
            element: e,
            elementType: e,
            instanceOf: r,
            node: e,
            objectOf: r,
            oneOf: r,
            oneOfType: r,
            shape: r,
            exact: r,
            checkPropTypes: a,
            resetWarningCache: u,
          }
          return (t.PropTypes = t), t
        })
    },
    aWzz: (e, r, t) => {
      e.exports = t('emlf')()
    },
    YjNL: (e) => {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    '3a9g': (e, r, t) => {
      'use strict'
      var n = t('maj8'),
        u = t('xIFI')
      r.useSubscription = function (e) {
        var r = e.getCurrentValue,
          t = e.subscribe,
          a = u.useState(function () {
            return { getCurrentValue: r, subscribe: t, value: r() }
          })
        e = a[0]
        var s = a[1]
        return (
          (a = e.value),
          (e.getCurrentValue === r && e.subscribe === t) ||
            ((a = r()), s({ getCurrentValue: r, subscribe: t, value: a })),
          u.useDebugValue(a),
          u.useEffect(
            function () {
              function e() {
                if (!u) {
                  var e = r()
                  s(function (u) {
                    return u.getCurrentValue !== r || u.subscribe !== t || u.value === e ? u : n({}, u, { value: e })
                  })
                }
              }
              var u = !1,
                a = t(e)
              return (
                e(),
                function () {
                  ;(u = !0), a()
                }
              )
            },
            [r, t],
          ),
          a
        )
      }
    },
    D3Vl: (e, r, t) => {
      'use strict'
      e.exports = t('3a9g')
    },
  },
])
