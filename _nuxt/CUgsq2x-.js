import {
  w as R,
  q as $,
  a as T,
  u as U,
  k as J,
  n as P,
  ah as H,
  t as X,
  ae as Y,
  ad as Z,
  g as q,
  ai as ee,
  s as te,
  c as E,
  A as ne,
} from "./CS_v0reC.js";
function B(e) {
  return Y() ? (Z(e), !0) : !1;
}
function O(e) {
  return typeof e == "function" ? e() : U(e);
}
const re = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ae = Object.prototype.toString,
  se = (e) => ae.call(e) === "[object Object]",
  W = () => {};
function oe(e, n) {
  function r(...a) {
    return new Promise((t, s) => {
      Promise.resolve(
        e(() => n.apply(this, a), { fn: n, thisArg: this, args: a })
      )
        .then(t)
        .catch(s);
    });
  }
  return r;
}
const G = (e) => e();
function Ce(e, n = {}) {
  let r,
    a,
    t = W;
  const s = (i) => {
    clearTimeout(i), t(), (t = W);
  };
  return (i) => {
    const u = O(e),
      l = O(n.maxWait);
    return (
      r && s(r),
      u <= 0 || (l !== void 0 && l <= 0)
        ? (a && (s(a), (a = null)), Promise.resolve(i()))
        : new Promise((d, f) => {
            (t = n.rejectOnCancel ? f : d),
              l &&
                !a &&
                (a = setTimeout(() => {
                  r && s(r), (a = null), d(i());
                }, l)),
              (r = setTimeout(() => {
                a && s(a), (a = null), d(i());
              }, u));
          })
    );
  };
}
function ie(e = G) {
  const n = T(!0);
  function r() {
    n.value = !1;
  }
  function a() {
    n.value = !0;
  }
  const t = (...s) => {
    n.value && e(...s);
  };
  return { isActive: H(n), pause: r, resume: a, eventFilter: t };
}
function ue(e) {
  return q();
}
function le(...e) {
  if (e.length !== 1) return X(...e);
  const n = e[0];
  return typeof n == "function" ? H(ee(() => ({ get: n, set: W }))) : T(n);
}
function ce(e, n, r = {}) {
  const { eventFilter: a = G, ...t } = r;
  return R(e, oe(a, n), t);
}
function fe(e, n, r = {}) {
  const { eventFilter: a, ...t } = r,
    { eventFilter: s, pause: c, resume: i, isActive: u } = ie(a);
  return {
    stop: ce(e, n, { ...t, eventFilter: s }),
    pause: c,
    resume: i,
    isActive: u,
  };
}
function I(e, n = !0, r) {
  ue() ? J(e, r) : n ? e() : P(e);
}
function Ae(e = !1, n = {}) {
  const { truthyValue: r = !0, falsyValue: a = !1 } = n,
    t = $(e),
    s = T(e);
  function c(i) {
    if (arguments.length) return (s.value = i), s.value;
    {
      const u = O(r);
      return (s.value = s.value === u ? O(a) : u), s.value;
    }
  }
  return t ? c : [s, c];
}
function x(e) {
  var n;
  const r = O(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const k = re ? window : void 0;
function V(...e) {
  let n, r, a, t;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([r, a, t] = e), (n = k))
      : ([n, r, a, t] = e),
    !n)
  )
    return W;
  Array.isArray(r) || (r = [r]), Array.isArray(a) || (a = [a]);
  const s = [],
    c = () => {
      s.forEach((d) => d()), (s.length = 0);
    },
    i = (d, f, b, h) => (
      d.addEventListener(f, b, h), () => d.removeEventListener(f, b, h)
    ),
    u = R(
      () => [x(n), O(t)],
      ([d, f]) => {
        if ((c(), !d)) return;
        const b = se(f) ? { ...f } : f;
        s.push(...r.flatMap((h) => a.map((v) => i(d, h, v, b))));
      },
      { immediate: !0, flush: "post" }
    ),
    l = () => {
      u(), c();
    };
  return B(l), l;
}
function de() {
  const e = T(!1),
    n = q();
  return (
    n &&
      J(() => {
        e.value = !0;
      }, n),
    e
  );
}
function pe(e) {
  const n = de();
  return E(() => (n.value, !!e()));
}
function me(e, n = {}) {
  const { window: r = k } = n,
    a = pe(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let t;
  const s = T(!1),
    c = (l) => {
      s.value = l.matches;
    },
    i = () => {
      t &&
        ("removeEventListener" in t
          ? t.removeEventListener("change", c)
          : t.removeListener(c));
    },
    u = ne(() => {
      a.value &&
        (i(),
        (t = r.matchMedia(O(e))),
        "addEventListener" in t
          ? t.addEventListener("change", c)
          : t.addListener(c),
        (s.value = t.matches));
    });
  return (
    B(() => {
      u(), i(), (t = void 0);
    }),
    s
  );
}
const j =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  N = "__vueuse_ssr_handlers__",
  ge = he();
function he() {
  return N in j || (j[N] = j[N] || {}), j[N];
}
function K(e, n) {
  return ge[e] || n;
}
function ve(e) {
  return e == null
    ? "any"
    : e instanceof Set
    ? "set"
    : e instanceof Map
    ? "map"
    : e instanceof Date
    ? "date"
    : typeof e == "boolean"
    ? "boolean"
    : typeof e == "string"
    ? "string"
    : typeof e == "object"
    ? "object"
    : Number.isNaN(e)
    ? "any"
    : "number";
}
const ye = {
    boolean: { read: (e) => e === "true", write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  z = "vueuse-storage";
function we(e, n, r, a = {}) {
  var t;
  const {
      flush: s = "pre",
      deep: c = !0,
      listenToStorageChanges: i = !0,
      writeDefaults: u = !0,
      mergeDefaults: l = !1,
      shallow: d,
      window: f = k,
      eventFilter: b,
      onError: h = (o) => {
        console.error(o);
      },
      initOnMounted: v,
    } = a,
    g = (d ? te : T)(typeof n == "function" ? n() : n);
  if (!r)
    try {
      r = K("getDefaultStorage", () => {
        var o;
        return (o = k) == null ? void 0 : o.localStorage;
      })();
    } catch (o) {
      h(o);
    }
  if (!r) return g;
  const w = O(n),
    M = ve(w),
    S = (t = a.serializer) != null ? t : ye[M],
    { pause: D, resume: p } = fe(g, () => L(g.value), {
      flush: s,
      deep: c,
      eventFilter: b,
    });
  f &&
    i &&
    I(() => {
      V(f, "storage", y), V(f, z, F), v && y();
    }),
    v || y();
  function C(o, m) {
    f &&
      f.dispatchEvent(
        new CustomEvent(z, {
          detail: { key: e, oldValue: o, newValue: m, storageArea: r },
        })
      );
  }
  function L(o) {
    try {
      const m = r.getItem(e);
      if (o == null) C(m, null), r.removeItem(e);
      else {
        const A = S.write(o);
        m !== A && (r.setItem(e, A), C(m, A));
      }
    } catch (m) {
      h(m);
    }
  }
  function _(o) {
    const m = o ? o.newValue : r.getItem(e);
    if (m == null) return u && w != null && r.setItem(e, S.write(w)), w;
    if (!o && l) {
      const A = S.read(m);
      return typeof l == "function"
        ? l(A, w)
        : M === "object" && !Array.isArray(A)
        ? { ...w, ...A }
        : A;
    } else return typeof m != "string" ? m : S.read(m);
  }
  function y(o) {
    if (!(o && o.storageArea !== r)) {
      if (o && o.key == null) {
        g.value = w;
        return;
      }
      if (!(o && o.key !== e)) {
        D();
        try {
          (o == null ? void 0 : o.newValue) !== S.write(g.value) &&
            (g.value = _(o));
        } catch (m) {
          h(m);
        } finally {
          o ? P(p) : p();
        }
      }
    }
  }
  function F(o) {
    y(o.detail);
  }
  return g;
}
function Q(e) {
  return me("(prefers-color-scheme: dark)", e);
}
function be(e = {}) {
  const {
      selector: n = "html",
      attribute: r = "class",
      initialValue: a = "auto",
      window: t = k,
      storage: s,
      storageKey: c = "vueuse-color-scheme",
      listenToStorageChanges: i = !0,
      storageRef: u,
      emitAuto: l,
      disableTransition: d = !0,
    } = e,
    f = { auto: "", light: "light", dark: "dark", ...(e.modes || {}) },
    b = Q({ window: t }),
    h = E(() => (b.value ? "dark" : "light")),
    v =
      u ||
      (c == null
        ? le(a)
        : we(c, a, s, { window: t, listenToStorageChanges: i })),
    g = E(() => (v.value === "auto" ? h.value : v.value)),
    w = K("updateHTMLAttrs", (p, C, L) => {
      const _ =
        typeof p == "string"
          ? t == null
            ? void 0
            : t.document.querySelector(p)
          : x(p);
      if (!_) return;
      let y;
      if (
        (d &&
          ((y = t.document.createElement("style")),
          y.appendChild(
            document.createTextNode(
              "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          t.document.head.appendChild(y)),
        C === "class")
      ) {
        const F = L.split(/\s/g);
        Object.values(f)
          .flatMap((o) => (o || "").split(/\s/g))
          .filter(Boolean)
          .forEach((o) => {
            F.includes(o) ? _.classList.add(o) : _.classList.remove(o);
          });
      } else _.setAttribute(C, L);
      d && (t.getComputedStyle(y).opacity, document.head.removeChild(y));
    });
  function M(p) {
    var C;
    w(n, r, (C = f[p]) != null ? C : p);
  }
  function S(p) {
    e.onChanged ? e.onChanged(p, M) : M(p);
  }
  R(g, S, { flush: "post", immediate: !0 }), I(() => S(g.value));
  const D = E({
    get() {
      return l ? v.value : g.value;
    },
    set(p) {
      v.value = p;
    },
  });
  try {
    return Object.assign(D, { store: v, system: h, state: g });
  } catch {
    return D;
  }
}
function Ee(e = {}) {
  const { valueDark: n = "dark", valueLight: r = "", window: a = k } = e,
    t = be({
      ...e,
      onChanged: (i, u) => {
        var l;
        e.onChanged
          ? (l = e.onChanged) == null || l.call(e, i === "dark", u, i)
          : u(i);
      },
      modes: { dark: n, light: r },
    }),
    s = E(() =>
      t.system ? t.system.value : Q({ window: a }).value ? "dark" : "light"
    );
  return E({
    get() {
      return t.value === "dark";
    },
    set(i) {
      const u = i ? "dark" : "light";
      s.value === u ? (t.value = "auto") : (t.value = u);
    },
  });
}
function Oe(e, n = {}) {
  const { initialValue: r = !1, focusVisible: a = !1 } = n,
    t = T(!1),
    s = E(() => x(e));
  V(s, "focus", (i) => {
    var u, l;
    (!a ||
      ((l = (u = i.target).matches) != null && l.call(u, ":focus-visible"))) &&
      (t.value = !0);
  }),
    V(s, "blur", () => (t.value = !1));
  const c = E({
    get: () => t.value,
    set(i) {
      var u, l;
      !i && t.value
        ? (u = s.value) == null || u.blur()
        : i && !t.value && ((l = s.value) == null || l.focus());
    },
  });
  return (
    R(
      s,
      () => {
        c.value = r;
      },
      { immediate: !0, flush: "post" }
    ),
    { focused: c }
  );
}
export { we as a, Ae as b, Oe as c, Ce as d, Ee as u, ce as w };
