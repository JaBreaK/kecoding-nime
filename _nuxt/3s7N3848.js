import { _ as J, s as Z, a as j } from "./D2VWXsg2.js";
import { s as F } from "./DydMEu4S.js";
import { s as K } from "./qwo8eSrx.js";
import { a as Q, s as X } from "./BVJXpbLV.js";
import { s as H } from "./GW7g2uS9.js";
import { s as W } from "./CVvMKoCI.js";
import { L as ee, a as te, r as ae, s as se, n as ne } from "./CPIMTh_-.js";
import { s as oe } from "./DxJfQkse.js";
import { a as N, u as le } from "./CUgsq2x-.js";
import { s as ie } from "./BOZaj71m.js";
import { _ as ce } from "./DlAUqK2U.js";
import {
  a as c,
  J as re,
  M as t,
  z as e,
  L as n,
  u as o,
  q as h,
  I as _e,
  Y as $,
  Z as ue,
  _ as me,
} from "./CS_v0reC.js";
const l = (r) => (ue("data-v-ce4541ea"), (r = r()), me(), r),
  de = { style: { "padding-bottom": "80px !important" } },
  ve = { class: "ms-8 mt-6" },
  pe = l(() =>
    t("h6", { class: "mt-4 mb-1 font-size-4" }, "KECODING-NIME", -1)
  ),
  fe = l(() =>
    t("p", { class: "my-2 font-size-2.5 font-600 text-pink-400" }, "v1.0.8", -1)
  ),
  he = { class: "mt-7" },
  ke = l(() =>
    t("div", { class: "ms-7" }, [t("h5", { class: "my-2" }, "Player")], -1)
  ),
  be = l(() => t("span", { class: "ms-2" }, "Skip intro & outro", -1)),
  ge = l(() => t("span", { class: "ms-2" }, "Server video", -1)),
  Se = { class: "mt-7" },
  we = l(() =>
    t("div", { class: "ms-7" }, [t("h5", { class: "my-2" }, "Theme")], -1)
  ),
  ye = l(() => t("span", { class: "ms-2" }, "Color mode", -1)),
  Ce = l(() => t("span", { class: "ms-2" }, "Color scheme", -1)),
  xe = { class: "mt-7 mx-7" },
  Ne = l(() => t("i", { class: "fa fa-wallet me-2" }, null, -1)),
  $e = { class: "mt-3 mx-7" },
  Ee = l(() => t("i", { class: "fa fa-book me-2" }, null, -1)),
  Re = {
    __name: "settings",
    setup(r) {
      const E = c("setting");
      ee.use("en-US", ie);
      const R = N("skip_intro", "on");
      let k = N("server_resource", "avc_baseurl");
      const A = te(),
        _ = le({
          selector: "html",
          attribute: "class",
          valueDark: "van-theme-dark",
          valueLight: "van-theme-light",
        }),
        B = (a) => {
          if (a === "avc_baseurl") return "Default";
          if (a === "avc_backup_url") return "SERVER 1";
          if (a === "hevc_baseurl") return "SERVER 2";
          if (a === "hevc_backup_url") return "SERVER 3";
        },
        u = c(!1),
        m = c(!1),
        d = c(!1),
        b = _.value ? c("Dark") : c("Light"),
        g = c(B(k.value)),
        S = c("On"),
        p = () => {},
        D = (a) => {
          (R.value = a.alias), (S.value = a.name);
        },
        I = (a) => {
          (k.value = a.alias), (g.value = a.name);
        },
        M = (a) => {
          a.alias === "light" && (_.value = !1),
            a.alias === "dark" && (_.value = !0),
            (b.value = a.name);
        },
        U = [
          { name: "On", alias: "on" },
          { name: "Off", alias: "off" },
        ],
        V = [
          { name: "Default", alias: "avc_baseurl" },
          { name: "SERVER 2", alias: "hevc_baseurl" },
        ],
        z = [
          { name: "Light", alias: "light" },
          { name: "Dark", alias: "dark" },
        ],
        w = () => {
          location.replace("https://saweria.co/adetf");
        },
        L = () => {
          ae({
            title: "Nyaaaw!",
            message:
              "KECODING-NIME adalah tempat nonton anime gratis, tidak ada langganan maupun pembayaran apapun. Terima kasih atas perhatiannya!",
          }).then(() => {});
        };
      return (a, s) => {
        const P = Z,
          T = F,
          q = K,
          y = X,
          O = Q,
          v = H,
          C = W,
          x = se,
          f = oe,
          G = j,
          Y = J;
        return (
          _e(),
          re("div", null, [
            t("div", de, [
              t("div", null, [
                e(T, null, {
                  default: n(() => [
                    e(
                      P,
                      {
                        onClick:
                          s[0] ||
                          (s[0] = (i) =>
                            ("navBacks" in a ? a.navBacks : o(ne))(o(A))),
                        class: "nav-override",
                        theme: o(_),
                        title: "Settings",
                        "left-text": "Back",
                        "left-arrow": "",
                      },
                      null,
                      8,
                      ["theme"]
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              t("div", ve, [
                e(
                  O,
                  { gutter: "10", class: "mb-2" },
                  {
                    default: n(() => [
                      e(
                        y,
                        { span: "6" },
                        {
                          default: n(() => [
                            e(q, {
                              round: "",
                              width: "4rem",
                              height: "4rem",
                              src: "/static/layer.png",
                            }),
                          ]),
                          _: 1,
                        }
                      ),
                      e(
                        y,
                        { span: "18" },
                        { default: n(() => [pe, fe]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              t("div", he, [
                ke,
                e(
                  C,
                  { inset: "" },
                  {
                    default: n(() => [
                      e(
                        v,
                        {
                          onClick: s[1] || (s[1] = (i) => (u.value = !0)),
                          value: o(S),
                          icon: "exchange",
                          "is-link": "",
                        },
                        { title: n(() => [be]), _: 1 },
                        8,
                        ["value"]
                      ),
                      e(
                        v,
                        {
                          onClick: s[2] || (s[2] = (i) => (m.value = !0)),
                          value: o(g),
                          icon: "live",
                          "is-link": "",
                        },
                        { title: n(() => [ge]), _: 1 },
                        8,
                        ["value"]
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              t("div", Se, [
                we,
                e(
                  C,
                  { inset: "" },
                  {
                    default: n(() => [
                      e(
                        v,
                        {
                          onClick: s[3] || (s[3] = (i) => (d.value = !0)),
                          value: o(b),
                          icon: "bulb-o",
                          "is-link": "",
                        },
                        { title: n(() => [ye]), _: 1 },
                        8,
                        ["value"]
                      ),
                      e(
                        v,
                        {
                          onClick: w,
                          value: "Magenta",
                          icon: "eye-o",
                          "is-link": "",
                        },
                        { title: n(() => [Ce]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              t("div", xe, [
                e(
                  x,
                  {
                    class: "btn-play",
                    onClick: w,
                    type: "primary",
                    size: "small",
                    block: "",
                  },
                  { default: n(() => [Ne, $("Bantu developer")]), _: 1 }
                ),
              ]),
              t("div", $e, [
                e(
                  x,
                  { onClick: L, type: "primary", size: "small", block: "" },
                  { default: n(() => [Ee, $("Readme")]), _: 1 }
                ),
              ]),
              e(
                f,
                {
                  show: o(u),
                  "onUpdate:show":
                    s[4] || (s[4] = (i) => (h(u) ? (u.value = i) : null)),
                  actions: U,
                  "cancel-text": "Cancel",
                  "close-on-click-action": "",
                  onCancel: p,
                  onSelect: D,
                },
                null,
                8,
                ["show"]
              ),
              e(
                f,
                {
                  show: o(m),
                  "onUpdate:show":
                    s[5] || (s[5] = (i) => (h(m) ? (m.value = i) : null)),
                  actions: V,
                  "cancel-text": "Cancel",
                  "close-on-click-action": "",
                  onCancel: p,
                  onSelect: I,
                },
                null,
                8,
                ["show"]
              ),
              e(
                f,
                {
                  show: o(d),
                  "onUpdate:show":
                    s[6] || (s[6] = (i) => (h(d) ? (d.value = i) : null)),
                  actions: z,
                  "cancel-text": "Cancel",
                  "close-on-click-action": "",
                  onCancel: p,
                  onSelect: M,
                },
                null,
                8,
                ["show"]
              ),
              e(G, { bottom: "10vh" }),
              e(Y, { active: o(E) }, null, 8, ["active"]),
            ]),
          ])
        );
      };
    },
  },
  Oe = ce(Re, [["__scopeId", "data-v-ce4541ea"]]);
export { Oe as default };
