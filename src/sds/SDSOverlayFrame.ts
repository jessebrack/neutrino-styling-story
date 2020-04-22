import * as internal from "elix/src/base/internal.js";
import OverlayFrame from "elix/src/base/OverlayFrame.js";
import html from "elix/src/core/html.js";
import * as template from "elix/src/core/template.js";

/**
 * SDS overlay frame.
 *
 * In SDS, this isn't offered as a standalone component, but doing so here means that
 * we can easily add the SDS overlay style to anything with a popup.
 */
export default class SDSOverlayFrame extends OverlayFrame {
  get [internal.template]() {
    const result = super[internal.template];
    /**
     * Take existing slot and wrap it in HTMLElement with class
     */
    const slot = result.content.querySelector("slot:not([name])");
    const wrapper = html`
      <div class="lwc-dropdown-container">
        <slot></slot>
      </div>
    `;
    template.replace(slot, wrapper);

    result.content.append(
      html`
        <style>
          @import url("src/sds/common.css");
          @import url("src/sds/SDSOverlayFrame.css");
        </style>
      `
    );
    return result;
  }
}

customElements.define("sds-overlay-frame", SDSOverlayFrame);
