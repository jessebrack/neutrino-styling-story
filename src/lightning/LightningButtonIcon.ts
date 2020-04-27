import Button from "elix/src/base/Button.js";
import * as internal from "elix/src/base/internal.js";
import html from "elix/src/core/html.js";
import { applyPrefixedCssClass } from "../utilities";
import LightningIcon from "./LightningIcon";

// HACK: Force rollup to include components we depend upon.
if (LightningIcon) {
}

/**
 * Lightning button with an icon
 */
export default class LightningButtonIcon extends Button {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      variant: "bare",
      symbol: "add",
      size: "medium",
    });
  }

  [internal.render](changed) {
    super[internal.render](changed);

    // Apply variant class.
    if (changed.variant) {
      applyPrefixedCssClass(
        this[internal.ids].inner,
        "lwc-button-icon_",
        this[internal.state].variant
      );
    }

    // Get symbol and pass it to icon component
    if (changed.symbol) {
      const icon = this[internal.ids].icon;
      if ("symbol" in icon) {
        (<any>icon).symbol = this[internal.state].symbol;
      }
    }

    // Get size and set it to the icon boundarySize
    if (changed.size) {
      const icon = this[internal.ids].icon;
      const size = this[internal.state].size;
      if ("boundarySize" in icon) {
        (<any>icon).boundarySize = size;
      }
    }
  }

  /**
   * The dimensions of the button icon. Value gets passed down to icon component
   * to set boundarySize.
   *
   * @default medium
   */
  get size(): string {
    return this[internal.state].size;
  }
  set size(size) {
    this[internal.setState]({ size });
  }

  /**
   * Points to name of ID in sprite sheet. Value gets passed down to icon component.
   * Name of symbol needs to exist as an id in the sprite sheet to display.
   *
   * @default add
   */
  get symbol(): string {
    return this[internal.state].symbol;
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
    slot.replaceWith(html`<lightning-icon id="icon"></lightning-icon>`);

    result.content.append(
      html`
        <style>
          @import url("src/sds/common.css");
          @import url("src/lightning/LightningButtonIcon.css");
        </style>
      `
    );

    return result;
  }

  /**
   * The specific appearance variation shown by the element.
   *
   * @default bare
   */
  get variant(): string {
    return this[internal.state].variant;
  }
  set variant(variant) {
    this[internal.setState]({ variant });
  }
}

customElements.define("lightning-button-icon", LightningButtonIcon);
