import * as internal from "elix/src/base/internal.js";
import Popup from "elix/src/base/Popup.js";
import SDSOverlayFrame from "./SDSOverlayFrame";

/**
 * SDS popup
 */
export default class SDSPopup extends Popup {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      framePartType: SDSOverlayFrame,
    });
  }
}

customElements.define("sds-popup", SDSPopup);
