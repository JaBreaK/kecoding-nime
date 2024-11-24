import {
  f as S,
  h as F,
  g as k,
  w as z,
  l as K,
  o as R,
  p as Q,
  t as O,
  q as ee,
  A as E,
  L as te,
  r as ae,
  v as ne,
} from "./CPIMTh_-.js";
import { s as se, _ as oe, a as le } from "./D2VWXsg2.js";
import { s as ie } from "./DydMEu4S.js";
import {
  d as $,
  a as P,
  k as re,
  p as ce,
  J as d,
  z as a,
  B as de,
  F as b,
  I as c,
  L as m,
  M as t,
  N as _e,
  Y as x,
  $ as D,
  a0 as N,
  u as h,
  P as W,
  C as g,
  O as y,
  a2 as V,
  a3 as H,
  Z as M,
  _ as U,
  a4 as ue,
  a1 as q,
  q as me,
  a5 as pe,
  c as he,
  D as fe,
} from "./CS_v0reC.js";
import { s as ve } from "./yLofO9Ja.js";
import { _ as j } from "./D7t2mj_N.js";
import { _ as B } from "./DlAUqK2U.js";
import { s as ge } from "./CdtElGv0.js";
import { s as ye } from "./BCnNlUuK.js";
import { u as we, a as ke, b as be } from "./CUgsq2x-.js";
import { u as $e } from "./CdoDYtDQ.js";
import { s as xe } from "./BOZaj71m.js";
const Se = Symbol.for("nuxt:client-only"),
  Te = $({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, { slots: l, attrs: s }) {
      const o = P(!1);
      return (
        re(() => {
          o.value = !0;
        }),
        ce(Se, !0),
        (r) => {
          var u;
          if (o.value) return (u = l.default) == null ? void 0 : u.call(l);
          const n = l.fallback || l.placeholder;
          if (n) return n();
          const i = r.fallback || r.placeholder || "",
            _ = r.fallbackTag || r.placeholderTag || "span";
          return d(_, s, i);
        }
      );
    },
  }),
  [Ie, Ae] = S("skeleton-title"),
  ze = { round: Boolean, titleWidth: k };
var Pe = $({
  name: Ie,
  props: ze,
  setup(e) {
    return () =>
      a(
        "h3",
        { class: Ae([{ round: e.round }]), style: { width: F(e.titleWidth) } },
        null
      );
  },
});
const De = z(Pe);
var Ne = De;
const [We, je] = S("skeleton-avatar"),
  Be = { avatarSize: k, avatarShape: R("round") };
var Le = $({
  name: We,
  props: Be,
  setup(e) {
    return () =>
      a("div", { class: je([e.avatarShape]), style: K(e.avatarSize) }, null);
  },
});
const Oe = z(Le);
var Ce = Oe;
const L = "100%",
  Fe = { round: Boolean, rowWidth: { type: k, default: L } },
  [Re, Ee] = S("skeleton-paragraph");
var Ve = $({
  name: Re,
  props: Fe,
  setup(e) {
    return () =>
      a(
        "div",
        { class: Ee([{ round: e.round }]), style: { width: e.rowWidth } },
        null
      );
  },
});
const He = z(Ve);
var Me = He;
const [Ue, C] = S("skeleton"),
  qe = "60%",
  Je = {
    row: Q(0),
    round: Boolean,
    title: Boolean,
    titleWidth: k,
    avatar: Boolean,
    avatarSize: k,
    avatarShape: R("round"),
    loading: O,
    animate: O,
    rowWidth: { type: [Number, String, Array], default: L },
  };
