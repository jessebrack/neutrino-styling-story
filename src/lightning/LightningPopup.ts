import * as internal from "elix/src/base/internal.js";
import Popup from "elix/src/base/Popup.js";
import LightningOverlayFrame from "./LightningOverlayFrame";

/**
 * Lightning popup
 */
export default class LightningPopup extends Popup {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      framePartType: LightningOverlayFrame,
    });
  }
}

customElements.define("lightning-popup", LightningPopup);
