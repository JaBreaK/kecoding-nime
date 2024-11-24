import { s as m } from "./qwo8eSrx.js";
import { s as u } from "./BQwMB-y9.js";
import { a as h, s as f } from "./CPIMTh_-.js";
import { u as v } from "./CUgsq2x-.js";
import { _ as y } from "./DlAUqK2U.js";
import {
  J as g,
  M as o,
  z as e,
  L as a,
  I as b,
  Y as t,
  Z as x,
  _ as k,
} from "./CS_v0reC.js";
const n = (s) => (x("data-v-ffe79a29"), (s = s()), k(), s),
  w = { class: "px-5 pt-3" },
  I = { class: "text-center" },
  N = n(() =>
    o(
      "p",
      { class: "text-justify px-5 font-size-3" },
      [
        t(
          " If you are on a computer, you can find and install the extension from the Chrome Web Store."
        ),
        o("br"),
        o("br"),
        t(
          " If you are on a mobile device, the extension may not be available. Instead, you can try downloading the service provider's Android app from the Google Play Store. "
        ),
        o("br"),
        o("br"),
        t(
          " Please let me know if you need any clarification or have additional questions. "
        ),
      ],
      -1
    )
  ),
  C = { class: "px-5" },
  S = { class: "mb-3" },
  E = n(() => o("span", { class: "ms-3" }, "Download Extension", -1)),
  A = n(() => o("span", { class: "ms-3" }, "Install Android App", -1)),
  T = { class: "pt-3" },
  z = n(() => o("i", { class: "fa fa-house me-3" }, null, -1)),
  B = {
    __name: "extension",
    setup(s) {
      const l = h();
      v({
        selector: "html",
        attribute: "class",
        valueDark: "van-theme-dark",
        valueLight: "van-theme-light",
      });
      const r = () => {
          l.push("/");
        },
        p = () => {
          location.replace("/download/extension-1.0.0.zip");
        },
        d = () => {
          location.replace("");
        };
      return (D, G) => {
        const _ = m,
          c = u,
          i = f;
        return (
          b(),
          g("div", w, [
            o("div", I, [
              e(_, {
                width: "10rem",
                fit: "contain",
                src: "https://pngimg.com/d/anime_girl_PNG2.png",
              }),
              e(
                c,
                { "content-position": "center", class: "my-5" },
                { default: a(() => [t("EXTENSION NOT INSTALLED")]), _: 1 }
              ),
              N,
            ]),
            e(c, { "content-position": "center", class: "my-5" }),
            o("div", C, [
              o("div", S, [
                e(
                  i,
                  {
                    onClick: p,
                    plain: "",
                    class: "btn-play",
                    type: "primary",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1024px-Google_Chrome_icon_%28February_2022%29.svg.png",
                    block: "",
                  },
                  { default: a(() => [E]), _: 1 }
                ),
              ]),
              o("div", null, [
                e(
                  i,
                  {
                    onClick: d,
                    plain: "",
                    class: "btn-play",
                    type: "primary",
                    icon: "https://cdn-icons-png.flaticon.com/512/732/732208.png",
                    block: "",
                  },
                  { default: a(() => [A]), _: 1 }
                ),
                o("p", T, [
                  e(
                    i,
                    { onClick: r, type: "default", size: "small", block: "" },
                    { default: a(() => [z, t(" Back To Home")]), _: 1 }
                  ),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  },
  $ = y(B, [["__scopeId", "data-v-ffe79a29"]]);
export { $ as default };
