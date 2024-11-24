import { d as S, z as t, T as k } from "./CS_v0reC.js";
import { f as B, t as P, o as v, a0 as x, I as y } from "./CPIMTh_-.js";
const [I, r] = B("tag"),
  T = {
    size: String,
    mark: Boolean,
    show: P,
    type: v("default"),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean,
  };
var z = S({
  name: I,
  props: T,
  emits: ["close"],
  setup(o, { slots: l, emit: s }) {
    const c = (e) => {
        e.stopPropagation(), s("close", e);
      },
      i = () =>
        o.plain
          ? { color: o.textColor || o.color, borderColor: o.color }
          : { color: o.textColor, background: o.color },
      d = () => {
        var e;
        const {
            type: u,
            mark: m,
            plain: f,
            round: g,
            size: a,
            closeable: C,
          } = o,
          n = { mark: m, plain: f, round: g };
        a && (n[a] = a);
        const b =
          C &&
          t(y, { name: "cross", class: [r("close"), x], onClick: c }, null);
        return t("span", { style: i(), class: r([n, u]) }, [
          (e = l.default) == null ? void 0 : e.call(l),
          b,
        ]);
      };
    return () =>
      t(
        k,
        { name: o.closeable ? "van-fade" : void 0 },
        { default: () => [o.show ? d() : null] }
      );
  },
});
export { z as s };
