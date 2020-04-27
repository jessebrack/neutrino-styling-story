import * as internal from "elix/src/core/internal.js";
import ReactiveElement from "elix/src/core/ReactiveElement.js";
import * as template from "elix/src/core/template.js";
import LightningIcon from "./LightningIcon";

// HACK: Force rollup to include components we depend upon.
if (LightningIcon) {
}

export default class LightningPopupToggle extends ReactiveElement {
  get [internal.template]() {
    // From Brandon: When an icon is inside of a button element, SDS CSS expects
    // there to be a wrapping element.
    // TODO: If this isn't actually inside a button, do we still need the wrapper?
    return template.html`
      <div class="lwc-button__icon-right">
        <lightning-icon symbol="chevrondown"></lightning-icon>
      </div>
    `;
  }
}

customElements.define("lightning-popup-toggle", LightningPopupToggle);
