import {
  a as z,
  a7 as De,
  d as j,
  r as ge,
  c as x,
  w as P,
  k as me,
  l as ke,
  m as He,
  y as Ne,
  z as S,
  n as L,
  A as Le,
  N as We,
  a8 as Xe,
  a4 as Ye,
  p as Ve,
  C as Fe,
  D as Ze,
  B as Ue,
  g as Ke,
} from "./CS_v0reC.js";
import {
  a9 as Ie,
  H as fe,
  a8 as je,
  aa as qe,
  w as be,
  f as q,
  t as D,
  g as W,
  p as U,
  a7 as Ge,
  ab as Re,
  E as p,
  ac as Be,
  ad as Je,
  ae as Qe,
  B as $e,
  D as _e,
  G as Q,
  af as ve,
  V as pe,
  ag as ce,
  ah as ue,
  o as et,
  a6 as tt,
  ai as at,
  C as nt,
  h as we,
  J as he,
  a3 as lt,
  M as it,
  aj as ye,
  ak as ot,
  al as st,
  F as Te,
  am as rt,
  Q as Ae,
  e as ct,
  a4 as ut,
  P as dt,
  X as Se,
} from "./CPIMTh_-.js";
import { u as Pe } from "./BUTK-O5U.js";
import { s as ft, u as vt } from "./DydMEu4S.js";
import { T as ht } from "./oIgI_nF1.js";
function gt(e, o, r) {
  let s,
    c = 0;
  const t = e.scrollLeft,
    d = r === 0 ? 1 : Math.round((r * 1e3) / 16);
  function u() {
    Ie(s);
  }
  function f() {
    (e.scrollLeft += (o - t) / d), ++c < d && (s = fe(f));
  }
  return f(), u;
}
function mt(e, o, r, s) {
  let c,
    t = je(e);
  const d = t < o,
    u = r === 0 ? 1 : Math.round((r * 1e3) / 16),
    f = (o - t) / u;
  function h() {
    Ie(c);
  }
  function l() {
    (t += f),
      ((d && t > o) || (!d && t < o)) && (t = o),
      qe(e, t),
      (d && t < o) || (!d && t > o) ? (c = fe(l)) : s && (c = fe(s));
  }
  return l(), h;
}
function bt() {
  const e = z([]),
    o = [];
  return (
    De(() => {
      e.value = [];
    }),
    [
      e,
      (s) => (
        o[s] ||
          (o[s] = (c) => {
            e.value[s] = c;
          }),
        o[s]
      ),
    ]
  );
}
const wt = be(ft),
  [ze, ae] = q("swipe"),
  yt = {
    loop: D,
    width: W,
    height: W,
    vertical: Boolean,
    autoplay: U(0),
    duration: U(500),
    touchable: D,
    lazyRender: Boolean,
    initialSwipe: U(0),
    indicatorColor: String,
    showIndicators: D,
    stopPropagation: D,
  },
  Ee = Symbol(ze);
