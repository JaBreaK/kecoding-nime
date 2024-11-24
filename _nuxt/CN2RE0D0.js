import {
  i as A,
  e as J,
  b as Y,
  m as Z,
  c as G,
  d as U,
  w as K,
  f as Q,
  t as X,
  g as I,
  h as tt,
  L as et,
  a as st,
  n as ot,
  j as O,
  k as at,
  s as nt,
} from "./CPIMTh_-.js";
import { _ as rt, s as ct, a as it } from "./D2VWXsg2.js";
import { s as lt } from "./DydMEu4S.js";
import { s as dt } from "./qwo8eSrx.js";
import {
  z as t,
  B as _t,
  d as pt,
  c as ut,
  a as vt,
  J as _,
  M as o,
  L as n,
  u as y,
  F as mt,
  a0 as ht,
  I as i,
  P as V,
  O as l,
  Y as d,
  a1 as q,
  Z as ft,
  _ as gt,
} from "./CS_v0reC.js";
import { _ as kt } from "./D7t2mj_N.js";
import { s as bt, a as yt } from "./BVJXpbLV.js";
import { s as wt } from "./BQwMB-y9.js";
import { s as xt } from "./CXdL6Pn_.js";
import { u as Ct, a as $t } from "./CUgsq2x-.js";
import { s as St } from "./BOZaj71m.js";
import { _ as Dt } from "./DlAUqK2U.js";
import "./BUTK-O5U.js";
let z, w;
const Tt = (s) => (Y(s) ? s : { message: s });
function Bt() {
  ({ instance: w } = Z({
    setup() {
      const { state: s, toggle: h } = G();
      return () => t(U, _t(s, { "onUpdate:show": h }), null);
    },
  }));
}
const Lt = () => ({
  type: "danger",
  color: void 0,
  message: "",
  onClose: void 0,
  onClick: void 0,
  onOpened: void 0,
  duration: 3e3,
  position: void 0,
  className: "",
  lockScroll: !1,
  background: void 0,
});
let Nt = Lt();
const Pt = () => {
  w && w.toggle(!1);
};
function M(s) {
  if (A)
    return (
      w || Bt(),
      (s = J({}, Nt, Tt(s))),
      w.open(s),
      clearTimeout(z),
      s.duration > 0 && (z = setTimeout(Pt, s.duration)),
      w
    );
}
K(U);
const [jt, N] = Q("progress"),
  It = {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    showPivot: X,
    pivotColor: String,
    trackColor: String,
    strokeWidth: I,
    percentage: { type: I, default: 0, validator: (s) => +s >= 0 && +s <= 100 },
  };
