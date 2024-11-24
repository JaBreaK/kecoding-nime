import { s as N, a as P, _ as V } from "./D2VWXsg2.js";
import { s as z } from "./yLofO9Ja.js";
import { s as C } from "./CdtElGv0.js";
import { _ as I } from "./D7t2mj_N.js";
import { s as R } from "./D_miRCqx.js";
import { s as q } from "./BCnNlUuK.js";
import { L as A, a as F, n as U, A as j } from "./CPIMTh_-.js";
import { u as E } from "./CUgsq2x-.js";
import { s as O } from "./BOZaj71m.js";
import { _ as S } from "./DlAUqK2U.js";
import {
  a as r,
  J as m,
  M as a,
  z as t,
  u as s,
  L as d,
  q as f,
  $ as J,
  I as p,
  Y as M,
  F as Y,
  a0 as G,
  C as H,
  O as K,
} from "./CS_v0reC.js";
import "./oIgI_nF1.js";
const Q = { style: { "padding-bottom": "80px !important" } },
  W = { class: "mx-3 my-5" },
  X = {
    class:
      "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3",
  },
  Z = { style: { position: "relative" } },
  ee = ["data-src"],
  ae = { class: "ngewibu__cover-mask" },
  te = {
    class: "ngewibu__cover-mask-text ngewibu__cover-mask-text--bold text-wrap",
  },
  se = { class: "mt-0" },
  oe = {
    __name: "premium",
    setup(ne) {
      A.use("en-US", O);
      const g = F(),
        h = E({
          selector: "html",
          attribute: "class",
          valueDark: "van-theme-dark",
          valueLight: "van-theme-light",
        }),
        _ = r([]),
        c = r(!1),
        n = r(!1),
        l = r(!1),
        u = r(1),
        v = async () => {
          l.value && ((_.value = []), (l.value = !1), (u.value = 1));
          const i = await $fetch(`${j}/api/premiumlist/${u.value}`, {
            lazy: !0,
          });
          _.value.push(...i.data.list),
            (u.value += 1),
            (n.value = !1),
            i.data.has_next !== 1 && (c.value = !0);
        },
        k = () => {
          (c.value = !1), (n.value = !0), v();
        };
      return (i, o) => {
        const b = N,
          x = z,
          w = C,
          y = I,
          $ = R,
          L = q,
          T = P,
          B = V,
          D = J("lazy-load");
        return (
          p(),
          m("div", null, [
            a("div", Q, [
              a("div", null, [
                t(
                  b,
                  {
                    onClick:
                      o[0] ||
                      (o[0] = (e) =>
                        ("navBacks" in i ? i.navBacks : s(U))(s(g))),
                    class: "nav-override",
                    theme: s(h),
                    title: "Premium gratis",
                    "left-text": "Back",
                    "left-arrow": "",
                  },
                  null,
                  8,
                  ["theme"]
                ),
              ]),
              a("div", null, [
                t(
                  x,
                  { "left-icon": "volume-o" },
                  {
                    default: d(() => [
                      M(
                        " Temukan seri anime premium terbaik yang dapat kamu tonton online secara gratis, tanpa perlu membayar biaya langganan. "
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              a("div", W, [
                t(
                  L,
                  {
                    modelValue: s(l),
                    "onUpdate:modelValue":
                      o[2] || (o[2] = (e) => (f(l) ? (l.value = e) : null)),
                    onRefresh: k,
                  },
                  {
                    default: d(() => [
                      t(
                        $,
                        {
                          loading: s(n),
                          "onUpdate:loading":
                            o[1] ||
                            (o[1] = (e) => (f(n) ? (n.value = e) : null)),
                          finished: s(c),
                          "finished-text": "Tidak ada lagi konten yang lain",
                          onLoad: v,
                        },
                        {
                          default: d(() => [
                            a("div", X, [
                              (p(!0),
                              m(
                                Y,
                                null,
                                G(
                                  s(_),
                                  (e) => (
                                    p(),
                                    m("div", { key: e }, [
                                      t(
                                        y,
                                        { to: "/play/" + e.season_id },
                                        {
                                          default: d(() => [
                                            a("div", Z, [
                                              H(
                                                a(
                                                  "img",
                                                  {
                                                    "data-src":
                                                      "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                      e.cover +
                                                      "@286w_385h_1e_1c_90q.webp",
                                                    alt: "Image description",
                                                    class:
                                                      "w-full h-auto object-contain cover",
                                                  },
                                                  null,
                                                  8,
                                                  ee
                                                ),
                                                [[D]]
                                              ),
                                              a("div", ae, [
                                                a(
                                                  "span",
                                                  te,
                                                  K(
                                                    e.index_show
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
                                            ]),
                                            a("div", se, [
                                              t(
                                                w,
                                                {
                                                  class: "judul ng-text",
                                                  content: e.title,
                                                },
                                                null,
                                                8,
                                                ["content"]
                                              ),
                                            ]),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["to"]
                                      ),
                                    ])
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["loading", "finished"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
              ]),
              t(T, { bottom: "10vh" }),
              t(B),
            ]),
          ])
        );
      };
    },
  },
  he = S(oe, [["__scopeId", "data-v-08df1d9c"]]);
export { he as default };
