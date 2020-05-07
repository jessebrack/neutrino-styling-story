import * as internal from "elix/src/base/internal.js";
import Popup from "elix/src/base/Popup.js";
import CarbonOverlayFrame from "./CarbonOverlayFrame";
import CarbonStyleMixin from "./CarbonStyleMixin";

/**
 * Carbon Popup
 */
export default class CarbonPopup extends CarbonStyleMixin(Popup) {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      framePartType: CarbonOverlayFrame,
    });
  }
}

customElements.define("carbon-popup", CarbonPopup);
