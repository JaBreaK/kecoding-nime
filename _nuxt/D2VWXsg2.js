import {
  f as P,
  g as x,
  p as O,
  e as V,
  aF as A,
  h as D,
  D as j,
  I as R,
  i as F,
  aG as q,
  a8 as K,
  aH as E,
  t as C,
  a0 as w,
  aI as U,
  ab as Y,
  a3 as G,
  ak as J,
  a4 as Q,
  a5 as Z,
  Q as W,
  am as X,
  b as ee,
  a as te,
} from "./CPIMTh_-.js";
import {
  d as I,
  a as _,
  c as z,
  k as ae,
  l as ne,
  m as oe,
  w as le,
  z as n,
  B as L,
  E as re,
  n as ce,
  g as se,
  I as ie,
  J as ue,
  L as k,
  Y as T,
  u as de,
  q as fe,
} from "./CS_v0reC.js";
import { _ as me } from "./DlAUqK2U.js";
function ve(e, d) {
  let t = null,
    s = 0;
  return function (...i) {
    if (t) return;
    const c = Date.now() - s,
      r = () => {
        (s = Date.now()), (t = !1), e.apply(this, i);
      };
    c >= d ? r() : (t = setTimeout(r, d));
  };
}
const [be, S] = P("back-top"),
  ge = {
    right: x,
    bottom: x,
    zIndex: x,
    target: [String, Object],
    offset: O(200),
    immediate: Boolean,
    teleport: { type: [String, Object], default: "body" },
  };
var Ae = I({
  name: be,
  inheritAttrs: !1,
  props: ge,
  emits: ["click"],
  setup(e, { emit: d, slots: t, attrs: s }) {
    let i = !1;
    const c = _(!1),
      r = _(),
      a = _(),
      g = z(() => V(A(e.zIndex), { right: D(e.right), bottom: D(e.bottom) })),
      l = (u) => {
        var f;
        d("click", u),
          (f = a.value) == null ||
            f.scrollTo({ top: 0, behavior: e.immediate ? "auto" : "smooth" });
      },
      o = () => {
        c.value = a.value ? K(a.value) >= +e.offset : !1;
      },
      m = () => {
        const { target: u } = e;
        if (typeof u == "string") {
          const f = document.querySelector(u);
          if (f) return f;
        } else return u;
      },
      v = () => {
        F &&
          ce(() => {
            (a.value = e.target ? m() : q(r.value)), o();
          });
      };
    return (
      j("scroll", ve(o, 100), { target: a }),
      ae(v),
      ne(() => {
        i && ((c.value = !0), (i = !1));
      }),
      oe(() => {
        c.value && e.teleport && ((c.value = !1), (i = !0));
      }),
      le(() => e.target, v),
      () => {
        const u = n(
          "div",
          L(
            {
              ref: e.teleport ? void 0 : r,
              class: S({ active: c.value }),
              style: g.value,
              onClick: l,
            },
            s
          ),
          [
            t.default
              ? t.default()
              : n(R, { name: "back-top", class: S("icon") }, null),
          ]
        );
        return e.teleport
          ? [
              n("div", { ref: r, class: S("placeholder") }, null),
              n(re, { to: e.teleport }, { default: () => [u] }),
            ]
          : u;
      }
    );
  },
});
const [he, b] = P("nav-bar"),
  xe = {
    title: String,
    fixed: Boolean,
    zIndex: x,
    border: C,
    leftText: String,
    rightText: String,
    leftDisabled: Boolean,
    rightDisabled: Boolean,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: C,
  };
var Re = I({
  name: he,
  props: xe,
  emits: ["clickLeft", "clickRight"],
  setup(e, { emit: d, slots: t }) {
    const s = _(),
      i = E(s, b),
      c = (o) => {
        e.leftDisabled || d("clickLeft", o);
      },
      r = (o) => {
        e.rightDisabled || d("clickRight", o);
      },
      a = () =>
        t.left
          ? t.left()
          : [
              e.leftArrow &&
                n(R, { class: b("arrow"), name: "arrow-left" }, null),
              e.leftText && n("span", { class: b("text") }, [e.leftText]),
            ],
      g = () =>
        t.right ? t.right() : n("span", { class: b("text") }, [e.rightText]),
      l = () => {
        const { title: o, fixed: m, border: v, zIndex: u } = e,
          f = A(u),
          h = e.leftArrow || e.leftText || t.left,
          B = e.rightText || t.right;
        return n(
          "div",
          {
            ref: s,
            style: f,
            class: [
              b({ fixed: m }),
              { [U]: v, "van-safe-area-top": e.safeAreaInsetTop },
            ],
          },
          [
            n("div", { class: b("content") }, [
              h &&
                n(
                  "div",
                  {
                    class: [
                      b("left", { disabled: e.leftDisabled }),
                      e.clickable && !e.leftDisabled ? w : "",
                    ],
                    onClick: c,
                  },
                  [a()]
                ),
              n("div", { class: [b("title"), "van-ellipsis"] }, [
                t.title ? t.title() : o,
              ]),
              B &&
                n(
                  "div",
                  {
                    class: [
                      b("right", { disabled: e.rightDisabled }),
                      e.clickable && !e.rightDisabled ? w : "",
                    ],
                    onClick: r,
                  },
                  [g()]
                ),
            ]),
          ]
        );
      };
    return () => (e.fixed && e.placeholder ? i(l) : l());
  },
});
const [p, $] = P("tabbar"),
  _e = {
    route: Boolean,
    fixed: C,
    border: C,
    zIndex: x,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: O(0),
    safeAreaInsetBottom: { type: Boolean, default: null },
  },
  H = Symbol(p);
