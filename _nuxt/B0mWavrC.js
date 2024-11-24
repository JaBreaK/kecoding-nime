import {
  u as D,
  A as z,
  s as oe,
  v as X,
  a as ie,
  y as le,
  z as re,
  n as ce,
} from "./CPIMTh_-.js";
import { s as de, a as ue, _ as _e } from "./D2VWXsg2.js";
import {
  c as pe,
  a as me,
  P as ve,
  I as he,
  S as B,
  N as W,
  b as A,
  s as fe,
  d as we,
} from "./IlX91n2-.js";
import { a as G, u as ge } from "./CUgsq2x-.js";
import {
  a as ye,
  k as ke,
  y as be,
  I as u,
  J as k,
  M as t,
  z as s,
  L as f,
  u as n,
  Y as L,
  c as xe,
  O as S,
  F as H,
  a0 as Y,
  P as j,
  a5 as K,
  $ as $e,
  C as J,
  a1 as Z,
  Z as Se,
  _ as Ie,
} from "./CS_v0reC.js";
import { s as Ce } from "./DydMEu4S.js";
import { s as Le } from "./B4LKLkno.js";
import { s as Me } from "./qwo8eSrx.js";
import { s as Ve, a as Te } from "./BVJXpbLV.js";
import { s as ee } from "./CdtElGv0.js";
import { _ as te } from "./DlAUqK2U.js";
import { s as ze } from "./BQwMB-y9.js";
import { _ as Ee } from "./D7t2mj_N.js";
import { u as ae } from "./CdoDYtDQ.js";
const Ne = { class: "bg-server pb-3" },
  qe = t("div", { id: "oplayer" }, null, -1),
  Be = { class: "mx-3 mt-3" },
  Ae = t("i", { class: "fa fa-server me-2" }, null, -1),
  He = {
    __name: "Videos",
    props: { anime_details: Object },
    setup(x) {
      const w = D(),
        e = ye(),
        M = x;
      let c = G("server_resource", "avc_baseurl"),
        d = G("watch_history", []);
      const a = M.anime_details;
      let b = w.params.id,
        _ = "",
        v = [];
      a.quality_list.forEach((h) => {
        v.push({
          name: h.text,
          value: `${z}/dashapp_ugc/${c.value}/${b}/${h.key}.mpd`,
          default: h.text === "480p",
        });
      });
      const g = a.quality_list.length;
      let $ = z + "/static/img/" + a.pic + "@720w_405h_1e_1c_90q.webp";
      const I = {
          source: {
            src: `${z}/dashapp_ugc/${c.value}/${b}/${g}.mpd`,
            title: _,
            poster: z + "/static/img/" + a.pic + "@720w_405h_1e_1c_90q.webp",
          },
          lang: "en",
          videoAttr: { crossOrigin: "anonymous" },
        },
        o = (h) => {
          (document.querySelector(".backward").style.display = ""),
            (document.querySelector(".forward").style.display = "");
          var i = h.replace(
            /\/dashapp_ugc\/(.*?)(?=\/)/,
            "/dashapp_ugc/" + c.value
          );
          e.value.changeSource({ src: i, poster: $, title: _ }),
            e.value.context.ui.menu.unregister('"480P"');
          let y = [];
          a.quality_list.forEach((p) => {
            y.push({
              name: p.text,
              value: `${z}/dashapp_ugc/${c.value}/${b}/${p.key}.mpd`,
              default: p.text === "480p",
            });
          }),
            e.value.context.ui.menu.register({
              name: "480P",
              onChange({ value: p, name: N }, q) {
                var V;
                (V = e.value) == null || V.changeQuality({ src: p }),
                  (q.innerText = N);
              },
              children: y,
            });
        },
        C = (h) => {
          var i;
          (c.value = h),
            o((i = e.value) == null ? void 0 : i.options.source.src);
        },
        E = async () => {
          await B.hide(),
            await W.hide(),
            B.setOverlaysWebView({ overlay: !0 }),
            await A.lock({ orientation: "landscape" });
        },
        O = async () => {
          await B.show(),
            await W.show(),
            B.setOverlaysWebView({ overlay: !1 }),
            await A.lock({ orientation: "potrait" });
        },
        P = async () => {
          await A.lock({ orientation: "landscape" });
        },
        F = async () => {
          await A.unlock();
        };
      return (
        ke(() => {
          const h = [
            pe({
              forceLandscapeOnFullscreen: !0,
              theme: {
                primaryColor: "rgba(244, 114, 182, 1)",
                watermark: {
                  src: "/static/layer.png",
                  attrs: { class: "watermark", crossOrigin: "anonymous" },
                },
              },
              keyboard: { global: !0 },
              slideToSeek: "always",
              controlBar: { back: "fullscreen" },
              topSetting: !0,
              icons: {
                setting:
                  '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="2"></circle><path d="M19.164 8.861L17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path></svg>',
                screenshot:
                  '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50"><path d="M 19.402344 6 C 17.019531 6 14.96875 7.679688 14.5 10.011719 L 14.097656 12 L 9 12 C 6.238281 12 4 14.238281 4 17 L 4 38 C 4 40.761719 6.238281 43 9 43 L 41 43 C 43.761719 43 46 40.761719 46 38 L 46 17 C 46 14.238281 43.761719 12 41 12 L 35.902344 12 L 35.5 10.011719 C 35.03125 7.679688 32.980469 6 30.597656 6 Z M 25 17 C 30.519531 17 35 21.480469 35 27 C 35 32.519531 30.519531 37 25 37 C 19.480469 37 15 32.519531 15 27 C 15 21.480469 19.480469 17 25 17 Z M 25 19 C 20.589844 19 17 22.589844 17 27 C 17 31.410156 20.589844 35 25 35 C 29.410156 35 33 31.410156 33 27 C 33 22.589844 29.410156 19 25 19 Z "></path></svg>',
                progressIndicator:
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path><path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path><path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path></svg>',
              },
              menu: [
                {
                  name: "480P",
                  onChange({ value: l, name: m }, r) {
                    var T;
                    (T = e.value) == null || T.changeQuality({ src: l }),
                      (r.innerText = m);
                  },
                  children: v,
                },
              ],
            }),
            me(),
          ];
          e.value = ve.make("#oplayer", I).use(h).create();
          let i = document.createElement("button");
          (i.className = "midButton forward text-white"),
            (i.innerHTML =
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" style="width: 100%; height: 100%;"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.444 3.685A10 10 0 0 1 18 4h-2v2h4a1 1 0 0 0 1-1V1h-2v1.253A12 12 0 1 0 24 12h-2A10 10 0 1 1 6.444 3.685ZM22 4v3h-3v2h4a1 1 0 0 0 1-1V4h-2Zm-9.398 11.576c.437.283.945.424 1.523.424s1.083-.141 1.513-.424c.437-.29.774-.694 1.009-1.215.235-.527.353-1.148.353-1.861 0-.707-.118-1.324-.353-1.851-.235-.527-.572-.932-1.009-1.215-.43-.29-.935-.434-1.513-.434-.578 0-1.086.145-1.523.434-.43.283-.764.688-.999 1.215-.235.527-.353 1.144-.353 1.851 0 .713.118 1.334.353 1.86.236.522.568.927.999 1.216Zm2.441-1.485c-.222.373-.528.56-.918.56s-.696-.187-.918-.56c-.222-.38-.333-.91-.333-1.591 0-.681.111-1.208.333-1.581.222-.38.528-.57.918-.57s.696.19.918.57c.222.373.333.9.333 1.581 0 .681-.111 1.212-.333 1.59Zm-6.439-3.375v5.14h1.594V9.018L7 9.82v1.321l1.604-.424Z" fill="currentColor"></path></svg>'),
            (i.onclick = function () {
              var l;
              (l = e.value) == null || l.seek(e.value.currentTime + 10);
            });
          let y = document.createElement("button");
          (y.className = "midButton backward text-white"),
            (y.innerHTML =
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" style="width: 100%; height: 100%;"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.02 2.048A10 10 0 1 1 2 12H0a12 12 0 1 0 5-9.747V1H3v4a1 1 0 0 0 1 1h4V4H6a10 10 0 0 1 5.02-1.952ZM2 4v3h3v2H1a1 1 0 0 1-1-1V4h2Zm12.125 12c-.578 0-1.086-.141-1.523-.424-.43-.29-.764-.694-.999-1.215-.235-.527-.353-1.148-.353-1.861 0-.707.118-1.324.353-1.851.236-.527.568-.932.999-1.215.437-.29.945-.434 1.523-.434s1.083.145 1.513.434c.437.283.774.688 1.009 1.215.235.527.353 1.144.353 1.851 0 .713-.118 1.334-.353 1.86-.235.522-.572.927-1.009 1.216-.43.283-.935.424-1.513.424Zm0-1.35c.39 0 .696-.186.918-.56.222-.378.333-.909.333-1.59s-.111-1.208-.333-1.581c-.222-.38-.528-.57-.918-.57s-.696.19-.918.57c-.222.373-.333.9-.333 1.581 0 .681.111 1.212.333 1.59.222.374.528.56.918.56Zm-5.521 1.205v-5.139L7 11.141V9.82l3.198-.8v6.835H8.604Z" fill="currentColor"></path></svg>'),
            (y.onclick = function () {
              var l;
              (l = e.value) == null || l.seek(e.value.currentTime - 10);
            });
          let p = document.createElement("button");
          (p.className = "midButton lockbutton"),
            (p.innerHTML = '<i class="fa fa-unlock-keyhole text-white"></i>');
          const q = document.querySelector(
            ".css-1tafg27, .css-gzwvtq"
          ).children;
          let V = !1;
          (p.onclick = function () {
            for (let r = 0; r < q.length; r++) {
              const T = q[r].classList;
              q[r].getAttribute("aria-label") !== "Subtitle" &&
                !T.contains("watermark") &&
                (q[r].style.display = V ? "none" : "");
            }
            const l = document.querySelector(".backward"),
              m = document.querySelector(".forward");
            V
              ? ((l.style.display = "none"),
                (m.style.display = "none"),
                (p.innerHTML = '<i class="fa fa-lock-keyhole text-white"></i>'))
              : ((l.style.display = ""),
                (m.style.display = ""),
                (p.innerHTML =
                  '<i class="fa fa-unlock-keyhole text-white"></i>')),
              (V = !V);
          }),
            e.value.$root.appendChild(p),
            e.value.$root.appendChild(y),
            e.value.$root.appendChild(i),
            e.value.on("loadedmetadata", () => {
              var m;
              const l = d.value.findIndex((r) => r.video_id === a.aid);
              if (l >= 0) {
                const r = d.value[l];
                parseInt(r.video_id) === parseInt(a.aid) &&
                  ((m = e.value) == null || m.seek(r.time), he.requestReview());
              }
            }),
            e.value.on("fullscreenchange", () => {
              var m;
              ((m = e.value) == null ? void 0 : m.isFullScreen)
                ? (P(), E())
                : (F(), O());
            }),
            e.value.on("error", () => {
              (document.querySelector(".backward").style.display = "none"),
                (document.querySelector(".forward").style.display = "none");
              const l = document.querySelector(".css-1xemz20");
              l.innerHTML =
                '<i class="fa fa-tv-retro me-1" style="color:rgba(244, 114, 182, 1)"></i> KECODING-NIME';
              const m = document.querySelector('[aria-label="Error Overlay"]');
              m.innerHTML = `<div class="text-white text-center">
            <p class="fw-bold fa-bounce mb-3">Oops!</p>
            <p class="pesanerror mb-3">An error has occured</p>
            <p class="pesanerror">Select another server or see update on discord.</p>
        </div>`;
            }),
            e.value.on("timeupdate", () => {
              var R, U, Q;
              const l = Math.round(
                  ((R = e.value) == null ? void 0 : R.currentTime) ?? 0
                ),
                m = Math.round(a.duration ?? 0),
                r = Math.round((l / m) * 100),
                T = d.value.findIndex((ne) => ne.video_id === a.aid);
              T >= 0
                ? (d.value[T] = {
                    type: "video",
                    video_id: a.aid,
                    title: a.title,
                    owner: a.owner.name,
                    image: a.pic,
                    duration: a.duration,
                    time: Math.round(
                      ((U = e.value) == null ? void 0 : U.currentTime) ?? 0
                    ),
                    progress: r === null ? 0 : r,
                    status: r === 100 ? "compltete" : "watching",
                    date: new Date().toISOString(),
                  })
                : d.value.push({
                    type: "video",
                    video_id: a.aid,
                    title: a.title,
                    owner: a.owner.name,
                    image: a.pic,
                    duration: a.duration,
                    time: Math.round(
                      ((Q = e.value) == null ? void 0 : Q.currentTime) ?? 0
                    ),
                    progress: r,
                    status: r === 100 ? "compltete" : "watching",
                    date: new Date().toISOString(),
                  });
            });
        }),
        be(() => {
          var h;
          F(), (h = e.value) == null || h.destroy();
        }),
        (h, i) => {
          const y = oe,
            p = fe;
          return (
            u(),
            k("div", Ne, [
              qe,
              t("div", Be, [
                s(
                  p,
                  { class: "w-full text-center justify-between" },
                  {
                    default: f(() => [
                      s(
                        y,
                        {
                          plain: n(c) === "avc_baseurl",
                          onClick: i[0] || (i[0] = (N) => C("avc_baseurl")),
                          type: "primary",
                          size: "small",
                          block: "",
                        },
                        { default: f(() => [Ae, L(" Default")]), _: 1 },
                        8,
                        ["plain"]
                      ),
                      s(
                        y,
                        {
                          plain: n(c) === "avc_backup_url",
                          onClick: i[1] || (i[1] = (N) => C("avc_backup_url")),
                          type: "primary",
                          size: "small",
                          block: "",
                        },
                        { default: f(() => [L("SERVER 1")]), _: 1 },
                        8,
                        ["plain"]
                      ),
                      s(
                        y,
                        {
                          plain: n(c) === "hevc_baseurl",
                          onClick: i[2] || (i[2] = (N) => C("hevc_baseurl")),
                          type: "primary",
                          size: "small",
                          block: "",
                        },
                        { default: f(() => [L("SERVER 2")]), _: 1 },
                        8,
                        ["plain"]
                      ),
                      s(
                        y,
                        {
                          plain: n(c) === "hevc_backup_url",
                          onClick: i[3] || (i[3] = (N) => C("hevc_backup_url")),
                          type: "primary",
                          size: "small",
                          block: "",
                        },
                        { default: f(() => [L("SERVER 3")]), _: 1 },
                        8,
                        ["plain"]
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ])
          );
        }
      );
    },
  },
  Oe = { class: "m-0 p-0" },
  Re = { class: "mx-3" },
  Ze = { class: "my-2" },
  je = { class: "mx-3" },
  De = { class: "mx-3 mt-3 mb-0" },
  Pe = { class: "my-1 font-size-3" },
  Fe = { class: "my-2 font-size-2.5 font-600 text-pink-400" },
  Ue = { class: "mx-3" },
  Qe = {
    __name: "Info",
    props: { video_details: Object },
    setup(x) {
      const e = x.video_details,
        M = xe(() => {
          const d = Object.entries(e.stat_format).filter(
            ([a]) => a !== "reply_count"
          );
          return Object.fromEntries(d);
        }),
        c = () => {
          const d =
              "Nonton anime gratis di KECODING-NIME, tanpa iklan dan tanpa ribet. KECODING-NIME menyediakan ribuan anime dari berbagai genre dan update setiap hari.",
            a = e.desc !== "" ? e.desc : d;
          return e.show_tags
            ? e.show_tags
                .map((g) => g.name)
                .map((g) => `#${g}`)
                .join(" ") +
                `
` +
                e.desc ==
              ""
              ? e.desc
              : d
            : a;
        };
      return (d, a) => {
        const b = He,
          _ = Ce,
          v = Le,
          g = Me,
          $ = Ve,
          I = Te,
          o = ee;
        return (
          u(),
          k("div", null, [
            t("div", null, [
              s(
                _,
                { "offset-top": 0 },
                {
                  default: f(() => [
                    t("div", Oe, [
                      s(b, { anime_details: n(e) }, null, 8, ["anime_details"]),
                    ]),
                  ]),
                  _: 1,
                }
              ),
              t("div", Re, [t("h5", Ze, S(n(e).title), 1)]),
              t("div", je, [
                s(
                  v,
                  { type: "primary", class: "me-2" },
                  {
                    default: f(() => [
                      L(S(n(e).formatted_view_pubdate.split(" · ")[1]), 1),
                    ]),
                    _: 1,
                  }
                ),
                (u(!0),
                k(
                  H,
                  null,
                  Y(
                    n(M),
                    (C, E) => (
                      u(),
                      j(
                        v,
                        {
                          key: E,
                          plain: "",
                          type: "primary",
                          size: "small",
                          class: "me-2 base_tag",
                        },
                        { default: f(() => [L(S(E) + ": " + S(C), 1)]), _: 2 },
                        1024
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            t("div", De, [
              s(
                I,
                { gutter: "10", class: "mb-2" },
                {
                  default: f(() => [
                    s(
                      $,
                      { span: "3" },
                      {
                        default: f(() => [
                          s(
                            g,
                            {
                              round: "",
                              width: "2.5rem",
                              height: "2.5rem",
                              src:
                                "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                n(e).owner.face,
                            },
                            null,
                            8,
                            ["src"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    s(
                      $,
                      { span: "21" },
                      {
                        default: f(() => [
                          t("h6", Pe, S(n(e).owner.name), 1),
                          t(
                            "p",
                            Fe,
                            S(n(e).owner_stat.follower_count) +
                              " . " +
                              S(n(e).owner_stat.archive_count),
                            1
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            t("div", Ue, [
              s(
                o,
                {
                  rows: "2",
                  content: c(),
                  "expand-text": "Tampilkan",
                  "collapse-text": "Sembunyikan",
                },
                null,
                8,
                ["content"]
              ),
            ]),
          ])
        );
      };
    },
  },
  We = te(Qe, [["__scopeId", "data-v-caa4e828"]]),
  se = (x) => (Se("data-v-cb446d26"), (x = x()), Ie(), x),
  Ge = se(() =>
    t(
      "h5",
      { class: "ms-3 mb-3 mt-0" },
      [t("i", { class: "fa fa-fire c-pink me-2" }), L("Rekomendasi")],
      -1
    )
  ),
  Je = { key: 0, class: "text-center mt-3" },
  Xe = { key: 1 },
  Ye = { class: "mx-3" },
  Ke = {
    class:
      "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3",
  },
  et = { style: { position: "relative" } },
  tt = ["data-src"],
  at = { class: "ngewibu__cover-mask" },
  st = {
    class: "ngewibu__cover-mask-text ngewibu__cover-mask-text--bold text-wrap",
  },
  nt = se(() =>
    t(
      "span",
      {
        class:
          "bstar-video-card__cover-label bstar-video-card__cover-label--normal text-white",
        style: { "background-color": "#1989fa", "font-weight": "700" },
      },
      [t("i", { class: "fa fa-tv-retro me-1 text-white" }), L("TV ")],
      -1
    )
  ),
  ot = { class: "mt-0" },
  it = { style: { position: "relative" } },
  lt = ["data-src"],
  rt = { class: "ngewibu__cover-mask" },
  ct = {
    class: "ngewibu__cover-mask-text ngewibu__cover-mask-text--bold text-wrap",
  },
  dt = { class: "mt-0" },
  ut = {
    __name: "Related",
    async setup(x) {
      let w, e;
      const M = D(),
        { data: c, pending: d } =
          (([w, e] = K(() =>
            ae(
              `${z}/api/related_ugc/${M.params.id}`,
              { lazy: !0 },
              "$cR2tnq8WvZ"
            )
          )),
          (w = await w),
          e(),
          w),
        a = (b) => b === 0;
      return (b, _) => {
        const v = X,
          g = ee,
          $ = Ee,
          I = $e("lazy-load");
        return (
          u(),
          k("div", null, [
            Ge,
            n(d)
              ? (u(), k("div", Je, [s(v, { type: "spinner", size: "30px" })]))
              : (u(),
                k("div", Xe, [
                  t("div", Ye, [
                    t("div", Ke, [
                      (u(!0),
                      k(
                        H,
                        null,
                        Y(
                          n(c).list,
                          (o) => (
                            u(),
                            k(
                              H,
                              null,
                              [
                                o.card_type === "ogv_season"
                                  ? (u(),
                                    k(
                                      H,
                                      { key: 0 },
                                      [
                                        a(o.oid)
                                          ? Z("", !0)
                                          : (u(),
                                            j(
                                              $,
                                              {
                                                key: 0,
                                                to: "/play/" + o.oid,
                                                title: o.title,
                                                class: "text-decoration-none",
                                              },
                                              {
                                                default: f(() => [
                                                  t("div", et, [
                                                    J(
                                                      t(
                                                        "img",
                                                        {
                                                          "data-src":
                                                            "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                            o.cover +
                                                            "@720w_405h_1e_1c_90q.webp",
                                                          alt: "Image description",
                                                          class:
                                                            "w-full h-auto object-contain cover",
                                                        },
                                                        null,
                                                        8,
                                                        tt
                                                      ),
                                                      [[I]]
                                                    ),
                                                    t("div", at, [
                                                      t(
                                                        "span",
                                                        st,
                                                        S(o.stat.view),
                                                        1
                                                      ),
                                                    ]),
                                                    nt,
                                                  ]),
                                                  t("div", ot, [
                                                    s(
                                                      g,
                                                      {
                                                        class: "ng-text judul",
                                                        content: o.title,
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
                                              ["to", "title"]
                                            )),
                                      ],
                                      64
                                    ))
                                  : Z("", !0),
                                o.card_type === "ugc"
                                  ? (u(),
                                    j(
                                      $,
                                      {
                                        key: 1,
                                        to: "/video/" + o.oid,
                                        title: o.title,
                                        class: "text-decoration-none",
                                      },
                                      {
                                        default: f(() => [
                                          t("div", it, [
                                            J(
                                              t(
                                                "img",
                                                {
                                                  "data-src":
                                                    "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                    o.cover +
                                                    "@720w_405h_1e_1c_90q.webp",
                                                  alt: "Image description",
                                                  class:
                                                    "w-full h-auto object-contain cover",
                                                },
                                                null,
                                                8,
                                                lt
                                              ),
                                              [[I]]
                                            ),
                                            t("div", rt, [
                                              t("span", ct, S(o.duration), 1),
                                            ]),
                                          ]),
                                          t("div", dt, [
                                            s(
                                              g,
                                              {
                                                class: "ng-text judul",
                                                content: o.title,
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
                                      ["to", "title"]
                                    ))
                                  : Z("", !0),
                              ],
                              64
                            )
                          )
                        ),
                        256
                      )),
                    ]),
                  ]),
                ])),
          ])
        );
      };
    },
  },
  _t = te(ut, [["__scopeId", "data-v-cb446d26"]]),
  pt = { style: { "padding-bottom": "80px !important" } },
  mt = { key: 0, class: "text-center" },
  vt = { class: "flex justify-center items-center h-screen" },
  ht = { key: 1 },
  Tt = {
    __name: "[id]",
    async setup(x) {
      let w, e;
      (async () => {
        const _ = new we({
          adUnitId: "ca-app-pub-1714916425986463/6487513884",
        });
        await _.load(), await _.show();
      })();
      const M = D(),
        c = ie();
      if (le()) {
        const _ = "noklmihhkiejeebhglcfhnllklhhhfik";
        (async () => {
          try {
            (await re(_))
              ? console.log("Extension is installed.")
              : c.push("/extension");
          } catch {
            c.push("/extension");
          }
        })();
      }
      const { data: d, pending: a } =
          (([w, e] = K(() =>
            ae(`${z}/api/videos/${M.params.id}`, { lazy: !0 }, "$RG8rjzT4T9")
          )),
          (w = await w),
          e(),
          w),
        b = ge({
          selector: "html",
          attribute: "class",
          valueDark: "van-theme-dark",
          valueLight: "van-theme-light",
        });
      return (_, v) => {
        const g = X,
          $ = de,
          I = We,
          o = ze,
          C = _t,
          E = ue,
          O = _e;
        return (
          u(),
          k("div", null, [
            t("div", pt, [
              n(a)
                ? (u(),
                  k("div", mt, [
                    t("div", vt, [
                      t("div", null, [s(g, { type: "spinner", size: "30px" })]),
                    ]),
                  ]))
                : (u(),
                  k("div", ht, [
                    s(
                      $,
                      {
                        onClick:
                          v[0] ||
                          (v[0] = (P) =>
                            ("navBacks" in _ ? _.navBacks : n(ce))(n(c))),
                        class: "nav-override",
                        theme: n(b),
                        title: n(d).title,
                        "left-text": "",
                        "left-arrow": "",
                      },
                      null,
                      8,
                      ["theme", "title"]
                    ),
                    s(I, { video_details: n(d) }, null, 8, ["video_details"]),
                    s(o),
                    s(C),
                    s(E, { bottom: "10vh" }),
                    s(O),
                  ])),
            ]),
          ])
        );
      };
    },
  };
export { Tt as default };
