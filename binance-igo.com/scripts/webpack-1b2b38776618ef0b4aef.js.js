;(() => {
  'use strict'
  var e = {},
    a = {}
  function t(r) {
    var n = a[r]
    if (void 0 !== n) return n.exports
    var o = (a[r] = { id: r, loaded: !1, exports: {} }),
      d = !0
    try {
      e[r].call(o.exports, o, o.exports, t), (d = !1)
    } finally {
      d && delete a[r]
    }
    return (o.loaded = !0), o.exports
  }
  ;(t.m = e),
    (t.amdO = {}),
    (() => {
      var e = []
      t.O = (a, r, n, o) => {
        if (!r) {
          var d = 1 / 0
          for (s = 0; s < e.length; s++) {
            for (var [r, n, o] = e[s], c = !0, i = 0; i < r.length; i++)
              (!1 & o || d >= o) && Object.keys(t.O).every((e) => t.O[e](r[i]))
                ? r.splice(i--, 1)
                : ((c = !1), o < d && (d = o))
            c && (e.splice(s--, 1), (a = n()))
          }
          return a
        }
        o = o || 0
        for (var s = e.length; s > 0 && e[s - 1][2] > o; s--) e[s] = e[s - 1]
        e[s] = [r, n, o]
      }
    })(),
    (t.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e
      return t.d(a, { a: a }), a
    }),
    (t.d = (e, a) => {
      for (var r in a) t.o(a, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: a[r] })
    }),
    (t.f = {}),
    (t.e = (e) => Promise.all(Object.keys(t.f).reduce((a, r) => (t.f[r](e, a), a), []))),
    (t.u = (e) =>
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
        16: 'a4ed69f2',
        21: '6996e957',
        61: '9fd264ac',
        74: 'b476c1cc',
        101: 'c7f51a6f',
        110: 'bab2bae4',
        113: 'fae89f6f',
        178: '0c8721b6',
        181: '23c5ac04',
        182: 'eb1a0a32',
        226: '6597952e',
        230: '33dcefe9',
        302: 'c7539c44',
        310: 'cef362cd',
        325: 'badefb11',
        352: '4b6ab0d7',
        404: 'f102748e',
        408: '844ccaa6',
        480: '6b0fe165',
        488: '4c0f82d0',
        540: '89a73641',
        555: '39209c17',
        573: '8d42b2a0',
        646: 'c69b6d3e',
        670: '010b930c',
        767: '8367306e',
        783: '40a0da04',
        788: '63e4f516',
        820: '1a7a7e73',
        826: '4e0e70ca',
        842: 'b0c36102',
        860: '9b9a9a69',
        864: 'b8465da5',
        905: 'c3a180cb',
        914: 'f85a3ae9',
        959: '7e72bf4a',
        989: '0db4db0a',
      }[e] +
      '.js'),
    (t.miniCssF = (e) =>
      351 === e
        ? 'static/css/425615bd.css'
        : 978 === e
        ? 'static/css/965c85a3.css'
        : 'static/css/' + { 352: '83675912', 555: '7df08c46', 989: 'cb9438d3' }[e] + '.chunk.css'),
    (t.g = (function () {
      if ('object' === typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' === typeof window) return window
      }
    })()),
    (t.hmd = (e) => (
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
    (t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (() => {
      var e = {},
        a = 'nft-ui:'
      t.l = (r, n, o, d) => {
        if (e[r]) e[r].push(n)
        else {
          var c, i
          if (void 0 !== o)
            for (var s = document.getElementsByTagName('script'), l = 0; l < s.length; l++) {
              var p = s[l]
              if (p.getAttribute('src') == r || p.getAttribute('data-webpack') == a + o) {
                c = p
                break
              }
            }
          c ||
            ((i = !0),
            ((c = document.createElement('script')).charset = 'utf-8'),
            (c.timeout = 120),
            t.nc && c.setAttribute('nonce', t.nc),
            c.setAttribute('data-webpack', a + o),
            (c.src = r)),
            (e[r] = [n])
          var f = (a, t) => {
              ;(c.onerror = c.onload = null), clearTimeout(u)
              var n = e[r]
              if ((delete e[r], c.parentNode && c.parentNode.removeChild(c), n && n.forEach((e) => e(t)), a))
                return a(t)
            },
            u = setTimeout(f.bind(null, void 0, { type: 'timeout', target: c }), 12e4)
          ;(c.onerror = f.bind(null, c.onerror)), (c.onload = f.bind(null, c.onload)), i && document.head.appendChild(c)
        }
      }
    })(),
    (t.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (t.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (t.p = 'https://static.devfdg.net/'),
    (() => {
      var e = (e) =>
          new Promise((a, r) => {
            var n = t.miniCssF(e),
              o = t.p + n
            if (
              ((e, a) => {
                for (var t = document.getElementsByTagName('link'), r = 0; r < t.length; r++) {
                  var n = (d = t[r]).getAttribute('data-href') || d.getAttribute('href')
                  if ('stylesheet' === d.rel && (n === e || n === a)) return d
                }
                var o = document.getElementsByTagName('style')
                for (r = 0; r < o.length; r++) {
                  var d
                  if ((n = (d = o[r]).getAttribute('data-href')) === e || n === a) return d
                }
              })(n, o)
            )
              return a()
            ;((e, a, t, r) => {
              var n = document.createElement('link')
              ;(n.rel = 'stylesheet'),
                (n.type = 'text/css'),
                (n.onerror = n.onload =
                  (o) => {
                    if (((n.onerror = n.onload = null), 'load' === o.type)) t()
                    else {
                      var d = o && ('load' === o.type ? 'missing' : o.type),
                        c = (o && o.target && o.target.href) || a,
                        i = new Error('Loading CSS chunk ' + e + ' failed.\n(' + c + ')')
                      ;(i.code = 'CSS_CHUNK_LOAD_FAILED'),
                        (i.type = d),
                        (i.request = c),
                        n.parentNode.removeChild(n),
                        r(i)
                    }
                  }),
                (n.href = a),
                document.head.appendChild(n)
            })(e, o, a, r)
          }),
        a = { 761: 0 }
      t.f.miniCss = (t, r) => {
        a[t]
          ? r.push(a[t])
          : 0 !== a[t] &&
            { 352: 1, 555: 1, 989: 1 }[t] &&
            r.push(
              (a[t] = e(t).then(
                () => {
                  a[t] = 0
                },
                (e) => {
                  throw (delete a[t], e)
                },
              )),
            )
      }
    })(),
    (() => {
      var e = { 761: 0 }
      ;(t.f.j = (a, r) => {
        var n = t.o(e, a) ? e[a] : void 0
        if (0 !== n)
          if (n) r.push(n[2])
          else if (761 != a) {
            var o = new Promise((t, r) => (n = e[a] = [t, r]))
            r.push((n[2] = o))
            var d = t.p + t.u(a),
              c = new Error()
            t.l(
              d,
              (r) => {
                if (t.o(e, a) && (0 !== (n = e[a]) && (e[a] = void 0), n)) {
                  var o = r && ('load' === r.type ? 'missing' : r.type),
                    d = r && r.target && r.target.src
                  ;(c.message = 'Loading chunk ' + a + ' failed.\n(' + o + ': ' + d + ')'),
                    (c.name = 'ChunkLoadError'),
                    (c.type = o),
                    (c.request = d),
                    n[1](c)
                }
              },
              'chunk-' + a,
              a,
            )
          } else e[a] = 0
      }),
        (t.O.j = (a) => 0 === e[a])
      var a = (a, r) => {
          var n,
            o,
            [d, c, i] = r,
            s = 0
          for (n in c) t.o(c, n) && (t.m[n] = c[n])
          if (i) var l = i(t)
          for (a && a(r); s < d.length; s++) (o = d[s]), t.o(e, o) && e[o] && e[o][0](), (e[d[s]] = 0)
          return t.O(l)
        },
        r = (self.webpackChunknft_ui = self.webpackChunknft_ui || [])
      r.forEach(a.bind(null, 0)), (r.push = a.bind(null, r.push.bind(r)))
    })()
})()