var Tt = j({
  name: ze,
  props: yt,
  emits: ["change", "dragStart", "dragEnd"],
  setup(e, { emit: o, slots: r }) {
    const s = z(),
      c = z(),
      t = ge({
        rect: null,
        width: 0,
        height: 0,
        offset: 0,
        active: 0,
        swiping: !1,
      });
    let d = !1;
    const u = Ge(),
      { children: f, linkChildren: h } = Re(Ee),
      l = x(() => f.length),
      b = x(() => t[e.vertical ? "height" : "width"]),
      C = x(() => (e.vertical ? u.deltaY.value : u.deltaX.value)),
      k = x(() =>
        t.rect
          ? (e.vertical ? t.rect.height : t.rect.width) - b.value * l.value
          : 0
      ),
      w = x(() => (b.value ? Math.ceil(Math.abs(k.value) / b.value) : l.value)),
      I = x(() => l.value * b.value),
      g = x(() => (t.active + l.value) % l.value),
      K = x(() => {
        const n = e.vertical ? "vertical" : "horizontal";
        return u.direction.value === n;
      }),
      m = x(() => {
        const n = {
          transitionDuration: `${t.swiping ? 0 : e.duration}ms`,
          transform: `translate${e.vertical ? "Y" : "X"}(${+t.offset.toFixed(
            2
          )}px)`,
        };
        if (b.value) {
          const y = e.vertical ? "height" : "width",
            T = e.vertical ? "width" : "height";
          (n[y] = `${I.value}px`), (n[T] = e[T] ? `${e[T]}px` : "");
        }
        return n;
      }),
      X = (n) => {
        const { active: y } = t;
        return n
          ? e.loop
            ? ce(y + n, -1, l.value)
            : ce(y + n, 0, w.value)
          : y;
      },
      Y = (n, y = 0) => {
        let T = n * b.value;
        e.loop || (T = Math.min(T, -k.value));
        let _ = y - T;
        return e.loop || (_ = ce(_, k.value, 0)), _;
      },
      B = ({ pace: n = 0, offset: y = 0, emitChange: T }) => {
        if (l.value <= 1) return;
        const { active: _ } = t,
          a = X(n),
          i = Y(a, y);
        if (e.loop) {
          if (f[0] && i !== k.value) {
            const v = i < k.value;
            f[0].setOffset(v ? I.value : 0);
          }
          if (f[l.value - 1] && i !== 0) {
            const v = i > 0;
            f[l.value - 1].setOffset(v ? -I.value : 0);
          }
        }
        (t.active = a), (t.offset = i), T && a !== _ && o("change", g.value);
      },
      M = () => {
        (t.swiping = !0),
          t.active <= -1
            ? B({ pace: l.value })
            : t.active >= l.value && B({ pace: -l.value });
      },
      H = () => {
        M(),
          u.reset(),
          Q(() => {
            (t.swiping = !1), B({ pace: -1, emitChange: !0 });
          });
      },
      G = () => {
        M(),
          u.reset(),
          Q(() => {
            (t.swiping = !1), B({ pace: 1, emitChange: !0 });
          });
      };
    let N;
    const $ = () => clearTimeout(N),
      V = () => {
        $(),
          +e.autoplay > 0 &&
            l.value > 1 &&
            (N = setTimeout(() => {
              G(), V();
            }, +e.autoplay));
      },
      E = (n = +e.initialSwipe) => {
        if (!s.value) return;
        const y = () => {
          var T, _;
          if (!ve(s)) {
            const a = {
              width: s.value.offsetWidth,
              height: s.value.offsetHeight,
            };
            (t.rect = a),
              (t.width = +((T = e.width) != null ? T : a.width)),
              (t.height = +((_ = e.height) != null ? _ : a.height));
          }
          l.value &&
            ((n = Math.min(l.value - 1, n)), n === -1 && (n = l.value - 1)),
            (t.active = n),
            (t.swiping = !0),
            (t.offset = Y(n)),
            f.forEach((a) => {
              a.setOffset(0);
            }),
            V();
        };
        ve(s) ? L().then(y) : y();
      },
      F = () => E(t.active);
    let J;
    const le = (n) => {
        !e.touchable ||
          n.touches.length > 1 ||
          (u.start(n), (d = !1), (J = Date.now()), $(), M());
      },
      ie = (n) => {
        e.touchable &&
          t.swiping &&
          (u.move(n),
          K.value &&
            ((!e.loop &&
              ((t.active === 0 && C.value > 0) ||
                (t.active === l.value - 1 && C.value < 0))) ||
              (pe(n, e.stopPropagation),
              B({ offset: C.value }),
              d || (o("dragStart", { index: g.value }), (d = !0)))));
      },
      ee = () => {
        if (!e.touchable || !t.swiping) return;
        const n = Date.now() - J,
          y = C.value / n;
        if (
          (Math.abs(y) > 0.25 || Math.abs(C.value) > b.value / 2) &&
          K.value
        ) {
          const _ = e.vertical ? u.offsetY.value : u.offsetX.value;
          let a = 0;
          e.loop
            ? (a = _ > 0 ? (C.value > 0 ? -1 : 1) : 0)
            : (a = -Math[C.value > 0 ? "ceil" : "floor"](C.value / b.value)),
            B({ pace: a, emitChange: !0 });
        } else C.value && B({ pace: 0 });
        (d = !1), (t.swiping = !1), o("dragEnd", { index: g.value }), V();
      },
      oe = (n, y = {}) => {
        M(),
          u.reset(),
          Q(() => {
            let T;
            e.loop && n === l.value
              ? (T = t.active === 0 ? 0 : n)
              : (T = n % l.value),
              y.immediate
                ? Q(() => {
                    t.swiping = !1;
                  })
                : (t.swiping = !1),
              B({ pace: T - t.active, emitChange: !0 });
          });
      },
      se = (n, y) => {
        const T = y === g.value,
          _ = T ? { backgroundColor: e.indicatorColor } : void 0;
        return S(
          "i",
          { style: _, class: ae("indicator", { active: T }) },
          null
        );
      },
      re = () => {
        if (r.indicator)
          return r.indicator({ active: g.value, total: l.value });
        if (e.showIndicators && l.value > 1)
          return S(
            "div",
            { class: ae("indicators", { vertical: e.vertical }) },
            [Array(l.value).fill("").map(se)]
          );
      };
    return (
      p({ prev: H, next: G, state: t, resize: F, swipeTo: oe }),
      h({ size: b, props: e, count: l, activeIndicator: g }),
      P(
        () => e.initialSwipe,
        (n) => E(+n)
      ),
      P(l, () => E(t.active)),
      P(() => e.autoplay, V),
      P([Be, Je, () => e.width, () => e.height], F),
      P(Qe(), (n) => {
        n === "visible" ? V() : $();
      }),
      me(E),
      ke(() => E(t.active)),
      $e(() => E(t.active)),
      He($),
      Ne($),
      _e("touchmove", ie, { target: c }),
      () => {
        var n;
        return S("div", { ref: s, class: ae() }, [
          S(
            "div",
            {
              ref: c,
              style: m.value,
              class: ae("track", { vertical: e.vertical }),
              onTouchstartPassive: le,
              onTouchend: ee,
              onTouchcancel: ee,
            },
            [(n = r.default) == null ? void 0 : n.call(r)]
          ),
          re(),
        ]);
      }
    );
  },
});
const St = be(Tt),
  [Ct, Ce] = q("tabs");
