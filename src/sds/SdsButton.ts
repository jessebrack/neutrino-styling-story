import * as internal from "elix/src/base/internal.js";
import Button from "elix/src/base/Button.js";
import html from "elix/src/core/html.js";

/**
 * SDS variation of an Elix Button.
 */
export default class SdsButton extends Button {
  /**
   * SDS Buttons come with a set of variants to change the visual
   * display depending on the action a user is taking
   */
  get variant() {
    return this.variant;
  }
  set variant(variant) {
    this[internal.setState]({ variant });
  }

  [internal.render](changed) {
    super[internal.render](changed);
    // Add base class at firstRender
    if (this[internal.firstRender]) {
      this[internal.ids].inner.classList.add("lwc-button");
    }
    // Append variant class, if attribute exist
    if (changed.variant) {
      // Remove all existing variant classes.
      const inner = this[internal.ids].inner;
      const variantClass = `lwc-button_${this[internal.state].variant}`;
      inner.classList.forEach(existingClass => {
        if (
          existingClass.startsWith("lwc-button_") &&
          existingClass !== variantClass
        ) {
          inner.classList.remove(existingClass);
        }
      });
      // Add the new variant class.
      inner.classList.add(variantClass);
    }
  }

  get [internal.template]() {
    const result = super[internal.template];
    result.content.append(html`
      <style>
        @import url("src/sds/common.css");
        @import url("src/sds/SdsButton.css");
      </style>
    `);
    return result;
  }
}
