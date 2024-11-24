import { aL as n } from "./CPIMTh_-.js";
import "./CS_v0reC.js";
class a extends n {
  constructor() {
    super(),
      typeof screen < "u" &&
        typeof screen.orientation < "u" &&
        screen.orientation.addEventListener("change", () => {
          const e = screen.orientation.type;
          this.notifyListeners("screenOrientationChange", { type: e });
        });
  }
  async orientation() {
    if (typeof screen > "u" || !screen.orientation)
      throw this.unavailable(
        "ScreenOrientation API not available in this browser"
      );
    return { type: screen.orientation.type };
  }
  async lock(e) {
    if (typeof screen > "u" || !screen.orientation || !screen.orientation.lock)
      throw this.unavailable(
        "ScreenOrientation API not available in this browser"
      );
    try {
      await screen.orientation.lock(e.orientation);
    } catch {
      throw this.unavailable(
        "ScreenOrientation API not available in this browser"
      );
    }
  }
  async unlock() {
    if (
      typeof screen > "u" ||
      !screen.orientation ||
      !screen.orientation.unlock
    )
      throw this.unavailable(
        "ScreenOrientation API not available in this browser"
      );
    try {
      screen.orientation.unlock();
    } catch {
      throw this.unavailable(
        "ScreenOrientation API not available in this browser"
      );
    }
  }
}
export { a as ScreenOrientationWeb };
