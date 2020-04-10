import { applyPrefixedCssClass } from "./utilities";
import * as internal from "elix/src/base/internal.js";
import Button from "elix/src/base/Button.js";
import html from "elix/src/core/html.js";

/**
 * SDS Button
 */
export default class SdsButton extends Button {
  [internal.render](changed) {
    super[internal.render](changed);

    // Apply variant class.
    if (changed.variant) {
      applyPrefixedCssClass(
        this[internal.ids].inner,
        "lwc-button_",
        this[internal.state].variant
      );
    }
  }

  get [internal.template]() {
    const result = super[internal.template];

    const inner = result.content.getElementById("inner");
    if (inner) {
      inner.classList.add("lwc-button");
    }

    result.content.append(html`
      <style>
        @import url("src/sds/common.css");
        @import url("src/sds/SdsButton.css");
      </style>
    `);
    return result;
  }

  /**
   * The specific appearance variation shown by the element.
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
