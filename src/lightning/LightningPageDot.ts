import Button from "elix/src/base/Button";
import * as internal from "elix/src/base/internal";
import html from "elix/src/core/html";

/**
 * Lightning page dot
 *
 * This is used by the Carousel component and its variations.
 */
export default class LightningPageDot extends Button {
  get [internal.template]() {
    const result = super[internal.template];
    result.content.append(
      html`
        <style>
          @import url("src/lightning/LightningPageDot.css");
        </style>
      `
    );
    return result;
  }
}

customElements.define("lightning-page-dot", LightningPageDot);
