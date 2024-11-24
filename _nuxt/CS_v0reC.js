/**
 * @vue/shared v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ai(e, t) {
  const n = new Set(e.split(","));
  return (i) => n.has(i);
}
const ie = {},
  Tt = [],
  Pe = () => {},
  Il = () => !1,
  Jt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Li = (e) => e.startsWith("onUpdate:"),
  oe = Object.assign,
  Bi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Al = Object.prototype.hasOwnProperty,
  J = (e, t) => Al.call(e, t),
  W = Array.isArray,
  xt = (e) => Zt(e) === "[object Map]",
  tr = (e) => Zt(e) === "[object Set]",
  Ll = (e) => Zt(e) === "[object RegExp]",
  U = (e) => typeof e == "function",
  te = (e) => typeof e == "string",
  wt = (e) => typeof e == "symbol",
  ne = (e) => e !== null && typeof e == "object",
  Ri = (e) => (ne(e) || U(e)) && U(e.then) && U(e.catch),
  nr = Object.prototype.toString,
  Zt = (e) => nr.call(e),
  Bl = (e) => Zt(e).slice(8, -1),
  ir = (e) => Zt(e) === "[object Object]",
  Fi = (e) =>
    te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Et = Ai(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ln = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Rl = /-(\w)/g,
  ze = Ln((e) => e.replace(Rl, (t, n) => (n ? n.toUpperCase() : ""))),
  Fl = /\B([A-Z])/g,
  nt = Ln((e) => e.replace(Fl, "-$1").toLowerCase()),
  Bn = Ln((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Un = Ln((e) => (e ? `on${Bn(e)}` : "")),
  tt = (e, t) => !Object.is(e, t),
  zt = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  sr = (e, t, n, i = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: i,
      value: n,
    });
  },
  Nl = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  rr = (e) => {
    const t = te(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let cs;
const lr = () =>
  cs ||
  (cs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Rn(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        s = te(i) ? Hl(i) : Rn(i);
      if (s) for (const r in s) t[r] = s[r];
    }
    return t;
  } else if (te(e) || ne(e)) return e;
}
const zl = /;(?![^(]*\))/g,
  Dl = /:([^]+)/,
  Vl = /\/\*[^]*?\*\//g;
function Hl(e) {
  const t = {};
  return (
    e
      .replace(Vl, "")
      .split(zl)
      .forEach((n) => {
        if (n) {
          const i = n.split(Dl);
          i.length > 1 && (t[i[0].trim()] = i[1].trim());
        }
      }),
    t
  );
}
function Fc(e) {
  let t = "";
  if (!e || te(e)) return t;
  for (const n in e) {
    const i = e[n];
    if (te(i) || typeof i == "number") {
      const s = n.startsWith("--") ? n : nt(n);
      t += `${s}:${i};`;
    }
  }
  return t;
}
function Fn(e) {
  let t = "";
  if (te(e)) t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const i = Fn(e[n]);
      i && (t += i + " ");
    }
  else if (ne(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Nc(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !te(t) && (e.class = Fn(t)), n && (e.style = Rn(n)), e;
}
const $l =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  jl = Ai($l);
function or(e) {
  return !!e || e === "";
}
const zc = (e) =>
    te(e)
      ? e
      : e == null
      ? ""
      : W(e) || (ne(e) && (e.toString === nr || !U(e.toString)))
      ? JSON.stringify(e, ar, 2)
      : String(e),
  ar = (e, t) =>
    t && t.__v_isRef
      ? ar(e, t.value)
      : xt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [i, s], r) => ((n[Kn(i, r) + " =>"] = s), n),
            {}
          ),
        }
      : tr(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Kn(n)) }
      : wt(t)
      ? Kn(t)
      : ne(t) && !W(t) && !ir(t)
      ? String(t)
      : t,
  Kn = (e, t = "") => {
    var n;
    return wt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be;
class fr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = be),
      !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = be;
      try {
        return (be = this), t();
      } finally {
        be = n;
      }
    }
  }
  on() {
    be = this;
  }
  off() {
    be = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Dc(e) {
  return new fr(e);
}
function Gl(e, t = be) {
  t && t.active && t.effects.push(e);
}
function kl() {
  return be;
}
function Vc(e) {
  be && be.cleanups.push(e);
}
let ut;
class Ni {
  constructor(t, n, i, s) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = i),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Gl(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), it();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Wl(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), st();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Qe,
      n = ut;
    try {
      return (Qe = !0), (ut = this), this._runnings++, us(this), this.fn();
    } finally {
      ds(this), this._runnings--, (ut = n), (Qe = t);
    }
  }
  stop() {
    this.active &&
      (us(this), ds(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Wl(e) {
  return e.value;
}
function us(e) {
  e._trackId++, (e._depsLength = 0);
}
function ds(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) cr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function cr(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Qe = !0,
  di = 0;
const ur = [];
function it() {
  ur.push(Qe), (Qe = !1);
}
function st() {
  const e = ur.pop();
  Qe = e === void 0 ? !0 : e;
}
function zi() {
  di++;
}
function Di() {
  for (di--; !di && pi.length; ) pi.shift()();
}
function dr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const i = e.deps[e._depsLength];
    i !== t ? (i && cr(i, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const pi = [];
function pr(e, t, n) {
  zi();
  for (const i of e.keys()) {
    let s;
    i._dirtyLevel < t &&
      (s ?? (s = e.get(i) === i._trackId)) &&
      (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0),
      (i._dirtyLevel = t)),
      i._shouldSchedule &&
        (s ?? (s = e.get(i) === i._trackId)) &&
        (i.trigger(),
        (!i._runnings || i.allowRecurse) &&
          i._dirtyLevel !== 2 &&
          ((i._shouldSchedule = !1), i.scheduler && pi.push(i.scheduler)));
  }
  Di();
}
const hr = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  xn = new WeakMap(),
  dt = Symbol(""),
  hi = Symbol("");
function we(e, t, n) {
  if (Qe && ut) {
    let i = xn.get(e);
    i || xn.set(e, (i = new Map()));
    let s = i.get(n);
    s || i.set(n, (s = hr(() => i.delete(n)))), dr(ut, s);
  }
}
function $e(e, t, n, i, s, r) {
  const l = xn.get(e);
  if (!l) return;
  let a = [];
  if (t === "clear") a = [...l.values()];
  else if (n === "length" && W(e)) {
    const o = Number(i);
    l.forEach((c, f) => {
      (f === "length" || (!wt(f) && f >= o)) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(l.get(n)), t)) {
      case "add":
        W(e)
          ? Fi(n) && a.push(l.get("length"))
          : (a.push(l.get(dt)), xt(e) && a.push(l.get(hi)));
        break;
      case "delete":
        W(e) || (a.push(l.get(dt)), xt(e) && a.push(l.get(hi)));
        break;
      case "set":
        xt(e) && a.push(l.get(dt));
        break;
    }
  zi();
  for (const o of a) o && pr(o, 4);
  Di();
}
function Ul(e, t) {
  const n = xn.get(e);
  return n && n.get(t);
}
const Kl = Ai("__proto__,__v_isRef,__isVue"),
  gr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(wt)
  ),
  ps = ql();
function ql() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const i = Z(this);
        for (let r = 0, l = this.length; r < l; r++) we(i, "get", r + "");
        const s = i[t](...n);
        return s === -1 || s === !1 ? i[t](...n.map(Z)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        it(), zi();
        const i = Z(this)[t].apply(this, n);
        return Di(), st(), i;
      };
    }),
    e
  );
}
function Yl(e) {
  wt(e) || (e = String(e));
  const t = Z(this);
  return we(t, "has", e), t.hasOwnProperty(e);
}
class mr {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, i) {
    const s = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return i === (s ? (r ? ao : br) : r ? yr : wr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(i)
        ? t
        : void 0;
    const l = W(t);
    if (!s) {
      if (l && J(ps, n)) return Reflect.get(ps, n, i);
      if (n === "hasOwnProperty") return Yl;
    }
    const a = Reflect.get(t, n, i);
    return (wt(n) ? gr.has(n) : Kl(n)) || (s || we(t, "get", n), r)
      ? a
      : he(a)
      ? l && Fi(n)
        ? a
        : a.value
      : ne(a)
      ? s
        ? Sr(a)
        : $i(a)
      : a;
  }
}
class vr extends mr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._isShallow) {
      const o = Wt(r);
      if (
        (!En(i) && !Wt(i) && ((r = Z(r)), (i = Z(i))), !W(t) && he(r) && !he(i))
      )
        return o ? !1 : ((r.value = i), !0);
    }
    const l = W(t) && Fi(n) ? Number(n) < t.length : J(t, n),
      a = Reflect.set(t, n, i, s);
    return (
      t === Z(s) && (l ? tt(i, r) && $e(t, "set", n, i) : $e(t, "add", n, i)), a
    );
  }
  deleteProperty(t, n) {
    const i = J(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && i && $e(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!wt(n) || !gr.has(n)) && we(t, "has", n), i;
  }
  ownKeys(t) {
    return we(t, "iterate", W(t) ? "length" : dt), Reflect.ownKeys(t);
  }
}
class Xl extends mr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Jl = new vr(),
  Zl = new Xl(),
  Ql = new vr(!0);
const Vi = (e) => e,
  Nn = (e) => Reflect.getPrototypeOf(e);
function ln(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = Z(e),
    r = Z(t);
  n || (tt(t, r) && we(s, "get", t), we(s, "get", r));
  const { has: l } = Nn(s),
    a = i ? Vi : n ? Gi : Ut;
  if (l.call(s, t)) return a(e.get(t));
  if (l.call(s, r)) return a(e.get(r));
  e !== s && e.get(t);
}
function on(e, t = !1) {
  const n = this.__v_raw,
    i = Z(n),
    s = Z(e);
  return (
    t || (tt(e, s) && we(i, "has", e), we(i, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function an(e, t = !1) {
  return (
    (e = e.__v_raw), !t && we(Z(e), "iterate", dt), Reflect.get(e, "size", e)
  );
}
function hs(e) {
  e = Z(e);
  const t = Z(this);
  return Nn(t).has.call(t, e) || (t.add(e), $e(t, "add", e, e)), this;
}
function gs(e, t) {
  t = Z(t);
  const n = Z(this),
    { has: i, get: s } = Nn(n);
  let r = i.call(n, e);
  r || ((e = Z(e)), (r = i.call(n, e)));
  const l = s.call(n, e);
  return (
    n.set(e, t), r ? tt(t, l) && $e(n, "set", e, t) : $e(n, "add", e, t), this
  );
}
function ms(e) {
  const t = Z(this),
    { has: n, get: i } = Nn(t);
  let s = n.call(t, e);
  s || ((e = Z(e)), (s = n.call(t, e))), i && i.call(t, e);
  const r = t.delete(e);
  return s && $e(t, "delete", e, void 0), r;
}
function vs() {
  const e = Z(this),
    t = e.size !== 0,
    n = e.clear();
  return t && $e(e, "clear", void 0, void 0), n;
}
function fn(e, t) {
  return function (i, s) {
    const r = this,
      l = r.__v_raw,
      a = Z(l),
      o = t ? Vi : e ? Gi : Ut;
    return (
      !e && we(a, "iterate", dt), l.forEach((c, f) => i.call(s, o(c), o(f), r))
    );
  };
}
function cn(e, t, n) {
  return function (...i) {
    const s = this.__v_raw,
      r = Z(s),
      l = xt(r),
      a = e === "entries" || (e === Symbol.iterator && l),
      o = e === "keys" && l,
      c = s[e](...i),
      f = n ? Vi : t ? Gi : Ut;
    return (
      !t && we(r, "iterate", o ? hi : dt),
      {
        next() {
          const { value: u, done: g } = c.next();
          return g
            ? { value: u, done: g }
            : { value: a ? [f(u[0]), f(u[1])] : f(u), done: g };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ke(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function eo() {
  const e = {
      get(r) {
        return ln(this, r);
      },
      get size() {
        return an(this);
      },
      has: on,
      add: hs,
      set: gs,
      delete: ms,
      clear: vs,
      forEach: fn(!1, !1),
    },
    t = {
      get(r) {
        return ln(this, r, !1, !0);
      },
      get size() {
        return an(this);
      },
      has: on,
      add: hs,
      set: gs,
      delete: ms,
      clear: vs,
      forEach: fn(!1, !0),
    },
    n = {
      get(r) {
        return ln(this, r, !0);
      },
      get size() {
        return an(this, !0);
      },
      has(r) {
        return on.call(this, r, !0);
      },
      add: ke("add"),
      set: ke("set"),
      delete: ke("delete"),
      clear: ke("clear"),
      forEach: fn(!0, !1),
    },
    i = {
      get(r) {
        return ln(this, r, !0, !0);
      },
      get size() {
        return an(this, !0);
      },
      has(r) {
        return on.call(this, r, !0);
      },
      add: ke("add"),
      set: ke("set"),
      delete: ke("delete"),
      clear: ke("clear"),
      forEach: fn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = cn(r, !1, !1)),
        (n[r] = cn(r, !0, !1)),
        (t[r] = cn(r, !1, !0)),
        (i[r] = cn(r, !0, !0));
    }),
    [e, n, t, i]
  );
}
const [to, no, io, so] = eo();
function Hi(e, t) {
  const n = t ? (e ? so : io) : e ? no : to;
  return (i, s, r) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? i
      : Reflect.get(J(n, s) && s in i ? n : i, s, r);
}
const ro = { get: Hi(!1, !1) },
  lo = { get: Hi(!1, !0) },
  oo = { get: Hi(!0, !1) };
const wr = new WeakMap(),
  yr = new WeakMap(),
  br = new WeakMap(),
  ao = new WeakMap();
function fo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function co(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fo(Bl(e));
}
function $i(e) {
  return Wt(e) ? e : ji(e, !1, Jl, ro, wr);
}
function uo(e) {
  return ji(e, !1, Ql, lo, yr);
}
function Sr(e) {
  return ji(e, !0, Zl, oo, br);
}
function ji(e, t, n, i, s) {
  if (!ne(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = s.get(e);
  if (r) return r;
  const l = co(e);
  if (l === 0) return e;
  const a = new Proxy(e, l === 2 ? i : n);
  return s.set(e, a), a;
}
function Dt(e) {
  return Wt(e) ? Dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Wt(e) {
  return !!(e && e.__v_isReadonly);
}
function En(e) {
  return !!(e && e.__v_isShallow);
}
function Tr(e) {
  return e ? !!e.__v_raw : !1;
}
function Z(e) {
  const t = e && e.__v_raw;
  return t ? Z(t) : e;
}
function po(e) {
  return Object.isExtensible(e) && sr(e, "__v_skip", !0), e;
}
const Ut = (e) => (ne(e) ? $i(e) : e),
  Gi = (e) => (ne(e) ? Sr(e) : e);
class xr {
  constructor(t, n, i, s) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Ni(
        () => t(this._value),
        () => Vt(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = i);
  }
  get value() {
    const t = Z(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        tt(t._value, (t._value = t.effect.run())) &&
        Vt(t, 4),
      ki(t),
      t.effect._dirtyLevel >= 2 && Vt(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function ho(e, t, n = !1) {
  let i, s;
  const r = U(e);
  return (
    r ? ((i = e), (s = Pe)) : ((i = e.get), (s = e.set)),
    new xr(i, s, r || !s, n)
  );
}
function ki(e) {
  var t;
  Qe &&
    ut &&
    ((e = Z(e)),
    dr(
      ut,
      (t = e.dep) != null
        ? t
        : (e.dep = hr(() => (e.dep = void 0), e instanceof xr ? e : void 0))
    ));
}
function Vt(e, t = 4, n) {
  e = Z(e);
  const i = e.dep;
  i && pr(i, t);
}
function he(e) {
  return !!(e && e.__v_isRef === !0);
}
function ce(e) {
  return Er(e, !1);
}
function Hc(e) {
  return Er(e, !0);
}
function Er(e, t) {
  return he(e) ? e : new go(e, t);
}
class go {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Z(t)),
      (this._value = n ? t : Ut(t));
  }
  get value() {
    return ki(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || En(t) || Wt(t);
    (t = n ? t : Z(t)),
      tt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Ut(t)), Vt(this, 4));
  }
}
function _r(e) {
  return he(e) ? e.value : e;
}
function $c(e) {
  return U(e) ? e() : _r(e);
}
const mo = {
  get: (e, t, n) => _r(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return he(s) && !he(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, i);
  },
};
function Cr(e) {
  return Dt(e) ? e : new Proxy(e, mo);
}
class vo {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: i } = t(
      () => ki(this),
      () => Vt(this)
    );
    (this._get = n), (this._set = i);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function jc(e) {
  return new vo(e);
}
class wo {
  constructor(t, n, i) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = i),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Ul(Z(this._object), this._key);
  }
}
class yo {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function Gc(e, t, n) {
  return he(e)
    ? e
    : U(e)
    ? new yo(e)
    : ne(e) && arguments.length > 1
    ? bo(e, t, n)
    : ce(e);
}
function bo(e, t, n) {
  const i = e[t];
  return he(i) ? i : new wo(e, t, n);
}
/**
 * @vue/runtime-core v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function et(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    At(s, t, n);
  }
}
function Ie(e, t, n, i) {
  if (U(e)) {
    const s = et(e, t, n, i);
    return (
      s &&
        Ri(s) &&
        s.catch((r) => {
          At(r, t, n);
        }),
      s
    );
  }
  if (W(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++) s.push(Ie(e[r], t, n, i));
    return s;
  }
}
function At(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, l, a) === !1) return;
      }
      r = r.parent;
    }
    const o = t.appContext.config.errorHandler;
    if (o) {
      it(), et(o, null, 10, [e, l, a]), st();
      return;
    }
  }
  So(e, n, s, i);
}
function So(e, t, n, i = !0) {
  console.error(e);
}
let Kt = !1,
  gi = !1;
const de = [];
let Ne = 0;
const _t = [];
let qe = null,
  ft = 0;
const Mr = Promise.resolve();
let Wi = null;
function Pr(e) {
  const t = Wi || Mr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function To(e) {
  let t = Ne + 1,
    n = de.length;
  for (; t < n; ) {
    const i = (t + n) >>> 1,
      s = de[i],
      r = qt(s);
    r < e || (r === e && s.pre) ? (t = i + 1) : (n = i);
  }
  return t;
}
function zn(e) {
  (!de.length || !de.includes(e, Kt && e.allowRecurse ? Ne + 1 : Ne)) &&
    (e.id == null ? de.push(e) : de.splice(To(e.id), 0, e), Or());
}
function Or() {
  !Kt && !gi && ((gi = !0), (Wi = Mr.then(Ir)));
}
function xo(e) {
  const t = de.indexOf(e);
  t > Ne && de.splice(t, 1);
}
function mi(e) {
  W(e)
    ? _t.push(...e)
    : (!qe || !qe.includes(e, e.allowRecurse ? ft + 1 : ft)) && _t.push(e),
    Or();
}
function ws(e, t, n = Kt ? Ne + 1 : 0) {
  for (; n < de.length; n++) {
    const i = de[n];
    if (i && i.pre) {
      if (e && i.id !== e.uid) continue;
      de.splice(n, 1), n--, i();
    }
  }
}
function _n(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort((n, i) => qt(n) - qt(i));
    if (((_t.length = 0), qe)) {
      qe.push(...t);
      return;
    }
    for (qe = t, ft = 0; ft < qe.length; ft++) qe[ft]();
    (qe = null), (ft = 0);
  }
}
const qt = (e) => (e.id == null ? 1 / 0 : e.id),
  Eo = (e, t) => {
    const n = qt(e) - qt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Ir(e) {
  (gi = !1), (Kt = !0), de.sort(Eo);
  try {
    for (Ne = 0; Ne < de.length; Ne++) {
      const t = de[Ne];
      t && t.active !== !1 && et(t, null, 14);
    }
  } finally {
    (Ne = 0),
      (de.length = 0),
      _n(),
      (Kt = !1),
      (Wi = null),
      (de.length || _t.length) && Ir();
  }
}
function _o(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || ie;
  let s = n;
  const r = t.startsWith("update:"),
    l = r && t.slice(7);
  if (l && l in i) {
    const f = `${l === "modelValue" ? "model" : l}Modifiers`,
      { number: u, trim: g } = i[f] || ie;
    g && (s = n.map((p) => (te(p) ? p.trim() : p))), u && (s = n.map(Nl));
  }
  let a,
    o = i[(a = Un(t))] || i[(a = Un(ze(t)))];
  !o && r && (o = i[(a = Un(nt(t)))]), o && Ie(o, e, 6, s);
  const c = i[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Ie(c, e, 6, s);
  }
}
function Ar(e, t, n = !1) {
  const i = t.emitsCache,
    s = i.get(e);
  if (s !== void 0) return s;
  const r = e.emits;
  let l = {},
    a = !1;
  if (!U(e)) {
    const o = (c) => {
      const f = Ar(c, t, !0);
      f && ((a = !0), oe(l, f));
    };
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o);
  }
  return !r && !a
    ? (ne(e) && i.set(e, null), null)
    : (W(r) ? r.forEach((o) => (l[o] = null)) : oe(l, r),
      ne(e) && i.set(e, l),
      l);
}
function Dn(e, t) {
  return !e || !Jt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      J(e, t[0].toLowerCase() + t.slice(1)) || J(e, nt(t)) || J(e, t));
}
let le = null,
  Vn = null;
function Cn(e) {
  const t = le;
  return (le = e), (Vn = (e && e.type.__scopeId) || null), t;
}
function kc(e) {
  Vn = e;
}
function Wc() {
  Vn = null;
}
function Co(e, t = le, n) {
  if (!t || e._n) return e;
  const i = (...s) => {
    i._d && Bs(-1);
    const r = Cn(t);
    let l;
    try {
      l = e(...s);
    } finally {
      Cn(r), i._d && Bs(1);
    }
    return l;
  };
  return (i._n = !0), (i._c = !0), (i._d = !0), i;
}
function qn(e) {
  const {
      type: t,
      vnode: n,
      proxy: i,
      withProxy: s,
      propsOptions: [r],
      slots: l,
      attrs: a,
      emit: o,
      render: c,
      renderCache: f,
      props: u,
      data: g,
      setupState: p,
      ctx: y,
      inheritAttrs: x,
    } = e,
    L = Cn(e);
  let P, S;
  try {
    if (n.shapeFlag & 4) {
      const m = s || i,
        b = m;
      (P = Ce(c.call(b, m, f, u, p, g, y))), (S = a);
    } else {
      const m = t;
      (P = Ce(
        m.length > 1 ? m(u, { attrs: a, slots: l, emit: o }) : m(u, null)
      )),
        (S = t.props ? a : Po(a));
    }
  } catch (m) {
    (Gt.length = 0), At(m, e, 1), (P = re(pe));
  }
  let d = P;
  if (S && x !== !1) {
    const m = Object.keys(S),
      { shapeFlag: b } = d;
    m.length &&
      b & 7 &&
      (r && m.some(Li) && (S = Oo(S, r)), (d = je(d, S, !1, !0)));
  }
  return (
    n.dirs &&
      ((d = je(d, null, !1, !0)),
      (d.dirs = d.dirs ? d.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (d.transition = n.transition),
    (P = d),
    Cn(L),
    P
  );
}
function Mo(e, t = !0) {
  let n;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (It(s)) {
      if (s.type !== pe || s.children === "v-if") {
        if (n) return;
        n = s;
      }
    } else return;
  }
  return n;
}
const Po = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Jt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Oo = (e, t) => {
    const n = {};
    for (const i in e) (!Li(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
function Io(e, t, n) {
  const { props: i, children: s, component: r } = e,
    { props: l, children: a, patchFlag: o } = t,
    c = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && o >= 0) {
    if (o & 1024) return !0;
    if (o & 16) return i ? ys(i, l, c) : !!l;
    if (o & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const g = f[u];
        if (l[g] !== i[g] && !Dn(c, g)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : i === l
      ? !1
      : i
      ? l
        ? ys(i, l, c)
        : !0
      : !!l;
  return !1;
}
function ys(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !Dn(n, r)) return !0;
  }
  return !1;
}
function Ui({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if ((i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Ki = "components",
  Ao = "directives";
function Uc(e, t) {
  return qi(Ki, e, !0, t) || e;
}
const Lr = Symbol.for("v-ndc");
function Kc(e) {
  return te(e) ? qi(Ki, e, !1) || e : e || Lr;
}
function qc(e) {
  return qi(Ao, e);
}
function qi(e, t, n = !0, i = !1) {
  const s = le || ae;
  if (s) {
    const r = s.type;
    if (e === Ki) {
      const a = Mi(r, !1);
      if (a && (a === t || a === ze(t) || a === Bn(ze(t)))) return r;
    }
    const l = bs(s[e] || r[e], t) || bs(s.appContext[e], t);
    return !l && i ? r : l;
  }
}
function bs(e, t) {
  return e && (e[t] || e[ze(t)] || e[Bn(ze(t))]);
}
const Br = (e) => e.__isSuspense;
let vi = 0;
const Lo = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, i, s, r, l, a, o, c) {
      if (e == null) Bo(t, n, i, s, r, l, a, o, c);
      else {
        if (r && r.deps > 0 && !e.suspense.isInFallback) {
          (t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
          return;
        }
        Ro(e, t, n, i, s, l, a, o, c);
      }
    },
    hydrate: Fo,
    create: Yi,
    normalize: No,
  },
  Yc = Lo;
function Yt(e, t) {
  const n = e.props && e.props[t];
  U(n) && n();
}
function Bo(e, t, n, i, s, r, l, a, o) {
  const {
      p: c,
      o: { createElement: f },
    } = o,
    u = f("div"),
    g = (e.suspense = Yi(e, s, i, t, u, n, r, l, a, o));
  c(null, (g.pendingBranch = e.ssContent), u, null, i, g, r, l),
    g.deps > 0
      ? (Yt(e, "onPending"),
        Yt(e, "onFallback"),
        c(null, e.ssFallback, t, n, i, null, r, l),
        Ct(g, e.ssFallback))
      : g.resolve(!1, !0);
}
function Ro(e, t, n, i, s, r, l, a, { p: o, um: c, o: { createElement: f } }) {
  const u = (t.suspense = e.suspense);
  (u.vnode = t), (t.el = e.el);
  const g = t.ssContent,
    p = t.ssFallback,
    { activeBranch: y, pendingBranch: x, isInFallback: L, isHydrating: P } = u;
  if (x)
    (u.pendingBranch = g),
      Le(g, x)
        ? (o(x, g, u.hiddenContainer, null, s, u, r, l, a),
          u.deps <= 0
            ? u.resolve()
            : L && (P || (o(y, p, n, i, s, null, r, l, a), Ct(u, p))))
        : ((u.pendingId = vi++),
          P ? ((u.isHydrating = !1), (u.activeBranch = x)) : c(x, s, u),
          (u.deps = 0),
          (u.effects.length = 0),
          (u.hiddenContainer = f("div")),
          L
            ? (o(null, g, u.hiddenContainer, null, s, u, r, l, a),
              u.deps <= 0
                ? u.resolve()
                : (o(y, p, n, i, s, null, r, l, a), Ct(u, p)))
            : y && Le(g, y)
            ? (o(y, g, n, i, s, u, r, l, a), u.resolve(!0))
            : (o(null, g, u.hiddenContainer, null, s, u, r, l, a),
              u.deps <= 0 && u.resolve()));
  else if (y && Le(g, y)) o(y, g, n, i, s, u, r, l, a), Ct(u, g);
  else if (
    (Yt(t, "onPending"),
    (u.pendingBranch = g),
    g.shapeFlag & 512
      ? (u.pendingId = g.component.suspenseId)
      : (u.pendingId = vi++),
    o(null, g, u.hiddenContainer, null, s, u, r, l, a),
    u.deps <= 0)
  )
    u.resolve();
  else {
    const { timeout: S, pendingId: d } = u;
    S > 0
      ? setTimeout(() => {
          u.pendingId === d && u.fallback(p);
        }, S)
      : S === 0 && u.fallback(p);
  }
}
function Yi(e, t, n, i, s, r, l, a, o, c, f = !1) {
  const {
    p: u,
    m: g,
    um: p,
    n: y,
    o: { parentNode: x, remove: L },
  } = c;
  let P;
  const S = zo(e);
  S && t && t.pendingBranch && ((P = t.pendingId), t.deps++);
  const d = e.props ? rr(e.props.timeout) : void 0,
    m = r,
    b = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: l,
      container: i,
      hiddenContainer: s,
      deps: 0,
      pendingId: vi++,
      timeout: typeof d == "number" ? d : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !f,
      isHydrating: f,
      isUnmounted: !1,
      effects: [],
      resolve(T = !1, _ = !1) {
        const {
          vnode: E,
          activeBranch: w,
          pendingBranch: B,
          pendingId: O,
          effects: M,
          parentComponent: D,
          container: Y,
        } = b;
        let ee = !1;
        b.isHydrating
          ? (b.isHydrating = !1)
          : T ||
            ((ee = w && B.transition && B.transition.mode === "out-in"),
            ee &&
              (w.transition.afterLeave = () => {
                O === b.pendingId && (g(B, Y, r === m ? y(w) : r, 0), mi(M));
              }),
            w && (x(w.el) !== b.hiddenContainer && (r = y(w)), p(w, D, b, !0)),
            ee || g(B, Y, r, 0)),
          Ct(b, B),
          (b.pendingBranch = null),
          (b.isInFallback = !1);
        let $ = b.parent,
          q = !1;
        for (; $; ) {
          if ($.pendingBranch) {
            $.effects.push(...M), (q = !0);
            break;
          }
          $ = $.parent;
        }
        !q && !ee && mi(M),
          (b.effects = []),
          S &&
            t &&
            t.pendingBranch &&
            P === t.pendingId &&
            (t.deps--, t.deps === 0 && !_ && t.resolve()),
          Yt(E, "onResolve");
      },
      fallback(T) {
        if (!b.pendingBranch) return;
        const {
          vnode: _,
          activeBranch: E,
          parentComponent: w,
          container: B,
          namespace: O,
        } = b;
        Yt(_, "onFallback");
        const M = y(E),
          D = () => {
            b.isInFallback && (u(null, T, B, M, w, null, O, a, o), Ct(b, T));
          },
          Y = T.transition && T.transition.mode === "out-in";
        Y && (E.transition.afterLeave = D),
          (b.isInFallback = !0),
          p(E, w, null, !0),
          Y || D();
      },
      move(T, _, E) {
        b.activeBranch && g(b.activeBranch, T, _, E), (b.container = T);
      },
      next() {
        return b.activeBranch && y(b.activeBranch);
      },
      registerDep(T, _) {
        const E = !!b.pendingBranch;
        E && b.deps++;
        const w = T.vnode.el;
        T.asyncDep
          .catch((B) => {
            At(B, T, 0);
          })
          .then((B) => {
            if (T.isUnmounted || b.isUnmounted || b.pendingId !== T.suspenseId)
              return;
            T.asyncResolved = !0;
            const { vnode: O } = T;
            Ci(T, B, !1), w && (O.el = w);
            const M = !w && T.subTree.el;
            _(T, O, x(w || T.subTree.el), w ? null : y(T.subTree), b, l, o),
              M && L(M),
              Ui(T, O.el),
              E && --b.deps === 0 && b.resolve();
          });
      },
      unmount(T, _) {
        (b.isUnmounted = !0),
          b.activeBranch && p(b.activeBranch, n, T, _),
          b.pendingBranch && p(b.pendingBranch, n, T, _);
      },
    };
  return b;
}
function Fo(e, t, n, i, s, r, l, a, o) {
  const c = (t.suspense = Yi(
      t,
      i,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      s,
      r,
      l,
      a,
      !0
    )),
    f = o(e, (c.pendingBranch = t.ssContent), n, c, r, l);
  return c.deps === 0 && c.resolve(!1, !0), f;
}
function No(e) {
  const { shapeFlag: t, children: n } = e,
    i = t & 32;
  (e.ssContent = Ss(i ? n.default : n)),
    (e.ssFallback = i ? Ss(n.fallback) : re(pe));
}
function Ss(e) {
  let t;
  if (U(e)) {
    const n = Ot && e._c;
    n && ((e._d = !1), ts()), (e = e()), n && ((e._d = !0), (t = Oe), il());
  }
  return (
    W(e) && (e = Mo(e)),
    (e = Ce(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Rr(e, t) {
  t && t.pendingBranch
    ? W(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : mi(e);
}
function Ct(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: i } = e;
  let s = t.el;
  for (; !s && t.component; ) (t = t.component.subTree), (s = t.el);
  (n.el = s), i && i.subTree === n && ((i.vnode.el = s), Ui(i, s));
}
function zo(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Do = Symbol.for("v-scx"),
  Vo = () => wn(Do);
function Xc(e, t) {
  return Xi(e, null, t);
}
const un = {};
function Ht(e, t, n) {
  return Xi(e, t, n);
}
function Xi(
  e,
  t,
  { immediate: n, deep: i, flush: s, once: r, onTrack: l, onTrigger: a } = ie
) {
  if (t && r) {
    const T = t;
    t = (..._) => {
      T(..._), b();
    };
  }
  const o = ae,
    c = (T) => (i === !0 ? T : ct(T, i === !1 ? 1 : void 0));
  let f,
    u = !1,
    g = !1;
  if (
    (he(e)
      ? ((f = () => e.value), (u = En(e)))
      : Dt(e)
      ? ((f = () => c(e)), (u = !0))
      : W(e)
      ? ((g = !0),
        (u = e.some((T) => Dt(T) || En(T))),
        (f = () =>
          e.map((T) => {
            if (he(T)) return T.value;
            if (Dt(T)) return c(T);
            if (U(T)) return et(T, o, 2);
          })))
      : U(e)
      ? t
        ? (f = () => et(e, o, 2))
        : (f = () => (p && p(), Ie(e, o, 3, [y])))
      : (f = Pe),
    t && i)
  ) {
    const T = f;
    f = () => ct(T());
  }
  let p,
    y = (T) => {
      p = d.onStop = () => {
        et(T, o, 4), (p = d.onStop = void 0);
      };
    },
    x;
  if (nn)
    if (
      ((y = Pe),
      t ? n && Ie(t, o, 3, [f(), g ? [] : void 0, y]) : f(),
      s === "sync")
    ) {
      const T = Vo();
      x = T.__watcherHandles || (T.__watcherHandles = []);
    } else return Pe;
  let L = g ? new Array(e.length).fill(un) : un;
  const P = () => {
    if (!(!d.active || !d.dirty))
      if (t) {
        const T = d.run();
        (i || u || (g ? T.some((_, E) => tt(_, L[E])) : tt(T, L))) &&
          (p && p(),
          Ie(t, o, 3, [T, L === un ? void 0 : g && L[0] === un ? [] : L, y]),
          (L = T));
      } else d.run();
  };
  P.allowRecurse = !!t;
  let S;
  s === "sync"
    ? (S = P)
    : s === "post"
    ? (S = () => ue(P, o && o.suspense))
    : ((P.pre = !0), o && (P.id = o.uid), (S = () => zn(P)));
  const d = new Ni(f, Pe, S),
    m = kl(),
    b = () => {
      d.stop(), m && Bi(m.effects, d);
    };
  return (
    t
      ? n
        ? P()
        : (L = d.run())
      : s === "post"
      ? ue(d.run.bind(d), o && o.suspense)
      : d.run(),
    x && x.push(b),
    b
  );
}
function Ho(e, t, n) {
  const i = this.proxy,
    s = te(e) ? (e.includes(".") ? Fr(i, e) : () => i[e]) : e.bind(i, i);
  let r;
  U(t) ? (r = t) : ((r = t.handler), (n = t));
  const l = mt(this),
    a = Xi(s, r.bind(i), n);
  return l(), a;
}
function Fr(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++) i = i[n[s]];
    return i;
  };
}
function ct(e, t = 1 / 0, n) {
  if (t <= 0 || !ne(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, he(e))) ct(e.value, t, n);
  else if (W(e)) for (let i = 0; i < e.length; i++) ct(e[i], t, n);
  else if (tr(e) || xt(e))
    e.forEach((i) => {
      ct(i, t, n);
    });
  else if (ir(e)) for (const i in e) ct(e[i], t, n);
  return e;
}
function Jc(e, t) {
  if (le === null) return e;
  const n = jn(le) || le.proxy,
    i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, l, a, o = ie] = t[s];
    r &&
      (U(r) && (r = { mounted: r, updated: r }),
      r.deep && ct(l),
      i.push({
        dir: r,
        instance: n,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: o,
      }));
  }
  return e;
}
function Fe(e, t, n, i) {
  const s = e.dirs,
    r = t && t.dirs;
  for (let l = 0; l < s.length; l++) {
    const a = s[l];
    r && (a.oldValue = r[l].value);
    let o = a.dir[i];
    o && (it(), Ie(o, n, 8, [e.el, a, e, t]), st());
  }
}
const Ye = Symbol("_leaveCb"),
  dn = Symbol("_enterCb");
function $o() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    en(() => {
      e.isMounted = !0;
    }),
    tn(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const _e = [Function, Array],
  Nr = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: _e,
    onEnter: _e,
    onAfterEnter: _e,
    onEnterCancelled: _e,
    onBeforeLeave: _e,
    onLeave: _e,
    onAfterLeave: _e,
    onLeaveCancelled: _e,
    onBeforeAppear: _e,
    onAppear: _e,
    onAfterAppear: _e,
    onAppearCancelled: _e,
  },
  jo = {
    name: "BaseTransition",
    props: Nr,
    setup(e, { slots: t }) {
      const n = is(),
        i = $o();
      return () => {
        const s = t.default && Dr(t.default(), !0);
        if (!s || !s.length) return;
        let r = s[0];
        if (s.length > 1) {
          for (const g of s)
            if (g.type !== pe) {
              r = g;
              break;
            }
        }
        const l = Z(e),
          { mode: a } = l;
        if (i.isLeaving) return Yn(r);
        const o = Ts(r);
        if (!o) return Yn(r);
        const c = wi(o, l, i, n);
        Mn(o, c);
        const f = n.subTree,
          u = f && Ts(f);
        if (u && u.type !== pe && !Le(o, u)) {
          const g = wi(u, l, i, n);
          if ((Mn(u, g), a === "out-in" && o.type !== pe))
            return (
              (i.isLeaving = !0),
              (g.afterLeave = () => {
                (i.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
              }),
              Yn(r)
            );
          a === "in-out" &&
            o.type !== pe &&
            (g.delayLeave = (p, y, x) => {
              const L = zr(i, u);
              (L[String(u.key)] = u),
                (p[Ye] = () => {
                  y(), (p[Ye] = void 0), delete c.delayedLeave;
                }),
                (c.delayedLeave = x);
            });
        }
        return r;
      };
    },
  },
  Go = jo;
function zr(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || ((i = Object.create(null)), n.set(t.type, i)), i;
}
function wi(e, t, n, i) {
  const {
      appear: s,
      mode: r,
      persisted: l = !1,
      onBeforeEnter: a,
      onEnter: o,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: u,
      onLeave: g,
      onAfterLeave: p,
      onLeaveCancelled: y,
      onBeforeAppear: x,
      onAppear: L,
      onAfterAppear: P,
      onAppearCancelled: S,
    } = t,
    d = String(e.key),
    m = zr(n, e),
    b = (E, w) => {
      E && Ie(E, i, 9, w);
    },
    T = (E, w) => {
      const B = w[1];
      b(E, w),
        W(E) ? E.every((O) => O.length <= 1) && B() : E.length <= 1 && B();
    },
    _ = {
      mode: r,
      persisted: l,
      beforeEnter(E) {
        let w = a;
        if (!n.isMounted)
          if (s) w = x || a;
          else return;
        E[Ye] && E[Ye](!0);
        const B = m[d];
        B && Le(e, B) && B.el[Ye] && B.el[Ye](), b(w, [E]);
      },
      enter(E) {
        let w = o,
          B = c,
          O = f;
        if (!n.isMounted)
          if (s) (w = L || o), (B = P || c), (O = S || f);
          else return;
        let M = !1;
        const D = (E[dn] = (Y) => {
          M ||
            ((M = !0),
            Y ? b(O, [E]) : b(B, [E]),
            _.delayedLeave && _.delayedLeave(),
            (E[dn] = void 0));
        });
        w ? T(w, [E, D]) : D();
      },
      leave(E, w) {
        const B = String(e.key);
        if ((E[dn] && E[dn](!0), n.isUnmounting)) return w();
        b(u, [E]);
        let O = !1;
        const M = (E[Ye] = (D) => {
          O ||
            ((O = !0),
            w(),
            D ? b(y, [E]) : b(p, [E]),
            (E[Ye] = void 0),
            m[B] === e && delete m[B]);
        });
        (m[B] = e), g ? T(g, [E, M]) : M();
      },
      clone(E) {
        return wi(E, t, n, i);
      },
    };
  return _;
}
function Yn(e) {
  if (Qt(e)) return (e = je(e)), (e.children = null), e;
}
function Ts(e) {
  if (!Qt(e)) return e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && U(n.default)) return n.default();
  }
}
function Mn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Mn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Dr(e, t = !1, n) {
  let i = [],
    s = 0;
  for (let r = 0; r < e.length; r++) {
    let l = e[r];
    const a = n == null ? l.key : String(n) + String(l.key != null ? l.key : r);
    l.type === ve
      ? (l.patchFlag & 128 && s++, (i = i.concat(Dr(l.children, t, a))))
      : (t || l.type !== pe) && i.push(a != null ? je(l, { key: a }) : l);
  }
  if (s > 1) for (let r = 0; r < i.length; r++) i[r].patchFlag = -2;
  return i;
}
/*! #__NO_SIDE_EFFECTS__ */ function ko(e, t) {
  return U(e) ? oe({ name: e.name }, t, { setup: e }) : e;
}
const pt = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ function Zc(e) {
  U(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: i,
    delay: s = 200,
    timeout: r,
    suspensible: l = !0,
    onError: a,
  } = e;
  let o = null,
    c,
    f = 0;
  const u = () => (f++, (o = null), g()),
    g = () => {
      let p;
      return (
        o ||
        (p = o =
          t()
            .catch((y) => {
              if (((y = y instanceof Error ? y : new Error(String(y))), a))
                return new Promise((x, L) => {
                  a(
                    y,
                    () => x(u()),
                    () => L(y),
                    f + 1
                  );
                });
              throw y;
            })
            .then((y) =>
              p !== o && o
                ? o
                : (y &&
                    (y.__esModule || y[Symbol.toStringTag] === "Module") &&
                    (y = y.default),
                  (c = y),
                  y)
            ))
      );
    };
  return ko({
    name: "AsyncComponentWrapper",
    __asyncLoader: g,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const p = ae;
      if (c) return () => Xn(c, p);
      const y = (S) => {
        (o = null), At(S, p, 13, !i);
      };
      if ((l && p.suspense) || nn)
        return g()
          .then((S) => () => Xn(S, p))
          .catch((S) => (y(S), () => (i ? re(i, { error: S }) : null)));
      const x = ce(!1),
        L = ce(),
        P = ce(!!s);
      return (
        s &&
          setTimeout(() => {
            P.value = !1;
          }, s),
        r != null &&
          setTimeout(() => {
            if (!x.value && !L.value) {
              const S = new Error(`Async component timed out after ${r}ms.`);
              y(S), (L.value = S);
            }
          }, r),
        g()
          .then(() => {
            (x.value = !0),
              p.parent &&
                Qt(p.parent.vnode) &&
                ((p.parent.effect.dirty = !0), zn(p.parent.update));
          })
          .catch((S) => {
            y(S), (L.value = S);
          }),
        () => {
          if (x.value && c) return Xn(c, p);
          if (L.value && i) return re(i, { error: L.value });
          if (n && !P.value) return re(n);
        }
      );
    },
  });
}
function Xn(e, t) {
  const { ref: n, props: i, children: s, ce: r } = t.vnode,
    l = re(e, i, s);
  return (l.ref = n), (l.ce = r), delete t.vnode.ce, l;
}
const Qt = (e) => e.type.__isKeepAlive,
  Wo = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = is(),
        i = n.ctx;
      if (!i.renderer)
        return () => {
          const S = t.default && t.default();
          return S && S.length === 1 ? S[0] : S;
        };
      const s = new Map(),
        r = new Set();
      let l = null;
      const a = n.suspense,
        {
          renderer: {
            p: o,
            m: c,
            um: f,
            o: { createElement: u },
          },
        } = i,
        g = u("div");
      (i.activate = (S, d, m, b, T) => {
        const _ = S.component;
        c(S, d, m, 0, a),
          o(_.vnode, S, d, m, _, a, b, S.slotScopeIds, T),
          ue(() => {
            (_.isDeactivated = !1), _.a && zt(_.a);
            const E = S.props && S.props.onVnodeMounted;
            E && me(E, _.parent, S);
          }, a);
      }),
        (i.deactivate = (S) => {
          const d = S.component;
          c(S, g, null, 1, a),
            ue(() => {
              d.da && zt(d.da);
              const m = S.props && S.props.onVnodeUnmounted;
              m && me(m, d.parent, S), (d.isDeactivated = !0);
            }, a);
        });
      function p(S) {
        Jn(S), f(S, n, a, !0);
      }
      function y(S) {
        s.forEach((d, m) => {
          const b = Mi(d.type);
          b && (!S || !S(b)) && x(m);
        });
      }
      function x(S) {
        const d = s.get(S);
        !l || !Le(d, l) ? p(d) : l && Jn(l), s.delete(S), r.delete(S);
      }
      Ht(
        () => [e.include, e.exclude],
        ([S, d]) => {
          S && y((m) => Ft(S, m)), d && y((m) => !Ft(d, m));
        },
        { flush: "post", deep: !0 }
      );
      let L = null;
      const P = () => {
        L != null && s.set(L, Zn(n.subTree));
      };
      return (
        en(P),
        $n(P),
        tn(() => {
          s.forEach((S) => {
            const { subTree: d, suspense: m } = n,
              b = Zn(d);
            if (S.type === b.type && S.key === b.key) {
              Jn(b);
              const T = b.component.da;
              T && ue(T, m);
              return;
            }
            p(S);
          });
        }),
        () => {
          if (((L = null), !t.default)) return null;
          const S = t.default(),
            d = S[0];
          if (S.length > 1) return (l = null), S;
          if (!It(d) || (!(d.shapeFlag & 4) && !(d.shapeFlag & 128)))
            return (l = null), d;
          let m = Zn(d);
          const b = m.type,
            T = Mi(pt(m) ? m.type.__asyncResolved || {} : b),
            { include: _, exclude: E, max: w } = e;
          if ((_ && (!T || !Ft(_, T))) || (E && T && Ft(E, T)))
            return (l = m), d;
          const B = m.key == null ? b : m.key,
            O = s.get(B);
          return (
            m.el && ((m = je(m)), d.shapeFlag & 128 && (d.ssContent = m)),
            (L = B),
            O
              ? ((m.el = O.el),
                (m.component = O.component),
                m.transition && Mn(m, m.transition),
                (m.shapeFlag |= 512),
                r.delete(B),
                r.add(B))
              : (r.add(B),
                w && r.size > parseInt(w, 10) && x(r.values().next().value)),
            (m.shapeFlag |= 256),
            (l = m),
            Br(d.type) ? d : m
          );
        }
      );
    },
  },
  Qc = Wo;
