;(() => {
  'use strict'
  var e = {},
    t = {}
  function a(r) {
    var n = t[r]
    if (void 0 !== n) return n.exports
    var d = (t[r] = { id: r, loaded: !1, exports: {} }),
      o = !0
    try {
      e[r].call(d.exports, d, d.exports, a), (o = !1)
    } finally {
      o && delete t[r]
    }
    return (d.loaded = !0), d.exports
  }
  ;(a.m = e),
    (a.amdO = {}),
    (() => {
      var e = []
      a.O = (t, r, n, d) => {
        if (!r) {
          var o = 1 / 0
          for (c = 0; c < e.length; c++) {
            for (var [r, n, d] = e[c], i = !0, s = 0; s < r.length; s++)
              (!1 & d || o >= d) && Object.keys(a.O).every((e) => a.O[e](r[s]))
                ? r.splice(s--, 1)
                : ((i = !1), d < o && (o = d))
            i && (e.splice(c--, 1), (t = n()))
          }
          return t
        }
        d = d || 0
        for (var c = e.length; c > 0 && e[c - 1][2] > d; c--) e[c] = e[c - 1]
        e[c] = [r, n, d]
      }
    })(),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return a.d(t, { a: t }), t
    }),
    (a.d = (e, t) => {
      for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (a.f = {}),
    (a.e = (e) => Promise.all(Object.keys(a.f).reduce((t, r) => (a.f[r](e, t), t), []))),
    (a.u = (e) =>
      'static/chunks/' +
      ({
        0: 'page-f2eb',
        16: 'page-9b64',
        21: 'page-5c85',
        61: 'page-5d27',
        74: 'page-223f',
        101: 'page-e11d',
        110: 'page-3aa2',
        113: 'page-7d63',
        178: 'page-94e6',
        181: 'page-3c5a',
        182: '2edb282b',
        226: 'page-ded1',
        230: 'page-a531',
        302: '07faf3a2',
        310: 'page-8e30',
        325: '413057b3',
        352: 'page-d00a',
        404: 'page-f4c4',
        408: 'page-bfed',
        480: 'page-1887',
        488: 'page-be6a',
        540: 'page-9969',
        555: 'page-f09b',
        573: 'page-363a',
        646: 'page-be09',
        767: 'page-7f3f',
        783: 'page-80d8',
        788: 'page-79c1',
        820: 'page-f0c2',
        826: 'page-c3e8',
        842: 'page-b1e6',
        860: 'page-5822',
        864: 'page-5316',
        905: 'page-0301',
        914: 'page-c0b0',
        959: 'page-2fe4',
        989: 'page-d549',
      }[e] || e) +
      '.' +
      {
        0: '16dd6602',
        16: 'e956c497',
        21: '6996e957',
        61: 'dfd415f5',
        74: 'c36241bc',
        101: 'c7f51a6f',
        110: '66366f62',
        113: '20befb5c',
        178: '9320f333',
        181: 'ad98473e',
        182: 'eb1a0a32',
        226: '1a16ad8a',
        230: '33dcefe9',
        302: 'c7539c44',
        310: '10d81af1',
        325: 'badefb11',
        352: '1ddf08de',
        404: '25e1afd6',
        408: '7a277153',
        480: 'afec07ed',
        488: '324517db',
        540: '440a7c56',
        555: '39209c17',
        573: 'f0bfb7b4',
        646: 'c91ae109',
        670: '902dda7b',
        767: '675aeae3',
        783: '40a0da04',
        788: '63e4f516',
        820: '1a7a7e73',
        826: '637e1881',
        842: 'cdcceed2',
        860: '6be5bb11',
        864: 'b8465da5',
        905: '9b1b1529',
        914: 'f85a3ae9',
        959: '87518e22',
        989: '0db4db0a',
      }[e] +
      '.js'),
    (a.miniCssF = (e) =>
      351 === e
        ? 'static/css/425615bd.css'
        : 978 === e
        ? 'static/css/965c85a3.css'
        : 'static/css/' + { 352: '83675912', 555: '7df08c46', 989: 'cb9438d3' }[e] + '.chunk.css'),
    (a.g = (function () {
      if ('object' === typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' === typeof window) return window
      }
    })()),
    (a.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + e.id,
          )
        },
      }),
      e
    )),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = 'nft-ui:'
      a.l = (r, n, d, o) => {
        if (e[r]) e[r].push(n)
        else {
          var i, s
          if (void 0 !== d)
            for (var c = document.getElementsByTagName('script'), l = 0; l < c.length; l++) {
              var p = c[l]
              if (p.getAttribute('src') == r || p.getAttribute('data-webpack') == t + d) {
                i = p
                break
              }
            }
          i ||
            ((s = !0),
            ((i = document.createElement('script')).charset = 'utf-8'),
            (i.timeout = 120),
            a.nc && i.setAttribute('nonce', a.nc),
            i.setAttribute('data-webpack', t + d),
            (i.src = r)),
            (e[r] = [n])
          var f = (t, a) => {
              ;(i.onerror = i.onload = null), clearTimeout(u)
              var n = e[r]
              if ((delete e[r], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e) => e(a)), t))
                return t(a)
            },
            u = setTimeout(f.bind(null, void 0, { type: 'timeout', target: i }), 12e4)
          ;(i.onerror = f.bind(null, i.onerror)), (i.onload = f.bind(null, i.onload)), s && document.head.appendChild(i)
        }
      }
    })(),
    (a.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (a.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (a.p = 'https://static.devfdg.net/'),
    (() => {
      var e = (e) =>
          new Promise((t, r) => {
            var n = a.miniCssF(e),
              d = a.p + n
            if (
              ((e, t) => {
                for (var a = document.getElementsByTagName('link'), r = 0; r < a.length; r++) {
                  var n = (o = a[r]).getAttribute('data-href') || o.getAttribute('href')
                  if ('stylesheet' === o.rel && (n === e || n === t)) return o
                }
                var d = document.getElementsByTagName('style')
                for (r = 0; r < d.length; r++) {
                  var o
                  if ((n = (o = d[r]).getAttribute('data-href')) === e || n === t) return o
                }
              })(n, d)
            )
              return t()
            ;((e, t, a, r) => {
              var n = document.createElement('link')
              ;(n.rel = 'stylesheet'),
                (n.type = 'text/css'),
                (n.onerror = n.onload =
                  (d) => {
                    if (((n.onerror = n.onload = null), 'load' === d.type)) a()
                    else {
                      var o = d && ('load' === d.type ? 'missing' : d.type),
                        i = (d && d.target && d.target.href) || t,
                        s = new Error('Loading CSS chunk ' + e + ' failed.\n(' + i + ')')
                      ;(s.code = 'CSS_CHUNK_LOAD_FAILED'),
                        (s.type = o),
                        (s.request = i),
                        n.parentNode.removeChild(n),
                        r(s)
                    }
                  }),
                (n.href = t),
                document.head.appendChild(n)
            })(e, d, t, r)
          }),
        t = { 761: 0 }
      a.f.miniCss = (a, r) => {
        t[a]
          ? r.push(t[a])
          : 0 !== t[a] &&
            { 352: 1, 555: 1, 989: 1 }[a] &&
            r.push(
              (t[a] = e(a).then(
                () => {
                  t[a] = 0
                },
                (e) => {
                  throw (delete t[a], e)
                },
              )),
            )
      }
    })(),
    (() => {
      var e = { 761: 0 }
      ;(a.f.j = (t, r) => {
        var n = a.o(e, t) ? e[t] : void 0
        if (0 !== n)
          if (n) r.push(n[2])
          else if (761 != t) {
            var d = new Promise((a, r) => (n = e[t] = [a, r]))
            r.push((n[2] = d))
            var o = a.p + a.u(t),
              i = new Error()
            a.l(
              o,
              (r) => {
                if (a.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var d = r && ('load' === r.type ? 'missing' : r.type),
                    o = r && r.target && r.target.src
                  ;(i.message = 'Loading chunk ' + t + ' failed.\n(' + d + ': ' + o + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = d),
                    (i.request = o),
                    n[1](i)
                }
              },
              'chunk-' + t,
              t,
            )
          } else e[t] = 0
      }),
        (a.O.j = (t) => 0 === e[t])
      var t = (t, r) => {
          var n,
            d,
            [o, i, s] = r,
            c = 0
          for (n in i) a.o(i, n) && (a.m[n] = i[n])
          if (s) var l = s(a)
          for (t && t(r); c < o.length; c++) (d = o[c]), a.o(e, d) && e[d] && e[d][0](), (e[o[c]] = 0)
          return a.O(l)
        },
        r = (self.webpackChunknft_ui = self.webpackChunknft_ui || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })()
})()
