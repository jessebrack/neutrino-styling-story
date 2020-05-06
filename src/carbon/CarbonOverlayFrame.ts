import * as internal from "elix/src/base/internal.js";
import OverlayFrame from "elix/src/base/OverlayFrame.js";
import html from "elix/src/core/html.js";
import CarbonStyleMixin from "./CarbonStyleMixin";

/**
 * Carbon OverlayFrame.
 */
export default class CarbonOverlayFrame extends CarbonStyleMixin(OverlayFrame) {
  get [internal.template]() {
    const result = super[internal.template];

    /**
     * Take existing slot and wrap it in HTMLElement with class
     */
    const defaultSlot = result.content.querySelector("slot:not([name])");
    if (defaultSlot) {
      defaultSlot.replaceWith(html`
        <div class="bx--dropdown-list">
          <slot></slot>
        </div>
      `);
    }

    /**
     * Need to setup custom props to keep the style of Carbon
     * dropdown while still be able to invoke the animation. (transition prop doesn't work ATM)
     *
     * I could not apply the class to the custom element because it
     * had specificity issues when it came to the display property
     */
    result.content.append(
      html`
        <style>
          .bx--dropdown-list {
            position: var(--bx-dropdown-position);
            max-height: var(--bx-dropdown-height);
            transition: var(--bx-dropdown-transition);
          }
        </style>
      `
    );
    return result;
  }
}

customElements.define("carbon-overlay-frame", CarbonOverlayFrame);