var xt = j({
  name: Ct,
  props: {
    count: ue(Number),
    inited: Boolean,
    animated: Boolean,
    duration: ue(W),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: ue(Number),
  },
  emits: ["change"],
  setup(e, { emit: o, slots: r }) {
    const s = z(),
      c = (u) => o("change", u),
      t = () => {
        var u;
        const f = (u = r.default) == null ? void 0 : u.call(r);
        return e.animated || e.swipeable
          ? S(
              St,
              {
                ref: s,
                loop: !1,
                class: Ce("track"),
                duration: +e.duration * 1e3,
                touchable: e.swipeable,
                lazyRender: e.lazyRender,
                showIndicators: !1,
                onChange: c,
              },
              { default: () => [f] }
            )
          : f;
      },
      d = (u) => {
        const f = s.value;
        f && f.state.active !== u && f.swipeTo(u, { immediate: !e.inited });
      };
    return (
      P(() => e.currentIndex, d),
      me(() => {
        d(e.currentIndex);
      }),
      p({ swipeRef: s }),
      () =>
        S(
          "div",
          { class: Ce("content", { animated: e.animated || e.swipeable }) },
          [t()]
        )
    );
  },
});
const [Oe, ne] = q("tabs"),
  kt = {
    type: et("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: U(0),
    duration: U(0.3),
    animated: Boolean,
    ellipsis: D,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: U(0),
    background: String,
    lazyRender: D,
    showHeader: D,
    lineWidth: W,
    lineHeight: W,
    beforeChange: Function,
    swipeThreshold: U(5),
    titleActiveColor: String,
    titleInactiveColor: String,
  },
  Me = Symbol(Oe);
var Nt = j({
  name: Oe,
  props: kt,
  emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
  setup(e, { emit: o, slots: r }) {
    let s, c, t, d, u;
    const f = z(),
      h = z(),
      l = z(),
      b = z(),
      C = Pe(),
      k = tt(f),
      [w, I] = bt(),
      { children: g, linkChildren: K } = Re(Me),
      m = ge({ inited: !1, position: "", lineStyle: {}, currentIndex: -1 }),
      X = x(() => g.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
      Y = x(() => ({ borderColor: e.color, background: e.background })),
      B = (a, i) => {
        var v;
        return (v = a.name) != null ? v : i;
      },
      M = x(() => {
        const a = g[m.currentIndex];
        if (a) return B(a, m.currentIndex);
      }),
      H = x(() => at(e.offsetTop)),
      G = x(() => (e.sticky ? H.value + s : 0)),
      N = (a) => {
        const i = h.value,
          v = w.value;
        if (!X.value || !i || !v || !v[m.currentIndex]) return;
        const A = v[m.currentIndex].$el,
          R = A.offsetLeft - (i.offsetWidth - A.offsetWidth) / 2;
        d && d(), (d = gt(i, R, a ? 0 : +e.duration));
      },
      $ = () => {
        const a = m.inited;
        L(() => {
          const i = w.value;
          if (!i || !i[m.currentIndex] || e.type !== "line" || ve(f.value))
            return;
          const v = i[m.currentIndex].$el,
            { lineWidth: A, lineHeight: R } = e,
            O = v.offsetLeft + v.offsetWidth / 2,
            Z = {
              width: we(A),
              backgroundColor: e.color,
              transform: `translateX(${O}px) translateX(-50%)`,
            };
          if ((a && (Z.transitionDuration = `${e.duration}s`), he(R))) {
            const te = we(R);
            (Z.height = te), (Z.borderRadius = te);
          }
          m.lineStyle = Z;
        });
      },
      V = (a) => {
        const i = a < m.currentIndex ? -1 : 1;
        for (; a >= 0 && a < g.length; ) {
          if (!g[a].disabled) return a;
          a += i;
        }
      },
      E = (a, i) => {
        const v = V(a);
        if (!he(v)) return;
        const A = g[v],
          R = B(A, v),
          O = m.currentIndex !== null;
        m.currentIndex !== v && ((m.currentIndex = v), i || N(), $()),
          R !== e.active &&
            (o("update:active", R), O && o("change", R, A.title)),
          t && !e.scrollspy && it(Math.ceil(ye(f.value) - H.value));
      },
      F = (a, i) => {
        const v = g.find((R, O) => B(R, O) === a),
          A = v ? g.indexOf(v) : 0;
        E(A, i);
      },
      J = (a = !1) => {
        if (e.scrollspy) {
          const i = g[m.currentIndex].$el;
          if (i && k.value) {
            const v = ye(i, k.value) - G.value;
            (c = !0),
              u && u(),
              (u = mt(k.value, v, a ? 0 : +e.duration, () => {
                c = !1;
              }));
          }
        }
      },
      le = (a, i, v) => {
        const { title: A, disabled: R } = g[i],
          O = B(g[i], i);
        R ||
          (ot(e.beforeChange, {
            args: [O],
            done: () => {
              E(i), J();
            },
          }),
          st(a)),
          o("clickTab", { name: O, title: A, event: v, disabled: R });
      },
      ie = (a) => {
        (t = a.isFixed), o("scroll", a);
      },
      ee = (a) => {
        L(() => {
          F(a), J(!0);
        });
      },
      oe = () => {
        for (let a = 0; a < g.length; a++) {
          const { top: i } = Te(g[a].$el);
          if (i > G.value) return a === 0 ? 0 : a - 1;
        }
        return g.length - 1;
      },
      se = () => {
        if (e.scrollspy && !c) {
          const a = oe();
          E(a);
        }
      },
      re = () => {
        if (e.type === "line" && g.length)
          return S("div", { class: ne("line"), style: m.lineStyle }, null);
      },
      n = () => {
        var a, i, v;
        const { type: A, border: R, sticky: O } = e,
          Z = [
            S(
              "div",
              {
                ref: O ? void 0 : l,
                class: [ne("wrap"), { [lt]: A === "line" && R }],
              },
              [
                S(
                  "div",
                  {
                    ref: h,
                    role: "tablist",
                    class: ne("nav", [
                      A,
                      { shrink: e.shrink, complete: X.value },
                    ]),
                    style: Y.value,
                    "aria-orientation": "horizontal",
                  },
                  [
                    (a = r["nav-left"]) == null ? void 0 : a.call(r),
                    g.map((te) => te.renderTitle(le)),
                    re(),
                    (i = r["nav-right"]) == null ? void 0 : i.call(r),
                  ]
                ),
              ]
            ),
            (v = r["nav-bottom"]) == null ? void 0 : v.call(r),
          ];
        return O ? S("div", { ref: l }, [Z]) : Z;
      },
      y = () => {
        $(),
          L(() => {
            var a, i;
            N(!0),
              (i = (a = b.value) == null ? void 0 : a.swipeRef.value) == null ||
                i.resize();
          });
      };
    P(() => [e.color, e.duration, e.lineWidth, e.lineHeight], $),
      P(Be, y),
      P(
        () => e.active,
        (a) => {
          a !== M.value && F(a);
        }
      ),
      P(
        () => g.length,
        () => {
          m.inited &&
            (F(e.active),
            $(),
            L(() => {
              N(!0);
            }));
        }
      );
    const T = () => {
        F(e.active, !0),
          L(() => {
            (m.inited = !0), l.value && (s = Te(l.value).height), N(!0);
          });
      },
      _ = (a, i) => o("rendered", a, i);
    return (
      p({ resize: y, scrollTo: ee }),
      ke($),
      $e($),
      nt(T),
      vt(f, $),
      _e("scroll", se, { target: k, passive: !0 }),
      K({
        id: C,
        props: e,
        setLine: $,
        scrollable: X,
        onRendered: _,
        currentName: M,
        setTitleRefs: I,
        scrollIntoView: N,
      }),
      () =>
        S("div", { ref: f, class: ne([e.type]) }, [
          e.showHeader
            ? e.sticky
              ? S(
                  wt,
                  { container: f.value, offsetTop: H.value, onScroll: ie },
                  { default: () => [n()] }
                )
              : n()
            : null,
          S(
            xt,
            {
              ref: b,
              count: g.length,
              inited: m.inited,
              animated: e.animated,
              duration: e.duration,
              swipeable: e.swipeable,
              lazyRender: e.lazyRender,
              currentIndex: m.currentIndex,
              onChange: E,
            },
            {
              default: () => {
                var a;
                return [(a = r.default) == null ? void 0 : a.call(r)];
              },
            }
          ),
        ])
    );
  },
});
const [It, xe] = q("tab"),
  Rt = j({
    name: It,
    props: {
      id: String,
      dot: Boolean,
      type: String,
      color: String,
      title: String,
      badge: W,
      shrink: Boolean,
      isActive: Boolean,
      disabled: Boolean,
      controls: String,
      scrollable: Boolean,
      activeColor: String,
      inactiveColor: String,
      showZeroBadge: D,
    },
    setup(e, { slots: o }) {
      const r = x(() => {
          const c = {},
            {
              type: t,
              color: d,
              disabled: u,
              isActive: f,
              activeColor: h,
              inactiveColor: l,
            } = e;
          d &&
            t === "card" &&
            ((c.borderColor = d),
            u || (f ? (c.backgroundColor = d) : (c.color = d)));
          const C = f ? h : l;
          return C && (c.color = C), c;
        }),
        s = () => {
          const c = S(
            "span",
            { class: xe("text", { ellipsis: !e.scrollable }) },
            [o.title ? o.title() : e.title]
          );
          return e.dot || (he(e.badge) && e.badge !== "")
            ? S(
                rt,
                { dot: e.dot, content: e.badge, showZero: e.showZeroBadge },
                { default: () => [c] }
              )
            : c;
        };
      return () =>
        S(
          "div",
          {
            id: e.id,
            role: "tab",
            class: [
              xe([
                e.type,
                {
                  grow: e.scrollable && !e.shrink,
                  shrink: e.shrink,
                  active: e.isActive,
                  disabled: e.disabled,
                },
              ]),
            ],
            style: r.value,
            tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
            "aria-selected": e.isActive,
            "aria-disabled": e.disabled || void 0,
            "aria-controls": e.controls,
          },
          [s()]
        );
    },
  }),
  [Bt, $t] = q("swipe-item");
var _t = j({
  name: Bt,
  setup(e, { slots: o }) {
    let r;
    const s = ge({ offset: 0, inited: !1, mounted: !1 }),
      { parent: c, index: t } = Ae(Ee);
    if (!c) return;
    const d = x(() => {
        const h = {},
          { vertical: l } = c.props;
        return (
          c.size.value && (h[l ? "height" : "width"] = `${c.size.value}px`),
          s.offset &&
            (h.transform = `translate${l ? "Y" : "X"}(${s.offset}px)`),
          h
        );
      }),
      u = x(() => {
        const { loop: h, lazyRender: l } = c.props;
        if (!l || r) return !0;
        if (!s.mounted) return !1;
        const b = c.activeIndicator.value,
          C = c.count.value - 1,
          k = b === 0 && h ? C : b - 1,
          w = b === C && h ? 0 : b + 1;
        return (r = t.value === b || t.value === k || t.value === w), r;
      }),
      f = (h) => {
        s.offset = h;
      };
    return (
      me(() => {
        L(() => {
          s.mounted = !0;
        });
      }),
      p({ setOffset: f }),
      () => {
        var h;
        return S("div", { class: $t(), style: d.value }, [
          u.value ? ((h = o.default) == null ? void 0 : h.call(o)) : null,
        ]);
      }
    );
  },
});
const At = be(_t),
  [Pt, de] = q("tab"),
  zt = ct({}, ut, {
    dot: Boolean,
    name: W,
    badge: W,
    title: String,
    disabled: Boolean,
    titleClass: dt,
    titleStyle: [String, Object],
    showZeroBadge: D,
  });
var Lt = j({
  name: Pt,
  props: zt,
  setup(e, { slots: o }) {
    const r = Pe(),
      s = z(!1),
      c = Ke(),
      { parent: t, index: d } = Ae(Me);
    if (!t) return;
    const u = () => {
        var w;
        return (w = e.name) != null ? w : d.value;
      },
      f = () => {
        (s.value = !0),
          t.props.lazyRender &&
            L(() => {
              t.onRendered(u(), e.title);
            });
      },
      h = x(() => {
        const w = u() === t.currentName.value;
        return w && !s.value && f(), w;
      }),
      l = z(""),
      b = z("");
    Le(() => {
      const { titleClass: w, titleStyle: I } = e;
      (l.value = w ? We(w) : ""),
        (b.value = I && typeof I != "string" ? Xe(Ye(I)) : I);
    });
    const C = (w) =>
        S(
          Rt,
          Ue(
            {
              key: r,
              id: `${t.id}-${d.value}`,
              ref: t.setTitleRefs(d.value),
              style: b.value,
              class: l.value,
              isActive: h.value,
              controls: r,
              scrollable: t.scrollable.value,
              activeColor: t.props.titleActiveColor,
              inactiveColor: t.props.titleInactiveColor,
              onClick: (I) => w(c.proxy, d.value, I),
            },
            Se(t.props, ["type", "color", "shrink"]),
            Se(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])
          ),
          { title: o.title }
        ),
      k = z(!h.value);
    return (
      P(h, (w) => {
        w
          ? (k.value = !1)
          : Q(() => {
              k.value = !0;
            });
      }),
      P(
        () => e.title,
        () => {
          t.setLine(), t.scrollIntoView();
        }
      ),
      Ve(ht, h),
      p({ id: r, renderTitle: C }),
      () => {
        var w;
        const I = `${t.id}-${d.value}`,
          { animated: g, swipeable: K, scrollspy: m, lazyRender: X } = t.props;
        if (!o.default && !g) return;
        const Y = m || h.value;
        if (g || K)
          return S(
            At,
            {
              id: r,
              role: "tabpanel",
              class: de("panel-wrapper", { inactive: k.value }),
              tabindex: h.value ? 0 : -1,
              "aria-hidden": !h.value,
              "aria-labelledby": I,
            },
            {
              default: () => {
                var H;
                return [
                  S("div", { class: de("panel") }, [
                    (H = o.default) == null ? void 0 : H.call(o),
                  ]),
                ];
              },
            }
          );
        const M =
          s.value || m || !X
            ? (w = o.default) == null
              ? void 0
              : w.call(o)
            : null;
        return Fe(
          S(
            "div",
            {
              id: r,
              role: "tabpanel",
              class: de("panel"),
              tabindex: Y ? 0 : -1,
              "aria-labelledby": I,
            },
            [M]
          ),
          [[Ze, Y]]
        );
      }
    );
  },
});
export { Nt as a, Lt as s };
