import * as internal from "elix/src/core/internal.js";
import ReactiveElement from "elix/src/core/ReactiveElement.js";
import * as template from "elix/src/core/template.js";
import SDSIcon from "./SDSIcon";

// HACK: Force rollup to include components we depend upon.
if (SDSIcon) {
}

export default class SDSPopupToggle extends ReactiveElement {
  get [internal.template]() {
    // From Brandon: When an icon is inside of a button element, SDS CSS expects
    // there to be a wrapping element.
    // TODO: If this isn't actually inside a button, do we still need the wrapper?
    return template.html`
      <div class="lwc-button__icon-right">
        <sds-icon symbol="chevrondown"></sds-icon>
      </div>
    `;
  }
}

customElements.define("sds-popup-toggle", SDSPopupToggle);