function Ft(e, t) {
  return W(e)
    ? e.some((n) => Ft(n, t))
    : te(e)
    ? e.split(",").includes(t)
    : Ll(e)
    ? e.test(t)
    : !1;
}
function Uo(e, t) {
  Vr(e, "a", t);
}
function Ko(e, t) {
  Vr(e, "da", t);
}
function Vr(e, t, n = ae) {
  const i =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Hn(t, i, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Qt(s.parent.vnode) && qo(i, t, n, s), (s = s.parent);
  }
}
function qo(e, t, n, i) {
  const s = Hn(t, e, i, !0);
  $r(() => {
    Bi(i[t], s);
  }, n);
}
function Jn(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Zn(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Hn(e, t, n = ae, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...l) => {
          if (n.isUnmounted) return;
          it();
          const a = mt(n),
            o = Ie(t, n, e, l);
          return a(), st(), o;
        });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const Ge =
    (e) =>
    (t, n = ae) =>
      (!nn || e === "sp") && Hn(e, (...i) => t(...i), n),
  Yo = Ge("bm"),
  en = Ge("m"),
  Hr = Ge("bu"),
  $n = Ge("u"),
  tn = Ge("bum"),
  $r = Ge("um"),
  Xo = Ge("sp"),
  Jo = Ge("rtg"),
  Zo = Ge("rtc");
function Qo(e, t = ae) {
  Hn("ec", e, t);
}
function eu(e, t, n, i) {
  let s;
  const r = n;
  if (W(e) || te(e)) {
    s = new Array(e.length);
    for (let l = 0, a = e.length; l < a; l++) s[l] = t(e[l], l, void 0, r);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, r);
  } else if (ne(e))
    if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, r));
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let a = 0, o = l.length; a < o; a++) {
        const c = l[a];
        s[a] = t(e[c], c, a, r);
      }
    }
  else s = [];
  return s;
}
function tu(e, t, n = {}, i, s) {
  if (le.isCE || (le.parent && pt(le.parent) && le.parent.isCE))
    return re("slot", n, i);
  let r = e[t];
  r && r._c && (r._d = !1), ts();
  const l = r && jr(r(n)),
    a = rl(
      ve,
      { key: n.key || (l && l.key) || `_${t}` },
      l || [],
      l && e._ === 1 ? 64 : -2
    );
  return (
    a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    a
  );
}
function jr(e) {
  return e.some((t) =>
    It(t) ? !(t.type === pe || (t.type === ve && !jr(t.children))) : !0
  )
    ? e
    : null;
}
const yi = (e) => (e ? (fl(e) ? jn(e) || e.proxy : yi(e.parent)) : null),
  $t = oe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => yi(e.parent),
    $root: (e) => yi(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ji(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), zn(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Pr.bind(e.proxy)),
    $watch: (e) => Ho.bind(e),
  }),
  Qn = (e, t) => e !== ie && !e.__isScriptSetup && J(e, t),
  ea = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: i,
        data: s,
        props: r,
        accessCache: l,
        type: a,
        appContext: o,
      } = e;
      let c;
      if (t[0] !== "$") {
        const p = l[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return i[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (Qn(i, t)) return (l[t] = 1), i[t];
          if (s !== ie && J(s, t)) return (l[t] = 2), s[t];
          if ((c = e.propsOptions[0]) && J(c, t)) return (l[t] = 3), r[t];
          if (n !== ie && J(n, t)) return (l[t] = 4), n[t];
          bi && (l[t] = 0);
        }
      }
      const f = $t[t];
      let u, g;
      if (f) return t === "$attrs" && we(e.attrs, "get", ""), f(e);
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== ie && J(n, t)) return (l[t] = 4), n[t];
      if (((g = o.config.globalProperties), J(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: s, ctx: r } = e;
      return Qn(s, t)
        ? ((s[t] = n), !0)
        : i !== ie && J(i, t)
        ? ((i[t] = n), !0)
        : J(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: i,
          appContext: s,
          propsOptions: r,
        },
      },
      l
    ) {
      let a;
      return (
        !!n[l] ||
        (e !== ie && J(e, l)) ||
        Qn(t, l) ||
        ((a = r[0]) && J(a, l)) ||
        J(i, l) ||
        J($t, l) ||
        J(s.config.globalProperties, l)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : J(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function xs(e) {
  return W(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function nu(e) {
  const t = is();
  let n = e();
  return (
    _i(),
    Ri(n) &&
      (n = n.catch((i) => {
        throw (mt(t), i);
      })),
    [n, () => mt(t)]
  );
}
let bi = !0;
function ta(e) {
  const t = Ji(e),
    n = e.proxy,
    i = e.ctx;
  (bi = !1), t.beforeCreate && Es(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: r,
    methods: l,
    watch: a,
    provide: o,
    inject: c,
    created: f,
    beforeMount: u,
    mounted: g,
    beforeUpdate: p,
    updated: y,
    activated: x,
    deactivated: L,
    beforeDestroy: P,
    beforeUnmount: S,
    destroyed: d,
    unmounted: m,
    render: b,
    renderTracked: T,
    renderTriggered: _,
    errorCaptured: E,
    serverPrefetch: w,
    expose: B,
    inheritAttrs: O,
    components: M,
    directives: D,
    filters: Y,
  } = t;
  if ((c && na(c, i, null), l))
    for (const q in l) {
      const j = l[q];
      U(j) && (i[q] = j.bind(n));
    }
  if (s) {
    const q = s.call(n, n);
    ne(q) && (e.data = $i(q));
  }
  if (((bi = !0), r))
    for (const q in r) {
      const j = r[q],
        xe = U(j) ? j.bind(n, n) : U(j.get) ? j.get.bind(n, n) : Pe,
        rt = !U(j) && U(j.set) ? j.set.bind(n) : Pe,
        Be = ul({ get: xe, set: rt });
      Object.defineProperty(i, q, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (Ee) => (Be.value = Ee),
      });
    }
  if (a) for (const q in a) Gr(a[q], i, n, q);
  if (o) {
    const q = U(o) ? o.call(n) : o;
    Reflect.ownKeys(q).forEach((j) => {
      Zi(j, q[j]);
    });
  }
  f && Es(f, e, "c");
  function $(q, j) {
    W(j) ? j.forEach((xe) => q(xe.bind(n))) : j && q(j.bind(n));
  }
  if (
    ($(Yo, u),
    $(en, g),
    $(Hr, p),
    $($n, y),
    $(Uo, x),
    $(Ko, L),
    $(Qo, E),
    $(Zo, T),
    $(Jo, _),
    $(tn, S),
    $($r, m),
    $(Xo, w),
    W(B))
  )
    if (B.length) {
      const q = e.exposed || (e.exposed = {});
      B.forEach((j) => {
        Object.defineProperty(q, j, {
          get: () => n[j],
          set: (xe) => (n[j] = xe),
        });
      });
    } else e.exposed || (e.exposed = {});
  b && e.render === Pe && (e.render = b),
    O != null && (e.inheritAttrs = O),
    M && (e.components = M),
    D && (e.directives = D);
}
function na(e, t, n = Pe) {
  W(e) && (e = Si(e));
  for (const i in e) {
    const s = e[i];
    let r;
    ne(s)
      ? "default" in s
        ? (r = wn(s.from || i, s.default, !0))
        : (r = wn(s.from || i))
      : (r = wn(s)),
      he(r)
        ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (l) => (r.value = l),
          })
        : (t[i] = r);
  }
}
function Es(e, t, n) {
  Ie(W(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Gr(e, t, n, i) {
  const s = i.includes(".") ? Fr(n, i) : () => n[i];
  if (te(e)) {
    const r = t[e];
    U(r) && Ht(s, r);
  } else if (U(e)) Ht(s, e.bind(n));
  else if (ne(e))
    if (W(e)) e.forEach((r) => Gr(r, t, n, i));
    else {
      const r = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(r) && Ht(s, r, e);
    }
}
function Ji(e) {
  const t = e.type,
    { mixins: n, extends: i } = t,
    {
      mixins: s,
      optionsCache: r,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    a = r.get(t);
  let o;
  return (
    a
      ? (o = a)
      : !s.length && !n && !i
      ? (o = t)
      : ((o = {}), s.length && s.forEach((c) => Pn(o, c, l, !0)), Pn(o, t, l)),
    ne(t) && r.set(t, o),
    o
  );
}
function Pn(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && Pn(e, r, n, !0), s && s.forEach((l) => Pn(e, l, n, !0));
  for (const l in t)
    if (!(i && l === "expose")) {
      const a = ia[l] || (n && n[l]);
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const ia = {
  data: _s,
  props: Cs,
  emits: Cs,
  methods: Nt,
  computed: Nt,
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  components: Nt,
  directives: Nt,
  watch: ra,
  provide: _s,
  inject: sa,
};
function _s(e, t) {
  return t
    ? e
      ? function () {
          return oe(
            U(e) ? e.call(this, this) : e,
            U(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function sa(e, t) {
  return Nt(Si(e), Si(t));
}
function Si(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Nt(e, t) {
  return e ? oe(Object.create(null), e, t) : t;
}
function Cs(e, t) {
  return e
    ? W(e) && W(t)
      ? [...new Set([...e, ...t])]
      : oe(Object.create(null), xs(e), xs(t ?? {}))
    : t;
}
function ra(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = oe(Object.create(null), e);
  for (const i in t) n[i] = ge(e[i], t[i]);
  return n;
}
function kr() {
  return {
    app: null,
    config: {
      isNativeTag: Il,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let la = 0;
function oa(e, t) {
  return function (i, s = null) {
    U(i) || (i = oe({}, i)), s != null && !ne(s) && (s = null);
    const r = kr(),
      l = new WeakSet();
    let a = !1;
    const o = (r.app = {
      _uid: la++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Ba,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          l.has(c) ||
            (c && U(c.install)
              ? (l.add(c), c.install(o, ...f))
              : U(c) && (l.add(c), c(o, ...f))),
          o
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), o;
      },
      component(c, f) {
        return f ? ((r.components[c] = f), o) : r.components[c];
      },
      directive(c, f) {
        return f ? ((r.directives[c] = f), o) : r.directives[c];
      },
      mount(c, f, u) {
        if (!a) {
          const g = re(i, s);
          return (
            (g.appContext = r),
            u === !0 ? (u = "svg") : u === !1 && (u = void 0),
            f && t ? t(g, c) : e(g, c, u),
            (a = !0),
            (o._container = c),
            (c.__vue_app__ = o),
            jn(g.component) || g.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, o._container), delete o._container.__vue_app__);
      },
      provide(c, f) {
        return (r.provides[c] = f), o;
      },
      runWithContext(c) {
        const f = Mt;
        Mt = o;
        try {
          return c();
        } finally {
          Mt = f;
        }
      },
    });
    return o;
  };
}
let Mt = null;
function Zi(e, t) {
  if (ae) {
    let n = ae.provides;
    const i = ae.parent && ae.parent.provides;
    i === n && (n = ae.provides = Object.create(i)), (n[e] = t);
  }
}
function wn(e, t, n = !1) {
  const i = ae || le;
  if (i || Mt) {
    const s = i
      ? i.parent == null
        ? i.vnode.appContext && i.vnode.appContext.provides
        : i.parent.provides
      : Mt._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && U(t) ? t.call(i && i.proxy) : t;
  }
}
function iu() {
  return !!(ae || le || Mt);
}
const Wr = {},
  Ur = () => Object.create(Wr),
  Kr = (e) => Object.getPrototypeOf(e) === Wr;
function aa(e, t, n, i = !1) {
  const s = {},
    r = Ur();
  (e.propsDefaults = Object.create(null)), qr(e, t, s, r);
  for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
  n ? (e.props = i ? s : uo(s)) : e.type.props ? (e.props = s) : (e.props = r),
    (e.attrs = r);
}
function fa(e, t, n, i) {
  const {
      props: s,
      attrs: r,
      vnode: { patchFlag: l },
    } = e,
    a = Z(s),
    [o] = e.propsOptions;
  let c = !1;
  if ((i || l > 0) && !(l & 16)) {
    if (l & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let g = f[u];
        if (Dn(e.emitsOptions, g)) continue;
        const p = t[g];
        if (o)
          if (J(r, g)) p !== r[g] && ((r[g] = p), (c = !0));
          else {
            const y = ze(g);
            s[y] = Ti(o, a, y, p, e, !1);
          }
        else p !== r[g] && ((r[g] = p), (c = !0));
      }
    }
  } else {
    qr(e, t, s, r) && (c = !0);
    let f;
    for (const u in a)
      (!t || (!J(t, u) && ((f = nt(u)) === u || !J(t, f)))) &&
        (o
          ? n &&
            (n[u] !== void 0 || n[f] !== void 0) &&
            (s[u] = Ti(o, a, u, void 0, e, !0))
          : delete s[u]);
    if (r !== a) for (const u in r) (!t || !J(t, u)) && (delete r[u], (c = !0));
  }
  c && $e(e.attrs, "set", "");
}
function qr(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let l = !1,
    a;
  if (t)
    for (let o in t) {
      if (Et(o)) continue;
      const c = t[o];
      let f;
      s && J(s, (f = ze(o)))
        ? !r || !r.includes(f)
          ? (n[f] = c)
          : ((a || (a = {}))[f] = c)
        : Dn(e.emitsOptions, o) ||
          ((!(o in i) || c !== i[o]) && ((i[o] = c), (l = !0)));
    }
  if (r) {
    const o = Z(n),
      c = a || ie;
    for (let f = 0; f < r.length; f++) {
      const u = r[f];
      n[u] = Ti(s, o, u, c[u], e, !J(c, u));
    }
  }
  return l;
}
function Ti(e, t, n, i, s, r) {
  const l = e[n];
  if (l != null) {
    const a = J(l, "default");
    if (a && i === void 0) {
      const o = l.default;
      if (l.type !== Function && !l.skipFactory && U(o)) {
        const { propsDefaults: c } = s;
        if (n in c) i = c[n];
        else {
          const f = mt(s);
          (i = c[n] = o.call(null, t)), f();
        }
      } else i = o;
    }
    l[0] &&
      (r && !a ? (i = !1) : l[1] && (i === "" || i === nt(n)) && (i = !0));
  }
  return i;
}
function Yr(e, t, n = !1) {
  const i = t.propsCache,
    s = i.get(e);
  if (s) return s;
  const r = e.props,
    l = {},
    a = [];
  let o = !1;
  if (!U(e)) {
    const f = (u) => {
      o = !0;
      const [g, p] = Yr(u, t, !0);
      oe(l, g), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!r && !o) return ne(e) && i.set(e, Tt), Tt;
  if (W(r))
    for (let f = 0; f < r.length; f++) {
      const u = ze(r[f]);
      Ms(u) && (l[u] = ie);
    }
  else if (r)
    for (const f in r) {
      const u = ze(f);
      if (Ms(u)) {
        const g = r[f],
          p = (l[u] = W(g) || U(g) ? { type: g } : oe({}, g));
        if (p) {
          const y = Is(Boolean, p.type),
            x = Is(String, p.type);
          (p[0] = y > -1),
            (p[1] = x < 0 || y < x),
            (y > -1 || J(p, "default")) && a.push(u);
        }
      }
    }
  const c = [l, a];
  return ne(e) && i.set(e, c), c;
}
function Ms(e) {
  return e[0] !== "$" && !Et(e);
}
function Ps(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function Os(e, t) {
  return Ps(e) === Ps(t);
}
function Is(e, t) {
  return W(t) ? t.findIndex((n) => Os(n, e)) : U(t) && Os(t, e) ? 0 : -1;
}
const Xr = (e) => e[0] === "_" || e === "$stable",
  Qi = (e) => (W(e) ? e.map(Ce) : [Ce(e)]),
  ca = (e, t, n) => {
    if (t._n) return t;
    const i = Co((...s) => Qi(t(...s)), n);
    return (i._c = !1), i;
  },
  Jr = (e, t, n) => {
    const i = e._ctx;
    for (const s in e) {
      if (Xr(s)) continue;
      const r = e[s];
      if (U(r)) t[s] = ca(s, r, i);
      else if (r != null) {
        const l = Qi(r);
        t[s] = () => l;
      }
    }
  },
  Zr = (e, t) => {
    const n = Qi(t);
    e.slots.default = () => n;
  },
  ua = (e, t) => {
    const n = (e.slots = Ur());
    if (e.vnode.shapeFlag & 32) {
      const i = t._;
      i ? (oe(n, t), sr(n, "_", i, !0)) : Jr(t, n);
    } else t && Zr(e, t);
  },
  da = (e, t, n) => {
    const { vnode: i, slots: s } = e;
    let r = !0,
      l = ie;
    if (i.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (r = !1)
          : (oe(s, t), !n && a === 1 && delete s._)
        : ((r = !t.$stable), Jr(t, s)),
        (l = t);
    } else t && (Zr(e, t), (l = { default: 1 }));
    if (r) for (const a in s) !Xr(a) && l[a] == null && delete s[a];
  };
function On(e, t, n, i, s = !1) {
  if (W(e)) {
    e.forEach((g, p) => On(g, t && (W(t) ? t[p] : t), n, i, s));
    return;
  }
  if (pt(i) && !s) return;
  const r = i.shapeFlag & 4 ? jn(i.component) || i.component.proxy : i.el,
    l = s ? null : r,
    { i: a, r: o } = e,
    c = t && t.r,
    f = a.refs === ie ? (a.refs = {}) : a.refs,
    u = a.setupState;
  if (
    (c != null &&
      c !== o &&
      (te(c)
        ? ((f[c] = null), J(u, c) && (u[c] = null))
        : he(c) && (c.value = null)),
    U(o))
  )
    et(o, a, 12, [l, f]);
  else {
    const g = te(o),
      p = he(o);
    if (g || p) {
      const y = () => {
        if (e.f) {
          const x = g ? (J(u, o) ? u[o] : f[o]) : o.value;
          s
            ? W(x) && Bi(x, r)
            : W(x)
            ? x.includes(r) || x.push(r)
            : g
            ? ((f[o] = [r]), J(u, o) && (u[o] = f[o]))
            : ((o.value = [r]), e.k && (f[e.k] = o.value));
        } else
          g
            ? ((f[o] = l), J(u, o) && (u[o] = l))
            : p && ((o.value = l), e.k && (f[e.k] = l));
      };
      l ? ((y.id = -1), ue(y, n)) : y();
    }
  }
}
let We = !1;
const pa = (e) =>
    e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
  ha = (e) => e.namespaceURI.includes("MathML"),
  pn = (e) => {
    if (pa(e)) return "svg";
    if (ha(e)) return "mathml";
  },
  hn = (e) => e.nodeType === 8;
function ga(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: i,
        createText: s,
        nextSibling: r,
        parentNode: l,
        remove: a,
        insert: o,
        createComment: c,
      },
    } = e,
    f = (d, m) => {
      if (!m.hasChildNodes()) {
        n(null, d, m), _n(), (m._vnode = d);
        return;
      }
      (We = !1),
        u(m.firstChild, d, null, null, null),
        _n(),
        (m._vnode = d),
        We && console.error("Hydration completed but contains mismatches.");
    },
    u = (d, m, b, T, _, E = !1) => {
      E = E || !!m.dynamicChildren;
      const w = hn(d) && d.data === "[",
        B = () => x(d, m, b, T, _, w),
        { type: O, ref: M, shapeFlag: D, patchFlag: Y } = m;
      let ee = d.nodeType;
      (m.el = d), Y === -2 && ((E = !1), (m.dynamicChildren = null));
      let $ = null;
      switch (O) {
        case Pt:
          ee !== 3
            ? m.children === ""
              ? (o((m.el = s("")), l(d), d), ($ = d))
              : ($ = B())
            : (d.data !== m.children && ((We = !0), (d.data = m.children)),
              ($ = r(d)));
          break;
        case pe:
          S(d)
            ? (($ = r(d)), P((m.el = d.content.firstChild), d, b))
            : ee !== 8 || w
            ? ($ = B())
            : ($ = r(d));
          break;
        case yn:
          if ((w && ((d = r(d)), (ee = d.nodeType)), ee === 1 || ee === 3)) {
            $ = d;
            const q = !m.children.length;
            for (let j = 0; j < m.staticCount; j++)
              q && (m.children += $.nodeType === 1 ? $.outerHTML : $.data),
                j === m.staticCount - 1 && (m.anchor = $),
                ($ = r($));
            return w ? r($) : $;
          } else B();
          break;
        case ve:
          w ? ($ = y(d, m, b, T, _, E)) : ($ = B());
          break;
        default:
          if (D & 1)
            (ee !== 1 || m.type.toLowerCase() !== d.tagName.toLowerCase()) &&
            !S(d)
              ? ($ = B())
              : ($ = g(d, m, b, T, _, E));
          else if (D & 6) {
            m.slotScopeIds = _;
            const q = l(d);
            if (
              (w
                ? ($ = L(d))
                : hn(d) && d.data === "teleport start"
                ? ($ = L(d, d.data, "teleport end"))
                : ($ = r(d)),
              t(m, q, null, b, T, pn(q), E),
              pt(m))
            ) {
              let j;
              w
                ? ((j = re(ve)),
                  (j.anchor = $ ? $.previousSibling : q.lastChild))
                : (j = d.nodeType === 3 ? al("") : re("div")),
                (j.el = d),
                (m.component.subTree = j);
            }
          } else
            D & 64
              ? ee !== 8
                ? ($ = B())
                : ($ = m.type.hydrate(d, m, b, T, _, E, e, p))
              : D & 128 &&
                ($ = m.type.hydrate(d, m, b, T, pn(l(d)), _, E, e, u));
      }
      return M != null && On(M, null, T, m), $;
    },
    g = (d, m, b, T, _, E) => {
      E = E || !!m.dynamicChildren;
      const {
          type: w,
          props: B,
          patchFlag: O,
          shapeFlag: M,
          dirs: D,
          transition: Y,
        } = m,
        ee = w === "input" || w === "option";
      if (ee || O !== -1) {
        D && Fe(m, null, b, "created");
        let $ = !1;
        if (S(d)) {
          $ = el(T, Y) && b && b.vnode.props && b.vnode.props.appear;
          const j = d.content.firstChild;
          $ && Y.beforeEnter(j), P(j, d, b), (m.el = d = j);
        }
        if (M & 16 && !(B && (B.innerHTML || B.textContent))) {
          let j = p(d.firstChild, m, d, b, T, _, E);
          for (; j; ) {
            We = !0;
            const xe = j;
            (j = j.nextSibling), a(xe);
          }
        } else
          M & 8 &&
            d.textContent !== m.children &&
            ((We = !0), (d.textContent = m.children));
        if (B)
          if (ee || !E || O & 48)
            for (const j in B)
              ((ee && (j.endsWith("value") || j === "indeterminate")) ||
                (Jt(j) && !Et(j)) ||
                j[0] === ".") &&
                i(d, j, null, B[j], void 0, void 0, b);
          else B.onClick && i(d, "onClick", null, B.onClick, void 0, void 0, b);
        let q;
        (q = B && B.onVnodeBeforeMount) && me(q, b, m),
          D && Fe(m, null, b, "beforeMount"),
          ((q = B && B.onVnodeMounted) || D || $) &&
            Rr(() => {
              q && me(q, b, m), $ && Y.enter(d), D && Fe(m, null, b, "mounted");
            }, T);
      }
      return d.nextSibling;
    },
    p = (d, m, b, T, _, E, w) => {
      w = w || !!m.dynamicChildren;
      const B = m.children,
        O = B.length;
      for (let M = 0; M < O; M++) {
        const D = w ? B[M] : (B[M] = Ce(B[M]));
        if (d) d = u(d, D, T, _, E, w);
        else {
          if (D.type === Pt && !D.children) continue;
          (We = !0), n(null, D, b, null, T, _, pn(b), E);
        }
      }
      return d;
    },
    y = (d, m, b, T, _, E) => {
      const { slotScopeIds: w } = m;
      w && (_ = _ ? _.concat(w) : w);
      const B = l(d),
        O = p(r(d), m, B, b, T, _, E);
      return O && hn(O) && O.data === "]"
        ? r((m.anchor = O))
        : ((We = !0), o((m.anchor = c("]")), B, O), O);
    },
    x = (d, m, b, T, _, E) => {
      if (((We = !0), (m.el = null), E)) {
        const O = L(d);
        for (;;) {
          const M = r(d);
          if (M && M !== O) a(M);
          else break;
        }
      }
      const w = r(d),
        B = l(d);
      return a(d), n(null, m, B, w, b, T, pn(B), _), w;
    },
    L = (d, m = "[", b = "]") => {
      let T = 0;
      for (; d; )
        if (((d = r(d)), d && hn(d) && (d.data === m && T++, d.data === b))) {
          if (T === 0) return r(d);
          T--;
        }
      return d;
    },
    P = (d, m, b) => {
      const T = m.parentNode;
      T && T.replaceChild(d, m);
      let _ = b;
      for (; _; )
        _.vnode.el === m && (_.vnode.el = _.subTree.el = d), (_ = _.parent);
    },
    S = (d) => d.nodeType === 1 && d.tagName.toLowerCase() === "template";
  return [f, u];
}
const ue = Rr;
function ma(e) {
  return Qr(e);
}
function va(e) {
  return Qr(e, ga);
}
function Qr(e, t) {
  const n = lr();
  n.__VUE__ = !0;
  const {
      insert: i,
      remove: s,
      patchProp: r,
      createElement: l,
      createText: a,
      createComment: o,
      setText: c,
      setElementText: f,
      parentNode: u,
      nextSibling: g,
      setScopeId: p = Pe,
      insertStaticContent: y,
    } = e,
    x = (
      h,
      v,
      C,
      I = null,
      A = null,
      N = null,
      V = void 0,
      F = null,
      z = !!v.dynamicChildren
    ) => {
      if (h === v) return;
      h && !Le(h, v) && ((I = rn(h)), Ee(h, A, N, !0), (h = null)),
        v.patchFlag === -2 && ((z = !1), (v.dynamicChildren = null));
      const { type: R, ref: H, shapeFlag: k } = v;
      switch (R) {
        case Pt:
          L(h, v, C, I);
          break;
        case pe:
          P(h, v, C, I);
          break;
        case yn:
          h == null && S(v, C, I, V);
          break;
        case ve:
          M(h, v, C, I, A, N, V, F, z);
          break;
        default:
          k & 1
            ? b(h, v, C, I, A, N, V, F, z)
            : k & 6
            ? D(h, v, C, I, A, N, V, F, z)
            : (k & 64 || k & 128) && R.process(h, v, C, I, A, N, V, F, z, bt);
      }
      H != null && A && On(H, h && h.ref, N, v || h, !v);
    },
    L = (h, v, C, I) => {
      if (h == null) i((v.el = a(v.children)), C, I);
      else {
        const A = (v.el = h.el);
        v.children !== h.children && c(A, v.children);
      }
    },
    P = (h, v, C, I) => {
      h == null ? i((v.el = o(v.children || "")), C, I) : (v.el = h.el);
    },
    S = (h, v, C, I) => {
      [h.el, h.anchor] = y(h.children, v, C, I, h.el, h.anchor);
    },
    d = ({ el: h, anchor: v }, C, I) => {
      let A;
      for (; h && h !== v; ) (A = g(h)), i(h, C, I), (h = A);
      i(v, C, I);
    },
    m = ({ el: h, anchor: v }) => {
      let C;
      for (; h && h !== v; ) (C = g(h)), s(h), (h = C);
      s(v);
    },
    b = (h, v, C, I, A, N, V, F, z) => {
      v.type === "svg" ? (V = "svg") : v.type === "math" && (V = "mathml"),
        h == null ? T(v, C, I, A, N, V, F, z) : w(h, v, A, N, V, F, z);
    },
    T = (h, v, C, I, A, N, V, F) => {
      let z, R;
      const { props: H, shapeFlag: k, transition: G, dirs: K } = h;
      if (
        ((z = h.el = l(h.type, N, H && H.is, H)),
        k & 8
          ? f(z, h.children)
          : k & 16 && E(h.children, z, null, I, A, ei(h, N), V, F),
        K && Fe(h, null, I, "created"),
        _(z, h, h.scopeId, V, I),
        H)
      ) {
        for (const Q in H)
          Q !== "value" &&
            !Et(Q) &&
            r(z, Q, null, H[Q], N, h.children, I, A, De);
        "value" in H && r(z, "value", null, H.value, N),
          (R = H.onVnodeBeforeMount) && me(R, I, h);
      }
      K && Fe(h, null, I, "beforeMount");
      const X = el(A, G);
      X && G.beforeEnter(z),
        i(z, v, C),
        ((R = H && H.onVnodeMounted) || X || K) &&
          ue(() => {
            R && me(R, I, h), X && G.enter(z), K && Fe(h, null, I, "mounted");
          }, A);
    },
    _ = (h, v, C, I, A) => {
      if ((C && p(h, C), I)) for (let N = 0; N < I.length; N++) p(h, I[N]);
      if (A) {
        let N = A.subTree;
        if (v === N) {
          const V = A.vnode;
          _(h, V, V.scopeId, V.slotScopeIds, A.parent);
        }
      }
    },
    E = (h, v, C, I, A, N, V, F, z = 0) => {
      for (let R = z; R < h.length; R++) {
        const H = (h[R] = F ? Xe(h[R]) : Ce(h[R]));
        x(null, H, v, C, I, A, N, V, F);
      }
    },
    w = (h, v, C, I, A, N, V) => {
      const F = (v.el = h.el);
      let { patchFlag: z, dynamicChildren: R, dirs: H } = v;
      z |= h.patchFlag & 16;
      const k = h.props || ie,
        G = v.props || ie;
      let K;
      if (
        (C && lt(C, !1),
        (K = G.onVnodeBeforeUpdate) && me(K, C, v, h),
        H && Fe(v, h, C, "beforeUpdate"),
        C && lt(C, !0),
        R
          ? B(h.dynamicChildren, R, F, C, I, ei(v, A), N)
          : V || j(h, v, F, null, C, I, ei(v, A), N, !1),
        z > 0)
      ) {
        if (z & 16) O(F, v, k, G, C, I, A);
        else if (
          (z & 2 && k.class !== G.class && r(F, "class", null, G.class, A),
          z & 4 && r(F, "style", k.style, G.style, A),
          z & 8)
        ) {
          const X = v.dynamicProps;
          for (let Q = 0; Q < X.length; Q++) {
            const se = X[Q],
              fe = k[se],
              Ae = G[se];
            (Ae !== fe || se === "value") &&
              r(F, se, fe, Ae, A, h.children, C, I, De);
          }
        }
        z & 1 && h.children !== v.children && f(F, v.children);
      } else !V && R == null && O(F, v, k, G, C, I, A);
      ((K = G.onVnodeUpdated) || H) &&
        ue(() => {
          K && me(K, C, v, h), H && Fe(v, h, C, "updated");
        }, I);
    },
    B = (h, v, C, I, A, N, V) => {
      for (let F = 0; F < v.length; F++) {
        const z = h[F],
          R = v[F],
          H =
            z.el && (z.type === ve || !Le(z, R) || z.shapeFlag & 70)
              ? u(z.el)
              : C;
        x(z, R, H, null, I, A, N, V, !0);
      }
    },
    O = (h, v, C, I, A, N, V) => {
      if (C !== I) {
        if (C !== ie)
          for (const F in C)
            !Et(F) && !(F in I) && r(h, F, C[F], null, V, v.children, A, N, De);
        for (const F in I) {
          if (Et(F)) continue;
          const z = I[F],
            R = C[F];
          z !== R && F !== "value" && r(h, F, R, z, V, v.children, A, N, De);
        }
        "value" in I && r(h, "value", C.value, I.value, V);
      }
    },
    M = (h, v, C, I, A, N, V, F, z) => {
      const R = (v.el = h ? h.el : a("")),
        H = (v.anchor = h ? h.anchor : a(""));
      let { patchFlag: k, dynamicChildren: G, slotScopeIds: K } = v;
      K && (F = F ? F.concat(K) : K),
        h == null
          ? (i(R, C, I), i(H, C, I), E(v.children || [], C, H, A, N, V, F, z))
          : k > 0 && k & 64 && G && h.dynamicChildren
          ? (B(h.dynamicChildren, G, C, A, N, V, F),
            (v.key != null || (A && v === A.subTree)) && es(h, v, !0))
          : j(h, v, C, H, A, N, V, F, z);
    },
    D = (h, v, C, I, A, N, V, F, z) => {
      (v.slotScopeIds = F),
        h == null
          ? v.shapeFlag & 512
            ? A.ctx.activate(v, C, I, V, z)
            : Y(v, C, I, A, N, V, z)
          : ee(h, v, z);
    },
    Y = (h, v, C, I, A, N, V) => {
      const F = (h.component = Ma(h, I, A));
      if ((Qt(h) && (F.ctx.renderer = bt), Pa(F), F.asyncDep)) {
        if ((A && A.registerDep(F, $), !h.el)) {
          const z = (F.subTree = re(pe));
          P(null, z, v, C);
        }
      } else $(F, h, v, C, A, N, V);
    },
    ee = (h, v, C) => {
      const I = (v.component = h.component);
      if (Io(h, v, C))
        if (I.asyncDep && !I.asyncResolved) {
          q(I, v, C);
          return;
        } else (I.next = v), xo(I.update), (I.effect.dirty = !0), I.update();
      else (v.el = h.el), (I.vnode = v);
    },
    $ = (h, v, C, I, A, N, V) => {
      const F = () => {
          if (h.isMounted) {
            let { next: H, bu: k, u: G, parent: K, vnode: X } = h;
            {
              const St = tl(h);
              if (St) {
                H && ((H.el = X.el), q(h, H, V)),
                  St.asyncDep.then(() => {
                    h.isUnmounted || F();
                  });
                return;
              }
            }
            let Q = H,
              se;
            lt(h, !1),
              H ? ((H.el = X.el), q(h, H, V)) : (H = X),
              k && zt(k),
              (se = H.props && H.props.onVnodeBeforeUpdate) && me(se, K, H, X),
              lt(h, !0);
            const fe = qn(h),
              Ae = h.subTree;
            (h.subTree = fe),
              x(Ae, fe, u(Ae.el), rn(Ae), h, A, N),
              (H.el = fe.el),
              Q === null && Ui(h, fe.el),
              G && ue(G, A),
              (se = H.props && H.props.onVnodeUpdated) &&
                ue(() => me(se, K, H, X), A);
          } else {
            let H;
            const { el: k, props: G } = v,
              { bm: K, m: X, parent: Q } = h,
              se = pt(v);
            if (
              (lt(h, !1),
              K && zt(K),
              !se && (H = G && G.onVnodeBeforeMount) && me(H, Q, v),
              lt(h, !0),
              k && Wn)
            ) {
              const fe = () => {
                (h.subTree = qn(h)), Wn(k, h.subTree, h, A, null);
              };
              se
                ? v.type.__asyncLoader().then(() => !h.isUnmounted && fe())
                : fe();
            } else {
              const fe = (h.subTree = qn(h));
              x(null, fe, C, I, h, A, N), (v.el = fe.el);
            }
            if ((X && ue(X, A), !se && (H = G && G.onVnodeMounted))) {
              const fe = v;
              ue(() => me(H, Q, fe), A);
            }
            (v.shapeFlag & 256 ||
              (Q && pt(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
              h.a &&
              ue(h.a, A),
              (h.isMounted = !0),
              (v = C = I = null);
          }
        },
        z = (h.effect = new Ni(F, Pe, () => zn(R), h.scope)),
        R = (h.update = () => {
          z.dirty && z.run();
        });
      (R.id = h.uid), lt(h, !0), R();
    },
    q = (h, v, C) => {
      v.component = h;
      const I = h.vnode.props;
      (h.vnode = v),
        (h.next = null),
        fa(h, v.props, I, C),
        da(h, v.children, C),
        it(),
        ws(h),
        st();
    },
    j = (h, v, C, I, A, N, V, F, z = !1) => {
      const R = h && h.children,
        H = h ? h.shapeFlag : 0,
        k = v.children,
        { patchFlag: G, shapeFlag: K } = v;
      if (G > 0) {
        if (G & 128) {
          rt(R, k, C, I, A, N, V, F, z);
          return;
        } else if (G & 256) {
          xe(R, k, C, I, A, N, V, F, z);
          return;
        }
      }
      K & 8
        ? (H & 16 && De(R, A, N), k !== R && f(C, k))
        : H & 16
        ? K & 16
          ? rt(R, k, C, I, A, N, V, F, z)
          : De(R, A, N, !0)
        : (H & 8 && f(C, ""), K & 16 && E(k, C, I, A, N, V, F, z));
    },
    xe = (h, v, C, I, A, N, V, F, z) => {
      (h = h || Tt), (v = v || Tt);
      const R = h.length,
        H = v.length,
        k = Math.min(R, H);
      let G;
      for (G = 0; G < k; G++) {
        const K = (v[G] = z ? Xe(v[G]) : Ce(v[G]));
        x(h[G], K, C, null, A, N, V, F, z);
      }
      R > H ? De(h, A, N, !0, !1, k) : E(v, C, I, A, N, V, F, z, k);
    },
    rt = (h, v, C, I, A, N, V, F, z) => {
      let R = 0;
      const H = v.length;
      let k = h.length - 1,
        G = H - 1;
      for (; R <= k && R <= G; ) {
        const K = h[R],
          X = (v[R] = z ? Xe(v[R]) : Ce(v[R]));
        if (Le(K, X)) x(K, X, C, null, A, N, V, F, z);
        else break;
        R++;
      }
      for (; R <= k && R <= G; ) {
        const K = h[k],
          X = (v[G] = z ? Xe(v[G]) : Ce(v[G]));
        if (Le(K, X)) x(K, X, C, null, A, N, V, F, z);
        else break;
        k--, G--;
      }
      if (R > k) {
        if (R <= G) {
          const K = G + 1,
            X = K < H ? v[K].el : I;
          for (; R <= G; )
            x(null, (v[R] = z ? Xe(v[R]) : Ce(v[R])), C, X, A, N, V, F, z), R++;
        }
      } else if (R > G) for (; R <= k; ) Ee(h[R], A, N, !0), R++;
      else {
        const K = R,
          X = R,
          Q = new Map();
        for (R = X; R <= G; R++) {
          const ye = (v[R] = z ? Xe(v[R]) : Ce(v[R]));
          ye.key != null && Q.set(ye.key, R);
        }
        let se,
          fe = 0;
        const Ae = G - X + 1;
        let St = !1,
          os = 0;
        const Lt = new Array(Ae);
        for (R = 0; R < Ae; R++) Lt[R] = 0;
        for (R = K; R <= k; R++) {
          const ye = h[R];
          if (fe >= Ae) {
            Ee(ye, A, N, !0);
            continue;
          }
          let Re;
          if (ye.key != null) Re = Q.get(ye.key);
          else
            for (se = X; se <= G; se++)
              if (Lt[se - X] === 0 && Le(ye, v[se])) {
                Re = se;
                break;
              }
          Re === void 0
            ? Ee(ye, A, N, !0)
            : ((Lt[Re - X] = R + 1),
              Re >= os ? (os = Re) : (St = !0),
              x(ye, v[Re], C, null, A, N, V, F, z),
              fe++);
        }
        const as = St ? wa(Lt) : Tt;
        for (se = as.length - 1, R = Ae - 1; R >= 0; R--) {
          const ye = X + R,
            Re = v[ye],
            fs = ye + 1 < H ? v[ye + 1].el : I;
          Lt[R] === 0
            ? x(null, Re, C, fs, A, N, V, F, z)
            : St && (se < 0 || R !== as[se] ? Be(Re, C, fs, 2) : se--);
        }
      }
    },
    Be = (h, v, C, I, A = null) => {
      const { el: N, type: V, transition: F, children: z, shapeFlag: R } = h;
      if (R & 6) {
        Be(h.component.subTree, v, C, I);
        return;
      }
      if (R & 128) {
        h.suspense.move(v, C, I);
        return;
      }
      if (R & 64) {
        V.move(h, v, C, bt);
        return;
      }
      if (V === ve) {
        i(N, v, C);
        for (let k = 0; k < z.length; k++) Be(z[k], v, C, I);
        i(h.anchor, v, C);
        return;
      }
      if (V === yn) {
        d(h, v, C);
        return;
      }
      if (I !== 2 && R & 1 && F)
        if (I === 0) F.beforeEnter(N), i(N, v, C), ue(() => F.enter(N), A);
        else {
          const { leave: k, delayLeave: G, afterLeave: K } = F,
            X = () => i(N, v, C),
            Q = () => {
              k(N, () => {
                X(), K && K();
              });
            };
          G ? G(N, X, Q) : Q();
        }
      else i(N, v, C);
    },
    Ee = (h, v, C, I = !1, A = !1) => {
      const {
        type: N,
        props: V,
        ref: F,
        children: z,
        dynamicChildren: R,
        shapeFlag: H,
        patchFlag: k,
        dirs: G,
      } = h;
      if ((F != null && On(F, null, C, h, !0), H & 256)) {
        v.ctx.deactivate(h);
        return;
      }
      const K = H & 1 && G,
        X = !pt(h);
      let Q;
      if ((X && (Q = V && V.onVnodeBeforeUnmount) && me(Q, v, h), H & 6))
        Ol(h.component, C, I);
      else {
        if (H & 128) {
          h.suspense.unmount(C, I);
          return;
        }
        K && Fe(h, null, v, "beforeUnmount"),
          H & 64
            ? h.type.remove(h, v, C, A, bt, I)
            : R && (N !== ve || (k > 0 && k & 64))
            ? De(R, v, C, !1, !0)
            : ((N === ve && k & 384) || (!A && H & 16)) && De(z, v, C),
          I && sn(h);
      }
      ((X && (Q = V && V.onVnodeUnmounted)) || K) &&
        ue(() => {
          Q && me(Q, v, h), K && Fe(h, null, v, "unmounted");
        }, C);
    },
    sn = (h) => {
      const { type: v, el: C, anchor: I, transition: A } = h;
      if (v === ve) {
        Pl(C, I);
        return;
      }
      if (v === yn) {
        m(h);
        return;
      }
      const N = () => {
        s(C), A && !A.persisted && A.afterLeave && A.afterLeave();
      };
      if (h.shapeFlag & 1 && A && !A.persisted) {
        const { leave: V, delayLeave: F } = A,
          z = () => V(C, N);
        F ? F(h.el, N, z) : z();
      } else N();
    },
    Pl = (h, v) => {
      let C;
      for (; h !== v; ) (C = g(h)), s(h), (h = C);
      s(v);
    },
    Ol = (h, v, C) => {
      const { bum: I, scope: A, update: N, subTree: V, um: F } = h;
      I && zt(I),
        A.stop(),
        N && ((N.active = !1), Ee(V, h, v, C)),
        F && ue(F, v),
        ue(() => {
          h.isUnmounted = !0;
        }, v),
        v &&
          v.pendingBranch &&
          !v.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === v.pendingId &&
          (v.deps--, v.deps === 0 && v.resolve());
    },
    De = (h, v, C, I = !1, A = !1, N = 0) => {
      for (let V = N; V < h.length; V++) Ee(h[V], v, C, I, A);
    },
    rn = (h) =>
      h.shapeFlag & 6
        ? rn(h.component.subTree)
        : h.shapeFlag & 128
        ? h.suspense.next()
        : g(h.anchor || h.el);
  let Gn = !1;
  const ls = (h, v, C) => {
      h == null
        ? v._vnode && Ee(v._vnode, null, null, !0)
        : x(v._vnode || null, h, v, null, null, null, C),
        Gn || ((Gn = !0), ws(), _n(), (Gn = !1)),
        (v._vnode = h);
    },
    bt = {
      p: x,
      um: Ee,
      m: Be,
      r: sn,
      mt: Y,
      mc: E,
      pc: j,
      pbc: B,
      n: rn,
      o: e,
    };
  let kn, Wn;
  return (
    t && ([kn, Wn] = t(bt)), { render: ls, hydrate: kn, createApp: oa(ls, kn) }
  );
}
function ei({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function lt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function el(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function es(e, t, n = !1) {
  const i = e.children,
    s = t.children;
  if (W(i) && W(s))
    for (let r = 0; r < i.length; r++) {
      const l = i[r];
      let a = s[r];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[r] = Xe(s[r])), (a.el = l.el)),
        n || es(l, a)),
        a.type === Pt && (a.el = l.el);
    }
}
function wa(e) {
  const t = e.slice(),
    n = [0];
  let i, s, r, l, a;
  const o = e.length;
  for (i = 0; i < o; i++) {
    const c = e[i];
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        (t[i] = s), n.push(i);
        continue;
      }
      for (r = 0, l = n.length - 1; r < l; )
        (a = (r + l) >> 1), e[n[a]] < c ? (r = a + 1) : (l = a);
      c < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), (n[r] = i));
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; ) (n[r] = l), (l = t[l]);
  return n;
}
function tl(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : tl(t);
}
const ya = (e) => e.__isTeleport,
  jt = (e) => e && (e.disabled || e.disabled === ""),
  As = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  Ls = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  xi = (e, t) => {
    const n = e && e.to;
    return te(n) ? (t ? t(n) : null) : n;
  },
  ba = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, i, s, r, l, a, o, c) {
      const {
          mc: f,
          pc: u,
          pbc: g,
          o: { insert: p, querySelector: y, createText: x, createComment: L },
        } = c,
        P = jt(t.props);
      let { shapeFlag: S, children: d, dynamicChildren: m } = t;
      if (e == null) {
        const b = (t.el = x("")),
          T = (t.anchor = x(""));
        p(b, n, i), p(T, n, i);
        const _ = (t.target = xi(t.props, y)),
          E = (t.targetAnchor = x(""));
        _ &&
          (p(E, _),
          l === "svg" || As(_)
            ? (l = "svg")
            : (l === "mathml" || Ls(_)) && (l = "mathml"));
        const w = (B, O) => {
          S & 16 && f(d, B, O, s, r, l, a, o);
        };
        P ? w(n, T) : _ && w(_, E);
      } else {
        t.el = e.el;
        const b = (t.anchor = e.anchor),
          T = (t.target = e.target),
          _ = (t.targetAnchor = e.targetAnchor),
          E = jt(e.props),
          w = E ? n : T,
          B = E ? b : _;
        if (
          (l === "svg" || As(T)
            ? (l = "svg")
            : (l === "mathml" || Ls(T)) && (l = "mathml"),
          m
            ? (g(e.dynamicChildren, m, w, s, r, l, a), es(e, t, !0))
            : o || u(e, t, w, B, s, r, l, a, !1),
          P)
        )
          E
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : gn(t, n, b, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const O = (t.target = xi(t.props, y));
          O && gn(t, O, null, c, 0);
        } else E && gn(t, T, _, c, 1);
      }
      nl(t);
    },
    remove(e, t, n, i, { um: s, o: { remove: r } }, l) {
      const {
        shapeFlag: a,
        children: o,
        anchor: c,
        targetAnchor: f,
        target: u,
        props: g,
      } = e;
      if ((u && r(f), l && r(c), a & 16)) {
        const p = l || !jt(g);
        for (let y = 0; y < o.length; y++) {
          const x = o[y];
          s(x, t, n, p, !!x.dynamicChildren);
        }
      }
    },
    move: gn,
    hydrate: Sa,
  };
function gn(e, t, n, { o: { insert: i }, m: s }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: l, anchor: a, shapeFlag: o, children: c, props: f } = e,
    u = r === 2;
  if ((u && i(l, t, n), (!u || jt(f)) && o & 16))
    for (let g = 0; g < c.length; g++) s(c[g], t, n, 2);
  u && i(a, t, n);
}
function Sa(
  e,
  t,
  n,
  i,
  s,
  r,
  { o: { nextSibling: l, parentNode: a, querySelector: o } },
  c
) {
  const f = (t.target = xi(t.props, o));
  if (f) {
    const u = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (jt(t.props))
        (t.anchor = c(l(e), t, a(e), n, i, s, r)), (t.targetAnchor = u);
      else {
        t.anchor = l(e);
        let g = u;
        for (; g; )
          if (
            ((g = l(g)), g && g.nodeType === 8 && g.data === "teleport anchor")
          ) {
            (t.targetAnchor = g),
              (f._lpa = t.targetAnchor && l(t.targetAnchor));
            break;
          }
        c(u, t, f, n, i, s, r);
      }
    nl(t);
  }
  return t.anchor && l(t.anchor);
}
const su = ba;
function nl(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const ve = Symbol.for("v-fgt"),
  Pt = Symbol.for("v-txt"),
  pe = Symbol.for("v-cmt"),
  yn = Symbol.for("v-stc"),
  Gt = [];
let Oe = null;
function ts(e = !1) {
  Gt.push((Oe = e ? null : []));
}
function il() {
  Gt.pop(), (Oe = Gt[Gt.length - 1] || null);
}
let Ot = 1;
function Bs(e) {
  Ot += e;
}
function sl(e) {
  return (
    (e.dynamicChildren = Ot > 0 ? Oe || Tt : null),
    il(),
    Ot > 0 && Oe && Oe.push(e),
    e
  );
}
function ru(e, t, n, i, s, r) {
  return sl(ol(e, t, n, i, s, r, !0));
}
function rl(e, t, n, i, s) {
  return sl(re(e, t, n, i, s, !0));
}
function It(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Le(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ll = ({ key: e }) => e ?? null,
  bn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? te(e) || he(e) || U(e)
        ? { i: le, r: e, k: t, f: !!n }
        : e
      : null
  );
function ol(
  e,
  t = null,
  n = null,
  i = 0,
  s = null,
  r = e === ve ? 0 : 1,
  l = !1,
  a = !1
) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ll(t),
    ref: t && bn(t),
    scopeId: Vn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: le,
  };
  return (
    a
      ? (ns(o, n), r & 128 && e.normalize(o))
      : n && (o.shapeFlag |= te(n) ? 8 : 16),
    Ot > 0 &&
      !l &&
      Oe &&
      (o.patchFlag > 0 || r & 6) &&
      o.patchFlag !== 32 &&
      Oe.push(o),
    o
  );
}
const re = Ta;
function Ta(e, t = null, n = null, i = 0, s = null, r = !1) {
  if (((!e || e === Lr) && (e = pe), It(e))) {
    const a = je(e, t, !0);
    return (
      n && ns(a, n),
      Ot > 0 &&
        !r &&
        Oe &&
        (a.shapeFlag & 6 ? (Oe[Oe.indexOf(e)] = a) : Oe.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((La(e) && (e = e.__vccOpts), t)) {
    t = xa(t);
    let { class: a, style: o } = t;
    a && !te(a) && (t.class = Fn(a)),
      ne(o) && (Tr(o) && !W(o) && (o = oe({}, o)), (t.style = Rn(o)));
  }
  const l = te(e) ? 1 : Br(e) ? 128 : ya(e) ? 64 : ne(e) ? 4 : U(e) ? 2 : 0;
  return ol(e, t, n, i, s, l, r, !0);
}
function xa(e) {
  return e ? (Tr(e) || Kr(e) ? oe({}, e) : e) : null;
}
function je(e, t, n = !1, i = !1) {
  const { props: s, ref: r, patchFlag: l, children: a, transition: o } = e,
    c = t ? Ea(s || {}, t) : s,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && ll(c),
      ref:
        t && t.ref
          ? n && r
            ? W(r)
              ? r.concat(bn(t))
              : [r, bn(t)]
            : bn(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ve ? (l === -1 ? 16 : l | 16) : l,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: o,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && je(e.ssContent),
      ssFallback: e.ssFallback && je(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return o && i && (f.transition = o.clone(f)), f;
}
function al(e = " ", t = 0) {
  return re(Pt, null, e, t);
}
function lu(e = "", t = !1) {
  return t ? (ts(), rl(pe, null, e)) : re(pe, null, e);
}
function Ce(e) {
  return e == null || typeof e == "boolean"
    ? re(pe)
    : W(e)
    ? re(ve, null, e.slice())
    : typeof e == "object"
    ? Xe(e)
    : re(Pt, null, String(e));
}
function Xe(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : je(e);
}
function ns(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null) t = null;
  else if (W(t)) n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ns(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Kr(t)
        ? (t._ctx = le)
        : s === 3 &&
          le &&
          (le.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    U(t)
      ? ((t = { default: t, _ctx: le }), (n = 32))
      : ((t = String(t)), i & 64 ? ((n = 16), (t = [al(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ea(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = Fn([t.class, i.class]));
      else if (s === "style") t.style = Rn([t.style, i.style]);
      else if (Jt(s)) {
        const r = t[s],
          l = i[s];
        l &&
          r !== l &&
          !(W(r) && r.includes(l)) &&
          (t[s] = r ? [].concat(r, l) : l);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function me(e, t, n, i = null) {
  Ie(e, t, 7, [n, i]);
}
const _a = kr();
let Ca = 0;
function Ma(e, t, n) {
  const i = e.type,
    s = (t ? t.appContext : e.appContext) || _a,
    r = {
      uid: Ca++,
      vnode: e,
      type: i,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new fr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Yr(i, s),
      emitsOptions: Ar(i, s),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: i.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = _o.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let ae = null;
const is = () => ae || le;
let In, Ei;
{
  const e = lr(),
    t = (n, i) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(i),
        (r) => {
          s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
        }
      );
    };
  (In = t("__VUE_INSTANCE_SETTERS__", (n) => (ae = n))),
    (Ei = t("__VUE_SSR_SETTERS__", (n) => (nn = n)));
}
const mt = (e) => {
    const t = ae;
    return (
      In(e),
      e.scope.on(),
      () => {
        e.scope.off(), In(t);
      }
    );
  },
  _i = () => {
    ae && ae.scope.off(), In(null);
  };
function fl(e) {
  return e.vnode.shapeFlag & 4;
}
let nn = !1;
function Pa(e, t = !1) {
  t && Ei(t);
  const { props: n, children: i } = e.vnode,
    s = fl(e);
  aa(e, n, s, t), ua(e, i);
  const r = s ? Oa(e, t) : void 0;
  return t && Ei(!1), r;
}
function Oa(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, ea));
  const { setup: i } = n;
  if (i) {
    const s = (e.setupContext = i.length > 1 ? Aa(e) : null),
      r = mt(e);
    it();
    const l = et(i, e, 0, [e.props, s]);
    if ((st(), r(), Ri(l))) {
      if ((l.then(_i, _i), t))
        return l
          .then((a) => {
            Ci(e, a, t);
          })
          .catch((a) => {
            At(a, e, 0);
          });
      e.asyncDep = l;
    } else Ci(e, l, t);
  } else cl(e, t);
}
function Ci(e, t, n) {
  U(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ne(t) && (e.setupState = Cr(t)),
    cl(e, n);
}
let Rs;
function cl(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Rs && !i.render) {
      const s = i.template || Ji(e).template;
      if (s) {
        const { isCustomElement: r, compilerOptions: l } = e.appContext.config,
          { delimiters: a, compilerOptions: o } = i,
          c = oe(oe({ isCustomElement: r, delimiters: a }, l), o);
        i.render = Rs(s, c);
      }
    }
    e.render = i.render || Pe;
  }
  {
    const s = mt(e);
    it();
    try {
      ta(e);
    } finally {
      st(), s();
    }
  }
}
const Ia = {
  get(e, t) {
    return we(e, "get", ""), e[t];
  },
};
function Aa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ia),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function jn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Cr(po(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in $t) return $t[n](e);
        },
        has(t, n) {
          return n in t || n in $t;
        },
      }))
    );
}
function Mi(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function La(e) {
  return U(e) && "__vccOpts" in e;
}
const ul = (e, t) => ho(e, t, nn);
function Me(e, t, n) {
  const i = arguments.length;
  return i === 2
    ? ne(t) && !W(t)
      ? It(t)
        ? re(e, null, [t])
        : re(e, t)
      : re(e, null, t)
    : (i > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : i === 3 && It(n) && (n = [n]),
      re(e, t, n));
}
const Ba = "3.4.27";
/**
 * @vue/runtime-dom v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Ra = "http://www.w3.org/2000/svg",
  Fa = "http://www.w3.org/1998/Math/MathML",
  Je = typeof document < "u" ? document : null,
  Fs = Je && Je.createElement("template"),
  Na = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const s =
        t === "svg"
          ? Je.createElementNS(Ra, e)
          : t === "mathml"
          ? Je.createElementNS(Fa, e)
          : Je.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          i &&
          i.multiple != null &&
          s.setAttribute("multiple", i.multiple),
        s
      );
    },
    createText: (e) => Je.createTextNode(e),
    createComment: (e) => Je.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Je.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, s, r) {
      const l = n ? n.previousSibling : t.lastChild;
      if (s && (s === r || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === r || !(s = s.nextSibling));

        );
      else {
        Fs.innerHTML =
          i === "svg"
            ? `<svg>${e}</svg>`
            : i === "mathml"
            ? `<math>${e}</math>`
            : e;
        const a = Fs.content;
        if (i === "svg" || i === "mathml") {
          const o = a.firstChild;
          for (; o.firstChild; ) a.appendChild(o.firstChild);
          a.removeChild(o);
        }
        t.insertBefore(a, n);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Ue = "transition",
  Bt = "animation",
  Xt = Symbol("_vtc"),
  dl = (e, { slots: t }) => Me(Go, za(e), t);
dl.displayName = "Transition";
const pl = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
dl.props = oe({}, Nr, pl);
const ot = (e, t = []) => {
    W(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ns = (e) => (e ? (W(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function za(e) {
  const t = {};
  for (const M in e) M in pl || (t[M] = e[M]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: i,
      duration: s,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: l = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: o = r,
      appearActiveClass: c = l,
      appearToClass: f = a,
      leaveFromClass: u = `${n}-leave-from`,
      leaveActiveClass: g = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`,
    } = e,
    y = Da(s),
    x = y && y[0],
    L = y && y[1],
    {
      onBeforeEnter: P,
      onEnter: S,
      onEnterCancelled: d,
      onLeave: m,
      onLeaveCancelled: b,
      onBeforeAppear: T = P,
      onAppear: _ = S,
      onAppearCancelled: E = d,
    } = t,
    w = (M, D, Y) => {
      at(M, D ? f : a), at(M, D ? c : l), Y && Y();
    },
    B = (M, D) => {
      (M._isLeaving = !1), at(M, u), at(M, p), at(M, g), D && D();
    },
    O = (M) => (D, Y) => {
      const ee = M ? _ : S,
        $ = () => w(D, M, Y);
      ot(ee, [D, $]),
        zs(() => {
          at(D, M ? o : r), Ke(D, M ? f : a), Ns(ee) || Ds(D, i, x, $);
        });
    };
  return oe(t, {
    onBeforeEnter(M) {
      ot(P, [M]), Ke(M, r), Ke(M, l);
    },
    onBeforeAppear(M) {
      ot(T, [M]), Ke(M, o), Ke(M, c);
    },
    onEnter: O(!1),
    onAppear: O(!0),
    onLeave(M, D) {
      M._isLeaving = !0;
      const Y = () => B(M, D);
      Ke(M, u),
        Ke(M, g),
        $a(),
        zs(() => {
          M._isLeaving && (at(M, u), Ke(M, p), Ns(m) || Ds(M, i, L, Y));
        }),
        ot(m, [M, Y]);
    },
    onEnterCancelled(M) {
      w(M, !1), ot(d, [M]);
    },
    onAppearCancelled(M) {
      w(M, !0), ot(E, [M]);
    },
    onLeaveCancelled(M) {
      B(M), ot(b, [M]);
    },
  });
}
function Da(e) {
  if (e == null) return null;
  if (ne(e)) return [ti(e.enter), ti(e.leave)];
  {
    const t = ti(e);
    return [t, t];
  }
}
function ti(e) {
  return rr(e);
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Xt] || (e[Xt] = new Set())).add(t);
}
function at(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Xt];
  n && (n.delete(t), n.size || (e[Xt] = void 0));
}
function zs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Va = 0;
function Ds(e, t, n, i) {
  const s = (e._endId = ++Va),
    r = () => {
      s === e._endId && i();
    };
  if (n) return setTimeout(r, n);
  const { type: l, timeout: a, propCount: o } = Ha(e, t);
  if (!l) return i();
  const c = l + "end";
  let f = 0;
  const u = () => {
      e.removeEventListener(c, g), r();
    },
    g = (p) => {
      p.target === e && ++f >= o && u();
    };
  setTimeout(() => {
    f < o && u();
  }, a + 1),
    e.addEventListener(c, g);
}
function Ha(e, t) {
  const n = window.getComputedStyle(e),
    i = (y) => (n[y] || "").split(", "),
    s = i(`${Ue}Delay`),
    r = i(`${Ue}Duration`),
    l = Vs(s, r),
    a = i(`${Bt}Delay`),
    o = i(`${Bt}Duration`),
    c = Vs(a, o);
  let f = null,
    u = 0,
    g = 0;
  t === Ue
    ? l > 0 && ((f = Ue), (u = l), (g = r.length))
    : t === Bt
    ? c > 0 && ((f = Bt), (u = c), (g = o.length))
    : ((u = Math.max(l, c)),
      (f = u > 0 ? (l > c ? Ue : Bt) : null),
      (g = f ? (f === Ue ? r.length : o.length) : 0));
  const p =
    f === Ue && /\b(transform|all)(,|$)/.test(i(`${Ue}Property`).toString());
  return { type: f, timeout: u, propCount: g, hasTransform: p };
}
function Vs(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, i) => Hs(n) + Hs(e[i])));
}
function Hs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function $a() {
  return document.body.offsetHeight;
}
function ja(e, t, n) {
  const i = e[Xt];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const An = Symbol("_vod"),
  hl = Symbol("_vsh"),
  ou = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[An] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Rt(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n &&
        (i
          ? t
            ? (i.beforeEnter(e), Rt(e, !0), i.enter(e))
            : i.leave(e, () => {
                Rt(e, !1);
              })
          : Rt(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Rt(e, t);
    },
  };
function Rt(e, t) {
  (e.style.display = t ? e[An] : "none"), (e[hl] = !t);
}
const Ga = Symbol(""),
  ka = /(^|;)\s*display\s*:/;
function Wa(e, t, n) {
  const i = e.style,
    s = te(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (te(t))
        for (const l of t.split(";")) {
          const a = l.slice(0, l.indexOf(":")).trim();
          n[a] == null && Sn(i, a, "");
        }
      else for (const l in t) n[l] == null && Sn(i, l, "");
    for (const l in n) l === "display" && (r = !0), Sn(i, l, n[l]);
  } else if (s) {
    if (t !== n) {
      const l = i[Ga];
      l && (n += ";" + l), (i.cssText = n), (r = ka.test(n));
    }
  } else t && e.removeAttribute("style");
  An in e && ((e[An] = r ? i.display : ""), e[hl] && (i.display = "none"));
}
const $s = /\s*!important$/;
function Sn(e, t, n) {
  if (W(n)) n.forEach((i) => Sn(e, t, i));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const i = Ua(e, t);
    $s.test(n)
      ? e.setProperty(nt(i), n.replace($s, ""), "important")
      : (e[i] = n);
  }
}
const js = ["Webkit", "Moz", "ms"],
  ni = {};
function Ua(e, t) {
  const n = ni[t];
  if (n) return n;
  let i = ze(t);
  if (i !== "filter" && i in e) return (ni[t] = i);
  i = Bn(i);
  for (let s = 0; s < js.length; s++) {
    const r = js[s] + i;
    if (r in e) return (ni[t] = r);
  }
  return t;
}
const Gs = "http://www.w3.org/1999/xlink";
function Ka(e, t, n, i, s) {
  if (i && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Gs, t.slice(6, t.length))
      : e.setAttributeNS(Gs, t, n);
  else {
    const r = jl(t);
    n == null || (r && !or(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : n);
  }
}
function qa(e, t, n, i, s, r, l) {
  if (t === "innerHTML" || t === "textContent") {
    i && l(i, s, r), (e[t] = n ?? "");
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
    const c = a === "OPTION" ? e.getAttribute("value") || "" : e.value,
      f = n ?? "";
    (c !== f || !("_value" in e)) && (e.value = f),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = or(n))
      : n == null && c === "string"
      ? ((n = ""), (o = !0))
      : c === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(t);
}
function Ya(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Xa(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const ks = Symbol("_vei");
function Ja(e, t, n, i, s = null) {
  const r = e[ks] || (e[ks] = {}),
    l = r[t];
  if (i && l) l.value = i;
  else {
    const [a, o] = Za(t);
    if (i) {
      const c = (r[t] = tf(i, s));
      Ya(e, a, c, o);
    } else l && (Xa(e, a, l, o), (r[t] = void 0));
  }
}
const Ws = /(?:Once|Passive|Capture)$/;
function Za(e) {
  let t;
  if (Ws.test(e)) {
    t = {};
    let i;
    for (; (i = e.match(Ws)); )
      (e = e.slice(0, e.length - i[0].length)), (t[i[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let ii = 0;
const Qa = Promise.resolve(),
  ef = () => ii || (Qa.then(() => (ii = 0)), (ii = Date.now()));
function tf(e, t) {
  const n = (i) => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= n.attached) return;
    Ie(nf(i, n.value), t, 5, [i]);
  };
  return (n.value = e), (n.attached = ef()), n;
}
function nf(e, t) {
  if (W(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((i) => (s) => !s._stopped && i && i(s))
    );
  } else return t;
}
const Us = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  sf = (e, t, n, i, s, r, l, a, o) => {
    const c = s === "svg";
    t === "class"
      ? ja(e, i, c)
      : t === "style"
      ? Wa(e, n, i)
      : Jt(t)
      ? Li(t) || Ja(e, t, n, i, l)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : rf(e, t, i, c)
        )
      ? qa(e, t, i, r, l, a, o)
      : (t === "true-value"
          ? (e._trueValue = i)
          : t === "false-value" && (e._falseValue = i),
        Ka(e, t, i, c));
  };
function rf(e, t, n, i) {
  if (i)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Us(t) && U(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Us(t) && te(n) ? !1 : t in e;
}
const lf = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  au = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      i = t.join(".");
    return (
      n[i] ||
      (n[i] = (s) => {
        if (!("key" in s)) return;
        const r = nt(s.key);
        if (t.some((l) => l === r || lf[l] === r)) return e(s);
      })
    );
  },
  gl = oe({ patchProp: sf }, Na);
let kt,
  Ks = !1;
function of() {
  return kt || (kt = ma(gl));
}
function af() {
  return (kt = Ks ? kt : va(gl)), (Ks = !0), kt;
}
const fu = (...e) => {
    const t = of().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (i) => {
        const s = vl(i);
        if (!s) return;
        const r = t._component;
        !U(r) && !r.render && !r.template && (r.template = s.innerHTML),
          (s.innerHTML = "");
        const l = n(s, !1, ml(s));
        return (
          s instanceof Element &&
            (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
          l
        );
      }),
      t
    );
  },
  cu = (...e) => {
    const t = af().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (i) => {
        const s = vl(i);
        if (s) return n(s, !0, ml(s));
      }),
      t
    );
  };
function ml(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function vl(e) {
  return te(e) ? document.querySelector(e) : e;
}
function qs(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function ss(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : qs(t[n]) &&
          qs(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          ss(e[n], t[n]);
    });
}
const wl = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function yt() {
  const e = typeof document < "u" ? document : {};
  return ss(e, wl), e;
}
const ff = {
  document: wl,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Te() {
  const e = typeof window < "u" ? window : {};
  return ss(e, ff), e;
}
function cf(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Pi(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function ht() {
  return Date.now();
}
function uf(e) {
  const t = Te();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function df(e, t) {
  t === void 0 && (t = "x");
  const n = Te();
  let i, s, r;
  const l = uf(e);
  return (
    n.WebKitCSSMatrix
      ? ((s = l.transform || l.webkitTransform),
        s.split(",").length > 6 &&
          (s = s
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (r = new n.WebKitCSSMatrix(s === "none" ? "" : s)))
      : ((r =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = r.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (s = r.m41)
        : i.length === 16
        ? (s = parseFloat(i[12]))
        : (s = parseFloat(i[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (s = r.m42)
        : i.length === 16
        ? (s = parseFloat(i[13]))
        : (s = parseFloat(i[5]))),
    s || 0
  );
}
function mn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function pf(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Se() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (i != null && !pf(i)) {
      const s = Object.keys(Object(i)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, l = s.length; r < l; r += 1) {
        const a = s[r],
          o = Object.getOwnPropertyDescriptor(i, a);
        o !== void 0 &&
          o.enumerable &&
          (mn(e[a]) && mn(i[a])
            ? i[a].__swiper__
              ? (e[a] = i[a])
              : Se(e[a], i[a])
            : !mn(e[a]) && mn(i[a])
            ? ((e[a] = {}), i[a].__swiper__ ? (e[a] = i[a]) : Se(e[a], i[a]))
            : (e[a] = i[a]));
      }
    }
  }
  return e;
}
function vn(e, t, n) {
  e.style.setProperty(t, n);
}
function yl(e) {
  let { swiper: t, targetPosition: n, side: i } = e;
  const s = Te(),
    r = -t.translate;
  let l = null,
    a;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    s.cancelAnimationFrame(t.cssModeFrameID);
  const c = n > r ? "next" : "prev",
    f = (g, p) => (c === "next" && g >= p) || (c === "prev" && g <= p),
    u = () => {
      (a = new Date().getTime()), l === null && (l = a);
      const g = Math.max(Math.min((a - l) / o, 1), 0),
        p = 0.5 - Math.cos(g * Math.PI) / 2;
      let y = r + p * (n - r);
      if ((f(y, n) && (y = n), t.wrapperEl.scrollTo({ [i]: y }), f(y, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [i]: y });
          }),
          s.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = s.requestAnimationFrame(u);
    };
  u();
}
function He(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function hf(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
}
function gf(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const i = e.previousElementSibling;
    t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
  }
  return n;
}
function mf(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const i = e.nextElementSibling;
    t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
  }
  return n;
}
function Ze(e, t) {
  return Te().getComputedStyle(e, null).getPropertyValue(t);
}
function Ys(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function vf(e, t) {
  const n = [];
  let i = e.parentElement;
  for (; i; ) n.push(i), (i = i.parentElement);
  return n;
}
function si(e, t) {
  function n(i) {
    i.target === e && (t.call(e, i), e.removeEventListener("transitionend", n));
  }
  t && e.addEventListener("transitionend", n);
}
function Xs(e, t, n) {
  const i = Te();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      i
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      i
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
let ri;
function wf() {
  const e = Te(),
    t = yt();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function bl() {
  return ri || (ri = wf()), ri;
}
let li;
function yf(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = bl(),
    i = Te(),
    s = i.navigator.platform,
    r = t || i.navigator.userAgent,
    l = { ios: !1, android: !1 },
    a = i.screen.width,
    o = i.screen.height,
    c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let f = r.match(/(iPad).*OS\s([\d_]+)/);
  const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    g = !f && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = s === "Win32";
  let y = s === "MacIntel";
  const x = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !f &&
      y &&
      n.touch &&
      x.indexOf(`${a}x${o}`) >= 0 &&
      ((f = r.match(/(Version)\/([\d.]+)/)),
      f || (f = [0, 1, "13_0_0"]),
      (y = !1)),
    c && !p && ((l.os = "android"), (l.android = !0)),
    (f || g || u) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function bf(e) {
  return e === void 0 && (e = {}), li || (li = yf(e)), li;
}
let oi;
function Sf() {
  const e = Te();
  let t = !1;
  function n() {
    const i = e.navigator.userAgent.toLowerCase();
    return (
      i.indexOf("safari") >= 0 &&
      i.indexOf("chrome") < 0 &&
      i.indexOf("android") < 0
    );
  }
  if (n()) {
    const i = String(e.navigator.userAgent);
    if (i.includes("Version/")) {
      const [s, r] = i
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((l) => Number(l));
      t = s < 16 || (s === 16 && r < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function Tf() {
  return oi || (oi = Sf()), oi;
}
function xf(e) {
  let { swiper: t, on: n, emit: i } = e;
  const s = Te();
  let r = null,
    l = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (i("beforeResize"), i("resize"));
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((r = new ResizeObserver((u) => {
          l = s.requestAnimationFrame(() => {
            const { width: g, height: p } = t;
            let y = g,
              x = p;
            u.forEach((L) => {
              let { contentBoxSize: P, contentRect: S, target: d } = L;
              (d && d !== t.el) ||
                ((y = S ? S.width : (P[0] || P).inlineSize),
                (x = S ? S.height : (P[0] || P).blockSize));
            }),
              (y !== g || x !== p) && a();
          });
        })),
        r.observe(t.el));
    },
    c = () => {
      l && s.cancelAnimationFrame(l),
        r && r.unobserve && t.el && (r.unobserve(t.el), (r = null));
    },
    f = () => {
      !t || t.destroyed || !t.initialized || i("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
      o();
      return;
    }
    s.addEventListener("resize", a), s.addEventListener("orientationchange", f);
  }),
    n("destroy", () => {
      c(),
        s.removeEventListener("resize", a),
        s.removeEventListener("orientationchange", f);
    });
}
function Ef(e) {
  let { swiper: t, extendParams: n, on: i, emit: s } = e;
  const r = [],
    l = Te(),
    a = function (f, u) {
      u === void 0 && (u = {});
      const g = l.MutationObserver || l.WebkitMutationObserver,
        p = new g((y) => {
          if (t.__preventObserver__) return;
          if (y.length === 1) {
            s("observerUpdate", y[0]);
            return;
          }
          const x = function () {
            s("observerUpdate", y[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(x)
            : l.setTimeout(x, 0);
        });
      p.observe(f, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: typeof u.childList > "u" ? !0 : u.childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData,
      }),
        r.push(p);
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const f = vf(t.hostEl);
          for (let u = 0; u < f.length; u += 1) a(f[u]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      r.forEach((f) => {
        f.disconnect();
      }),
        r.splice(0, r.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i("init", o),
    i("destroy", c);
}
var _f = {
  on(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((r) => {
        i.eventsListeners[r] || (i.eventsListeners[r] = []),
          i.eventsListeners[r][s](t);
      }),
      i
    );
  },
  once(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    function s() {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
      for (var r = arguments.length, l = new Array(r), a = 0; a < r; a++)
        l[a] = arguments[a];
      t.apply(i, l);
    }
    return (s.__emitterProxy = t), i.on(e, s, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const i = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((i) => {
          typeof t > "u"
            ? (n.eventsListeners[i] = [])
            : n.eventsListeners[i] &&
              n.eventsListeners[i].forEach((s, r) => {
                (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                  n.eventsListeners[i].splice(r, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, i;
    for (var s = arguments.length, r = new Array(s), l = 0; l < s; l++)
      r[l] = arguments[l];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((t = r[0]), (n = r.slice(1, r.length)), (i = e))
        : ((t = r[0].events), (n = r[0].data), (i = r[0].context || e)),
      n.unshift(i),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(i, [o, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((c) => {
              c.apply(i, n);
            });
      }),
      e
    );
  },
};
function Cf() {
  const e = this;
  let t, n;
  const i = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = i.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = i.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Ze(i, "padding-left") || 0, 10) -
        parseInt(Ze(i, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Ze(i, "padding-top") || 0, 10) -
        parseInt(Ze(i, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Mf() {
  const e = this;
  function t(O) {
    return e.isHorizontal()
      ? O
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[O];
  }
  function n(O, M) {
    return parseFloat(O.getPropertyValue(t(M)) || 0);
  }
  const i = e.params,
    { wrapperEl: s, slidesEl: r, size: l, rtlTranslate: a, wrongRTL: o } = e,
    c = e.virtual && i.virtual.enabled,
    f = c ? e.virtual.slides.length : e.slides.length,
    u = He(r, `.${e.params.slideClass}, swiper-slide`),
    g = c ? e.virtual.slides.length : u.length;
  let p = [];
  const y = [],
    x = [];
  let L = i.slidesOffsetBefore;
  typeof L == "function" && (L = i.slidesOffsetBefore.call(e));
  let P = i.slidesOffsetAfter;
  typeof P == "function" && (P = i.slidesOffsetAfter.call(e));
  const S = e.snapGrid.length,
    d = e.slidesGrid.length;
  let m = i.spaceBetween,
    b = -L,
    T = 0,
    _ = 0;
  if (typeof l > "u") return;
  typeof m == "string" && m.indexOf("%") >= 0
    ? (m = (parseFloat(m.replace("%", "")) / 100) * l)
    : typeof m == "string" && (m = parseFloat(m)),
    (e.virtualSize = -m),
    u.forEach((O) => {
      a ? (O.style.marginLeft = "") : (O.style.marginRight = ""),
        (O.style.marginBottom = ""),
        (O.style.marginTop = "");
    }),
    i.centeredSlides &&
      i.cssMode &&
      (vn(s, "--swiper-centered-offset-before", ""),
      vn(s, "--swiper-centered-offset-after", ""));
  const E = i.grid && i.grid.rows > 1 && e.grid;
  E && e.grid.initSlides(g);
  let w;
  const B =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (O) => typeof i.breakpoints[O].slidesPerView < "u"
    ).length > 0;
  for (let O = 0; O < g; O += 1) {
    w = 0;
    let M;
    if (
      (u[O] && (M = u[O]),
      E && e.grid.updateSlide(O, M, g, t),
      !(u[O] && Ze(M, "display") === "none"))
    ) {
      if (i.slidesPerView === "auto") {
        B && (u[O].style[t("width")] = "");
        const D = getComputedStyle(M),
          Y = M.style.transform,
          ee = M.style.webkitTransform;
        if (
          (Y && (M.style.transform = "none"),
          ee && (M.style.webkitTransform = "none"),
          i.roundLengths)
        )
          w = e.isHorizontal() ? Xs(M, "width") : Xs(M, "height");
        else {
          const $ = n(D, "width"),
            q = n(D, "padding-left"),
            j = n(D, "padding-right"),
            xe = n(D, "margin-left"),
            rt = n(D, "margin-right"),
            Be = D.getPropertyValue("box-sizing");
          if (Be && Be === "border-box") w = $ + xe + rt;
          else {
            const { clientWidth: Ee, offsetWidth: sn } = M;
            w = $ + q + j + xe + rt + (sn - Ee);
          }
        }
        Y && (M.style.transform = Y),
          ee && (M.style.webkitTransform = ee),
          i.roundLengths && (w = Math.floor(w));
      } else
        (w = (l - (i.slidesPerView - 1) * m) / i.slidesPerView),
          i.roundLengths && (w = Math.floor(w)),
          u[O] && (u[O].style[t("width")] = `${w}px`);
      u[O] && (u[O].swiperSlideSize = w),
        x.push(w),
        i.centeredSlides
          ? ((b = b + w / 2 + T / 2 + m),
            T === 0 && O !== 0 && (b = b - l / 2 - m),
            O === 0 && (b = b - l / 2 - m),
            Math.abs(b) < 1 / 1e3 && (b = 0),
            i.roundLengths && (b = Math.floor(b)),
            _ % i.slidesPerGroup === 0 && p.push(b),
            y.push(b))
          : (i.roundLengths && (b = Math.floor(b)),
            (_ - Math.min(e.params.slidesPerGroupSkip, _)) %
              e.params.slidesPerGroup ===
              0 && p.push(b),
            y.push(b),
            (b = b + w + m)),
        (e.virtualSize += w + m),
        (T = w),
        (_ += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + P),
    a &&
      o &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      (s.style.width = `${e.virtualSize + m}px`),
    i.setWrapperSize && (s.style[t("width")] = `${e.virtualSize + m}px`),
    E && e.grid.updateWrapperSize(w, p, t),
    !i.centeredSlides)
  ) {
    const O = [];
    for (let M = 0; M < p.length; M += 1) {
      let D = p[M];
      i.roundLengths && (D = Math.floor(D)),
        p[M] <= e.virtualSize - l && O.push(D);
    }
    (p = O),
      Math.floor(e.virtualSize - l) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(e.virtualSize - l);
  }
  if (c && i.loop) {
    const O = x[0] + m;
    if (i.slidesPerGroup > 1) {
      const M = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup
        ),
        D = O * i.slidesPerGroup;
      for (let Y = 0; Y < M; Y += 1) p.push(p[p.length - 1] + D);
    }
    for (let M = 0; M < e.virtual.slidesBefore + e.virtual.slidesAfter; M += 1)
      i.slidesPerGroup === 1 && p.push(p[p.length - 1] + O),
        y.push(y[y.length - 1] + O),
        (e.virtualSize += O);
  }
  if ((p.length === 0 && (p = [0]), m !== 0)) {
    const O = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
    u.filter((M, D) =>
      !i.cssMode || i.loop ? !0 : D !== u.length - 1
    ).forEach((M) => {
      M.style[O] = `${m}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let O = 0;
    x.forEach((D) => {
      O += D + (m || 0);
    }),
      (O -= m);
    const M = O - l;
    p = p.map((D) => (D <= 0 ? -L : D > M ? M + P : D));
  }
  if (i.centerInsufficientSlides) {
    let O = 0;
    if (
      (x.forEach((M) => {
        O += M + (m || 0);
      }),
      (O -= m),
      O < l)
    ) {
      const M = (l - O) / 2;
      p.forEach((D, Y) => {
        p[Y] = D - M;
      }),
        y.forEach((D, Y) => {
          y[Y] = D + M;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: u,
      snapGrid: p,
      slidesGrid: y,
      slidesSizesGrid: x,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    vn(s, "--swiper-centered-offset-before", `${-p[0]}px`),
      vn(
        s,
        "--swiper-centered-offset-after",
        `${e.size / 2 - x[x.length - 1] / 2}px`
      );
    const O = -e.snapGrid[0],
      M = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((D) => D + O)),
      (e.slidesGrid = e.slidesGrid.map((D) => D + M));
  }
  if (
    (g !== f && e.emit("slidesLengthChange"),
    p.length !== S &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    y.length !== d && e.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && e.updateSlidesOffset(),
    !c && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const O = `${i.containerModifierClass}backface-hidden`,
      M = e.el.classList.contains(O);
    g <= i.maxBackfaceHiddenSlides
      ? M || e.el.classList.add(O)
      : M && e.el.classList.remove(O);
  }
}
function Pf(e) {
  const t = this,
    n = [],
    i = t.virtual && t.params.virtual.enabled;
  let s = 0,
    r;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const l = (a) => (i ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const a = t.activeIndex + r;
        if (a > t.slides.length && !i) break;
        n.push(l(a));
      }
  else n.push(l(t.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const a = n[r].offsetHeight;
      s = a > s ? a : s;
    }
  (s || s === 0) && (t.wrapperEl.style.height = `${s}px`);
}
function Of() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset =
      (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function If(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: i, rtlTranslate: s, snapGrid: r } = t;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  s && (l = e),
    i.forEach((o) => {
      o.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < i.length; o += 1) {
    const c = i[o];
    let f = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (f -= i[0].swiperSlideOffset);
    const u =
        (l + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (c.swiperSlideSize + a),
      g =
        (l - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (c.swiperSlideSize + a),
      p = -(l - f),
      y = p + t.slidesSizesGrid[o];
    ((p >= 0 && p < t.size - 1) ||
      (y > 1 && y <= t.size) ||
      (p <= 0 && y >= t.size)) &&
      (t.visibleSlides.push(c),
      t.visibleSlidesIndexes.push(o),
      i[o].classList.add(n.slideVisibleClass)),
      (c.progress = s ? -u : u),
      (c.originalProgress = s ? -g : g);
  }
}
function Af(e) {
  const t = this;
  if (typeof e > "u") {
    const f = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * f) || 0;
  }
  const n = t.params,
    i = t.maxTranslate() - t.minTranslate();
  let { progress: s, isBeginning: r, isEnd: l, progressLoop: a } = t;
  const o = r,
    c = l;
  if (i === 0) (s = 0), (r = !0), (l = !0);
  else {
    s = (e - t.minTranslate()) / i;
    const f = Math.abs(e - t.minTranslate()) < 1,
      u = Math.abs(e - t.maxTranslate()) < 1;
    (r = f || s <= 0), (l = u || s >= 1), f && (s = 0), u && (s = 1);
  }
  if (n.loop) {
    const f = t.getSlideIndexByData(0),
      u = t.getSlideIndexByData(t.slides.length - 1),
      g = t.slidesGrid[f],
      p = t.slidesGrid[u],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      x = Math.abs(e);
    x >= g ? (a = (x - g) / y) : (a = (x + y - p) / y), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: s, progressLoop: a, isBeginning: r, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !o && t.emit("reachBeginning toEdge"),
    l && !c && t.emit("reachEnd toEdge"),
    ((o && !r) || (c && !l)) && t.emit("fromEdge"),
    t.emit("progress", s);
}
function Lf() {
  const e = this,
    { slides: t, params: n, slidesEl: i, activeIndex: s } = e,
    r = e.virtual && n.virtual.enabled,
    l = (o) => He(i, `.${n.slideClass}${o}, swiper-slide${o}`)[0];
  t.forEach((o) => {
    o.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let a;
  if (r)
    if (n.loop) {
      let o = s - e.virtual.slidesBefore;
      o < 0 && (o = e.virtual.slides.length + o),
        o >= e.virtual.slides.length && (o -= e.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${o}"]`));
    } else a = l(`[data-swiper-slide-index="${s}"]`);
  else a = t[s];
  if (a) {
    a.classList.add(n.slideActiveClass);
    let o = mf(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !o && (o = t[0]), o && o.classList.add(n.slideNextClass);
    let c = gf(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !c === 0 && (c = t[t.length - 1]),
      c && c.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const Tn = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      i = t.closest(n());
    if (i) {
      let s = i.querySelector(`.${e.params.lazyPreloaderClass}`);
      !s &&
        e.isElement &&
        (i.shadowRoot
          ? (s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              i.shadowRoot &&
                ((s = i.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                s && s.remove());
            })),
        s && s.remove();
    }
  },
  ai = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Oi = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const i =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      s = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = s,
        a = [l - t];
      a.push(...Array.from({ length: t }).map((o, c) => l + i + c)),
        e.slides.forEach((o, c) => {
          a.includes(o.column) && ai(e, c);
        });
      return;
    }
    const r = s + i - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = s - t; l <= r + t; l += 1) {
        const a = ((l % n) + n) % n;
        (a < s || a > r) && ai(e, a);
      }
    else
      for (let l = Math.max(s - t, 0); l <= Math.min(r + t, n - 1); l += 1)
        l !== s && (l > r || l < s) && ai(e, l);
  };
function Bf(e) {
  const { slidesGrid: t, params: n } = e,
    i = e.rtlTranslate ? e.translate : -e.translate;
  let s;
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < "u"
      ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (s = r)
        : i >= t[r] && i < t[r + 1] && (s = r + 1)
      : i >= t[r] && (s = r);
  return n.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s;
}
function Rf(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: i, params: s, activeIndex: r, realIndex: l, snapIndex: a } = t;
  let o = e,
    c;
  const f = (g) => {
    let p = g - t.virtual.slidesBefore;
    return (
      p < 0 && (p = t.virtual.slides.length + p),
      p >= t.virtual.slides.length && (p -= t.virtual.slides.length),
      p
    );
  };
  if ((typeof o > "u" && (o = Bf(t)), i.indexOf(n) >= 0)) c = i.indexOf(n);
  else {
    const g = Math.min(s.slidesPerGroupSkip, o);
    c = g + Math.floor((o - g) / s.slidesPerGroup);
  }
  if ((c >= i.length && (c = i.length - 1), o === r)) {
    c !== a && ((t.snapIndex = c), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = f(o));
    return;
  }
  let u;
  t.virtual && s.virtual.enabled && s.loop
    ? (u = f(o))
    : t.slides[o]
    ? (u = parseInt(
        t.slides[o].getAttribute("data-swiper-slide-index") || o,
        10
      ))
    : (u = o),
    Object.assign(t, {
      previousSnapIndex: a,
      snapIndex: c,
      previousRealIndex: l,
      realIndex: u,
      previousIndex: r,
      activeIndex: o,
    }),
    t.initialized && Oi(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (l !== u && t.emit("realIndexChange"), t.emit("slideChange"));
}
function Ff(e, t) {
  const n = this,
    i = n.params;
  let s = e.closest(`.${i.slideClass}, swiper-slide`);
  !s &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !s && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (s = a);
    });
  let r = !1,
    l;
  if (s) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === s) {
        (r = !0), (l = a);
        break;
      }
  }
  if (s && r)
    (n.clickedSlide = s),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            s.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = l);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var Nf = {
  updateSize: Cf,
  updateSlides: Mf,
  updateAutoHeight: Pf,
  updateSlidesOffset: Of,
  updateSlidesProgress: If,
  updateProgress: Af,
  updateSlidesClasses: Lf,
  updateActiveIndex: Rf,
  updateClickedSlide: Ff,
};
function zf(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: i, translate: s, wrapperEl: r } = t;
  if (n.virtualTranslate) return i ? -s : s;
  if (n.cssMode) return s;
  let l = df(r, e);
  return (l += t.cssOverflowAdjustment()), i && (l = -l), l || 0;
}
function Df(e, t) {
  const n = this,
    { rtlTranslate: i, params: s, wrapperEl: r, progress: l } = n;
  let a = 0,
    o = 0;
  const c = 0;
  n.isHorizontal() ? (a = i ? -e : e) : (o = e),
    s.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    s.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -o)
      : s.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${a}px, ${o}px, ${c}px)`));
  let f;
  const u = n.maxTranslate() - n.minTranslate();
  u === 0 ? (f = 0) : (f = (e - n.minTranslate()) / u),
    f !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function Vf() {
  return -this.snapGrid[0];
}
function Hf() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function $f(e, t, n, i, s) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    i === void 0 && (i = !0);
  const r = this,
    { params: l, wrapperEl: a } = r;
  if (r.animating && l.preventInteractionOnTransition) return !1;
  const o = r.minTranslate(),
    c = r.maxTranslate();
  let f;
  if (
    (i && e > o ? (f = o) : i && e < c ? (f = c) : (f = e),
    r.updateProgress(f),
    l.cssMode)
  ) {
    const u = r.isHorizontal();
    if (t === 0) a[u ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!r.support.smoothScroll)
        return (
          yl({ swiper: r, targetPosition: -f, side: u ? "left" : "top" }), !0
        );
      a.scrollTo({ [u ? "left" : "top"]: -f, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(f),
        n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(f),
        n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (g) {
              !r ||
                r.destroyed ||
                (g.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  n && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var jf = {
  getTranslate: zf,
  setTranslate: Df,
  minTranslate: Vf,
  maxTranslate: Hf,
  translateTo: $f,
};
function Gf(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Sl(e) {
  let { swiper: t, runCallbacks: n, direction: i, step: s } = e;
  const { activeIndex: r, previousIndex: l } = t;
  let a = i;
  if (
    (a || (r > l ? (a = "next") : r < l ? (a = "prev") : (a = "reset")),
    t.emit(`transition${s}`),
    n && r !== l)
  ) {
    if (a === "reset") {
      t.emit(`slideResetTransition${s}`);
      return;
    }
    t.emit(`slideChangeTransition${s}`),
      a === "next"
        ? t.emit(`slideNextTransition${s}`)
        : t.emit(`slidePrevTransition${s}`);
  }
}
function kf(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: i } = n;
  i.cssMode ||
    (i.autoHeight && n.updateAutoHeight(),
    Sl({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Wf(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: i } = n;
  (n.animating = !1),
    !i.cssMode &&
      (n.setTransition(0),
      Sl({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Uf = { setTransition: Gf, transitionStart: kf, transitionEnd: Wf };
function Kf(e, t, n, i, s) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const r = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: c,
    previousIndex: f,
    activeIndex: u,
    rtlTranslate: g,
    wrapperEl: p,
    enabled: y,
  } = r;
  if ((r.animating && a.preventInteractionOnTransition) || (!y && !i && !s))
    return !1;
  const x = Math.min(r.params.slidesPerGroupSkip, l);
  let L = x + Math.floor((l - x) / r.params.slidesPerGroup);
  L >= o.length && (L = o.length - 1);
  const P = -o[L];
  if (a.normalizeSlideIndex)
    for (let d = 0; d < c.length; d += 1) {
      const m = -Math.floor(P * 100),
        b = Math.floor(c[d] * 100),
        T = Math.floor(c[d + 1] * 100);
      typeof c[d + 1] < "u"
        ? m >= b && m < T - (T - b) / 2
          ? (l = d)
          : m >= b && m < T && (l = d + 1)
        : m >= b && (l = d);
    }
  if (
    r.initialized &&
    l !== u &&
    ((!r.allowSlideNext &&
      (g
        ? P > r.translate && P > r.minTranslate()
        : P < r.translate && P < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        P > r.translate &&
        P > r.maxTranslate() &&
        (u || 0) !== l))
  )
    return !1;
  l !== (f || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(P);
  let S;
  if (
    (l > u ? (S = "next") : l < u ? (S = "prev") : (S = "reset"),
    (g && -P === r.translate) || (!g && P === r.translate))
  )
    return (
      r.updateActiveIndex(l),
      a.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      a.effect !== "slide" && r.setTranslate(P),
      S !== "reset" && (r.transitionStart(n, S), r.transitionEnd(n, S)),
      !1
    );
  if (a.cssMode) {
    const d = r.isHorizontal(),
      m = g ? P : -P;
    if (t === 0) {
      const b = r.virtual && r.params.virtual.enabled;
      b &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        b && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[d ? "scrollLeft" : "scrollTop"] = m;
            }))
          : (p[d ? "scrollLeft" : "scrollTop"] = m),
        b &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
          });
    } else {
      if (!r.support.smoothScroll)
        return (
          yl({ swiper: r, targetPosition: m, side: d ? "left" : "top" }), !0
        );
      p.scrollTo({ [d ? "left" : "top"]: m, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(t),
    r.setTranslate(P),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, i),
    r.transitionStart(n, S),
    t === 0
      ? r.transitionEnd(n, S)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (m) {
            !r ||
              r.destroyed ||
              (m.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, S)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function qf(e, t, n, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let r = e;
  return (
    s.params.loop &&
      (s.virtual && s.params.virtual.enabled
        ? (r = r + s.virtual.slidesBefore)
        : (r = s.getSlideIndexByData(r))),
    s.slideTo(r, t, n, i)
  );
}
function Yf(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this,
    { enabled: s, params: r, animating: l } = i;
  if (!s) return i;
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : a,
    c = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !c && r.loopPreventsSliding) return !1;
    if (
      (i.loopFix({ direction: "next" }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + o, e, t, n);
        }),
        !0
      );
  }
  return r.rewind && i.isEnd
    ? i.slideTo(0, e, t, n)
    : i.slideTo(i.activeIndex + o, e, t, n);
}
function Xf(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this,
    {
      params: s,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: a,
      enabled: o,
      animating: c,
    } = i;
  if (!o) return i;
  const f = i.virtual && s.virtual.enabled;
  if (s.loop) {
    if (c && !f && s.loopPreventsSliding) return !1;
    i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  const u = a ? i.translate : -i.translate;
  function g(P) {
    return P < 0 ? -Math.floor(Math.abs(P)) : Math.floor(P);
  }
  const p = g(u),
    y = r.map((P) => g(P));
  let x = r[y.indexOf(p) - 1];
  if (typeof x > "u" && s.cssMode) {
    let P;
    r.forEach((S, d) => {
      p >= S && (P = d);
    }),
      typeof P < "u" && (x = r[P > 0 ? P - 1 : P]);
  }
  let L = 0;
  if (
    (typeof x < "u" &&
      ((L = l.indexOf(x)),
      L < 0 && (L = i.activeIndex - 1),
      s.slidesPerView === "auto" &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        ((L = L - i.slidesPerViewDynamic("previous", !0) + 1),
        (L = Math.max(L, 0)))),
    s.rewind && i.isBeginning)
  ) {
    const P =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(P, e, t, n);
  } else if (s.loop && i.activeIndex === 0 && s.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(L, e, t, n);
      }),
      !0
    );
  return i.slideTo(L, e, t, n);
}
function Jf(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this;
  return i.slideTo(i.activeIndex, e, t, n);
}
function Zf(e, t, n, i) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    i === void 0 && (i = 0.5);
  const s = this;
  let r = s.activeIndex;
  const l = Math.min(s.params.slidesPerGroupSkip, r),
    a = l + Math.floor((r - l) / s.params.slidesPerGroup),
    o = s.rtlTranslate ? s.translate : -s.translate;
  if (o >= s.snapGrid[a]) {
    const c = s.snapGrid[a],
      f = s.snapGrid[a + 1];
    o - c > (f - c) * i && (r += s.params.slidesPerGroup);
  } else {
    const c = s.snapGrid[a - 1],
      f = s.snapGrid[a];
    o - c <= (f - c) * i && (r -= s.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, s.slidesGrid.length - 1)),
    s.slideTo(r, e, t, n)
  );
}
function Qf() {
  const e = this,
    { params: t, slidesEl: n } = e,
    i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let s = e.clickedIndex,
    r;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? s < e.loopedSlides - i / 2 ||
          s > e.slides.length - e.loopedSlides + i / 2
          ? (e.loopFix(),
            (s = e.getSlideIndex(
              He(n, `${l}[data-swiper-slide-index="${r}"]`)[0]
            )),
            Pi(() => {
              e.slideTo(s);
            }))
          : e.slideTo(s)
        : s > e.slides.length - i
        ? (e.loopFix(),
          (s = e.getSlideIndex(
            He(n, `${l}[data-swiper-slide-index="${r}"]`)[0]
          )),
          Pi(() => {
            e.slideTo(s);
          }))
        : e.slideTo(s);
  } else e.slideTo(s);
}
var ec = {
  slideTo: Kf,
  slideToLoop: qf,
  slideNext: Yf,
  slidePrev: Xf,
  slideReset: Jf,
  slideToClosest: Zf,
  slideToClickedSlide: Qf,
};
function tc(e) {
  const t = this,
    { params: n, slidesEl: i } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  He(i, `.${n.slideClass}, swiper-slide`).forEach((r, l) => {
    r.setAttribute("data-swiper-slide-index", l);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function nc(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: i,
    setTranslate: s,
    activeSlideIndex: r,
    byController: l,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: f,
    allowSlideNext: u,
    slidesEl: g,
    params: p,
  } = o;
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && p.virtual.enabled)
  ) {
    n &&
      (!p.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : p.centeredSlides && o.snapIndex < p.slidesPerView
        ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
        : o.snapIndex === o.snapGrid.length - 1 &&
          o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = f),
      (o.allowSlideNext = u),
      o.emit("loopFix");
    return;
  }
  const y =
    p.slidesPerView === "auto"
      ? o.slidesPerViewDynamic()
      : Math.ceil(parseFloat(p.slidesPerView, 10));
  let x = p.loopedSlides || y;
  x % p.slidesPerGroup !== 0 &&
    (x += p.slidesPerGroup - (x % p.slidesPerGroup)),
    (o.loopedSlides = x);
  const L = [],
    P = [];
  let S = o.activeIndex;
  typeof r > "u"
    ? (r = o.getSlideIndex(
        o.slides.filter((_) => _.classList.contains(p.slideActiveClass))[0]
      ))
    : (S = r);
  const d = i === "next" || !i,
    m = i === "prev" || !i;
  let b = 0,
    T = 0;
  if (r < x) {
    b = Math.max(x - r, p.slidesPerGroup);
    for (let _ = 0; _ < x - r; _ += 1) {
      const E = _ - Math.floor(_ / c.length) * c.length;
      L.push(c.length - E - 1);
    }
  } else if (r > o.slides.length - x * 2) {
    T = Math.max(r - (o.slides.length - x * 2), p.slidesPerGroup);
    for (let _ = 0; _ < T; _ += 1) {
      const E = _ - Math.floor(_ / c.length) * c.length;
      P.push(E);
    }
  }
  if (
    (m &&
      L.forEach((_) => {
        (o.slides[_].swiperLoopMoveDOM = !0),
          g.prepend(o.slides[_]),
          (o.slides[_].swiperLoopMoveDOM = !1);
      }),
    d &&
      P.forEach((_) => {
        (o.slides[_].swiperLoopMoveDOM = !0),
          g.append(o.slides[_]),
          (o.slides[_].swiperLoopMoveDOM = !1);
      }),
    o.recalcSlides(),
    p.slidesPerView === "auto" && o.updateSlides(),
    p.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (L.length > 0 && m)
      if (typeof t > "u") {
        const _ = o.slidesGrid[S],
          w = o.slidesGrid[S + b] - _;
        a
          ? o.setTranslate(o.translate - w)
          : (o.slideTo(S + b, 0, !1, !0),
            s &&
              ((o.touches[o.isHorizontal() ? "startX" : "startY"] += w),
              (o.touchEventsData.currentTranslate = o.translate)));
      } else
        s &&
          (o.slideToLoop(t, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate));
    else if (P.length > 0 && d)
      if (typeof t > "u") {
        const _ = o.slidesGrid[S],
          w = o.slidesGrid[S - T] - _;
        a
          ? o.setTranslate(o.translate - w)
          : (o.slideTo(S - T, 0, !1, !0),
            s &&
              ((o.touches[o.isHorizontal() ? "startX" : "startY"] += w),
              (o.touchEventsData.currentTranslate = o.translate)));
      } else o.slideToLoop(t, 0, !1, !0);
  }
  if (
    ((o.allowSlidePrev = f),
    (o.allowSlideNext = u),
    o.controller && o.controller.control && !l)
  ) {
    const _ = {
      slideRealIndex: t,
      direction: i,
      setTranslate: s,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach((E) => {
          !E.destroyed &&
            E.params.loop &&
            E.loopFix({
              ..._,
              slideTo: E.params.slidesPerView === p.slidesPerView ? n : !1,
            });
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({
          ..._,
          slideTo:
            o.controller.control.params.slidesPerView === p.slidesPerView
              ? n
              : !1,
        });
  }
  o.emit("loopFix");
}
function ic() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const i = [];
  e.slides.forEach((s) => {
    const r =
      typeof s.swiperSlideIndex > "u"
        ? s.getAttribute("data-swiper-slide-index") * 1
        : s.swiperSlideIndex;
    i[r] = s;
  }),
    e.slides.forEach((s) => {
      s.removeAttribute("data-swiper-slide-index");
    }),
    i.forEach((s) => {
      n.append(s);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var sc = { loopCreate: tc, loopFix: nc, loopDestroy: ic };
function rc(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function lc() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var oc = { setGrabCursor: rc, unsetGrabCursor: lc };
function ac(e, t) {
  t === void 0 && (t = this);
  function n(i) {
    if (!i || i === yt() || i === Te()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const s = i.closest(e);
    return !s && !i.getRootNode ? null : s || n(i.getRootNode().host);
  }
  return n(t);
}
function fc(e) {
  const t = this,
    n = yt(),
    i = Te(),
    s = t.touchEventsData;
  s.evCache.push(e);
  const { params: r, touches: l, enabled: a } = t;
  if (
    !a ||
    (!r.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  let c = o.target;
  if (
    (r.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(c)) ||
    ("which" in o && o.which === 3) ||
    ("button" in o && o.button > 0) ||
    (s.isTouched && s.isMoved)
  )
    return;
  const f = !!r.noSwipingClass && r.noSwipingClass !== "",
    u = e.composedPath ? e.composedPath() : e.path;
  f && o.target && o.target.shadowRoot && u && (c = u[0]);
  const g = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    p = !!(o.target && o.target.shadowRoot);
  if (r.noSwiping && (p ? ac(g, c) : c.closest(g))) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !c.closest(r.swipeHandler)) return;
  (l.currentX = o.pageX), (l.currentY = o.pageY);
  const y = l.currentX,
    x = l.currentY,
    L = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    P = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (L && (y <= P || y >= i.innerWidth - P))
    if (L === "prevent") e.preventDefault();
    else return;
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = y),
    (l.startY = x),
    (s.touchStartTime = ht()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (s.allowThresholdMove = !1);
  let S = !0;
  c.matches(s.focusableElements) &&
    ((S = !1), c.nodeName === "SELECT" && (s.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(s.focusableElements) &&
      n.activeElement !== c &&
      n.activeElement.blur();
  const d = S && t.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || d) &&
    !c.isContentEditable &&
    o.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", o);
}
function cc(e) {
  const t = yt(),
    n = this,
    i = n.touchEventsData,
    { params: s, touches: r, rtlTranslate: l, enabled: a } = n;
  if (!a || (!s.simulateTouch && e.pointerType === "mouse")) return;
  let o = e;
  if ((o.originalEvent && (o = o.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  const c = i.evCache.findIndex((_) => _.pointerId === o.pointerId);
  c >= 0 && (i.evCache[c] = o);
  const f = i.evCache.length > 1 ? i.evCache[0] : o,
    u = f.pageX,
    g = f.pageY;
  if (o.preventedByNestedSwiper) {
    (r.startX = u), (r.startY = g);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(i.focusableElements) || (n.allowClick = !1),
      i.isTouched &&
        (Object.assign(r, {
          startX: u,
          startY: g,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: u,
          currentY: g,
        }),
        (i.touchStartTime = ht()));
    return;
  }
  if (s.touchReleaseOnEdges && !s.loop) {
    if (n.isVertical()) {
      if (
        (g < r.startY && n.translate <= n.maxTranslate()) ||
        (g > r.startY && n.translate >= n.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (u < r.startX && n.translate <= n.maxTranslate()) ||
      (u > r.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    o.target === t.activeElement &&
    o.target.matches(i.focusableElements)
  ) {
    (i.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && n.emit("touchMove", o),
    o.targetTouches && o.targetTouches.length > 1)
  )
    return;
  (r.currentX = u), (r.currentY = g);
  const p = r.currentX - r.startX,
    y = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(p ** 2 + y ** 2) < n.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let _;
    (n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (i.isScrolling = !1)
      : p * p + y * y >= 25 &&
        ((_ = (Math.atan2(Math.abs(y), Math.abs(p)) * 180) / Math.PI),
        (i.isScrolling = n.isHorizontal()
          ? _ > s.touchAngle
          : 90 - _ > s.touchAngle));
  }
  if (
    (i.isScrolling && n.emit("touchMoveOpposite", o),
    typeof i.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (i.startMoving = !0),
    i.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        i.evCache.length > 1))
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (n.allowClick = !1),
    !s.cssMode && o.cancelable && o.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && o.stopPropagation();
  let x = n.isHorizontal() ? p : y,
    L = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  s.oneWayMovement &&
    ((x = Math.abs(x) * (l ? 1 : -1)), (L = Math.abs(L) * (l ? 1 : -1))),
    (r.diff = x),
    (x *= s.touchRatio),
    l && ((x = -x), (L = -L));
  const P = n.touchesDirection;
  (n.swipeDirection = x > 0 ? "prev" : "next"),
    (n.touchesDirection = L > 0 ? "prev" : "next");
  const S = n.params.loop && !s.cssMode,
    d =
      (n.swipeDirection === "next" && n.allowSlideNext) ||
      (n.swipeDirection === "prev" && n.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (S && d && n.loopFix({ direction: n.swipeDirection }),
      (i.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const _ = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(_);
    }
    (i.allowMomentumBounce = !1),
      s.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let m;
  i.isMoved &&
    P !== n.touchesDirection &&
    S &&
    d &&
    Math.abs(x) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (m = !0)),
    n.emit("sliderMove", o),
    (i.isMoved = !0),
    (i.currentTranslate = x + i.startTranslate);
  let b = !0,
    T = s.resistanceRatio;
  if (
    (s.touchReleaseOnEdges && (T = 0),
    x > 0
      ? (S &&
          d &&
          !m &&
          i.currentTranslate >
            (s.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > n.minTranslate() &&
          ((b = !1),
          s.resistance &&
            (i.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + i.startTranslate + x) ** T)))
      : x < 0 &&
        (S &&
          d &&
          !m &&
          i.currentTranslate <
            (s.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (s.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(s.slidesPerView, 10))),
          }),
        i.currentTranslate < n.maxTranslate() &&
          ((b = !1),
          s.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - i.startTranslate - x) ** T))),
    b && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    s.threshold > 0)
  )
    if (Math.abs(x) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          (r.diff = n.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !s.followFinger ||
    s.cssMode ||
    (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
      s.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(i.currentTranslate),
    n.setTranslate(i.currentTranslate));
}
function uc(e) {
  const t = this,
    n = t.touchEventsData,
    i = n.evCache.findIndex((d) => d.pointerId === e.pointerId);
  if (
    (i >= 0 && n.evCache.splice(i, 1),
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      e.type
    ) &&
      !(
        ["pointercancel", "contextmenu"].includes(e.type) &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return;
  const {
    params: s,
    touches: r,
    rtlTranslate: l,
    slidesGrid: a,
    enabled: o,
  } = t;
  if (!o || (!s.simulateTouch && e.pointerType === "mouse")) return;
  let c = e;
  if (
    (c.originalEvent && (c = c.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", c),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && s.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  s.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const f = ht(),
    u = f - n.touchStartTime;
  if (t.allowClick) {
    const d = c.path || (c.composedPath && c.composedPath());
    t.updateClickedSlide((d && d[0]) || c.target, d),
      t.emit("tap click", c),
      u < 300 &&
        f - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", c);
  }
  if (
    ((n.lastClickTime = ht()),
    Pi(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      r.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let g;
  if (
    (s.followFinger
      ? (g = l ? t.translate : -t.translate)
      : (g = -n.currentTranslate),
    s.cssMode)
  )
    return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: g });
    return;
  }
  let p = 0,
    y = t.slidesSizesGrid[0];
  for (
    let d = 0;
    d < a.length;
    d += d < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
  ) {
    const m = d < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof a[d + m] < "u"
      ? g >= a[d] && g < a[d + m] && ((p = d), (y = a[d + m] - a[d]))
      : g >= a[d] && ((p = d), (y = a[a.length - 1] - a[a.length - 2]));
  }
  let x = null,
    L = null;
  s.rewind &&
    (t.isBeginning
      ? (L =
          s.virtual && s.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (x = 0));
  const P = (g - a[p]) / y,
    S = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (u > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (P >= s.longSwipesRatio
        ? t.slideTo(s.rewind && t.isEnd ? x : p + S)
        : t.slideTo(p)),
      t.swipeDirection === "prev" &&
        (P > 1 - s.longSwipesRatio
          ? t.slideTo(p + S)
          : L !== null && P < 0 && Math.abs(P) > s.longSwipesRatio
          ? t.slideTo(L)
          : t.slideTo(p));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
      ? c.target === t.navigation.nextEl
        ? t.slideTo(p + S)
        : t.slideTo(p)
      : (t.swipeDirection === "next" && t.slideTo(x !== null ? x : p + S),
        t.swipeDirection === "prev" && t.slideTo(L !== null ? L : p));
  }
}
function Js() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: s, snapGrid: r } = e,
    l = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = l && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = s),
    (e.allowSlideNext = i),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}
function dc(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function pc() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
  if (!i) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let s;
  const r = e.maxTranslate() - e.minTranslate();
  r === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / r),
    s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function hc(e) {
  const t = this;
  Tn(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
let Zs = !1;
function gc() {}
const Tl = (e, t) => {
  const n = yt(),
    { params: i, el: s, wrapperEl: r, device: l } = e,
    a = !!i.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  s[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      s[o]("click", e.onClick, !0),
    i.cssMode && r[o]("scroll", e.onScroll),
    i.updateOnWindowResize
      ? e[c](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Js,
          !0
        )
      : e[c]("observerUpdate", Js, !0),
    s[o]("load", e.onLoad, { capture: !0 });
};
function mc() {
  const e = this,
    t = yt(),
    { params: n } = e;
  (e.onTouchStart = fc.bind(e)),
    (e.onTouchMove = cc.bind(e)),
    (e.onTouchEnd = uc.bind(e)),
    n.cssMode && (e.onScroll = pc.bind(e)),
    (e.onClick = dc.bind(e)),
    (e.onLoad = hc.bind(e)),
    Zs || (t.addEventListener("touchstart", gc), (Zs = !0)),
    Tl(e, "on");
}
function vc() {
  Tl(this, "off");
}
var wc = { attachEvents: mc, detachEvents: vc };
const Qs = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function yc() {
  const e = this,
    { realIndex: t, initialized: n, params: i, el: s } = e,
    r = i.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const o = (l in r ? r[l] : void 0) || e.originalParams,
    c = Qs(e, i),
    f = Qs(e, o),
    u = i.enabled;
  c && !f
    ? (s.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !c &&
      f &&
      (s.classList.add(`${i.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && i.grid.fill === "column")) &&
        s.classList.add(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((P) => {
      if (typeof o[P] > "u") return;
      const S = i[P] && i[P].enabled,
        d = o[P] && o[P].enabled;
      S && !d && e[P].disable(), !S && d && e[P].enable();
    });
  const g = o.direction && o.direction !== i.direction,
    p = i.loop && (o.slidesPerView !== i.slidesPerView || g),
    y = i.loop;
  g && n && e.changeDirection(), Se(e.params, o);
  const x = e.params.enabled,
    L = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    u && !x ? e.disable() : !u && x && e.enable(),
    (e.currentBreakpoint = l),
    e.emit("_beforeBreakpoint", o),
    n &&
      (p
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !y && L
        ? (e.loopCreate(t), e.updateSlides())
        : y && !L && e.loopDestroy()),
    e.emit("breakpoint", o);
}
function bc(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let i = !1;
  const s = Te(),
    r = t === "window" ? s.innerHeight : n.clientHeight,
    l = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: r * o, point: a };
      }
      return { value: a, point: a };
    });
  l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < l.length; a += 1) {
    const { point: o, value: c } = l[a];
    t === "window"
      ? s.matchMedia(`(min-width: ${c}px)`).matches && (i = o)
      : c <= n.clientWidth && (i = o);
  }
  return i || "max";
}
var Sc = { setBreakpoint: yc, getBreakpoint: bc };
function Tc(e, t) {
  const n = [];
  return (
    e.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((s) => {
            i[s] && n.push(t + s);
          })
        : typeof i == "string" && n.push(t + i);
    }),
    n
  );
}
function xc() {
  const e = this,
    { classNames: t, params: n, rtl: i, el: s, device: r } = e,
    l = Tc(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: i },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...l), s.classList.add(...t), e.emitContainerClasses();
}
function Ec() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var _c = { addClasses: xc, removeClasses: Ec };
function Cc() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: i } = n;
  if (i) {
    const s = e.slides.length - 1,
      r = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2;
    e.isLocked = e.size > r;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Mc = { checkOverflow: Cc },
  Ii = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Pc(e, t) {
  return function (i) {
    i === void 0 && (i = {});
    const s = Object.keys(i)[0],
      r = i[s];
    if (typeof r != "object" || r === null) {
      Se(t, i);
      return;
    }
    if (
      (e[s] === !0 && (e[s] = { enabled: !0 }),
      s === "navigation" &&
        e[s] &&
        e[s].enabled &&
        !e[s].prevEl &&
        !e[s].nextEl &&
        (e[s].auto = !0),
      ["pagination", "scrollbar"].indexOf(s) >= 0 &&
        e[s] &&
        e[s].enabled &&
        !e[s].el &&
        (e[s].auto = !0),
      !(s in e && "enabled" in r))
    ) {
      Se(t, i);
      return;
    }
    typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0),
      e[s] || (e[s] = { enabled: !1 }),
      Se(t, i);
  };
}
const fi = {
    eventsEmitter: _f,
    update: Nf,
    translate: jf,
    transition: Uf,
    slide: ec,
    loop: sc,
    grabCursor: oc,
    events: wc,
    breakpoints: Sc,
    checkOverflow: Mc,
    classes: _c,
  },
  ci = {};
let rs = class Ve {
  constructor() {
    let t, n;
    for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
      s[r] = arguments[r];
    s.length === 1 &&
    s[0].constructor &&
    Object.prototype.toString.call(s[0]).slice(8, -1) === "Object"
      ? (n = s[0])
      : ([t, n] = s),
      n || (n = {}),
      (n = Se({}, n)),
      t && !n.el && (n.el = t);
    const l = yt();
    if (
      n.el &&
      typeof n.el == "string" &&
      l.querySelectorAll(n.el).length > 1
    ) {
      const f = [];
      return (
        l.querySelectorAll(n.el).forEach((u) => {
          const g = Se({}, n, { el: u });
          f.push(new Ve(g));
        }),
        f
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = bl()),
      (a.device = bf({ userAgent: n.userAgent })),
      (a.browser = Tf()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const o = {};
    a.modules.forEach((f) => {
      f({
        params: n,
        swiper: a,
        extendParams: Pc(n, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const c = Se({}, Ii, o);
    return (
      (a.params = Se({}, c, ci, n)),
      (a.originalParams = Se({}, a.params)),
      (a.passedParams = Se({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((f) => {
          a.on(f, a.params.on[f]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: i } = this,
      s = He(n, `.${i.slideClass}, swiper-slide`),
      r = Ys(s[0]);
    return Ys(t) - r;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: i } = t;
    t.slides = He(n, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const i = this;
    t = Math.min(Math.max(t, 0), 1);
    const s = i.minTranslate(),
      l = (i.maxTranslate() - s) * t + s;
    i.translateTo(l, typeof n > "u" ? 0 : n),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (i) =>
          i.indexOf("swiper") === 0 ||
          i.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (i) =>
              i.indexOf("swiper-slide") === 0 ||
              i.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((i) => {
      const s = t.getSlideClasses(i);
      n.push({ slideEl: i, classNames: s }), t.emit("_slideClass", i, s);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const i = this,
      {
        params: s,
        slides: r,
        slidesGrid: l,
        slidesSizesGrid: a,
        size: o,
        activeIndex: c,
      } = i;
    let f = 1;
    if (typeof s.slidesPerView == "number") return s.slidesPerView;
    if (s.centeredSlides) {
      let u = r[c] ? r[c].swiperSlideSize : 0,
        g;
      for (let p = c + 1; p < r.length; p += 1)
        r[p] &&
          !g &&
          ((u += r[p].swiperSlideSize), (f += 1), u > o && (g = !0));
      for (let p = c - 1; p >= 0; p -= 1)
        r[p] &&
          !g &&
          ((u += r[p].swiperSlideSize), (f += 1), u > o && (g = !0));
    } else if (t === "current")
      for (let u = c + 1; u < r.length; u += 1)
        (n ? l[u] + a[u] - l[c] < o : l[u] - l[c] < o) && (f += 1);
    else for (let u = c - 1; u >= 0; u -= 1) l[c] - l[u] < o && (f += 1);
    return f;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: i } = t;
    i.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && Tn(t, l);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function s() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let r;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      s(), i.autoHeight && t.updateAutoHeight();
    else {
      if (
        (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
        t.isEnd &&
        !i.centeredSlides
      ) {
        const l = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
        r = t.slideTo(l.length - 1, 0, !1, !0);
      } else r = t.slideTo(t.activeIndex, 0, !1, !0);
      r || s();
    }
    i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const i = this,
      s = i.params.direction;
    return (
      t || (t = s === "horizontal" ? "vertical" : "horizontal"),
      t === s ||
        (t !== "horizontal" && t !== "vertical") ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
        i.el.classList.add(`${i.params.containerModifierClass}${t}`),
        i.emitContainerClasses(),
        (i.params.direction = t),
        i.slides.forEach((r) => {
          t === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        i.emit("changeDirection"),
        n && i.update()),
      i
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let i = t || n.params.el;
    if ((typeof i == "string" && (i = document.querySelector(i)), !i))
      return !1;
    (i.swiper = n),
      i.parentNode &&
        i.parentNode.host &&
        i.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0);
    const s = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l =
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(s())
        : He(i, s())[0];
    return (
      !l &&
        n.params.createElements &&
        ((l = hf("div", n.params.wrapperClass)),
        i.append(l),
        He(i, `.${n.params.slideClass}`).forEach((a) => {
          l.append(a);
        })),
      Object.assign(n, {
        el: i,
        wrapperEl: l,
        slidesEl:
          n.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : l,
        hostEl: n.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || Ze(i, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (i.dir.toLowerCase() === "rtl" || Ze(i, "direction") === "rtl"),
        wrongRTL: Ze(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const s = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      s.forEach((r) => {
        r.complete
          ? Tn(n, r)
          : r.addEventListener("load", (l) => {
              Tn(n, l.target);
            });
      }),
      Oi(n),
      (n.initialized = !0),
      Oi(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const i = this,
      { params: s, el: r, wrapperEl: l, slides: a } = i;
    return (
      typeof i.params > "u" ||
        i.destroyed ||
        (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        n &&
          (i.removeClasses(),
          r.removeAttribute("style"),
          l.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(
                s.slideVisibleClass,
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index");
            })),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach((o) => {
          i.off(o);
        }),
        t !== !1 && ((i.el.swiper = null), cf(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Se(ci, t);
  }
  static get extendedDefaults() {
    return ci;
  }
  static get defaults() {
    return Ii;
  }
  static installModule(t) {
    Ve.prototype.__modules__ || (Ve.prototype.__modules__ = []);
    const n = Ve.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Ve.installModule(n)), Ve)
      : (Ve.installModule(t), Ve);
  }
};
Object.keys(fi).forEach((e) => {
  Object.keys(fi[e]).forEach((t) => {
    rs.prototype[t] = fi[e][t];
  });
});
rs.use([xf, Ef]);
const xl = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function vt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function gt(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((i) => n.indexOf(i) < 0)
    .forEach((i) => {
      typeof e[i] > "u"
        ? (e[i] = t[i])
        : vt(t[i]) && vt(e[i]) && Object.keys(t[i]).length > 0
        ? t[i].__swiper__
          ? (e[i] = t[i])
          : gt(e[i], t[i])
        : (e[i] = t[i]);
    });
}
function El(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function _l(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Cl(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Ml(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((i) => i.trim())
      .filter((i) => !!i),
    n = [];
  return (
    t.forEach((i) => {
      n.indexOf(i) < 0 && n.push(i);
    }),
    n.join(" ")
  );
}
function Oc(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Ic(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: i,
    changedParams: s,
    nextEl: r,
    prevEl: l,
    scrollbarEl: a,
    paginationEl: o,
  } = e;
  const c = s.filter(
      (w) => w !== "children" && w !== "direction" && w !== "wrapperClass"
    ),
    {
      params: f,
      pagination: u,
      navigation: g,
      scrollbar: p,
      virtual: y,
      thumbs: x,
    } = t;
  let L, P, S, d, m, b, T, _;
  s.includes("thumbs") &&
    i.thumbs &&
    i.thumbs.swiper &&
    f.thumbs &&
    !f.thumbs.swiper &&
    (L = !0),
    s.includes("controller") &&
      i.controller &&
      i.controller.control &&
      f.controller &&
      !f.controller.control &&
      (P = !0),
    s.includes("pagination") &&
      i.pagination &&
      (i.pagination.el || o) &&
      (f.pagination || f.pagination === !1) &&
      u &&
      !u.el &&
      (S = !0),
    s.includes("scrollbar") &&
      i.scrollbar &&
      (i.scrollbar.el || a) &&
      (f.scrollbar || f.scrollbar === !1) &&
      p &&
      !p.el &&
      (d = !0),
    s.includes("navigation") &&
      i.navigation &&
      (i.navigation.prevEl || l) &&
      (i.navigation.nextEl || r) &&
      (f.navigation || f.navigation === !1) &&
      g &&
      !g.prevEl &&
      !g.nextEl &&
      (m = !0);
  const E = (w) => {
    t[w] &&
      (t[w].destroy(),
      w === "navigation"
        ? (t.isElement && (t[w].prevEl.remove(), t[w].nextEl.remove()),
          (f[w].prevEl = void 0),
          (f[w].nextEl = void 0),
          (t[w].prevEl = void 0),
          (t[w].nextEl = void 0))
        : (t.isElement && t[w].el.remove(),
          (f[w].el = void 0),
          (t[w].el = void 0)));
  };
  s.includes("loop") &&
    t.isElement &&
    (f.loop && !i.loop ? (b = !0) : !f.loop && i.loop ? (T = !0) : (_ = !0)),
    c.forEach((w) => {
      if (vt(f[w]) && vt(i[w]))
        gt(f[w], i[w]),
          (w === "navigation" || w === "pagination" || w === "scrollbar") &&
            "enabled" in i[w] &&
            !i[w].enabled &&
            E(w);
      else {
        const B = i[w];
        (B === !0 || B === !1) &&
        (w === "navigation" || w === "pagination" || w === "scrollbar")
          ? B === !1 && E(w)
          : (f[w] = i[w]);
      }
    }),
    c.includes("controller") &&
      !P &&
      t.controller &&
      t.controller.control &&
      f.controller &&
      f.controller.control &&
      (t.controller.control = f.controller.control),
    s.includes("children") &&
      n &&
      y &&
      f.virtual.enabled &&
      ((y.slides = n), y.update(!0)),
    s.includes("children") && n && f.loop && (_ = !0),
    L && x.init() && x.update(!0),
    P && (t.controller.control = f.controller.control),
    S &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-pagination"),
        o.part.add("pagination"),
        t.el.appendChild(o)),
      o && (f.pagination.el = o),
      u.init(),
      u.render(),
      u.update()),
    d &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (f.scrollbar.el = a),
      p.init(),
      p.updateSize(),
      p.setTranslate()),
    m &&
      (t.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          (r.innerHTML = t.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          t.el.appendChild(r)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          (l.innerHTML = t.hostEl.constructor.prevButtonSvg),
          l.part.add("button-prev"),
          t.el.appendChild(l))),
      r && (f.navigation.nextEl = r),
      l && (f.navigation.prevEl = l),
      g.init(),
      g.update()),
    s.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext),
    s.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev),
    s.includes("direction") && t.changeDirection(i.direction, !1),
    (b || _) && t.loopDestroy(),
    (T || _) && t.loopCreate(),
    t.update();
}
function er(e, t) {
  e === void 0 && (e = {});
  const n = { on: {} },
    i = {},
    s = {};
  gt(n, Ii), (n._emitClasses = !0), (n.init = !1);
  const r = {},
    l = xl.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (l.indexOf(o) >= 0
          ? vt(e[o])
            ? ((n[o] = {}), (s[o] = {}), gt(n[o], e[o]), gt(s[o], e[o]))
            : ((n[o] = e[o]), (s[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
          ? (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
          : (r[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: s, rest: r, events: i }
  );
}
function Ac(e, t) {
  let {
    el: n,
    nextEl: i,
    prevEl: s,
    paginationEl: r,
    scrollbarEl: l,
    swiper: a,
  } = e;
  El(t) &&
    i &&
    s &&
    ((a.params.navigation.nextEl = i),
    (a.originalParams.navigation.nextEl = i),
    (a.params.navigation.prevEl = s),
    (a.originalParams.navigation.prevEl = s)),
    _l(t) &&
      r &&
      ((a.params.pagination.el = r), (a.originalParams.pagination.el = r)),
    Cl(t) &&
      l &&
      ((a.params.scrollbar.el = l), (a.originalParams.scrollbar.el = l)),
    a.init(n);
}
function Lc(e, t, n, i, s) {
  const r = [];
  if (!t) return r;
  const l = (o) => {
    r.indexOf(o) < 0 && r.push(o);
  };
  if (n && i) {
    const o = i.map(s),
      c = n.map(s);
    o.join("") !== c.join("") && l("children"),
      i.length !== n.length && l("children");
  }
  return (
    xl
      .filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (vt(e[o]) && vt(t[o])) {
            const c = Object.keys(e[o]),
              f = Object.keys(t[o]);
            c.length !== f.length
              ? l(o)
              : (c.forEach((u) => {
                  e[o][u] !== t[o][u] && l(o);
                }),
                f.forEach((u) => {
                  e[o][u] !== t[o][u] && l(o);
                }));
          } else e[o] !== t[o] && l(o);
      }),
    r
  );
}
const Bc = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function ui(e, t, n) {
  e === void 0 && (e = {});
  const i = [],
    s = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (l, a) => {
      Array.isArray(l) &&
        l.forEach((o) => {
          const c = typeof o.type == "symbol";
          a === "default" && (a = "container-end"),
            c && o.children
              ? r(o.children, a)
              : o.type &&
                (o.type.name === "SwiperSlide" ||
                  o.type.name === "AsyncComponentWrapper")
              ? i.push(o)
              : s[a] && s[a].push(o);
        });
    };
  return (
    Object.keys(e).forEach((l) => {
      if (typeof e[l] != "function") return;
      const a = e[l]();
      r(a, l);
    }),
    (n.value = t.value),
    (t.value = i),
    { slides: i, slots: s }
  );
}
function Rc(e, t, n) {
  if (!n) return null;
  const i = (f) => {
      let u = f;
      return (
        f < 0 ? (u = t.length + f) : u >= t.length && (u = u - t.length), u
      );
    },
    s = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: l } = n,
    a = e.value.params.loop ? -t.length : 0,
    o = e.value.params.loop ? t.length * 2 : t.length,
    c = [];
  for (let f = a; f < o; f += 1) f >= r && f <= l && c.push(t[i(f)]);
  return c.map(
    (f) => (
      f.props || (f.props = {}),
      f.props.style || (f.props.style = {}),
      (f.props.swiperRef = e),
      (f.props.style = s),
      Me(f.type, { ...f.props }, f.children)
    )
  );
}
const uu = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "breakpointsBase",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(e, t) {
      let { slots: n, emit: i } = t;
      const { tag: s, wrapperTag: r } = e,
        l = ce("swiper"),
        a = ce(null),
        o = ce(!1),
        c = ce(!1),
        f = ce(null),
        u = ce(null),
        g = ce(null),
        p = { value: [] },
        y = { value: [] },
        x = ce(null),
        L = ce(null),
        P = ce(null),
        S = ce(null),
        { params: d, passedParams: m } = er(e);
      ui(n, p, y), (g.value = m), (y.value = p.value);
      const b = () => {
        ui(n, p, y), (o.value = !0);
      };
      (d.onAny = function (E) {
        for (
          var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), O = 1;
          O < w;
          O++
        )
          B[O - 1] = arguments[O];
        i(E, ...B);
      }),
        Object.assign(d.on, {
          _beforeBreakpoint: b,
          _containerClasses(E, w) {
            l.value = w;
          },
        });
      const T = { ...d };
      if (
        (delete T.wrapperClass,
        (u.value = new rs(T)),
        u.value.virtual && u.value.params.virtual.enabled)
      ) {
        u.value.virtual.slides = p.value;
        const E = {
          cache: !1,
          slides: p.value,
          renderExternal: (w) => {
            a.value = w;
          },
          renderExternalUpdate: !1,
        };
        gt(u.value.params.virtual, E), gt(u.value.originalParams.virtual, E);
      }
      $n(() => {
        !c.value && u.value && (u.value.emitSlidesClasses(), (c.value = !0));
        const { passedParams: E } = er(e),
          w = Lc(E, g.value, p.value, y.value, (B) => B.props && B.props.key);
        (g.value = E),
          (w.length || o.value) &&
            u.value &&
            !u.value.destroyed &&
            Ic({
              swiper: u.value,
              slides: p.value,
              passedParams: E,
              changedParams: w,
              nextEl: x.value,
              prevEl: L.value,
              scrollbarEl: S.value,
              paginationEl: P.value,
            }),
          (o.value = !1);
      }),
        Zi("swiper", u),
        Ht(a, () => {
          Pr(() => {
            Bc(u.value);
          });
        }),
        en(() => {
          f.value &&
            (Ac(
              {
                el: f.value,
                nextEl: x.value,
                prevEl: L.value,
                paginationEl: P.value,
                scrollbarEl: S.value,
                swiper: u.value,
              },
              d
            ),
            i("swiper", u.value));
        }),
        tn(() => {
          u.value && !u.value.destroyed && u.value.destroy(!0, !1);
        });
      function _(E) {
        return d.virtual
          ? Rc(u, E, a.value)
          : (E.forEach((w, B) => {
              w.props || (w.props = {}),
                (w.props.swiperRef = u),
                (w.props.swiperSlideIndex = B);
            }),
            E);
      }
      return () => {
        const { slides: E, slots: w } = ui(n, p, y);
        return Me(s, { ref: f, class: Ml(l.value) }, [
          w["container-start"],
          Me(r, { class: Oc(d.wrapperClass) }, [
            w["wrapper-start"],
            _(E),
            w["wrapper-end"],
          ]),
          El(e) && [
            Me("div", { ref: L, class: "swiper-button-prev" }),
            Me("div", { ref: x, class: "swiper-button-next" }),
          ],
          Cl(e) && Me("div", { ref: S, class: "swiper-scrollbar" }),
          _l(e) && Me("div", { ref: P, class: "swiper-pagination" }),
          w["container-end"],
        ]);
      };
    },
  },
  du = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        i = !1;
      const { swiperRef: s } = e,
        r = ce(null),
        l = ce("swiper-slide"),
        a = ce(!1);
      function o(u, g, p) {
        g === r.value && (l.value = p);
      }
      en(() => {
        !s || !s.value || (s.value.on("_slideClass", o), (i = !0));
      }),
        Hr(() => {
          i || !s || !s.value || (s.value.on("_slideClass", o), (i = !0));
        }),
        $n(() => {
          !r.value ||
            !s ||
            !s.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (r.value.swiperSlideIndex = e.swiperSlideIndex),
            s.value.destroyed &&
              l.value !== "swiper-slide" &&
              (l.value = "swiper-slide"));
        }),
        tn(() => {
          !s || !s.value || s.value.off("_slideClass", o);
        });
      const c = ul(() => ({
        isActive: l.value.indexOf("swiper-slide-active") >= 0,
        isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: l.value.indexOf("swiper-slide-prev") >= 0,
        isNext: l.value.indexOf("swiper-slide-next") >= 0,
      }));
      Zi("swiperSlide", c);
      const f = () => {
        a.value = !0;
      };
      return () =>
        Me(
          e.tag,
          {
            class: Ml(`${l.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && s && s.value && s.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: f,
          },
          e.zoom
            ? Me(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof e.zoom == "number" ? e.zoom : void 0,
                },
                [
                  n.default && n.default(c.value),
                  e.lazy &&
                    !a.value &&
                    Me("div", { class: "swiper-lazy-preloader" }),
                ]
              )
            : [
                n.default && n.default(c.value),
                e.lazy &&
                  !a.value &&
                  Me("div", { class: "swiper-lazy-preloader" }),
              ]
        );
    },
  };
function pu(e) {
  let { swiper: t, extendParams: n, emit: i, once: s } = e;
  n({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function r() {
    if (t.params.cssMode) return;
    const o = t.getTranslate();
    t.setTranslate(o),
      t.setTransition(0),
      (t.touchEventsData.velocities.length = 0),
      t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
  }
  function l() {
    if (t.params.cssMode) return;
    const { touchEventsData: o, touches: c } = t;
    o.velocities.length === 0 &&
      o.velocities.push({
        position: c[t.isHorizontal() ? "startX" : "startY"],
        time: o.touchStartTime,
      }),
      o.velocities.push({
        position: c[t.isHorizontal() ? "currentX" : "currentY"],
        time: ht(),
      });
  }
  function a(o) {
    let { currentPos: c } = o;
    if (t.params.cssMode) return;
    const {
        params: f,
        wrapperEl: u,
        rtlTranslate: g,
        snapGrid: p,
        touchEventsData: y,
      } = t,
      L = ht() - y.touchStartTime;
    if (c < -t.minTranslate()) {
      t.slideTo(t.activeIndex);
      return;
    }
    if (c > -t.maxTranslate()) {
      t.slides.length < p.length
        ? t.slideTo(p.length - 1)
        : t.slideTo(t.slides.length - 1);
      return;
    }
    if (f.freeMode.momentum) {
      if (y.velocities.length > 1) {
        const E = y.velocities.pop(),
          w = y.velocities.pop(),
          B = E.position - w.position,
          O = E.time - w.time;
        (t.velocity = B / O),
          (t.velocity /= 2),
          Math.abs(t.velocity) < f.freeMode.minimumVelocity && (t.velocity = 0),
          (O > 150 || ht() - E.time > 300) && (t.velocity = 0);
      } else t.velocity = 0;
      (t.velocity *= f.freeMode.momentumVelocityRatio),
        (y.velocities.length = 0);
      let P = 1e3 * f.freeMode.momentumRatio;
      const S = t.velocity * P;
      let d = t.translate + S;
      g && (d = -d);
      let m = !1,
        b;
      const T = Math.abs(t.velocity) * 20 * f.freeMode.momentumBounceRatio;
      let _;
      if (d < t.maxTranslate())
        f.freeMode.momentumBounce
          ? (d + t.maxTranslate() < -T && (d = t.maxTranslate() - T),
            (b = t.maxTranslate()),
            (m = !0),
            (y.allowMomentumBounce = !0))
          : (d = t.maxTranslate()),
          f.loop && f.centeredSlides && (_ = !0);
      else if (d > t.minTranslate())
        f.freeMode.momentumBounce
          ? (d - t.minTranslate() > T && (d = t.minTranslate() + T),
            (b = t.minTranslate()),
            (m = !0),
            (y.allowMomentumBounce = !0))
          : (d = t.minTranslate()),
          f.loop && f.centeredSlides && (_ = !0);
      else if (f.freeMode.sticky) {
        let E;
        for (let w = 0; w < p.length; w += 1)
          if (p[w] > -d) {
            E = w;
            break;
          }
        Math.abs(p[E] - d) < Math.abs(p[E - 1] - d) ||
        t.swipeDirection === "next"
          ? (d = p[E])
          : (d = p[E - 1]),
          (d = -d);
      }
      if (
        (_ &&
          s("transitionEnd", () => {
            t.loopFix();
          }),
        t.velocity !== 0)
      ) {
        if (
          (g
            ? (P = Math.abs((-d - t.translate) / t.velocity))
            : (P = Math.abs((d - t.translate) / t.velocity)),
          f.freeMode.sticky)
        ) {
          const E = Math.abs((g ? -d : d) - t.translate),
            w = t.slidesSizesGrid[t.activeIndex];
          E < w
            ? (P = f.speed)
            : E < 2 * w
            ? (P = f.speed * 1.5)
            : (P = f.speed * 2.5);
        }
      } else if (f.freeMode.sticky) {
        t.slideToClosest();
        return;
      }
      f.freeMode.momentumBounce && m
        ? (t.updateProgress(b),
          t.setTransition(P),
          t.setTranslate(d),
          t.transitionStart(!0, t.swipeDirection),
          (t.animating = !0),
          si(u, () => {
            !t ||
              t.destroyed ||
              !y.allowMomentumBounce ||
              (i("momentumBounce"),
              t.setTransition(f.speed),
              setTimeout(() => {
                t.setTranslate(b),
                  si(u, () => {
                    !t || t.destroyed || t.transitionEnd();
                  });
              }, 0));
          }))
        : t.velocity
        ? (i("_freeModeNoMomentumRelease"),
          t.updateProgress(d),
          t.setTransition(P),
          t.setTranslate(d),
          t.transitionStart(!0, t.swipeDirection),
          t.animating ||
            ((t.animating = !0),
            si(u, () => {
              !t || t.destroyed || t.transitionEnd();
            })))
        : t.updateProgress(d),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    } else if (f.freeMode.sticky) {
      t.slideToClosest();
      return;
    } else f.freeMode && i("_freeModeNoMomentumRelease");
    (!f.freeMode.momentum || L >= f.longSwipesMs) &&
      (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
  }
  Object.assign(t, {
    freeMode: { onTouchStart: r, onTouchMove: l, onTouchEnd: a },
  });
}
export {
  qc as $,
  Xc as A,
  Ea as B,
  Jc as C,
  ou as D,
  su as E,
  ve as F,
  fu as G,
  au as H,
  ts as I,
  ru as J,
  Qc as K,
  Co as L,
  ol as M,
  Fn as N,
  zc as O,
  rl as P,
  Nc as Q,
  xa as R,
  Yc as S,
  dl as T,
  Zc as U,
  Qo as V,
  Kc as W,
  cu as X,
  al as Y,
  kc as Z,
  Wc as _,
  ce as a,
  eu as a0,
  lu as a1,
  du as a2,
  uu as a3,
  Rn as a4,
  nu as a5,
  pu as a6,
  Hr as a7,
  Fc as a8,
  $n as a9,
  pe as aa,
  Pt as ab,
  Yo as ac,
  Vc as ad,
  kl as ae,
  $c as af,
  Uc as ag,
  Sr as ah,
  jc as ai,
  tu as aj,
  uo as b,
  ul as c,
  ko as d,
  Dc as e,
  Me as f,
  is as g,
  iu as h,
  wn as i,
  Wt as j,
  en as k,
  Uo as l,
  Ko as m,
  Pr as n,
  $r as o,
  Zi as p,
  he as q,
  $i as r,
  Hc as s,
  Gc as t,
  _r as u,
  Ba as v,
  Ht as w,
  It as x,
  tn as y,
  re as z,
};
