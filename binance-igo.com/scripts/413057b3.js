;(self.webpackChunknft_ui = self.webpackChunknft_ui || []).push([
  [325],
  {
    esVC: (e, t, i) => {
      'use strict'
      i.d(t, { Z: () => il })
      for (
        var n,
          r = i('NyMY'),
          a = i.n(r),
          s = i('ZthD'),
          o = i.n(s),
          l = i('cxan'),
          u = i('pWxA'),
          d = i('BFfR'),
          c = i('Kzzp'),
          h = i.n(c),
          p = i('1x0w'),
          f = i.n(p),
          m = i('tmQ4'),
          g = i.n(m),
          _ = i('qMzl'),
          v = i.n(_),
          y = i('qDiq'),
          T = i('8K1b'),
          b = i('HTm/'),
          S = i('QfP+'),
          k = i('k0MO'),
          C = i('+MZl'),
          E = i('wfXp'),
          w = i('uKxg'),
          x = i.n(w),
          I = i('awWL'),
          P = i('KUle'),
          A = i('qWy0'),
          L = i('aU7f'),
          O = '7.15.4',
          D = {},
          M = function (e, t) {
            return (D[e] = D[e] || []), t && (D[e] = D[e].concat(t)), D[e]
          },
          R = function (e, t) {
            var i = M(e).indexOf(t)
            return !(i <= -1) && ((D[e] = D[e].slice()), D[e].splice(i, 1), !0)
          },
          U = { prefixed: !0 },
          B = [
            [
              'requestFullscreen',
              'exitFullscreen',
              'fullscreenElement',
              'fullscreenEnabled',
              'fullscreenchange',
              'fullscreenerror',
              'fullscreen',
            ],
            [
              'webkitRequestFullscreen',
              'webkitExitFullscreen',
              'webkitFullscreenElement',
              'webkitFullscreenEnabled',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
              '-webkit-full-screen',
            ],
            [
              'mozRequestFullScreen',
              'mozCancelFullScreen',
              'mozFullScreenElement',
              'mozFullScreenEnabled',
              'mozfullscreenchange',
              'mozfullscreenerror',
              '-moz-full-screen',
            ],
            [
              'msRequestFullscreen',
              'msExitFullscreen',
              'msFullscreenElement',
              'msFullscreenEnabled',
              'MSFullscreenChange',
              'MSFullscreenError',
              '-ms-fullscreen',
            ],
          ],
          N = B[0],
          F = 0;
        F < B.length;
        F++
      )
        if (B[F][1] in o()) {
          n = B[F]
          break
        }
      if (n) {
        for (var j = 0; j < n.length; j++) U[N[j]] = n[j]
        U.prefixed = n[0] !== N[0]
      }
      var H = []
      var q = (function e(t) {
          var i,
            n = 'info',
            r = function () {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
              i('log', n, t)
            }
          return (
            (i = (function (e, t) {
              return function (i, n, r) {
                var s = t.levels[n],
                  o = new RegExp('^(' + s + ')$')
                if (('log' !== i && r.unshift(i.toUpperCase() + ':'), r.unshift(e + ':'), H)) {
                  H.push([].concat(r))
                  var l = H.length - 1e3
                  H.splice(0, l > 0 ? l : 0)
                }
                if (a().console) {
                  var u = a().console[i]
                  u || 'debug' !== i || (u = a().console.info || a().console.log),
                    u && s && o.test(i) && u[Array.isArray(r) ? 'apply' : 'call'](a().console, r)
                }
              }
            })(t, r)),
            (r.createLogger = function (i) {
              return e(t + ': ' + i)
            }),
            (r.levels = {
              all: 'debug|log|warn|error',
              off: '',
              debug: 'debug|log|warn|error',
              info: 'log|warn|error',
              warn: 'warn|error',
              error: 'error',
              DEFAULT: n,
            }),
            (r.level = function (e) {
              if ('string' === typeof e) {
                if (!r.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level')
                n = e
              }
              return n
            }),
            ((r.history = function () {
              return H ? [].concat(H) : []
            }).filter = function (e) {
              return (H || []).filter(function (t) {
                return new RegExp('.*' + e + '.*').test(t[0])
              })
            }),
            (r.history.clear = function () {
              H && (H.length = 0)
            }),
            (r.history.disable = function () {
              null !== H && ((H.length = 0), (H = null))
            }),
            (r.history.enable = function () {
              null === H && (H = [])
            }),
            (r.error = function () {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
              return i('error', n, t)
            }),
            (r.warn = function () {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
              return i('warn', n, t)
            }),
            (r.debug = function () {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
              return i('debug', n, t)
            }),
            r
          )
        })('VIDEOJS'),
        V = q.createLogger,
        W = Object.prototype.toString,
        z = function (e) {
          return Z(e) ? Object.keys(e) : []
        }
      function G(e, t) {
        z(e).forEach(function (i) {
          return t(e[i], i)
        })
      }
      function K(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n]
        return Object.assign
          ? l.Z.apply(void 0, [e].concat(i))
          : (i.forEach(function (t) {
              t &&
                G(t, function (t, i) {
                  e[i] = t
                })
            }),
            e)
      }
      function Z(e) {
        return !!e && 'object' === typeof e
      }
      function Q(e) {
        return Z(e) && '[object Object]' === W.call(e) && e.constructor === Object
      }
      function X(e, t) {
        if (!e || !t) return ''
        if ('function' === typeof a().getComputedStyle) {
          var i
          try {
            i = a().getComputedStyle(e)
          } catch (n) {
            return ''
          }
          return i ? i.getPropertyValue(t) || i[t] : ''
        }
        return ''
      }
      var Y = (a().navigator && a().navigator.userAgent) || '',
        $ = /AppleWebKit\/([\d.]+)/i.exec(Y),
        J = $ ? parseFloat($.pop()) : null,
        ee = /iPod/i.test(Y),
        te = (function () {
          var e = Y.match(/OS (\d+)_/i)
          return e && e[1] ? e[1] : null
        })(),
        ie = /Android/i.test(Y),
        ne = (function () {
          var e = Y.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i)
          if (!e) return null
          var t = e[1] && parseFloat(e[1]),
            i = e[2] && parseFloat(e[2])
          return t && i ? parseFloat(e[1] + '.' + e[2]) : t || null
        })(),
        re = ie && ne < 5 && J < 537,
        ae = /Firefox/i.test(Y),
        se = /Edg/i.test(Y),
        oe = !se && (/Chrome/i.test(Y) || /CriOS/i.test(Y)),
        le = (function () {
          var e = Y.match(/(Chrome|CriOS)\/(\d+)/)
          return e && e[2] ? parseFloat(e[2]) : null
        })(),
        ue = (function () {
          var e = /MSIE\s(\d+)\.\d/.exec(Y),
            t = e && parseFloat(e[1])
          return !t && /Trident\/7.0/i.test(Y) && /rv:11.0/.test(Y) && (t = 11), t
        })(),
        de = /Safari/i.test(Y) && !oe && !ie && !se,
        ce = /Windows/i.test(Y),
        he = Boolean(
          Te() &&
            ('ontouchstart' in a() ||
              a().navigator.maxTouchPoints ||
              (a().DocumentTouch && a().document instanceof a().DocumentTouch)),
        ),
        pe = /iPad/i.test(Y) || (de && he && !/iPhone/i.test(Y)),
        fe = /iPhone/i.test(Y) && !pe,
        me = fe || pe || ee,
        ge = (de || me) && !oe,
        _e = Object.freeze({
          __proto__: null,
          IS_IPOD: ee,
          IOS_VERSION: te,
          IS_ANDROID: ie,
          ANDROID_VERSION: ne,
          IS_NATIVE_ANDROID: re,
          IS_FIREFOX: ae,
          IS_EDGE: se,
          IS_CHROME: oe,
          CHROME_VERSION: le,
          IE_VERSION: ue,
          IS_SAFARI: de,
          IS_WINDOWS: ce,
          TOUCH_ENABLED: he,
          IS_IPAD: pe,
          IS_IPHONE: fe,
          IS_IOS: me,
          IS_ANY_SAFARI: ge,
        })
      function ve(e) {
        return 'string' === typeof e && Boolean(e.trim())
      }
      function ye(e) {
        if (e.indexOf(' ') >= 0) throw new Error('class has illegal whitespace characters')
      }
      function Te() {
        return o() === a().document
      }
      function be(e) {
        return Z(e) && 1 === e.nodeType
      }
      function Se() {
        try {
          return a().parent !== a().self
        } catch (e) {
          return !0
        }
      }
      function ke(e) {
        return function (t, i) {
          if (!ve(t)) return o()[e](null)
          ve(i) && (i = o().querySelector(i))
          var n = be(i) ? i : o()
          return n[e] && n[e](t)
        }
      }
      function Ce(e, t, i, n) {
        void 0 === e && (e = 'div'), void 0 === t && (t = {}), void 0 === i && (i = {})
        var r = o().createElement(e)
        return (
          Object.getOwnPropertyNames(t).forEach(function (e) {
            var i = t[e]
            ;-1 !== e.indexOf('aria-') || 'role' === e || 'type' === e
              ? (q.warn(
                  'Setting attributes in the second argument of createEl()\nhas been deprecated. Use the third argument instead.\ncreateEl(type, properties, attributes). Attempting to set ' +
                    e +
                    ' to ' +
                    i +
                    '.',
                ),
                r.setAttribute(e, i))
              : 'textContent' === e
              ? Ee(r, i)
              : (r[e] === i && 'tabIndex' !== e) || (r[e] = i)
          }),
          Object.getOwnPropertyNames(i).forEach(function (e) {
            r.setAttribute(e, i[e])
          }),
          n && We(r, n),
          r
        )
      }
      function Ee(e, t) {
        return 'undefined' === typeof e.textContent ? (e.innerText = t) : (e.textContent = t), e
      }
      function we(e, t) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
      }
      function xe(e, t) {
        return (
          ye(t),
          e.classList ? e.classList.contains(t) : ((i = t), new RegExp('(^|\\s)' + i + '($|\\s)')).test(e.className)
        )
        var i
      }
      function Ie(e, t) {
        return e.classList ? e.classList.add(t) : xe(e, t) || (e.className = (e.className + ' ' + t).trim()), e
      }
      function Pe(e, t) {
        return e
          ? (e.classList
              ? e.classList.remove(t)
              : (ye(t),
                (e.className = e.className
                  .split(/\s+/)
                  .filter(function (e) {
                    return e !== t
                  })
                  .join(' '))),
            e)
          : (q.warn("removeClass was called with an element that doesn't exist"), null)
      }
      function Ae(e, t, i) {
        var n = xe(e, t)
        if (('function' === typeof i && (i = i(e, t)), 'boolean' !== typeof i && (i = !n), i !== n))
          return i ? Ie(e, t) : Pe(e, t), e
      }
      function Le(e, t) {
        Object.getOwnPropertyNames(t).forEach(function (i) {
          var n = t[i]
          null === n || 'undefined' === typeof n || !1 === n
            ? e.removeAttribute(i)
            : e.setAttribute(i, !0 === n ? '' : n)
        })
      }
      function Oe(e) {
        var t = {},
          i = ',autoplay,controls,playsinline,loop,muted,default,defaultMuted,'
        if (e && e.attributes && e.attributes.length > 0)
          for (var n = e.attributes, r = n.length - 1; r >= 0; r--) {
            var a = n[r].name,
              s = n[r].value
            ;('boolean' !== typeof e[a] && -1 === i.indexOf(',' + a + ',')) || (s = null !== s), (t[a] = s)
          }
        return t
      }
      function De(e, t) {
        return e.getAttribute(t)
      }
      function Me(e, t, i) {
        e.setAttribute(t, i)
      }
      function Re(e, t) {
        e.removeAttribute(t)
      }
      function Ue() {
        o().body.focus(),
          (o().onselectstart = function () {
            return !1
          })
      }
      function Be() {
        o().onselectstart = function () {
          return !0
        }
      }
      function Ne(e) {
        if (e && e.getBoundingClientRect && e.parentNode) {
          var t = e.getBoundingClientRect(),
            i = {}
          return (
            ['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(function (e) {
              void 0 !== t[e] && (i[e] = t[e])
            }),
            i.height || (i.height = parseFloat(X(e, 'height'))),
            i.width || (i.width = parseFloat(X(e, 'width'))),
            i
          )
        }
      }
      function Fe(e) {
        if (!e || (e && !e.offsetParent)) return { left: 0, top: 0, width: 0, height: 0 }
        for (
          var t = e.offsetWidth, i = e.offsetHeight, n = 0, r = 0;
          e.offsetParent && e !== o()[U.fullscreenElement];

        )
          (n += e.offsetLeft), (r += e.offsetTop), (e = e.offsetParent)
        return { left: n, top: r, width: t, height: i }
      }
      function je(e, t) {
        var i = { x: 0, y: 0 }
        if (me)
          for (var n = e; n && 'html' !== n.nodeName.toLowerCase(); ) {
            var r = X(n, 'transform')
            if (/^matrix/.test(r)) {
              var a = r.slice(7, -1).split(/,\s/).map(Number)
              ;(i.x += a[4]), (i.y += a[5])
            } else if (/^matrix3d/.test(r)) {
              var s = r.slice(9, -1).split(/,\s/).map(Number)
              ;(i.x += s[12]), (i.y += s[13])
            }
            n = n.parentNode
          }
        var o = {},
          l = Fe(t.target),
          u = Fe(e),
          d = u.width,
          c = u.height,
          h = t.offsetY - (u.top - l.top),
          p = t.offsetX - (u.left - l.left)
        return (
          t.changedTouches &&
            ((p = t.changedTouches[0].pageX - u.left),
            (h = t.changedTouches[0].pageY + u.top),
            me && ((p -= i.x), (h -= i.y))),
          (o.y = 1 - Math.max(0, Math.min(1, h / c))),
          (o.x = Math.max(0, Math.min(1, p / d))),
          o
        )
      }
      function He(e) {
        return Z(e) && 3 === e.nodeType
      }
      function qe(e) {
        for (; e.firstChild; ) e.removeChild(e.firstChild)
        return e
      }
      function Ve(e) {
        return (
          'function' === typeof e && (e = e()),
          (Array.isArray(e) ? e : [e])
            .map(function (e) {
              return (
                'function' === typeof e && (e = e()),
                be(e) || He(e) ? e : 'string' === typeof e && /\S/.test(e) ? o().createTextNode(e) : void 0
              )
            })
            .filter(function (e) {
              return e
            })
        )
      }
      function We(e, t) {
        return (
          Ve(t).forEach(function (t) {
            return e.appendChild(t)
          }),
          e
        )
      }
      function ze(e, t) {
        return We(qe(e), t)
      }
      function Ge(e) {
        return (
          (void 0 === e.button && void 0 === e.buttons) ||
          (0 === e.button && void 0 === e.buttons) ||
          ('mouseup' === e.type && 0 === e.button && 0 === e.buttons) ||
          (0 === e.button && 1 === e.buttons)
        )
      }
      var Ke,
        Ze = ke('querySelector'),
        Qe = ke('querySelectorAll'),
        Xe = Object.freeze({
          __proto__: null,
          isReal: Te,
          isEl: be,
          isInFrame: Se,
          createEl: Ce,
          textContent: Ee,
          prependTo: we,
          hasClass: xe,
          addClass: Ie,
          removeClass: Pe,
          toggleClass: Ae,
          setAttributes: Le,
          getAttributes: Oe,
          getAttribute: De,
          setAttribute: Me,
          removeAttribute: Re,
          blockTextSelection: Ue,
          unblockTextSelection: Be,
          getBoundingClientRect: Ne,
          findPosition: Fe,
          getPointerPosition: je,
          isTextNode: He,
          emptyEl: qe,
          normalizeContent: Ve,
          appendContent: We,
          insertContent: ze,
          isSingleLeftClick: Ge,
          $: Ze,
          $$: Qe,
        }),
        Ye = !1,
        $e = function () {
          if (!1 !== Ke.options.autoSetup) {
            var e = Array.prototype.slice.call(o().getElementsByTagName('video')),
              t = Array.prototype.slice.call(o().getElementsByTagName('audio')),
              i = Array.prototype.slice.call(o().getElementsByTagName('video-js')),
              n = e.concat(t, i)
            if (n && n.length > 0)
              for (var r = 0, a = n.length; r < a; r++) {
                var s = n[r]
                if (!s || !s.getAttribute) {
                  Je(1)
                  break
                }
                void 0 === s.player && null !== s.getAttribute('data-setup') && Ke(s)
              }
            else Ye || Je(1)
          }
        }
      function Je(e, t) {
        Te() && (t && (Ke = t), a().setTimeout($e, e))
      }
      function et() {
        ;(Ye = !0), a().removeEventListener('load', et)
      }
      Te() && ('complete' === o().readyState ? et() : a().addEventListener('load', et))
      var tt,
        it = function (e) {
          var t = o().createElement('style')
          return (t.className = e), t
        },
        nt = function (e, t) {
          e.styleSheet ? (e.styleSheet.cssText = t) : (e.textContent = t)
        },
        rt = 3
      function at() {
        return rt++
      }
      a().WeakMap ||
        (tt = (function () {
          function e() {
            ;(this.vdata = 'vdata' + Math.floor((a().performance && a().performance.now()) || Date.now())),
              (this.data = {})
          }
          var t = e.prototype
          return (
            (t.set = function (e, t) {
              var i = e[this.vdata] || at()
              return e[this.vdata] || (e[this.vdata] = i), (this.data[i] = t), this
            }),
            (t.get = function (e) {
              var t = e[this.vdata]
              if (t) return this.data[t]
              q('We have no data for this element', e)
            }),
            (t.has = function (e) {
              return e[this.vdata] in this.data
            }),
            (t.delete = function (e) {
              var t = e[this.vdata]
              t && (delete this.data[t], delete e[this.vdata])
            }),
            e
          )
        })())
      var st,
        ot = a().WeakMap ? new WeakMap() : new tt()
      function lt(e, t) {
        if (ot.has(e)) {
          var i = ot.get(e)
          0 === i.handlers[t].length &&
            (delete i.handlers[t],
            e.removeEventListener
              ? e.removeEventListener(t, i.dispatcher, !1)
              : e.detachEvent && e.detachEvent('on' + t, i.dispatcher)),
            Object.getOwnPropertyNames(i.handlers).length <= 0 &&
              (delete i.handlers, delete i.dispatcher, delete i.disabled),
            0 === Object.getOwnPropertyNames(i).length && ot.delete(e)
        }
      }
      function ut(e, t, i, n) {
        i.forEach(function (i) {
          e(t, i, n)
        })
      }
      function dt(e) {
        if (e.fixed_) return e
        function t() {
          return !0
        }
        function i() {
          return !1
        }
        if (!e || !e.isPropagationStopped || !e.isImmediatePropagationStopped) {
          var n = e || a().event
          for (var r in ((e = {}), n))
            'layerX' !== r &&
              'layerY' !== r &&
              'keyLocation' !== r &&
              'webkitMovementX' !== r &&
              'webkitMovementY' !== r &&
              (('returnValue' === r && n.preventDefault) || (e[r] = n[r]))
          if (
            (e.target || (e.target = e.srcElement || o()),
            e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement),
            (e.preventDefault = function () {
              n.preventDefault && n.preventDefault(),
                (e.returnValue = !1),
                (n.returnValue = !1),
                (e.defaultPrevented = !0)
            }),
            (e.defaultPrevented = !1),
            (e.stopPropagation = function () {
              n.stopPropagation && n.stopPropagation(),
                (e.cancelBubble = !0),
                (n.cancelBubble = !0),
                (e.isPropagationStopped = t)
            }),
            (e.isPropagationStopped = i),
            (e.stopImmediatePropagation = function () {
              n.stopImmediatePropagation && n.stopImmediatePropagation(),
                (e.isImmediatePropagationStopped = t),
                e.stopPropagation()
            }),
            (e.isImmediatePropagationStopped = i),
            null !== e.clientX && void 0 !== e.clientX)
          ) {
            var s = o().documentElement,
              l = o().body
            ;(e.pageX =
              e.clientX +
              ((s && s.scrollLeft) || (l && l.scrollLeft) || 0) -
              ((s && s.clientLeft) || (l && l.clientLeft) || 0)),
              (e.pageY =
                e.clientY +
                ((s && s.scrollTop) || (l && l.scrollTop) || 0) -
                ((s && s.clientTop) || (l && l.clientTop) || 0))
          }
          ;(e.which = e.charCode || e.keyCode),
            null !== e.button &&
              void 0 !== e.button &&
              (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
        }
        return (e.fixed_ = !0), e
      }
      var ct = ['touchstart', 'touchmove']
      function ht(e, t, i) {
        if (Array.isArray(t)) return ut(ht, e, t, i)
        ot.has(e) || ot.set(e, {})
        var n = ot.get(e)
        if (
          (n.handlers || (n.handlers = {}),
          n.handlers[t] || (n.handlers[t] = []),
          i.guid || (i.guid = at()),
          n.handlers[t].push(i),
          n.dispatcher ||
            ((n.disabled = !1),
            (n.dispatcher = function (t, i) {
              if (!n.disabled) {
                t = dt(t)
                var r = n.handlers[t.type]
                if (r)
                  for (var a = r.slice(0), s = 0, o = a.length; s < o && !t.isImmediatePropagationStopped(); s++)
                    try {
                      a[s].call(e, t, i)
                    } catch (l) {
                      q.error(l)
                    }
              }
            })),
          1 === n.handlers[t].length)
        )
          if (e.addEventListener) {
            var r = !1
            ;(function () {
              if ('boolean' !== typeof st) {
                st = !1
                try {
                  var e = Object.defineProperty({}, 'passive', {
                    get: function () {
                      st = !0
                    },
                  })
                  a().addEventListener('test', null, e), a().removeEventListener('test', null, e)
                } catch (t) {}
              }
              return st
            })() &&
              ct.indexOf(t) > -1 &&
              (r = { passive: !0 }),
              e.addEventListener(t, n.dispatcher, r)
          } else e.attachEvent && e.attachEvent('on' + t, n.dispatcher)
      }
      function pt(e, t, i) {
        if (ot.has(e)) {
          var n = ot.get(e)
          if (n.handlers) {
            if (Array.isArray(t)) return ut(pt, e, t, i)
            var r = function (e, t) {
              ;(n.handlers[t] = []), lt(e, t)
            }
            if (void 0 !== t) {
              var a = n.handlers[t]
              if (a)
                if (i) {
                  if (i.guid) for (var s = 0; s < a.length; s++) a[s].guid === i.guid && a.splice(s--, 1)
                  lt(e, t)
                } else r(e, t)
            } else for (var o in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, o) && r(e, o)
          }
        }
      }
      function ft(e, t, i) {
        var n = ot.has(e) ? ot.get(e) : {},
          r = e.parentNode || e.ownerDocument
        if (
          ('string' === typeof t ? (t = { type: t, target: e }) : t.target || (t.target = e),
          (t = dt(t)),
          n.dispatcher && n.dispatcher.call(e, t, i),
          r && !t.isPropagationStopped() && !0 === t.bubbles)
        )
          ft.call(null, r, t, i)
        else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
          ot.has(t.target) || ot.set(t.target, {})
          var a = ot.get(t.target)
          t.target[t.type] &&
            ((a.disabled = !0), 'function' === typeof t.target[t.type] && t.target[t.type](), (a.disabled = !1))
        }
        return !t.defaultPrevented
      }
      function mt(e, t, i) {
        if (Array.isArray(t)) return ut(mt, e, t, i)
        var n = function n() {
          pt(e, t, n), i.apply(this, arguments)
        }
        ;(n.guid = i.guid = i.guid || at()), ht(e, t, n)
      }
      function gt(e, t, i) {
        var n = function n() {
          pt(e, t, n), i.apply(this, arguments)
        }
        ;(n.guid = i.guid = i.guid || at()), ht(e, t, n)
      }
      var _t,
        vt = Object.freeze({ __proto__: null, fixEvent: dt, on: ht, off: pt, trigger: ft, one: mt, any: gt }),
        yt = 30,
        Tt = function (e, t, i) {
          t.guid || (t.guid = at())
          var n = t.bind(e)
          return (n.guid = i ? i + '_' + t.guid : t.guid), n
        },
        bt = function (e, t) {
          var i = a().performance.now()
          return function () {
            var n = a().performance.now()
            n - i >= t && (e.apply(void 0, arguments), (i = n))
          }
        },
        St = function () {}
      ;(St.prototype.allowedEvents_ = {}),
        (St.prototype.on = function (e, t) {
          var i = this.addEventListener
          ;(this.addEventListener = function () {}), ht(this, e, t), (this.addEventListener = i)
        }),
        (St.prototype.addEventListener = St.prototype.on),
        (St.prototype.off = function (e, t) {
          pt(this, e, t)
        }),
        (St.prototype.removeEventListener = St.prototype.off),
        (St.prototype.one = function (e, t) {
          var i = this.addEventListener
          ;(this.addEventListener = function () {}), mt(this, e, t), (this.addEventListener = i)
        }),
        (St.prototype.any = function (e, t) {
          var i = this.addEventListener
          ;(this.addEventListener = function () {}), gt(this, e, t), (this.addEventListener = i)
        }),
        (St.prototype.trigger = function (e) {
          var t = e.type || e
          'string' === typeof e && (e = { type: t }),
            (e = dt(e)),
            this.allowedEvents_[t] && this['on' + t] && this['on' + t](e),
            ft(this, e)
        }),
        (St.prototype.dispatchEvent = St.prototype.trigger),
        (St.prototype.queueTrigger = function (e) {
          var t = this
          _t || (_t = new Map())
          var i = e.type || e,
            n = _t.get(this)
          n || ((n = new Map()), _t.set(this, n))
          var r = n.get(i)
          n.delete(i), a().clearTimeout(r)
          var s = a().setTimeout(function () {
            0 === n.size && ((n = null), _t.delete(t)), t.trigger(e)
          }, 0)
          n.set(i, s)
        })
      var kt = function (e) {
          return 'function' === typeof e.name
            ? e.name()
            : 'string' === typeof e.name
            ? e.name
            : e.name_
            ? e.name_
            : e.constructor && e.constructor.name
            ? e.constructor.name
            : typeof e
        },
        Ct = function (e) {
          return (
            e instanceof St ||
            (!!e.eventBusEl_ &&
              ['on', 'one', 'off', 'trigger'].every(function (t) {
                return 'function' === typeof e[t]
              }))
          )
        },
        Et = function (e) {
          return ('string' === typeof e && /\S/.test(e)) || (Array.isArray(e) && !!e.length)
        },
        wt = function (e, t, i) {
          if (!e || (!e.nodeName && !Ct(e)))
            throw new Error('Invalid target for ' + kt(t) + '#' + i + '; must be a DOM node or evented object.')
        },
        xt = function (e, t, i) {
          if (!Et(e))
            throw new Error('Invalid event type for ' + kt(t) + '#' + i + '; must be a non-empty string or array.')
        },
        It = function (e, t, i) {
          if ('function' !== typeof e)
            throw new Error('Invalid listener for ' + kt(t) + '#' + i + '; must be a function.')
        },
        Pt = function (e, t, i) {
          var n,
            r,
            a,
            s = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_
          return (
            s
              ? ((n = e.eventBusEl_), t.length >= 3 && t.shift(), (r = t[0]), (a = t[1]))
              : ((n = t[0]), (r = t[1]), (a = t[2])),
            wt(n, e, i),
            xt(r, e, i),
            It(a, e, i),
            { isTargetingSelf: s, target: n, type: r, listener: (a = Tt(e, a)) }
          )
        },
        At = function (e, t, i, n) {
          wt(e, e, t), e.nodeName ? vt[t](e, i, n) : e[t](i, n)
        },
        Lt = {
          on: function () {
            for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n]
            var r = Pt(this, i, 'on'),
              a = r.isTargetingSelf,
              s = r.target,
              o = r.type,
              l = r.listener
            if ((At(s, 'on', o, l), !a)) {
              var u = function () {
                return e.off(s, o, l)
              }
              u.guid = l.guid
              var d = function () {
                return e.off('dispose', u)
              }
              ;(d.guid = l.guid), At(this, 'on', 'dispose', u), At(s, 'on', 'dispose', d)
            }
          },
          one: function () {
            for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n]
            var r = Pt(this, i, 'one'),
              a = r.isTargetingSelf,
              s = r.target,
              o = r.type,
              l = r.listener
            if (a) At(s, 'one', o, l)
            else {
              var u = function t() {
                e.off(s, o, t)
                for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r]
                l.apply(null, n)
              }
              ;(u.guid = l.guid), At(s, 'one', o, u)
            }
          },
          any: function () {
            for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n]
            var r = Pt(this, i, 'any'),
              a = r.isTargetingSelf,
              s = r.target,
              o = r.type,
              l = r.listener
            if (a) At(s, 'any', o, l)
            else {
              var u = function t() {
                e.off(s, o, t)
                for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r]
                l.apply(null, n)
              }
              ;(u.guid = l.guid), At(s, 'any', o, u)
            }
          },
          off: function (e, t, i) {
            if (!e || Et(e)) pt(this.eventBusEl_, e, t)
            else {
              var n = e,
                r = t
              wt(n, this, 'off'),
                xt(r, this, 'off'),
                It(i, this, 'off'),
                (i = Tt(this, i)),
                this.off('dispose', i),
                n.nodeName ? (pt(n, r, i), pt(n, 'dispose', i)) : Ct(n) && (n.off(r, i), n.off('dispose', i))
            }
          },
          trigger: function (e, t) {
            wt(this.eventBusEl_, this, 'trigger')
            var i = e && 'string' !== typeof e ? e.type : e
            if (!Et(i)) {
              var n =
                'Invalid event type for ' +
                kt(this) +
                '#trigger; must be a non-empty string or object with a type key that has a non-empty value.'
              if (!e) throw new Error(n)
              ;(this.log || q).error(n)
            }
            return ft(this.eventBusEl_, e, t)
          },
        }
      function Ot(e, t) {
        void 0 === t && (t = {})
        var i = t.eventBusKey
        if (i) {
          if (!e[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.')
          e.eventBusEl_ = e[i]
        } else e.eventBusEl_ = Ce('span', { className: 'vjs-event-bus' })
        return (
          K(e, Lt),
          e.eventedCallbacks &&
            e.eventedCallbacks.forEach(function (e) {
              e()
            }),
          e.on('dispose', function () {
            e.off(),
              [e, e.el_, e.eventBusEl_].forEach(function (e) {
                e && ot.has(e) && ot.delete(e)
              }),
              a().setTimeout(function () {
                e.eventBusEl_ = null
              }, 0)
          }),
          e
        )
      }
      var Dt = {
        state: {},
        setState: function (e) {
          var t,
            i = this
          return (
            'function' === typeof e && (e = e()),
            G(e, function (e, n) {
              i.state[n] !== e && ((t = t || {})[n] = { from: i.state[n], to: e }), (i.state[n] = e)
            }),
            t && Ct(this) && this.trigger({ changes: t, type: 'statechanged' }),
            t
          )
        },
      }
      function Mt(e, t) {
        return (
          K(e, Dt),
          (e.state = K({}, e.state, t)),
          'function' === typeof e.handleStateChanged && Ct(e) && e.on('statechanged', e.handleStateChanged),
          e
        )
      }
      var Rt = function (e) {
          return 'string' !== typeof e
            ? e
            : e.replace(/./, function (e) {
                return e.toLowerCase()
              })
        },
        Ut = function (e) {
          return 'string' !== typeof e
            ? e
            : e.replace(/./, function (e) {
                return e.toUpperCase()
              })
        }
      function Bt() {
        for (var e = {}, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n]
        return (
          i.forEach(function (t) {
            t &&
              G(t, function (t, i) {
                Q(t) ? (Q(e[i]) || (e[i] = {}), (e[i] = Bt(e[i], t))) : (e[i] = t)
              })
          }),
          e
        )
      }
      var Nt = (function () {
          function e() {
            this.map_ = {}
          }
          var t = e.prototype
          return (
            (t.has = function (e) {
              return e in this.map_
            }),
            (t.delete = function (e) {
              var t = this.has(e)
              return delete this.map_[e], t
            }),
            (t.set = function (e, t) {
              return (this.map_[e] = t), this
            }),
            (t.forEach = function (e, t) {
              for (var i in this.map_) e.call(t, this.map_[i], i, this)
            }),
            e
          )
        })(),
        Ft = a().Map ? a().Map : Nt,
        jt = (function () {
          function e() {
            this.set_ = {}
          }
          var t = e.prototype
          return (
            (t.has = function (e) {
              return e in this.set_
            }),
            (t.delete = function (e) {
              var t = this.has(e)
              return delete this.set_[e], t
            }),
            (t.add = function (e) {
              return (this.set_[e] = 1), this
            }),
            (t.forEach = function (e, t) {
              for (var i in this.set_) e.call(t, i, i, this)
            }),
            e
          )
        })(),
        Ht = a().Set ? a().Set : jt,
        qt = (function () {
          function e(e, t, i) {
            if (
              (!e && this.play ? (this.player_ = e = this) : (this.player_ = e),
              (this.isDisposed_ = !1),
              (this.parentComponent_ = null),
              (this.options_ = Bt({}, this.options_)),
              (t = this.options_ = Bt(this.options_, t)),
              (this.id_ = t.id || (t.el && t.el.id)),
              !this.id_)
            ) {
              var n = (e && e.id && e.id()) || 'no_player'
              this.id_ = n + '_component_' + at()
            }
            ;(this.name_ = t.name || null),
              t.el ? (this.el_ = t.el) : !1 !== t.createEl && (this.el_ = this.createEl()),
              !1 !== t.evented &&
                (Ot(this, { eventBusKey: this.el_ ? 'el_' : null }),
                (this.handleLanguagechange = this.handleLanguagechange.bind(this)),
                this.on(this.player_, 'languagechange', this.handleLanguagechange)),
              Mt(this, this.constructor.defaultState),
              (this.children_ = []),
              (this.childIndex_ = {}),
              (this.childNameIndex_ = {}),
              (this.setTimeoutIds_ = new Ht()),
              (this.setIntervalIds_ = new Ht()),
              (this.rafIds_ = new Ht()),
              (this.namedRafs_ = new Ft()),
              (this.clearingTimersOnDispose_ = !1),
              !1 !== t.initChildren && this.initChildren(),
              this.ready(i),
              !1 !== t.reportTouchActivity && this.enableTouchActivity()
          }
          var t = e.prototype
          return (
            (t.dispose = function () {
              if (!this.isDisposed_) {
                if (
                  (this.readyQueue_ && (this.readyQueue_.length = 0),
                  this.trigger({ type: 'dispose', bubbles: !1 }),
                  (this.isDisposed_ = !0),
                  this.children_)
                )
                  for (var e = this.children_.length - 1; e >= 0; e--)
                    this.children_[e].dispose && this.children_[e].dispose()
                ;(this.children_ = null),
                  (this.childIndex_ = null),
                  (this.childNameIndex_ = null),
                  (this.parentComponent_ = null),
                  this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), (this.el_ = null)),
                  (this.player_ = null)
              }
            }),
            (t.isDisposed = function () {
              return Boolean(this.isDisposed_)
            }),
            (t.player = function () {
              return this.player_
            }),
            (t.options = function (e) {
              return e ? ((this.options_ = Bt(this.options_, e)), this.options_) : this.options_
            }),
            (t.el = function () {
              return this.el_
            }),
            (t.createEl = function (e, t, i) {
              return Ce(e, t, i)
            }),
            (t.localize = function (e, t, i) {
              void 0 === i && (i = e)
              var n = this.player_.language && this.player_.language(),
                r = this.player_.languages && this.player_.languages(),
                a = r && r[n],
                s = n && n.split('-')[0],
                o = r && r[s],
                l = i
              return (
                a && a[e] ? (l = a[e]) : o && o[e] && (l = o[e]),
                t &&
                  (l = l.replace(/\{(\d+)\}/g, function (e, i) {
                    var n = t[i - 1],
                      r = n
                    return 'undefined' === typeof n && (r = e), r
                  })),
                l
              )
            }),
            (t.handleLanguagechange = function () {}),
            (t.contentEl = function () {
              return this.contentEl_ || this.el_
            }),
            (t.id = function () {
              return this.id_
            }),
            (t.name = function () {
              return this.name_
            }),
            (t.children = function () {
              return this.children_
            }),
            (t.getChildById = function (e) {
              return this.childIndex_[e]
            }),
            (t.getChild = function (e) {
              if (e) return this.childNameIndex_[e]
            }),
            (t.getDescendant = function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]
              t = t.reduce(function (e, t) {
                return e.concat(t)
              }, [])
              for (var n = this, r = 0; r < t.length; r++) if (!(n = n.getChild(t[r])) || !n.getChild) return
              return n
            }),
            (t.addChild = function (t, i, n) {
              var r, a
              if ((void 0 === i && (i = {}), void 0 === n && (n = this.children_.length), 'string' === typeof t)) {
                a = Ut(t)
                var s = i.componentClass || a
                i.name = a
                var o = e.getComponent(s)
                if (!o) throw new Error('Component ' + s + ' does not exist')
                if ('function' !== typeof o) return null
                r = new o(this.player_ || this, i)
              } else r = t
              if (
                (r.parentComponent_ && r.parentComponent_.removeChild(r),
                this.children_.splice(n, 0, r),
                (r.parentComponent_ = this),
                'function' === typeof r.id && (this.childIndex_[r.id()] = r),
                (a = a || (r.name && Ut(r.name()))) &&
                  ((this.childNameIndex_[a] = r), (this.childNameIndex_[Rt(a)] = r)),
                'function' === typeof r.el && r.el())
              ) {
                var l = null
                this.children_[n + 1] &&
                  (this.children_[n + 1].el_
                    ? (l = this.children_[n + 1].el_)
                    : be(this.children_[n + 1]) && (l = this.children_[n + 1])),
                  this.contentEl().insertBefore(r.el(), l)
              }
              return r
            }),
            (t.removeChild = function (e) {
              if (('string' === typeof e && (e = this.getChild(e)), e && this.children_)) {
                for (var t = !1, i = this.children_.length - 1; i >= 0; i--)
                  if (this.children_[i] === e) {
                    ;(t = !0), this.children_.splice(i, 1)
                    break
                  }
                if (t) {
                  ;(e.parentComponent_ = null),
                    (this.childIndex_[e.id()] = null),
                    (this.childNameIndex_[Ut(e.name())] = null),
                    (this.childNameIndex_[Rt(e.name())] = null)
                  var n = e.el()
                  n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                }
              }
            }),
            (t.initChildren = function () {
              var t = this,
                i = this.options_.children
              if (i) {
                var n,
                  r = this.options_,
                  a = e.getComponent('Tech')
                ;(n = Array.isArray(i) ? i : Object.keys(i))
                  .concat(
                    Object.keys(this.options_).filter(function (e) {
                      return !n.some(function (t) {
                        return 'string' === typeof t ? e === t : e === t.name
                      })
                    }),
                  )
                  .map(function (e) {
                    var n, r
                    return (
                      'string' === typeof e ? (r = i[(n = e)] || t.options_[n] || {}) : ((n = e.name), (r = e)),
                      { name: n, opts: r }
                    )
                  })
                  .filter(function (t) {
                    var i = e.getComponent(t.opts.componentClass || Ut(t.name))
                    return i && !a.isTech(i)
                  })
                  .forEach(function (e) {
                    var i = e.name,
                      n = e.opts
                    if ((void 0 !== r[i] && (n = r[i]), !1 !== n)) {
                      !0 === n && (n = {}), (n.playerOptions = t.options_.playerOptions)
                      var a = t.addChild(i, n)
                      a && (t[i] = a)
                    }
                  })
              }
            }),
            (t.buildCSSClass = function () {
              return ''
            }),
            (t.ready = function (e, t) {
              if ((void 0 === t && (t = !1), e))
                return this.isReady_
                  ? void (t ? e.call(this) : this.setTimeout(e, 1))
                  : ((this.readyQueue_ = this.readyQueue_ || []), void this.readyQueue_.push(e))
            }),
            (t.triggerReady = function () {
              ;(this.isReady_ = !0),
                this.setTimeout(function () {
                  var e = this.readyQueue_
                  ;(this.readyQueue_ = []),
                    e &&
                      e.length > 0 &&
                      e.forEach(function (e) {
                        e.call(this)
                      }, this),
                    this.trigger('ready')
                }, 1)
            }),
            (t.$ = function (e, t) {
              return Ze(e, t || this.contentEl())
            }),
            (t.$$ = function (e, t) {
              return Qe(e, t || this.contentEl())
            }),
            (t.hasClass = function (e) {
              return xe(this.el_, e)
            }),
            (t.addClass = function (e) {
              Ie(this.el_, e)
            }),
            (t.removeClass = function (e) {
              Pe(this.el_, e)
            }),
            (t.toggleClass = function (e, t) {
              Ae(this.el_, e, t)
            }),
            (t.show = function () {
              this.removeClass('vjs-hidden')
            }),
            (t.hide = function () {
              this.addClass('vjs-hidden')
            }),
            (t.lockShowing = function () {
              this.addClass('vjs-lock-showing')
            }),
            (t.unlockShowing = function () {
              this.removeClass('vjs-lock-showing')
            }),
            (t.getAttribute = function (e) {
              return De(this.el_, e)
            }),
            (t.setAttribute = function (e, t) {
              Me(this.el_, e, t)
            }),
            (t.removeAttribute = function (e) {
              Re(this.el_, e)
            }),
            (t.width = function (e, t) {
              return this.dimension('width', e, t)
            }),
            (t.height = function (e, t) {
              return this.dimension('height', e, t)
            }),
            (t.dimensions = function (e, t) {
              this.width(e, !0), this.height(t)
            }),
            (t.dimension = function (e, t, i) {
              if (void 0 !== t)
                return (
                  (null !== t && t === t) || (t = 0),
                  -1 !== ('' + t).indexOf('%') || -1 !== ('' + t).indexOf('px')
                    ? (this.el_.style[e] = t)
                    : (this.el_.style[e] = 'auto' === t ? '' : t + 'px'),
                  void (i || this.trigger('componentresize'))
                )
              if (!this.el_) return 0
              var n = this.el_.style[e],
                r = n.indexOf('px')
              return -1 !== r ? parseInt(n.slice(0, r), 10) : parseInt(this.el_['offset' + Ut(e)], 10)
            }),
            (t.currentDimension = function (e) {
              var t = 0
              if ('width' !== e && 'height' !== e)
                throw new Error('currentDimension only accepts width or height value')
              if (((t = X(this.el_, e)), 0 === (t = parseFloat(t)) || isNaN(t))) {
                var i = 'offset' + Ut(e)
                t = this.el_[i]
              }
              return t
            }),
            (t.currentDimensions = function () {
              return { width: this.currentDimension('width'), height: this.currentDimension('height') }
            }),
            (t.currentWidth = function () {
              return this.currentDimension('width')
            }),
            (t.currentHeight = function () {
              return this.currentDimension('height')
            }),
            (t.focus = function () {
              this.el_.focus()
            }),
            (t.blur = function () {
              this.el_.blur()
            }),
            (t.handleKeyDown = function (e) {
              this.player_ && (e.stopPropagation(), this.player_.handleKeyDown(e))
            }),
            (t.handleKeyPress = function (e) {
              this.handleKeyDown(e)
            }),
            (t.emitTapEvents = function () {
              var e,
                t = 0,
                i = null
              this.on('touchstart', function (n) {
                1 === n.touches.length &&
                  ((i = { pageX: n.touches[0].pageX, pageY: n.touches[0].pageY }),
                  (t = a().performance.now()),
                  (e = !0))
              }),
                this.on('touchmove', function (t) {
                  if (t.touches.length > 1) e = !1
                  else if (i) {
                    var n = t.touches[0].pageX - i.pageX,
                      r = t.touches[0].pageY - i.pageY
                    Math.sqrt(n * n + r * r) > 10 && (e = !1)
                  }
                })
              var n = function () {
                e = !1
              }
              this.on('touchleave', n),
                this.on('touchcancel', n),
                this.on('touchend', function (n) {
                  ;((i = null), !0 === e) &&
                    a().performance.now() - t < 200 &&
                    (n.preventDefault(), this.trigger('tap'))
                })
            }),
            (t.enableTouchActivity = function () {
              if (this.player() && this.player().reportUserActivity) {
                var e,
                  t = Tt(this.player(), this.player().reportUserActivity)
                this.on('touchstart', function () {
                  t(), this.clearInterval(e), (e = this.setInterval(t, 250))
                })
                var i = function (i) {
                  t(), this.clearInterval(e)
                }
                this.on('touchmove', t), this.on('touchend', i), this.on('touchcancel', i)
              }
            }),
            (t.setTimeout = function (e, t) {
              var i,
                n = this
              return (
                (e = Tt(this, e)),
                this.clearTimersOnDispose_(),
                (i = a().setTimeout(function () {
                  n.setTimeoutIds_.has(i) && n.setTimeoutIds_.delete(i), e()
                }, t)),
                this.setTimeoutIds_.add(i),
                i
              )
            }),
            (t.clearTimeout = function (e) {
              return this.setTimeoutIds_.has(e) && (this.setTimeoutIds_.delete(e), a().clearTimeout(e)), e
            }),
            (t.setInterval = function (e, t) {
              ;(e = Tt(this, e)), this.clearTimersOnDispose_()
              var i = a().setInterval(e, t)
              return this.setIntervalIds_.add(i), i
            }),
            (t.clearInterval = function (e) {
              return this.setIntervalIds_.has(e) && (this.setIntervalIds_.delete(e), a().clearInterval(e)), e
            }),
            (t.requestAnimationFrame = function (e) {
              var t,
                i = this
              return this.supportsRaf_
                ? (this.clearTimersOnDispose_(),
                  (e = Tt(this, e)),
                  (t = a().requestAnimationFrame(function () {
                    i.rafIds_.has(t) && i.rafIds_.delete(t), e()
                  })),
                  this.rafIds_.add(t),
                  t)
                : this.setTimeout(e, 1e3 / 60)
            }),
            (t.requestNamedAnimationFrame = function (e, t) {
              var i = this
              if (!this.namedRafs_.has(e)) {
                this.clearTimersOnDispose_(), (t = Tt(this, t))
                var n = this.requestAnimationFrame(function () {
                  t(), i.namedRafs_.has(e) && i.namedRafs_.delete(e)
                })
                return this.namedRafs_.set(e, n), e
              }
            }),
            (t.cancelNamedAnimationFrame = function (e) {
              this.namedRafs_.has(e) && (this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_.delete(e))
            }),
            (t.cancelAnimationFrame = function (e) {
              return this.supportsRaf_
                ? (this.rafIds_.has(e) && (this.rafIds_.delete(e), a().cancelAnimationFrame(e)), e)
                : this.clearTimeout(e)
            }),
            (t.clearTimersOnDispose_ = function () {
              var e = this
              this.clearingTimersOnDispose_ ||
                ((this.clearingTimersOnDispose_ = !0),
                this.one('dispose', function () {
                  ;[
                    ['namedRafs_', 'cancelNamedAnimationFrame'],
                    ['rafIds_', 'cancelAnimationFrame'],
                    ['setTimeoutIds_', 'clearTimeout'],
                    ['setIntervalIds_', 'clearInterval'],
                  ].forEach(function (t) {
                    var i = t[0],
                      n = t[1]
                    e[i].forEach(function (t, i) {
                      return e[n](i)
                    })
                  }),
                    (e.clearingTimersOnDispose_ = !1)
                }))
            }),
            (e.registerComponent = function (t, i) {
              if ('string' !== typeof t || !t)
                throw new Error('Illegal component name, "' + t + '"; must be a non-empty string.')
              var n,
                r = e.getComponent('Tech'),
                a = r && r.isTech(i),
                s = e === i || e.prototype.isPrototypeOf(i.prototype)
              if (a || !s)
                throw (
                  ((n = a ? 'techs must be registered using Tech.registerTech()' : 'must be a Component subclass'),
                  new Error('Illegal component, "' + t + '"; ' + n + '.'))
                )
              ;(t = Ut(t)), e.components_ || (e.components_ = {})
              var o = e.getComponent('Player')
              if ('Player' === t && o && o.players) {
                var l = o.players,
                  u = Object.keys(l)
                if (
                  l &&
                  u.length > 0 &&
                  u
                    .map(function (e) {
                      return l[e]
                    })
                    .every(Boolean)
                )
                  throw new Error('Can not register Player component after player has been created.')
              }
              return (e.components_[t] = i), (e.components_[Rt(t)] = i), i
            }),
            (e.getComponent = function (t) {
              if (t && e.components_) return e.components_[t]
            }),
            e
          )
        })()
      function Vt(e, t, i, n) {
        return (
          (function (e, t, i) {
            if ('number' !== typeof t || t < 0 || t > i)
              throw new Error(
                "Failed to execute '" +
                  e +
                  "' on 'TimeRanges': The index provided (" +
                  t +
                  ') is non-numeric or out of bounds (0-' +
                  i +
                  ').',
              )
          })(e, n, i.length - 1),
          i[n][t]
        )
      }
      function Wt(e) {
        var t
        return (
          (t =
            void 0 === e || 0 === e.length
              ? {
                  length: 0,
                  start: function () {
                    throw new Error('This TimeRanges object is empty')
                  },
                  end: function () {
                    throw new Error('This TimeRanges object is empty')
                  },
                }
              : { length: e.length, start: Vt.bind(null, 'start', 0, e), end: Vt.bind(null, 'end', 1, e) }),
          a().Symbol &&
            a().Symbol.iterator &&
            (t[a().Symbol.iterator] = function () {
              return (e || []).values()
            }),
          t
        )
      }
      function zt(e, t) {
        return Array.isArray(e) ? Wt(e) : void 0 === e || void 0 === t ? Wt() : Wt([[e, t]])
      }
      function Gt(e, t) {
        var i,
          n,
          r = 0
        if (!t) return 0
        ;(e && e.length) || (e = zt(0, 0))
        for (var a = 0; a < e.length; a++) (i = e.start(a)), (n = e.end(a)) > t && (n = t), (r += n - i)
        return r / t
      }
      function Kt(e) {
        if (e instanceof Kt) return e
        'number' === typeof e
          ? (this.code = e)
          : 'string' === typeof e
          ? (this.message = e)
          : Z(e) && ('number' === typeof e.code && (this.code = e.code), K(this, e)),
          this.message || (this.message = Kt.defaultMessages[this.code] || '')
      }
      ;(qt.prototype.supportsRaf_ =
        'function' === typeof a().requestAnimationFrame && 'function' === typeof a().cancelAnimationFrame),
        qt.registerComponent('Component', qt),
        (Kt.prototype.code = 0),
        (Kt.prototype.message = ''),
        (Kt.prototype.status = null),
        (Kt.errorTypes = [
          'MEDIA_ERR_CUSTOM',
          'MEDIA_ERR_ABORTED',
          'MEDIA_ERR_NETWORK',
          'MEDIA_ERR_DECODE',
          'MEDIA_ERR_SRC_NOT_SUPPORTED',
          'MEDIA_ERR_ENCRYPTED',
        ]),
        (Kt.defaultMessages = {
          1: 'You aborted the media playback',
          2: 'A network error caused the media download to fail part-way.',
          3: 'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.',
          4: 'The media could not be loaded, either because the server or network failed or because the format is not supported.',
          5: 'The media is encrypted and we do not have the keys to decrypt it.',
        })
      for (var Zt = 0; Zt < Kt.errorTypes.length; Zt++)
        (Kt[Kt.errorTypes[Zt]] = Zt), (Kt.prototype[Kt.errorTypes[Zt]] = Zt)
      function Qt(e) {
        return void 0 !== e && null !== e && 'function' === typeof e.then
      }
      function Xt(e) {
        Qt(e) && e.then(null, function (e) {})
      }
      var Yt = function (e) {
          return ['kind', 'label', 'language', 'id', 'inBandMetadataTrackDispatchType', 'mode', 'src'].reduce(
            function (t, i, n) {
              return e[i] && (t[i] = e[i]), t
            },
            {
              cues:
                e.cues &&
                Array.prototype.map.call(e.cues, function (e) {
                  return { startTime: e.startTime, endTime: e.endTime, text: e.text, id: e.id }
                }),
            },
          )
        },
        $t = function (e) {
          var t = e.$$('track'),
            i = Array.prototype.map.call(t, function (e) {
              return e.track
            })
          return Array.prototype.map
            .call(t, function (e) {
              var t = Yt(e.track)
              return e.src && (t.src = e.src), t
            })
            .concat(
              Array.prototype.filter
                .call(e.textTracks(), function (e) {
                  return -1 === i.indexOf(e)
                })
                .map(Yt),
            )
        },
        Jt = function (e, t) {
          return (
            e.forEach(function (e) {
              var i = t.addRemoteTextTrack(e).track
              !e.src &&
                e.cues &&
                e.cues.forEach(function (e) {
                  return i.addCue(e)
                })
            }),
            t.textTracks()
          )
        },
        ei = (function (e) {
          function t(t, i) {
            var n
            return (
              ((n = e.call(this, t, i) || this).handleKeyDown_ = function (e) {
                return n.handleKeyDown(e)
              }),
              (n.close_ = function (e) {
                return n.close(e)
              }),
              (n.opened_ = n.hasBeenOpened_ = n.hasBeenFilled_ = !1),
              n.closeable(!n.options_.uncloseable),
              n.content(n.options_.content),
              (n.contentEl_ = Ce('div', { className: 'vjs-modal-dialog-content' }, { role: 'document' })),
              (n.descEl_ = Ce('p', {
                className: 'vjs-modal-dialog-description vjs-control-text',
                id: n.el().getAttribute('aria-describedby'),
              })),
              Ee(n.descEl_, n.description()),
              n.el_.appendChild(n.descEl_),
              n.el_.appendChild(n.contentEl_),
              n
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.createEl = function () {
              return e.prototype.createEl.call(
                this,
                'div',
                { className: this.buildCSSClass(), tabIndex: -1 },
                {
                  'aria-describedby': this.id() + '_description',
                  'aria-hidden': 'true',
                  'aria-label': this.label(),
                  role: 'dialog',
                },
              )
            }),
            (i.dispose = function () {
              ;(this.contentEl_ = null),
                (this.descEl_ = null),
                (this.previouslyActiveEl_ = null),
                e.prototype.dispose.call(this)
            }),
            (i.buildCSSClass = function () {
              return 'vjs-modal-dialog vjs-hidden ' + e.prototype.buildCSSClass.call(this)
            }),
            (i.label = function () {
              return this.localize(this.options_.label || 'Modal Window')
            }),
            (i.description = function () {
              var e = this.options_.description || this.localize('This is a modal window.')
              return (
                this.closeable() &&
                  (e +=
                    ' ' +
                    this.localize(
                      'This modal can be closed by pressing the Escape key or activating the close button.',
                    )),
                e
              )
            }),
            (i.open = function () {
              if (!this.opened_) {
                var e = this.player()
                this.trigger('beforemodalopen'),
                  (this.opened_ = !0),
                  (this.options_.fillAlways || (!this.hasBeenOpened_ && !this.hasBeenFilled_)) && this.fill(),
                  (this.wasPlaying_ = !e.paused()),
                  this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(),
                  this.on('keydown', this.handleKeyDown_),
                  (this.hadControls_ = e.controls()),
                  e.controls(!1),
                  this.show(),
                  this.conditionalFocus_(),
                  this.el().setAttribute('aria-hidden', 'false'),
                  this.trigger('modalopen'),
                  (this.hasBeenOpened_ = !0)
              }
            }),
            (i.opened = function (e) {
              return 'boolean' === typeof e && this[e ? 'open' : 'close'](), this.opened_
            }),
            (i.close = function () {
              if (this.opened_) {
                var e = this.player()
                this.trigger('beforemodalclose'),
                  (this.opened_ = !1),
                  this.wasPlaying_ && this.options_.pauseOnOpen && e.play(),
                  this.off('keydown', this.handleKeyDown_),
                  this.hadControls_ && e.controls(!0),
                  this.hide(),
                  this.el().setAttribute('aria-hidden', 'true'),
                  this.trigger('modalclose'),
                  this.conditionalBlur_(),
                  this.options_.temporary && this.dispose()
              }
            }),
            (i.closeable = function (e) {
              if ('boolean' === typeof e) {
                var t = (this.closeable_ = !!e),
                  i = this.getChild('closeButton')
                if (t && !i) {
                  var n = this.contentEl_
                  ;(this.contentEl_ = this.el_),
                    (i = this.addChild('closeButton', { controlText: 'Close Modal Dialog' })),
                    (this.contentEl_ = n),
                    this.on(i, 'close', this.close_)
                }
                !t && i && (this.off(i, 'close', this.close_), this.removeChild(i), i.dispose())
              }
              return this.closeable_
            }),
            (i.fill = function () {
              this.fillWith(this.content())
            }),
            (i.fillWith = function (e) {
              var t = this.contentEl(),
                i = t.parentNode,
                n = t.nextSibling
              this.trigger('beforemodalfill'),
                (this.hasBeenFilled_ = !0),
                i.removeChild(t),
                this.empty(),
                ze(t, e),
                this.trigger('modalfill'),
                n ? i.insertBefore(t, n) : i.appendChild(t)
              var r = this.getChild('closeButton')
              r && i.appendChild(r.el_)
            }),
            (i.empty = function () {
              this.trigger('beforemodalempty'), qe(this.contentEl()), this.trigger('modalempty')
            }),
            (i.content = function (e) {
              return 'undefined' !== typeof e && (this.content_ = e), this.content_
            }),
            (i.conditionalFocus_ = function () {
              var e = o().activeElement,
                t = this.player_.el_
              ;(this.previouslyActiveEl_ = null),
                (t.contains(e) || t === e) && ((this.previouslyActiveEl_ = e), this.focus())
            }),
            (i.conditionalBlur_ = function () {
              this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), (this.previouslyActiveEl_ = null))
            }),
            (i.handleKeyDown = function (e) {
              if ((e.stopPropagation(), f().isEventKey(e, 'Escape') && this.closeable()))
                return e.preventDefault(), void this.close()
              if (f().isEventKey(e, 'Tab')) {
                for (var t, i = this.focusableEls_(), n = this.el_.querySelector(':focus'), r = 0; r < i.length; r++)
                  if (n === i[r]) {
                    t = r
                    break
                  }
                o().activeElement === this.el_ && (t = 0),
                  e.shiftKey && 0 === t
                    ? (i[i.length - 1].focus(), e.preventDefault())
                    : e.shiftKey || t !== i.length - 1 || (i[0].focus(), e.preventDefault())
              }
            }),
            (i.focusableEls_ = function () {
              var e = this.el_.querySelectorAll('*')
              return Array.prototype.filter.call(e, function (e) {
                return (
                  ((e instanceof a().HTMLAnchorElement || e instanceof a().HTMLAreaElement) &&
                    e.hasAttribute('href')) ||
                  ((e instanceof a().HTMLInputElement ||
                    e instanceof a().HTMLSelectElement ||
                    e instanceof a().HTMLTextAreaElement ||
                    e instanceof a().HTMLButtonElement) &&
                    !e.hasAttribute('disabled')) ||
                  e instanceof a().HTMLIFrameElement ||
                  e instanceof a().HTMLObjectElement ||
                  e instanceof a().HTMLEmbedElement ||
                  (e.hasAttribute('tabindex') && -1 !== e.getAttribute('tabindex')) ||
                  e.hasAttribute('contenteditable')
                )
              })
            }),
            t
          )
        })(qt)
      ;(ei.prototype.options_ = { pauseOnOpen: !0, temporary: !0 }), qt.registerComponent('ModalDialog', ei)
      var ti = (function (e) {
        function t(t) {
          var i
          void 0 === t && (t = []),
            ((i = e.call(this) || this).tracks_ = []),
            Object.defineProperty((0, u.Z)(i), 'length', {
              get: function () {
                return this.tracks_.length
              },
            })
          for (var n = 0; n < t.length; n++) i.addTrack(t[n])
          return i
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.addTrack = function (e) {
            var t = this,
              i = this.tracks_.length
            '' + i in this ||
              Object.defineProperty(this, i, {
                get: function () {
                  return this.tracks_[i]
                },
              }),
              -1 === this.tracks_.indexOf(e) &&
                (this.tracks_.push(e), this.trigger({ track: e, type: 'addtrack', target: this })),
              (e.labelchange_ = function () {
                t.trigger({ track: e, type: 'labelchange', target: t })
              }),
              Ct(e) && e.addEventListener('labelchange', e.labelchange_)
          }),
          (i.removeTrack = function (e) {
            for (var t, i = 0, n = this.length; i < n; i++)
              if (this[i] === e) {
                ;(t = this[i]).off && t.off(), this.tracks_.splice(i, 1)
                break
              }
            t && this.trigger({ track: t, type: 'removetrack', target: this })
          }),
          (i.getTrackById = function (e) {
            for (var t = null, i = 0, n = this.length; i < n; i++) {
              var r = this[i]
              if (r.id === e) {
                t = r
                break
              }
            }
            return t
          }),
          t
        )
      })(St)
      for (var ii in ((ti.prototype.allowedEvents_ = {
        change: 'change',
        addtrack: 'addtrack',
        removetrack: 'removetrack',
        labelchange: 'labelchange',
      }),
      ti.prototype.allowedEvents_))
        ti.prototype['on' + ii] = null
      var ni = function (e, t) {
          for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
        },
        ri = (function (e) {
          function t(t) {
            var i
            void 0 === t && (t = [])
            for (var n = t.length - 1; n >= 0; n--)
              if (t[n].enabled) {
                ni(t, t[n])
                break
              }
            return ((i = e.call(this, t) || this).changing_ = !1), i
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.addTrack = function (t) {
              var i = this
              t.enabled && ni(this, t),
                e.prototype.addTrack.call(this, t),
                t.addEventListener &&
                  ((t.enabledChange_ = function () {
                    i.changing_ || ((i.changing_ = !0), ni(i, t), (i.changing_ = !1), i.trigger('change'))
                  }),
                  t.addEventListener('enabledchange', t.enabledChange_))
            }),
            (i.removeTrack = function (t) {
              e.prototype.removeTrack.call(this, t),
                t.removeEventListener &&
                  t.enabledChange_ &&
                  (t.removeEventListener('enabledchange', t.enabledChange_), (t.enabledChange_ = null))
            }),
            t
          )
        })(ti),
        ai = function (e, t) {
          for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
        },
        si = (function (e) {
          function t(t) {
            var i
            void 0 === t && (t = [])
            for (var n = t.length - 1; n >= 0; n--)
              if (t[n].selected) {
                ai(t, t[n])
                break
              }
            return (
              ((i = e.call(this, t) || this).changing_ = !1),
              Object.defineProperty((0, u.Z)(i), 'selectedIndex', {
                get: function () {
                  for (var e = 0; e < this.length; e++) if (this[e].selected) return e
                  return -1
                },
                set: function () {},
              }),
              i
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.addTrack = function (t) {
              var i = this
              t.selected && ai(this, t),
                e.prototype.addTrack.call(this, t),
                t.addEventListener &&
                  ((t.selectedChange_ = function () {
                    i.changing_ || ((i.changing_ = !0), ai(i, t), (i.changing_ = !1), i.trigger('change'))
                  }),
                  t.addEventListener('selectedchange', t.selectedChange_))
            }),
            (i.removeTrack = function (t) {
              e.prototype.removeTrack.call(this, t),
                t.removeEventListener &&
                  t.selectedChange_ &&
                  (t.removeEventListener('selectedchange', t.selectedChange_), (t.selectedChange_ = null))
            }),
            t
          )
        })(ti),
        oi = (function (e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.addTrack = function (t) {
              var i = this
              e.prototype.addTrack.call(this, t),
                this.queueChange_ ||
                  (this.queueChange_ = function () {
                    return i.queueTrigger('change')
                  }),
                this.triggerSelectedlanguagechange ||
                  (this.triggerSelectedlanguagechange_ = function () {
                    return i.trigger('selectedlanguagechange')
                  }),
                t.addEventListener('modechange', this.queueChange_)
              ;-1 === ['metadata', 'chapters'].indexOf(t.kind) &&
                t.addEventListener('modechange', this.triggerSelectedlanguagechange_)
            }),
            (i.removeTrack = function (t) {
              e.prototype.removeTrack.call(this, t),
                t.removeEventListener &&
                  (this.queueChange_ && t.removeEventListener('modechange', this.queueChange_),
                  this.selectedlanguagechange_ &&
                    t.removeEventListener('modechange', this.triggerSelectedlanguagechange_))
            }),
            t
          )
        })(ti),
        li = (function () {
          function e(e) {
            void 0 === e && (e = []),
              (this.trackElements_ = []),
              Object.defineProperty(this, 'length', {
                get: function () {
                  return this.trackElements_.length
                },
              })
            for (var t = 0, i = e.length; t < i; t++) this.addTrackElement_(e[t])
          }
          var t = e.prototype
          return (
            (t.addTrackElement_ = function (e) {
              var t = this.trackElements_.length
              '' + t in this ||
                Object.defineProperty(this, t, {
                  get: function () {
                    return this.trackElements_[t]
                  },
                }),
                -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
            }),
            (t.getTrackElementByTrack_ = function (e) {
              for (var t, i = 0, n = this.trackElements_.length; i < n; i++)
                if (e === this.trackElements_[i].track) {
                  t = this.trackElements_[i]
                  break
                }
              return t
            }),
            (t.removeTrackElement_ = function (e) {
              for (var t = 0, i = this.trackElements_.length; t < i; t++)
                if (e === this.trackElements_[t]) {
                  this.trackElements_[t].track &&
                    'function' === typeof this.trackElements_[t].track.off &&
                    this.trackElements_[t].track.off(),
                    'function' === typeof this.trackElements_[t].off && this.trackElements_[t].off(),
                    this.trackElements_.splice(t, 1)
                  break
                }
            }),
            e
          )
        })(),
        ui = (function () {
          function e(t) {
            e.prototype.setCues_.call(this, t),
              Object.defineProperty(this, 'length', {
                get: function () {
                  return this.length_
                },
              })
          }
          var t = e.prototype
          return (
            (t.setCues_ = function (e) {
              var t = this.length || 0,
                i = 0,
                n = e.length
              ;(this.cues_ = e), (this.length_ = e.length)
              var r = function (e) {
                '' + e in this ||
                  Object.defineProperty(this, '' + e, {
                    get: function () {
                      return this.cues_[e]
                    },
                  })
              }
              if (t < n) for (i = t; i < n; i++) r.call(this, i)
            }),
            (t.getCueById = function (e) {
              for (var t = null, i = 0, n = this.length; i < n; i++) {
                var r = this[i]
                if (r.id === e) {
                  t = r
                  break
                }
              }
              return t
            }),
            e
          )
        })(),
        di = {
          alternative: 'alternative',
          captions: 'captions',
          main: 'main',
          sign: 'sign',
          subtitles: 'subtitles',
          commentary: 'commentary',
        },
        ci = {
          alternative: 'alternative',
          descriptions: 'descriptions',
          main: 'main',
          'main-desc': 'main-desc',
          translation: 'translation',
          commentary: 'commentary',
        },
        hi = {
          subtitles: 'subtitles',
          captions: 'captions',
          descriptions: 'descriptions',
          chapters: 'chapters',
          metadata: 'metadata',
        },
        pi = { disabled: 'disabled', hidden: 'hidden', showing: 'showing' },
        fi = (function (e) {
          function t(t) {
            var i
            void 0 === t && (t = {}), (i = e.call(this) || this)
            var n = { id: t.id || 'vjs_track_' + at(), kind: t.kind || '', language: t.language || '' },
              r = t.label || '',
              a = function (e) {
                Object.defineProperty((0, u.Z)(i), e, {
                  get: function () {
                    return n[e]
                  },
                  set: function () {},
                })
              }
            for (var s in n) a(s)
            return (
              Object.defineProperty((0, u.Z)(i), 'label', {
                get: function () {
                  return r
                },
                set: function (e) {
                  e !== r && ((r = e), this.trigger('labelchange'))
                },
              }),
              i
            )
          }
          return (0, d.Z)(t, e), t
        })(St),
        mi = function (e) {
          var t = ['protocol', 'hostname', 'port', 'pathname', 'search', 'hash', 'host'],
            i = o().createElement('a')
          i.href = e
          for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = i[t[r]]
          return (
            'http:' === n.protocol && (n.host = n.host.replace(/:80$/, '')),
            'https:' === n.protocol && (n.host = n.host.replace(/:443$/, '')),
            n.protocol || (n.protocol = a().location.protocol),
            n.host || (n.host = a().location.host),
            n
          )
        },
        gi = function (e) {
          if (!e.match(/^https?:\/\//)) {
            var t = o().createElement('a')
            ;(t.href = e), (e = t.href)
          }
          return e
        },
        _i = function (e) {
          if ('string' === typeof e) {
            var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e)
            if (t) return t.pop().toLowerCase()
          }
          return ''
        },
        vi = function (e, t) {
          void 0 === t && (t = a().location)
          var i = mi(e)
          return (':' === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host
        },
        yi = Object.freeze({
          __proto__: null,
          parseUrl: mi,
          getAbsoluteURL: gi,
          getFileExtension: _i,
          isCrossOrigin: vi,
        }),
        Ti = function (e, t) {
          var i = new (a().WebVTT.Parser)(a(), a().vttjs, a().WebVTT.StringDecoder()),
            n = []
          ;(i.oncue = function (e) {
            t.addCue(e)
          }),
            (i.onparsingerror = function (e) {
              n.push(e)
            }),
            (i.onflush = function () {
              t.trigger({ type: 'loadeddata', target: t })
            }),
            i.parse(e),
            n.length > 0 &&
              (a().console &&
                a().console.groupCollapsed &&
                a().console.groupCollapsed('Text Track parsing errors for ' + t.src),
              n.forEach(function (e) {
                return q.error(e)
              }),
              a().console && a().console.groupEnd && a().console.groupEnd()),
            i.flush()
        },
        bi = function (e, t) {
          var i = { uri: e },
            n = vi(e)
          n && (i.cors = n)
          var r = 'use-credentials' === t.tech_.crossOrigin()
          r && (i.withCredentials = r),
            g()(
              i,
              Tt(this, function (e, i, n) {
                if (e) return q.error(e, i)
                ;(t.loaded_ = !0),
                  'function' !== typeof a().WebVTT
                    ? t.tech_ &&
                      t.tech_.any(['vttjsloaded', 'vttjserror'], function (e) {
                        if ('vttjserror' !== e.type) return Ti(n, t)
                        q.error('vttjs failed to load, stopping trying to process ' + t.src)
                      })
                    : Ti(n, t)
              }),
            )
        },
        Si = (function (e) {
          function t(t) {
            var i
            if ((void 0 === t && (t = {}), !t.tech)) throw new Error('A tech was not provided.')
            var n = Bt(t, { kind: hi[t.kind] || 'subtitles', language: t.language || t.srclang || '' }),
              r = pi[n.mode] || 'disabled',
              a = n.default
            ;('metadata' !== n.kind && 'chapters' !== n.kind) || (r = 'hidden'),
              ((i = e.call(this, n) || this).tech_ = n.tech),
              (i.cues_ = []),
              (i.activeCues_ = []),
              (i.preload_ = !1 !== i.tech_.preloadTextTracks)
            var s = new ui(i.cues_),
              o = new ui(i.activeCues_),
              l = !1,
              d = Tt((0, u.Z)(i), function () {
                this.tech_.isReady_ &&
                  !this.tech_.isDisposed() &&
                  ((this.activeCues = this.activeCues), l && (this.trigger('cuechange'), (l = !1)))
              })
            return (
              i.tech_.one('dispose', function () {
                i.tech_.off('timeupdate', d)
              }),
              'disabled' !== r && i.tech_.on('timeupdate', d),
              Object.defineProperties((0, u.Z)(i), {
                default: {
                  get: function () {
                    return a
                  },
                  set: function () {},
                },
                mode: {
                  get: function () {
                    return r
                  },
                  set: function (e) {
                    pi[e] &&
                      r !== e &&
                      ((r = e),
                      this.preload_ || 'disabled' === r || 0 !== this.cues.length || bi(this.src, this),
                      this.tech_.off('timeupdate', d),
                      'disabled' !== r && this.tech_.on('timeupdate', d),
                      this.trigger('modechange'))
                  },
                },
                cues: {
                  get: function () {
                    return this.loaded_ ? s : null
                  },
                  set: function () {},
                },
                activeCues: {
                  get: function () {
                    if (!this.loaded_) return null
                    if (0 === this.cues.length) return o
                    for (var e = this.tech_.currentTime(), t = [], i = 0, n = this.cues.length; i < n; i++) {
                      var r = this.cues[i]
                      ;((r.startTime <= e && r.endTime >= e) ||
                        (r.startTime === r.endTime && r.startTime <= e && r.startTime + 0.5 >= e)) &&
                        t.push(r)
                    }
                    if (((l = !1), t.length !== this.activeCues_.length)) l = !0
                    else for (var a = 0; a < t.length; a++) -1 === this.activeCues_.indexOf(t[a]) && (l = !0)
                    return (this.activeCues_ = t), o.setCues_(this.activeCues_), o
                  },
                  set: function () {},
                },
              }),
              n.src
                ? ((i.src = n.src),
                  i.preload_ || (i.loaded_ = !0),
                  (i.preload_ || ('subtitles' !== n.kind && 'captions' !== n.kind)) && bi(i.src, (0, u.Z)(i)))
                : (i.loaded_ = !0),
              i
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.addCue = function (e) {
              var t = e
              if (a().vttjs && !(e instanceof a().vttjs.VTTCue)) {
                for (var i in ((t = new (a().vttjs.VTTCue)(e.startTime, e.endTime, e.text)), e)) i in t || (t[i] = e[i])
                ;(t.id = e.id), (t.originalCue_ = e)
              }
              for (var n = this.tech_.textTracks(), r = 0; r < n.length; r++) n[r] !== this && n[r].removeCue(t)
              this.cues_.push(t), this.cues.setCues_(this.cues_)
            }),
            (i.removeCue = function (e) {
              for (var t = this.cues_.length; t--; ) {
                var i = this.cues_[t]
                if (i === e || (i.originalCue_ && i.originalCue_ === e)) {
                  this.cues_.splice(t, 1), this.cues.setCues_(this.cues_)
                  break
                }
              }
            }),
            t
          )
        })(fi)
      Si.prototype.allowedEvents_ = { cuechange: 'cuechange' }
      var ki = (function (e) {
          function t(t) {
            var i
            void 0 === t && (t = {})
            var n = Bt(t, { kind: ci[t.kind] || '' })
            i = e.call(this, n) || this
            var r = !1
            return (
              Object.defineProperty((0, u.Z)(i), 'enabled', {
                get: function () {
                  return r
                },
                set: function (e) {
                  'boolean' === typeof e && e !== r && ((r = e), this.trigger('enabledchange'))
                },
              }),
              n.enabled && (i.enabled = n.enabled),
              (i.loaded_ = !0),
              i
            )
          }
          return (0, d.Z)(t, e), t
        })(fi),
        Ci = (function (e) {
          function t(t) {
            var i
            void 0 === t && (t = {})
            var n = Bt(t, { kind: di[t.kind] || '' })
            i = e.call(this, n) || this
            var r = !1
            return (
              Object.defineProperty((0, u.Z)(i), 'selected', {
                get: function () {
                  return r
                },
                set: function (e) {
                  'boolean' === typeof e && e !== r && ((r = e), this.trigger('selectedchange'))
                },
              }),
              n.selected && (i.selected = n.selected),
              i
            )
          }
          return (0, d.Z)(t, e), t
        })(fi),
        Ei = (function (e) {
          function t(t) {
            var i, n
            void 0 === t && (t = {}), (i = e.call(this) || this)
            var r = new Si(t)
            return (
              (i.kind = r.kind),
              (i.src = r.src),
              (i.srclang = r.language),
              (i.label = r.label),
              (i.default = r.default),
              Object.defineProperties((0, u.Z)(i), {
                readyState: {
                  get: function () {
                    return n
                  },
                },
                track: {
                  get: function () {
                    return r
                  },
                },
              }),
              (n = 0),
              r.addEventListener('loadeddata', function () {
                ;(n = 2), i.trigger({ type: 'load', target: (0, u.Z)(i) })
              }),
              i
            )
          }
          return (0, d.Z)(t, e), t
        })(St)
      ;(Ei.prototype.allowedEvents_ = { load: 'load' }),
        (Ei.NONE = 0),
        (Ei.LOADING = 1),
        (Ei.LOADED = 2),
        (Ei.ERROR = 3)
      var wi = {
        audio: { ListClass: ri, TrackClass: ki, capitalName: 'Audio' },
        video: { ListClass: si, TrackClass: Ci, capitalName: 'Video' },
        text: { ListClass: oi, TrackClass: Si, capitalName: 'Text' },
      }
      Object.keys(wi).forEach(function (e) {
        ;(wi[e].getterName = e + 'Tracks'), (wi[e].privateName = e + 'Tracks_')
      })
      var xi = {
          remoteText: {
            ListClass: oi,
            TrackClass: Si,
            capitalName: 'RemoteText',
            getterName: 'remoteTextTracks',
            privateName: 'remoteTextTracks_',
          },
          remoteTextEl: {
            ListClass: li,
            TrackClass: Ei,
            capitalName: 'RemoteTextTrackEls',
            getterName: 'remoteTextTrackEls',
            privateName: 'remoteTextTrackEls_',
          },
        },
        Ii = (0, l.Z)({}, wi, xi)
      ;(xi.names = Object.keys(xi)), (wi.names = Object.keys(wi)), (Ii.names = [].concat(xi.names).concat(wi.names))
      var Pi = (function (e) {
        function t(t, i) {
          var n
          return (
            void 0 === t && (t = {}),
            void 0 === i && (i = function () {}),
            (t.reportTouchActivity = !1),
            ((n = e.call(this, null, t, i) || this).onDurationChange_ = function (e) {
              return n.onDurationChange(e)
            }),
            (n.trackProgress_ = function (e) {
              return n.trackProgress(e)
            }),
            (n.trackCurrentTime_ = function (e) {
              return n.trackCurrentTime(e)
            }),
            (n.stopTrackingCurrentTime_ = function (e) {
              return n.stopTrackingCurrentTime(e)
            }),
            (n.disposeSourceHandler_ = function (e) {
              return n.disposeSourceHandler(e)
            }),
            (n.hasStarted_ = !1),
            n.on('playing', function () {
              this.hasStarted_ = !0
            }),
            n.on('loadstart', function () {
              this.hasStarted_ = !1
            }),
            Ii.names.forEach(function (e) {
              var i = Ii[e]
              t && t[i.getterName] && (n[i.privateName] = t[i.getterName])
            }),
            n.featuresProgressEvents || n.manualProgressOn(),
            n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(),
            ['Text', 'Audio', 'Video'].forEach(function (e) {
              !1 === t['native' + e + 'Tracks'] && (n['featuresNative' + e + 'Tracks'] = !1)
            }),
            !1 === t.nativeCaptions || !1 === t.nativeTextTracks
              ? (n.featuresNativeTextTracks = !1)
              : (!0 !== t.nativeCaptions && !0 !== t.nativeTextTracks) || (n.featuresNativeTextTracks = !0),
            n.featuresNativeTextTracks || n.emulateTextTracks(),
            (n.preloadTextTracks = !1 !== t.preloadTextTracks),
            (n.autoRemoteTextTracks_ = new Ii.text.ListClass()),
            n.initTrackListeners(),
            t.nativeControlsForTouch || n.emitTapEvents(),
            n.constructor && (n.name_ = n.constructor.name || 'Unknown Tech'),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.triggerSourceset = function (e) {
            var t = this
            this.isReady_ ||
              this.one('ready', function () {
                return t.setTimeout(function () {
                  return t.triggerSourceset(e)
                }, 1)
              }),
              this.trigger({ src: e, type: 'sourceset' })
          }),
          (i.manualProgressOn = function () {
            this.on('durationchange', this.onDurationChange_),
              (this.manualProgress = !0),
              this.one('ready', this.trackProgress_)
          }),
          (i.manualProgressOff = function () {
            ;(this.manualProgress = !1), this.stopTrackingProgress(), this.off('durationchange', this.onDurationChange_)
          }),
          (i.trackProgress = function (e) {
            this.stopTrackingProgress(),
              (this.progressInterval = this.setInterval(
                Tt(this, function () {
                  var e = this.bufferedPercent()
                  this.bufferedPercent_ !== e && this.trigger('progress'),
                    (this.bufferedPercent_ = e),
                    1 === e && this.stopTrackingProgress()
                }),
                500,
              ))
          }),
          (i.onDurationChange = function (e) {
            this.duration_ = this.duration()
          }),
          (i.buffered = function () {
            return zt(0, 0)
          }),
          (i.bufferedPercent = function () {
            return Gt(this.buffered(), this.duration_)
          }),
          (i.stopTrackingProgress = function () {
            this.clearInterval(this.progressInterval)
          }),
          (i.manualTimeUpdatesOn = function () {
            ;(this.manualTimeUpdates = !0),
              this.on('play', this.trackCurrentTime_),
              this.on('pause', this.stopTrackingCurrentTime_)
          }),
          (i.manualTimeUpdatesOff = function () {
            ;(this.manualTimeUpdates = !1),
              this.stopTrackingCurrentTime(),
              this.off('play', this.trackCurrentTime_),
              this.off('pause', this.stopTrackingCurrentTime_)
          }),
          (i.trackCurrentTime = function () {
            this.currentTimeInterval && this.stopTrackingCurrentTime(),
              (this.currentTimeInterval = this.setInterval(function () {
                this.trigger({ type: 'timeupdate', target: this, manuallyTriggered: !0 })
              }, 250))
          }),
          (i.stopTrackingCurrentTime = function () {
            this.clearInterval(this.currentTimeInterval),
              this.trigger({ type: 'timeupdate', target: this, manuallyTriggered: !0 })
          }),
          (i.dispose = function () {
            this.clearTracks(wi.names),
              this.manualProgress && this.manualProgressOff(),
              this.manualTimeUpdates && this.manualTimeUpdatesOff(),
              e.prototype.dispose.call(this)
          }),
          (i.clearTracks = function (e) {
            var t = this
            ;(e = [].concat(e)).forEach(function (e) {
              for (var i = t[e + 'Tracks']() || [], n = i.length; n--; ) {
                var r = i[n]
                'text' === e && t.removeRemoteTextTrack(r), i.removeTrack(r)
              }
            })
          }),
          (i.cleanupAutoTextTracks = function () {
            for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--; ) {
              var i = e[t]
              this.removeRemoteTextTrack(i)
            }
          }),
          (i.reset = function () {}),
          (i.crossOrigin = function () {}),
          (i.setCrossOrigin = function () {}),
          (i.error = function (e) {
            return void 0 !== e && ((this.error_ = new Kt(e)), this.trigger('error')), this.error_
          }),
          (i.played = function () {
            return this.hasStarted_ ? zt(0, 0) : zt()
          }),
          (i.play = function () {}),
          (i.setScrubbing = function () {}),
          (i.scrubbing = function () {}),
          (i.setCurrentTime = function () {
            this.manualTimeUpdates && this.trigger({ type: 'timeupdate', target: this, manuallyTriggered: !0 })
          }),
          (i.initTrackListeners = function () {
            var e = this
            wi.names.forEach(function (t) {
              var i = wi[t],
                n = function () {
                  e.trigger(t + 'trackchange')
                },
                r = e[i.getterName]()
              r.addEventListener('removetrack', n),
                r.addEventListener('addtrack', n),
                e.on('dispose', function () {
                  r.removeEventListener('removetrack', n), r.removeEventListener('addtrack', n)
                })
            })
          }),
          (i.addWebVttScript_ = function () {
            var e = this
            if (!a().WebVTT)
              if (o().body.contains(this.el())) {
                if (!this.options_['vtt.js'] && Q(v()) && Object.keys(v()).length > 0)
                  return void this.trigger('vttjsloaded')
                var t = o().createElement('script')
                ;(t.src = this.options_['vtt.js'] || 'https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js'),
                  (t.onload = function () {
                    e.trigger('vttjsloaded')
                  }),
                  (t.onerror = function () {
                    e.trigger('vttjserror')
                  }),
                  this.on('dispose', function () {
                    ;(t.onload = null), (t.onerror = null)
                  }),
                  (a().WebVTT = !0),
                  this.el().parentNode.appendChild(t)
              } else this.ready(this.addWebVttScript_)
          }),
          (i.emulateTextTracks = function () {
            var e = this,
              t = this.textTracks(),
              i = this.remoteTextTracks(),
              n = function (e) {
                return t.addTrack(e.track)
              },
              r = function (e) {
                return t.removeTrack(e.track)
              }
            i.on('addtrack', n), i.on('removetrack', r), this.addWebVttScript_()
            var a = function () {
                return e.trigger('texttrackchange')
              },
              s = function () {
                a()
                for (var e = 0; e < t.length; e++) {
                  var i = t[e]
                  i.removeEventListener('cuechange', a), 'showing' === i.mode && i.addEventListener('cuechange', a)
                }
              }
            s(),
              t.addEventListener('change', s),
              t.addEventListener('addtrack', s),
              t.addEventListener('removetrack', s),
              this.on('dispose', function () {
                i.off('addtrack', n),
                  i.off('removetrack', r),
                  t.removeEventListener('change', s),
                  t.removeEventListener('addtrack', s),
                  t.removeEventListener('removetrack', s)
                for (var e = 0; e < t.length; e++) {
                  t[e].removeEventListener('cuechange', a)
                }
              })
          }),
          (i.addTextTrack = function (e, t, i) {
            if (!e) throw new Error('TextTrack kind is required but was not provided')
            return (function (e, t, i, n, r) {
              void 0 === r && (r = {})
              var a = e.textTracks()
              ;(r.kind = t), i && (r.label = i), n && (r.language = n), (r.tech = e)
              var s = new Ii.text.TrackClass(r)
              return a.addTrack(s), s
            })(this, e, t, i)
          }),
          (i.createRemoteTextTrack = function (e) {
            var t = Bt(e, { tech: this })
            return new xi.remoteTextEl.TrackClass(t)
          }),
          (i.addRemoteTextTrack = function (e, t) {
            var i = this
            void 0 === e && (e = {})
            var n = this.createRemoteTextTrack(e)
            return (
              !0 !== t &&
                !1 !== t &&
                (q.warn(
                  'Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js',
                ),
                (t = !0)),
              this.remoteTextTrackEls().addTrackElement_(n),
              this.remoteTextTracks().addTrack(n.track),
              !0 !== t &&
                this.ready(function () {
                  return i.autoRemoteTextTracks_.addTrack(n.track)
                }),
              n
            )
          }),
          (i.removeRemoteTextTrack = function (e) {
            var t = this.remoteTextTrackEls().getTrackElementByTrack_(e)
            this.remoteTextTrackEls().removeTrackElement_(t),
              this.remoteTextTracks().removeTrack(e),
              this.autoRemoteTextTracks_.removeTrack(e)
          }),
          (i.getVideoPlaybackQuality = function () {
            return {}
          }),
          (i.requestPictureInPicture = function () {
            var e = this.options_.Promise || a().Promise
            if (e) return e.reject()
          }),
          (i.disablePictureInPicture = function () {
            return !0
          }),
          (i.setDisablePictureInPicture = function () {}),
          (i.setPoster = function () {}),
          (i.playsinline = function () {}),
          (i.setPlaysinline = function () {}),
          (i.overrideNativeAudioTracks = function () {}),
          (i.overrideNativeVideoTracks = function () {}),
          (i.canPlayType = function () {
            return ''
          }),
          (t.canPlayType = function () {
            return ''
          }),
          (t.canPlaySource = function (e, i) {
            return t.canPlayType(e.type)
          }),
          (t.isTech = function (e) {
            return e.prototype instanceof t || e instanceof t || e === t
          }),
          (t.registerTech = function (e, i) {
            if ((t.techs_ || (t.techs_ = {}), !t.isTech(i))) throw new Error('Tech ' + e + ' must be a Tech')
            if (!t.canPlayType) throw new Error('Techs must have a static canPlayType method on them')
            if (!t.canPlaySource) throw new Error('Techs must have a static canPlaySource method on them')
            return (e = Ut(e)), (t.techs_[e] = i), (t.techs_[Rt(e)] = i), 'Tech' !== e && t.defaultTechOrder_.push(e), i
          }),
          (t.getTech = function (e) {
            if (e)
              return t.techs_ && t.techs_[e]
                ? t.techs_[e]
                : ((e = Ut(e)),
                  a() && a().videojs && a().videojs[e]
                    ? (q.warn(
                        'The ' +
                          e +
                          ' tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)',
                      ),
                      a().videojs[e])
                    : void 0)
          }),
          t
        )
      })(qt)
      Ii.names.forEach(function (e) {
        var t = Ii[e]
        Pi.prototype[t.getterName] = function () {
          return (this[t.privateName] = this[t.privateName] || new t.ListClass()), this[t.privateName]
        }
      }),
        (Pi.prototype.featuresVolumeControl = !0),
        (Pi.prototype.featuresMuteControl = !0),
        (Pi.prototype.featuresFullscreenResize = !1),
        (Pi.prototype.featuresPlaybackRate = !1),
        (Pi.prototype.featuresProgressEvents = !1),
        (Pi.prototype.featuresSourceset = !1),
        (Pi.prototype.featuresTimeupdateEvents = !1),
        (Pi.prototype.featuresNativeTextTracks = !1),
        (Pi.withSourceHandlers = function (e) {
          ;(e.registerSourceHandler = function (t, i) {
            var n = e.sourceHandlers
            n || (n = e.sourceHandlers = []), void 0 === i && (i = n.length), n.splice(i, 0, t)
          }),
            (e.canPlayType = function (t) {
              for (var i, n = e.sourceHandlers || [], r = 0; r < n.length; r++) if ((i = n[r].canPlayType(t))) return i
              return ''
            }),
            (e.selectSourceHandler = function (t, i) {
              for (var n = e.sourceHandlers || [], r = 0; r < n.length; r++) if (n[r].canHandleSource(t, i)) return n[r]
              return null
            }),
            (e.canPlaySource = function (t, i) {
              var n = e.selectSourceHandler(t, i)
              return n ? n.canHandleSource(t, i) : ''
            })
          ;['seekable', 'seeking', 'duration'].forEach(function (e) {
            var t = this[e]
            'function' === typeof t &&
              (this[e] = function () {
                return this.sourceHandler_ && this.sourceHandler_[e]
                  ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments)
                  : t.apply(this, arguments)
              })
          }, e.prototype),
            (e.prototype.setSource = function (t) {
              var i = e.selectSourceHandler(t, this.options_)
              i ||
                (e.nativeSourceHandler
                  ? (i = e.nativeSourceHandler)
                  : q.error('No source handler found for the current source.')),
                this.disposeSourceHandler(),
                this.off('dispose', this.disposeSourceHandler_),
                i !== e.nativeSourceHandler && (this.currentSource_ = t),
                (this.sourceHandler_ = i.handleSource(t, this, this.options_)),
                this.one('dispose', this.disposeSourceHandler_)
            }),
            (e.prototype.disposeSourceHandler = function () {
              this.currentSource_ && (this.clearTracks(['audio', 'video']), (this.currentSource_ = null)),
                this.cleanupAutoTextTracks(),
                this.sourceHandler_ &&
                  (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), (this.sourceHandler_ = null))
            })
        }),
        qt.registerComponent('Tech', Pi),
        Pi.registerTech('Tech', Pi),
        (Pi.defaultTechOrder_ = [])
      var Ai = {},
        Li = {},
        Oi = {}
      function Di(e, t, i) {
        e.setTimeout(function () {
          return Fi(t, Ai[t.type], i, e)
        }, 1)
      }
      function Mi(e, t, i, n) {
        void 0 === n && (n = null)
        var r = 'call' + Ut(i),
          a = e.reduce(Ni(r), n),
          s = a === Oi,
          o = s ? null : t[i](a)
        return (
          (function (e, t, i, n) {
            for (var r = e.length - 1; r >= 0; r--) {
              var a = e[r]
              a[t] && a[t](n, i)
            }
          })(e, i, o, s),
          o
        )
      }
      var Ri = {
          buffered: 1,
          currentTime: 1,
          duration: 1,
          muted: 1,
          played: 1,
          paused: 1,
          seekable: 1,
          volume: 1,
          ended: 1,
        },
        Ui = { setCurrentTime: 1, setMuted: 1, setVolume: 1 },
        Bi = { play: 1, pause: 1 }
      function Ni(e) {
        return function (t, i) {
          return t === Oi ? Oi : i[e] ? i[e](t) : t
        }
      }
      function Fi(e, t, i, n, r, a) {
        void 0 === e && (e = {}), void 0 === t && (t = []), void 0 === r && (r = []), void 0 === a && (a = !1)
        var s = t,
          o = s[0],
          l = s.slice(1)
        if ('string' === typeof o) Fi(e, Ai[o], i, n, r, a)
        else if (o) {
          var u = (function (e, t) {
            var i = Li[e.id()],
              n = null
            if (void 0 === i || null === i) return (n = t(e)), (Li[e.id()] = [[t, n]]), n
            for (var r = 0; r < i.length; r++) {
              var a = i[r],
                s = a[0],
                o = a[1]
              s === t && (n = o)
            }
            return null === n && ((n = t(e)), i.push([t, n])), n
          })(n, o)
          if (!u.setSource) return r.push(u), Fi(e, l, i, n, r, a)
          u.setSource(K({}, e), function (t, s) {
            if (t) return Fi(e, l, i, n, r, a)
            r.push(u), Fi(s, e.type === s.type ? l : Ai[s.type], i, n, r, a)
          })
        } else l.length ? Fi(e, l, i, n, r, a) : a ? i(e, r) : Fi(e, Ai['*'], i, n, r, !0)
      }
      var ji = {
          opus: 'video/ogg',
          ogv: 'video/ogg',
          mp4: 'video/mp4',
          mov: 'video/mp4',
          m4v: 'video/mp4',
          mkv: 'video/x-matroska',
          m4a: 'audio/mp4',
          mp3: 'audio/mpeg',
          aac: 'audio/aac',
          caf: 'audio/x-caf',
          flac: 'audio/flac',
          oga: 'audio/ogg',
          wav: 'audio/wav',
          m3u8: 'application/x-mpegURL',
          jpg: 'image/jpeg',
          jpeg: 'image/jpeg',
          gif: 'image/gif',
          png: 'image/png',
          svg: 'image/svg+xml',
          webp: 'image/webp',
        },
        Hi = function (e) {
          void 0 === e && (e = '')
          var t = _i(e)
          return ji[t.toLowerCase()] || ''
        },
        qi = function e(t) {
          if (Array.isArray(t)) {
            var i = []
            t.forEach(function (t) {
              ;(t = e(t)), Array.isArray(t) ? (i = i.concat(t)) : Z(t) && i.push(t)
            }),
              (t = i)
          } else
            t =
              'string' === typeof t && t.trim()
                ? [Vi({ src: t })]
                : Z(t) && 'string' === typeof t.src && t.src && t.src.trim()
                ? [Vi(t)]
                : []
          return t
        }
      function Vi(e) {
        if (!e.type) {
          var t = Hi(e.src)
          t && (e.type = t)
        }
        return e
      }
      var Wi = (function (e) {
        function t(t, i, n) {
          var r,
            a = Bt({ createEl: !1 }, i)
          if (((r = e.call(this, t, a, n) || this), i.playerOptions.sources && 0 !== i.playerOptions.sources.length))
            t.src(i.playerOptions.sources)
          else
            for (var s = 0, o = i.playerOptions.techOrder; s < o.length; s++) {
              var l = Ut(o[s]),
                u = Pi.getTech(l)
              if ((l || (u = qt.getComponent(l)), u && u.isSupported())) {
                t.loadTech_(l)
                break
              }
            }
          return r
        }
        return (0, d.Z)(t, e), t
      })(qt)
      qt.registerComponent('MediaLoader', Wi)
      var zi = (function (e) {
        function t(t, i) {
          var n
          return (
            ((n = e.call(this, t, i) || this).handleMouseOver_ = function (e) {
              return n.handleMouseOver(e)
            }),
            (n.handleMouseOut_ = function (e) {
              return n.handleMouseOut(e)
            }),
            (n.handleClick_ = function (e) {
              return n.handleClick(e)
            }),
            (n.handleKeyDown_ = function (e) {
              return n.handleKeyDown(e)
            }),
            n.emitTapEvents(),
            n.enable(),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function (e, t, i) {
            void 0 === e && (e = 'div'),
              void 0 === t && (t = {}),
              void 0 === i && (i = {}),
              (t = K({ className: this.buildCSSClass(), tabIndex: 0 }, t)),
              'button' === e &&
                q.error(
                  'Creating a ClickableComponent with an HTML element of ' +
                    e +
                    ' is not supported; use a Button instead.',
                ),
              (i = K({ role: 'button' }, i)),
              (this.tabIndex_ = t.tabIndex)
            var n = Ce(e, t, i)
            return (
              n.appendChild(Ce('span', { className: 'vjs-icon-placeholder' }, { 'aria-hidden': !0 })),
              this.createControlTextEl(n),
              n
            )
          }),
          (i.dispose = function () {
            ;(this.controlTextEl_ = null), e.prototype.dispose.call(this)
          }),
          (i.createControlTextEl = function (e) {
            return (
              (this.controlTextEl_ = Ce('span', { className: 'vjs-control-text' }, { 'aria-live': 'polite' })),
              e && e.appendChild(this.controlTextEl_),
              this.controlText(this.controlText_, e),
              this.controlTextEl_
            )
          }),
          (i.controlText = function (e, t) {
            if ((void 0 === t && (t = this.el()), void 0 === e)) return this.controlText_ || 'Need Text'
            var i = this.localize(e)
            ;(this.controlText_ = e),
              Ee(this.controlTextEl_, i),
              this.nonIconControl || this.player_.options_.noUITitleAttributes || t.setAttribute('title', i)
          }),
          (i.buildCSSClass = function () {
            return 'vjs-control vjs-button ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.enable = function () {
            this.enabled_ ||
              ((this.enabled_ = !0),
              this.removeClass('vjs-disabled'),
              this.el_.setAttribute('aria-disabled', 'false'),
              'undefined' !== typeof this.tabIndex_ && this.el_.setAttribute('tabIndex', this.tabIndex_),
              this.on(['tap', 'click'], this.handleClick_),
              this.on('keydown', this.handleKeyDown_))
          }),
          (i.disable = function () {
            ;(this.enabled_ = !1),
              this.addClass('vjs-disabled'),
              this.el_.setAttribute('aria-disabled', 'true'),
              'undefined' !== typeof this.tabIndex_ && this.el_.removeAttribute('tabIndex'),
              this.off('mouseover', this.handleMouseOver_),
              this.off('mouseout', this.handleMouseOut_),
              this.off(['tap', 'click'], this.handleClick_),
              this.off('keydown', this.handleKeyDown_)
          }),
          (i.handleLanguagechange = function () {
            this.controlText(this.controlText_)
          }),
          (i.handleClick = function (e) {
            this.options_.clickHandler && this.options_.clickHandler.call(this, arguments)
          }),
          (i.handleKeyDown = function (t) {
            f().isEventKey(t, 'Space') || f().isEventKey(t, 'Enter')
              ? (t.preventDefault(), t.stopPropagation(), this.trigger('click'))
              : e.prototype.handleKeyDown.call(this, t)
          }),
          t
        )
      })(qt)
      qt.registerComponent('ClickableComponent', zi)
      var Gi = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).update(),
            (n.update_ = function (e) {
              return n.update(e)
            }),
            t.on('posterchange', n.update_),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.dispose = function () {
            this.player().off('posterchange', this.update_), e.prototype.dispose.call(this)
          }),
          (i.createEl = function () {
            return Ce('div', { className: 'vjs-poster', tabIndex: -1 })
          }),
          (i.update = function (e) {
            var t = this.player().poster()
            this.setSrc(t), t ? this.show() : this.hide()
          }),
          (i.setSrc = function (e) {
            var t = ''
            e && (t = 'url("' + e + '")'), (this.el_.style.backgroundImage = t)
          }),
          (i.handleClick = function (e) {
            if (this.player_.controls()) {
              var t =
                this.player_.usingPlugin('eme') && this.player_.eme.sessions && this.player_.eme.sessions.length > 0
              !this.player_.tech(!0) || ((ue || se) && t) || this.player_.tech(!0).focus(),
                this.player_.paused() ? Xt(this.player_.play()) : this.player_.pause()
            }
          }),
          t
        )
      })(zi)
      qt.registerComponent('PosterImage', Gi)
      var Ki = {
        monospace: 'monospace',
        sansSerif: 'sans-serif',
        serif: 'serif',
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: 'sans-serif',
        proportionalSerif: 'serif',
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif',
      }
      function Zi(e, t) {
        var i
        if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]
        else {
          if (7 !== e.length)
            throw new Error('Invalid color code provided, ' + e + '; must be formatted as e.g. #f0e or #f604e2.')
          i = e.slice(1)
        }
        return (
          'rgba(' +
          parseInt(i.slice(0, 2), 16) +
          ',' +
          parseInt(i.slice(2, 4), 16) +
          ',' +
          parseInt(i.slice(4, 6), 16) +
          ',' +
          t +
          ')'
        )
      }
      function Qi(e, t, i) {
        try {
          e.style[t] = i
        } catch (n) {
          return
        }
      }
      var Xi = (function (e) {
        function t(t, i, n) {
          var r
          r = e.call(this, t, i, n) || this
          var s = function (e) {
            return r.updateDisplay(e)
          }
          return (
            t.on('loadstart', function (e) {
              return r.toggleDisplay(e)
            }),
            t.on('texttrackchange', s),
            t.on('loadedmetadata', function (e) {
              return r.preselectTrack(e)
            }),
            t.ready(
              Tt((0, u.Z)(r), function () {
                if (t.tech_ && t.tech_.featuresNativeTextTracks) this.hide()
                else {
                  t.on('fullscreenchange', s),
                    t.on('playerresize', s),
                    a().addEventListener('orientationchange', s),
                    t.on('dispose', function () {
                      return a().removeEventListener('orientationchange', s)
                    })
                  for (var e = this.options_.playerOptions.tracks || [], i = 0; i < e.length; i++)
                    this.player_.addRemoteTextTrack(e[i], !0)
                  this.preselectTrack()
                }
              }),
            ),
            r
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.preselectTrack = function () {
            for (
              var e,
                t,
                i,
                n = { captions: 1, subtitles: 1 },
                r = this.player_.textTracks(),
                a = this.player_.cache_.selectedLanguage,
                s = 0;
              s < r.length;
              s++
            ) {
              var o = r[s]
              a && a.enabled && a.language && a.language === o.language && o.kind in n
                ? o.kind === a.kind
                  ? (i = o)
                  : i || (i = o)
                : a && !a.enabled
                ? ((i = null), (e = null), (t = null))
                : o.default && ('descriptions' !== o.kind || e ? o.kind in n && !t && (t = o) : (e = o))
            }
            i ? (i.mode = 'showing') : t ? (t.mode = 'showing') : e && (e.mode = 'showing')
          }),
          (i.toggleDisplay = function () {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
          }),
          (i.createEl = function () {
            return e.prototype.createEl.call(
              this,
              'div',
              { className: 'vjs-text-track-display' },
              { 'aria-live': 'off', 'aria-atomic': 'true' },
            )
          }),
          (i.clearDisplay = function () {
            'function' === typeof a().WebVTT && a().WebVTT.processCues(a(), [], this.el_)
          }),
          (i.updateDisplay = function () {
            var e = this.player_.textTracks(),
              t = this.options_.allowMultipleShowingTracks
            if ((this.clearDisplay(), t)) {
              for (var i = [], n = 0; n < e.length; ++n) {
                var r = e[n]
                'showing' === r.mode && i.push(r)
              }
              this.updateForTrack(i)
            } else {
              for (var a = null, s = null, o = e.length; o--; ) {
                var l = e[o]
                'showing' === l.mode && ('descriptions' === l.kind ? (a = l) : (s = l))
              }
              s
                ? ('off' !== this.getAttribute('aria-live') && this.setAttribute('aria-live', 'off'),
                  this.updateForTrack(s))
                : a &&
                  ('assertive' !== this.getAttribute('aria-live') && this.setAttribute('aria-live', 'assertive'),
                  this.updateForTrack(a))
            }
          }),
          (i.updateDisplayState = function (e) {
            for (var t = this.player_.textTrackSettings.getValues(), i = e.activeCues, n = i.length; n--; ) {
              var r = i[n]
              if (r) {
                var s = r.displayState
                if (
                  (t.color && (s.firstChild.style.color = t.color),
                  t.textOpacity && Qi(s.firstChild, 'color', Zi(t.color || '#fff', t.textOpacity)),
                  t.backgroundColor && (s.firstChild.style.backgroundColor = t.backgroundColor),
                  t.backgroundOpacity &&
                    Qi(s.firstChild, 'backgroundColor', Zi(t.backgroundColor || '#000', t.backgroundOpacity)),
                  t.windowColor &&
                    (t.windowOpacity
                      ? Qi(s, 'backgroundColor', Zi(t.windowColor, t.windowOpacity))
                      : (s.style.backgroundColor = t.windowColor)),
                  t.edgeStyle &&
                    ('dropshadow' === t.edgeStyle
                      ? (s.firstChild.style.textShadow = '2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222')
                      : 'raised' === t.edgeStyle
                      ? (s.firstChild.style.textShadow = '1px 1px #222, 2px 2px #222, 3px 3px #222')
                      : 'depressed' === t.edgeStyle
                      ? (s.firstChild.style.textShadow = '1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222')
                      : 'uniform' === t.edgeStyle &&
                        (s.firstChild.style.textShadow = '0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222')),
                  t.fontPercent && 1 !== t.fontPercent)
                ) {
                  var o = a().parseFloat(s.style.fontSize)
                  ;(s.style.fontSize = o * t.fontPercent + 'px'), (s.style.height = 'auto'), (s.style.top = 'auto')
                }
                t.fontFamily &&
                  'default' !== t.fontFamily &&
                  ('small-caps' === t.fontFamily
                    ? (s.firstChild.style.fontVariant = 'small-caps')
                    : (s.firstChild.style.fontFamily = Ki[t.fontFamily]))
              }
            }
          }),
          (i.updateForTrack = function (e) {
            if (
              (Array.isArray(e) || (e = [e]),
              'function' === typeof a().WebVTT &&
                !e.every(function (e) {
                  return !e.activeCues
                }))
            ) {
              for (var t = [], i = 0; i < e.length; ++i)
                for (var n = e[i], r = 0; r < n.activeCues.length; ++r) t.push(n.activeCues[r])
              a().WebVTT.processCues(a(), t, this.el_)
              for (var s = 0; s < e.length; ++s) {
                for (var o = e[s], l = 0; l < o.activeCues.length; ++l) {
                  var u = o.activeCues[l].displayState
                  Ie(u, 'vjs-text-track-cue'), Ie(u, 'vjs-text-track-cue-' + (o.language ? o.language : s))
                }
                this.player_.textTrackSettings && this.updateDisplayState(o)
              }
            }
          }),
          t
        )
      })(qt)
      qt.registerComponent('TextTrackDisplay', Xi)
      var Yi = (function (e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        return (
          (0, d.Z)(t, e),
          (t.prototype.createEl = function () {
            var t = this.player_.isAudio(),
              i = this.localize(t ? 'Audio Player' : 'Video Player'),
              n = Ce('span', { className: 'vjs-control-text', textContent: this.localize('{1} is loading.', [i]) }),
              r = e.prototype.createEl.call(this, 'div', { className: 'vjs-loading-spinner', dir: 'ltr' })
            return r.appendChild(n), r
          }),
          t
        )
      })(qt)
      qt.registerComponent('LoadingSpinner', Yi)
      var $i = (function (e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function (e, t, i) {
            void 0 === t && (t = {}), void 0 === i && (i = {})
            var n = Ce('button', (t = K({ className: this.buildCSSClass() }, t)), (i = K({ type: 'button' }, i)))
            return (
              n.appendChild(Ce('span', { className: 'vjs-icon-placeholder' }, { 'aria-hidden': !0 })),
              this.createControlTextEl(n),
              n
            )
          }),
          (i.addChild = function (e, t) {
            void 0 === t && (t = {})
            var i = this.constructor.name
            return (
              q.warn(
                'Adding an actionable (user controllable) child to a Button (' +
                  i +
                  ') is not supported; use a ClickableComponent instead.',
              ),
              qt.prototype.addChild.call(this, e, t)
            )
          }),
          (i.enable = function () {
            e.prototype.enable.call(this), this.el_.removeAttribute('disabled')
          }),
          (i.disable = function () {
            e.prototype.disable.call(this), this.el_.setAttribute('disabled', 'disabled')
          }),
          (i.handleKeyDown = function (t) {
            f().isEventKey(t, 'Space') || f().isEventKey(t, 'Enter')
              ? t.stopPropagation()
              : e.prototype.handleKeyDown.call(this, t)
          }),
          t
        )
      })(zi)
      qt.registerComponent('Button', $i)
      var Ji = (function (e) {
        function t(t, i) {
          var n
          return (
            ((n = e.call(this, t, i) || this).mouseused_ = !1),
            n.on('mousedown', function (e) {
              return n.handleMouseDown(e)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-big-play-button'
          }),
          (i.handleClick = function (e) {
            var t = this.player_.play()
            if (this.mouseused_ && e.clientX && e.clientY) {
              var i =
                this.player_.usingPlugin('eme') && this.player_.eme.sessions && this.player_.eme.sessions.length > 0
              return Xt(t), void (!this.player_.tech(!0) || ((ue || se) && i) || this.player_.tech(!0).focus())
            }
            var n = this.player_.getChild('controlBar'),
              r = n && n.getChild('playToggle')
            if (r) {
              var a = function () {
                return r.focus()
              }
              Qt(t) ? t.then(a, function () {}) : this.setTimeout(a, 1)
            } else this.player_.tech(!0).focus()
          }),
          (i.handleKeyDown = function (t) {
            ;(this.mouseused_ = !1), e.prototype.handleKeyDown.call(this, t)
          }),
          (i.handleMouseDown = function (e) {
            this.mouseused_ = !0
          }),
          t
        )
      })($i)
      ;(Ji.prototype.controlText_ = 'Play Video'), qt.registerComponent('BigPlayButton', Ji)
      var en = (function (e) {
        function t(t, i) {
          var n
          return (n = e.call(this, t, i) || this).controlText((i && i.controlText) || n.localize('Close')), n
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-close-button ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.handleClick = function (e) {
            this.trigger({ type: 'close', bubbles: !1 })
          }),
          (i.handleKeyDown = function (t) {
            f().isEventKey(t, 'Esc')
              ? (t.preventDefault(), t.stopPropagation(), this.trigger('click'))
              : e.prototype.handleKeyDown.call(this, t)
          }),
          t
        )
      })($i)
      qt.registerComponent('CloseButton', en)
      var tn = (function (e) {
        function t(t, i) {
          var n
          return (
            void 0 === i && (i = {}),
            (n = e.call(this, t, i) || this),
            (i.replay = void 0 === i.replay || i.replay),
            n.on(t, 'play', function (e) {
              return n.handlePlay(e)
            }),
            n.on(t, 'pause', function (e) {
              return n.handlePause(e)
            }),
            i.replay &&
              n.on(t, 'ended', function (e) {
                return n.handleEnded(e)
              }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-play-control ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.handleClick = function (e) {
            this.player_.paused() ? Xt(this.player_.play()) : this.player_.pause()
          }),
          (i.handleSeeked = function (e) {
            this.removeClass('vjs-ended'), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
          }),
          (i.handlePlay = function (e) {
            this.removeClass('vjs-ended'),
              this.removeClass('vjs-paused'),
              this.addClass('vjs-playing'),
              this.controlText('Pause')
          }),
          (i.handlePause = function (e) {
            this.removeClass('vjs-playing'), this.addClass('vjs-paused'), this.controlText('Play')
          }),
          (i.handleEnded = function (e) {
            var t = this
            this.removeClass('vjs-playing'),
              this.addClass('vjs-ended'),
              this.controlText('Replay'),
              this.one(this.player_, 'seeked', function (e) {
                return t.handleSeeked(e)
              })
          }),
          t
        )
      })($i)
      ;(tn.prototype.controlText_ = 'Play'), qt.registerComponent('PlayToggle', tn)
      var nn = function (e, t) {
          e = e < 0 ? 0 : e
          var i = Math.floor(e % 60),
            n = Math.floor((e / 60) % 60),
            r = Math.floor(e / 3600),
            a = Math.floor((t / 60) % 60),
            s = Math.floor(t / 3600)
          return (
            (isNaN(e) || e === 1 / 0) && (r = n = i = '-'),
            (r = r > 0 || s > 0 ? r + ':' : '') +
              (n = ((r || a >= 10) && n < 10 ? '0' + n : n) + ':') +
              (i = i < 10 ? '0' + i : i)
          )
        },
        rn = nn
      function an(e, t) {
        return void 0 === t && (t = e), rn(e, t)
      }
      var sn = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).on(t, ['timeupdate', 'ended'], function (e) {
              return n.updateContent(e)
            }),
            n.updateTextNode_(),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            var t = this.buildCSSClass(),
              i = e.prototype.createEl.call(this, 'div', { className: t + ' vjs-time-control vjs-control' }),
              n = Ce(
                'span',
                { className: 'vjs-control-text', textContent: this.localize(this.labelText_) + '\xa0' },
                { role: 'presentation' },
              )
            return (
              i.appendChild(n),
              (this.contentEl_ = Ce(
                'span',
                { className: t + '-display' },
                { 'aria-live': 'off', role: 'presentation' },
              )),
              i.appendChild(this.contentEl_),
              i
            )
          }),
          (i.dispose = function () {
            ;(this.contentEl_ = null), (this.textNode_ = null), e.prototype.dispose.call(this)
          }),
          (i.updateTextNode_ = function (e) {
            var t = this
            void 0 === e && (e = 0),
              (e = an(e)),
              this.formattedTime_ !== e &&
                ((this.formattedTime_ = e),
                this.requestNamedAnimationFrame('TimeDisplay#updateTextNode_', function () {
                  if (t.contentEl_) {
                    var e = t.textNode_
                    e &&
                      t.contentEl_.firstChild !== e &&
                      ((e = null),
                      q.warn(
                        'TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.',
                      )),
                      (t.textNode_ = o().createTextNode(t.formattedTime_)),
                      t.textNode_ &&
                        (e ? t.contentEl_.replaceChild(t.textNode_, e) : t.contentEl_.appendChild(t.textNode_))
                  }
                }))
          }),
          (i.updateContent = function (e) {}),
          t
        )
      })(qt)
      ;(sn.prototype.labelText_ = 'Time'), (sn.prototype.controlText_ = 'Time'), qt.registerComponent('TimeDisplay', sn)
      var on = (function (e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-current-time'
          }),
          (i.updateContent = function (e) {
            var t
            ;(t = this.player_.ended()
              ? this.player_.duration()
              : this.player_.scrubbing()
              ? this.player_.getCache().currentTime
              : this.player_.currentTime()),
              this.updateTextNode_(t)
          }),
          t
        )
      })(sn)
      ;(on.prototype.labelText_ = 'Current Time'),
        (on.prototype.controlText_ = 'Current Time'),
        qt.registerComponent('CurrentTimeDisplay', on)
      var ln = (function (e) {
        function t(t, i) {
          var n,
            r = function (e) {
              return n.updateContent(e)
            }
          return (
            (n = e.call(this, t, i) || this).on(t, 'durationchange', r),
            n.on(t, 'loadstart', r),
            n.on(t, 'loadedmetadata', r),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-duration'
          }),
          (i.updateContent = function (e) {
            var t = this.player_.duration()
            this.updateTextNode_(t)
          }),
          t
        )
      })(sn)
      ;(ln.prototype.labelText_ = 'Duration'),
        (ln.prototype.controlText_ = 'Duration'),
        qt.registerComponent('DurationDisplay', ln)
      var un = (function (e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        return (
          (0, d.Z)(t, e),
          (t.prototype.createEl = function () {
            var t = e.prototype.createEl.call(
                this,
                'div',
                { className: 'vjs-time-control vjs-time-divider' },
                { 'aria-hidden': !0 },
              ),
              i = e.prototype.createEl.call(this, 'div'),
              n = e.prototype.createEl.call(this, 'span', { textContent: '/' })
            return i.appendChild(n), t.appendChild(i), t
          }),
          t
        )
      })(qt)
      qt.registerComponent('TimeDivider', un)
      var dn = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).on(t, 'durationchange', function (e) {
              return n.updateContent(e)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-remaining-time'
          }),
          (i.createEl = function () {
            var t = e.prototype.createEl.call(this)
            return t.insertBefore(Ce('span', {}, { 'aria-hidden': !0 }, '-'), this.contentEl_), t
          }),
          (i.updateContent = function (e) {
            var t
            'number' === typeof this.player_.duration() &&
              ((t = this.player_.ended()
                ? 0
                : this.player_.remainingTimeDisplay
                ? this.player_.remainingTimeDisplay()
                : this.player_.remainingTime()),
              this.updateTextNode_(t))
          }),
          t
        )
      })(sn)
      ;(dn.prototype.labelText_ = 'Remaining Time'),
        (dn.prototype.controlText_ = 'Remaining Time'),
        qt.registerComponent('RemainingTimeDisplay', dn)
      var cn = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).updateShowing(),
            n.on(n.player(), 'durationchange', function (e) {
              return n.updateShowing(e)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            var t = e.prototype.createEl.call(this, 'div', { className: 'vjs-live-control vjs-control' })
            return (
              (this.contentEl_ = Ce('div', { className: 'vjs-live-display' }, { 'aria-live': 'off' })),
              this.contentEl_.appendChild(
                Ce('span', { className: 'vjs-control-text', textContent: this.localize('Stream Type') + '\xa0' }),
              ),
              this.contentEl_.appendChild(o().createTextNode(this.localize('LIVE'))),
              t.appendChild(this.contentEl_),
              t
            )
          }),
          (i.dispose = function () {
            ;(this.contentEl_ = null), e.prototype.dispose.call(this)
          }),
          (i.updateShowing = function (e) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
          }),
          t
        )
      })(qt)
      qt.registerComponent('LiveDisplay', cn)
      var hn = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).updateLiveEdgeStatus(),
            n.player_.liveTracker &&
              ((n.updateLiveEdgeStatusHandler_ = function (e) {
                return n.updateLiveEdgeStatus(e)
              }),
              n.on(n.player_.liveTracker, 'liveedgechange', n.updateLiveEdgeStatusHandler_)),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            var t = e.prototype.createEl.call(this, 'button', { className: 'vjs-seek-to-live-control vjs-control' })
            return (
              (this.textEl_ = Ce(
                'span',
                { className: 'vjs-seek-to-live-text', textContent: this.localize('LIVE') },
                { 'aria-hidden': 'true' },
              )),
              t.appendChild(this.textEl_),
              t
            )
          }),
          (i.updateLiveEdgeStatus = function () {
            !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge()
              ? (this.setAttribute('aria-disabled', !0),
                this.addClass('vjs-at-live-edge'),
                this.controlText('Seek to live, currently playing live'))
              : (this.setAttribute('aria-disabled', !1),
                this.removeClass('vjs-at-live-edge'),
                this.controlText('Seek to live, currently behind live'))
          }),
          (i.handleClick = function () {
            this.player_.liveTracker.seekToLiveEdge()
          }),
          (i.dispose = function () {
            this.player_.liveTracker &&
              this.off(this.player_.liveTracker, 'liveedgechange', this.updateLiveEdgeStatusHandler_),
              (this.textEl_ = null),
              e.prototype.dispose.call(this)
          }),
          t
        )
      })($i)
      ;(hn.prototype.controlText_ = 'Seek to live, currently playing live'), qt.registerComponent('SeekToLive', hn)
      var pn = function (e, t, i) {
          return (e = Number(e)), Math.min(i, Math.max(t, isNaN(e) ? t : e))
        },
        fn = (function (e) {
          function t(t, i) {
            var n
            return (
              ((n = e.call(this, t, i) || this).handleMouseDown_ = function (e) {
                return n.handleMouseDown(e)
              }),
              (n.handleMouseUp_ = function (e) {
                return n.handleMouseUp(e)
              }),
              (n.handleKeyDown_ = function (e) {
                return n.handleKeyDown(e)
              }),
              (n.handleClick_ = function (e) {
                return n.handleClick(e)
              }),
              (n.handleMouseMove_ = function (e) {
                return n.handleMouseMove(e)
              }),
              (n.update_ = function (e) {
                return n.update(e)
              }),
              (n.bar = n.getChild(n.options_.barName)),
              n.vertical(!!n.options_.vertical),
              n.enable(),
              n
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.enabled = function () {
              return this.enabled_
            }),
            (i.enable = function () {
              this.enabled() ||
                (this.on('mousedown', this.handleMouseDown_),
                this.on('touchstart', this.handleMouseDown_),
                this.on('keydown', this.handleKeyDown_),
                this.on('click', this.handleClick_),
                this.on(this.player_, 'controlsvisible', this.update),
                this.playerEvent && this.on(this.player_, this.playerEvent, this.update),
                this.removeClass('disabled'),
                this.setAttribute('tabindex', 0),
                (this.enabled_ = !0))
            }),
            (i.disable = function () {
              if (this.enabled()) {
                var e = this.bar.el_.ownerDocument
                this.off('mousedown', this.handleMouseDown_),
                  this.off('touchstart', this.handleMouseDown_),
                  this.off('keydown', this.handleKeyDown_),
                  this.off('click', this.handleClick_),
                  this.off(this.player_, 'controlsvisible', this.update_),
                  this.off(e, 'mousemove', this.handleMouseMove_),
                  this.off(e, 'mouseup', this.handleMouseUp_),
                  this.off(e, 'touchmove', this.handleMouseMove_),
                  this.off(e, 'touchend', this.handleMouseUp_),
                  this.removeAttribute('tabindex'),
                  this.addClass('disabled'),
                  this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
                  (this.enabled_ = !1)
              }
            }),
            (i.createEl = function (t, i, n) {
              return (
                void 0 === i && (i = {}),
                void 0 === n && (n = {}),
                (i.className = i.className + ' vjs-slider'),
                (i = K({ tabIndex: 0 }, i)),
                (n = K(
                  { role: 'slider', 'aria-valuenow': 0, 'aria-valuemin': 0, 'aria-valuemax': 100, tabIndex: 0 },
                  n,
                )),
                e.prototype.createEl.call(this, t, i, n)
              )
            }),
            (i.handleMouseDown = function (e) {
              var t = this.bar.el_.ownerDocument
              'mousedown' === e.type && e.preventDefault(),
                'touchstart' !== e.type || oe || e.preventDefault(),
                Ue(),
                this.addClass('vjs-sliding'),
                this.trigger('slideractive'),
                this.on(t, 'mousemove', this.handleMouseMove_),
                this.on(t, 'mouseup', this.handleMouseUp_),
                this.on(t, 'touchmove', this.handleMouseMove_),
                this.on(t, 'touchend', this.handleMouseUp_),
                this.handleMouseMove(e)
            }),
            (i.handleMouseMove = function (e) {}),
            (i.handleMouseUp = function () {
              var e = this.bar.el_.ownerDocument
              Be(),
                this.removeClass('vjs-sliding'),
                this.trigger('sliderinactive'),
                this.off(e, 'mousemove', this.handleMouseMove_),
                this.off(e, 'mouseup', this.handleMouseUp_),
                this.off(e, 'touchmove', this.handleMouseMove_),
                this.off(e, 'touchend', this.handleMouseUp_),
                this.update()
            }),
            (i.update = function () {
              var e = this
              if (this.el_ && this.bar) {
                var t = this.getProgress()
                return (
                  t === this.progress_ ||
                    ((this.progress_ = t),
                    this.requestNamedAnimationFrame('Slider#update', function () {
                      var i = e.vertical() ? 'height' : 'width'
                      e.bar.el().style[i] = (100 * t).toFixed(2) + '%'
                    })),
                  t
                )
              }
            }),
            (i.getProgress = function () {
              return Number(pn(this.getPercent(), 0, 1).toFixed(4))
            }),
            (i.calculateDistance = function (e) {
              var t = je(this.el_, e)
              return this.vertical() ? t.y : t.x
            }),
            (i.handleKeyDown = function (t) {
              f().isEventKey(t, 'Left') || f().isEventKey(t, 'Down')
                ? (t.preventDefault(), t.stopPropagation(), this.stepBack())
                : f().isEventKey(t, 'Right') || f().isEventKey(t, 'Up')
                ? (t.preventDefault(), t.stopPropagation(), this.stepForward())
                : e.prototype.handleKeyDown.call(this, t)
            }),
            (i.handleClick = function (e) {
              e.stopPropagation(), e.preventDefault()
            }),
            (i.vertical = function (e) {
              if (void 0 === e) return this.vertical_ || !1
              ;(this.vertical_ = !!e),
                this.vertical_ ? this.addClass('vjs-slider-vertical') : this.addClass('vjs-slider-horizontal')
            }),
            t
          )
        })(qt)
      qt.registerComponent('Slider', fn)
      var mn = function (e, t) {
          return pn((e / t) * 100, 0, 100).toFixed(2) + '%'
        },
        gn = (function (e) {
          function t(t, i) {
            var n
            return (
              ((n = e.call(this, t, i) || this).partEls_ = []),
              n.on(t, 'progress', function (e) {
                return n.update(e)
              }),
              n
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.createEl = function () {
              var t = e.prototype.createEl.call(this, 'div', { className: 'vjs-load-progress' }),
                i = Ce('span', { className: 'vjs-control-text' }),
                n = Ce('span', { textContent: this.localize('Loaded') }),
                r = o().createTextNode(': ')
              return (
                (this.percentageEl_ = Ce('span', {
                  className: 'vjs-control-text-loaded-percentage',
                  textContent: '0%',
                })),
                t.appendChild(i),
                i.appendChild(n),
                i.appendChild(r),
                i.appendChild(this.percentageEl_),
                t
              )
            }),
            (i.dispose = function () {
              ;(this.partEls_ = null), (this.percentageEl_ = null), e.prototype.dispose.call(this)
            }),
            (i.update = function (e) {
              var t = this
              this.requestNamedAnimationFrame('LoadProgressBar#update', function () {
                var e = t.player_.liveTracker,
                  i = t.player_.buffered(),
                  n = e && e.isLive() ? e.seekableEnd() : t.player_.duration(),
                  r = t.player_.bufferedEnd(),
                  a = t.partEls_,
                  s = mn(r, n)
                t.percent_ !== s && ((t.el_.style.width = s), Ee(t.percentageEl_, s), (t.percent_ = s))
                for (var o = 0; o < i.length; o++) {
                  var l = i.start(o),
                    u = i.end(o),
                    d = a[o]
                  d || ((d = t.el_.appendChild(Ce())), (a[o] = d)),
                    (d.dataset.start === l && d.dataset.end === u) ||
                      ((d.dataset.start = l),
                      (d.dataset.end = u),
                      (d.style.left = mn(l, r)),
                      (d.style.width = mn(u - l, r)))
                }
                for (var c = a.length; c > i.length; c--) t.el_.removeChild(a[c - 1])
                a.length = i.length
              })
            }),
            t
          )
        })(qt)
      qt.registerComponent('LoadProgressBar', gn)
      var _n = (function (e) {
        function t(t, i) {
          var n
          return ((n = e.call(this, t, i) || this).update = bt(Tt((0, u.Z)(n), n.update), yt)), n
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            return e.prototype.createEl.call(this, 'div', { className: 'vjs-time-tooltip' }, { 'aria-hidden': 'true' })
          }),
          (i.update = function (e, t, i) {
            var n = Fe(this.el_),
              r = Ne(this.player_.el()),
              a = e.width * t
            if (r && n) {
              var s = e.left - r.left + a,
                o = e.width - a + (r.right - e.right),
                l = n.width / 2
              s < l ? (l += l - s) : o < l && (l = o),
                l < 0 ? (l = 0) : l > n.width && (l = n.width),
                (l = Math.round(l)),
                (this.el_.style.right = '-' + l + 'px'),
                this.write(i)
            }
          }),
          (i.write = function (e) {
            Ee(this.el_, e)
          }),
          (i.updateTime = function (e, t, i, n) {
            var r = this
            this.requestNamedAnimationFrame('TimeTooltip#updateTime', function () {
              var a,
                s = r.player_.duration()
              if (r.player_.liveTracker && r.player_.liveTracker.isLive()) {
                var o = r.player_.liveTracker.liveWindow(),
                  l = o - t * o
                a = (l < 1 ? '' : '-') + an(l, o)
              } else a = an(i, s)
              r.update(e, t, a), n && n()
            })
          }),
          t
        )
      })(qt)
      qt.registerComponent('TimeTooltip', _n)
      var vn = (function (e) {
        function t(t, i) {
          var n
          return ((n = e.call(this, t, i) || this).update = bt(Tt((0, u.Z)(n), n.update), yt)), n
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            return e.prototype.createEl.call(
              this,
              'div',
              { className: 'vjs-play-progress vjs-slider-bar' },
              { 'aria-hidden': 'true' },
            )
          }),
          (i.update = function (e, t) {
            var i = this.getChild('timeTooltip')
            if (i) {
              var n = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
              i.updateTime(e, t, n)
            }
          }),
          t
        )
      })(qt)
      ;(vn.prototype.options_ = { children: [] }),
        me || ie || vn.prototype.options_.children.push('timeTooltip'),
        qt.registerComponent('PlayProgressBar', vn)
      var yn = (function (e) {
        function t(t, i) {
          var n
          return ((n = e.call(this, t, i) || this).update = bt(Tt((0, u.Z)(n), n.update), yt)), n
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            return e.prototype.createEl.call(this, 'div', { className: 'vjs-mouse-display' })
          }),
          (i.update = function (e, t) {
            var i = this,
              n = t * this.player_.duration()
            this.getChild('timeTooltip').updateTime(e, t, n, function () {
              i.el_.style.left = e.width * t + 'px'
            })
          }),
          t
        )
      })(qt)
      ;(yn.prototype.options_ = { children: ['timeTooltip'] }), qt.registerComponent('MouseTimeDisplay', yn)
      var Tn = (function (e) {
        function t(t, i) {
          var n
          return (n = e.call(this, t, i) || this).setEventHandlers_(), n
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.setEventHandlers_ = function () {
            var e = this
            ;(this.update_ = Tt(this, this.update)),
              (this.update = bt(this.update_, yt)),
              this.on(this.player_, ['ended', 'durationchange', 'timeupdate'], this.update),
              this.player_.liveTracker && this.on(this.player_.liveTracker, 'liveedgechange', this.update),
              (this.updateInterval = null),
              (this.enableIntervalHandler_ = function (t) {
                return e.enableInterval_(t)
              }),
              (this.disableIntervalHandler_ = function (t) {
                return e.disableInterval_(t)
              }),
              this.on(this.player_, ['playing'], this.enableIntervalHandler_),
              this.on(this.player_, ['ended', 'pause', 'waiting'], this.disableIntervalHandler_),
              'hidden' in o() && 'visibilityState' in o() && this.on(o(), 'visibilitychange', this.toggleVisibility_)
          }),
          (i.toggleVisibility_ = function (e) {
            'hidden' === o().visibilityState
              ? (this.cancelNamedAnimationFrame('SeekBar#update'),
                this.cancelNamedAnimationFrame('Slider#update'),
                this.disableInterval_(e))
              : (this.player_.ended() || this.player_.paused() || this.enableInterval_(), this.update())
          }),
          (i.enableInterval_ = function () {
            this.updateInterval || (this.updateInterval = this.setInterval(this.update, yt))
          }),
          (i.disableInterval_ = function (e) {
            ;(this.player_.liveTracker && this.player_.liveTracker.isLive() && e && 'ended' !== e.type) ||
              (this.updateInterval && (this.clearInterval(this.updateInterval), (this.updateInterval = null)))
          }),
          (i.createEl = function () {
            return e.prototype.createEl.call(
              this,
              'div',
              { className: 'vjs-progress-holder' },
              { 'aria-label': this.localize('Progress Bar') },
            )
          }),
          (i.update = function (t) {
            var i = this
            if ('hidden' !== o().visibilityState) {
              var n = e.prototype.update.call(this)
              return (
                this.requestNamedAnimationFrame('SeekBar#update', function () {
                  var e = i.player_.ended() ? i.player_.duration() : i.getCurrentTime_(),
                    t = i.player_.liveTracker,
                    r = i.player_.duration()
                  t && t.isLive() && (r = i.player_.liveTracker.liveCurrentTime()),
                    i.percent_ !== n && (i.el_.setAttribute('aria-valuenow', (100 * n).toFixed(2)), (i.percent_ = n)),
                    (i.currentTime_ === e && i.duration_ === r) ||
                      (i.el_.setAttribute(
                        'aria-valuetext',
                        i.localize(
                          'progress bar timing: currentTime={1} duration={2}',
                          [an(e, r), an(r, r)],
                          '{1} of {2}',
                        ),
                      ),
                      (i.currentTime_ = e),
                      (i.duration_ = r)),
                    i.bar && i.bar.update(Ne(i.el()), i.getProgress())
                }),
                n
              )
            }
          }),
          (i.userSeek_ = function (e) {
            this.player_.liveTracker &&
              this.player_.liveTracker.isLive() &&
              this.player_.liveTracker.nextSeekedFromUser(),
              this.player_.currentTime(e)
          }),
          (i.getCurrentTime_ = function () {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
          }),
          (i.getPercent = function () {
            var e,
              t = this.getCurrentTime_(),
              i = this.player_.liveTracker
            return (
              i && i.isLive()
                ? ((e = (t - i.seekableStart()) / i.liveWindow()), i.atLiveEdge() && (e = 1))
                : (e = t / this.player_.duration()),
              e
            )
          }),
          (i.handleMouseDown = function (t) {
            Ge(t) &&
              (t.stopPropagation(),
              this.player_.scrubbing(!0),
              (this.videoWasPlaying = !this.player_.paused()),
              this.player_.pause(),
              e.prototype.handleMouseDown.call(this, t))
          }),
          (i.handleMouseMove = function (e) {
            if (Ge(e)) {
              var t,
                i = this.calculateDistance(e),
                n = this.player_.liveTracker
              if (n && n.isLive()) {
                if (i >= 0.99) return void n.seekToLiveEdge()
                var r = n.seekableStart(),
                  a = n.liveCurrentTime()
                if (((t = r + i * n.liveWindow()) >= a && (t = a), t <= r && (t = r + 0.1), t === 1 / 0)) return
              } else (t = i * this.player_.duration()) === this.player_.duration() && (t -= 0.1)
              this.userSeek_(t)
            }
          }),
          (i.enable = function () {
            e.prototype.enable.call(this)
            var t = this.getChild('mouseTimeDisplay')
            t && t.show()
          }),
          (i.disable = function () {
            e.prototype.disable.call(this)
            var t = this.getChild('mouseTimeDisplay')
            t && t.hide()
          }),
          (i.handleMouseUp = function (t) {
            e.prototype.handleMouseUp.call(this, t),
              t && t.stopPropagation(),
              this.player_.scrubbing(!1),
              this.player_.trigger({ type: 'timeupdate', target: this, manuallyTriggered: !0 }),
              this.videoWasPlaying ? Xt(this.player_.play()) : this.update_()
          }),
          (i.stepForward = function () {
            this.userSeek_(this.player_.currentTime() + 5)
          }),
          (i.stepBack = function () {
            this.userSeek_(this.player_.currentTime() - 5)
          }),
          (i.handleAction = function (e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
          }),
          (i.handleKeyDown = function (t) {
            var i = this.player_.liveTracker
            if (f().isEventKey(t, 'Space') || f().isEventKey(t, 'Enter'))
              t.preventDefault(), t.stopPropagation(), this.handleAction(t)
            else if (f().isEventKey(t, 'Home')) t.preventDefault(), t.stopPropagation(), this.userSeek_(0)
            else if (f().isEventKey(t, 'End'))
              t.preventDefault(),
                t.stopPropagation(),
                i && i.isLive() ? this.userSeek_(i.liveCurrentTime()) : this.userSeek_(this.player_.duration())
            else if (/^[0-9]$/.test(f()(t))) {
              t.preventDefault(), t.stopPropagation()
              var n = (10 * (f().codes[f()(t)] - f().codes[0])) / 100
              i && i.isLive()
                ? this.userSeek_(i.seekableStart() + i.liveWindow() * n)
                : this.userSeek_(this.player_.duration() * n)
            } else
              f().isEventKey(t, 'PgDn')
                ? (t.preventDefault(), t.stopPropagation(), this.userSeek_(this.player_.currentTime() - 60))
                : f().isEventKey(t, 'PgUp')
                ? (t.preventDefault(), t.stopPropagation(), this.userSeek_(this.player_.currentTime() + 60))
                : e.prototype.handleKeyDown.call(this, t)
          }),
          (i.dispose = function () {
            this.disableInterval_(),
              this.off(this.player_, ['ended', 'durationchange', 'timeupdate'], this.update),
              this.player_.liveTracker && this.off(this.player_.liveTracker, 'liveedgechange', this.update),
              this.off(this.player_, ['playing'], this.enableIntervalHandler_),
              this.off(this.player_, ['ended', 'pause', 'waiting'], this.disableIntervalHandler_),
              'hidden' in o() && 'visibilityState' in o() && this.off(o(), 'visibilitychange', this.toggleVisibility_),
              e.prototype.dispose.call(this)
          }),
          t
        )
      })(fn)
      ;(Tn.prototype.options_ = { children: ['loadProgressBar', 'playProgressBar'], barName: 'playProgressBar' }),
        me || ie || Tn.prototype.options_.children.splice(1, 0, 'mouseTimeDisplay'),
        qt.registerComponent('SeekBar', Tn)
      var bn = (function (e) {
        function t(t, i) {
          var n
          return (
            ((n = e.call(this, t, i) || this).handleMouseMove = bt(Tt((0, u.Z)(n), n.handleMouseMove), yt)),
            (n.throttledHandleMouseSeek = bt(Tt((0, u.Z)(n), n.handleMouseSeek), yt)),
            (n.handleMouseUpHandler_ = function (e) {
              return n.handleMouseUp(e)
            }),
            (n.handleMouseDownHandler_ = function (e) {
              return n.handleMouseDown(e)
            }),
            n.enable(),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            return e.prototype.createEl.call(this, 'div', { className: 'vjs-progress-control vjs-control' })
          }),
          (i.handleMouseMove = function (e) {
            var t = this.getChild('seekBar')
            if (t) {
              var i = t.getChild('playProgressBar'),
                n = t.getChild('mouseTimeDisplay')
              if (i || n) {
                var r = t.el(),
                  a = Fe(r),
                  s = je(r, e).x
                ;(s = pn(s, 0, 1)), n && n.update(a, s), i && i.update(a, t.getProgress())
              }
            }
          }),
          (i.handleMouseSeek = function (e) {
            var t = this.getChild('seekBar')
            t && t.handleMouseMove(e)
          }),
          (i.enabled = function () {
            return this.enabled_
          }),
          (i.disable = function () {
            if (
              (this.children().forEach(function (e) {
                return e.disable && e.disable()
              }),
              this.enabled() &&
                (this.off(['mousedown', 'touchstart'], this.handleMouseDownHandler_),
                this.off(this.el_, 'mousemove', this.handleMouseMove),
                this.removeListenersAddedOnMousedownAndTouchstart(),
                this.addClass('disabled'),
                (this.enabled_ = !1),
                this.player_.scrubbing()))
            ) {
              var e = this.getChild('seekBar')
              this.player_.scrubbing(!1), e.videoWasPlaying && Xt(this.player_.play())
            }
          }),
          (i.enable = function () {
            this.children().forEach(function (e) {
              return e.enable && e.enable()
            }),
              this.enabled() ||
                (this.on(['mousedown', 'touchstart'], this.handleMouseDownHandler_),
                this.on(this.el_, 'mousemove', this.handleMouseMove),
                this.removeClass('disabled'),
                (this.enabled_ = !0))
          }),
          (i.removeListenersAddedOnMousedownAndTouchstart = function () {
            var e = this.el_.ownerDocument
            this.off(e, 'mousemove', this.throttledHandleMouseSeek),
              this.off(e, 'touchmove', this.throttledHandleMouseSeek),
              this.off(e, 'mouseup', this.handleMouseUpHandler_),
              this.off(e, 'touchend', this.handleMouseUpHandler_)
          }),
          (i.handleMouseDown = function (e) {
            var t = this.el_.ownerDocument,
              i = this.getChild('seekBar')
            i && i.handleMouseDown(e),
              this.on(t, 'mousemove', this.throttledHandleMouseSeek),
              this.on(t, 'touchmove', this.throttledHandleMouseSeek),
              this.on(t, 'mouseup', this.handleMouseUpHandler_),
              this.on(t, 'touchend', this.handleMouseUpHandler_)
          }),
          (i.handleMouseUp = function (e) {
            var t = this.getChild('seekBar')
            t && t.handleMouseUp(e), this.removeListenersAddedOnMousedownAndTouchstart()
          }),
          t
        )
      })(qt)
      ;(bn.prototype.options_ = { children: ['seekBar'] }), qt.registerComponent('ProgressControl', bn)
      var Sn = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).on(t, ['enterpictureinpicture', 'leavepictureinpicture'], function (e) {
              return n.handlePictureInPictureChange(e)
            }),
            n.on(t, ['disablepictureinpicturechanged', 'loadedmetadata'], function (e) {
              return n.handlePictureInPictureEnabledChange(e)
            }),
            n.disable(),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-picture-in-picture-control ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.handlePictureInPictureEnabledChange = function () {
            o().pictureInPictureEnabled && !1 === this.player_.disablePictureInPicture()
              ? this.enable()
              : this.disable()
          }),
          (i.handlePictureInPictureChange = function (e) {
            this.player_.isInPictureInPicture()
              ? this.controlText('Exit Picture-in-Picture')
              : this.controlText('Picture-in-Picture'),
              this.handlePictureInPictureEnabledChange()
          }),
          (i.handleClick = function (e) {
            this.player_.isInPictureInPicture()
              ? this.player_.exitPictureInPicture()
              : this.player_.requestPictureInPicture()
          }),
          t
        )
      })($i)
      ;(Sn.prototype.controlText_ = 'Picture-in-Picture'), qt.registerComponent('PictureInPictureToggle', Sn)
      var kn = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).on(t, 'fullscreenchange', function (e) {
              return n.handleFullscreenChange(e)
            }),
            !1 === o()[t.fsApi_.fullscreenEnabled] && n.disable(),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-fullscreen-control ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.handleFullscreenChange = function (e) {
            this.player_.isFullscreen() ? this.controlText('Non-Fullscreen') : this.controlText('Fullscreen')
          }),
          (i.handleClick = function (e) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
          }),
          t
        )
      })($i)
      ;(kn.prototype.controlText_ = 'Fullscreen'), qt.registerComponent('FullscreenToggle', kn)
      var Cn = (function (e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        return (
          (0, d.Z)(t, e),
          (t.prototype.createEl = function () {
            var t = e.prototype.createEl.call(this, 'div', { className: 'vjs-volume-level' })
            return t.appendChild(e.prototype.createEl.call(this, 'span', { className: 'vjs-control-text' })), t
          }),
          t
        )
      })(qt)
      qt.registerComponent('VolumeLevel', Cn)
      var En = (function (e) {
        function t(t, i) {
          var n
          return ((n = e.call(this, t, i) || this).update = bt(Tt((0, u.Z)(n), n.update), yt)), n
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            return e.prototype.createEl.call(
              this,
              'div',
              { className: 'vjs-volume-tooltip' },
              { 'aria-hidden': 'true' },
            )
          }),
          (i.update = function (e, t, i, n) {
            if (!i) {
              var r = Ne(this.el_),
                a = Ne(this.player_.el()),
                s = e.width * t
              if (!a || !r) return
              var o = e.left - a.left + s,
                l = e.width - s + (a.right - e.right),
                u = r.width / 2
              o < u ? (u += u - o) : l < u && (u = l),
                u < 0 ? (u = 0) : u > r.width && (u = r.width),
                (this.el_.style.right = '-' + u + 'px')
            }
            this.write(n + '%')
          }),
          (i.write = function (e) {
            Ee(this.el_, e)
          }),
          (i.updateVolume = function (e, t, i, n, r) {
            var a = this
            this.requestNamedAnimationFrame('VolumeLevelTooltip#updateVolume', function () {
              a.update(e, t, i, n.toFixed(0)), r && r()
            })
          }),
          t
        )
      })(qt)
      qt.registerComponent('VolumeLevelTooltip', En)
      var wn = (function (e) {
        function t(t, i) {
          var n
          return ((n = e.call(this, t, i) || this).update = bt(Tt((0, u.Z)(n), n.update), yt)), n
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            return e.prototype.createEl.call(this, 'div', { className: 'vjs-mouse-display' })
          }),
          (i.update = function (e, t, i) {
            var n = this,
              r = 100 * t
            this.getChild('volumeLevelTooltip').updateVolume(e, t, i, r, function () {
              i ? (n.el_.style.bottom = e.height * t + 'px') : (n.el_.style.left = e.width * t + 'px')
            })
          }),
          t
        )
      })(qt)
      ;(wn.prototype.options_ = { children: ['volumeLevelTooltip'] }),
        qt.registerComponent('MouseVolumeLevelDisplay', wn)
      var xn = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).on('slideractive', function (e) {
              return n.updateLastVolume_(e)
            }),
            n.on(t, 'volumechange', function (e) {
              return n.updateARIAAttributes(e)
            }),
            t.ready(function () {
              return n.updateARIAAttributes()
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            return e.prototype.createEl.call(
              this,
              'div',
              { className: 'vjs-volume-bar vjs-slider-bar' },
              { 'aria-label': this.localize('Volume Level'), 'aria-live': 'polite' },
            )
          }),
          (i.handleMouseDown = function (t) {
            Ge(t) && e.prototype.handleMouseDown.call(this, t)
          }),
          (i.handleMouseMove = function (e) {
            var t = this.getChild('mouseVolumeLevelDisplay')
            if (t) {
              var i = this.el(),
                n = Ne(i),
                r = this.vertical(),
                a = je(i, e)
              ;(a = r ? a.y : a.x), (a = pn(a, 0, 1)), t.update(n, a, r)
            }
            Ge(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
          }),
          (i.checkMuted = function () {
            this.player_.muted() && this.player_.muted(!1)
          }),
          (i.getPercent = function () {
            return this.player_.muted() ? 0 : this.player_.volume()
          }),
          (i.stepForward = function () {
            this.checkMuted(), this.player_.volume(this.player_.volume() + 0.1)
          }),
          (i.stepBack = function () {
            this.checkMuted(), this.player_.volume(this.player_.volume() - 0.1)
          }),
          (i.updateARIAAttributes = function (e) {
            var t = this.player_.muted() ? 0 : this.volumeAsPercentage_()
            this.el_.setAttribute('aria-valuenow', t), this.el_.setAttribute('aria-valuetext', t + '%')
          }),
          (i.volumeAsPercentage_ = function () {
            return Math.round(100 * this.player_.volume())
          }),
          (i.updateLastVolume_ = function () {
            var e = this,
              t = this.player_.volume()
            this.one('sliderinactive', function () {
              0 === e.player_.volume() && e.player_.lastVolume_(t)
            })
          }),
          t
        )
      })(fn)
      ;(xn.prototype.options_ = { children: ['volumeLevel'], barName: 'volumeLevel' }),
        me || ie || xn.prototype.options_.children.splice(0, 0, 'mouseVolumeLevelDisplay'),
        (xn.prototype.playerEvent = 'volumechange'),
        qt.registerComponent('VolumeBar', xn)
      var In = (function (e) {
        function t(t, i) {
          var n
          return (
            void 0 === i && (i = {}),
            (i.vertical = i.vertical || !1),
            ('undefined' === typeof i.volumeBar || Q(i.volumeBar)) &&
              ((i.volumeBar = i.volumeBar || {}), (i.volumeBar.vertical = i.vertical)),
            (n = e.call(this, t, i) || this),
            (function (e, t) {
              t.tech_ && !t.tech_.featuresVolumeControl && e.addClass('vjs-hidden'),
                e.on(t, 'loadstart', function () {
                  t.tech_.featuresVolumeControl ? e.removeClass('vjs-hidden') : e.addClass('vjs-hidden')
                })
            })((0, u.Z)(n), t),
            (n.throttledHandleMouseMove = bt(Tt((0, u.Z)(n), n.handleMouseMove), yt)),
            (n.handleMouseUpHandler_ = function (e) {
              return n.handleMouseUp(e)
            }),
            n.on('mousedown', function (e) {
              return n.handleMouseDown(e)
            }),
            n.on('touchstart', function (e) {
              return n.handleMouseDown(e)
            }),
            n.on('mousemove', function (e) {
              return n.handleMouseMove(e)
            }),
            n.on(n.volumeBar, ['focus', 'slideractive'], function () {
              n.volumeBar.addClass('vjs-slider-active'), n.addClass('vjs-slider-active'), n.trigger('slideractive')
            }),
            n.on(n.volumeBar, ['blur', 'sliderinactive'], function () {
              n.volumeBar.removeClass('vjs-slider-active'),
                n.removeClass('vjs-slider-active'),
                n.trigger('sliderinactive')
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            var t = 'vjs-volume-horizontal'
            return (
              this.options_.vertical && (t = 'vjs-volume-vertical'),
              e.prototype.createEl.call(this, 'div', { className: 'vjs-volume-control vjs-control ' + t })
            )
          }),
          (i.handleMouseDown = function (e) {
            var t = this.el_.ownerDocument
            this.on(t, 'mousemove', this.throttledHandleMouseMove),
              this.on(t, 'touchmove', this.throttledHandleMouseMove),
              this.on(t, 'mouseup', this.handleMouseUpHandler_),
              this.on(t, 'touchend', this.handleMouseUpHandler_)
          }),
          (i.handleMouseUp = function (e) {
            var t = this.el_.ownerDocument
            this.off(t, 'mousemove', this.throttledHandleMouseMove),
              this.off(t, 'touchmove', this.throttledHandleMouseMove),
              this.off(t, 'mouseup', this.handleMouseUpHandler_),
              this.off(t, 'touchend', this.handleMouseUpHandler_)
          }),
          (i.handleMouseMove = function (e) {
            this.volumeBar.handleMouseMove(e)
          }),
          t
        )
      })(qt)
      ;(In.prototype.options_ = { children: ['volumeBar'] }), qt.registerComponent('VolumeControl', In)
      var Pn = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this),
            (function (e, t) {
              t.tech_ && !t.tech_.featuresMuteControl && e.addClass('vjs-hidden'),
                e.on(t, 'loadstart', function () {
                  t.tech_.featuresMuteControl ? e.removeClass('vjs-hidden') : e.addClass('vjs-hidden')
                })
            })((0, u.Z)(n), t),
            n.on(t, ['loadstart', 'volumechange'], function (e) {
              return n.update(e)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-mute-control ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.handleClick = function (e) {
            var t = this.player_.volume(),
              i = this.player_.lastVolume_()
            if (0 === t) {
              var n = i < 0.1 ? 0.1 : i
              this.player_.volume(n), this.player_.muted(!1)
            } else this.player_.muted(!this.player_.muted())
          }),
          (i.update = function (e) {
            this.updateIcon_(), this.updateControlText_()
          }),
          (i.updateIcon_ = function () {
            var e = this.player_.volume(),
              t = 3
            me && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted),
              0 === e || this.player_.muted() ? (t = 0) : e < 0.33 ? (t = 1) : e < 0.67 && (t = 2)
            for (var i = 0; i < 4; i++) Pe(this.el_, 'vjs-vol-' + i)
            Ie(this.el_, 'vjs-vol-' + t)
          }),
          (i.updateControlText_ = function () {
            var e = this.player_.muted() || 0 === this.player_.volume() ? 'Unmute' : 'Mute'
            this.controlText() !== e && this.controlText(e)
          }),
          t
        )
      })($i)
      ;(Pn.prototype.controlText_ = 'Mute'), qt.registerComponent('MuteToggle', Pn)
      var An = (function (e) {
        function t(t, i) {
          var n
          return (
            void 0 === i && (i = {}),
            'undefined' !== typeof i.inline ? (i.inline = i.inline) : (i.inline = !0),
            ('undefined' === typeof i.volumeControl || Q(i.volumeControl)) &&
              ((i.volumeControl = i.volumeControl || {}), (i.volumeControl.vertical = !i.inline)),
            ((n = e.call(this, t, i) || this).handleKeyPressHandler_ = function (e) {
              return n.handleKeyPress(e)
            }),
            n.on(t, ['loadstart'], function (e) {
              return n.volumePanelState_(e)
            }),
            n.on(n.muteToggle, 'keyup', function (e) {
              return n.handleKeyPress(e)
            }),
            n.on(n.volumeControl, 'keyup', function (e) {
              return n.handleVolumeControlKeyUp(e)
            }),
            n.on('keydown', function (e) {
              return n.handleKeyPress(e)
            }),
            n.on('mouseover', function (e) {
              return n.handleMouseOver(e)
            }),
            n.on('mouseout', function (e) {
              return n.handleMouseOut(e)
            }),
            n.on(n.volumeControl, ['slideractive'], n.sliderActive_),
            n.on(n.volumeControl, ['sliderinactive'], n.sliderInactive_),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.sliderActive_ = function () {
            this.addClass('vjs-slider-active')
          }),
          (i.sliderInactive_ = function () {
            this.removeClass('vjs-slider-active')
          }),
          (i.volumePanelState_ = function () {
            this.volumeControl.hasClass('vjs-hidden') &&
              this.muteToggle.hasClass('vjs-hidden') &&
              this.addClass('vjs-hidden'),
              this.volumeControl.hasClass('vjs-hidden') &&
                !this.muteToggle.hasClass('vjs-hidden') &&
                this.addClass('vjs-mute-toggle-only')
          }),
          (i.createEl = function () {
            var t = 'vjs-volume-panel-horizontal'
            return (
              this.options_.inline || (t = 'vjs-volume-panel-vertical'),
              e.prototype.createEl.call(this, 'div', { className: 'vjs-volume-panel vjs-control ' + t })
            )
          }),
          (i.dispose = function () {
            this.handleMouseOut(), e.prototype.dispose.call(this)
          }),
          (i.handleVolumeControlKeyUp = function (e) {
            f().isEventKey(e, 'Esc') && this.muteToggle.focus()
          }),
          (i.handleMouseOver = function (e) {
            this.addClass('vjs-hover'), ht(o(), 'keyup', this.handleKeyPressHandler_)
          }),
          (i.handleMouseOut = function (e) {
            this.removeClass('vjs-hover'), pt(o(), 'keyup', this.handleKeyPressHandler_)
          }),
          (i.handleKeyPress = function (e) {
            f().isEventKey(e, 'Esc') && this.handleMouseOut()
          }),
          t
        )
      })(qt)
      ;(An.prototype.options_ = { children: ['muteToggle', 'volumeControl'] }), qt.registerComponent('VolumePanel', An)
      var Ln = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this),
            i && (n.menuButton_ = i.menuButton),
            (n.focusedChild_ = -1),
            n.on('keydown', function (e) {
              return n.handleKeyDown(e)
            }),
            (n.boundHandleBlur_ = function (e) {
              return n.handleBlur(e)
            }),
            (n.boundHandleTapClick_ = function (e) {
              return n.handleTapClick(e)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.addEventListenerForItem = function (e) {
            e instanceof qt &&
              (this.on(e, 'blur', this.boundHandleBlur_), this.on(e, ['tap', 'click'], this.boundHandleTapClick_))
          }),
          (i.removeEventListenerForItem = function (e) {
            e instanceof qt &&
              (this.off(e, 'blur', this.boundHandleBlur_), this.off(e, ['tap', 'click'], this.boundHandleTapClick_))
          }),
          (i.removeChild = function (t) {
            'string' === typeof t && (t = this.getChild(t)),
              this.removeEventListenerForItem(t),
              e.prototype.removeChild.call(this, t)
          }),
          (i.addItem = function (e) {
            var t = this.addChild(e)
            t && this.addEventListenerForItem(t)
          }),
          (i.createEl = function () {
            var t = this.options_.contentElType || 'ul'
            ;(this.contentEl_ = Ce(t, { className: 'vjs-menu-content' })), this.contentEl_.setAttribute('role', 'menu')
            var i = e.prototype.createEl.call(this, 'div', { append: this.contentEl_, className: 'vjs-menu' })
            return (
              i.appendChild(this.contentEl_),
              ht(i, 'click', function (e) {
                e.preventDefault(), e.stopImmediatePropagation()
              }),
              i
            )
          }),
          (i.dispose = function () {
            ;(this.contentEl_ = null),
              (this.boundHandleBlur_ = null),
              (this.boundHandleTapClick_ = null),
              e.prototype.dispose.call(this)
          }),
          (i.handleBlur = function (e) {
            var t = e.relatedTarget || o().activeElement
            if (
              !this.children().some(function (e) {
                return e.el() === t
              })
            ) {
              var i = this.menuButton_
              i && i.buttonPressed_ && t !== i.el().firstChild && i.unpressButton()
            }
          }),
          (i.handleTapClick = function (e) {
            if (this.menuButton_) {
              this.menuButton_.unpressButton()
              var t = this.children()
              if (!Array.isArray(t)) return
              var i = t.filter(function (t) {
                return t.el() === e.target
              })[0]
              if (!i) return
              'CaptionSettingsMenuItem' !== i.name() && this.menuButton_.focus()
            }
          }),
          (i.handleKeyDown = function (e) {
            f().isEventKey(e, 'Left') || f().isEventKey(e, 'Down')
              ? (e.preventDefault(), e.stopPropagation(), this.stepForward())
              : (f().isEventKey(e, 'Right') || f().isEventKey(e, 'Up')) &&
                (e.preventDefault(), e.stopPropagation(), this.stepBack())
          }),
          (i.stepForward = function () {
            var e = 0
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
          }),
          (i.stepBack = function () {
            var e = 0
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
          }),
          (i.focus = function (e) {
            void 0 === e && (e = 0)
            var t = this.children().slice()
            t.length && t[0].hasClass('vjs-menu-title') && t.shift(),
              t.length > 0 &&
                (e < 0 ? (e = 0) : e >= t.length && (e = t.length - 1), (this.focusedChild_ = e), t[e].el_.focus())
          }),
          t
        )
      })(qt)
      qt.registerComponent('Menu', Ln)
      var On = (function (e) {
        function t(t, i) {
          var n
          void 0 === i && (i = {}),
            ((n = e.call(this, t, i) || this).menuButton_ = new $i(t, i)),
            n.menuButton_.controlText(n.controlText_),
            n.menuButton_.el_.setAttribute('aria-haspopup', 'true')
          var r = $i.prototype.buildCSSClass()
          ;(n.menuButton_.el_.className = n.buildCSSClass() + ' ' + r),
            n.menuButton_.removeClass('vjs-control'),
            n.addChild(n.menuButton_),
            n.update(),
            (n.enabled_ = !0)
          var a = function (e) {
            return n.handleClick(e)
          }
          return (
            (n.handleMenuKeyUp_ = function (e) {
              return n.handleMenuKeyUp(e)
            }),
            n.on(n.menuButton_, 'tap', a),
            n.on(n.menuButton_, 'click', a),
            n.on(n.menuButton_, 'keydown', function (e) {
              return n.handleKeyDown(e)
            }),
            n.on(n.menuButton_, 'mouseenter', function () {
              n.addClass('vjs-hover'), n.menu.show(), ht(o(), 'keyup', n.handleMenuKeyUp_)
            }),
            n.on('mouseleave', function (e) {
              return n.handleMouseLeave(e)
            }),
            n.on('keydown', function (e) {
              return n.handleSubmenuKeyDown(e)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.update = function () {
            var e = this.createMenu()
            this.menu && (this.menu.dispose(), this.removeChild(this.menu)),
              (this.menu = e),
              this.addChild(e),
              (this.buttonPressed_ = !1),
              this.menuButton_.el_.setAttribute('aria-expanded', 'false'),
              this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
          }),
          (i.createMenu = function () {
            var e = new Ln(this.player_, { menuButton: this })
            if (((this.hideThreshold_ = 0), this.options_.title)) {
              var t = Ce('li', { className: 'vjs-menu-title', textContent: Ut(this.options_.title), tabIndex: -1 }),
                i = new qt(this.player_, { el: t })
              e.addItem(i)
            }
            if (((this.items = this.createItems()), this.items))
              for (var n = 0; n < this.items.length; n++) e.addItem(this.items[n])
            return e
          }),
          (i.createItems = function () {}),
          (i.createEl = function () {
            return e.prototype.createEl.call(this, 'div', { className: this.buildWrapperCSSClass() }, {})
          }),
          (i.buildWrapperCSSClass = function () {
            var t = 'vjs-menu-button'
            return (
              !0 === this.options_.inline ? (t += '-inline') : (t += '-popup'),
              'vjs-menu-button ' + t + ' ' + $i.prototype.buildCSSClass() + ' ' + e.prototype.buildCSSClass.call(this)
            )
          }),
          (i.buildCSSClass = function () {
            var t = 'vjs-menu-button'
            return (
              !0 === this.options_.inline ? (t += '-inline') : (t += '-popup'),
              'vjs-menu-button ' + t + ' ' + e.prototype.buildCSSClass.call(this)
            )
          }),
          (i.controlText = function (e, t) {
            return void 0 === t && (t = this.menuButton_.el()), this.menuButton_.controlText(e, t)
          }),
          (i.dispose = function () {
            this.handleMouseLeave(), e.prototype.dispose.call(this)
          }),
          (i.handleClick = function (e) {
            this.buttonPressed_ ? this.unpressButton() : this.pressButton()
          }),
          (i.handleMouseLeave = function (e) {
            this.removeClass('vjs-hover'), pt(o(), 'keyup', this.handleMenuKeyUp_)
          }),
          (i.focus = function () {
            this.menuButton_.focus()
          }),
          (i.blur = function () {
            this.menuButton_.blur()
          }),
          (i.handleKeyDown = function (e) {
            f().isEventKey(e, 'Esc') || f().isEventKey(e, 'Tab')
              ? (this.buttonPressed_ && this.unpressButton(),
                f().isEventKey(e, 'Tab') || (e.preventDefault(), this.menuButton_.focus()))
              : (f().isEventKey(e, 'Up') || f().isEventKey(e, 'Down')) &&
                (this.buttonPressed_ || (e.preventDefault(), this.pressButton()))
          }),
          (i.handleMenuKeyUp = function (e) {
            ;(f().isEventKey(e, 'Esc') || f().isEventKey(e, 'Tab')) && this.removeClass('vjs-hover')
          }),
          (i.handleSubmenuKeyPress = function (e) {
            this.handleSubmenuKeyDown(e)
          }),
          (i.handleSubmenuKeyDown = function (e) {
            ;(f().isEventKey(e, 'Esc') || f().isEventKey(e, 'Tab')) &&
              (this.buttonPressed_ && this.unpressButton(),
              f().isEventKey(e, 'Tab') || (e.preventDefault(), this.menuButton_.focus()))
          }),
          (i.pressButton = function () {
            if (this.enabled_) {
              if (
                ((this.buttonPressed_ = !0),
                this.menu.show(),
                this.menu.lockShowing(),
                this.menuButton_.el_.setAttribute('aria-expanded', 'true'),
                me && Se())
              )
                return
              this.menu.focus()
            }
          }),
          (i.unpressButton = function () {
            this.enabled_ &&
              ((this.buttonPressed_ = !1),
              this.menu.unlockShowing(),
              this.menu.hide(),
              this.menuButton_.el_.setAttribute('aria-expanded', 'false'))
          }),
          (i.disable = function () {
            this.unpressButton(), (this.enabled_ = !1), this.addClass('vjs-disabled'), this.menuButton_.disable()
          }),
          (i.enable = function () {
            ;(this.enabled_ = !0), this.removeClass('vjs-disabled'), this.menuButton_.enable()
          }),
          t
        )
      })(qt)
      qt.registerComponent('MenuButton', On)
      var Dn = (function (e) {
        function t(t, i) {
          var n,
            r = i.tracks
          if (((n = e.call(this, t, i) || this).items.length <= 1 && n.hide(), !r)) return (0, u.Z)(n)
          var a = Tt((0, u.Z)(n), n.update)
          return (
            r.addEventListener('removetrack', a),
            r.addEventListener('addtrack', a),
            r.addEventListener('labelchange', a),
            n.player_.on('ready', a),
            n.player_.on('dispose', function () {
              r.removeEventListener('removetrack', a),
                r.removeEventListener('addtrack', a),
                r.removeEventListener('labelchange', a)
            }),
            n
          )
        }
        return (0, d.Z)(t, e), t
      })(On)
      qt.registerComponent('TrackButton', Dn)
      var Mn = ['Tab', 'Esc', 'Up', 'Down', 'Right', 'Left'],
        Rn = (function (e) {
          function t(t, i) {
            var n
            return (
              ((n = e.call(this, t, i) || this).selectable = i.selectable),
              (n.isSelected_ = i.selected || !1),
              (n.multiSelectable = i.multiSelectable),
              n.selected(n.isSelected_),
              n.selectable
                ? n.multiSelectable
                  ? n.el_.setAttribute('role', 'menuitemcheckbox')
                  : n.el_.setAttribute('role', 'menuitemradio')
                : n.el_.setAttribute('role', 'menuitem'),
              n
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.createEl = function (t, i, n) {
              this.nonIconControl = !0
              var r = e.prototype.createEl.call(this, 'li', K({ className: 'vjs-menu-item', tabIndex: -1 }, i), n)
              return (
                r.replaceChild(
                  Ce('span', { className: 'vjs-menu-item-text', textContent: this.localize(this.options_.label) }),
                  r.querySelector('.vjs-icon-placeholder'),
                ),
                r
              )
            }),
            (i.handleKeyDown = function (t) {
              Mn.some(function (e) {
                return f().isEventKey(t, e)
              }) || e.prototype.handleKeyDown.call(this, t)
            }),
            (i.handleClick = function (e) {
              this.selected(!0)
            }),
            (i.selected = function (e) {
              this.selectable &&
                (e
                  ? (this.addClass('vjs-selected'),
                    this.el_.setAttribute('aria-checked', 'true'),
                    this.controlText(', selected'),
                    (this.isSelected_ = !0))
                  : (this.removeClass('vjs-selected'),
                    this.el_.setAttribute('aria-checked', 'false'),
                    this.controlText(''),
                    (this.isSelected_ = !1)))
            }),
            t
          )
        })(zi)
      qt.registerComponent('MenuItem', Rn)
      var Un = (function (e) {
        function t(t, i) {
          var n,
            r = i.track,
            s = t.textTracks()
          ;(i.label = r.label || r.language || 'Unknown'),
            (i.selected = 'showing' === r.mode),
            ((n = e.call(this, t, i) || this).track = r),
            (n.kinds = (i.kinds || [i.kind || n.track.kind]).filter(Boolean))
          var l,
            d = function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]
              n.handleTracksChange.apply((0, u.Z)(n), t)
            },
            c = function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]
              n.handleSelectedLanguageChange.apply((0, u.Z)(n), t)
            }
          ;(t.on(['loadstart', 'texttrackchange'], d),
          s.addEventListener('change', d),
          s.addEventListener('selectedlanguagechange', c),
          n.on('dispose', function () {
            t.off(['loadstart', 'texttrackchange'], d),
              s.removeEventListener('change', d),
              s.removeEventListener('selectedlanguagechange', c)
          }),
          void 0 === s.onchange) &&
            n.on(['tap', 'click'], function () {
              if ('object' !== typeof a().Event)
                try {
                  l = new (a().Event)('change')
                } catch (e) {}
              l || (l = o().createEvent('Event')).initEvent('change', !0, !0), s.dispatchEvent(l)
            })
          return n.handleTracksChange(), n
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.handleClick = function (t) {
            var i = this.track,
              n = this.player_.textTracks()
            if ((e.prototype.handleClick.call(this, t), n))
              for (var r = 0; r < n.length; r++) {
                var a = n[r]
                ;-1 !== this.kinds.indexOf(a.kind) &&
                  (a === i
                    ? 'showing' !== a.mode && (a.mode = 'showing')
                    : 'disabled' !== a.mode && (a.mode = 'disabled'))
              }
          }),
          (i.handleTracksChange = function (e) {
            var t = 'showing' === this.track.mode
            t !== this.isSelected_ && this.selected(t)
          }),
          (i.handleSelectedLanguageChange = function (e) {
            if ('showing' === this.track.mode) {
              var t = this.player_.cache_.selectedLanguage
              if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return
              this.player_.cache_.selectedLanguage = {
                enabled: !0,
                language: this.track.language,
                kind: this.track.kind,
              }
            }
          }),
          (i.dispose = function () {
            ;(this.track = null), e.prototype.dispose.call(this)
          }),
          t
        )
      })(Rn)
      qt.registerComponent('TextTrackMenuItem', Un)
      var Bn = (function (e) {
        function t(t, i) {
          return (
            (i.track = { player: t, kind: i.kind, kinds: i.kinds, default: !1, mode: 'disabled' }),
            i.kinds || (i.kinds = [i.kind]),
            i.label ? (i.track.label = i.label) : (i.track.label = i.kinds.join(' and ') + ' off'),
            (i.selectable = !0),
            (i.multiSelectable = !1),
            e.call(this, t, i) || this
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.handleTracksChange = function (e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
              var a = t[n]
              if (this.options_.kinds.indexOf(a.kind) > -1 && 'showing' === a.mode) {
                i = !1
                break
              }
            }
            i !== this.isSelected_ && this.selected(i)
          }),
          (i.handleSelectedLanguageChange = function (e) {
            for (var t = this.player().textTracks(), i = !0, n = 0, r = t.length; n < r; n++) {
              var a = t[n]
              if (['captions', 'descriptions', 'subtitles'].indexOf(a.kind) > -1 && 'showing' === a.mode) {
                i = !1
                break
              }
            }
            i && (this.player_.cache_.selectedLanguage = { enabled: !1 })
          }),
          t
        )
      })(Un)
      qt.registerComponent('OffTextTrackMenuItem', Bn)
      var Nn = (function (e) {
        function t(t, i) {
          return void 0 === i && (i = {}), (i.tracks = t.textTracks()), e.call(this, t, i) || this
        }
        return (
          (0, d.Z)(t, e),
          (t.prototype.createItems = function (e, t) {
            var i
            void 0 === e && (e = []),
              void 0 === t && (t = Un),
              this.label_ && (i = this.label_ + ' off'),
              e.push(new Bn(this.player_, { kinds: this.kinds_, kind: this.kind_, label: i })),
              (this.hideThreshold_ += 1)
            var n = this.player_.textTracks()
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_])
            for (var r = 0; r < n.length; r++) {
              var a = n[r]
              if (this.kinds_.indexOf(a.kind) > -1) {
                var s = new t(this.player_, {
                  track: a,
                  kinds: this.kinds_,
                  kind: this.kind_,
                  selectable: !0,
                  multiSelectable: !1,
                })
                s.addClass('vjs-' + a.kind + '-menu-item'), e.push(s)
              }
            }
            return e
          }),
          t
        )
      })(Dn)
      qt.registerComponent('TextTrackButton', Nn)
      var Fn = (function (e) {
        function t(t, i) {
          var n,
            r = i.track,
            a = i.cue,
            s = t.currentTime()
          return (
            (i.selectable = !0),
            (i.multiSelectable = !1),
            (i.label = a.text),
            (i.selected = a.startTime <= s && s < a.endTime),
            ((n = e.call(this, t, i) || this).track = r),
            (n.cue = a),
            r.addEventListener('cuechange', Tt((0, u.Z)(n), n.update)),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.handleClick = function (t) {
            e.prototype.handleClick.call(this),
              this.player_.currentTime(this.cue.startTime),
              this.update(this.cue.startTime)
          }),
          (i.update = function (e) {
            var t = this.cue,
              i = this.player_.currentTime()
            this.selected(t.startTime <= i && i < t.endTime)
          }),
          t
        )
      })(Rn)
      qt.registerComponent('ChaptersTrackMenuItem', Fn)
      var jn = (function (e) {
        function t(t, i, n) {
          return e.call(this, t, i, n) || this
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-chapters-button ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.buildWrapperCSSClass = function () {
            return 'vjs-chapters-button ' + e.prototype.buildWrapperCSSClass.call(this)
          }),
          (i.update = function (t) {
            ;(this.track_ && (!t || ('addtrack' !== t.type && 'removetrack' !== t.type))) ||
              this.setTrack(this.findChaptersTrack()),
              e.prototype.update.call(this)
          }),
          (i.setTrack = function (e) {
            if (this.track_ !== e) {
              if ((this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_)) {
                var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)
                t && t.removeEventListener('load', this.updateHandler_), (this.track_ = null)
              }
              if (((this.track_ = e), this.track_)) {
                this.track_.mode = 'hidden'
                var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)
                i && i.addEventListener('load', this.updateHandler_)
              }
            }
          }),
          (i.findChaptersTrack = function () {
            for (var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) {
              var i = e[t]
              if (i.kind === this.kind_) return i
            }
          }),
          (i.getMenuCaption = function () {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(Ut(this.kind_))
          }),
          (i.createMenu = function () {
            return (this.options_.title = this.getMenuCaption()), e.prototype.createMenu.call(this)
          }),
          (i.createItems = function () {
            var e = []
            if (!this.track_) return e
            var t = this.track_.cues
            if (!t) return e
            for (var i = 0, n = t.length; i < n; i++) {
              var r = t[i],
                a = new Fn(this.player_, { track: this.track_, cue: r })
              e.push(a)
            }
            return e
          }),
          t
        )
      })(Nn)
      ;(jn.prototype.kind_ = 'chapters'),
        (jn.prototype.controlText_ = 'Chapters'),
        qt.registerComponent('ChaptersButton', jn)
      var Hn = (function (e) {
        function t(t, i, n) {
          var r
          r = e.call(this, t, i, n) || this
          var a = t.textTracks(),
            s = Tt((0, u.Z)(r), r.handleTracksChange)
          return (
            a.addEventListener('change', s),
            r.on('dispose', function () {
              a.removeEventListener('change', s)
            }),
            r
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.handleTracksChange = function (e) {
            for (var t = this.player().textTracks(), i = !1, n = 0, r = t.length; n < r; n++) {
              var a = t[n]
              if (a.kind !== this.kind_ && 'showing' === a.mode) {
                i = !0
                break
              }
            }
            i ? this.disable() : this.enable()
          }),
          (i.buildCSSClass = function () {
            return 'vjs-descriptions-button ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.buildWrapperCSSClass = function () {
            return 'vjs-descriptions-button ' + e.prototype.buildWrapperCSSClass.call(this)
          }),
          t
        )
      })(Nn)
      ;(Hn.prototype.kind_ = 'descriptions'),
        (Hn.prototype.controlText_ = 'Descriptions'),
        qt.registerComponent('DescriptionsButton', Hn)
      var qn = (function (e) {
        function t(t, i, n) {
          return e.call(this, t, i, n) || this
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-subtitles-button ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.buildWrapperCSSClass = function () {
            return 'vjs-subtitles-button ' + e.prototype.buildWrapperCSSClass.call(this)
          }),
          t
        )
      })(Nn)
      ;(qn.prototype.kind_ = 'subtitles'),
        (qn.prototype.controlText_ = 'Subtitles'),
        qt.registerComponent('SubtitlesButton', qn)
      var Vn = (function (e) {
        function t(t, i) {
          var n
          return (
            (i.track = {
              player: t,
              kind: i.kind,
              label: i.kind + ' settings',
              selectable: !1,
              default: !1,
              mode: 'disabled',
            }),
            (i.selectable = !1),
            (i.name = 'CaptionSettingsMenuItem'),
            (n = e.call(this, t, i) || this).addClass('vjs-texttrack-settings'),
            n.controlText(', opens ' + i.kind + ' settings dialog'),
            n
          )
        }
        return (
          (0, d.Z)(t, e),
          (t.prototype.handleClick = function (e) {
            this.player().getChild('textTrackSettings').open()
          }),
          t
        )
      })(Un)
      qt.registerComponent('CaptionSettingsMenuItem', Vn)
      var Wn = (function (e) {
        function t(t, i, n) {
          return e.call(this, t, i, n) || this
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-captions-button ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.buildWrapperCSSClass = function () {
            return 'vjs-captions-button ' + e.prototype.buildWrapperCSSClass.call(this)
          }),
          (i.createItems = function () {
            var t = []
            return (
              (this.player().tech_ && this.player().tech_.featuresNativeTextTracks) ||
                !this.player().getChild('textTrackSettings') ||
                (t.push(new Vn(this.player_, { kind: this.kind_ })), (this.hideThreshold_ += 1)),
              e.prototype.createItems.call(this, t)
            )
          }),
          t
        )
      })(Nn)
      ;(Wn.prototype.kind_ = 'captions'),
        (Wn.prototype.controlText_ = 'Captions'),
        qt.registerComponent('CaptionsButton', Wn)
      var zn = (function (e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        return (
          (0, d.Z)(t, e),
          (t.prototype.createEl = function (t, i, n) {
            var r = e.prototype.createEl.call(this, t, i, n),
              a = r.querySelector('.vjs-menu-item-text')
            return (
              'captions' === this.options_.track.kind &&
                (a.appendChild(Ce('span', { className: 'vjs-icon-placeholder' }, { 'aria-hidden': !0 })),
                a.appendChild(
                  Ce('span', { className: 'vjs-control-text', textContent: ' ' + this.localize('Captions') }),
                )),
              r
            )
          }),
          t
        )
      })(Un)
      qt.registerComponent('SubsCapsMenuItem', zn)
      var Gn = (function (e) {
        function t(t, i) {
          var n
          return (
            void 0 === i && (i = {}),
            ((n = e.call(this, t, i) || this).label_ = 'subtitles'),
            ['en', 'en-us', 'en-ca', 'fr-ca'].indexOf(n.player_.language_) > -1 && (n.label_ = 'captions'),
            n.menuButton_.controlText(Ut(n.label_)),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-subs-caps-button ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.buildWrapperCSSClass = function () {
            return 'vjs-subs-caps-button ' + e.prototype.buildWrapperCSSClass.call(this)
          }),
          (i.createItems = function () {
            var t = []
            return (
              (this.player().tech_ && this.player().tech_.featuresNativeTextTracks) ||
                !this.player().getChild('textTrackSettings') ||
                (t.push(new Vn(this.player_, { kind: this.label_ })), (this.hideThreshold_ += 1)),
              (t = e.prototype.createItems.call(this, t, zn))
            )
          }),
          t
        )
      })(Nn)
      ;(Gn.prototype.kinds_ = ['captions', 'subtitles']),
        (Gn.prototype.controlText_ = 'Subtitles'),
        qt.registerComponent('SubsCapsButton', Gn)
      var Kn = (function (e) {
        function t(t, i) {
          var n,
            r = i.track,
            a = t.audioTracks()
          ;(i.label = r.label || r.language || 'Unknown'),
            (i.selected = r.enabled),
            ((n = e.call(this, t, i) || this).track = r),
            n.addClass('vjs-' + r.kind + '-menu-item')
          var s = function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]
            n.handleTracksChange.apply((0, u.Z)(n), t)
          }
          return (
            a.addEventListener('change', s),
            n.on('dispose', function () {
              a.removeEventListener('change', s)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function (t, i, n) {
            var r = e.prototype.createEl.call(this, t, i, n),
              a = r.querySelector('.vjs-menu-item-text')
            return (
              'main-desc' === this.options_.track.kind &&
                (a.appendChild(
                  e.prototype.createEl.call(this, 'span', { className: 'vjs-icon-placeholder' }, { 'aria-hidden': !0 }),
                ),
                a.appendChild(
                  e.prototype.createEl.call(this, 'span', {
                    className: 'vjs-control-text',
                    textContent: this.localize('Descriptions'),
                  }),
                )),
              r
            )
          }),
          (i.handleClick = function (t) {
            e.prototype.handleClick.call(this, t), (this.track.enabled = !0)
          }),
          (i.handleTracksChange = function (e) {
            this.selected(this.track.enabled)
          }),
          t
        )
      })(Rn)
      qt.registerComponent('AudioTrackMenuItem', Kn)
      var Zn = (function (e) {
        function t(t, i) {
          return void 0 === i && (i = {}), (i.tracks = t.audioTracks()), e.call(this, t, i) || this
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-audio-button ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.buildWrapperCSSClass = function () {
            return 'vjs-audio-button ' + e.prototype.buildWrapperCSSClass.call(this)
          }),
          (i.createItems = function (e) {
            void 0 === e && (e = []), (this.hideThreshold_ = 1)
            for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
              var n = t[i]
              e.push(new Kn(this.player_, { track: n, selectable: !0, multiSelectable: !1 }))
            }
            return e
          }),
          t
        )
      })(Dn)
      ;(Zn.prototype.controlText_ = 'Audio Track'), qt.registerComponent('AudioTrackButton', Zn)
      var Qn = (function (e) {
        function t(t, i) {
          var n,
            r = i.rate,
            a = parseFloat(r, 10)
          return (
            (i.label = r),
            (i.selected = a === t.playbackRate()),
            (i.selectable = !0),
            (i.multiSelectable = !1),
            ((n = e.call(this, t, i) || this).label = r),
            (n.rate = a),
            n.on(t, 'ratechange', function (e) {
              return n.update(e)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.handleClick = function (t) {
            e.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
          }),
          (i.update = function (e) {
            this.selected(this.player().playbackRate() === this.rate)
          }),
          t
        )
      })(Rn)
      ;(Qn.prototype.contentElType = 'button'), qt.registerComponent('PlaybackRateMenuItem', Qn)
      var Xn = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).menuButton_.el_.setAttribute('aria-describedby', n.labelElId_),
            n.updateVisibility(),
            n.updateLabel(),
            n.on(t, 'loadstart', function (e) {
              return n.updateVisibility(e)
            }),
            n.on(t, 'ratechange', function (e) {
              return n.updateLabel(e)
            }),
            n.on(t, 'playbackrateschange', function (e) {
              return n.handlePlaybackRateschange(e)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            var t = e.prototype.createEl.call(this)
            return (
              (this.labelElId_ = 'vjs-playback-rate-value-label-' + this.id_),
              (this.labelEl_ = Ce('div', {
                className: 'vjs-playback-rate-value',
                id: this.labelElId_,
                textContent: '1x',
              })),
              t.appendChild(this.labelEl_),
              t
            )
          }),
          (i.dispose = function () {
            ;(this.labelEl_ = null), e.prototype.dispose.call(this)
          }),
          (i.buildCSSClass = function () {
            return 'vjs-playback-rate ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.buildWrapperCSSClass = function () {
            return 'vjs-playback-rate ' + e.prototype.buildWrapperCSSClass.call(this)
          }),
          (i.createItems = function () {
            for (var e = this.playbackRates(), t = [], i = e.length - 1; i >= 0; i--)
              t.push(new Qn(this.player(), { rate: e[i] + 'x' }))
            return t
          }),
          (i.updateARIAAttributes = function () {
            this.el().setAttribute('aria-valuenow', this.player().playbackRate())
          }),
          (i.handleClick = function (e) {
            for (var t = this.player().playbackRate(), i = this.playbackRates(), n = i[0], r = 0; r < i.length; r++)
              if (i[r] > t) {
                n = i[r]
                break
              }
            this.player().playbackRate(n)
          }),
          (i.handlePlaybackRateschange = function (e) {
            this.update()
          }),
          (i.playbackRates = function () {
            var e = this.player()
            return (e.playbackRates && e.playbackRates()) || []
          }),
          (i.playbackRateSupported = function () {
            return (
              this.player().tech_ &&
              this.player().tech_.featuresPlaybackRate &&
              this.playbackRates() &&
              this.playbackRates().length > 0
            )
          }),
          (i.updateVisibility = function (e) {
            this.playbackRateSupported() ? this.removeClass('vjs-hidden') : this.addClass('vjs-hidden')
          }),
          (i.updateLabel = function (e) {
            this.playbackRateSupported() && (this.labelEl_.textContent = this.player().playbackRate() + 'x')
          }),
          t
        )
      })(On)
      ;(Xn.prototype.controlText_ = 'Playback Rate'), qt.registerComponent('PlaybackRateMenuButton', Xn)
      var Yn = (function (e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-spacer ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.createEl = function (t, i, n) {
            return (
              void 0 === t && (t = 'div'),
              void 0 === i && (i = {}),
              void 0 === n && (n = {}),
              i.className || (i.className = this.buildCSSClass()),
              e.prototype.createEl.call(this, t, i, n)
            )
          }),
          t
        )
      })(qt)
      qt.registerComponent('Spacer', Yn)
      var $n = (function (e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-custom-control-spacer ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.createEl = function () {
            return e.prototype.createEl.call(this, 'div', { className: this.buildCSSClass(), textContent: '\xa0' })
          }),
          t
        )
      })(Yn)
      qt.registerComponent('CustomControlSpacer', $n)
      var Jn = (function (e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        return (
          (0, d.Z)(t, e),
          (t.prototype.createEl = function () {
            return e.prototype.createEl.call(this, 'div', { className: 'vjs-control-bar', dir: 'ltr' })
          }),
          t
        )
      })(qt)
      ;(Jn.prototype.options_ = {
        children: [
          'playToggle',
          'volumePanel',
          'currentTimeDisplay',
          'timeDivider',
          'durationDisplay',
          'progressControl',
          'liveDisplay',
          'seekToLive',
          'remainingTimeDisplay',
          'customControlSpacer',
          'playbackRateMenuButton',
          'chaptersButton',
          'descriptionsButton',
          'subsCapsButton',
          'audioTrackButton',
          'fullscreenToggle',
        ],
      }),
        'exitPictureInPicture' in o() &&
          Jn.prototype.options_.children.splice(Jn.prototype.options_.children.length - 1, 0, 'pictureInPictureToggle'),
        qt.registerComponent('ControlBar', Jn)
      var er = (function (e) {
        function t(t, i) {
          var n
          return (
            (n = e.call(this, t, i) || this).on(t, 'error', function (e) {
              return n.open(e)
            }),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.buildCSSClass = function () {
            return 'vjs-error-display ' + e.prototype.buildCSSClass.call(this)
          }),
          (i.content = function () {
            var e = this.player().error()
            return e ? this.localize(e.message) : ''
          }),
          t
        )
      })(ei)
      ;(er.prototype.options_ = (0, l.Z)({}, ei.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0,
      })),
        qt.registerComponent('ErrorDisplay', er)
      var tr = 'vjs-text-track-settings',
        ir = ['#000', 'Black'],
        nr = ['#00F', 'Blue'],
        rr = ['#0FF', 'Cyan'],
        ar = ['#0F0', 'Green'],
        sr = ['#F0F', 'Magenta'],
        or = ['#F00', 'Red'],
        lr = ['#FFF', 'White'],
        ur = ['#FF0', 'Yellow'],
        dr = ['1', 'Opaque'],
        cr = ['0.5', 'Semi-Transparent'],
        hr = ['0', 'Transparent'],
        pr = {
          backgroundColor: {
            selector: '.vjs-bg-color > select',
            id: 'captions-background-color-%s',
            label: 'Color',
            options: [ir, lr, or, ar, nr, ur, sr, rr],
          },
          backgroundOpacity: {
            selector: '.vjs-bg-opacity > select',
            id: 'captions-background-opacity-%s',
            label: 'Transparency',
            options: [dr, cr, hr],
          },
          color: {
            selector: '.vjs-fg-color > select',
            id: 'captions-foreground-color-%s',
            label: 'Color',
            options: [lr, ir, or, ar, nr, ur, sr, rr],
          },
          edgeStyle: {
            selector: '.vjs-edge-style > select',
            id: '%s',
            label: 'Text Edge Style',
            options: [
              ['none', 'None'],
              ['raised', 'Raised'],
              ['depressed', 'Depressed'],
              ['uniform', 'Uniform'],
              ['dropshadow', 'Dropshadow'],
            ],
          },
          fontFamily: {
            selector: '.vjs-font-family > select',
            id: 'captions-font-family-%s',
            label: 'Font Family',
            options: [
              ['proportionalSansSerif', 'Proportional Sans-Serif'],
              ['monospaceSansSerif', 'Monospace Sans-Serif'],
              ['proportionalSerif', 'Proportional Serif'],
              ['monospaceSerif', 'Monospace Serif'],
              ['casual', 'Casual'],
              ['script', 'Script'],
              ['small-caps', 'Small Caps'],
            ],
          },
          fontPercent: {
            selector: '.vjs-font-percent > select',
            id: 'captions-font-size-%s',
            label: 'Font Size',
            options: [
              ['0.50', '50%'],
              ['0.75', '75%'],
              ['1.00', '100%'],
              ['1.25', '125%'],
              ['1.50', '150%'],
              ['1.75', '175%'],
              ['2.00', '200%'],
              ['3.00', '300%'],
              ['4.00', '400%'],
            ],
            default: 2,
            parser: function (e) {
              return '1.00' === e ? null : Number(e)
            },
          },
          textOpacity: {
            selector: '.vjs-text-opacity > select',
            id: 'captions-foreground-opacity-%s',
            label: 'Transparency',
            options: [dr, cr],
          },
          windowColor: { selector: '.vjs-window-color > select', id: 'captions-window-color-%s', label: 'Color' },
          windowOpacity: {
            selector: '.vjs-window-opacity > select',
            id: 'captions-window-opacity-%s',
            label: 'Transparency',
            options: [hr, cr, dr],
          },
        }
      function fr(e, t) {
        if ((t && (e = t(e)), e && 'none' !== e)) return e
      }
      pr.windowColor.options = pr.backgroundColor.options
      var mr = (function (e) {
        function t(t, i) {
          var n
          return (
            (i.temporary = !1),
            ((n = e.call(this, t, i) || this).updateDisplay = n.updateDisplay.bind((0, u.Z)(n))),
            n.fill(),
            (n.hasBeenOpened_ = n.hasBeenFilled_ = !0),
            (n.endDialog = Ce('p', {
              className: 'vjs-control-text',
              textContent: n.localize('End of dialog window.'),
            })),
            n.el().appendChild(n.endDialog),
            n.setDefaults(),
            void 0 === i.persistTextTrackSettings &&
              (n.options_.persistTextTrackSettings = n.options_.playerOptions.persistTextTrackSettings),
            n.on(n.$('.vjs-done-button'), 'click', function () {
              n.saveSettings(), n.close()
            }),
            n.on(n.$('.vjs-default-button'), 'click', function () {
              n.setDefaults(), n.updateDisplay()
            }),
            G(pr, function (e) {
              n.on(n.$(e.selector), 'change', n.updateDisplay)
            }),
            n.options_.persistTextTrackSettings && n.restoreSettings(),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.dispose = function () {
            ;(this.endDialog = null), e.prototype.dispose.call(this)
          }),
          (i.createElSelect_ = function (e, t, i) {
            var n = this
            void 0 === t && (t = ''), void 0 === i && (i = 'label')
            var r = pr[e],
              a = r.id.replace('%s', this.id_),
              s = [t, a].join(' ').trim()
            return [
              '<' + i + ' id="' + a + '" class="' + ('label' === i ? 'vjs-label' : '') + '">',
              this.localize(r.label),
              '</' + i + '>',
              '<select aria-labelledby="' + s + '">',
            ]
              .concat(
                r.options.map(function (e) {
                  var t = a + '-' + e[1].replace(/\W+/g, '')
                  return [
                    '<option id="' + t + '" value="' + e[0] + '" ',
                    'aria-labelledby="' + s + ' ' + t + '">',
                    n.localize(e[1]),
                    '</option>',
                  ].join('')
                }),
              )
              .concat('</select>')
              .join('')
          }),
          (i.createElFgColor_ = function () {
            var e = 'captions-text-legend-' + this.id_
            return [
              '<fieldset class="vjs-fg-color vjs-track-setting">',
              '<legend id="' + e + '">',
              this.localize('Text'),
              '</legend>',
              this.createElSelect_('color', e),
              '<span class="vjs-text-opacity vjs-opacity">',
              this.createElSelect_('textOpacity', e),
              '</span>',
              '</fieldset>',
            ].join('')
          }),
          (i.createElBgColor_ = function () {
            var e = 'captions-background-' + this.id_
            return [
              '<fieldset class="vjs-bg-color vjs-track-setting">',
              '<legend id="' + e + '">',
              this.localize('Background'),
              '</legend>',
              this.createElSelect_('backgroundColor', e),
              '<span class="vjs-bg-opacity vjs-opacity">',
              this.createElSelect_('backgroundOpacity', e),
              '</span>',
              '</fieldset>',
            ].join('')
          }),
          (i.createElWinColor_ = function () {
            var e = 'captions-window-' + this.id_
            return [
              '<fieldset class="vjs-window-color vjs-track-setting">',
              '<legend id="' + e + '">',
              this.localize('Window'),
              '</legend>',
              this.createElSelect_('windowColor', e),
              '<span class="vjs-window-opacity vjs-opacity">',
              this.createElSelect_('windowOpacity', e),
              '</span>',
              '</fieldset>',
            ].join('')
          }),
          (i.createElColors_ = function () {
            return Ce('div', {
              className: 'vjs-track-settings-colors',
              innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join(''),
            })
          }),
          (i.createElFont_ = function () {
            return Ce('div', {
              className: 'vjs-track-settings-font',
              innerHTML: [
                '<fieldset class="vjs-font-percent vjs-track-setting">',
                this.createElSelect_('fontPercent', '', 'legend'),
                '</fieldset>',
                '<fieldset class="vjs-edge-style vjs-track-setting">',
                this.createElSelect_('edgeStyle', '', 'legend'),
                '</fieldset>',
                '<fieldset class="vjs-font-family vjs-track-setting">',
                this.createElSelect_('fontFamily', '', 'legend'),
                '</fieldset>',
              ].join(''),
            })
          }),
          (i.createElControls_ = function () {
            var e = this.localize('restore all settings to the default values')
            return Ce('div', {
              className: 'vjs-track-settings-controls',
              innerHTML: [
                '<button type="button" class="vjs-default-button" title="' + e + '">',
                this.localize('Reset'),
                '<span class="vjs-control-text"> ' + e + '</span>',
                '</button>',
                '<button type="button" class="vjs-done-button">' + this.localize('Done') + '</button>',
              ].join(''),
            })
          }),
          (i.content = function () {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
          }),
          (i.label = function () {
            return this.localize('Caption Settings Dialog')
          }),
          (i.description = function () {
            return this.localize('Beginning of dialog window. Escape will cancel and close the window.')
          }),
          (i.buildCSSClass = function () {
            return e.prototype.buildCSSClass.call(this) + ' vjs-text-track-settings'
          }),
          (i.getValues = function () {
            var e,
              t,
              i,
              n = this
            return (
              (t = function (e, t, i) {
                var r,
                  a,
                  s = ((r = n.$(t.selector)), (a = t.parser), fr(r.options[r.options.selectedIndex].value, a))
                return void 0 !== s && (e[i] = s), e
              }),
              void 0 === (i = {}) && (i = 0),
              z((e = pr)).reduce(function (i, n) {
                return t(i, e[n], n)
              }, i)
            )
          }),
          (i.setValues = function (e) {
            var t = this
            G(pr, function (i, n) {
              !(function (e, t, i) {
                if (t)
                  for (var n = 0; n < e.options.length; n++)
                    if (fr(e.options[n].value, i) === t) {
                      e.selectedIndex = n
                      break
                    }
              })(t.$(i.selector), e[n], i.parser)
            })
          }),
          (i.setDefaults = function () {
            var e = this
            G(pr, function (t) {
              var i = t.hasOwnProperty('default') ? t.default : 0
              e.$(t.selector).selectedIndex = i
            })
          }),
          (i.restoreSettings = function () {
            var e
            try {
              e = JSON.parse(a().localStorage.getItem(tr))
            } catch (t) {
              q.warn(t)
            }
            e && this.setValues(e)
          }),
          (i.saveSettings = function () {
            if (this.options_.persistTextTrackSettings) {
              var e = this.getValues()
              try {
                Object.keys(e).length
                  ? a().localStorage.setItem(tr, JSON.stringify(e))
                  : a().localStorage.removeItem(tr)
              } catch (t) {
                q.warn(t)
              }
            }
          }),
          (i.updateDisplay = function () {
            var e = this.player_.getChild('textTrackDisplay')
            e && e.updateDisplay()
          }),
          (i.conditionalBlur_ = function () {
            this.previouslyActiveEl_ = null
            var e = this.player_.controlBar,
              t = e && e.subsCapsButton,
              i = e && e.captionsButton
            t ? t.focus() : i && i.focus()
          }),
          t
        )
      })(ei)
      qt.registerComponent('TextTrackSettings', mr)
      var gr = (function (e) {
        function t(t, i) {
          var n,
            r = i.ResizeObserver || a().ResizeObserver
          null === i.ResizeObserver && (r = !1)
          var s = Bt({ createEl: !r, reportTouchActivity: !1 }, i)
          return (
            ((n = e.call(this, t, s) || this).ResizeObserver = i.ResizeObserver || a().ResizeObserver),
            (n.loadListener_ = null),
            (n.resizeObserver_ = null),
            (n.debouncedHandler_ = (function (e, t, i, n) {
              var r
              void 0 === n && (n = a())
              var s = function () {
                var a = this,
                  s = arguments,
                  o = function () {
                    ;(r = null), (o = null), i || e.apply(a, s)
                  }
                !r && i && e.apply(a, s), n.clearTimeout(r), (r = n.setTimeout(o, t))
              }
              return (
                (s.cancel = function () {
                  n.clearTimeout(r), (r = null)
                }),
                s
              )
            })(
              function () {
                n.resizeHandler()
              },
              100,
              !1,
              (0, u.Z)(n),
            )),
            r
              ? ((n.resizeObserver_ = new n.ResizeObserver(n.debouncedHandler_)), n.resizeObserver_.observe(t.el()))
              : ((n.loadListener_ = function () {
                  if (n.el_ && n.el_.contentWindow) {
                    var e = n.debouncedHandler_,
                      t = (n.unloadListener_ = function () {
                        pt(this, 'resize', e), pt(this, 'unload', t), (t = null)
                      })
                    ht(n.el_.contentWindow, 'unload', t), ht(n.el_.contentWindow, 'resize', e)
                  }
                }),
                n.one('load', n.loadListener_)),
            n
          )
        }
        ;(0, d.Z)(t, e)
        var i = t.prototype
        return (
          (i.createEl = function () {
            return e.prototype.createEl.call(
              this,
              'iframe',
              { className: 'vjs-resize-manager', tabIndex: -1 },
              { 'aria-hidden': 'true' },
            )
          }),
          (i.resizeHandler = function () {
            this.player_ && this.player_.trigger && this.player_.trigger('playerresize')
          }),
          (i.dispose = function () {
            this.debouncedHandler_ && this.debouncedHandler_.cancel(),
              this.resizeObserver_ &&
                (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()),
                this.resizeObserver_.disconnect()),
              this.loadListener_ && this.off('load', this.loadListener_),
              this.el_ &&
                this.el_.contentWindow &&
                this.unloadListener_ &&
                this.unloadListener_.call(this.el_.contentWindow),
              (this.ResizeObserver = null),
              (this.resizeObserver = null),
              (this.debouncedHandler_ = null),
              (this.loadListener_ = null),
              e.prototype.dispose.call(this)
          }),
          t
        )
      })(qt)
      qt.registerComponent('ResizeManager', gr)
      var _r = { trackingThreshold: 30, liveTolerance: 15 },
        vr = (function (e) {
          function t(t, i) {
            var n,
              r = Bt(_r, i, { createEl: !1 })
            return (
              ((n = e.call(this, t, r) || this).handleVisibilityChange_ = function (e) {
                return n.handleVisibilityChange(e)
              }),
              (n.trackLiveHandler_ = function () {
                return n.trackLive_()
              }),
              (n.handlePlay_ = function (e) {
                return n.handlePlay(e)
              }),
              (n.handleFirstTimeupdate_ = function (e) {
                return n.handleFirstTimeupdate(e)
              }),
              (n.handleSeeked_ = function (e) {
                return n.handleSeeked(e)
              }),
              (n.seekToLiveEdge_ = function (e) {
                return n.seekToLiveEdge(e)
              }),
              n.reset_(),
              n.on(n.player_, 'durationchange', function (e) {
                return n.handleDurationchange(e)
              }),
              n.one(n.player_, 'canplay', function () {
                return n.toggleTracking()
              }),
              ue &&
                'hidden' in o() &&
                'visibilityState' in o() &&
                n.on(o(), 'visibilitychange', n.handleVisibilityChange_),
              n
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.handleVisibilityChange = function () {
              this.player_.duration() === 1 / 0 && (o().hidden ? this.stopTracking() : this.startTracking())
            }),
            (i.trackLive_ = function () {
              var e = this.player_.seekable()
              if (e && e.length) {
                var t = Number(a().performance.now().toFixed(4)),
                  i = -1 === this.lastTime_ ? 0 : (t - this.lastTime_) / 1e3
                ;(this.lastTime_ = t), (this.pastSeekEnd_ = this.pastSeekEnd() + i)
                var n = this.liveCurrentTime(),
                  r = this.player_.currentTime(),
                  s = this.player_.paused() || this.seekedBehindLive_ || Math.abs(n - r) > this.options_.liveTolerance
                ;(this.timeupdateSeen_ && n !== 1 / 0) || (s = !1),
                  s !== this.behindLiveEdge_ && ((this.behindLiveEdge_ = s), this.trigger('liveedgechange'))
              }
            }),
            (i.handleDurationchange = function () {
              this.toggleTracking()
            }),
            (i.toggleTracking = function () {
              this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold
                ? (this.player_.options_.liveui && this.player_.addClass('vjs-liveui'), this.startTracking())
                : (this.player_.removeClass('vjs-liveui'), this.stopTracking())
            }),
            (i.startTracking = function () {
              this.isTracking() ||
                (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()),
                (this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, yt)),
                this.trackLive_(),
                this.on(this.player_, ['play', 'pause'], this.trackLiveHandler_),
                this.timeupdateSeen_
                  ? this.on(this.player_, 'seeked', this.handleSeeked_)
                  : (this.one(this.player_, 'play', this.handlePlay_),
                    this.one(this.player_, 'timeupdate', this.handleFirstTimeupdate_)))
            }),
            (i.handleFirstTimeupdate = function () {
              ;(this.timeupdateSeen_ = !0), this.on(this.player_, 'seeked', this.handleSeeked_)
            }),
            (i.handleSeeked = function () {
              var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime())
              ;(this.seekedBehindLive_ = this.nextSeekedFromUser_ && e > 2),
                (this.nextSeekedFromUser_ = !1),
                this.trackLive_()
            }),
            (i.handlePlay = function () {
              this.one(this.player_, 'timeupdate', this.seekToLiveEdge_)
            }),
            (i.reset_ = function () {
              ;(this.lastTime_ = -1),
                (this.pastSeekEnd_ = 0),
                (this.lastSeekEnd_ = -1),
                (this.behindLiveEdge_ = !0),
                (this.timeupdateSeen_ = !1),
                (this.seekedBehindLive_ = !1),
                (this.nextSeekedFromUser_ = !1),
                this.clearInterval(this.trackingInterval_),
                (this.trackingInterval_ = null),
                this.off(this.player_, ['play', 'pause'], this.trackLiveHandler_),
                this.off(this.player_, 'seeked', this.handleSeeked_),
                this.off(this.player_, 'play', this.handlePlay_),
                this.off(this.player_, 'timeupdate', this.handleFirstTimeupdate_),
                this.off(this.player_, 'timeupdate', this.seekToLiveEdge_)
            }),
            (i.nextSeekedFromUser = function () {
              this.nextSeekedFromUser_ = !0
            }),
            (i.stopTracking = function () {
              this.isTracking() && (this.reset_(), this.trigger('liveedgechange'))
            }),
            (i.seekableEnd = function () {
              for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--; ) t.push(e.end(i))
              return t.length ? t.sort()[t.length - 1] : 1 / 0
            }),
            (i.seekableStart = function () {
              for (var e = this.player_.seekable(), t = [], i = e ? e.length : 0; i--; ) t.push(e.start(i))
              return t.length ? t.sort()[0] : 0
            }),
            (i.liveWindow = function () {
              var e = this.liveCurrentTime()
              return e === 1 / 0 ? 0 : e - this.seekableStart()
            }),
            (i.isLive = function () {
              return this.isTracking()
            }),
            (i.atLiveEdge = function () {
              return !this.behindLiveEdge()
            }),
            (i.liveCurrentTime = function () {
              return this.pastSeekEnd() + this.seekableEnd()
            }),
            (i.pastSeekEnd = function () {
              var e = this.seekableEnd()
              return (
                -1 !== this.lastSeekEnd_ && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0),
                (this.lastSeekEnd_ = e),
                this.pastSeekEnd_
              )
            }),
            (i.behindLiveEdge = function () {
              return this.behindLiveEdge_
            }),
            (i.isTracking = function () {
              return 'number' === typeof this.trackingInterval_
            }),
            (i.seekToLiveEdge = function () {
              ;(this.seekedBehindLive_ = !1),
                this.atLiveEdge() || ((this.nextSeekedFromUser_ = !1), this.player_.currentTime(this.liveCurrentTime()))
            }),
            (i.dispose = function () {
              this.off(o(), 'visibilitychange', this.handleVisibilityChange_),
                this.stopTracking(),
                e.prototype.dispose.call(this)
            }),
            t
          )
        })(qt)
      qt.registerComponent('LiveTracker', vr)
      var yr,
        Tr = function (e) {
          var t = e.el()
          if (t.hasAttribute('src')) return e.triggerSourceset(t.src), !0
          var i = e.$$('source'),
            n = [],
            r = ''
          if (!i.length) return !1
          for (var a = 0; a < i.length; a++) {
            var s = i[a].src
            s && -1 === n.indexOf(s) && n.push(s)
          }
          return !!n.length && (1 === n.length && (r = n[0]), e.triggerSourceset(r), !0)
        },
        br = Object.defineProperty({}, 'innerHTML', {
          get: function () {
            return this.cloneNode(!0).innerHTML
          },
          set: function (e) {
            var t = o().createElement(this.nodeName.toLowerCase())
            t.innerHTML = e
            for (var i = o().createDocumentFragment(); t.childNodes.length; ) i.appendChild(t.childNodes[0])
            return (this.innerText = ''), a().Element.prototype.appendChild.call(this, i), this.innerHTML
          },
        }),
        Sr = function (e, t) {
          for (
            var i = {}, n = 0;
            n < e.length && !((i = Object.getOwnPropertyDescriptor(e[n], t)) && i.set && i.get);
            n++
          );
          return (i.enumerable = !0), (i.configurable = !0), i
        },
        kr = function (e) {
          var t = e.el()
          if (!t.resetSourceWatch_) {
            var i = {},
              n = (function (e) {
                return Sr([e.el(), a().HTMLMediaElement.prototype, a().Element.prototype, br], 'innerHTML')
              })(e),
              r = function (i) {
                return function () {
                  for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a]
                  var s = i.apply(t, r)
                  return Tr(e), s
                }
              }
            ;['append', 'appendChild', 'insertAdjacentHTML'].forEach(function (e) {
              t[e] && ((i[e] = t[e]), (t[e] = r(i[e])))
            }),
              Object.defineProperty(t, 'innerHTML', Bt(n, { set: r(n.set) })),
              (t.resetSourceWatch_ = function () {
                ;(t.resetSourceWatch_ = null),
                  Object.keys(i).forEach(function (e) {
                    t[e] = i[e]
                  }),
                  Object.defineProperty(t, 'innerHTML', n)
              }),
              e.one('sourceset', t.resetSourceWatch_)
          }
        },
        Cr = Object.defineProperty({}, 'src', {
          get: function () {
            return this.hasAttribute('src') ? gi(a().Element.prototype.getAttribute.call(this, 'src')) : ''
          },
          set: function (e) {
            return a().Element.prototype.setAttribute.call(this, 'src', e), e
          },
        }),
        Er = function (e) {
          if (e.featuresSourceset) {
            var t = e.el()
            if (!t.resetSourceset_) {
              var i = (function (e) {
                  return Sr([e.el(), a().HTMLMediaElement.prototype, Cr], 'src')
                })(e),
                n = t.setAttribute,
                r = t.load
              Object.defineProperty(
                t,
                'src',
                Bt(i, {
                  set: function (n) {
                    var r = i.set.call(t, n)
                    return e.triggerSourceset(t.src), r
                  },
                }),
              ),
                (t.setAttribute = function (i, r) {
                  var a = n.call(t, i, r)
                  return /src/i.test(i) && e.triggerSourceset(t.src), a
                }),
                (t.load = function () {
                  var i = r.call(t)
                  return Tr(e) || (e.triggerSourceset(''), kr(e)), i
                }),
                t.currentSrc ? e.triggerSourceset(t.currentSrc) : Tr(e) || kr(e),
                (t.resetSourceset_ = function () {
                  ;(t.resetSourceset_ = null),
                    (t.load = r),
                    (t.setAttribute = n),
                    Object.defineProperty(t, 'src', i),
                    t.resetSourceWatch_ && t.resetSourceWatch_()
                })
            }
          }
        },
        wr = function (e, t, i, n) {
          void 0 === n && (n = !0)
          var r = function (i) {
              return Object.defineProperty(e, t, { value: i, enumerable: !0, writable: !0 })
            },
            a = {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var e = i()
                return r(e), e
              },
            }
          return n && (a.set = r), Object.defineProperty(e, t, a)
        },
        xr = (function (e) {
          function t(t, i) {
            var n
            n = e.call(this, t, i) || this
            var r = t.source,
              a = !1
            if (
              (r && (n.el_.currentSrc !== r.src || (t.tag && 3 === t.tag.initNetworkState_))
                ? n.setSource(r)
                : n.handleLateInit_(n.el_),
              t.enableSourceset && n.setupSourcesetHandling_(),
              (n.isScrubbing_ = !1),
              n.el_.hasChildNodes())
            ) {
              for (var s = n.el_.childNodes, o = s.length, l = []; o--; ) {
                var u = s[o]
                'track' === u.nodeName.toLowerCase() &&
                  (n.featuresNativeTextTracks
                    ? (n.remoteTextTrackEls().addTrackElement_(u),
                      n.remoteTextTracks().addTrack(u.track),
                      n.textTracks().addTrack(u.track),
                      a || n.el_.hasAttribute('crossorigin') || !vi(u.src) || (a = !0))
                    : l.push(u))
              }
              for (var d = 0; d < l.length; d++) n.el_.removeChild(l[d])
            }
            return (
              n.proxyNativeTracks_(),
              n.featuresNativeTextTracks &&
                a &&
                q.warn(
                  "Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading.",
                ),
              n.restoreMetadataTracksInIOSNativePlayer_(),
              (he || fe || re) && !0 === t.nativeControlsForTouch && n.setControls(!0),
              n.proxyWebkitFullscreen_(),
              n.triggerReady(),
              n
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.dispose = function () {
              this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(),
                t.disposeMediaElement(this.el_),
                (this.options_ = null),
                e.prototype.dispose.call(this)
            }),
            (i.setupSourcesetHandling_ = function () {
              Er(this)
            }),
            (i.restoreMetadataTracksInIOSNativePlayer_ = function () {
              var e,
                t = this.textTracks(),
                i = function () {
                  e = []
                  for (var i = 0; i < t.length; i++) {
                    var n = t[i]
                    'metadata' === n.kind && e.push({ track: n, storedMode: n.mode })
                  }
                }
              i(),
                t.addEventListener('change', i),
                this.on('dispose', function () {
                  return t.removeEventListener('change', i)
                })
              var n = function i() {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n]
                  'disabled' === r.track.mode && r.track.mode !== r.storedMode && (r.track.mode = r.storedMode)
                }
                t.removeEventListener('change', i)
              }
              this.on('webkitbeginfullscreen', function () {
                t.removeEventListener('change', i), t.removeEventListener('change', n), t.addEventListener('change', n)
              }),
                this.on('webkitendfullscreen', function () {
                  t.removeEventListener('change', i),
                    t.addEventListener('change', i),
                    t.removeEventListener('change', n)
                })
            }),
            (i.overrideNative_ = function (e, t) {
              var i = this
              if (t === this['featuresNative' + e + 'Tracks']) {
                var n = e.toLowerCase()
                this[n + 'TracksListeners_'] &&
                  Object.keys(this[n + 'TracksListeners_']).forEach(function (e) {
                    i.el()[n + 'Tracks'].removeEventListener(e, i[n + 'TracksListeners_'][e])
                  }),
                  (this['featuresNative' + e + 'Tracks'] = !t),
                  (this[n + 'TracksListeners_'] = null),
                  this.proxyNativeTracksForType_(n)
              }
            }),
            (i.overrideNativeAudioTracks = function (e) {
              this.overrideNative_('Audio', e)
            }),
            (i.overrideNativeVideoTracks = function (e) {
              this.overrideNative_('Video', e)
            }),
            (i.proxyNativeTracksForType_ = function (e) {
              var t = this,
                i = wi[e],
                n = this.el()[i.getterName],
                r = this[i.getterName]()
              if (this['featuresNative' + i.capitalName + 'Tracks'] && n && n.addEventListener) {
                var a = {
                    change: function (i) {
                      var n = { type: 'change', target: r, currentTarget: r, srcElement: r }
                      r.trigger(n), 'text' === e && t[xi.remoteText.getterName]().trigger(n)
                    },
                    addtrack: function (e) {
                      r.addTrack(e.track)
                    },
                    removetrack: function (e) {
                      r.removeTrack(e.track)
                    },
                  },
                  s = function () {
                    for (var e = [], t = 0; t < r.length; t++) {
                      for (var i = !1, a = 0; a < n.length; a++)
                        if (n[a] === r[t]) {
                          i = !0
                          break
                        }
                      i || e.push(r[t])
                    }
                    for (; e.length; ) r.removeTrack(e.shift())
                  }
                ;(this[i.getterName + 'Listeners_'] = a),
                  Object.keys(a).forEach(function (e) {
                    var i = a[e]
                    n.addEventListener(e, i),
                      t.on('dispose', function (t) {
                        return n.removeEventListener(e, i)
                      })
                  }),
                  this.on('loadstart', s),
                  this.on('dispose', function (e) {
                    return t.off('loadstart', s)
                  })
              }
            }),
            (i.proxyNativeTracks_ = function () {
              var e = this
              wi.names.forEach(function (t) {
                e.proxyNativeTracksForType_(t)
              })
            }),
            (i.createEl = function () {
              var e = this.options_.tag
              if (!e || (!this.options_.playerElIngest && !this.movingMediaElementInDOM)) {
                if (e) {
                  var i = e.cloneNode(!0)
                  e.parentNode && e.parentNode.insertBefore(i, e), t.disposeMediaElement(e), (e = i)
                } else {
                  e = o().createElement('video')
                  var n = Bt({}, this.options_.tag && Oe(this.options_.tag))
                  ;(he && !0 === this.options_.nativeControlsForTouch) || delete n.controls,
                    Le(e, K(n, { id: this.options_.techId, class: 'vjs-tech' }))
                }
                e.playerId = this.options_.playerId
              }
              'undefined' !== typeof this.options_.preload && Me(e, 'preload', this.options_.preload),
                void 0 !== this.options_.disablePictureInPicture &&
                  (e.disablePictureInPicture = this.options_.disablePictureInPicture)
              for (var r = ['loop', 'muted', 'playsinline', 'autoplay'], a = 0; a < r.length; a++) {
                var s = r[a],
                  l = this.options_[s]
                'undefined' !== typeof l && (l ? Me(e, s, s) : Re(e, s), (e[s] = l))
              }
              return e
            }),
            (i.handleLateInit_ = function (e) {
              if (0 !== e.networkState && 3 !== e.networkState) {
                if (0 === e.readyState) {
                  var t = !1,
                    i = function () {
                      t = !0
                    }
                  this.on('loadstart', i)
                  var n = function () {
                    t || this.trigger('loadstart')
                  }
                  return (
                    this.on('loadedmetadata', n),
                    void this.ready(function () {
                      this.off('loadstart', i), this.off('loadedmetadata', n), t || this.trigger('loadstart')
                    })
                  )
                }
                var r = ['loadstart']
                r.push('loadedmetadata'),
                  e.readyState >= 2 && r.push('loadeddata'),
                  e.readyState >= 3 && r.push('canplay'),
                  e.readyState >= 4 && r.push('canplaythrough'),
                  this.ready(function () {
                    r.forEach(function (e) {
                      this.trigger(e)
                    }, this)
                  })
              }
            }),
            (i.setScrubbing = function (e) {
              this.isScrubbing_ = e
            }),
            (i.scrubbing = function () {
              return this.isScrubbing_
            }),
            (i.setCurrentTime = function (e) {
              try {
                this.isScrubbing_ && this.el_.fastSeek && ge ? this.el_.fastSeek(e) : (this.el_.currentTime = e)
              } catch (t) {
                q(t, 'Video is not ready. (Video.js)')
              }
            }),
            (i.duration = function () {
              var e = this
              if (this.el_.duration === 1 / 0 && ie && oe && 0 === this.el_.currentTime) {
                return (
                  this.on('timeupdate', function t() {
                    e.el_.currentTime > 0 &&
                      (e.el_.duration === 1 / 0 && e.trigger('durationchange'), e.off('timeupdate', t))
                  }),
                  NaN
                )
              }
              return this.el_.duration || NaN
            }),
            (i.width = function () {
              return this.el_.offsetWidth
            }),
            (i.height = function () {
              return this.el_.offsetHeight
            }),
            (i.proxyWebkitFullscreen_ = function () {
              var e = this
              if ('webkitDisplayingFullscreen' in this.el_) {
                var t = function () {
                    this.trigger('fullscreenchange', { isFullscreen: !1 })
                  },
                  i = function () {
                    'webkitPresentationMode' in this.el_ &&
                      'picture-in-picture' !== this.el_.webkitPresentationMode &&
                      (this.one('webkitendfullscreen', t),
                      this.trigger('fullscreenchange', { isFullscreen: !0, nativeIOSFullscreen: !0 }))
                  }
                this.on('webkitbeginfullscreen', i),
                  this.on('dispose', function () {
                    e.off('webkitbeginfullscreen', i), e.off('webkitendfullscreen', t)
                  })
              }
            }),
            (i.supportsFullScreen = function () {
              if ('function' === typeof this.el_.webkitEnterFullScreen) {
                var e = (a().navigator && a().navigator.userAgent) || ''
                if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0
              }
              return !1
            }),
            (i.enterFullScreen = function () {
              var e = this.el_
              if (e.paused && e.networkState <= e.HAVE_METADATA)
                Xt(this.el_.play()),
                  this.setTimeout(function () {
                    e.pause()
                    try {
                      e.webkitEnterFullScreen()
                    } catch (t) {
                      this.trigger('fullscreenerror', t)
                    }
                  }, 0)
              else
                try {
                  e.webkitEnterFullScreen()
                } catch (t) {
                  this.trigger('fullscreenerror', t)
                }
            }),
            (i.exitFullScreen = function () {
              this.el_.webkitDisplayingFullscreen
                ? this.el_.webkitExitFullScreen()
                : this.trigger('fullscreenerror', new Error('The video is not fullscreen'))
            }),
            (i.requestPictureInPicture = function () {
              return this.el_.requestPictureInPicture()
            }),
            (i.src = function (e) {
              if (void 0 === e) return this.el_.src
              this.setSrc(e)
            }),
            (i.reset = function () {
              t.resetMediaElement(this.el_)
            }),
            (i.currentSrc = function () {
              return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
            }),
            (i.setControls = function (e) {
              this.el_.controls = !!e
            }),
            (i.addTextTrack = function (t, i, n) {
              return this.featuresNativeTextTracks
                ? this.el_.addTextTrack(t, i, n)
                : e.prototype.addTextTrack.call(this, t, i, n)
            }),
            (i.createRemoteTextTrack = function (t) {
              if (!this.featuresNativeTextTracks) return e.prototype.createRemoteTextTrack.call(this, t)
              var i = o().createElement('track')
              return (
                t.kind && (i.kind = t.kind),
                t.label && (i.label = t.label),
                (t.language || t.srclang) && (i.srclang = t.language || t.srclang),
                t.default && (i.default = t.default),
                t.id && (i.id = t.id),
                t.src && (i.src = t.src),
                i
              )
            }),
            (i.addRemoteTextTrack = function (t, i) {
              var n = e.prototype.addRemoteTextTrack.call(this, t, i)
              return this.featuresNativeTextTracks && this.el().appendChild(n), n
            }),
            (i.removeRemoteTextTrack = function (t) {
              if ((e.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks))
                for (var i = this.$$('track'), n = i.length; n--; )
                  (t !== i[n] && t !== i[n].track) || this.el().removeChild(i[n])
            }),
            (i.getVideoPlaybackQuality = function () {
              if ('function' === typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality()
              var e = {}
              return (
                'undefined' !== typeof this.el().webkitDroppedFrameCount &&
                  'undefined' !== typeof this.el().webkitDecodedFrameCount &&
                  ((e.droppedVideoFrames = this.el().webkitDroppedFrameCount),
                  (e.totalVideoFrames = this.el().webkitDecodedFrameCount)),
                a().performance && 'function' === typeof a().performance.now
                  ? (e.creationTime = a().performance.now())
                  : a().performance &&
                    a().performance.timing &&
                    'number' === typeof a().performance.timing.navigationStart &&
                    (e.creationTime = a().Date.now() - a().performance.timing.navigationStart),
                e
              )
            }),
            t
          )
        })(Pi)
      wr(xr, 'TEST_VID', function () {
        if (Te()) {
          var e = o().createElement('video'),
            t = o().createElement('track')
          return (t.kind = 'captions'), (t.srclang = 'en'), (t.label = 'English'), e.appendChild(t), e
        }
      }),
        (xr.isSupported = function () {
          try {
            xr.TEST_VID.volume = 0.5
          } catch (e) {
            return !1
          }
          return !(!xr.TEST_VID || !xr.TEST_VID.canPlayType)
        }),
        (xr.canPlayType = function (e) {
          return xr.TEST_VID.canPlayType(e)
        }),
        (xr.canPlaySource = function (e, t) {
          return xr.canPlayType(e.type)
        }),
        (xr.canControlVolume = function () {
          try {
            var e = xr.TEST_VID.volume
            return (xr.TEST_VID.volume = e / 2 + 0.1), e !== xr.TEST_VID.volume
          } catch (t) {
            return !1
          }
        }),
        (xr.canMuteVolume = function () {
          try {
            var e = xr.TEST_VID.muted
            return (
              (xr.TEST_VID.muted = !e),
              xr.TEST_VID.muted ? Me(xr.TEST_VID, 'muted', 'muted') : Re(xr.TEST_VID, 'muted'),
              e !== xr.TEST_VID.muted
            )
          } catch (t) {
            return !1
          }
        }),
        (xr.canControlPlaybackRate = function () {
          if (ie && oe && le < 58) return !1
          try {
            var e = xr.TEST_VID.playbackRate
            return (xr.TEST_VID.playbackRate = e / 2 + 0.1), e !== xr.TEST_VID.playbackRate
          } catch (t) {
            return !1
          }
        }),
        (xr.canOverrideAttributes = function () {
          try {
            var e = function () {}
            Object.defineProperty(o().createElement('video'), 'src', { get: e, set: e }),
              Object.defineProperty(o().createElement('audio'), 'src', { get: e, set: e }),
              Object.defineProperty(o().createElement('video'), 'innerHTML', { get: e, set: e }),
              Object.defineProperty(o().createElement('audio'), 'innerHTML', { get: e, set: e })
          } catch (t) {
            return !1
          }
          return !0
        }),
        (xr.supportsNativeTextTracks = function () {
          return ge || (me && oe)
        }),
        (xr.supportsNativeVideoTracks = function () {
          return !(!xr.TEST_VID || !xr.TEST_VID.videoTracks)
        }),
        (xr.supportsNativeAudioTracks = function () {
          return !(!xr.TEST_VID || !xr.TEST_VID.audioTracks)
        }),
        (xr.Events = [
          'loadstart',
          'suspend',
          'abort',
          'error',
          'emptied',
          'stalled',
          'loadedmetadata',
          'loadeddata',
          'canplay',
          'canplaythrough',
          'playing',
          'waiting',
          'seeking',
          'seeked',
          'ended',
          'durationchange',
          'timeupdate',
          'progress',
          'play',
          'pause',
          'ratechange',
          'resize',
          'volumechange',
        ]),
        [
          ['featuresVolumeControl', 'canControlVolume'],
          ['featuresMuteControl', 'canMuteVolume'],
          ['featuresPlaybackRate', 'canControlPlaybackRate'],
          ['featuresSourceset', 'canOverrideAttributes'],
          ['featuresNativeTextTracks', 'supportsNativeTextTracks'],
          ['featuresNativeVideoTracks', 'supportsNativeVideoTracks'],
          ['featuresNativeAudioTracks', 'supportsNativeAudioTracks'],
        ].forEach(function (e) {
          var t = e[0],
            i = e[1]
          wr(
            xr.prototype,
            t,
            function () {
              return xr[i]()
            },
            !0,
          )
        }),
        (xr.prototype.movingMediaElementInDOM = !me),
        (xr.prototype.featuresFullscreenResize = !0),
        (xr.prototype.featuresProgressEvents = !0),
        (xr.prototype.featuresTimeupdateEvents = !0),
        (xr.patchCanPlayType = function () {
          ne >= 4 &&
            !ae &&
            !oe &&
            ((yr = xr.TEST_VID && xr.TEST_VID.constructor.prototype.canPlayType),
            (xr.TEST_VID.constructor.prototype.canPlayType = function (e) {
              return e && /^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e) ? 'maybe' : yr.call(this, e)
            }))
        }),
        (xr.unpatchCanPlayType = function () {
          var e = xr.TEST_VID.constructor.prototype.canPlayType
          return yr && (xr.TEST_VID.constructor.prototype.canPlayType = yr), e
        }),
        xr.patchCanPlayType(),
        (xr.disposeMediaElement = function (e) {
          if (e) {
            for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes(); ) e.removeChild(e.firstChild)
            e.removeAttribute('src'),
              'function' === typeof e.load &&
                (function () {
                  try {
                    e.load()
                  } catch (t) {}
                })()
          }
        }),
        (xr.resetMediaElement = function (e) {
          if (e) {
            for (var t = e.querySelectorAll('source'), i = t.length; i--; ) e.removeChild(t[i])
            e.removeAttribute('src'),
              'function' === typeof e.load &&
                (function () {
                  try {
                    e.load()
                  } catch (t) {}
                })()
          }
        }),
        ['muted', 'defaultMuted', 'autoplay', 'controls', 'loop', 'playsinline'].forEach(function (e) {
          xr.prototype[e] = function () {
            return this.el_[e] || this.el_.hasAttribute(e)
          }
        }),
        ['muted', 'defaultMuted', 'autoplay', 'loop', 'playsinline'].forEach(function (e) {
          xr.prototype['set' + Ut(e)] = function (t) {
            ;(this.el_[e] = t), t ? this.el_.setAttribute(e, e) : this.el_.removeAttribute(e)
          }
        }),
        [
          'paused',
          'currentTime',
          'buffered',
          'volume',
          'poster',
          'preload',
          'error',
          'seeking',
          'seekable',
          'ended',
          'playbackRate',
          'defaultPlaybackRate',
          'disablePictureInPicture',
          'played',
          'networkState',
          'readyState',
          'videoWidth',
          'videoHeight',
          'crossOrigin',
        ].forEach(function (e) {
          xr.prototype[e] = function () {
            return this.el_[e]
          }
        }),
        [
          'volume',
          'src',
          'poster',
          'preload',
          'playbackRate',
          'defaultPlaybackRate',
          'disablePictureInPicture',
          'crossOrigin',
        ].forEach(function (e) {
          xr.prototype['set' + Ut(e)] = function (t) {
            this.el_[e] = t
          }
        }),
        ['pause', 'load', 'play'].forEach(function (e) {
          xr.prototype[e] = function () {
            return this.el_[e]()
          }
        }),
        Pi.withSourceHandlers(xr),
        (xr.nativeSourceHandler = {}),
        (xr.nativeSourceHandler.canPlayType = function (e) {
          try {
            return xr.TEST_VID.canPlayType(e)
          } catch (t) {
            return ''
          }
        }),
        (xr.nativeSourceHandler.canHandleSource = function (e, t) {
          if (e.type) return xr.nativeSourceHandler.canPlayType(e.type)
          if (e.src) {
            var i = _i(e.src)
            return xr.nativeSourceHandler.canPlayType('video/' + i)
          }
          return ''
        }),
        (xr.nativeSourceHandler.handleSource = function (e, t, i) {
          t.setSrc(e.src)
        }),
        (xr.nativeSourceHandler.dispose = function () {}),
        xr.registerSourceHandler(xr.nativeSourceHandler),
        Pi.registerTech('Html5', xr)
      var Ir = [
          'progress',
          'abort',
          'suspend',
          'emptied',
          'stalled',
          'loadedmetadata',
          'loadeddata',
          'timeupdate',
          'resize',
          'volumechange',
          'texttrackchange',
        ],
        Pr = { canplay: 'CanPlay', canplaythrough: 'CanPlayThrough', playing: 'Playing', seeked: 'Seeked' },
        Ar = ['tiny', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'huge'],
        Lr = {}
      Ar.forEach(function (e) {
        var t = 'x' === e.charAt(0) ? 'x-' + e.substring(1) : e
        Lr[e] = 'vjs-layout-' + t
      })
      var Or = { tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0 },
        Dr = (function (e) {
          function t(i, n, r) {
            var a
            if (
              ((i.id = i.id || n.id || 'vjs_video_' + at()),
              ((n = K(t.getTagSettings(i), n)).initChildren = !1),
              (n.createEl = !1),
              (n.evented = !1),
              (n.reportTouchActivity = !1),
              !n.language)
            )
              if ('function' === typeof i.closest) {
                var s = i.closest('[lang]')
                s && s.getAttribute && (n.language = s.getAttribute('lang'))
              } else
                for (var l = i; l && 1 === l.nodeType; ) {
                  if (Oe(l).hasOwnProperty('lang')) {
                    n.language = l.getAttribute('lang')
                    break
                  }
                  l = l.parentNode
                }
            if (
              (((a = e.call(this, null, n, r) || this).boundDocumentFullscreenChange_ = function (e) {
                return a.documentFullscreenChange_(e)
              }),
              (a.boundFullWindowOnEscKey_ = function (e) {
                return a.fullWindowOnEscKey(e)
              }),
              (a.boundUpdateStyleEl_ = function (e) {
                return a.updateStyleEl_(e)
              }),
              (a.boundApplyInitTime_ = function (e) {
                return a.applyInitTime_(e)
              }),
              (a.boundUpdateCurrentBreakpoint_ = function (e) {
                return a.updateCurrentBreakpoint_(e)
              }),
              (a.boundHandleTechClick_ = function (e) {
                return a.handleTechClick_(e)
              }),
              (a.boundHandleTechDoubleClick_ = function (e) {
                return a.handleTechDoubleClick_(e)
              }),
              (a.boundHandleTechTouchStart_ = function (e) {
                return a.handleTechTouchStart_(e)
              }),
              (a.boundHandleTechTouchMove_ = function (e) {
                return a.handleTechTouchMove_(e)
              }),
              (a.boundHandleTechTouchEnd_ = function (e) {
                return a.handleTechTouchEnd_(e)
              }),
              (a.boundHandleTechTap_ = function (e) {
                return a.handleTechTap_(e)
              }),
              (a.isFullscreen_ = !1),
              (a.log = V(a.id_)),
              (a.fsApi_ = U),
              (a.isPosterFromTech_ = !1),
              (a.queuedCallbacks_ = []),
              (a.isReady_ = !1),
              (a.hasStarted_ = !1),
              (a.userActive_ = !1),
              (a.debugEnabled_ = !1),
              !a.options_ || !a.options_.techOrder || !a.options_.techOrder.length)
            )
              throw new Error(
                'No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?',
              )
            if (((a.tag = i), (a.tagAttributes = i && Oe(i)), a.language(a.options_.language), n.languages)) {
              var d = {}
              Object.getOwnPropertyNames(n.languages).forEach(function (e) {
                d[e.toLowerCase()] = n.languages[e]
              }),
                (a.languages_ = d)
            } else a.languages_ = t.prototype.options_.languages
            a.resetCache_(),
              (a.poster_ = n.poster || ''),
              (a.controls_ = !!n.controls),
              (i.controls = !1),
              i.removeAttribute('controls'),
              (a.changingSrc_ = !1),
              (a.playCallbacks_ = []),
              (a.playTerminatedQueue_ = []),
              i.hasAttribute('autoplay') ? a.autoplay(!0) : a.autoplay(a.options_.autoplay),
              n.plugins &&
                Object.keys(n.plugins).forEach(function (e) {
                  if ('function' !== typeof a[e]) throw new Error('plugin "' + e + '" does not exist')
                }),
              (a.scrubbing_ = !1),
              (a.el_ = a.createEl()),
              Ot((0, u.Z)(a), { eventBusKey: 'el_' }),
              a.fsApi_.requestFullscreen &&
                (ht(o(), a.fsApi_.fullscreenchange, a.boundDocumentFullscreenChange_),
                a.on(a.fsApi_.fullscreenchange, a.boundDocumentFullscreenChange_)),
              a.fluid_ && a.on(['playerreset', 'resize'], a.boundUpdateStyleEl_)
            var c = Bt(a.options_)
            n.plugins &&
              Object.keys(n.plugins).forEach(function (e) {
                a[e](n.plugins[e])
              }),
              n.debug && a.debug(!0),
              (a.options_.playerOptions = c),
              (a.middleware_ = []),
              a.playbackRates(n.playbackRates),
              a.initChildren(),
              a.isAudio('audio' === i.nodeName.toLowerCase()),
              a.controls() ? a.addClass('vjs-controls-enabled') : a.addClass('vjs-controls-disabled'),
              a.el_.setAttribute('role', 'region'),
              a.isAudio()
                ? a.el_.setAttribute('aria-label', a.localize('Audio Player'))
                : a.el_.setAttribute('aria-label', a.localize('Video Player')),
              a.isAudio() && a.addClass('vjs-audio'),
              a.flexNotSupported_() && a.addClass('vjs-no-flex'),
              he && a.addClass('vjs-touch-enabled'),
              me || a.addClass('vjs-workinghover'),
              (t.players[a.id_] = (0, u.Z)(a))
            var h = O.split('.')[0]
            return (
              a.addClass('vjs-v' + h),
              a.userActive(!0),
              a.reportUserActivity(),
              a.one('play', function (e) {
                return a.listenForUserActivity_(e)
              }),
              a.on('stageclick', function (e) {
                return a.handleStageClick_(e)
              }),
              a.on('keydown', function (e) {
                return a.handleKeyDown(e)
              }),
              a.on('languagechange', function (e) {
                return a.handleLanguagechange(e)
              }),
              a.breakpoints(a.options_.breakpoints),
              a.responsive(a.options_.responsive),
              a
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.dispose = function () {
              var i = this
              this.trigger('dispose'),
                this.off('dispose'),
                pt(o(), this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_),
                pt(o(), 'keydown', this.boundFullWindowOnEscKey_),
                this.styleEl_ &&
                  this.styleEl_.parentNode &&
                  (this.styleEl_.parentNode.removeChild(this.styleEl_), (this.styleEl_ = null)),
                (t.players[this.id_] = null),
                this.tag && this.tag.player && (this.tag.player = null),
                this.el_ && this.el_.player && (this.el_.player = null),
                this.tech_ && (this.tech_.dispose(), (this.isPosterFromTech_ = !1), (this.poster_ = '')),
                this.playerElIngest_ && (this.playerElIngest_ = null),
                this.tag && (this.tag = null),
                (Li[this.id()] = null),
                Ii.names.forEach(function (e) {
                  var t = Ii[e],
                    n = i[t.getterName]()
                  n && n.off && n.off()
                }),
                e.prototype.dispose.call(this)
            }),
            (i.createEl = function () {
              var t,
                i = this.tag,
                n = (this.playerElIngest_ =
                  i.parentNode && i.parentNode.hasAttribute && i.parentNode.hasAttribute('data-vjs-player')),
                r = 'video-js' === this.tag.tagName.toLowerCase()
              n ? (t = this.el_ = i.parentNode) : r || (t = this.el_ = e.prototype.createEl.call(this, 'div'))
              var s = Oe(i)
              if (r) {
                for (t = this.el_ = i, i = this.tag = o().createElement('video'); t.children.length; )
                  i.appendChild(t.firstChild)
                xe(t, 'video-js') || Ie(t, 'video-js'),
                  t.appendChild(i),
                  (n = this.playerElIngest_ = t),
                  Object.keys(t).forEach(function (e) {
                    try {
                      i[e] = t[e]
                    } catch (n) {}
                  })
              }
              if (
                (i.setAttribute('tabindex', '-1'),
                (s.tabindex = '-1'),
                (ue || (oe && ce)) && (i.setAttribute('role', 'application'), (s.role = 'application')),
                i.removeAttribute('width'),
                i.removeAttribute('height'),
                'width' in s && delete s.width,
                'height' in s && delete s.height,
                Object.getOwnPropertyNames(s).forEach(function (e) {
                  ;(r && 'class' === e) || t.setAttribute(e, s[e]), r && i.setAttribute(e, s[e])
                }),
                (i.playerId = i.id),
                (i.id += '_html5_api'),
                (i.className = 'vjs-tech'),
                (i.player = t.player = this),
                this.addClass('vjs-paused'),
                !0 !== a().VIDEOJS_NO_DYNAMIC_STYLE)
              ) {
                this.styleEl_ = it('vjs-styles-dimensions')
                var l = Ze('.vjs-styles-defaults'),
                  u = Ze('head')
                u.insertBefore(this.styleEl_, l ? l.nextSibling : u.firstChild)
              }
              ;(this.fill_ = !1),
                (this.fluid_ = !1),
                this.width(this.options_.width),
                this.height(this.options_.height),
                this.fill(this.options_.fill),
                this.fluid(this.options_.fluid),
                this.aspectRatio(this.options_.aspectRatio),
                this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin)
              for (var d = i.getElementsByTagName('a'), c = 0; c < d.length; c++) {
                var h = d.item(c)
                Ie(h, 'vjs-hidden'), h.setAttribute('hidden', 'hidden')
              }
              return (
                (i.initNetworkState_ = i.networkState),
                i.parentNode && !n && i.parentNode.insertBefore(t, i),
                we(i, t),
                this.children_.unshift(i),
                this.el_.setAttribute('lang', this.language_),
                (this.el_ = t),
                t
              )
            }),
            (i.crossOrigin = function (e) {
              if (!e) return this.techGet_('crossOrigin')
              'anonymous' === e || 'use-credentials' === e
                ? this.techCall_('setCrossOrigin', e)
                : q.warn('crossOrigin must be "anonymous" or "use-credentials", given "' + e + '"')
            }),
            (i.width = function (e) {
              return this.dimension('width', e)
            }),
            (i.height = function (e) {
              return this.dimension('height', e)
            }),
            (i.dimension = function (e, t) {
              var i = e + '_'
              if (void 0 === t) return this[i] || 0
              if ('' === t || 'auto' === t) return (this[i] = void 0), void this.updateStyleEl_()
              var n = parseFloat(t)
              isNaN(n)
                ? q.error('Improper value "' + t + '" supplied for for ' + e)
                : ((this[i] = n), this.updateStyleEl_())
            }),
            (i.fluid = function (e) {
              var t,
                i,
                n = this
              if (void 0 === e) return !!this.fluid_
              ;(this.fluid_ = !!e),
                Ct(this) && this.off(['playerreset', 'resize'], this.boundUpdateStyleEl_),
                e
                  ? (this.addClass('vjs-fluid'),
                    this.fill(!1),
                    (i = function () {
                      n.on(['playerreset', 'resize'], n.boundUpdateStyleEl_)
                    }),
                    Ct((t = this))
                      ? i()
                      : (t.eventedCallbacks || (t.eventedCallbacks = []), t.eventedCallbacks.push(i)))
                  : this.removeClass('vjs-fluid'),
                this.updateStyleEl_()
            }),
            (i.fill = function (e) {
              if (void 0 === e) return !!this.fill_
              ;(this.fill_ = !!e), e ? (this.addClass('vjs-fill'), this.fluid(!1)) : this.removeClass('vjs-fill')
            }),
            (i.aspectRatio = function (e) {
              if (void 0 === e) return this.aspectRatio_
              if (!/^\d+\:\d+$/.test(e))
                throw new Error(
                  'Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.',
                )
              ;(this.aspectRatio_ = e), this.fluid(!0), this.updateStyleEl_()
            }),
            (i.updateStyleEl_ = function () {
              if (!0 !== a().VIDEOJS_NO_DYNAMIC_STYLE) {
                var e,
                  t,
                  i,
                  n = (
                    void 0 !== this.aspectRatio_ && 'auto' !== this.aspectRatio_
                      ? this.aspectRatio_
                      : this.videoWidth() > 0
                      ? this.videoWidth() + ':' + this.videoHeight()
                      : '16:9'
                  ).split(':'),
                  r = n[1] / n[0]
                ;(e =
                  void 0 !== this.width_
                    ? this.width_
                    : void 0 !== this.height_
                    ? this.height_ / r
                    : this.videoWidth() || 300),
                  (t = void 0 !== this.height_ ? this.height_ : e * r),
                  (i = /^[^a-zA-Z]/.test(this.id()) ? 'dimensions-' + this.id() : this.id() + '-dimensions'),
                  this.addClass(i),
                  nt(
                    this.styleEl_,
                    '\n      .' +
                      i +
                      ' {\n        width: ' +
                      e +
                      'px;\n        height: ' +
                      t +
                      'px;\n      }\n\n      .' +
                      i +
                      '.vjs-fluid {\n        padding-top: ' +
                      100 * r +
                      '%;\n      }\n    ',
                  )
              } else {
                var s = 'number' === typeof this.width_ ? this.width_ : this.options_.width,
                  o = 'number' === typeof this.height_ ? this.height_ : this.options_.height,
                  l = this.tech_ && this.tech_.el()
                l && (s >= 0 && (l.width = s), o >= 0 && (l.height = o))
              }
            }),
            (i.loadTech_ = function (e, t) {
              var i = this
              this.tech_ && this.unloadTech_()
              var n = Ut(e),
                r = e.charAt(0).toLowerCase() + e.slice(1)
              'Html5' !== n &&
                this.tag &&
                (Pi.getTech('Html5').disposeMediaElement(this.tag), (this.tag.player = null), (this.tag = null)),
                (this.techName_ = n),
                (this.isReady_ = !1)
              var a = this.autoplay()
              ;('string' === typeof this.autoplay() || (!0 === this.autoplay() && this.options_.normalizeAutoplay)) &&
                (a = !1)
              var s = {
                source: t,
                autoplay: a,
                nativeControlsForTouch: this.options_.nativeControlsForTouch,
                playerId: this.id(),
                techId: this.id() + '_' + r + '_api',
                playsinline: this.options_.playsinline,
                preload: this.options_.preload,
                loop: this.options_.loop,
                disablePictureInPicture: this.options_.disablePictureInPicture,
                muted: this.options_.muted,
                poster: this.poster(),
                language: this.language(),
                playerElIngest: this.playerElIngest_ || !1,
                'vtt.js': this.options_['vtt.js'],
                canOverridePoster: !!this.options_.techCanOverridePoster,
                enableSourceset: this.options_.enableSourceset,
                Promise: this.options_.Promise,
              }
              Ii.names.forEach(function (e) {
                var t = Ii[e]
                s[t.getterName] = i[t.privateName]
              }),
                K(s, this.options_[n]),
                K(s, this.options_[r]),
                K(s, this.options_[e.toLowerCase()]),
                this.tag && (s.tag = this.tag),
                t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (s.startTime = this.cache_.currentTime)
              var o = Pi.getTech(e)
              if (!o)
                throw new Error(
                  "No Tech named '" + n + "' exists! '" + n + "' should be registered using videojs.registerTech()'",
                )
              ;(this.tech_ = new o(s)),
                this.tech_.ready(Tt(this, this.handleTechReady_), !0),
                Jt(this.textTracksJson_ || [], this.tech_),
                Ir.forEach(function (e) {
                  i.on(i.tech_, e, function (t) {
                    return i['handleTech' + Ut(e) + '_'](t)
                  })
                }),
                Object.keys(Pr).forEach(function (e) {
                  i.on(i.tech_, e, function (t) {
                    0 === i.tech_.playbackRate() && i.tech_.seeking()
                      ? i.queuedCallbacks_.push({ callback: i['handleTech' + Pr[e] + '_'].bind(i), event: t })
                      : i['handleTech' + Pr[e] + '_'](t)
                  })
                }),
                this.on(this.tech_, 'loadstart', function (e) {
                  return i.handleTechLoadStart_(e)
                }),
                this.on(this.tech_, 'sourceset', function (e) {
                  return i.handleTechSourceset_(e)
                }),
                this.on(this.tech_, 'waiting', function (e) {
                  return i.handleTechWaiting_(e)
                }),
                this.on(this.tech_, 'ended', function (e) {
                  return i.handleTechEnded_(e)
                }),
                this.on(this.tech_, 'seeking', function (e) {
                  return i.handleTechSeeking_(e)
                }),
                this.on(this.tech_, 'play', function (e) {
                  return i.handleTechPlay_(e)
                }),
                this.on(this.tech_, 'firstplay', function (e) {
                  return i.handleTechFirstPlay_(e)
                }),
                this.on(this.tech_, 'pause', function (e) {
                  return i.handleTechPause_(e)
                }),
                this.on(this.tech_, 'durationchange', function (e) {
                  return i.handleTechDurationChange_(e)
                }),
                this.on(this.tech_, 'fullscreenchange', function (e, t) {
                  return i.handleTechFullscreenChange_(e, t)
                }),
                this.on(this.tech_, 'fullscreenerror', function (e, t) {
                  return i.handleTechFullscreenError_(e, t)
                }),
                this.on(this.tech_, 'enterpictureinpicture', function (e) {
                  return i.handleTechEnterPictureInPicture_(e)
                }),
                this.on(this.tech_, 'leavepictureinpicture', function (e) {
                  return i.handleTechLeavePictureInPicture_(e)
                }),
                this.on(this.tech_, 'error', function (e) {
                  return i.handleTechError_(e)
                }),
                this.on(this.tech_, 'posterchange', function (e) {
                  return i.handleTechPosterChange_(e)
                }),
                this.on(this.tech_, 'textdata', function (e) {
                  return i.handleTechTextData_(e)
                }),
                this.on(this.tech_, 'ratechange', function (e) {
                  return i.handleTechRateChange_(e)
                }),
                this.on(this.tech_, 'loadedmetadata', this.boundUpdateStyleEl_),
                this.usingNativeControls(this.techGet_('controls')),
                this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(),
                this.tech_.el().parentNode === this.el() ||
                  ('Html5' === n && this.tag) ||
                  we(this.tech_.el(), this.el()),
                this.tag && ((this.tag.player = null), (this.tag = null))
            }),
            (i.unloadTech_ = function () {
              var e = this
              Ii.names.forEach(function (t) {
                var i = Ii[t]
                e[i.privateName] = e[i.getterName]()
              }),
                (this.textTracksJson_ = $t(this.tech_)),
                (this.isReady_ = !1),
                this.tech_.dispose(),
                (this.tech_ = !1),
                this.isPosterFromTech_ && ((this.poster_ = ''), this.trigger('posterchange')),
                (this.isPosterFromTech_ = !1)
            }),
            (i.tech = function (e) {
              return (
                void 0 === e &&
                  q.warn(
                    "Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n",
                  ),
                this.tech_
              )
            }),
            (i.addTechControlsListeners_ = function () {
              this.removeTechControlsListeners_(),
                this.on(this.tech_, 'click', this.boundHandleTechClick_),
                this.on(this.tech_, 'dblclick', this.boundHandleTechDoubleClick_),
                this.on(this.tech_, 'touchstart', this.boundHandleTechTouchStart_),
                this.on(this.tech_, 'touchmove', this.boundHandleTechTouchMove_),
                this.on(this.tech_, 'touchend', this.boundHandleTechTouchEnd_),
                this.on(this.tech_, 'tap', this.boundHandleTechTap_)
            }),
            (i.removeTechControlsListeners_ = function () {
              this.off(this.tech_, 'tap', this.boundHandleTechTap_),
                this.off(this.tech_, 'touchstart', this.boundHandleTechTouchStart_),
                this.off(this.tech_, 'touchmove', this.boundHandleTechTouchMove_),
                this.off(this.tech_, 'touchend', this.boundHandleTechTouchEnd_),
                this.off(this.tech_, 'click', this.boundHandleTechClick_),
                this.off(this.tech_, 'dblclick', this.boundHandleTechDoubleClick_)
            }),
            (i.handleTechReady_ = function () {
              this.triggerReady(),
                this.cache_.volume && this.techCall_('setVolume', this.cache_.volume),
                this.handleTechPosterChange_(),
                this.handleTechDurationChange_()
            }),
            (i.handleTechLoadStart_ = function () {
              this.removeClass('vjs-ended'),
                this.removeClass('vjs-seeking'),
                this.error(null),
                this.handleTechDurationChange_(),
                this.paused()
                  ? (this.hasStarted(!1), this.trigger('loadstart'))
                  : (this.trigger('loadstart'), this.trigger('firstplay')),
                this.manualAutoplay_(
                  !0 === this.autoplay() && this.options_.normalizeAutoplay ? 'play' : this.autoplay(),
                )
            }),
            (i.manualAutoplay_ = function (e) {
              var t = this
              if (this.tech_ && 'string' === typeof e) {
                var i,
                  n = function () {
                    var e = t.muted()
                    t.muted(!0)
                    var i = function () {
                      t.muted(e)
                    }
                    t.playTerminatedQueue_.push(i)
                    var n = t.play()
                    if (Qt(n))
                      return n.catch(function (e) {
                        throw (i(), new Error('Rejection at manualAutoplay. Restoring muted value. ' + (e || '')))
                      })
                  }
                if (
                  ('any' !== e || this.muted()
                    ? (i = 'muted' !== e || this.muted() ? this.play() : n())
                    : Qt((i = this.play())) && (i = i.catch(n)),
                  Qt(i))
                )
                  return i
                    .then(function () {
                      t.trigger({ type: 'autoplay-success', autoplay: e })
                    })
                    .catch(function () {
                      t.trigger({ type: 'autoplay-failure', autoplay: e })
                    })
              }
            }),
            (i.updateSourceCaches_ = function (e) {
              void 0 === e && (e = '')
              var t = e,
                i = ''
              'string' !== typeof t && ((t = e.src), (i = e.type)),
                (this.cache_.source = this.cache_.source || {}),
                (this.cache_.sources = this.cache_.sources || []),
                t &&
                  !i &&
                  (i = (function (e, t) {
                    if (!t) return ''
                    if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type
                    var i = e.cache_.sources.filter(function (e) {
                      return e.src === t
                    })
                    if (i.length) return i[0].type
                    for (var n = e.$$('source'), r = 0; r < n.length; r++) {
                      var a = n[r]
                      if (a.type && a.src && a.src === t) return a.type
                    }
                    return Hi(t)
                  })(this, t)),
                (this.cache_.source = Bt({}, e, { src: t, type: i }))
              for (
                var n = this.cache_.sources.filter(function (e) {
                    return e.src && e.src === t
                  }),
                  r = [],
                  a = this.$$('source'),
                  s = [],
                  o = 0;
                o < a.length;
                o++
              ) {
                var l = Oe(a[o])
                r.push(l), l.src && l.src === t && s.push(l.src)
              }
              s.length && !n.length
                ? (this.cache_.sources = r)
                : n.length || (this.cache_.sources = [this.cache_.source]),
                (this.cache_.src = t)
            }),
            (i.handleTechSourceset_ = function (e) {
              var t = this
              if (!this.changingSrc_) {
                var i = function (e) {
                    return t.updateSourceCaches_(e)
                  },
                  n = this.currentSource().src,
                  r = e.src
                n &&
                  !/^blob:/.test(n) &&
                  /^blob:/.test(r) &&
                  (!this.lastSource_ || (this.lastSource_.tech !== r && this.lastSource_.player !== n)) &&
                  (i = function () {}),
                  i(r),
                  e.src ||
                    this.tech_.any(['sourceset', 'loadstart'], function (e) {
                      if ('sourceset' !== e.type) {
                        var i = t.techGet('currentSrc')
                        ;(t.lastSource_.tech = i), t.updateSourceCaches_(i)
                      }
                    })
              }
              ;(this.lastSource_ = { player: this.currentSource().src, tech: e.src }),
                this.trigger({ src: e.src, type: 'sourceset' })
            }),
            (i.hasStarted = function (e) {
              if (void 0 === e) return this.hasStarted_
              e !== this.hasStarted_ &&
                ((this.hasStarted_ = e),
                this.hasStarted_
                  ? (this.addClass('vjs-has-started'), this.trigger('firstplay'))
                  : this.removeClass('vjs-has-started'))
            }),
            (i.handleTechPlay_ = function () {
              this.removeClass('vjs-ended'),
                this.removeClass('vjs-paused'),
                this.addClass('vjs-playing'),
                this.hasStarted(!0),
                this.trigger('play')
            }),
            (i.handleTechRateChange_ = function () {
              this.tech_.playbackRate() > 0 &&
                0 === this.cache_.lastPlaybackRate &&
                (this.queuedCallbacks_.forEach(function (e) {
                  return e.callback(e.event)
                }),
                (this.queuedCallbacks_ = [])),
                (this.cache_.lastPlaybackRate = this.tech_.playbackRate()),
                this.trigger('ratechange')
            }),
            (i.handleTechWaiting_ = function () {
              var e = this
              this.addClass('vjs-waiting'), this.trigger('waiting')
              var t = this.currentTime()
              this.on('timeupdate', function i() {
                t !== e.currentTime() && (e.removeClass('vjs-waiting'), e.off('timeupdate', i))
              })
            }),
            (i.handleTechCanPlay_ = function () {
              this.removeClass('vjs-waiting'), this.trigger('canplay')
            }),
            (i.handleTechCanPlayThrough_ = function () {
              this.removeClass('vjs-waiting'), this.trigger('canplaythrough')
            }),
            (i.handleTechPlaying_ = function () {
              this.removeClass('vjs-waiting'), this.trigger('playing')
            }),
            (i.handleTechSeeking_ = function () {
              this.addClass('vjs-seeking'), this.trigger('seeking')
            }),
            (i.handleTechSeeked_ = function () {
              this.removeClass('vjs-seeking'), this.removeClass('vjs-ended'), this.trigger('seeked')
            }),
            (i.handleTechFirstPlay_ = function () {
              this.options_.starttime &&
                (q.warn('Passing the `starttime` option to the player will be deprecated in 6.0'),
                this.currentTime(this.options_.starttime)),
                this.addClass('vjs-has-started'),
                this.trigger('firstplay')
            }),
            (i.handleTechPause_ = function () {
              this.removeClass('vjs-playing'), this.addClass('vjs-paused'), this.trigger('pause')
            }),
            (i.handleTechEnded_ = function () {
              this.addClass('vjs-ended'),
                this.removeClass('vjs-waiting'),
                this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(),
                this.trigger('ended')
            }),
            (i.handleTechDurationChange_ = function () {
              this.duration(this.techGet_('duration'))
            }),
            (i.handleTechClick_ = function (e) {
              this.controls_ && (this.paused() ? Xt(this.play()) : this.pause())
            }),
            (i.handleTechDoubleClick_ = function (e) {
              this.controls_ &&
                (Array.prototype.some.call(this.$$('.vjs-control-bar, .vjs-modal-dialog'), function (t) {
                  return t.contains(e.target)
                }) ||
                  (void 0 !== this.options_ &&
                    void 0 !== this.options_.userActions &&
                    void 0 !== this.options_.userActions.doubleClick &&
                    !1 === this.options_.userActions.doubleClick) ||
                  (void 0 !== this.options_ &&
                  void 0 !== this.options_.userActions &&
                  'function' === typeof this.options_.userActions.doubleClick
                    ? this.options_.userActions.doubleClick.call(this, e)
                    : this.isFullscreen()
                    ? this.exitFullscreen()
                    : this.requestFullscreen()))
            }),
            (i.handleTechTap_ = function () {
              this.userActive(!this.userActive())
            }),
            (i.handleTechTouchStart_ = function () {
              this.userWasActive = this.userActive()
            }),
            (i.handleTechTouchMove_ = function () {
              this.userWasActive && this.reportUserActivity()
            }),
            (i.handleTechTouchEnd_ = function (e) {
              e.cancelable && e.preventDefault()
            }),
            (i.handleStageClick_ = function () {
              this.reportUserActivity()
            }),
            (i.toggleFullscreenClass_ = function () {
              this.isFullscreen() ? this.addClass('vjs-fullscreen') : this.removeClass('vjs-fullscreen')
            }),
            (i.documentFullscreenChange_ = function (e) {
              var t = e.target.player
              if (!t || t === this) {
                var i = this.el(),
                  n = o()[this.fsApi_.fullscreenElement] === i
                !n && i.matches
                  ? (n = i.matches(':' + this.fsApi_.fullscreen))
                  : !n && i.msMatchesSelector && (n = i.msMatchesSelector(':' + this.fsApi_.fullscreen)),
                  this.isFullscreen(n)
              }
            }),
            (i.handleTechFullscreenChange_ = function (e, t) {
              t && (t.nativeIOSFullscreen && this.toggleClass('vjs-ios-native-fs'), this.isFullscreen(t.isFullscreen))
            }),
            (i.handleTechFullscreenError_ = function (e, t) {
              this.trigger('fullscreenerror', t)
            }),
            (i.togglePictureInPictureClass_ = function () {
              this.isInPictureInPicture()
                ? this.addClass('vjs-picture-in-picture')
                : this.removeClass('vjs-picture-in-picture')
            }),
            (i.handleTechEnterPictureInPicture_ = function (e) {
              this.isInPictureInPicture(!0)
            }),
            (i.handleTechLeavePictureInPicture_ = function (e) {
              this.isInPictureInPicture(!1)
            }),
            (i.handleTechError_ = function () {
              var e = this.tech_.error()
              this.error(e)
            }),
            (i.handleTechTextData_ = function () {
              var e = null
              arguments.length > 1 && (e = arguments[1]), this.trigger('textdata', e)
            }),
            (i.getCache = function () {
              return this.cache_
            }),
            (i.resetCache_ = function () {
              this.cache_ = {
                currentTime: 0,
                initTime: 0,
                inactivityTimeout: this.options_.inactivityTimeout,
                duration: NaN,
                lastVolume: 1,
                lastPlaybackRate: this.defaultPlaybackRate(),
                media: null,
                src: '',
                source: {},
                sources: [],
                playbackRates: [],
                volume: 1,
              }
            }),
            (i.techCall_ = function (e, t) {
              this.ready(function () {
                if (e in Ui)
                  return (function (e, t, i, n) {
                    return t[i](e.reduce(Ni(i), n))
                  })(this.middleware_, this.tech_, e, t)
                if (e in Bi) return Mi(this.middleware_, this.tech_, e, t)
                try {
                  this.tech_ && this.tech_[e](t)
                } catch (i) {
                  throw (q(i), i)
                }
              }, !0)
            }),
            (i.techGet_ = function (e) {
              if (this.tech_ && this.tech_.isReady_) {
                if (e in Ri)
                  return (function (e, t, i) {
                    return e.reduceRight(Ni(i), t[i]())
                  })(this.middleware_, this.tech_, e)
                if (e in Bi) return Mi(this.middleware_, this.tech_, e)
                try {
                  return this.tech_[e]()
                } catch (t) {
                  if (void 0 === this.tech_[e])
                    throw (
                      (q('Video.js: ' + e + ' method not defined for ' + this.techName_ + ' playback technology.', t),
                      t)
                    )
                  if ('TypeError' === t.name)
                    throw (
                      (q('Video.js: ' + e + ' unavailable on ' + this.techName_ + ' playback technology element.', t),
                      (this.tech_.isReady_ = !1),
                      t)
                    )
                  throw (q(t), t)
                }
              }
            }),
            (i.play = function () {
              var e = this,
                t = this.options_.Promise || a().Promise
              return t
                ? new t(function (t) {
                    e.play_(t)
                  })
                : this.play_()
            }),
            (i.play_ = function (e) {
              var t = this
              void 0 === e && (e = Xt), this.playCallbacks_.push(e)
              var i = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()))
              if (
                (this.waitToPlay_ && (this.off(['ready', 'loadstart'], this.waitToPlay_), (this.waitToPlay_ = null)),
                !this.isReady_ || !i)
              )
                return (
                  (this.waitToPlay_ = function (e) {
                    t.play_()
                  }),
                  this.one(['ready', 'loadstart'], this.waitToPlay_),
                  void (i || (!ge && !me) || this.load())
                )
              var n = this.techGet_('play')
              null === n ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(n)
            }),
            (i.runPlayTerminatedQueue_ = function () {
              var e = this.playTerminatedQueue_.slice(0)
              ;(this.playTerminatedQueue_ = []),
                e.forEach(function (e) {
                  e()
                })
            }),
            (i.runPlayCallbacks_ = function (e) {
              var t = this.playCallbacks_.slice(0)
              ;(this.playCallbacks_ = []),
                (this.playTerminatedQueue_ = []),
                t.forEach(function (t) {
                  t(e)
                })
            }),
            (i.pause = function () {
              this.techCall_('pause')
            }),
            (i.paused = function () {
              return !1 !== this.techGet_('paused')
            }),
            (i.played = function () {
              return this.techGet_('played') || zt(0, 0)
            }),
            (i.scrubbing = function (e) {
              if ('undefined' === typeof e) return this.scrubbing_
              ;(this.scrubbing_ = !!e),
                this.techCall_('setScrubbing', this.scrubbing_),
                e ? this.addClass('vjs-scrubbing') : this.removeClass('vjs-scrubbing')
            }),
            (i.currentTime = function (e) {
              return 'undefined' !== typeof e
                ? (e < 0 && (e = 0),
                  this.isReady_ && !this.changingSrc_ && this.tech_ && this.tech_.isReady_
                    ? (this.techCall_('setCurrentTime', e), void (this.cache_.initTime = 0))
                    : ((this.cache_.initTime = e),
                      this.off('canplay', this.boundApplyInitTime_),
                      void this.one('canplay', this.boundApplyInitTime_)))
                : ((this.cache_.currentTime = this.techGet_('currentTime') || 0), this.cache_.currentTime)
            }),
            (i.applyInitTime_ = function () {
              this.currentTime(this.cache_.initTime)
            }),
            (i.duration = function (e) {
              if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN
              ;(e = parseFloat(e)) < 0 && (e = 1 / 0),
                e !== this.cache_.duration &&
                  ((this.cache_.duration = e),
                  e === 1 / 0 ? this.addClass('vjs-live') : this.removeClass('vjs-live'),
                  isNaN(e) || this.trigger('durationchange'))
            }),
            (i.remainingTime = function () {
              return this.duration() - this.currentTime()
            }),
            (i.remainingTimeDisplay = function () {
              return Math.floor(this.duration()) - Math.floor(this.currentTime())
            }),
            (i.buffered = function () {
              var e = this.techGet_('buffered')
              return (e && e.length) || (e = zt(0, 0)), e
            }),
            (i.bufferedPercent = function () {
              return Gt(this.buffered(), this.duration())
            }),
            (i.bufferedEnd = function () {
              var e = this.buffered(),
                t = this.duration(),
                i = e.end(e.length - 1)
              return i > t && (i = t), i
            }),
            (i.volume = function (e) {
              var t
              return void 0 !== e
                ? ((t = Math.max(0, Math.min(1, parseFloat(e)))),
                  (this.cache_.volume = t),
                  this.techCall_('setVolume', t),
                  void (t > 0 && this.lastVolume_(t)))
                : ((t = parseFloat(this.techGet_('volume'))), isNaN(t) ? 1 : t)
            }),
            (i.muted = function (e) {
              if (void 0 === e) return this.techGet_('muted') || !1
              this.techCall_('setMuted', e)
            }),
            (i.defaultMuted = function (e) {
              return void 0 !== e ? this.techCall_('setDefaultMuted', e) : this.techGet_('defaultMuted') || !1
            }),
            (i.lastVolume_ = function (e) {
              if (void 0 === e || 0 === e) return this.cache_.lastVolume
              this.cache_.lastVolume = e
            }),
            (i.supportsFullScreen = function () {
              return this.techGet_('supportsFullScreen') || !1
            }),
            (i.isFullscreen = function (e) {
              if (void 0 !== e) {
                var t = this.isFullscreen_
                return (
                  (this.isFullscreen_ = Boolean(e)),
                  this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger('fullscreenchange'),
                  void this.toggleFullscreenClass_()
                )
              }
              return this.isFullscreen_
            }),
            (i.requestFullscreen = function (e) {
              var t = this.options_.Promise || a().Promise
              if (t) {
                var i = this
                return new t(function (t, n) {
                  function r() {
                    i.off('fullscreenerror', s), i.off('fullscreenchange', a)
                  }
                  function a() {
                    r(), t()
                  }
                  function s(e, t) {
                    r(), n(t)
                  }
                  i.one('fullscreenchange', a), i.one('fullscreenerror', s)
                  var o = i.requestFullscreenHelper_(e)
                  o && (o.then(r, r), o.then(t, n))
                })
              }
              return this.requestFullscreenHelper_()
            }),
            (i.requestFullscreenHelper_ = function (e) {
              var t,
                i = this
              if (
                (this.fsApi_.prefixed ||
                  ((t = (this.options_.fullscreen && this.options_.fullscreen.options) || {}), void 0 !== e && (t = e)),
                this.fsApi_.requestFullscreen)
              ) {
                var n = this.el_[this.fsApi_.requestFullscreen](t)
                return (
                  n &&
                    n.then(
                      function () {
                        return i.isFullscreen(!0)
                      },
                      function () {
                        return i.isFullscreen(!1)
                      },
                    ),
                  n
                )
              }
              this.tech_.supportsFullScreen() && !0 === !this.options_.preferFullWindow
                ? this.techCall_('enterFullScreen')
                : this.enterFullWindow()
            }),
            (i.exitFullscreen = function () {
              var e = this.options_.Promise || a().Promise
              if (e) {
                var t = this
                return new e(function (e, i) {
                  function n() {
                    t.off('fullscreenerror', a), t.off('fullscreenchange', r)
                  }
                  function r() {
                    n(), e()
                  }
                  function a(e, t) {
                    n(), i(t)
                  }
                  t.one('fullscreenchange', r), t.one('fullscreenerror', a)
                  var s = t.exitFullscreenHelper_()
                  s && (s.then(n, n), s.then(e, i))
                })
              }
              return this.exitFullscreenHelper_()
            }),
            (i.exitFullscreenHelper_ = function () {
              var e = this
              if (this.fsApi_.requestFullscreen) {
                var t = o()[this.fsApi_.exitFullscreen]()
                return (
                  t &&
                    Xt(
                      t.then(function () {
                        return e.isFullscreen(!1)
                      }),
                    ),
                  t
                )
              }
              this.tech_.supportsFullScreen() && !0 === !this.options_.preferFullWindow
                ? this.techCall_('exitFullScreen')
                : this.exitFullWindow()
            }),
            (i.enterFullWindow = function () {
              this.isFullscreen(!0),
                (this.isFullWindow = !0),
                (this.docOrigOverflow = o().documentElement.style.overflow),
                ht(o(), 'keydown', this.boundFullWindowOnEscKey_),
                (o().documentElement.style.overflow = 'hidden'),
                Ie(o().body, 'vjs-full-window'),
                this.trigger('enterFullWindow')
            }),
            (i.fullWindowOnEscKey = function (e) {
              f().isEventKey(e, 'Esc') &&
                !0 === this.isFullscreen() &&
                (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen())
            }),
            (i.exitFullWindow = function () {
              this.isFullscreen(!1),
                (this.isFullWindow = !1),
                pt(o(), 'keydown', this.boundFullWindowOnEscKey_),
                (o().documentElement.style.overflow = this.docOrigOverflow),
                Pe(o().body, 'vjs-full-window'),
                this.trigger('exitFullWindow')
            }),
            (i.disablePictureInPicture = function (e) {
              if (void 0 === e) return this.techGet_('disablePictureInPicture')
              this.techCall_('setDisablePictureInPicture', e),
                (this.options_.disablePictureInPicture = e),
                this.trigger('disablepictureinpicturechanged')
            }),
            (i.isInPictureInPicture = function (e) {
              return void 0 !== e
                ? ((this.isInPictureInPicture_ = !!e), void this.togglePictureInPictureClass_())
                : !!this.isInPictureInPicture_
            }),
            (i.requestPictureInPicture = function () {
              if ('pictureInPictureEnabled' in o() && !1 === this.disablePictureInPicture())
                return this.techGet_('requestPictureInPicture')
            }),
            (i.exitPictureInPicture = function () {
              if ('pictureInPictureEnabled' in o()) return o().exitPictureInPicture()
            }),
            (i.handleKeyDown = function (e) {
              var t = this.options_.userActions
              if (t && t.hotkeys) {
                ;(function (e) {
                  var t = e.tagName.toLowerCase()
                  if (e.isContentEditable) return !0
                  if ('input' === t)
                    return -1 === ['button', 'checkbox', 'hidden', 'radio', 'reset', 'submit'].indexOf(e.type)
                  return -1 !== ['textarea'].indexOf(t)
                })(this.el_.ownerDocument.activeElement) ||
                  ('function' === typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e))
              }
            }),
            (i.handleHotkeys = function (e) {
              var t = this.options_.userActions ? this.options_.userActions.hotkeys : {},
                i = t.fullscreenKey,
                n =
                  void 0 === i
                    ? function (e) {
                        return f().isEventKey(e, 'f')
                      }
                    : i,
                r = t.muteKey,
                a =
                  void 0 === r
                    ? function (e) {
                        return f().isEventKey(e, 'm')
                      }
                    : r,
                s = t.playPauseKey,
                l =
                  void 0 === s
                    ? function (e) {
                        return f().isEventKey(e, 'k') || f().isEventKey(e, 'Space')
                      }
                    : s
              if (n.call(this, e)) {
                e.preventDefault(), e.stopPropagation()
                var u = qt.getComponent('FullscreenToggle')
                !1 !== o()[this.fsApi_.fullscreenEnabled] && u.prototype.handleClick.call(this, e)
              } else if (a.call(this, e)) {
                e.preventDefault(),
                  e.stopPropagation(),
                  qt.getComponent('MuteToggle').prototype.handleClick.call(this, e)
              } else if (l.call(this, e)) {
                e.preventDefault(),
                  e.stopPropagation(),
                  qt.getComponent('PlayToggle').prototype.handleClick.call(this, e)
              }
            }),
            (i.canPlayType = function (e) {
              for (var t, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                var r = n[i],
                  a = Pi.getTech(r)
                if ((a || (a = qt.getComponent(r)), a)) {
                  if (a.isSupported() && (t = a.canPlayType(e))) return t
                } else q.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
              }
              return ''
            }),
            (i.selectSource = function (e) {
              var t,
                i = this,
                n = this.options_.techOrder
                  .map(function (e) {
                    return [e, Pi.getTech(e)]
                  })
                  .filter(function (e) {
                    var t = e[0],
                      i = e[1]
                    return i
                      ? i.isSupported()
                      : (q.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                  }),
                r = function (e, t, i) {
                  var n
                  return (
                    e.some(function (e) {
                      return t.some(function (t) {
                        if ((n = i(e, t))) return !0
                      })
                    }),
                    n
                  )
                },
                a = function (e, t) {
                  var n = e[0]
                  if (e[1].canPlaySource(t, i.options_[n.toLowerCase()])) return { source: t, tech: n }
                }
              return (
                (this.options_.sourceOrder
                  ? r(
                      e,
                      n,
                      ((t = a),
                      function (e, i) {
                        return t(i, e)
                      }),
                    )
                  : r(n, e, a)) || !1
              )
            }),
            (i.handleSrc_ = function (e, t) {
              var i = this
              if ('undefined' === typeof e) return this.cache_.src || ''
              this.resetRetryOnError_ && this.resetRetryOnError_()
              var n = qi(e)
              if (n.length) {
                if (
                  ((this.changingSrc_ = !0),
                  t || (this.cache_.sources = n),
                  this.updateSourceCaches_(n[0]),
                  Di(this, n[0], function (e, r) {
                    var a, s
                    if (((i.middleware_ = r), t || (i.cache_.sources = n), i.updateSourceCaches_(e), i.src_(e)))
                      return n.length > 1
                        ? i.handleSrc_(n.slice(1))
                        : ((i.changingSrc_ = !1),
                          i.setTimeout(function () {
                            this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) })
                          }, 0),
                          void i.triggerReady())
                    ;(a = r),
                      (s = i.tech_),
                      a.forEach(function (e) {
                        return e.setTech && e.setTech(s)
                      })
                  }),
                  this.options_.retryOnError && n.length > 1)
                ) {
                  var r = function () {
                      i.error(null), i.handleSrc_(n.slice(1), !0)
                    },
                    a = function () {
                      i.off('error', r)
                    }
                  this.one('error', r),
                    this.one('playing', a),
                    (this.resetRetryOnError_ = function () {
                      i.off('error', r), i.off('playing', a)
                    })
                }
              } else
                this.setTimeout(function () {
                  this.error({ code: 4, message: this.localize(this.options_.notSupportedMessage) })
                }, 0)
            }),
            (i.src = function (e) {
              return this.handleSrc_(e, !1)
            }),
            (i.src_ = function (e) {
              var t,
                i,
                n = this,
                r = this.selectSource([e])
              return (
                !r ||
                ((t = r.tech),
                (i = this.techName_),
                Ut(t) !== Ut(i)
                  ? ((this.changingSrc_ = !0),
                    this.loadTech_(r.tech, r.source),
                    this.tech_.ready(function () {
                      n.changingSrc_ = !1
                    }),
                    !1)
                  : (this.ready(function () {
                      this.tech_.constructor.prototype.hasOwnProperty('setSource')
                        ? this.techCall_('setSource', e)
                        : this.techCall_('src', e.src),
                        (this.changingSrc_ = !1)
                    }, !0),
                    !1))
              )
            }),
            (i.load = function () {
              this.techCall_('load')
            }),
            (i.reset = function () {
              var e = this,
                t = this.options_.Promise || a().Promise
              this.paused() || !t
                ? this.doReset_()
                : Xt(
                    this.play().then(function () {
                      return e.doReset_()
                    }),
                  )
            }),
            (i.doReset_ = function () {
              this.tech_ && this.tech_.clearTracks('text'),
                this.resetCache_(),
                this.poster(''),
                this.loadTech_(this.options_.techOrder[0], null),
                this.techCall_('reset'),
                this.resetControlBarUI_(),
                Ct(this) && this.trigger('playerreset')
            }),
            (i.resetControlBarUI_ = function () {
              this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_()
            }),
            (i.resetProgressBar_ = function () {
              this.currentTime(0)
              var e = this.controlBar,
                t = e.durationDisplay,
                i = e.remainingTimeDisplay
              t && t.updateContent(), i && i.updateContent()
            }),
            (i.resetPlaybackRate_ = function () {
              this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_()
            }),
            (i.resetVolumeBar_ = function () {
              this.volume(1), this.trigger('volumechange')
            }),
            (i.currentSources = function () {
              var e = this.currentSource(),
                t = []
              return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
            }),
            (i.currentSource = function () {
              return this.cache_.source || {}
            }),
            (i.currentSrc = function () {
              return (this.currentSource() && this.currentSource().src) || ''
            }),
            (i.currentType = function () {
              return (this.currentSource() && this.currentSource().type) || ''
            }),
            (i.preload = function (e) {
              return void 0 !== e
                ? (this.techCall_('setPreload', e), void (this.options_.preload = e))
                : this.techGet_('preload')
            }),
            (i.autoplay = function (e) {
              if (void 0 === e) return this.options_.autoplay || !1
              var t
              ;('string' === typeof e && /(any|play|muted)/.test(e)) || (!0 === e && this.options_.normalizeAutoplay)
                ? ((this.options_.autoplay = e), this.manualAutoplay_('string' === typeof e ? e : 'play'), (t = !1))
                : (this.options_.autoplay = !!e),
                (t = 'undefined' === typeof t ? this.options_.autoplay : t),
                this.tech_ && this.techCall_('setAutoplay', t)
            }),
            (i.playsinline = function (e) {
              return void 0 !== e
                ? (this.techCall_('setPlaysinline', e), (this.options_.playsinline = e), this)
                : this.techGet_('playsinline')
            }),
            (i.loop = function (e) {
              return void 0 !== e
                ? (this.techCall_('setLoop', e), void (this.options_.loop = e))
                : this.techGet_('loop')
            }),
            (i.poster = function (e) {
              if (void 0 === e) return this.poster_
              e || (e = ''),
                e !== this.poster_ &&
                  ((this.poster_ = e),
                  this.techCall_('setPoster', e),
                  (this.isPosterFromTech_ = !1),
                  this.trigger('posterchange'))
            }),
            (i.handleTechPosterChange_ = function () {
              if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                var e = this.tech_.poster() || ''
                e !== this.poster_ && ((this.poster_ = e), (this.isPosterFromTech_ = !0), this.trigger('posterchange'))
              }
            }),
            (i.controls = function (e) {
              if (void 0 === e) return !!this.controls_
              ;(e = !!e),
                this.controls_ !== e &&
                  ((this.controls_ = e),
                  this.usingNativeControls() && this.techCall_('setControls', e),
                  this.controls_
                    ? (this.removeClass('vjs-controls-disabled'),
                      this.addClass('vjs-controls-enabled'),
                      this.trigger('controlsenabled'),
                      this.usingNativeControls() || this.addTechControlsListeners_())
                    : (this.removeClass('vjs-controls-enabled'),
                      this.addClass('vjs-controls-disabled'),
                      this.trigger('controlsdisabled'),
                      this.usingNativeControls() || this.removeTechControlsListeners_()))
            }),
            (i.usingNativeControls = function (e) {
              if (void 0 === e) return !!this.usingNativeControls_
              ;(e = !!e),
                this.usingNativeControls_ !== e &&
                  ((this.usingNativeControls_ = e),
                  this.usingNativeControls_
                    ? (this.addClass('vjs-using-native-controls'), this.trigger('usingnativecontrols'))
                    : (this.removeClass('vjs-using-native-controls'), this.trigger('usingcustomcontrols')))
            }),
            (i.error = function (e) {
              var t = this
              if (void 0 === e) return this.error_ || null
              if (
                (M('beforeerror').forEach(function (i) {
                  var n = i(t, e)
                  ;(Z(n) && !Array.isArray(n)) || 'string' === typeof n || 'number' === typeof n || null === n
                    ? (e = n)
                    : t.log.error('please return a value that MediaError expects in beforeerror hooks')
                }),
                this.options_.suppressNotSupportedError && e && 4 === e.code)
              ) {
                var i = function () {
                  this.error(e)
                }
                return (
                  (this.options_.suppressNotSupportedError = !1),
                  this.any(['click', 'touchstart'], i),
                  void this.one('loadstart', function () {
                    this.off(['click', 'touchstart'], i)
                  })
                )
              }
              if (null === e)
                return (
                  (this.error_ = e),
                  this.removeClass('vjs-error'),
                  void (this.errorDisplay && this.errorDisplay.close())
                )
              ;(this.error_ = new Kt(e)),
                this.addClass('vjs-error'),
                q.error(
                  '(CODE:' + this.error_.code + ' ' + Kt.errorTypes[this.error_.code] + ')',
                  this.error_.message,
                  this.error_,
                ),
                this.trigger('error'),
                M('error').forEach(function (e) {
                  return e(t, t.error_)
                })
            }),
            (i.reportUserActivity = function (e) {
              this.userActivity_ = !0
            }),
            (i.userActive = function (e) {
              if (void 0 === e) return this.userActive_
              if ((e = !!e) !== this.userActive_) {
                if (((this.userActive_ = e), this.userActive_))
                  return (
                    (this.userActivity_ = !0),
                    this.removeClass('vjs-user-inactive'),
                    this.addClass('vjs-user-active'),
                    void this.trigger('useractive')
                  )
                this.tech_ &&
                  this.tech_.one('mousemove', function (e) {
                    e.stopPropagation(), e.preventDefault()
                  }),
                  (this.userActivity_ = !1),
                  this.removeClass('vjs-user-active'),
                  this.addClass('vjs-user-inactive'),
                  this.trigger('userinactive')
              }
            }),
            (i.listenForUserActivity_ = function () {
              var e,
                t,
                i,
                n = Tt(this, this.reportUserActivity),
                r = function (t) {
                  n(), this.clearInterval(e)
                }
              this.on('mousedown', function () {
                n(), this.clearInterval(e), (e = this.setInterval(n, 250))
              }),
                this.on('mousemove', function (e) {
                  ;(e.screenX === t && e.screenY === i) || ((t = e.screenX), (i = e.screenY), n())
                }),
                this.on('mouseup', r),
                this.on('mouseleave', r)
              var a,
                s = this.getChild('controlBar')
              !s ||
                me ||
                ie ||
                (s.on('mouseenter', function (e) {
                  0 !== this.player().options_.inactivityTimeout &&
                    (this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout),
                    (this.player().options_.inactivityTimeout = 0)
                }),
                s.on('mouseleave', function (e) {
                  this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
                })),
                this.on('keydown', n),
                this.on('keyup', n),
                this.setInterval(function () {
                  if (this.userActivity_) {
                    ;(this.userActivity_ = !1), this.userActive(!0), this.clearTimeout(a)
                    var e = this.options_.inactivityTimeout
                    e <= 0 ||
                      (a = this.setTimeout(function () {
                        this.userActivity_ || this.userActive(!1)
                      }, e))
                  }
                }, 250)
            }),
            (i.playbackRate = function (e) {
              if (void 0 === e)
                return this.tech_ && this.tech_.featuresPlaybackRate
                  ? this.cache_.lastPlaybackRate || this.techGet_('playbackRate')
                  : 1
              this.techCall_('setPlaybackRate', e)
            }),
            (i.defaultPlaybackRate = function (e) {
              return void 0 !== e
                ? this.techCall_('setDefaultPlaybackRate', e)
                : this.tech_ && this.tech_.featuresPlaybackRate
                ? this.techGet_('defaultPlaybackRate')
                : 1
            }),
            (i.isAudio = function (e) {
              if (void 0 === e) return !!this.isAudio_
              this.isAudio_ = !!e
            }),
            (i.addTextTrack = function (e, t, i) {
              if (this.tech_) return this.tech_.addTextTrack(e, t, i)
            }),
            (i.addRemoteTextTrack = function (e, t) {
              if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
            }),
            (i.removeRemoteTextTrack = function (e) {
              void 0 === e && (e = {})
              var t = e.track
              if ((t || (t = e), this.tech_)) return this.tech_.removeRemoteTextTrack(t)
            }),
            (i.getVideoPlaybackQuality = function () {
              return this.techGet_('getVideoPlaybackQuality')
            }),
            (i.videoWidth = function () {
              return (this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth()) || 0
            }),
            (i.videoHeight = function () {
              return (this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight()) || 0
            }),
            (i.language = function (e) {
              if (void 0 === e) return this.language_
              this.language_ !== String(e).toLowerCase() &&
                ((this.language_ = String(e).toLowerCase()), Ct(this) && this.trigger('languagechange'))
            }),
            (i.languages = function () {
              return Bt(t.prototype.options_.languages, this.languages_)
            }),
            (i.toJSON = function () {
              var e = Bt(this.options_),
                t = e.tracks
              e.tracks = []
              for (var i = 0; i < t.length; i++) {
                var n = t[i]
                ;((n = Bt(n)).player = void 0), (e.tracks[i] = n)
              }
              return e
            }),
            (i.createModal = function (e, t) {
              var i = this
              ;(t = t || {}).content = e || ''
              var n = new ei(this, t)
              return (
                this.addChild(n),
                n.on('dispose', function () {
                  i.removeChild(n)
                }),
                n.open(),
                n
              )
            }),
            (i.updateCurrentBreakpoint_ = function () {
              if (this.responsive())
                for (var e = this.currentBreakpoint(), t = this.currentWidth(), i = 0; i < Ar.length; i++) {
                  var n = Ar[i]
                  if (t <= this.breakpoints_[n]) {
                    if (e === n) return
                    e && this.removeClass(Lr[e]), this.addClass(Lr[n]), (this.breakpoint_ = n)
                    break
                  }
                }
            }),
            (i.removeCurrentBreakpoint_ = function () {
              var e = this.currentBreakpointClass()
              ;(this.breakpoint_ = ''), e && this.removeClass(e)
            }),
            (i.breakpoints = function (e) {
              return (
                void 0 === e ||
                  ((this.breakpoint_ = ''), (this.breakpoints_ = K({}, Or, e)), this.updateCurrentBreakpoint_()),
                K(this.breakpoints_)
              )
            }),
            (i.responsive = function (e) {
              return void 0 === e
                ? this.responsive_
                : (e = Boolean(e)) !== this.responsive_
                ? ((this.responsive_ = e),
                  e
                    ? (this.on('playerresize', this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_())
                    : (this.off('playerresize', this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()),
                  e)
                : void 0
            }),
            (i.currentBreakpoint = function () {
              return this.breakpoint_
            }),
            (i.currentBreakpointClass = function () {
              return Lr[this.breakpoint_] || ''
            }),
            (i.loadMedia = function (e, t) {
              var i = this
              if (e && 'object' === typeof e) {
                this.reset(), (this.cache_.media = Bt(e))
                var n = this.cache_.media,
                  r = n.artwork,
                  a = n.poster,
                  s = n.src,
                  o = n.textTracks
                !r && a && (this.cache_.media.artwork = [{ src: a, type: Hi(a) }]),
                  s && this.src(s),
                  a && this.poster(a),
                  Array.isArray(o) &&
                    o.forEach(function (e) {
                      return i.addRemoteTextTrack(e, !1)
                    }),
                  this.ready(t)
              }
            }),
            (i.getMedia = function () {
              if (!this.cache_.media) {
                var e = this.poster(),
                  t = {
                    src: this.currentSources(),
                    textTracks: Array.prototype.map.call(this.remoteTextTracks(), function (e) {
                      return { kind: e.kind, label: e.label, language: e.language, src: e.src }
                    }),
                  }
                return e && ((t.poster = e), (t.artwork = [{ src: t.poster, type: Hi(t.poster) }])), t
              }
              return Bt(this.cache_.media)
            }),
            (t.getTagSettings = function (e) {
              var t = { sources: [], tracks: [] },
                i = Oe(e),
                n = i['data-setup']
              if ((xe(e, 'vjs-fill') && (i.fill = !0), xe(e, 'vjs-fluid') && (i.fluid = !0), null !== n)) {
                var r = h()(n || '{}'),
                  a = r[0],
                  s = r[1]
                a && q.error(a), K(i, s)
              }
              if ((K(t, i), e.hasChildNodes()))
                for (var o = e.childNodes, l = 0, u = o.length; l < u; l++) {
                  var d = o[l],
                    c = d.nodeName.toLowerCase()
                  'source' === c ? t.sources.push(Oe(d)) : 'track' === c && t.tracks.push(Oe(d))
                }
              return t
            }),
            (i.flexNotSupported_ = function () {
              var e = o().createElement('i')
              return !(
                'flexBasis' in e.style ||
                'webkitFlexBasis' in e.style ||
                'mozFlexBasis' in e.style ||
                'msFlexBasis' in e.style ||
                'msFlexOrder' in e.style
              )
            }),
            (i.debug = function (e) {
              if (void 0 === e) return this.debugEnabled_
              e
                ? (this.trigger('debugon'),
                  (this.previousLogLevel_ = this.log.level),
                  this.log.level('debug'),
                  (this.debugEnabled_ = !0))
                : (this.trigger('debugoff'),
                  this.log.level(this.previousLogLevel_),
                  (this.previousLogLevel_ = void 0),
                  (this.debugEnabled_ = !1))
            }),
            (i.playbackRates = function (e) {
              if (void 0 === e) return this.cache_.playbackRates
              Array.isArray(e) &&
                e.every(function (e) {
                  return 'number' === typeof e
                }) &&
                ((this.cache_.playbackRates = e), this.trigger('playbackrateschange'))
            }),
            t
          )
        })(qt)
      Ii.names.forEach(function (e) {
        var t = Ii[e]
        Dr.prototype[t.getterName] = function () {
          return this.tech_
            ? this.tech_[t.getterName]()
            : ((this[t.privateName] = this[t.privateName] || new t.ListClass()), this[t.privateName])
        }
      }),
        (Dr.prototype.crossorigin = Dr.prototype.crossOrigin),
        (Dr.players = {})
      var Mr = a().navigator
      ;(Dr.prototype.options_ = {
        techOrder: Pi.defaultTechOrder_,
        html5: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        liveui: !1,
        children: [
          'mediaLoader',
          'posterImage',
          'textTrackDisplay',
          'loadingSpinner',
          'bigPlayButton',
          'liveTracker',
          'controlBar',
          'errorDisplay',
          'textTrackSettings',
          'resizeManager',
        ],
        language: (Mr && ((Mr.languages && Mr.languages[0]) || Mr.userLanguage || Mr.language)) || 'en',
        languages: {},
        notSupportedMessage: 'No compatible source was found for this media.',
        normalizeAutoplay: !1,
        fullscreen: { options: { navigationUI: 'hide' } },
        breakpoints: {},
        responsive: !1,
      }),
        ['ended', 'seeking', 'seekable', 'networkState', 'readyState'].forEach(function (e) {
          Dr.prototype[e] = function () {
            return this.techGet_(e)
          }
        }),
        Ir.forEach(function (e) {
          Dr.prototype['handleTech' + Ut(e) + '_'] = function () {
            return this.trigger(e)
          }
        }),
        qt.registerComponent('Player', Dr)
      var Rr = 'plugin',
        Ur = {},
        Br = function (e) {
          return Ur.hasOwnProperty(e)
        },
        Nr = function (e) {
          return Br(e) ? Ur[e] : void 0
        },
        Fr = function (e, t) {
          ;(e.activePlugins_ = e.activePlugins_ || {}), (e.activePlugins_[t] = !0)
        },
        jr = function (e, t, i) {
          var n = (i ? 'before' : '') + 'pluginsetup'
          e.trigger(n, t), e.trigger(n + ':' + t.name, t)
        },
        Hr = function (e, t) {
          return (
            (t.prototype.name = e),
            function () {
              jr(this, { name: e, plugin: t, instance: null }, !0)
              for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r]
              var a = (0, y.Z)(t, [this].concat(n))
              return (
                (this[e] = function () {
                  return a
                }),
                jr(this, a.getEventHash()),
                a
              )
            }
          )
        },
        qr = (function () {
          function e(t) {
            if (this.constructor === e) throw new Error('Plugin must be sub-classed; not directly instantiated.')
            ;(this.player = t),
              this.log || (this.log = this.player.log.createLogger(this.name)),
              Ot(this),
              delete this.trigger,
              Mt(this, this.constructor.defaultState),
              Fr(t, this.name),
              (this.dispose = this.dispose.bind(this)),
              t.on('dispose', this.dispose)
          }
          var t = e.prototype
          return (
            (t.version = function () {
              return this.constructor.VERSION
            }),
            (t.getEventHash = function (e) {
              return (
                void 0 === e && (e = {}), (e.name = this.name), (e.plugin = this.constructor), (e.instance = this), e
              )
            }),
            (t.trigger = function (e, t) {
              return void 0 === t && (t = {}), ft(this.eventBusEl_, e, this.getEventHash(t))
            }),
            (t.handleStateChanged = function (e) {}),
            (t.dispose = function () {
              var e = this.name,
                t = this.player
              this.trigger('dispose'),
                this.off(),
                t.off('dispose', this.dispose),
                (t.activePlugins_[e] = !1),
                (this.player = this.state = null),
                (t[e] = Hr(e, Ur[e]))
            }),
            (e.isBasic = function (t) {
              var i = 'string' === typeof t ? Nr(t) : t
              return 'function' === typeof i && !e.prototype.isPrototypeOf(i.prototype)
            }),
            (e.registerPlugin = function (t, i) {
              if ('string' !== typeof t)
                throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + typeof t + '.')
              if (Br(t))
                q.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!')
              else if (Dr.prototype.hasOwnProperty(t))
                throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!')
              if ('function' !== typeof i)
                throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + typeof i + '.')
              return (
                (Ur[t] = i),
                t !== Rr &&
                  (e.isBasic(i)
                    ? (Dr.prototype[t] = (function (e, t) {
                        var i = function () {
                          jr(this, { name: e, plugin: t, instance: null }, !0)
                          var i = t.apply(this, arguments)
                          return Fr(this, e), jr(this, { name: e, plugin: t, instance: i }), i
                        }
                        return (
                          Object.keys(t).forEach(function (e) {
                            i[e] = t[e]
                          }),
                          i
                        )
                      })(t, i))
                    : (Dr.prototype[t] = Hr(t, i))),
                i
              )
            }),
            (e.deregisterPlugin = function (e) {
              if (e === Rr) throw new Error('Cannot de-register base plugin.')
              Br(e) && (delete Ur[e], delete Dr.prototype[e])
            }),
            (e.getPlugins = function (e) {
              var t
              return (
                void 0 === e && (e = Object.keys(Ur)),
                e.forEach(function (e) {
                  var i = Nr(e)
                  i && ((t = t || {})[e] = i)
                }),
                t
              )
            }),
            (e.getPluginVersion = function (e) {
              var t = Nr(e)
              return (t && t.VERSION) || ''
            }),
            e
          )
        })()
      ;(qr.getPlugin = Nr),
        (qr.BASE_PLUGIN_NAME = Rr),
        qr.registerPlugin(Rr, qr),
        (Dr.prototype.usingPlugin = function (e) {
          return !!this.activePlugins_ && !0 === this.activePlugins_[e]
        }),
        (Dr.prototype.hasPlugin = function (e) {
          return !!Br(e)
        })
      var Vr = function (e) {
        return 0 === e.indexOf('#') ? e.slice(1) : e
      }
      function Wr(e, t, i) {
        var n = Wr.getPlayer(e)
        if (n)
          return (
            t && q.warn('Player "' + e + '" is already initialised. Options will not be applied.'), i && n.ready(i), n
          )
        var r = 'string' === typeof e ? Ze('#' + Vr(e)) : e
        if (!be(r)) throw new TypeError('The element or ID supplied is not valid. (videojs)')
        ;(r.ownerDocument.defaultView && r.ownerDocument.body.contains(r)) ||
          q.warn('The element supplied is not included in the DOM'),
          (t = t || {}),
          M('beforesetup').forEach(function (e) {
            var i = e(r, Bt(t))
            Z(i) && !Array.isArray(i) ? (t = Bt(t, i)) : q.error('please return an object in beforesetup hooks')
          })
        var a = qt.getComponent('Player')
        return (
          (n = new a(r, t, i)),
          M('setup').forEach(function (e) {
            return e(n)
          }),
          n
        )
      }
      if (
        ((Wr.hooks_ = D),
        (Wr.hooks = M),
        (Wr.hook = function (e, t) {
          M(e, t)
        }),
        (Wr.hookOnce = function (e, t) {
          M(
            e,
            [].concat(t).map(function (t) {
              return function i() {
                return R(e, i), t.apply(void 0, arguments)
              }
            }),
          )
        }),
        (Wr.removeHook = R),
        !0 !== a().VIDEOJS_NO_DYNAMIC_STYLE && Te())
      ) {
        var zr = Ze('.vjs-styles-defaults')
        if (!zr) {
          zr = it('vjs-styles-defaults')
          var Gr = Ze('head')
          Gr && Gr.insertBefore(zr, Gr.firstChild),
            nt(
              zr,
              '\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ',
            )
        }
      }
      Je(1, Wr),
        (Wr.VERSION = O),
        (Wr.options = Dr.prototype.options_),
        (Wr.getPlayers = function () {
          return Dr.players
        }),
        (Wr.getPlayer = function (e) {
          var t,
            i = Dr.players
          if ('string' === typeof e) {
            var n = Vr(e),
              r = i[n]
            if (r) return r
            t = Ze('#' + n)
          } else t = e
          if (be(t)) {
            var a = t,
              s = a.player,
              o = a.playerId
            if (s || i[o]) return s || i[o]
          }
        }),
        (Wr.getAllPlayers = function () {
          return Object.keys(Dr.players)
            .map(function (e) {
              return Dr.players[e]
            })
            .filter(Boolean)
        }),
        (Wr.players = Dr.players),
        (Wr.getComponent = qt.getComponent),
        (Wr.registerComponent = function (e, t) {
          Pi.isTech(t) &&
            q.warn(
              'The ' +
                e +
                ' tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)',
            ),
            qt.registerComponent.call(qt, e, t)
        }),
        (Wr.getTech = Pi.getTech),
        (Wr.registerTech = Pi.registerTech),
        (Wr.use = function (e, t) {
          ;(Ai[e] = Ai[e] || []), Ai[e].push(t)
        }),
        Object.defineProperty(Wr, 'middleware', { value: {}, writeable: !1, enumerable: !0 }),
        Object.defineProperty(Wr.middleware, 'TERMINATOR', { value: Oi, writeable: !1, enumerable: !0 }),
        (Wr.browser = _e),
        (Wr.TOUCH_ENABLED = he),
        (Wr.extend = function (e, t) {
          void 0 === t && (t = {})
          var i = function () {
              e.apply(this, arguments)
            },
            n = {}
          for (var r in ('object' === typeof t
            ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), (n = t))
            : 'function' === typeof t && (i = t),
          (0, T.Z)(i, e),
          e && (i.super_ = e),
          n))
            n.hasOwnProperty(r) && (i.prototype[r] = n[r])
          return i
        }),
        (Wr.mergeOptions = Bt),
        (Wr.bind = Tt),
        (Wr.registerPlugin = qr.registerPlugin),
        (Wr.deregisterPlugin = qr.deregisterPlugin),
        (Wr.plugin = function (e, t) {
          return q.warn('videojs.plugin() is deprecated; use videojs.registerPlugin() instead'), qr.registerPlugin(e, t)
        }),
        (Wr.getPlugins = qr.getPlugins),
        (Wr.getPlugin = qr.getPlugin),
        (Wr.getPluginVersion = qr.getPluginVersion),
        (Wr.addLanguage = function (e, t) {
          var i
          return (
            (e = ('' + e).toLowerCase()),
            (Wr.options.languages = Bt(Wr.options.languages, (((i = {})[e] = t), i))),
            Wr.options.languages[e]
          )
        }),
        (Wr.log = q),
        (Wr.createLogger = V),
        (Wr.createTimeRange = Wr.createTimeRanges = zt),
        (Wr.formatTime = an),
        (Wr.setFormatTime = function (e) {
          rn = e
        }),
        (Wr.resetFormatTime = function () {
          rn = nn
        }),
        (Wr.parseUrl = mi),
        (Wr.isCrossOrigin = vi),
        (Wr.EventTarget = St),
        (Wr.on = ht),
        (Wr.one = mt),
        (Wr.off = pt),
        (Wr.trigger = ft),
        (Wr.xhr = g()),
        (Wr.TextTrack = Si),
        (Wr.AudioTrack = ki),
        (Wr.VideoTrack = Ci),
        [
          'isEl',
          'isTextNode',
          'createEl',
          'hasClass',
          'addClass',
          'removeClass',
          'toggleClass',
          'setAttributes',
          'getAttributes',
          'emptyEl',
          'appendContent',
          'insertContent',
        ].forEach(function (e) {
          Wr[e] = function () {
            return (
              q.warn('videojs.' + e + '() is deprecated; use videojs.dom.' + e + '() instead'),
              Xe[e].apply(null, arguments)
            )
          }
        }),
        (Wr.computedStyle = X),
        (Wr.dom = Xe),
        (Wr.url = yi),
        (Wr.defineLazyProperty = wr),
        Wr.addLanguage('en', { 'Non-Fullscreen': 'Exit Fullscreen' })
      var Kr = b.Z,
        Zr = function (e, t, i) {
          return e && i && i.responseURL && t !== i.responseURL ? i.responseURL : t
        },
        Qr = function (e) {
          return Wr.log.debug ? Wr.log.debug.bind(Wr, 'VHS:', e + ' >') : function () {}
        },
        Xr = 1 / 30,
        Yr = 0.1,
        $r = function (e, t) {
          var i,
            n = []
          if (e && e.length) for (i = 0; i < e.length; i++) t(e.start(i), e.end(i)) && n.push([e.start(i), e.end(i)])
          return Wr.createTimeRanges(n)
        },
        Jr = function (e, t) {
          return $r(e, function (e, i) {
            return e - Yr <= t && i + Yr >= t
          })
        },
        ea = function (e, t) {
          return $r(e, function (e) {
            return e - Xr >= t
          })
        },
        ta = function (e) {
          var t = []
          if (!e || !e.length) return ''
          for (var i = 0; i < e.length; i++) t.push(e.start(i) + ' => ' + e.end(i))
          return t.join(', ')
        },
        ia = function (e) {
          for (var t = [], i = 0; i < e.length; i++) t.push({ start: e.start(i), end: e.end(i) })
          return t
        },
        na = function (e) {
          if (e && e.length && e.end) return e.end(e.length - 1)
        },
        ra = Wr.createTimeRange,
        aa = function (e) {
          return (e.segments || []).reduce(function (e, t, i) {
            return (
              t.parts
                ? t.parts.forEach(function (n, r) {
                    e.push({ duration: n.duration, segmentIndex: i, partIndex: r, part: n, segment: t })
                  })
                : e.push({ duration: t.duration, segmentIndex: i, partIndex: null, segment: t, part: null }),
              e
            )
          }, [])
        },
        sa = function (e) {
          var t = e.segments && e.segments.length && e.segments[e.segments.length - 1]
          return (t && t.parts) || []
        },
        oa = function (e) {
          var t = e.preloadSegment
          if (t) {
            var i = t.parts,
              n = (t.preloadHints || []).reduce(function (e, t) {
                return e + ('PART' === t.type ? 1 : 0)
              }, 0)
            return (n += i && i.length ? i.length : 0)
          }
        },
        la = function (e, t) {
          if (t.endList) return 0
          if (e && e.suggestedPresentationDelay) return e.suggestedPresentationDelay
          var i = sa(t).length > 0
          return i && t.serverControl && t.serverControl.partHoldBack
            ? t.serverControl.partHoldBack
            : i && t.partTargetDuration
            ? 3 * t.partTargetDuration
            : t.serverControl && t.serverControl.holdBack
            ? t.serverControl.holdBack
            : t.targetDuration
            ? 3 * t.targetDuration
            : 0
        },
        ua = function (e, t, i) {
          if (('undefined' === typeof t && (t = e.mediaSequence + e.segments.length), t < e.mediaSequence)) return 0
          var n = (function (e, t) {
            var i = 0,
              n = t - e.mediaSequence,
              r = e.segments[n]
            if (r) {
              if ('undefined' !== typeof r.start) return { result: r.start, precise: !0 }
              if ('undefined' !== typeof r.end) return { result: r.end - r.duration, precise: !0 }
            }
            for (; n--; ) {
              if ('undefined' !== typeof (r = e.segments[n]).end) return { result: i + r.end, precise: !0 }
              if (((i += r.duration), 'undefined' !== typeof r.start)) return { result: i + r.start, precise: !0 }
            }
            return { result: i, precise: !1 }
          })(e, t)
          if (n.precise) return n.result
          var r = (function (e, t) {
            for (var i, n = 0, r = t - e.mediaSequence; r < e.segments.length; r++) {
              if ('undefined' !== typeof (i = e.segments[r]).start) return { result: i.start - n, precise: !0 }
              if (((n += i.duration), 'undefined' !== typeof i.end)) return { result: i.end - n, precise: !0 }
            }
            return { result: -1, precise: !1 }
          })(e, t)
          return r.precise ? r.result : n.result + i
        },
        da = function (e, t, i) {
          if (!e) return 0
          if (('number' !== typeof i && (i = 0), 'undefined' === typeof t)) {
            if (e.totalDuration) return e.totalDuration
            if (!e.endList) return a()[1 / 0]
          }
          return ua(e, t, i)
        },
        ca = function (e) {
          var t = e.defaultDuration,
            i = e.durationList,
            n = e.startIndex,
            r = e.endIndex,
            a = 0
          if (n > r) {
            var s = [r, n]
            ;(n = s[0]), (r = s[1])
          }
          if (n < 0) {
            for (var o = n; o < Math.min(0, r); o++) a += t
            n = 0
          }
          for (var l = n; l < r; l++) a += i[l].duration
          return a
        },
        ha = function (e, t, i, n) {
          if (!e || !e.segments) return null
          if (e.endList) return da(e)
          if (null === t) return null
          t = t || 0
          var r = ua(e, e.mediaSequence + e.segments.length, t)
          return i && (r -= n = 'number' === typeof n ? n : la(null, e)), Math.max(0, r)
        },
        pa = function (e) {
          return e.excludeUntil && e.excludeUntil > Date.now()
        },
        fa = function (e) {
          return e.excludeUntil && e.excludeUntil === 1 / 0
        },
        ma = function (e) {
          var t = pa(e)
          return !e.disabled && !t
        },
        ga = function (e, t) {
          return t.attributes && t.attributes[e]
        },
        _a = function (e, t) {
          if (1 === e.playlists.length) return !0
          var i = t.attributes.BANDWIDTH || Number.MAX_VALUE
          return (
            0 ===
            e.playlists.filter(function (e) {
              return !!ma(e) && (e.attributes.BANDWIDTH || 0) < i
            }).length
          )
        },
        va = function (e, t) {
          return (
            !((!e && !t) || (!e && t) || (e && !t)) &&
            (e === t ||
              !(!e.id || !t.id || e.id !== t.id) ||
              !(!e.resolvedUri || !t.resolvedUri || e.resolvedUri !== t.resolvedUri) ||
              !(!e.uri || !t.uri || e.uri !== t.uri))
          )
        },
        ya = function (e, t) {
          var i = (e && e.mediaGroups && e.mediaGroups.AUDIO) || {},
            n = !1
          for (var r in i) {
            for (var a in i[r]) if ((n = t(i[r][a]))) break
            if (n) break
          }
          return !!n
        },
        Ta = function (e) {
          if (!e || !e.playlists || !e.playlists.length)
            return ya(e, function (e) {
              return (e.playlists && e.playlists.length) || e.uri
            })
          for (
            var t = function (t) {
                var i = e.playlists[t],
                  n = i.attributes && i.attributes.CODECS
                return (n &&
                  n.split(',').every(function (e) {
                    return (0, k.KL)(e)
                  })) ||
                  ya(e, function (e) {
                    return va(i, e)
                  })
                  ? 'continue'
                  : { v: !1 }
              },
              i = 0;
            i < e.playlists.length;
            i++
          ) {
            var n = t(i)
            if ('continue' !== n && 'object' === typeof n) return n.v
          }
          return !0
        },
        ba = {
          liveEdgeDelay: la,
          duration: da,
          seekable: function (e, t, i) {
            var n = t || 0,
              r = ha(e, t, !0, i)
            return null === r ? ra() : ra(n, r)
          },
          getMediaInfoForTime: function (e) {
            for (
              var t = e.playlist,
                i = e.currentTime,
                n = e.startingSegmentIndex,
                r = e.startingPartIndex,
                a = e.startTime,
                s = e.experimentalExactManifestTimings,
                o = i - a,
                l = aa(t),
                u = 0,
                d = 0;
              d < l.length;
              d++
            ) {
              var c = l[d]
              if (
                n === c.segmentIndex &&
                ('number' !== typeof r || 'number' !== typeof c.partIndex || r === c.partIndex)
              ) {
                u = d
                break
              }
            }
            if (o < 0) {
              if (u > 0)
                for (var h = u - 1; h >= 0; h--) {
                  var p = l[h]
                  if (((o += p.duration), s)) {
                    if (o < 0) continue
                  } else if (o + Xr <= 0) continue
                  return {
                    partIndex: p.partIndex,
                    segmentIndex: p.segmentIndex,
                    startTime:
                      a - ca({ defaultDuration: t.targetDuration, durationList: l, startIndex: u, endIndex: h }),
                  }
                }
              return {
                partIndex: (l[0] && l[0].partIndex) || null,
                segmentIndex: (l[0] && l[0].segmentIndex) || 0,
                startTime: i,
              }
            }
            if (u < 0) {
              for (var f = u; f < 0; f++)
                if ((o -= t.targetDuration) < 0)
                  return {
                    partIndex: (l[0] && l[0].partIndex) || null,
                    segmentIndex: (l[0] && l[0].segmentIndex) || 0,
                    startTime: i,
                  }
              u = 0
            }
            for (var m = u; m < l.length; m++) {
              var g = l[m]
              if (((o -= g.duration), s)) {
                if (o > 0) continue
              } else if (o - Xr >= 0) continue
              return {
                partIndex: g.partIndex,
                segmentIndex: g.segmentIndex,
                startTime: a + ca({ defaultDuration: t.targetDuration, durationList: l, startIndex: u, endIndex: m }),
              }
            }
            return { segmentIndex: l[l.length - 1].segmentIndex, partIndex: l[l.length - 1].partIndex, startTime: i }
          },
          isEnabled: ma,
          isDisabled: function (e) {
            return e.disabled
          },
          isBlacklisted: pa,
          isIncompatible: fa,
          playlistEnd: ha,
          isAes: function (e) {
            for (var t = 0; t < e.segments.length; t++) if (e.segments[t].key) return !0
            return !1
          },
          hasAttribute: ga,
          estimateSegmentRequestTime: function (e, t, i, n) {
            return void 0 === n && (n = 0), ga('BANDWIDTH', i) ? (e * i.attributes.BANDWIDTH - 8 * n) / t : NaN
          },
          isLowestEnabledRendition: _a,
          isAudioOnly: Ta,
          playlistMatch: va,
        },
        Sa = Wr.log,
        ka = function (e, t) {
          return e + '-' + t
        },
        Ca = function (e, t) {
          e.mediaGroups &&
            ['AUDIO', 'SUBTITLES'].forEach(function (i) {
              if (e.mediaGroups[i])
                for (var n in e.mediaGroups[i])
                  for (var r in e.mediaGroups[i][n]) {
                    var a = e.mediaGroups[i][n][r]
                    t(a, i, n, r)
                  }
            })
        },
        Ea = function (e) {
          var t = e.playlist,
            i = e.uri,
            n = e.id
          ;(t.id = n), (t.playlistErrors_ = 0), i && (t.uri = i), (t.attributes = t.attributes || {})
        },
        wa = function (e, t) {
          e.uri = t
          for (var i = 0; i < e.playlists.length; i++)
            if (!e.playlists[i].uri) {
              var n = 'placeholder-uri-' + i
              e.playlists[i].uri = n
            }
          var r = Ta(e)
          Ca(e, function (t, i, n, a) {
            var s = 'placeholder-uri-' + i + '-' + n + '-' + a
            if (!t.playlists || !t.playlists.length) {
              if (r && 'AUDIO' === i && !t.uri)
                for (var o = 0; o < e.playlists.length; o++) {
                  var u = e.playlists[o]
                  if (u.attributes && u.attributes.AUDIO && u.attributes.AUDIO === n) return
                }
              t.playlists = [(0, l.Z)({}, t)]
            }
            t.playlists.forEach(function (t, i) {
              var n = ka(i, s)
              t.uri
                ? (t.resolvedUri = t.resolvedUri || Kr(e.uri, t.uri))
                : ((t.uri = 0 === i ? s : n), (t.resolvedUri = t.uri)),
                (t.id = t.id || n),
                (t.attributes = t.attributes || {}),
                (e.playlists[t.id] = t),
                (e.playlists[t.uri] = t)
            })
          }),
            (function (e) {
              for (var t = e.playlists.length; t--; ) {
                var i = e.playlists[t]
                Ea({ playlist: i, id: ka(t, i.uri) }),
                  (i.resolvedUri = Kr(e.uri, i.uri)),
                  (e.playlists[i.id] = i),
                  (e.playlists[i.uri] = i),
                  i.attributes.BANDWIDTH ||
                    Sa.warn('Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.')
              }
            })(e),
            (function (e) {
              Ca(e, function (t) {
                t.uri && (t.resolvedUri = Kr(e.uri, t.uri))
              })
            })(e)
        },
        xa = Wr.mergeOptions,
        Ia = Wr.EventTarget,
        Pa = function (e, t) {
          if (!e) return t
          var i = xa(e, t)
          if ((e.preloadHints && !t.preloadHints && delete i.preloadHints, e.parts && !t.parts)) delete i.parts
          else if (e.parts && t.parts)
            for (var n = 0; n < t.parts.length; n++) e.parts && e.parts[n] && (i.parts[n] = xa(e.parts[n], t.parts[n]))
          return !e.skipped && t.skipped && (i.skipped = !1), e.preload && !t.preload && (i.preload = !1), i
        },
        Aa = function (e, t) {
          !e.resolvedUri && e.uri && (e.resolvedUri = Kr(t, e.uri)),
            e.key && !e.key.resolvedUri && (e.key.resolvedUri = Kr(t, e.key.uri)),
            e.map && !e.map.resolvedUri && (e.map.resolvedUri = Kr(t, e.map.uri)),
            e.map && e.map.key && !e.map.key.resolvedUri && (e.map.key.resolvedUri = Kr(t, e.map.key.uri)),
            e.parts &&
              e.parts.length &&
              e.parts.forEach(function (e) {
                e.resolvedUri || (e.resolvedUri = Kr(t, e.uri))
              }),
            e.preloadHints &&
              e.preloadHints.length &&
              e.preloadHints.forEach(function (e) {
                e.resolvedUri || (e.resolvedUri = Kr(t, e.uri))
              })
        },
        La = function (e) {
          var t = e.segments || [],
            i = e.preloadSegment
          if (i && i.parts && i.parts.length) {
            if (i.preloadHints)
              for (var n = 0; n < i.preloadHints.length; n++) if ('MAP' === i.preloadHints[n].type) return t
            ;(i.duration = e.targetDuration), (i.preload = !0), t.push(i)
          }
          return t
        },
        Oa = function (e, t) {
          return (
            e === t ||
            (e.segments &&
              t.segments &&
              e.segments.length === t.segments.length &&
              e.endList === t.endList &&
              e.mediaSequence === t.mediaSequence)
          )
        },
        Da = function (e, t, i) {
          void 0 === i && (i = Oa)
          var n = xa(e, {}),
            r = n.playlists[t.id]
          if (!r) return null
          if (i(r, t)) return null
          t.segments = La(t)
          var a = xa(r, t)
          if ((a.preloadSegment && !t.preloadSegment && delete a.preloadSegment, r.segments)) {
            if (t.skip) {
              t.segments = t.segments || []
              for (var s = 0; s < t.skip.skippedSegments; s++) t.segments.unshift({ skipped: !0 })
            }
            a.segments = (function (e, t, i) {
              var n = e.slice(),
                r = t.slice()
              i = i || 0
              for (var a, s = [], o = 0; o < r.length; o++) {
                var l = n[o + i],
                  u = r[o]
                l ? ((a = l.map || a), s.push(Pa(l, u))) : (a && !u.map && (u.map = a), s.push(u))
              }
              return s
            })(r.segments, t.segments, t.mediaSequence - r.mediaSequence)
          }
          a.segments.forEach(function (e) {
            Aa(e, a.resolvedUri)
          })
          for (var o = 0; o < n.playlists.length; o++) n.playlists[o].id === t.id && (n.playlists[o] = a)
          return (
            (n.playlists[t.id] = a),
            (n.playlists[t.uri] = a),
            Ca(e, function (e, i, n, r) {
              if (e.playlists)
                for (var a = 0; a < e.playlists.length; a++) t.id === e.playlists[a].id && (e.playlists[a] = t)
            }),
            n
          )
        },
        Ma = function (e, t) {
          var i = e.segments[e.segments.length - 1],
            n = i && i.parts && i.parts[i.parts.length - 1],
            r = (n && n.duration) || (i && i.duration)
          return t && r ? 1e3 * r : 500 * (e.partTargetDuration || e.targetDuration || 10)
        },
        Ra = (function (e) {
          function t(t, i, n) {
            var r
            if ((void 0 === n && (n = {}), (r = e.call(this) || this), !t))
              throw new Error('A non-empty playlist URL or object is required')
            r.logger_ = Qr('PlaylistLoader')
            var a = n,
              s = a.withCredentials,
              o = void 0 !== s && s,
              l = a.handleManifestRedirects,
              d = void 0 !== l && l
            ;(r.src = t), (r.vhs_ = i), (r.withCredentials = o), (r.handleManifestRedirects = d)
            var c = i.options_
            return (
              (r.customTagParsers = (c && c.customTagParsers) || []),
              (r.customTagMappers = (c && c.customTagMappers) || []),
              (r.experimentalLLHLS = (c && c.experimentalLLHLS) || !1),
              (r.state = 'HAVE_NOTHING'),
              (r.handleMediaupdatetimeout_ = r.handleMediaupdatetimeout_.bind((0, u.Z)(r))),
              r.on('mediaupdatetimeout', r.handleMediaupdatetimeout_),
              r
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.handleMediaupdatetimeout_ = function () {
              var e = this
              if ('HAVE_METADATA' === this.state) {
                var t = this.media(),
                  i = Kr(this.master.uri, t.uri)
                this.experimentalLLHLS &&
                  (i = (function (e, t) {
                    if (t.endList) return e
                    var i = []
                    if (t.serverControl && t.serverControl.canBlockReload) {
                      var n = t.preloadSegment,
                        r = t.mediaSequence + t.segments.length
                      if (n) {
                        var a = n.parts || [],
                          s = oa(t) - 1
                        s > -1 && s !== a.length - 1 && i.push('_HLS_part=' + s), (s > -1 || a.length) && r--
                      }
                      i.unshift('_HLS_msn=' + r)
                    }
                    return (
                      t.serverControl &&
                        t.serverControl.canSkipUntil &&
                        i.unshift('_HLS_skip=' + (t.serverControl.canSkipDateranges ? 'v2' : 'YES')),
                      i.forEach(function (t, i) {
                        e += (0 === i ? '?' : '&') + t
                      }),
                      e
                    )
                  })(i, t)),
                  (this.state = 'HAVE_CURRENT_METADATA'),
                  (this.request = this.vhs_.xhr({ uri: i, withCredentials: this.withCredentials }, function (t, i) {
                    if (e.request)
                      return t
                        ? e.playlistRequestError(e.request, e.media(), 'HAVE_METADATA')
                        : void e.haveMetadata({
                            playlistString: e.request.responseText,
                            url: e.media().uri,
                            id: e.media().id,
                          })
                  }))
              }
            }),
            (i.playlistRequestError = function (e, t, i) {
              var n = t.uri,
                r = t.id
              ;(this.request = null),
                i && (this.state = i),
                (this.error = {
                  playlist: this.master.playlists[r],
                  status: e.status,
                  message: 'HLS playlist request error at URL: ' + n + '.',
                  responseText: e.responseText,
                  code: e.status >= 500 ? 4 : 2,
                }),
                this.trigger('error')
            }),
            (i.parseManifest_ = function (e) {
              var t = this,
                i = e.url
              return (function (e) {
                var t = e.onwarn,
                  i = e.oninfo,
                  n = e.manifestString,
                  r = e.customTagParsers,
                  a = void 0 === r ? [] : r,
                  s = e.customTagMappers,
                  o = void 0 === s ? [] : s,
                  l = e.experimentalLLHLS,
                  u = new S._b()
                t && u.on('warn', t),
                  i && u.on('info', i),
                  a.forEach(function (e) {
                    return u.addParser(e)
                  }),
                  o.forEach(function (e) {
                    return u.addTagMapper(e)
                  }),
                  u.push(n),
                  u.end()
                var d = u.manifest
                if (
                  (l ||
                    ([
                      'preloadSegment',
                      'skip',
                      'serverControl',
                      'renditionReports',
                      'partInf',
                      'partTargetDuration',
                    ].forEach(function (e) {
                      d.hasOwnProperty(e) && delete d[e]
                    }),
                    d.segments &&
                      d.segments.forEach(function (e) {
                        ;['parts', 'preloadHints'].forEach(function (t) {
                          e.hasOwnProperty(t) && delete e[t]
                        })
                      })),
                  !d.targetDuration)
                ) {
                  var c = 10
                  d.segments &&
                    d.segments.length &&
                    (c = d.segments.reduce(function (e, t) {
                      return Math.max(e, t.duration)
                    }, 0)),
                    t && t('manifest has no targetDuration defaulting to ' + c),
                    (d.targetDuration = c)
                }
                var h = sa(d)
                if (h.length && !d.partTargetDuration) {
                  var p = h.reduce(function (e, t) {
                    return Math.max(e, t.duration)
                  }, 0)
                  t &&
                    (t('manifest has no partTargetDuration defaulting to ' + p),
                    Sa.error(
                      'LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.',
                    )),
                    (d.partTargetDuration = p)
                }
                return d
              })({
                onwarn: function (e) {
                  var n = e.message
                  return t.logger_('m3u8-parser warn for ' + i + ': ' + n)
                },
                oninfo: function (e) {
                  var n = e.message
                  return t.logger_('m3u8-parser info for ' + i + ': ' + n)
                },
                manifestString: e.manifestString,
                customTagParsers: this.customTagParsers,
                customTagMappers: this.customTagMappers,
                experimentalLLHLS: this.experimentalLLHLS,
              })
            }),
            (i.haveMetadata = function (e) {
              var t = e.playlistString,
                i = e.playlistObject,
                n = e.url,
                r = e.id
              ;(this.request = null), (this.state = 'HAVE_METADATA')
              var a = i || this.parseManifest_({ url: n, manifestString: t })
              ;(a.lastRequest = Date.now()), Ea({ playlist: a, uri: n, id: r })
              var s = Da(this.master, a)
              ;(this.targetDuration = a.partTargetDuration || a.targetDuration),
                s ? ((this.master = s), (this.media_ = this.master.playlists[r])) : this.trigger('playlistunchanged'),
                this.updateMediaUpdateTimeout_(Ma(this.media(), !!s)),
                this.trigger('loadedplaylist')
            }),
            (i.dispose = function () {
              this.trigger('dispose'),
                this.stopRequest(),
                a().clearTimeout(this.mediaUpdateTimeout),
                a().clearTimeout(this.finalRenditionTimeout),
                this.off()
            }),
            (i.stopRequest = function () {
              if (this.request) {
                var e = this.request
                ;(this.request = null), (e.onreadystatechange = null), e.abort()
              }
            }),
            (i.media = function (e, t) {
              var i = this
              if (!e) return this.media_
              if ('HAVE_NOTHING' === this.state) throw new Error('Cannot switch media playlist from ' + this.state)
              if ('string' === typeof e) {
                if (!this.master.playlists[e]) throw new Error('Unknown playlist URI: ' + e)
                e = this.master.playlists[e]
              }
              if ((a().clearTimeout(this.finalRenditionTimeout), t)) {
                var n = ((e.partTargetDuration || e.targetDuration) / 2) * 1e3 || 5e3
                this.finalRenditionTimeout = a().setTimeout(this.media.bind(this, e, !1), n)
              } else {
                var r = this.state,
                  s = !this.media_ || e.id !== this.media_.id,
                  o = this.master.playlists[e.id]
                if ((o && o.endList) || (e.endList && e.segments.length))
                  return (
                    this.request &&
                      ((this.request.onreadystatechange = null), this.request.abort(), (this.request = null)),
                    (this.state = 'HAVE_METADATA'),
                    (this.media_ = e),
                    void (
                      s &&
                      (this.trigger('mediachanging'),
                      'HAVE_MASTER' === r ? this.trigger('loadedmetadata') : this.trigger('mediachange'))
                    )
                  )
                if ((this.updateMediaUpdateTimeout_(Ma(e, !0)), s)) {
                  if (((this.state = 'SWITCHING_MEDIA'), this.request)) {
                    if (e.resolvedUri === this.request.url) return
                    ;(this.request.onreadystatechange = null), this.request.abort(), (this.request = null)
                  }
                  this.media_ && this.trigger('mediachanging'),
                    (this.request = this.vhs_.xhr(
                      { uri: e.resolvedUri, withCredentials: this.withCredentials },
                      function (t, n) {
                        if (i.request) {
                          if (
                            ((e.lastRequest = Date.now()),
                            (e.resolvedUri = Zr(i.handleManifestRedirects, e.resolvedUri, n)),
                            t)
                          )
                            return i.playlistRequestError(i.request, e, r)
                          i.haveMetadata({ playlistString: n.responseText, url: e.uri, id: e.id }),
                            'HAVE_MASTER' === r ? i.trigger('loadedmetadata') : i.trigger('mediachange')
                        }
                      },
                    ))
                }
              }
            }),
            (i.pause = function () {
              this.mediaUpdateTimeout && (a().clearTimeout(this.mediaUpdateTimeout), (this.mediaUpdateTimeout = null)),
                this.stopRequest(),
                'HAVE_NOTHING' === this.state && (this.started = !1),
                'SWITCHING_MEDIA' === this.state
                  ? this.media_
                    ? (this.state = 'HAVE_METADATA')
                    : (this.state = 'HAVE_MASTER')
                  : 'HAVE_CURRENT_METADATA' === this.state && (this.state = 'HAVE_METADATA')
            }),
            (i.load = function (e) {
              var t = this
              this.mediaUpdateTimeout && (a().clearTimeout(this.mediaUpdateTimeout), (this.mediaUpdateTimeout = null))
              var i = this.media()
              if (e) {
                var n = i ? ((i.partTargetDuration || i.targetDuration) / 2) * 1e3 : 5e3
                this.mediaUpdateTimeout = a().setTimeout(function () {
                  ;(t.mediaUpdateTimeout = null), t.load()
                }, n)
              } else
                this.started
                  ? i && !i.endList
                    ? this.trigger('mediaupdatetimeout')
                    : this.trigger('loadedplaylist')
                  : this.start()
            }),
            (i.updateMediaUpdateTimeout_ = function (e) {
              var t = this
              this.mediaUpdateTimeout && (a().clearTimeout(this.mediaUpdateTimeout), (this.mediaUpdateTimeout = null)),
                this.media() &&
                  !this.media().endList &&
                  (this.mediaUpdateTimeout = a().setTimeout(function () {
                    ;(t.mediaUpdateTimeout = null), t.trigger('mediaupdatetimeout'), t.updateMediaUpdateTimeout_(e)
                  }, e))
            }),
            (i.start = function () {
              var e = this
              if (((this.started = !0), 'object' === typeof this.src))
                return (
                  this.src.uri || (this.src.uri = a().location.href),
                  (this.src.resolvedUri = this.src.uri),
                  void setTimeout(function () {
                    e.setupInitialPlaylist(e.src)
                  }, 0)
                )
              this.request = this.vhs_.xhr({ uri: this.src, withCredentials: this.withCredentials }, function (t, i) {
                if (e.request) {
                  if (((e.request = null), t))
                    return (
                      (e.error = {
                        status: i.status,
                        message: 'HLS playlist request error at URL: ' + e.src + '.',
                        responseText: i.responseText,
                        code: 2,
                      }),
                      'HAVE_NOTHING' === e.state && (e.started = !1),
                      e.trigger('error')
                    )
                  e.src = Zr(e.handleManifestRedirects, e.src, i)
                  var n = e.parseManifest_({ manifestString: i.responseText, url: e.src })
                  e.setupInitialPlaylist(n)
                }
              })
            }),
            (i.srcUri = function () {
              return 'string' === typeof this.src ? this.src : this.src.uri
            }),
            (i.setupInitialPlaylist = function (e) {
              if (((this.state = 'HAVE_MASTER'), e.playlists))
                return (
                  (this.master = e),
                  wa(this.master, this.srcUri()),
                  e.playlists.forEach(function (e) {
                    ;(e.segments = La(e)),
                      e.segments.forEach(function (t) {
                        Aa(t, e.resolvedUri)
                      })
                  }),
                  this.trigger('loadedplaylist'),
                  void (this.request || this.media(this.master.playlists[0]))
                )
              var t = this.srcUri() || a().location.href
              ;(this.master = (function (e, t) {
                var i = ka(0, t),
                  n = {
                    mediaGroups: { AUDIO: {}, VIDEO: {}, 'CLOSED-CAPTIONS': {}, SUBTITLES: {} },
                    uri: a().location.href,
                    resolvedUri: a().location.href,
                    playlists: [{ uri: t, id: i, resolvedUri: t, attributes: {} }],
                  }
                return (n.playlists[i] = n.playlists[0]), (n.playlists[t] = n.playlists[0]), n
              })(0, t)),
                this.haveMetadata({ playlistObject: e, url: t, id: this.master.playlists[0].id }),
                this.trigger('loadedmetadata')
            }),
            t
          )
        })(Ia),
        Ua = Wr.xhr,
        Ba = Wr.mergeOptions,
        Na = function (e, t, i, n) {
          var r = 'arraybuffer' === e.responseType ? e.response : e.responseText
          !t &&
            r &&
            ((e.responseTime = Date.now()),
            (e.roundTripTime = e.responseTime - e.requestTime),
            (e.bytesReceived = r.byteLength || r.length),
            e.bandwidth || (e.bandwidth = Math.floor((e.bytesReceived / e.roundTripTime) * 8 * 1e3))),
            i.headers && (e.responseHeaders = i.headers),
            t && 'ETIMEDOUT' === t.code && (e.timedout = !0),
            t ||
              e.aborted ||
              200 === i.statusCode ||
              206 === i.statusCode ||
              0 === i.statusCode ||
              (t = new Error('XHR Failed with a response of: ' + (e && (r || e.responseText)))),
            n(t, e)
        },
        Fa = function () {
          var e = function e(t, i) {
            t = Ba({ timeout: 45e3 }, t)
            var n = e.beforeRequest || Wr.Vhs.xhr.beforeRequest
            if (n && 'function' === typeof n) {
              var r = n(t)
              r && (t = r)
            }
            var a = (!0 === Wr.Vhs.xhr.original ? Ua : Wr.Vhs.xhr)(t, function (e, t) {
                return Na(a, e, t, i)
              }),
              s = a.abort
            return (
              (a.abort = function () {
                return (a.aborted = !0), s.apply(a, arguments)
              }),
              (a.uri = t.uri),
              (a.requestTime = Date.now()),
              a
            )
          }
          return (e.original = !0), e
        },
        ja = function (e) {
          var t = {}
          return (
            e.byterange &&
              (t.Range = (function (e) {
                var t = e.offset + e.length - 1
                return 'bytes=' + e.offset + '-' + t
              })(e.byterange)),
            t
          )
        },
        Ha = function (e, t) {
          return e.start(t) + '-' + e.end(t)
        },
        qa = function (e, t) {
          var i = e.toString(16)
          return '00'.substring(0, 2 - i.length) + i + (t % 2 ? ' ' : '')
        },
        Va = function (e) {
          return e >= 32 && e < 126 ? String.fromCharCode(e) : '.'
        },
        Wa = function (e) {
          var t = {}
          return (
            Object.keys(e).forEach(function (i) {
              var n = e[i]
              ArrayBuffer.isView(n)
                ? (t[i] = { bytes: n.buffer, byteOffset: n.byteOffset, byteLength: n.byteLength })
                : (t[i] = n)
            }),
            t
          )
        },
        za = function (e) {
          var t = e.byterange || { length: 1 / 0, offset: 0 }
          return [t.length, t.offset, e.resolvedUri].join(',')
        },
        Ga = function (e) {
          return e.resolvedUri
        },
        Ka = function (e) {
          for (var t = Array.prototype.slice.call(e), i = 16, n = '', r = 0; r < t.length / i; r++)
            n +=
              t
                .slice(r * i, r * i + i)
                .map(qa)
                .join('') +
              ' ' +
              t
                .slice(r * i, r * i + i)
                .map(Va)
                .join('') +
              '\n'
          return n
        },
        Za = Object.freeze({
          __proto__: null,
          createTransferableMessage: Wa,
          initSegmentId: za,
          segmentKeyId: Ga,
          hexDump: Ka,
          tagDump: function (e) {
            var t = e.bytes
            return Ka(t)
          },
          textRanges: function (e) {
            var t,
              i = ''
            for (t = 0; t < e.length; t++) i += Ha(e, t) + ' '
            return i
          },
        }),
        Qa = function (e) {
          var t = e.playlist,
            i = e.time,
            n = void 0 === i ? void 0 : i,
            r = e.callback
          if (!r) throw new Error('getProgramTime: callback must be provided')
          if (!t || void 0 === n) return r({ message: 'getProgramTime: playlist and time must be provided' })
          var a = (function (e, t) {
            if (!t || !t.segments || 0 === t.segments.length) return null
            for (
              var i, n = 0, r = 0;
              r < t.segments.length &&
              !(
                e <=
                (n = (i = t.segments[r]).videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationEnd : n + i.duration)
              );
              r++
            );
            var a = t.segments[t.segments.length - 1]
            if (a.videoTimingInfo && a.videoTimingInfo.transmuxedPresentationEnd < e) return null
            if (e > n) {
              if (e > n + 0.25 * a.duration) return null
              i = a
            }
            return {
              segment: i,
              estimatedStart: i.videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationStart : n - i.duration,
              type: i.videoTimingInfo ? 'accurate' : 'estimate',
            }
          })(n, t)
          if (!a) return r({ message: 'valid programTime was not found' })
          if ('estimate' === a.type)
            return r({
              message: 'Accurate programTime could not be determined. Please seek to e.seekTime and try again',
              seekTime: a.estimatedStart,
            })
          var s = { mediaSeconds: n },
            o = (function (e, t) {
              if (!t.dateTimeObject) return null
              var i = t.videoTimingInfo.transmuxerPrependedSeconds,
                n = e - (t.videoTimingInfo.transmuxedPresentationStart + i)
              return new Date(t.dateTimeObject.getTime() + 1e3 * n)
            })(n, a.segment)
          return o && (s.programDateTime = o.toISOString()), r(null, s)
        },
        Xa = function e(t) {
          var i = t.programTime,
            n = t.playlist,
            r = t.retryCount,
            a = void 0 === r ? 2 : r,
            s = t.seekTo,
            o = t.pauseAfterSeek,
            l = void 0 === o || o,
            u = t.tech,
            d = t.callback
          if (!d) throw new Error('seekToProgramTime: callback must be provided')
          if ('undefined' === typeof i || !n || !s)
            return d({ message: 'seekToProgramTime: programTime, seekTo and playlist must be provided' })
          if (!n.endList && !u.hasStarted_)
            return d({ message: 'player must be playing a live stream to start buffering' })
          if (
            !(function (e) {
              if (!e.segments || 0 === e.segments.length) return !1
              for (var t = 0; t < e.segments.length; t++) if (!e.segments[t].dateTimeObject) return !1
              return !0
            })(n)
          )
            return d({ message: 'programDateTime tags must be provided in the manifest ' + n.resolvedUri })
          var c = (function (e, t) {
            var i
            try {
              i = new Date(e)
            } catch (u) {
              return null
            }
            if (!t || !t.segments || 0 === t.segments.length) return null
            var n = t.segments[0]
            if (i < n.dateTimeObject) return null
            for (
              var r = 0;
              r < t.segments.length - 1 && ((n = t.segments[r]), !(i < t.segments[r + 1].dateTimeObject));
              r++
            );
            var a,
              s = t.segments[t.segments.length - 1],
              o = s.dateTimeObject,
              l = s.videoTimingInfo
                ? (a = s.videoTimingInfo).transmuxedPresentationEnd -
                  a.transmuxedPresentationStart -
                  a.transmuxerPrependedSeconds
                : s.duration + 0.25 * s.duration
            return i > new Date(o.getTime() + 1e3 * l)
              ? null
              : (i > o && (n = s),
                {
                  segment: n,
                  estimatedStart: n.videoTimingInfo
                    ? n.videoTimingInfo.transmuxedPresentationStart
                    : ba.duration(t, t.mediaSequence + t.segments.indexOf(n)),
                  type: n.videoTimingInfo ? 'accurate' : 'estimate',
                })
          })(i, n)
          if (!c) return d({ message: i + ' was not found in the stream' })
          var h = c.segment,
            p = (function (e, t) {
              var i, n
              try {
                ;(i = new Date(e)), (n = new Date(t))
              } catch (a) {}
              var r = i.getTime()
              return (n.getTime() - r) / 1e3
            })(h.dateTimeObject, i)
          if ('estimate' === c.type)
            return 0 === a
              ? d({ message: i + ' is not buffered yet. Try again' })
              : (s(c.estimatedStart + p),
                void u.one('seeked', function () {
                  e({
                    programTime: i,
                    playlist: n,
                    retryCount: a - 1,
                    seekTo: s,
                    pauseAfterSeek: l,
                    tech: u,
                    callback: d,
                  })
                }))
          var f = h.start + p
          u.one('seeked', function () {
            return d(null, u.currentTime())
          }),
            l && u.pause(),
            s(f)
        },
        Ya = function (e, t) {
          if (4 === e.readyState) return t()
        },
        $a = Wr.EventTarget,
        Ja = Wr.mergeOptions,
        es = function (e, t) {
          if (!Oa(e, t)) return !1
          if (e.sidx && t.sidx && (e.sidx.offset !== t.sidx.offset || e.sidx.length !== t.sidx.length)) return !1
          if ((!e.sidx && t.sidx) || (e.sidx && !t.sidx)) return !1
          if ((e.segments && !t.segments) || (!e.segments && t.segments)) return !1
          if (!e.segments && !t.segments) return !0
          for (var i = 0; i < e.segments.length; i++) {
            var n = e.segments[i],
              r = t.segments[i]
            if (n.uri !== r.uri) return !1
            if (n.byterange || r.byterange) {
              var a = n.byterange,
                s = r.byterange
              if ((a && !s) || (!a && s)) return !1
              if (a.offset !== s.offset || a.length !== s.length) return !1
            }
          }
          return !0
        },
        ts = function (e, t) {
          var i,
            n,
            r = {}
          for (var a in e) {
            var s = e[a].sidx
            if (s) {
              var o = (0, E.mm)(s)
              if (!t[o]) break
              var l = t[o].sidxInfo
              ;(i = l),
                (n = s),
                (Boolean(!i.map && !n.map) ||
                  Boolean(
                    i.map &&
                      n.map &&
                      i.map.byterange.offset === n.map.byterange.offset &&
                      i.map.byterange.length === n.map.byterange.length,
                  )) &&
                  i.uri === n.uri &&
                  i.byterange.offset === n.byterange.offset &&
                  i.byterange.length === n.byterange.length &&
                  (r[o] = t[o])
            }
          }
          return r
        },
        is = (function (e) {
          function t(t, i, n, r) {
            var a
            void 0 === n && (n = {}),
              ((a = e.call(this) || this).masterPlaylistLoader_ = r || (0, u.Z)(a)),
              r || (a.isMaster_ = !0)
            var s = n,
              o = s.withCredentials,
              l = void 0 !== o && o,
              d = s.handleManifestRedirects,
              c = void 0 !== d && d
            if (((a.vhs_ = i), (a.withCredentials = l), (a.handleManifestRedirects = c), !t))
              throw new Error('A non-empty playlist URL or object is required')
            return (
              a.on('minimumUpdatePeriod', function () {
                a.refreshXml_()
              }),
              a.on('mediaupdatetimeout', function () {
                a.refreshMedia_(a.media().id)
              }),
              (a.state = 'HAVE_NOTHING'),
              (a.loadedPlaylists_ = {}),
              (a.logger_ = Qr('DashPlaylistLoader')),
              a.isMaster_
                ? ((a.masterPlaylistLoader_.srcUrl = t), (a.masterPlaylistLoader_.sidxMapping_ = {}))
                : (a.childPlaylist_ = t),
              a
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.requestErrored_ = function (e, t, i) {
              return (
                !this.request ||
                ((this.request = null),
                e
                  ? ((this.error =
                      'object' !== typeof e || e instanceof Error
                        ? {
                            status: t.status,
                            message: 'DASH request error at URL: ' + t.uri,
                            response: t.response,
                            code: 2,
                          }
                        : e),
                    i && (this.state = i),
                    this.trigger('error'),
                    !0)
                  : void 0)
              )
            }),
            (i.addSidxSegments_ = function (e, t, i) {
              var n = this,
                r = e.sidx && (0, E.mm)(e.sidx)
              if (e.sidx && r && !this.masterPlaylistLoader_.sidxMapping_[r]) {
                var s = Zr(this.handleManifestRedirects, e.sidx.resolvedUri),
                  o = function (a, s) {
                    if (!n.requestErrored_(a, s, t)) {
                      var o,
                        l = n.masterPlaylistLoader_.sidxMapping_
                      try {
                        o = x()((0, A.Ki)(s.response).subarray(8))
                      } catch (u) {
                        return void n.requestErrored_(u, s, t)
                      }
                      return (l[r] = { sidxInfo: e.sidx, sidx: o }), (0, E.jp)(e, o, e.sidx.resolvedUri), i(!0)
                    }
                  }
                this.request = (function (e, t, i) {
                  var n,
                    r = [],
                    a = !1,
                    s = function (e, t, n, r) {
                      return t.abort(), (a = !0), i(e, t, n, r)
                    },
                    o = function (e, t) {
                      if (!a) {
                        if (e) return s(e, t, '', r)
                        var i = t.responseText.substring((r && r.byteLength) || 0, t.responseText.length)
                        if (
                          ((r = (0, A.lx)(r, (0, A.qX)(i, !0))),
                          (n = n || (0, I.c)(r)),
                          r.length < 10 || (n && r.length < n + 2))
                        )
                          return Ya(t, function () {
                            return s(e, t, '', r)
                          })
                        var o = (0, P.Xm)(r)
                        return ('ts' === o && r.length < 188) || (!o && r.length < 376)
                          ? Ya(t, function () {
                              return s(e, t, '', r)
                            })
                          : s(null, t, o, r)
                      }
                    },
                    l = t(
                      {
                        uri: e,
                        beforeSend: function (e) {
                          e.overrideMimeType('text/plain; charset=x-user-defined'),
                            e.addEventListener('progress', function (t) {
                              return t.total, t.loaded, Na(e, null, { statusCode: e.status }, o)
                            })
                        },
                      },
                      function (e, t) {
                        return Na(l, e, t, o)
                      },
                    )
                  return l
                })(s, this.vhs_.xhr, function (t, i, r, a) {
                  if (t) return o(t, i)
                  if (!r || 'mp4' !== r)
                    return o(
                      {
                        status: i.status,
                        message: 'Unsupported ' + (r || 'unknown') + ' container type for sidx segment at URL: ' + s,
                        response: '',
                        playlist: e,
                        internal: !0,
                        blacklistDuration: 1 / 0,
                        code: 2,
                      },
                      i,
                    )
                  var l = e.sidx.byterange,
                    u = l.offset,
                    d = l.length
                  if (a.length >= d + u) return o(t, { response: a.subarray(u, u + d), status: i.status, uri: i.uri })
                  n.request = n.vhs_.xhr(
                    { uri: s, responseType: 'arraybuffer', headers: ja({ byterange: e.sidx.byterange }) },
                    o,
                  )
                })
              } else
                this.mediaRequest_ = a().setTimeout(function () {
                  return i(!1)
                }, 0)
            }),
            (i.dispose = function () {
              this.trigger('dispose'),
                this.stopRequest(),
                (this.loadedPlaylists_ = {}),
                a().clearTimeout(this.minimumUpdatePeriodTimeout_),
                a().clearTimeout(this.mediaRequest_),
                a().clearTimeout(this.mediaUpdateTimeout),
                (this.mediaUpdateTimeout = null),
                (this.mediaRequest_ = null),
                (this.minimumUpdatePeriodTimeout_ = null),
                this.masterPlaylistLoader_.createMupOnMedia_ &&
                  (this.off('loadedmetadata', this.masterPlaylistLoader_.createMupOnMedia_),
                  (this.masterPlaylistLoader_.createMupOnMedia_ = null)),
                this.off()
            }),
            (i.hasPendingRequest = function () {
              return this.request || this.mediaRequest_
            }),
            (i.stopRequest = function () {
              if (this.request) {
                var e = this.request
                ;(this.request = null), (e.onreadystatechange = null), e.abort()
              }
            }),
            (i.media = function (e) {
              var t = this
              if (!e) return this.media_
              if ('HAVE_NOTHING' === this.state) throw new Error('Cannot switch media playlist from ' + this.state)
              var i = this.state
              if ('string' === typeof e) {
                if (!this.masterPlaylistLoader_.master.playlists[e]) throw new Error('Unknown playlist URI: ' + e)
                e = this.masterPlaylistLoader_.master.playlists[e]
              }
              var n = !this.media_ || e.id !== this.media_.id
              if (n && this.loadedPlaylists_[e.id] && this.loadedPlaylists_[e.id].endList)
                return (
                  (this.state = 'HAVE_METADATA'),
                  (this.media_ = e),
                  void (n && (this.trigger('mediachanging'), this.trigger('mediachange')))
                )
              n &&
                (this.media_ && this.trigger('mediachanging'),
                this.addSidxSegments_(e, i, function (n) {
                  t.haveMetadata({ startingState: i, playlist: e })
                }))
            }),
            (i.haveMetadata = function (e) {
              var t = e.startingState,
                i = e.playlist
              ;(this.state = 'HAVE_METADATA'),
                (this.loadedPlaylists_[i.id] = i),
                (this.mediaRequest_ = null),
                this.refreshMedia_(i.id),
                'HAVE_MASTER' === t ? this.trigger('loadedmetadata') : this.trigger('mediachange')
            }),
            (i.pause = function () {
              this.masterPlaylistLoader_.createMupOnMedia_ &&
                (this.off('loadedmetadata', this.masterPlaylistLoader_.createMupOnMedia_),
                (this.masterPlaylistLoader_.createMupOnMedia_ = null)),
                this.stopRequest(),
                a().clearTimeout(this.mediaUpdateTimeout),
                (this.mediaUpdateTimeout = null),
                this.isMaster_ &&
                  (a().clearTimeout(this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_),
                  (this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_ = null)),
                'HAVE_NOTHING' === this.state && (this.started = !1)
            }),
            (i.load = function (e) {
              var t = this
              a().clearTimeout(this.mediaUpdateTimeout), (this.mediaUpdateTimeout = null)
              var i = this.media()
              if (e) {
                var n = i ? (i.targetDuration / 2) * 1e3 : 5e3
                this.mediaUpdateTimeout = a().setTimeout(function () {
                  return t.load()
                }, n)
              } else
                this.started
                  ? i && !i.endList
                    ? (this.isMaster_ &&
                        !this.minimumUpdatePeriodTimeout_ &&
                        (this.trigger('minimumUpdatePeriod'), this.updateMinimumUpdatePeriodTimeout_()),
                      this.trigger('mediaupdatetimeout'))
                    : this.trigger('loadedplaylist')
                  : this.start()
            }),
            (i.start = function () {
              var e = this
              ;(this.started = !0),
                this.isMaster_
                  ? this.requestMaster_(function (t, i) {
                      e.haveMaster_(),
                        e.hasPendingRequest() || e.media_ || e.media(e.masterPlaylistLoader_.master.playlists[0])
                    })
                  : (this.mediaRequest_ = a().setTimeout(function () {
                      return e.haveMaster_()
                    }, 0))
            }),
            (i.requestMaster_ = function (e) {
              var t = this
              this.request = this.vhs_.xhr(
                { uri: this.masterPlaylistLoader_.srcUrl, withCredentials: this.withCredentials },
                function (i, n) {
                  if (!t.requestErrored_(i, n)) {
                    var r = n.responseText !== t.masterPlaylistLoader_.masterXml_
                    return (
                      (t.masterPlaylistLoader_.masterXml_ = n.responseText),
                      n.responseHeaders && n.responseHeaders.date
                        ? (t.masterLoaded_ = Date.parse(n.responseHeaders.date))
                        : (t.masterLoaded_ = Date.now()),
                      (t.masterPlaylistLoader_.srcUrl = Zr(
                        t.handleManifestRedirects,
                        t.masterPlaylistLoader_.srcUrl,
                        n,
                      )),
                      r
                        ? (t.handleMaster_(),
                          void t.syncClientServerClock_(function () {
                            return e(n, r)
                          }))
                        : e(n, r)
                    )
                  }
                  'HAVE_NOTHING' === t.state && (t.started = !1)
                },
              )
            }),
            (i.syncClientServerClock_ = function (e) {
              var t = this,
                i = (0, E.LG)(this.masterPlaylistLoader_.masterXml_)
              return null === i
                ? ((this.masterPlaylistLoader_.clientOffset_ = this.masterLoaded_ - Date.now()), e())
                : 'DIRECT' === i.method
                ? ((this.masterPlaylistLoader_.clientOffset_ = i.value - Date.now()), e())
                : void (this.request = this.vhs_.xhr(
                    {
                      uri: Kr(this.masterPlaylistLoader_.srcUrl, i.value),
                      method: i.method,
                      withCredentials: this.withCredentials,
                    },
                    function (n, r) {
                      if (t.request) {
                        if (n) return (t.masterPlaylistLoader_.clientOffset_ = t.masterLoaded_ - Date.now()), e()
                        var a
                        ;(a =
                          'HEAD' === i.method
                            ? r.responseHeaders && r.responseHeaders.date
                              ? Date.parse(r.responseHeaders.date)
                              : t.masterLoaded_
                            : Date.parse(r.responseText)),
                          (t.masterPlaylistLoader_.clientOffset_ = a - Date.now()),
                          e()
                      }
                    },
                  ))
            }),
            (i.haveMaster_ = function () {
              ;(this.state = 'HAVE_MASTER'),
                this.isMaster_ ? this.trigger('loadedplaylist') : this.media_ || this.media(this.childPlaylist_)
            }),
            (i.handleMaster_ = function () {
              this.mediaRequest_ = null
              var e = (function (e) {
                  var t = e.masterXml,
                    i = e.srcUrl,
                    n = e.clientOffset,
                    r = e.sidxMapping,
                    a = (0, E.Qc)(t, { manifestUri: i, clientOffset: n, sidxMapping: r })
                  return wa(a, i), a
                })({
                  masterXml: this.masterPlaylistLoader_.masterXml_,
                  srcUrl: this.masterPlaylistLoader_.srcUrl,
                  clientOffset: this.masterPlaylistLoader_.clientOffset_,
                  sidxMapping: this.masterPlaylistLoader_.sidxMapping_,
                }),
                t = this.masterPlaylistLoader_.master
              t &&
                (e = (function (e, t, i) {
                  for (
                    var n = !0, r = Ja(e, { duration: t.duration, minimumUpdatePeriod: t.minimumUpdatePeriod }), a = 0;
                    a < t.playlists.length;
                    a++
                  ) {
                    var s = t.playlists[a]
                    if (s.sidx) {
                      var o = (0, E.mm)(s.sidx)
                      i && i[o] && i[o].sidx && (0, E.jp)(s, i[o].sidx, s.sidx.resolvedUri)
                    }
                    var l = Da(r, s, es)
                    l && ((r = l), (n = !1))
                  }
                  return (
                    Ca(t, function (e, t, i, a) {
                      if (e.playlists && e.playlists.length) {
                        var s = e.playlists[0].id,
                          o = Da(r, e.playlists[0], es)
                        o && (((r = o).mediaGroups[t][i][a].playlists[0] = r.playlists[s]), (n = !1))
                      }
                    }),
                    t.minimumUpdatePeriod !== e.minimumUpdatePeriod && (n = !1),
                    n ? null : r
                  )
                })(t, e, this.masterPlaylistLoader_.sidxMapping_)),
                (this.masterPlaylistLoader_.master = e || t)
              var i = this.masterPlaylistLoader_.master.locations && this.masterPlaylistLoader_.master.locations[0]
              return (
                i && i !== this.masterPlaylistLoader_.srcUrl && (this.masterPlaylistLoader_.srcUrl = i),
                (!t || (e && e.minimumUpdatePeriod !== t.minimumUpdatePeriod)) &&
                  this.updateMinimumUpdatePeriodTimeout_(),
                Boolean(e)
              )
            }),
            (i.updateMinimumUpdatePeriodTimeout_ = function () {
              var e = this.masterPlaylistLoader_
              e.createMupOnMedia_ && (e.off('loadedmetadata', e.createMupOnMedia_), (e.createMupOnMedia_ = null)),
                e.minimumUpdatePeriodTimeout_ &&
                  (a().clearTimeout(e.minimumUpdatePeriodTimeout_), (e.minimumUpdatePeriodTimeout_ = null))
              var t = e.master && e.master.minimumUpdatePeriod
              0 === t &&
                (e.media()
                  ? (t = 1e3 * e.media().targetDuration)
                  : ((e.createMupOnMedia_ = e.updateMinimumUpdatePeriodTimeout_),
                    e.one('loadedmetadata', e.createMupOnMedia_))),
                'number' !== typeof t || t <= 0
                  ? t < 0 && this.logger_('found invalid minimumUpdatePeriod of ' + t + ', not setting a timeout')
                  : this.createMUPTimeout_(t)
            }),
            (i.createMUPTimeout_ = function (e) {
              var t = this.masterPlaylistLoader_
              t.minimumUpdatePeriodTimeout_ = a().setTimeout(function () {
                ;(t.minimumUpdatePeriodTimeout_ = null), t.trigger('minimumUpdatePeriod'), t.createMUPTimeout_(e)
              }, e)
            }),
            (i.refreshXml_ = function () {
              var e = this
              this.requestMaster_(function (t, i) {
                i &&
                  (e.media_ && (e.media_ = e.masterPlaylistLoader_.master.playlists[e.media_.id]),
                  (e.masterPlaylistLoader_.sidxMapping_ = (function (e, t) {
                    var i = ts(e.playlists, t)
                    return (
                      Ca(e, function (e, n, r, a) {
                        if (e.playlists && e.playlists.length) {
                          var s = e.playlists
                          i = Ja(i, ts(s, t))
                        }
                      }),
                      i
                    )
                  })(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.sidxMapping_)),
                  e.addSidxSegments_(e.media(), e.state, function (t) {
                    e.refreshMedia_(e.media().id)
                  }))
              })
            }),
            (i.refreshMedia_ = function (e) {
              var t = this
              if (!e) throw new Error('refreshMedia_ must take a media id')
              this.media_ && this.isMaster_ && this.handleMaster_()
              var i = this.masterPlaylistLoader_.master.playlists,
                n = !this.media_ || this.media_ !== i[e]
              if ((n ? (this.media_ = i[e]) : this.trigger('playlistunchanged'), !this.mediaUpdateTimeout)) {
                !(function e() {
                  t.media().endList ||
                    (t.mediaUpdateTimeout = a().setTimeout(function () {
                      t.trigger('mediaupdatetimeout'), e()
                    }, Ma(t.media(), Boolean(n))))
                })()
              }
              this.trigger('loadedplaylist')
            }),
            t
          )
        })($a),
        ns = {
          GOAL_BUFFER_LENGTH: 30,
          MAX_GOAL_BUFFER_LENGTH: 60,
          BACK_BUFFER_LENGTH: 30,
          GOAL_BUFFER_LENGTH_RATE: 1,
          INITIAL_BANDWIDTH: 4194304,
          BANDWIDTH_VARIANCE: 1.2,
          BUFFER_LOW_WATER_LINE: 0,
          MAX_BUFFER_LOW_WATER_LINE: 30,
          EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16,
          BUFFER_LOW_WATER_LINE_RATE: 1,
          BUFFER_HIGH_WATER_LINE: 30,
        },
        rs = function (e) {
          return (e.on = e.addEventListener), (e.off = e.removeEventListener), e
        },
        as = function (e) {
          return function () {
            var t = (function (e) {
                try {
                  return URL.createObjectURL(new Blob([e], { type: 'application/javascript' }))
                } catch (i) {
                  var t = new BlobBuilder()
                  return t.append(e), URL.createObjectURL(t.getBlob())
                }
              })(e),
              i = rs(new Worker(t))
            i.objURL = t
            var n = i.terminate
            return (
              (i.on = i.addEventListener),
              (i.off = i.removeEventListener),
              (i.terminate = function () {
                return URL.revokeObjectURL(t), n.call(this)
              }),
              i
            )
          }
        },
        ss = function (e) {
          return 'var browserWorkerPolyFill = ' + rs.toString() + ';\nbrowserWorkerPolyFill(self);\n' + e
        },
        os = function (e) {
          return e
            .toString()
            .replace(/^function.+?{/, '')
            .slice(0, -1)
        },
        ls = as(
          ss(
            os(function () {
              var e = function () {
                this.init = function () {
                  var e = {}
                  ;(this.on = function (t, i) {
                    e[t] || (e[t] = []), (e[t] = e[t].concat(i))
                  }),
                    (this.off = function (t, i) {
                      var n
                      return !!e[t] && ((n = e[t].indexOf(i)), (e[t] = e[t].slice()), e[t].splice(n, 1), n > -1)
                    }),
                    (this.trigger = function (t) {
                      var i, n, r, a
                      if ((i = e[t]))
                        if (2 === arguments.length) for (r = i.length, n = 0; n < r; ++n) i[n].call(this, arguments[1])
                        else {
                          for (a = [], n = arguments.length, n = 1; n < arguments.length; ++n) a.push(arguments[n])
                          for (r = i.length, n = 0; n < r; ++n) i[n].apply(this, a)
                        }
                    }),
                    (this.dispose = function () {
                      e = {}
                    })
                }
              }
              ;(e.prototype.pipe = function (e) {
                return (
                  this.on('data', function (t) {
                    e.push(t)
                  }),
                  this.on('done', function (t) {
                    e.flush(t)
                  }),
                  this.on('partialdone', function (t) {
                    e.partialFlush(t)
                  }),
                  this.on('endedtimeline', function (t) {
                    e.endTimeline(t)
                  }),
                  this.on('reset', function (t) {
                    e.reset(t)
                  }),
                  e
                )
              }),
                (e.prototype.push = function (e) {
                  this.trigger('data', e)
                }),
                (e.prototype.flush = function (e) {
                  this.trigger('done', e)
                }),
                (e.prototype.partialFlush = function (e) {
                  this.trigger('partialdone', e)
                }),
                (e.prototype.endTimeline = function (e) {
                  this.trigger('endedtimeline', e)
                }),
                (e.prototype.reset = function (e) {
                  this.trigger('reset', e)
                })
              var t,
                i,
                n,
                r,
                a,
                s,
                o,
                l,
                u,
                d,
                c,
                h,
                p,
                f,
                m,
                g,
                _,
                v,
                y,
                T,
                b,
                S,
                k,
                C,
                E,
                w,
                x,
                I,
                P,
                A,
                L,
                O,
                D,
                M,
                R,
                U,
                B = e,
                N = Math.pow(2, 32) - 1
              !(function () {
                var e
                if (
                  ((k = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    smhd: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    styp: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                  }),
                  'undefined' !== typeof Uint8Array)
                ) {
                  for (e in k)
                    k.hasOwnProperty(e) && (k[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)])
                  ;(C = new Uint8Array(['i'.charCodeAt(0), 's'.charCodeAt(0), 'o'.charCodeAt(0), 'm'.charCodeAt(0)])),
                    (w = new Uint8Array(['a'.charCodeAt(0), 'v'.charCodeAt(0), 'c'.charCodeAt(0), '1'.charCodeAt(0)])),
                    (E = new Uint8Array([0, 0, 0, 1])),
                    (x = new Uint8Array([
                      0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101,
                      111, 72, 97, 110, 100, 108, 101, 114, 0,
                    ])),
                    (I = new Uint8Array([
                      0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110,
                      100, 72, 97, 110, 100, 108, 101, 114, 0,
                    ])),
                    (P = { video: x, audio: I }),
                    (O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])),
                    (L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                    (D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                    (M = D),
                    (R = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                    (U = D),
                    (A = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]))
                }
              })(),
                (t = function (e) {
                  var t,
                    i,
                    n = [],
                    r = 0
                  for (t = 1; t < arguments.length; t++) n.push(arguments[t])
                  for (t = n.length; t--; ) r += n[t].byteLength
                  for (
                    i = new Uint8Array(r + 8),
                      new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength),
                      i.set(e, 4),
                      t = 0,
                      r = 8;
                    t < n.length;
                    t++
                  )
                    i.set(n[t], r), (r += n[t].byteLength)
                  return i
                }),
                (i = function () {
                  return t(k.dinf, t(k.dref, O))
                }),
                (n = function (e) {
                  return t(
                    k.esds,
                    new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      3,
                      25,
                      0,
                      0,
                      0,
                      4,
                      17,
                      64,
                      21,
                      0,
                      6,
                      0,
                      0,
                      0,
                      218,
                      192,
                      0,
                      0,
                      218,
                      192,
                      5,
                      2,
                      (e.audioobjecttype << 3) | (e.samplingfrequencyindex >>> 1),
                      (e.samplingfrequencyindex << 7) | (e.channelcount << 3),
                      6,
                      1,
                      2,
                    ]),
                  )
                }),
                (r = function () {
                  return t(k.ftyp, C, E, C, w)
                }),
                (g = function (e) {
                  return t(k.hdlr, P[e])
                }),
                (a = function (e) {
                  return t(k.mdat, e)
                }),
                (m = function (e) {
                  var i = new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    3,
                    0,
                    1,
                    95,
                    144,
                    (e.duration >>> 24) & 255,
                    (e.duration >>> 16) & 255,
                    (e.duration >>> 8) & 255,
                    255 & e.duration,
                    85,
                    196,
                    0,
                    0,
                  ])
                  return (
                    e.samplerate &&
                      ((i[12] = (e.samplerate >>> 24) & 255),
                      (i[13] = (e.samplerate >>> 16) & 255),
                      (i[14] = (e.samplerate >>> 8) & 255),
                      (i[15] = 255 & e.samplerate)),
                    t(k.mdhd, i)
                  )
                }),
                (f = function (e) {
                  return t(k.mdia, m(e), g(e.type), o(e))
                }),
                (s = function (e) {
                  return t(
                    k.mfhd,
                    new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      (4278190080 & e) >> 24,
                      (16711680 & e) >> 16,
                      (65280 & e) >> 8,
                      255 & e,
                    ]),
                  )
                }),
                (o = function (e) {
                  return t(k.minf, 'video' === e.type ? t(k.vmhd, A) : t(k.smhd, L), i(), v(e))
                }),
                (l = function (e, i) {
                  for (var n = [], r = i.length; r--; ) n[r] = T(i[r])
                  return t.apply(null, [k.moof, s(e)].concat(n))
                }),
                (u = function (e) {
                  for (var i = e.length, n = []; i--; ) n[i] = h(e[i])
                  return t.apply(null, [k.moov, c(4294967295)].concat(n).concat(d(e)))
                }),
                (d = function (e) {
                  for (var i = e.length, n = []; i--; ) n[i] = b(e[i])
                  return t.apply(null, [k.mvex].concat(n))
                }),
                (c = function (e) {
                  var i = new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    2,
                    0,
                    1,
                    95,
                    144,
                    (4278190080 & e) >> 24,
                    (16711680 & e) >> 16,
                    (65280 & e) >> 8,
                    255 & e,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    255,
                    255,
                    255,
                    255,
                  ])
                  return t(k.mvhd, i)
                }),
                (_ = function (e) {
                  var i,
                    n,
                    r = e.samples || [],
                    a = new Uint8Array(4 + r.length)
                  for (n = 0; n < r.length; n++)
                    (i = r[n].flags), (a[n + 4] = (i.dependsOn << 4) | (i.isDependedOn << 2) | i.hasRedundancy)
                  return t(k.sdtp, a)
                }),
                (v = function (e) {
                  return t(k.stbl, y(e), t(k.stts, U), t(k.stsc, M), t(k.stsz, R), t(k.stco, D))
                }),
                (function () {
                  var e, i
                  ;(y = function (n) {
                    return t(k.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), 'video' === n.type ? e(n) : i(n))
                  }),
                    (e = function (e) {
                      var i,
                        n,
                        r = e.sps || [],
                        a = e.pps || [],
                        s = [],
                        o = []
                      for (i = 0; i < r.length; i++)
                        s.push((65280 & r[i].byteLength) >>> 8),
                          s.push(255 & r[i].byteLength),
                          (s = s.concat(Array.prototype.slice.call(r[i])))
                      for (i = 0; i < a.length; i++)
                        o.push((65280 & a[i].byteLength) >>> 8),
                          o.push(255 & a[i].byteLength),
                          (o = o.concat(Array.prototype.slice.call(a[i])))
                      if (
                        ((n = [
                          k.avc1,
                          new Uint8Array([
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            (65280 & e.width) >> 8,
                            255 & e.width,
                            (65280 & e.height) >> 8,
                            255 & e.height,
                            0,
                            72,
                            0,
                            0,
                            0,
                            72,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            19,
                            118,
                            105,
                            100,
                            101,
                            111,
                            106,
                            115,
                            45,
                            99,
                            111,
                            110,
                            116,
                            114,
                            105,
                            98,
                            45,
                            104,
                            108,
                            115,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            24,
                            17,
                            17,
                          ]),
                          t(
                            k.avcC,
                            new Uint8Array(
                              [1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat(
                                [r.length],
                                s,
                                [a.length],
                                o,
                              ),
                            ),
                          ),
                          t(k.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
                        ]),
                        e.sarRatio)
                      ) {
                        var l = e.sarRatio[0],
                          u = e.sarRatio[1]
                        n.push(
                          t(
                            k.pasp,
                            new Uint8Array([
                              (4278190080 & l) >> 24,
                              (16711680 & l) >> 16,
                              (65280 & l) >> 8,
                              255 & l,
                              (4278190080 & u) >> 24,
                              (16711680 & u) >> 16,
                              (65280 & u) >> 8,
                              255 & u,
                            ]),
                          ),
                        )
                      }
                      return t.apply(null, n)
                    }),
                    (i = function (e) {
                      return t(
                        k.mp4a,
                        new Uint8Array([
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          (65280 & e.channelcount) >> 8,
                          255 & e.channelcount,
                          (65280 & e.samplesize) >> 8,
                          255 & e.samplesize,
                          0,
                          0,
                          0,
                          0,
                          (65280 & e.samplerate) >> 8,
                          255 & e.samplerate,
                          0,
                          0,
                        ]),
                        n(e),
                      )
                    })
                })(),
                (p = function (e) {
                  var i = new Uint8Array([
                    0,
                    0,
                    0,
                    7,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    (4278190080 & e.id) >> 24,
                    (16711680 & e.id) >> 16,
                    (65280 & e.id) >> 8,
                    255 & e.id,
                    0,
                    0,
                    0,
                    0,
                    (4278190080 & e.duration) >> 24,
                    (16711680 & e.duration) >> 16,
                    (65280 & e.duration) >> 8,
                    255 & e.duration,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    (65280 & e.width) >> 8,
                    255 & e.width,
                    0,
                    0,
                    (65280 & e.height) >> 8,
                    255 & e.height,
                    0,
                    0,
                  ])
                  return t(k.tkhd, i)
                }),
                (T = function (e) {
                  var i, n, r, a, s, o
                  return (
                    (i = t(
                      k.tfhd,
                      new Uint8Array([
                        0,
                        0,
                        0,
                        58,
                        (4278190080 & e.id) >> 24,
                        (16711680 & e.id) >> 16,
                        (65280 & e.id) >> 8,
                        255 & e.id,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                      ]),
                    )),
                    (s = Math.floor(e.baseMediaDecodeTime / (N + 1))),
                    (o = Math.floor(e.baseMediaDecodeTime % (N + 1))),
                    (n = t(
                      k.tfdt,
                      new Uint8Array([
                        1,
                        0,
                        0,
                        0,
                        (s >>> 24) & 255,
                        (s >>> 16) & 255,
                        (s >>> 8) & 255,
                        255 & s,
                        (o >>> 24) & 255,
                        (o >>> 16) & 255,
                        (o >>> 8) & 255,
                        255 & o,
                      ]),
                    )),
                    92,
                    'audio' === e.type
                      ? ((r = S(e, 92)), t(k.traf, i, n, r))
                      : ((a = _(e)), (r = S(e, a.length + 92)), t(k.traf, i, n, r, a))
                  )
                }),
                (h = function (e) {
                  return (e.duration = e.duration || 4294967295), t(k.trak, p(e), f(e))
                }),
                (b = function (e) {
                  var i = new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    (4278190080 & e.id) >> 24,
                    (16711680 & e.id) >> 16,
                    (65280 & e.id) >> 8,
                    255 & e.id,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1,
                  ])
                  return 'video' !== e.type && (i[i.length - 1] = 0), t(k.trex, i)
                }),
                (function () {
                  var e, i, n
                  ;(n = function (e, t) {
                    var i = 0,
                      n = 0,
                      r = 0,
                      a = 0
                    return (
                      e.length &&
                        (void 0 !== e[0].duration && (i = 1),
                        void 0 !== e[0].size && (n = 2),
                        void 0 !== e[0].flags && (r = 4),
                        void 0 !== e[0].compositionTimeOffset && (a = 8)),
                      [
                        0,
                        0,
                        i | n | r | a,
                        1,
                        (4278190080 & e.length) >>> 24,
                        (16711680 & e.length) >>> 16,
                        (65280 & e.length) >>> 8,
                        255 & e.length,
                        (4278190080 & t) >>> 24,
                        (16711680 & t) >>> 16,
                        (65280 & t) >>> 8,
                        255 & t,
                      ]
                    )
                  }),
                    (i = function (e, i) {
                      var r, a, s, o, l, u
                      for (
                        i += 20 + 16 * (o = e.samples || []).length,
                          s = n(o, i),
                          (a = new Uint8Array(s.length + 16 * o.length)).set(s),
                          r = s.length,
                          u = 0;
                        u < o.length;
                        u++
                      )
                        (l = o[u]),
                          (a[r++] = (4278190080 & l.duration) >>> 24),
                          (a[r++] = (16711680 & l.duration) >>> 16),
                          (a[r++] = (65280 & l.duration) >>> 8),
                          (a[r++] = 255 & l.duration),
                          (a[r++] = (4278190080 & l.size) >>> 24),
                          (a[r++] = (16711680 & l.size) >>> 16),
                          (a[r++] = (65280 & l.size) >>> 8),
                          (a[r++] = 255 & l.size),
                          (a[r++] = (l.flags.isLeading << 2) | l.flags.dependsOn),
                          (a[r++] =
                            (l.flags.isDependedOn << 6) |
                            (l.flags.hasRedundancy << 4) |
                            (l.flags.paddingValue << 1) |
                            l.flags.isNonSyncSample),
                          (a[r++] = 61440 & l.flags.degradationPriority),
                          (a[r++] = 15 & l.flags.degradationPriority),
                          (a[r++] = (4278190080 & l.compositionTimeOffset) >>> 24),
                          (a[r++] = (16711680 & l.compositionTimeOffset) >>> 16),
                          (a[r++] = (65280 & l.compositionTimeOffset) >>> 8),
                          (a[r++] = 255 & l.compositionTimeOffset)
                      return t(k.trun, a)
                    }),
                    (e = function (e, i) {
                      var r, a, s, o, l, u
                      for (
                        i += 20 + 8 * (o = e.samples || []).length,
                          s = n(o, i),
                          (r = new Uint8Array(s.length + 8 * o.length)).set(s),
                          a = s.length,
                          u = 0;
                        u < o.length;
                        u++
                      )
                        (l = o[u]),
                          (r[a++] = (4278190080 & l.duration) >>> 24),
                          (r[a++] = (16711680 & l.duration) >>> 16),
                          (r[a++] = (65280 & l.duration) >>> 8),
                          (r[a++] = 255 & l.duration),
                          (r[a++] = (4278190080 & l.size) >>> 24),
                          (r[a++] = (16711680 & l.size) >>> 16),
                          (r[a++] = (65280 & l.size) >>> 8),
                          (r[a++] = 255 & l.size)
                      return t(k.trun, r)
                    }),
                    (S = function (t, n) {
                      return 'audio' === t.type ? e(t, n) : i(t, n)
                    })
                })()
              var F,
                j,
                H,
                q,
                V,
                W,
                z,
                G,
                K = a,
                Z = l,
                Q = function (e) {
                  var t,
                    i = r(),
                    n = u(e)
                  return (t = new Uint8Array(i.byteLength + n.byteLength)).set(i), t.set(n, i.byteLength), t
                },
                X = function (e, t) {
                  var i = {
                    size: 0,
                    flags: {
                      isLeading: 0,
                      dependsOn: 1,
                      isDependedOn: 0,
                      hasRedundancy: 0,
                      degradationPriority: 0,
                      isNonSyncSample: 1,
                    },
                  }
                  return (
                    (i.dataOffset = t),
                    (i.compositionTimeOffset = e.pts - e.dts),
                    (i.duration = e.duration),
                    (i.size = 4 * e.length),
                    (i.size += e.byteLength),
                    e.keyFrame && ((i.flags.dependsOn = 2), (i.flags.isNonSyncSample = 0)),
                    i
                  )
                },
                Y = function (e) {
                  var t,
                    i,
                    n = [],
                    r = []
                  for (r.byteLength = 0, r.nalCount = 0, r.duration = 0, n.byteLength = 0, t = 0; t < e.length; t++)
                    'access_unit_delimiter_rbsp' === (i = e[t]).nalUnitType
                      ? (n.length &&
                          ((n.duration = i.dts - n.dts),
                          (r.byteLength += n.byteLength),
                          (r.nalCount += n.length),
                          (r.duration += n.duration),
                          r.push(n)),
                        ((n = [i]).byteLength = i.data.byteLength),
                        (n.pts = i.pts),
                        (n.dts = i.dts))
                      : ('slice_layer_without_partitioning_rbsp_idr' === i.nalUnitType && (n.keyFrame = !0),
                        (n.duration = i.dts - n.dts),
                        (n.byteLength += i.data.byteLength),
                        n.push(i))
                  return (
                    r.length && (!n.duration || n.duration <= 0) && (n.duration = r[r.length - 1].duration),
                    (r.byteLength += n.byteLength),
                    (r.nalCount += n.length),
                    (r.duration += n.duration),
                    r.push(n),
                    r
                  )
                },
                $ = function (e) {
                  var t,
                    i,
                    n = [],
                    r = []
                  for (
                    n.byteLength = 0,
                      n.nalCount = 0,
                      n.duration = 0,
                      n.pts = e[0].pts,
                      n.dts = e[0].dts,
                      r.byteLength = 0,
                      r.nalCount = 0,
                      r.duration = 0,
                      r.pts = e[0].pts,
                      r.dts = e[0].dts,
                      t = 0;
                    t < e.length;
                    t++
                  )
                    (i = e[t]).keyFrame
                      ? (n.length &&
                          (r.push(n),
                          (r.byteLength += n.byteLength),
                          (r.nalCount += n.nalCount),
                          (r.duration += n.duration)),
                        ((n = [i]).nalCount = i.length),
                        (n.byteLength = i.byteLength),
                        (n.pts = i.pts),
                        (n.dts = i.dts),
                        (n.duration = i.duration))
                      : ((n.duration += i.duration),
                        (n.nalCount += i.length),
                        (n.byteLength += i.byteLength),
                        n.push(i))
                  return (
                    r.length && n.duration <= 0 && (n.duration = r[r.length - 1].duration),
                    (r.byteLength += n.byteLength),
                    (r.nalCount += n.nalCount),
                    (r.duration += n.duration),
                    r.push(n),
                    r
                  )
                },
                J = function (e) {
                  var t
                  return (
                    !e[0][0].keyFrame &&
                      e.length > 1 &&
                      ((t = e.shift()),
                      (e.byteLength -= t.byteLength),
                      (e.nalCount -= t.nalCount),
                      (e[0][0].dts = t.dts),
                      (e[0][0].pts = t.pts),
                      (e[0][0].duration += t.duration)),
                    e
                  )
                },
                ee = function (e, t) {
                  var i,
                    n,
                    r,
                    a,
                    s,
                    o = t || 0,
                    l = []
                  for (i = 0; i < e.length; i++)
                    for (a = e[i], n = 0; n < a.length; n++) (s = a[n]), (o += (r = X(s, o)).size), l.push(r)
                  return l
                },
                te = function (e) {
                  var t,
                    i,
                    n,
                    r,
                    a,
                    s,
                    o = 0,
                    l = e.byteLength,
                    u = e.nalCount,
                    d = new Uint8Array(l + 4 * u),
                    c = new DataView(d.buffer)
                  for (t = 0; t < e.length; t++)
                    for (r = e[t], i = 0; i < r.length; i++)
                      for (a = r[i], n = 0; n < a.length; n++)
                        (s = a[n]),
                          c.setUint32(o, s.data.byteLength),
                          (o += 4),
                          d.set(s.data, o),
                          (o += s.data.byteLength)
                  return d
                },
                ie = [33, 16, 5, 32, 164, 27],
                ne = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
                re = function (e) {
                  for (var t = []; e--; ) t.push(0)
                  return t
                },
                ae = function () {
                  if (!F) {
                    var e = {
                      96e3: [ie, [227, 64], re(154), [56]],
                      88200: [ie, [231], re(170), [56]],
                      64e3: [ie, [248, 192], re(240), [56]],
                      48e3: [ie, [255, 192], re(268), [55, 148, 128], re(54), [112]],
                      44100: [ie, [255, 192], re(268), [55, 163, 128], re(84), [112]],
                      32e3: [ie, [255, 192], re(268), [55, 234], re(226), [112]],
                      24e3: [ie, [255, 192], re(268), [55, 255, 128], re(268), [111, 112], re(126), [224]],
                      16e3: [
                        ie,
                        [255, 192],
                        re(268),
                        [55, 255, 128],
                        re(268),
                        [111, 255],
                        re(269),
                        [223, 108],
                        re(195),
                        [1, 192],
                      ],
                      12e3: [
                        ne,
                        re(268),
                        [3, 127, 248],
                        re(268),
                        [6, 255, 240],
                        re(268),
                        [13, 255, 224],
                        re(268),
                        [27, 253, 128],
                        re(259),
                        [56],
                      ],
                      11025: [
                        ne,
                        re(268),
                        [3, 127, 248],
                        re(268),
                        [6, 255, 240],
                        re(268),
                        [13, 255, 224],
                        re(268),
                        [27, 255, 192],
                        re(268),
                        [55, 175, 128],
                        re(108),
                        [112],
                      ],
                      8e3: [ne, re(268), [3, 121, 16], re(47), [7]],
                    }
                    ;(t = e),
                      (F = Object.keys(t).reduce(function (e, i) {
                        return (
                          (e[i] = new Uint8Array(
                            t[i].reduce(function (e, t) {
                              return e.concat(t)
                            }, []),
                          )),
                          e
                        )
                      }, {}))
                  }
                  var t
                  return F
                },
                se = 9e4
              ;(W = function (e, t) {
                return j(V(e, t))
              }),
                (z = function (e, t) {
                  return H(q(e), t)
                }),
                (G = function (e, t, i) {
                  return q(i ? e : e - t)
                })
              var oe = se,
                le = (j = function (e) {
                  return e * se
                }),
                ue =
                  ((H = function (e, t) {
                    return e * t
                  }),
                  (q = function (e) {
                    return e / se
                  })),
                de =
                  ((V = function (e, t) {
                    return e / t
                  }),
                  W),
                ce = z,
                he = G,
                pe = function (e, t, i, n) {
                  var r,
                    a,
                    s,
                    o,
                    l,
                    u = 0,
                    d = 0,
                    c = 0
                  if (
                    t.length &&
                    ((r = de(e.baseMediaDecodeTime, e.samplerate)),
                    (a = Math.ceil(oe / (e.samplerate / 1024))),
                    i && n && ((u = r - Math.max(i, n)), (c = (d = Math.floor(u / a)) * a)),
                    !(d < 1 || c > oe / 2))
                  ) {
                    for ((s = ae()[e.samplerate]) || (s = t[0].data), o = 0; o < d; o++)
                      (l = t[0]), t.splice(0, 0, { data: s, dts: l.dts - a, pts: l.pts - a })
                    return (e.baseMediaDecodeTime -= Math.floor(ce(c, e.samplerate))), c
                  }
                },
                fe = function (e, t, i) {
                  return t.minSegmentDts >= i
                    ? e
                    : ((t.minSegmentDts = 1 / 0),
                      e.filter(function (e) {
                        return (
                          e.dts >= i &&
                          ((t.minSegmentDts = Math.min(t.minSegmentDts, e.dts)),
                          (t.minSegmentPts = t.minSegmentDts),
                          !0)
                        )
                      }))
                },
                me = function (e) {
                  var t,
                    i,
                    n = []
                  for (t = 0; t < e.length; t++) (i = e[t]), n.push({ size: i.data.byteLength, duration: 1024 })
                  return n
                },
                ge = function (e) {
                  var t,
                    i,
                    n = 0,
                    r = new Uint8Array(
                      (function (e) {
                        var t,
                          i = 0
                        for (t = 0; t < e.length; t++) i += e[t].data.byteLength
                        return i
                      })(e),
                    )
                  for (t = 0; t < e.length; t++) (i = e[t]), r.set(i.data, n), (n += i.data.byteLength)
                  return r
                },
                _e = oe,
                ve = function (e) {
                  delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts
                },
                ye = function (e, t) {
                  var i,
                    n = e.minSegmentDts
                  return (
                    t || (n -= e.timelineStartInfo.dts),
                    (i = e.timelineStartInfo.baseMediaDecodeTime),
                    (i += n),
                    (i = Math.max(0, i)),
                    'audio' === e.type && ((i *= e.samplerate / _e), (i = Math.floor(i))),
                    i
                  )
                },
                Te = function (e, t) {
                  'number' === typeof t.pts &&
                    (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts),
                    void 0 === e.minSegmentPts
                      ? (e.minSegmentPts = t.pts)
                      : (e.minSegmentPts = Math.min(e.minSegmentPts, t.pts)),
                    void 0 === e.maxSegmentPts
                      ? (e.maxSegmentPts = t.pts)
                      : (e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts))),
                    'number' === typeof t.dts &&
                      (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts),
                      void 0 === e.minSegmentDts
                        ? (e.minSegmentDts = t.dts)
                        : (e.minSegmentDts = Math.min(e.minSegmentDts, t.dts)),
                      void 0 === e.maxSegmentDts
                        ? (e.maxSegmentDts = t.dts)
                        : (e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts)))
                },
                be = function (e) {
                  for (
                    var t = 0, i = { payloadType: -1, payloadSize: 0 }, n = 0, r = 0;
                    t < e.byteLength && 128 !== e[t];

                  ) {
                    for (; 255 === e[t]; ) (n += 255), t++
                    for (n += e[t++]; 255 === e[t]; ) (r += 255), t++
                    if (((r += e[t++]), !i.payload && 4 === n)) {
                      if ('GA94' === String.fromCharCode(e[t + 3], e[t + 4], e[t + 5], e[t + 6])) {
                        ;(i.payloadType = n), (i.payloadSize = r), (i.payload = e.subarray(t, t + r))
                        break
                      }
                      i.payload = void 0
                    }
                    ;(t += r), (n = 0), (r = 0)
                  }
                  return i
                },
                Se = function (e) {
                  return 181 !== e.payload[0] ||
                    49 !== ((e.payload[1] << 8) | e.payload[2]) ||
                    'GA94' !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ||
                    3 !== e.payload[7]
                    ? null
                    : e.payload.subarray(8, e.payload.length - 1)
                },
                ke = function (e, t) {
                  var i,
                    n,
                    r,
                    a,
                    s = []
                  if (!(64 & t[0])) return s
                  for (n = 31 & t[0], i = 0; i < n; i++)
                    (a = { type: 3 & t[(r = 3 * i) + 2], pts: e }),
                      4 & t[r + 2] && ((a.ccData = (t[r + 3] << 8) | t[r + 4]), s.push(a))
                  return s
                },
                Ce = function (e) {
                  for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; )
                    0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), (a += 2)) : a++
                  if (0 === r.length) return e
                  ;(t = n - r.length), (i = new Uint8Array(t))
                  var s = 0
                  for (a = 0; a < t; s++, a++) s === r[0] && (s++, r.shift()), (i[a] = e[s])
                  return i
                },
                Ee = 4,
                we = function e(t) {
                  ;(t = t || {}),
                    e.prototype.init.call(this),
                    (this.parse708captions_ = 'boolean' !== typeof t.parse708captions || t.parse708captions),
                    (this.captionPackets_ = []),
                    (this.ccStreams_ = [new Ue(0, 0), new Ue(0, 1), new Ue(1, 0), new Ue(1, 1)]),
                    this.parse708captions_ && (this.cc708Stream_ = new Le()),
                    this.reset(),
                    this.ccStreams_.forEach(function (e) {
                      e.on('data', this.trigger.bind(this, 'data')),
                        e.on('partialdone', this.trigger.bind(this, 'partialdone')),
                        e.on('done', this.trigger.bind(this, 'done'))
                    }, this),
                    this.parse708captions_ &&
                      (this.cc708Stream_.on('data', this.trigger.bind(this, 'data')),
                      this.cc708Stream_.on('partialdone', this.trigger.bind(this, 'partialdone')),
                      this.cc708Stream_.on('done', this.trigger.bind(this, 'done')))
                }
              ;((we.prototype = new B()).push = function (e) {
                var t, i, n
                if (
                  'sei_rbsp' === e.nalUnitType &&
                  (t = be(e.escapedRBSP)).payload &&
                  t.payloadType === Ee &&
                  (i = Se(t))
                )
                  if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0
                  else {
                    if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_)
                      return this.numSameDts_--, void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1))
                    ;(n = ke(e.pts, i)),
                      (this.captionPackets_ = this.captionPackets_.concat(n)),
                      this.latestDts_ !== e.dts && (this.numSameDts_ = 0),
                      this.numSameDts_++,
                      (this.latestDts_ = e.dts)
                  }
              }),
                (we.prototype.flushCCStreams = function (e) {
                  this.ccStreams_.forEach(function (t) {
                    return 'flush' === e ? t.flush() : t.partialFlush()
                  }, this)
                }),
                (we.prototype.flushStream = function (e) {
                  this.captionPackets_.length
                    ? (this.captionPackets_.forEach(function (e, t) {
                        e.presortIndex = t
                      }),
                      this.captionPackets_.sort(function (e, t) {
                        return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
                      }),
                      this.captionPackets_.forEach(function (e) {
                        e.type < 2 ? this.dispatchCea608Packet(e) : this.dispatchCea708Packet(e)
                      }, this),
                      (this.captionPackets_.length = 0),
                      this.flushCCStreams(e))
                    : this.flushCCStreams(e)
                }),
                (we.prototype.flush = function () {
                  return this.flushStream('flush')
                }),
                (we.prototype.partialFlush = function () {
                  return this.flushStream('partialFlush')
                }),
                (we.prototype.reset = function () {
                  ;(this.latestDts_ = null),
                    (this.ignoreNextEqualDts_ = !1),
                    (this.numSameDts_ = 0),
                    (this.activeCea608Channel_ = [null, null]),
                    this.ccStreams_.forEach(function (e) {
                      e.reset()
                    })
                }),
                (we.prototype.dispatchCea608Packet = function (e) {
                  this.setsTextOrXDSActive(e)
                    ? (this.activeCea608Channel_[e.type] = null)
                    : this.setsChannel1Active(e)
                    ? (this.activeCea608Channel_[e.type] = 0)
                    : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1),
                    null !== this.activeCea608Channel_[e.type] &&
                      this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
                }),
                (we.prototype.setsChannel1Active = function (e) {
                  return 4096 === (30720 & e.ccData)
                }),
                (we.prototype.setsChannel2Active = function (e) {
                  return 6144 === (30720 & e.ccData)
                }),
                (we.prototype.setsTextOrXDSActive = function (e) {
                  return 256 === (28928 & e.ccData) || 4138 === (30974 & e.ccData) || 6186 === (30974 & e.ccData)
                }),
                (we.prototype.dispatchCea708Packet = function (e) {
                  this.parse708captions_ && this.cc708Stream_.push(e)
                })
              var xe = {
                  127: 9834,
                  4128: 32,
                  4129: 160,
                  4133: 8230,
                  4138: 352,
                  4140: 338,
                  4144: 9608,
                  4145: 8216,
                  4146: 8217,
                  4147: 8220,
                  4148: 8221,
                  4149: 8226,
                  4153: 8482,
                  4154: 353,
                  4156: 339,
                  4157: 8480,
                  4159: 376,
                  4214: 8539,
                  4215: 8540,
                  4216: 8541,
                  4217: 8542,
                  4218: 9168,
                  4219: 9124,
                  4220: 9123,
                  4221: 9135,
                  4222: 9126,
                  4223: 9121,
                  4256: 12600,
                },
                Ie = function (e) {
                  return (32 <= e && e <= 127) || (160 <= e && e <= 255)
                },
                Pe = function (e) {
                  ;(this.windowNum = e), this.reset()
                }
              ;(Pe.prototype.reset = function () {
                this.clearText(),
                  (this.pendingNewLine = !1),
                  (this.winAttr = {}),
                  (this.penAttr = {}),
                  (this.penLoc = {}),
                  (this.penColor = {}),
                  (this.visible = 0),
                  (this.rowLock = 0),
                  (this.columnLock = 0),
                  (this.priority = 0),
                  (this.relativePositioning = 0),
                  (this.anchorVertical = 0),
                  (this.anchorHorizontal = 0),
                  (this.anchorPoint = 0),
                  (this.rowCount = 1),
                  (this.virtualRowCount = this.rowCount + 1),
                  (this.columnCount = 41),
                  (this.windowStyle = 0),
                  (this.penStyle = 0)
              }),
                (Pe.prototype.getText = function () {
                  return this.rows.join('\n')
                }),
                (Pe.prototype.clearText = function () {
                  ;(this.rows = ['']), (this.rowIdx = 0)
                }),
                (Pe.prototype.newLine = function (e) {
                  for (
                    this.rows.length >= this.virtualRowCount &&
                      'function' === typeof this.beforeRowOverflow &&
                      this.beforeRowOverflow(e),
                      this.rows.length > 0 && (this.rows.push(''), this.rowIdx++);
                    this.rows.length > this.virtualRowCount;

                  )
                    this.rows.shift(), this.rowIdx--
                }),
                (Pe.prototype.isEmpty = function () {
                  return 0 === this.rows.length || (1 === this.rows.length && '' === this.rows[0])
                }),
                (Pe.prototype.addText = function (e) {
                  this.rows[this.rowIdx] += e
                }),
                (Pe.prototype.backspace = function () {
                  if (!this.isEmpty()) {
                    var e = this.rows[this.rowIdx]
                    this.rows[this.rowIdx] = e.substr(0, e.length - 1)
                  }
                })
              var Ae = function (e) {
                ;(this.serviceNum = e), (this.text = ''), (this.currentWindow = new Pe(-1)), (this.windows = [])
              }
              ;(Ae.prototype.init = function (e, t) {
                this.startPts = e
                for (var i = 0; i < 8; i++)
                  (this.windows[i] = new Pe(i)), 'function' === typeof t && (this.windows[i].beforeRowOverflow = t)
              }),
                (Ae.prototype.setCurrentWindow = function (e) {
                  this.currentWindow = this.windows[e]
                })
              var Le = function e() {
                e.prototype.init.call(this)
                var t = this
                ;(this.current708Packet = null),
                  (this.services = {}),
                  (this.push = function (e) {
                    3 === e.type
                      ? (t.new708Packet(), t.add708Bytes(e))
                      : (null === t.current708Packet && t.new708Packet(), t.add708Bytes(e))
                  })
              }
              ;(Le.prototype = new B()),
                (Le.prototype.new708Packet = function () {
                  null !== this.current708Packet && this.push708Packet(),
                    (this.current708Packet = { data: [], ptsVals: [] })
                }),
                (Le.prototype.add708Bytes = function (e) {
                  var t = e.ccData,
                    i = t >>> 8,
                    n = 255 & t
                  this.current708Packet.ptsVals.push(e.pts),
                    this.current708Packet.data.push(i),
                    this.current708Packet.data.push(n)
                }),
                (Le.prototype.push708Packet = function () {
                  var e = this.current708Packet,
                    t = e.data,
                    i = null,
                    n = null,
                    r = 0,
                    a = t[r++]
                  for (e.seq = a >> 6, e.sizeCode = 63 & a; r < t.length; r++)
                    (n = 31 & (a = t[r++])),
                      7 === (i = a >> 5) && n > 0 && (i = a = t[r++]),
                      this.pushServiceBlock(i, r, n),
                      n > 0 && (r += n - 1)
                }),
                (Le.prototype.pushServiceBlock = function (e, t, i) {
                  var n,
                    r = t,
                    a = this.current708Packet.data,
                    s = this.services[e]
                  for (s || (s = this.initService(e, r)); r < t + i && r < a.length; r++)
                    (n = a[r]),
                      Ie(n)
                        ? (r = this.handleText(r, s))
                        : 16 === n
                        ? (r = this.extendedCommands(r, s))
                        : 128 <= n && n <= 135
                        ? (r = this.setCurrentWindow(r, s))
                        : 152 <= n && n <= 159
                        ? (r = this.defineWindow(r, s))
                        : 136 === n
                        ? (r = this.clearWindows(r, s))
                        : 140 === n
                        ? (r = this.deleteWindows(r, s))
                        : 137 === n
                        ? (r = this.displayWindows(r, s))
                        : 138 === n
                        ? (r = this.hideWindows(r, s))
                        : 139 === n
                        ? (r = this.toggleWindows(r, s))
                        : 151 === n
                        ? (r = this.setWindowAttributes(r, s))
                        : 144 === n
                        ? (r = this.setPenAttributes(r, s))
                        : 145 === n
                        ? (r = this.setPenColor(r, s))
                        : 146 === n
                        ? (r = this.setPenLocation(r, s))
                        : 143 === n
                        ? (s = this.reset(r, s))
                        : 8 === n
                        ? s.currentWindow.backspace()
                        : 12 === n
                        ? s.currentWindow.clearText()
                        : 13 === n
                        ? (s.currentWindow.pendingNewLine = !0)
                        : 14 === n
                        ? s.currentWindow.clearText()
                        : 141 === n && r++
                }),
                (Le.prototype.extendedCommands = function (e, t) {
                  var i = this.current708Packet.data[++e]
                  return Ie(i) && (e = this.handleText(e, t, !0)), e
                }),
                (Le.prototype.getPts = function (e) {
                  return this.current708Packet.ptsVals[Math.floor(e / 2)]
                }),
                (Le.prototype.initService = function (e, t) {
                  var i = this
                  return (
                    (this.services[e] = new Ae(e)),
                    this.services[e].init(this.getPts(t), function (t) {
                      i.flushDisplayed(t, i.services[e])
                    }),
                    this.services[e]
                  )
                }),
                (Le.prototype.handleText = function (e, t, i) {
                  var n = (function (e) {
                      var t = xe[e] || e
                      return 4096 & e && e === t ? '' : String.fromCharCode(t)
                    })((i ? 4096 : 0) | this.current708Packet.data[e]),
                    r = t.currentWindow
                  return (
                    r.pendingNewLine && !r.isEmpty() && r.newLine(this.getPts(e)),
                    (r.pendingNewLine = !1),
                    r.addText(n),
                    e
                  )
                }),
                (Le.prototype.setCurrentWindow = function (e, t) {
                  var i = 7 & this.current708Packet.data[e]
                  return t.setCurrentWindow(i), e
                }),
                (Le.prototype.defineWindow = function (e, t) {
                  var i = this.current708Packet.data,
                    n = i[e],
                    r = 7 & n
                  t.setCurrentWindow(r)
                  var a = t.currentWindow
                  return (
                    (n = i[++e]),
                    (a.visible = (32 & n) >> 5),
                    (a.rowLock = (16 & n) >> 4),
                    (a.columnLock = (8 & n) >> 3),
                    (a.priority = 7 & n),
                    (n = i[++e]),
                    (a.relativePositioning = (128 & n) >> 7),
                    (a.anchorVertical = 127 & n),
                    (n = i[++e]),
                    (a.anchorHorizontal = n),
                    (n = i[++e]),
                    (a.anchorPoint = (240 & n) >> 4),
                    (a.rowCount = 15 & n),
                    (n = i[++e]),
                    (a.columnCount = 63 & n),
                    (n = i[++e]),
                    (a.windowStyle = (56 & n) >> 3),
                    (a.penStyle = 7 & n),
                    (a.virtualRowCount = a.rowCount + 1),
                    e
                  )
                }),
                (Le.prototype.setWindowAttributes = function (e, t) {
                  var i = this.current708Packet.data,
                    n = i[e],
                    r = t.currentWindow.winAttr
                  return (
                    (n = i[++e]),
                    (r.fillOpacity = (192 & n) >> 6),
                    (r.fillRed = (48 & n) >> 4),
                    (r.fillGreen = (12 & n) >> 2),
                    (r.fillBlue = 3 & n),
                    (n = i[++e]),
                    (r.borderType = (192 & n) >> 6),
                    (r.borderRed = (48 & n) >> 4),
                    (r.borderGreen = (12 & n) >> 2),
                    (r.borderBlue = 3 & n),
                    (n = i[++e]),
                    (r.borderType += (128 & n) >> 5),
                    (r.wordWrap = (64 & n) >> 6),
                    (r.printDirection = (48 & n) >> 4),
                    (r.scrollDirection = (12 & n) >> 2),
                    (r.justify = 3 & n),
                    (n = i[++e]),
                    (r.effectSpeed = (240 & n) >> 4),
                    (r.effectDirection = (12 & n) >> 2),
                    (r.displayEffect = 3 & n),
                    e
                  )
                }),
                (Le.prototype.flushDisplayed = function (e, t) {
                  for (var i = [], n = 0; n < 8; n++)
                    t.windows[n].visible && !t.windows[n].isEmpty() && i.push(t.windows[n].getText())
                  ;(t.endPts = e), (t.text = i.join('\n\n')), this.pushCaption(t), (t.startPts = e)
                }),
                (Le.prototype.pushCaption = function (e) {
                  '' !== e.text &&
                    (this.trigger('data', {
                      startPts: e.startPts,
                      endPts: e.endPts,
                      text: e.text,
                      stream: 'cc708_' + e.serviceNum,
                    }),
                    (e.text = ''),
                    (e.startPts = e.endPts))
                }),
                (Le.prototype.displayWindows = function (e, t) {
                  var i = this.current708Packet.data[++e],
                    n = this.getPts(e)
                  this.flushDisplayed(n, t)
                  for (var r = 0; r < 8; r++) i & (1 << r) && (t.windows[r].visible = 1)
                  return e
                }),
                (Le.prototype.hideWindows = function (e, t) {
                  var i = this.current708Packet.data[++e],
                    n = this.getPts(e)
                  this.flushDisplayed(n, t)
                  for (var r = 0; r < 8; r++) i & (1 << r) && (t.windows[r].visible = 0)
                  return e
                }),
                (Le.prototype.toggleWindows = function (e, t) {
                  var i = this.current708Packet.data[++e],
                    n = this.getPts(e)
                  this.flushDisplayed(n, t)
                  for (var r = 0; r < 8; r++) i & (1 << r) && (t.windows[r].visible ^= 1)
                  return e
                }),
                (Le.prototype.clearWindows = function (e, t) {
                  var i = this.current708Packet.data[++e],
                    n = this.getPts(e)
                  this.flushDisplayed(n, t)
                  for (var r = 0; r < 8; r++) i & (1 << r) && t.windows[r].clearText()
                  return e
                }),
                (Le.prototype.deleteWindows = function (e, t) {
                  var i = this.current708Packet.data[++e],
                    n = this.getPts(e)
                  this.flushDisplayed(n, t)
                  for (var r = 0; r < 8; r++) i & (1 << r) && t.windows[r].reset()
                  return e
                }),
                (Le.prototype.setPenAttributes = function (e, t) {
                  var i = this.current708Packet.data,
                    n = i[e],
                    r = t.currentWindow.penAttr
                  return (
                    (n = i[++e]),
                    (r.textTag = (240 & n) >> 4),
                    (r.offset = (12 & n) >> 2),
                    (r.penSize = 3 & n),
                    (n = i[++e]),
                    (r.italics = (128 & n) >> 7),
                    (r.underline = (64 & n) >> 6),
                    (r.edgeType = (56 & n) >> 3),
                    (r.fontStyle = 7 & n),
                    e
                  )
                }),
                (Le.prototype.setPenColor = function (e, t) {
                  var i = this.current708Packet.data,
                    n = i[e],
                    r = t.currentWindow.penColor
                  return (
                    (n = i[++e]),
                    (r.fgOpacity = (192 & n) >> 6),
                    (r.fgRed = (48 & n) >> 4),
                    (r.fgGreen = (12 & n) >> 2),
                    (r.fgBlue = 3 & n),
                    (n = i[++e]),
                    (r.bgOpacity = (192 & n) >> 6),
                    (r.bgRed = (48 & n) >> 4),
                    (r.bgGreen = (12 & n) >> 2),
                    (r.bgBlue = 3 & n),
                    (n = i[++e]),
                    (r.edgeRed = (48 & n) >> 4),
                    (r.edgeGreen = (12 & n) >> 2),
                    (r.edgeBlue = 3 & n),
                    e
                  )
                }),
                (Le.prototype.setPenLocation = function (e, t) {
                  var i = this.current708Packet.data,
                    n = i[e],
                    r = t.currentWindow.penLoc
                  return (
                    (t.currentWindow.pendingNewLine = !0),
                    (n = i[++e]),
                    (r.row = 15 & n),
                    (n = i[++e]),
                    (r.column = 63 & n),
                    e
                  )
                }),
                (Le.prototype.reset = function (e, t) {
                  var i = this.getPts(e)
                  return this.flushDisplayed(i, t), this.initService(t.serviceNum, e)
                })
              var Oe = {
                  42: 225,
                  92: 233,
                  94: 237,
                  95: 243,
                  96: 250,
                  123: 231,
                  124: 247,
                  125: 209,
                  126: 241,
                  127: 9608,
                  304: 174,
                  305: 176,
                  306: 189,
                  307: 191,
                  308: 8482,
                  309: 162,
                  310: 163,
                  311: 9834,
                  312: 224,
                  313: 160,
                  314: 232,
                  315: 226,
                  316: 234,
                  317: 238,
                  318: 244,
                  319: 251,
                  544: 193,
                  545: 201,
                  546: 211,
                  547: 218,
                  548: 220,
                  549: 252,
                  550: 8216,
                  551: 161,
                  552: 42,
                  553: 39,
                  554: 8212,
                  555: 169,
                  556: 8480,
                  557: 8226,
                  558: 8220,
                  559: 8221,
                  560: 192,
                  561: 194,
                  562: 199,
                  563: 200,
                  564: 202,
                  565: 203,
                  566: 235,
                  567: 206,
                  568: 207,
                  569: 239,
                  570: 212,
                  571: 217,
                  572: 249,
                  573: 219,
                  574: 171,
                  575: 187,
                  800: 195,
                  801: 227,
                  802: 205,
                  803: 204,
                  804: 236,
                  805: 210,
                  806: 242,
                  807: 213,
                  808: 245,
                  809: 123,
                  810: 125,
                  811: 92,
                  812: 94,
                  813: 95,
                  814: 124,
                  815: 126,
                  816: 196,
                  817: 228,
                  818: 214,
                  819: 246,
                  820: 223,
                  821: 165,
                  822: 164,
                  823: 9474,
                  824: 197,
                  825: 229,
                  826: 216,
                  827: 248,
                  828: 9484,
                  829: 9488,
                  830: 9492,
                  831: 9496,
                },
                De = function (e) {
                  return null === e ? '' : ((e = Oe[e] || e), String.fromCharCode(e))
                },
                Me = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
                Re = function () {
                  for (var e = [], t = 15; t--; ) e.push('')
                  return e
                },
                Ue = function e(t, i) {
                  e.prototype.init.call(this),
                    (this.field_ = t || 0),
                    (this.dataChannel_ = i || 0),
                    (this.name_ = 'CC' + (1 + ((this.field_ << 1) | this.dataChannel_))),
                    this.setConstants(),
                    this.reset(),
                    (this.push = function (e) {
                      var t, i, n, r, a
                      if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                        if (
                          (4096 === (61440 & t)
                            ? (this.lastControlCode_ = t)
                            : t !== this.PADDING_ && (this.lastControlCode_ = null),
                          (n = t >>> 8),
                          (r = 255 & t),
                          t !== this.PADDING_)
                        )
                          if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = 'popOn'
                          else if (t === this.END_OF_CAPTION_)
                            (this.mode_ = 'popOn'),
                              this.clearFormatting(e.pts),
                              this.flushDisplayed(e.pts),
                              (i = this.displayed_),
                              (this.displayed_ = this.nonDisplayed_),
                              (this.nonDisplayed_ = i),
                              (this.startPts_ = e.pts)
                          else if (t === this.ROLL_UP_2_ROWS_) (this.rollUpRows_ = 2), this.setRollUp(e.pts)
                          else if (t === this.ROLL_UP_3_ROWS_) (this.rollUpRows_ = 3), this.setRollUp(e.pts)
                          else if (t === this.ROLL_UP_4_ROWS_) (this.rollUpRows_ = 4), this.setRollUp(e.pts)
                          else if (t === this.CARRIAGE_RETURN_)
                            this.clearFormatting(e.pts),
                              this.flushDisplayed(e.pts),
                              this.shiftRowsUp_(),
                              (this.startPts_ = e.pts)
                          else if (t === this.BACKSPACE_)
                            'popOn' === this.mode_
                              ? (this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1))
                              : (this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1))
                          else if (t === this.ERASE_DISPLAYED_MEMORY_)
                            this.flushDisplayed(e.pts), (this.displayed_ = Re())
                          else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = Re()
                          else if (t === this.RESUME_DIRECT_CAPTIONING_)
                            'paintOn' !== this.mode_ && (this.flushDisplayed(e.pts), (this.displayed_ = Re())),
                              (this.mode_ = 'paintOn'),
                              (this.startPts_ = e.pts)
                          else if (this.isSpecialCharacter(n, r))
                            (a = De((n = (3 & n) << 8) | r)), this[this.mode_](e.pts, a), this.column_++
                          else if (this.isExtCharacter(n, r))
                            'popOn' === this.mode_
                              ? (this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1))
                              : (this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1)),
                              (a = De((n = (3 & n) << 8) | r)),
                              this[this.mode_](e.pts, a),
                              this.column_++
                          else if (this.isMidRowCode(n, r))
                            this.clearFormatting(e.pts),
                              this[this.mode_](e.pts, ' '),
                              this.column_++,
                              14 === (14 & r) && this.addFormatting(e.pts, ['i']),
                              1 === (1 & r) && this.addFormatting(e.pts, ['u'])
                          else if (this.isOffsetControlCode(n, r)) this.column_ += 3 & r
                          else if (this.isPAC(n, r)) {
                            var s = Me.indexOf(7968 & t)
                            'rollUp' === this.mode_ &&
                              (s - this.rollUpRows_ + 1 < 0 && (s = this.rollUpRows_ - 1), this.setRollUp(e.pts, s)),
                              s !== this.row_ && (this.clearFormatting(e.pts), (this.row_ = s)),
                              1 & r && -1 === this.formatting_.indexOf('u') && this.addFormatting(e.pts, ['u']),
                              16 === (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)),
                              this.isColorPAC(r) && 14 === (14 & r) && this.addFormatting(e.pts, ['i'])
                          } else
                            this.isNormalChar(n) &&
                              (0 === r && (r = null),
                              (a = De(n)),
                              (a += De(r)),
                              this[this.mode_](e.pts, a),
                              (this.column_ += a.length))
                      } else this.lastControlCode_ = null
                    })
                }
              ;(Ue.prototype = new B()),
                (Ue.prototype.flushDisplayed = function (e) {
                  var t = this.displayed_
                    .map(function (e, t) {
                      try {
                        return e.trim()
                      } catch (i) {
                        return (
                          this.trigger('log', {
                            level: 'warn',
                            message: 'Skipping a malformed 608 caption at index ' + t + '.',
                          }),
                          ''
                        )
                      }
                    }, this)
                    .join('\n')
                    .replace(/^\n+|\n+$/g, '')
                  t.length && this.trigger('data', { startPts: this.startPts_, endPts: e, text: t, stream: this.name_ })
                }),
                (Ue.prototype.reset = function () {
                  ;(this.mode_ = 'popOn'),
                    (this.topRow_ = 0),
                    (this.startPts_ = 0),
                    (this.displayed_ = Re()),
                    (this.nonDisplayed_ = Re()),
                    (this.lastControlCode_ = null),
                    (this.column_ = 0),
                    (this.row_ = 14),
                    (this.rollUpRows_ = 2),
                    (this.formatting_ = [])
                }),
                (Ue.prototype.setConstants = function () {
                  0 === this.dataChannel_
                    ? ((this.BASE_ = 16),
                      (this.EXT_ = 17),
                      (this.CONTROL_ = (20 | this.field_) << 8),
                      (this.OFFSET_ = 23))
                    : 1 === this.dataChannel_ &&
                      ((this.BASE_ = 24),
                      (this.EXT_ = 25),
                      (this.CONTROL_ = (28 | this.field_) << 8),
                      (this.OFFSET_ = 31)),
                    (this.PADDING_ = 0),
                    (this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_),
                    (this.END_OF_CAPTION_ = 47 | this.CONTROL_),
                    (this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_),
                    (this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_),
                    (this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_),
                    (this.CARRIAGE_RETURN_ = 45 | this.CONTROL_),
                    (this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_),
                    (this.BACKSPACE_ = 33 | this.CONTROL_),
                    (this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_),
                    (this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_)
                }),
                (Ue.prototype.isSpecialCharacter = function (e, t) {
                  return e === this.EXT_ && t >= 48 && t <= 63
                }),
                (Ue.prototype.isExtCharacter = function (e, t) {
                  return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && t >= 32 && t <= 63
                }),
                (Ue.prototype.isMidRowCode = function (e, t) {
                  return e === this.EXT_ && t >= 32 && t <= 47
                }),
                (Ue.prototype.isOffsetControlCode = function (e, t) {
                  return e === this.OFFSET_ && t >= 33 && t <= 35
                }),
                (Ue.prototype.isPAC = function (e, t) {
                  return e >= this.BASE_ && e < this.BASE_ + 8 && t >= 64 && t <= 127
                }),
                (Ue.prototype.isColorPAC = function (e) {
                  return (e >= 64 && e <= 79) || (e >= 96 && e <= 127)
                }),
                (Ue.prototype.isNormalChar = function (e) {
                  return e >= 32 && e <= 127
                }),
                (Ue.prototype.setRollUp = function (e, t) {
                  if (
                    ('rollUp' !== this.mode_ &&
                      ((this.row_ = 14),
                      (this.mode_ = 'rollUp'),
                      this.flushDisplayed(e),
                      (this.nonDisplayed_ = Re()),
                      (this.displayed_ = Re())),
                    void 0 !== t && t !== this.row_)
                  )
                    for (var i = 0; i < this.rollUpRows_; i++)
                      (this.displayed_[t - i] = this.displayed_[this.row_ - i]), (this.displayed_[this.row_ - i] = '')
                  void 0 === t && (t = this.row_), (this.topRow_ = t - this.rollUpRows_ + 1)
                }),
                (Ue.prototype.addFormatting = function (e, t) {
                  this.formatting_ = this.formatting_.concat(t)
                  var i = t.reduce(function (e, t) {
                    return e + '<' + t + '>'
                  }, '')
                  this[this.mode_](e, i)
                }),
                (Ue.prototype.clearFormatting = function (e) {
                  if (this.formatting_.length) {
                    var t = this.formatting_.reverse().reduce(function (e, t) {
                      return e + '</' + t + '>'
                    }, '')
                    ;(this.formatting_ = []), this[this.mode_](e, t)
                  }
                }),
                (Ue.prototype.popOn = function (e, t) {
                  var i = this.nonDisplayed_[this.row_]
                  ;(i += t), (this.nonDisplayed_[this.row_] = i)
                }),
                (Ue.prototype.rollUp = function (e, t) {
                  var i = this.displayed_[this.row_]
                  ;(i += t), (this.displayed_[this.row_] = i)
                }),
                (Ue.prototype.shiftRowsUp_ = function () {
                  var e
                  for (e = 0; e < this.topRow_; e++) this.displayed_[e] = ''
                  for (e = this.row_ + 1; e < 15; e++) this.displayed_[e] = ''
                  for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1]
                  this.displayed_[this.row_] = ''
                }),
                (Ue.prototype.paintOn = function (e, t) {
                  var i = this.displayed_[this.row_]
                  ;(i += t), (this.displayed_[this.row_] = i)
                })
              var Be = { CaptionStream: we, Cea608Stream: Ue, Cea708Stream: Le },
                Ne = { H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21 },
                Fe = 'shared',
                je = function (e, t) {
                  var i = 1
                  for (e > t && (i = -1); Math.abs(t - e) > 4294967296; ) e += 8589934592 * i
                  return e
                },
                He = function e(t) {
                  var i, n
                  e.prototype.init.call(this),
                    (this.type_ = t || Fe),
                    (this.push = function (e) {
                      ;(this.type_ !== Fe && e.type !== this.type_) ||
                        (void 0 === n && (n = e.dts),
                        (e.dts = je(e.dts, n)),
                        (e.pts = je(e.pts, n)),
                        (i = e.dts),
                        this.trigger('data', e))
                    }),
                    (this.flush = function () {
                      ;(n = i), this.trigger('done')
                    }),
                    (this.endTimeline = function () {
                      this.flush(), this.trigger('endedtimeline')
                    }),
                    (this.discontinuity = function () {
                      ;(n = void 0), (i = void 0)
                    }),
                    (this.reset = function () {
                      this.discontinuity(), this.trigger('reset')
                    })
                }
              He.prototype = new B()
              var qe,
                Ve = He,
                We = je,
                ze = function (e, t, i) {
                  var n,
                    r = ''
                  for (n = t; n < i; n++) r += '%' + ('00' + e[n].toString(16)).slice(-2)
                  return r
                },
                Ge = function (e, t, i) {
                  return decodeURIComponent(ze(e, t, i))
                },
                Ke = function (e) {
                  return (e[0] << 21) | (e[1] << 14) | (e[2] << 7) | e[3]
                },
                Ze = {
                  TXXX: function (e) {
                    var t
                    if (3 === e.data[0]) {
                      for (t = 1; t < e.data.length; t++)
                        if (0 === e.data[t]) {
                          ;(e.description = Ge(e.data, 1, t)),
                            (e.value = Ge(e.data, t + 1, e.data.length).replace(/\0*$/, ''))
                          break
                        }
                      e.data = e.value
                    }
                  },
                  WXXX: function (e) {
                    var t
                    if (3 === e.data[0])
                      for (t = 1; t < e.data.length; t++)
                        if (0 === e.data[t]) {
                          ;(e.description = Ge(e.data, 1, t)), (e.url = Ge(e.data, t + 1, e.data.length))
                          break
                        }
                  },
                  PRIV: function (e) {
                    var t, i
                    for (t = 0; t < e.data.length; t++)
                      if (0 === e.data[t]) {
                        e.owner = ((i = e.data), unescape(ze(i, 0, t)))
                        break
                      }
                    ;(e.privateData = e.data.subarray(t + 1)), (e.data = e.privateData)
                  },
                }
              ;(qe = function (e) {
                var t,
                  i = { descriptor: e && e.descriptor },
                  n = 0,
                  r = [],
                  a = 0
                if (
                  (qe.prototype.init.call(this),
                  (this.dispatchType = Ne.METADATA_STREAM_TYPE.toString(16)),
                  i.descriptor)
                )
                  for (t = 0; t < i.descriptor.length; t++)
                    this.dispatchType += ('00' + i.descriptor[t].toString(16)).slice(-2)
                this.push = function (e) {
                  var t, i, s, o, l
                  if ('timed-metadata' === e.type)
                    if (
                      (e.dataAlignmentIndicator && ((a = 0), (r.length = 0)),
                      0 === r.length &&
                        (e.data.length < 10 ||
                          e.data[0] !== 'I'.charCodeAt(0) ||
                          e.data[1] !== 'D'.charCodeAt(0) ||
                          e.data[2] !== '3'.charCodeAt(0)))
                    )
                      this.trigger('log', { level: 'warn', message: 'Skipping unrecognized metadata packet' })
                    else if (
                      (r.push(e),
                      (a += e.data.byteLength),
                      1 === r.length && ((n = Ke(e.data.subarray(6, 10))), (n += 10)),
                      !(a < n))
                    ) {
                      for (t = { data: new Uint8Array(n), frames: [], pts: r[0].pts, dts: r[0].dts }, l = 0; l < n; )
                        t.data.set(r[0].data.subarray(0, n - l), l),
                          (l += r[0].data.byteLength),
                          (a -= r[0].data.byteLength),
                          r.shift()
                      ;(i = 10),
                        64 & t.data[5] &&
                          ((i += 4), (i += Ke(t.data.subarray(10, 14))), (n -= Ke(t.data.subarray(16, 20))))
                      do {
                        if ((s = Ke(t.data.subarray(i + 4, i + 8))) < 1)
                          return void this.trigger('log', {
                            level: 'warn',
                            message: 'Malformed ID3 frame encountered. Skipping metadata parsing.',
                          })
                        if (
                          (((o = {
                            id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]),
                            data: t.data.subarray(i + 10, i + s + 10),
                          }).key = o.id),
                          Ze[o.id] && (Ze[o.id](o), 'com.apple.streaming.transportStreamTimestamp' === o.owner))
                        ) {
                          var u = o.data,
                            d = ((1 & u[3]) << 30) | (u[4] << 22) | (u[5] << 14) | (u[6] << 6) | (u[7] >>> 2)
                          ;(d *= 4),
                            (d += 3 & u[7]),
                            (o.timeStamp = d),
                            void 0 === t.pts && void 0 === t.dts && ((t.pts = o.timeStamp), (t.dts = o.timeStamp)),
                            this.trigger('timestamp', o)
                        }
                        t.frames.push(o), (i += 10), (i += s)
                      } while (i < n)
                      this.trigger('data', t)
                    }
                }
              }).prototype = new B()
              var Qe,
                Xe,
                Ye,
                $e = qe,
                Je = Ve,
                et = 188
              ;((Qe = function () {
                var e = new Uint8Array(et),
                  t = 0
                Qe.prototype.init.call(this),
                  (this.push = function (i) {
                    var n,
                      r = 0,
                      a = et
                    for (
                      t
                        ? ((n = new Uint8Array(i.byteLength + t)).set(e.subarray(0, t)), n.set(i, t), (t = 0))
                        : (n = i);
                      a < n.byteLength;

                    )
                      71 !== n[r] || 71 !== n[a]
                        ? (r++, a++)
                        : (this.trigger('data', n.subarray(r, a)), (r += et), (a += et))
                    r < n.byteLength && (e.set(n.subarray(r), 0), (t = n.byteLength - r))
                  }),
                  (this.flush = function () {
                    t === et && 71 === e[0] && (this.trigger('data', e), (t = 0)), this.trigger('done')
                  }),
                  (this.endTimeline = function () {
                    this.flush(), this.trigger('endedtimeline')
                  }),
                  (this.reset = function () {
                    ;(t = 0), this.trigger('reset')
                  })
              }).prototype = new B()),
                ((Xe = function () {
                  var e, t, i, n
                  Xe.prototype.init.call(this),
                    (n = this),
                    (this.packetsWaitingForPmt = []),
                    (this.programMapTable = void 0),
                    (e = function (e, n) {
                      var r = 0
                      n.payloadUnitStartIndicator && (r += e[r] + 1),
                        'pat' === n.type ? t(e.subarray(r), n) : i(e.subarray(r), n)
                    }),
                    (t = function (e, t) {
                      ;(t.section_number = e[7]),
                        (t.last_section_number = e[8]),
                        (n.pmtPid = ((31 & e[10]) << 8) | e[11]),
                        (t.pmtPid = n.pmtPid)
                    }),
                    (i = function (e, t) {
                      var i, r
                      if (1 & e[5]) {
                        for (
                          n.programMapTable = { video: null, audio: null, 'timed-metadata': {} },
                            i = 3 + (((15 & e[1]) << 8) | e[2]) - 4,
                            r = 12 + (((15 & e[10]) << 8) | e[11]);
                          r < i;

                        ) {
                          var a = e[r],
                            s = ((31 & e[r + 1]) << 8) | e[r + 2]
                          a === Ne.H264_STREAM_TYPE && null === n.programMapTable.video
                            ? (n.programMapTable.video = s)
                            : a === Ne.ADTS_STREAM_TYPE && null === n.programMapTable.audio
                            ? (n.programMapTable.audio = s)
                            : a === Ne.METADATA_STREAM_TYPE && (n.programMapTable['timed-metadata'][s] = a),
                            (r += 5 + (((15 & e[r + 3]) << 8) | e[r + 4]))
                        }
                        t.programMapTable = n.programMapTable
                      }
                    }),
                    (this.push = function (t) {
                      var i = {},
                        n = 4
                      if (
                        ((i.payloadUnitStartIndicator = !!(64 & t[1])),
                        (i.pid = 31 & t[1]),
                        (i.pid <<= 8),
                        (i.pid |= t[2]),
                        (48 & t[3]) >>> 4 > 1 && (n += t[n] + 1),
                        0 === i.pid)
                      )
                        (i.type = 'pat'), e(t.subarray(n), i), this.trigger('data', i)
                      else if (i.pid === this.pmtPid)
                        for (
                          i.type = 'pmt', e(t.subarray(n), i), this.trigger('data', i);
                          this.packetsWaitingForPmt.length;

                        )
                          this.processPes_.apply(this, this.packetsWaitingForPmt.shift())
                      else
                        void 0 === this.programMapTable
                          ? this.packetsWaitingForPmt.push([t, n, i])
                          : this.processPes_(t, n, i)
                    }),
                    (this.processPes_ = function (e, t, i) {
                      i.pid === this.programMapTable.video
                        ? (i.streamType = Ne.H264_STREAM_TYPE)
                        : i.pid === this.programMapTable.audio
                        ? (i.streamType = Ne.ADTS_STREAM_TYPE)
                        : (i.streamType = this.programMapTable['timed-metadata'][i.pid]),
                        (i.type = 'pes'),
                        (i.data = e.subarray(t)),
                        this.trigger('data', i)
                    })
                }).prototype = new B()),
                (Xe.STREAM_TYPES = { h264: 27, adts: 15 }),
                ((Ye = function () {
                  var e,
                    t = this,
                    i = !1,
                    n = { data: [], size: 0 },
                    r = { data: [], size: 0 },
                    a = { data: [], size: 0 },
                    s = function (e, i, n) {
                      var r,
                        a,
                        s = new Uint8Array(e.size),
                        o = { type: i },
                        l = 0,
                        u = 0
                      if (e.data.length && !(e.size < 9)) {
                        for (o.trackId = e.data[0].pid, l = 0; l < e.data.length; l++)
                          (a = e.data[l]), s.set(a.data, u), (u += a.data.byteLength)
                        !(function (e, t) {
                          var i,
                            n = (e[0] << 16) | (e[1] << 8) | e[2]
                          ;(t.data = new Uint8Array()),
                            1 === n &&
                              ((t.packetLength = 6 + ((e[4] << 8) | e[5])),
                              (t.dataAlignmentIndicator = 0 !== (4 & e[6])),
                              192 & (i = e[7]) &&
                                ((t.pts =
                                  ((14 & e[9]) << 27) |
                                  ((255 & e[10]) << 20) |
                                  ((254 & e[11]) << 12) |
                                  ((255 & e[12]) << 5) |
                                  ((254 & e[13]) >>> 3)),
                                (t.pts *= 4),
                                (t.pts += (6 & e[13]) >>> 1),
                                (t.dts = t.pts),
                                64 & i &&
                                  ((t.dts =
                                    ((14 & e[14]) << 27) |
                                    ((255 & e[15]) << 20) |
                                    ((254 & e[16]) << 12) |
                                    ((255 & e[17]) << 5) |
                                    ((254 & e[18]) >>> 3)),
                                  (t.dts *= 4),
                                  (t.dts += (6 & e[18]) >>> 1))),
                              (t.data = e.subarray(9 + e[8])))
                        })(s, o),
                          (r = 'video' === i || o.packetLength <= e.size),
                          (n || r) && ((e.size = 0), (e.data.length = 0)),
                          r && t.trigger('data', o)
                      }
                    }
                  Ye.prototype.init.call(this),
                    (this.push = function (o) {
                      ;({
                        pat: function () {},
                        pes: function () {
                          var e, t
                          switch (o.streamType) {
                            case Ne.H264_STREAM_TYPE:
                              ;(e = n), (t = 'video')
                              break
                            case Ne.ADTS_STREAM_TYPE:
                              ;(e = r), (t = 'audio')
                              break
                            case Ne.METADATA_STREAM_TYPE:
                              ;(e = a), (t = 'timed-metadata')
                              break
                            default:
                              return
                          }
                          o.payloadUnitStartIndicator && s(e, t, !0), e.data.push(o), (e.size += o.data.byteLength)
                        },
                        pmt: function () {
                          var n = { type: 'metadata', tracks: [] }
                          null !== (e = o.programMapTable).video &&
                            n.tracks.push({
                              timelineStartInfo: { baseMediaDecodeTime: 0 },
                              id: +e.video,
                              codec: 'avc',
                              type: 'video',
                            }),
                            null !== e.audio &&
                              n.tracks.push({
                                timelineStartInfo: { baseMediaDecodeTime: 0 },
                                id: +e.audio,
                                codec: 'adts',
                                type: 'audio',
                              }),
                            (i = !0),
                            t.trigger('data', n)
                        },
                      }[o.type]())
                    }),
                    (this.reset = function () {
                      ;(n.size = 0), (n.data.length = 0), (r.size = 0), (r.data.length = 0), this.trigger('reset')
                    }),
                    (this.flushStreams_ = function () {
                      s(n, 'video'), s(r, 'audio'), s(a, 'timed-metadata')
                    }),
                    (this.flush = function () {
                      if (!i && e) {
                        var n = { type: 'metadata', tracks: [] }
                        null !== e.video &&
                          n.tracks.push({
                            timelineStartInfo: { baseMediaDecodeTime: 0 },
                            id: +e.video,
                            codec: 'avc',
                            type: 'video',
                          }),
                          null !== e.audio &&
                            n.tracks.push({
                              timelineStartInfo: { baseMediaDecodeTime: 0 },
                              id: +e.audio,
                              codec: 'adts',
                              type: 'audio',
                            }),
                          t.trigger('data', n)
                      }
                      ;(i = !1), this.flushStreams_(), this.trigger('done')
                    })
                }).prototype = new B())
              var tt = {
                PAT_PID: 0,
                MP2T_PACKET_LENGTH: et,
                TransportPacketStream: Qe,
                TransportParseStream: Xe,
                ElementaryStream: Ye,
                TimestampRolloverStream: Je,
                CaptionStream: Be.CaptionStream,
                Cea608Stream: Be.Cea608Stream,
                Cea708Stream: Be.Cea708Stream,
                MetadataStream: $e,
              }
              for (var it in Ne) Ne.hasOwnProperty(it) && (tt[it] = Ne[it])
              var nt,
                rt = tt,
                at = oe,
                st = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]
              ;(nt = function (e) {
                var t,
                  i = 0
                nt.prototype.init.call(this),
                  (this.skipWarn_ = function (e, t) {
                    this.trigger('log', {
                      level: 'warn',
                      message: 'adts skiping bytes ' + e + ' to ' + t + ' in frame ' + i + ' outside syncword',
                    })
                  }),
                  (this.push = function (n) {
                    var r,
                      a,
                      s,
                      o,
                      l,
                      u = 0
                    if ((e || (i = 0), 'audio' === n.type)) {
                      var d
                      for (
                        t && t.length
                          ? ((s = t),
                            (t = new Uint8Array(s.byteLength + n.data.byteLength)).set(s),
                            t.set(n.data, s.byteLength))
                          : (t = n.data);
                        u + 7 < t.length;

                      )
                        if (255 === t[u] && 240 === (246 & t[u + 1])) {
                          if (
                            ('number' === typeof d && (this.skipWarn_(d, u), (d = null)),
                            (a = 2 * (1 & ~t[u + 1])),
                            (r = ((3 & t[u + 3]) << 11) | (t[u + 4] << 3) | ((224 & t[u + 5]) >> 5)),
                            (l = ((o = 1024 * (1 + (3 & t[u + 6]))) * at) / st[(60 & t[u + 2]) >>> 2]),
                            t.byteLength - u < r)
                          )
                            break
                          this.trigger('data', {
                            pts: n.pts + i * l,
                            dts: n.dts + i * l,
                            sampleCount: o,
                            audioobjecttype: 1 + ((t[u + 2] >>> 6) & 3),
                            channelcount: ((1 & t[u + 2]) << 2) | ((192 & t[u + 3]) >>> 6),
                            samplerate: st[(60 & t[u + 2]) >>> 2],
                            samplingfrequencyindex: (60 & t[u + 2]) >>> 2,
                            samplesize: 16,
                            data: t.subarray(u + 7 + a, u + r),
                          }),
                            i++,
                            (u += r)
                        } else 'number' !== typeof d && (d = u), u++
                      'number' === typeof d && (this.skipWarn_(d, u), (d = null)), (t = t.subarray(u))
                    }
                  }),
                  (this.flush = function () {
                    ;(i = 0), this.trigger('done')
                  }),
                  (this.reset = function () {
                    ;(t = void 0), this.trigger('reset')
                  }),
                  (this.endTimeline = function () {
                    ;(t = void 0), this.trigger('endedtimeline')
                  })
              }).prototype = new B()
              var ot,
                lt,
                ut,
                dt = nt,
                ct = function (e) {
                  var t = e.byteLength,
                    i = 0,
                    n = 0
                  ;(this.length = function () {
                    return 8 * t
                  }),
                    (this.bitsAvailable = function () {
                      return 8 * t + n
                    }),
                    (this.loadWord = function () {
                      var r = e.byteLength - t,
                        a = new Uint8Array(4),
                        s = Math.min(4, t)
                      if (0 === s) throw new Error('no bytes available')
                      a.set(e.subarray(r, r + s)), (i = new DataView(a.buffer).getUint32(0)), (n = 8 * s), (t -= s)
                    }),
                    (this.skipBits = function (e) {
                      var r
                      n > e
                        ? ((i <<= e), (n -= e))
                        : ((e -= n), (e -= 8 * (r = Math.floor(e / 8))), (t -= r), this.loadWord(), (i <<= e), (n -= e))
                    }),
                    (this.readBits = function (e) {
                      var r = Math.min(n, e),
                        a = i >>> (32 - r)
                      return (
                        (n -= r) > 0 ? (i <<= r) : t > 0 && this.loadWord(),
                        (r = e - r) > 0 ? (a << r) | this.readBits(r) : a
                      )
                    }),
                    (this.skipLeadingZeros = function () {
                      var e
                      for (e = 0; e < n; ++e) if (0 !== (i & (2147483648 >>> e))) return (i <<= e), (n -= e), e
                      return this.loadWord(), e + this.skipLeadingZeros()
                    }),
                    (this.skipUnsignedExpGolomb = function () {
                      this.skipBits(1 + this.skipLeadingZeros())
                    }),
                    (this.skipExpGolomb = function () {
                      this.skipBits(1 + this.skipLeadingZeros())
                    }),
                    (this.readUnsignedExpGolomb = function () {
                      var e = this.skipLeadingZeros()
                      return this.readBits(e + 1) - 1
                    }),
                    (this.readExpGolomb = function () {
                      var e = this.readUnsignedExpGolomb()
                      return 1 & e ? (1 + e) >>> 1 : -1 * (e >>> 1)
                    }),
                    (this.readBoolean = function () {
                      return 1 === this.readBits(1)
                    }),
                    (this.readUnsignedByte = function () {
                      return this.readBits(8)
                    }),
                    this.loadWord()
                }
              ;((lt = function () {
                var e,
                  t,
                  i = 0
                lt.prototype.init.call(this),
                  (this.push = function (n) {
                    var r
                    t
                      ? ((r = new Uint8Array(t.byteLength + n.data.byteLength)).set(t),
                        r.set(n.data, t.byteLength),
                        (t = r))
                      : (t = n.data)
                    for (var a = t.byteLength; i < a - 3; i++)
                      if (1 === t[i + 2]) {
                        e = i + 5
                        break
                      }
                    for (; e < a; )
                      switch (t[e]) {
                        case 0:
                          if (0 !== t[e - 1]) {
                            e += 2
                            break
                          }
                          if (0 !== t[e - 2]) {
                            e++
                            break
                          }
                          i + 3 !== e - 2 && this.trigger('data', t.subarray(i + 3, e - 2))
                          do {
                            e++
                          } while (1 !== t[e] && e < a)
                          ;(i = e - 2), (e += 3)
                          break
                        case 1:
                          if (0 !== t[e - 1] || 0 !== t[e - 2]) {
                            e += 3
                            break
                          }
                          this.trigger('data', t.subarray(i + 3, e - 2)), (i = e - 2), (e += 3)
                          break
                        default:
                          e += 3
                      }
                    ;(t = t.subarray(i)), (e -= i), (i = 0)
                  }),
                  (this.reset = function () {
                    ;(t = null), (i = 0), this.trigger('reset')
                  }),
                  (this.flush = function () {
                    t && t.byteLength > 3 && this.trigger('data', t.subarray(i + 3)),
                      (t = null),
                      (i = 0),
                      this.trigger('done')
                  }),
                  (this.endTimeline = function () {
                    this.flush(), this.trigger('endedtimeline')
                  })
              }).prototype = new B()),
                (ut = {
                  100: !0,
                  110: !0,
                  122: !0,
                  244: !0,
                  44: !0,
                  83: !0,
                  86: !0,
                  118: !0,
                  128: !0,
                  138: !0,
                  139: !0,
                  134: !0,
                }),
                ((ot = function () {
                  var e,
                    t,
                    i,
                    n,
                    r,
                    a,
                    s,
                    o = new lt()
                  ot.prototype.init.call(this),
                    (e = this),
                    (this.push = function (e) {
                      'video' === e.type && ((t = e.trackId), (i = e.pts), (n = e.dts), o.push(e))
                    }),
                    o.on('data', function (s) {
                      var o = { trackId: t, pts: i, dts: n, data: s, nalUnitTypeCode: 31 & s[0] }
                      switch (o.nalUnitTypeCode) {
                        case 5:
                          o.nalUnitType = 'slice_layer_without_partitioning_rbsp_idr'
                          break
                        case 6:
                          ;(o.nalUnitType = 'sei_rbsp'), (o.escapedRBSP = r(s.subarray(1)))
                          break
                        case 7:
                          ;(o.nalUnitType = 'seq_parameter_set_rbsp'),
                            (o.escapedRBSP = r(s.subarray(1))),
                            (o.config = a(o.escapedRBSP))
                          break
                        case 8:
                          o.nalUnitType = 'pic_parameter_set_rbsp'
                          break
                        case 9:
                          o.nalUnitType = 'access_unit_delimiter_rbsp'
                      }
                      e.trigger('data', o)
                    }),
                    o.on('done', function () {
                      e.trigger('done')
                    }),
                    o.on('partialdone', function () {
                      e.trigger('partialdone')
                    }),
                    o.on('reset', function () {
                      e.trigger('reset')
                    }),
                    o.on('endedtimeline', function () {
                      e.trigger('endedtimeline')
                    }),
                    (this.flush = function () {
                      o.flush()
                    }),
                    (this.partialFlush = function () {
                      o.partialFlush()
                    }),
                    (this.reset = function () {
                      o.reset()
                    }),
                    (this.endTimeline = function () {
                      o.endTimeline()
                    }),
                    (s = function (e, t) {
                      var i,
                        n = 8,
                        r = 8
                      for (i = 0; i < e; i++)
                        0 !== r && (r = (n + t.readExpGolomb() + 256) % 256), (n = 0 === r ? n : r)
                    }),
                    (r = function (e) {
                      for (var t, i, n = e.byteLength, r = [], a = 1; a < n - 2; )
                        0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (r.push(a + 2), (a += 2)) : a++
                      if (0 === r.length) return e
                      ;(t = n - r.length), (i = new Uint8Array(t))
                      var s = 0
                      for (a = 0; a < t; s++, a++) s === r[0] && (s++, r.shift()), (i[a] = e[s])
                      return i
                    }),
                    (a = function (e) {
                      var t,
                        i,
                        n,
                        r,
                        a,
                        o,
                        l,
                        u,
                        d,
                        c,
                        h,
                        p,
                        f = 0,
                        m = 0,
                        g = 0,
                        _ = 0,
                        v = [1, 1]
                      if (
                        ((i = (t = new ct(e)).readUnsignedByte()),
                        (r = t.readUnsignedByte()),
                        (n = t.readUnsignedByte()),
                        t.skipUnsignedExpGolomb(),
                        ut[i] &&
                          (3 === (a = t.readUnsignedExpGolomb()) && t.skipBits(1),
                          t.skipUnsignedExpGolomb(),
                          t.skipUnsignedExpGolomb(),
                          t.skipBits(1),
                          t.readBoolean()))
                      )
                        for (h = 3 !== a ? 8 : 12, p = 0; p < h; p++) t.readBoolean() && s(p < 6 ? 16 : 64, t)
                      if ((t.skipUnsignedExpGolomb(), 0 === (o = t.readUnsignedExpGolomb()))) t.readUnsignedExpGolomb()
                      else if (1 === o)
                        for (
                          t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), l = t.readUnsignedExpGolomb(), p = 0;
                          p < l;
                          p++
                        )
                          t.skipExpGolomb()
                      if (
                        (t.skipUnsignedExpGolomb(),
                        t.skipBits(1),
                        (u = t.readUnsignedExpGolomb()),
                        (d = t.readUnsignedExpGolomb()),
                        0 === (c = t.readBits(1)) && t.skipBits(1),
                        t.skipBits(1),
                        t.readBoolean() &&
                          ((f = t.readUnsignedExpGolomb()),
                          (m = t.readUnsignedExpGolomb()),
                          (g = t.readUnsignedExpGolomb()),
                          (_ = t.readUnsignedExpGolomb())),
                        t.readBoolean() && t.readBoolean())
                      ) {
                        switch (t.readUnsignedByte()) {
                          case 1:
                            v = [1, 1]
                            break
                          case 2:
                            v = [12, 11]
                            break
                          case 3:
                            v = [10, 11]
                            break
                          case 4:
                            v = [16, 11]
                            break
                          case 5:
                            v = [40, 33]
                            break
                          case 6:
                            v = [24, 11]
                            break
                          case 7:
                            v = [20, 11]
                            break
                          case 8:
                            v = [32, 11]
                            break
                          case 9:
                            v = [80, 33]
                            break
                          case 10:
                            v = [18, 11]
                            break
                          case 11:
                            v = [15, 11]
                            break
                          case 12:
                            v = [64, 33]
                            break
                          case 13:
                            v = [160, 99]
                            break
                          case 14:
                            v = [4, 3]
                            break
                          case 15:
                            v = [3, 2]
                            break
                          case 16:
                            v = [2, 1]
                            break
                          case 255:
                            v = [
                              (t.readUnsignedByte() << 8) | t.readUnsignedByte(),
                              (t.readUnsignedByte() << 8) | t.readUnsignedByte(),
                            ]
                        }
                        v && (v[0], v[1])
                      }
                      return {
                        profileIdc: i,
                        levelIdc: n,
                        profileCompatibility: r,
                        width: 16 * (u + 1) - 2 * f - 2 * m,
                        height: (2 - c) * (d + 1) * 16 - 2 * g - 2 * _,
                        sarRatio: v,
                      }
                    })
                }).prototype = new B())
              var ht,
                pt = { H264Stream: ot, NalByteStream: lt },
                ft = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
                mt = function (e, t) {
                  var i = (e[t + 6] << 21) | (e[t + 7] << 14) | (e[t + 8] << 7) | e[t + 9]
                  return (i = i >= 0 ? i : 0), (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
                },
                gt = function e(t, i) {
                  return t.length - i < 10 ||
                    t[i] !== 'I'.charCodeAt(0) ||
                    t[i + 1] !== 'D'.charCodeAt(0) ||
                    t[i + 2] !== '3'.charCodeAt(0)
                    ? i
                    : e(t, (i += mt(t, i)))
                },
                _t = function (e) {
                  return (e[0] << 21) | (e[1] << 14) | (e[2] << 7) | e[3]
                },
                vt = {
                  isLikelyAacData: function (e) {
                    var t = gt(e, 0)
                    return (
                      e.length >= t + 2 && 255 === (255 & e[t]) && 240 === (240 & e[t + 1]) && 16 === (22 & e[t + 1])
                    )
                  },
                  parseId3TagSize: mt,
                  parseAdtsSize: function (e, t) {
                    var i = (224 & e[t + 5]) >> 5,
                      n = e[t + 4] << 3
                    return (6144 & e[t + 3]) | n | i
                  },
                  parseType: function (e, t) {
                    return e[t] === 'I'.charCodeAt(0) &&
                      e[t + 1] === 'D'.charCodeAt(0) &&
                      e[t + 2] === '3'.charCodeAt(0)
                      ? 'timed-metadata'
                      : !0 & e[t] && 240 === (240 & e[t + 1])
                      ? 'audio'
                      : null
                  },
                  parseSampleRate: function (e) {
                    for (var t = 0; t + 5 < e.length; ) {
                      if (255 === e[t] && 240 === (246 & e[t + 1])) return ft[(60 & e[t + 2]) >>> 2]
                      t++
                    }
                    return null
                  },
                  parseAacTimestamp: function (e) {
                    var t, i, n
                    ;(t = 10), 64 & e[5] && ((t += 4), (t += _t(e.subarray(10, 14))))
                    do {
                      if ((i = _t(e.subarray(t + 4, t + 8))) < 1) return null
                      if ('PRIV' === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) {
                        n = e.subarray(t + 10, t + i + 10)
                        for (var r = 0; r < n.byteLength; r++)
                          if (0 === n[r]) {
                            if (
                              'com.apple.streaming.transportStreamTimestamp' ===
                              unescape(
                                (function (e, t, i) {
                                  var n,
                                    r = ''
                                  for (n = t; n < i; n++) r += '%' + ('00' + e[n].toString(16)).slice(-2)
                                  return r
                                })(n, 0, r),
                              )
                            ) {
                              var a = n.subarray(r + 1),
                                s = ((1 & a[3]) << 30) | (a[4] << 22) | (a[5] << 14) | (a[6] << 6) | (a[7] >>> 2)
                              return (s *= 4), (s += 3 & a[7])
                            }
                            break
                          }
                      }
                      ;(t += 10), (t += i)
                    } while (t < e.byteLength)
                    return null
                  },
                }
              ;(ht = function () {
                var e = new Uint8Array(),
                  t = 0
                ht.prototype.init.call(this),
                  (this.setTimestamp = function (e) {
                    t = e
                  }),
                  (this.push = function (i) {
                    var n,
                      r,
                      a,
                      s,
                      o = 0,
                      l = 0
                    for (
                      e.length
                        ? ((s = e.length), (e = new Uint8Array(i.byteLength + s)).set(e.subarray(0, s)), e.set(i, s))
                        : (e = i);
                      e.length - l >= 3;

                    )
                      if (
                        e[l] !== 'I'.charCodeAt(0) ||
                        e[l + 1] !== 'D'.charCodeAt(0) ||
                        e[l + 2] !== '3'.charCodeAt(0)
                      )
                        if (255 !== (255 & e[l]) || 240 !== (240 & e[l + 1])) l++
                        else {
                          if (e.length - l < 7) break
                          if (l + (o = vt.parseAdtsSize(e, l)) > e.length) break
                          ;(a = { type: 'audio', data: e.subarray(l, l + o), pts: t, dts: t }),
                            this.trigger('data', a),
                            (l += o)
                        }
                      else {
                        if (e.length - l < 10) break
                        if (l + (o = vt.parseId3TagSize(e, l)) > e.length) break
                        ;(r = { type: 'timed-metadata', data: e.subarray(l, l + o) }), this.trigger('data', r), (l += o)
                      }
                    ;(n = e.length - l), (e = n > 0 ? e.subarray(l) : new Uint8Array())
                  }),
                  (this.reset = function () {
                    ;(e = new Uint8Array()), this.trigger('reset')
                  }),
                  (this.endTimeline = function () {
                    ;(e = new Uint8Array()), this.trigger('endedtimeline')
                  })
              }).prototype = new B()
              var yt,
                Tt,
                bt,
                St,
                kt = ht,
                Ct = ['audioobjecttype', 'channelcount', 'samplerate', 'samplingfrequencyindex', 'samplesize'],
                Et = ['width', 'height', 'profileIdc', 'levelIdc', 'profileCompatibility', 'sarRatio'],
                wt = pt.H264Stream,
                xt = vt.isLikelyAacData,
                It = oe,
                Pt = function (e, t) {
                  var i
                  if (e.length !== t.length) return !1
                  for (i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1
                  return !0
                },
                At = function (e, t, i, n, r, a) {
                  return {
                    start: { dts: e, pts: e + (i - t) },
                    end: { dts: e + (n - t), pts: e + (r - i) },
                    prependedContentDuration: a,
                    baseMediaDecodeTime: e,
                  }
                }
              ;((Tt = function (e, t) {
                var i,
                  n = [],
                  r = 0,
                  a = 0,
                  s = 1 / 0
                ;(i = (t = t || {}).firstSequenceNumber || 0),
                  Tt.prototype.init.call(this),
                  (this.push = function (t) {
                    Te(e, t),
                      e &&
                        Ct.forEach(function (i) {
                          e[i] = t[i]
                        }),
                      n.push(t)
                  }),
                  (this.setEarliestDts = function (e) {
                    r = e
                  }),
                  (this.setVideoBaseMediaDecodeTime = function (e) {
                    s = e
                  }),
                  (this.setAudioAppendStart = function (e) {
                    a = e
                  }),
                  (this.flush = function () {
                    var o, l, u, d, c, h, p
                    0 !== n.length
                      ? ((o = fe(n, e, r)),
                        (e.baseMediaDecodeTime = ye(e, t.keepOriginalTimestamps)),
                        (p = pe(e, o, a, s)),
                        (e.samples = me(o)),
                        (u = K(ge(o))),
                        (n = []),
                        (l = Z(i, [e])),
                        (d = new Uint8Array(l.byteLength + u.byteLength)),
                        i++,
                        d.set(l),
                        d.set(u, l.byteLength),
                        ve(e),
                        (c = Math.ceil((1024 * It) / e.samplerate)),
                        o.length &&
                          ((h = o.length * c),
                          this.trigger(
                            'segmentTimingInfo',
                            At(
                              de(e.baseMediaDecodeTime, e.samplerate),
                              o[0].dts,
                              o[0].pts,
                              o[0].dts + h,
                              o[0].pts + h,
                              p || 0,
                            ),
                          ),
                          this.trigger('timingInfo', { start: o[0].pts, end: o[0].pts + h })),
                        this.trigger('data', { track: e, boxes: d }),
                        this.trigger('done', 'AudioSegmentStream'))
                      : this.trigger('done', 'AudioSegmentStream')
                  }),
                  (this.reset = function () {
                    ve(e), (n = []), this.trigger('reset')
                  })
              }).prototype = new B()),
                ((yt = function (e, t) {
                  var i,
                    n,
                    r,
                    a = [],
                    s = []
                  ;(i = (t = t || {}).firstSequenceNumber || 0),
                    yt.prototype.init.call(this),
                    delete e.minPTS,
                    (this.gopCache_ = []),
                    (this.push = function (t) {
                      Te(e, t),
                        'seq_parameter_set_rbsp' !== t.nalUnitType ||
                          n ||
                          ((n = t.config),
                          (e.sps = [t.data]),
                          Et.forEach(function (t) {
                            e[t] = n[t]
                          }, this)),
                        'pic_parameter_set_rbsp' !== t.nalUnitType || r || ((r = t.data), (e.pps = [t.data])),
                        a.push(t)
                    }),
                    (this.flush = function () {
                      for (
                        var n, r, o, l, u, d, c, h, p = 0;
                        a.length && 'access_unit_delimiter_rbsp' !== a[0].nalUnitType;

                      )
                        a.shift()
                      if (0 === a.length) return this.resetStream_(), void this.trigger('done', 'VideoSegmentStream')
                      if (
                        ((n = Y(a)),
                        (o = $(n))[0][0].keyFrame ||
                          ((r = this.getGopForFusion_(a[0], e))
                            ? ((p = r.duration),
                              o.unshift(r),
                              (o.byteLength += r.byteLength),
                              (o.nalCount += r.nalCount),
                              (o.pts = r.pts),
                              (o.dts = r.dts),
                              (o.duration += r.duration))
                            : (o = J(o))),
                        s.length)
                      ) {
                        var f
                        if (!(f = t.alignGopsAtEnd ? this.alignGopsAtEnd_(o) : this.alignGopsAtStart_(o)))
                          return (
                            this.gopCache_.unshift({ gop: o.pop(), pps: e.pps, sps: e.sps }),
                            (this.gopCache_.length = Math.min(6, this.gopCache_.length)),
                            (a = []),
                            this.resetStream_(),
                            void this.trigger('done', 'VideoSegmentStream')
                          )
                        ve(e), (o = f)
                      }
                      Te(e, o),
                        (e.samples = ee(o)),
                        (u = K(te(o))),
                        (e.baseMediaDecodeTime = ye(e, t.keepOriginalTimestamps)),
                        this.trigger(
                          'processedGopsInfo',
                          o.map(function (e) {
                            return { pts: e.pts, dts: e.dts, byteLength: e.byteLength }
                          }),
                        ),
                        (c = o[0]),
                        (h = o[o.length - 1]),
                        this.trigger(
                          'segmentTimingInfo',
                          At(e.baseMediaDecodeTime, c.dts, c.pts, h.dts + h.duration, h.pts + h.duration, p),
                        ),
                        this.trigger('timingInfo', {
                          start: o[0].pts,
                          end: o[o.length - 1].pts + o[o.length - 1].duration,
                        }),
                        this.gopCache_.unshift({ gop: o.pop(), pps: e.pps, sps: e.sps }),
                        (this.gopCache_.length = Math.min(6, this.gopCache_.length)),
                        (a = []),
                        this.trigger('baseMediaDecodeTime', e.baseMediaDecodeTime),
                        this.trigger('timelineStartInfo', e.timelineStartInfo),
                        (l = Z(i, [e])),
                        (d = new Uint8Array(l.byteLength + u.byteLength)),
                        i++,
                        d.set(l),
                        d.set(u, l.byteLength),
                        this.trigger('data', { track: e, boxes: d }),
                        this.resetStream_(),
                        this.trigger('done', 'VideoSegmentStream')
                    }),
                    (this.reset = function () {
                      this.resetStream_(), (a = []), (this.gopCache_.length = 0), (s.length = 0), this.trigger('reset')
                    }),
                    (this.resetStream_ = function () {
                      ve(e), (n = void 0), (r = void 0)
                    }),
                    (this.getGopForFusion_ = function (t) {
                      var i,
                        n,
                        r,
                        a,
                        s,
                        o = 1 / 0
                      for (s = 0; s < this.gopCache_.length; s++)
                        (r = (a = this.gopCache_[s]).gop),
                          e.pps &&
                            Pt(e.pps[0], a.pps[0]) &&
                            e.sps &&
                            Pt(e.sps[0], a.sps[0]) &&
                            (r.dts < e.timelineStartInfo.dts ||
                              ((i = t.dts - r.dts - r.duration) >= -1e4 &&
                                i <= 45e3 &&
                                (!n || o > i) &&
                                ((n = a), (o = i))))
                      return n ? n.gop : null
                    }),
                    (this.alignGopsAtStart_ = function (e) {
                      var t, i, n, r, a, o, l, u
                      for (
                        a = e.byteLength, o = e.nalCount, l = e.duration, t = i = 0;
                        t < s.length && i < e.length && ((n = s[t]), (r = e[i]), n.pts !== r.pts);

                      )
                        r.pts > n.pts ? t++ : (i++, (a -= r.byteLength), (o -= r.nalCount), (l -= r.duration))
                      return 0 === i
                        ? e
                        : i === e.length
                        ? null
                        : (((u = e.slice(i)).byteLength = a),
                          (u.duration = l),
                          (u.nalCount = o),
                          (u.pts = u[0].pts),
                          (u.dts = u[0].dts),
                          u)
                    }),
                    (this.alignGopsAtEnd_ = function (e) {
                      var t, i, n, r, a, o, l
                      for (t = s.length - 1, i = e.length - 1, a = null, o = !1; t >= 0 && i >= 0; ) {
                        if (((n = s[t]), (r = e[i]), n.pts === r.pts)) {
                          o = !0
                          break
                        }
                        n.pts > r.pts ? t-- : (t === s.length - 1 && (a = i), i--)
                      }
                      if (!o && null === a) return null
                      if (0 === (l = o ? i : a)) return e
                      var u = e.slice(l),
                        d = u.reduce(
                          function (e, t) {
                            return (
                              (e.byteLength += t.byteLength), (e.duration += t.duration), (e.nalCount += t.nalCount), e
                            )
                          },
                          { byteLength: 0, duration: 0, nalCount: 0 },
                        )
                      return (
                        (u.byteLength = d.byteLength),
                        (u.duration = d.duration),
                        (u.nalCount = d.nalCount),
                        (u.pts = u[0].pts),
                        (u.dts = u[0].dts),
                        u
                      )
                    }),
                    (this.alignGopsWith = function (e) {
                      s = e
                    })
                }).prototype = new B()),
                ((St = function (e, t) {
                  ;(this.numberOfTracks = 0),
                    (this.metadataStream = t),
                    'undefined' !== typeof (e = e || {}).remux
                      ? (this.remuxTracks = !!e.remux)
                      : (this.remuxTracks = !0),
                    'boolean' === typeof e.keepOriginalTimestamps
                      ? (this.keepOriginalTimestamps = e.keepOriginalTimestamps)
                      : (this.keepOriginalTimestamps = !1),
                    (this.pendingTracks = []),
                    (this.videoTrack = null),
                    (this.pendingBoxes = []),
                    (this.pendingCaptions = []),
                    (this.pendingMetadata = []),
                    (this.pendingBytes = 0),
                    (this.emittedTracks = 0),
                    St.prototype.init.call(this),
                    (this.push = function (e) {
                      return e.text
                        ? this.pendingCaptions.push(e)
                        : e.frames
                        ? this.pendingMetadata.push(e)
                        : (this.pendingTracks.push(e.track),
                          (this.pendingBytes += e.boxes.byteLength),
                          'video' === e.track.type && ((this.videoTrack = e.track), this.pendingBoxes.push(e.boxes)),
                          void (
                            'audio' === e.track.type &&
                            ((this.audioTrack = e.track), this.pendingBoxes.unshift(e.boxes))
                          ))
                    })
                }).prototype = new B()),
                (St.prototype.flush = function (e) {
                  var t,
                    i,
                    n,
                    r,
                    a = 0,
                    s = { captions: [], captionStreams: {}, metadata: [], info: {} },
                    o = 0
                  if (this.pendingTracks.length < this.numberOfTracks) {
                    if ('VideoSegmentStream' !== e && 'AudioSegmentStream' !== e) return
                    if (this.remuxTracks) return
                    if (0 === this.pendingTracks.length)
                      return (
                        this.emittedTracks++,
                        void (
                          this.emittedTracks >= this.numberOfTracks && (this.trigger('done'), (this.emittedTracks = 0))
                        )
                      )
                  }
                  if (
                    (this.videoTrack
                      ? ((o = this.videoTrack.timelineStartInfo.pts),
                        Et.forEach(function (e) {
                          s.info[e] = this.videoTrack[e]
                        }, this))
                      : this.audioTrack &&
                        ((o = this.audioTrack.timelineStartInfo.pts),
                        Ct.forEach(function (e) {
                          s.info[e] = this.audioTrack[e]
                        }, this)),
                    this.videoTrack || this.audioTrack)
                  ) {
                    for (
                      1 === this.pendingTracks.length ? (s.type = this.pendingTracks[0].type) : (s.type = 'combined'),
                        this.emittedTracks += this.pendingTracks.length,
                        n = Q(this.pendingTracks),
                        s.initSegment = new Uint8Array(n.byteLength),
                        s.initSegment.set(n),
                        s.data = new Uint8Array(this.pendingBytes),
                        r = 0;
                      r < this.pendingBoxes.length;
                      r++
                    )
                      s.data.set(this.pendingBoxes[r], a), (a += this.pendingBoxes[r].byteLength)
                    for (r = 0; r < this.pendingCaptions.length; r++)
                      ((t = this.pendingCaptions[r]).startTime = he(t.startPts, o, this.keepOriginalTimestamps)),
                        (t.endTime = he(t.endPts, o, this.keepOriginalTimestamps)),
                        (s.captionStreams[t.stream] = !0),
                        s.captions.push(t)
                    for (r = 0; r < this.pendingMetadata.length; r++)
                      ((i = this.pendingMetadata[r]).cueTime = he(i.pts, o, this.keepOriginalTimestamps)),
                        s.metadata.push(i)
                    for (
                      s.metadata.dispatchType = this.metadataStream.dispatchType,
                        this.pendingTracks.length = 0,
                        this.videoTrack = null,
                        this.pendingBoxes.length = 0,
                        this.pendingCaptions.length = 0,
                        this.pendingBytes = 0,
                        this.pendingMetadata.length = 0,
                        this.trigger('data', s),
                        r = 0;
                      r < s.captions.length;
                      r++
                    )
                      (t = s.captions[r]), this.trigger('caption', t)
                    for (r = 0; r < s.metadata.length; r++) (i = s.metadata[r]), this.trigger('id3Frame', i)
                  }
                  this.emittedTracks >= this.numberOfTracks && (this.trigger('done'), (this.emittedTracks = 0))
                }),
                (St.prototype.setRemux = function (e) {
                  this.remuxTracks = e
                }),
                ((bt = function (e) {
                  var t,
                    i,
                    n = this,
                    r = !0
                  bt.prototype.init.call(this),
                    (e = e || {}),
                    (this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0),
                    (this.transmuxPipeline_ = {}),
                    (this.setupAacPipeline = function () {
                      var r = {}
                      ;(this.transmuxPipeline_ = r),
                        (r.type = 'aac'),
                        (r.metadataStream = new rt.MetadataStream()),
                        (r.aacStream = new kt()),
                        (r.audioTimestampRolloverStream = new rt.TimestampRolloverStream('audio')),
                        (r.timedMetadataTimestampRolloverStream = new rt.TimestampRolloverStream('timed-metadata')),
                        (r.adtsStream = new dt()),
                        (r.coalesceStream = new St(e, r.metadataStream)),
                        (r.headOfPipeline = r.aacStream),
                        r.aacStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream),
                        r.aacStream
                          .pipe(r.timedMetadataTimestampRolloverStream)
                          .pipe(r.metadataStream)
                          .pipe(r.coalesceStream),
                        r.metadataStream.on('timestamp', function (e) {
                          r.aacStream.setTimestamp(e.timeStamp)
                        }),
                        r.aacStream.on('data', function (a) {
                          ;('timed-metadata' !== a.type && 'audio' !== a.type) ||
                            r.audioSegmentStream ||
                            ((i = i || {
                              timelineStartInfo: { baseMediaDecodeTime: n.baseMediaDecodeTime },
                              codec: 'adts',
                              type: 'audio',
                            }),
                            r.coalesceStream.numberOfTracks++,
                            (r.audioSegmentStream = new Tt(i, e)),
                            r.audioSegmentStream.on('log', n.getLogTrigger_('audioSegmentStream')),
                            r.audioSegmentStream.on('timingInfo', n.trigger.bind(n, 'audioTimingInfo')),
                            r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream),
                            n.trigger('trackinfo', { hasAudio: !!i, hasVideo: !!t }))
                        }),
                        r.coalesceStream.on('data', this.trigger.bind(this, 'data')),
                        r.coalesceStream.on('done', this.trigger.bind(this, 'done'))
                    }),
                    (this.setupTsPipeline = function () {
                      var r = {}
                      ;(this.transmuxPipeline_ = r),
                        (r.type = 'ts'),
                        (r.metadataStream = new rt.MetadataStream()),
                        (r.packetStream = new rt.TransportPacketStream()),
                        (r.parseStream = new rt.TransportParseStream()),
                        (r.elementaryStream = new rt.ElementaryStream()),
                        (r.timestampRolloverStream = new rt.TimestampRolloverStream()),
                        (r.adtsStream = new dt()),
                        (r.h264Stream = new wt()),
                        (r.captionStream = new rt.CaptionStream(e)),
                        (r.coalesceStream = new St(e, r.metadataStream)),
                        (r.headOfPipeline = r.packetStream),
                        r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream).pipe(r.timestampRolloverStream),
                        r.timestampRolloverStream.pipe(r.h264Stream),
                        r.timestampRolloverStream.pipe(r.adtsStream),
                        r.timestampRolloverStream.pipe(r.metadataStream).pipe(r.coalesceStream),
                        r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream),
                        r.elementaryStream.on('data', function (a) {
                          var s
                          if ('metadata' === a.type) {
                            for (s = a.tracks.length; s--; )
                              t || 'video' !== a.tracks[s].type
                                ? i ||
                                  'audio' !== a.tracks[s].type ||
                                  ((i = a.tracks[s]).timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime)
                                : ((t = a.tracks[s]).timelineStartInfo.baseMediaDecodeTime = n.baseMediaDecodeTime)
                            t &&
                              !r.videoSegmentStream &&
                              (r.coalesceStream.numberOfTracks++,
                              (r.videoSegmentStream = new yt(t, e)),
                              r.videoSegmentStream.on('log', n.getLogTrigger_('videoSegmentStream')),
                              r.videoSegmentStream.on('timelineStartInfo', function (t) {
                                i &&
                                  !e.keepOriginalTimestamps &&
                                  ((i.timelineStartInfo = t),
                                  r.audioSegmentStream.setEarliestDts(t.dts - n.baseMediaDecodeTime))
                              }),
                              r.videoSegmentStream.on('processedGopsInfo', n.trigger.bind(n, 'gopInfo')),
                              r.videoSegmentStream.on('segmentTimingInfo', n.trigger.bind(n, 'videoSegmentTimingInfo')),
                              r.videoSegmentStream.on('baseMediaDecodeTime', function (e) {
                                i && r.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                              }),
                              r.videoSegmentStream.on('timingInfo', n.trigger.bind(n, 'videoTimingInfo')),
                              r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)),
                              i &&
                                !r.audioSegmentStream &&
                                (r.coalesceStream.numberOfTracks++,
                                (r.audioSegmentStream = new Tt(i, e)),
                                r.audioSegmentStream.on('log', n.getLogTrigger_('audioSegmentStream')),
                                r.audioSegmentStream.on('timingInfo', n.trigger.bind(n, 'audioTimingInfo')),
                                r.audioSegmentStream.on(
                                  'segmentTimingInfo',
                                  n.trigger.bind(n, 'audioSegmentTimingInfo'),
                                ),
                                r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)),
                              n.trigger('trackinfo', { hasAudio: !!i, hasVideo: !!t })
                          }
                        }),
                        r.coalesceStream.on('data', this.trigger.bind(this, 'data')),
                        r.coalesceStream.on('id3Frame', function (e) {
                          ;(e.dispatchType = r.metadataStream.dispatchType), n.trigger('id3Frame', e)
                        }),
                        r.coalesceStream.on('caption', this.trigger.bind(this, 'caption')),
                        r.coalesceStream.on('done', this.trigger.bind(this, 'done'))
                    }),
                    (this.setBaseMediaDecodeTime = function (n) {
                      var r = this.transmuxPipeline_
                      e.keepOriginalTimestamps || (this.baseMediaDecodeTime = n),
                        i &&
                          ((i.timelineStartInfo.dts = void 0),
                          (i.timelineStartInfo.pts = void 0),
                          ve(i),
                          r.audioTimestampRolloverStream && r.audioTimestampRolloverStream.discontinuity()),
                        t &&
                          (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = []),
                          (t.timelineStartInfo.dts = void 0),
                          (t.timelineStartInfo.pts = void 0),
                          ve(t),
                          r.captionStream.reset()),
                        r.timestampRolloverStream && r.timestampRolloverStream.discontinuity()
                    }),
                    (this.setAudioAppendStart = function (e) {
                      i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
                    }),
                    (this.setRemux = function (t) {
                      var i = this.transmuxPipeline_
                      ;(e.remux = t), i && i.coalesceStream && i.coalesceStream.setRemux(t)
                    }),
                    (this.alignGopsWith = function (e) {
                      t &&
                        this.transmuxPipeline_.videoSegmentStream &&
                        this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
                    }),
                    (this.getLogTrigger_ = function (e) {
                      var t = this
                      return function (i) {
                        ;(i.stream = e), t.trigger('log', i)
                      }
                    }),
                    (this.push = function (e) {
                      if (r) {
                        var t = xt(e)
                        if (
                          (t && 'aac' !== this.transmuxPipeline_.type
                            ? this.setupAacPipeline()
                            : t || 'ts' === this.transmuxPipeline_.type || this.setupTsPipeline(),
                          this.transmuxPipeline_)
                        )
                          for (var i = Object.keys(this.transmuxPipeline_), n = 0; n < i.length; n++) {
                            var a = i[n]
                            'headOfPipeline' !== a &&
                              this.transmuxPipeline_[a].on &&
                              this.transmuxPipeline_[a].on('log', this.getLogTrigger_(a))
                          }
                        r = !1
                      }
                      this.transmuxPipeline_.headOfPipeline.push(e)
                    }),
                    (this.flush = function () {
                      ;(r = !0), this.transmuxPipeline_.headOfPipeline.flush()
                    }),
                    (this.endTimeline = function () {
                      this.transmuxPipeline_.headOfPipeline.endTimeline()
                    }),
                    (this.reset = function () {
                      this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset()
                    }),
                    (this.resetCaptions = function () {
                      this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
                    })
                }).prototype = new B())
              var Lt,
                Ot,
                Dt,
                Mt = {
                  Transmuxer: bt,
                  VideoSegmentStream: yt,
                  AudioSegmentStream: Tt,
                  AUDIO_PROPERTIES: Ct,
                  VIDEO_PROPERTIES: Et,
                  generateSegmentTimingInfo: At,
                },
                Rt = function (e) {
                  return e >>> 0
                },
                Ut = function (e) {
                  var t = ''
                  return (
                    (t += String.fromCharCode(e[0])),
                    (t += String.fromCharCode(e[1])),
                    (t += String.fromCharCode(e[2])),
                    (t += String.fromCharCode(e[3]))
                  )
                },
                Bt = Rt,
                Nt = function e(t, i) {
                  var n,
                    r,
                    a,
                    s,
                    o,
                    l = []
                  if (!i.length) return null
                  for (n = 0; n < t.byteLength; )
                    (r = Bt((t[n] << 24) | (t[n + 1] << 16) | (t[n + 2] << 8) | t[n + 3])),
                      (a = Ut(t.subarray(n + 4, n + 8))),
                      (s = r > 1 ? n + r : t.byteLength),
                      a === i[0] &&
                        (1 === i.length
                          ? l.push(t.subarray(n + 8, s))
                          : (o = e(t.subarray(n + 8, s), i.slice(1))).length && (l = l.concat(o))),
                      (n = s)
                  return l
                },
                Ft = Rt,
                jt = function (e) {
                  var t = {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    baseMediaDecodeTime: Ft((e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7]),
                  }
                  return (
                    1 === t.version &&
                      ((t.baseMediaDecodeTime *= Math.pow(2, 32)),
                      (t.baseMediaDecodeTime += Ft((e[8] << 24) | (e[9] << 16) | (e[10] << 8) | e[11]))),
                    t
                  )
                },
                Ht = function (e) {
                  return {
                    isLeading: (12 & e[0]) >>> 2,
                    dependsOn: 3 & e[0],
                    isDependedOn: (192 & e[1]) >>> 6,
                    hasRedundancy: (48 & e[1]) >>> 4,
                    paddingValue: (14 & e[1]) >>> 1,
                    isNonSyncSample: 1 & e[1],
                    degradationPriority: (e[2] << 8) | e[3],
                  }
                },
                qt = function (e) {
                  var t,
                    i = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), samples: [] },
                    n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    r = 1 & i.flags[2],
                    a = 4 & i.flags[2],
                    s = 1 & i.flags[1],
                    o = 2 & i.flags[1],
                    l = 4 & i.flags[1],
                    u = 8 & i.flags[1],
                    d = n.getUint32(4),
                    c = 8
                  for (
                    r && ((i.dataOffset = n.getInt32(c)), (c += 4)),
                      a &&
                        d &&
                        ((t = { flags: Ht(e.subarray(c, c + 4)) }),
                        (c += 4),
                        s && ((t.duration = n.getUint32(c)), (c += 4)),
                        o && ((t.size = n.getUint32(c)), (c += 4)),
                        u &&
                          (1 === i.version
                            ? (t.compositionTimeOffset = n.getInt32(c))
                            : (t.compositionTimeOffset = n.getUint32(c)),
                          (c += 4)),
                        i.samples.push(t),
                        d--);
                    d--;

                  )
                    (t = {}),
                      s && ((t.duration = n.getUint32(c)), (c += 4)),
                      o && ((t.size = n.getUint32(c)), (c += 4)),
                      l && ((t.flags = Ht(e.subarray(c, c + 4))), (c += 4)),
                      u &&
                        (1 === i.version
                          ? (t.compositionTimeOffset = n.getInt32(c))
                          : (t.compositionTimeOffset = n.getUint32(c)),
                        (c += 4)),
                      i.samples.push(t)
                  return i
                },
                Vt = function (e) {
                  var t,
                    i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                    n = { version: e[0], flags: new Uint8Array(e.subarray(1, 4)), trackId: i.getUint32(4) },
                    r = 1 & n.flags[2],
                    a = 2 & n.flags[2],
                    s = 8 & n.flags[2],
                    o = 16 & n.flags[2],
                    l = 32 & n.flags[2],
                    u = 65536 & n.flags[0],
                    d = 131072 & n.flags[0]
                  return (
                    (t = 8),
                    r && ((t += 4), (n.baseDataOffset = i.getUint32(12)), (t += 4)),
                    a && ((n.sampleDescriptionIndex = i.getUint32(t)), (t += 4)),
                    s && ((n.defaultSampleDuration = i.getUint32(t)), (t += 4)),
                    o && ((n.defaultSampleSize = i.getUint32(t)), (t += 4)),
                    l && (n.defaultSampleFlags = i.getUint32(t)),
                    u && (n.durationIsEmpty = !0),
                    !r && d && (n.baseDataOffsetIsMoof = !0),
                    n
                  )
                },
                Wt = Ce,
                zt = Be.CaptionStream,
                Gt = function (e, t) {
                  for (var i = e, n = 0; n < t.length; n++) {
                    var r = t[n]
                    if (i < r.size) return r
                    i -= r.size
                  }
                  return null
                },
                Kt = function (e, t) {
                  var i = Nt(e, ['moof', 'traf']),
                    n = Nt(e, ['mdat']),
                    r = {},
                    a = []
                  return (
                    n.forEach(function (e, t) {
                      var n = i[t]
                      a.push({ mdat: e, traf: n })
                    }),
                    a.forEach(function (e) {
                      var i,
                        n = e.mdat,
                        a = e.traf,
                        s = Nt(a, ['tfhd']),
                        o = Vt(s[0]),
                        l = o.trackId,
                        u = Nt(a, ['tfdt']),
                        d = u.length > 0 ? jt(u[0]).baseMediaDecodeTime : 0,
                        c = Nt(a, ['trun'])
                      t === l &&
                        c.length > 0 &&
                        ((i = (function (e, t, i) {
                          var n,
                            r,
                            a,
                            s,
                            o = new DataView(e.buffer, e.byteOffset, e.byteLength),
                            l = { logs: [], seiNals: [] }
                          for (r = 0; r + 4 < e.length; r += a)
                            if (((a = o.getUint32(r)), (r += 4), !(a <= 0)))
                              switch (31 & e[r]) {
                                case 6:
                                  var u = e.subarray(r + 1, r + 1 + a),
                                    d = Gt(r, t)
                                  if (
                                    ((n = {
                                      nalUnitType: 'sei_rbsp',
                                      size: a,
                                      data: u,
                                      escapedRBSP: Wt(u),
                                      trackId: i,
                                    }),
                                    d)
                                  )
                                    (n.pts = d.pts), (n.dts = d.dts), (s = d)
                                  else {
                                    if (!s) {
                                      l.logs.push({
                                        level: 'warn',
                                        message:
                                          "We've encountered a nal unit without data at " +
                                          r +
                                          ' for trackId ' +
                                          i +
                                          '. See mux.js#223.',
                                      })
                                      break
                                    }
                                    ;(n.pts = s.pts), (n.dts = s.dts)
                                  }
                                  l.seiNals.push(n)
                              }
                          return l
                        })(
                          n,
                          (function (e, t, i) {
                            var n = t,
                              r = i.defaultSampleDuration || 0,
                              a = i.defaultSampleSize || 0,
                              s = i.trackId,
                              o = []
                            return (
                              e.forEach(function (e) {
                                var t = qt(e).samples
                                t.forEach(function (e) {
                                  void 0 === e.duration && (e.duration = r),
                                    void 0 === e.size && (e.size = a),
                                    (e.trackId = s),
                                    (e.dts = n),
                                    void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0),
                                    (e.pts = n + e.compositionTimeOffset),
                                    (n += e.duration)
                                }),
                                  (o = o.concat(t))
                              }),
                              o
                            )
                          })(c, d, o),
                          l,
                        )),
                        r[l] || (r[l] = { seiNals: [], logs: [] }),
                        (r[l].seiNals = r[l].seiNals.concat(i.seiNals)),
                        (r[l].logs = r[l].logs.concat(i.logs)))
                    }),
                    r
                  )
                },
                Zt = function () {
                  var e,
                    t,
                    i,
                    n,
                    r,
                    a,
                    s = !1
                  ;(this.isInitialized = function () {
                    return s
                  }),
                    (this.init = function (t) {
                      ;(e = new zt()),
                        (s = !0),
                        (a = !!t && t.isPartial),
                        e.on('data', function (e) {
                          ;(e.startTime = e.startPts / n),
                            (e.endTime = e.endPts / n),
                            r.captions.push(e),
                            (r.captionStreams[e.stream] = !0)
                        }),
                        e.on('log', function (e) {
                          r.logs.push(e)
                        })
                    }),
                    (this.isNewInit = function (e, t) {
                      return (
                        !((e && 0 === e.length) || (t && 'object' === typeof t && 0 === Object.keys(t).length)) &&
                        (i !== e[0] || n !== t[i])
                      )
                    }),
                    (this.parse = function (e, a, s) {
                      var o
                      if (!this.isInitialized()) return null
                      if (!a || !s) return null
                      if (this.isNewInit(a, s)) (i = a[0]), (n = s[i])
                      else if (null === i || !n) return t.push(e), null
                      for (; t.length > 0; ) {
                        var l = t.shift()
                        this.parse(l, a, s)
                      }
                      return (
                        (o = (function (e, t, i) {
                          if (null === t) return null
                          var n = Kt(e, t)[t] || {}
                          return { seiNals: n.seiNals, logs: n.logs, timescale: i }
                        })(e, i, n)) &&
                          o.logs &&
                          (r.logs = r.logs.concat(o.logs)),
                        null !== o && o.seiNals
                          ? (this.pushNals(o.seiNals), this.flushStream(), r)
                          : r.logs.length
                          ? { logs: r.logs, captions: [], captionStreams: [] }
                          : null
                      )
                    }),
                    (this.pushNals = function (t) {
                      if (!this.isInitialized() || !t || 0 === t.length) return null
                      t.forEach(function (t) {
                        e.push(t)
                      })
                    }),
                    (this.flushStream = function () {
                      if (!this.isInitialized()) return null
                      a ? e.partialFlush() : e.flush()
                    }),
                    (this.clearParsedCaptions = function () {
                      ;(r.captions = []), (r.captionStreams = {}), (r.logs = [])
                    }),
                    (this.resetCaptionStream = function () {
                      if (!this.isInitialized()) return null
                      e.reset()
                    }),
                    (this.clearAllCaptions = function () {
                      this.clearParsedCaptions(), this.resetCaptionStream()
                    }),
                    (this.reset = function () {
                      ;(t = []),
                        (i = null),
                        (n = null),
                        r ? this.clearParsedCaptions() : (r = { captions: [], captionStreams: {}, logs: [] }),
                        this.resetCaptionStream()
                    }),
                    this.reset()
                },
                Qt = Rt,
                Xt = function (e) {
                  return ('00' + e.toString(16)).slice(-2)
                }
              ;(Lt = function (e, t) {
                var i, n, r
                return (
                  (i = Nt(t, ['moof', 'traf'])),
                  (n = [].concat.apply(
                    [],
                    i.map(function (t) {
                      return Nt(t, ['tfhd']).map(function (i) {
                        var n, r, a
                        return (
                          (n = Qt((i[4] << 24) | (i[5] << 16) | (i[6] << 8) | i[7])),
                          (r = e[n] || 9e4),
                          (a =
                            'number' !==
                              typeof (a = Nt(t, ['tfdt']).map(function (e) {
                                var t, i
                                return (
                                  (t = e[0]),
                                  (i = Qt((e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7])),
                                  1 === t &&
                                    ((i *= Math.pow(2, 32)),
                                    (i += Qt((e[8] << 24) | (e[9] << 16) | (e[10] << 8) | e[11]))),
                                  i
                                )
                              })[0]) || isNaN(a)
                              ? 1 / 0
                              : a) / r
                        )
                      })
                    }),
                  )),
                  (r = Math.min.apply(null, n)),
                  isFinite(r) ? r : 0
                )
              }),
                (Ot = function (e) {
                  var t = Nt(e, ['moov', 'trak']),
                    i = []
                  return (
                    t.forEach(function (e) {
                      var t,
                        n,
                        r = {},
                        a = Nt(e, ['tkhd'])[0]
                      a &&
                        ((n = (t = new DataView(a.buffer, a.byteOffset, a.byteLength)).getUint8(0)),
                        (r.id = 0 === n ? t.getUint32(12) : t.getUint32(20)))
                      var s = Nt(e, ['mdia', 'hdlr'])[0]
                      if (s) {
                        var o = Ut(s.subarray(8, 12))
                        r.type = 'vide' === o ? 'video' : 'soun' === o ? 'audio' : o
                      }
                      var l = Nt(e, ['mdia', 'minf', 'stbl', 'stsd'])[0]
                      if (l) {
                        var u = l.subarray(8)
                        r.codec = Ut(u.subarray(4, 8))
                        var d,
                          c = Nt(u, [r.codec])[0]
                        c &&
                          (/^[a-z]vc[1-9]$/i.test(r.codec)
                            ? ((d = c.subarray(78)),
                              'avcC' === Ut(d.subarray(4, 8)) && d.length > 11
                                ? ((r.codec += '.'),
                                  (r.codec += Xt(d[9])),
                                  (r.codec += Xt(d[10])),
                                  (r.codec += Xt(d[11])))
                                : (r.codec = 'avc1.4d400d'))
                            : /^mp4[a,v]$/i.test(r.codec)
                            ? ((d = c.subarray(28)),
                              'esds' === Ut(d.subarray(4, 8)) && d.length > 20 && 0 !== d[19]
                                ? ((r.codec += '.' + Xt(d[19])),
                                  (r.codec += '.' + Xt((d[20] >>> 2) & 63).replace(/^0/, '')))
                                : (r.codec = 'mp4a.40.2'))
                            : (r.codec = r.codec.toLowerCase()))
                      }
                      var h = Nt(e, ['mdia', 'mdhd'])[0]
                      h && (r.timescale = Dt(h)), i.push(r)
                    }),
                    i
                  )
                })
              var Yt = Lt,
                $t = Ot,
                Jt =
                  ((Dt = function (e) {
                    var t = 0 === e[0] ? 12 : 20
                    return Qt((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3])
                  }),
                  function (e) {
                    var t = 31 & e[1]
                    return (t <<= 8), (t |= e[2])
                  }),
                ei = function (e) {
                  return !!(64 & e[1])
                },
                ti = function (e) {
                  var t = 0
                  return (48 & e[3]) >>> 4 > 1 && (t += e[4] + 1), t
                },
                ii = function (e) {
                  switch (e) {
                    case 5:
                      return 'slice_layer_without_partitioning_rbsp_idr'
                    case 6:
                      return 'sei_rbsp'
                    case 7:
                      return 'seq_parameter_set_rbsp'
                    case 8:
                      return 'pic_parameter_set_rbsp'
                    case 9:
                      return 'access_unit_delimiter_rbsp'
                    default:
                      return null
                  }
                },
                ni = {
                  parseType: function (e, t) {
                    var i = Jt(e)
                    return 0 === i ? 'pat' : i === t ? 'pmt' : t ? 'pes' : null
                  },
                  parsePat: function (e) {
                    var t = ei(e),
                      i = 4 + ti(e)
                    return t && (i += e[i] + 1), ((31 & e[i + 10]) << 8) | e[i + 11]
                  },
                  parsePmt: function (e) {
                    var t = {},
                      i = ei(e),
                      n = 4 + ti(e)
                    if ((i && (n += e[n] + 1), 1 & e[n + 5])) {
                      var r
                      r = 3 + (((15 & e[n + 1]) << 8) | e[n + 2]) - 4
                      for (var a = 12 + (((15 & e[n + 10]) << 8) | e[n + 11]); a < r; ) {
                        var s = n + a
                        ;(t[((31 & e[s + 1]) << 8) | e[s + 2]] = e[s]), (a += 5 + (((15 & e[s + 3]) << 8) | e[s + 4]))
                      }
                      return t
                    }
                  },
                  parsePayloadUnitStartIndicator: ei,
                  parsePesType: function (e, t) {
                    switch (t[Jt(e)]) {
                      case Ne.H264_STREAM_TYPE:
                        return 'video'
                      case Ne.ADTS_STREAM_TYPE:
                        return 'audio'
                      case Ne.METADATA_STREAM_TYPE:
                        return 'timed-metadata'
                      default:
                        return null
                    }
                  },
                  parsePesTime: function (e) {
                    if (!ei(e)) return null
                    var t = 4 + ti(e)
                    if (t >= e.byteLength) return null
                    var i,
                      n = null
                    return (
                      192 & (i = e[t + 7]) &&
                        (((n = {}).pts =
                          ((14 & e[t + 9]) << 27) |
                          ((255 & e[t + 10]) << 20) |
                          ((254 & e[t + 11]) << 12) |
                          ((255 & e[t + 12]) << 5) |
                          ((254 & e[t + 13]) >>> 3)),
                        (n.pts *= 4),
                        (n.pts += (6 & e[t + 13]) >>> 1),
                        (n.dts = n.pts),
                        64 & i &&
                          ((n.dts =
                            ((14 & e[t + 14]) << 27) |
                            ((255 & e[t + 15]) << 20) |
                            ((254 & e[t + 16]) << 12) |
                            ((255 & e[t + 17]) << 5) |
                            ((254 & e[t + 18]) >>> 3)),
                          (n.dts *= 4),
                          (n.dts += (6 & e[t + 18]) >>> 1))),
                      n
                    )
                  },
                  videoPacketContainsKeyFrame: function (e) {
                    for (var t = 4 + ti(e), i = e.subarray(t), n = 0, r = 0, a = !1; r < i.byteLength - 3; r++)
                      if (1 === i[r + 2]) {
                        n = r + 5
                        break
                      }
                    for (; n < i.byteLength; )
                      switch (i[n]) {
                        case 0:
                          if (0 !== i[n - 1]) {
                            n += 2
                            break
                          }
                          if (0 !== i[n - 2]) {
                            n++
                            break
                          }
                          r + 3 !== n - 2 &&
                            'slice_layer_without_partitioning_rbsp_idr' === ii(31 & i[r + 3]) &&
                            (a = !0)
                          do {
                            n++
                          } while (1 !== i[n] && n < i.length)
                          ;(r = n - 2), (n += 3)
                          break
                        case 1:
                          if (0 !== i[n - 1] || 0 !== i[n - 2]) {
                            n += 3
                            break
                          }
                          'slice_layer_without_partitioning_rbsp_idr' === ii(31 & i[r + 3]) && (a = !0),
                            (r = n - 2),
                            (n += 3)
                          break
                        default:
                          n += 3
                      }
                    return (
                      (i = i.subarray(r)),
                      (n -= r),
                      (r = 0),
                      i &&
                        i.byteLength > 3 &&
                        'slice_layer_without_partitioning_rbsp_idr' === ii(31 & i[r + 3]) &&
                        (a = !0),
                      a
                    )
                  },
                },
                ri = We,
                ai = {}
              ;(ai.ts = ni), (ai.aac = vt)
              var si = oe,
                oi = 188,
                li = 71,
                ui = function (e, t, i) {
                  for (var n, r, a, s, o = 0, l = oi, u = !1; l <= e.byteLength; )
                    if (e[o] !== li || (e[l] !== li && l !== e.byteLength)) o++, l++
                    else {
                      switch (((n = e.subarray(o, l)), ai.ts.parseType(n, t.pid))) {
                        case 'pes':
                          ;(r = ai.ts.parsePesType(n, t.table)),
                            (a = ai.ts.parsePayloadUnitStartIndicator(n)),
                            'audio' === r &&
                              a &&
                              (s = ai.ts.parsePesTime(n)) &&
                              ((s.type = 'audio'), i.audio.push(s), (u = !0))
                      }
                      if (u) break
                      ;(o += oi), (l += oi)
                    }
                  for (o = (l = e.byteLength) - oi, u = !1; o >= 0; )
                    if (e[o] !== li || (e[l] !== li && l !== e.byteLength)) o--, l--
                    else {
                      switch (((n = e.subarray(o, l)), ai.ts.parseType(n, t.pid))) {
                        case 'pes':
                          ;(r = ai.ts.parsePesType(n, t.table)),
                            (a = ai.ts.parsePayloadUnitStartIndicator(n)),
                            'audio' === r &&
                              a &&
                              (s = ai.ts.parsePesTime(n)) &&
                              ((s.type = 'audio'), i.audio.push(s), (u = !0))
                      }
                      if (u) break
                      ;(o -= oi), (l -= oi)
                    }
                },
                di = function (e, t, i) {
                  for (var n, r, a, s, o, l, u, d = 0, c = oi, h = !1, p = { data: [], size: 0 }; c < e.byteLength; )
                    if (e[d] !== li || e[c] !== li) d++, c++
                    else {
                      switch (((n = e.subarray(d, c)), ai.ts.parseType(n, t.pid))) {
                        case 'pes':
                          if (
                            ((r = ai.ts.parsePesType(n, t.table)),
                            (a = ai.ts.parsePayloadUnitStartIndicator(n)),
                            'video' === r &&
                              (a &&
                                !h &&
                                (s = ai.ts.parsePesTime(n)) &&
                                ((s.type = 'video'), i.video.push(s), (h = !0)),
                              !i.firstKeyFrame))
                          ) {
                            if (a && 0 !== p.size) {
                              for (o = new Uint8Array(p.size), l = 0; p.data.length; )
                                (u = p.data.shift()), o.set(u, l), (l += u.byteLength)
                              if (ai.ts.videoPacketContainsKeyFrame(o)) {
                                var f = ai.ts.parsePesTime(o)
                                f
                                  ? ((i.firstKeyFrame = f), (i.firstKeyFrame.type = 'video'))
                                  : console.warn(
                                      'Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.',
                                    )
                              }
                              p.size = 0
                            }
                            p.data.push(n), (p.size += n.byteLength)
                          }
                      }
                      if (h && i.firstKeyFrame) break
                      ;(d += oi), (c += oi)
                    }
                  for (d = (c = e.byteLength) - oi, h = !1; d >= 0; )
                    if (e[d] !== li || e[c] !== li) d--, c--
                    else {
                      switch (((n = e.subarray(d, c)), ai.ts.parseType(n, t.pid))) {
                        case 'pes':
                          ;(r = ai.ts.parsePesType(n, t.table)),
                            (a = ai.ts.parsePayloadUnitStartIndicator(n)),
                            'video' === r &&
                              a &&
                              (s = ai.ts.parsePesTime(n)) &&
                              ((s.type = 'video'), i.video.push(s), (h = !0))
                      }
                      if (h) break
                      ;(d -= oi), (c -= oi)
                    }
                },
                ci = function (e) {
                  var t = { pid: null, table: null },
                    i = {}
                  for (var n in ((function (e, t) {
                    for (var i, n = 0, r = oi; r < e.byteLength; )
                      if (e[n] !== li || e[r] !== li) n++, r++
                      else {
                        switch (((i = e.subarray(n, r)), ai.ts.parseType(i, t.pid))) {
                          case 'pat':
                            t.pid = ai.ts.parsePat(i)
                            break
                          case 'pmt':
                            var a = ai.ts.parsePmt(i)
                            ;(t.table = t.table || {}),
                              Object.keys(a).forEach(function (e) {
                                t.table[e] = a[e]
                              })
                        }
                        ;(n += oi), (r += oi)
                      }
                  })(e, t),
                  t.table)) {
                    if (t.table.hasOwnProperty(n))
                      switch (t.table[n]) {
                        case Ne.H264_STREAM_TYPE:
                          ;(i.video = []), di(e, t, i), 0 === i.video.length && delete i.video
                          break
                        case Ne.ADTS_STREAM_TYPE:
                          ;(i.audio = []), ui(e, t, i), 0 === i.audio.length && delete i.audio
                      }
                  }
                  return i
                },
                hi = function (e, t) {
                  var i
                  return (i = ai.aac.isLikelyAacData(e)
                    ? (function (e) {
                        for (var t, i = !1, n = 0, r = null, a = null, s = 0, o = 0; e.length - o >= 3; ) {
                          switch (ai.aac.parseType(e, o)) {
                            case 'timed-metadata':
                              if (e.length - o < 10) {
                                i = !0
                                break
                              }
                              if ((s = ai.aac.parseId3TagSize(e, o)) > e.length) {
                                i = !0
                                break
                              }
                              null === a && ((t = e.subarray(o, o + s)), (a = ai.aac.parseAacTimestamp(t))), (o += s)
                              break
                            case 'audio':
                              if (e.length - o < 7) {
                                i = !0
                                break
                              }
                              if ((s = ai.aac.parseAdtsSize(e, o)) > e.length) {
                                i = !0
                                break
                              }
                              null === r && ((t = e.subarray(o, o + s)), (r = ai.aac.parseSampleRate(t))), n++, (o += s)
                              break
                            default:
                              o++
                          }
                          if (i) return null
                        }
                        if (null === r || null === a) return null
                        var l = si / r
                        return {
                          audio: [
                            { type: 'audio', dts: a, pts: a },
                            { type: 'audio', dts: a + 1024 * n * l, pts: a + 1024 * n * l },
                          ],
                        }
                      })(e)
                    : ci(e)) &&
                    (i.audio || i.video)
                    ? ((function (e, t) {
                        if (e.audio && e.audio.length) {
                          var i = t
                          ;('undefined' === typeof i || isNaN(i)) && (i = e.audio[0].dts),
                            e.audio.forEach(function (e) {
                              ;(e.dts = ri(e.dts, i)),
                                (e.pts = ri(e.pts, i)),
                                (e.dtsTime = e.dts / si),
                                (e.ptsTime = e.pts / si)
                            })
                        }
                        if (e.video && e.video.length) {
                          var n = t
                          if (
                            (('undefined' === typeof n || isNaN(n)) && (n = e.video[0].dts),
                            e.video.forEach(function (e) {
                              ;(e.dts = ri(e.dts, n)),
                                (e.pts = ri(e.pts, n)),
                                (e.dtsTime = e.dts / si),
                                (e.ptsTime = e.pts / si)
                            }),
                            e.firstKeyFrame)
                          ) {
                            var r = e.firstKeyFrame
                            ;(r.dts = ri(r.dts, n)),
                              (r.pts = ri(r.pts, n)),
                              (r.dtsTime = r.dts / si),
                              (r.ptsTime = r.pts / si)
                          }
                        }
                      })(i, t),
                      i)
                    : null
                },
                pi = (function () {
                  function e(e, t) {
                    ;(this.options = t || {}), (this.self = e), this.init()
                  }
                  var t = e.prototype
                  return (
                    (t.init = function () {
                      this.transmuxer && this.transmuxer.dispose(),
                        (this.transmuxer = new Mt.Transmuxer(this.options)),
                        (function (e, t) {
                          t.on('data', function (t) {
                            var i = t.initSegment
                            t.initSegment = { data: i.buffer, byteOffset: i.byteOffset, byteLength: i.byteLength }
                            var n = t.data
                            ;(t.data = n.buffer),
                              e.postMessage(
                                { action: 'data', segment: t, byteOffset: n.byteOffset, byteLength: n.byteLength },
                                [t.data],
                              )
                          }),
                            t.on('done', function (t) {
                              e.postMessage({ action: 'done' })
                            }),
                            t.on('gopInfo', function (t) {
                              e.postMessage({ action: 'gopInfo', gopInfo: t })
                            }),
                            t.on('videoSegmentTimingInfo', function (t) {
                              var i = {
                                start: { decode: ue(t.start.dts), presentation: ue(t.start.pts) },
                                end: { decode: ue(t.end.dts), presentation: ue(t.end.pts) },
                                baseMediaDecodeTime: ue(t.baseMediaDecodeTime),
                              }
                              t.prependedContentDuration &&
                                (i.prependedContentDuration = ue(t.prependedContentDuration)),
                                e.postMessage({ action: 'videoSegmentTimingInfo', videoSegmentTimingInfo: i })
                            }),
                            t.on('audioSegmentTimingInfo', function (t) {
                              var i = {
                                start: { decode: ue(t.start.dts), presentation: ue(t.start.pts) },
                                end: { decode: ue(t.end.dts), presentation: ue(t.end.pts) },
                                baseMediaDecodeTime: ue(t.baseMediaDecodeTime),
                              }
                              t.prependedContentDuration &&
                                (i.prependedContentDuration = ue(t.prependedContentDuration)),
                                e.postMessage({ action: 'audioSegmentTimingInfo', audioSegmentTimingInfo: i })
                            }),
                            t.on('id3Frame', function (t) {
                              e.postMessage({ action: 'id3Frame', id3Frame: t })
                            }),
                            t.on('caption', function (t) {
                              e.postMessage({ action: 'caption', caption: t })
                            }),
                            t.on('trackinfo', function (t) {
                              e.postMessage({ action: 'trackinfo', trackInfo: t })
                            }),
                            t.on('audioTimingInfo', function (t) {
                              e.postMessage({
                                action: 'audioTimingInfo',
                                audioTimingInfo: { start: ue(t.start), end: ue(t.end) },
                              })
                            }),
                            t.on('videoTimingInfo', function (t) {
                              e.postMessage({
                                action: 'videoTimingInfo',
                                videoTimingInfo: { start: ue(t.start), end: ue(t.end) },
                              })
                            }),
                            t.on('log', function (t) {
                              e.postMessage({ action: 'log', log: t })
                            })
                        })(this.self, this.transmuxer)
                    }),
                    (t.pushMp4Captions = function (e) {
                      this.captionParser || ((this.captionParser = new Zt()), this.captionParser.init())
                      var t = new Uint8Array(e.data, e.byteOffset, e.byteLength),
                        i = this.captionParser.parse(t, e.trackIds, e.timescales)
                      this.self.postMessage(
                        {
                          action: 'mp4Captions',
                          captions: (i && i.captions) || [],
                          logs: (i && i.logs) || [],
                          data: t.buffer,
                        },
                        [t.buffer],
                      )
                    }),
                    (t.probeMp4StartTime = function (e) {
                      var t = e.timescales,
                        i = e.data,
                        n = Yt(t, i)
                      this.self.postMessage({ action: 'probeMp4StartTime', startTime: n, data: i }, [i.buffer])
                    }),
                    (t.probeMp4Tracks = function (e) {
                      var t = e.data,
                        i = $t(t)
                      this.self.postMessage({ action: 'probeMp4Tracks', tracks: i, data: t }, [t.buffer])
                    }),
                    (t.probeTs = function (e) {
                      var t = e.data,
                        i = e.baseStartTime,
                        n = 'number' !== typeof i || isNaN(i) ? void 0 : i * oe,
                        r = hi(t, n),
                        a = null
                      r &&
                        ((a = {
                          hasVideo: (r.video && 2 === r.video.length) || !1,
                          hasAudio: (r.audio && 2 === r.audio.length) || !1,
                        }).hasVideo && (a.videoStart = r.video[0].ptsTime),
                        a.hasAudio && (a.audioStart = r.audio[0].ptsTime)),
                        this.self.postMessage({ action: 'probeTs', result: a, data: t }, [t.buffer])
                    }),
                    (t.clearAllMp4Captions = function () {
                      this.captionParser && this.captionParser.clearAllCaptions()
                    }),
                    (t.clearParsedMp4Captions = function () {
                      this.captionParser && this.captionParser.clearParsedCaptions()
                    }),
                    (t.push = function (e) {
                      var t = new Uint8Array(e.data, e.byteOffset, e.byteLength)
                      this.transmuxer.push(t)
                    }),
                    (t.reset = function () {
                      this.transmuxer.reset()
                    }),
                    (t.setTimestampOffset = function (e) {
                      var t = e.timestampOffset || 0
                      this.transmuxer.setBaseMediaDecodeTime(Math.round(le(t)))
                    }),
                    (t.setAudioAppendStart = function (e) {
                      this.transmuxer.setAudioAppendStart(Math.ceil(le(e.appendStart)))
                    }),
                    (t.setRemux = function (e) {
                      this.transmuxer.setRemux(e.remux)
                    }),
                    (t.flush = function (e) {
                      this.transmuxer.flush(), self.postMessage({ action: 'done', type: 'transmuxed' })
                    }),
                    (t.endTimeline = function () {
                      this.transmuxer.endTimeline(), self.postMessage({ action: 'endedtimeline', type: 'transmuxed' })
                    }),
                    (t.alignGopsWith = function (e) {
                      this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
                    }),
                    e
                  )
                })()
              self.onmessage = function (e) {
                'init' === e.data.action && e.data.options
                  ? (this.messageHandlers = new pi(self, e.data.options))
                  : (this.messageHandlers || (this.messageHandlers = new pi(self)),
                    e.data &&
                      e.data.action &&
                      'init' !== e.data.action &&
                      this.messageHandlers[e.data.action] &&
                      this.messageHandlers[e.data.action](e.data))
              }
            }),
          ),
        ),
        us = function (e) {
          var t = e.transmuxer,
            i = e.bytes,
            n = e.audioAppendStart,
            r = e.gopsToAlignWith,
            a = e.remux,
            s = e.onData,
            o = e.onTrackInfo,
            l = e.onAudioTimingInfo,
            u = e.onVideoTimingInfo,
            d = e.onVideoSegmentTimingInfo,
            c = e.onAudioSegmentTimingInfo,
            h = e.onId3,
            p = e.onCaptions,
            f = e.onDone,
            m = e.onEndedTimeline,
            g = e.onTransmuxerLog,
            _ = e.isEndOfTimeline,
            v = { buffer: [] },
            y = _
          if (
            ((t.onmessage = function (i) {
              t.currentTransmux === e &&
                ('data' === i.data.action &&
                  (function (e, t, i) {
                    var n = e.data.segment,
                      r = n.type,
                      a = n.initSegment,
                      s = n.captions,
                      o = n.captionStreams,
                      l = n.metadata,
                      u = n.videoFrameDtsTime,
                      d = n.videoFramePtsTime
                    t.buffer.push({ captions: s, captionStreams: o, metadata: l })
                    var c = e.data.segment.boxes || { data: e.data.segment.data },
                      h = {
                        type: r,
                        data: new Uint8Array(c.data, c.data.byteOffset, c.data.byteLength),
                        initSegment: new Uint8Array(a.data, a.byteOffset, a.byteLength),
                      }
                    'undefined' !== typeof u && (h.videoFrameDtsTime = u),
                      'undefined' !== typeof d && (h.videoFramePtsTime = d),
                      i(h)
                  })(i, v, s),
                'trackinfo' === i.data.action && o(i.data.trackInfo),
                'gopInfo' === i.data.action &&
                  (function (e, t) {
                    t.gopInfo = e.data.gopInfo
                  })(i, v),
                'audioTimingInfo' === i.data.action && l(i.data.audioTimingInfo),
                'videoTimingInfo' === i.data.action && u(i.data.videoTimingInfo),
                'videoSegmentTimingInfo' === i.data.action && d(i.data.videoSegmentTimingInfo),
                'audioSegmentTimingInfo' === i.data.action && c(i.data.audioSegmentTimingInfo),
                'id3Frame' === i.data.action && h([i.data.id3Frame], i.data.id3Frame.dispatchType),
                'caption' === i.data.action && p(i.data.caption),
                'endedtimeline' === i.data.action && ((y = !1), m()),
                'log' === i.data.action && g(i.data.log),
                'transmuxed' === i.data.type &&
                  (y ||
                    ((t.onmessage = null),
                    (function (e) {
                      var t = e.transmuxedData,
                        i = e.callback
                      ;(t.buffer = []), i(t)
                    })({ transmuxedData: v, callback: f }),
                    ds(t))))
            }),
            n && t.postMessage({ action: 'setAudioAppendStart', appendStart: n }),
            Array.isArray(r) && t.postMessage({ action: 'alignGopsWith', gopsToAlignWith: r }),
            'undefined' !== typeof a && t.postMessage({ action: 'setRemux', remux: a }),
            i.byteLength)
          ) {
            var T = i instanceof ArrayBuffer ? i : i.buffer,
              b = i instanceof ArrayBuffer ? 0 : i.byteOffset
            t.postMessage({ action: 'push', data: T, byteOffset: b, byteLength: i.byteLength }, [T])
          }
          _ && t.postMessage({ action: 'endTimeline' }), t.postMessage({ action: 'flush' })
        },
        ds = function (e) {
          ;(e.currentTransmux = null),
            e.transmuxQueue.length &&
              ((e.currentTransmux = e.transmuxQueue.shift()),
              'function' === typeof e.currentTransmux ? e.currentTransmux() : us(e.currentTransmux))
        },
        cs = function (e, t) {
          e.postMessage({ action: t }), ds(e)
        },
        hs = function (e, t) {
          if (!t.currentTransmux) return (t.currentTransmux = e), void cs(t, e)
          t.transmuxQueue.push(cs.bind(null, t, e))
        },
        ps = function (e) {
          if (!e.transmuxer.currentTransmux) return (e.transmuxer.currentTransmux = e), void us(e)
          e.transmuxer.transmuxQueue.push(e)
        },
        fs = function (e) {
          hs('reset', e)
        },
        ms = function (e) {
          var t = new ls()
          ;(t.currentTransmux = null), (t.transmuxQueue = [])
          var i = t.terminate
          return (
            (t.terminate = function () {
              return (t.currentTransmux = null), (t.transmuxQueue.length = 0), i.call(t)
            }),
            t.postMessage({ action: 'init', options: e }),
            t
          )
        },
        gs = function (e) {
          var t = e.transmuxer,
            i = e.endAction || e.action,
            n = e.callback,
            r = (0, l.Z)({}, e, { endAction: null, transmuxer: null, callback: null })
          if (
            (t.addEventListener('message', function r(a) {
              a.data.action === i &&
                (t.removeEventListener('message', r),
                a.data.data &&
                  ((a.data.data = new Uint8Array(
                    a.data.data,
                    e.byteOffset || 0,
                    e.byteLength || a.data.data.byteLength,
                  )),
                  e.data && (e.data = a.data.data)),
                n(a.data))
            }),
            e.data)
          ) {
            var a = e.data instanceof ArrayBuffer
            ;(r.byteOffset = a ? 0 : e.data.byteOffset), (r.byteLength = e.data.byteLength)
            var s = [a ? e.data : e.data.buffer]
            t.postMessage(r, s)
          } else t.postMessage(r)
        },
        _s = 2,
        vs = -101,
        ys = -102,
        Ts = function (e) {
          e.forEach(function (e) {
            e.abort()
          })
        },
        bs = function (e, t) {
          return t.timedout
            ? { status: t.status, message: 'HLS request timed-out at URL: ' + t.uri, code: vs, xhr: t }
            : t.aborted
            ? { status: t.status, message: 'HLS request aborted at URL: ' + t.uri, code: ys, xhr: t }
            : e
            ? { status: t.status, message: 'HLS request errored at URL: ' + t.uri, code: _s, xhr: t }
            : 'arraybuffer' === t.responseType && 0 === t.response.byteLength
            ? { status: t.status, message: 'Empty HLS response at URL: ' + t.uri, code: _s, xhr: t }
            : null
        },
        Ss = function (e, t, i) {
          return function (n, r) {
            var a = r.response,
              s = bs(n, r)
            if (s) return i(s, e)
            if (16 !== a.byteLength)
              return i({ status: r.status, message: 'Invalid HLS key at URL: ' + r.uri, code: _s, xhr: r }, e)
            for (
              var o = new DataView(a),
                l = new Uint32Array([o.getUint32(0), o.getUint32(4), o.getUint32(8), o.getUint32(12)]),
                u = 0;
              u < t.length;
              u++
            )
              t[u].bytes = l
            return i(null, e)
          }
        },
        ks = function (e, t) {
          var i = (0, P.Xm)(e.map.bytes)
          if ('mp4' !== i) {
            var n = e.map.resolvedUri || e.map.uri
            return t({
              internal: !0,
              message: 'Found unsupported ' + (i || 'unknown') + ' container for initialization segment at URL: ' + n,
              code: _s,
            })
          }
          gs({
            action: 'probeMp4Tracks',
            data: e.map.bytes,
            transmuxer: e.transmuxer,
            callback: function (i) {
              var n = i.tracks,
                r = i.data
              return (
                (e.map.bytes = r),
                n.forEach(function (t) {
                  ;(e.map.tracks = e.map.tracks || {}),
                    e.map.tracks[t.type] ||
                      ((e.map.tracks[t.type] = t),
                      'number' === typeof t.id &&
                        t.timescale &&
                        ((e.map.timescales = e.map.timescales || {}), (e.map.timescales[t.id] = t.timescale)))
                }),
                t(null)
              )
            },
          })
        },
        Cs = function (e) {
          var t = e.segment,
            i = e.finishProcessingFn,
            n = e.responseType
          return function (e, r) {
            var a = bs(e, r)
            if (a) return i(a, t)
            var s =
              'arraybuffer' !== n && r.responseText
                ? (function (e) {
                    for (var t = new Uint8Array(new ArrayBuffer(e.length)), i = 0; i < e.length; i++)
                      t[i] = e.charCodeAt(i)
                    return t.buffer
                  })(r.responseText.substring(t.lastReachedChar || 0))
                : r.response
            return (
              (t.stats = (function (e) {
                return {
                  bandwidth: e.bandwidth,
                  bytesReceived: e.bytesReceived || 0,
                  roundTripTime: e.roundTripTime || 0,
                }
              })(r)),
              t.key ? (t.encryptedBytes = new Uint8Array(s)) : (t.bytes = new Uint8Array(s)),
              i(null, t)
            )
          }
        },
        Es = function (e) {
          var t = e.segment,
            i = e.bytes,
            n = e.trackInfoFn,
            r = e.timingInfoFn,
            a = e.videoSegmentTimingInfoFn,
            s = e.audioSegmentTimingInfoFn,
            o = e.id3Fn,
            l = e.captionsFn,
            u = e.isEndOfTimeline,
            d = e.endedTimelineFn,
            c = e.dataFn,
            h = e.doneFn,
            p = e.onTransmuxerLog,
            f = (t.map && t.map.tracks) || {},
            m = Boolean(f.audio && f.video),
            g = r.bind(null, t, 'audio', 'start'),
            _ = r.bind(null, t, 'audio', 'end'),
            v = r.bind(null, t, 'video', 'start'),
            y = r.bind(null, t, 'video', 'end')
          gs({
            action: 'probeTs',
            transmuxer: t.transmuxer,
            data: i,
            baseStartTime: t.baseStartTime,
            callback: function (e) {
              t.bytes = i = e.data
              var r = e.result
              r &&
                (n(t, { hasAudio: r.hasAudio, hasVideo: r.hasVideo, isMuxed: m }),
                (n = null),
                r.hasAudio && !m && g(r.audioStart),
                r.hasVideo && v(r.videoStart),
                (g = null),
                (v = null)),
                ps({
                  bytes: i,
                  transmuxer: t.transmuxer,
                  audioAppendStart: t.audioAppendStart,
                  gopsToAlignWith: t.gopsToAlignWith,
                  remux: m,
                  onData: function (e) {
                    ;(e.type = 'combined' === e.type ? 'video' : e.type), c(t, e)
                  },
                  onTrackInfo: function (e) {
                    n && (m && (e.isMuxed = !0), n(t, e))
                  },
                  onAudioTimingInfo: function (e) {
                    g && 'undefined' !== typeof e.start && (g(e.start), (g = null)),
                      _ && 'undefined' !== typeof e.end && _(e.end)
                  },
                  onVideoTimingInfo: function (e) {
                    v && 'undefined' !== typeof e.start && (v(e.start), (v = null)),
                      y && 'undefined' !== typeof e.end && y(e.end)
                  },
                  onVideoSegmentTimingInfo: function (e) {
                    a(e)
                  },
                  onAudioSegmentTimingInfo: function (e) {
                    s(e)
                  },
                  onId3: function (e, i) {
                    o(t, e, i)
                  },
                  onCaptions: function (e) {
                    l(t, [e])
                  },
                  isEndOfTimeline: u,
                  onEndedTimeline: function () {
                    d()
                  },
                  onTransmuxerLog: p,
                  onDone: function (e) {
                    h && ((e.type = 'combined' === e.type ? 'video' : e.type), h(null, t, e))
                  },
                })
            },
          })
        },
        ws = function (e) {
          var t = e.segment,
            i = e.bytes,
            n = e.trackInfoFn,
            r = e.timingInfoFn,
            a = e.videoSegmentTimingInfoFn,
            s = e.audioSegmentTimingInfoFn,
            o = e.id3Fn,
            l = e.captionsFn,
            u = e.isEndOfTimeline,
            d = e.endedTimelineFn,
            c = e.dataFn,
            h = e.doneFn,
            p = e.onTransmuxerLog,
            f = new Uint8Array(i)
          if ((0, P.cz)(f)) {
            t.isFmp4 = !0
            var m = t.map.tracks,
              g = { isFmp4: !0, hasVideo: !!m.video, hasAudio: !!m.audio }
            m.audio && m.audio.codec && 'enca' !== m.audio.codec && (g.audioCodec = m.audio.codec),
              m.video && m.video.codec && 'encv' !== m.video.codec && (g.videoCodec = m.video.codec),
              m.video && m.audio && (g.isMuxed = !0),
              n(t, g)
            var _ = function (e) {
              c(t, { data: f, type: g.hasAudio && !g.isMuxed ? 'audio' : 'video' }),
                e && e.length && l(t, e),
                h(null, t, {})
            }
            gs({
              action: 'probeMp4StartTime',
              timescales: t.map.timescales,
              data: f,
              transmuxer: t.transmuxer,
              callback: function (e) {
                var n = e.data,
                  a = e.startTime
                ;(i = n.buffer),
                  (t.bytes = f = n),
                  g.hasAudio && !g.isMuxed && r(t, 'audio', 'start', a),
                  g.hasVideo && r(t, 'video', 'start', a),
                  m.video && n.byteLength && t.transmuxer
                    ? gs({
                        action: 'pushMp4Captions',
                        endAction: 'mp4Captions',
                        transmuxer: t.transmuxer,
                        data: f,
                        timescales: t.map.timescales,
                        trackIds: [m.video.id],
                        callback: function (e) {
                          ;(i = e.data.buffer),
                            (t.bytes = f = e.data),
                            e.logs.forEach(function (e) {
                              p(Wr.mergeOptions(e, { stream: 'mp4CaptionParser' }))
                            }),
                            _(e.captions)
                        },
                      })
                    : _()
              },
            })
          } else if (t.transmuxer) {
            if (
              ('undefined' === typeof t.container && (t.container = (0, P.Xm)(f)),
              'ts' !== t.container && 'aac' !== t.container)
            )
              return n(t, { hasAudio: !1, hasVideo: !1 }), void h(null, t, {})
            Es({
              segment: t,
              bytes: i,
              trackInfoFn: n,
              timingInfoFn: r,
              videoSegmentTimingInfoFn: a,
              audioSegmentTimingInfoFn: s,
              id3Fn: o,
              captionsFn: l,
              isEndOfTimeline: u,
              endedTimelineFn: d,
              dataFn: c,
              doneFn: h,
              onTransmuxerLog: p,
            })
          } else h(null, t, {})
        },
        xs = function (e, t) {
          var i,
            n = e.id,
            r = e.key,
            a = e.encryptedBytes,
            s = e.decryptionWorker
          s.addEventListener('message', function e(i) {
            if (i.data.source === n) {
              s.removeEventListener('message', e)
              var r = i.data.decrypted
              t(new Uint8Array(r.bytes, r.byteOffset, r.byteLength))
            }
          }),
            (i = r.bytes.slice ? r.bytes.slice() : new Uint32Array(Array.prototype.slice.call(r.bytes))),
            s.postMessage(Wa({ source: n, encrypted: a, key: i, iv: r.iv }), [a.buffer, i.buffer])
        },
        Is = function (e) {
          var t = e.activeXhrs,
            i = e.decryptionWorker,
            n = e.trackInfoFn,
            r = e.timingInfoFn,
            a = e.videoSegmentTimingInfoFn,
            s = e.audioSegmentTimingInfoFn,
            o = e.id3Fn,
            l = e.captionsFn,
            u = e.isEndOfTimeline,
            d = e.endedTimelineFn,
            c = e.dataFn,
            h = e.doneFn,
            p = e.onTransmuxerLog,
            f = 0,
            m = !1
          return function (e, g) {
            if (!m) {
              if (e) return (m = !0), Ts(t), h(e, g)
              if ((f += 1) === t.length) {
                var _ = function () {
                  if (g.encryptedBytes)
                    return (function (e) {
                      var t = e.decryptionWorker,
                        i = e.segment,
                        n = e.trackInfoFn,
                        r = e.timingInfoFn,
                        a = e.videoSegmentTimingInfoFn,
                        s = e.audioSegmentTimingInfoFn,
                        o = e.id3Fn,
                        l = e.captionsFn,
                        u = e.isEndOfTimeline,
                        d = e.endedTimelineFn,
                        c = e.dataFn,
                        h = e.doneFn,
                        p = e.onTransmuxerLog
                      xs(
                        { id: i.requestId, key: i.key, encryptedBytes: i.encryptedBytes, decryptionWorker: t },
                        function (e) {
                          ;(i.bytes = e),
                            ws({
                              segment: i,
                              bytes: i.bytes,
                              trackInfoFn: n,
                              timingInfoFn: r,
                              videoSegmentTimingInfoFn: a,
                              audioSegmentTimingInfoFn: s,
                              id3Fn: o,
                              captionsFn: l,
                              isEndOfTimeline: u,
                              endedTimelineFn: d,
                              dataFn: c,
                              doneFn: h,
                              onTransmuxerLog: p,
                            })
                        },
                      )
                    })({
                      decryptionWorker: i,
                      segment: g,
                      trackInfoFn: n,
                      timingInfoFn: r,
                      videoSegmentTimingInfoFn: a,
                      audioSegmentTimingInfoFn: s,
                      id3Fn: o,
                      captionsFn: l,
                      isEndOfTimeline: u,
                      endedTimelineFn: d,
                      dataFn: c,
                      doneFn: h,
                      onTransmuxerLog: p,
                    })
                  ws({
                    segment: g,
                    bytes: g.bytes,
                    trackInfoFn: n,
                    timingInfoFn: r,
                    videoSegmentTimingInfoFn: a,
                    audioSegmentTimingInfoFn: s,
                    id3Fn: o,
                    captionsFn: l,
                    isEndOfTimeline: u,
                    endedTimelineFn: d,
                    dataFn: c,
                    doneFn: h,
                    onTransmuxerLog: p,
                  })
                }
                if (((g.endOfAllRequests = Date.now()), g.map && g.map.encryptedBytes && !g.map.bytes))
                  return xs(
                    {
                      decryptionWorker: i,
                      id: g.requestId + '-init',
                      encryptedBytes: g.map.encryptedBytes,
                      key: g.map.key,
                    },
                    function (e) {
                      ;(g.map.bytes = e),
                        ks(g, function (e) {
                          if (e) return Ts(t), h(e, g)
                          _()
                        })
                    },
                  )
                _()
              }
            }
          }
        },
        Ps = function (e) {
          var t = e.segment,
            i = e.progressFn
          return (
            e.trackInfoFn,
            e.timingInfoFn,
            e.videoSegmentTimingInfoFn,
            e.audioSegmentTimingInfoFn,
            e.id3Fn,
            e.captionsFn,
            e.isEndOfTimeline,
            e.endedTimelineFn,
            e.dataFn,
            function (e) {
              if (!e.target.aborted)
                return (
                  (t.stats = Wr.mergeOptions(
                    t.stats,
                    (function (e) {
                      var t = e.target,
                        i = { bandwidth: 1 / 0, bytesReceived: 0, roundTripTime: Date.now() - t.requestTime || 0 }
                      return (
                        (i.bytesReceived = e.loaded),
                        (i.bandwidth = Math.floor((i.bytesReceived / i.roundTripTime) * 8 * 1e3)),
                        i
                      )
                    })(e),
                  )),
                  !t.stats.firstBytesReceivedAt && t.stats.bytesReceived && (t.stats.firstBytesReceivedAt = Date.now()),
                  i(e, t)
                )
            }
          )
        },
        As = function (e) {
          var t = e.xhr,
            i = e.xhrOptions,
            n = e.decryptionWorker,
            r = e.segment,
            a = e.abortFn,
            s = e.progressFn,
            o = e.trackInfoFn,
            l = e.timingInfoFn,
            u = e.videoSegmentTimingInfoFn,
            d = e.audioSegmentTimingInfoFn,
            c = e.id3Fn,
            h = e.captionsFn,
            p = e.isEndOfTimeline,
            f = e.endedTimelineFn,
            m = e.dataFn,
            g = e.doneFn,
            _ = e.onTransmuxerLog,
            v = [],
            y = Is({
              activeXhrs: v,
              decryptionWorker: n,
              trackInfoFn: o,
              timingInfoFn: l,
              videoSegmentTimingInfoFn: u,
              audioSegmentTimingInfoFn: d,
              id3Fn: c,
              captionsFn: h,
              isEndOfTimeline: p,
              endedTimelineFn: f,
              dataFn: m,
              doneFn: g,
              onTransmuxerLog: _,
            })
          if (r.key && !r.key.bytes) {
            var T = [r.key]
            r.map && !r.map.bytes && r.map.key && r.map.key.resolvedUri === r.key.resolvedUri && T.push(r.map.key)
            var b = t(Wr.mergeOptions(i, { uri: r.key.resolvedUri, responseType: 'arraybuffer' }), Ss(r, T, y))
            v.push(b)
          }
          if (r.map && !r.map.bytes) {
            if (r.map.key && (!r.key || r.key.resolvedUri !== r.map.key.resolvedUri)) {
              var S = t(
                Wr.mergeOptions(i, { uri: r.map.key.resolvedUri, responseType: 'arraybuffer' }),
                Ss(r, [r.map.key], y),
              )
              v.push(S)
            }
            var k = t(
              Wr.mergeOptions(i, { uri: r.map.resolvedUri, responseType: 'arraybuffer', headers: ja(r.map) }),
              (function (e) {
                var t = e.segment,
                  i = e.finishProcessingFn
                return function (e, n) {
                  var r = bs(e, n)
                  if (r) return i(r, t)
                  var a = new Uint8Array(n.response)
                  if (t.map.key) return (t.map.encryptedBytes = a), i(null, t)
                  ;(t.map.bytes = a),
                    ks(t, function (e) {
                      if (e) return (e.xhr = n), (e.status = n.status), i(e, t)
                      i(null, t)
                    })
                }
              })({ segment: r, finishProcessingFn: y }),
            )
            v.push(k)
          }
          var C = Wr.mergeOptions(i, {
              uri: (r.part && r.part.resolvedUri) || r.resolvedUri,
              responseType: 'arraybuffer',
              headers: ja(r),
            }),
            E = t(C, Cs({ segment: r, finishProcessingFn: y, responseType: C.responseType }))
          E.addEventListener(
            'progress',
            Ps({
              segment: r,
              progressFn: s,
              trackInfoFn: o,
              timingInfoFn: l,
              videoSegmentTimingInfoFn: u,
              audioSegmentTimingInfoFn: d,
              id3Fn: c,
              captionsFn: h,
              isEndOfTimeline: p,
              endedTimelineFn: f,
              dataFn: m,
            }),
          ),
            v.push(E)
          var w = {}
          return (
            v.forEach(function (e) {
              e.addEventListener(
                'loadend',
                (function (e) {
                  var t = e.loadendState,
                    i = e.abortFn
                  return function (e) {
                    e.target.aborted && i && !t.calledAbortFn && (i(), (t.calledAbortFn = !0))
                  }
                })({ loadendState: w, abortFn: a }),
              )
            }),
            function () {
              return Ts(v)
            }
          )
        },
        Ls = Qr('CodecUtils'),
        Os = function (e, t) {
          var i = t.attributes || {}
          return e && e.mediaGroups && e.mediaGroups.AUDIO && i.AUDIO && e.mediaGroups.AUDIO[i.AUDIO]
        },
        Ds = function (e) {
          var t = {}
          return (
            e.forEach(function (e) {
              var i = e.mediaType,
                n = e.type,
                r = e.details
              ;(t[i] = t[i] || []), t[i].push((0, k.ws)('' + n + r))
            }),
            Object.keys(t).forEach(function (e) {
              if (t[e].length > 1)
                return (
                  Ls(
                    'multiple ' +
                      e +
                      ' codecs found as attributes: ' +
                      t[e].join(', ') +
                      '. Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs.',
                  ),
                  void (t[e] = null)
                )
              t[e] = t[e][0]
            }),
            t
          )
        },
        Ms = function (e) {
          var t = 0
          return e.audio && t++, e.video && t++, t
        },
        Rs = function (e, t) {
          var i = t.attributes || {},
            n = Ds(
              (function (e) {
                var t = e.attributes || {}
                if (t.CODECS) return (0, k.kS)(t.CODECS)
              })(t) || [],
            )
          if (
            Os(e, t) &&
            !n.audio &&
            !(function (e, t) {
              if (!Os(e, t)) return !0
              var i = t.attributes || {},
                n = e.mediaGroups.AUDIO[i.AUDIO]
              for (var r in n) if (!n[r].uri && !n[r].playlists) return !0
              return !1
            })(e, t)
          ) {
            var r = Ds((0, k.Jg)(e, i.AUDIO) || [])
            r.audio && (n.audio = r.audio)
          }
          return n
        },
        Us = Qr('PlaylistSelector'),
        Bs = function (e) {
          if (e && e.playlist) {
            var t = e.playlist
            return JSON.stringify({
              id: t.id,
              bandwidth: e.bandwidth,
              width: e.width,
              height: e.height,
              codecs: (t.attributes && t.attributes.CODECS) || '',
            })
          }
        },
        Ns = function (e, t) {
          if (!e) return ''
          var i = a().getComputedStyle(e)
          return i ? i[t] : ''
        },
        Fs = function (e, t) {
          var i = e.slice()
          e.sort(function (e, n) {
            var r = t(e, n)
            return 0 === r ? i.indexOf(e) - i.indexOf(n) : r
          })
        },
        js = function (e, t) {
          var i, n
          return (
            e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH),
            (i = i || a().Number.MAX_VALUE),
            t.attributes.BANDWIDTH && (n = t.attributes.BANDWIDTH),
            i - (n = n || a().Number.MAX_VALUE)
          )
        },
        Hs = function (e, t, i, n, r, s) {
          if (e) {
            var o = { bandwidth: t, width: i, height: n, limitRenditionByPlayerDimensions: r },
              l = e.playlists
            ba.isAudioOnly(e) && ((l = s.getAudioTrackPlaylists_()), (o.audioOnly = !0))
            var u = l.map(function (e) {
              var t = e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
                i = e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.height
              return {
                bandwidth: (e.attributes && e.attributes.BANDWIDTH) || a().Number.MAX_VALUE,
                width: t,
                height: i,
                playlist: e,
              }
            })
            Fs(u, function (e, t) {
              return e.bandwidth - t.bandwidth
            })
            var d = (u = u.filter(function (e) {
              return !ba.isIncompatible(e.playlist)
            })).filter(function (e) {
              return ba.isEnabled(e.playlist)
            })
            d.length ||
              (d = u.filter(function (e) {
                return !ba.isDisabled(e.playlist)
              }))
            var c = d.filter(function (e) {
                return e.bandwidth * ns.BANDWIDTH_VARIANCE < t
              }),
              h = c[c.length - 1],
              p = c.filter(function (e) {
                return e.bandwidth === h.bandwidth
              })[0]
            if (!1 === r) {
              var f = p || d[0] || u[0]
              if (f && f.playlist) {
                var m = 'sortedPlaylistReps'
                return (
                  p && (m = 'bandwidthBestRep'),
                  d[0] && (m = 'enabledPlaylistReps'),
                  Us('choosing ' + Bs(f) + ' using ' + m + ' with options', o),
                  f.playlist
                )
              }
              return Us('could not choose a playlist with options', o), null
            }
            var g = c.filter(function (e) {
              return e.width && e.height
            })
            Fs(g, function (e, t) {
              return e.width - t.width
            })
            var _ = g.filter(function (e) {
              return e.width === i && e.height === n
            })
            h = _[_.length - 1]
            var v,
              y,
              T,
              b,
              S = _.filter(function (e) {
                return e.bandwidth === h.bandwidth
              })[0]
            if (
              (S ||
                ((y = (v = g.filter(function (e) {
                  return e.width > i || e.height > n
                })).filter(function (e) {
                  return e.width === v[0].width && e.height === v[0].height
                })),
                (h = y[y.length - 1]),
                (T = y.filter(function (e) {
                  return e.bandwidth === h.bandwidth
                })[0])),
              s.experimentalLeastPixelDiffSelector)
            ) {
              var k = g.map(function (e) {
                return (e.pixelDiff = Math.abs(e.width - i) + Math.abs(e.height - n)), e
              })
              Fs(k, function (e, t) {
                return e.pixelDiff === t.pixelDiff ? t.bandwidth - e.bandwidth : e.pixelDiff - t.pixelDiff
              }),
                (b = k[0])
            }
            var C = b || T || S || p || d[0] || u[0]
            if (C && C.playlist) {
              var E = 'sortedPlaylistReps'
              return (
                b
                  ? (E = 'leastPixelDiffRep')
                  : T
                  ? (E = 'resolutionPlusOneRep')
                  : S
                  ? (E = 'resolutionBestRep')
                  : p
                  ? (E = 'bandwidthBestRep')
                  : d[0] && (E = 'enabledPlaylistReps'),
                Us('choosing ' + Bs(C) + ' using ' + E + ' with options', o),
                C.playlist
              )
            }
            return Us('could not choose a playlist with options', o), null
          }
        },
        qs = function () {
          var e = (this.useDevicePixelRatio && a().devicePixelRatio) || 1
          return Hs(
            this.playlists.master,
            this.systemBandwidth,
            parseInt(Ns(this.tech_.el(), 'width'), 10) * e,
            parseInt(Ns(this.tech_.el(), 'height'), 10) * e,
            this.limitRenditionByPlayerDimensions,
            this.masterPlaylistController_,
          )
        },
        Vs = function (e) {
          var t = e.inbandTextTracks,
            i = e.metadataArray,
            n = e.timestampOffset,
            r = e.videoDuration
          if (i) {
            var s = a().WebKitDataCue || a().VTTCue,
              o = t.metadataTrack_
            if (
              o &&
              (i.forEach(function (e) {
                var t = e.cueTime + n
                !('number' !== typeof t || a().isNaN(t) || t < 0) &&
                  t < 1 / 0 &&
                  e.frames.forEach(function (e) {
                    var i = new s(t, t, e.value || e.url || e.data || '')
                    ;(i.frame = e),
                      (i.value = e),
                      (function (e) {
                        Object.defineProperties(e.frame, {
                          id: {
                            get: function () {
                              return Wr.log.warn('cue.frame.id is deprecated. Use cue.value.key instead.'), e.value.key
                            },
                          },
                          value: {
                            get: function () {
                              return (
                                Wr.log.warn('cue.frame.value is deprecated. Use cue.value.data instead.'), e.value.data
                              )
                            },
                          },
                          privateData: {
                            get: function () {
                              return (
                                Wr.log.warn('cue.frame.privateData is deprecated. Use cue.value.data instead.'),
                                e.value.data
                              )
                            },
                          },
                        })
                      })(i),
                      o.addCue(i)
                  })
              }),
              o.cues && o.cues.length)
            ) {
              for (var l = o.cues, u = [], d = 0; d < l.length; d++) l[d] && u.push(l[d])
              var c = u.reduce(function (e, t) {
                  var i = e[t.startTime] || []
                  return i.push(t), (e[t.startTime] = i), e
                }, {}),
                h = Object.keys(c).sort(function (e, t) {
                  return Number(e) - Number(t)
                })
              h.forEach(function (e, t) {
                var i = c[e],
                  n = Number(h[t + 1]) || r
                i.forEach(function (e) {
                  e.endTime = n
                })
              })
            }
          }
        },
        Ws = function (e, t, i) {
          var n, r
          if (i && i.cues)
            for (n = i.cues.length; n--; ) (r = i.cues[n]).startTime >= e && r.endTime <= t && i.removeCue(r)
        },
        zs = function (e) {
          return 'number' === typeof e && isFinite(e)
        },
        Gs = 1 / 60,
        Ks = function (e) {
          var t = e.startOfSegment,
            i = e.duration,
            n = e.segment,
            r = e.part,
            a = e.playlist,
            s = a.mediaSequence,
            o = a.id,
            l = a.segments,
            u = void 0 === l ? [] : l,
            d = e.mediaIndex,
            c = e.partIndex,
            h = e.timeline,
            p = u.length - 1,
            f = 'mediaIndex/partIndex increment'
          e.getMediaInfoForTime
            ? (f = 'getMediaInfoForTime (' + e.getMediaInfoForTime + ')')
            : e.isSyncRequest && (f = 'getSyncSegmentCandidate (isSyncRequest)')
          var m = 'number' === typeof c,
            g = e.segment.uri ? 'segment' : 'pre-segment',
            _ = m ? oa({ preloadSegment: n }) - 1 : 0
          return (
            g +
            ' [' +
            (s + d) +
            '/' +
            (s + p) +
            ']' +
            (m ? ' part [' + c + '/' + _ + ']' : '') +
            ' segment start/end [' +
            n.start +
            ' => ' +
            n.end +
            ']' +
            (m ? ' part start/end [' + r.start + ' => ' + r.end + ']' : '') +
            ' startOfSegment [' +
            t +
            '] duration [' +
            i +
            '] timeline [' +
            h +
            '] selected by [' +
            f +
            '] playlist [' +
            o +
            ']'
          )
        },
        Zs = function (e) {
          return e + 'TimingInfo'
        },
        Qs = function (e) {
          var t = e.timelineChangeController,
            i = e.currentTimeline,
            n = e.segmentTimeline,
            r = e.loaderType,
            a = e.audioDisabled
          if (i === n) return !1
          if ('audio' === r) {
            var s = t.lastTimelineChange({ type: 'main' })
            return !s || s.to !== n
          }
          if ('main' === r && a) {
            var o = t.pendingTimelineChange({ type: 'audio' })
            return !o || o.to !== n
          }
          return !1
        },
        Xs = function (e) {
          var t = e.segmentDuration,
            i = e.maxDuration
          return !!t && Math.round(t) > i + Xr
        },
        Ys = function (e, t) {
          if ('hls' !== t) return null
          var i = (function (e, t) {
            var i = e && 'number' === typeof e.start && 'number' === typeof e.end ? e.end - e.start : 0,
              n = t && 'number' === typeof t.start && 'number' === typeof t.end ? t.end - t.start : 0
            return Math.max(i, n)
          })(e.audioTimingInfo, e.videoTimingInfo)
          if (!i) return null
          var n = e.playlist.targetDuration,
            r = Xs({ segmentDuration: i, maxDuration: 2 * n }),
            a = Xs({ segmentDuration: i, maxDuration: n }),
            s =
              'Segment with index ' +
              e.mediaIndex +
              ' from playlist ' +
              e.playlist.id +
              ' has a duration of ' +
              i +
              ' when the reported duration is ' +
              e.duration +
              ' and the target duration is ' +
              n +
              '. For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1'
          return r || a ? { severity: r ? 'warn' : 'info', message: s } : null
        },
        $s = (function (e) {
          function t(t, i) {
            var n
            if (((n = e.call(this) || this), !t)) throw new TypeError('Initialization settings are required')
            if ('function' !== typeof t.currentTime) throw new TypeError('No currentTime getter specified')
            if (!t.mediaSource) throw new TypeError('No MediaSource specified')
            return (
              (n.bandwidth = t.bandwidth),
              (n.throughput = { rate: 0, count: 0 }),
              (n.roundTrip = NaN),
              n.resetStats_(),
              (n.mediaIndex = null),
              (n.partIndex = null),
              (n.hasPlayed_ = t.hasPlayed),
              (n.currentTime_ = t.currentTime),
              (n.seekable_ = t.seekable),
              (n.seeking_ = t.seeking),
              (n.duration_ = t.duration),
              (n.mediaSource_ = t.mediaSource),
              (n.vhs_ = t.vhs),
              (n.loaderType_ = t.loaderType),
              (n.currentMediaInfo_ = void 0),
              (n.startingMediaInfo_ = void 0),
              (n.segmentMetadataTrack_ = t.segmentMetadataTrack),
              (n.goalBufferLength_ = t.goalBufferLength),
              (n.sourceType_ = t.sourceType),
              (n.sourceUpdater_ = t.sourceUpdater),
              (n.inbandTextTracks_ = t.inbandTextTracks),
              (n.state_ = 'INIT'),
              (n.timelineChangeController_ = t.timelineChangeController),
              (n.shouldSaveSegmentTimingInfo_ = !0),
              (n.parse708captions_ = t.parse708captions),
              (n.experimentalExactManifestTimings = t.experimentalExactManifestTimings),
              (n.checkBufferTimeout_ = null),
              (n.error_ = void 0),
              (n.currentTimeline_ = -1),
              (n.pendingSegment_ = null),
              (n.xhrOptions_ = null),
              (n.pendingSegments_ = []),
              (n.audioDisabled_ = !1),
              (n.isPendingTimestampOffset_ = !1),
              (n.gopBuffer_ = []),
              (n.timeMapping_ = 0),
              (n.safeAppend_ = Wr.browser.IE_VERSION >= 11),
              (n.appendInitSegment_ = { audio: !0, video: !0 }),
              (n.playlistOfLastInitSegment_ = { audio: null, video: null }),
              (n.callQueue_ = []),
              (n.loadQueue_ = []),
              (n.metadataQueue_ = { id3: [], caption: [] }),
              (n.waitingOnRemove_ = !1),
              (n.quotaExceededErrorRetryTimeout_ = null),
              (n.activeInitSegmentId_ = null),
              (n.initSegments_ = {}),
              (n.cacheEncryptionKeys_ = t.cacheEncryptionKeys),
              (n.keyCache_ = {}),
              (n.decrypter_ = t.decrypter),
              (n.syncController_ = t.syncController),
              (n.syncPoint_ = { segmentIndex: 0, time: 0 }),
              (n.transmuxer_ = n.createTransmuxer_()),
              (n.triggerSyncInfoUpdate_ = function () {
                return n.trigger('syncinfoupdate')
              }),
              n.syncController_.on('syncinfoupdate', n.triggerSyncInfoUpdate_),
              n.mediaSource_.addEventListener('sourceopen', function () {
                n.isEndOfStream_() || (n.ended_ = !1)
              }),
              (n.fetchAtBuffer_ = !1),
              (n.logger_ = Qr('SegmentLoader[' + n.loaderType_ + ']')),
              Object.defineProperty((0, u.Z)(n), 'state', {
                get: function () {
                  return this.state_
                },
                set: function (e) {
                  e !== this.state_ &&
                    (this.logger_(this.state_ + ' -> ' + e), (this.state_ = e), this.trigger('statechange'))
                },
              }),
              n.sourceUpdater_.on('ready', function () {
                n.hasEnoughInfoToAppend_() && n.processCallQueue_()
              }),
              'main' === n.loaderType_ &&
                n.timelineChangeController_.on('pendingtimelinechange', function () {
                  n.hasEnoughInfoToAppend_() && n.processCallQueue_()
                }),
              'audio' === n.loaderType_ &&
                n.timelineChangeController_.on('timelinechange', function () {
                  n.hasEnoughInfoToLoad_() && n.processLoadQueue_(), n.hasEnoughInfoToAppend_() && n.processCallQueue_()
                }),
              n
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.createTransmuxer_ = function () {
              return ms({
                remux: !1,
                alignGopsAtEnd: this.safeAppend_,
                keepOriginalTimestamps: !0,
                parse708captions: this.parse708captions_,
              })
            }),
            (i.resetStats_ = function () {
              ;(this.mediaBytesTransferred = 0),
                (this.mediaRequests = 0),
                (this.mediaRequestsAborted = 0),
                (this.mediaRequestsTimedout = 0),
                (this.mediaRequestsErrored = 0),
                (this.mediaTransferDuration = 0),
                (this.mediaSecondsLoaded = 0),
                (this.mediaAppends = 0)
            }),
            (i.dispose = function () {
              this.trigger('dispose'),
                (this.state = 'DISPOSED'),
                this.pause(),
                this.abort_(),
                this.transmuxer_ && this.transmuxer_.terminate(),
                this.resetStats_(),
                this.checkBufferTimeout_ && a().clearTimeout(this.checkBufferTimeout_),
                this.syncController_ &&
                  this.triggerSyncInfoUpdate_ &&
                  this.syncController_.off('syncinfoupdate', this.triggerSyncInfoUpdate_),
                this.off()
            }),
            (i.setAudio = function (e) {
              ;(this.audioDisabled_ = !e),
                e ? (this.appendInitSegment_.audio = !0) : this.sourceUpdater_.removeAudio(0, this.duration_())
            }),
            (i.abort = function () {
              'WAITING' === this.state
                ? (this.abort_(), (this.state = 'READY'), this.paused() || this.monitorBuffer_())
                : this.pendingSegment_ && (this.pendingSegment_ = null)
            }),
            (i.abort_ = function () {
              this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(),
                (this.pendingSegment_ = null),
                (this.callQueue_ = []),
                (this.loadQueue_ = []),
                (this.metadataQueue_.id3 = []),
                (this.metadataQueue_.caption = []),
                this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_),
                (this.waitingOnRemove_ = !1),
                a().clearTimeout(this.quotaExceededErrorRetryTimeout_),
                (this.quotaExceededErrorRetryTimeout_ = null)
            }),
            (i.checkForAbort_ = function (e) {
              return 'APPENDING' !== this.state || this.pendingSegment_
                ? !this.pendingSegment_ || this.pendingSegment_.requestId !== e
                : ((this.state = 'READY'), !0)
            }),
            (i.error = function (e) {
              return (
                'undefined' !== typeof e && (this.logger_('error occurred:', e), (this.error_ = e)),
                (this.pendingSegment_ = null),
                this.error_
              )
            }),
            (i.endOfStream = function () {
              ;(this.ended_ = !0),
                this.transmuxer_ && fs(this.transmuxer_),
                (this.gopBuffer_.length = 0),
                this.pause(),
                this.trigger('ended')
            }),
            (i.buffered_ = function () {
              var e = this.getMediaInfo_()
              if (!this.sourceUpdater_ || !e) return Wr.createTimeRanges()
              if ('main' === this.loaderType_) {
                var t = e.hasAudio,
                  i = e.hasVideo,
                  n = e.isMuxed
                if (i && t && !this.audioDisabled_ && !n) return this.sourceUpdater_.buffered()
                if (i) return this.sourceUpdater_.videoBuffered()
              }
              return this.sourceUpdater_.audioBuffered()
            }),
            (i.initSegmentForMap = function (e, t) {
              if ((void 0 === t && (t = !1), !e)) return null
              var i = za(e),
                n = this.initSegments_[i]
              return (
                t &&
                  !n &&
                  e.bytes &&
                  (this.initSegments_[i] = n =
                    {
                      resolvedUri: e.resolvedUri,
                      byterange: e.byterange,
                      bytes: e.bytes,
                      tracks: e.tracks,
                      timescales: e.timescales,
                    }),
                n || e
              )
            }),
            (i.segmentKey = function (e, t) {
              if ((void 0 === t && (t = !1), !e)) return null
              var i = Ga(e),
                n = this.keyCache_[i]
              this.cacheEncryptionKeys_ &&
                t &&
                !n &&
                e.bytes &&
                (this.keyCache_[i] = n = { resolvedUri: e.resolvedUri, bytes: e.bytes })
              var r = { resolvedUri: (n || e).resolvedUri }
              return n && (r.bytes = n.bytes), r
            }),
            (i.couldBeginLoading_ = function () {
              return this.playlist_ && !this.paused()
            }),
            (i.load = function () {
              if ((this.monitorBuffer_(), this.playlist_))
                return 'INIT' === this.state && this.couldBeginLoading_()
                  ? this.init_()
                  : void (
                      !this.couldBeginLoading_() ||
                      ('READY' !== this.state && 'INIT' !== this.state) ||
                      (this.state = 'READY')
                    )
            }),
            (i.init_ = function () {
              return (this.state = 'READY'), this.resetEverything(), this.monitorBuffer_()
            }),
            (i.playlist = function (e, t) {
              if ((void 0 === t && (t = {}), e)) {
                var i = this.playlist_,
                  n = this.pendingSegment_
                ;(this.playlist_ = e),
                  (this.xhrOptions_ = t),
                  'INIT' === this.state &&
                    ((e.syncInfo = { mediaSequence: e.mediaSequence, time: 0 }),
                    'main' === this.loaderType_ && this.syncController_.setDateTimeMappingForStart(e))
                var r = null
                if (
                  (i && (i.id ? (r = i.id) : i.uri && (r = i.uri)),
                  this.logger_('playlist update [' + r + ' => ' + (e.id || e.uri) + ']'),
                  this.trigger('syncinfoupdate'),
                  'INIT' === this.state && this.couldBeginLoading_())
                )
                  return this.init_()
                if (!i || i.uri !== e.uri)
                  return (
                    null !== this.mediaIndex && this.resyncLoader(),
                    (this.currentMediaInfo_ = void 0),
                    void this.trigger('playlistupdate')
                  )
                var a = e.mediaSequence - i.mediaSequence
                if ((this.logger_('live window shift [' + a + ']'), null !== this.mediaIndex))
                  if (((this.mediaIndex -= a), this.mediaIndex < 0)) (this.mediaIndex = null), (this.partIndex = null)
                  else {
                    var s = this.playlist_.segments[this.mediaIndex]
                    if (this.partIndex && (!s.parts || !s.parts.length || !s.parts[this.partIndex])) {
                      var o = this.mediaIndex
                      this.logger_('currently processing part (index ' + this.partIndex + ') no longer exists.'),
                        this.resetLoader(),
                        (this.mediaIndex = o)
                    }
                  }
                n &&
                  ((n.mediaIndex -= a),
                  n.mediaIndex < 0
                    ? ((n.mediaIndex = null), (n.partIndex = null))
                    : (n.mediaIndex >= 0 && (n.segment = e.segments[n.mediaIndex]),
                      n.partIndex >= 0 && n.segment.parts && (n.part = n.segment.parts[n.partIndex]))),
                  this.syncController_.saveExpiredSegmentInfo(i, e)
              }
            }),
            (i.pause = function () {
              this.checkBufferTimeout_ &&
                (a().clearTimeout(this.checkBufferTimeout_), (this.checkBufferTimeout_ = null))
            }),
            (i.paused = function () {
              return null === this.checkBufferTimeout_
            }),
            (i.resetEverything = function (e) {
              ;(this.ended_ = !1),
                (this.appendInitSegment_ = { audio: !0, video: !0 }),
                this.resetLoader(),
                this.remove(0, 1 / 0, e),
                this.transmuxer_ && this.transmuxer_.postMessage({ action: 'clearAllMp4Captions' })
            }),
            (i.resetLoader = function () {
              ;(this.fetchAtBuffer_ = !1), this.resyncLoader()
            }),
            (i.resyncLoader = function () {
              this.transmuxer_ && fs(this.transmuxer_),
                (this.mediaIndex = null),
                (this.partIndex = null),
                (this.syncPoint_ = null),
                (this.isPendingTimestampOffset_ = !1),
                (this.callQueue_ = []),
                (this.loadQueue_ = []),
                (this.metadataQueue_.id3 = []),
                (this.metadataQueue_.caption = []),
                this.abort(),
                this.transmuxer_ && this.transmuxer_.postMessage({ action: 'clearParsedMp4Captions' })
            }),
            (i.remove = function (e, t, i, n) {
              if (
                (void 0 === i && (i = function () {}),
                void 0 === n && (n = !1),
                t === 1 / 0 && (t = this.duration_()),
                t <= e)
              )
                this.logger_('skipping remove because end ${end} is <= start ${start}')
              else if (this.sourceUpdater_ && this.getMediaInfo_()) {
                var r = 1,
                  a = function () {
                    0 === --r && i()
                  }
                for (var s in ((!n && this.audioDisabled_) || (r++, this.sourceUpdater_.removeAudio(e, t, a)),
                (n || 'main' === this.loaderType_) &&
                  ((this.gopBuffer_ = (function (e, t, i, n) {
                    for (
                      var r = Math.ceil((t - n) * L.ONE_SECOND_IN_TS),
                        a = Math.ceil((i - n) * L.ONE_SECOND_IN_TS),
                        s = e.slice(),
                        o = e.length;
                      o-- && !(e[o].pts <= a);

                    );
                    if (-1 === o) return s
                    for (var l = o + 1; l-- && !(e[l].pts <= r); );
                    return (l = Math.max(l, 0)), s.splice(l, o - l + 1), s
                  })(this.gopBuffer_, e, t, this.timeMapping_)),
                  r++,
                  this.sourceUpdater_.removeVideo(e, t, a)),
                this.inbandTextTracks_))
                  Ws(e, t, this.inbandTextTracks_[s])
                Ws(e, t, this.segmentMetadataTrack_), a()
              } else this.logger_('skipping remove because no source updater or starting media info')
            }),
            (i.monitorBuffer_ = function () {
              this.checkBufferTimeout_ && a().clearTimeout(this.checkBufferTimeout_),
                (this.checkBufferTimeout_ = a().setTimeout(this.monitorBufferTick_.bind(this), 1))
            }),
            (i.monitorBufferTick_ = function () {
              'READY' === this.state && this.fillBuffer_(),
                this.checkBufferTimeout_ && a().clearTimeout(this.checkBufferTimeout_),
                (this.checkBufferTimeout_ = a().setTimeout(this.monitorBufferTick_.bind(this), 500))
            }),
            (i.fillBuffer_ = function () {
              if (!this.sourceUpdater_.updating()) {
                var e = this.chooseNextRequest_()
                e &&
                  ('number' === typeof e.timestampOffset &&
                    ((this.isPendingTimestampOffset_ = !1),
                    this.timelineChangeController_.pendingTimelineChange({
                      type: this.loaderType_,
                      from: this.currentTimeline_,
                      to: e.timeline,
                    })),
                  this.loadSegment_(e))
              }
            }),
            (i.isEndOfStream_ = function (e, t, i) {
              if (
                (void 0 === e && (e = this.mediaIndex),
                void 0 === t && (t = this.playlist_),
                void 0 === i && (i = this.partIndex),
                !t || !this.mediaSource_)
              )
                return !1
              var n = 'number' === typeof e && t.segments[e],
                r = e + 1 === t.segments.length,
                a = !n || !n.parts || i + 1 === n.parts.length
              return t.endList && 'open' === this.mediaSource_.readyState && r && a
            }),
            (i.chooseNextRequest_ = function () {
              var e = na(this.buffered_()) || 0,
                t = Math.max(0, e - this.currentTime_()),
                i = !this.hasPlayed_() && t >= 1,
                n = t >= this.goalBufferLength_(),
                r = this.playlist_.segments
              if (!r.length || i || n) return null
              this.syncPoint_ =
                this.syncPoint_ ||
                this.syncController_.getSyncPoint(
                  this.playlist_,
                  this.duration_(),
                  this.currentTimeline_,
                  this.currentTime_(),
                )
              var a = {
                partIndex: null,
                mediaIndex: null,
                startOfSegment: null,
                playlist: this.playlist_,
                isSyncRequest: Boolean(!this.syncPoint_),
              }
              if (a.isSyncRequest)
                a.mediaIndex = (function (e, t, i) {
                  t = t || []
                  for (var n = [], r = 0, a = 0; a < t.length; a++) {
                    var s = t[a]
                    if (e === s.timeline && (n.push(a), (r += s.duration) > i)) return a
                  }
                  return 0 === n.length ? 0 : n[n.length - 1]
                })(this.currentTimeline_, r, e)
              else if (null !== this.mediaIndex) {
                var s = r[this.mediaIndex],
                  o = 'number' === typeof this.partIndex ? this.partIndex : -1
                ;(a.startOfSegment = s.end ? s.end : e),
                  s.parts && s.parts[o + 1]
                    ? ((a.mediaIndex = this.mediaIndex), (a.partIndex = o + 1))
                    : (a.mediaIndex = this.mediaIndex + 1)
              } else {
                var l = ba.getMediaInfoForTime({
                    experimentalExactManifestTimings: this.experimentalExactManifestTimings,
                    playlist: this.playlist_,
                    currentTime: this.fetchAtBuffer_ ? e : this.currentTime_(),
                    startingPartIndex: this.syncPoint_.partIndex,
                    startingSegmentIndex: this.syncPoint_.segmentIndex,
                    startTime: this.syncPoint_.time,
                  }),
                  u = l.segmentIndex,
                  d = l.startTime,
                  c = l.partIndex
                ;(a.getMediaInfoForTime = this.fetchAtBuffer_ ? 'bufferedEnd' : 'currentTime'),
                  (a.mediaIndex = u),
                  (a.startOfSegment = d),
                  (a.partIndex = c)
              }
              var h = r[a.mediaIndex],
                p = h && 'number' === typeof a.partIndex && h.parts && h.parts[a.partIndex]
              if (!h || ('number' === typeof a.partIndex && !p)) return null
              'number' !== typeof a.partIndex && h.parts && (a.partIndex = 0)
              var f = this.mediaSource_ && 'ended' === this.mediaSource_.readyState
              return a.mediaIndex >= r.length - 1 && f && !this.seeking_() ? null : this.generateSegmentInfo_(a)
            }),
            (i.generateSegmentInfo_ = function (e) {
              var t = e.playlist,
                i = e.mediaIndex,
                n = e.startOfSegment,
                r = e.isSyncRequest,
                a = e.partIndex,
                s = e.forceTimestampOffset,
                o = e.getMediaInfoForTime,
                l = t.segments[i],
                u = 'number' === typeof a && l.parts[a],
                d = {
                  requestId: 'segment-loader-' + Math.random(),
                  uri: (u && u.resolvedUri) || l.resolvedUri,
                  mediaIndex: i,
                  partIndex: u ? a : null,
                  isSyncRequest: r,
                  startOfSegment: n,
                  playlist: t,
                  bytes: null,
                  encryptedBytes: null,
                  timestampOffset: null,
                  timeline: l.timeline,
                  duration: (u && u.duration) || l.duration,
                  segment: l,
                  part: u,
                  byteLength: 0,
                  transmuxer: this.transmuxer_,
                  getMediaInfoForTime: o,
                },
                c = 'undefined' !== typeof s ? s : this.isPendingTimestampOffset_
              d.timestampOffset = this.timestampOffsetForSegment_({
                segmentTimeline: l.timeline,
                currentTimeline: this.currentTimeline_,
                startOfSegment: n,
                buffered: this.buffered_(),
                overrideCheck: c,
              })
              var h = na(this.sourceUpdater_.audioBuffered())
              return (
                'number' === typeof h && (d.audioAppendStart = h - this.sourceUpdater_.audioTimestampOffset()),
                this.sourceUpdater_.videoBuffered().length &&
                  (d.gopsToAlignWith = (function (e, t, i) {
                    if ('undefined' === typeof t || null === t || !e.length) return []
                    var n,
                      r = Math.ceil((t - i + 3) * L.ONE_SECOND_IN_TS)
                    for (n = 0; n < e.length && !(e[n].pts > r); n++);
                    return e.slice(n)
                  })(
                    this.gopBuffer_,
                    this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(),
                    this.timeMapping_,
                  )),
                d
              )
            }),
            (i.timestampOffsetForSegment_ = function (e) {
              return (function (e) {
                var t = e.segmentTimeline,
                  i = e.currentTimeline,
                  n = e.startOfSegment,
                  r = e.buffered
                return e.overrideCheck || t !== i ? (t < i ? n : r.length ? r.end(r.length - 1) : n) : null
              })(e)
            }),
            (i.earlyAbortWhenNeeded_ = function (e) {
              if (
                !this.vhs_.tech_.paused() &&
                this.xhrOptions_.timeout &&
                this.playlist_.attributes.BANDWIDTH &&
                !(Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3)
              ) {
                var t = this.currentTime_(),
                  i = e.bandwidth,
                  n = this.pendingSegment_.duration,
                  r = ba.estimateSegmentRequestTime(n, i, this.playlist_, e.bytesReceived),
                  a =
                    (function (e, t, i) {
                      return void 0 === i && (i = 1), ((e.length ? e.end(e.length - 1) : 0) - t) / i
                    })(this.buffered_(), t, this.vhs_.tech_.playbackRate()) - 1
                if (!(r <= a)) {
                  var s = (function (e) {
                    var t = e.master,
                      i = e.currentTime,
                      n = e.bandwidth,
                      r = e.duration,
                      a = e.segmentDuration,
                      s = e.timeUntilRebuffer,
                      o = e.currentTimeline,
                      l = e.syncController,
                      u = t.playlists.filter(function (e) {
                        return !ba.isIncompatible(e)
                      }),
                      d = u.filter(ba.isEnabled)
                    d.length ||
                      (d = u.filter(function (e) {
                        return !ba.isDisabled(e)
                      }))
                    var c = d.filter(ba.hasAttribute.bind(null, 'BANDWIDTH')).map(function (e) {
                        var t = l.getSyncPoint(e, r, o, i) ? 1 : 2
                        return { playlist: e, rebufferingImpact: ba.estimateSegmentRequestTime(a, n, e) * t - s }
                      }),
                      h = c.filter(function (e) {
                        return e.rebufferingImpact <= 0
                      })
                    return (
                      Fs(h, function (e, t) {
                        return js(t.playlist, e.playlist)
                      }),
                      h.length
                        ? h[0]
                        : (Fs(c, function (e, t) {
                            return e.rebufferingImpact - t.rebufferingImpact
                          }),
                          c[0] || null)
                    )
                  })({
                    master: this.vhs_.playlists.master,
                    currentTime: t,
                    bandwidth: i,
                    duration: this.duration_(),
                    segmentDuration: n,
                    timeUntilRebuffer: a,
                    currentTimeline: this.currentTimeline_,
                    syncController: this.syncController_,
                  })
                  if (s) {
                    var o = r - a - s.rebufferingImpact,
                      l = 0.5
                    a <= Xr && (l = 1),
                      !s.playlist ||
                        s.playlist.uri === this.playlist_.uri ||
                        o < l ||
                        ((this.bandwidth = s.playlist.attributes.BANDWIDTH * ns.BANDWIDTH_VARIANCE + 1),
                        this.trigger('earlyabort'))
                  }
                }
              }
            }),
            (i.handleAbort_ = function (e) {
              this.logger_('Aborting ' + Ks(e)), (this.mediaRequestsAborted += 1)
            }),
            (i.handleProgress_ = function (e, t) {
              this.earlyAbortWhenNeeded_(t.stats), this.checkForAbort_(t.requestId) || this.trigger('progress')
            }),
            (i.handleTrackInfo_ = function (e, t) {
              this.earlyAbortWhenNeeded_(e.stats),
                this.checkForAbort_(e.requestId) ||
                  this.checkForIllegalMediaSwitch(t) ||
                  ((t = t || {}),
                  (function (e, t) {
                    if ((!e && !t) || (!e && t) || (e && !t)) return !1
                    if (e === t) return !0
                    var i = Object.keys(e).sort(),
                      n = Object.keys(t).sort()
                    if (i.length !== n.length) return !1
                    for (var r = 0; r < i.length; r++) {
                      var a = i[r]
                      if (a !== n[r]) return !1
                      if (e[a] !== t[a]) return !1
                    }
                    return !0
                  })(this.currentMediaInfo_, t) ||
                    ((this.appendInitSegment_ = { audio: !0, video: !0 }),
                    (this.startingMediaInfo_ = t),
                    (this.currentMediaInfo_ = t),
                    this.logger_('trackinfo update', t),
                    this.trigger('trackinfo')),
                  this.checkForAbort_(e.requestId) ||
                    ((this.pendingSegment_.trackInfo = t), this.hasEnoughInfoToAppend_() && this.processCallQueue_()))
            }),
            (i.handleTimingInfo_ = function (e, t, i, n) {
              if ((this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId))) {
                var r = this.pendingSegment_,
                  a = Zs(t)
                ;(r[a] = r[a] || {}),
                  (r[a][i] = n),
                  this.logger_('timinginfo: ' + t + ' - ' + i + ' - ' + n),
                  this.hasEnoughInfoToAppend_() && this.processCallQueue_()
              }
            }),
            (i.handleCaptions_ = function (e, t) {
              var i = this
              if ((this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)))
                if (0 !== t.length)
                  if (this.pendingSegment_.hasAppendedData_) {
                    var n =
                        null === this.sourceUpdater_.videoTimestampOffset()
                          ? this.sourceUpdater_.audioTimestampOffset()
                          : this.sourceUpdater_.videoTimestampOffset(),
                      r = {}
                    t.forEach(function (e) {
                      r[e.stream] = r[e.stream] || { startTime: 1 / 0, captions: [], endTime: 0 }
                      var t = r[e.stream]
                      ;(t.startTime = Math.min(t.startTime, e.startTime + n)),
                        (t.endTime = Math.max(t.endTime, e.endTime + n)),
                        t.captions.push(e)
                    }),
                      Object.keys(r).forEach(function (e) {
                        var t = r[e],
                          s = t.startTime,
                          o = t.endTime,
                          l = t.captions,
                          u = i.inbandTextTracks_
                        i.logger_('adding cues from ' + s + ' -> ' + o + ' for ' + e),
                          (function (e, t, i) {
                            if (!e[i]) {
                              t.trigger({ type: 'usage', name: 'vhs-608' }),
                                t.trigger({ type: 'usage', name: 'hls-608' })
                              var n = i
                              ;/^cc708_/.test(i) && (n = 'SERVICE' + i.split('_')[1])
                              var r = t.textTracks().getTrackById(n)
                              if (r) e[i] = r
                              else {
                                var a = i,
                                  s = i,
                                  o = !1,
                                  l = ((t.options_.vhs && t.options_.vhs.captionServices) || {})[n]
                                l && ((a = l.label), (s = l.language), (o = l.default)),
                                  (e[i] = t.addRemoteTextTrack(
                                    { kind: 'captions', id: n, default: o, label: a, language: s },
                                    !1,
                                  ).track)
                              }
                            }
                          })(u, i.vhs_.tech_, e),
                          Ws(s, o, u[e]),
                          (function (e) {
                            var t = e.inbandTextTracks,
                              i = e.captionArray,
                              n = e.timestampOffset
                            if (i) {
                              var r = a().WebKitDataCue || a().VTTCue
                              i.forEach(function (e) {
                                var i = e.stream
                                t[i].addCue(new r(e.startTime + n, e.endTime + n, e.text))
                              })
                            }
                          })({ captionArray: l, inbandTextTracks: u, timestampOffset: n })
                      }),
                      this.transmuxer_ && this.transmuxer_.postMessage({ action: 'clearParsedMp4Captions' })
                  } else this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, t))
                else this.logger_('SegmentLoader received no captions from a caption event')
            }),
            (i.handleId3_ = function (e, t, i) {
              if ((this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)))
                if (this.pendingSegment_.hasAppendedData_) {
                  var n =
                    null === this.sourceUpdater_.videoTimestampOffset()
                      ? this.sourceUpdater_.audioTimestampOffset()
                      : this.sourceUpdater_.videoTimestampOffset()
                  !(function (e, t, i) {
                    e.metadataTrack_ ||
                      ((e.metadataTrack_ = i.addRemoteTextTrack(
                        { kind: 'metadata', label: 'Timed Metadata' },
                        !1,
                      ).track),
                      (e.metadataTrack_.inBandMetadataTrackDispatchType = t))
                  })(this.inbandTextTracks_, i, this.vhs_.tech_),
                    Vs({
                      inbandTextTracks: this.inbandTextTracks_,
                      metadataArray: t,
                      timestampOffset: n,
                      videoDuration: this.duration_(),
                    })
                } else this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, t, i))
            }),
            (i.processMetadataQueue_ = function () {
              this.metadataQueue_.id3.forEach(function (e) {
                return e()
              }),
                this.metadataQueue_.caption.forEach(function (e) {
                  return e()
                }),
                (this.metadataQueue_.id3 = []),
                (this.metadataQueue_.caption = [])
            }),
            (i.processCallQueue_ = function () {
              var e = this.callQueue_
              ;(this.callQueue_ = []),
                e.forEach(function (e) {
                  return e()
                })
            }),
            (i.processLoadQueue_ = function () {
              var e = this.loadQueue_
              ;(this.loadQueue_ = []),
                e.forEach(function (e) {
                  return e()
                })
            }),
            (i.hasEnoughInfoToLoad_ = function () {
              if ('audio' !== this.loaderType_) return !0
              var e = this.pendingSegment_
              return (
                !!e &&
                (!this.getCurrentMediaInfo_() ||
                  !Qs({
                    timelineChangeController: this.timelineChangeController_,
                    currentTimeline: this.currentTimeline_,
                    segmentTimeline: e.timeline,
                    loaderType: this.loaderType_,
                    audioDisabled: this.audioDisabled_,
                  }))
              )
            }),
            (i.getCurrentMediaInfo_ = function (e) {
              return void 0 === e && (e = this.pendingSegment_), (e && e.trackInfo) || this.currentMediaInfo_
            }),
            (i.getMediaInfo_ = function (e) {
              return void 0 === e && (e = this.pendingSegment_), this.getCurrentMediaInfo_(e) || this.startingMediaInfo_
            }),
            (i.hasEnoughInfoToAppend_ = function () {
              if (!this.sourceUpdater_.ready()) return !1
              if (this.waitingOnRemove_ || this.quotaExceededErrorRetryTimeout_) return !1
              var e = this.pendingSegment_,
                t = this.getCurrentMediaInfo_()
              if (!e || !t) return !1
              var i = t.hasAudio,
                n = t.hasVideo,
                r = t.isMuxed
              return (
                !(n && !e.videoTimingInfo) &&
                !(i && !this.audioDisabled_ && !r && !e.audioTimingInfo) &&
                !Qs({
                  timelineChangeController: this.timelineChangeController_,
                  currentTimeline: this.currentTimeline_,
                  segmentTimeline: e.timeline,
                  loaderType: this.loaderType_,
                  audioDisabled: this.audioDisabled_,
                })
              )
            }),
            (i.handleData_ = function (e, t) {
              if ((this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)))
                if (!this.callQueue_.length && this.hasEnoughInfoToAppend_()) {
                  var i = this.pendingSegment_
                  if (
                    (this.setTimeMapping_(i.timeline),
                    this.updateMediaSecondsLoaded_(i.segment),
                    'closed' !== this.mediaSource_.readyState)
                  ) {
                    if (
                      (e.map && ((e.map = this.initSegmentForMap(e.map, !0)), (i.segment.map = e.map)),
                      e.key && this.segmentKey(e.key, !0),
                      (i.isFmp4 = e.isFmp4),
                      (i.timingInfo = i.timingInfo || {}),
                      i.isFmp4)
                    )
                      this.trigger('fmp4'), (i.timingInfo.start = i[Zs(t.type)].start)
                    else {
                      var n,
                        r = this.getCurrentMediaInfo_(),
                        a = 'main' === this.loaderType_ && r && r.hasVideo
                      a && (n = i.videoTimingInfo.start),
                        (i.timingInfo.start = this.trueSegmentStart_({
                          currentStart: i.timingInfo.start,
                          playlist: i.playlist,
                          mediaIndex: i.mediaIndex,
                          currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(),
                          useVideoTimingInfo: a,
                          firstVideoFrameTimeForData: n,
                          videoTimingInfo: i.videoTimingInfo,
                          audioTimingInfo: i.audioTimingInfo,
                        }))
                    }
                    if (
                      (this.updateAppendInitSegmentStatus(i, t.type),
                      this.updateSourceBufferTimestampOffset_(i),
                      i.isSyncRequest)
                    ) {
                      this.updateTimingInfoEnd_(i),
                        this.syncController_.saveSegmentTimingInfo({
                          segmentInfo: i,
                          shouldSaveTimelineMapping: 'main' === this.loaderType_,
                        })
                      var s = this.chooseNextRequest_()
                      if (s.mediaIndex !== i.mediaIndex || s.partIndex !== i.partIndex)
                        return void this.logger_('sync segment was incorrect, not appending')
                      this.logger_('sync segment was correct, appending')
                    }
                    ;(i.hasAppendedData_ = !0), this.processMetadataQueue_(), this.appendData_(i, t)
                  }
                } else this.callQueue_.push(this.handleData_.bind(this, e, t))
            }),
            (i.updateAppendInitSegmentStatus = function (e, t) {
              'main' !== this.loaderType_ ||
                'number' !== typeof e.timestampOffset ||
                e.changedTimestampOffset ||
                (this.appendInitSegment_ = { audio: !0, video: !0 }),
                this.playlistOfLastInitSegment_[t] !== e.playlist && (this.appendInitSegment_[t] = !0)
            }),
            (i.getInitSegmentAndUpdateState_ = function (e) {
              var t = e.type,
                i = e.initSegment,
                n = e.map,
                r = e.playlist
              if (n) {
                var a = za(n)
                if (this.activeInitSegmentId_ === a) return null
                ;(i = this.initSegmentForMap(n, !0).bytes), (this.activeInitSegmentId_ = a)
              }
              return i && this.appendInitSegment_[t]
                ? ((this.playlistOfLastInitSegment_[t] = r),
                  (this.appendInitSegment_[t] = !1),
                  (this.activeInitSegmentId_ = null),
                  i)
                : null
            }),
            (i.handleQuotaExceededError_ = function (e, t) {
              var i = this,
                n = e.segmentInfo,
                r = e.type,
                s = e.bytes,
                o = this.sourceUpdater_.audioBuffered(),
                l = this.sourceUpdater_.videoBuffered()
              o.length > 1 &&
                this.logger_('On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: ' + ia(o).join(', ')),
                l.length > 1 &&
                  this.logger_('On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: ' + ia(l).join(', '))
              var u = o.length ? o.start(0) : 0,
                d = o.length ? o.end(o.length - 1) : 0,
                c = l.length ? l.start(0) : 0,
                h = l.length ? l.end(l.length - 1) : 0
              if (d - u <= 1 && h - c <= 1)
                return (
                  this.logger_(
                    'On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. Appended byte length: ' +
                      s.byteLength +
                      ', audio buffer: ' +
                      ia(o).join(', ') +
                      ', video buffer: ' +
                      ia(l).join(', ') +
                      ', ',
                  ),
                  this.error({
                    message: 'Quota exceeded error with append of a single segment of content',
                    excludeUntil: 1 / 0,
                  }),
                  void this.trigger('error')
                )
              ;(this.waitingOnRemove_ = !0),
                this.callQueue_.push(this.appendToSourceBuffer_.bind(this, { segmentInfo: n, type: r, bytes: s }))
              var p = this.currentTime_() - 1
              this.logger_('On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to ' + p),
                this.remove(
                  0,
                  p,
                  function () {
                    i.logger_('On QUOTA_EXCEEDED_ERR, retrying append in 1s'),
                      (i.waitingOnRemove_ = !1),
                      (i.quotaExceededErrorRetryTimeout_ = a().setTimeout(function () {
                        i.logger_('On QUOTA_EXCEEDED_ERR, re-processing call queue'),
                          (i.quotaExceededErrorRetryTimeout_ = null),
                          i.processCallQueue_()
                      }, 1e3))
                  },
                  !0,
                )
            }),
            (i.handleAppendError_ = function (e, t) {
              var i = e.segmentInfo,
                n = e.type,
                r = e.bytes
              t &&
                (22 !== t.code
                  ? (this.logger_('Received non QUOTA_EXCEEDED_ERR on append', t),
                    this.error(
                      n +
                        ' append of ' +
                        r.length +
                        'b failed for segment #' +
                        i.mediaIndex +
                        ' in playlist ' +
                        i.playlist.id,
                    ),
                    this.trigger('appenderror'))
                  : this.handleQuotaExceededError_({ segmentInfo: i, type: n, bytes: r }))
            }),
            (i.appendToSourceBuffer_ = function (e) {
              var t = e.segmentInfo,
                i = e.type,
                n = e.initSegment,
                r = e.data,
                a = e.bytes
              if (!a) {
                var s = [r],
                  o = r.byteLength
                n && (s.unshift(n), (o += n.byteLength)),
                  (a = (function (e) {
                    var t,
                      i = 0
                    return (
                      e.bytes &&
                        ((t = new Uint8Array(e.bytes)),
                        e.segments.forEach(function (e) {
                          t.set(e, i), (i += e.byteLength)
                        })),
                      t
                    )
                  })({ bytes: o, segments: s }))
              }
              this.sourceUpdater_.appendBuffer(
                { segmentInfo: t, type: i, bytes: a },
                this.handleAppendError_.bind(this, { segmentInfo: t, type: i, bytes: a }),
              )
            }),
            (i.handleSegmentTimingInfo_ = function (e, t, i) {
              if (this.pendingSegment_ && t === this.pendingSegment_.requestId) {
                var n = this.pendingSegment_.segment,
                  r = e + 'TimingInfo'
                n[r] || (n[r] = {}),
                  (n[r].transmuxerPrependedSeconds = i.prependedContentDuration || 0),
                  (n[r].transmuxedPresentationStart = i.start.presentation),
                  (n[r].transmuxedDecodeStart = i.start.decode),
                  (n[r].transmuxedPresentationEnd = i.end.presentation),
                  (n[r].transmuxedDecodeEnd = i.end.decode),
                  (n[r].baseMediaDecodeTime = i.baseMediaDecodeTime)
              }
            }),
            (i.appendData_ = function (e, t) {
              var i = t.type,
                n = t.data
              if (n && n.byteLength && ('audio' !== i || !this.audioDisabled_)) {
                var r = this.getInitSegmentAndUpdateState_({
                  type: i,
                  initSegment: t.initSegment,
                  playlist: e.playlist,
                  map: e.isFmp4 ? e.segment.map : null,
                })
                this.appendToSourceBuffer_({ segmentInfo: e, type: i, initSegment: r, data: n })
              }
            }),
            (i.loadSegment_ = function (e) {
              var t = this
              ;(this.state = 'WAITING'),
                (this.pendingSegment_ = e),
                this.trimBackBuffer_(e),
                'number' === typeof e.timestampOffset &&
                  this.transmuxer_ &&
                  this.transmuxer_.postMessage({ action: 'clearAllMp4Captions' }),
                this.hasEnoughInfoToLoad_()
                  ? this.updateTransmuxerAndRequestSegment_(e)
                  : this.loadQueue_.push(function () {
                      var i = (0, l.Z)({}, e, { forceTimestampOffset: !0 })
                      ;(0, l.Z)(e, t.generateSegmentInfo_(i)),
                        (t.isPendingTimestampOffset_ = !1),
                        t.updateTransmuxerAndRequestSegment_(e)
                    })
            }),
            (i.updateTransmuxerAndRequestSegment_ = function (e) {
              var t = this
              this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset) &&
                ((this.gopBuffer_.length = 0),
                (e.gopsToAlignWith = []),
                (this.timeMapping_ = 0),
                this.transmuxer_.postMessage({ action: 'reset' }),
                this.transmuxer_.postMessage({ action: 'setTimestampOffset', timestampOffset: e.timestampOffset }))
              var i = this.createSimplifiedSegmentObj_(e),
                n = this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex),
                r = null !== this.mediaIndex,
                a = e.timeline !== this.currentTimeline_ && e.timeline > 0,
                s = n || (r && a)
              this.logger_('Requesting ' + Ks(e)),
                i.map &&
                  !i.map.bytes &&
                  (this.logger_('going to request init segment.'),
                  (this.appendInitSegment_ = { video: !0, audio: !0 })),
                (e.abortRequests = As({
                  xhr: this.vhs_.xhr,
                  xhrOptions: this.xhrOptions_,
                  decryptionWorker: this.decrypter_,
                  segment: i,
                  abortFn: this.handleAbort_.bind(this, e),
                  progressFn: this.handleProgress_.bind(this),
                  trackInfoFn: this.handleTrackInfo_.bind(this),
                  timingInfoFn: this.handleTimingInfo_.bind(this),
                  videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, 'video', e.requestId),
                  audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, 'audio', e.requestId),
                  captionsFn: this.handleCaptions_.bind(this),
                  isEndOfTimeline: s,
                  endedTimelineFn: function () {
                    t.logger_('received endedtimeline callback')
                  },
                  id3Fn: this.handleId3_.bind(this),
                  dataFn: this.handleData_.bind(this),
                  doneFn: this.segmentRequestFinished_.bind(this),
                  onTransmuxerLog: function (i) {
                    var n = i.message,
                      r = i.level,
                      a = i.stream
                    t.logger_(Ks(e) + ' logged from transmuxer stream ' + a + ' as a ' + r + ': ' + n)
                  },
                }))
            }),
            (i.trimBackBuffer_ = function (e) {
              var t = (function (e, t, i) {
                var n = t - ns.BACK_BUFFER_LENGTH
                e.length && (n = Math.max(n, e.start(0)))
                var r = t - i
                return Math.min(r, n)
              })(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10)
              t > 0 && this.remove(0, t)
            }),
            (i.createSimplifiedSegmentObj_ = function (e) {
              var t = e.segment,
                i = e.part,
                n = {
                  resolvedUri: i ? i.resolvedUri : t.resolvedUri,
                  byterange: i ? i.byterange : t.byterange,
                  requestId: e.requestId,
                  transmuxer: e.transmuxer,
                  audioAppendStart: e.audioAppendStart,
                  gopsToAlignWith: e.gopsToAlignWith,
                  part: e.part,
                },
                r = e.playlist.segments[e.mediaIndex - 1]
              if (
                (r &&
                  r.timeline === t.timeline &&
                  (r.videoTimingInfo
                    ? (n.baseStartTime = r.videoTimingInfo.transmuxedDecodeEnd)
                    : r.audioTimingInfo && (n.baseStartTime = r.audioTimingInfo.transmuxedDecodeEnd)),
                t.key)
              ) {
                var a = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence])
                ;(n.key = this.segmentKey(t.key)), (n.key.iv = a)
              }
              return t.map && (n.map = this.initSegmentForMap(t.map)), n
            }),
            (i.saveTransferStats_ = function (e) {
              ;(this.mediaRequests += 1),
                e && ((this.mediaBytesTransferred += e.bytesReceived), (this.mediaTransferDuration += e.roundTripTime))
            }),
            (i.saveBandwidthRelatedStats_ = function (e, t) {
              ;(this.pendingSegment_.byteLength = t.bytesReceived),
                e < Gs
                  ? this.logger_(
                      "Ignoring segment's bandwidth because its duration of " +
                        e +
                        ' is less than the min to record 0.016666666666666666',
                    )
                  : ((this.bandwidth = t.bandwidth), (this.roundTrip = t.roundTripTime))
            }),
            (i.handleTimeout_ = function () {
              ;(this.mediaRequestsTimedout += 1),
                (this.bandwidth = 1),
                (this.roundTrip = NaN),
                this.trigger('bandwidthupdate')
            }),
            (i.segmentRequestFinished_ = function (e, t, i) {
              if (this.callQueue_.length) this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, i))
              else if (
                (this.saveTransferStats_(t.stats),
                this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId)
              ) {
                if (e) {
                  if (((this.pendingSegment_ = null), (this.state = 'READY'), e.code === ys)) return
                  return (
                    this.pause(),
                    e.code === vs
                      ? void this.handleTimeout_()
                      : ((this.mediaRequestsErrored += 1), this.error(e), void this.trigger('error'))
                  )
                }
                var n = this.pendingSegment_
                this.saveBandwidthRelatedStats_(n.duration, t.stats),
                  (n.endOfAllRequests = t.endOfAllRequests),
                  i.gopInfo &&
                    (this.gopBuffer_ = (function (e, t, i) {
                      if (!t.length) return e
                      if (i) return t.slice()
                      for (var n = t[0].pts, r = 0; r < e.length && !(e[r].pts >= n); r++);
                      return e.slice(0, r).concat(t)
                    })(this.gopBuffer_, i.gopInfo, this.safeAppend_)),
                  (this.state = 'APPENDING'),
                  this.trigger('appending'),
                  this.waitForAppendsToComplete_(n)
              }
            }),
            (i.setTimeMapping_ = function (e) {
              var t = this.syncController_.mappingForTimeline(e)
              null !== t && (this.timeMapping_ = t)
            }),
            (i.updateMediaSecondsLoaded_ = function (e) {
              'number' === typeof e.start && 'number' === typeof e.end
                ? (this.mediaSecondsLoaded += e.end - e.start)
                : (this.mediaSecondsLoaded += e.duration)
            }),
            (i.shouldUpdateTransmuxerTimestampOffset_ = function (e) {
              return (
                null !== e &&
                (('main' === this.loaderType_ && e !== this.sourceUpdater_.videoTimestampOffset()) ||
                  (!this.audioDisabled_ && e !== this.sourceUpdater_.audioTimestampOffset()))
              )
            }),
            (i.trueSegmentStart_ = function (e) {
              var t = e.currentStart,
                i = e.playlist,
                n = e.mediaIndex,
                r = e.firstVideoFrameTimeForData,
                a = e.currentVideoTimestampOffset,
                s = e.useVideoTimingInfo,
                o = e.videoTimingInfo,
                l = e.audioTimingInfo
              if ('undefined' !== typeof t) return t
              if (!s) return l.start
              var u = i.segments[n - 1]
              return 0 !== n && u && 'undefined' !== typeof u.start && u.end === r + a ? o.start : r
            }),
            (i.waitForAppendsToComplete_ = function (e) {
              var t = this.getCurrentMediaInfo_(e)
              if (!t)
                return (
                  this.error({
                    message: 'No starting media returned, likely due to an unsupported media format.',
                    blacklistDuration: 1 / 0,
                  }),
                  void this.trigger('error')
                )
              var i = t.hasAudio,
                n = t.hasVideo,
                r = t.isMuxed,
                a = 'main' === this.loaderType_ && n,
                s = !this.audioDisabled_ && i && !r
              if (((e.waitingOnAppends = 0), !e.hasAppendedData_))
                return (
                  e.timingInfo || 'number' !== typeof e.timestampOffset || (this.isPendingTimestampOffset_ = !0),
                  (e.timingInfo = { start: 0 }),
                  e.waitingOnAppends++,
                  this.isPendingTimestampOffset_ ||
                    (this.updateSourceBufferTimestampOffset_(e), this.processMetadataQueue_()),
                  void this.checkAppendsDone_(e)
                )
              a && e.waitingOnAppends++,
                s && e.waitingOnAppends++,
                a && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)),
                s && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e))
            }),
            (i.checkAppendsDone_ = function (e) {
              this.checkForAbort_(e.requestId) ||
                (e.waitingOnAppends--, 0 === e.waitingOnAppends && this.handleAppendsDone_())
            }),
            (i.checkForIllegalMediaSwitch = function (e) {
              var t = (function (e, t, i) {
                return 'main' === e && t && i
                  ? i.hasAudio || i.hasVideo
                    ? t.hasVideo && !i.hasVideo
                      ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest."
                      : !t.hasVideo && i.hasVideo
                      ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest."
                      : null
                    : 'Neither audio nor video found in segment.'
                  : null
              })(this.loaderType_, this.getCurrentMediaInfo_(), e)
              return !!t && (this.error({ message: t, blacklistDuration: 1 / 0 }), this.trigger('error'), !0)
            }),
            (i.updateSourceBufferTimestampOffset_ = function (e) {
              if (
                null !== e.timestampOffset &&
                'number' === typeof e.timingInfo.start &&
                !e.changedTimestampOffset &&
                'main' === this.loaderType_
              ) {
                var t = !1
                ;(e.timestampOffset -= e.timingInfo.start),
                  (e.changedTimestampOffset = !0),
                  e.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() &&
                    (this.sourceUpdater_.videoTimestampOffset(e.timestampOffset), (t = !0)),
                  e.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() &&
                    (this.sourceUpdater_.audioTimestampOffset(e.timestampOffset), (t = !0)),
                  t && this.trigger('timestampoffset')
              }
            }),
            (i.updateTimingInfoEnd_ = function (e) {
              e.timingInfo = e.timingInfo || {}
              var t = this.getMediaInfo_(),
                i =
                  'main' === this.loaderType_ && t && t.hasVideo && e.videoTimingInfo
                    ? e.videoTimingInfo
                    : e.audioTimingInfo
              i && (e.timingInfo.end = 'number' === typeof i.end ? i.end : i.start + e.duration)
            }),
            (i.handleAppendsDone_ = function () {
              if ((this.pendingSegment_ && this.trigger('appendsdone'), !this.pendingSegment_))
                return (this.state = 'READY'), void (this.paused() || this.monitorBuffer_())
              var e = this.pendingSegment_
              this.updateTimingInfoEnd_(e),
                this.shouldSaveSegmentTimingInfo_ &&
                  this.syncController_.saveSegmentTimingInfo({
                    segmentInfo: e,
                    shouldSaveTimelineMapping: 'main' === this.loaderType_,
                  })
              var t = Ys(e, this.sourceType_)
              if (
                (t && ('warn' === t.severity ? Wr.log.warn(t.message) : this.logger_(t.message)),
                this.recordThroughput_(e),
                (this.pendingSegment_ = null),
                (this.state = 'READY'),
                !e.isSyncRequest || (this.trigger('syncinfoupdate'), e.hasAppendedData_))
              ) {
                this.logger_('Appended ' + Ks(e)),
                  this.addSegmentMetadataCue_(e),
                  (this.fetchAtBuffer_ = !0),
                  this.currentTimeline_ !== e.timeline &&
                    (this.timelineChangeController_.lastTimelineChange({
                      type: this.loaderType_,
                      from: this.currentTimeline_,
                      to: e.timeline,
                    }),
                    'main' !== this.loaderType_ ||
                      this.audioDisabled_ ||
                      this.timelineChangeController_.lastTimelineChange({
                        type: 'audio',
                        from: this.currentTimeline_,
                        to: e.timeline,
                      })),
                  (this.currentTimeline_ = e.timeline),
                  this.trigger('syncinfoupdate')
                var i = e.segment
                if (i.end && this.currentTime_() - i.end > 3 * e.playlist.targetDuration) this.resetEverything()
                else
                  null !== this.mediaIndex && this.trigger('bandwidthupdate'),
                    this.trigger('progress'),
                    (this.mediaIndex = e.mediaIndex),
                    (this.partIndex = e.partIndex),
                    this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex) && this.endOfStream(),
                    this.trigger('appended'),
                    e.hasAppendedData_ && this.mediaAppends++,
                    this.paused() || this.monitorBuffer_()
              } else this.logger_('Throwing away un-appended sync request ' + Ks(e))
            }),
            (i.recordThroughput_ = function (e) {
              if (e.duration < Gs)
                this.logger_(
                  "Ignoring segment's throughput because its duration of " +
                    e.duration +
                    ' is less than the min to record 0.016666666666666666',
                )
              else {
                var t = this.throughput.rate,
                  i = Date.now() - e.endOfAllRequests + 1,
                  n = Math.floor((e.byteLength / i) * 8 * 1e3)
                this.throughput.rate += (n - t) / ++this.throughput.count
              }
            }),
            (i.addSegmentMetadataCue_ = function (e) {
              if (this.segmentMetadataTrack_) {
                var t = e.segment,
                  i = t.start,
                  n = t.end
                if (zs(i) && zs(n)) {
                  Ws(i, n, this.segmentMetadataTrack_)
                  var r = a().WebKitDataCue || a().VTTCue,
                    s = {
                      custom: t.custom,
                      dateTimeObject: t.dateTimeObject,
                      dateTimeString: t.dateTimeString,
                      bandwidth: e.playlist.attributes.BANDWIDTH,
                      resolution: e.playlist.attributes.RESOLUTION,
                      codecs: e.playlist.attributes.CODECS,
                      byteLength: e.byteLength,
                      uri: e.uri,
                      timeline: e.timeline,
                      playlist: e.playlist.id,
                      start: i,
                      end: n,
                    },
                    o = new r(i, n, JSON.stringify(s))
                  ;(o.value = s), this.segmentMetadataTrack_.addCue(o)
                }
              }
            }),
            t
          )
        })(Wr.EventTarget)
      function Js() {}
      var eo,
        to = function (e) {
          return 'string' !== typeof e
            ? e
            : e.replace(/./, function (e) {
                return e.toUpperCase()
              })
        },
        io = ['video', 'audio'],
        no = function (e, t) {
          var i = t[e + 'Buffer']
          return (i && i.updating) || t.queuePending[e]
        },
        ro = function e(t, i) {
          if (0 !== i.queue.length) {
            var n = 0,
              r = i.queue[n]
            if ('mediaSource' !== r.type) {
              if ('mediaSource' !== t && i.ready() && 'closed' !== i.mediaSource.readyState && !no(t, i)) {
                if (r.type !== t) {
                  if (
                    null ===
                    (n = (function (e, t) {
                      for (var i = 0; i < t.length; i++) {
                        var n = t[i]
                        if ('mediaSource' === n.type) return null
                        if (n.type === e) return i
                      }
                      return null
                    })(t, i.queue))
                  )
                    return
                  r = i.queue[n]
                }
                return (
                  i.queue.splice(n, 1),
                  (i.queuePending[t] = r),
                  r.action(t, i),
                  r.doneFn ? void 0 : ((i.queuePending[t] = null), void e(t, i))
                )
              }
            } else
              i.updating() ||
                'closed' === i.mediaSource.readyState ||
                (i.queue.shift(), r.action(i), r.doneFn && r.doneFn(), e('audio', i), e('video', i))
          }
        },
        ao = function (e, t) {
          var i = t[e + 'Buffer'],
            n = to(e)
          i &&
            (i.removeEventListener('updateend', t['on' + n + 'UpdateEnd_']),
            i.removeEventListener('error', t['on' + n + 'Error_']),
            (t.codecs[e] = null),
            (t[e + 'Buffer'] = null))
        },
        so = function (e, t) {
          return e && t && -1 !== Array.prototype.indexOf.call(e.sourceBuffers, t)
        },
        oo = function (e, t, i) {
          return function (n, r) {
            var a = r[n + 'Buffer']
            if (so(r.mediaSource, a)) {
              r.logger_('Appending segment ' + t.mediaIndex + "'s " + e.length + ' bytes to ' + n + 'Buffer')
              try {
                a.appendBuffer(e)
              } catch (s) {
                r.logger_(
                  'Error with code ' +
                    s.code +
                    ' ' +
                    (22 === s.code ? '(QUOTA_EXCEEDED_ERR) ' : '') +
                    'when appending segment ' +
                    t.mediaIndex +
                    ' to ' +
                    n +
                    'Buffer',
                ),
                  (r.queuePending[n] = null),
                  i(s)
              }
            }
          }
        },
        lo = function (e, t) {
          return function (i, n) {
            var r = n[i + 'Buffer']
            if (so(n.mediaSource, r)) {
              n.logger_('Removing ' + e + ' to ' + t + ' from ' + i + 'Buffer')
              try {
                r.remove(e, t)
              } catch (a) {
                n.logger_('Remove ' + e + ' to ' + t + ' from ' + i + 'Buffer failed')
              }
            }
          }
        },
        uo = function (e) {
          return function (t, i) {
            var n = i[t + 'Buffer']
            so(i.mediaSource, n) && (i.logger_('Setting ' + t + 'timestampOffset to ' + e), (n.timestampOffset = e))
          }
        },
        co = function (e) {
          return function (t, i) {
            e()
          }
        },
        ho = function (e) {
          return function (t) {
            if ('open' === t.mediaSource.readyState) {
              t.logger_('Calling mediaSource endOfStream(' + (e || '') + ')')
              try {
                t.mediaSource.endOfStream(e)
              } catch (i) {
                Wr.log.warn('Failed to call media source endOfStream', i)
              }
            }
          }
        },
        po = function (e) {
          return function (t) {
            t.logger_('Setting mediaSource duration to ' + e)
            try {
              t.mediaSource.duration = e
            } catch (i) {
              Wr.log.warn('Failed to set media source duration', i)
            }
          }
        },
        fo = function () {
          return function (e, t) {
            if ('open' === t.mediaSource.readyState) {
              var i = t[e + 'Buffer']
              if (so(t.mediaSource, i)) {
                t.logger_('calling abort on ' + e + 'Buffer')
                try {
                  i.abort()
                } catch (n) {
                  Wr.log.warn('Failed to abort on ' + e + 'Buffer', n)
                }
              }
            }
          }
        },
        mo = function (e, t) {
          return function (i) {
            var n = to(e),
              r = (0, k._5)(t)
            i.logger_('Adding ' + e + 'Buffer with codec ' + t + ' to mediaSource')
            var a = i.mediaSource.addSourceBuffer(r)
            a.addEventListener('updateend', i['on' + n + 'UpdateEnd_']),
              a.addEventListener('error', i['on' + n + 'Error_']),
              (i.codecs[e] = t),
              (i[e + 'Buffer'] = a)
          }
        },
        go = function (e) {
          return function (t) {
            var i = t[e + 'Buffer']
            if ((ao(e, t), so(t.mediaSource, i))) {
              t.logger_('Removing ' + e + 'Buffer with codec ' + t.codecs[e] + ' from mediaSource')
              try {
                t.mediaSource.removeSourceBuffer(i)
              } catch (n) {
                Wr.log.warn('Failed to removeSourceBuffer ' + e + 'Buffer', n)
              }
            }
          }
        },
        _o = function (e) {
          return function (t, i) {
            var n = i[t + 'Buffer'],
              r = (0, k._5)(e)
            so(i.mediaSource, n) &&
              i.codecs[t] !== e &&
              (i.logger_('changing ' + t + 'Buffer codec from ' + i.codecs[t] + ' to ' + e),
              n.changeType(r),
              (i.codecs[t] = e))
          }
        },
        vo = function (e) {
          var t = e.type,
            i = e.sourceUpdater,
            n = e.action,
            r = e.doneFn,
            a = e.name
          i.queue.push({ type: t, action: n, doneFn: r, name: a }), ro(t, i)
        },
        yo = function (e, t) {
          return function (i) {
            if (t.queuePending[e]) {
              var n = t.queuePending[e].doneFn
              ;(t.queuePending[e] = null), n && n(t[e + 'Error_'])
            }
            ro(e, t)
          }
        },
        To = (function (e) {
          function t(t) {
            var i
            return (
              ((i = e.call(this) || this).mediaSource = t),
              (i.sourceopenListener_ = function () {
                return ro('mediaSource', (0, u.Z)(i))
              }),
              i.mediaSource.addEventListener('sourceopen', i.sourceopenListener_),
              (i.logger_ = Qr('SourceUpdater')),
              (i.audioTimestampOffset_ = 0),
              (i.videoTimestampOffset_ = 0),
              (i.queue = []),
              (i.queuePending = { audio: null, video: null }),
              (i.delayedAudioAppendQueue_ = []),
              (i.videoAppendQueued_ = !1),
              (i.codecs = {}),
              (i.onVideoUpdateEnd_ = yo('video', (0, u.Z)(i))),
              (i.onAudioUpdateEnd_ = yo('audio', (0, u.Z)(i))),
              (i.onVideoError_ = function (e) {
                i.videoError_ = e
              }),
              (i.onAudioError_ = function (e) {
                i.audioError_ = e
              }),
              (i.createdSourceBuffers_ = !1),
              (i.initializedEme_ = !1),
              (i.triggeredReady_ = !1),
              i
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.initializedEme = function () {
              ;(this.initializedEme_ = !0), this.triggerReady()
            }),
            (i.hasCreatedSourceBuffers = function () {
              return this.createdSourceBuffers_
            }),
            (i.hasInitializedAnyEme = function () {
              return this.initializedEme_
            }),
            (i.ready = function () {
              return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme()
            }),
            (i.createSourceBuffers = function (e) {
              this.hasCreatedSourceBuffers() ||
                (this.addOrChangeSourceBuffers(e),
                (this.createdSourceBuffers_ = !0),
                this.trigger('createdsourcebuffers'),
                this.triggerReady())
            }),
            (i.triggerReady = function () {
              this.ready() && !this.triggeredReady_ && ((this.triggeredReady_ = !0), this.trigger('ready'))
            }),
            (i.addSourceBuffer = function (e, t) {
              vo({ type: 'mediaSource', sourceUpdater: this, action: mo(e, t), name: 'addSourceBuffer' })
            }),
            (i.abort = function (e) {
              vo({ type: e, sourceUpdater: this, action: fo(e), name: 'abort' })
            }),
            (i.removeSourceBuffer = function (e) {
              this.canRemoveSourceBuffer()
                ? vo({ type: 'mediaSource', sourceUpdater: this, action: go(e), name: 'removeSourceBuffer' })
                : Wr.log.error('removeSourceBuffer is not supported!')
            }),
            (i.canRemoveSourceBuffer = function () {
              return (
                !Wr.browser.IE_VERSION &&
                !Wr.browser.IS_FIREFOX &&
                a().MediaSource &&
                a().MediaSource.prototype &&
                'function' === typeof a().MediaSource.prototype.removeSourceBuffer
              )
            }),
            (t.canChangeType = function () {
              return (
                a().SourceBuffer &&
                a().SourceBuffer.prototype &&
                'function' === typeof a().SourceBuffer.prototype.changeType
              )
            }),
            (i.canChangeType = function () {
              return this.constructor.canChangeType()
            }),
            (i.changeType = function (e, t) {
              this.canChangeType()
                ? vo({ type: e, sourceUpdater: this, action: _o(t), name: 'changeType' })
                : Wr.log.error('changeType is not supported!')
            }),
            (i.addOrChangeSourceBuffers = function (e) {
              var t = this
              if (!e || 'object' !== typeof e || 0 === Object.keys(e).length)
                throw new Error('Cannot addOrChangeSourceBuffers to undefined codecs')
              Object.keys(e).forEach(function (i) {
                var n = e[i]
                if (!t.hasCreatedSourceBuffers()) return t.addSourceBuffer(i, n)
                t.canChangeType() && t.changeType(i, n)
              })
            }),
            (i.appendBuffer = function (e, t) {
              var i = this,
                n = e.segmentInfo,
                r = e.type,
                a = e.bytes
              if (((this.processedAppend_ = !0), 'audio' === r && this.videoBuffer && !this.videoAppendQueued_))
                return (
                  this.delayedAudioAppendQueue_.push([e, t]),
                  void this.logger_('delayed audio append of ' + a.length + ' until video append')
                )
              if (
                (vo({
                  type: r,
                  sourceUpdater: this,
                  action: oo(a, n || { mediaIndex: -1 }, t),
                  doneFn: t,
                  name: 'appendBuffer',
                }),
                'video' === r)
              ) {
                if (((this.videoAppendQueued_ = !0), !this.delayedAudioAppendQueue_.length)) return
                var s = this.delayedAudioAppendQueue_.slice()
                this.logger_('queuing delayed audio ' + s.length + ' appendBuffers'),
                  (this.delayedAudioAppendQueue_.length = 0),
                  s.forEach(function (e) {
                    i.appendBuffer.apply(i, e)
                  })
              }
            }),
            (i.audioBuffered = function () {
              return so(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered
                ? this.audioBuffer.buffered
                : Wr.createTimeRange()
            }),
            (i.videoBuffered = function () {
              return so(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered
                ? this.videoBuffer.buffered
                : Wr.createTimeRange()
            }),
            (i.buffered = function () {
              var e = so(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null,
                t = so(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null
              return t && !e
                ? this.audioBuffered()
                : e && !t
                ? this.videoBuffered()
                : (function (e, t) {
                    var i = null,
                      n = null,
                      r = 0,
                      a = [],
                      s = []
                    if (!e || !e.length || !t || !t.length) return Wr.createTimeRange()
                    for (var o = e.length; o--; )
                      a.push({ time: e.start(o), type: 'start' }), a.push({ time: e.end(o), type: 'end' })
                    for (o = t.length; o--; )
                      a.push({ time: t.start(o), type: 'start' }), a.push({ time: t.end(o), type: 'end' })
                    for (
                      a.sort(function (e, t) {
                        return e.time - t.time
                      }),
                        o = 0;
                      o < a.length;
                      o++
                    )
                      'start' === a[o].type
                        ? 2 === ++r && (i = a[o].time)
                        : 'end' === a[o].type && 1 === --r && (n = a[o].time),
                        null !== i && null !== n && (s.push([i, n]), (i = null), (n = null))
                    return Wr.createTimeRanges(s)
                  })(this.audioBuffered(), this.videoBuffered())
            }),
            (i.setDuration = function (e, t) {
              void 0 === t && (t = Js),
                vo({ type: 'mediaSource', sourceUpdater: this, action: po(e), name: 'duration', doneFn: t })
            }),
            (i.endOfStream = function (e, t) {
              void 0 === e && (e = null),
                void 0 === t && (t = Js),
                'string' !== typeof e && (e = void 0),
                vo({ type: 'mediaSource', sourceUpdater: this, action: ho(e), name: 'endOfStream', doneFn: t })
            }),
            (i.removeAudio = function (e, t, i) {
              void 0 === i && (i = Js),
                this.audioBuffered().length && 0 !== this.audioBuffered().end(0)
                  ? vo({ type: 'audio', sourceUpdater: this, action: lo(e, t), doneFn: i, name: 'remove' })
                  : i()
            }),
            (i.removeVideo = function (e, t, i) {
              void 0 === i && (i = Js),
                this.videoBuffered().length && 0 !== this.videoBuffered().end(0)
                  ? vo({ type: 'video', sourceUpdater: this, action: lo(e, t), doneFn: i, name: 'remove' })
                  : i()
            }),
            (i.updating = function () {
              return !(!no('audio', this) && !no('video', this))
            }),
            (i.audioTimestampOffset = function (e) {
              return (
                'undefined' !== typeof e &&
                  this.audioBuffer &&
                  this.audioTimestampOffset_ !== e &&
                  (vo({ type: 'audio', sourceUpdater: this, action: uo(e), name: 'timestampOffset' }),
                  (this.audioTimestampOffset_ = e)),
                this.audioTimestampOffset_
              )
            }),
            (i.videoTimestampOffset = function (e) {
              return (
                'undefined' !== typeof e &&
                  this.videoBuffer &&
                  this.videoTimestampOffset !== e &&
                  (vo({ type: 'video', sourceUpdater: this, action: uo(e), name: 'timestampOffset' }),
                  (this.videoTimestampOffset_ = e)),
                this.videoTimestampOffset_
              )
            }),
            (i.audioQueueCallback = function (e) {
              this.audioBuffer && vo({ type: 'audio', sourceUpdater: this, action: co(e), name: 'callback' })
            }),
            (i.videoQueueCallback = function (e) {
              this.videoBuffer && vo({ type: 'video', sourceUpdater: this, action: co(e), name: 'callback' })
            }),
            (i.dispose = function () {
              var e = this
              this.trigger('dispose'),
                io.forEach(function (t) {
                  e.abort(t),
                    e.canRemoveSourceBuffer()
                      ? e.removeSourceBuffer(t)
                      : e[t + 'QueueCallback'](function () {
                          return ao(t, e)
                        })
                }),
                (this.videoAppendQueued_ = !1),
                (this.delayedAudioAppendQueue_.length = 0),
                this.sourceopenListener_ &&
                  this.mediaSource.removeEventListener('sourceopen', this.sourceopenListener_),
                this.off()
            }),
            t
          )
        })(Wr.EventTarget),
        bo = function (e) {
          return decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
        },
        So = new Uint8Array(
          '\n\n'.split('').map(function (e) {
            return e.charCodeAt(0)
          }),
        ),
        ko = (function (e) {
          function t(t, i) {
            var n
            return (
              void 0 === i && (i = {}),
              ((n = e.call(this, t, i) || this).mediaSource_ = null),
              (n.subtitlesTrack_ = null),
              (n.loaderType_ = 'subtitle'),
              (n.featuresNativeTextTracks_ = t.featuresNativeTextTracks),
              (n.shouldSaveSegmentTimingInfo_ = !1),
              n
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.createTransmuxer_ = function () {
              return null
            }),
            (i.buffered_ = function () {
              if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues || !this.subtitlesTrack_.cues.length)
                return Wr.createTimeRanges()
              var e = this.subtitlesTrack_.cues,
                t = e[0].startTime,
                i = e[e.length - 1].startTime
              return Wr.createTimeRanges([[t, i]])
            }),
            (i.initSegmentForMap = function (e, t) {
              if ((void 0 === t && (t = !1), !e)) return null
              var i = za(e),
                n = this.initSegments_[i]
              if (t && !n && e.bytes) {
                var r = So.byteLength + e.bytes.byteLength,
                  a = new Uint8Array(r)
                a.set(e.bytes),
                  a.set(So, e.bytes.byteLength),
                  (this.initSegments_[i] = n = { resolvedUri: e.resolvedUri, byterange: e.byterange, bytes: a })
              }
              return n || e
            }),
            (i.couldBeginLoading_ = function () {
              return this.playlist_ && this.subtitlesTrack_ && !this.paused()
            }),
            (i.init_ = function () {
              return (this.state = 'READY'), this.resetEverything(), this.monitorBuffer_()
            }),
            (i.track = function (e) {
              return (
                'undefined' === typeof e ||
                  ((this.subtitlesTrack_ = e), 'INIT' === this.state && this.couldBeginLoading_() && this.init_()),
                this.subtitlesTrack_
              )
            }),
            (i.remove = function (e, t) {
              Ws(e, t, this.subtitlesTrack_)
            }),
            (i.fillBuffer_ = function () {
              var e = this,
                t = this.chooseNextRequest_()
              if (t) {
                if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
                  return (
                    this.syncController_.one('timestampoffset', function () {
                      ;(e.state = 'READY'), e.paused() || e.monitorBuffer_()
                    }),
                    void (this.state = 'WAITING_ON_TIMELINE')
                  )
                }
                this.loadSegment_(t)
              }
            }),
            (i.timestampOffsetForSegment_ = function () {
              return null
            }),
            (i.chooseNextRequest_ = function () {
              return this.skipEmptySegments_(e.prototype.chooseNextRequest_.call(this))
            }),
            (i.skipEmptySegments_ = function (e) {
              for (; e && e.segment.empty; ) {
                if (e.mediaIndex + 1 >= e.playlist.segments.length) {
                  e = null
                  break
                }
                e = this.generateSegmentInfo_({
                  playlist: e.playlist,
                  mediaIndex: e.mediaIndex + 1,
                  startOfSegment: e.startOfSegment + e.duration,
                  isSyncRequest: e.isSyncRequest,
                })
              }
              return e
            }),
            (i.stopForError = function (e) {
              this.error(e), (this.state = 'READY'), this.pause(), this.trigger('error')
            }),
            (i.segmentRequestFinished_ = function (e, t, i) {
              var n = this
              if (this.subtitlesTrack_) {
                if ((this.saveTransferStats_(t.stats), !this.pendingSegment_))
                  return (this.state = 'READY'), void (this.mediaRequestsAborted += 1)
                if (e)
                  return (
                    e.code === vs && this.handleTimeout_(),
                    e.code === ys ? (this.mediaRequestsAborted += 1) : (this.mediaRequestsErrored += 1),
                    void this.stopForError(e)
                  )
                var r = this.pendingSegment_
                this.saveBandwidthRelatedStats_(r.duration, t.stats),
                  (this.state = 'APPENDING'),
                  this.trigger('appending')
                var s = r.segment
                if (
                  (s.map && (s.map.bytes = t.map.bytes),
                  (r.bytes = t.bytes),
                  'function' !== typeof a().WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_)
                ) {
                  var o,
                    l = function () {
                      n.subtitlesTrack_.tech_.off('vttjsloaded', o), n.stopForError({ message: 'Error loading vtt.js' })
                    }
                  return (
                    (o = function () {
                      n.subtitlesTrack_.tech_.off('vttjserror', l), n.segmentRequestFinished_(e, t, i)
                    }),
                    (this.state = 'WAITING_ON_VTTJS'),
                    this.subtitlesTrack_.tech_.one('vttjsloaded', o),
                    void this.subtitlesTrack_.tech_.one('vttjserror', l)
                  )
                }
                s.requested = !0
                try {
                  this.parseVTTCues_(r)
                } catch (u) {
                  return void this.stopForError({ message: u.message })
                }
                if (
                  (this.updateTimeMapping_(r, this.syncController_.timelines[r.timeline], this.playlist_),
                  r.cues.length
                    ? (r.timingInfo = { start: r.cues[0].startTime, end: r.cues[r.cues.length - 1].endTime })
                    : (r.timingInfo = { start: r.startOfSegment, end: r.startOfSegment + r.duration }),
                  r.isSyncRequest)
                )
                  return this.trigger('syncinfoupdate'), (this.pendingSegment_ = null), void (this.state = 'READY')
                ;(r.byteLength = r.bytes.byteLength),
                  (this.mediaSecondsLoaded += s.duration),
                  r.cues.forEach(function (e) {
                    n.subtitlesTrack_.addCue(
                      n.featuresNativeTextTracks_ ? new (a().VTTCue)(e.startTime, e.endTime, e.text) : e,
                    )
                  }),
                  (function (e) {
                    var t = e.cues
                    if (t)
                      for (var i = 0; i < t.length; i++) {
                        for (var n = [], r = 0, a = 0; a < t.length; a++)
                          t[i].startTime === t[a].startTime &&
                            t[i].endTime === t[a].endTime &&
                            t[i].text === t[a].text &&
                            ++r > 1 &&
                            n.push(t[a])
                        n.length &&
                          n.forEach(function (t) {
                            return e.removeCue(t)
                          })
                      }
                  })(this.subtitlesTrack_),
                  this.handleAppendsDone_()
              } else this.state = 'READY'
            }),
            (i.handleData_ = function () {}),
            (i.updateTimingInfoEnd_ = function () {}),
            (i.parseVTTCues_ = function (e) {
              var t,
                i = !1
              'function' === typeof a().TextDecoder
                ? (t = new (a().TextDecoder)('utf8'))
                : ((t = a().WebVTT.StringDecoder()), (i = !0))
              var n = new (a().WebVTT.Parser)(a(), a().vttjs, t)
              if (
                ((e.cues = []),
                (e.timestampmap = { MPEGTS: 0, LOCAL: 0 }),
                (n.oncue = e.cues.push.bind(e.cues)),
                (n.ontimestampmap = function (t) {
                  e.timestampmap = t
                }),
                (n.onparsingerror = function (e) {
                  Wr.log.warn('Error encountered when parsing cues: ' + e.message)
                }),
                e.segment.map)
              ) {
                var r = e.segment.map.bytes
                i && (r = bo(r)), n.parse(r)
              }
              var s = e.bytes
              i && (s = bo(s)), n.parse(s), n.flush()
            }),
            (i.updateTimeMapping_ = function (e, t, i) {
              var n = e.segment
              if (t)
                if (e.cues.length) {
                  var r = e.timestampmap,
                    a = r.MPEGTS / L.ONE_SECOND_IN_TS - r.LOCAL + t.mapping
                  if (
                    (e.cues.forEach(function (e) {
                      ;(e.startTime += a), (e.endTime += a)
                    }),
                    !i.syncInfo)
                  ) {
                    var s = e.cues[0].startTime,
                      o = e.cues[e.cues.length - 1].startTime
                    i.syncInfo = { mediaSequence: i.mediaSequence + e.mediaIndex, time: Math.min(s, o - n.duration) }
                  }
                } else n.empty = !0
            }),
            t
          )
        })($s),
        Co = function (e, t) {
          for (var i = e.cues, n = 0; n < i.length; n++) {
            var r = i[n]
            if (t >= r.adStartTime && t <= r.adEndTime) return r
          }
          return null
        },
        Eo = [
          {
            name: 'VOD',
            run: function (e, t, i, n, r) {
              if (i !== 1 / 0) {
                return { time: 0, segmentIndex: 0, partIndex: null }
              }
              return null
            },
          },
          {
            name: 'ProgramDateTime',
            run: function (e, t, i, n, r) {
              if (!Object.keys(e.timelineToDatetimeMappings).length) return null
              var a = null,
                s = null,
                o = aa(t)
              r = r || 0
              for (var l = 0; l < o.length; l++) {
                var u = o[t.endList || 0 === r ? l : o.length - (l + 1)],
                  d = u.segment,
                  c = e.timelineToDatetimeMappings[d.timeline]
                if (c && d.dateTimeObject) {
                  var h = d.dateTimeObject.getTime() / 1e3 + c
                  if (d.parts && 'number' === typeof u.partIndex)
                    for (var p = 0; p < u.partIndex; p++) h += d.parts[p].duration
                  var f = Math.abs(r - h)
                  if (null !== s && (0 === f || s < f)) break
                  ;(s = f), (a = { time: h, segmentIndex: u.segmentIndex, partIndex: u.partIndex })
                }
              }
              return a
            },
          },
          {
            name: 'Segment',
            run: function (e, t, i, n, r) {
              var a = null,
                s = null
              r = r || 0
              for (var o = aa(t), l = 0; l < o.length; l++) {
                var u = o[t.endList || 0 === r ? l : o.length - (l + 1)],
                  d = u.segment,
                  c = (u.part && u.part.start) || (d && d.start)
                if (d.timeline === n && 'undefined' !== typeof c) {
                  var h = Math.abs(r - c)
                  if (null !== s && s < h) break
                  ;(!a || null === s || s >= h) &&
                    ((s = h), (a = { time: c, segmentIndex: u.segmentIndex, partIndex: u.partIndex }))
                }
              }
              return a
            },
          },
          {
            name: 'Discontinuity',
            run: function (e, t, i, n, r) {
              var a = null
              if (((r = r || 0), t.discontinuityStarts && t.discontinuityStarts.length))
                for (var s = null, o = 0; o < t.discontinuityStarts.length; o++) {
                  var l = t.discontinuityStarts[o],
                    u = t.discontinuitySequence + o + 1,
                    d = e.discontinuities[u]
                  if (d) {
                    var c = Math.abs(r - d.time)
                    if (null !== s && s < c) break
                    ;(!a || null === s || s >= c) && ((s = c), (a = { time: d.time, segmentIndex: l, partIndex: null }))
                  }
                }
              return a
            },
          },
          {
            name: 'Playlist',
            run: function (e, t, i, n, r) {
              return t.syncInfo
                ? { time: t.syncInfo.time, segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence, partIndex: null }
                : null
            },
          },
        ],
        wo = (function (e) {
          function t(t) {
            var i
            return (
              ((i = e.call(this) || this).timelines = []),
              (i.discontinuities = []),
              (i.timelineToDatetimeMappings = {}),
              (i.logger_ = Qr('SyncController')),
              i
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.getSyncPoint = function (e, t, i, n) {
              var r = this.runStrategies_(e, t, i, n)
              return r.length ? this.selectSyncPoint_(r, { key: 'time', value: n }) : null
            }),
            (i.getExpiredTime = function (e, t) {
              if (!e || !e.segments) return null
              var i = this.runStrategies_(e, t, e.discontinuitySequence, 0)
              if (!i.length) return null
              var n = this.selectSyncPoint_(i, { key: 'segmentIndex', value: 0 })
              return (
                n.segmentIndex > 0 && (n.time *= -1),
                Math.abs(
                  n.time +
                    ca({
                      defaultDuration: e.targetDuration,
                      durationList: e.segments,
                      startIndex: n.segmentIndex,
                      endIndex: 0,
                    }),
                )
              )
            }),
            (i.runStrategies_ = function (e, t, i, n) {
              for (var r = [], a = 0; a < Eo.length; a++) {
                var s = Eo[a],
                  o = s.run(this, e, t, i, n)
                o && ((o.strategy = s.name), r.push({ strategy: s.name, syncPoint: o }))
              }
              return r
            }),
            (i.selectSyncPoint_ = function (e, t) {
              for (
                var i = e[0].syncPoint, n = Math.abs(e[0].syncPoint[t.key] - t.value), r = e[0].strategy, a = 1;
                a < e.length;
                a++
              ) {
                var s = Math.abs(e[a].syncPoint[t.key] - t.value)
                s < n && ((n = s), (i = e[a].syncPoint), (r = e[a].strategy))
              }
              return (
                this.logger_(
                  'syncPoint for [' +
                    t.key +
                    ': ' +
                    t.value +
                    '] chosen with strategy [' +
                    r +
                    ']: [time:' +
                    i.time +
                    ', segmentIndex:' +
                    i.segmentIndex +
                    ('number' === typeof i.partIndex ? ',partIndex:' + i.partIndex : '') +
                    ']',
                ),
                i
              )
            }),
            (i.saveExpiredSegmentInfo = function (e, t) {
              for (var i = t.mediaSequence - e.mediaSequence - 1; i >= 0; i--) {
                var n = e.segments[i]
                if (n && 'undefined' !== typeof n.start) {
                  ;(t.syncInfo = { mediaSequence: e.mediaSequence + i, time: n.start }),
                    this.logger_(
                      'playlist refresh sync: [time:' +
                        t.syncInfo.time +
                        ', mediaSequence: ' +
                        t.syncInfo.mediaSequence +
                        ']',
                    ),
                    this.trigger('syncinfoupdate')
                  break
                }
              }
            }),
            (i.setDateTimeMappingForStart = function (e) {
              if (
                ((this.timelineToDatetimeMappings = {}),
                e.segments && e.segments.length && e.segments[0].dateTimeObject)
              ) {
                var t = e.segments[0],
                  i = t.dateTimeObject.getTime() / 1e3
                this.timelineToDatetimeMappings[t.timeline] = -i
              }
            }),
            (i.saveSegmentTimingInfo = function (e) {
              var t = e.segmentInfo,
                i = e.shouldSaveTimelineMapping,
                n = this.calculateSegmentTimeMapping_(t, t.timingInfo, i),
                r = t.segment
              n &&
                (this.saveDiscontinuitySyncInfo_(t),
                t.playlist.syncInfo ||
                  (t.playlist.syncInfo = { mediaSequence: t.playlist.mediaSequence + t.mediaIndex, time: r.start }))
              var a = r.dateTimeObject
              r.discontinuity && i && a && (this.timelineToDatetimeMappings[r.timeline] = -a.getTime() / 1e3)
            }),
            (i.timestampOffsetForTimeline = function (e) {
              return 'undefined' === typeof this.timelines[e] ? null : this.timelines[e].time
            }),
            (i.mappingForTimeline = function (e) {
              return 'undefined' === typeof this.timelines[e] ? null : this.timelines[e].mapping
            }),
            (i.calculateSegmentTimeMapping_ = function (e, t, i) {
              var n,
                r,
                a = e.segment,
                s = e.part,
                o = this.timelines[e.timeline]
              if ('number' === typeof e.timestampOffset)
                (o = { time: e.startOfSegment, mapping: e.startOfSegment - t.start }),
                  i &&
                    ((this.timelines[e.timeline] = o),
                    this.trigger('timestampoffset'),
                    this.logger_(
                      'time mapping for timeline ' +
                        e.timeline +
                        ': [time: ' +
                        o.time +
                        '] [mapping: ' +
                        o.mapping +
                        ']',
                    )),
                  (n = e.startOfSegment),
                  (r = t.end + o.mapping)
              else {
                if (!o) return !1
                ;(n = t.start + o.mapping), (r = t.end + o.mapping)
              }
              return s && ((s.start = n), (s.end = r)), (!a.start || n < a.start) && (a.start = n), (a.end = r), !0
            }),
            (i.saveDiscontinuitySyncInfo_ = function (e) {
              var t = e.playlist,
                i = e.segment
              if (i.discontinuity) this.discontinuities[i.timeline] = { time: i.start, accuracy: 0 }
              else if (t.discontinuityStarts && t.discontinuityStarts.length)
                for (var n = 0; n < t.discontinuityStarts.length; n++) {
                  var r = t.discontinuityStarts[n],
                    a = t.discontinuitySequence + n + 1,
                    s = r - e.mediaIndex,
                    o = Math.abs(s)
                  if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
                    var l = void 0
                    ;(l =
                      s < 0
                        ? i.start -
                          ca({
                            defaultDuration: t.targetDuration,
                            durationList: t.segments,
                            startIndex: e.mediaIndex,
                            endIndex: r,
                          })
                        : i.end +
                          ca({
                            defaultDuration: t.targetDuration,
                            durationList: t.segments,
                            startIndex: e.mediaIndex + 1,
                            endIndex: r,
                          })),
                      (this.discontinuities[a] = { time: l, accuracy: o })
                  }
                }
            }),
            (i.dispose = function () {
              this.trigger('dispose'), this.off()
            }),
            t
          )
        })(Wr.EventTarget),
        xo = (function (e) {
          function t() {
            var t
            return ((t = e.call(this) || this).pendingTimelineChanges_ = {}), (t.lastTimelineChanges_ = {}), t
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.clearPendingTimelineChange = function (e) {
              ;(this.pendingTimelineChanges_[e] = null), this.trigger('pendingtimelinechange')
            }),
            (i.pendingTimelineChange = function (e) {
              var t = e.type,
                i = e.from,
                n = e.to
              return (
                'number' === typeof i &&
                  'number' === typeof n &&
                  ((this.pendingTimelineChanges_[t] = { type: t, from: i, to: n }),
                  this.trigger('pendingtimelinechange')),
                this.pendingTimelineChanges_[t]
              )
            }),
            (i.lastTimelineChange = function (e) {
              var t = e.type,
                i = e.from,
                n = e.to
              return (
                'number' === typeof i &&
                  'number' === typeof n &&
                  ((this.lastTimelineChanges_[t] = { type: t, from: i, to: n }),
                  delete this.pendingTimelineChanges_[t],
                  this.trigger('timelinechange')),
                this.lastTimelineChanges_[t]
              )
            }),
            (i.dispose = function () {
              this.trigger('dispose'), (this.pendingTimelineChanges_ = {}), (this.lastTimelineChanges_ = {}), this.off()
            }),
            t
          )
        })(Wr.EventTarget),
        Io = as(
          ss(
            os(function () {
              function e(e, t, i) {
                return (
                  e(
                    (i = {
                      path: t,
                      exports: {},
                      require: function (e, t) {
                        return (function () {
                          throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs')
                        })((void 0 === t || null === t) && i.path)
                      },
                    }),
                    i.exports,
                  ),
                  i.exports
                )
              }
              var t = e(function (e) {
                  function t(e, t) {
                    for (var i = 0; i < t.length; i++) {
                      var n = t[i]
                      ;(n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                  }
                  ;(e.exports = function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                  }),
                    (e.exports.default = e.exports),
                    (e.exports.__esModule = !0)
                }),
                i = e(function (e) {
                  function t(i, n) {
                    return (
                      (e.exports = t =
                        Object.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e
                        }),
                      (e.exports.default = e.exports),
                      (e.exports.__esModule = !0),
                      t(i, n)
                    )
                  }
                  ;(e.exports = t), (e.exports.default = e.exports), (e.exports.__esModule = !0)
                }),
                n = e(function (e) {
                  ;(e.exports = function (e, t) {
                    ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), i(e, t)
                  }),
                    (e.exports.default = e.exports),
                    (e.exports.__esModule = !0)
                }),
                r = (function () {
                  function e() {
                    this.listeners = {}
                  }
                  var t = e.prototype
                  return (
                    (t.on = function (e, t) {
                      this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
                    }),
                    (t.off = function (e, t) {
                      if (!this.listeners[e]) return !1
                      var i = this.listeners[e].indexOf(t)
                      return (this.listeners[e] = this.listeners[e].slice(0)), this.listeners[e].splice(i, 1), i > -1
                    }),
                    (t.trigger = function (e) {
                      var t = this.listeners[e]
                      if (t)
                        if (2 === arguments.length)
                          for (var i = t.length, n = 0; n < i; ++n) t[n].call(this, arguments[1])
                        else
                          for (var r = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; s < a; ++s)
                            t[s].apply(this, r)
                    }),
                    (t.dispose = function () {
                      this.listeners = {}
                    }),
                    (t.pipe = function (e) {
                      this.on('data', function (t) {
                        e.push(t)
                      })
                    }),
                    e
                  )
                })()
              var a = null,
                s = (function () {
                  function e(e) {
                    var t, i, n
                    a ||
                      (a = (function () {
                        var e,
                          t,
                          i,
                          n,
                          r,
                          a,
                          s,
                          o,
                          l = [
                            [[], [], [], [], []],
                            [[], [], [], [], []],
                          ],
                          u = l[0],
                          d = l[1],
                          c = u[4],
                          h = d[4],
                          p = [],
                          f = []
                        for (e = 0; e < 256; e++) f[(p[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e
                        for (t = i = 0; !c[t]; t ^= n || 1, i = f[i] || 1)
                          for (
                            a = ((a = i ^ (i << 1) ^ (i << 2) ^ (i << 3) ^ (i << 4)) >> 8) ^ (255 & a) ^ 99,
                              c[t] = a,
                              h[a] = t,
                              o = (16843009 * p[(r = p[(n = p[t])])]) ^ (65537 * r) ^ (257 * n) ^ (16843008 * t),
                              s = (257 * p[a]) ^ (16843008 * a),
                              e = 0;
                            e < 4;
                            e++
                          )
                            (u[e][t] = s = (s << 24) ^ (s >>> 8)), (d[e][a] = o = (o << 24) ^ (o >>> 8))
                        for (e = 0; e < 5; e++) (u[e] = u[e].slice(0)), (d[e] = d[e].slice(0))
                        return l
                      })()),
                      (this._tables = [
                        [a[0][0].slice(), a[0][1].slice(), a[0][2].slice(), a[0][3].slice(), a[0][4].slice()],
                        [a[1][0].slice(), a[1][1].slice(), a[1][2].slice(), a[1][3].slice(), a[1][4].slice()],
                      ])
                    var r = this._tables[0][4],
                      s = this._tables[1],
                      o = e.length,
                      l = 1
                    if (4 !== o && 6 !== o && 8 !== o) throw new Error('Invalid aes key size')
                    var u = e.slice(0),
                      d = []
                    for (this._key = [u, d], t = o; t < 4 * o + 28; t++)
                      (n = u[t - 1]),
                        (t % o === 0 || (8 === o && t % o === 4)) &&
                          ((n =
                            (r[n >>> 24] << 24) ^ (r[(n >> 16) & 255] << 16) ^ (r[(n >> 8) & 255] << 8) ^ r[255 & n]),
                          t % o === 0 && ((n = (n << 8) ^ (n >>> 24) ^ (l << 24)), (l = (l << 1) ^ (283 * (l >> 7))))),
                        (u[t] = u[t - o] ^ n)
                    for (i = 0; t; i++, t--)
                      (n = u[3 & i ? t : t - 4]),
                        (d[i] =
                          t <= 4 || i < 4
                            ? n
                            : s[0][r[n >>> 24]] ^ s[1][r[(n >> 16) & 255]] ^ s[2][r[(n >> 8) & 255]] ^ s[3][r[255 & n]])
                  }
                  return (
                    (e.prototype.decrypt = function (e, t, i, n, r, a) {
                      var s,
                        o,
                        l,
                        u,
                        d = this._key[1],
                        c = e ^ d[0],
                        h = n ^ d[1],
                        p = i ^ d[2],
                        f = t ^ d[3],
                        m = d.length / 4 - 2,
                        g = 4,
                        _ = this._tables[1],
                        v = _[0],
                        y = _[1],
                        T = _[2],
                        b = _[3],
                        S = _[4]
                      for (u = 0; u < m; u++)
                        (s = v[c >>> 24] ^ y[(h >> 16) & 255] ^ T[(p >> 8) & 255] ^ b[255 & f] ^ d[g]),
                          (o = v[h >>> 24] ^ y[(p >> 16) & 255] ^ T[(f >> 8) & 255] ^ b[255 & c] ^ d[g + 1]),
                          (l = v[p >>> 24] ^ y[(f >> 16) & 255] ^ T[(c >> 8) & 255] ^ b[255 & h] ^ d[g + 2]),
                          (f = v[f >>> 24] ^ y[(c >> 16) & 255] ^ T[(h >> 8) & 255] ^ b[255 & p] ^ d[g + 3]),
                          (g += 4),
                          (c = s),
                          (h = o),
                          (p = l)
                      for (u = 0; u < 4; u++)
                        (r[(3 & -u) + a] =
                          (S[c >>> 24] << 24) ^
                          (S[(h >> 16) & 255] << 16) ^
                          (S[(p >> 8) & 255] << 8) ^
                          S[255 & f] ^
                          d[g++]),
                          (s = c),
                          (c = h),
                          (h = p),
                          (p = f),
                          (f = s)
                    }),
                    e
                  )
                })(),
                o = (function (e) {
                  function t() {
                    var t
                    return ((t = e.call(this, r) || this).jobs = []), (t.delay = 1), (t.timeout_ = null), t
                  }
                  n(t, e)
                  var i = t.prototype
                  return (
                    (i.processJob_ = function () {
                      this.jobs.shift()(),
                        this.jobs.length
                          ? (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                          : (this.timeout_ = null)
                    }),
                    (i.push = function (e) {
                      this.jobs.push(e),
                        this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                    }),
                    t
                  )
                })(r),
                l = function (e) {
                  return (e << 24) | ((65280 & e) << 8) | ((16711680 & e) >> 8) | (e >>> 24)
                },
                u = (function () {
                  function e(t, i, n, r) {
                    var a = e.STEP,
                      s = new Int32Array(t.buffer),
                      u = new Uint8Array(t.byteLength),
                      d = 0
                    for (
                      this.asyncStream_ = new o(),
                        this.asyncStream_.push(this.decryptChunk_(s.subarray(d, d + a), i, n, u)),
                        d = a;
                      d < s.length;
                      d += a
                    )
                      (n = new Uint32Array([l(s[d - 4]), l(s[d - 3]), l(s[d - 2]), l(s[d - 1])])),
                        this.asyncStream_.push(this.decryptChunk_(s.subarray(d, d + a), i, n, u))
                    this.asyncStream_.push(function () {
                      var e
                      r(null, (e = u).subarray(0, e.byteLength - e[e.byteLength - 1]))
                    })
                  }
                  return (
                    (e.prototype.decryptChunk_ = function (e, t, i, n) {
                      return function () {
                        var r = (function (e, t, i) {
                          var n,
                            r,
                            a,
                            o,
                            u,
                            d,
                            c,
                            h,
                            p,
                            f = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                            m = new s(Array.prototype.slice.call(t)),
                            g = new Uint8Array(e.byteLength),
                            _ = new Int32Array(g.buffer)
                          for (n = i[0], r = i[1], a = i[2], o = i[3], p = 0; p < f.length; p += 4)
                            (u = l(f[p])),
                              (d = l(f[p + 1])),
                              (c = l(f[p + 2])),
                              (h = l(f[p + 3])),
                              m.decrypt(u, d, c, h, _, p),
                              (_[p] = l(_[p] ^ n)),
                              (_[p + 1] = l(_[p + 1] ^ r)),
                              (_[p + 2] = l(_[p + 2] ^ a)),
                              (_[p + 3] = l(_[p + 3] ^ o)),
                              (n = u),
                              (r = d),
                              (a = c),
                              (o = h)
                          return g
                        })(e, t, i)
                        n.set(r, e.byteOffset)
                      }
                    }),
                    t(e, null, [
                      {
                        key: 'STEP',
                        get: function () {
                          return 32e3
                        },
                      },
                    ]),
                    e
                  )
                })()
              self.onmessage = function (e) {
                var t = e.data,
                  i = new Uint8Array(t.encrypted.bytes, t.encrypted.byteOffset, t.encrypted.byteLength),
                  n = new Uint32Array(t.key.bytes, t.key.byteOffset, t.key.byteLength / 4),
                  r = new Uint32Array(t.iv.bytes, t.iv.byteOffset, t.iv.byteLength / 4)
                new u(i, n, r, function (e, i) {
                  self.postMessage(
                    (function (e) {
                      var t = {}
                      return (
                        Object.keys(e).forEach(function (i) {
                          var n = e[i]
                          ArrayBuffer.isView(n)
                            ? (t[i] = { bytes: n.buffer, byteOffset: n.byteOffset, byteLength: n.byteLength })
                            : (t[i] = n)
                        }),
                        t
                      )
                    })({ source: t.source, decrypted: i }),
                    [i.buffer],
                  )
                })
              }
            }),
          ),
        ),
        Po = function (e) {
          var t = e.default ? 'main' : 'alternative'
          return (
            e.characteristics &&
              e.characteristics.indexOf('public.accessibility.describes-video') >= 0 &&
              (t = 'main-desc'),
            t
          )
        },
        Ao = function (e, t) {
          e.abort(),
            e.pause(),
            t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), (t.activePlaylistLoader = null))
        },
        Lo = function (e, t) {
          ;(t.activePlaylistLoader = e), e.load()
        },
        Oo = {
          AUDIO: function (e, t) {
            return function () {
              var i = t.segmentLoaders[e],
                n = t.mediaTypes[e],
                r = t.blacklistCurrentPlaylist
              Ao(i, n)
              var a = n.activeTrack(),
                s = n.activeGroup(),
                o = (
                  s.filter(function (e) {
                    return e.default
                  })[0] || s[0]
                ).id,
                l = n.tracks[o]
              if (a !== l) {
                for (var u in (Wr.log.warn(
                  'Problem encountered loading the alternate audio track.Switching back to default.',
                ),
                n.tracks))
                  n.tracks[u].enabled = n.tracks[u] === l
                n.onTrackChanged()
              } else r({ message: 'Problem encountered loading the default audio track.' })
            }
          },
          SUBTITLES: function (e, t) {
            return function () {
              var i = t.segmentLoaders[e],
                n = t.mediaTypes[e]
              Wr.log.warn('Problem encountered loading the subtitle track.Disabling subtitle track.'), Ao(i, n)
              var r = n.activeTrack()
              r && (r.mode = 'disabled'), n.onTrackChanged()
            }
          },
        },
        Do = {
          AUDIO: function (e, t, i) {
            if (t) {
              var n = i.tech,
                r = i.requestOptions,
                a = i.segmentLoaders[e]
              t.on('loadedmetadata', function () {
                var e = t.media()
                a.playlist(e, r), (!n.paused() || (e.endList && 'none' !== n.preload())) && a.load()
              }),
                t.on('loadedplaylist', function () {
                  a.playlist(t.media(), r), n.paused() || a.load()
                }),
                t.on('error', Oo[e](e, i))
            }
          },
          SUBTITLES: function (e, t, i) {
            var n = i.tech,
              r = i.requestOptions,
              a = i.segmentLoaders[e],
              s = i.mediaTypes[e]
            t.on('loadedmetadata', function () {
              var e = t.media()
              a.playlist(e, r),
                a.track(s.activeTrack()),
                (!n.paused() || (e.endList && 'none' !== n.preload())) && a.load()
            }),
              t.on('loadedplaylist', function () {
                a.playlist(t.media(), r), n.paused() || a.load()
              }),
              t.on('error', Oo[e](e, i))
          },
        },
        Mo = {
          AUDIO: function (e, t) {
            var i = t.vhs,
              n = t.sourceType,
              r = t.segmentLoaders[e],
              a = t.requestOptions,
              s = t.master.mediaGroups,
              o = t.mediaTypes[e],
              l = o.groups,
              u = o.tracks,
              d = o.logger_,
              c = t.masterPlaylistLoader,
              h = Ta(c.master)
            for (var p in ((s[e] && 0 !== Object.keys(s[e]).length) ||
              ((s[e] = { main: { default: { default: !0 } } }),
              h && (s[e].main.default.playlists = c.master.playlists)),
            s[e]))
              for (var f in (l[p] || (l[p] = []), s[e][p])) {
                var m = s[e][p][f],
                  g = void 0
                if (
                  (h
                    ? (d("AUDIO group '" + p + "' label '" + f + "' is a master playlist"),
                      (m.isMasterPlaylist = !0),
                      (g = null))
                    : (g =
                        'vhs-json' === n && m.playlists
                          ? new Ra(m.playlists[0], i, a)
                          : m.resolvedUri
                          ? new Ra(m.resolvedUri, i, a)
                          : m.playlists && 'dash' === n
                          ? new is(m.playlists[0], i, a, c)
                          : null),
                  (m = Wr.mergeOptions({ id: f, playlistLoader: g }, m)),
                  Do[e](e, m.playlistLoader, t),
                  l[p].push(m),
                  'undefined' === typeof u[f])
                ) {
                  var _ = new Wr.AudioTrack({
                    id: f,
                    kind: Po(m),
                    enabled: !1,
                    language: m.language,
                    default: m.default,
                    label: f,
                  })
                  u[f] = _
                }
              }
            r.on('error', Oo[e](e, t))
          },
          SUBTITLES: function (e, t) {
            var i = t.tech,
              n = t.vhs,
              r = t.sourceType,
              a = t.segmentLoaders[e],
              s = t.requestOptions,
              o = t.master.mediaGroups,
              l = t.mediaTypes[e],
              u = l.groups,
              d = l.tracks,
              c = t.masterPlaylistLoader
            for (var h in o[e])
              for (var p in (u[h] || (u[h] = []), o[e][h]))
                if (!o[e][h][p].forced) {
                  var f = o[e][h][p],
                    m = void 0
                  if ('hls' === r) m = new Ra(f.resolvedUri, n, s)
                  else if ('dash' === r) {
                    if (
                      !f.playlists.filter(function (e) {
                        return e.excludeUntil !== 1 / 0
                      }).length
                    )
                      return
                    m = new is(f.playlists[0], n, s, c)
                  } else 'vhs-json' === r && (m = new Ra(f.playlists ? f.playlists[0] : f.resolvedUri, n, s))
                  if (
                    ((f = Wr.mergeOptions({ id: p, playlistLoader: m }, f)),
                    Do[e](e, f.playlistLoader, t),
                    u[h].push(f),
                    'undefined' === typeof d[p])
                  ) {
                    var g = i.addRemoteTextTrack(
                      { id: p, kind: 'subtitles', default: f.default && f.autoselect, language: f.language, label: p },
                      !1,
                    ).track
                    d[p] = g
                  }
                }
            a.on('error', Oo[e](e, t))
          },
          'CLOSED-CAPTIONS': function (e, t) {
            var i = t.tech,
              n = t.master.mediaGroups,
              r = t.mediaTypes[e],
              a = r.groups,
              s = r.tracks
            for (var o in n[e])
              for (var l in (a[o] || (a[o] = []), n[e][o])) {
                var u = n[e][o][l]
                if (/^(?:CC|SERVICE)/.test(u.instreamId)) {
                  var d = (i.options_.vhs && i.options_.vhs.captionServices) || {},
                    c = { label: l, language: u.language, instreamId: u.instreamId, default: u.default && u.autoselect }
                  if (
                    (d[c.instreamId] && (c = Wr.mergeOptions(c, d[c.instreamId])),
                    void 0 === c.default && delete c.default,
                    a[o].push(Wr.mergeOptions({ id: l }, u)),
                    'undefined' === typeof s[l])
                  ) {
                    var h = i.addRemoteTextTrack(
                      { id: c.instreamId, kind: 'captions', default: c.default, language: c.language, label: c.label },
                      !1,
                    ).track
                    s[l] = h
                  }
                }
              }
          },
        },
        Ro = function e(t, i) {
          for (var n = 0; n < t.length; n++) {
            if (va(i, t[n])) return !0
            if (t[n].playlists && e(t[n].playlists, i)) return !0
          }
          return !1
        },
        Uo = {
          AUDIO: function (e, t) {
            return function () {
              var i = t.mediaTypes[e].tracks
              for (var n in i) if (i[n].enabled) return i[n]
              return null
            }
          },
          SUBTITLES: function (e, t) {
            return function () {
              var i = t.mediaTypes[e].tracks
              for (var n in i) if ('showing' === i[n].mode || 'hidden' === i[n].mode) return i[n]
              return null
            }
          },
        },
        Bo = function (e) {
          ;['AUDIO', 'SUBTITLES', 'CLOSED-CAPTIONS'].forEach(function (t) {
            Mo[t](t, e)
          })
          var t = e.mediaTypes,
            i = e.masterPlaylistLoader,
            n = e.tech,
            r = e.vhs,
            a = e.segmentLoaders,
            s = a.AUDIO,
            o = a.main
          ;['AUDIO', 'SUBTITLES'].forEach(function (i) {
            ;(t[i].activeGroup = (function (e, t) {
              return function (i) {
                var n = t.masterPlaylistLoader,
                  r = t.mediaTypes[e].groups,
                  a = n.media()
                if (!a) return null
                var s = null
                a.attributes[e] && (s = r[a.attributes[e]])
                var o = Object.keys(r)
                if (!s)
                  if ('AUDIO' === e && o.length > 1 && Ta(t.master))
                    for (var l = 0; l < o.length; l++) {
                      var u = r[o[l]]
                      if (Ro(u, a)) {
                        s = u
                        break
                      }
                    }
                  else r.main ? (s = r.main) : 1 === o.length && (s = r[o[0]])
                return 'undefined' === typeof i
                  ? s
                  : (null !== i &&
                      s &&
                      s.filter(function (e) {
                        return e.id === i.id
                      })[0]) ||
                      null
              }
            })(i, e)),
              (t[i].activeTrack = Uo[i](i, e)),
              (t[i].onGroupChanged = (function (e, t) {
                return function () {
                  var i = t.segmentLoaders,
                    n = i[e],
                    r = i.main,
                    a = t.mediaTypes[e],
                    s = a.activeTrack(),
                    o = a.getActiveGroup(),
                    l = a.activePlaylistLoader,
                    u = a.lastGroup_
                  ;(o && u && o.id === u.id) ||
                    ((a.lastGroup_ = o),
                    (a.lastTrack_ = s),
                    Ao(n, a),
                    o &&
                      !o.isMasterPlaylist &&
                      (o.playlistLoader ? (n.resyncLoader(), Lo(o.playlistLoader, a)) : l && r.resetEverything()))
                }
              })(i, e)),
              (t[i].onGroupChanging = (function (e, t) {
                return function () {
                  var i = t.segmentLoaders[e]
                  ;(t.mediaTypes[e].lastGroup_ = null), i.abort(), i.pause()
                }
              })(i, e)),
              (t[i].onTrackChanged = (function (e, t) {
                return function () {
                  var i = t.masterPlaylistLoader,
                    n = t.segmentLoaders,
                    r = n[e],
                    a = n.main,
                    s = t.mediaTypes[e],
                    o = s.activeTrack(),
                    l = s.getActiveGroup(),
                    u = s.activePlaylistLoader,
                    d = s.lastTrack_
                  if ((!d || !o || d.id !== o.id) && ((s.lastGroup_ = l), (s.lastTrack_ = o), Ao(r, s), l)) {
                    if (l.isMasterPlaylist) {
                      if (!o || !d || o.id === d.id) return
                      var c = t.vhs.masterPlaylistController_,
                        h = c.selectPlaylist()
                      if (c.media() === h) return
                      return (
                        s.logger_('track change. Switching master audio from ' + d.id + ' to ' + o.id),
                        i.pause(),
                        a.resetEverything(),
                        void c.fastQualityChange_(h)
                      )
                    }
                    if ('AUDIO' === e) {
                      if (!l.playlistLoader) return a.setAudio(!0), void a.resetEverything()
                      r.setAudio(!0), a.setAudio(!1)
                    }
                    u !== l.playlistLoader
                      ? (r.track && r.track(o), r.resetEverything(), Lo(l.playlistLoader, s))
                      : Lo(l.playlistLoader, s)
                  }
                }
              })(i, e)),
              (t[i].getActiveGroup = (function (e, t) {
                var i = t.mediaTypes
                return function () {
                  var t = i[e].activeTrack()
                  return t ? i[e].activeGroup(t) : null
                }
              })(i, e))
          })
          var l = t.AUDIO.activeGroup()
          if (l) {
            var u = (
              l.filter(function (e) {
                return e.default
              })[0] || l[0]
            ).id
            ;(t.AUDIO.tracks[u].enabled = !0),
              t.AUDIO.onGroupChanged(),
              t.AUDIO.onTrackChanged(),
              t.AUDIO.getActiveGroup().playlistLoader ? (o.setAudio(!1), s.setAudio(!0)) : o.setAudio(!0)
          }
          i.on('mediachange', function () {
            ;['AUDIO', 'SUBTITLES'].forEach(function (e) {
              return t[e].onGroupChanged()
            })
          }),
            i.on('mediachanging', function () {
              ;['AUDIO', 'SUBTITLES'].forEach(function (e) {
                return t[e].onGroupChanging()
              })
            })
          var d = function () {
            t.AUDIO.onTrackChanged(),
              n.trigger({ type: 'usage', name: 'vhs-audio-change' }),
              n.trigger({ type: 'usage', name: 'hls-audio-change' })
          }
          for (var c in (n.audioTracks().addEventListener('change', d),
          n.remoteTextTracks().addEventListener('change', t.SUBTITLES.onTrackChanged),
          r.on('dispose', function () {
            n.audioTracks().removeEventListener('change', d),
              n.remoteTextTracks().removeEventListener('change', t.SUBTITLES.onTrackChanged)
          }),
          n.clearTracks('audio'),
          t.AUDIO.tracks))
            n.audioTracks().addTrack(t.AUDIO.tracks[c])
        },
        No = [
          'mediaRequests',
          'mediaRequestsAborted',
          'mediaRequestsTimedout',
          'mediaRequestsErrored',
          'mediaTransferDuration',
          'mediaBytesTransferred',
          'mediaAppends',
        ],
        Fo = function (e) {
          return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
        },
        jo = (function (e) {
          function t(t) {
            var i
            i = e.call(this) || this
            var n = t.src,
              r = t.handleManifestRedirects,
              s = t.withCredentials,
              o = t.tech,
              l = t.bandwidth,
              d = t.externVhs,
              c = t.useCueTags,
              h = t.blacklistDuration,
              p = t.enableLowInitialPlaylist,
              f = t.sourceType,
              m = t.cacheEncryptionKeys,
              g = t.experimentalBufferBasedABR,
              _ = t.experimentalLeastPixelDiffSelector
            if (!n) throw new Error('A non-empty playlist URL or JSON manifest string is required')
            var v = t.maxPlaylistRetries
            ;(null !== v && 'undefined' !== typeof v) || (v = 1 / 0),
              (eo = d),
              (i.experimentalBufferBasedABR = Boolean(g)),
              (i.experimentalLeastPixelDiffSelector = Boolean(_)),
              (i.withCredentials = s),
              (i.tech_ = o),
              (i.vhs_ = o.vhs),
              (i.sourceType_ = f),
              (i.useCueTags_ = c),
              (i.blacklistDuration = h),
              (i.maxPlaylistRetries = v),
              (i.enableLowInitialPlaylist = p),
              i.useCueTags_ &&
                ((i.cueTagsTrack_ = i.tech_.addTextTrack('metadata', 'ad-cues')),
                (i.cueTagsTrack_.inBandMetadataTrackDispatchType = '')),
              (i.requestOptions_ = {
                withCredentials: s,
                handleManifestRedirects: r,
                maxPlaylistRetries: v,
                timeout: null,
              }),
              i.on('error', i.pauseLoading),
              (i.mediaTypes_ = (function () {
                var e = {}
                return (
                  ['AUDIO', 'SUBTITLES', 'CLOSED-CAPTIONS'].forEach(function (t) {
                    e[t] = {
                      groups: {},
                      tracks: {},
                      activePlaylistLoader: null,
                      activeGroup: Js,
                      activeTrack: Js,
                      getActiveGroup: Js,
                      onGroupChanged: Js,
                      onTrackChanged: Js,
                      lastTrack_: null,
                      logger_: Qr('MediaGroups[' + t + ']'),
                    }
                  }),
                  e
                )
              })()),
              (i.mediaSource = new (a().MediaSource)()),
              (i.handleDurationChange_ = i.handleDurationChange_.bind((0, u.Z)(i))),
              (i.handleSourceOpen_ = i.handleSourceOpen_.bind((0, u.Z)(i))),
              (i.handleSourceEnded_ = i.handleSourceEnded_.bind((0, u.Z)(i))),
              i.mediaSource.addEventListener('durationchange', i.handleDurationChange_),
              i.mediaSource.addEventListener('sourceopen', i.handleSourceOpen_),
              i.mediaSource.addEventListener('sourceended', i.handleSourceEnded_),
              (i.seekable_ = Wr.createTimeRanges()),
              (i.hasPlayed_ = !1),
              (i.syncController_ = new wo(t)),
              (i.segmentMetadataTrack_ = o.addRemoteTextTrack(
                { kind: 'metadata', label: 'segment-metadata' },
                !1,
              ).track),
              (i.decrypter_ = new Io()),
              (i.sourceUpdater_ = new To(i.mediaSource)),
              (i.inbandTextTracks_ = {}),
              (i.timelineChangeController_ = new xo())
            var y = {
              vhs: i.vhs_,
              parse708captions: t.parse708captions,
              mediaSource: i.mediaSource,
              currentTime: i.tech_.currentTime.bind(i.tech_),
              seekable: function () {
                return i.seekable()
              },
              seeking: function () {
                return i.tech_.seeking()
              },
              duration: function () {
                return i.duration()
              },
              hasPlayed: function () {
                return i.hasPlayed_
              },
              goalBufferLength: function () {
                return i.goalBufferLength()
              },
              bandwidth: l,
              syncController: i.syncController_,
              decrypter: i.decrypter_,
              sourceType: i.sourceType_,
              inbandTextTracks: i.inbandTextTracks_,
              cacheEncryptionKeys: m,
              sourceUpdater: i.sourceUpdater_,
              timelineChangeController: i.timelineChangeController_,
              experimentalExactManifestTimings: t.experimentalExactManifestTimings,
            }
            ;(i.masterPlaylistLoader_ =
              'dash' === i.sourceType_ ? new is(n, i.vhs_, i.requestOptions_) : new Ra(n, i.vhs_, i.requestOptions_)),
              i.setupMasterPlaylistLoaderListeners_(),
              (i.mainSegmentLoader_ = new $s(
                Wr.mergeOptions(y, { segmentMetadataTrack: i.segmentMetadataTrack_, loaderType: 'main' }),
                t,
              )),
              (i.audioSegmentLoader_ = new $s(Wr.mergeOptions(y, { loaderType: 'audio' }), t)),
              (i.subtitleSegmentLoader_ = new ko(
                Wr.mergeOptions(y, { loaderType: 'vtt', featuresNativeTextTracks: i.tech_.featuresNativeTextTracks }),
                t,
              )),
              i.setupSegmentLoaderListeners_(),
              i.experimentalBufferBasedABR &&
                (i.masterPlaylistLoader_.one('loadedplaylist', function () {
                  return i.startABRTimer_()
                }),
                i.tech_.on('pause', function () {
                  return i.stopABRTimer_()
                }),
                i.tech_.on('play', function () {
                  return i.startABRTimer_()
                })),
              No.forEach(function (e) {
                i[e + '_'] = Fo.bind((0, u.Z)(i), e)
              }),
              (i.logger_ = Qr('MPC')),
              (i.triggeredFmp4Usage = !1),
              'none' === i.tech_.preload()
                ? ((i.loadOnPlay_ = function () {
                    ;(i.loadOnPlay_ = null), i.masterPlaylistLoader_.load()
                  }),
                  i.tech_.one('play', i.loadOnPlay_))
                : i.masterPlaylistLoader_.load(),
              (i.timeToLoadedData__ = -1),
              (i.mainAppendsToLoadedData__ = -1),
              (i.audioAppendsToLoadedData__ = -1)
            var T = 'none' === i.tech_.preload() ? 'play' : 'loadstart'
            return (
              i.tech_.one(T, function () {
                var e = Date.now()
                i.tech_.one('loadeddata', function () {
                  ;(i.timeToLoadedData__ = Date.now() - e),
                    (i.mainAppendsToLoadedData__ = i.mainSegmentLoader_.mediaAppends),
                    (i.audioAppendsToLoadedData__ = i.audioSegmentLoader_.mediaAppends)
                })
              }),
              i
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.mainAppendsToLoadedData_ = function () {
              return this.mainAppendsToLoadedData__
            }),
            (i.audioAppendsToLoadedData_ = function () {
              return this.audioAppendsToLoadedData__
            }),
            (i.appendsToLoadedData_ = function () {
              var e = this.mainAppendsToLoadedData_(),
                t = this.audioAppendsToLoadedData_()
              return -1 === e || -1 === t ? -1 : e + t
            }),
            (i.timeToLoadedData_ = function () {
              return this.timeToLoadedData__
            }),
            (i.checkABR_ = function () {
              var e = this.selectPlaylist()
              e && this.shouldSwitchToMedia_(e) && this.switchMedia_(e, 'abr')
            }),
            (i.switchMedia_ = function (e, t, i) {
              var n = this.media(),
                r = n && (n.id || n.uri),
                a = e.id || e.uri
              r &&
                r !== a &&
                (this.logger_('switch media ' + r + ' -> ' + a + ' from ' + t),
                this.tech_.trigger({ type: 'usage', name: 'vhs-rendition-change-' + t })),
                this.masterPlaylistLoader_.media(e, i)
            }),
            (i.startABRTimer_ = function () {
              var e = this
              this.stopABRTimer_(),
                (this.abrTimer_ = a().setInterval(function () {
                  return e.checkABR_()
                }, 250))
            }),
            (i.stopABRTimer_ = function () {
              ;(this.tech_.scrubbing && this.tech_.scrubbing()) ||
                (a().clearInterval(this.abrTimer_), (this.abrTimer_ = null))
            }),
            (i.getAudioTrackPlaylists_ = function () {
              var e = this.master(),
                t = (e && e.playlists) || []
              if (!e || !e.mediaGroups || !e.mediaGroups.AUDIO) return t
              var i,
                n = e.mediaGroups.AUDIO,
                r = Object.keys(n)
              if (Object.keys(this.mediaTypes_.AUDIO.groups).length) i = this.mediaTypes_.AUDIO.activeTrack()
              else {
                var a = n.main || (r.length && n[r[0]])
                for (var s in a)
                  if (a[s].default) {
                    i = { label: s }
                    break
                  }
              }
              if (!i) return t
              var o = []
              for (var l in n)
                if (n[l][i.label]) {
                  var u = n[l][i.label]
                  if (u.playlists && u.playlists.length) o.push.apply(o, u.playlists)
                  else if (u.uri) o.push(u)
                  else if (e.playlists.length)
                    for (var d = 0; d < e.playlists.length; d++) {
                      var c = e.playlists[d]
                      c.attributes && c.attributes.AUDIO && c.attributes.AUDIO === l && o.push(c)
                    }
                }
              return o.length ? o : t
            }),
            (i.setupMasterPlaylistLoaderListeners_ = function () {
              var e = this
              this.masterPlaylistLoader_.on('loadedmetadata', function () {
                var t = e.masterPlaylistLoader_.media(),
                  i = 1.5 * t.targetDuration * 1e3
                _a(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media())
                  ? (e.requestOptions_.timeout = 0)
                  : (e.requestOptions_.timeout = i),
                  t.endList &&
                    'none' !== e.tech_.preload() &&
                    (e.mainSegmentLoader_.playlist(t, e.requestOptions_), e.mainSegmentLoader_.load()),
                  Bo({
                    sourceType: e.sourceType_,
                    segmentLoaders: {
                      AUDIO: e.audioSegmentLoader_,
                      SUBTITLES: e.subtitleSegmentLoader_,
                      main: e.mainSegmentLoader_,
                    },
                    tech: e.tech_,
                    requestOptions: e.requestOptions_,
                    masterPlaylistLoader: e.masterPlaylistLoader_,
                    vhs: e.vhs_,
                    master: e.master(),
                    mediaTypes: e.mediaTypes_,
                    blacklistCurrentPlaylist: e.blacklistCurrentPlaylist.bind(e),
                  }),
                  e.triggerPresenceUsage_(e.master(), t),
                  e.setupFirstPlay(),
                  !e.mediaTypes_.AUDIO.activePlaylistLoader || e.mediaTypes_.AUDIO.activePlaylistLoader.media()
                    ? e.trigger('selectedinitialmedia')
                    : e.mediaTypes_.AUDIO.activePlaylistLoader.one('loadedmetadata', function () {
                        e.trigger('selectedinitialmedia')
                      })
              }),
                this.masterPlaylistLoader_.on('loadedplaylist', function () {
                  e.loadOnPlay_ && e.tech_.off('play', e.loadOnPlay_)
                  var t = e.masterPlaylistLoader_.media()
                  if (!t) {
                    var i
                    if (
                      (e.excludeUnsupportedVariants_(),
                      e.enableLowInitialPlaylist && (i = e.selectInitialPlaylist()),
                      i || (i = e.selectPlaylist()),
                      !i || !e.shouldSwitchToMedia_(i))
                    )
                      return
                    if (
                      ((e.initialMedia_ = i),
                      e.switchMedia_(e.initialMedia_, 'initial'),
                      !('vhs-json' === e.sourceType_ && e.initialMedia_.segments))
                    )
                      return
                    t = e.initialMedia_
                  }
                  e.handleUpdatedMediaPlaylist(t)
                }),
                this.masterPlaylistLoader_.on('error', function () {
                  e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error)
                }),
                this.masterPlaylistLoader_.on('mediachanging', function () {
                  e.mainSegmentLoader_.abort(), e.mainSegmentLoader_.pause()
                }),
                this.masterPlaylistLoader_.on('mediachange', function () {
                  var t = e.masterPlaylistLoader_.media(),
                    i = 1.5 * t.targetDuration * 1e3
                  _a(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media())
                    ? (e.requestOptions_.timeout = 0)
                    : (e.requestOptions_.timeout = i),
                    e.mainSegmentLoader_.playlist(t, e.requestOptions_),
                    e.mainSegmentLoader_.load(),
                    e.tech_.trigger({ type: 'mediachange', bubbles: !0 })
                }),
                this.masterPlaylistLoader_.on('playlistunchanged', function () {
                  var t = e.masterPlaylistLoader_.media()
                  'playlist-unchanged' !== t.lastExcludeReason_ &&
                    e.stuckAtPlaylistEnd_(t) &&
                    (e.blacklistCurrentPlaylist({
                      message: 'Playlist no longer updating.',
                      reason: 'playlist-unchanged',
                    }),
                    e.tech_.trigger('playliststuck'))
                }),
                this.masterPlaylistLoader_.on('renditiondisabled', function () {
                  e.tech_.trigger({ type: 'usage', name: 'vhs-rendition-disabled' }),
                    e.tech_.trigger({ type: 'usage', name: 'hls-rendition-disabled' })
                }),
                this.masterPlaylistLoader_.on('renditionenabled', function () {
                  e.tech_.trigger({ type: 'usage', name: 'vhs-rendition-enabled' }),
                    e.tech_.trigger({ type: 'usage', name: 'hls-rendition-enabled' })
                })
            }),
            (i.handleUpdatedMediaPlaylist = function (e) {
              this.useCueTags_ && this.updateAdCues_(e),
                this.mainSegmentLoader_.playlist(e, this.requestOptions_),
                this.updateDuration(!e.endList),
                this.tech_.paused() ||
                  (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load())
            }),
            (i.triggerPresenceUsage_ = function (e, t) {
              var i = e.mediaGroups || {},
                n = !0,
                r = Object.keys(i.AUDIO)
              for (var a in i.AUDIO)
                for (var s in i.AUDIO[a]) {
                  i.AUDIO[a][s].uri || (n = !1)
                }
              n &&
                (this.tech_.trigger({ type: 'usage', name: 'vhs-demuxed' }),
                this.tech_.trigger({ type: 'usage', name: 'hls-demuxed' })),
                Object.keys(i.SUBTITLES).length &&
                  (this.tech_.trigger({ type: 'usage', name: 'vhs-webvtt' }),
                  this.tech_.trigger({ type: 'usage', name: 'hls-webvtt' })),
                eo.Playlist.isAes(t) &&
                  (this.tech_.trigger({ type: 'usage', name: 'vhs-aes' }),
                  this.tech_.trigger({ type: 'usage', name: 'hls-aes' })),
                r.length &&
                  Object.keys(i.AUDIO[r[0]]).length > 1 &&
                  (this.tech_.trigger({ type: 'usage', name: 'vhs-alternate-audio' }),
                  this.tech_.trigger({ type: 'usage', name: 'hls-alternate-audio' })),
                this.useCueTags_ &&
                  (this.tech_.trigger({ type: 'usage', name: 'vhs-playlist-cue-tags' }),
                  this.tech_.trigger({ type: 'usage', name: 'hls-playlist-cue-tags' }))
            }),
            (i.shouldSwitchToMedia_ = function (e) {
              var t = this.masterPlaylistLoader_.media(),
                i = this.tech_.buffered()
              return (function (e) {
                var t = e.currentPlaylist,
                  i = e.nextPlaylist,
                  n = e.forwardBuffer,
                  r = e.bufferLowWaterLine,
                  a = e.bufferHighWaterLine,
                  s = e.duration,
                  o = e.experimentalBufferBasedABR,
                  l = e.log
                if (!i) return Wr.log.warn('We received no playlist to switch to. Please check your stream.'), !1
                var u = 'allowing switch ' + ((t && t.id) || 'null') + ' -> ' + i.id
                if (!t) return l(u + ' as current playlist is not set'), !0
                if (i.id === t.id) return !1
                if (!t.endList) return l(u + ' as current playlist is live'), !0
                var d = o ? ns.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE : ns.MAX_BUFFER_LOW_WATER_LINE
                if (s < d) return l(u + ' as duration < max low water line (' + s + ' < ' + d + ')'), !0
                var c = i.attributes.BANDWIDTH,
                  h = t.attributes.BANDWIDTH
                if (c < h && (!o || n < a)) {
                  var p = u + ' as next bandwidth < current bandwidth (' + c + ' < ' + h + ')'
                  return o && (p += ' and forwardBuffer < bufferHighWaterLine (' + n + ' < ' + a + ')'), l(p), !0
                }
                if ((!o || c > h) && n >= r) {
                  var f = u + ' as forwardBuffer >= bufferLowWaterLine (' + n + ' >= ' + r + ')'
                  return o && (f += ' and next bandwidth > current bandwidth (' + c + ' > ' + h + ')'), l(f), !0
                }
                return l('not ' + u + ' as no switching criteria met'), !1
              })({
                currentPlaylist: t,
                nextPlaylist: e,
                forwardBuffer: i.length ? i.end(i.length - 1) - this.tech_.currentTime() : 0,
                bufferLowWaterLine: this.bufferLowWaterLine(),
                bufferHighWaterLine: this.bufferHighWaterLine(),
                duration: this.duration(),
                experimentalBufferBasedABR: this.experimentalBufferBasedABR,
                log: this.logger_,
              })
            }),
            (i.setupSegmentLoaderListeners_ = function () {
              var e = this
              this.experimentalBufferBasedABR ||
                (this.mainSegmentLoader_.on('bandwidthupdate', function () {
                  var t = e.selectPlaylist()
                  e.shouldSwitchToMedia_(t) && e.switchMedia_(t, 'bandwidthupdate'), e.tech_.trigger('bandwidthupdate')
                }),
                this.mainSegmentLoader_.on('progress', function () {
                  e.trigger('progress')
                })),
                this.mainSegmentLoader_.on('error', function () {
                  e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error())
                }),
                this.mainSegmentLoader_.on('appenderror', function () {
                  ;(e.error = e.mainSegmentLoader_.error_), e.trigger('error')
                }),
                this.mainSegmentLoader_.on('syncinfoupdate', function () {
                  e.onSyncInfoUpdate_()
                }),
                this.mainSegmentLoader_.on('timestampoffset', function () {
                  e.tech_.trigger({ type: 'usage', name: 'vhs-timestamp-offset' }),
                    e.tech_.trigger({ type: 'usage', name: 'hls-timestamp-offset' })
                }),
                this.audioSegmentLoader_.on('syncinfoupdate', function () {
                  e.onSyncInfoUpdate_()
                }),
                this.audioSegmentLoader_.on('appenderror', function () {
                  ;(e.error = e.audioSegmentLoader_.error_), e.trigger('error')
                }),
                this.mainSegmentLoader_.on('ended', function () {
                  e.logger_('main segment loader ended'), e.onEndOfStream()
                }),
                this.mainSegmentLoader_.on('earlyabort', function (t) {
                  e.experimentalBufferBasedABR ||
                    (e.delegateLoaders_('all', ['abort']),
                    e.blacklistCurrentPlaylist(
                      {
                        message:
                          "Aborted early because there isn't enough bandwidth to complete the request without rebuffering.",
                      },
                      120,
                    ))
                })
              var t = function () {
                if (!e.sourceUpdater_.hasCreatedSourceBuffers()) return e.tryToCreateSourceBuffers_()
                var t = e.getCodecsOrExclude_()
                t && e.sourceUpdater_.addOrChangeSourceBuffers(t)
              }
              this.mainSegmentLoader_.on('trackinfo', t),
                this.audioSegmentLoader_.on('trackinfo', t),
                this.mainSegmentLoader_.on('fmp4', function () {
                  e.triggeredFmp4Usage ||
                    (e.tech_.trigger({ type: 'usage', name: 'vhs-fmp4' }),
                    e.tech_.trigger({ type: 'usage', name: 'hls-fmp4' }),
                    (e.triggeredFmp4Usage = !0))
                }),
                this.audioSegmentLoader_.on('fmp4', function () {
                  e.triggeredFmp4Usage ||
                    (e.tech_.trigger({ type: 'usage', name: 'vhs-fmp4' }),
                    e.tech_.trigger({ type: 'usage', name: 'hls-fmp4' }),
                    (e.triggeredFmp4Usage = !0))
                }),
                this.audioSegmentLoader_.on('ended', function () {
                  e.logger_('audioSegmentLoader ended'), e.onEndOfStream()
                })
            }),
            (i.mediaSecondsLoaded_ = function () {
              return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
            }),
            (i.load = function () {
              this.mainSegmentLoader_.load(),
                this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(),
                this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
            }),
            (i.smoothQualityChange_ = function (e) {
              void 0 === e && (e = this.selectPlaylist()), this.fastQualityChange_(e)
            }),
            (i.fastQualityChange_ = function (e) {
              var t = this
              void 0 === e && (e = this.selectPlaylist()),
                e !== this.masterPlaylistLoader_.media()
                  ? (this.switchMedia_(e, 'fast-quality'),
                    this.mainSegmentLoader_.resetEverything(function () {
                      Wr.browser.IE_VERSION || Wr.browser.IS_EDGE
                        ? t.tech_.setCurrentTime(t.tech_.currentTime() + 0.04)
                        : t.tech_.setCurrentTime(t.tech_.currentTime())
                    }))
                  : this.logger_('skipping fastQualityChange because new media is same as old')
            }),
            (i.play = function () {
              if (!this.setupFirstPlay()) {
                this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load()
                var e = this.tech_.seekable()
                return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0)
                  ? this.tech_.setCurrentTime(e.end(e.length - 1))
                  : void 0
              }
            }),
            (i.setupFirstPlay = function () {
              var e = this,
                t = this.masterPlaylistLoader_.media()
              if (!t || this.tech_.paused() || this.hasPlayed_) return !1
              if (!t.endList) {
                var i = this.seekable()
                if (!i.length) return !1
                if (Wr.browser.IE_VERSION && 0 === this.tech_.readyState())
                  return (
                    this.tech_.one('loadedmetadata', function () {
                      e.trigger('firstplay'), e.tech_.setCurrentTime(i.end(0)), (e.hasPlayed_ = !0)
                    }),
                    !1
                  )
                this.trigger('firstplay'), this.tech_.setCurrentTime(i.end(0))
              }
              return (this.hasPlayed_ = !0), this.load(), !0
            }),
            (i.handleSourceOpen_ = function () {
              if ((this.tryToCreateSourceBuffers_(), this.tech_.autoplay())) {
                var e = this.tech_.play()
                'undefined' !== typeof e && 'function' === typeof e.then && e.then(null, function (e) {})
              }
              this.trigger('sourceopen')
            }),
            (i.handleSourceEnded_ = function () {
              if (this.inbandTextTracks_.metadataTrack_) {
                var e = this.inbandTextTracks_.metadataTrack_.cues
                if (e && e.length) {
                  var t = this.duration()
                  e[e.length - 1].endTime = isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t
                }
              }
            }),
            (i.handleDurationChange_ = function () {
              this.tech_.trigger('durationchange')
            }),
            (i.onEndOfStream = function () {
              var e = this.mainSegmentLoader_.ended_
              if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                var t = this.mainSegmentLoader_.getCurrentMediaInfo_()
                e = !t || t.hasVideo ? e && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_
              }
              e && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream())
            }),
            (i.stuckAtPlaylistEnd_ = function (e) {
              if (!this.seekable().length) return !1
              var t = this.syncController_.getExpiredTime(e, this.duration())
              if (null === t) return !1
              var i = eo.Playlist.playlistEnd(e, t),
                n = this.tech_.currentTime(),
                r = this.tech_.buffered()
              if (!r.length) return i - n <= Yr
              var a = r.end(r.length - 1)
              return a - n <= Yr && i - a <= Yr
            }),
            (i.blacklistCurrentPlaylist = function (e, t) {
              void 0 === e && (e = {})
              var i = e.playlist || this.masterPlaylistLoader_.media()
              if (((t = t || e.blacklistDuration || this.blacklistDuration), !i))
                return (
                  (this.error = e),
                  void ('open' !== this.mediaSource.readyState
                    ? this.trigger('error')
                    : this.sourceUpdater_.endOfStream('network'))
                )
              i.playlistErrors_++
              var n,
                r = this.masterPlaylistLoader_.master.playlists,
                a = r.filter(ma),
                s = 1 === a.length && a[0] === i
              if (1 === r.length && t !== 1 / 0)
                return (
                  Wr.log.warn(
                    'Problem encountered with playlist ' + i.id + '. Trying again since it is the only playlist.',
                  ),
                  this.tech_.trigger('retryplaylist'),
                  this.masterPlaylistLoader_.load(s)
                )
              if (s) {
                var o = !1
                r.forEach(function (e) {
                  if (e !== i) {
                    var t = e.excludeUntil
                    'undefined' !== typeof t && t !== 1 / 0 && ((o = !0), delete e.excludeUntil)
                  }
                }),
                  o &&
                    (Wr.log.warn(
                      'Removing other playlists from the exclusion list because the last rendition is about to be excluded.',
                    ),
                    this.tech_.trigger('retryplaylist'))
              }
              ;(n = i.playlistErrors_ > this.maxPlaylistRetries ? 1 / 0 : Date.now() + 1e3 * t),
                (i.excludeUntil = n),
                e.reason && (i.lastExcludeReason_ = e.reason),
                this.tech_.trigger('blacklistplaylist'),
                this.tech_.trigger({ type: 'usage', name: 'vhs-rendition-blacklisted' }),
                this.tech_.trigger({ type: 'usage', name: 'hls-rendition-blacklisted' })
              var l = this.selectPlaylist()
              if (!l)
                return (
                  (this.error = 'Playback cannot continue. No available working or supported playlists.'),
                  void this.trigger('error')
                )
              var u = e.internal ? this.logger_ : Wr.log.warn,
                d = e.message ? ' ' + e.message : ''
              u(
                (e.internal ? 'Internal problem' : 'Problem') +
                  ' encountered with playlist ' +
                  i.id +
                  '.' +
                  d +
                  ' Switching to playlist ' +
                  l.id +
                  '.',
              ),
                l.attributes.AUDIO !== i.attributes.AUDIO && this.delegateLoaders_('audio', ['abort', 'pause']),
                l.attributes.SUBTITLES !== i.attributes.SUBTITLES &&
                  this.delegateLoaders_('subtitle', ['abort', 'pause']),
                this.delegateLoaders_('main', ['abort', 'pause'])
              var c = (l.targetDuration / 2) * 1e3 || 5e3,
                h = 'number' === typeof l.lastRequest && Date.now() - l.lastRequest <= c
              return this.switchMedia_(l, 'exclude', s || h)
            }),
            (i.pauseLoading = function () {
              this.delegateLoaders_('all', ['abort', 'pause']), this.stopABRTimer_()
            }),
            (i.delegateLoaders_ = function (e, t) {
              var i = this,
                n = [],
                r = 'all' === e
              ;(r || 'main' === e) && n.push(this.masterPlaylistLoader_)
              var a = []
              ;(r || 'audio' === e) && a.push('AUDIO'),
                (r || 'subtitle' === e) && (a.push('CLOSED-CAPTIONS'), a.push('SUBTITLES')),
                a.forEach(function (e) {
                  var t = i.mediaTypes_[e] && i.mediaTypes_[e].activePlaylistLoader
                  t && n.push(t)
                }),
                ['main', 'audio', 'subtitle'].forEach(function (t) {
                  var r = i[t + 'SegmentLoader_']
                  !r || (e !== t && 'all' !== e) || n.push(r)
                }),
                n.forEach(function (e) {
                  return t.forEach(function (t) {
                    'function' === typeof e[t] && e[t]()
                  })
                })
            }),
            (i.setCurrentTime = function (e) {
              var t = Jr(this.tech_.buffered(), e)
              return this.masterPlaylistLoader_ &&
                this.masterPlaylistLoader_.media() &&
                this.masterPlaylistLoader_.media().segments
                ? t && t.length
                  ? e
                  : (this.mainSegmentLoader_.resetEverything(),
                    this.mainSegmentLoader_.abort(),
                    this.mediaTypes_.AUDIO.activePlaylistLoader &&
                      (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()),
                    this.mediaTypes_.SUBTITLES.activePlaylistLoader &&
                      (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()),
                    void this.load())
                : 0
            }),
            (i.duration = function () {
              if (!this.masterPlaylistLoader_) return 0
              var e = this.masterPlaylistLoader_.media()
              return e
                ? e.endList
                  ? this.mediaSource
                    ? this.mediaSource.duration
                    : eo.Playlist.duration(e)
                  : 1 / 0
                : 0
            }),
            (i.seekable = function () {
              return this.seekable_
            }),
            (i.onSyncInfoUpdate_ = function () {
              var e
              if (this.masterPlaylistLoader_) {
                var t = this.masterPlaylistLoader_.media()
                if (t) {
                  var i = this.syncController_.getExpiredTime(t, this.duration())
                  if (null !== i) {
                    var n = this.masterPlaylistLoader_.master,
                      r = eo.Playlist.seekable(t, i, eo.Playlist.liveEdgeDelay(n, t))
                    if (0 !== r.length) {
                      if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                        if (
                          ((t = this.mediaTypes_.AUDIO.activePlaylistLoader.media()),
                          null === (i = this.syncController_.getExpiredTime(t, this.duration())))
                        )
                          return
                        if (0 === (e = eo.Playlist.seekable(t, i, eo.Playlist.liveEdgeDelay(n, t))).length) return
                      }
                      var a, s
                      this.seekable_ &&
                        this.seekable_.length &&
                        ((a = this.seekable_.end(0)), (s = this.seekable_.start(0))),
                        e
                          ? e.start(0) > r.end(0) || r.start(0) > e.end(0)
                            ? (this.seekable_ = r)
                            : (this.seekable_ = Wr.createTimeRanges([
                                [
                                  e.start(0) > r.start(0) ? e.start(0) : r.start(0),
                                  e.end(0) < r.end(0) ? e.end(0) : r.end(0),
                                ],
                              ]))
                          : (this.seekable_ = r),
                        (this.seekable_ &&
                          this.seekable_.length &&
                          this.seekable_.end(0) === a &&
                          this.seekable_.start(0) === s) ||
                          (this.logger_('seekable updated [' + ta(this.seekable_) + ']'),
                          this.tech_.trigger('seekablechanged'))
                    }
                  }
                }
              }
            }),
            (i.updateDuration = function (e) {
              if (
                (this.updateDuration_ &&
                  (this.mediaSource.removeEventListener('sourceopen', this.updateDuration_),
                  (this.updateDuration_ = null)),
                'open' !== this.mediaSource.readyState)
              )
                return (
                  (this.updateDuration_ = this.updateDuration.bind(this, e)),
                  void this.mediaSource.addEventListener('sourceopen', this.updateDuration_)
                )
              if (e) {
                var t = this.seekable()
                if (!t.length) return
                ;(isNaN(this.mediaSource.duration) || this.mediaSource.duration < t.end(t.length - 1)) &&
                  this.sourceUpdater_.setDuration(t.end(t.length - 1))
              } else {
                var i = this.tech_.buffered(),
                  n = eo.Playlist.duration(this.masterPlaylistLoader_.media())
                i.length > 0 && (n = Math.max(n, i.end(i.length - 1))),
                  this.mediaSource.duration !== n && this.sourceUpdater_.setDuration(n)
              }
            }),
            (i.dispose = function () {
              var e = this
              this.trigger('dispose'),
                this.decrypter_.terminate(),
                this.masterPlaylistLoader_.dispose(),
                this.mainSegmentLoader_.dispose(),
                this.loadOnPlay_ && this.tech_.off('play', this.loadOnPlay_),
                ['AUDIO', 'SUBTITLES'].forEach(function (t) {
                  var i = e.mediaTypes_[t].groups
                  for (var n in i)
                    i[n].forEach(function (e) {
                      e.playlistLoader && e.playlistLoader.dispose()
                    })
                }),
                this.audioSegmentLoader_.dispose(),
                this.subtitleSegmentLoader_.dispose(),
                this.sourceUpdater_.dispose(),
                this.timelineChangeController_.dispose(),
                this.stopABRTimer_(),
                this.updateDuration_ && this.mediaSource.removeEventListener('sourceopen', this.updateDuration_),
                this.mediaSource.removeEventListener('durationchange', this.handleDurationChange_),
                this.mediaSource.removeEventListener('sourceopen', this.handleSourceOpen_),
                this.mediaSource.removeEventListener('sourceended', this.handleSourceEnded_),
                this.off()
            }),
            (i.master = function () {
              return this.masterPlaylistLoader_.master
            }),
            (i.media = function () {
              return this.masterPlaylistLoader_.media() || this.initialMedia_
            }),
            (i.areMediaTypesKnown_ = function () {
              var e = !!this.mediaTypes_.AUDIO.activePlaylistLoader,
                t = !!this.mainSegmentLoader_.getCurrentMediaInfo_(),
                i = !e || !!this.audioSegmentLoader_.getCurrentMediaInfo_()
              return !(!t || !i)
            }),
            (i.getCodecsOrExclude_ = function () {
              var e = this,
                t = {
                  main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {},
                  audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {},
                }
              t.video = t.main
              var i = Rs(this.master(), this.media()),
                n = {},
                r = !!this.mediaTypes_.AUDIO.activePlaylistLoader
              if (
                (t.main.hasVideo && (n.video = i.video || t.main.videoCodec || k.xz),
                t.main.isMuxed && (n.video += ',' + (i.audio || t.main.audioCodec || k.lA)),
                ((t.main.hasAudio && !t.main.isMuxed) || t.audio.hasAudio || r) &&
                  ((n.audio = i.audio || t.main.audioCodec || t.audio.audioCodec || k.lA),
                  (t.audio.isFmp4 = t.main.hasAudio && !t.main.isMuxed ? t.main.isFmp4 : t.audio.isFmp4)),
                n.audio || n.video)
              ) {
                var a,
                  s = {}
                if (
                  (['video', 'audio'].forEach(function (e) {
                    if (n.hasOwnProperty(e) && ((r = t[e].isFmp4), (o = n[e]), !(r ? (0, k.p7)(o) : (0, k.Hi)(o)))) {
                      var i = t[e].isFmp4 ? 'browser' : 'muxer'
                      ;(s[i] = s[i] || []), s[i].push(n[e]), 'audio' === e && (a = i)
                    }
                    var r, o
                  }),
                  r && a && this.media().attributes.AUDIO)
                ) {
                  var o = this.media().attributes.AUDIO
                  this.master().playlists.forEach(function (t) {
                    ;(t.attributes && t.attributes.AUDIO) === o && t !== e.media() && (t.excludeUntil = 1 / 0)
                  }),
                    this.logger_(
                      'excluding audio group ' + o + ' as ' + a + ' does not support codec(s): "' + n.audio + '"',
                    )
                }
                if (!Object.keys(s).length) {
                  if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
                    var l = []
                    if (
                      (['video', 'audio'].forEach(function (t) {
                        var i = ((0, k.kS)(e.sourceUpdater_.codecs[t] || '')[0] || {}).type,
                          r = ((0, k.kS)(n[t] || '')[0] || {}).type
                        i &&
                          r &&
                          i.toLowerCase() !== r.toLowerCase() &&
                          l.push('"' + e.sourceUpdater_.codecs[t] + '" -> "' + n[t] + '"')
                      }),
                      l.length)
                    )
                      return void this.blacklistCurrentPlaylist({
                        playlist: this.media(),
                        message: 'Codec switching not supported: ' + l.join(', ') + '.',
                        blacklistDuration: 1 / 0,
                        internal: !0,
                      })
                  }
                  return n
                }
                var u =
                  Object.keys(s).reduce(function (e, t) {
                    return e && (e += ', '), (e += t + ' does not support codec(s): "' + s[t].join(',') + '"')
                  }, '') + '.'
                this.blacklistCurrentPlaylist({
                  playlist: this.media(),
                  internal: !0,
                  message: u,
                  blacklistDuration: 1 / 0,
                })
              } else
                this.blacklistCurrentPlaylist({
                  playlist: this.media(),
                  message: 'Could not determine codecs for playlist.',
                  blacklistDuration: 1 / 0,
                })
            }),
            (i.tryToCreateSourceBuffers_ = function () {
              if (
                'open' === this.mediaSource.readyState &&
                !this.sourceUpdater_.hasCreatedSourceBuffers() &&
                this.areMediaTypesKnown_()
              ) {
                var e = this.getCodecsOrExclude_()
                if (e) {
                  this.sourceUpdater_.createSourceBuffers(e)
                  var t = [e.video, e.audio].filter(Boolean).join(',')
                  this.excludeIncompatibleVariants_(t)
                }
              }
            }),
            (i.excludeUnsupportedVariants_ = function () {
              var e = this,
                t = this.master().playlists,
                i = []
              Object.keys(t).forEach(function (n) {
                var r = t[n]
                if (-1 === i.indexOf(r.id)) {
                  i.push(r.id)
                  var a = Rs(e.master, r),
                    s = []
                  !a.audio || (0, k.Hi)(a.audio) || (0, k.p7)(a.audio) || s.push('audio codec ' + a.audio),
                    !a.video || (0, k.Hi)(a.video) || (0, k.p7)(a.video) || s.push('video codec ' + a.video),
                    a.text && 'stpp.ttml.im1t' === a.text && s.push('text codec ' + a.text),
                    s.length &&
                      ((r.excludeUntil = 1 / 0), e.logger_('excluding ' + r.id + ' for unsupported: ' + s.join(', ')))
                }
              })
            }),
            (i.excludeIncompatibleVariants_ = function (e) {
              var t = this,
                i = [],
                n = this.master().playlists,
                r = Ds((0, k.kS)(e)),
                a = Ms(r),
                s = (r.video && (0, k.kS)(r.video)[0]) || null,
                o = (r.audio && (0, k.kS)(r.audio)[0]) || null
              Object.keys(n).forEach(function (e) {
                var r = n[e]
                if (-1 === i.indexOf(r.id) && r.excludeUntil !== 1 / 0) {
                  i.push(r.id)
                  var l = [],
                    u = Rs(t.masterPlaylistLoader_.master, r),
                    d = Ms(u)
                  if (u.audio || u.video) {
                    if (
                      (d !== a && l.push('codec count "' + d + '" !== "' + a + '"'), !t.sourceUpdater_.canChangeType())
                    ) {
                      var c = (u.video && (0, k.kS)(u.video)[0]) || null,
                        h = (u.audio && (0, k.kS)(u.audio)[0]) || null
                      c &&
                        s &&
                        c.type.toLowerCase() !== s.type.toLowerCase() &&
                        l.push('video codec "' + c.type + '" !== "' + s.type + '"'),
                        h &&
                          o &&
                          h.type.toLowerCase() !== o.type.toLowerCase() &&
                          l.push('audio codec "' + h.type + '" !== "' + o.type + '"')
                    }
                    l.length && ((r.excludeUntil = 1 / 0), t.logger_('blacklisting ' + r.id + ': ' + l.join(' && ')))
                  }
                }
              })
            }),
            (i.updateAdCues_ = function (e) {
              var t = 0,
                i = this.seekable()
              i.length && (t = i.start(0)),
                (function (e, t, i) {
                  if ((void 0 === i && (i = 0), e.segments))
                    for (var n, r = i, s = 0; s < e.segments.length; s++) {
                      var o = e.segments[s]
                      if ((n || (n = Co(t, r + o.duration / 2)), n)) {
                        if ('cueIn' in o) {
                          ;(n.endTime = r), (n.adEndTime = r), (r += o.duration), (n = null)
                          continue
                        }
                        if (r < n.endTime) {
                          r += o.duration
                          continue
                        }
                        n.endTime += o.duration
                      } else if (
                        ('cueOut' in o &&
                          (((n = new (a().VTTCue)(r, r + o.duration, o.cueOut)).adStartTime = r),
                          (n.adEndTime = r + parseFloat(o.cueOut)),
                          t.addCue(n)),
                        'cueOutCont' in o)
                      ) {
                        var l = o.cueOutCont.split('/').map(parseFloat),
                          u = l[0],
                          d = l[1]
                        ;((n = new (a().VTTCue)(r, r + o.duration, '')).adStartTime = r - u),
                          (n.adEndTime = n.adStartTime + d),
                          t.addCue(n)
                      }
                      r += o.duration
                    }
                })(e, this.cueTagsTrack_, t)
            }),
            (i.goalBufferLength = function () {
              var e = this.tech_.currentTime(),
                t = ns.GOAL_BUFFER_LENGTH,
                i = ns.GOAL_BUFFER_LENGTH_RATE,
                n = Math.max(t, ns.MAX_GOAL_BUFFER_LENGTH)
              return Math.min(t + e * i, n)
            }),
            (i.bufferLowWaterLine = function () {
              var e = this.tech_.currentTime(),
                t = ns.BUFFER_LOW_WATER_LINE,
                i = ns.BUFFER_LOW_WATER_LINE_RATE,
                n = Math.max(t, ns.MAX_BUFFER_LOW_WATER_LINE),
                r = Math.max(t, ns.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE)
              return Math.min(t + e * i, this.experimentalBufferBasedABR ? r : n)
            }),
            (i.bufferHighWaterLine = function () {
              return ns.BUFFER_HIGH_WATER_LINE
            }),
            t
          )
        })(Wr.EventTarget),
        Ho = function (e, t, i) {
          var n,
            r,
            a,
            s = e.masterPlaylistController_,
            o = s[(e.options_.smoothQualityChange ? 'smooth' : 'fast') + 'QualityChange_'].bind(s)
          if (t.attributes) {
            var l = t.attributes.RESOLUTION
            ;(this.width = l && l.width), (this.height = l && l.height), (this.bandwidth = t.attributes.BANDWIDTH)
          }
          ;(this.codecs = Rs(s.master(), t)),
            (this.playlist = t),
            (this.id = i),
            (this.enabled =
              ((n = e.playlists),
              (r = t.id),
              (a = o),
              function (e) {
                var t = n.master.playlists[r],
                  i = fa(t),
                  s = ma(t)
                return 'undefined' === typeof e
                  ? s
                  : (e ? delete t.disabled : (t.disabled = !0),
                    e === s || i || (a(), e ? n.trigger('renditionenabled') : n.trigger('renditiondisabled')),
                    e)
              }))
        },
        qo = ['seeking', 'seeked', 'pause', 'playing', 'error'],
        Vo = (function () {
          function e(e) {
            var t = this
            ;(this.masterPlaylistController_ = e.masterPlaylistController),
              (this.tech_ = e.tech),
              (this.seekable = e.seekable),
              (this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow),
              (this.liveRangeSafeTimeDelta = e.liveRangeSafeTimeDelta),
              (this.media = e.media),
              (this.consecutiveUpdates = 0),
              (this.lastRecordedTime = null),
              (this.timer_ = null),
              (this.checkCurrentTimeTimeout_ = null),
              (this.logger_ = Qr('PlaybackWatcher')),
              this.logger_('initialize')
            var i = function () {
                return t.monitorCurrentTime_()
              },
              n = function () {
                return t.monitorCurrentTime_()
              },
              r = function () {
                return t.techWaiting_()
              },
              s = function () {
                return t.cancelTimer_()
              },
              o = function () {
                return t.fixesBadSeeks_()
              },
              l = this.masterPlaylistController_,
              u = ['main', 'subtitle', 'audio'],
              d = {}
            u.forEach(function (e) {
              ;(d[e] = {
                reset: function () {
                  return t.resetSegmentDownloads_(e)
                },
                updateend: function () {
                  return t.checkSegmentDownloads_(e)
                },
              }),
                l[e + 'SegmentLoader_'].on('appendsdone', d[e].updateend),
                l[e + 'SegmentLoader_'].on('playlistupdate', d[e].reset),
                t.tech_.on(['seeked', 'seeking'], d[e].reset)
            }),
              this.tech_.on('seekablechanged', o),
              this.tech_.on('waiting', r),
              this.tech_.on(qo, s),
              this.tech_.on('canplay', n),
              this.tech_.one('play', i),
              (this.dispose = function () {
                t.logger_('dispose'),
                  t.tech_.off('seekablechanged', o),
                  t.tech_.off('waiting', r),
                  t.tech_.off(qo, s),
                  t.tech_.off('canplay', n),
                  t.tech_.off('play', i),
                  u.forEach(function (e) {
                    l[e + 'SegmentLoader_'].off('appendsdone', d[e].updateend),
                      l[e + 'SegmentLoader_'].off('playlistupdate', d[e].reset),
                      t.tech_.off(['seeked', 'seeking'], d[e].reset)
                  }),
                  t.checkCurrentTimeTimeout_ && a().clearTimeout(t.checkCurrentTimeTimeout_),
                  t.cancelTimer_()
              })
          }
          var t = e.prototype
          return (
            (t.monitorCurrentTime_ = function () {
              this.checkCurrentTime_(),
                this.checkCurrentTimeTimeout_ && a().clearTimeout(this.checkCurrentTimeTimeout_),
                (this.checkCurrentTimeTimeout_ = a().setTimeout(this.monitorCurrentTime_.bind(this), 250))
            }),
            (t.resetSegmentDownloads_ = function (e) {
              var t = this.masterPlaylistController_[e + 'SegmentLoader_']
              this[e + 'StalledDownloads_'] > 0 &&
                this.logger_('resetting possible stalled download count for ' + e + ' loader'),
                (this[e + 'StalledDownloads_'] = 0),
                (this[e + 'Buffered_'] = t.buffered_())
            }),
            (t.checkSegmentDownloads_ = function (e) {
              var t = this.masterPlaylistController_,
                i = t[e + 'SegmentLoader_'],
                n = i.buffered_(),
                r = (function (e, t) {
                  if (e === t) return !1
                  if ((!e && t) || (!t && e)) return !0
                  if (e.length !== t.length) return !0
                  for (var i = 0; i < e.length; i++) if (e.start(i) !== t.start(i) || e.end(i) !== t.end(i)) return !0
                  return !1
                })(this[e + 'Buffered_'], n)
              ;(this[e + 'Buffered_'] = n),
                r
                  ? this.resetSegmentDownloads_(e)
                  : (this[e + 'StalledDownloads_']++,
                    this.logger_(
                      'found #' +
                        this[e + 'StalledDownloads_'] +
                        ' ' +
                        e +
                        ' appends that did not increase buffer (possible stalled download)',
                      { playlistId: i.playlist_ && i.playlist_.id, buffered: ia(n) },
                    ),
                    this[e + 'StalledDownloads_'] < 10 ||
                      (this.logger_(e + ' loader stalled download exclusion'),
                      this.resetSegmentDownloads_(e),
                      this.tech_.trigger({ type: 'usage', name: 'vhs-' + e + '-download-exclusion' }),
                      'subtitle' !== e &&
                        t.blacklistCurrentPlaylist(
                          { message: 'Excessive ' + e + ' segment downloading detected.' },
                          1 / 0,
                        )))
            }),
            (t.checkCurrentTime_ = function () {
              if (this.tech_.seeking() && this.fixesBadSeeks_())
                return (this.consecutiveUpdates = 0), void (this.lastRecordedTime = this.tech_.currentTime())
              if (!this.tech_.paused() && !this.tech_.seeking()) {
                var e = this.tech_.currentTime(),
                  t = this.tech_.buffered()
                if (this.lastRecordedTime === e && (!t.length || e + Yr >= t.end(t.length - 1)))
                  return this.techWaiting_()
                this.consecutiveUpdates >= 5 && e === this.lastRecordedTime
                  ? (this.consecutiveUpdates++, this.waiting_())
                  : e === this.lastRecordedTime
                  ? this.consecutiveUpdates++
                  : ((this.consecutiveUpdates = 0), (this.lastRecordedTime = e))
              }
            }),
            (t.cancelTimer_ = function () {
              ;(this.consecutiveUpdates = 0),
                this.timer_ && (this.logger_('cancelTimer_'), clearTimeout(this.timer_)),
                (this.timer_ = null)
            }),
            (t.fixesBadSeeks_ = function () {
              if (!this.tech_.seeking()) return !1
              var e,
                t = this.seekable(),
                i = this.tech_.currentTime()
              this.afterSeekableWindow_(t, i, this.media(), this.allowSeeksWithinUnsafeLiveWindow) &&
                (e = t.end(t.length - 1))
              if (this.beforeSeekableWindow_(t, i)) {
                var n = t.start(0)
                e = n + (n === t.end(0) ? 0 : Yr)
              }
              if ('undefined' !== typeof e)
                return (
                  this.logger_(
                    'Trying to seek outside of seekable at time ' +
                      i +
                      ' with seekable range ' +
                      ta(t) +
                      '. Seeking to ' +
                      e +
                      '.',
                  ),
                  this.tech_.setCurrentTime(e),
                  !0
                )
              var r = this.tech_.buffered()
              return (
                !!(function (e) {
                  var t = e.buffered,
                    i = e.targetDuration,
                    n = e.currentTime
                  return !!t.length && !(t.end(0) - t.start(0) < 2 * i) && !(n > t.start(0)) && t.start(0) - n < i
                })({ buffered: r, targetDuration: this.media().targetDuration, currentTime: i }) &&
                ((e = r.start(0) + Yr),
                this.logger_(
                  'Buffered region starts (' +
                    r.start(0) +
                    ')  just beyond seek point (' +
                    i +
                    '). Seeking to ' +
                    e +
                    '.',
                ),
                this.tech_.setCurrentTime(e),
                !0)
              )
            }),
            (t.waiting_ = function () {
              if (!this.techWaiting_()) {
                var e = this.tech_.currentTime(),
                  t = this.tech_.buffered(),
                  i = Jr(t, e)
                return i.length && e + 3 <= i.end(0)
                  ? (this.cancelTimer_(),
                    this.tech_.setCurrentTime(e),
                    this.logger_(
                      'Stopped at ' +
                        e +
                        ' while inside a buffered region [' +
                        i.start(0) +
                        ' -> ' +
                        i.end(0) +
                        ']. Attempting to resume playback by seeking to the current time.',
                    ),
                    this.tech_.trigger({ type: 'usage', name: 'vhs-unknown-waiting' }),
                    void this.tech_.trigger({ type: 'usage', name: 'hls-unknown-waiting' }))
                  : void 0
              }
            }),
            (t.techWaiting_ = function () {
              var e = this.seekable(),
                t = this.tech_.currentTime()
              if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0
              if (this.tech_.seeking() || null !== this.timer_) return !0
              if (this.beforeSeekableWindow_(e, t)) {
                var i = e.end(e.length - 1)
                return (
                  this.logger_('Fell out of live window at time ' + t + '. Seeking to live point (seekable end) ' + i),
                  this.cancelTimer_(),
                  this.tech_.setCurrentTime(i),
                  this.tech_.trigger({ type: 'usage', name: 'vhs-live-resync' }),
                  this.tech_.trigger({ type: 'usage', name: 'hls-live-resync' }),
                  !0
                )
              }
              var n = this.tech_.vhs.masterPlaylistController_.sourceUpdater_,
                r = this.tech_.buffered()
              if (
                this.videoUnderflow_({
                  audioBuffered: n.audioBuffered(),
                  videoBuffered: n.videoBuffered(),
                  currentTime: t,
                })
              )
                return (
                  this.cancelTimer_(),
                  this.tech_.setCurrentTime(t),
                  this.tech_.trigger({ type: 'usage', name: 'vhs-video-underflow' }),
                  this.tech_.trigger({ type: 'usage', name: 'hls-video-underflow' }),
                  !0
                )
              var a = ea(r, t)
              if (a.length > 0) {
                var s = a.start(0) - t
                return (
                  this.logger_('Stopped at ' + t + ', setting timer for ' + s + ', seeking to ' + a.start(0)),
                  this.cancelTimer_(),
                  (this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * s, t)),
                  !0
                )
              }
              return !1
            }),
            (t.afterSeekableWindow_ = function (e, t, i, n) {
              if ((void 0 === n && (n = !1), !e.length)) return !1
              var r = e.end(e.length - 1) + Yr
              return !i.endList && n && (r = e.end(e.length - 1) + 3 * i.targetDuration), t > r
            }),
            (t.beforeSeekableWindow_ = function (e, t) {
              return !!(e.length && e.start(0) > 0 && t < e.start(0) - this.liveRangeSafeTimeDelta)
            }),
            (t.videoUnderflow_ = function (e) {
              var t = e.videoBuffered,
                i = e.audioBuffered,
                n = e.currentTime
              if (t) {
                var r
                if (t.length && i.length) {
                  var a = Jr(t, n - 3),
                    s = Jr(t, n),
                    o = Jr(i, n)
                  o.length && !s.length && a.length && (r = { start: a.end(0), end: o.end(0) })
                } else {
                  ea(t, n).length || (r = this.gapFromVideoUnderflow_(t, n))
                }
                return (
                  !!r &&
                  (this.logger_(
                    'Encountered a gap in video from ' + r.start + ' to ' + r.end + '. Seeking to current time ' + n,
                  ),
                  !0)
                )
              }
            }),
            (t.skipTheGap_ = function (e) {
              var t = this.tech_.buffered(),
                i = this.tech_.currentTime(),
                n = ea(t, i)
              this.cancelTimer_(),
                0 !== n.length &&
                  i === e &&
                  (this.logger_(
                    'skipTheGap_:',
                    'currentTime:',
                    i,
                    'scheduled currentTime:',
                    e,
                    'nextRange start:',
                    n.start(0),
                  ),
                  this.tech_.setCurrentTime(n.start(0) + Xr),
                  this.tech_.trigger({ type: 'usage', name: 'vhs-gap-skip' }),
                  this.tech_.trigger({ type: 'usage', name: 'hls-gap-skip' }))
            }),
            (t.gapFromVideoUnderflow_ = function (e, t) {
              for (
                var i = (function (e) {
                    if (e.length < 2) return Wr.createTimeRanges()
                    for (var t = [], i = 1; i < e.length; i++) {
                      var n = e.end(i - 1),
                        r = e.start(i)
                      t.push([n, r])
                    }
                    return Wr.createTimeRanges(t)
                  })(e),
                  n = 0;
                n < i.length;
                n++
              ) {
                var r = i.start(n),
                  a = i.end(n)
                if (t - r < 4 && t - r > 2) return { start: r, end: a }
              }
              return null
            }),
            e
          )
        })(),
        Wo = {
          errorInterval: 30,
          getSource: function (e) {
            return e(this.tech({ IWillNotUseThisInPlugins: !0 }).currentSource_ || this.currentSource())
          },
        },
        zo = function e(t, i) {
          var n = 0,
            r = 0,
            a = Wr.mergeOptions(Wo, i)
          t.ready(function () {
            t.trigger({ type: 'usage', name: 'vhs-error-reload-initialized' }),
              t.trigger({ type: 'usage', name: 'hls-error-reload-initialized' })
          })
          var s = function () {
              r && t.currentTime(r)
            },
            o = function (e) {
              null !== e &&
                void 0 !== e &&
                ((r = (t.duration() !== 1 / 0 && t.currentTime()) || 0),
                t.one('loadedmetadata', s),
                t.src(e),
                t.trigger({ type: 'usage', name: 'vhs-error-reload' }),
                t.trigger({ type: 'usage', name: 'hls-error-reload' }),
                t.play())
            },
            l = function () {
              return Date.now() - n < 1e3 * a.errorInterval
                ? (t.trigger({ type: 'usage', name: 'vhs-error-reload-canceled' }),
                  void t.trigger({ type: 'usage', name: 'hls-error-reload-canceled' }))
                : a.getSource && 'function' === typeof a.getSource
                ? ((n = Date.now()), a.getSource.call(t, o))
                : void Wr.log.error('ERROR: reloadSourceOnError - The option getSource must be a function!')
            },
            u = function e() {
              t.off('loadedmetadata', s), t.off('error', l), t.off('dispose', e)
            }
          t.on('error', l),
            t.on('dispose', u),
            (t.reloadSourceOnError = function (i) {
              u(), e(t, i)
            })
        },
        Go = function (e) {
          zo(this, e)
        },
        Ko = '2.10.2',
        Zo = {
          PlaylistLoader: Ra,
          Playlist: ba,
          utils: Za,
          STANDARD_PLAYLIST_SELECTOR: qs,
          INITIAL_PLAYLIST_SELECTOR: function () {
            var e = this,
              t = this.playlists.master.playlists.filter(ba.isEnabled)
            return (
              Fs(t, function (e, t) {
                return js(e, t)
              }),
              t.filter(function (t) {
                return !!Rs(e.playlists.master, t).video
              })[0] || null
            )
          },
          lastBandwidthSelector: qs,
          movingAverageBandwidthSelector: function (e) {
            var t = -1,
              i = -1
            if (e < 0 || e > 1) throw new Error('Moving average bandwidth decay must be between 0 and 1.')
            return function () {
              var n = (this.useDevicePixelRatio && a().devicePixelRatio) || 1
              return (
                t < 0 && ((t = this.systemBandwidth), (i = this.systemBandwidth)),
                this.systemBandwidth > 0 &&
                  this.systemBandwidth !== i &&
                  ((t = e * this.systemBandwidth + (1 - e) * t), (i = this.systemBandwidth)),
                Hs(
                  this.playlists.master,
                  t,
                  parseInt(Ns(this.tech_.el(), 'width'), 10) * n,
                  parseInt(Ns(this.tech_.el(), 'height'), 10) * n,
                  this.limitRenditionByPlayerDimensions,
                  this.masterPlaylistController_,
                )
              )
            }
          },
          comparePlaylistBandwidth: js,
          comparePlaylistResolution: function (e, t) {
            var i, n
            return (
              e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width),
              (i = i || a().Number.MAX_VALUE),
              t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (n = t.attributes.RESOLUTION.width),
              i === (n = n || a().Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH
                ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH
                : i - n
            )
          },
          xhr: Fa(),
        }
      Object.keys(ns).forEach(function (e) {
        Object.defineProperty(Zo, e, {
          get: function () {
            return Wr.log.warn('using Vhs.' + e + ' is UNSAFE be sure you know what you are doing'), ns[e]
          },
          set: function (t) {
            Wr.log.warn('using Vhs.' + e + ' is UNSAFE be sure you know what you are doing'),
              'number' !== typeof t || t < 0
                ? Wr.log.warn('value of Vhs.' + e + ' must be greater than or equal to 0')
                : (ns[e] = t)
          },
        })
      })
      var Qo = 'videojs-vhs',
        Xo = function (e, t) {
          for (var i = t.media(), n = -1, r = 0; r < e.length; r++)
            if (e[r].id === i.id) {
              n = r
              break
            }
          ;(e.selectedIndex_ = n), e.trigger({ selectedIndex: n, type: 'change' })
        }
      Zo.canPlaySource = function () {
        return Wr.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
      }
      var Yo = function (e) {
          var t = e.player,
            i = e.sourceKeySystems,
            n = e.audioMedia,
            r = e.mainPlaylists
          if (!t.eme.initializeMediaKeys) return Promise.resolve()
          var a = (function (e, t) {
              return e.reduce(function (e, i) {
                if (!i.contentProtection) return e
                var n = t.reduce(function (e, t) {
                  var n = i.contentProtection[t]
                  return n && n.pssh && (e[t] = { pssh: n.pssh }), e
                }, {})
                return Object.keys(n).length && e.push(n), e
              }, [])
            })(n ? r.concat([n]) : r, Object.keys(i)),
            s = [],
            o = []
          return (
            a.forEach(function (e) {
              o.push(
                new Promise(function (e, i) {
                  t.tech_.one('keysessioncreated', e)
                }),
              ),
                s.push(
                  new Promise(function (i, n) {
                    t.eme.initializeMediaKeys({ keySystems: e }, function (e) {
                      e ? n(e) : i()
                    })
                  }),
                )
            }),
            Promise.race([Promise.all(s), Promise.race(o)])
          )
        },
        $o = function (e) {
          var t = e.player,
            i = (function (e, t, i) {
              if (!e) return e
              var n = {}
              t && t.attributes && t.attributes.CODECS && (n = Ds((0, k.kS)(t.attributes.CODECS))),
                i && i.attributes && i.attributes.CODECS && (n.audio = i.attributes.CODECS)
              var r = (0, k._5)(n.video),
                a = (0, k._5)(n.audio),
                s = {}
              for (var o in e)
                (s[o] = {}),
                  a && (s[o].audioContentType = a),
                  r && (s[o].videoContentType = r),
                  t.contentProtection &&
                    t.contentProtection[o] &&
                    t.contentProtection[o].pssh &&
                    (s[o].pssh = t.contentProtection[o].pssh),
                  'string' === typeof e[o] && (s[o].url = e[o])
              return Wr.mergeOptions(e, s)
            })(e.sourceKeySystems, e.media, e.audioMedia)
          return (
            !!i &&
            ((t.currentSource().keySystems = i),
            !(i && !t.eme) || (Wr.log.warn('DRM encrypted source cannot be decrypted without a DRM plugin'), !1))
          )
        },
        Jo = function () {
          if (!a().localStorage) return null
          var e = a().localStorage.getItem(Qo)
          if (!e) return null
          try {
            return JSON.parse(e)
          } catch (t) {
            return null
          }
        }
      ;(Zo.supportsNativeHls = (function () {
        if (!o() || !o().createElement) return !1
        var e = o().createElement('video')
        if (!Wr.getTech('Html5').isSupported()) return !1
        return [
          'application/vnd.apple.mpegurl',
          'audio/mpegurl',
          'audio/x-mpegurl',
          'application/x-mpegurl',
          'video/x-mpegurl',
          'video/mpegurl',
          'application/mpegurl',
        ].some(function (t) {
          return /maybe|probably/i.test(e.canPlayType(t))
        })
      })()),
        (Zo.supportsNativeDash =
          !!(o() && o().createElement && Wr.getTech('Html5').isSupported()) &&
          /maybe|probably/i.test(o().createElement('video').canPlayType('application/dash+xml'))),
        (Zo.supportsTypeNatively = function (e) {
          return 'hls' === e ? Zo.supportsNativeHls : 'dash' === e && Zo.supportsNativeDash
        }),
        (Zo.isSupported = function () {
          return Wr.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
        })
      var el = (function (e) {
          function t(t, i, n) {
            var r
            if (
              ((r = e.call(this, i, Wr.mergeOptions(n.hls, n.vhs)) || this),
              n.hls && Object.keys(n.hls).length && Wr.log.warn('Using hls options is deprecated. Use vhs instead.'),
              'number' === typeof n.initialBandwidth && (r.options_.bandwidth = n.initialBandwidth),
              (r.logger_ = Qr('VhsHandler')),
              i.options_ && i.options_.playerId)
            ) {
              var a = Wr(i.options_.playerId)
              a.hasOwnProperty('hls') ||
                Object.defineProperty(a, 'hls', {
                  get: function () {
                    return (
                      Wr.log.warn('player.hls is deprecated. Use player.tech().vhs instead.'),
                      i.trigger({ type: 'usage', name: 'hls-player-access' }),
                      (0, u.Z)(r)
                    )
                  },
                  configurable: !0,
                }),
                a.hasOwnProperty('vhs') ||
                  Object.defineProperty(a, 'vhs', {
                    get: function () {
                      return (
                        Wr.log.warn('player.vhs is deprecated. Use player.tech().vhs instead.'),
                        i.trigger({ type: 'usage', name: 'vhs-player-access' }),
                        (0, u.Z)(r)
                      )
                    },
                    configurable: !0,
                  }),
                a.hasOwnProperty('dash') ||
                  Object.defineProperty(a, 'dash', {
                    get: function () {
                      return Wr.log.warn('player.dash is deprecated. Use player.tech().vhs instead.'), (0, u.Z)(r)
                    },
                    configurable: !0,
                  }),
                (r.player_ = a)
            }
            if (
              ((r.tech_ = i),
              (r.source_ = t),
              (r.stats = {}),
              (r.ignoreNextSeekingEvent_ = !1),
              r.setOptions_(),
              r.options_.overrideNative && i.overrideNativeAudioTracks && i.overrideNativeVideoTracks)
            )
              i.overrideNativeAudioTracks(!0), i.overrideNativeVideoTracks(!0)
            else if (r.options_.overrideNative && (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks))
              throw new Error('Overriding native HLS requires emulated tracks. See https://git.io/vMpjB')
            return (
              r.on(
                o(),
                ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'],
                function (e) {
                  var t =
                    o().fullscreenElement ||
                    o().webkitFullscreenElement ||
                    o().mozFullScreenElement ||
                    o().msFullscreenElement
                  t && t.contains(r.tech_.el())
                    ? r.masterPlaylistController_.fastQualityChange_()
                    : r.masterPlaylistController_.checkABR_()
                },
              ),
              r.on(r.tech_, 'seeking', function () {
                this.ignoreNextSeekingEvent_
                  ? (this.ignoreNextSeekingEvent_ = !1)
                  : this.setCurrentTime(this.tech_.currentTime())
              }),
              r.on(r.tech_, 'error', function () {
                this.tech_.error() && this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
              }),
              r.on(r.tech_, 'play', r.play),
              r
            )
          }
          ;(0, d.Z)(t, e)
          var i = t.prototype
          return (
            (i.setOptions_ = function () {
              var e = this
              if (
                ((this.options_.withCredentials = this.options_.withCredentials || !1),
                (this.options_.handleManifestRedirects = !1 !== this.options_.handleManifestRedirects),
                (this.options_.limitRenditionByPlayerDimensions =
                  !1 !== this.options_.limitRenditionByPlayerDimensions),
                (this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1),
                (this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1),
                (this.options_.useBandwidthFromLocalStorage =
                  'undefined' !== typeof this.source_.useBandwidthFromLocalStorage
                    ? this.source_.useBandwidthFromLocalStorage
                    : this.options_.useBandwidthFromLocalStorage || !1),
                (this.options_.customTagParsers = this.options_.customTagParsers || []),
                (this.options_.customTagMappers = this.options_.customTagMappers || []),
                (this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1),
                'number' !== typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300),
                'number' !== typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage)
              ) {
                var t = Jo()
                t &&
                  t.bandwidth &&
                  ((this.options_.bandwidth = t.bandwidth),
                  this.tech_.trigger({ type: 'usage', name: 'vhs-bandwidth-from-local-storage' }),
                  this.tech_.trigger({ type: 'usage', name: 'hls-bandwidth-from-local-storage' })),
                  t &&
                    t.throughput &&
                    ((this.options_.throughput = t.throughput),
                    this.tech_.trigger({ type: 'usage', name: 'vhs-throughput-from-local-storage' }),
                    this.tech_.trigger({ type: 'usage', name: 'hls-throughput-from-local-storage' }))
              }
              'number' !== typeof this.options_.bandwidth && (this.options_.bandwidth = ns.INITIAL_BANDWIDTH),
                (this.options_.enableLowInitialPlaylist =
                  this.options_.enableLowInitialPlaylist && this.options_.bandwidth === ns.INITIAL_BANDWIDTH),
                [
                  'withCredentials',
                  'useDevicePixelRatio',
                  'limitRenditionByPlayerDimensions',
                  'bandwidth',
                  'smoothQualityChange',
                  'customTagParsers',
                  'customTagMappers',
                  'handleManifestRedirects',
                  'cacheEncryptionKeys',
                  'playlistSelector',
                  'initialPlaylistSelector',
                  'experimentalBufferBasedABR',
                  'liveRangeSafeTimeDelta',
                  'experimentalLLHLS',
                  'experimentalExactManifestTimings',
                  'experimentalLeastPixelDiffSelector',
                ].forEach(function (t) {
                  'undefined' !== typeof e.source_[t] && (e.options_[t] = e.source_[t])
                }),
                (this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions),
                (this.useDevicePixelRatio = this.options_.useDevicePixelRatio)
            }),
            (i.src = function (e, t) {
              var i = this
              if (e) {
                var n
                this.setOptions_(),
                  (this.options_.src =
                    0 === (n = this.source_.src).toLowerCase().indexOf('data:application/vnd.videojs.vhs+json,')
                      ? JSON.parse(n.substring(n.indexOf(',') + 1))
                      : n),
                  (this.options_.tech = this.tech_),
                  (this.options_.externVhs = Zo),
                  (this.options_.sourceType = (0, C.t)(t)),
                  (this.options_.seekTo = function (e) {
                    i.tech_.setCurrentTime(e)
                  }),
                  this.options_.smoothQualityChange &&
                    Wr.log.warn('smoothQualityChange is deprecated and will be removed in the next major version'),
                  (this.masterPlaylistController_ = new jo(this.options_))
                var r = Wr.mergeOptions({ liveRangeSafeTimeDelta: Yr }, this.options_, {
                  seekable: function () {
                    return i.seekable()
                  },
                  media: function () {
                    return i.masterPlaylistController_.media()
                  },
                  masterPlaylistController: this.masterPlaylistController_,
                })
                ;(this.playbackWatcher_ = new Vo(r)),
                  this.masterPlaylistController_.on('error', function () {
                    var e = Wr.players[i.tech_.options_.playerId],
                      t = i.masterPlaylistController_.error
                    'object' !== typeof t || t.code
                      ? 'string' === typeof t && (t = { message: t, code: 3 })
                      : (t.code = 3),
                      e.error(t)
                  })
                var s = this.options_.experimentalBufferBasedABR
                  ? Zo.movingAverageBandwidthSelector(0.55)
                  : Zo.STANDARD_PLAYLIST_SELECTOR
                ;(this.masterPlaylistController_.selectPlaylist = this.selectPlaylist
                  ? this.selectPlaylist.bind(this)
                  : s.bind(this)),
                  (this.masterPlaylistController_.selectInitialPlaylist = Zo.INITIAL_PLAYLIST_SELECTOR.bind(this)),
                  (this.playlists = this.masterPlaylistController_.masterPlaylistLoader_),
                  (this.mediaSource = this.masterPlaylistController_.mediaSource),
                  Object.defineProperties(this, {
                    selectPlaylist: {
                      get: function () {
                        return this.masterPlaylistController_.selectPlaylist
                      },
                      set: function (e) {
                        this.masterPlaylistController_.selectPlaylist = e.bind(this)
                      },
                    },
                    throughput: {
                      get: function () {
                        return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                      },
                      set: function (e) {
                        ;(this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e),
                          (this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1)
                      },
                    },
                    bandwidth: {
                      get: function () {
                        return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                      },
                      set: function (e) {
                        ;(this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e),
                          (this.masterPlaylistController_.mainSegmentLoader_.throughput = { rate: 0, count: 0 })
                      },
                    },
                    systemBandwidth: {
                      get: function () {
                        var e,
                          t = 1 / (this.bandwidth || 1)
                        return (e = this.throughput > 0 ? 1 / this.throughput : 0), Math.floor(1 / (t + e))
                      },
                      set: function () {
                        Wr.log.error('The "systemBandwidth" property is read-only')
                      },
                    },
                  }),
                  this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth),
                  this.options_.throughput && (this.throughput = this.options_.throughput),
                  Object.defineProperties(this.stats, {
                    bandwidth: {
                      get: function () {
                        return i.bandwidth || 0
                      },
                      enumerable: !0,
                    },
                    mediaRequests: {
                      get: function () {
                        return i.masterPlaylistController_.mediaRequests_() || 0
                      },
                      enumerable: !0,
                    },
                    mediaRequestsAborted: {
                      get: function () {
                        return i.masterPlaylistController_.mediaRequestsAborted_() || 0
                      },
                      enumerable: !0,
                    },
                    mediaRequestsTimedout: {
                      get: function () {
                        return i.masterPlaylistController_.mediaRequestsTimedout_() || 0
                      },
                      enumerable: !0,
                    },
                    mediaRequestsErrored: {
                      get: function () {
                        return i.masterPlaylistController_.mediaRequestsErrored_() || 0
                      },
                      enumerable: !0,
                    },
                    mediaTransferDuration: {
                      get: function () {
                        return i.masterPlaylistController_.mediaTransferDuration_() || 0
                      },
                      enumerable: !0,
                    },
                    mediaBytesTransferred: {
                      get: function () {
                        return i.masterPlaylistController_.mediaBytesTransferred_() || 0
                      },
                      enumerable: !0,
                    },
                    mediaSecondsLoaded: {
                      get: function () {
                        return i.masterPlaylistController_.mediaSecondsLoaded_() || 0
                      },
                      enumerable: !0,
                    },
                    mediaAppends: {
                      get: function () {
                        return i.masterPlaylistController_.mediaAppends_() || 0
                      },
                      enumerable: !0,
                    },
                    mainAppendsToLoadedData: {
                      get: function () {
                        return i.masterPlaylistController_.mainAppendsToLoadedData_() || 0
                      },
                      enumerable: !0,
                    },
                    audioAppendsToLoadedData: {
                      get: function () {
                        return i.masterPlaylistController_.audioAppendsToLoadedData_() || 0
                      },
                      enumerable: !0,
                    },
                    appendsToLoadedData: {
                      get: function () {
                        return i.masterPlaylistController_.appendsToLoadedData_() || 0
                      },
                      enumerable: !0,
                    },
                    timeToLoadedData: {
                      get: function () {
                        return i.masterPlaylistController_.timeToLoadedData_() || 0
                      },
                      enumerable: !0,
                    },
                    buffered: {
                      get: function () {
                        return ia(i.tech_.buffered())
                      },
                      enumerable: !0,
                    },
                    currentTime: {
                      get: function () {
                        return i.tech_.currentTime()
                      },
                      enumerable: !0,
                    },
                    currentSource: {
                      get: function () {
                        return i.tech_.currentSource_
                      },
                      enumerable: !0,
                    },
                    currentTech: {
                      get: function () {
                        return i.tech_.name_
                      },
                      enumerable: !0,
                    },
                    duration: {
                      get: function () {
                        return i.tech_.duration()
                      },
                      enumerable: !0,
                    },
                    master: {
                      get: function () {
                        return i.playlists.master
                      },
                      enumerable: !0,
                    },
                    playerDimensions: {
                      get: function () {
                        return i.tech_.currentDimensions()
                      },
                      enumerable: !0,
                    },
                    seekable: {
                      get: function () {
                        return ia(i.tech_.seekable())
                      },
                      enumerable: !0,
                    },
                    timestamp: {
                      get: function () {
                        return Date.now()
                      },
                      enumerable: !0,
                    },
                    videoPlaybackQuality: {
                      get: function () {
                        return i.tech_.getVideoPlaybackQuality()
                      },
                      enumerable: !0,
                    },
                  }),
                  this.tech_.one(
                    'canplay',
                    this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_),
                  ),
                  this.tech_.on('bandwidthupdate', function () {
                    i.options_.useBandwidthFromLocalStorage &&
                      (function (e) {
                        if (!a().localStorage) return !1
                        var t = Jo()
                        t = t ? Wr.mergeOptions(t, e) : e
                        try {
                          a().localStorage.setItem(Qo, JSON.stringify(t))
                        } catch (i) {
                          return !1
                        }
                      })({ bandwidth: i.bandwidth, throughput: Math.round(i.throughput) })
                  }),
                  this.masterPlaylistController_.on('selectedinitialmedia', function () {
                    var e
                    ;(e = i).representations = function () {
                      var t = e.masterPlaylistController_.master(),
                        i = Ta(t) ? e.masterPlaylistController_.getAudioTrackPlaylists_() : t.playlists
                      return i
                        ? i
                            .filter(function (e) {
                              return !fa(e)
                            })
                            .map(function (t, i) {
                              return new Ho(e, t, t.id)
                            })
                        : []
                    }
                  }),
                  this.masterPlaylistController_.sourceUpdater_.on('createdsourcebuffers', function () {
                    i.setupEme_()
                  }),
                  this.on(this.masterPlaylistController_, 'progress', function () {
                    this.tech_.trigger('progress')
                  }),
                  this.on(this.masterPlaylistController_, 'firstplay', function () {
                    this.ignoreNextSeekingEvent_ = !0
                  }),
                  this.setupQualityLevels_(),
                  this.tech_.el() &&
                    ((this.mediaSourceUrl_ = a().URL.createObjectURL(this.masterPlaylistController_.mediaSource)),
                    this.tech_.src(this.mediaSourceUrl_))
              }
            }),
            (i.setupEme_ = function () {
              var e = this,
                t = this.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader,
                i = $o({
                  player: this.player_,
                  sourceKeySystems: this.source_.keySystems,
                  media: this.playlists.media(),
                  audioMedia: t && t.media(),
                })
              this.player_.tech_.on('keystatuschange', function (t) {
                'output-restricted' === t.status &&
                  e.masterPlaylistController_.blacklistCurrentPlaylist({
                    playlist: e.masterPlaylistController_.media(),
                    message:
                      'DRM keystatus changed to ' + t.status + '. Playlist will fail to play. Check for HDCP content.',
                    blacklistDuration: 1 / 0,
                  })
              }),
                11 !== Wr.browser.IE_VERSION && i
                  ? (this.logger_('waiting for EME key session creation'),
                    Yo({
                      player: this.player_,
                      sourceKeySystems: this.source_.keySystems,
                      audioMedia: t && t.media(),
                      mainPlaylists: this.playlists.master.playlists,
                    })
                      .then(function () {
                        e.logger_('created EME key session'),
                          e.masterPlaylistController_.sourceUpdater_.initializedEme()
                      })
                      .catch(function (t) {
                        e.logger_('error while creating EME key session', t),
                          e.player_.error({ message: 'Failed to initialize media keys for EME', code: 3 })
                      }))
                  : this.masterPlaylistController_.sourceUpdater_.initializedEme()
            }),
            (i.setupQualityLevels_ = function () {
              var e = this,
                t = Wr.players[this.tech_.options_.playerId]
              t &&
                t.qualityLevels &&
                !this.qualityLevels_ &&
                ((this.qualityLevels_ = t.qualityLevels()),
                this.masterPlaylistController_.on('selectedinitialmedia', function () {
                  var t, i
                  ;(t = e.qualityLevels_),
                    (i = e).representations().forEach(function (e) {
                      t.addQualityLevel(e)
                    }),
                    Xo(t, i.playlists)
                }),
                this.playlists.on('mediachange', function () {
                  Xo(e.qualityLevels_, e.playlists)
                }))
            }),
            (t.version = function () {
              return {
                '@videojs/http-streaming': Ko,
                'mux.js': '5.13.0',
                'mpd-parser': '0.19.0',
                'm3u8-parser': '4.7.0',
                'aes-decrypter': '3.1.2',
              }
            }),
            (i.version = function () {
              return this.constructor.version()
            }),
            (i.canChangeType = function () {
              return To.canChangeType()
            }),
            (i.play = function () {
              this.masterPlaylistController_.play()
            }),
            (i.setCurrentTime = function (e) {
              this.masterPlaylistController_.setCurrentTime(e)
            }),
            (i.duration = function () {
              return this.masterPlaylistController_.duration()
            }),
            (i.seekable = function () {
              return this.masterPlaylistController_.seekable()
            }),
            (i.dispose = function () {
              this.playbackWatcher_ && this.playbackWatcher_.dispose(),
                this.masterPlaylistController_ && this.masterPlaylistController_.dispose(),
                this.qualityLevels_ && this.qualityLevels_.dispose(),
                this.player_ && (delete this.player_.vhs, delete this.player_.dash, delete this.player_.hls),
                this.tech_ && this.tech_.vhs && delete this.tech_.vhs,
                this.tech_ && delete this.tech_.hls,
                this.mediaSourceUrl_ &&
                  a().URL.revokeObjectURL &&
                  (a().URL.revokeObjectURL(this.mediaSourceUrl_), (this.mediaSourceUrl_ = null)),
                e.prototype.dispose.call(this)
            }),
            (i.convertToProgramTime = function (e, t) {
              return Qa({ playlist: this.masterPlaylistController_.media(), time: e, callback: t })
            }),
            (i.seekToProgramTime = function (e, t, i, n) {
              return (
                void 0 === i && (i = !0),
                void 0 === n && (n = 2),
                Xa({
                  programTime: e,
                  playlist: this.masterPlaylistController_.media(),
                  retryCount: n,
                  pauseAfterSeek: i,
                  seekTo: this.options_.seekTo,
                  tech: this.options_.tech,
                  callback: t,
                })
              )
            }),
            t
          )
        })(Wr.getComponent('Component')),
        tl = {
          name: 'videojs-http-streaming',
          VERSION: Ko,
          canHandleSource: function (e, t) {
            void 0 === t && (t = {})
            var i = Wr.mergeOptions(Wr.options, t)
            return tl.canPlayType(e.type, i)
          },
          handleSource: function (e, t, i) {
            void 0 === i && (i = {})
            var n = Wr.mergeOptions(Wr.options, i)
            return (
              (t.vhs = new el(e, t, n)),
              Wr.hasOwnProperty('hls') ||
                Object.defineProperty(t, 'hls', {
                  get: function () {
                    return Wr.log.warn('player.tech().hls is deprecated. Use player.tech().vhs instead.'), t.vhs
                  },
                  configurable: !0,
                }),
              (t.vhs.xhr = Fa()),
              t.vhs.src(e.src, e.type),
              t.vhs
            )
          },
          canPlayType: function (e, t) {
            void 0 === t && (t = {})
            var i = Wr.mergeOptions(Wr.options, t).vhs.overrideNative,
              n = void 0 === i ? !Wr.browser.IS_ANY_SAFARI : i,
              r = (0, C.t)(e)
            return r && (!Zo.supportsTypeNatively(r) || n) ? 'maybe' : ''
          },
        }
      ;(0, k.p7)('avc1.4d400d,mp4a.40.2') && Wr.getTech('Html5').registerSourceHandler(tl, 0),
        (Wr.VhsHandler = el),
        Object.defineProperty(Wr, 'HlsHandler', {
          get: function () {
            return Wr.log.warn('videojs.HlsHandler is deprecated. Use videojs.VhsHandler instead.'), el
          },
          configurable: !0,
        }),
        (Wr.VhsSourceHandler = tl),
        Object.defineProperty(Wr, 'HlsSourceHandler', {
          get: function () {
            return Wr.log.warn('videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead.'), tl
          },
          configurable: !0,
        }),
        (Wr.Vhs = Zo),
        Object.defineProperty(Wr, 'Hls', {
          get: function () {
            return Wr.log.warn('videojs.Hls is deprecated. Use videojs.Vhs instead.'), Zo
          },
          configurable: !0,
        }),
        Wr.use || (Wr.registerComponent('Hls', Zo), Wr.registerComponent('Vhs', Zo)),
        (Wr.options.vhs = Wr.options.vhs || {}),
        (Wr.options.hls = Wr.options.hls || {}),
        Wr.registerPlugin ? Wr.registerPlugin('reloadSourceOnError', Go) : Wr.plugin('reloadSourceOnError', Go)
      const il = Wr
    },
  },
])