var ke = I({
  name: p,
  props: _e,
  emits: ["change", "update:modelValue"],
  setup(e, { emit: d, slots: t }) {
    const s = _(),
      { linkChildren: i } = Y(H),
      c = E(s, $),
      r = () => {
        var l;
        return (l = e.safeAreaInsetBottom) != null ? l : e.fixed;
      },
      a = () => {
        var l;
        const { fixed: o, zIndex: m, border: v } = e;
        return n(
          "div",
          {
            ref: s,
            role: "tablist",
            style: A(m),
            class: [$({ fixed: o }), { [G]: v, "van-safe-area-bottom": r() }],
          },
          [(l = t.default) == null ? void 0 : l.call(t)]
        );
      };
    return (
      i({
        props: e,
        setActive: (l, o) => {
          J(e.beforeChange, {
            args: [l],
            done() {
              d("update:modelValue", l), d("change", l), o();
            },
          });
        },
      }),
      () => (e.fixed && e.placeholder ? c(a) : a())
    );
  },
});
const [Be, y] = P("tabbar-item"),
  Te = V({}, Q, {
    dot: Boolean,
    icon: String,
    name: x,
    badge: x,
    badgeProps: Object,
    iconPrefix: String,
  });
var Ce = I({
  name: Be,
  props: Te,
  emits: ["click"],
  setup(e, { emit: d, slots: t }) {
    const s = Z(),
      i = se().proxy,
      { parent: c, index: r } = W(H);
    if (!c) return;
    const a = z(() => {
        var o;
        const { route: m, modelValue: v } = c.props;
        if (m && "$route" in i) {
          const { $route: u } = i,
            { to: f } = e,
            h = ee(f) ? f : { path: f };
          return !!u.matched.find((B) => {
            const M = "path" in h && h.path === B.path,
              N = "name" in h && h.name === B.name;
            return M || N;
          });
        }
        return ((o = e.name) != null ? o : r.value) === v;
      }),
      g = (o) => {
        var m;
        a.value || c.setActive((m = e.name) != null ? m : r.value, s),
          d("click", o);
      },
      l = () => {
        if (t.icon) return t.icon({ active: a.value });
        if (e.icon)
          return n(R, { name: e.icon, classPrefix: e.iconPrefix }, null);
      };
    return () => {
      var o;
      const { dot: m, badge: v } = e,
        { activeColor: u, inactiveColor: f } = c.props,
        h = a.value ? u : f;
      return n(
        "div",
        {
          role: "tab",
          class: y({ active: a.value }),
          style: { color: h },
          tabindex: 0,
          "aria-selected": a.value,
          onClick: g,
        },
        [
          n(X, L({ dot: m, class: y("icon"), content: v }, e.badgeProps), {
            default: l,
          }),
          n("div", { class: y("text") }, [
            (o = t.default) == null ? void 0 : o.call(t, { active: a.value }),
          ]),
        ]
      );
    };
  },
});
const Pe = {
    __name: "Tabbar",
    props: { active: String },
    setup(e) {
      const t = _(e.active),
        s = te(),
        i = () => {
          s.push("/");
        };
      return (c, r) => {
        const a = Ce,
          g = ke;
        return (
          ie(),
          ue("div", null, [
            n(
              g,
              {
                class: "menu-bottom mx-auto",
                modelValue: de(t),
                "onUpdate:modelValue":
                  r[1] || (r[1] = (l) => (fe(t) ? (t.value = l) : null)),
              },
              {
                default: k(() => [
                  n(
                    a,
                    {
                      name: "home",
                      onClick: r[0] || (r[0] = (l) => i()),
                      icon: "home-o",
                    },
                    { default: k(() => [T("Home")]), _: 1 }
                  ),
                  n(
                    a,
                    { name: "search", to: "/search", icon: "search" },
                    { default: k(() => [T("Search")]), _: 1 }
                  ),
                  n(
                    a,
                    { name: "history", to: "/history", icon: "clock-o" },
                    { default: k(() => [T("History")]), _: 1 }
                  ),
                  n(
                    a,
                    { name: "setting", to: "/settings", icon: "setting-o" },
                    { default: k(() => [T("Setting")]), _: 1 }
                  ),
                ]),
                _: 1,
              },
              8,
              ["modelValue"]
            ),
          ])
        );
      };
    },
  },
  De = me(Pe, [["__scopeId", "data-v-c09b1b2f"]]);
export { De as _, Ae as a, Re as s };
