import {
  f as d,
  ab as P,
  o as m,
  t as S,
  p as E,
  g as w,
  Q as x,
  e as A,
} from "./CPIMTh_-.js";
import { d as h, c as p, z as v } from "./CS_v0reC.js";
const [y, _] = d("row"),
  b = Symbol(y),
  j = {
    tag: m("div"),
    wrap: S,
    align: String,
    gutter: { type: [String, Number, Array], default: 0 },
    justify: String,
  };
var K = h({
  name: y,
  props: j,
  setup(s, { slots: o }) {
    const { children: f, linkChildren: c } = P(b),
      i = p(() => {
        const t = [[]];
        let e = 0;
        return (
          f.forEach((r, a) => {
            (e += Number(r.span)),
              e > 24 ? (t.push([a]), (e -= 24)) : t[t.length - 1].push(a);
          }),
          t
        );
      }),
      n = p(() => {
        let t = 0;
        Array.isArray(s.gutter)
          ? (t = Number(s.gutter[0]) || 0)
          : (t = Number(s.gutter));
        const e = [];
        return (
          t &&
            i.value.forEach((r) => {
              const a = (t * (r.length - 1)) / r.length;
              r.forEach((l, $) => {
                if ($ === 0) e.push({ right: a });
                else {
                  const g = t - e[l - 1].right,
                    N = a - g;
                  e.push({ left: g, right: N });
                }
              });
            }),
          e
        );
      }),
      u = p(() => {
        const { gutter: t } = s,
          e = [];
        if (Array.isArray(t) && t.length > 1) {
          const r = Number(t[1]) || 0;
          if (r <= 0) return e;
          i.value.forEach((a, l) => {
            l !== i.value.length - 1 &&
              a.forEach(() => {
                e.push({ bottom: r });
              });
          });
        }
        return e;
      });
    return (
      c({ spaces: n, verticalSpaces: u }),
      () => {
        const { tag: t, wrap: e, align: r, justify: a } = s;
        return v(
          t,
          { class: _({ [`align-${r}`]: r, [`justify-${a}`]: a, nowrap: !e }) },
          {
            default: () => {
              var l;
              return [(l = o.default) == null ? void 0 : l.call(o)];
            },
          }
        );
      }
    );
  },
});
const [k, C] = d("col"),
  R = { tag: m("div"), span: E(0), offset: w };
var L = h({
  name: k,
  props: R,
  setup(s, { slots: o }) {
    const { parent: f, index: c } = x(b),
      i = p(() => {
        if (!f) return;
        const { spaces: n, verticalSpaces: u } = f;
        let t = {};
        if (n && n.value && n.value[c.value]) {
          const { left: r, right: a } = n.value[c.value];
          t = {
            paddingLeft: r ? `${r}px` : null,
            paddingRight: a ? `${a}px` : null,
          };
        }
        const { bottom: e } = u.value[c.value] || {};
        return A(t, { marginBottom: e ? `${e}px` : null });
      });
    return () => {
      const { tag: n, span: u, offset: t } = s;
      return v(
        n,
        { style: i.value, class: C({ [u]: u, [`offset-${t}`]: t }) },
        {
          default: () => {
            var e;
            return [(e = o.default) == null ? void 0 : e.call(o)];
          },
        }
      );
    };
  },
});
export { K as a, L as s };
