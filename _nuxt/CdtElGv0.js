import { f as j, p as q, o as m, ac as D, E as F } from "./CPIMTh_-.js";
import {
  d as G,
  a as p,
  c as J,
  k as K,
  l as L,
  w as O,
  z as S,
} from "./CS_v0reC.js";
const [Q, z] = j("text-ellipsis"),
  U = {
    rows: q(1),
    dots: m("..."),
    content: m(""),
    expandText: m(""),
    collapseText: m(""),
    position: m("end"),
  };
var Z = G({
  name: Q,
  props: U,
  emits: ["clickAction"],
  setup(t, { emit: V, slots: g }) {
    const y = p(""),
      u = p(!1),
      T = p(!1),
      x = p();
    let h = !1;
    const w = J(() => (u.value ? t.collapseText : t.expandText)),
      C = (n) => {
        if (!n) return 0;
        const e = n.match(/^\d*(\.\d*)?/);
        return e ? Number(e[0]) : 0;
      },
      B = () => {
        if (!x.value || !x.value.isConnected) return;
        const n = window.getComputedStyle(x.value),
          e = document.createElement("div");
        return (
          Array.prototype.slice.apply(n).forEach((f) => {
            e.style.setProperty(f, n.getPropertyValue(f));
          }),
          (e.style.position = "fixed"),
          (e.style.zIndex = "-9999"),
          (e.style.top = "-9999px"),
          (e.style.height = "auto"),
          (e.style.minHeight = "auto"),
          (e.style.maxHeight = "auto"),
          (e.innerText = t.content),
          document.body.appendChild(e),
          e
        );
      },
      E = () => {
        const n = (l, H) => {
            const { content: a, position: v, dots: r } = t,
              d = a.length,
              _ = () => {
                const o = (s, i) => {
                  if (i - s <= 1)
                    return v === "end" ? a.slice(0, s) + r : r + a.slice(i, d);
                  const c = Math.round((s + i) / 2);
                  return (
                    v === "end"
                      ? (l.innerText = a.slice(0, c) + r + w.value)
                      : (l.innerText = r + a.slice(c, d) + w.value),
                    l.offsetHeight > H
                      ? v === "end"
                        ? o(s, c)
                        : o(c, i)
                      : v === "end"
                      ? o(c, i)
                      : o(s, c)
                  );
                };
                l.innerText = o(0, d);
              },
              N = (o, s) => {
                if (o[1] - o[0] <= 1 && s[1] - s[0] <= 1)
                  return a.slice(0, o[0]) + r + a.slice(s[1], d);
                const i = Math.floor((o[0] + o[1]) / 2),
                  c = Math.ceil((s[0] + s[1]) / 2);
                return (
                  (l.innerText =
                    t.content.slice(0, i) +
                    t.dots +
                    t.content.slice(c, d) +
                    t.expandText),
                  l.offsetHeight >= H
                    ? N([o[0], i], [c, s[1]])
                    : N([i, o[1]], [s[0], c])
                );
              },
              b = (0 + d) >> 1;
            return (
              t.position === "middle" ? (l.innerText = N([0, b], [b, d])) : _(),
              l.innerText
            );
          },
          e = B();
        if (!e) {
          h = !0;
          return;
        }
        const { paddingBottom: A, paddingTop: f, lineHeight: W } = e.style,
          M = Math.ceil((Number(t.rows) + 0.5) * C(W) + C(f) + C(A));
        M < e.offsetHeight
          ? ((T.value = !0), (y.value = n(e, M)))
          : ((T.value = !1), (y.value = t.content)),
          document.body.removeChild(e);
      },
      k = (n = !u.value) => {
        u.value = n;
      },
      I = (n) => {
        k(), V("clickAction", n);
      },
      R = () => {
        const n = g.action ? g.action({ expanded: u.value }) : w.value;
        return S("span", { class: z("action"), onClick: I }, [n]);
      };
    return (
      K(E),
      L(() => {
        h && ((h = !1), E());
      }),
      O([D, () => [t.content, t.rows, t.position]], E),
      F({ toggle: k }),
      () =>
        S("div", { ref: x, class: z() }, [
          u.value ? t.content : y.value,
          T.value ? R() : null,
        ])
    );
  },
});
export { Z as s };
