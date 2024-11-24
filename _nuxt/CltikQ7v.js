import { s as V, a as z, _ as C } from "./D2VWXsg2.js";
import { s as q, a as E } from "./3zhkehnZ.js";
import { s as K } from "./DydMEu4S.js";
import { _ as O } from "./D7t2mj_N.js";
import { s as H } from "./CdtElGv0.js";
import { s as Y } from "./D_miRCqx.js";
import { s as J } from "./BCnNlUuK.js";
import { L as G, u as Q, a as W, n as X, A as Z } from "./CPIMTh_-.js";
import { u as aa } from "./CUgsq2x-.js";
import { s as ea } from "./BOZaj71m.js";
import { _ as na } from "./DlAUqK2U.js";
import {
  a as o,
  J as _,
  M as n,
  z as e,
  u as s,
  L as i,
  q as f,
  $ as ta,
  I as k,
  F as h,
  a0 as b,
  O as x,
  C as sa,
} from "./CS_v0reC.js";
import "./BUTK-O5U.js";
import "./oIgI_nF1.js";
const oa = { style: { "padding-bottom": "80px !important" } },
  ia = { class: "mx-3 my-5" },
  ra = {
    class:
      "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3",
  },
  la = { style: { position: "relative" } },
  ma = ["data-src"],
  ua = { class: "ngewibu__cover-mask" },
  da = {
    class: "ngewibu__cover-mask-text ngewibu__cover-mask-text--bold text-wrap",
  },
  _a = { class: "mt-0" },
  ka = {
    __name: "[[genre]]",
    setup(ca) {
      G.use("en-US", ea);
      const u = Q(),
        w = W();
      let d = o("semua");
      u.params.genre &&
        (Array.isArray(u.params.genre)
          ? (d.value = u.params.genre[0])
          : (d.value = u.params.genre));
      const c = o(d.value),
        $ = [
          { key: "semua", name: "SEMUA" },
          { key: "terbaru", name: "Terbaru" },
          { key: "kisah_asli", name: "Kisah asli" },
          { key: "adaptasi_komik", name: "Adaptasi komik" },
          { key: "adaptasi_novel", name: "Adaptasi novel" },
          { key: "adaptasi_permainan", name: "Adaptasi permainan" },
          { key: "tokusatsu", name: "Tokusatsu" },
          { key: "berjuang", name: "Berjuang" },
          { key: "isekai", name: "Isekai" },
          { key: "supranatural", name: "Supranatural" },
          { key: "perjalanan_waktu", name: "Perjalanan waktu" },
          { key: "fantasi", name: "Fantasi" },
          { key: "aksi", name: "Aksi" },
          { key: "komedi", name: "Komedi" },
          { key: "harian", name: "Harian" },
          { key: "fiksi_ilmiah", name: "Fiksi ilmiah" },
          { key: "moe", name: "Moe" },
          { key: "pemulihan", name: "Pemulihan" },
          { key: "sekolah", name: "Sekolah" },
          { key: "anak-anak", name: "Anak-anak" },
          { key: "romantis", name: "Romantis " },
          { key: "shoujo", name: "Shoujo" },
          { key: "petualangan", name: "Petualangan" },
          { key: "sejarah", name: "Sejarah" },
          { key: "mecha", name: "Mecha" },
          { key: "olahraga", name: "Olahraga" },
          { key: "inspiratif", name: "Inspiratif" },
          { key: "musik", name: "Musik" },
          { key: "tegang", name: "Tegang" },
          { key: "idola", name: "Idola" },
          { key: "lingkungan_kerja", name: "Lingkungan kerja" },
          { key: "makanan", name: "Makanan" },
          { key: "kuno_cina", name: "Kuno cina" },
          { key: "fantasi_misteri", name: "Fantasi Misteri" },
          { key: "budidaya", name: "Budidaya" },
          { key: "balas_dendam", name: "Balas dendam" },
          { key: "misteri", name: "Misteri" },
          { key: "terbaru", name: "Terharu" },
          { key: "seni_bela_diri", name: "Seni bela diri" },
          { key: "harem", name: "Harem" },
          { key: "furry", name: "Furry" },
          { key: "18+", name: "18+" },
          { key: "yaoi", name: "Yaoi" },
          { key: "yuri", name: "Yuri" },
          { key: "urban", name: "Urban" },
          { key: "balapan", name: "Balapan" },
          { key: "modern", name: "Modern" },
          { key: "plit", name: "Plot" },
        ],
        p = o([]),
        y = o(!1),
        r = o(!1),
        l = o(!1),
        v = o(1),
        g = async () => {
          l.value && ((p.value = []), (l.value = !1), (v.value = 1));
          const m = await $fetch(`${Z}/index_api/${d.value}/${v.value}`, {
            lazy: !0,
          });
          p.value.push(...m.data.cards),
            (v.value += 1),
            (r.value = !1),
            m.data.has_next !== !0 && (y.value = !0);
        },
        j = () => {
          (y.value = !1), (r.value = !0), g();
        },
        B = aa({
          selector: "html",
          attribute: "class",
          valueDark: "van-theme-dark",
          valueLight: "van-theme-light",
        });
      return (m, t) => {
        const A = V,
          L = q,
          T = E,
          I = K,
          M = O,
          P = H,
          S = Y,
          D = J,
          F = z,
          R = C,
          U = ta("lazy-load");
        return (
          k(),
          _("div", oa, [
            n("div", null, [
              e(
                A,
                {
                  class: "nav-override",
                  theme: s(B),
                  title: "Index anime",
                  "left-text": "Back",
                  "left-arrow": "",
                  onClickLeft:
                    t[0] ||
                    (t[0] = (a) => ("navBacks" in m ? m.navBacks : s(X))(s(w))),
                },
                null,
                8,
                ["theme"]
              ),
              e(
                I,
                { "offset-top": 0 },
                {
                  default: i(() => [
                    e(
                      T,
                      {
                        active: s(c),
                        "onUpdate:active":
                          t[1] || (t[1] = (a) => (f(c) ? (c.value = a) : null)),
                      },
                      {
                        default: i(() => [
                          (k(),
                          _(
                            h,
                            null,
                            b($, (a, N) =>
                              e(
                                L,
                                { key: N, name: a.key, to: "/anime/" + a.key },
                                {
                                  title: i(() => [
                                    n("span", null, x(a.name), 1),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["name", "to"]
                              )
                            ),
                            64
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["active"]
                    ),
                  ]),
                  _: 1,
                }
              ),
              n("div", ia, [
                e(
                  D,
                  {
                    modelValue: s(l),
                    "onUpdate:modelValue":
                      t[3] || (t[3] = (a) => (f(l) ? (l.value = a) : null)),
                    onRefresh: j,
                  },
                  {
                    default: i(() => [
                      e(
                        S,
                        {
                          loading: s(r),
                          "onUpdate:loading":
                            t[2] ||
                            (t[2] = (a) => (f(r) ? (r.value = a) : null)),
                          finished: s(y),
                          "finished-text": "Tidak ada lagi konten yang lain",
                          onLoad: g,
                        },
                        {
                          default: i(() => [
                            n("div", ra, [
                              (k(!0),
                              _(
                                h,
                                null,
                                b(
                                  s(p),
                                  (a) => (
                                    k(),
                                    _("div", { key: a }, [
                                      n("div", la, [
                                        e(
                                          M,
                                          { to: "/play/" + a.season_id },
                                          {
                                            default: i(() => [
                                              sa(
                                                n(
                                                  "img",
                                                  {
                                                    "data-src":
                                                      "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                      a.cover +
                                                      "@286w_385h_1e_1c_90q.webp",
                                                    alt: "Image description",
                                                    class:
                                                      "w-full h-auto object-contain cover",
                                                  },
                                                  null,
                                                  8,
                                                  ma
                                                ),
                                                [[U]]
                                              ),
                                              n("div", ua, [
                                                n(
                                                  "span",
                                                  da,
                                                  x(
                                                    a.index_show
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
                                            _: 2,
                                          },
                                          1032,
                                          ["to"]
                                        ),
                                      ]),
                                      n("div", _a, [
                                        e(
                                          P,
                                          { class: "judul", content: a.title },
                                          null,
                                          8,
                                          ["content"]
                                        ),
                                      ]),
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
            ]),
            e(F, { bottom: "10vh" }),
            e(R),
          ])
        );
      };
    },
  },
  Ta = na(ka, [["__scopeId", "data-v-e5e13d93"]]);
export { Ta as default };
