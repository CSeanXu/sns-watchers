;(self.webpackChunknft_ui = self.webpackChunknft_ui || []).push([
  [646],
  {
    '99bB': (t, e, o) => {
      'use strict'
      o.r(e), o.d(e, { default: () => Mt })
      var n = o('ODTw'),
        i = o.n(n),
        r = o('q7Ka'),
        l = o('5vwO'),
        a = o('GpFh'),
        c = o('xIFI'),
        u = o.n(c),
        p = o('Vgyk'),
        d = o('cvq5'),
        x = o('l4n0'),
        s = o('HmmH'),
        v = o('2sIW'),
        m = o('WmPT'),
        f = o('k8Wo'),
        g = o('5o2h'),
        h = o('briU'),
        b = o('UWeV'),
        w = o('uQy2'),
        Z = o('X9US'),
        k = o('CasK'),
        C = u().createElement
      function y(t) {
        var e = t.status
        return C(
          g.Z,
          {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            sx: {
              position: 'relative',
              overflow: 'hidden',
              backgroundImage: 'url('.concat(w.Xs, '/image/julia/nft/events/event-status.jpg)'),
              backgroundSize: 'cover',
              height: '100vh',
            },
          },
          C(
            h.Z,
            { variant: 'Headline2', color: '#fff', sx: { fontSize: ['24px', '32px', '40px'], fontWeight: 'bold' } },
            0 == e || 1 == e ? 'Event Unstarted' : 3 == e ? 'Event Ended' : 'Event Unstarted',
          ),
          C(
            b.Z,
            { href: (0, v.KQ)((0, k.I)('https://www.binance.com/en/nft/home')) },
            C(
              g.Z,
              { justifyContent: 'center', alignItems: 'center', sx: { position: 'absolute', bottom: '60px' } },
              C(Z.Z, { color: '#fff', size: 16, mr: 12 }),
              C(h.Z, { fontSize: '16px', color: '#fff' }, 'Back'),
            ),
          ),
        )
      }
      const T = u().memo(y)
      var I = o('0fu7'),
        S = o('50kH'),
        E = o('lxJv'),
        z = o('j/s1'),
        N = {
          dark: { bgColor: '#0B122E', mainColor: '#EAECEF', subColor: '#B7BDC6' },
          light: { bgColor: '#FFFFFF', mainColor: '#1E2329', subColor: '#474D57' },
          custom: { bgColor: '#0B122E', mainColor: '#EAECEF', subColor: '#B7BDC6' },
        },
        F = [812, 1024],
        V = { img: 'IMAGE', video: 'VIDEO', audio: 'AUDIO' },
        D = {
          yellow: { bg: 'linear-gradient(115.36deg, #F8D12F 10.8%, #EBF00B 85.93%)', color: '#1E2329' },
          red: {
            bg: 'linear-gradient(109.81deg, rgba(255, 132, 44, 0.67) 0%, rgba(237, 60, 22, 0.88) 103.77%)',
            color: '#FFFFFF',
          },
          gray: {
            bg: 'linear-gradient(109.81deg, rgba(123, 131, 140, 0.19) 0%, rgba(58, 66, 74, 0.19) 103.77%)',
            color: '#FFFFFF',
          },
        },
        A = u().createElement,
        W = (0, z.F4)(['from{transform:translateY(0px);}50%{transform:translateY(8px);}0{transform:translateY(0px);}']),
        H = (0, z.iv)(['', ' 1.5s ease-in-out 0.5s infinite'], W),
        j = (0, z.ZP)(g.Z).withConfig({ displayName: 'Header1__CircleAnimationBox', componentId: 'ptpp64-0' })(
          ['animation:', ';'],
          H,
        )
      function B(t) {
        var e = (0, f.ZK)(),
          o = t.comopnentType,
          n = t.comopnentName,
          i = t.index,
          r = t.eventNumber,
          l = function t() {
            var e,
              o,
              n,
              i,
              r,
              l,
              a =
                null === (e = document) || void 0 === e || null === (o = e.documentElement) || void 0 === o
                  ? void 0
                  : o.scrollHeight,
              c =
                null === (n = document) || void 0 === n || null === (i = n.documentElement) || void 0 === i
                  ? void 0
                  : i.clientHeight,
              u = a - c < c ? a - c : c - 64,
              p =
                null === (r = document) || void 0 === r || null === (l = r.documentElement) || void 0 === l
                  ? void 0
                  : l.scrollTop
            p < u && (window.scrollTo(0, p + u / 14), requestAnimationFrame(t))
          },
          a = (0, c.useMemo)(
            function () {
              return (
                (null === t || void 0 === t ? void 0 : t.mainTitleText) ||
                (null === t || void 0 === t ? void 0 : t.subtitle) ||
                (null === t || void 0 === t ? void 0 : t.activityTime)
              )
            },
            [t],
          )
        return A(
          I.Z,
          {
            width: '100%',
            height: '100vh',
            maxHeight: F,
            sx: {
              position: 'relative',
              background: 'url('.concat(t.bgImage, ') no-repeat center'),
              backgroundSize: 'cover',
            },
          },
          A(
            I.Z,
            { width: '100%', px: ['16px', 0, 0], sx: { position: 'absolute', bottom: 0 } },
            a &&
              A(
                I.Z,
                {
                  width: ['auto', '640px', '640px'],
                  px: '24px',
                  py: ['16px', '24px', '24px'],
                  mx: ['auto'],
                  mb: ['145px', '112px', '160px'],
                  sx: {
                    position: 'relative',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '4px',
                  },
                },
                (null === t || void 0 === t ? void 0 : t.mainTitleText) &&
                  A(
                    h.Z,
                    {
                      as: 'h1',
                      variant: 'headline4',
                      fontSize: ['20px', '28px', '40px'],
                      lineHeight: ['36px', '48px', '48px'],
                      color: 't.white',
                      sx: { textAlign: 'center' },
                    },
                    e(''.concat(o, '-').concat(n, '-').concat(i, '-mainTitleText-').concat(r), {
                      defaultValue: null === t || void 0 === t ? void 0 : t.mainTitleText,
                    }),
                  ),
                (null === t || void 0 === t ? void 0 : t.subtitle) &&
                  A(
                    h.Z,
                    {
                      variant: 'headline5',
                      fontWeight: [500, 600, 600],
                      fontSize: ['16px', '20px', '24px'],
                      lineHeight: ['24px', '32px', '32px'],
                      color: '#EAECEF',
                      mt: ['8px', '16px', '16px'],
                      sx: { textAlign: 'center' },
                    },
                    null === t || void 0 === t ? void 0 : t.subtitle,
                  ),
                (null === t || void 0 === t ? void 0 : t.activityTime) &&
                  A(
                    g.Z,
                    {
                      width: ['214px', 'auto', 'auto'],
                      alignItems: 'cneter',
                      justifyContent: 'center',
                      mt: ['8px', '24px', '24px'],
                      mx: 'auto',
                    },
                    A(S.Z, { color: 't.white', size: 24, mr: '8px' }),
                    A(
                      h.Z,
                      {
                        variant: 'body2',
                        fontSize: ['12px', '14px', '14px'],
                        lineHeight: ['20px', '24px', '24px'],
                        color: 'line',
                      },
                      null === t || void 0 === t ? void 0 : t.activityTime,
                    ),
                  ),
              ),
          ),
          A(
            j,
            {
              width: 32,
              height: 32,
              ml: -16,
              alignItems: 'center',
              justifyContent: 'center',
              sx: {
                position: 'absolute',
                left: '50%',
                bottom: ['48px', '24px', '48px'],
                backgroundColor: '#f5f5f5',
                borderRadius: '50%',
                cursor: 'pointer',
                opacity: 0.3,
              },
              onClick: function () {
                requestAnimationFrame(l)
              },
            },
            A(E.Z, { color: 't.primary', size: 12 }),
          ),
        )
      }
      const K = u().memo(B)
      var R = o('GDnE'),
        G = o('3733'),
        M = u().createElement
      function U(t) {
        var e,
          o = (0, f.ZK)(),
          n = t.comopnentType,
          i = t.comopnentName,
          r = t.index,
          l = t.eventNumber,
          a = ['287px', '100%', '100%']
        return M(
          g.Z,
          {
            height: ['672px', '540px', '800px'],
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#fff',
            pt: ['150px', '150px', '260px'],
            sx: {
              position: 'relative',
              background: 'url('.concat(t.bgImage, ') no-repeat center'),
              backgroundSize: 'cover',
            },
          },
          'textFont' === t.mainTitle &&
            (null === t || void 0 === t ? void 0 : t.mainTitleText) &&
            M(
              h.Z,
              {
                as: 'h1',
                fontSize: ['24px', '36px', '48px'],
                mb: ['24px', '24px', '35px'],
                width: ['287px', '370px', '100%'],
                textAlign: 'center',
              },
              o(''.concat(n, '-').concat(i, '-').concat(r, '-mainTitleText-').concat(l), {
                defaultValue: null === t || void 0 === t ? void 0 : t.mainTitleText,
              }),
            ),
          'artFont' == t.mainTitle &&
            (null === t || void 0 === t ? void 0 : t.mainTitleImage) &&
            M(G.Z, {
              mb: ['24px', '24px', '35px'],
              src: ''.concat((0, v.U1)(null === t || void 0 === t ? void 0 : t.mainTitleImage)),
              width: ['287px', '370px', '392px'],
            }),
          (null === t || void 0 === t ? void 0 : t.subtitle) &&
            M(
              h.Z,
              ((e = { fontWeight: 500, textAlign: 'center', fontSize: [16, 20, 32], width: a }),
              (0, R.Z)(e, 'textAlign', 'center'),
              (0, R.Z)(e, 'mb', ['24px', '24px', '24px']),
              e),
              o(''.concat(n, '-').concat(i, '-').concat(r, '-subtitle-').concat(l), {
                defaultValue: null === t || void 0 === t ? void 0 : t.subtitle,
              }),
            ),
          M(
            h.Z,
            { fontSize: [16, 16, 20], width: a, textAlign: 'center' },
            null === t || void 0 === t ? void 0 : t.activityTime,
          ),
        )
      }
      const O = u().memo(U)
      var _ = u().createElement
      function L(t) {
        var e = (0, f.ZK)(),
          o = t.comopnentType,
          n = t.comopnentName,
          i = t.index,
          r = t.eventNumber
        return _(
          g.Z,
          {
            justifyContent: 'center',
            alignItems: ['flex-end', 'center', 'center'],
            sx: {
              width: '100%',
              height: '720px',
              background: 'url('.concat(t.bgImage, ') no-repeat center'),
              backgroundSize: 'cover',
              color: '#eee',
            },
          },
          _(g.Z, { sx: { height: '100%', flex: '1 1 auto', background: '#0B0E11', opacity: 0.4 } }),
          _(
            g.Z,
            { sx: { width: '1200px', height: ['auto', '100%', '100%'] } },
            _(
              g.Z,
              {
                flexDirection: 'column',
                justifyContent: 'center',
                p: [32, '70px 62px', '0 102px 0'],
                mx: [16, 0, 0],
                mb: [16, 0, 0],
                sx: { boxSizing: 'border-box', position: 'relative', width: ['100%', 400, 606] },
              },
              'textFont' === t.mainTitle &&
                (null === t || void 0 === t ? void 0 : t.mainTitleText) &&
                _(
                  h.Z,
                  {
                    as: 'h1',
                    fontSize: ['24px', '32px', '40px'],
                    width: ['250px', '303px', '392px'],
                    color: '#ffffff',
                    sx: { zIndex: 2 },
                  },
                  e(''.concat(o, '-').concat(n, '-').concat(i, '-mainTitleText-').concat(r), {
                    defaultValue: null === t || void 0 === t ? void 0 : t.mainTitleText,
                  }),
                ),
              'artFont' == t.mainTitle &&
                (null === t || void 0 === t ? void 0 : t.mainTitleImage) &&
                _(G.Z, {
                  src: (0, v.U1)(null === t || void 0 === t ? void 0 : t.mainTitleImage),
                  width: ['266px', '207px', ' 326px'],
                  sx: { position: 'relative', zIndex: 9 },
                }),
              (null === t || void 0 === t ? void 0 : t.activityTime) &&
                _(
                  h.Z,
                  { sx: { position: 'relative', zIndex: 9 }, fontSize: '14px', color: '#F0B90B', mt: '24px' },
                  null === t || void 0 === t ? void 0 : t.activityTime,
                ),
              (null === t || void 0 === t ? void 0 : t.description) &&
                _(
                  h.Z,
                  { mt: '24px', sx: { position: 'relative', zIndex: 9 }, variant: 'body1', color: '#EAECEF' },
                  e(''.concat(o, '-').concat(n, '-').concat(i, '-description-').concat(r), {
                    defaultValue: null === t || void 0 === t ? void 0 : t.description,
                  }),
                ),
              _(g.Z, {
                flexDirection: 'column',
                sx: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  background: 'rgba(11, 14, 17, 0.4)',
                },
              }),
            ),
          ),
          _(g.Z, { sx: { flex: '1 1 auto' } }),
        )
      }
      const J = u().memo(L)
      var Q = o('kdgh'),
        X = o('DNSJ'),
        q = o('Tr4L'),
        Y = u().createElement
      function P(t) {
        var e = t.children,
          o = t.bgColor,
          n = t.mainColor,
          i = t.bgImage,
          r = t.title,
          l = t.height
        ;(0, q.$)().t
        return Y(
          I.Z,
          {
            sx: {
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: o || null,
              backgroundImage: 'url('.concat(i || 'none', ')'),
              backgroundSize: 'cover',
            },
          },
          Y(
            I.Z,
            {
              height: l || 'auto',
              py: ['24px', '36px', '64px'],
              px: ['16px', '48px', '24px'],
              sx: { maxWidth: '1248px', margin: '0 auto', boxSizing: 'border-box' },
            },
            r &&
              Y(
                h.Z,
                {
                  as: 'h2',
                  variant: 'Headline2',
                  color: n,
                  mb: ['32px', '24px', '48px'],
                  sx: { fontSize: ['24px', '32px', '40px'], fontWeight: 'bold' },
                },
                r,
              ),
            e,
          ),
        )
      }
      const $ = u().memo(P)
      var tt = u().createElement
      const et = function (t) {
        var e,
          o = (0, f.ZK)(),
          n = t.comopnentType,
          i = t.comopnentName,
          r = t.index,
          l = t.eventNumber,
          a = t.title,
          c = (null === t || void 0 === t || null === (e = t.list) || void 0 === e ? void 0 : e.listName2) || [],
          u = t.bg,
          p = N[void 0 === u ? 'light' : u],
          d = p.bgColor,
          x = p.mainColor,
          s = p.subColor
        return tt(
          $,
          {
            bgColor: d,
            mainColor: x,
            bgImage: null === t || void 0 === t ? void 0 : t.bgImage,
            title: a ? o(''.concat(n, '-').concat(i, '-').concat(r, '-title-').concat(l), { defaultValue: a }) : '',
          },
          tt(
            Q.Z,
            {
              columns: [1, 2, 2],
              sx: {
                position: 'relative',
                width: '100%',
                gridColumnGap: ['0', '35px', '84px'],
                gridRowGap: ['16px', '18px', '68px'],
              },
            },
            c.map(function (t, e) {
              return tt(
                g.Z,
                { key: t.avatar },
                tt(
                  I.Z,
                  { width: [60, 80, 128], height: [60, 80, 128], mr: ['24px'] },
                  tt(X.Z, {
                    withZipped: !0,
                    src: t.avatar,
                    sx: { borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover' },
                  }),
                ),
                tt(
                  I.Z,
                  { sx: { flex: 1, overflow: 'hidden' } },
                  tt(
                    h.Z,
                    {
                      variant: 'Headline5',
                      color: x,
                      mb: ['8px'],
                      sx: { fontSize: ['16px', '16px', '24px'], fontWeight: 'bold' },
                    },
                    t.name,
                  ),
                  tt(
                    h.Z,
                    { color: s, sx: { fontSize: ['12px', '12px', '14px'], textAlign: 'justify' } },
                    o(''.concat(n, '-').concat(i, '-').concat(r, '-').concat(e, '-text-').concat(l), {
                      defaultValue: null === t || void 0 === t ? void 0 : t.text,
                    }),
                  ),
                ),
              )
            }),
          ),
        )
      }
      var ot = ['customImage', 'customColor'],
        nt = function (t) {
          var e = JSON.parse(JSON.stringify(t))
          return (
            ot.includes(e.bg) ||
              ('light' === e.bg
                ? ((e.bgColor = '#FFFFFF'), (e.fontColor = '#1E2329'), (e.subColor = '#474D57'))
                : ((e.bgColor = '#0B122E'), (e.fontColor = '#EAECEF'), (e.subColor = '#B7BDC6')),
              'custom' === e.bg ? (e.bg = 'customImage') : (e.bg = 'customColor')),
            'object' === typeof e.bgColor &&
              (e.bgColor = 'rgba('
                .concat(e.bgColor.r, ', ')
                .concat(e.bgColor.g, ', ')
                .concat(e.bgColor.b, ', ')
                .concat(e.bgColor.a, ')')),
            'object' === typeof e.fontColor &&
              (e.fontColor = 'rgba('
                .concat(e.fontColor.r, ', ')
                .concat(e.fontColor.g, ', ')
                .concat(e.fontColor.b, ', ')
                .concat(e.fontColor.a, ')')),
            'object' === typeof e.cardColor &&
              (e.cardColor = 'rgba('
                .concat(e.cardColor.r, ', ')
                .concat(e.cardColor.g, ', ')
                .concat(e.cardColor.b, ', ')
                .concat(e.cardColor.a, ')')),
            e
          )
        },
        it = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'innerLink'
          if (t) {
            var o = window.location.href,
              n = o.match(/(.+?)nft/) ? o.match(/(.+?)nft/)[1] : '',
              i = t.match(/nft\/(\S*)/) ? t.match(/nft\/(\S*)/)[1] : ''
            return 'outterLink' !== e && i ? ''.concat(n, 'nft/').concat(i) : t
          }
        },
        rt = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'innerLink'
          if (t) {
            var o = '',
              n = window.location.href,
              i = n.match(/(.+?)nft/) ? n.match(/(.+?)nft/)[1] : '',
              r = t.match(/nft\/(\S*)/) ? t.match(/nft\/(\S*)/)[1] : ''
            ;(o = 'outterLink' !== e && r ? ''.concat(i, 'nft/').concat(r) : t), window.open((0, v.KQ)(o))
          }
        },
        lt = u().createElement
      const at = function (t) {
        var e = (0, f.ZK)(),
          o = t.comopnentType,
          n = t.comopnentName,
          i = t.index,
          r = t.eventNumber,
          l = t.title,
          a = (function (t) {
            var e,
              o,
              n = JSON.parse(JSON.stringify(t))
            return Array.isArray(
              null === n || void 0 === n || null === (e = n.list) || void 0 === e ? void 0 : e.listName2,
            )
              ? (null === n || void 0 === n || null === (o = n.list) || void 0 === o ? void 0 : o.listName2) || []
              : [
                  {
                    avatar: null === n || void 0 === n ? void 0 : n.avatar,
                    name: null === n || void 0 === n ? void 0 : n.name,
                    text: null === n || void 0 === n ? void 0 : n.text,
                  },
                ]
          })(t),
          c = t.bg,
          u = N[void 0 === c ? 'light' : c],
          p = u.bgColor,
          d = u.mainColor,
          x = u.subColor
        return lt(
          $,
          {
            bgColor: p,
            mainColor: d,
            bgImage: null === t || void 0 === t ? void 0 : t.bgImage,
            subColor: x,
            title: l ? e(''.concat(o, '-').concat(n, '-').concat(i, '-title-').concat(r), { defaultValue: l }) : '',
          },
          lt(
            Q.Z,
            {
              columns: 1,
              sx: {
                position: 'relative',
                width: '100%',
                gridColumnGap: ['0', '35px', '84px'],
                gridRowGap: ['16px', '18px', '68px'],
              },
            },
            a.map(function (t, l) {
              return lt(
                g.Z,
                { flexDirection: ['column', 'row', 'row'], alignItems: ['center', 'flex-start'] },
                lt(
                  I.Z,
                  { width: [343, 282, 282], height: [343, 282, 282], mr: [0, '48px', '80px'], mb: ['16px', 0] },
                  lt(X.Z, {
                    withZipped: !0,
                    src: null === t || void 0 === t ? void 0 : t.avatar,
                    sx: { borderRadius: ['4px', '8px', '8px'], width: '100%', height: '100%', objectFit: 'cover' },
                  }),
                ),
                lt(
                  I.Z,
                  { sx: { width: ['100%', '734px'], flex: 1, overflow: 'hidden' } },
                  lt(
                    h.Z,
                    {
                      color: d,
                      mb: ['16px', '24px'],
                      textAlign: 'left',
                      sx: { fontSize: ['16px', '24px'], fontWeight: 'bold' },
                    },
                    null === t || void 0 === t ? void 0 : t.name,
                  ),
                  lt(
                    h.Z,
                    { lineHeight: '24px', color: x, maxWidth: '734px', fontSize: ['14px', '16px', '16px'] },
                    e(''.concat(o, '-').concat(n, '-').concat(i, '-').concat(l, '-text-').concat(r), {
                      defaultValue: null === t || void 0 === t ? void 0 : t.text,
                    }),
                  ),
                ),
              )
            }),
          ),
        )
      }
      var ct = u().createElement
      function ut(t) {
        var e = t.children,
          o = t.bgColor,
          n = t.mainColor,
          i = t.bgImage,
          r = t.title,
          l = t.height
        return ct(
          I.Z,
          {
            sx: {
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: o || null,
              backgroundSize: 'cover',
              height: l,
            },
          },
          i && ct(X.Z, { src: i, width: '100%', maxWidth: '100%', height: l }),
          ct(
            I.Z,
            {
              py: ['24px', '36px', '64px'],
              px: ['16px', '48px', '24px'],
              sx: {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                maxWidth: '1248px',
                margin: '0 auto',
                boxSizing: 'border-box',
              },
            },
            r &&
              ct(
                h.Z,
                {
                  as: 'h2',
                  variant: 'Headline2',
                  color: n,
                  mb: ['32px', '24px', '48px'],
                  sx: { fontSize: ['24px', '32px', '40px'], fontWeight: 'bold' },
                },
                r,
              ),
            e,
          ),
        )
      }
      const pt = u().memo(ut)
      var dt = u().createElement
      function xt(t) {
        var e = (0, f.ZK)(),
          o = (0, f.GS)(),
          n = o.isMobile,
          i = o.isDesktop,
          r = t.comopnentType,
          l = t.comopnentName,
          a = t.index,
          c = t.eventNumber,
          u = nt(t),
          p = u.bgColor,
          d = u.fontColor
        return dt(
          pt,
          {
            bgColor: p,
            mainColor: d,
            bgImage: null === t || void 0 === t ? void 0 : t.bgImage,
            height: !n && null !== t && void 0 !== t && t.bgImage ? 'auto' : '800px',
          },
          dt(
            g.Z,
            {
              flexDirection: ['column', 'column', 'row'],
              alignItems: 'center',
              height: '100%',
              justifyContent:
                'right' === (null === t || void 0 === t ? void 0 : t.textAlign) ? 'flex-end' : 'flex-start',
              sx: { overflowY: i ? 'inherit' : 'scroll' },
            },
            dt(
              I.Z,
              { color: d, sx: { opacity: 0.8 }, maxWidth: '520px' },
              dt(
                h.Z,
                {
                  as: 'h2',
                  fontSize: [24, 32],
                  lineHeight: ['32px', '40px'],
                  fontWeight: 500,
                  mb: ['16px', '36px', '40px'],
                },
                e(''.concat(r, '-').concat(l, '-').concat(a, '-mainTitle-').concat(c), {
                  defaultValue: null === t || void 0 === t ? void 0 : t.mainTitle,
                }),
              ),
              dt(
                h.Z,
                { fontSize: [14, 16], lineHeight: '24px', sx: { textAlign: 'justify', 'white-space': 'pre-wrap' } },
                e(''.concat(r, '-').concat(l, '-').concat(a, '-description-').concat(c), {
                  defaultValue: null === t || void 0 === t ? void 0 : t.description,
                }),
              ),
            ),
          ),
        )
      }
      const st = u().memo(xt)
      var vt = u().createElement
      function mt(t) {
        var e = (0, f.ZK)(),
          o = t.comopnentType,
          n = t.comopnentName,
          i = t.index,
          r = t.eventNumber,
          l = nt(t),
          a = l.bgColor,
          u = l.fontColor,
          p = (0, c.useState)(!0),
          d = p[0],
          x = p[1],
          s = void 0 === t.fold || t.fold
        return vt(
          $,
          { bgColor: a, mainColor: u, bgImage: null === t || void 0 === t ? void 0 : t.bgImage },
          vt(
            I.Z,
            {
              py: ['40px', '80px', '106px'],
              width: ['auto', 'auto', '792px'],
              px: ['16px', '55px', 0],
              sx: { margin: '0 auto' },
            },
            vt(h.Z, {
              variant: 'body2',
              fontSize: ['14px', '16px', '16px'],
              lineHeight: ['20px', '24px', '24px'],
              color: u,
              sx: { textAlign: 'justify', 'white-space': 'pre-wrap' },
              dangerouslySetInnerHTML: {
                __html: d
                  ? e(''.concat(o, '-').concat(n, '-').concat(i, '-shortDesc-').concat(r), {
                      defaultValue: null === t || void 0 === t ? void 0 : t.shortDesc,
                    })
                  : e(''.concat(o, '-').concat(n, '-').concat(i, '-longDesc-').concat(r), {
                      defaultValue: null === t || void 0 === t ? void 0 : t.longDesc,
                    }),
              },
            }),
            s &&
              vt(
                h.Z,
                {
                  variant: 'linkBody',
                  color: 't.yellow',
                  mt: '16px',
                  sx: { cursor: 'pointer' },
                  onClick: function () {
                    x(!d)
                  },
                },
                d
                  ? e('winter-button-show-more', { defaultValue: 'Show more' })
                  : e('winter-button-show-less', { defaultValue: 'Show less' }),
              ),
          ),
        )
      }
      const ft = u().memo(mt)
      var gt = o('Z0vu'),
        ht = u().createElement
      var bt = u().createElement
      var wt = o('Kxox'),
        Zt = u().createElement
      var kt = u().createElement
      function Ct(t) {
        var e,
          o,
          n = (0, f.ZK)(),
          i = t.type,
          r = t.name,
          l = t.parentIndex,
          a = t.index,
          c = t.eventNumber,
          u = t.tagColor,
          p = t.tagText
        return u && p
          ? kt(
              h.Z,
              {
                variant: 'subtitle2',
                px: '8px',
                fontSize: 14,
                height: [24, 24, 32],
                lineHeight: ['24px', '24px', '32px'],
                sx: {
                  display: 'inline-block',
                  background: null === (e = D[u]) || void 0 === e ? void 0 : e.bg,
                  color: null === (o = D[u]) || void 0 === o ? void 0 : o.color,
                  borderRadius: '4px',
                },
              },
              n(''.concat(i, '-').concat(r, '-').concat(l, '-').concat(a, '-title-').concat(c), { defaultValue: p }),
            )
          : null
      }
      const yt = u().memo(Ct)
      var Tt = u().createElement
      var It = u().createElement
      var St = o('gMHc'),
        Et = o('27Hg'),
        zt = o('NZY4'),
        Nt = u().createElement,
        Ft = { img: 'IMAGE', video: 'VIDEO', audio: 'AUDIO' }
      const Vt = function (t) {
        var e,
          o = (0, f.ZK)(),
          n = (0, c.useRef)(null),
          i = (0, f.GS)(),
          r = i.isMobile,
          a = i.isDesktop,
          u = t.bg,
          p = void 0 === u ? 'dark' : u,
          d = t.comopnentType,
          x = t.comopnentName,
          s = t.index,
          m = t.eventNumber,
          Z = t.title,
          C = N[p],
          y = C.bgColor,
          T = C.mainColor,
          S = C.subColor,
          E = (null === t || void 0 === t || null === (e = t.list) || void 0 === e ? void 0 : e.listName2) || [],
          z = (0, c.useState)(0),
          F = z[0],
          V = z[1],
          D = (0, c.useState)(320),
          A = D[0],
          W = D[1],
          H = (0, c.useState)(320),
          j = H[0],
          B = H[1],
          K = (0, c.createRef)(null),
          R = (0, c.useMemo)(
            function () {
              return (0, l.Z)((0, l.Z)({}, E[F]), {}, { index: F })
            },
            [F, E],
          ),
          M = (0, c.useMemo)(
            function () {
              var t = E.length
              return { prev: t > 4 && F > 3, next: t > 4 && F < t - 1 }
            },
            [F, E],
          ),
          U = (0, c.useMemo)(
            function () {
              return F > 3 ? (r ? 129 : a ? 169 : 136) * (3 - F) : 0
            },
            [F],
          )
        return (
          (0, c.useEffect)(
            function () {
              var t,
                e,
                o =
                  (null === (t = E[0]) || void 0 === t ? void 0 : t.workImage) ||
                  (null === (e = E[0]) || void 0 === e ? void 0 : e.workCover)
              ;(0, k.pS)((0, v.U1)(o), function (t, e) {
                var o = t
                ;+t > 0 && (o = Math.round((j / e) * t)), W(o)
              })
            },
            [E, j],
          ),
          (0, c.useEffect)(
            function () {
              var t = K.current.offsetWidth
              t && B(t)
            },
            [K],
          ),
          Nt(
            $,
            {
              bgColor: y,
              mainColor: T,
              subColor: S,
              bgImage: null === t || void 0 === t ? void 0 : t.bgImage,
              title: Z ? o(''.concat(d, '-').concat(x, '-').concat(s, '-title-').concat(m), { defaultValue: Z }) : '',
            },
            Nt(
              g.Z,
              { flexDirection: ['column', 'row'] },
              Nt(
                g.Z,
                {
                  flexDirection: 'column',
                  pr: [0, 44, 74],
                  width: ['343px', '400px', '640px'],
                  sx: { boxSizing: 'content-box' },
                },
                Nt(
                  St.Z,
                  {
                    ref: n,
                    dots: !1,
                    autoplay: !1,
                    beforeChange: function (t, e) {
                      return V(e)
                    },
                  },
                  E.map(function (t, e) {
                    return Nt(
                      I.Z,
                      { ref: K, key: e, height: A },
                      Nt(wt.Z, {
                        auto: !1,
                        preview: !1,
                        disableFilter: !0,
                        disableBorder: !0,
                        withZipped: !0,
                        type: Ft[t.workType],
                        sourceUrl: t.workImage || t.workVideo || t.workAudio,
                        src: t.workImage || t.workCover,
                      }),
                    )
                  }),
                ),
                E.length > 1 &&
                  Nt(
                    I.Z,
                    { width: '100%', mt: ['16px', '16px', '24px'], sx: { overflow: 'hidden', position: 'relative' } },
                    M.prev &&
                      Nt(G.Z, {
                        width: '24px',
                        height: '24px',
                        sx: {
                          position: 'absolute',
                          zIndex: 1,
                          top: '50%',
                          marginTop: '-12px',
                          transform: 'rotateY(180deg)',
                          flexShrink: 0,
                        },
                        src: ''.concat(w.Xs, '/image/julia/nft/naraka/caret.svg'),
                        onClick: function () {
                          return null === n || void 0 === n ? void 0 : n.current.slick.slickPrev()
                        },
                      }),
                    Nt(
                      g.Z,
                      { sx: { transform: 'translateX('.concat(U, 'px)') } },
                      E.map(function (t, e) {
                        return Nt(
                          I.Z,
                          {
                            flex: 'none',
                            key: e,
                            width: ['88px', '88px', '140px'],
                            height: ['40px', '40px', '64px'],
                            sx: {
                              position: 'relative',
                              borderRadius: '8px',
                              marginRight: ['8px', '15px', '25px'],
                              cursor: 'pointer',
                              opacity: R.index === e ? '1' : '0.6',
                            },
                            onClick: function () {
                              null === n || void 0 === n || n.current.slick.slickGoTo(e)
                            },
                          },
                          Nt(wt.Z, {
                            disableFilter: !0,
                            disableBorder: !0,
                            withZipped: !0,
                            type: 'IMAGE',
                            src: t.workImage || t.workCover,
                          }),
                        )
                      }),
                    ),
                    M.next &&
                      Nt(G.Z, {
                        width: '24px',
                        height: '24px',
                        src: ''.concat(w.Xs, '/image/julia/nft/naraka/caret.svg'),
                        onClick: function () {
                          null === n || void 0 === n || n.current.slick.slickNext()
                        },
                        sx: { position: 'absolute', zIndex: 1, top: '50%', right: 0, marginTop: '-12px' },
                      }),
                  ),
              ),
              E.map(function (t, e) {
                return (
                  e === R.index &&
                  Nt(
                    g.Z,
                    { key: e, flexDirection: 'column', pb: E.length > 1 ? [0, 58, 90] : 0, flex: 1 },
                    Nt(
                      h.Z,
                      { fontSize: ['20px', '20px', '32px'], fontWeight: '500', color: T, mb: '16px', mt: [32, 0, 0] },
                      t.workName,
                    ),
                    t.text &&
                      Nt(
                        h.Z,
                        { variant: 'body2', fontSize: ['12px', '14px', '14px'], color: S },
                        o(''.concat(d, '-').concat(x, '-').concat(s, '-').concat(e, '-text-').concat(m), {
                          defaultValue: t.text,
                        }),
                      ),
                    Nt(
                      g.Z,
                      {
                        flex: 1,
                        flexDirection: ['row', 'column', 'column'],
                        alignItems: ['center', 'flex-start', 'flex-start'],
                        justifyContent: ['space-between', 'flex-end', 'flex-end'],
                        mt: [67, 0, 0],
                      },
                      t.price &&
                        Nt(
                          g.Z,
                          {
                            alignItems: 'center',
                            fontSize: ['20px', '20px', '24px'],
                            mb: ['0', '16px', '24px'],
                            fontWeight: 500,
                          },
                          Nt(zt.Z, { mr: '8px', size: ['20px', '20px', '24px'], currency: t.currency }),
                          Nt(h.Z, { color: T }, (0, Et.z1)(t.price), ' ', t.currency),
                        ),
                      t.buttonText &&
                        Nt(
                          gt.Z,
                          {
                            width: '160px',
                            height: '40px',
                            sx: { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
                          },
                          Nt(
                            b.Z,
                            {
                              href: (0, v.KQ)(
                                it(
                                  null === t || void 0 === t ? void 0 : t.buttonLink,
                                  null === t || void 0 === t ? void 0 : t.linkType,
                                ),
                              ),
                              target: '_blank',
                              color: 't.primary',
                              sx: { width: '100%', height: '32px', lineHeight: '32px', display: 'block' },
                            },
                            o(''.concat(d, '-').concat(x, '-').concat(s, '-').concat(e, '-buttonText-').concat(m), {
                              defaultValue: t.buttonText,
                            }),
                          ),
                        ),
                    ),
                  )
                )
              }),
            ),
          )
        )
      }
      var Dt = u().createElement,
        At = { img: 'IMAGE', video: 'VIDEO', audio: 'AUDIO' }
      const Wt = function (t) {
        var e,
          o = (0, f.ZK)(),
          n = t.bg,
          i = void 0 === n ? 'dark' : n,
          r = t.comopnentType,
          l = t.comopnentName,
          a = t.index,
          u = t.eventNumber,
          p = t.title,
          d = N[i],
          x = d.bgColor,
          s = d.mainColor,
          m = d.subColor,
          w = (null === t || void 0 === t || null === (e = t.list) || void 0 === e ? void 0 : e.listName2) || [],
          Z = (0, c.useState)(320),
          C = Z[0],
          y = Z[1],
          T = (0, c.useState)(320),
          S = T[0],
          E = T[1],
          z = (0, c.createRef)(null)
        return (
          (0, c.useEffect)(
            function () {
              var t,
                e,
                o =
                  (null === (t = w[0]) || void 0 === t ? void 0 : t.workImage) ||
                  (null === (e = w[0]) || void 0 === e ? void 0 : e.workCover)
              ;(0, k.pS)((0, v.U1)(o), function (t, e) {
                var o = t
                ;+t > 0 && (o = Math.round((S / e) * t)), y(o)
              })
            },
            [w, S],
          ),
          (0, c.useEffect)(
            function () {
              var t = z.current.offsetWidth
              t && E(t)
            },
            [z],
          ),
          Dt(
            $,
            {
              bgColor: x,
              mainColor: s,
              subColor: m,
              bgImage: null === t || void 0 === t ? void 0 : t.bgImage,
              title: p ? o(''.concat(r, '-').concat(l, '-').concat(a, '-title-').concat(u), { defaultValue: p }) : '',
            },
            Dt(
              Q.Z,
              {
                columns: [1, 3, 3],
                sx: {
                  position: 'relative',
                  width: '100%',
                  gridColumnGap: ['0', '24px', '24px'],
                  gridRowGap: ['32px', '48px', '60px'],
                },
              },
              w.map(function (t, e) {
                return Dt(
                  g.Z,
                  { ref: z, key: e, flexDirection: 'column' },
                  Dt(
                    I.Z,
                    { sx: { position: 'relative', width: '100%', height: C } },
                    Dt(wt.Z, {
                      disableFilter: !0,
                      disableBorder: !0,
                      withZipped: !0,
                      isTransparent: !0,
                      auto: !1,
                      preview: !1,
                      type: At[t.workType],
                      sourceUrl: t.workImage || t.workVideo || t.workAudio,
                      src: t.workImage || t.workCover,
                    }),
                  ),
                  Dt(
                    g.Z,
                    { flexDirection: 'column', flex: 1 },
                    t.workName &&
                      Dt(
                        h.Z,
                        {
                          variant: 'body2',
                          fontSize: ['20px', '20px', '24px'],
                          fontWeight: '500',
                          color: s,
                          mb: [12, 12, 16],
                          mt: 24,
                          sx: { 'word-break': 'break-all' },
                        },
                        t.workName,
                      ),
                    t.text &&
                      Dt(
                        h.Z,
                        { variant: 'body2', fontSize: ['12px', '14px', '14px'], color: m },
                        o(''.concat(r, '-').concat(l, '-').concat(a, '-').concat(e, '-text-').concat(u), {
                          defaultValue: t.text,
                        }),
                      ),
                    (t.price || t.buttonText) &&
                      Dt(
                        g.Z,
                        {
                          flex: 1,
                          mt: [20, 16, 24],
                          flexDirection: ['row', 'column', 'column'],
                          alignItems: ['center', 'flex-start', 'flex-start'],
                          justifyContent: ['space-between', 'flex-end', 'flex-end'],
                        },
                        t.price &&
                          Dt(
                            g.Z,
                            { alignItems: 'center', fontSize: '20px', mb: ['0', '12px', '16px'], fontWeight: 500 },
                            Dt(zt.Z, { mr: '8px', size: 20, currency: t.currency }),
                            Dt(h.Z, { color: s }, (0, Et.z1)(t.price), ' ', t.currency),
                          ),
                        t.buttonText &&
                          Dt(
                            gt.Z,
                            {
                              width: '160px',
                              height: '40px',
                              sx: { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
                            },
                            Dt(
                              b.Z,
                              {
                                href: (0, v.KQ)(it(t.buttonLink, null === t || void 0 === t ? void 0 : t.linkType)),
                                target: '_blank',
                                color: 't.primary',
                                sx: { width: '100%', height: '32px', lineHeight: '32px', display: 'block' },
                              },
                              o(''.concat(r, '-').concat(l, '-').concat(a, '-').concat(e, '-buttonText-').concat(u), {
                                defaultValue: t.buttonText,
                              }),
                            ),
                          ),
                      ),
                  ),
                )
              }),
            ),
          )
        )
      }
      var Ht = u().createElement
      const jt = function (t) {
        var e,
          o = (0, f.ZK)(),
          n = (0, c.useRef)(null),
          i = t.bg,
          r = void 0 === i ? 'dark' : i,
          a = t.comopnentType,
          u = t.comopnentName,
          p = t.index,
          d = t.eventNumber,
          x = t.title,
          s = N[r],
          m = s.bgColor,
          Z = s.mainColor,
          C = s.subColor,
          y = (0, f.GS)(),
          T = y.isMobile,
          S = y.isDesktop,
          E = (null === t || void 0 === t || null === (e = t.list) || void 0 === e ? void 0 : e.listName2) || [],
          z = (0, c.useState)(0),
          F = z[0],
          D = z[1],
          A = (0, c.useState)(320),
          W = A[0],
          H = A[1],
          j = (0, c.useState)(320),
          B = j[0],
          K = j[1],
          R = (0, c.createRef)(null),
          M = (0, c.useMemo)(
            function () {
              var t = E.length
              return { prev: t > 6 && F > 5, next: t > 6 && F < t - 1 }
            },
            [F],
          ),
          U = (0, c.useMemo)(
            function () {
              return (0, l.Z)((0, l.Z)({}, E[F]), {}, { index: F })
            },
            [F],
          ),
          O = (0, c.useMemo)(
            function () {
              return F > 5 ? (T ? 60 : S ? 72 : 60) * (5 - F) : 0
            },
            [F],
          )
        return (
          (0, c.useEffect)(
            function () {
              var t = R.current.offsetWidth
              t && K(t)
            },
            [R],
          ),
          (0, c.useEffect)(
            function () {
              var t, e
              ;(0, k.pS)(
                (0, v.U1)(
                  (null === (t = E[0]) || void 0 === t ? void 0 : t.workImage) ||
                    (null === (e = E[0]) || void 0 === e ? void 0 : e.workCover),
                ),
                function (t, e) {
                  var o = t
                  ;+t > 0 && (o = Math.round((B / e) * t)), H(o)
                },
              )
            },
            [E, B],
          ),
          Ht(
            $,
            {
              bgColor: m,
              mainColor: Z,
              subColor: C,
              bgImage: null === t || void 0 === t ? void 0 : t.bgImage,
              title: x ? o(''.concat(a, '-').concat(u, '-').concat(p, '-title-').concat(d), { defaultValue: x }) : '',
            },
            Ht(
              g.Z,
              { flexWrap: 'wrap', flexDirection: ['column', 'row'] },
              Ht(
                I.Z,
                {
                  flex: 1,
                  mr: 'left' === (null === t || void 0 === t ? void 0 : t.textAlign) ? [0, 48, 104] : 0,
                  ml: 'right' === (null === t || void 0 === t ? void 0 : t.textAlign) ? [0, 48, 104] : 0,
                  sx: { order: T ? 0 : 'right' === (null === t || void 0 === t ? void 0 : t.textAlign) ? 1 : 0 },
                },
                t.name &&
                  Ht(
                    h.Z,
                    {
                      color: Z,
                      variant: 'headline3',
                      fontSize: [24, 32],
                      lineHeight: ['32px', '40px'],
                      pb: ['8px', '8px', 32],
                    },
                    t.name,
                  ),
                t.text &&
                  Ht(
                    h.Z,
                    {
                      variant: 'body1',
                      color: C,
                      fontSize: [14, 14, 16],
                      mb: [24, 0, 0],
                      sx: {
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-wrap',
                        textAlign: 'justify',
                        textJustify: 'inter-ideograph',
                      },
                      lineHeight: ['20px', '20px', '24px'],
                    },
                    o(''.concat(a, '-').concat(u, '-').concat(p, '-text-').concat(d), { defaultValue: t.text }),
                  ),
                t.buttonText &&
                  Ht(
                    gt.Z,
                    {
                      width: '160px',
                      height: '40px',
                      sx: {
                        display: ['none', 'block'],
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        marginTop: '67px',
                      },
                    },
                    Ht(
                      b.Z,
                      {
                        href: (0, v.KQ)(it(U.buttonLink, null === U || void 0 === U ? void 0 : U.linkType)),
                        target: '_blank',
                        color: 't.primary',
                        sx: { width: '100%', height: '32px', lineHeight: '32px', display: 'block' },
                      },
                      o(''.concat(a, '-').concat(u, '-').concat(p, '-buttonText-').concat(d), {
                        defaultValue: t.buttonText,
                      }),
                    ),
                  ),
              ),
              Ht(
                g.Z,
                {
                  flexDirection: 'column',
                  alignItems: ['start', 'center'],
                  width: ['343px', '352px', '492px'],
                  sx: { order: T || 'right' === (null === t || void 0 === t ? void 0 : t.textAlign) ? 0 : 1 },
                },
                Ht(
                  I.Z,
                  { width: ['343px', '352px', '492px'] },
                  Ht(
                    St.Z,
                    {
                      ref: n,
                      dots: !1,
                      autoplay: !1,
                      beforeChange: function (t, e) {
                        return D(e)
                      },
                    },
                    E.map(function (t, e) {
                      return Ht(
                        I.Z,
                        { ref: R, key: e, height: W },
                        Ht(wt.Z, {
                          auto: !1,
                          preview: !1,
                          disableFilter: !0,
                          disableBorder: !0,
                          withZipped: !0,
                          isTransparent: !0,
                          type: V[t.workType],
                          sourceUrl: t.workImage || t.workVideo || t.workAudio,
                          src: t.workImage || t.workCover,
                        }),
                      )
                    }),
                  ),
                ),
                Ht(
                  h.Z,
                  {
                    color: Z,
                    my: [16, 12],
                    fontSize: [16, 16, 24],
                    lineHeight: ['24px', '24px', '32px'],
                    fontWeight: [500, 500, 600],
                  },
                  null === U || void 0 === U ? void 0 : U.workName,
                ),
                E.length > 1 &&
                  Ht(
                    I.Z,
                    {
                      sx: {
                        overflow: 'hidden',
                        position: 'relative',
                        width: ['100%', '352px', '420px'],
                        height: [68, 'auto'],
                      },
                    },
                    M.prev &&
                      Ht(G.Z, {
                        width: '24px',
                        height: '24px',
                        sx: {
                          position: 'absolute',
                          zIndex: 1,
                          top: '50%',
                          marginTop: '-12px',
                          transform: 'rotateY(180deg)',
                          flexShrink: 0,
                        },
                        src: ''.concat(w.Xs, '/image/julia/nft/naraka/caret.svg'),
                        onClick: function () {
                          return null === n || void 0 === n ? void 0 : n.current.slick.slickPrev()
                        },
                      }),
                    Ht(
                      g.Z,
                      {
                        height: ['48px', '48px', '60px'],
                        justifyContent: 'center',
                        sx: { transform: 'translateX('.concat(O, 'px)') },
                      },
                      E.map(function (t, e) {
                        return Ht(
                          I.Z,
                          {
                            flex: 'none',
                            key: e,
                            width: ['48px', '48px', '60px'],
                            height: ['48px', '48px', '60px'],
                            mr: '12px',
                            sx: { opacity: F === e ? '1' : '0.6' },
                            onClick: function () {
                              null === n || void 0 === n || n.current.slick.slickGoTo(e)
                            },
                          },
                          Ht(wt.Z, {
                            disableFilter: !0,
                            disableBorder: !0,
                            withZipped: !0,
                            isTransparent: !0,
                            type: 'IMAGE',
                            src: t.workImage || t.workCover,
                          }),
                        )
                      }),
                    ),
                    M.next &&
                      Ht(G.Z, {
                        width: '24px',
                        height: '24px',
                        src: ''.concat(w.Xs, '/image/julia/nft/naraka/caret.svg'),
                        onClick: function () {
                          return null === n || void 0 === n ? void 0 : n.current.slick.slickNext()
                        },
                        sx: { position: 'absolute', zIndex: 1, top: '50%', right: 0, marginTop: '-12px' },
                      }),
                  ),
              ),
              t.buttonText &&
                Ht(
                  gt.Z,
                  {
                    width: '160px',
                    height: '40px',
                    sx: {
                      display: ['block', 'none'],
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    },
                  },
                  Ht(
                    b.Z,
                    {
                      href: (0, v.KQ)(it(U.buttonLink, null === U || void 0 === U ? void 0 : U.linkType)),
                      target: '_blank',
                      color: 't.primary',
                      sx: { width: '100%', height: '32px', lineHeight: '32px', display: 'block' },
                    },
                    o(''.concat(a, '-').concat(u, '-').concat(p, '-buttonText-').concat(d), {
                      defaultValue: t.buttonText,
                    }),
                  ),
                ),
            ),
          )
        )
      }
      var Bt = ['eventNumber', 'eventConfigJsonString'],
        Kt = u().createElement,
        Rt = {
          Header1: K,
          Header2: O,
          Header3: J,
          Artist1: et,
          Artist2: at,
          Copywriting1: st,
          Copywriting2: ft,
          Copywriting3: function (t) {
            var e = (0, f.ZK)(),
              o = t.comopnentType,
              n = t.comopnentName,
              i = t.index,
              r = t.eventNumber,
              l = nt(t),
              a = l.bgColor,
              c = l.fontColor
            return ht(
              $,
              { bg: !0, bgColor: a, mainColor: c, bgImage: null === t || void 0 === t ? void 0 : t.bgImage },
              ht(
                g.Z,
                {
                  height: ['200px', '399px', '399px'],
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                ht(
                  h.Z,
                  {
                    color: c,
                    sx: {
                      position: 'relative',
                      zIndex: 9,
                      color: '#fff',
                      textAlign: 'center',
                      'white-space': 'pre-wrap',
                    },
                    marginBottom: ['24px', '32px', '40px'],
                    fontSize: ['16px', '32px', '48px'],
                    lineHeight: ['24px', '40px', '56px'],
                    fontWeight: '600',
                    width: ['327px', '540px', '100%'],
                  },
                  'Open ',
                  ht(h.Z, { sx: { display: 'inline-block', color: 'rgb(235, 172, 14)' } }, 'mystery box'),
                  ' to',
                  ' ',
                  e(''.concat(o, '-').concat(n, '-').concat(i, '-description-').concat(r), {
                    defaultValue: null === t || void 0 === t ? void 0 : t.description,
                  }),
                ),
                ht(
                  gt.Z,
                  {
                    sx: { position: 'relative', zIndex: 9, height: '44px', borderRadius: '0', minWidth: '132px' },
                    variant: 'primary',
                  },
                  ht(
                    b.Z,
                    {
                      href: (0, v.KQ)(
                        it(
                          null === t || void 0 === t ? void 0 : t.buttonLink,
                          null === t || void 0 === t ? void 0 : t.linkType,
                        ),
                      ),
                      target: '_blank',
                      color: 't.primary',
                      sx: {
                        width: '100%',
                        height: '42px',
                        lineHeight: '42px',
                        display: 'block',
                        position: 'relative',
                        zIndex: 1,
                      },
                    },
                    e(''.concat(o, '-').concat(n, '-').concat(i, '-buttonText-').concat(r), {
                      defaultValue: null === t || void 0 === t ? void 0 : t.buttonText,
                    }),
                  ),
                  ht(G.Z, {
                    src: ''.concat(w.Xs, '/image/julia/nft/topgoal/btn-bg.png'),
                    sx: { position: 'absolute', right: '0', top: '0', bottom: 0, width: '98px' },
                  }),
                ),
              ),
            )
          },
          Copywriting4: function (t) {
            return bt(
              I.Z,
              { sx: { position: 'relative' } },
              bt(G.Z, { src: null === t || void 0 === t ? void 0 : t.bgImage, width: '100%' }),
              bt(b.Z, {
                href: (0, v.KQ)((0, k.I)(t.buttonLink)),
                target: '_blank',
                sx: {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: 'block',
                  zIndex: 1,
                  cursor: 'pointer',
                },
              }),
            )
          },
          Copywriting5: function (t) {
            var e = (0, f.ZK)(),
              o = t.comopnentType,
              n = t.comopnentName,
              i = t.index,
              r = t.eventNumber,
              l = nt(t),
              a = l.bgColor,
              u = l.fontColor,
              p = (0, c.useState)(320),
              d = p[0],
              x = p[1],
              s = (0, c.useState)(320),
              m = s[0],
              b = s[1],
              w = (0, c.createRef)(null)
            return (
              (0, c.useEffect)(
                function () {
                  var e =
                    (null === t || void 0 === t ? void 0 : t.workImage) ||
                    (null === t || void 0 === t ? void 0 : t.workCover)
                  ;(0, k.pS)((0, v.U1)(e), function (t, e) {
                    if (+t > 0) {
                      var o = Math.round((m / e) * t)
                      x(o)
                    }
                  })
                },
                [t, m],
              ),
              (0, c.useEffect)(
                function () {
                  var t = w.current.offsetWidth
                  t && b(t)
                },
                [w],
              ),
              Zt(
                $,
                { bgColor: a, mainColor: u, bgImage: null === t || void 0 === t ? void 0 : t.bgImage },
                Zt(
                  g.Z,
                  { flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
                  (null === t || void 0 === t ? void 0 : t.mainTitle) &&
                    Zt(
                      h.Z,
                      {
                        color: u,
                        as: 'h2',
                        sx: { position: 'relative', color: '#fff', textAlign: 'center', 'white-space': 'pre-wrap' },
                        marginBottom: ['8px', '8px', '16px'],
                        fontSize: ['20px', '32px', '40px'],
                        lineHeight: ['28px', '40px', '48px'],
                        fontWeight: '600',
                      },
                      e(''.concat(o, '-').concat(n, '-').concat(i, '-mainTitle-').concat(r), {
                        defaultValue: null === t || void 0 === t ? void 0 : t.mainTitle,
                      }),
                    ),
                  (null === t || void 0 === t ? void 0 : t.subTitle) &&
                    Zt(
                      h.Z,
                      {
                        variant: 'body2',
                        color: u,
                        sx: {
                          position: 'relative',
                          zIndex: 9,
                          color: '#fff',
                          textAlign: 'center',
                          'white-space': 'pre-wrap',
                        },
                        fontSize: ['12px', '14px', '16px'],
                        marginBottom: ['24px', '32px', '40px'],
                      },
                      e(''.concat(o, '-').concat(n, '-').concat(i, '-subTitle-').concat(r), {
                        defaultValue: null === t || void 0 === t ? void 0 : t.subTitle,
                      }),
                    ),
                  Zt(
                    I.Z,
                    {
                      ref: w,
                      width: ['343px', '320px', '640px'],
                      height: d,
                      sx: { borderRadius: '8px', overflow: 'hidden' },
                      onClick: function () {
                        rt(
                          null === t || void 0 === t ? void 0 : t.buttonLink,
                          null === t || void 0 === t ? void 0 : t.linkType,
                        )
                      },
                    },
                    Zt(wt.Z, {
                      auto: !1,
                      preview: !1,
                      disableFilter: !0,
                      disableBorder: !0,
                      withZipped: !0,
                      type: V[null === t || void 0 === t ? void 0 : t.workType],
                      sourceUrl:
                        (null === t || void 0 === t ? void 0 : t.workImage) ||
                        (null === t || void 0 === t ? void 0 : t.workVideo) ||
                        (null === t || void 0 === t ? void 0 : t.workAudio),
                      src:
                        (null === t || void 0 === t ? void 0 : t.workImage) ||
                        (null === t || void 0 === t ? void 0 : t.workCover),
                    }),
                  ),
                ),
              )
            )
          },
          Copywriting6: function (t) {
            var e,
              o = (0, f.ZK)(),
              n = t.comopnentType,
              i = t.comopnentName,
              r = t.index,
              l = t.eventNumber,
              a = t.title,
              u = nt(t),
              p = u.bgColor,
              d = u.fontColor,
              x = u.cardColor,
              s = (null === t || void 0 === t || null === (e = t.list) || void 0 === e ? void 0 : e.listName2) || [],
              m = +(null === t || void 0 === t ? void 0 : t.rowNumber),
              b = (0, c.useState)([]),
              w = b[0],
              Z = b[1],
              C = (0, c.useState)(m),
              y = C[0],
              T = C[1],
              S = (0, c.useState)(!1),
              E = S[0],
              z = S[1],
              N = (0, c.useState)(320),
              F = N[0],
              V = N[1],
              D = (0, c.useState)(320),
              A = D[0],
              W = D[1],
              H = (0, c.useState)(0),
              j = H[0],
              B = H[1],
              K = (0, c.createRef)(null),
              G = (0, c.useCallback)(
                function () {
                  Z(s.slice(0, m ? 3 * y : s.length))
                },
                [y],
              ),
              M = (0, c.useCallback)(function () {
                T(function (t) {
                  return t >= s.length / 3 ? m : t + y
                })
              }, [])
            return (
              (0, c.useEffect)(
                function () {
                  var t,
                    e = null === (t = s[0]) || void 0 === t ? void 0 : t.coverImg
                  ;(0, k.pS)((0, v.U1)(e), function (t, e) {
                    if (+t > 0) {
                      var o = Math.round((A / e) * t)
                      V(o)
                    }
                  })
                },
                [A],
              ),
              (0, c.useEffect)(
                function () {
                  var t,
                    e = null === K || void 0 === K || null === (t = K.current) || void 0 === t ? void 0 : t.offsetWidth
                  e && W(e)
                },
                [K],
              ),
              (0, c.useEffect)(
                function () {
                  G()
                },
                [y],
              ),
              (0, c.useEffect)(
                function () {
                  var t = (null === s || void 0 === s ? void 0 : s.length) || 0
                  z(m > 0 && t > 3 * m && w.length <= t)
                },
                [w],
              ),
              (0, c.useEffect)(
                function () {
                  y === m && j > 0 && window.scrollTo({ top: j })
                },
                [w],
              ),
              (0, c.useEffect)(
                function () {
                  w.length <= 3 * m * 2 &&
                    w.length > 3 * m &&
                    w.length <= s.length &&
                    B(document.documentElement.scrollTop)
                },
                [w],
              ),
              Tt(
                $,
                {
                  bgColor: p,
                  mainColor: d,
                  subColor: d,
                  bgImage: null === t || void 0 === t ? void 0 : t.bgImage,
                  title: a,
                },
                Tt(
                  I.Z,
                  null,
                  Tt(
                    Q.Z,
                    {
                      columns: [1, 3, 3],
                      sx: {
                        position: 'relative',
                        width: '100%',
                        gridColumnGap: ['0', '24px', '24px'],
                        gridRowGap: ['16px', '32px', '32px'],
                      },
                    },
                    w.map(function (e, a) {
                      var c
                      return Tt(
                        g.Z,
                        {
                          ref: K,
                          key: a,
                          flexDirection: 'column',
                          onClick: function () {
                            return rt(
                              null === e || void 0 === e ? void 0 : e.buttonLink,
                              null === e || void 0 === e ? void 0 : e.linkType,
                            )
                          },
                          bg: x,
                          sx:
                            ((c = { position: 'relative', borderRadius: [4, 4, 8] }),
                            (0, R.Z)(c, 'borderRadius', '8px'),
                            (0, R.Z)(c, 'overflow', 'hidden'),
                            (0, R.Z)(c, 'cursor', 'pointer'),
                            (0, R.Z)(c, '&:hover', {
                              boxShadow:
                                '0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 2px rgba(94, 102, 115, 0.9)',
                            }),
                            c),
                        },
                        Tt(
                          I.Z,
                          { sx: { position: 'relative', width: '100%', height: F } },
                          Tt(
                            I.Z,
                            { sx: { position: 'absolute', top: '12px', right: '12px', zIndex: 1 } },
                            Tt(
                              yt,
                              Object.assign({}, t, {
                                parentIndex: r,
                                index: a,
                                tagColor: null === e || void 0 === e ? void 0 : e.tagColor,
                                tagText: null === e || void 0 === e ? void 0 : e.tagText,
                              }),
                            ),
                          ),
                          Tt(
                            I.Z,
                            { height: F },
                            Tt(wt.Z, {
                              disableFilter: !0,
                              disableBorder: !0,
                              withZipped: !0,
                              isTransparent: !0,
                              auto: !1,
                              preview: !1,
                              type: 'IMAGE',
                              sourceUrl: e.coverImg,
                              src: e.coverImg,
                            }),
                          ),
                        ),
                        (e.title || e.description) &&
                          Tt(
                            g.Z,
                            { flexDirection: 'column', flex: 1, p: [16, 16, 24] },
                            e.title &&
                              Tt(
                                h.Z,
                                {
                                  variant: 'headline5',
                                  as: 'h5',
                                  fontSize: ['20px', '20px', '24px'],
                                  fontWeight: '500',
                                  color: d,
                                  mb: [12, 12, 16],
                                  sx: { 'word-break': 'break-all' },
                                },
                                o(''.concat(n, '-').concat(i, '-').concat(r, '-').concat(a, '-title-').concat(l), {
                                  defaultValue: e.title,
                                }),
                              ),
                            e.description &&
                              Tt(
                                h.Z,
                                {
                                  variant: 'body2',
                                  fontSize: ['12px', '14px', '14px'],
                                  color: d,
                                  sx: { opacity: 0.8 },
                                },
                                o(
                                  ''.concat(n, '-').concat(i, '-').concat(r, '-').concat(a, '-description-').concat(l),
                                  { defaultValue: e.description },
                                ),
                              ),
                          ),
                      )
                    }),
                  ),
                  E &&
                    Tt(
                      h.Z,
                      {
                        variant: 'subtitle2',
                        color: d,
                        mt: [40],
                        sx: { cursor: 'pointer', textAlign: 'center', opacity: 0.8, '&:hover': { opacity: 1 } },
                        onClick: M,
                      },
                      (null === w || void 0 === w ? void 0 : w.length) !==
                        (null === s || void 0 === s ? void 0 : s.length)
                        ? o('winter-button-show-more', { defaultValue: 'Show more' })
                        : o('winter-button-show-less', { defaultValue: 'Show less' }),
                    ),
                ),
              )
            )
          },
          Copywriting7: function (t) {
            var e,
              o = (0, f.ZK)(),
              n = t.comopnentType,
              i = t.comopnentName,
              r = t.index,
              l = t.eventNumber,
              a = t.title,
              c = nt(t),
              u = c.bgColor,
              p = c.fontColor,
              d = c.cardColor,
              x = (null === t || void 0 === t || null === (e = t.list) || void 0 === e ? void 0 : e.listName2) || []
            return It(
              $,
              {
                bgColor: u,
                mainColor: p,
                subColor: p,
                bgImage: null === t || void 0 === t ? void 0 : t.bgImage,
                title: a,
              },
              It(
                Q.Z,
                {
                  columns: 1,
                  sx: {
                    position: 'relative',
                    width: '100%',
                    gridColumnGap: ['0', '24px', '24px'],
                    gridRowGap: ['16px', '32px', '24px'],
                  },
                },
                x.map(function (t, e) {
                  return It(
                    g.Z,
                    {
                      key: e,
                      flexDirection: 'column',
                      onClick: function () {
                        return rt(
                          null === t || void 0 === t ? void 0 : t.buttonLink,
                          null === t || void 0 === t ? void 0 : t.linkType,
                        )
                      },
                      sx: { position: 'relative' },
                    },
                    It(
                      g.Z,
                      { flexDirection: 'column', flex: 1 },
                      t.title &&
                        It(
                          h.Z,
                          {
                            variant: 'headline5',
                            as: 'h5',
                            fontSize: 20,
                            fontWeight: '500',
                            color: p,
                            mb: [12, 12, 16],
                            sx: { 'word-break': 'break-all' },
                          },
                          ''.concat(e + 1, '. '),
                          o(''.concat(n, '-').concat(i, '-').concat(r, '-').concat(e, '-title-').concat(l), {
                            defaultValue: t.title,
                          }),
                        ),
                      t.description &&
                        It(
                          h.Z,
                          { bg: d, variant: 'body2', color: p, p: [16], fontSize: 16 },
                          o(''.concat(n, '-').concat(i, '-').concat(r, '-').concat(e, '-description-').concat(l), {
                            defaultValue: t.description,
                          }),
                        ),
                    ),
                  )
                }),
              ),
            )
          },
          Works1: Vt,
          Works2: Wt,
          Works3: jt,
        }
      function Gt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = (0, f.ZK)(),
          o = t.eventNumber,
          n = t.eventConfigJsonString,
          i = (0, a.Z)(t, Bt),
          r = (0, x.useRouter)(),
          s = r._history.location.query,
          m = +(null === s || void 0 === s ? void 0 : s.isDev) || 0,
          g = (0, c.useState)({}),
          h = g[0],
          b = g[1],
          w = (0, c.useState)([]),
          Z = w[0],
          k = w[1],
          C = (0, c.useState)(''),
          y = C[0],
          I = C[1]
        return (
          (0, c.useEffect)(
            function () {
              '{}' !== JSON.stringify(t) && (k(JSON.parse(n)), b((0, l.Z)({}, i)))
            },
            [t],
          ),
          (0, c.useEffect)(function () {
            var t = window.location,
              e = t.origin,
              o = t.pathname
            I(''.concat(e).concat(o))
          }, []),
          Kt(
            d.X,
            null,
            Kt(
              p.q,
              null,
              Kt(
                'title',
                null,
                e('eventName-'.concat(o), { defaultValue: h.eventName }),
                '|',
                e('seo-title', { defaultValue: 'Binance NFT' }),
              ),
              Kt('meta', {
                name: 'keywords',
                content: ''
                  .concat(e('eventName-'.concat(o), { defaultValue: h.eventName }), ', ')
                  .concat(
                    e('seo-keywords', {
                      defaultValue:
                        'NFT, mystery box, erc721, bep721, tokens, tokenization, digital arts, digital collectible, crypto, blockchain, marketplace',
                    }),
                  ),
              }),
              Kt('meta', {
                name: 'description',
                content: e('eventDescription-'.concat(o), {
                  defaultValue: (null === h || void 0 === h ? void 0 : h.eventDescription) || '',
                }),
              }),
              Kt('meta', {
                property: 'og:description',
                content: e('eventDescription-'.concat(o), {
                  defaultValue: (null === h || void 0 === h ? void 0 : h.eventDescription) || '',
                }),
              }),
              Kt('meta', { property: 'og:title', content: e('eventName-'.concat(o), { defaultValue: h.eventName }) }),
              Kt('meta', { property: 'og:image', content: h.eventImage }),
              Kt('link', { href: (0, v.KQ)(y), rel: 'canonical' }),
            ),
            !m && 2 != h.status && Kt(T, { status: h.status }),
            (m || 2 == h.status) &&
              Z.map(function (t, e) {
                var n, i, r
                return Kt(
                  'div',
                  { key: e },
                  Rt[null === t || void 0 === t || null === (n = t.admin) || void 0 === n ? void 0 : n.name] &&
                    u().createElement(
                      Rt[null === t || void 0 === t ? void 0 : t.admin.name],
                      (0, l.Z)(
                        (0, l.Z)({}, t.render),
                        {},
                        {
                          comopnentType:
                            null === t || void 0 === t || null === (i = t.admin) || void 0 === i ? void 0 : i.type,
                          comopnentName:
                            null === t || void 0 === t || null === (r = t.admin) || void 0 === r ? void 0 : r.name,
                          index: e,
                          eventNumber: o,
                        },
                      ),
                    ),
                )
              }),
          )
        )
      }
      Gt.getInitialProps = (function () {
        var t = (0, r.Z)(
          i().mark(function t(e) {
            var o, n, r, l, a, c, u, p, d
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o = e.pathname),
                        (n = e.query.isDev),
                        (r = o.split('/').pop().split('?')[0]),
                        (l = /^\d+$/.test(r)),
                        (a = l ? 'FETCH_EVENT_DETAIL' : 'FETCH_EVENT_DETAIL_NEW'),
                        (t.prev = 4),
                        (c = n ? ''.concat(s.Z[a], '/').concat(r, '?isDev=1') : ''.concat(s.Z[a], '/').concat(r)),
                        (t.next = 8),
                        (0, m.U2)(c)
                      )
                    case 8:
                      return (u = t.sent), (p = u.data), (d = void 0 === p ? {} : p), t.abrupt('return', d)
                    case 14:
                      return (t.prev = 14), (t.t0 = t.catch(4)), t.abrupt('return', { eventNumber: r })
                    case 17:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              null,
              [[4, 14]],
            )
          }),
        )
        return function (e) {
          return t.apply(this, arguments)
        }
      })()
      const Mt = Gt
    },
  },
])
