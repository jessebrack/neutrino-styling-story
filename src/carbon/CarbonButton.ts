import Button from "elix/src/base/Button.js";
import * as internal from "elix/src/base/internal.js";
import { applyPrefixedCssClass } from "../utilities";
import CarbonStyleMixin from "./CarbonStyleMixin";

/**
 * Carbon Button
 */
export default class CarbonButton extends CarbonStyleMixin(Button) {
  [internal.render](changed) {
    super[internal.render](changed);

    // Apply variant class.
    if (changed.variant) {
      applyPrefixedCssClass(
        this[internal.ids].inner,
        "bx--btn--",
        this[internal.state].variant
      );
    }
  }

  get [internal.template]() {
    const result = super[internal.template];

    const inner = result.content.querySelector('[part~="inner"]');
    if (inner) {
      inner.classList.add("bx--btn");
    }

    return result;
  }

  /**
   * Carbon Buttons come with a set of variants to change the visual display
   * depending on the action a user is taking.
   */
  get variant() {
    return this.variant;
  }
  set variant(variant) {
    this[internal.setState]({ variant });
  }
}

customElements.define("carbon-button", CarbonButton);