var J = $({
  name: Ue,
  inheritAttrs: !1,
  props: Je,
  setup(e, { slots: l, attrs: s }) {
    const o = () => {
        if (e.avatar)
          return a(
            Ce,
            { avatarShape: e.avatarShape, avatarSize: e.avatarSize },
            null
          );
      },
      r = () => {
        if (e.title)
          return a(Ne, { round: e.round, titleWidth: e.titleWidth }, null);
      },
      n = (u) => {
        const { rowWidth: p } = e;
        return p === L && u === +e.row - 1 ? qe : Array.isArray(p) ? p[u] : p;
      },
      i = () =>
        Array(+e.row)
          .fill("")
          .map((u, p) =>
            a(Me, { key: p, round: e.round, rowWidth: F(n(p)) }, null)
          ),
      _ = () =>
        l.template
          ? l.template()
          : a(b, null, [o(), a("div", { class: C("content") }, [r(), i()])]);
    return () => {
      var u;
      return e.loading
        ? a(
            "div",
            de({ class: C({ animate: e.animate, round: e.round }) }, s),
            [_()]
          )
        : (u = l.default) == null
        ? void 0
        : u.call(l);
    };
  },
});
const Ye = t(
    "h4",
    null,
    [t("i", { class: "fa fa-tv-retro me-1 c-pink" }), x(" KECODING-NIME")],
    -1
  ),
  Xe = {
    __name: "Navbar",
    props: { icon_theme: String, switchTheme: Function },
    setup(e) {
      return (l, s) => {
        const o = ee,
          r = se,
          n = ie;
        return (
          c(),
          d("div", null, [
            a(n, null, {
              default: m(() => [
                a(r, null, {
                  left: m(() => [Ye]),
                  right: m(() => [
                    a(
                      o,
                      { onClick: s[0] || (s[0] = (i) => e.switchTheme()) },
                      {
                        default: m(() => [
                          t("i", { class: _e(e.icon_theme) }, null, 2),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }),
          ])
        );
      };
    },
  },
  Ze = { key: 0 },
  Ge = { key: 1 },
  Ke = { class: "card-image" },
  Qe = ["data-src"],
  et = { class: "ngewibu__cover-mask p-1" },
  tt = {
    class: "ngewibu__cover-mask-text ngewibu__cover-mask-text--bold px-1",
  },
  at = { class: "paging p-2 pb-3" },
  nt = { class: "c-pink" },
  st = {
    __name: "Featured",
    props: { data_anime: Object, pending: Boolean },
    setup(e) {
      const o = ((n) => {
          for (let i = n.length - 1; i > 0; i--) {
            const _ = Math.floor(Math.random() * (i + 1));
            [n[i], n[_]] = [n[_], n[i]];
          }
          return n;
        })(e.data_anime.modules[0].items),
        r = (n) =>
          n === 0 || n === void 0 || n === null || n === ""
            ? "javascript:void(0)"
            : "/play/" + n;
      return (n, i) => {
        const _ = J,
          u = j,
          p = V,
          f = H,
          v = Te,
          I = D("lazy-load");
        return (
          c(),
          d("div", null, [
            t("div", null, [
              e.pending
                ? (c(), d("div", Ze, [a(_, { title: "", row: 3 })]))
                : (c(),
                  d("div", Ge, [
                    a(v, null, {
                      default: m(() => [
                        a(
                          f,
                          {
                            "slides-per-view": 1,
                            "space-between": 0,
                            autoplay: { delay: 8e3, disableOnInteraction: !0 },
                          },
                          {
                            default: m(() => [
                              (c(!0),
                              d(
                                b,
                                null,
                                N(
                                  h(o),
                                  (w, A) => (
                                    c(),
                                    W(
                                      p,
                                      { class: "card" },
                                      {
                                        default: m(() => [
                                          a(
                                            u,
                                            { to: r(w.season_id) },
                                            {
                                              default: m(() => [
                                                t("div", Ke, [
                                                  g(
                                                    t(
                                                      "img",
                                                      {
                                                        "data-src":
                                                          "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                          w.cover,
                                                        alt: "Image description",
                                                        class:
                                                          "w-full h-auto featured",
                                                      },
                                                      null,
                                                      8,
                                                      Qe
                                                    ),
                                                    [[I]]
                                                  ),
                                                ]),
                                                t("div", et, [
                                                  t("span", tt, y(w.title), 1),
                                                ]),
                                                t("span", at, [
                                                  t("span", nt, y(A + 1), 1),
                                                  x(" / " + y(h(o).length), 1),
                                                ]),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["to"]
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    )
                                  )
                                ),
                                256
                              )),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }),
                  ])),
            ]),
          ])
        );
      };
    },
  },
  ot = B(st, [["__scopeId", "data-v-ba05f199"]]),
  lt = {},
  T = (e) => (M("data-v-8492bc83"), (e = e()), U(), e),
  it = { class: "flex mt-4 mx-3 justify-center" },
  rt = { class: "w-1/4" },
  ct = {
    "data-src": "https://unpai.red/static/icons/menu/index.png",
    alt: "Image",
    class: "mb-0 menu-img",
  },
  dt = T(() => t("p", { class: "menu-text my-2" }, "Index", -1)),
  _t = { class: "w-1/4" },
  ut = {
    "data-src": "https://unpai.red/static/icons/menu/jadwal.png",
    alt: "Image",
    class: "mb-0 menu-img",
  },
  mt = T(() => t("p", { class: "menu-text my-2" }, "Jadwal", -1)),
  pt = { class: "w-1/4" },
  ht = {
    "data-src": "https://unpai.red/static/icons/menu/trending.png",
    alt: "Image",
    class: "mb-0 menu-img",
  },
  ft = T(() => t("p", { class: "menu-text my-2" }, "Trending", -1)),
  vt = { class: "w-1/4" },
  gt = {
    "data-src": "https://unpai.red/static/icons/menu/premium.png",
    alt: "Image",
    class: "mb-0 menu-img",
  },
  yt = T(() => t("p", { class: "menu-text my-2" }, "Premium", -1));
function wt(e, l) {
  const s = j,
    o = D("lazy-load");
  return (
    c(),
    d("div", null, [
      t("div", it, [
        t("div", rt, [
          a(
            s,
            {
              to: "/anime",
              class: "flex justify-center items-center flex-col",
            },
            { default: m(() => [g(t("img", ct, null, 512), [[o]]), dt]), _: 1 }
          ),
        ]),
        t("div", _t, [
          a(
            s,
            {
              to: "/jadwal",
              class: "flex justify-center items-center flex-col",
            },
            { default: m(() => [g(t("img", ut, null, 512), [[o]]), mt]), _: 1 }
          ),
        ]),
        t("div", pt, [
          a(
            s,
            {
              to: "/trending",
              class: "flex justify-center items-center flex-col",
            },
            { default: m(() => [g(t("img", ht, null, 512), [[o]]), ft]), _: 1 }
          ),
        ]),
        t("div", vt, [
          a(
            s,
            {
              to: "/premium",
              class: "flex justify-center items-center flex-col",
            },
            { default: m(() => [g(t("img", gt, null, 512), [[o]]), yt]), _: 1 }
          ),
        ]),
      ]),
    ])
  );
}
const kt = B(lt, [
    ["render", wt],
    ["__scopeId", "data-v-8492bc83"],
  ]),
  Y = (e) => (M("data-v-57d5d2c6"), (e = e()), U(), e),
  bt = { class: "ms-3 mb-3" },
  $t = Y(() => t("i", { class: "fa fa-fire c-pink me-2" }, null, -1)),
  xt = { class: "ms-3" },
  St = { key: 0 },
  Tt = { key: 1 },
  It = { style: { position: "relative" } },
  At = ["data-src"],
  zt = { class: "ngewibu__cover-mask" },
  Pt = {
    class: "ngewibu__cover-mask-text ngewibu__cover-mask-text--bold text-wrap",
  },
  Dt = Y(() => t("i", { class: "fa fa-star me-1 text-white" }, null, -1)),
  Nt = { class: "mt-0" },
  Wt = {
    __name: "Rekomendasi",
    props: {
      data_anime: Object,
      pending: Boolean,
      type: { type: String, default: "Topik Isekai" },
    },
    setup(e) {
      const l = (s, o = "Topik Isekai") => {
        let r = [];
        return (
          s.modules.forEach((i, _) => {
            i.header && i.header.title === o && (r = i.items);
          }),
          r
        );
      };
      return (s, o) => {
        const r = J,
          n = j,
          i = ge,
          _ = V,
          u = H,
          p = D("lazy-load");
        return (
          c(),
          d("div", null, [
            t("h5", bt, [$t, x(y(e.type), 1)]),
            t("div", xt, [
              e.pending
                ? (c(), d("div", St, [a(r, { title: "", row: 3 })]))
                : (c(),
                  d("div", Tt, [
                    a(
                      u,
                      {
                        "slides-per-view": 3.2,
                        "space-between": 10,
                        autoplay: { delay: 8e3, disableOnInteraction: !0 },
                      },
                      {
                        default: m(() => [
                          (c(!0),
                          d(
                            b,
                            null,
                            N(
                              l(e.data_anime, e.type),
                              (f) => (
                                c(),
                                W(
                                  _,
                                  { class: "card" },
                                  {
                                    default: m(() => [
                                      t("div", It, [
                                        a(
                                          n,
                                          { to: "/play/" + f.season_id },
                                          {
                                            default: m(() => [
                                              g(
                                                t(
                                                  "img",
                                                  {
                                                    "data-src":
                                                      "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                      f.cover +
                                                      "@286w_385h_1e_1c_90q.webp",
                                                    alt: "Image description",
                                                    class:
                                                      "w-full h-auto object-contain cover",
                                                  },
                                                  null,
                                                  8,
                                                  At
                                                ),
                                                [[p]]
                                              ),
                                              t("div", zt, [
                                                t(
                                                  "span",
                                                  Pt,
                                                  y(
                                                    f.subtitle
                                                      .replace("Full", "Tamat")
                                                      .replace(
                                                        "Perbarui ke",
                                                        "Terbaru"
                                                      )
                                                      .replace("Terbaru", "")
                                                  ),
                                                  1
                                                ),
                                              ]),
                                              f.tag.text !== ""
                                                ? (c(),
                                                  d(
                                                    "span",
                                                    {
                                                      key: 0,
                                                      class:
                                                        "bstar-video-card__cover-label bstar-video-card__cover-label--normal text-white",
                                                      style: ue([
                                                        {
                                                          "font-weight": "600",
                                                        },
                                                        "background:" +
                                                          f.tag.bg_color,
                                                      ]),
                                                    },
                                                    [
                                                      Dt,
                                                      x(
                                                        " " +
                                                          y(
                                                            f.tag.text.replace(
                                                              "Bstation only",
                                                              "Ekslusif"
                                                            )
                                                          ),
                                                        1
                                                      ),
                                                    ],
                                                    4
                                                  ))
                                                : q("", !0),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["to"]
                                        ),
                                      ]),
                                      t("div", Nt, [
                                        a(
                                          i,
                                          { class: "judul", content: f.title },
                                          null,
                                          8,
                                          ["content"]
                                        ),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                )
                              )
                            ),
                            256
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                  ])),
            ]),
          ])
        );
      };
    },
  },
  jt = B(Wt, [["__scopeId", "data-v-57d5d2c6"]]),
  Bt = {
    __name: "AnimeList",
    props: { data_anime: Object },
    setup(e) {
      const l = e,
        s = P(!1);
      let o = l.data_anime;
      const r = async () => {
        (s.value = !0),
          (o = (await $fetch(`${E}/api/featurednew`, { lazy: !0 })).data),
          (s.value = !1);
      };
      return (n, i) => {
        const _ = ot,
          u = kt,
          p = jt,
          f = ye;
        return (
          c(),
          d("div", null, [
            t("div", null, [
              a(
                f,
                {
                  modelValue: h(s),
                  "onUpdate:modelValue":
                    i[0] || (i[0] = (v) => (me(s) ? (s.value = v) : null)),
                  onRefresh: r,
                },
                {
                  default: m(() => [
                    a(_, { data_anime: h(o), pending: h(s) }, null, 8, [
                      "data_anime",
                      "pending",
                    ]),
                    a(u),
                    (c(!0),
                    d(
                      b,
                      null,
                      N(
                        h(o).modules,
                        (v) => (
                          c(),
                          d(
                            b,
                            null,
                            [
                              v.header !== null &&
                              v.header.title !== "" &&
                              (v.style === "top_n" ||
                                v.style === "trending_now" ||
                                v.style === "new_v_card_v1" ||
                                v.style === "foryou_v1")
                                ? (c(),
                                  W(
                                    p,
                                    {
                                      key: 0,
                                      data_anime: h(o),
                                      pending: h(s),
                                      type: v.header.title,
                                    },
                                    null,
                                    8,
                                    ["data_anime", "pending", "type"]
                                  ))
                                : q("", !0),
                            ],
                            64
                          )
                        )
                      ),
                      256
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
            ]),
          ])
        );
      };
    },
  },
  Lt = { style: { "padding-bottom": "80px !important" } },
  Ot = { key: 0 },
  Ct = { class: "flex justify-center items-center h-screen" },
  Ft = { key: 1 },
  Rt =
    "Selamat datang parawibu, Bantu kami dengan donasi! Dukungan Anda akan mendorong kami untuk menghadirkan pengalaman menonton yang lebih baik.",
  Qt = {
    __name: "index",
    async setup(e) {
      let l, s;
      te.use("en-US", xe);
      const o = P("home"),
        r = we({
          selector: "html",
          attribute: "class",
          valueDark: "van-theme-dark",
          valueLight: "van-theme-light",
        }),
        { data: n, pending: i } =
          (([l, s] = pe(() =>
            $e(`${E}/api/featurednew`, { lazy: !0 }, "$PslAyef5YX")
          )),
          (l = await l),
          s(),
          l),
        _ = ke("dialog_confirm", "no"),
        u = be(r),
        p = he(() =>
          r.value ? "fa fa-moon-stars" : "fa fa-lightbulb-on c-yellow"
        );
      return (
        _.value === "no" &&
          ae({
            title: "Disclaimer",
            "allow-html": !0,
            message:
              "All content within this app is sourced from the original owners and creators. We respect intellectual property rights and strive to provide accurate and legitimate content. Links to the original sources are included wherever possible. If you believe any content infringes upon your rights, please contact us using the provided information. Thank you for your understanding and support.",
            "message-align": "left",
          }).then(() => {
            _.value = "yes";
          }),
        (f, v) => {
          const I = Xe,
            w = ve,
            A = ne,
            X = Bt,
            Z = le,
            G = oe;
          return g(
            (c(),
            d(
              "div",
              Lt,
              [
                a(I, { switchTheme: h(u), icon_theme: h(p) }, null, 8, [
                  "switchTheme",
                  "icon_theme",
                ]),
                a(w, {
                  style: { height: "30px" },
                  text: Rt,
                  "left-icon": "volume-o",
                }),
                h(i)
                  ? (c(),
                    d("div", Ot, [
                      t("div", Ct, [
                        t("div", null, [
                          a(A, { type: "spinner", size: "30px" }),
                        ]),
                      ]),
                    ]))
                  : (c(),
                    d("div", Ft, [
                      a(X, { data_anime: h(n).data }, null, 8, ["data_anime"]),
                    ])),
                a(Z, { bottom: "10vh" }),
                a(G, { active: h(o) }, null, 8, ["active"]),
              ],
              512
            )),
            [[fe, h(_) === "yes"]]
          );
        }
      );
    },
  };
export { Qt as default };
