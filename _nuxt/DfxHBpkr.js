import {
  u as oe,
  a as ze,
  A as P,
  x as se,
  s as Ee,
  v as he,
  y as Ae,
  z as Pe,
  n as Fe,
} from "./CPIMTh_-.js";
import { s as Ze, a as Ue, _ as We } from "./D2VWXsg2.js";
import {
  c as Je,
  a as Qe,
  P as Xe,
  I as Ke,
  S as ae,
  N as Me,
  b as pe,
  s as Ye,
  d as Ge,
} from "./IlX91n2-.js";
import { a as me, u as et } from "./CUgsq2x-.js";
import {
  a as z,
  k as Te,
  y as tt,
  I as o,
  J as v,
  M as t,
  z as l,
  L as _,
  u as a,
  Y as M,
  $ as Le,
  C as Ne,
  O as I,
  Z as ie,
  _ as le,
  P as O,
  F as D,
  a0 as F,
  a6 as st,
  N as ve,
  q as ne,
  a1 as Y,
  a2 as at,
  a3 as nt,
  a5 as qe,
} from "./CS_v0reC.js";
import { _ as re } from "./DlAUqK2U.js";
import { s as ot } from "./DydMEu4S.js";
import { s as it } from "./B4LKLkno.js";
import { s as Be } from "./qwo8eSrx.js";
import { s as lt, a as rt } from "./BVJXpbLV.js";
import { s as Oe } from "./CdtElGv0.js";
import { s as ct } from "./BQwMB-y9.js";
import { _ as Ve } from "./D7t2mj_N.js";
import { s as dt, a as ut } from "./3zhkehnZ.js";
import { s as _t } from "./GW7g2uS9.js";
import { s as pt } from "./DxJfQkse.js";
import { u as He } from "./CdoDYtDQ.js";
import "./BUTK-O5U.js";
import "./oIgI_nF1.js";
const mt = { class: "bg-server pb-3" },
  vt = t("div", { id: "oplayer" }, null, -1),
  ht = { class: "mx-3 mt-3" },
  ft = t("i", { class: "fa fa-server me-2" }, null, -1),
  gt = {
    __name: "Anime",
    props: { anime_details: Object },
    setup(d) {
      var G, ee, te;
      const y = oe(),
        r = ze(),
        e = z(),
        k = d;
      let p = me("server_resource", "avc_baseurl");
      const q = me("skip_intro", "on");
      let $ = me("watch_history", []);
      const n = k.anime_details;
      let w =
        (G = n.sections.section[0]) == null
          ? void 0
          : G.ep_details[0].episode_id;
      y.params.id && (w = y.params.id);
      let S = "",
        f = "",
        g = "",
        u = 0,
        N = 0,
        B = 0,
        E = 0,
        A = 0,
        H = [],
        T = [],
        W = [];
      n.sections.section.length > 0
        ? n.sections.section.forEach((s) => {
            let i = 0;
            s.ep_details.forEach((m) => {
              m.episode_id === parseInt(w) &&
                ((S = m.horizontal_cover),
                (f = m.title),
                (g = m.long_title_display),
                (A = i)),
                i++;
            });
          })
        : (S = n.horizon_cover);
      let J =
          (te =
            (ee = n.sections.section[0]) == null
              ? void 0
              : ee.ep_details[A + 1]) == null
            ? void 0
            : te.episode_id,
        L = P + "/static/img/" + S + "@720w_405h_1e_1c_90q.webp";
      const x = {
        source: {
          src: `${P}/dashapp/${p.value}/${w}/3.mpd`,
          title: g,
          poster: P + "/static/img/" + S + "@720w_405h_1e_1c_90q.webp",
        },
        lang: "en",
        videoAttr: { crossOrigin: "anonymous" },
      };
      n.subtitles.forEach((s) => {
        H.push({
          name: s.name,
          src: s.src,
          type: s.type,
          default: s.default === !0,
        });
      }),
        n.quality_list.forEach((s) => {
          W.push({
            name: s.text,
            value: `${P}/dashapp/${p.value}/${w}/${s.key}.mpd`,
            default: s.text === "480P",
          });
        });
      const ce = () => {
          var s, i, m, h, j, R, V, c;
          (u =
            ((s = n.skip) == null ? void 0 : s.opening_start_time) !== 0
              ? se((i = n.skip) == null ? void 0 : i.opening_start_time)
              : 0),
            (N =
              ((m = n.skip) == null ? void 0 : m.opening_end_time) !== 0
                ? se((h = n.skip) == null ? void 0 : h.opening_end_time)
                : 0),
            (B =
              ((j = n.skip) == null ? void 0 : j.ending_start_time) !== 0
                ? se((R = n.skip) == null ? void 0 : R.ending_start_time)
                : 0),
            (E =
              ((V = n.skip) == null ? void 0 : V.ending_end_time) !== 0
                ? se((c = n.skip) == null ? void 0 : c.ending_end_time)
                : 0),
            u !== 0 && !isNaN(u) && T.push({ time: u, text: "Intro start" }),
            N !== 0 && !isNaN(N) && T.push({ time: N, text: "Intro end" }),
            B !== 0 && !isNaN(B) && T.push({ time: B, text: "Outro start" }),
            E !== 0 && !isNaN(E) && T.push({ time: E, text: "Outro end" });
        },
        Q = (s) => {
          var i;
          (p.value = s),
            de((i = e.value) == null ? void 0 : i.options.source.src);
        },
        de = (s) => {
          (document.querySelector(".backward").style.display = ""),
            (document.querySelector(".forward").style.display = "");
          var i = s.replace(/\/dashapp\/(.*?)(?=\/)/, "/dashapp/" + p.value);
          e.value.changeSource({ src: i, poster: L, title: g });
          let m = [];
          n.quality_list.forEach((h) => {
            m.push({
              name: h.text,
              value: `${P}/dashapp/${p.value}/${w}/${h.key}.mpd`,
              default: h.text === "480P",
            });
          }),
            e.value.context.ui.subtitle.changeSource(H),
            e.value.context.ui.changHighlightSource(T),
            e.value.context.ui.menu.unregister("HD"),
            e.value.context.ui.menu.register({
              name: "HD",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M15 4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.077 7.114c-1.524 0-2.263-.8-2.315-1.749h1.147c.079.466.527.809 1.234.809c.739 0 1.13-.339 1.13-.83c0-.418-.3-.634-.923-.779l-.927-.215c-.932-.21-1.52-.747-1.52-1.657c0-1.098.918-1.815 2.24-1.815c1.371 0 2.162.77 2.22 1.692H6.238c-.075-.43-.466-.76-1.103-.76c-.655 0-1.046.338-1.046.804c0 .36.294.598.821.712l.932.216c.971.22 1.613.685 1.613 1.691c0 1.117-.857 1.881-2.378 1.881M8.307 11V5.001h2.19c1.823 0 2.684 1.09 2.684 2.984c0 1.908-.874 3.015-2.685 3.015zm2.031-5.032h-.844v4.06h.844c1.116 0 1.622-.667 1.622-2.02c0-1.354-.51-2.04-1.622-2.04"/></svg>',
              onChange({ value: h, name: j }, R) {
                var V;
                console.log(h),
                  (V = e.value) == null || V.changeQuality({ src: h }),
                  (R.innerText = j);
              },
              children: m,
            });
        },
        X = async () => {
          await ae.hide(),
            await Me.hide(),
            ae.setOverlaysWebView({ overlay: !0 }),
            await pe.lock({ orientation: "landscape" });
        },
        K = async () => {
          await ae.show(),
            await Me.show(),
            ae.setOverlaysWebView({ overlay: !1 }),
            await pe.lock({ orientation: "potrait" });
        },
        ue = async () => {
          await pe.unlock();
        };
      return (
        Te(() => {
          ce();
          const s = [
            Je({
              forceLandscapeOnFullscreen: !0,
              theme: {
                primaryColor: "rgba(244, 114, 182, 1)",
                watermark: {
                  src: "static/layer.png",
                  attrs: { class: "watermark", crossOrigin: "anonymous" },
                },
              },
              highlight: { color: "#fff", source: T },
              keyboard: { global: !0 },
              slideToSeek: "always",
              controlBar: { back: "fullscreen" },
              topSetting: !0,
              subtitle: { source: H },
              icons: {
                volume: [
                  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M3 14.088V9.912c0-.416.142-.814.395-1.108c.254-.293.597-.458.955-.458h1.89c.237-.001.47-.073.675-.21l3.97-2.63c.204-.135.436-.205.672-.204c.236.001.467.074.67.212c.205.137.374.334.492.57c.118.237.18.506.181.78v10.273c0 .273-.063.542-.181.778a1.477 1.477 0 0 1-.491.571c-.204.137-.435.21-.671.212a1.208 1.208 0 0 1-.673-.204l-3.969-2.631a1.233 1.233 0 0 0-.675-.209H4.35c-.358 0-.701-.165-.955-.459A1.702 1.702 0 0 1 3 14.089"/><path stroke-miterlimit="10" d="M16.228 15.715a5.344 5.344 0 0 0 0-7.559m2.267 9.884a8.552 8.552 0 0 0 0-12.093"/></g></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-miterlimit="10" d="m20.951 9.554l-4.902 4.902m0-4.902l4.902 4.902"/><path stroke-linejoin="round" d="M3.049 14.088V9.912c0-.416.142-.814.395-1.108c.253-.293.597-.458.955-.458h1.89c.236-.001.469-.073.675-.21l3.969-2.63a1.21 1.21 0 0 1 .672-.204c.236.001.467.074.671.212c.204.137.374.334.492.57c.118.237.18.506.18.78v10.273c0 .273-.062.542-.18.778a1.476 1.476 0 0 1-.492.571c-.203.137-.435.21-.67.212a1.207 1.207 0 0 1-.673-.204l-3.97-2.631a1.233 1.233 0 0 0-.674-.209h-1.89c-.358 0-.702-.165-.955-.459a1.702 1.702 0 0 1-.395-1.107"/></g></svg>',
                ],
                setting:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="m21.318 7.141l-.494-.856c-.373-.648-.56-.972-.878-1.101c-.317-.13-.676-.027-1.395.176l-1.22.344c-.459.106-.94.046-1.358-.17l-.337-.194a2 2 0 0 1-.788-.967l-.334-.998c-.22-.66-.33-.99-.591-1.178c-.261-.19-.609-.19-1.303-.19h-1.115c-.694 0-1.041 0-1.303.19c-.261.188-.37.518-.59 1.178l-.334.998a2 2 0 0 1-.789.967l-.337.195c-.418.215-.9.275-1.358.17l-1.22-.345c-.719-.203-1.078-.305-1.395-.176c-.318.129-.505.453-.878 1.1l-.493.857c-.35.608-.525.911-.491 1.234c.034.324.268.584.736 1.105l1.031 1.153c.252.319.431.875.431 1.375s-.179 1.056-.43 1.375l-1.032 1.152c-.468.521-.702.782-.736 1.105s.14.627.49 1.234l.494.857c.373.647.56.971.878 1.1s.676.028 1.395-.176l1.22-.344a2 2 0 0 1 1.359.17l.336.194c.36.23.636.57.788.968l.334.997c.22.66.33.99.591 1.18c.262.188.609.188 1.303.188h1.115c.694 0 1.042 0 1.303-.189s.371-.519.59-1.179l.335-.997c.152-.399.428-.738.788-.968l.336-.194c.42-.215.9-.276 1.36-.17l1.22.344c.718.204 1.077.306 1.394.177c.318-.13.505-.454.878-1.101l.493-.857c.35-.607.525-.91.491-1.234s-.268-.584-.736-1.105l-1.031-1.152c-.252-.32-.431-.875-.431-1.375s.179-1.056.43-1.375l1.032-1.153c.468-.52.702-.781.736-1.105s-.14-.626-.49-1.234"/><path d="M15.52 12a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"/></g></svg>',
                screenshot:
                  '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50"><path d="M 19.402344 6 C 17.019531 6 14.96875 7.679688 14.5 10.011719 L 14.097656 12 L 9 12 C 6.238281 12 4 14.238281 4 17 L 4 38 C 4 40.761719 6.238281 43 9 43 L 41 43 C 43.761719 43 46 40.761719 46 38 L 46 17 C 46 14.238281 43.761719 12 41 12 L 35.902344 12 L 35.5 10.011719 C 35.03125 7.679688 32.980469 6 30.597656 6 Z M 25 17 C 30.519531 17 35 21.480469 35 27 C 35 32.519531 30.519531 37 25 37 C 19.480469 37 15 32.519531 15 27 C 15 21.480469 19.480469 17 25 17 Z M 25 19 C 20.589844 19 17 22.589844 17 27 C 17 31.410156 20.589844 35 25 35 C 29.410156 35 33 31.410156 33 27 C 33 22.589844 29.410156 19 25 19 Z "></path></svg>',
                progressIndicator:
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path><path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path><path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path></svg>',
              },
              menu: [
                {
                  name: "EP Selanjutnya",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M3 6.804v10.392c0 1.54 1.667 2.502 3 1.732l3-1.732V6.804L6 5.072c-1.333-.77-3 .192-3 1.732Zm18 3.464c1.333.77 1.333 2.694 0 3.464l-9 5.196c-1.333.77-3-.192-3-1.732V6.804c0-1.54 1.667-2.502 3-1.732z"/></svg>',
                  position: "bottom",
                  onClick: () => {
                    var c;
                    J !== void 0
                      ? r.push("/play/" + n.season_id + "/" + J)
                      : (c = e.value) == null ||
                        c.context.ui.notice("Sudah episode terakhir");
                  },
                },
                {
                  name: "HD",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M15 4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.077 7.114c-1.524 0-2.263-.8-2.315-1.749h1.147c.079.466.527.809 1.234.809c.739 0 1.13-.339 1.13-.83c0-.418-.3-.634-.923-.779l-.927-.215c-.932-.21-1.52-.747-1.52-1.657c0-1.098.918-1.815 2.24-1.815c1.371 0 2.162.77 2.22 1.692H6.238c-.075-.43-.466-.76-1.103-.76c-.655 0-1.046.338-1.046.804c0 .36.294.598.821.712l.932.216c.971.22 1.613.685 1.613 1.691c0 1.117-.857 1.881-2.378 1.881M8.307 11V5.001h2.19c1.823 0 2.684 1.09 2.684 2.984c0 1.908-.874 3.015-2.685 3.015zm2.031-5.032h-.844v4.06h.844c1.116 0 1.622-.667 1.622-2.02c0-1.354-.51-2.04-1.622-2.04"/></svg>',
                  onChange({ value: c, name: C }, b) {
                    var Z;
                    (Z = e.value) == null || Z.changeQuality({ src: c }),
                      (b.innerText = C);
                  },
                  children: W,
                },
              ],
            }),
            Qe(),
          ];
          e.value = Xe.make("#oplayer", x).use(s).create();
          let i = document.createElement("button");
          (i.className = "midButton forward text-white"),
            (i.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M20.889 7.556C19.33 4.267 15.93 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m0-8v4h-4m-9 8V9l-2 .533M17 12c0-2-1-3.5-2.5-3.5S12 10 12 12s1 3.5 2.5 3.5S17 14 17 12Zm-2.5-3.5C16.925 8.5 17 11 17 12s0 3.5-2.5 3.5S12 13 12 12s.059-3.5 2.5-3.5Z"/></svg>'),
            (i.onclick = function () {
              var c;
              (c = e.value) == null || c.seek(e.value.currentTime + 10);
            });
          let m = document.createElement("button");
          (m.className = "midButton backward text-white"),
            (m.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M3.111 7.556C4.67 4.267 8.07 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m0-8v4h4m3 8V9l-2 .533M17 12c0-2-1-3.5-2.5-3.5S12 10 12 12s1 3.5 2.5 3.5S17 14 17 12Zm-2.5-3.5C16.925 8.5 17 11 17 12s0 3.5-2.5 3.5S12 13 12 12s.059-3.5 2.5-3.5Z"/></svg>'),
            (m.onclick = function () {
              var c;
              (c = e.value) == null || c.seek(e.value.currentTime - 10);
            });
          let h = document.createElement("button");
          (h.className = "midButton lockbutton"),
            (h.innerHTML = '<i class="fa fa-unlock-keyhole text-white"></i>');
          const R = document.querySelector(
            ".css-1tafg27, .css-gzwvtq"
          ).children;
          let V = !1;
          (h.onclick = function () {
            for (let b = 0; b < R.length; b++) {
              const Z = R[b].classList;
              R[b].getAttribute("aria-label") !== "Subtitle" &&
                !Z.contains("watermark") &&
                (R[b].style.display = V ? "none" : "");
            }
            const c = document.querySelector(".backward"),
              C = document.querySelector(".forward");
            V
              ? ((c.style.display = "none"),
                (C.style.display = "none"),
                (h.innerHTML = '<i class="fa fa-lock-keyhole text-white"></i>'))
              : ((c.style.display = ""),
                (C.style.display = ""),
                (h.innerHTML =
                  '<i class="fa fa-unlock-keyhole text-white"></i>')),
              (V = !V);
          }),
            e.value.$root.appendChild(h),
            e.value.$root.appendChild(m),
            e.value.$root.appendChild(i),
            e.value.on("loadedmetadata", () => {
              var C;
              const c = $.value.findIndex((b) => b.season_id === n.season_id);
              if (c >= 0) {
                const b = $.value[c];
                parseInt(b.episode_id) === parseInt(w) &&
                  ((C = e.value) == null || C.seek(b.time), Ke.requestReview());
              }
            }),
            e.value.on("fullscreenchange", () => {
              var C;
              ((C = e.value) == null ? void 0 : C.isFullScreen) ? X() : K();
            }),
            e.value.on("error", () => {
              (document.querySelector(".backward").style.display = "none"),
                (document.querySelector(".forward").style.display = "none");
              const c = document.querySelector('[aria-label="Error Overlay"]');
              c.innerHTML =
                '<i class="fa fa-tv-retro me-1" style="color:rgba(244, 114, 182, 1)"></i> NUSANIME';
              const C = document.querySelector('[aria-label="Error Overlay"]');
              C.innerHTML = `<div class="text-white text-center">
            <p class="fw-bold fa-bounce mb-3"><i class="fa fa-tv-retro me-1" style="color:rgba(244, 114, 182, 1)"></i> OOps!</p>
            <p class="pesanerror mb-3">An error has occured</p>
            <p class="pesanerror">Select another server or see update on discord.</p>
        </div>`;
            }),
            e.value.on("timeupdate", () => {
              var _e, fe, ge, we, ye, ke, xe, be, $e, Se, Ce, Ie;
              const c = Math.round(
                  ((_e = e.value) == null ? void 0 : _e.currentTime) ?? 0
                ),
                C = Math.round(
                  ((fe = e.value) == null ? void 0 : fe.duration) ?? 0
                ),
                b = Math.round((c / C) * 100),
                Z = $.value.findIndex((U) => U.season_id === n.season_id);
              Z >= 0
                ? ($.value[Z] = {
                    type: "anime",
                    season_id: n.season_id,
                    title: n.title,
                    episode_id: w,
                    episode_name: f,
                    image: S,
                    duration: C,
                    time: Math.round(
                      ((ge = e.value) == null ? void 0 : ge.currentTime) ?? 0
                    ),
                    progress: b === null ? 0 : b,
                    status: b === 100 ? "compltete" : "watching",
                    date: new Date().toISOString(),
                  })
                : $.value.push({
                    type: "anime",
                    season_id: n.season_id,
                    title: n.title,
                    episode_id: w,
                    episode_name: f,
                    image: S,
                    duration: C,
                    time: Math.round(
                      ((we = e.value) == null ? void 0 : we.currentTime) ?? 0
                    ),
                    progress: b,
                    status: b === 100 ? "compltete" : "watching",
                    date: new Date().toISOString(),
                  }),
                q.value === "on" &&
                  (u > 0 &&
                    c === u &&
                    ((ye = e.value) == null || ye.pause(),
                    (ke = e.value) == null ||
                      ke.context.ui.notice("Melewati intro ..."),
                    N > c && ((xe = e.value) == null || xe.seek(N)),
                    (be = e.value) == null || be.play(),
                    setTimeout(() => {
                      var U;
                      (U = e.value) == null ||
                        U.context.ui.notice("Intro dilewati ...");
                    }, 3e3)),
                  B > 0 &&
                    c === B &&
                    (($e = e.value) == null || $e.pause(),
                    (Se = e.value) == null ||
                      Se.context.ui.notice("Melewati outro ..."),
                    E > c && ((Ce = e.value) == null || Ce.seek(E)),
                    (Ie = e.value) == null || Ie.play(),
                    setTimeout(() => {
                      var U;
                      (U = e.value) == null ||
                        U.context.ui.notice("Outro dilewati ...");
                    }, 3e3)));
            });
        }),
        tt(() => {
          var s;
          ue(), (s = e.value) == null || s.destroy();
        }),
        (s, i) => {
          const m = Ee,
            h = Ye;
          return (
            o(),
            v("div", mt, [
              vt,
              t("div", ht, [
                l(
                  h,
                  { class: "w-full text-center justify-between" },
                  {
                    default: _(() => [
                      l(
                        m,
                        {
                          plain: a(p) === "avc_baseurl",
                          onClick: i[0] || (i[0] = (j) => Q("avc_baseurl")),
                          type: "primary",
                          size: "small",
                          block: "",
                        },
                        { default: _(() => [ft, M(" Default")]), _: 1 },
                        8,
                        ["plain"]
                      ),
                      l(
                        m,
                        {
                          plain: a(p) === "avc_backup_url",
                          onClick: i[1] || (i[1] = (j) => Q("avc_backup_url")),
                          type: "primary",
                          size: "small",
                          block: "",
                          disabled: "",
                        },
                        { default: _(() => [M("SERVER 1")]), _: 1 },
                        8,
                        ["plain"]
                      ),
                      l(
                        m,
                        {
                          plain: a(p) === "hevc_baseurl",
                          onClick: i[2] || (i[2] = (j) => Q("hevc_baseurl")),
                          type: "primary",
                          size: "small",
                          block: "",
                        },
                        { default: _(() => [M("SERVER 2")]), _: 1 },
                        8,
                        ["plain"]
                      ),
                      l(
                        m,
                        {
                          plain: a(p) === "hevc_backup_url",
                          onClick: i[3] || (i[3] = (j) => Q("hevc_backup_url")),
                          type: "primary",
                          size: "small",
                          block: "",
                          disabled: "",
                        },
                        { default: _(() => [M("SERVER 3")]), _: 1 },
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
  wt = (d) => (ie("data-v-6cb79450"), (d = d()), le(), d),
  yt = { id: "ongoing mb-2", class: "relative" },
  kt = ["data-src"],
  xt = wt(() =>
    t("i", { class: "fa fa-square-info ms-1 me-1 text-white" }, null, -1)
  ),
  bt = {
    __name: "Ongoing",
    props: { ongoing: { type: Object, required: !0 } },
    setup(d) {
      const y = (r) => {
        const e = /(\d{1,2}:\d{1,2})/,
          k = r.match(e);
        return k ? " " + k[1] + " WIB" : "";
      };
      return (r, e) => {
        const k = Ee,
          p = Le("lazy-load");
        return (
          o(),
          v("div", yt, [
            Ne(
              t(
                "img",
                {
                  class: "img-fluid",
                  "data-src":
                    "https://origin.ngewibu.workers.dev/?q=im&g=" +
                    d.ongoing.horizon_cover +
                    "@720w_405h_1e_1c_90q.webp",
                },
                null,
                8,
                kt
              ),
              [[p]]
            ),
            l(
              k,
              {
                size: "small",
                class: "ongoing-button btn-play",
                type: "primary",
              },
              {
                default: _(() => [
                  xt,
                  M(
                    " Tayang : " +
                      I(
                        d.ongoing.details.union_info[1]
                          .replace(" Tayang", "")
                          .replace("tidak", "belum") +
                          y(d.ongoing.info.union_info)
                      ),
                    1
                  ),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  },
  $t = re(bt, [["__scopeId", "data-v-6cb79450"]]),
  je = (d) => (ie("data-v-36fc88d5"), (d = d()), le(), d),
  St = { class: "m-0 p-0" },
  Ct = { class: "mx-3" },
  It = { class: "my-2" },
  Mt = { class: "mx-3 cobaelement" },
  zt = { class: "mt-3 mx-3" },
  Et = { class: "relative" },
  Tt = { class: "tkanan" },
  Lt = { style: { "font-size": "13px" } },
  Nt = { class: "tkanan" },
  qt = je(() => t("br", null, null, -1)),
  Bt = { style: { "font-size": "13px" } },
  Ot = { class: "tkanan" },
  Vt = je(() => t("br", null, null, -1)),
  Ht = { style: { "font-size": "13px" } },
  jt = { class: "tkanan" },
  Rt = { class: "mx-3" },
  Dt = {
    __name: "Info",
    props: { series_details: Object },
    setup(d) {
      const r = d.series_details;
      return (e, k) => {
        const p = gt,
          q = $t,
          $ = ot,
          n = it,
          w = Be,
          S = lt,
          f = rt,
          g = Oe;
        return (
          o(),
          v("div", null, [
            l(
              $,
              { "offset-top": 0 },
              {
                default: _(() => [
                  t("div", St, [
                    a(r).sections.section.length > 0
                      ? (o(),
                        O(p, { key: 0, anime_details: a(r) }, null, 8, [
                          "anime_details",
                        ]))
                      : (o(),
                        O(q, { key: 1, ongoing: a(r) }, null, 8, ["ongoing"])),
                  ]),
                ]),
                _: 1,
              }
            ),
            t("div", Ct, [t("h5", It, I(a(r).title), 1)]),
            t("div", Mt, [
              l(
                n,
                { type: "primary", class: "me-2" },
                { default: _(() => [M(I(a(r).info.play_num), 1)]), _: 1 }
              ),
              (o(!0),
              v(
                D,
                null,
                F(
                  a(r).details.styles.style,
                  (u) => (
                    o(),
                    O(
                      n,
                      {
                        key: u,
                        plain: "",
                        type: "primary",
                        size: "small",
                        class: "me-2 base_tag",
                      },
                      { default: _(() => [M(I(u.title), 1)]), _: 2 },
                      1024
                    )
                  )
                ),
                128
              )),
            ]),
            t("div", zt, [
              l(
                f,
                { gutter: "10", class: "mb-2" },
                {
                  default: _(() => [
                    l(
                      S,
                      { span: "5" },
                      {
                        default: _(() => [
                          t("div", Et, [
                            l(
                              w,
                              {
                                src:
                                  "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                  a(r).details.vertical_cover +
                                  "@286w_385h_1e_1c_90q.webp",
                                width: "100%",
                                height: "auto",
                              },
                              null,
                              8,
                              ["src"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                    l(
                      S,
                      { span: "19" },
                      {
                        default: _(() => [
                          (o(!0),
                          v(
                            D,
                            null,
                            F(
                              a(r).details.information,
                              (u) => (
                                o(),
                                v(
                                  "span",
                                  {
                                    class: "judul1",
                                    style: { "font-size": "13px" },
                                    key: u.field,
                                  },
                                  [
                                    M(I(u.field) + " : ", 1),
                                    t("span", Tt, I(u.value), 1),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                          t("span", Lt, [
                            M("Kategori : "),
                            t(
                              "span",
                              Nt,
                              I(a(r).details.union_info[0].replace("|", " | ")),
                              1
                            ),
                          ]),
                          qt,
                          t("span", Bt, [
                            M("Tayang : "),
                            t("span", Ot, I(a(r).details.union_info[1]), 1),
                          ]),
                          Vt,
                          t("span", Ht, [
                            M("Status : "),
                            t("span", jt, I(a(r).details.union_info[2]), 1),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            t("div", Rt, [
              l(
                g,
                {
                  rows: "2",
                  content: a(r).details.desc.value,
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
  At = re(Dt, [["__scopeId", "data-v-36fc88d5"]]),
  Re = (d) => (ie("data-v-4f521f5f"), (d = d()), le(), d),
  Pt = { class: "ms-3 mb-1 mt-0" },
  Ft = Re(() => t("i", { class: "fa fa-fire c-pink me-2" }, null, -1)),
  Zt = Re(() => t("i", { class: "fa fa-angle-right c-pink ms-2" }, null, -1)),
  Ut = { key: 0 },
  Wt = { class: "truncate-1 px-2 text-center ngtab_text" },
  Jt = { key: 1 },
  Qt = { class: "truncate-1 px-2 text-center ngtab_text" },
  Xt = { key: 0, class: "text-center my-5" },
  Kt = { key: 1 },
  Yt = { class: "mx-3" },
  Gt =
    "w-full inline-flex items-center justify-around py-3 text-white font-medium font-size-3 rounded-sm  border-2 border-solid border-pink bg-pink-400 hover:text-gray-900 hover:bg-gray-100",
  es =
    "w-full inline-flex items-center justify-around py-3 text-base-600 font-medium font-size-3 text-gray-500 rounded-sm border-2 border-solid border-gray  bg-gray-50 hover:text-gray-900 hover:bg-gray-100",
  ts = {
    __name: "List",
    props: { series_details: Object },
    setup(d) {
      const y = d,
        r = oe(),
        e = y.series_details,
        k = z(0),
        p = z(0),
        q = z(0),
        $ = z(0);
      let n = y.series_details.sections.section[0].ep_details[0].episode_id;
      const w = parseInt(r.params.series),
        S = parseInt(r.query.vid),
        f = parseInt(r.query.tid),
        g = z(0),
        u = z([]);
      e.sections.section.forEach((L) => {
        u.value = u.value.concat(L.ep_details);
      }),
        w && (k.value = w),
        S && (g.value = S),
        f && (p.value = f),
        r.params.id && (n = parseInt(r.params.id));
      const N = (L, x) =>
          n === parseInt(L) ? ((g.value = parseInt(x)), !0) : !1,
        B = z();
      Te(() => {
        var L;
        (L = B.value) == null || L.scrollTo(p.value),
          J({ title: e.sections.section[p.value].title, name: p.value });
      });
      const E = z([]),
        A = z([]),
        H = z(!1),
        T = z(!1);
      E.value = e.sections.section[0];
      const W = ({ title: L, name: x }) => {
        (H.value = !0),
          (E.value = e.sections.section[x]),
          setTimeout(() => {
            H.value = !1;
          }, 2e3);
      };
      A.value = e.sections.section[0];
      const J = ({ title: L, name: x }) => {
        A.value = e.sections.section[x];
      };
      return (L, x) => {
        const ce = Ve,
          Q = at,
          de = nt,
          X = dt,
          K = ut,
          ue = he,
          G = Be,
          ee = _t,
          te = pt;
        return (
          o(),
          v("div", null, [
            t("h5", Pt, [
              Ft,
              M("Semua Episode "),
              t(
                "span",
                {
                  class: "float-right me-2",
                  style: {
                    "font-size": "11px",
                    "font-weight": "600",
                    display: "flex",
                    "align-items": "center",
                    cursor: "pointer",
                  },
                  onClick: x[0] || (x[0] = (s) => (T.value = !0)),
                },
                [M(I(a(e).update_desc) + " ", 1), Zt]
              ),
            ]),
            a(e).sections.section.length > 0
              ? (o(),
                v("div", Ut, [
                  l(
                    K,
                    {
                      ref_key: "tabsRef",
                      ref: B,
                      active: a(q),
                      "onUpdate:active":
                        x[1] || (x[1] = (s) => (ne(q) ? (q.value = s) : null)),
                      "line-width": "0",
                      onClickTab: J,
                    },
                    {
                      default: _(() => [
                        (o(!0),
                        v(
                          D,
                          null,
                          F(
                            a(e).sections.section,
                            (s, i) => (
                              o(),
                              O(
                                X,
                                null,
                                {
                                  title: _(() => [
                                    t("span", Wt, I(s.title.split(":")[0]), 1),
                                  ]),
                                  default: _(() => [
                                    t("div", null, [
                                      l(
                                        de,
                                        {
                                          initialSlide: a(g),
                                          class: "swiperized mt-1",
                                          modules: [
                                            "SwiperFreeMode" in L
                                              ? L.SwiperFreeMode
                                              : a(st),
                                          ],
                                          "free-mode": !0,
                                          "slides-per-view": 5,
                                          "space-between": 10,
                                        },
                                        {
                                          default: _(() => [
                                            (o(!0),
                                            v(
                                              D,
                                              null,
                                              F(
                                                a(A).ep_details,
                                                (m, h) => (
                                                  o(),
                                                  O(
                                                    Q,
                                                    { key: h },
                                                    {
                                                      default: _(() => [
                                                        l(
                                                          ce,
                                                          {
                                                            class: ve(
                                                              N(m.episode_id, h)
                                                                ? es
                                                                : Gt
                                                            ),
                                                            to:
                                                              "/play/" +
                                                              a(w) +
                                                              "/" +
                                                              m.episode_id +
                                                              "?vid=" +
                                                              h +
                                                              "&tid=" +
                                                              i,
                                                          },
                                                          {
                                                            default: _(() => [
                                                              M(
                                                                I(
                                                                  m.short_title
                                                                ),
                                                                1
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["class", "to"]
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["initialSlide", "modules"]
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
                    },
                    8,
                    ["active"]
                  ),
                ]))
              : Y("", !0),
            a(e).season_series.length > 0
              ? (o(),
                v("div", Jt, [
                  l(
                    K,
                    {
                      active: a(k),
                      "onUpdate:active":
                        x[2] || (x[2] = (s) => (ne(k) ? (k.value = s) : null)),
                      "line-width": "0",
                      class: "mt-3",
                    },
                    {
                      default: _(() => [
                        (o(!0),
                        v(
                          D,
                          null,
                          F(
                            a(e).season_series,
                            (s) => (
                              o(),
                              O(
                                X,
                                {
                                  to: "/play/" + s.season_id,
                                  name: s.season_id,
                                },
                                {
                                  title: _(() => [
                                    t("span", Qt, I(s.title), 1),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["to", "name"]
                              )
                            )
                          ),
                          256
                        )),
                      ]),
                      _: 1,
                    },
                    8,
                    ["active"]
                  ),
                ]))
              : Y("", !0),
            t("div", null, [
              l(
                te,
                {
                  style: {
                    "max-width": "480px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                  show: a(T),
                  "onUpdate:show":
                    x[4] || (x[4] = (s) => (ne(T) ? (T.value = s) : null)),
                  title: "Semua episode",
                  "lazy-render": !0,
                },
                {
                  default: _(() => [
                    t("div", null, [
                      l(
                        K,
                        {
                          active: a($),
                          "onUpdate:active":
                            x[3] ||
                            (x[3] = (s) => (ne($) ? ($.value = s) : null)),
                          onClickTab: W,
                        },
                        {
                          default: _(() => [
                            (o(!0),
                            v(
                              D,
                              null,
                              F(
                                a(e).sections.section,
                                (s) => (
                                  o(),
                                  O(X, { title: s.title }, null, 8, ["title"])
                                )
                              ),
                              256
                            )),
                            a(H)
                              ? (o(),
                                v("div", Xt, [
                                  l(ue, {
                                    type: "spinner",
                                    size: "24px",
                                    style: {
                                      "margin-top": "50px",
                                      "margin-bottom": "50px",
                                    },
                                  }),
                                ]))
                              : (o(),
                                v("div", Kt, [
                                  (o(!0),
                                  v(
                                    D,
                                    null,
                                    F(
                                      a(E).ep_details,
                                      (s, i) => (
                                        o(),
                                        O(
                                          ee,
                                          {
                                            key: i,
                                            center: "",
                                            to:
                                              "/play/" +
                                              a(w) +
                                              "/" +
                                              s.episode_id +
                                              "?vid=" +
                                              i,
                                          },
                                          {
                                            title: _(() => [
                                              l(
                                                G,
                                                {
                                                  src:
                                                    "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                    s.horizontal_cover +
                                                    "@720w_405h_1e_1c_90q.webp",
                                                  width: "100%",
                                                  height: "auto",
                                                },
                                                null,
                                                8,
                                                ["src"]
                                              ),
                                            ]),
                                            value: _(() => [
                                              t("div", Yt, [
                                                t(
                                                  "span",
                                                  {
                                                    class: ve(
                                                      N(s.episode_id, i)
                                                        ? "text-blue"
                                                        : ""
                                                    ),
                                                    style: {
                                                      "text-align": "left",
                                                      width: "100%",
                                                      float: "left",
                                                    },
                                                  },
                                                  I(s.title),
                                                  3
                                                ),
                                                t(
                                                  "p",
                                                  {
                                                    class: ve([
                                                      N(s.episode_id, i)
                                                        ? "text-blue"
                                                        : "",
                                                      "text-left",
                                                    ]),
                                                    style: {
                                                      "font-size": "12px",
                                                    },
                                                  },
                                                  I(s.long_title),
                                                  3
                                                ),
                                              ]),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["to"]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ])),
                          ]),
                          _: 1,
                        },
                        8,
                        ["active"]
                      ),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["show"]
              ),
            ]),
          ])
        );
      };
    },
  },
  ss = re(ts, [["__scopeId", "data-v-4f521f5f"]]),
  De = (d) => (ie("data-v-79f40478"), (d = d()), le(), d),
  as = De(() =>
    t(
      "h5",
      { class: "ms-3 mb-3 mt-0" },
      [t("i", { class: "fa fa-fire c-pink me-2" }), M("Rekomendasi")],
      -1
    )
  ),
  ns = { key: 0, class: "text-center mt-3" },
  os = { key: 1 },
  is = { class: "mx-3" },
  ls = {
    class:
      "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3",
  },
  rs = { style: { position: "relative" } },
  cs = ["data-src"],
  ds = { class: "ngewibu__cover-mask" },
  us = {
    class: "ngewibu__cover-mask-text ngewibu__cover-mask-text--bold text-wrap",
  },
  _s = De(() =>
    t(
      "span",
      {
        class:
          "bstar-video-card__cover-label bstar-video-card__cover-label--normal text-white",
        style: { "background-color": "#1989fa", "font-weight": "700" },
      },
      [t("i", { class: "fa fa-tv-retro me-1 text-white" }), M("TV ")],
      -1
    )
  ),
  ps = { class: "mt-0" },
  ms = {
    __name: "Related",
    async setup(d) {
      let y, r;
      const e = oe(),
        { data: k, pending: p } =
          (([y, r] = qe(() =>
            He(
              `${P}/api/related/${e.params.series}`,
              { lazy: !0 },
              "$jflhyJ9rm2"
            )
          )),
          (y = await y),
          r(),
          y),
        q = ($) => $ === 0;
      return ($, n) => {
        const w = he,
          S = Oe,
          f = Ve,
          g = Le("lazy-load");
        return (
          o(),
          v("div", null, [
            as,
            a(p)
              ? (o(), v("div", ns, [l(w, { type: "spinner", size: "30px" })]))
              : (o(),
                v("div", os, [
                  t("div", is, [
                    t("div", ls, [
                      (o(!0),
                      v(
                        D,
                        null,
                        F(
                          a(k).list,
                          (u) => (
                            o(),
                            v(
                              D,
                              null,
                              [
                                q(u.oid)
                                  ? Y("", !0)
                                  : (o(),
                                    O(
                                      f,
                                      {
                                        key: 0,
                                        to: "/play/" + u.oid,
                                        title: u.title,
                                        class: "text-decoration-none",
                                      },
                                      {
                                        default: _(() => [
                                          t("div", rs, [
                                            Ne(
                                              t(
                                                "img",
                                                {
                                                  "data-src":
                                                    "https://origin.ngewibu.workers.dev/?q=im&g=" +
                                                    u.cover +
                                                    "@720w_405h_1e_1c_90q.webp",
                                                  alt: "Image description",
                                                  class:
                                                    "w-full h-auto object-contain cover",
                                                },
                                                null,
                                                8,
                                                cs
                                              ),
                                              [[g]]
                                            ),
                                            t("div", ds, [
                                              t("span", us, I(u.stat.view), 1),
                                            ]),
                                            _s,
                                          ]),
                                          t("div", ps, [
                                            l(
                                              S,
                                              {
                                                class: "ng-text judul",
                                                content: u.title,
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
  vs = re(ms, [["__scopeId", "data-v-79f40478"]]),
  hs = { style: { "padding-bottom": "80px !important" } },
  fs = { key: 0, class: "text-center" },
  gs = { class: "flex justify-center items-center h-screen" },
  ws = { key: 1 },
  js = {
    __name: "[[id]]",
    async setup(d) {
      let y, r;
      (async () => {
        const f = new Ge({
          adUnitId: "ca-app-pub-1714916425986463/6487513884",
        });
        await f.load(), await f.show();
      })();
      const e = oe(),
        k = ze(),
        p = z(),
        q = z(e.params.series);
      if (Ae()) {
        const f = "noklmihhkiejeebhglcfhnllklhhhfik";
        (async () => {
          try {
            (await Pe(f))
              ? console.log("Extension is installed.")
              : k.push("/extension");
          } catch {
            k.push("/extension");
          }
        })();
      }
      e.params.id && (p.value = e.params.id);
      const $ = () => {
          let f = q.value,
            g = p.value;
          return g != null && g !== ""
            ? `${P}/api/series/${f}/${g}`
            : `${P}/api/series/${f}`;
        },
        { data: n, pending: w } =
          (([y, r] = qe(() => He($(), { lazy: !0 }, "$VEB6qf9TMZ"))),
          (y = await y),
          r(),
          y),
        S = et({
          selector: "html",
          attribute: "class",
          valueDark: "van-theme-dark",
          valueLight: "van-theme-light",
        });
      return (f, g) => {
        const u = he,
          N = Ze,
          B = At,
          E = ct,
          A = ss,
          H = vs,
          T = Ue,
          W = We;
        return (
          o(),
          v("div", null, [
            t("div", hs, [
              a(w)
                ? (o(),
                  v("div", fs, [
                    t("div", gs, [
                      t("div", null, [l(u, { type: "spinner", size: "30px" })]),
                    ]),
                  ]))
                : (o(),
                  v("div", ws, [
                    l(
                      N,
                      {
                        onClick:
                          g[0] ||
                          (g[0] = (J) =>
                            ("navBacks" in f ? f.navBacks : a(Fe))(a(k))),
                        class: "nav-override",
                        theme: a(S),
                        title: a(n).title,
                        "left-text": "",
                        "left-arrow": "",
                      },
                      null,
                      8,
                      ["theme", "title"]
                    ),
                    t("div", null, [
                      l(B, { series_details: a(n) }, null, 8, [
                        "series_details",
                      ]),
                      l(E),
                      a(n).sections.section.length > 0
                        ? (o(),
                          O(A, { key: 0, series_details: a(n) }, null, 8, [
                            "series_details",
                          ]))
                        : Y("", !0),
                      a(n).sections.section.length > 0
                        ? (o(), O(E, { key: 1 }))
                        : Y("", !0),
                      l(H, { series_details: a(n) }, null, 8, [
                        "series_details",
                      ]),
                    ]),
                  ])),
              l(T, { bottom: "10vh" }),
              l(W),
            ]),
          ])
        );
      };
    },
  };
export { js as default };
