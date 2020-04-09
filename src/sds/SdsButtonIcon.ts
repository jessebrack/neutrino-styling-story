import * as internal from "elix/src/base/internal.js";
import html from "elix/src/core/html.js";
import SdsButton from "./SdsButton";
import SdsIcon from "./SdsIcon";

/**
 * SDS button with an icon
 */
export default class SdsButtonIcon extends SdsButton {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      variant: "bare",
      symbol: "chevrondown",
      size: "medium",
    });
  }

  [internal.render](changed) {
    super[internal.render](changed);

    if (changed.variant) {
      const variant = this[internal.state].variant;
      const computedSizeClassName = `lwc-button-icon_${variant}`;
      this[internal.ids].inner.classList.add(computedSizeClassName);
    }

    if (changed.symbol) {
      (<SdsIcon>this[internal.ids].icon).symbol = this[internal.state].symbol;
    }

    if (changed.size) {
      const icon = <SdsIcon>this[internal.ids].icon;
      const size = this[internal.state].size;
      icon.boundarySize = size;
    }
  }

  get size() {
    return this.size;
  }
  set size(size) {
    this[internal.setState]({ size });
  }

  get symbol() {
    return this.symbol;
  }
  set symbol(symbol) {
    this[internal.setState]({ symbol });
  }

  get [internal.template]() {
    const result = super[internal.template];

    // Add class to inner button.
    const inner = result.content.getElementById("inner");
    if (inner) {
      inner.classList.add("lwc-button-icon");
    }

    // Seal off the default slot with an icon.
    const slot = result.content.querySelector("slot:not([name])");
    slot.replaceWith(html`<sds-icon id="icon"></sds-icon>`);

    result.content.append(
      html`
        <style>
          @import url("src/sds/SdsButtonIcon.css");
        </style>
      `
    );

    return result;
  }

  get variant() {
    return this[internal.state].variant;
  }
  set variant(variant) {
    this[internal.setState]({ variant });
  }
}
