import { f as o, t as d, a2 as u, a3 as c } from "./CPIMTh_-.js";
import { d as m, z as r, F as f, B as p } from "./CS_v0reC.js";
const [v, i] = o("cell-group"),
  g = { title: String, inset: Boolean, border: d };
var P = m({
  name: v,
  inheritAttrs: !1,
  props: g,
  setup(e, { slots: t, attrs: l }) {
    const a = () => {
        var n;
        return r(
          "div",
          p(
            { class: [i({ inset: e.inset }), { [c]: e.border && !e.inset }] },
            l,
            u()
          ),
          [(n = t.default) == null ? void 0 : n.call(t)]
        );
      },
      s = () =>
        r("div", { class: i("title", { inset: e.inset }) }, [
          t.title ? t.title() : e.title,
        ]);
    return () => (e.title || t.title ? r(f, null, [s(), a()]) : a());
  },
});
export { P as s };
