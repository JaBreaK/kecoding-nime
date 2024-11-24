const __vite__fileDeps = [
    "./CltikQ7v.js",
    "./D2VWXsg2.js",
    "./CS_v0reC.js",
    "./swiper-vue.Bs3d9ZnH.css",
    "./DlAUqK2U.js",
    "./index.Dw-nUwfp.css",
    "./3zhkehnZ.js",
    "./BUTK-O5U.js",
    "./DydMEu4S.js",
    "./index.aDlg0ZQ9.css",
    "./oIgI_nF1.js",
    "./index.BS877AcX.css",
    "./D7t2mj_N.js",
    "./CdtElGv0.js",
    "./index.6BBt8RSI.css",
    "./D_miRCqx.js",
    "./index.xR_DZ-hU.css",
    "./BCnNlUuK.js",
    "./index.D9FtDN81.css",
    "./CUgsq2x-.js",
    "./BOZaj71m.js",
    "./_genre_.BrvE4iMA.css",
    "./B60WpN2B.js",
    "./qwo8eSrx.js",
    "./index.Da9wjYGj.css",
    "./BQwMB-y9.js",
    "./index.Cwzw7Bif.css",
    "./extension.N5YvpcFn.css",
    "./CN2RE0D0.js",
    "./BVJXpbLV.js",
    "./index.vxqEnPkR.css",
    "./CXdL6Pn_.js",
    "./index.DjfUhziZ.css",
    "./history.OBQrjd9X.css",
    "./BoPA9Tf5.js",
    "./yLofO9Ja.js",
    "./index.DlIO7Gl2.css",
    "./CdoDYtDQ.js",
    "./index.i2CrQ0Di.css",
    "./dzSJzCLl.js",
    "./jadwal.Db9NZOzN.css",
    "./DfxHBpkr.js",
    "./IlX91n2-.js",
    "./index.Wq6M3PQj.css",
    "./B4LKLkno.js",
    "./index.CYxwh1Od.css",
    "./GW7g2uS9.js",
    "./index.Cu3af5Qq.css",
    "./DxJfQkse.js",
    "./index.ra3KEuuC.css",
    "./_id_.ClLKzYYT.css",
    "./DgZWaf_P.js",
    "./premium.Cqw7tjnL.css",
    "./ChUlEOmS.js",
    "./search-result.CkXQ9IQk.css",
    "./Jpxlq1xd.js",
    "./CVvMKoCI.js",
    "./index.MxvezR7i.css",
    "./search.BSXaJwrt.css",
    "./3s7N3848.js",
    "./settings.w-600LX8.css",
    "./DWuJMxN1.js",
    "./_type_.DFynHeoF.css",
    "./B0mWavrC.js",
    "./_id_.TfeFJRPs.css",
    "./lCI7fmPB.js",
    "./BzjI3Yoo.js",
    "./default.CSQYp1aR.css",
    "./MFbvjeHC.js",
    "./CwmjLkwE.js",
    "./error-404.JekaaCis.css",
    "./DkoSssVZ.js",
    "./error-500.CNP9nqm1.css",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
import {
  e as hs,
  r as de,
  h as Ko,
  g as Me,
  i as Y,
  t as ps,
  n as ve,
  v as ms,
  u as x,
  s as Xe,
  a as $,
  b as wt,
  d as z,
  c as U,
  f as re,
  p as ye,
  w as ce,
  K as gs,
  j as ys,
  o as qo,
  k as bt,
  l as En,
  m as _t,
  q as Go,
  x as vs,
  y as Yo,
  z as R,
  A as ws,
  B as Ae,
  T as Et,
  C as Jo,
  D as Xo,
  E as bs,
  F as _s,
  S as Pn,
  G as Qo,
  H as Es,
  I as Te,
  J as Ps,
  L as Zt,
  M as Un,
  N as ks,
  O as Cs,
  P as $e,
  Q as Rs,
  R as Ss,
  U as Fn,
  V as Ts,
  W as As,
  X as Os,
} from "./CS_v0reC.js";
const xs =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Ls =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  $s = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Is(e, t) {
  if (
    e === "__proto__" ||
    (e === "constructor" && t && typeof t == "object" && "prototype" in t)
  ) {
    Bs(e);
    return;
  }
  return t;
}
function Bs(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function dt(e, t = {}) {
  if (typeof e != "string") return e;
  const n = e.trim();
  if (e[0] === '"' && e.endsWith('"') && !e.includes("\\"))
    return n.slice(1, -1);
  if (n.length <= 9) {
    const o = n.toLowerCase();
    if (o === "true") return !0;
    if (o === "false") return !1;
    if (o === "undefined") return;
    if (o === "null") return null;
    if (o === "nan") return Number.NaN;
    if (o === "infinity") return Number.POSITIVE_INFINITY;
    if (o === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!$s.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (xs.test(e) || Ls.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, Is);
    }
    return JSON.parse(e);
  } catch (o) {
    if (t.strict) throw o;
    return e;
  }
}
const Hs = /#/g,
  Ns = /&/g,
  js = /\//g,
  Ms = /=/g,
  kn = /\+/g,
  Ds = /%5e/gi,
  Us = /%60/gi,
  Fs = /%7c/gi,
  zs = /%20/gi;
function Ws(e) {
  return encodeURI("" + e).replace(Fs, "|");
}
function en(e) {
  return Ws(typeof e == "string" ? e : JSON.stringify(e))
    .replace(kn, "%2B")
    .replace(zs, "+")
    .replace(Hs, "%23")
    .replace(Ns, "%26")
    .replace(Us, "`")
    .replace(Ds, "^")
    .replace(js, "%2F");
}
function Lt(e) {
  return en(e).replace(Ms, "%3D");
}
function ht(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function Vs(e) {
  return ht(e.replace(kn, " "));
}
function Ks(e) {
  return ht(e.replace(kn, " "));
}
function qs(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const n of e.split("&")) {
    const o = n.match(/([^=]+)=?(.*)/) || [];
    if (o.length < 2) continue;
    const r = Vs(o[1]);
    if (r === "__proto__" || r === "constructor") continue;
    const s = Ks(o[2] || "");
    t[r] === void 0
      ? (t[r] = s)
      : Array.isArray(t[r])
      ? t[r].push(s)
      : (t[r] = [t[r], s]);
  }
  return t;
}
function Gs(e, t) {
  return (
    (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${Lt(e)}=${en(n)}`).join("&")
        : `${Lt(e)}=${en(t)}`
      : Lt(e)
  );
}
function Ys(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => Gs(t, e[t]))
    .filter(Boolean)
    .join("&");
}
const Js = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  Xs = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  Qs = /^([/\\]\s*){2,}[^/\\]/,
  Zs = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  ea = /\/$|\/\?|\/#/,
  ta = /^\.?\//;
function xe(e, t = {}) {
  return (
    typeof t == "boolean" && (t = { acceptRelative: t }),
    t.strict ? Js.test(e) : Xs.test(e) || (t.acceptRelative ? Qs.test(e) : !1)
  );
}
function na(e) {
  return !!e && Zs.test(e);
}
function tn(e = "", t) {
  return t ? ea.test(e) : e.endsWith("/");
}
function Cn(e = "", t) {
  if (!t) return (tn(e) ? e.slice(0, -1) : e) || "/";
  if (!tn(e, !0)) return e || "/";
  let n = e,
    o = "";
  const r = e.indexOf("#");
  r >= 0 && ((n = e.slice(0, r)), (o = e.slice(r)));
  const [s, ...a] = n.split("?");
  return (
    ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") +
    (a.length > 0 ? `?${a.join("?")}` : "") +
    o
  );
}
function nn(e = "", t) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (tn(e, !0)) return e || "/";
  let n = e,
    o = "";
  const r = e.indexOf("#");
  if (r >= 0 && ((n = e.slice(0, r)), (o = e.slice(r)), !n)) return o;
  const [s, ...a] = n.split("?");
  return s + "/" + (a.length > 0 ? `?${a.join("?")}` : "") + o;
}
function oa(e = "") {
  return e.startsWith("/");
}
function zn(e = "") {
  return oa(e) ? e : "/" + e;
}
function ra(e, t) {
  if (er(t) || xe(e)) return e;
  const n = Cn(t);
  return e.startsWith(n) ? e : Rn(n, e);
}
function Wn(e, t) {
  if (er(t)) return e;
  const n = Cn(t);
  if (!e.startsWith(n)) return e;
  const o = e.slice(n.length);
  return o[0] === "/" ? o : "/" + o;
}
function Zo(e, t) {
  const n = Pt(e),
    o = { ...qs(n.search), ...t };
  return (n.search = Ys(o)), ia(n);
}
function er(e) {
  return !e || e === "/";
}
function sa(e) {
  return e && e !== "/";
}
function Rn(e, ...t) {
  let n = e || "";
  for (const o of t.filter((r) => sa(r)))
    if (n) {
      const r = o.replace(ta, "");
      n = nn(n) + r;
    } else n = o;
  return n;
}
function tr(...e) {
  var a, i, l, u;
  const t = /\/(?!\/)/,
    n = e.filter(Boolean),
    o = [];
  let r = 0;
  for (const c of n)
    if (!(!c || c === "/")) {
      for (const [f, d] of c.split(t).entries())
        if (!(!d || d === ".")) {
          if (d === "..") {
            if (o.length === 1 && xe(o[0])) continue;
            o.pop(), r--;
            continue;
          }
          if (f === 1 && (a = o[o.length - 1]) != null && a.endsWith(":/")) {
            o[o.length - 1] += "/" + d;
            continue;
          }
          o.push(d), r++;
        }
    }
  let s = o.join("/");
  return (
    r >= 0
      ? (i = n[0]) != null && i.startsWith("/") && !s.startsWith("/")
        ? (s = "/" + s)
        : (l = n[0]) != null &&
          l.startsWith("./") &&
          !s.startsWith("./") &&
          (s = "./" + s)
      : (s = "../".repeat(-1 * r) + s),
    (u = n[n.length - 1]) != null &&
      u.endsWith("/") &&
      !s.endsWith("/") &&
      (s += "/"),
    s
  );
}
function aa(e, t, n = {}) {
  return (
    n.trailingSlash || ((e = nn(e)), (t = nn(t))),
    n.leadingSlash || ((e = zn(e)), (t = zn(t))),
    n.encoding || ((e = ht(e)), (t = ht(t))),
    e === t
  );
}
const nr = Symbol.for("ufo:protocolRelative");
function Pt(e = "", t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, f, d = ""] = n;
    return {
      protocol: f.toLowerCase(),
      pathname: d,
      href: f + d,
      auth: "",
      host: "",
      search: "",
      hash: "",
    };
  }
  if (!xe(e, { acceptRelative: !0 })) return t ? Pt(t + e) : Vn(e);
  const [, o = "", r, s = ""] =
      e
        .replace(/\\/g, "/")
        .match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [],
    [, a = "", i = ""] = s.match(/([^#/?]*)(.*)?/) || [],
    { pathname: l, search: u, hash: c } = Vn(i.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: o.toLowerCase(),
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
    host: a,
    pathname: l,
    search: u,
    hash: c,
    [nr]: !o,
  };
}
function Vn(e = "") {
  const [t = "", n = "", o = ""] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: n, hash: o };
}
function ia(e) {
  const t = e.pathname || "",
    n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
    o = e.hash || "",
    r = e.auth ? e.auth + "@" : "",
    s = e.host || "";
  return (
    (e.protocol || e[nr] ? (e.protocol || "") + "//" : "") + r + s + t + n + o
  );
}
class ca extends Error {
  constructor(t, n) {
    super(t, n),
      (this.name = "FetchError"),
      n != null && n.cause && !this.cause && (this.cause = n.cause);
  }
}
function la(e) {
  var l, u, c, f, d;
  const t =
      ((l = e.error) == null ? void 0 : l.message) ||
      ((u = e.error) == null ? void 0 : u.toString()) ||
      "",
    n =
      ((c = e.request) == null ? void 0 : c.method) ||
      ((f = e.options) == null ? void 0 : f.method) ||
      "GET",
    o = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/",
    r = `[${n}] ${JSON.stringify(o)}`,
    s = e.response
      ? `${e.response.status} ${e.response.statusText}`
      : "<no response>",
    a = `${r}: ${s}${t ? ` ${t}` : ""}`,
    i = new ca(a, e.error ? { cause: e.error } : void 0);
  for (const h of ["request", "options", "response"])
    Object.defineProperty(i, h, {
      get() {
        return e[h];
      },
    });
  for (const [h, g] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"],
  ])
    Object.defineProperty(i, h, {
      get() {
        return e.response && e.response[g];
      },
    });
  return i;
}
const ua = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Kn(e = "GET") {
  return ua.has(e.toUpperCase());
}
function fa(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null
    ? !0
    : t !== "object"
    ? !1
    : Array.isArray(e)
    ? !0
    : e.buffer
    ? !1
    : (e.constructor && e.constructor.name === "Object") ||
      typeof e.toJSON == "function";
}
const da = new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html",
  ]),
  ha = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function pa(e = "") {
  if (!e) return "json";
  const t = e.split(";").shift() || "";
  return ha.test(t)
    ? "json"
    : da.has(t) || t.startsWith("text/")
    ? "text"
    : "blob";
}
function ma(e, t, n = globalThis.Headers) {
  const o = { ...t, ...e };
  if (
    (t != null &&
      t.params &&
      e != null &&
      e.params &&
      (o.params = {
        ...(t == null ? void 0 : t.params),
        ...(e == null ? void 0 : e.params),
      }),
    t != null &&
      t.query &&
      e != null &&
      e.query &&
      (o.query = {
        ...(t == null ? void 0 : t.query),
        ...(e == null ? void 0 : e.query),
      }),
    t != null && t.headers && e != null && e.headers)
  ) {
    o.headers = new n((t == null ? void 0 : t.headers) || {});
    for (const [r, s] of new n((e == null ? void 0 : e.headers) || {}))
      o.headers.set(r, s);
  }
  return o;
}
const ga = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  ya = new Set([101, 204, 205, 304]);
function or(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: o = globalThis.AbortController,
  } = e;
  async function r(i) {
    const l =
      (i.error && i.error.name === "AbortError" && !i.options.timeout) || !1;
    if (i.options.retry !== !1 && !l) {
      let c;
      typeof i.options.retry == "number"
        ? (c = i.options.retry)
        : (c = Kn(i.options.method) ? 0 : 1);
      const f = (i.response && i.response.status) || 500;
      if (
        c > 0 &&
        (Array.isArray(i.options.retryStatusCodes)
          ? i.options.retryStatusCodes.includes(f)
          : ga.has(f))
      ) {
        const d = i.options.retryDelay || 0;
        return (
          d > 0 && (await new Promise((h) => setTimeout(h, d))),
          s(i.request, { ...i.options, retry: c - 1 })
        );
      }
    }
    const u = la(i);
    throw (Error.captureStackTrace && Error.captureStackTrace(u, s), u);
  }
  const s = async function (l, u = {}) {
      var h;
      const c = {
        request: l,
        options: ma(u, e.defaults, n),
        response: void 0,
        error: void 0,
      };
      (c.options.method =
        (h = c.options.method) == null ? void 0 : h.toUpperCase()),
        c.options.onRequest && (await c.options.onRequest(c)),
        typeof c.request == "string" &&
          (c.options.baseURL && (c.request = ra(c.request, c.options.baseURL)),
          (c.options.query || c.options.params) &&
            (c.request = Zo(c.request, {
              ...c.options.params,
              ...c.options.query,
            }))),
        c.options.body &&
          Kn(c.options.method) &&
          (fa(c.options.body)
            ? ((c.options.body =
                typeof c.options.body == "string"
                  ? c.options.body
                  : JSON.stringify(c.options.body)),
              (c.options.headers = new n(c.options.headers || {})),
              c.options.headers.has("content-type") ||
                c.options.headers.set("content-type", "application/json"),
              c.options.headers.has("accept") ||
                c.options.headers.set("accept", "application/json"))
            : (("pipeTo" in c.options.body &&
                typeof c.options.body.pipeTo == "function") ||
                typeof c.options.body.pipe == "function") &&
              ("duplex" in c.options || (c.options.duplex = "half")));
      let f;
      if (!c.options.signal && c.options.timeout) {
        const g = new o();
        (f = setTimeout(() => g.abort(), c.options.timeout)),
          (c.options.signal = g.signal);
      }
      try {
        c.response = await t(c.request, c.options);
      } catch (g) {
        return (
          (c.error = g),
          c.options.onRequestError && (await c.options.onRequestError(c)),
          await r(c)
        );
      } finally {
        f && clearTimeout(f);
      }
      if (
        c.response.body &&
        !ya.has(c.response.status) &&
        c.options.method !== "HEAD"
      ) {
        const g =
          (c.options.parseResponse ? "json" : c.options.responseType) ||
          pa(c.response.headers.get("content-type") || "");
        switch (g) {
          case "json": {
            const w = await c.response.text(),
              _ = c.options.parseResponse || dt;
            c.response._data = _(w);
            break;
          }
          case "stream": {
            c.response._data = c.response.body;
            break;
          }
          default:
            c.response._data = await c.response[g]();
        }
      }
      return (
        c.options.onResponse && (await c.options.onResponse(c)),
        !c.options.ignoreResponseError &&
        c.response.status >= 400 &&
        c.response.status < 600
          ? (c.options.onResponseError && (await c.options.onResponseError(c)),
            await r(c))
          : c.response
      );
    },
    a = async function (l, u) {
      return (await s(l, u))._data;
    };
  return (
    (a.raw = s),
    (a.native = (...i) => t(...i)),
    (a.create = (i = {}) => or({ ...e, defaults: { ...e.defaults, ...i } })),
    a
  );
}
const Sn = (function () {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  })(),
  va =
    Sn.fetch ||
    (() =>
      Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  wa = Sn.Headers,
  ba = Sn.AbortController,
  _a = or({ fetch: va, Headers: wa, AbortController: ba }),
  Ea = _a,
  Pa = () => {
    var e;
    return (
      ((e = window == null ? void 0 : window.__NUXT__) == null
        ? void 0
        : e.config) || {}
    );
  },
  pt = Pa().app,
  ka = () => pt.baseURL,
  Ca = () => pt.buildAssetsDir,
  Tn = (...e) => tr(rr(), Ca(), ...e),
  rr = (...e) => {
    const t = pt.cdnURL || pt.baseURL;
    return e.length ? tr(t, ...e) : t;
  };
(globalThis.__buildAssetsURL = Tn), (globalThis.__publicAssetsURL = rr);
globalThis.$fetch || (globalThis.$fetch = Ea.create({ baseURL: ka() }));
function on(e, t = {}, n) {
  for (const o in e) {
    const r = e[o],
      s = n ? `${n}:${o}` : o;
    typeof r == "object" && r !== null
      ? on(r, t, s)
      : typeof r == "function" && (t[s] = r);
  }
  return t;
}
const Ra = { run: (e) => e() },
  Sa = () => Ra,
  sr = typeof console.createTask < "u" ? console.createTask : Sa;
function Ta(e, t) {
  const n = t.shift(),
    o = sr(n);
  return e.reduce(
    (r, s) => r.then(() => o.run(() => s(...t))),
    Promise.resolve()
  );
}
function Aa(e, t) {
  const n = t.shift(),
    o = sr(n);
  return Promise.all(e.map((r) => o.run(() => r(...t))));
}
function $t(e, t) {
  for (const n of [...e]) n(t);
}
class Oa {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, o = {}) {
    if (!t || typeof n != "function") return () => {};
    const r = t;
    let s;
    for (; this._deprecatedHooks[t]; )
      (s = this._deprecatedHooks[t]), (t = s.to);
    if (s && !o.allowDeprecated) {
      let a = s.message;
      a ||
        (a =
          `${r} hook has been deprecated` +
          (s.to ? `, please use ${s.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(a) ||
          (console.warn(a), this._deprecatedMessages.add(a));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0,
        });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let o,
      r = (...s) => (
        typeof o == "function" && o(), (o = void 0), (r = void 0), n(...s)
      );
    return (o = this.hook(t, r)), o;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const o = this._hooks[t].indexOf(n);
      o !== -1 && this._hooks[t].splice(o, 1),
        this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const o = this._hooks[t] || [];
    delete this._hooks[t];
    for (const r of o) this.hook(t, r);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = on(t),
      o = Object.keys(n).map((r) => this.hook(r, n[r]));
    return () => {
      for (const r of o.splice(0, o.length)) r();
    };
  }
  removeHooks(t) {
    const n = on(t);
    for (const o in n) this.removeHook(o, n[o]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(Ta, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Aa, t, ...n);
  }
  callHookWith(t, n, ...o) {
    const r =
      this._before || this._after ? { name: n, args: o, context: {} } : void 0;
    this._before && $t(this._before, r);
    const s = t(n in this._hooks ? [...this._hooks[n]] : [], o);
    return s instanceof Promise
      ? s.finally(() => {
          this._after && r && $t(this._after, r);
        })
      : (this._after && r && $t(this._after, r), s);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      }
    );
  }
}
function ar() {
  return new Oa();
}
function xa(e = {}) {
  let t,
    n = !1;
  const o = (a) => {
    if (t && t !== a) throw new Error("Context conflict");
  };
  let r;
  if (e.asyncContext) {
    const a = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    a
      ? (r = new a())
      : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const s = () => {
    if (r && t === void 0) {
      const a = r.getStore();
      if (a !== void 0) return a;
    }
    return t;
  };
  return {
    use: () => {
      const a = s();
      if (a === void 0) throw new Error("Context is not available");
      return a;
    },
    tryUse: () => s(),
    set: (a, i) => {
      i || o(a), (t = a), (n = !0);
    },
    unset: () => {
      (t = void 0), (n = !1);
    },
    call: (a, i) => {
      o(a), (t = a);
      try {
        return r ? r.run(a, i) : i();
      } finally {
        n || (t = void 0);
      }
    },
    async callAsync(a, i) {
      t = a;
      const l = () => {
          t = a;
        },
        u = () => (t === a ? l : void 0);
      rn.add(u);
      try {
        const c = r ? r.run(a, i) : i();
        return n || (t = void 0), await c;
      } finally {
        rn.delete(u);
      }
    },
  };
}
function La(e = {}) {
  const t = {};
  return {
    get(n, o = {}) {
      return t[n] || (t[n] = xa({ ...e, ...o })), t[n], t[n];
    },
  };
}
const mt =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof global < "u"
      ? global
      : typeof window < "u"
      ? window
      : {},
  qn = "__unctx__",
  $a = mt[qn] || (mt[qn] = La()),
  Ia = (e, t = {}) => $a.get(e, t),
  Gn = "__unctx_async_handlers__",
  rn = mt[Gn] || (mt[Gn] = new Set());
function Qe(e) {
  const t = [];
  for (const r of rn) {
    const s = r();
    s && t.push(s);
  }
  const n = () => {
    for (const r of t) r();
  };
  let o = e();
  return (
    o &&
      typeof o == "object" &&
      "catch" in o &&
      (o = o.catch((r) => {
        throw (n(), r);
      })),
    [o, n]
  );
}
const ir = Ia("nuxt-app", { asyncContext: !1 }),
  Ba = "__nuxt_plugin";
function Ha(e) {
  let t = 0;
  const n = {
    _scope: hs(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.11.2";
      },
      get vue() {
        return n.vueApp.version;
      },
    },
    payload: de({
      data: {},
      state: {},
      once: new Set(),
      _errors: {},
      ...(window.__NUXT__ ?? {}),
    }),
    static: { data: {} },
    runWithContext: (r) => n._scope.run(() => Ma(n, r)),
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let r = !1;
      return () => {
        if (!r && ((r = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook("app:suspense:resolve");
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...e,
  };
  (n.hooks = ar()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (r, s) => {
      const a = "$" + r;
      ot(n, a, s), ot(n.vueApp.config.globalProperties, a, s);
    }),
    ot(n.vueApp, "$nuxt", n),
    ot(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener("nuxt.preloadError", (s) => {
      n.callHook("app:chunkError", { error: s.payload });
    }),
      (window.useNuxtApp = window.useNuxtApp || H);
    const r = n.hook("app:error", (...s) => {
      console.error("[nuxt] error caught during app initialization", ...s);
    });
    n.hook("app:mounted", r);
  }
  const o = n.payload.config;
  return n.provide("config", o), n;
}
async function Na(e, t) {
  if ((t.hooks && e.hooks.addHooks(t.hooks), typeof t == "function")) {
    const { provide: n } = (await e.runWithContext(() => t(e))) || {};
    if (n && typeof n == "object") for (const o in n) e.provide(o, n[o]);
  }
}
async function ja(e, t) {
  const n = [],
    o = [],
    r = [],
    s = [];
  let a = 0;
  async function i(l) {
    var c;
    const u =
      ((c = l.dependsOn) == null
        ? void 0
        : c.filter((f) => t.some((d) => d._name === f) && !n.includes(f))) ??
      [];
    if (u.length > 0) o.push([new Set(u), l]);
    else {
      const f = Na(e, l).then(async () => {
        l._name &&
          (n.push(l._name),
          await Promise.all(
            o.map(async ([d, h]) => {
              d.has(l._name) &&
                (d.delete(l._name), d.size === 0 && (a++, await i(h)));
            })
          ));
      });
      l.parallel ? r.push(f.catch((d) => s.push(d))) : await f;
    }
  }
  for (const l of t) await i(l);
  if ((await Promise.all(r), a))
    for (let l = 0; l < a; l++) await Promise.all(r);
  if (s.length) throw s[0];
}
function he(e) {
  if (typeof e == "function") return e;
  const t = e._name || e.name;
  return (
    delete e.name,
    Object.assign(e.setup || (() => {}), e, { [Ba]: !0, _name: t })
  );
}
function Ma(e, t, n) {
  const o = () => t();
  return ir.set(e), e.vueApp.runWithContext(o);
}
function Da() {
  var t;
  let e;
  return (
    Ko() && (e = (t = Me()) == null ? void 0 : t.appContext.app.$nuxt),
    (e = e || ir.tryUse()),
    e || null
  );
}
function H() {
  const e = Da();
  if (!e) throw new Error("[nuxt] instance unavailable");
  return e;
}
function An(e) {
  return H().$config;
}
function ot(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
function Ua(e, t) {
  return { ctx: { table: e }, matchAll: (n) => lr(n, e) };
}
function cr(e) {
  const t = {};
  for (const n in e)
    t[n] =
      n === "dynamic"
        ? new Map(Object.entries(e[n]).map(([o, r]) => [o, cr(r)]))
        : new Map(Object.entries(e[n]));
  return t;
}
function Fa(e) {
  return Ua(cr(e));
}
function lr(e, t, n) {
  e.endsWith("/") && (e = e.slice(0, -1) || "/");
  const o = [];
  for (const [s, a] of Yn(t.wildcard))
    (e === s || e.startsWith(s + "/")) && o.push(a);
  for (const [s, a] of Yn(t.dynamic))
    if (e.startsWith(s + "/")) {
      const i = "/" + e.slice(s.length).split("/").splice(2).join("/");
      o.push(...lr(i, a));
    }
  const r = t.static.get(e);
  return r && o.push(r), o.filter(Boolean);
}
function Yn(e) {
  return [...e.entries()].sort((t, n) => t[0].length - n[0].length);
}
function It(e) {
  if (e === null || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  return (t !== null &&
    t !== Object.prototype &&
    Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
    ? Object.prototype.toString.call(e) === "[object Module]"
    : !0;
}
function sn(e, t, n = ".", o) {
  if (!It(t)) return sn(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor") continue;
    const a = e[s];
    a != null &&
      ((o && o(r, s, a, n)) ||
        (Array.isArray(a) && Array.isArray(r[s])
          ? (r[s] = [...a, ...r[s]])
          : It(a) && It(r[s])
          ? (r[s] = sn(a, r[s], (n ? `${n}.` : "") + s.toString(), o))
          : (r[s] = a)));
  }
  return r;
}
function ur(e) {
  return (...t) => t.reduce((n, o) => sn(n, o, "", e), {});
}
const fr = ur(),
  za = ur((e, t, n) => {
    if (e[t] !== void 0 && typeof n == "function") return (e[t] = n(e[t])), !0;
  });
function Wa(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
var Va = Object.defineProperty,
  Ka = (e, t, n) =>
    t in e
      ? Va(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Se = (e, t, n) => (Ka(e, typeof t != "symbol" ? t + "" : t, n), n);
class an extends Error {
  constructor(t, n = {}) {
    super(t, n),
      Se(this, "statusCode", 500),
      Se(this, "fatal", !1),
      Se(this, "unhandled", !1),
      Se(this, "statusMessage"),
      Se(this, "data"),
      Se(this, "cause"),
      n.cause && !this.cause && (this.cause = n.cause);
  }
  toJSON() {
    const t = { message: this.message, statusCode: ln(this.statusCode, 500) };
    return (
      this.statusMessage && (t.statusMessage = dr(this.statusMessage)),
      this.data !== void 0 && (t.data = this.data),
      t
    );
  }
}
Se(an, "__h3_error__", !0);
function cn(e) {
  if (typeof e == "string") return new an(e);
  if (qa(e)) return e;
  const t = new an(e.message ?? e.statusMessage ?? "", { cause: e.cause || e });
  if (Wa(e, "stack"))
    try {
      Object.defineProperty(t, "stack", {
        get() {
          return e.stack;
        },
      });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = ln(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = ln(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage;
    dr(t.statusMessage) !== n &&
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
  }
  return (
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  );
}
function qa(e) {
  var t;
  return (
    ((t = e == null ? void 0 : e.constructor) == null
      ? void 0
      : t.__h3_error__) === !0
  );
}
const Ga = /[^\u0009\u0020-\u007E]/g;
function dr(e = "") {
  return e.replace(Ga, "");
}
function ln(e, t = 200) {
  return !e ||
    (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999)
    ? t
    : e;
}
const hr = Symbol("layout-meta"),
  tt = Symbol("route"),
  pe = () => {
    var e;
    return (e = H()) == null ? void 0 : e.$router;
  },
  On = () => (Ko() ? Y(tt, H()._route) : H()._route);
const Ya = () => {
    try {
      if (H()._processingMiddleware) return !0;
    } catch {
      return !1;
    }
    return !1;
  },
  Bf = (e, t) => {
    e || (e = "/");
    const n =
      typeof e == "string"
        ? e
        : Zo(e.path || "/", e.query || {}) + (e.hash || "");
    if (t != null && t.open) {
      const { target: i = "_blank", windowFeatures: l = {} } = t.open,
        u = Object.entries(l)
          .filter(([c, f]) => f !== void 0)
          .map(([c, f]) => `${c.toLowerCase()}=${f}`)
          .join(", ");
      return open(n, i, u), Promise.resolve();
    }
    const o =
      (t == null ? void 0 : t.external) || xe(n, { acceptRelative: !0 });
    if (o) {
      if (!(t != null && t.external))
        throw new Error(
          "Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`."
        );
      const i = Pt(n).protocol;
      if (i && na(i))
        throw new Error(`Cannot navigate to a URL with '${i}' protocol.`);
    }
    const r = Ya();
    if (!o && r) return e;
    const s = pe(),
      a = H();
    return o
      ? (a._scope.stop(),
        t != null && t.replace ? location.replace(n) : (location.href = n),
        r ? (a.isHydrating ? new Promise(() => {}) : !1) : Promise.resolve())
      : t != null && t.replace
      ? s.replace(e)
      : s.push(e);
  },
  pr = "__nuxt_error",
  kt = () => ps(H().payload, "error"),
  Be = (e) => {
    const t = Ct(e);
    try {
      const n = H(),
        o = kt();
      n.hooks.callHook("app:error", t), (o.value = o.value || t);
    } catch {
      throw t;
    }
    return t;
  },
  Ja = async (e = {}) => {
    const t = H(),
      n = kt();
    t.callHook("app:error:cleared", e),
      e.redirect && (await pe().replace(e.redirect)),
      (n.value = null);
  },
  Xa = (e) => !!e && typeof e == "object" && pr in e,
  Ct = (e) => {
    const t = cn(e);
    return (
      Object.defineProperty(t, pr, {
        value: !0,
        configurable: !1,
        writable: !1,
      }),
      t
    );
  },
  Qa = -1,
  Za = -2,
  ei = -3,
  ti = -4,
  ni = -5,
  oi = -6;
function ri(e, t) {
  return si(JSON.parse(e), t);
}
function si(e, t) {
  if (typeof e == "number") return r(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const n = e,
    o = Array(n.length);
  function r(s, a = !1) {
    if (s === Qa) return;
    if (s === ei) return NaN;
    if (s === ti) return 1 / 0;
    if (s === ni) return -1 / 0;
    if (s === oi) return -0;
    if (a) throw new Error("Invalid input");
    if (s in o) return o[s];
    const i = n[s];
    if (!i || typeof i != "object") o[s] = i;
    else if (Array.isArray(i))
      if (typeof i[0] == "string") {
        const l = i[0],
          u = t == null ? void 0 : t[l];
        if (u) return (o[s] = u(r(i[1])));
        switch (l) {
          case "Date":
            o[s] = new Date(i[1]);
            break;
          case "Set":
            const c = new Set();
            o[s] = c;
            for (let h = 1; h < i.length; h += 1) c.add(r(i[h]));
            break;
          case "Map":
            const f = new Map();
            o[s] = f;
            for (let h = 1; h < i.length; h += 2) f.set(r(i[h]), r(i[h + 1]));
            break;
          case "RegExp":
            o[s] = new RegExp(i[1], i[2]);
            break;
          case "Object":
            o[s] = Object(i[1]);
            break;
          case "BigInt":
            o[s] = BigInt(i[1]);
            break;
          case "null":
            const d = Object.create(null);
            o[s] = d;
            for (let h = 1; h < i.length; h += 2) d[i[h]] = r(i[h + 1]);
            break;
          default:
            throw new Error(`Unknown type ${l}`);
        }
      } else {
        const l = new Array(i.length);
        o[s] = l;
        for (let u = 0; u < i.length; u += 1) {
          const c = i[u];
          c !== Za && (l[u] = r(c));
        }
      }
    else {
      const l = {};
      o[s] = l;
      for (const u in i) {
        const c = i[u];
        l[u] = r(c);
      }
    }
    return o[s];
  }
  return r(0);
}
function ai(e) {
  return Array.isArray(e) ? e : [e];
}
const ii = ["title", "titleTemplate", "script", "style", "noscript"],
  lt = ["base", "meta", "link", "style", "script", "noscript"],
  ci = [
    "title",
    "titleTemplate",
    "templateParams",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
  ],
  li = [
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams",
  ],
  mr = [
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "children",
    "innerHTML",
    "textContent",
    "processTemplateParams",
  ],
  ui = typeof window < "u";
function xn(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function Jn(e) {
  return (
    e._h ||
    xn(
      e._d
        ? e._d
        : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(
            e.props
          )
            .map(([t, n]) => `${t}:${String(n)}`)
            .join(",")}`
    )
  );
}
function gr(e, t) {
  const { props: n, tag: o } = e;
  if (li.includes(o)) return o;
  if (o === "link" && n.rel === "canonical") return "canonical";
  if (n.charset) return "charset";
  const r = ["id"];
  o === "meta" && r.push("name", "property", "http-equiv");
  for (const s of r)
    if (typeof n[s] < "u") {
      const a = String(n[s]);
      return `${o}:${s}:${a}`;
    }
  return !1;
}
function Xn(e, t) {
  return e == null ? t || null : typeof e == "function" ? e(t) : e;
}
async function fi(e, t, n) {
  const o = {
    tag: e,
    props: await yr(
      typeof t == "object" && typeof t != "function" && !(t instanceof Promise)
        ? { ...t }
        : {
            [["script", "noscript", "style"].includes(e)
              ? "innerHTML"
              : "textContent"]: t,
          },
      ["templateParams", "titleTemplate"].includes(e)
    ),
  };
  return (
    mr.forEach((r) => {
      const s = typeof o.props[r] < "u" ? o.props[r] : n[r];
      typeof s < "u" &&
        ((!["innerHTML", "textContent", "children"].includes(r) ||
          ii.includes(o.tag)) &&
          (o[r === "children" ? "innerHTML" : r] = s),
        delete o.props[r]);
    }),
    o.props.body && ((o.tagPosition = "bodyClose"), delete o.props.body),
    o.tag === "script" &&
      typeof o.innerHTML == "object" &&
      ((o.innerHTML = JSON.stringify(o.innerHTML)),
      (o.props.type = o.props.type || "application/json")),
    Array.isArray(o.props.content)
      ? o.props.content.map((r) => ({
          ...o,
          props: { ...o.props, content: r },
        }))
      : o
  );
}
function di(e, t) {
  var o;
  const n = e === "class" ? " " : ";";
  return (
    typeof t == "object" &&
      !Array.isArray(t) &&
      (t = Object.entries(t)
        .filter(([, r]) => r)
        .map(([r, s]) => (e === "style" ? `${r}:${s}` : r))),
    (o = Array.isArray(t) ? t.join(n) : t) == null
      ? void 0
      : o
          .split(n)
          .filter((r) => r.trim())
          .filter(Boolean)
          .join(n)
  );
}
async function yr(e, t) {
  for (const n of Object.keys(e)) {
    if (["class", "style"].includes(n)) {
      e[n] = di(n, e[n]);
      continue;
    }
    if (
      (e[n] instanceof Promise && (e[n] = await e[n]), !t && !mr.includes(n))
    ) {
      const o = String(e[n]),
        r = n.startsWith("data-");
      o === "true" || o === ""
        ? (e[n] = r ? "true" : !0)
        : e[n] || (r && o === "false" ? (e[n] = "false") : delete e[n]);
    }
  }
  return e;
}
const hi = 10;
async function pi(e) {
  const t = [];
  return (
    Object.entries(e.resolvedInput)
      .filter(([n, o]) => typeof o < "u" && ci.includes(n))
      .forEach(([n, o]) => {
        const r = ai(o);
        t.push(...r.map((s) => fi(n, s, e)).flat());
      }),
    (await Promise.all(t))
      .flat()
      .filter(Boolean)
      .map(
        (n, o) => (
          (n._e = e._i), e.mode && (n._m = e.mode), (n._p = (e._i << hi) + o), n
        )
      )
  );
}
const Qn = { base: -10, title: 10 },
  Zn = { critical: -80, high: -10, low: 20 };
function gt(e) {
  let t = 100;
  const n = e.tagPriority;
  return typeof n == "number"
    ? n
    : (e.tag === "meta"
        ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
          e.props.charset && (t = -20),
          e.props.name === "viewport" && (t = -15))
        : e.tag === "link" && e.props.rel === "preconnect"
        ? (t = 20)
        : e.tag in Qn && (t = Qn[e.tag]),
      typeof n == "string" && n in Zn ? t + Zn[n] : t);
}
const mi = [
    { prefix: "before:", offset: -1 },
    { prefix: "after:", offset: 1 },
  ],
  eo = ["onload", "onerror", "onabort", "onprogress", "onloadstart"],
  be = "%separator";
function ut(e, t, n) {
  if (typeof e != "string" || !e.includes("%")) return e;
  function o(a) {
    let i;
    return (
      ["s", "pageTitle"].includes(a)
        ? (i = t.pageTitle)
        : a.includes(".")
        ? (i = a.split(".").reduce((l, u) => (l && l[u]) || void 0, t))
        : (i = t[a]),
      typeof i < "u" ? (i || "").replace(/"/g, '\\"') : !1
    );
  }
  let r = e;
  try {
    r = decodeURI(e);
  } catch {}
  return (
    (r.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
      .sort()
      .reverse()
      .forEach((a) => {
        const i = o(a.slice(1));
        typeof i == "string" &&
          (e = e
            .replace(new RegExp(`\\${a}(\\W|$)`, "g"), (l, u) => `${i}${u}`)
            .trim());
      }),
    e.includes(be) &&
      (e.endsWith(be) && (e = e.slice(0, -be.length).trim()),
      e.startsWith(be) && (e = e.slice(be.length).trim()),
      (e = e.replace(new RegExp(`\\${be}\\s*\\${be}`, "g"), be)),
      (e = ut(e, { separator: n }, n))),
    e
  );
}
async function vr(e, t = {}) {
  var c;
  const n = t.document || e.resolvedOptions.document;
  if (!n || !e.dirty) return;
  const o = { shouldRender: !0, tags: [] };
  if ((await e.hooks.callHook("dom:beforeRender", o), !o.shouldRender)) return;
  const r = (await e.resolveTags()).map((f) => ({
    tag: f,
    id: lt.includes(f.tag) ? Jn(f) : f.tag,
    shouldRender: !0,
  }));
  let s = e._dom;
  if (!s) {
    s = { elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body } };
    for (const f of ["body", "head"]) {
      const d = (c = n[f]) == null ? void 0 : c.children,
        h = [];
      for (const g of [...d].filter((w) =>
        lt.includes(w.tagName.toLowerCase())
      )) {
        const w = {
          tag: g.tagName.toLowerCase(),
          props: await yr(
            g
              .getAttributeNames()
              .reduce((m, C) => ({ ...m, [C]: g.getAttribute(C) }), {})
          ),
          innerHTML: g.innerHTML,
        };
        let _ = 1,
          y = gr(w);
        for (; y && h.find((m) => m._d === y); ) y = `${y}:${_++}`;
        (w._d = y || void 0),
          h.push(w),
          (s.elMap[g.getAttribute("data-hid") || Jn(w)] = g);
      }
    }
  }
  (s.pendingSideEffects = { ...(s.sideEffects || {}) }), (s.sideEffects = {});
  function a(f, d, h) {
    const g = `${f}:${d}`;
    (s.sideEffects[g] = h), delete s.pendingSideEffects[g];
  }
  function i({ id: f, $el: d, tag: h }) {
    const g = h.tag.endsWith("Attrs");
    (s.elMap[f] = d),
      g ||
        (["textContent", "innerHTML"].forEach((w) => {
          h[w] && h[w] !== d[w] && (d[w] = h[w]);
        }),
        a(f, "el", () => {
          var w;
          (w = s.elMap[f]) == null || w.remove(), delete s.elMap[f];
        }));
    for (const [w, _] of Object.entries(h._eventHandlers || {}))
      d.getAttribute(`data-${w}`) !== "" &&
        ((h.tag === "bodyAttrs" ? n.defaultView : d).addEventListener(
          w.replace("on", ""),
          _.bind(d)
        ),
        d.setAttribute(`data-${w}`, ""));
    Object.entries(h.props).forEach(([w, _]) => {
      const y = `attr:${w}`;
      if (w === "class")
        for (const m of (_ || "").split(" ").filter(Boolean))
          g && a(f, `${y}:${m}`, () => d.classList.remove(m)),
            !d.classList.contains(m) && d.classList.add(m);
      else if (w === "style")
        for (const m of (_ || "").split(";").filter(Boolean)) {
          const [C, ...S] = m.split(":").map((L) => L.trim());
          a(f, `${y}:${m}:${C}`, () => {
            d.style.removeProperty(C);
          }),
            d.style.setProperty(C, S.join(":"));
        }
      else
        d.getAttribute(w) !== _ && d.setAttribute(w, _ === !0 ? "" : String(_)),
          g && a(f, y, () => d.removeAttribute(w));
    });
  }
  const l = [],
    u = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
  for (const f of r) {
    const { tag: d, shouldRender: h, id: g } = f;
    if (h) {
      if (d.tag === "title") {
        n.title = d.textContent;
        continue;
      }
      (f.$el = f.$el || s.elMap[g]),
        f.$el ? i(f) : lt.includes(d.tag) && l.push(f);
    }
  }
  for (const f of l) {
    const d = f.tag.tagPosition || "head";
    (f.$el = n.createElement(f.tag.tag)),
      i(f),
      (u[d] = u[d] || n.createDocumentFragment()),
      u[d].appendChild(f.$el);
  }
  for (const f of r) await e.hooks.callHook("dom:renderTag", f, n, a);
  u.head && n.head.appendChild(u.head),
    u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
    u.bodyClose && n.body.appendChild(u.bodyClose),
    Object.values(s.pendingSideEffects).forEach((f) => f()),
    (e._dom = s),
    (e.dirty = !1),
    await e.hooks.callHook("dom:rendered", { renders: r });
}
async function gi(e, t = {}) {
  const n = t.delayFn || ((o) => setTimeout(o, 10));
  return (e._domUpdatePromise =
    e._domUpdatePromise ||
    new Promise((o) =>
      n(async () => {
        await vr(e, t), delete e._domUpdatePromise, o();
      })
    ));
}
function yi(e) {
  return (t) => {
    var o, r;
    const n =
      ((r =
        (o = t.resolvedOptions.document) == null
          ? void 0
          : o.head.querySelector('script[id="unhead:payload"]')) == null
        ? void 0
        : r.innerHTML) || !1;
    return (
      n && t.push(JSON.parse(n)),
      {
        mode: "client",
        hooks: {
          "entries:updated": function (s) {
            gi(s, e);
          },
        },
      }
    );
  };
}
const vi = ["templateParams", "htmlAttrs", "bodyAttrs"],
  wi = {
    hooks: {
      "tag:normalise": function ({ tag: e }) {
        ["hid", "vmid", "key"].forEach((o) => {
          e.props[o] && ((e.key = e.props[o]), delete e.props[o]);
        });
        const n = gr(e) || (e.key ? `${e.tag}:${e.key}` : !1);
        n && (e._d = n);
      },
      "tags:resolve": function (e) {
        const t = {};
        e.tags.forEach((o) => {
          const r = (o.key ? `${o.tag}:${o.key}` : o._d) || o._p,
            s = t[r];
          if (s) {
            let i = o == null ? void 0 : o.tagDuplicateStrategy;
            if ((!i && vi.includes(o.tag) && (i = "merge"), i === "merge")) {
              const l = s.props;
              ["class", "style"].forEach((u) => {
                l[u] &&
                  (o.props[u]
                    ? (u === "style" && !l[u].endsWith(";") && (l[u] += ";"),
                      (o.props[u] = `${l[u]} ${o.props[u]}`))
                    : (o.props[u] = l[u]));
              }),
                (t[r].props = { ...l, ...o.props });
              return;
            } else if (o._e === s._e) {
              (s._duped = s._duped || []),
                (o._d = `${s._d}:${s._duped.length + 1}`),
                s._duped.push(o);
              return;
            } else if (gt(o) > gt(s)) return;
          }
          const a =
            Object.keys(o.props).length +
            (o.innerHTML ? 1 : 0) +
            (o.textContent ? 1 : 0);
          if (lt.includes(o.tag) && a === 0) {
            delete t[r];
            return;
          }
          t[r] = o;
        });
        const n = [];
        Object.values(t).forEach((o) => {
          const r = o._duped;
          delete o._duped, n.push(o), r && n.push(...r);
        }),
          (e.tags = n),
          (e.tags = e.tags.filter(
            (o) =>
              !(
                o.tag === "meta" &&
                (o.props.name || o.props.property) &&
                !o.props.content
              )
          ));
      },
    },
  },
  bi = {
    mode: "server",
    hooks: {
      "tags:resolve": function (e) {
        const t = {};
        e.tags
          .filter(
            (n) =>
              ["titleTemplate", "templateParams", "title"].includes(n.tag) &&
              n._m === "server"
          )
          .forEach((n) => {
            t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props;
          }),
          Object.keys(t).length &&
            e.tags.push({
              tag: "script",
              innerHTML: JSON.stringify(t),
              props: { id: "unhead:payload", type: "application/json" },
            });
      },
    },
  },
  _i = ["script", "link", "bodyAttrs"],
  Ei = (e) => ({
    hooks: {
      "tags:resolve": function (t) {
        for (const n of t.tags.filter((o) => _i.includes(o.tag)))
          Object.entries(n.props).forEach(([o, r]) => {
            o.startsWith("on") &&
              typeof r == "function" &&
              (e.ssr && eo.includes(o)
                ? (n.props[o] = `this.dataset.${o}fired = true`)
                : delete n.props[o],
              (n._eventHandlers = n._eventHandlers || {}),
              (n._eventHandlers[o] = r));
          }),
            e.ssr &&
              n._eventHandlers &&
              (n.props.src || n.props.href) &&
              (n.key = n.key || xn(n.props.src || n.props.href));
      },
      "dom:renderTag": function ({ $el: t, tag: n }) {
        var o, r;
        for (const s of Object.keys(
          (t == null ? void 0 : t.dataset) || {}
        ).filter((a) => eo.some((i) => `${i}fired` === a))) {
          const a = s.replace("fired", "");
          (r = (o = n._eventHandlers) == null ? void 0 : o[a]) == null ||
            r.call(t, new Event(a.replace("on", "")));
        }
      },
    },
  }),
  Pi = ["link", "style", "script", "noscript"],
  ki = {
    hooks: {
      "tag:normalise": ({ tag: e }) => {
        e.key && Pi.includes(e.tag) && (e.props["data-hid"] = e._h = xn(e.key));
      },
    },
  },
  Ci = {
    hooks: {
      "tags:resolve": (e) => {
        const t = (n) => {
          var o;
          return (o = e.tags.find((r) => r._d === n)) == null ? void 0 : o._p;
        };
        for (const { prefix: n, offset: o } of mi)
          for (const r of e.tags.filter(
            (s) =>
              typeof s.tagPriority == "string" && s.tagPriority.startsWith(n)
          )) {
            const s = t(r.tagPriority.replace(n, ""));
            typeof s < "u" && (r._p = s + o);
          }
        e.tags.sort((n, o) => n._p - o._p).sort((n, o) => gt(n) - gt(o));
      },
    },
  },
  Ri = { meta: "content", link: "href", htmlAttrs: "lang" },
  Si = (e) => ({
    hooks: {
      "tags:resolve": (t) => {
        var i;
        const { tags: n } = t,
          o =
            (i = n.find((l) => l.tag === "title")) == null
              ? void 0
              : i.textContent,
          r = n.findIndex((l) => l.tag === "templateParams"),
          s = r !== -1 ? n[r].props : {},
          a = s.separator || "|";
        delete s.separator, (s.pageTitle = ut(s.pageTitle || o || "", s, a));
        for (const l of n.filter((u) => u.processTemplateParams !== !1)) {
          const u = Ri[l.tag];
          u && typeof l.props[u] == "string"
            ? (l.props[u] = ut(l.props[u], s, a))
            : (l.processTemplateParams === !0 ||
                ["titleTemplate", "title"].includes(l.tag)) &&
              ["innerHTML", "textContent"].forEach((c) => {
                typeof l[c] == "string" && (l[c] = ut(l[c], s, a));
              });
        }
        (e._templateParams = s),
          (e._separator = a),
          (t.tags = n.filter((l) => l.tag !== "templateParams"));
      },
    },
  }),
  Ti = {
    hooks: {
      "tags:resolve": (e) => {
        const { tags: t } = e;
        let n = t.findIndex((r) => r.tag === "titleTemplate");
        const o = t.findIndex((r) => r.tag === "title");
        if (o !== -1 && n !== -1) {
          const r = Xn(t[n].textContent, t[o].textContent);
          r !== null ? (t[o].textContent = r || t[o].textContent) : delete t[o];
        } else if (n !== -1) {
          const r = Xn(t[n].textContent);
          r !== null &&
            ((t[n].textContent = r), (t[n].tag = "title"), (n = -1));
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean));
      },
    },
  },
  Ai = {
    hooks: {
      "tags:afterResolve": function (e) {
        for (const t of e.tags)
          typeof t.innerHTML == "string" &&
            (t.innerHTML &&
            ["application/ld+json", "application/json"].includes(t.props.type)
              ? (t.innerHTML = t.innerHTML.replace(/</g, "\\u003C"))
              : (t.innerHTML = t.innerHTML.replace(
                  new RegExp(`</${t.tag}`, "g"),
                  `<\\/${t.tag}`
                )));
      },
    },
  };
let wr;
function Oi(e = {}) {
  const t = xi(e);
  return t.use(yi()), (wr = t);
}
function to(e, t) {
  return !e || (e === "server" && t) || (e === "client" && !t);
}
function xi(e = {}) {
  const t = ar();
  t.addHooks(e.hooks || {}),
    (e.document = e.document || (ui ? document : void 0));
  const n = !e.document,
    o = () => {
      (i.dirty = !0), t.callHook("entries:updated", i);
    };
  let r = 0,
    s = [];
  const a = [],
    i = {
      plugins: a,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      headEntries() {
        return s;
      },
      use(l) {
        const u = typeof l == "function" ? l(i) : l;
        (!u.key || !a.some((c) => c.key === u.key)) &&
          (a.push(u), to(u.mode, n) && t.addHooks(u.hooks || {}));
      },
      push(l, u) {
        u == null || delete u.head;
        const c = { _i: r++, input: l, ...u };
        return (
          to(c.mode, n) && (s.push(c), o()),
          {
            dispose() {
              (s = s.filter((f) => f._i !== c._i)),
                t.callHook("entries:updated", i),
                o();
            },
            patch(f) {
              (s = s.map((d) => (d._i === c._i && (d.input = c.input = f), d))),
                o();
            },
          }
        );
      },
      async resolveTags() {
        const l = { tags: [], entries: [...s] };
        await t.callHook("entries:resolve", l);
        for (const u of l.entries) {
          const c = u.resolvedInput || u.input;
          if (
            ((u.resolvedInput = await (u.transform ? u.transform(c) : c)),
            u.resolvedInput)
          )
            for (const f of await pi(u)) {
              const d = {
                tag: f,
                entry: u,
                resolvedOptions: i.resolvedOptions,
              };
              await t.callHook("tag:normalise", d), l.tags.push(d.tag);
            }
        }
        return (
          await t.callHook("tags:beforeResolve", l),
          await t.callHook("tags:resolve", l),
          await t.callHook("tags:afterResolve", l),
          l.tags
        );
      },
      ssr: n,
    };
  return (
    [
      wi,
      bi,
      Ei,
      ki,
      Ci,
      Si,
      Ti,
      Ai,
      ...((e == null ? void 0 : e.plugins) || []),
    ].forEach((l) => i.use(l)),
    i.hooks.callHook("init", i),
    i
  );
}
function Li() {
  return wr;
}
const $i = ms.startsWith("3");
function Ii(e) {
  return typeof e == "function" ? e() : x(e);
}
function un(e, t = "") {
  if (e instanceof Promise) return e;
  const n = Ii(e);
  return !e || !n
    ? n
    : Array.isArray(n)
    ? n.map((o) => un(o, t))
    : typeof n == "object"
    ? Object.fromEntries(
        Object.entries(n).map(([o, r]) =>
          o === "titleTemplate" || o.startsWith("on")
            ? [o, x(r)]
            : [o, un(r, o)]
        )
      )
    : n;
}
const Bi = {
    hooks: {
      "entries:resolve": function (e) {
        for (const t of e.entries) t.resolvedInput = un(t.input);
      },
    },
  },
  br = "usehead";
function Hi(e) {
  return {
    install(n) {
      $i &&
        ((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(br, e));
    },
  }.install;
}
function Ni(e = {}) {
  e.domDelayFn = e.domDelayFn || ((n) => ve(() => setTimeout(() => n(), 0)));
  const t = Oi(e);
  return t.use(Bi), (t.install = Hi(t)), t;
}
const fn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  dn = "__unhead_injection_handler__";
function ji(e) {
  fn[dn] = e;
}
function Hf() {
  if (dn in fn) return fn[dn]();
  const e = Y(br);
  return e || Li();
}
const Mi = { nuxt: { buildId: "a3fa3bd3-bb07-45e8-a1ba-10cf6795e974" } },
  Di = za(Mi);
function _r() {
  const e = H();
  return e._appConfig || (e._appConfig = de(Di)), e._appConfig;
}
const Ui = !1,
  hn = !1,
  Fi = !1,
  Nf = { componentName: "NuxtLink" },
  jf = { deep: !0 },
  Mf = {},
  zi = "#__nuxt";
let ft, Er;
function Wi() {
  var t;
  const e = (t = _r().nuxt) == null ? void 0 : t.buildId;
  return (
    (ft = $fetch(Tn(`/_nuxt/builds/meta/${e}.json`))),
    ft.then((n) => {
      Er = Fa(n.matcher);
    }),
    ft
  );
}
function Rt() {
  return ft || Wi();
}
async function Ln(e) {
  return await Rt(), fr({}, ...Er.matchAll(e).reverse());
}
function no(e, t = {}) {
  const n = Ki(e, t),
    o = H(),
    r = (o._payloadCache = o._payloadCache || {});
  return (
    n in r ||
      (r[n] = qi(e).then((s) =>
        s ? Pr(n).then((a) => a || (delete r[n], null)) : ((r[n] = null), null)
      )),
    r[n]
  );
}
const Vi = "_payload.json";
function Ki(e, t = {}) {
  var r;
  const n = new URL(e, "http://localhost");
  if (n.host !== "localhost" || xe(n.pathname, { acceptRelative: !0 }))
    throw new Error("Payload URL must not include hostname: " + e);
  const o =
    t.hash ||
    (t.fresh ? Date.now() : (r = _r().nuxt) == null ? void 0 : r.buildId);
  return Rn(An().app.baseURL, n.pathname, Vi + (o ? `?${o}` : ""));
}
async function Pr(e) {
  const t = fetch(e).then((n) => n.text().then(kr));
  try {
    return await t;
  } catch (n) {
    console.warn("[nuxt] Cannot load payload ", e, n);
  }
  return null;
}
async function qi(e = On().path) {
  if (((e = Cn(e)), (await Rt()).prerendered.includes(e))) return !0;
  const n = await Ln(e);
  return !!n.prerender && !n.redirect;
}
let rt = null;
async function Gi() {
  if (rt) return rt;
  const e = document.getElementById("__NUXT_DATA__");
  if (!e) return {};
  const t = await kr(e.textContent || ""),
    n = e.dataset.src ? await Pr(e.dataset.src) : void 0;
  return (rt = { ...t, ...n, ...window.__NUXT__ }), rt;
}
async function kr(e) {
  return await ri(e, H()._payloadRevivers);
}
function Yi(e, t) {
  H()._payloadRevivers[e] = t;
}
const oo = {
    NuxtError: (e) => Ct(e),
    EmptyShallowRef: (e) =>
      Xe(e === "_" ? void 0 : e === "0n" ? BigInt(0) : dt(e)),
    EmptyRef: (e) => $(e === "_" ? void 0 : e === "0n" ? BigInt(0) : dt(e)),
    ShallowRef: (e) => Xe(e),
    ShallowReactive: (e) => wt(e),
    Ref: (e) => $(e),
    Reactive: (e) => de(e),
  },
  Ji = he({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const o in oo) Yi(o, oo[o]);
      Object.assign(
        e.payload,
        (([t, n] = Qe(() => e.runWithContext(Gi))), (t = await t), n(), t)
      ),
        (window.__NUXT__ = e.payload);
    },
  }),
  Xi = [],
  Qi = he({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = Ni({ plugins: Xi });
      ji(() => H().vueApp._context.provides.usehead), e.vueApp.use(t);
      {
        let n = !0;
        const o = async () => {
          (n = !1), await vr(t);
        };
        t.hooks.hook("dom:beforeRender", (r) => {
          r.shouldRender = !n;
        }),
          e.hooks.hook("page:start", () => {
            n = !0;
          }),
          e.hooks.hook("page:finish", () => {
            e.isHydrating || o();
          }),
          e.hooks.hook("app:error", o),
          e.hooks.hook("app:suspense:resolve", o);
      }
    },
  });
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Ie = typeof document < "u";
function Zi(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const I = Object.assign;
function Bt(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = le(r) ? r.map(e) : e(r);
  }
  return n;
}
const qe = () => {},
  le = Array.isArray,
  Cr = /#/g,
  ec = /&/g,
  tc = /\//g,
  nc = /=/g,
  oc = /\?/g,
  Rr = /\+/g,
  rc = /%5B/g,
  sc = /%5D/g,
  Sr = /%5E/g,
  ac = /%60/g,
  Tr = /%7B/g,
  ic = /%7C/g,
  Ar = /%7D/g,
  cc = /%20/g;
function $n(e) {
  return encodeURI("" + e)
    .replace(ic, "|")
    .replace(rc, "[")
    .replace(sc, "]");
}
function lc(e) {
  return $n(e).replace(Tr, "{").replace(Ar, "}").replace(Sr, "^");
}
function pn(e) {
  return $n(e)
    .replace(Rr, "%2B")
    .replace(cc, "+")
    .replace(Cr, "%23")
    .replace(ec, "%26")
    .replace(ac, "`")
    .replace(Tr, "{")
    .replace(Ar, "}")
    .replace(Sr, "^");
}
function uc(e) {
  return pn(e).replace(nc, "%3D");
}
function fc(e) {
  return $n(e).replace(Cr, "%23").replace(oc, "%3F");
}
function dc(e) {
  return e == null ? "" : fc(e).replace(tc, "%2F");
}
function Ze(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const hc = /\/$/,
  pc = (e) => e.replace(hc, "");
function Ht(e, t, n = "/") {
  let o,
    r = {},
    s = "",
    a = "";
  const i = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    i < l && i >= 0 && (l = -1),
    l > -1 &&
      ((o = t.slice(0, l)),
      (s = t.slice(l + 1, i > -1 ? i : t.length)),
      (r = e(s))),
    i > -1 && ((o = o || t.slice(0, i)), (a = t.slice(i, t.length))),
    (o = vc(o ?? t, n)),
    { fullPath: o + (s && "?") + s + a, path: o, query: r, hash: Ze(a) }
  );
}
function mc(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ro(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function gc(e, t, n) {
  const o = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    o > -1 &&
    o === r &&
    He(t.matched[o], n.matched[r]) &&
    Or(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function He(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Or(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!yc(e[n], t[n])) return !1;
  return !0;
}
function yc(e, t) {
  return le(e) ? so(e, t) : le(t) ? so(t, e) : e === t;
}
function so(e, t) {
  return le(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e.length === 1 && e[0] === t;
}
function vc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    o = e.split("/"),
    r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let s = n.length - 1,
    a,
    i;
  for (a = 0; a < o.length; a++)
    if (((i = o[a]), i !== "."))
      if (i === "..") s > 1 && s--;
      else break;
  return n.slice(0, s).join("/") + "/" + o.slice(a).join("/");
}
var et;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(et || (et = {}));
var Ge;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ge || (Ge = {}));
function wc(e) {
  if (!e)
    if (Ie) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), pc(e);
}
const bc = /^[^#]+#/;
function _c(e, t) {
  return e.replace(bc, "#") + t;
}
function Ec(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0),
  };
}
const St = () => ({ left: window.scrollX, top: window.scrollY });
function Pc(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = Ec(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function ao(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const mn = new Map();
function kc(e, t) {
  mn.set(e, t);
}
function Cc(e) {
  const t = mn.get(e);
  return mn.delete(e), t;
}
let Rc = () => location.protocol + "//" + location.host;
function xr(e, t) {
  const { pathname: n, search: o, hash: r } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let i = r.includes(e.slice(s)) ? e.slice(s).length : 1,
      l = r.slice(i);
    return l[0] !== "/" && (l = "/" + l), ro(l, "");
  }
  return ro(n, e) + o + r;
}
function Sc(e, t, n, o) {
  let r = [],
    s = [],
    a = null;
  const i = ({ state: d }) => {
    const h = xr(e, location),
      g = n.value,
      w = t.value;
    let _ = 0;
    if (d) {
      if (((n.value = h), (t.value = d), a && a === g)) {
        a = null;
        return;
      }
      _ = w ? d.position - w.position : 0;
    } else o(h);
    r.forEach((y) => {
      y(n.value, g, {
        delta: _,
        type: et.pop,
        direction: _ ? (_ > 0 ? Ge.forward : Ge.back) : Ge.unknown,
      });
    });
  };
  function l() {
    a = n.value;
  }
  function u(d) {
    r.push(d);
    const h = () => {
      const g = r.indexOf(d);
      g > -1 && r.splice(g, 1);
    };
    return s.push(h), h;
  }
  function c() {
    const { history: d } = window;
    d.state && d.replaceState(I({}, d.state, { scroll: St() }), "");
  }
  function f() {
    for (const d of s) d();
    (s = []),
      window.removeEventListener("popstate", i),
      window.removeEventListener("beforeunload", c);
  }
  return (
    window.addEventListener("popstate", i),
    window.addEventListener("beforeunload", c, { passive: !0 }),
    { pauseListeners: l, listen: u, destroy: f }
  );
}
function io(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? St() : null,
  };
}
function Tc(e) {
  const { history: t, location: n } = window,
    o = { value: xr(e, n) },
    r = { value: t.state };
  r.value ||
    s(
      o.value,
      {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(l, u, c) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : Rc() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), (r.value = u);
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](d);
    }
  }
  function a(l, u) {
    const c = I({}, t.state, io(r.value.back, l, r.value.forward, !0), u, {
      position: r.value.position,
    });
    s(l, c, !0), (o.value = l);
  }
  function i(l, u) {
    const c = I({}, r.value, t.state, { forward: l, scroll: St() });
    s(c.current, c, !0);
    const f = I({}, io(o.value, l, null), { position: c.position + 1 }, u);
    s(l, f, !1), (o.value = l);
  }
  return { location: o, state: r, push: i, replace: a };
}
function Lr(e) {
  e = wc(e);
  const t = Tc(e),
    n = Sc(e, t.state, t.location, t.replace);
  function o(s, a = !0) {
    a || n.pauseListeners(), history.go(s);
  }
  const r = I(
    { location: "", base: e, go: o, createHref: _c.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function Ac(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    Lr(e)
  );
}
function Oc(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function $r(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ie = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Ir = Symbol("");
var co;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(co || (co = {}));
function Ne(e, t) {
  return I(new Error(), { type: e, [Ir]: !0 }, t);
}
function ge(e, t) {
  return e instanceof Error && Ir in e && (t == null || !!(e.type & t));
}
const lo = "[^/]+?",
  xc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Lc = /[.+*?^${}()[\]/\\]/g;
function $c(e, t) {
  const n = I({}, xc, t),
    o = [];
  let r = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (r += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (r += "/"), (r += d.value.replace(Lc, "\\$&")), (h += 40);
      else if (d.type === 1) {
        const { value: g, repeatable: w, optional: _, regexp: y } = d;
        s.push({ name: g, repeatable: w, optional: _ });
        const m = y || lo;
        if (m !== lo) {
          h += 10;
          try {
            new RegExp(`(${m})`);
          } catch (S) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${m}): ` + S.message
            );
          }
        }
        let C = w ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
        f || (C = _ && u.length < 2 ? `(?:/${C})` : "/" + C),
          _ && (C += "?"),
          (r += C),
          (h += 20),
          _ && (h += -8),
          w && (h += -20),
          m === ".*" && (h += -50);
      }
      c.push(h);
    }
    o.push(c);
  }
  if (n.strict && n.end) {
    const u = o.length - 1;
    o[u][o[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const a = new RegExp(r, n.sensitive ? "" : "i");
  function i(u) {
    const c = u.match(a),
      f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const h = c[d] || "",
        g = s[d - 1];
      f[g.name] = h && g.repeatable ? h.split("/") : h;
    }
    return f;
  }
  function l(u) {
    let c = "",
      f = !1;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), (f = !1);
      for (const h of d)
        if (h.type === 0) c += h.value;
        else if (h.type === 1) {
          const { value: g, repeatable: w, optional: _ } = h,
            y = g in u ? u[g] : "";
          if (le(y) && !w)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const m = le(y) ? y.join("/") : y;
          if (!m)
            if (_)
              d.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${g}"`);
          c += m;
        }
    }
    return c || "/";
  }
  return { re: a, score: o, keys: s, parse: i, stringify: l };
}
function Ic(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function Bc(e, t) {
  let n = 0;
  const o = e.score,
    r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = Ic(o[n], r[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (uo(o)) return 1;
    if (uo(r)) return -1;
  }
  return r.length - o.length;
}
function uo(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Hc = { type: 0, value: "" },
  Nc = /[a-zA-Z0-9_]/;
function jc(e) {
  if (!e) return [[]];
  if (e === "/") return [[Hc]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${u}": ${h}`);
  }
  let n = 0,
    o = n;
  const r = [];
  let s;
  function a() {
    s && r.push(s), (s = []);
  }
  let i = 0,
    l,
    u = "",
    c = "";
  function f() {
    u &&
      (n === 0
        ? s.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function d() {
    u += l;
  }
  for (; i < e.length; ) {
    if (((l = e[i++]), l === "\\" && n !== 2)) {
      (o = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (u && f(), a()) : l === ":" ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = o);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : Nc.test(l)
          ? d()
          : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && i--);
        break;
      case 2:
        l === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + l)
            : (n = 3)
          : (c += l);
        break;
      case 3:
        f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && i--, (c = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), a(), r;
}
function Mc(e, t, n) {
  const o = $c(jc(e.path), n),
    r = I(o, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Dc(e, t) {
  const n = [],
    o = new Map();
  t = po({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(c) {
    return o.get(c);
  }
  function s(c, f, d) {
    const h = !d,
      g = Uc(c);
    g.aliasOf = d && d.record;
    const w = po(t, c),
      _ = [g];
    if ("alias" in c) {
      const C = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const S of C)
        _.push(
          I({}, g, {
            components: d ? d.record.components : g.components,
            path: S,
            aliasOf: d ? d.record : g,
          })
        );
    }
    let y, m;
    for (const C of _) {
      const { path: S } = C;
      if (f && S[0] !== "/") {
        const L = f.record.path,
          P = L[L.length - 1] === "/" ? "" : "/";
        C.path = f.record.path + (S && P + S);
      }
      if (
        ((y = Mc(C, f, w)),
        d
          ? d.alias.push(y)
          : ((m = m || y),
            m !== y && m.alias.push(y),
            h && c.name && !ho(y) && a(c.name)),
        g.children)
      ) {
        const L = g.children;
        for (let P = 0; P < L.length; P++) s(L[P], y, d && d.children[P]);
      }
      (d = d || y),
        ((y.record.components && Object.keys(y.record.components).length) ||
          y.record.name ||
          y.record.redirect) &&
          l(y);
    }
    return m
      ? () => {
          a(m);
        }
      : qe;
  }
  function a(c) {
    if ($r(c)) {
      const f = o.get(c);
      f &&
        (o.delete(c),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(a),
        f.alias.forEach(a));
    } else {
      const f = n.indexOf(c);
      f > -1 &&
        (n.splice(f, 1),
        c.record.name && o.delete(c.record.name),
        c.children.forEach(a),
        c.alias.forEach(a));
    }
  }
  function i() {
    return n;
  }
  function l(c) {
    let f = 0;
    for (
      ;
      f < n.length &&
      Bc(c, n[f]) >= 0 &&
      (c.record.path !== n[f].record.path || !Br(c, n[f]));

    )
      f++;
    n.splice(f, 0, c), c.record.name && !ho(c) && o.set(c.record.name, c);
  }
  function u(c, f) {
    let d,
      h = {},
      g,
      w;
    if ("name" in c && c.name) {
      if (((d = o.get(c.name)), !d)) throw Ne(1, { location: c });
      (w = d.record.name),
        (h = I(
          fo(
            f.params,
            d.keys
              .filter((m) => !m.optional)
              .concat(d.parent ? d.parent.keys.filter((m) => m.optional) : [])
              .map((m) => m.name)
          ),
          c.params &&
            fo(
              c.params,
              d.keys.map((m) => m.name)
            )
        )),
        (g = d.stringify(h));
    } else if (c.path != null)
      (g = c.path),
        (d = n.find((m) => m.re.test(g))),
        d && ((h = d.parse(g)), (w = d.record.name));
    else {
      if (((d = f.name ? o.get(f.name) : n.find((m) => m.re.test(f.path))), !d))
        throw Ne(1, { location: c, currentLocation: f });
      (w = d.record.name),
        (h = I({}, f.params, c.params)),
        (g = d.stringify(h));
    }
    const _ = [];
    let y = d;
    for (; y; ) _.unshift(y.record), (y = y.parent);
    return { name: w, path: g, params: h, matched: _, meta: zc(_) };
  }
  return (
    e.forEach((c) => s(c)),
    {
      addRoute: s,
      resolve: u,
      removeRoute: a,
      getRoutes: i,
      getRecordMatcher: r,
    }
  );
}
function fo(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function Uc(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Fc(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function Fc(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function ho(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function zc(e) {
  return e.reduce((t, n) => I(t, n.meta), {});
}
function po(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function Br(e, t) {
  return t.children.some((n) => n === e || Br(e, n));
}
function Wc(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(Rr, " "),
      a = s.indexOf("="),
      i = Ze(a < 0 ? s : s.slice(0, a)),
      l = a < 0 ? null : Ze(s.slice(a + 1));
    if (i in t) {
      let u = t[i];
      le(u) || (u = t[i] = [u]), u.push(l);
    } else t[i] = l;
  }
  return t;
}
function mo(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (((n = uc(n)), o == null)) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (le(o) ? o.map((s) => s && pn(s)) : [o && pn(o)]).forEach((s) => {
      s !== void 0 &&
        ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
    });
  }
  return t;
}
function Vc(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 &&
      (t[n] = le(o)
        ? o.map((r) => (r == null ? null : "" + r))
        : o == null
        ? o
        : "" + o);
  }
  return t;
}
const Kc = Symbol(""),
  go = Symbol(""),
  In = Symbol(""),
  Bn = Symbol(""),
  gn = Symbol("");
function Ve() {
  let e = [];
  function t(o) {
    return (
      e.push(o),
      () => {
        const r = e.indexOf(o);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Ee(e, t, n, o, r, s = (a) => a()) {
  const a = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () =>
    new Promise((i, l) => {
      const u = (d) => {
          d === !1
            ? l(Ne(4, { from: n, to: t }))
            : d instanceof Error
            ? l(d)
            : Oc(d)
            ? l(Ne(2, { from: t, to: d }))
            : (a &&
                o.enterCallbacks[r] === a &&
                typeof d == "function" &&
                a.push(d),
              i());
        },
        c = s(() => e.call(o && o.instances[r], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
    });
}
function Nt(e, t, n, o, r = (s) => s()) {
  const s = [];
  for (const a of e)
    for (const i in a.components) {
      let l = a.components[i];
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (qc(l)) {
          const c = (l.__vccOpts || l)[t];
          c && s.push(Ee(c, n, o, a, i, r));
        } else {
          let u = l();
          s.push(() =>
            u.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${a.path}"`)
                );
              const f = Zi(c) ? c.default : c;
              a.components[i] = f;
              const h = (f.__vccOpts || f)[t];
              return h && Ee(h, n, o, a, i, r)();
            })
          );
        }
    }
  return s;
}
function qc(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function yo(e) {
  const t = Y(In),
    n = Y(Bn),
    o = U(() => {
      const l = x(e.to);
      return t.resolve(l);
    }),
    r = U(() => {
      const { matched: l } = o.value,
        { length: u } = l,
        c = l[u - 1],
        f = n.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(He.bind(null, c));
      if (d > -1) return d;
      const h = vo(l[u - 2]);
      return u > 1 && vo(c) === h && f[f.length - 1].path !== h
        ? f.findIndex(He.bind(null, l[u - 2]))
        : d;
    }),
    s = U(() => r.value > -1 && Xc(n.params, o.value.params)),
    a = U(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        Or(n.params, o.value.params)
    );
  function i(l = {}) {
    return Jc(l)
      ? t[x(e.replace) ? "replace" : "push"](x(e.to)).catch(qe)
      : Promise.resolve();
  }
  return {
    route: o,
    href: U(() => o.value.href),
    isActive: s,
    isExactActive: a,
    navigate: i,
  };
}
const Gc = z({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: yo,
    setup(e, { slots: t }) {
      const n = de(yo(e)),
        { options: o } = Y(In),
        r = U(() => ({
          [wo(e.activeClass, o.linkActiveClass, "router-link-active")]:
            n.isActive,
          [wo(
            e.exactActiveClass,
            o.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : re(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              s
            );
      };
    },
  }),
  Yc = Gc;
function Jc(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Xc(e, t) {
  for (const n in t) {
    const o = t[n],
      r = e[n];
    if (typeof o == "string") {
      if (o !== r) return !1;
    } else if (!le(r) || r.length !== o.length || o.some((s, a) => s !== r[a]))
      return !1;
  }
  return !0;
}
function vo(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const wo = (e, t, n) => e ?? t ?? n,
  Qc = z({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const o = Y(gn),
        r = U(() => e.route || o.value),
        s = Y(go, 0),
        a = U(() => {
          let u = x(s);
          const { matched: c } = r.value;
          let f;
          for (; (f = c[u]) && !f.components; ) u++;
          return u;
        }),
        i = U(() => r.value.matched[a.value]);
      ye(
        go,
        U(() => a.value + 1)
      ),
        ye(Kc, i),
        ye(gn, r);
      const l = $();
      return (
        ce(
          () => [l.value, i.value, e.name],
          ([u, c, f], [d, h, g]) => {
            c &&
              ((c.instances[f] = u),
              h &&
                h !== c &&
                u &&
                u === d &&
                (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards),
                c.updateGuards.size || (c.updateGuards = h.updateGuards))),
              u &&
                c &&
                (!h || !He(c, h) || !d) &&
                (c.enterCallbacks[f] || []).forEach((w) => w(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = r.value,
            c = e.name,
            f = i.value,
            d = f && f.components[c];
          if (!d) return bo(n.default, { Component: d, route: u });
          const h = f.props[c],
            g = h
              ? h === !0
                ? u.params
                : typeof h == "function"
                ? h(u)
                : h
              : null,
            _ = re(
              d,
              I({}, g, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (f.instances[c] = null);
                },
                ref: l,
              })
            );
          return bo(n.default, { Component: _, route: u }) || _;
        }
      );
    },
  });
function bo(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Hr = Qc;
function Zc(e) {
  const t = Dc(e.routes, e),
    n = e.parseQuery || Wc,
    o = e.stringifyQuery || mo,
    r = e.history,
    s = Ve(),
    a = Ve(),
    i = Ve(),
    l = Xe(ie);
  let u = ie;
  Ie &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = Bt.bind(null, (p) => "" + p),
    f = Bt.bind(null, dc),
    d = Bt.bind(null, Ze);
  function h(p, b) {
    let v, E;
    return (
      $r(p) ? ((v = t.getRecordMatcher(p)), (E = b)) : (E = p), t.addRoute(E, v)
    );
  }
  function g(p) {
    const b = t.getRecordMatcher(p);
    b && t.removeRoute(b);
  }
  function w() {
    return t.getRoutes().map((p) => p.record);
  }
  function _(p) {
    return !!t.getRecordMatcher(p);
  }
  function y(p, b) {
    if (((b = I({}, b || l.value)), typeof p == "string")) {
      const T = Ht(n, p, b.path),
        D = t.resolve({ path: T.path }, b),
        We = r.createHref(T.fullPath);
      return I(T, D, {
        params: d(D.params),
        hash: Ze(T.hash),
        redirectedFrom: void 0,
        href: We,
      });
    }
    let v;
    if (p.path != null) v = I({}, p, { path: Ht(n, p.path, b.path).path });
    else {
      const T = I({}, p.params);
      for (const D in T) T[D] == null && delete T[D];
      (v = I({}, p, { params: f(T) })), (b.params = f(b.params));
    }
    const E = t.resolve(v, b),
      B = p.hash || "";
    E.params = c(d(E.params));
    const j = mc(o, I({}, p, { hash: lc(B), path: E.path })),
      O = r.createHref(j);
    return I(
      { fullPath: j, hash: B, query: o === mo ? Vc(p.query) : p.query || {} },
      E,
      { redirectedFrom: void 0, href: O }
    );
  }
  function m(p) {
    return typeof p == "string" ? Ht(n, p, l.value.path) : I({}, p);
  }
  function C(p, b) {
    if (u !== p) return Ne(8, { from: b, to: p });
  }
  function S(p) {
    return k(p);
  }
  function L(p) {
    return S(I(m(p), { replace: !0 }));
  }
  function P(p) {
    const b = p.matched[p.matched.length - 1];
    if (b && b.redirect) {
      const { redirect: v } = b;
      let E = typeof v == "function" ? v(p) : v;
      return (
        typeof E == "string" &&
          ((E = E.includes("?") || E.includes("#") ? (E = m(E)) : { path: E }),
          (E.params = {})),
        I(
          {
            query: p.query,
            hash: p.hash,
            params: E.path != null ? {} : p.params,
          },
          E
        )
      );
    }
  }
  function k(p, b) {
    const v = (u = y(p)),
      E = l.value,
      B = p.state,
      j = p.force,
      O = p.replace === !0,
      T = P(v);
    if (T)
      return k(
        I(m(T), {
          state: typeof T == "object" ? I({}, B, T.state) : B,
          force: j,
          replace: O,
        }),
        b || v
      );
    const D = v;
    D.redirectedFrom = b;
    let We;
    return (
      !j && gc(o, E, v) && ((We = Ne(16, { to: D, from: E })), W(E, E, !0, !1)),
      (We ? Promise.resolve(We) : ee(D, E))
        .catch((G) => (ge(G) ? (ge(G, 2) ? G : N(G)) : Fe(G, D, E)))
        .then((G) => {
          if (G) {
            if (ge(G, 2))
              return k(
                I({ replace: O }, m(G.to), {
                  state: typeof G.to == "object" ? I({}, B, G.to.state) : B,
                  force: j,
                }),
                b || D
              );
          } else G = te(D, E, !0, O, B);
          return me(D, E, G), G;
        })
    );
  }
  function A(p, b) {
    const v = C(p, b);
    return v ? Promise.reject(v) : Promise.resolve();
  }
  function M(p) {
    const b = X.values().next().value;
    return b && typeof b.runWithContext == "function"
      ? b.runWithContext(p)
      : p();
  }
  function ee(p, b) {
    let v;
    const [E, B, j] = el(p, b);
    v = Nt(E.reverse(), "beforeRouteLeave", p, b);
    for (const T of E)
      T.leaveGuards.forEach((D) => {
        v.push(Ee(D, p, b));
      });
    const O = A.bind(null, p, b);
    return (
      v.push(O),
      se(v)
        .then(() => {
          v = [];
          for (const T of s.list()) v.push(Ee(T, p, b));
          return v.push(O), se(v);
        })
        .then(() => {
          v = Nt(B, "beforeRouteUpdate", p, b);
          for (const T of B)
            T.updateGuards.forEach((D) => {
              v.push(Ee(D, p, b));
            });
          return v.push(O), se(v);
        })
        .then(() => {
          v = [];
          for (const T of j)
            if (T.beforeEnter)
              if (le(T.beforeEnter))
                for (const D of T.beforeEnter) v.push(Ee(D, p, b));
              else v.push(Ee(T.beforeEnter, p, b));
          return v.push(O), se(v);
        })
        .then(
          () => (
            p.matched.forEach((T) => (T.enterCallbacks = {})),
            (v = Nt(j, "beforeRouteEnter", p, b, M)),
            v.push(O),
            se(v)
          )
        )
        .then(() => {
          v = [];
          for (const T of a.list()) v.push(Ee(T, p, b));
          return v.push(O), se(v);
        })
        .catch((T) => (ge(T, 8) ? T : Promise.reject(T)))
    );
  }
  function me(p, b, v) {
    i.list().forEach((E) => M(() => E(p, b, v)));
  }
  function te(p, b, v, E, B) {
    const j = C(p, b);
    if (j) return j;
    const O = b === ie,
      T = Ie ? history.state : {};
    v &&
      (E || O
        ? r.replace(p.fullPath, I({ scroll: O && T && T.scroll }, B))
        : r.push(p.fullPath, B)),
      (l.value = p),
      W(p, b, v, O),
      N();
  }
  let ke;
  function xt() {
    ke ||
      (ke = r.listen((p, b, v) => {
        if (!q.listening) return;
        const E = y(p),
          B = P(E);
        if (B) {
          k(I(B, { replace: !0 }), E).catch(qe);
          return;
        }
        u = E;
        const j = l.value;
        Ie && kc(ao(j.fullPath, v.delta), St()),
          ee(E, j)
            .catch((O) =>
              ge(O, 12)
                ? O
                : ge(O, 2)
                ? (k(O.to, E)
                    .then((T) => {
                      ge(T, 20) &&
                        !v.delta &&
                        v.type === et.pop &&
                        r.go(-1, !1);
                    })
                    .catch(qe),
                  Promise.reject())
                : (v.delta && r.go(-v.delta, !1), Fe(O, E, j))
            )
            .then((O) => {
              (O = O || te(E, j, !1)),
                O &&
                  (v.delta && !ge(O, 8)
                    ? r.go(-v.delta, !1)
                    : v.type === et.pop && ge(O, 20) && r.go(-1, !1)),
                me(E, j, O);
            })
            .catch(qe);
      }));
  }
  let Ce = Ve(),
    Ue = Ve(),
    Re;
  function Fe(p, b, v) {
    N(p);
    const E = Ue.list();
    return (
      E.length ? E.forEach((B) => B(p, b, v)) : console.error(p),
      Promise.reject(p)
    );
  }
  function ze() {
    return Re && l.value !== ie
      ? Promise.resolve()
      : new Promise((p, b) => {
          Ce.add([p, b]);
        });
  }
  function N(p) {
    return (
      Re ||
        ((Re = !p),
        xt(),
        Ce.list().forEach(([b, v]) => (p ? v(p) : b())),
        Ce.reset()),
      p
    );
  }
  function W(p, b, v, E) {
    const { scrollBehavior: B } = e;
    if (!Ie || !B) return Promise.resolve();
    const j =
      (!v && Cc(ao(p.fullPath, 0))) ||
      ((E || !v) && history.state && history.state.scroll) ||
      null;
    return ve()
      .then(() => B(p, b, j))
      .then((O) => O && Pc(O))
      .catch((O) => Fe(O, p, b));
  }
  const K = (p) => r.go(p);
  let ne;
  const X = new Set(),
    q = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: g,
      hasRoute: _,
      getRoutes: w,
      resolve: y,
      options: e,
      push: S,
      replace: L,
      go: K,
      back: () => K(-1),
      forward: () => K(1),
      beforeEach: s.add,
      beforeResolve: a.add,
      afterEach: i.add,
      onError: Ue.add,
      isReady: ze,
      install(p) {
        const b = this;
        p.component("RouterLink", Yc),
          p.component("RouterView", Hr),
          (p.config.globalProperties.$router = b),
          Object.defineProperty(p.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => x(l),
          }),
          Ie &&
            !ne &&
            l.value === ie &&
            ((ne = !0), S(r.location).catch((B) => {}));
        const v = {};
        for (const B in ie)
          Object.defineProperty(v, B, {
            get: () => l.value[B],
            enumerable: !0,
          });
        p.provide(In, b), p.provide(Bn, wt(v)), p.provide(gn, l);
        const E = p.unmount;
        X.add(p),
          (p.unmount = function () {
            X.delete(p),
              X.size < 1 &&
                ((u = ie),
                ke && ke(),
                (ke = null),
                (l.value = ie),
                (ne = !1),
                (Re = !1)),
              E();
          });
      },
    };
  function se(p) {
    return p.reduce((b, v) => b.then(() => M(v)), Promise.resolve());
  }
  return q;
}
function el(e, t) {
  const n = [],
    o = [],
    r = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < s; a++) {
    const i = t.matched[a];
    i && (e.matched.find((u) => He(u, i)) ? o.push(i) : n.push(i));
    const l = e.matched[a];
    l && (t.matched.find((u) => He(u, l)) || r.push(l));
  }
  return [n, o, r];
}
function tl() {
  return Y(Bn);
}
const nl = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, "$1")
      .replace(/(:\w+)[?+*]/g, "$1")
      .replace(/:\w+/g, (n) => {
        var o;
        return (
          ((o = e.params[n.slice(1)]) == null ? void 0 : o.toString()) || ""
        );
      }),
  yn = (e, t) => {
    const n = e.route.matched.find((r) => {
        var s;
        return (
          ((s = r.components) == null ? void 0 : s.default) === e.Component.type
        );
      }),
      o = t ?? (n == null ? void 0 : n.meta.key) ?? (n && nl(e.route, n));
    return typeof o == "function" ? o(e.route) : o;
  },
  ol = (e, t) => ({ default: () => (e ? re(gs, e === !0 ? {} : e, t) : t) });
function Hn(e) {
  return Array.isArray(e) ? e : [e];
}
const rl = "modulepreload",
  sl = function (e, t) {
    return e[0] === "." ? new URL(e, t).href : e;
  },
  _o = {},
  al = function (t, n, o) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName("link"),
        a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      r = Promise.all(
        n.map((l) => {
          if (((l = sl(l, o)), l in _o)) return;
          _o[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (!!o)
            for (let h = s.length - 1; h >= 0; h--) {
              const g = s[h];
              if (g.href === l && (!u || g.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : rl),
            u || ((d.as = "script"), (d.crossOrigin = "")),
            (d.href = l),
            i && d.setAttribute("nonce", i),
            document.head.appendChild(d),
            u)
          )
            return new Promise((h, g) => {
              d.addEventListener("load", h),
                d.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    return r
      .then(() => t())
      .catch((s) => {
        const a = new Event("vite:preloadError", { cancelable: !0 });
        if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
          throw s;
      });
  },
  V = (...e) =>
    al(...e).catch((t) => {
      const n = new Event("nuxt.preloadError");
      throw ((n.payload = t), window.dispatchEvent(n), t);
    }),
  jt = null,
  Mt = null,
  Dt = null,
  Ut = null,
  Ft = null,
  zt = null,
  Wt = null,
  Vt = null,
  Kt = null,
  qt = null,
  Gt = null,
  Yt = null,
  Eo = [
    {
      name: "anime-genre",
      path: "/anime/:genre?",
      meta: {},
      alias: [],
      redirect: jt == null ? void 0 : jt.redirect,
      component: () =>
        V(
          () => import("./CltikQ7v.js"),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "extension",
      path: "/extension",
      meta: {},
      alias: [],
      redirect: Mt == null ? void 0 : Mt.redirect,
      component: () =>
        V(
          () => import("./B60WpN2B.js"),
          __vite__mapDeps([22, 23, 2, 3, 24, 25, 26, 19, 4, 27]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "history",
      path: "/history",
      meta: {},
      alias: [],
      redirect: Dt == null ? void 0 : Dt.redirect,
      component: () =>
        V(
          () => import("./CN2RE0D0.js"),
          __vite__mapDeps([
            28, 1, 2, 3, 4, 5, 8, 9, 23, 24, 12, 29, 30, 25, 26, 31, 7, 32, 19,
            20, 33,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "index",
      path: "/",
      meta: {},
      alias: [],
      redirect: Ut == null ? void 0 : Ut.redirect,
      component: () =>
        V(
          () => import("./BoPA9Tf5.js"),
          __vite__mapDeps([
            34, 1, 2, 3, 4, 5, 8, 9, 35, 36, 12, 13, 14, 17, 18, 19, 37, 20, 38,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "jadwal",
      path: "/jadwal",
      meta: {},
      alias: [],
      redirect: Ft == null ? void 0 : Ft.redirect,
      component: () =>
        V(
          () => import("./dzSJzCLl.js"),
          __vite__mapDeps([
            39, 1, 2, 3, 4, 5, 25, 26, 13, 14, 12, 6, 7, 8, 9, 10, 11, 19, 40,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "play-series-id",
      path: "/play/:series()/:id?",
      meta: {},
      alias: [],
      redirect: zt == null ? void 0 : zt.redirect,
      component: () =>
        V(
          () => import("./DfxHBpkr.js"),
          __vite__mapDeps([
            41, 1, 2, 3, 4, 5, 42, 43, 19, 8, 9, 44, 45, 23, 24, 29, 30, 13, 14,
            25, 26, 12, 6, 7, 10, 11, 46, 47, 48, 49, 37, 50,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "premium",
      path: "/premium",
      meta: {},
      alias: [],
      redirect: Wt == null ? void 0 : Wt.redirect,
      component: () =>
        V(
          () => import("./DgZWaf_P.js"),
          __vite__mapDeps([
            51, 1, 2, 3, 4, 5, 35, 36, 13, 14, 12, 15, 10, 16, 17, 18, 19, 20,
            52,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "search-result",
      path: "/search-result",
      meta: {},
      alias: [],
      redirect: Vt == null ? void 0 : Vt.redirect,
      component: () =>
        V(
          () => import("./ChUlEOmS.js"),
          __vite__mapDeps([
            53, 1, 2, 3, 4, 5, 31, 7, 32, 23, 24, 12, 29, 30, 44, 45, 13, 14, 6,
            8, 9, 10, 11, 15, 16, 20, 19, 54,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "search",
      path: "/search",
      meta: {},
      alias: [],
      redirect: Kt == null ? void 0 : Kt.redirect,
      component: () =>
        V(
          () => import("./Jpxlq1xd.js"),
          __vite__mapDeps([55, 46, 2, 3, 47, 7, 8, 9, 56, 57, 19, 20, 4, 58]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "settings",
      path: "/settings",
      meta: {},
      alias: [],
      redirect: qt == null ? void 0 : qt.redirect,
      component: () =>
        V(
          () => import("./3s7N3848.js"),
          __vite__mapDeps([
            59, 1, 2, 3, 4, 5, 8, 9, 23, 24, 29, 30, 46, 47, 56, 57, 48, 49, 19,
            20, 60,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "trending-type",
      path: "/trending/:type?",
      meta: {},
      alias: [],
      redirect: Gt == null ? void 0 : Gt.redirect,
      component: () =>
        V(
          () => import("./DWuJMxN1.js"),
          __vite__mapDeps([
            61, 1, 2, 3, 4, 5, 8, 9, 23, 24, 6, 7, 10, 11, 12, 29, 30, 44, 45,
            15, 16, 17, 18, 19, 20, 62,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: "video-id",
      path: "/video/:id()",
      meta: {},
      alias: [],
      redirect: Yt == null ? void 0 : Yt.redirect,
      component: () =>
        V(
          () => import("./B0mWavrC.js"),
          __vite__mapDeps([
            63, 1, 2, 3, 4, 5, 42, 43, 19, 8, 9, 44, 45, 23, 24, 29, 30, 13, 14,
            25, 26, 12, 37, 64,
          ]),
          import.meta.url
        ).then((e) => e.default || e),
    },
  ],
  Nr = (e, t, n) => (
    (t = t === !0 ? {} : t),
    {
      default: () => {
        var o;
        return t ? re(e, t, n) : (o = n.default) == null ? void 0 : o.call(n);
      },
    }
  );
function Po(e) {
  const t =
    (e == null ? void 0 : e.meta.key) ??
    e.path
      .replace(/(:\w+)\([^)]+\)/g, "$1")
      .replace(/(:\w+)[?+*]/g, "$1")
      .replace(/:\w+/g, (n) => {
        var o;
        return (
          ((o = e.params[n.slice(1)]) == null ? void 0 : o.toString()) || ""
        );
      });
  return typeof t == "function" ? t(e) : t;
}
function il(e, t) {
  return e === t || t === ie
    ? !1
    : Po(e) !== Po(t)
    ? !0
    : !e.matched.every((o, r) => {
        var s, a;
        return (
          o.components &&
          o.components.default ===
            ((a = (s = t.matched[r]) == null ? void 0 : s.components) == null
              ? void 0
              : a.default)
        );
      });
}
const cl = {
  scrollBehavior(e, t, n) {
    var u;
    const o = H(),
      r =
        ((u = pe().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
    let s = n || void 0;
    const a =
      typeof e.meta.scrollToTop == "function"
        ? e.meta.scrollToTop(e, t)
        : e.meta.scrollToTop;
    if (
      (!s && t && e && a !== !1 && il(e, t) && (s = { left: 0, top: 0 }),
      e.path === t.path)
    )
      return t.hash && !e.hash
        ? { left: 0, top: 0 }
        : e.hash
        ? { el: e.hash, top: ko(e.hash), behavior: r }
        : !1;
    const i = (c) => !!(c.meta.pageTransition ?? hn),
      l = i(t) && i(e) ? "page:transition:finish" : "page:finish";
    return new Promise((c) => {
      o.hooks.hookOnce(l, async () => {
        await new Promise((f) => setTimeout(f, 0)),
          e.hash && (s = { el: e.hash, top: ko(e.hash), behavior: r }),
          c(s);
      });
    });
  },
};
function ko(e) {
  try {
    const t = document.querySelector(e);
    if (t) return parseFloat(getComputedStyle(t).scrollMarginTop);
  } catch {}
  return 0;
}
const ll = { hashMode: !1, scrollBehaviorType: "auto" },
  Q = { ...ll, ...cl },
  ul = async (e) => {
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate)) return;
    const o = H(),
      r = pe();
    if (
      (([t, n] = Qe(() => Promise.resolve(e.meta.validate(e)))),
      (t = await t),
      n(),
      t) === !0
    )
      return;
    const a = Ct({
        statusCode: 404,
        statusMessage: `Page Not Found: ${e.fullPath}`,
        data: { path: e.fullPath },
      }),
      i = r.beforeResolve((u) => {
        if ((i(), u === e)) {
          const c = r.afterEach(async () => {
            c(),
              await o.runWithContext(() => Be(a)),
              window.history.pushState({}, "", e.fullPath);
          });
          return !1;
        }
      });
  },
  fl = async (e) => {
    let t, n;
    const o = (([t, n] = Qe(() => Ln(e.path))), (t = await t), n(), t);
    if (o.redirect)
      return xe(o.redirect, { acceptRelative: !0 })
        ? ((window.location.href = o.redirect), !1)
        : o.redirect;
  },
  dl = [ul, fl],
  Ye = {};
function hl(e, t, n) {
  const { pathname: o, search: r, hash: s } = t,
    a = e.indexOf("#");
  if (a > -1) {
    const u = s.includes(e.slice(a)) ? e.slice(a).length : 1;
    let c = s.slice(u);
    return c[0] !== "/" && (c = "/" + c), Wn(c, "");
  }
  const i = Wn(o, e),
    l = !n || aa(i, n, { trailingSlash: !0 }) ? i : n;
  return l + (l.includes("?") ? "" : r) + s;
}
const pl = he({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var _, y;
      let t,
        n,
        o = An().app.baseURL;
      Q.hashMode && !o.includes("#") && (o += "#");
      const r =
          ((_ = Q.history) == null ? void 0 : _.call(Q, o)) ??
          (Q.hashMode ? Ac(o) : Lr(o)),
        s = ((y = Q.routes) == null ? void 0 : y.call(Q, Eo)) ?? Eo;
      let a;
      const i = Zc({
        ...Q,
        scrollBehavior: (m, C, S) => {
          if (C === ie) {
            a = S;
            return;
          }
          if (Q.scrollBehavior) {
            if (
              ((i.options.scrollBehavior = Q.scrollBehavior),
              "scrollRestoration" in window.history)
            ) {
              const L = i.beforeEach(() => {
                L(), (window.history.scrollRestoration = "manual");
              });
            }
            return Q.scrollBehavior(m, ie, a || S);
          }
        },
        history: r,
        routes: s,
      });
      "scrollRestoration" in window.history &&
        (window.history.scrollRestoration = "auto"),
        e.vueApp.use(i);
      const l = Xe(i.currentRoute.value);
      i.afterEach((m, C) => {
        l.value = C;
      }),
        Object.defineProperty(
          e.vueApp.config.globalProperties,
          "previousRoute",
          { get: () => l.value }
        );
      const u = hl(o, window.location, e.payload.path),
        c = Xe(i.currentRoute.value),
        f = () => {
          c.value = i.currentRoute.value;
        };
      e.hook("page:finish", f),
        i.afterEach((m, C) => {
          var S, L, P, k;
          ((L = (S = m.matched[0]) == null ? void 0 : S.components) == null
            ? void 0
            : L.default) ===
            ((k = (P = C.matched[0]) == null ? void 0 : P.components) == null
              ? void 0
              : k.default) && f();
        });
      const d = {};
      for (const m in c.value)
        Object.defineProperty(d, m, { get: () => c.value[m] });
      (e._route = wt(d)),
        (e._middleware = e._middleware || { global: [], named: {} });
      try {
        ([t, n] = Qe(() => i.isReady())), await t, n();
      } catch (m) {
        ([t, n] = Qe(() => e.runWithContext(() => Be(m)))), await t, n();
      }
      const h =
        u !== i.currentRoute.value.fullPath
          ? i.resolve(u)
          : i.currentRoute.value;
      f();
      const g = e.payload.state._layout;
      i.beforeEach(async (m, C) => {
        var S;
        await e.callHook("page:loading:start"),
          (m.meta = de(m.meta)),
          e.isHydrating && g && !ys(m.meta.layout) && (m.meta.layout = g),
          (e._processingMiddleware = !0);
        {
          const L = new Set([...dl, ...e._middleware.global]);
          for (const P of m.matched) {
            const k = P.meta.middleware;
            if (k) for (const A of Hn(k)) L.add(A);
          }
          {
            const P = await e.runWithContext(() => Ln(m.path));
            if (P.appMiddleware)
              for (const k in P.appMiddleware)
                P.appMiddleware[k] ? L.add(k) : L.delete(k);
          }
          for (const P of L) {
            const k =
              typeof P == "string"
                ? e._middleware.named[P] ||
                  (await ((S = Ye[P]) == null
                    ? void 0
                    : S.call(Ye).then((M) => M.default || M)))
                : P;
            if (!k) throw new Error(`Unknown route middleware: '${P}'.`);
            const A = await e.runWithContext(() => k(m, C));
            if (
              !e.payload.serverRendered &&
              e.isHydrating &&
              (A === !1 || A instanceof Error)
            ) {
              const M =
                A ||
                cn({ statusCode: 404, statusMessage: `Page Not Found: ${u}` });
              return await e.runWithContext(() => Be(M)), !1;
            }
            if (A !== !0 && (A || A === !1)) return A;
          }
        }
      }),
        i.onError(async () => {
          delete e._processingMiddleware, await e.callHook("page:loading:end");
        });
      const w = kt();
      return (
        i.afterEach(async (m, C, S) => {
          delete e._processingMiddleware,
            !e.isHydrating && w.value && (await e.runWithContext(Ja)),
            S && (await e.callHook("page:loading:end")),
            m.matched.length === 0 &&
              (await e.runWithContext(() =>
                Be(
                  cn({
                    statusCode: 404,
                    fatal: !1,
                    statusMessage: `Page not found: ${m.fullPath}`,
                    data: { path: m.fullPath },
                  })
                )
              ));
        }),
        e.hooks.hookOnce("app:created", async () => {
          try {
            "name" in h && (h.name = void 0),
              await i.replace({ ...h, force: !0 }),
              (i.options.scrollBehavior = Q.scrollBehavior);
          } catch (m) {
            await e.runWithContext(() => Be(m));
          }
        }),
        { provide: { router: i } }
      );
    },
  }),
  Co =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
        };
      return setTimeout(() => {
        e(n);
      }, 1);
    }),
  Df =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e);
    }),
  jr = (e) => {
    const t = H();
    t.isHydrating
      ? t.hooks.hookOnce("app:suspense:resolve", () => {
          Co(e);
        })
      : Co(e);
  },
  ml = he({
    name: "nuxt:payload",
    setup(e) {
      pe().beforeResolve(async (t, n) => {
        if (t.path === n.path) return;
        const o = await no(t.path);
        o && Object.assign(e.static.data, o.data);
      }),
        jr(() => {
          var t;
          e.hooks.hook("link:prefetch", async (n) => {
            Pt(n).protocol || (await no(n));
          }),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !==
              "slow-2g" && setTimeout(Rt, 1e3);
        });
    },
  }),
  gl = he((e) => {
    let t;
    async function n() {
      const o = await Rt();
      t && clearTimeout(t), (t = setTimeout(n, 1e3 * 60 * 60));
      try {
        const r = await $fetch(Tn("/_nuxt/builds/latest.json") + `?${Date.now()}`);
        r.id !== o.id && e.hooks.callHook("app:manifest:update", r);
      } catch {}
    }
    jr(() => {
      t = setTimeout(n, 1e3 * 60 * 60);
    });
  }),
  yl = he({ name: "nuxt:global-components" }),
  Pe = {
    default: () =>
      V(
        () => import("./lCI7fmPB.js"),
        __vite__mapDeps([65, 66, 2, 3, 67]),
        import.meta.url
      ).then((e) => e.default || e),
  },
  vl = he({
    name: "nuxt:prefetch",
    setup(e) {
      const t = pe();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (n) => {
          var r;
          const o =
            (r = n == null ? void 0 : n.meta) == null ? void 0 : r.layout;
          o && typeof Pe[o] == "function" && (await Pe[o]());
        });
      }),
        e.hooks.hook("link:prefetch", (n) => {
          if (xe(n)) return;
          const o = t.resolve(n);
          if (!o) return;
          const r = o.meta.layout;
          let s = Hn(o.meta.middleware);
          s = s.filter((a) => typeof a == "string");
          for (const a of s) typeof Ye[a] == "function" && Ye[a]();
          r && typeof Pe[r] == "function" && Pe[r]();
        });
    },
  });
function wl(e = {}) {
  const t = e.path || window.location.pathname;
  let n = {};
  try {
    n = dt(sessionStorage.getItem("nuxt:reload") || "{}");
  } catch {}
  if (
    e.force ||
    (n == null ? void 0 : n.path) !== t ||
    (n == null ? void 0 : n.expires) < Date.now()
  ) {
    try {
      sessionStorage.setItem(
        "nuxt:reload",
        JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) })
      );
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem(
          "nuxt:reload:state",
          JSON.stringify({ state: H().payload.state })
        );
      } catch {}
    window.location.pathname !== t
      ? (window.location.href = t)
      : window.location.reload();
  }
}
const _e = {
    images: !0,
    videos: !0,
    audios: !0,
    iframes: !1,
    native: !1,
    directiveOnly: !1,
    defaultImage: "/static/loading.png",
    loadingClass: "isLoading",
    loadedClass: "isLoaded",
    appendClass: "lazyLoad",
    observerConfig: {},
  },
  bl = he((e) => {
    let t = null;
    const n = (a) =>
        a.parentNode && a.parentNode.tagName.toLowerCase() === "picture",
      o = (a, i) => {
        const l = `data-${i}`;
        if (Array.isArray(a)) for (const u of a) o(u, i);
        else if (a.getAttribute(l))
          a.setAttribute(i, a.getAttribute(l)),
            a.removeAttribute(l),
            a.parentNode.load && a.parentNode.load();
        else if (a.tagName.toLowerCase() === "picture") {
          const u = a.querySelector("img");
          u &&
            (o(u, "src"),
            o(u, "srcset"),
            u.addEventListener("load", () => r(a)));
        }
      },
      r = (a) => {
        a.classList.remove(_e.loadingClass), a.classList.add(_e.loadedClass);
      },
      s = (a) => {
        const i = a.tagName.toLowerCase();
        let l = "load";
        ["video", "audio"].includes(i) && (l = "loadeddata"),
          a.addEventListener(l, () => {
            n(a)
              ? a.parentNode.getAttribute("data-not-lazy") === null
                ? r(a.parentNode)
                : a.parentNode.removeAttribute("data-not-lazy")
              : r(a);
          });
      };
    (t = new IntersectionObserver((a, i) => {
      for (const { isIntersecting: l, target: u } of a)
        if (l) {
          let c = u;
          !n(c) && _e.loadingClass && c.classList.add(_e.loadingClass);
          const f = c.querySelectorAll("source");
          o(c, "poster"),
            f.length && (c = [...f]),
            o(c, "src"),
            o(c, "srcset"),
            i.unobserve(u);
        }
    }, _e.observerConfig)),
      e.vueApp.directive("lazy-load", {
        beforeMount(a) {
          s(a), !n(a) && _e.appendClass && a.classList.add(_e.appendClass);
        },
        mounted(a) {
          t && t.observe(a),
            a.tagName.toLowerCase() === "img" && (a.src = _e.defaultImage);
        },
        getSSRProps() {
          return {};
        },
      }),
      e.vueApp.directive("not-lazy", {
        beforeMount(a) {
          for (const i of [
            ...a.querySelectorAll("source"),
            ...a.querySelectorAll("img"),
          ])
            o(i, "src"), o(i, "srcset");
          a.tagName.toLowerCase() !== "picture" &&
            a.removeAttribute("data-not-lazy");
        },
        getSSRProps() {
          return {};
        },
      });
  }),
  _l = he(() => {}),
  El = he({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = pe(),
        n = An(),
        o = new Set();
      t.beforeEach(() => {
        o.clear();
      }),
        e.hook("app:chunkError", ({ error: s }) => {
          o.add(s);
        });
      function r(s) {
        const i =
          "href" in s && s.href[0] === "#"
            ? n.app.baseURL + s.href
            : Rn(n.app.baseURL, s.fullPath);
        wl({ path: i, persistState: !0 });
      }
      e.hook("app:manifest:update", () => {
        t.beforeResolve(r);
      }),
        t.onError((s, a) => {
          o.has(s) && r(a);
        });
    },
  }),
  Pl = [Ji, Qi, pl, ml, gl, yl, vl, bl, _l, El];
function vn() {}
const Z = Object.assign,
  Tt = typeof window < "u",
  Nn = (e) => e !== null && typeof e == "object",
  Oe = (e) => e != null,
  yt = (e) => typeof e == "function",
  kl = (e) => Nn(e) && yt(e.then) && yt(e.catch),
  Mr = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e),
  Cl = () =>
    Tt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Ro(e, t) {
  const n = t.split(".");
  let o = e;
  return (
    n.forEach((r) => {
      var s;
      o = Nn(o) && (s = o[r]) != null ? s : "";
    }),
    o
  );
}
function Dr(e, t, n) {
  return t.reduce((o, r) => ((o[r] = e[r]), o), {});
}
const Uf = (e) => (Array.isArray(e) ? e : [e]),
  At = null,
  J = [Number, String],
  fe = { type: Boolean, default: !0 },
  Ff = (e) => ({ type: e, required: !0 }),
  zf = () => ({ type: Array, default: () => [] }),
  Wf = (e) => ({ type: J, default: e }),
  F = (e) => ({ type: String, default: e });
var De = typeof window < "u";
function So(e) {
  return De ? requestAnimationFrame(e) : -1;
}
function Vf(e) {
  De && cancelAnimationFrame(e);
}
function Kf(e) {
  So(() => So(e));
}
var Rl = (e) => e === window,
  To = (e, t) => ({
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t,
  }),
  Ur = (e) => {
    const t = x(e);
    if (Rl(t)) {
      const n = t.innerWidth,
        o = t.innerHeight;
      return To(n, o);
    }
    return t != null && t.getBoundingClientRect
      ? t.getBoundingClientRect()
      : To(0, 0);
  };
function Sl(e) {
  const t = Y(e, null);
  if (t) {
    const n = Me(),
      { link: o, unlink: r, internalChildren: s } = t;
    o(n), qo(() => r(n));
    const a = U(() => s.indexOf(n));
    return { parent: t, index: a };
  }
  return { parent: null, index: $(-1) };
}
function Tl(e) {
  const t = [],
    n = (o) => {
      Array.isArray(o) &&
        o.forEach((r) => {
          var s;
          vs(r) &&
            (t.push(r),
            (s = r.component) != null &&
              s.subTree &&
              (t.push(r.component.subTree), n(r.component.subTree.children)),
            r.children && n(r.children));
        });
    };
  return n(e), t;
}
var Ao = (e, t) => {
  const n = e.indexOf(t);
  return n === -1
    ? e.findIndex(
        (o) =>
          t.key !== void 0 &&
          t.key !== null &&
          o.type === t.type &&
          o.key === t.key
      )
    : n;
};
function Al(e, t, n) {
  const o = Tl(e.subTree.children);
  n.sort((s, a) => Ao(o, s.vnode) - Ao(o, a.vnode));
  const r = n.map((s) => s.proxy);
  t.sort((s, a) => {
    const i = r.indexOf(s),
      l = r.indexOf(a);
    return i - l;
  });
}
function Ol(e) {
  const t = de([]),
    n = de([]),
    o = Me();
  return {
    children: t,
    linkChildren: (s) => {
      ye(
        e,
        Object.assign(
          {
            link: (l) => {
              l.proxy && (n.push(l), t.push(l.proxy), Al(o, t, n));
            },
            unlink: (l) => {
              const u = n.indexOf(l);
              t.splice(u, 1), n.splice(u, 1);
            },
            children: t,
            internalChildren: n,
          },
          s
        )
      );
    },
  };
}
function Fr(e) {
  let t;
  bt(() => {
    e(),
      ve(() => {
        t = !0;
      });
  }),
    En(() => {
      t && e();
    });
}
function zr(e, t, n = {}) {
  if (!De) return;
  const { target: o = window, passive: r = !1, capture: s = !1 } = n;
  let a = !1,
    i;
  const l = (f) => {
      if (a) return;
      const d = x(f);
      d &&
        !i &&
        (d.addEventListener(e, t, { capture: s, passive: r }), (i = !0));
    },
    u = (f) => {
      if (a) return;
      const d = x(f);
      d && i && (d.removeEventListener(e, t, s), (i = !1));
    };
  qo(() => u(o)), _t(() => u(o)), Fr(() => l(o));
  let c;
  return (
    Go(o) &&
      (c = ce(o, (f, d) => {
        u(d), l(f);
      })),
    () => {
      c == null || c(), u(o), (a = !0);
    }
  );
}
var st, Jt;
function xl() {
  if (!st && ((st = $(0)), (Jt = $(0)), De)) {
    const e = () => {
      (st.value = window.innerWidth), (Jt.value = window.innerHeight);
    };
    e(),
      window.addEventListener("resize", e, { passive: !0 }),
      window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: st, height: Jt };
}
var Ll = /scroll|auto|overlay/i,
  Wr = De ? window : void 0;
function $l(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Vr(e, t = Wr) {
  let n = e;
  for (; n && n !== t && $l(n); ) {
    const { overflowY: o } = window.getComputedStyle(n);
    if (Ll.test(o)) return n;
    n = n.parentNode;
  }
  return t;
}
function qf(e, t = Wr) {
  const n = $();
  return (
    bt(() => {
      e.value && (n.value = Vr(e.value, t));
    }),
    n
  );
}
var at;
function Gf() {
  if (!at && ((at = $("visible")), De)) {
    const e = () => {
      at.value = document.hidden ? "hidden" : "visible";
    };
    e(), window.addEventListener("visibilitychange", e);
  }
  return at;
}
var Yf = Symbol("van-field");
function Il(e) {
  const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(t, 0);
}
function Oo(e, t) {
  "scrollTop" in e ? (e.scrollTop = t) : e.scrollTo(e.scrollX, t);
}
function Kr() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}
function Bl(e) {
  Oo(window, e), Oo(document.body, e);
}
function Jf(e, t) {
  if (e === window) return 0;
  const n = t ? Il(t) : Kr();
  return Ur(e).top + n;
}
const Hl = Cl();
function Xf() {
  Hl && Bl(Kr());
}
const Nl = (e) => e.stopPropagation();
function jn(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(),
    t && Nl(e);
}
function Qf(e) {
  const t = x(e);
  if (!t) return !1;
  const n = window.getComputedStyle(t),
    o = n.display === "none",
    r = t.offsetParent === null && n.position !== "fixed";
  return o || r;
}
const { width: qr, height: Gr } = xl();
function oe(e) {
  if (Oe(e)) return Mr(e) ? `${e}px` : String(e);
}
function jl(e) {
  if (Oe(e)) {
    if (Array.isArray(e)) return { width: oe(e[0]), height: oe(e[1]) };
    const t = oe(e);
    return { width: t, height: t };
  }
}
function Ml(e) {
  const t = {};
  return e !== void 0 && (t.zIndex = +e), t;
}
let Xt;
function Dl() {
  if (!Xt) {
    const e = document.documentElement,
      t = e.style.fontSize || window.getComputedStyle(e).fontSize;
    Xt = parseFloat(t);
  }
  return Xt;
}
function Ul(e) {
  return (e = e.replace(/rem/g, "")), +e * Dl();
}
function Fl(e) {
  return (e = e.replace(/vw/g, "")), (+e * qr.value) / 100;
}
function zl(e) {
  return (e = e.replace(/vh/g, "")), (+e * Gr.value) / 100;
}
function Zf(e) {
  if (typeof e == "number") return e;
  if (Tt) {
    if (e.includes("rem")) return Ul(e);
    if (e.includes("vw")) return Fl(e);
    if (e.includes("vh")) return zl(e);
  }
  return parseFloat(e);
}
const Wl = /-(\w)/g,
  Yr = (e) => e.replace(Wl, (t, n) => n.toUpperCase()),
  Vl = (e) =>
    e
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .replace(/^-/, ""),
  ed = (e, t, n) => Math.min(Math.max(e, t), n);
function xo(e, t, n) {
  const o = e.indexOf(t);
  return o === -1
    ? e
    : t === "-" && o !== 0
    ? e.slice(0, o)
    : e.slice(0, o + 1) + e.slice(o).replace(n, "");
}
function td(e, t = !0, n = !0) {
  t ? (e = xo(e, ".", /\./g)) : (e = e.split(".")[0]),
    n ? (e = xo(e, "-", /-/g)) : (e = e.replace(/-/, ""));
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(o, "");
}
const { hasOwnProperty: Kl } = Object.prototype;
function ql(e, t, n) {
  const o = t[n];
  Oe(o) &&
    (!Kl.call(e, n) || !Nn(o) ? (e[n] = o) : (e[n] = Jr(Object(e[n]), o)));
}
function Jr(e, t) {
  return (
    Object.keys(t).forEach((n) => {
      ql(e, t, n);
    }),
    e
  );
}
var Gl = {
  name: "姓名",
  tel: "电话",
  save: "保存",
  clear: "清空",
  cancel: "取消",
  confirm: "确认",
  delete: "删除",
  loading: "加载中...",
  noCoupon: "暂无优惠券",
  nameEmpty: "请填写姓名",
  addContact: "添加联系人",
  telInvalid: "请填写正确的电话",
  vanCalendar: {
    end: "结束",
    start: "开始",
    title: "日期选择",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthTitle: (e, t) => `${e}年${t}月`,
    rangePrompt: (e) => `最多选择 ${e} 天`,
  },
  vanCascader: { select: "请选择" },
  vanPagination: { prev: "上一页", next: "下一页" },
  vanPullRefresh: { pulling: "下拉即可刷新...", loosing: "释放即可刷新..." },
  vanSubmitBar: { label: "合计:" },
  vanCoupon: {
    unlimited: "无门槛",
    discount: (e) => `${e}折`,
    condition: (e) => `满${e}元可用`,
  },
  vanCouponCell: { title: "优惠券", count: (e) => `${e}张可用` },
  vanCouponList: {
    exchange: "兑换",
    close: "不使用",
    enable: "可用",
    disabled: "不可用",
    placeholder: "输入优惠码",
  },
  vanAddressEdit: {
    area: "地区",
    areaEmpty: "请选择地区",
    addressEmpty: "请填写详细地址",
    addressDetail: "详细地址",
    defaultAddress: "设为默认收货地址",
  },
  vanAddressList: { add: "新增地址" },
};
const Lo = $("zh-CN"),
  $o = de({ "zh-CN": Gl }),
  Yl = {
    messages() {
      return $o[Lo.value];
    },
    use(e, t) {
      (Lo.value = e), this.add({ [e]: t });
    },
    add(e = {}) {
      Jr($o, e);
    },
  };
var Jl = Yl;
function Xl(e) {
  const t = Yr(e) + ".";
  return (n, ...o) => {
    const r = Jl.messages(),
      s = Ro(r, t + n) || Ro(r, n);
    return yt(s) ? s(...o) : s;
  };
}
function wn(e, t) {
  return t
    ? typeof t == "string"
      ? ` ${e}--${t}`
      : Array.isArray(t)
      ? t.reduce((n, o) => n + wn(e, o), "")
      : Object.keys(t).reduce((n, o) => n + (t[o] ? wn(e, o) : ""), "")
    : "";
}
function Ql(e) {
  return (t, n) => (
    t && typeof t != "string" && ((n = t), (t = "")),
    (t = t ? `${e}__${t}` : e),
    `${t}${wn(t, n)}`
  );
}
function ue(e) {
  const t = `van-${e}`;
  return [t, Ql(t), Xl(t)];
}
const nt = "van-hairline",
  Zl = `${nt}--top`,
  eu = `${nt}--left`,
  nd = `${nt}--bottom`,
  tu = `${nt}--surround`,
  od = `${nt}--top-bottom`,
  nu = "van-haptics-feedback",
  rd = Symbol("van-form"),
  Io = 5;
function Xr(e, { args: t = [], done: n, canceled: o, error: r }) {
  if (e) {
    const s = e.apply(null, t);
    kl(s)
      ? s
          .then((a) => {
            a ? n() : o && o();
          })
          .catch(r || vn)
      : s
      ? n()
      : o && o();
  } else n();
}
function we(e) {
  return (
    (e.install = (t) => {
      const { name: n } = e;
      n && (t.component(n, e), t.component(Yr(`-${n}`), e));
    }),
    e
  );
}
const Ot = {
    show: Boolean,
    zIndex: J,
    overlay: fe,
    duration: J,
    teleport: [String, Object],
    lockScroll: fe,
    lazyRender: fe,
    beforeClose: Function,
    overlayStyle: Object,
    overlayClass: At,
    transitionAppear: Boolean,
    closeOnClickOverlay: fe,
  },
  ou = Object.keys(Ot);
function Mn(e) {
  const t = Me();
  t && Z(t.proxy, e);
}
function ru(e, t) {
  return e > t ? "horizontal" : t > e ? "vertical" : "";
}
function su() {
  const e = $(0),
    t = $(0),
    n = $(0),
    o = $(0),
    r = $(0),
    s = $(0),
    a = $(""),
    i = $(!0),
    l = () => a.value === "vertical",
    u = () => a.value === "horizontal",
    c = () => {
      (n.value = 0),
        (o.value = 0),
        (r.value = 0),
        (s.value = 0),
        (a.value = ""),
        (i.value = !0);
    };
  return {
    move: (h) => {
      const g = h.touches[0];
      (n.value = (g.clientX < 0 ? 0 : g.clientX) - e.value),
        (o.value = g.clientY - t.value),
        (r.value = Math.abs(n.value)),
        (s.value = Math.abs(o.value));
      const w = 10;
      (!a.value || (r.value < w && s.value < w)) &&
        (a.value = ru(r.value, s.value)),
        i.value && (r.value > Io || s.value > Io) && (i.value = !1);
    },
    start: (h) => {
      c(), (e.value = h.touches[0].clientX), (t.value = h.touches[0].clientY);
    },
    reset: c,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: o,
    offsetX: r,
    offsetY: s,
    direction: a,
    isVertical: l,
    isHorizontal: u,
    isTap: i,
  };
}
let Ke = 0;
const Bo = "van-overflow-hidden";
function au(e, t) {
  const n = su(),
    o = "01",
    r = "10",
    s = (c) => {
      n.move(c);
      const f = n.deltaY.value > 0 ? r : o,
        d = Vr(c.target, e.value),
        { scrollHeight: h, offsetHeight: g, scrollTop: w } = d;
      let _ = "11";
      w === 0 ? (_ = g >= h ? "00" : "01") : w + g >= h && (_ = "10"),
        _ !== "11" &&
          n.isVertical() &&
          !(parseInt(_, 2) & parseInt(f, 2)) &&
          jn(c, !0);
    },
    a = () => {
      document.addEventListener("touchstart", n.start),
        document.addEventListener("touchmove", s, { passive: !1 }),
        Ke || document.body.classList.add(Bo),
        Ke++;
    },
    i = () => {
      Ke &&
        (document.removeEventListener("touchstart", n.start),
        document.removeEventListener("touchmove", s),
        Ke--,
        Ke || document.body.classList.remove(Bo));
    },
    l = () => t() && a(),
    u = () => t() && i();
  Fr(l),
    _t(u),
    Yo(u),
    ce(t, (c) => {
      c ? a() : i();
    });
}
function Qr(e) {
  const t = $(!1);
  return (
    ce(
      e,
      (n) => {
        n && (t.value = n);
      },
      { immediate: !0 }
    ),
    (n) => () => t.value ? n() : null
  );
}
const Zr = Symbol();
function iu(e) {
  const t = Y(Zr, null);
  t &&
    ce(t, (n) => {
      n && e();
    });
}
let es = 2e3;
const cu = () => ++es,
  lu = (e) => {
    es = e;
  },
  Ho = () => {
    var e;
    const { scopeId: t } = ((e = Me()) == null ? void 0 : e.vnode) || {};
    return t ? { [t]: "" } : null;
  },
  [uu, No] = ue("badge"),
  fu = {
    dot: Boolean,
    max: J,
    tag: F("div"),
    color: String,
    offset: Array,
    content: J,
    showZero: fe,
    position: F("top-right"),
  };
var du = z({
  name: uu,
  props: fu,
  setup(e, { slots: t }) {
    const n = () => {
        if (t.content) return !0;
        const { content: i, showZero: l } = e;
        return Oe(i) && i !== "" && (l || (i !== 0 && i !== "0"));
      },
      o = () => {
        const { dot: i, max: l, content: u } = e;
        if (!i && n())
          return t.content
            ? t.content()
            : Oe(l) && Mr(u) && +u > +l
            ? `${l}+`
            : u;
      },
      r = (i) => (i.startsWith("-") ? i.replace("-", "") : `-${i}`),
      s = U(() => {
        const i = { background: e.color };
        if (e.offset) {
          const [l, u] = e.offset,
            { position: c } = e,
            [f, d] = c.split("-");
          t.default
            ? (typeof u == "number"
                ? (i[f] = oe(f === "top" ? u : -u))
                : (i[f] = f === "top" ? oe(u) : r(u)),
              typeof l == "number"
                ? (i[d] = oe(d === "left" ? l : -l))
                : (i[d] = d === "left" ? oe(l) : r(l)))
            : ((i.marginTop = oe(u)), (i.marginLeft = oe(l)));
        }
        return i;
      }),
      a = () => {
        if (n() || e.dot)
          return R(
            "div",
            {
              class: No([e.position, { dot: e.dot, fixed: !!t.default }]),
              style: s.value,
            },
            [o()]
          );
      };
    return () => {
      if (t.default) {
        const { tag: i } = e;
        return R(
          i,
          { class: No("wrapper") },
          { default: () => [t.default(), a()] }
        );
      }
      return a();
    };
  },
});
const hu = we(du),
  [ts, pu] = ue("config-provider"),
  ns = Symbol(ts),
  mu = {
    tag: F("div"),
    theme: F("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    themeVarsScope: F("local"),
    iconPrefix: String,
  };
function gu(e) {
  return e.replace(/([a-zA-Z])(\d)/g, "$1-$2");
}
function yu(e) {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      const o = gu(Vl(n));
      t[`--van-${o}`] = e[n];
    }),
    t
  );
}
function it(e = {}, t = {}) {
  Object.keys(e).forEach((n) => {
    e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n]);
  }),
    Object.keys(t).forEach((n) => {
      e[n] || document.documentElement.style.removeProperty(n);
    });
}
var sd = z({
  name: ts,
  props: mu,
  setup(e, { slots: t }) {
    const n = U(() =>
      yu(
        Z(
          {},
          e.themeVars,
          e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight
        )
      )
    );
    if (Tt) {
      const o = () => {
          document.documentElement.classList.add(`van-theme-${e.theme}`);
        },
        r = (s = e.theme) => {
          document.documentElement.classList.remove(`van-theme-${s}`);
        };
      ce(
        () => e.theme,
        (s, a) => {
          a && r(a), o();
        },
        { immediate: !0 }
      ),
        En(o),
        _t(r),
        Yo(r),
        ce(n, (s, a) => {
          e.themeVarsScope === "global" && it(s, a);
        }),
        ce(
          () => e.themeVarsScope,
          (s, a) => {
            a === "global" && it({}, n.value),
              s === "global" && it(n.value, {});
          }
        ),
        e.themeVarsScope === "global" && it(n.value, {});
    }
    return (
      ye(ns, e),
      ws(() => {
        e.zIndex !== void 0 && lu(e.zIndex);
      }),
      () =>
        R(
          e.tag,
          {
            class: pu(),
            style: e.themeVarsScope === "local" ? n.value : void 0,
          },
          {
            default: () => {
              var o;
              return [(o = t.default) == null ? void 0 : o.call(t)];
            },
          }
        )
    );
  },
});
const [vu, jo] = ue("icon"),
  wu = (e) => (e == null ? void 0 : e.includes("/")),
  bu = {
    dot: Boolean,
    tag: F("i"),
    name: String,
    size: J,
    badge: J,
    color: String,
    badgeProps: Object,
    classPrefix: String,
  };
var _u = z({
  name: vu,
  props: bu,
  setup(e, { slots: t }) {
    const n = Y(ns, null),
      o = U(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || jo());
    return () => {
      const { tag: r, dot: s, name: a, size: i, badge: l, color: u } = e,
        c = wu(a);
      return R(
        hu,
        Ae(
          {
            dot: s,
            tag: r,
            class: [o.value, c ? "" : `${o.value}-${a}`],
            style: { color: u, fontSize: oe(i) },
            content: l,
          },
          e.badgeProps
        ),
        {
          default: () => {
            var f;
            return [
              (f = t.default) == null ? void 0 : f.call(t),
              c && R("img", { class: jo("image"), src: a }, null),
            ];
          },
        }
      );
    };
  },
});
const os = we(_u),
  [Eu, Pu] = ue("overlay"),
  ku = {
    show: Boolean,
    zIndex: J,
    duration: J,
    className: At,
    lockScroll: fe,
    lazyRender: fe,
    customStyle: Object,
  };
var Cu = z({
  name: Eu,
  props: ku,
  setup(e, { slots: t }) {
    const n = $(),
      o = Qr(() => e.show || !e.lazyRender),
      r = (a) => {
        e.lockScroll && jn(a, !0);
      },
      s = o(() => {
        var a;
        const i = Z(Ml(e.zIndex), e.customStyle);
        return (
          Oe(e.duration) && (i.animationDuration = `${e.duration}s`),
          Jo(
            R("div", { ref: n, style: i, class: [Pu(), e.className] }, [
              (a = t.default) == null ? void 0 : a.call(t),
            ]),
            [[Xo, e.show]]
          )
        );
      });
    return (
      zr("touchmove", r, { target: n }),
      () => R(Et, { name: "van-fade", appear: !0 }, { default: s })
    );
  },
});
const Ru = we(Cu),
  Su = Z({}, Ot, {
    round: Boolean,
    position: F("center"),
    closeIcon: F("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: F("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean,
  }),
  [Tu, Mo] = ue("popup");
var Au = z({
  name: Tu,
  inheritAttrs: !1,
  props: Su,
  emits: [
    "open",
    "close",
    "opened",
    "closed",
    "keydown",
    "update:show",
    "clickOverlay",
    "clickCloseIcon",
  ],
  setup(e, { emit: t, attrs: n, slots: o }) {
    let r, s;
    const a = $(),
      i = $(),
      l = Qr(() => e.show || !e.lazyRender),
      u = U(() => {
        const P = { zIndex: a.value };
        if (Oe(e.duration)) {
          const k =
            e.position === "center"
              ? "animationDuration"
              : "transitionDuration";
          P[k] = `${e.duration}s`;
        }
        return P;
      }),
      c = () => {
        r ||
          ((r = !0),
          (a.value = e.zIndex !== void 0 ? +e.zIndex : cu()),
          t("open"));
      },
      f = () => {
        r &&
          Xr(e.beforeClose, {
            done() {
              (r = !1), t("close"), t("update:show", !1);
            },
          });
      },
      d = (P) => {
        t("clickOverlay", P), e.closeOnClickOverlay && f();
      },
      h = () => {
        if (e.overlay)
          return R(
            Ru,
            Ae(
              {
                show: e.show,
                class: e.overlayClass,
                zIndex: a.value,
                duration: e.duration,
                customStyle: e.overlayStyle,
                role: e.closeOnClickOverlay ? "button" : void 0,
                tabindex: e.closeOnClickOverlay ? 0 : void 0,
              },
              Ho(),
              { onClick: d }
            ),
            { default: o["overlay-content"] }
          );
      },
      g = (P) => {
        t("clickCloseIcon", P), f();
      },
      w = () => {
        if (e.closeable)
          return R(
            os,
            {
              role: "button",
              tabindex: 0,
              name: e.closeIcon,
              class: [Mo("close-icon", e.closeIconPosition), nu],
              classPrefix: e.iconPrefix,
              onClick: g,
            },
            null
          );
      };
    let _;
    const y = () => {
        _ && clearTimeout(_),
          (_ = setTimeout(() => {
            t("opened");
          }));
      },
      m = () => t("closed"),
      C = (P) => t("keydown", P),
      S = l(() => {
        var P;
        const {
          round: k,
          position: A,
          safeAreaInsetTop: M,
          safeAreaInsetBottom: ee,
        } = e;
        return Jo(
          R(
            "div",
            Ae(
              {
                ref: i,
                style: u.value,
                role: "dialog",
                tabindex: 0,
                class: [
                  Mo({ round: k, [A]: A }),
                  { "van-safe-area-top": M, "van-safe-area-bottom": ee },
                ],
                onKeydown: C,
              },
              n,
              Ho()
            ),
            [(P = o.default) == null ? void 0 : P.call(o), w()]
          ),
          [[Xo, e.show]]
        );
      }),
      L = () => {
        const { position: P, transition: k, transitionAppear: A } = e,
          M = P === "center" ? "van-fade" : `van-popup-slide-${P}`;
        return R(
          Et,
          { name: k || M, appear: A, onAfterEnter: y, onAfterLeave: m },
          { default: S }
        );
      };
    return (
      ce(
        () => e.show,
        (P) => {
          P &&
            !r &&
            (c(),
            n.tabindex === 0 &&
              ve(() => {
                var k;
                (k = i.value) == null || k.focus();
              })),
            !P && r && ((r = !1), t("close"));
        }
      ),
      Mn({ popupRef: i }),
      au(i, () => e.show && e.lockScroll),
      zr("popstate", () => {
        e.closeOnPopstate && (f(), (s = !1));
      }),
      bt(() => {
        e.show && c();
      }),
      En(() => {
        s && (t("update:show", !0), (s = !1));
      }),
      _t(() => {
        e.show && e.teleport && (f(), (s = !0));
      }),
      ye(Zr, () => e.show),
      () =>
        e.teleport
          ? R(bs, { to: e.teleport }, { default: () => [h(), L()] })
          : R(_s, null, [h(), L()])
    );
  },
});
const rs = we(Au),
  [Ou, xu] = ue("notify"),
  Lu = ["lockScroll", "position", "show", "teleport", "zIndex"],
  $u = Z({}, Ot, {
    type: F("danger"),
    color: String,
    message: J,
    position: F("top"),
    className: At,
    background: String,
    lockScroll: Boolean,
  });
var Iu = z({
  name: Ou,
  props: $u,
  emits: ["update:show"],
  setup(e, { emit: t, slots: n }) {
    const o = (r) => t("update:show", r);
    return () =>
      R(
        rs,
        Ae(
          {
            class: [xu([e.type]), e.className],
            style: { color: e.color, background: e.background },
            overlay: !1,
            duration: 0.2,
            "onUpdate:show": o,
          },
          Dr(e, Lu)
        ),
        { default: () => [n.default ? n.default() : e.message] }
      );
  },
});
const Bu = z({
    props: {
      vnode: { type: Object, required: !0 },
      route: { type: Object, required: !0 },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean,
    },
    setup(e) {
      const t = e.renderKey,
        n = e.route,
        o = {};
      for (const r in e.route)
        Object.defineProperty(o, r, {
          get: () => (t === e.renderKey ? e.route[r] : n[r]),
        });
      return ye(tt, wt(o)), () => re(e.vnode, { ref: e.vnodeRef });
    },
  }),
  Hu = z({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t, expose: n }) {
      const o = H(),
        r = $(),
        s = Y(tt, null);
      let a;
      n({ pageRef: r });
      const i = Y(hr, null);
      let l;
      const u = o.deferHydration();
      if (o.isHydrating) {
        const c = o.hooks.hookOnce("app:error", u);
        pe().beforeEach(c);
      }
      return (
        e.pageKey &&
          ce(
            () => e.pageKey,
            (c, f) => {
              c !== f && o.callHook("page:loading:start");
            }
          ),
        () =>
          re(
            Hr,
            { name: e.name, route: e.route, ...t },
            {
              default: (c) => {
                const f = ju(s, c.route, c.Component),
                  d = s && s.matched.length === c.route.matched.length;
                if (!c.Component) {
                  if (l && !d) return l;
                  u();
                  return;
                }
                if (l && i && !i.isCurrent(c.route)) return l;
                if (f && s && (!i || (i != null && i.isCurrent(s))))
                  return d ? l : null;
                const h = yn(c, e.pageKey);
                !o.isHydrating &&
                  !Mu(s, c.route, c.Component) &&
                  a === h &&
                  o.callHook("page:loading:end"),
                  (a = h);
                const g = !!(e.transition ?? c.route.meta.pageTransition ?? hn),
                  w =
                    g &&
                    Nu(
                      [
                        e.transition,
                        c.route.meta.pageTransition,
                        hn,
                        {
                          onAfterLeave: () => {
                            o.callHook("page:transition:finish", c.Component);
                          },
                        },
                      ].filter(Boolean)
                    ),
                  _ = e.keepalive ?? c.route.meta.keepalive ?? Fi;
                return (
                  (l = Nr(
                    Et,
                    g && w,
                    ol(
                      _,
                      re(
                        Pn,
                        {
                          suspensible: !0,
                          onPending: () =>
                            o.callHook("page:start", c.Component),
                          onResolve: () => {
                            ve(() =>
                              o
                                .callHook("page:finish", c.Component)
                                .then(() => o.callHook("page:loading:end"))
                                .finally(u)
                            );
                          },
                        },
                        {
                          default: () => {
                            const y = re(Bu, {
                              key: h || void 0,
                              vnode: c.Component,
                              route: c.route,
                              renderKey: h || void 0,
                              trackRootNodes: g,
                              vnodeRef: r,
                            });
                            return (
                              _ &&
                                (y.type.name =
                                  c.Component.type.name ||
                                  c.Component.type.__name ||
                                  "RouteProvider"),
                              y
                            );
                          },
                        }
                      )
                    )
                  ).default()),
                  l
                );
              },
            }
          )
      );
    },
  });
function Nu(e) {
  const t = e.map((n) => ({
    ...n,
    onAfterLeave: n.onAfterLeave ? Hn(n.onAfterLeave) : void 0,
  }));
  return fr(...t);
}
function ju(e, t, n) {
  if (!e) return !1;
  const o = t.matched.findIndex((r) => {
    var s;
    return (
      ((s = r.components) == null ? void 0 : s.default) ===
      (n == null ? void 0 : n.type)
    );
  });
  return !o || o === -1
    ? !1
    : t.matched.slice(0, o).some((r, s) => {
        var a, i, l;
        return (
          ((a = r.components) == null ? void 0 : a.default) !==
          ((l = (i = e.matched[s]) == null ? void 0 : i.components) == null
            ? void 0
            : l.default)
        );
      }) ||
        (n &&
          yn({ route: t, Component: n }) !== yn({ route: e, Component: n }));
}
function Mu(e, t, n) {
  return e
    ? t.matched.findIndex((r) => {
        var s;
        return (
          ((s = r.components) == null ? void 0 : s.default) ===
          (n == null ? void 0 : n.type)
        );
      }) <
        t.matched.length - 1
    : !1;
}
const Du = z({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: { name: String, layoutProps: Object },
    async setup(e, t) {
      const n = await Pe[e.name]().then((o) => o.default || o);
      return () => re(n, e.layoutProps, t.slots);
    },
  }),
  Uu = z({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
      name: { type: [String, Boolean, Object], default: null },
      fallback: { type: [String, Object], default: null },
    },
    setup(e, t) {
      const n = H(),
        o = Y(tt),
        r = o === On() ? tl() : o,
        s = U(() => {
          let l = x(e.name) ?? r.meta.layout ?? "default";
          return l && !(l in Pe) && e.fallback && (l = x(e.fallback)), l;
        }),
        a = $();
      t.expose({ layoutRef: a });
      const i = n.deferHydration();
      if (n.isHydrating) {
        const l = n.hooks.hookOnce("app:error", i);
        pe().beforeEach(l);
      }
      return () => {
        const l = s.value && s.value in Pe,
          u = r.meta.layoutTransition ?? Ui;
        return Nr(Et, l && u, {
          default: () =>
            re(
              Pn,
              {
                suspensible: !0,
                onResolve: () => {
                  ve(i);
                },
              },
              {
                default: () =>
                  re(
                    Fu,
                    {
                      layoutProps: Ae(t.attrs, { ref: a }),
                      key: s.value || void 0,
                      name: s.value,
                      shouldProvide: !e.name,
                      hasTransition: !!u,
                    },
                    t.slots
                  ),
              }
            ),
        }).default();
      };
    },
  }),
  Fu = z({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
      name: { type: [String, Boolean] },
      layoutProps: { type: Object },
      hasTransition: { type: Boolean },
      shouldProvide: { type: Boolean },
    },
    setup(e, t) {
      const n = e.name;
      return (
        e.shouldProvide &&
          ye(hr, { isCurrent: (o) => n === (o.meta.layout ?? "default") }),
        () => {
          var o, r;
          return !n || (typeof n == "string" && !(n in Pe))
            ? (r = (o = t.slots).default) == null
              ? void 0
              : r.call(o)
            : re(Du, { key: n, layoutProps: e.layoutProps, name: n }, t.slots);
        }
      );
    },
  }),
  ad = (e) => {
    window.history.length > 1 ? window.history.back() : e.push("/");
  },
  id = (e) => {
    if (e !== 0) {
      var t = e / 1e3;
      return Math.floor(t);
    }
    return 0;
  },
  cd = (e) =>
    new Promise(function (t, n) {
      let o = !1;
      try {
        chrome.runtime.sendMessage(e, { message: "version" }, function (r) {
          r ? (r.version ? (o = !0) : (o = !1), t(o)) : ((o = !1), t(o));
        });
      } catch (r) {
        r.message === "Cannot access a chrome:// URL"
          ? n(
              new Error(
                "The extension is not allowed to be used on this domain. Please try a different domain."
              )
            )
          : r.message === "Permission denied"
          ? n(
              new Error(
                "The extension is not allowed to access the required permissions. Please check the extension's permissions."
              )
            )
          : n(new Error("Ngewibu Extension not installed"));
      }
    }),
  ld = () => {
    const e =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor),
      t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    return e && !t;
  },
  zu = "https://app.alectra.net",
  Wu = (e, t) => {
    const n = $(),
      o = () => {
        n.value = Ur(e).height;
      };
    return (
      bt(() => {
        ve(o);
        for (let r = 1; r <= 3; r++) setTimeout(o, 100 * r);
      }),
      iu(() => ve(o)),
      ce([qr, Gr], o),
      n
    );
  };
function Vu(e, t) {
  const n = Wu(e);
  return (o) =>
    R(
      "div",
      {
        class: t("placeholder"),
        style: { height: n.value ? `${n.value}px` : void 0 },
      },
      [o()]
    );
}
const [ss, Do] = ue("action-bar"),
  as = Symbol(ss),
  Ku = { placeholder: Boolean, safeAreaInsetBottom: fe };
var qu = z({
  name: ss,
  props: Ku,
  setup(e, { slots: t }) {
    const n = $(),
      o = Vu(n, Do),
      { linkChildren: r } = Ol(as);
    r();
    const s = () => {
      var a;
      return R(
        "div",
        {
          ref: n,
          class: [Do(), { "van-safe-area-bottom": e.safeAreaInsetBottom }],
        },
        [(a = t.default) == null ? void 0 : a.call(t)]
      );
    };
    return () => (e.placeholder ? o(s) : s());
  },
});
const Gu = we(qu),
  is = { to: [String, Object], url: String, replace: Boolean };
function Yu({ to: e, url: t, replace: n, $router: o }) {
  e && o
    ? o[n ? "replace" : "push"](e)
    : t && (n ? location.replace(t) : (location.href = t));
}
function cs() {
  const e = Me().proxy;
  return () => Yu(e);
}
const [Ju, Je] = ue("loading"),
  Xu = Array(12)
    .fill(null)
    .map((e, t) => R("i", { class: Je("line", String(t + 1)) }, null)),
  Qu = R("svg", { class: Je("circular"), viewBox: "25 25 50 50" }, [
    R("circle", { cx: "50", cy: "50", r: "20", fill: "none" }, null),
  ]),
  Zu = {
    size: J,
    type: F("circular"),
    color: String,
    vertical: Boolean,
    textSize: J,
    textColor: String,
  };
var ef = z({
  name: Ju,
  props: Zu,
  setup(e, { slots: t }) {
    const n = U(() => Z({ color: e.color }, jl(e.size))),
      o = () => {
        const s = e.type === "spinner" ? Xu : Qu;
        return R("span", { class: Je("spinner", e.type), style: n.value }, [
          t.icon ? t.icon() : s,
        ]);
      },
      r = () => {
        var s;
        if (t.default)
          return R(
            "span",
            {
              class: Je("text"),
              style: {
                fontSize: oe(e.textSize),
                color: (s = e.textColor) != null ? s : e.color,
              },
            },
            [t.default()]
          );
      };
    return () => {
      const { type: s, vertical: a } = e;
      return R(
        "div",
        {
          class: Je([s, { vertical: a }]),
          "aria-live": "polite",
          "aria-busy": !0,
        },
        [o(), r()]
      );
    };
  },
});
const tf = we(ef),
  [nf, Le] = ue("button"),
  of = Z({}, is, {
    tag: F("button"),
    text: String,
    icon: String,
    type: F("default"),
    size: F("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: F("button"),
    loadingSize: J,
    loadingText: String,
    loadingType: String,
    iconPosition: F("left"),
  });
var rf = z({
  name: nf,
  props: of,
  emits: ["click"],
  setup(e, { emit: t, slots: n }) {
    const o = cs(),
      r = () =>
        n.loading
          ? n.loading()
          : R(
              tf,
              {
                size: e.loadingSize,
                type: e.loadingType,
                class: Le("loading"),
              },
              null
            ),
      s = () => {
        if (e.loading) return r();
        if (n.icon) return R("div", { class: Le("icon") }, [n.icon()]);
        if (e.icon)
          return R(
            os,
            { name: e.icon, class: Le("icon"), classPrefix: e.iconPrefix },
            null
          );
      },
      a = () => {
        let u;
        if (
          (e.loading
            ? (u = e.loadingText)
            : (u = n.default ? n.default() : e.text),
          u)
        )
          return R("span", { class: Le("text") }, [u]);
      },
      i = () => {
        const { color: u, plain: c } = e;
        if (u) {
          const f = { color: c ? u : "white" };
          return (
            c || (f.background = u),
            u.includes("gradient") ? (f.border = 0) : (f.borderColor = u),
            f
          );
        }
      },
      l = (u) => {
        e.loading ? jn(u) : e.disabled || (t("click", u), o());
      };
    return () => {
      const {
          tag: u,
          type: c,
          size: f,
          block: d,
          round: h,
          plain: g,
          square: w,
          loading: _,
          disabled: y,
          hairline: m,
          nativeType: C,
          iconPosition: S,
        } = e,
        L = [
          Le([
            c,
            f,
            {
              plain: g,
              block: d,
              round: h,
              square: w,
              loading: _,
              disabled: y,
              hairline: m,
            },
          ]),
          { [tu]: m },
        ];
      return R(
        u,
        { type: C, class: L, style: i(), disabled: y, onClick: l },
        {
          default: () => [
            R("div", { class: Le("content") }, [
              S === "left" && s(),
              a(),
              S === "right" && s(),
            ]),
          ],
        }
      );
    };
  },
});
const bn = we(rf),
  [sf, af] = ue("action-bar-button"),
  cf = Z({}, is, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean,
  });
var lf = z({
  name: sf,
  props: cf,
  setup(e, { slots: t }) {
    const n = cs(),
      { parent: o, index: r } = Sl(as),
      s = U(() => {
        if (o) {
          const i = o.children[r.value - 1];
          return !(i && "isButton" in i);
        }
      }),
      a = U(() => {
        if (o) {
          const i = o.children[r.value + 1];
          return !(i && "isButton" in i);
        }
      });
    return (
      Mn({ isButton: !0 }),
      () => {
        const {
          type: i,
          icon: l,
          text: u,
          color: c,
          loading: f,
          disabled: d,
        } = e;
        return R(
          bn,
          {
            class: af([i, { last: a.value, first: s.value }]),
            size: "large",
            type: i,
            icon: l,
            color: c,
            loading: f,
            disabled: d,
            onClick: n,
          },
          { default: () => [t.default ? t.default() : u] }
        );
      }
    );
  },
});
const Uo = we(lf);
function uf() {
  const e = de({ show: !1 }),
    t = (r) => {
      e.show = r;
    },
    n = (r) => {
      Z(e, r, { transitionAppear: !0 }), t(!0);
    },
    o = () => t(!1);
  return (
    Mn({ open: n, close: o, toggle: t }),
    { open: n, close: o, state: e, toggle: t }
  );
}
function ff(e) {
  const t = Qo(e),
    n = document.createElement("div");
  return (
    document.body.appendChild(n),
    {
      instance: t.mount(n),
      unmount() {
        t.unmount(), document.body.removeChild(n);
      },
    }
  );
}
const [df, ae, ct] = ue("dialog"),
  hf = Z({}, Ot, {
    title: String,
    theme: String,
    width: J,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: At,
    transition: F("van-dialog-bounce"),
    messageAlign: String,
    closeOnPopstate: fe,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: fe,
    closeOnClickOverlay: Boolean,
  }),
  pf = [...ou, "transition", "closeOnPopstate"];
var ls = z({
  name: df,
  props: hf,
  emits: ["confirm", "cancel", "keydown", "update:show"],
  setup(e, { emit: t, slots: n }) {
    const o = $(),
      r = de({ confirm: !1, cancel: !1 }),
      s = (y) => t("update:show", y),
      a = (y) => {
        var m;
        s(!1), (m = e.callback) == null || m.call(e, y);
      },
      i = (y) => () => {
        e.show &&
          (t(y),
          e.beforeClose
            ? ((r[y] = !0),
              Xr(e.beforeClose, {
                args: [y],
                done() {
                  a(y), (r[y] = !1);
                },
                canceled() {
                  r[y] = !1;
                },
              }))
            : a(y));
      },
      l = i("cancel"),
      u = i("confirm"),
      c = Es(
        (y) => {
          var m, C;
          if (
            y.target !==
            ((C = (m = o.value) == null ? void 0 : m.popupRef) == null
              ? void 0
              : C.value)
          )
            return;
          ({
            Enter: e.showConfirmButton ? u : vn,
            Escape: e.showCancelButton ? l : vn,
          })[y.key](),
            t("keydown", y);
        },
        ["enter", "esc"]
      ),
      f = () => {
        const y = n.title ? n.title() : e.title;
        if (y)
          return R(
            "div",
            { class: ae("header", { isolated: !e.message && !n.default }) },
            [y]
          );
      },
      d = (y) => {
        const { message: m, allowHtml: C, messageAlign: S } = e,
          L = ae("message", { "has-title": y, [S]: S }),
          P = yt(m) ? m() : m;
        return C && typeof P == "string"
          ? R("div", { class: L, innerHTML: P }, null)
          : R("div", { class: L }, [P]);
      },
      h = () => {
        if (n.default) return R("div", { class: ae("content") }, [n.default()]);
        const { title: y, message: m, allowHtml: C } = e;
        if (m) {
          const S = !!(y || n.title);
          return R(
            "div",
            { key: C ? 1 : 0, class: ae("content", { isolated: !S }) },
            [d(S)]
          );
        }
      },
      g = () =>
        R("div", { class: [Zl, ae("footer")] }, [
          e.showCancelButton &&
            R(
              bn,
              {
                size: "large",
                text: e.cancelButtonText || ct("cancel"),
                class: ae("cancel"),
                style: { color: e.cancelButtonColor },
                loading: r.cancel,
                disabled: e.cancelButtonDisabled,
                onClick: l,
              },
              null
            ),
          e.showConfirmButton &&
            R(
              bn,
              {
                size: "large",
                text: e.confirmButtonText || ct("confirm"),
                class: [ae("confirm"), { [eu]: e.showCancelButton }],
                style: { color: e.confirmButtonColor },
                loading: r.confirm,
                disabled: e.confirmButtonDisabled,
                onClick: u,
              },
              null
            ),
        ]),
      w = () =>
        R(
          Gu,
          { class: ae("footer") },
          {
            default: () => [
              e.showCancelButton &&
                R(
                  Uo,
                  {
                    type: "warning",
                    text: e.cancelButtonText || ct("cancel"),
                    class: ae("cancel"),
                    color: e.cancelButtonColor,
                    loading: r.cancel,
                    disabled: e.cancelButtonDisabled,
                    onClick: l,
                  },
                  null
                ),
              e.showConfirmButton &&
                R(
                  Uo,
                  {
                    type: "danger",
                    text: e.confirmButtonText || ct("confirm"),
                    class: ae("confirm"),
                    color: e.confirmButtonColor,
                    loading: r.confirm,
                    disabled: e.confirmButtonDisabled,
                    onClick: u,
                  },
                  null
                ),
            ],
          }
        ),
      _ = () =>
        n.footer ? n.footer() : e.theme === "round-button" ? w() : g();
    return () => {
      const { width: y, title: m, theme: C, message: S, className: L } = e;
      return R(
        rs,
        Ae(
          {
            ref: o,
            role: "dialog",
            class: [ae([C]), L],
            style: { width: oe(y) },
            tabindex: 0,
            "aria-labelledby": m || S,
            onKeydown: c,
            "onUpdate:show": s,
          },
          Dr(e, pf)
        ),
        { default: () => [f(), h(), _()] }
      );
    };
  },
});
let _n;
const mf = {
  title: "",
  width: "",
  theme: null,
  message: "",
  overlay: !0,
  callback: null,
  teleport: "body",
  className: "",
  allowHtml: !1,
  lockScroll: !0,
  transition: void 0,
  beforeClose: null,
  overlayClass: "",
  overlayStyle: void 0,
  messageAlign: "",
  cancelButtonText: "",
  cancelButtonColor: null,
  cancelButtonDisabled: !1,
  confirmButtonText: "",
  confirmButtonColor: null,
  confirmButtonDisabled: !1,
  showConfirmButton: !0,
  showCancelButton: !1,
  closeOnPopstate: !0,
  closeOnClickOverlay: !1,
};
let gf = Z({}, mf);
function yf() {
  ({ instance: _n } = ff({
    setup() {
      const { state: t, toggle: n } = uf();
      return () => R(ls, Ae(t, { "onUpdate:show": n }), null);
    },
  }));
}
function us(e) {
  return Tt
    ? new Promise((t, n) => {
        _n || yf(),
          _n.open(
            Z({}, gf, e, {
              callback: (o) => {
                (o === "confirm" ? t : n)(o);
              },
            })
          );
      })
    : Promise.resolve(void 0);
}
const ud = (e) => us(Z({ showCancelButton: !0 }, e));
we(ls);
/*! Capacitor: https://capacitorjs.com/ - MIT License */ const vf = (e) => {
    const t = new Map();
    t.set("web", { name: "web" });
    const n = e.CapacitorPlatforms || {
        currentPlatform: { name: "web" },
        platforms: t,
      },
      o = (s, a) => {
        n.platforms.set(s, a);
      },
      r = (s) => {
        n.platforms.has(s) && (n.currentPlatform = n.platforms.get(s));
      };
    return (n.addPlatform = o), (n.setPlatform = r), n;
  },
  wf = (e) => (e.CapacitorPlatforms = vf(e)),
  fs = wf(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {}
  );
fs.addPlatform;
fs.setPlatform;
var je;
(function (e) {
  (e.Unimplemented = "UNIMPLEMENTED"), (e.Unavailable = "UNAVAILABLE");
})(je || (je = {}));
class Qt extends Error {
  constructor(t, n, o) {
    super(t), (this.message = t), (this.code = n), (this.data = o);
  }
}
const bf = (e) => {
    var t, n;
    return e != null && e.androidBridge
      ? "android"
      : !(
          (n =
            (t = e == null ? void 0 : e.webkit) === null || t === void 0
              ? void 0
              : t.messageHandlers) === null || n === void 0
        ) && n.bridge
      ? "ios"
      : "web";
  },
  _f = (e) => {
    var t, n, o, r, s;
    const a = e.CapacitorCustomPlatform || null,
      i = e.Capacitor || {},
      l = (i.Plugins = i.Plugins || {}),
      u = e.CapacitorPlatforms,
      c = () => (a !== null ? a.name : bf(e)),
      f =
        ((t = u == null ? void 0 : u.currentPlatform) === null || t === void 0
          ? void 0
          : t.getPlatform) || c,
      d = () => f() !== "web",
      h =
        ((n = u == null ? void 0 : u.currentPlatform) === null || n === void 0
          ? void 0
          : n.isNativePlatform) || d,
      g = (k) => {
        const A = S.get(k);
        return !!((A != null && A.platforms.has(f())) || y(k));
      },
      w =
        ((o = u == null ? void 0 : u.currentPlatform) === null || o === void 0
          ? void 0
          : o.isPluginAvailable) || g,
      _ = (k) => {
        var A;
        return (A = i.PluginHeaders) === null || A === void 0
          ? void 0
          : A.find((M) => M.name === k);
      },
      y =
        ((r = u == null ? void 0 : u.currentPlatform) === null || r === void 0
          ? void 0
          : r.getPluginHeader) || _,
      m = (k) => e.console.error(k),
      C = (k, A, M) =>
        Promise.reject(`${M} does not have an implementation of "${A}".`),
      S = new Map(),
      L = (k, A = {}) => {
        const M = S.get(k);
        if (M)
          return (
            console.warn(
              `Capacitor plugin "${k}" already registered. Cannot register plugins twice.`
            ),
            M.proxy
          );
        const ee = f(),
          me = y(k);
        let te;
        const ke = async () => (
            !te && ee in A
              ? (te =
                  typeof A[ee] == "function"
                    ? (te = await A[ee]())
                    : (te = A[ee]))
              : a !== null &&
                !te &&
                "web" in A &&
                (te =
                  typeof A.web == "function"
                    ? (te = await A.web())
                    : (te = A.web)),
            te
          ),
          xt = (N, W) => {
            var K, ne;
            if (me) {
              const X =
                me == null ? void 0 : me.methods.find((q) => W === q.name);
              if (X)
                return X.rtype === "promise"
                  ? (q) => i.nativePromise(k, W.toString(), q)
                  : (q, se) => i.nativeCallback(k, W.toString(), q, se);
              if (N)
                return (K = N[W]) === null || K === void 0 ? void 0 : K.bind(N);
            } else {
              if (N)
                return (ne = N[W]) === null || ne === void 0
                  ? void 0
                  : ne.bind(N);
              throw new Qt(
                `"${k}" plugin is not implemented on ${ee}`,
                je.Unimplemented
              );
            }
          },
          Ce = (N) => {
            let W;
            const K = (...ne) => {
              const X = ke().then((q) => {
                const se = xt(q, N);
                if (se) {
                  const p = se(...ne);
                  return (W = p == null ? void 0 : p.remove), p;
                } else
                  throw new Qt(
                    `"${k}.${N}()" is not implemented on ${ee}`,
                    je.Unimplemented
                  );
              });
              return N === "addListener" && (X.remove = async () => W()), X;
            };
            return (
              (K.toString = () => `${N.toString()}() { [capacitor code] }`),
              Object.defineProperty(K, "name", {
                value: N,
                writable: !1,
                configurable: !1,
              }),
              K
            );
          },
          Ue = Ce("addListener"),
          Re = Ce("removeListener"),
          Fe = (N, W) => {
            const K = Ue({ eventName: N }, W),
              ne = async () => {
                const q = await K;
                Re({ eventName: N, callbackId: q }, W);
              },
              X = new Promise((q) => K.then(() => q({ remove: ne })));
            return (
              (X.remove = async () => {
                console.warn(
                  "Using addListener() without 'await' is deprecated."
                ),
                  await ne();
              }),
              X
            );
          },
          ze = new Proxy(
            {},
            {
              get(N, W) {
                switch (W) {
                  case "$$typeof":
                    return;
                  case "toJSON":
                    return () => ({});
                  case "addListener":
                    return me ? Fe : Ue;
                  case "removeListener":
                    return Re;
                  default:
                    return Ce(W);
                }
              },
            }
          );
        return (
          (l[k] = ze),
          S.set(k, {
            name: k,
            proxy: ze,
            platforms: new Set([...Object.keys(A), ...(me ? [ee] : [])]),
          }),
          ze
        );
      },
      P =
        ((s = u == null ? void 0 : u.currentPlatform) === null || s === void 0
          ? void 0
          : s.registerPlugin) || L;
    return (
      i.convertFileSrc || (i.convertFileSrc = (k) => k),
      (i.getPlatform = f),
      (i.handleError = m),
      (i.isNativePlatform = h),
      (i.isPluginAvailable = w),
      (i.pluginMethodNoop = C),
      (i.registerPlugin = P),
      (i.Exception = Qt),
      (i.DEBUG = !!i.DEBUG),
      (i.isLoggingEnabled = !!i.isLoggingEnabled),
      (i.platform = i.getPlatform()),
      (i.isNative = i.isNativePlatform()),
      i
    );
  },
  Ef = (e) => (e.Capacitor = _f(e)),
  vt = Ef(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {}
  ),
  Dn = vt.registerPlugin;
vt.Plugins;
class ds {
  constructor(t) {
    (this.listeners = {}),
      (this.retainedEventArguments = {}),
      (this.windowListeners = {}),
      t &&
        (console.warn(
          `Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`
        ),
        (this.config = t));
  }
  addListener(t, n) {
    let o = !1;
    this.listeners[t] || ((this.listeners[t] = []), (o = !0)),
      this.listeners[t].push(n);
    const s = this.windowListeners[t];
    s && !s.registered && this.addWindowListener(s),
      o && this.sendRetainedArgumentsForEvent(t);
    const a = async () => this.removeListener(t, n);
    return Promise.resolve({ remove: a });
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const t in this.windowListeners)
      this.removeWindowListener(this.windowListeners[t]);
    this.windowListeners = {};
  }
  notifyListeners(t, n, o) {
    const r = this.listeners[t];
    if (!r) {
      if (o) {
        let s = this.retainedEventArguments[t];
        s || (s = []), s.push(n), (this.retainedEventArguments[t] = s);
      }
      return;
    }
    r.forEach((s) => s(n));
  }
  hasListeners(t) {
    return !!this.listeners[t].length;
  }
  registerWindowListener(t, n) {
    this.windowListeners[n] = {
      registered: !1,
      windowEventName: t,
      pluginEventName: n,
      handler: (o) => {
        this.notifyListeners(n, o);
      },
    };
  }
  unimplemented(t = "not implemented") {
    return new vt.Exception(t, je.Unimplemented);
  }
  unavailable(t = "not available") {
    return new vt.Exception(t, je.Unavailable);
  }
  async removeListener(t, n) {
    const o = this.listeners[t];
    if (!o) return;
    const r = o.indexOf(n);
    this.listeners[t].splice(r, 1),
      this.listeners[t].length ||
        this.removeWindowListener(this.windowListeners[t]);
  }
  addWindowListener(t) {
    window.addEventListener(t.windowEventName, t.handler), (t.registered = !0);
  }
  removeWindowListener(t) {
    t &&
      (window.removeEventListener(t.windowEventName, t.handler),
      (t.registered = !1));
  }
  sendRetainedArgumentsForEvent(t) {
    const n = this.retainedEventArguments[t];
    n &&
      (delete this.retainedEventArguments[t],
      n.forEach((o) => {
        this.notifyListeners(t, o);
      }));
  }
}
const Fo = (e) =>
    encodeURIComponent(e)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape),
  zo = (e) => e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class Pf extends ds {
  async getCookies() {
    const t = document.cookie,
      n = {};
    return (
      t.split(";").forEach((o) => {
        if (o.length <= 0) return;
        let [r, s] = o.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        (r = zo(r).trim()), (s = zo(s).trim()), (n[r] = s);
      }),
      n
    );
  }
  async setCookie(t) {
    try {
      const n = Fo(t.key),
        o = Fo(t.value),
        r = `; expires=${(t.expires || "").replace("expires=", "")}`,
        s = (t.path || "/").replace("path=", ""),
        a = t.url != null && t.url.length > 0 ? `domain=${t.url}` : "";
      document.cookie = `${n}=${o || ""}${r}; path=${s}; ${a};`;
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async deleteCookie(t) {
    try {
      document.cookie = `${t.key}=; Max-Age=0`;
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async clearCookies() {
    try {
      const t = document.cookie.split(";") || [];
      for (const n of t)
        document.cookie = n
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    } catch (t) {
      return Promise.reject(t);
    }
  }
  async clearAllCookies() {
    try {
      await this.clearCookies();
    } catch (t) {
      return Promise.reject(t);
    }
  }
}
Dn("CapacitorCookies", { web: () => new Pf() });
const kf = async (e) =>
    new Promise((t, n) => {
      const o = new FileReader();
      (o.onload = () => {
        const r = o.result;
        t(r.indexOf(",") >= 0 ? r.split(",")[1] : r);
      }),
        (o.onerror = (r) => n(r)),
        o.readAsDataURL(e);
    }),
  Cf = (e = {}) => {
    const t = Object.keys(e);
    return Object.keys(e)
      .map((r) => r.toLocaleLowerCase())
      .reduce((r, s, a) => ((r[s] = e[t[a]]), r), {});
  },
  Rf = (e, t = !0) =>
    e
      ? Object.entries(e)
          .reduce((o, r) => {
            const [s, a] = r;
            let i, l;
            return (
              Array.isArray(a)
                ? ((l = ""),
                  a.forEach((u) => {
                    (i = t ? encodeURIComponent(u) : u), (l += `${s}=${i}&`);
                  }),
                  l.slice(0, -1))
                : ((i = t ? encodeURIComponent(a) : a), (l = `${s}=${i}`)),
              `${o}&${l}`
            );
          }, "")
          .substr(1)
      : null,
  Sf = (e, t = {}) => {
    const n = Object.assign(
        { method: e.method || "GET", headers: e.headers },
        t
      ),
      r = Cf(e.headers)["content-type"] || "";
    if (typeof e.data == "string") n.body = e.data;
    else if (r.includes("application/x-www-form-urlencoded")) {
      const s = new URLSearchParams();
      for (const [a, i] of Object.entries(e.data || {})) s.set(a, i);
      n.body = s.toString();
    } else if (
      r.includes("multipart/form-data") ||
      e.data instanceof FormData
    ) {
      const s = new FormData();
      if (e.data instanceof FormData)
        e.data.forEach((i, l) => {
          s.append(l, i);
        });
      else for (const i of Object.keys(e.data)) s.append(i, e.data[i]);
      n.body = s;
      const a = new Headers(n.headers);
      a.delete("content-type"), (n.headers = a);
    } else
      (r.includes("application/json") || typeof e.data == "object") &&
        (n.body = JSON.stringify(e.data));
    return n;
  };
class Tf extends ds {
  async request(t) {
    const n = Sf(t, t.webFetchExtra),
      o = Rf(t.params, t.shouldEncodeUrlParams),
      r = o ? `${t.url}?${o}` : t.url,
      s = await fetch(r, n),
      a = s.headers.get("content-type") || "";
    let { responseType: i = "text" } = s.ok ? t : {};
    a.includes("application/json") && (i = "json");
    let l, u;
    switch (i) {
      case "arraybuffer":
      case "blob":
        (u = await s.blob()), (l = await kf(u));
        break;
      case "json":
        l = await s.json();
        break;
      case "document":
      case "text":
      default:
        l = await s.text();
    }
    const c = {};
    return (
      s.headers.forEach((f, d) => {
        c[d] = f;
      }),
      { data: l, headers: c, status: s.status, url: s.url }
    );
  }
  async get(t) {
    return this.request(Object.assign(Object.assign({}, t), { method: "GET" }));
  }
  async post(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "POST" })
    );
  }
  async put(t) {
    return this.request(Object.assign(Object.assign({}, t), { method: "PUT" }));
  }
  async patch(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "PATCH" })
    );
  }
  async delete(t) {
    return this.request(
      Object.assign(Object.assign({}, t), { method: "DELETE" })
    );
  }
}
Dn("CapacitorHttp", { web: () => new Tf() });
const Af = Dn("Network", {
    web: () =>
      V(
        () => import("./MFbvjeHC.js"),
        __vite__mapDeps([68, 2, 3]),
        import.meta.url
      ).then((e) => new e.NetworkWeb()),
  }),
  Of = "1.0.2-rilis-beta",
  xf =
    "Pembaruan aplikasi tersedia, silakan perbarui aplikasi Anda untuk mendapatkan pengalaman menonton yang lebih baik.",
  Lf = {
    __name: "app",
    setup(e) {
      fetch(`${zu}/api/app/version/check`)
        .then((s) => s.text())
        .then((s) => {
          s !== Of &&
            us({
              title: "Update tersedia",
              "allow-html": !0,
              message: xf,
              "message-align": "left",
              confirmButtonText: "Perbarui",
            }).then(() => {
              location.replace("https://discord.gg/NfZSbRhH");
            });
        })
        .catch((s) => {
          console.error(s);
        });
      const t = $(!1),
        n = $(""),
        o = $("fas fa-wifi"),
        r = $("success");
      return (
        Af.addListener("networkStatusChange", (s) => {
          s.connected === !1 &&
            ((t.value = !0),
            (n.value = "Tidak ada koneksi internet"),
            (o.value = "fa fa-wifi-slash me-2"),
            (r.value = "danger"),
            setTimeout(() => {
              t.value = !1;
            }, 3e3)),
            s.connected === !0 &&
              ((t.value = !0),
              (n.value = "Koneksi internet tersedia"),
              (o.value = "fa fa-wifi me-2"),
              (r.value = "success"),
              setTimeout(() => {
                t.value = !1;
              }, 3e3));
        }),
        (s, a) => {
          const i = Iu,
            l = Hu,
            u = Uu;
          return (
            Te(),
            Ps("div", null, [
              R(u, null, {
                default: Zt(() => [
                  R(
                    i,
                    {
                      show: x(t),
                      "onUpdate:show":
                        a[0] || (a[0] = (c) => (Go(t) ? (t.value = c) : null)),
                      type: x(r),
                    },
                    {
                      default: Zt(() => [
                        Un("i", { class: ks(x(o)) }, null, 2),
                        Un("span", null, Cs(x(n)), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["show", "type"]
                  ),
                  R(l),
                ]),
                _: 1,
              }),
            ])
          );
        }
      );
    },
  },
  $f = {
    __name: "nuxt-error-page",
    props: { error: Object },
    setup(e) {
      const n = e.error;
      n.stack &&
        n.stack
          .split(
            `
`
          )
          .splice(1)
          .map((f) => ({
            text: f.replace("webpack:/", "").replace(".vue", ".js").trim(),
            internal:
              (f.includes("node_modules") && !f.includes(".cache")) ||
              f.includes("internal") ||
              f.includes("new Promise"),
          }))
          .map(
            (f) =>
              `<span class="stack${f.internal ? " internal" : ""}">${
                f.text
              }</span>`
          ).join(`
`);
      const o = Number(n.statusCode || 500),
        r = o === 404,
        s = n.statusMessage ?? (r ? "Page Not Found" : "Internal Server Error"),
        a = n.message || n.toString(),
        i = void 0,
        l = Fn(() =>
          V(
            () => import("./CwmjLkwE.js"),
            __vite__mapDeps([69, 12, 2, 3, 66, 4, 70]),
            import.meta.url
          ).then((f) => f.default || f)
        ),
        u = Fn(() =>
          V(
            () => import("./DkoSssVZ.js"),
            __vite__mapDeps([71, 66, 2, 3, 4, 72]),
            import.meta.url
          ).then((f) => f.default || f)
        ),
        c = r ? l : u;
      return (f, d) => (
        Te(),
        $e(
          x(c),
          Rs(
            Ss({
              statusCode: x(o),
              statusMessage: x(s),
              description: x(a),
              stack: x(i),
            })
          ),
          null,
          16
        )
      );
    },
  },
  Wo = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null,
        n = H(),
        o = n.deferHydration();
      if (n.isHydrating) {
        const i = n.hooks.hookOnce("app:error", o);
        pe().beforeEach(i);
      }
      const r = !1;
      ye(tt, On()), n.hooks.callHookWith((i) => i.map((l) => l()), "vue:setup");
      const s = kt();
      Ts((i, l, u) => {
        if (
          (n.hooks
            .callHook("vue:error", i, l, u)
            .catch((c) => console.error("[nuxt] Error in `vue:error` hook", c)),
          Xa(i) && (i.fatal || i.unhandled))
        )
          return n.runWithContext(() => Be(i)), !1;
      });
      const a = !1;
      return (i, l) => (
        Te(),
        $e(
          Pn,
          { onResolve: x(o) },
          {
            default: Zt(() => [
              x(s)
                ? (Te(), $e(x($f), { key: 0, error: x(s) }, null, 8, ["error"]))
                : x(a)
                ? (Te(),
                  $e(x(t), { key: 1, context: x(a) }, null, 8, ["context"]))
                : x(r)
                ? (Te(), $e(As(x(r)), { key: 2 }))
                : (Te(), $e(x(Lf), { key: 3 })),
            ]),
            _: 1,
          },
          8,
          ["onResolve"]
        )
      );
    },
  };
let Vo;
{
  let e;
  (Vo = async function () {
    var a, i;
    if (e) return e;
    const o = !!(
        ((a = window.__NUXT__) != null && a.serverRendered) ||
        ((i = document.getElementById("__NUXT_DATA__")) == null
          ? void 0
          : i.dataset.ssr) === "true"
      )
        ? Os(Wo)
        : Qo(Wo),
      r = Ha({ vueApp: o });
    async function s(l) {
      await r.callHook("app:error", l),
        (r.payload.error = r.payload.error || Ct(l));
    }
    o.config.errorHandler = s;
    try {
      await ja(r, Pl);
    } catch (l) {
      s(l);
    }
    try {
      await r.hooks.callHook("app:created", o),
        await r.hooks.callHook("app:beforeMount", o),
        o.mount(zi),
        await r.hooks.callHook("app:mounted", o),
        await ve();
    } catch (l) {
      s(l);
    }
    return o.config.errorHandler === s && (o.config.errorHandler = void 0), o;
  }),
    (e = Vo().catch((t) => {
      throw (console.error("Error while mounting app:", t), t);
    }));
}
export {
  rs as $,
  zu as A,
  iu as B,
  Fr as C,
  zr as D,
  Mn as E,
  Ur as F,
  Kf as G,
  So as H,
  os as I,
  Oe as J,
  Kr as K,
  Yl as L,
  Bl as M,
  kl as N,
  yt as O,
  At as P,
  Sl as Q,
  rd as R,
  Yf as S,
  Uf as T,
  td as U,
  jn as V,
  Xf as W,
  Dr as X,
  Ot as Y,
  zf as Z,
  ou as _,
  pe as a,
  nu as a0,
  tf as a1,
  Ho as a2,
  od as a3,
  is as a4,
  cs as a5,
  qf as a6,
  su as a7,
  Il as a8,
  Vf as a9,
  Nf as aA,
  An as aB,
  Bf as aC,
  nn as aD,
  Cn as aE,
  Ml as aF,
  Vr as aG,
  Vu as aH,
  nd as aI,
  Hf as aJ,
  un as aK,
  ds as aL,
  Oo as aa,
  Ol as ab,
  qr as ac,
  Gr as ad,
  Gf as ae,
  Qf as af,
  ed as ag,
  Ff as ah,
  Zf as ai,
  Jf as aj,
  Xr as ak,
  Yu as al,
  hu as am,
  V as an,
  Dn as ao,
  jf as ap,
  H as aq,
  Ct as ar,
  Mf as as,
  xe as at,
  jr as au,
  Co as av,
  Df as aw,
  Rn as ax,
  Pt as ay,
  qs as az,
  Nn as b,
  uf as c,
  Iu as d,
  Z as e,
  ue as f,
  J as g,
  oe as h,
  Tt as i,
  ud as j,
  _u as k,
  jl as l,
  ff as m,
  ad as n,
  F as o,
  Wf as p,
  sd as q,
  us as r,
  rf as s,
  fe as t,
  On as u,
  ef as v,
  we as w,
  id as x,
  ld as y,
  cd as z,
};
