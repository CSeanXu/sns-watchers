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
          for (s = 0; s < e.length; s++) {
            for (var [r, n, d] = e[s], i = !0, c = 0; c < r.length; c++)
              (!1 & d || o >= d) && Object.keys(a.O).every((e) => a.O[e](r[c]))
                ? r.splice(c--, 1)
                : ((i = !1), d < o && (o = d))
            i && (e.splice(s--, 1), (t = n()))
          }
          return t
        }
        d = d || 0
        for (var s = e.length; s > 0 && e[s - 1][2] > d; s--) e[s] = e[s - 1]
        e[s] = [r, n, d]
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
        0: '71c5fc80',
        16: '03387296',
        21: '9e934911',
        61: 'f939e2dc',
        74: 'b17eeb72',
        101: '0a30ddef',
        110: '710b3dc2',
        113: '5e94195f',
        178: 'd3a59d57',
        181: '5361b8d2',
        182: 'eb1a0a32',
        226: 'f18216ce',
        230: 'bdc528f6',
        302: 'c7539c44',
        310: 'fe56b5ee',
        325: 'badefb11',
        352: 'c130389b',
        404: 'c68ddb7c',
        408: '556eb94e',
        480: 'fff7dfcf',
        488: 'dd14e6cc',
        540: 'e8be5d08',
        555: '7bdd79e8',
        573: '6dbf7af6',
        646: 'd64814b3',
        670: '010b930c',
        767: 'a5490db4',
        783: '4ecc5b25',
        788: '63e4f516',
        820: '4658b704',
        826: '9d8ba7fd',
        842: 'b8f951e9',
        860: '8de954ea',
        864: 'a6ee6497',
        905: '6ef8aa17',
        914: 'ee23f5ac',
        959: 'aec59a9d',
        989: 'fcec0ef9',
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
          var i, c
          if (void 0 !== d)
            for (var s = document.getElementsByTagName('script'), f = 0; f < s.length; f++) {
              var l = s[f]
              if (l.getAttribute('src') == r || l.getAttribute('data-webpack') == t + d) {
                i = l
                break
              }
            }
          i ||
            ((c = !0),
            ((i = document.createElement('script')).charset = 'utf-8'),
            (i.timeout = 120),
            a.nc && i.setAttribute('nonce', a.nc),
            i.setAttribute('data-webpack', t + d),
            (i.src = r)),
            (e[r] = [n])
          var p = (t, a) => {
              ;(i.onerror = i.onload = null), clearTimeout(u)
              var n = e[r]
              if ((delete e[r], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e) => e(a)), t))
                return t(a)
            },
            u = setTimeout(p.bind(null, void 0, { type: 'timeout', target: i }), 12e4)
          ;(i.onerror = p.bind(null, i.onerror)), (i.onload = p.bind(null, i.onload)), c && document.head.appendChild(i)
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
                        c = new Error('Loading CSS chunk ' + e + ' failed.\n(' + i + ')')
                      ;(c.code = 'CSS_CHUNK_LOAD_FAILED'),
                        (c.type = o),
                        (c.request = i),
                        n.parentNode.removeChild(n),
                        r(c)
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
            [o, i, c] = r,
            s = 0
          for (n in i) a.o(i, n) && (a.m[n] = i[n])
          if (c) var f = c(a)
          for (t && t(r); s < o.length; s++) (d = o[s]), a.o(e, d) && e[d] && e[d][0](), (e[o[s]] = 0)
          return a.O(f)
        },
        r = (self.webpackChunknft_ui = self.webpackChunknft_ui || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })()
})()
