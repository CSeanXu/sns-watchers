;(() => {
  'use strict'
  var e = {},
    t = {}
  function r(a) {
    var n = t[a]
    if (void 0 !== n) return n.exports
    var d = (t[a] = { id: a, loaded: !1, exports: {} }),
      o = !0
    try {
      e[a].call(d.exports, d, d.exports, r), (o = !1)
    } finally {
      o && delete t[a]
    }
    return (d.loaded = !0), d.exports
  }
  ;(r.m = e),
    (r.amdO = {}),
    (() => {
      var e = []
      r.O = (t, a, n, d) => {
        if (!a) {
          var o = 1 / 0
          for (s = 0; s < e.length; s++) {
            for (var [a, n, d] = e[s], i = !0, c = 0; c < a.length; c++)
              (!1 & d || o >= d) && Object.keys(r.O).every((e) => r.O[e](a[c]))
                ? a.splice(c--, 1)
                : ((i = !1), d < o && (o = d))
            i && (e.splice(s--, 1), (t = n()))
          }
          return t
        }
        d = d || 0
        for (var s = e.length; s > 0 && e[s - 1][2] > d; s--) e[s] = e[s - 1]
        e[s] = [a, n, d]
      }
    })(),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return r.d(t, { a: t }), t
    }),
    (r.d = (e, t) => {
      for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] })
    }),
    (r.f = {}),
    (r.e = (e) => Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), []))),
    (r.u = (e) =>
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
        16: '9426562f',
        21: '2edf8d90',
        61: 'cf6ab0d1',
        74: 'b8fd051d',
        101: 'c7f51a6f',
        110: '83ec0d86',
        113: 'e9c1f574',
        178: '91b2e7f7',
        181: 'c2d00564',
        182: 'eb1a0a32',
        226: '091c17ee',
        230: 'bdc528f6',
        302: 'c7539c44',
        310: '7ee2b264',
        325: 'badefb11',
        352: 'eb6c6b40',
        404: '1e489a73',
        408: '6b7fe88d',
        480: 'dde9f15c',
        488: 'b8fe6487',
        540: 'd29a1488',
        555: '7bdd79e8',
        573: '1545c599',
        646: 'a0246d3f',
        670: '010b930c',
        767: '2ef518ae',
        783: '4ecc5b25',
        788: '63e4f516',
        820: '28424f6e',
        826: 'ad91d785',
        842: '34f4f1da',
        860: '725550b0',
        864: 'd6558761',
        905: 'd2d1d96a',
        914: '6b2b6510',
        959: '0126bcd6',
        989: '397c6eb3',
      }[e] +
      '.js'),
    (r.miniCssF = (e) =>
      351 === e
        ? 'static/css/425615bd.css'
        : 978 === e
        ? 'static/css/965c85a3.css'
        : 'static/css/' + { 352: '83675912', 555: '7df08c46', 989: 'cb9438d3' }[e] + '.chunk.css'),
    (r.g = (function () {
      if ('object' === typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' === typeof window) return window
      }
    })()),
    (r.hmd = (e) => (
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
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = 'nft-ui:'
      r.l = (a, n, d, o) => {
        if (e[a]) e[a].push(n)
        else {
          var i, c
          if (void 0 !== d)
            for (var s = document.getElementsByTagName('script'), l = 0; l < s.length; l++) {
              var f = s[l]
              if (f.getAttribute('src') == a || f.getAttribute('data-webpack') == t + d) {
                i = f
                break
              }
            }
          i ||
            ((c = !0),
            ((i = document.createElement('script')).charset = 'utf-8'),
            (i.timeout = 120),
            r.nc && i.setAttribute('nonce', r.nc),
            i.setAttribute('data-webpack', t + d),
            (i.src = a)),
            (e[a] = [n])
          var p = (t, r) => {
              ;(i.onerror = i.onload = null), clearTimeout(u)
              var n = e[a]
              if ((delete e[a], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e) => e(r)), t))
                return t(r)
            },
            u = setTimeout(p.bind(null, void 0, { type: 'timeout', target: i }), 12e4)
          ;(i.onerror = p.bind(null, i.onerror)), (i.onload = p.bind(null, i.onload)), c && document.head.appendChild(i)
        }
      }
    })(),
    (r.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (r.p = 'https://static.devfdg.net/'),
    (() => {
      var e = (e) =>
          new Promise((t, a) => {
            var n = r.miniCssF(e),
              d = r.p + n
            if (
              ((e, t) => {
                for (var r = document.getElementsByTagName('link'), a = 0; a < r.length; a++) {
                  var n = (o = r[a]).getAttribute('data-href') || o.getAttribute('href')
                  if ('stylesheet' === o.rel && (n === e || n === t)) return o
                }
                var d = document.getElementsByTagName('style')
                for (a = 0; a < d.length; a++) {
                  var o
                  if ((n = (o = d[a]).getAttribute('data-href')) === e || n === t) return o
                }
              })(n, d)
            )
              return t()
            ;((e, t, r, a) => {
              var n = document.createElement('link')
              ;(n.rel = 'stylesheet'),
                (n.type = 'text/css'),
                (n.onerror = n.onload =
                  (d) => {
                    if (((n.onerror = n.onload = null), 'load' === d.type)) r()
                    else {
                      var o = d && ('load' === d.type ? 'missing' : d.type),
                        i = (d && d.target && d.target.href) || t,
                        c = new Error('Loading CSS chunk ' + e + ' failed.\n(' + i + ')')
                      ;(c.code = 'CSS_CHUNK_LOAD_FAILED'),
                        (c.type = o),
                        (c.request = i),
                        n.parentNode.removeChild(n),
                        a(c)
                    }
                  }),
                (n.href = t),
                document.head.appendChild(n)
            })(e, d, t, a)
          }),
        t = { 761: 0 }
      r.f.miniCss = (r, a) => {
        t[r]
          ? a.push(t[r])
          : 0 !== t[r] &&
            { 352: 1, 555: 1, 989: 1 }[r] &&
            a.push(
              (t[r] = e(r).then(
                () => {
                  t[r] = 0
                },
                (e) => {
                  throw (delete t[r], e)
                },
              )),
            )
      }
    })(),
    (() => {
      var e = { 761: 0 }
      ;(r.f.j = (t, a) => {
        var n = r.o(e, t) ? e[t] : void 0
        if (0 !== n)
          if (n) a.push(n[2])
          else if (761 != t) {
            var d = new Promise((r, a) => (n = e[t] = [r, a]))
            a.push((n[2] = d))
            var o = r.p + r.u(t),
              i = new Error()
            r.l(
              o,
              (a) => {
                if (r.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var d = a && ('load' === a.type ? 'missing' : a.type),
                    o = a && a.target && a.target.src
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
        (r.O.j = (t) => 0 === e[t])
      var t = (t, a) => {
          var n,
            d,
            [o, i, c] = a,
            s = 0
          for (n in i) r.o(i, n) && (r.m[n] = i[n])
          if (c) var l = c(r)
          for (t && t(a); s < o.length; s++) (d = o[s]), r.o(e, d) && e[d] && e[d][0](), (e[o[s]] = 0)
          return r.O(l)
        },
        a = (self.webpackChunknft_ui = self.webpackChunknft_ui || [])
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)))
    })()
})()
