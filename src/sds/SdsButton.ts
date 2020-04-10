import { applyPrefixedCssClass } from "./utilities";
import * as internal from "elix/src/base/internal.js";
import Button from "elix/src/base/Button.js";
import html from "elix/src/core/html.js";

// type ButtonVariant =
//   | "base"
//   | "brand"
//   | "destructive"
//   | "inverse"
//   | "neutral"
//   | "success";

/**
 * SDS Button
 */
export default class SdsButton extends Button {
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
      applyPrefixedCssClass(this, "lwc-button_", this[internal.state].variant);
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

  /**
   * The variant changes the appearance of the button.
   *
   * @default neutral
   */
  get variant(): string {
    return this[internal.state].variant;
  }
  set variant(variant) {
    this[internal.setState]({ variant });
  }
}
