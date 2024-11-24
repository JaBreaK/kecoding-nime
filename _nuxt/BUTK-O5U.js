import { g as e } from "./CS_v0reC.js";
let r = 0;
function u() {
  const n = e(),
    { name: t = "unknown" } = (n == null ? void 0 : n.type) || {};
  return `${t}-${++r}`;
}
export { u };
