import {
  f as C,
  p as w,
  o as B,
  t as R,
  a6 as L,
  E as N,
  D as F,
  F as x,
  af as _,
  a1 as j,
} from "./CPIMTh_-.js";
import { u as y } from "./oIgI_nF1.js";
import {
  d as z,
  a as g,
  c as D,
  w as b,
  a9 as H,
  k as M,
  z as r,
  n as O,
} from "./CS_v0reC.js";
const [U, o, V] = C("list"),
  q = {
    error: Boolean,
    offset: w(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: B("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: R,
  };
var J = z({
  name: U,
  props: q,
  emits: ["load", "update:error", "update:loading"],
  setup(e, { emit: c, slots: a }) {
    const d = g(e.loading),
      f = g(),
      h = g(),
      s = y(),
      T = L(f),
      m = D(() => e.scroller || T.value),
      n = () => {
        O(() => {
          if (
            d.value ||
            e.finished ||
            e.disabled ||
            e.error ||
            (s == null ? void 0 : s.value) === !1
          )
            return;
          const { direction: t } = e,
            l = +e.offset,
            i = x(m);
          if (!i.height || _(f)) return;
          let u = !1;
          const v = x(h);
          t === "up"
            ? (u = i.top - v.top <= l)
            : (u = v.bottom - i.bottom <= l),
            u && ((d.value = !0), c("update:loading", !0), c("load"));
        });
      },
      k = () => {
        if (e.finished) {
          const t = a.finished ? a.finished() : e.finishedText;
          if (t) return r("div", { class: o("finished-text") }, [t]);
        }
      },
      P = () => {
        c("update:error", !1), n();
      },
      S = () => {
        if (e.error) {
          const t = a.error ? a.error() : e.errorText;
          if (t)
            return r(
              "div",
              {
                role: "button",
                class: o("error-text"),
                tabindex: 0,
                onClick: P,
              },
              [t]
            );
        }
      },
      E = () => {
        if (d.value && !e.finished && !e.disabled)
          return r("div", { class: o("loading") }, [
            a.loading
              ? a.loading()
              : r(
                  j,
                  { class: o("loading-icon") },
                  { default: () => [e.loadingText || V("loading")] }
                ),
          ]);
      };
    return (
      b(() => [e.loading, e.finished, e.error], n),
      s &&
        b(s, (t) => {
          t && n();
        }),
      H(() => {
        d.value = e.loading;
      }),
      M(() => {
        e.immediateCheck && n();
      }),
      N({ check: n }),
      F("scroll", n, { target: m, passive: !0 }),
      () => {
        var t;
        const l = (t = a.default) == null ? void 0 : t.call(a),
          i = r("div", { ref: h, class: o("placeholder") }, null);
        return r(
          "div",
          { ref: f, role: "feed", class: o(), "aria-busy": d.value },
          [
            e.direction === "down" ? l : i,
            E(),
            k(),
            S(),
            e.direction === "up" ? l : i,
          ]
        );
      }
    );
  },
});
export { J as s };