var Ot = pt({
  name: jt,
  props: It,
  setup(s) {
    const h = ut(() => (s.inactive ? void 0 : s.color)),
      D = () => {
        const { textColor: c, pivotText: f, pivotColor: p, percentage: u } = s,
          m = f ?? `${u}%`;
        if (s.showPivot && m) {
          const T = {
            color: c,
            left: `${+u}%`,
            transform: `translate(-${+u}%,-50%)`,
            background: p || h.value,
          };
          return t(
            "span",
            { style: T, class: N("pivot", { inactive: s.inactive }) },
            [m]
          );
        }
      };
    return () => {
      const { trackColor: c, percentage: f, strokeWidth: p } = s,
        u = { background: c, height: tt(p) },
        m = { width: `${f}%`, background: h.value };
      return t("div", { class: N(), style: u }, [
        t(
          "span",
          { class: N("portion", { inactive: s.inactive }), style: m },
          null
        ),
        D(),
      ]);
    };
  },
});
const v = (s) => (ft("data-v-4f2427dc"), (s = s()), gt(), s),
  Vt = { style: { "padding-bottom": "80px !important" } },
  qt = { key: 0, class: "mx-3 my-5" },
  zt = { class: "relative" },
  Mt = { class: "ngewibu__cover-mask" },
  Ut = {
    class: "ngewibu__cover-mask-text ngewibu__cover-mask-text--bold text-wrap",
  },
  Et = v(() =>
    o(
      "span",
      {
        class:
          "bstar-video-card__cover-label bstar-video-card__cover-label--normal text-white",
        style: { "background-color": "#f472b6", "font-weight": "700" },
      },
      [o("i", { class: "fa fa-tv-retro me-1 text-white" }), d("Anime ")],
      -1
    )
  ),
  Ft = { class: "percentbar" },
  Ht = { class: "mt-0 mb-1 judul ng-text" },
  Rt = { class: "mt-0 mb-1" },
  Wt = { key: 0, class: "watch_desc" },
  At = { key: 1, class: "watch_desc" },
  Jt = v(() => o("i", { class: "fa fa-play mx-2" }, null, -1)),
  Yt = v(() => o("span", { class: "me-3" }, "Lanjutkan", -1)),
  Zt = ["onClick"],
  Gt = v(() => o("i", { class: "fa fa-ellipsis-vertical fa-sm" }, null, -1)),
  Kt = [Gt],
  Qt = { class: "relative" },
  Xt = { class: "ngewibu__cover-mask" },
  te = {
    class: "ngewibu__cover-mask-text ngewibu__cover-mask-text--bold text-wrap",
  },
  ee = v(() =>
    o(
      "span",
      {
        class:
          "bstar-video-card__cover-label bstar-video-card__cover-label--normal text-white",
        style: { "background-color": "#1989fa", "font-weight": "700" },
      },
      [o("i", { class: "fa fa-video me-1 text-white" }), d("Video ")],
      -1
    )
  ),
  se = { class: "percentbar" },
  oe = { class: "mt-0 mb-1 judul ng-text" },
  ae = { class: "mt-0 mb-1" },
  ne = { key: 0, class: "watch_desc" },
  re = { key: 1, class: "watch_desc" },
  ce = v(() => o("i", { class: "fa fa-play mx-2" }, null, -1)),
  ie = v(() => o("span", { class: "me-3" }, "Lanjutkan", -1)),
  le = ["onClick"],
  de = v(() => o("i", { class: "fa fa-ellipsis-vertical fa-sm" }, null, -1)),
  _e = [de],
  pe = { key: 1, class: "mx-3 my-3" },
  ue = {
    __name: "history",
    setup(s) {
      et.use("en-US", St);
      const h = st(),
        D = Ct({
          selector: "html",
          attribute: "class",
          valueDark: "van-theme-dark",
          valueLight: "van-theme-light",
        }),
        c = $t("watch_history", []),
        f = vt("history"),
        p = (a) => {
          const r = new Date(a),
            g = { day: "2-digit", month: "2-digit", year: "numeric" };
          return r.toLocaleString("en-US", g);
        },
        u = c.value.map((a) => a.date);
      u.sort((a, r) => new Date(r) - new Date(a)),
        (c.value = u.map((a) => c.value.find((r) => r.date === a)));
      const m = (a, r) => {
          O({ title: "Delete", message: `${r}?` })
            .then(() => {
              c.value.splice(a, 1);
            })
            .catch(() => {});
        },
        T = (a) => {
          var r = Math.floor(a / 3600),
            g = Math.floor((a % 3600) / 60),
            x = a % 60,
            B = (r < 10 ? "0" : "") + r,
            C = (g < 10 ? "0" : "") + g,
            $ = (x < 10 ? "0" : "") + x,
            k = B + ":" + C + ":" + $;
          return k;
        },
        E = () => {
          if (c.value.length === 0)
            return M({
              type: "warning",
              message: "Tidak ada history tontonan",
            });
          O({ title: "Delete", message: "Hapus semua history?" })
            .then(() => {
              (c.value = []),
                M({
                  type: "success",
                  message: "Berhasil menghapus semua history",
                });
            })
            .catch(() => {});
        };
      return (a, r) => {
        const g = at,
          x = ct,
          B = lt,
          C = dt,
          $ = Ot,
          k = kt,
          b = bt,
          S = wt,
          P = nt,
          j = yt,
          F = xt,
          H = it,
          R = rt;
        return (
          i(),
          _("div", null, [
            o("div", Vt, [
              o("div", null, [
                t(B, null, {
                  default: n(() => [
                    t(
                      x,
                      {
                        onClickLeft:
                          r[0] ||
                          (r[0] = (e) =>
                            ("navBacks" in a ? a.navBacks : y(ot))(y(h))),
                        class: "nav-override",
                        theme: y(D),
                        title: "Terakhir ditonton",
                        "left-text": "Back",
                        onClickRight: E,
                        "left-arrow": "",
                      },
                      { right: n(() => [t(g, { name: "delete" })]), _: 1 },
                      8,
                      ["theme"]
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              y(c).length > 0
                ? (i(),
                  _("div", qt, [
                    (i(!0),
                    _(
                      mt,
                      null,
                      ht(
                        y(c),
                        (e, L) => (
                          i(),
                          _("div", { key: L }, [
                            e.type === "anime"
                              ? (i(),
                                V(
                                  j,
                                  { key: 0, gutter: "10", class: "mb-4" },
                                  {
                                    default: n(() => [
                                      t(
                                        b,
                                        { span: "12" },
                                        {
                                          default: n(() => [
                                            o("div", zt, [
                                              t(
                                                k,
                                                { to: "/play/" + e.season_id },
                                                {
                                                  default: n(() => [
                                                    t(
                                                      C,
                                                      {
                                                        src:
                                                          "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                          e.image +
                                                          "@720w_405h_1e_1c_90q.webp",
                                                        width: "100%",
                                                        height: "100%",
                                                        style: {
                                                          "object-fit": "cover",
                                                        },
                                                      },
                                                      null,
                                                      8,
                                                      ["src"]
                                                    ),
                                                    o("div", Mt, [
                                                      o(
                                                        "span",
                                                        Ut,
                                                        l(
                                                          e.episode_name.replace(
                                                            "E",
                                                            "Episode"
                                                          )
                                                        ),
                                                        1
                                                      ),
                                                    ]),
                                                    Et,
                                                    o("div", Ft, [
                                                      t(
                                                        $,
                                                        {
                                                          color:
                                                            "rgba(244, 114, 182, 1)",
                                                          style: {
                                                            "border-radius":
                                                              "0",
                                                          },
                                                          percentage:
                                                            e.progress,
                                                          "pivot-text": "",
                                                          "stroke-width": "5",
                                                        },
                                                        null,
                                                        8,
                                                        ["percentage"]
                                                      ),
                                                    ]),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["to"]
                                              ),
                                            ]),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                      t(
                                        b,
                                        { span: "10" },
                                        {
                                          default: n(() => [
                                            t(
                                              k,
                                              {
                                                to: "/play/" + e.season_id,
                                                class: "ng-text",
                                              },
                                              {
                                                default: n(() => [
                                                  o("h5", Ht, l(e.title), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["to"]
                                            ),
                                            o("p", Rt, [
                                              e.progress < 100
                                                ? (i(),
                                                  _("span", Wt, [
                                                    d(l(e.progress) + "%", 1),
                                                    t(S, { vertical: "" }),
                                                    d(l(p(e.date)), 1),
                                                  ]))
                                                : (i(),
                                                  _("span", At, [
                                                    d("complete"),
                                                    t(S, { vertical: "" }),
                                                    d(l(p(e.date)), 1),
                                                  ])),
                                            ]),
                                            t(
                                              P,
                                              {
                                                type: "primary",
                                                size: "small",
                                                to:
                                                  "/play/" +
                                                  e.season_id +
                                                  "/" +
                                                  e.episode_id,
                                                block: "",
                                              },
                                              {
                                                default: n(() => [Jt, Yt]),
                                                _: 2,
                                              },
                                              1032,
                                              ["to"]
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                      t(
                                        b,
                                        { span: "2", class: "text-center" },
                                        {
                                          default: n(() => [
                                            o(
                                              "span",
                                              {
                                                style: { cursor: "pointer" },
                                                onClick: (W) => m(L, e.title),
                                              },
                                              Kt,
                                              8,
                                              Zt
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ))
                              : q("", !0),
                            e.type === "video"
                              ? (i(),
                                V(
                                  j,
                                  { key: 1, gutter: "10", class: "mb-4" },
                                  {
                                    default: n(() => [
                                      t(
                                        b,
                                        { span: "12" },
                                        {
                                          default: n(() => [
                                            o("div", Qt, [
                                              t(
                                                k,
                                                { to: "/video/" + e.video_id },
                                                {
                                                  default: n(() => [
                                                    t(
                                                      C,
                                                      {
                                                        src:
                                                          "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                          e.image +
                                                          "@720w_405h_1e_1c_90q.webp",
                                                        width: "100%",
                                                        height: "100%",
                                                        style: {
                                                          "object-fit": "cover",
                                                        },
                                                      },
                                                      null,
                                                      8,
                                                      ["src"]
                                                    ),
                                                    o("div", Xt, [
                                                      o(
                                                        "span",
                                                        te,
                                                        l(T(e.duration)),
                                                        1
                                                      ),
                                                    ]),
                                                    ee,
                                                    o("div", se, [
                                                      t(
                                                        $,
                                                        {
                                                          color:
                                                            "rgba(244, 114, 182, 1)",
                                                          style: {
                                                            "border-radius":
                                                              "0",
                                                          },
                                                          percentage:
                                                            e.progress,
                                                          "pivot-text": "",
                                                          "stroke-width": "5",
                                                        },
                                                        null,
                                                        8,
                                                        ["percentage"]
                                                      ),
                                                    ]),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["to"]
                                              ),
                                            ]),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                      t(
                                        b,
                                        { span: "10" },
                                        {
                                          default: n(() => [
                                            t(
                                              k,
                                              {
                                                to: "/video/" + e.aid,
                                                class: "ng-text",
                                              },
                                              {
                                                default: n(() => [
                                                  o("h5", oe, l(e.title), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["to"]
                                            ),
                                            o("p", ae, [
                                              e.progress < 100
                                                ? (i(),
                                                  _("span", ne, [
                                                    d(l(e.progress) + "%", 1),
                                                    t(S, { vertical: "" }),
                                                    d(l(p(e.date)), 1),
                                                  ]))
                                                : (i(),
                                                  _("span", re, [
                                                    d("complete"),
                                                    t(S, { vertical: "" }),
                                                    d(l(p(e.date)), 1),
                                                  ])),
                                            ]),
                                            t(
                                              P,
                                              {
                                                type: "primary",
                                                size: "small",
                                                to: "/video/" + e.video_id,
                                                block: "",
                                              },
                                              {
                                                default: n(() => [ce, ie]),
                                                _: 2,
                                              },
                                              1032,
                                              ["to"]
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                      t(
                                        b,
                                        { span: "2", class: "text-center" },
                                        {
                                          default: n(() => [
                                            o(
                                              "span",
                                              {
                                                style: { cursor: "pointer" },
                                                onClick: (W) => m(L, e.title),
                                              },
                                              _e,
                                              8,
                                              le
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ))
                              : q("", !0),
                          ])
                        )
                      ),
                      128
                    )),
                  ]))
                : (i(),
                  _("div", pe, [
                    t(F, {
                      "image-size": "10rem",
                      description: "Tidak ada history tontonan",
                    }),
                  ])),
              t(H, { bottom: "10vh" }),
              t(R, { active: y(f) }, null, 8, ["active"]),
            ]),
          ])
        );
      };
    },
  },
  De = Dt(ue, [["__scopeId", "data-v-4f2427dc"]]);
export { De as default };
