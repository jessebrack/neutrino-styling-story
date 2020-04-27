import * as internal from "elix/src/base/internal.js";
import MenuButton from "elix/src/base/MenuButton.js";
import LightningButtonIcon from "./LightningButtonIcon.js";
import LightningMenu from "./LightningMenu.js";
import LightningPopup from "./LightningPopup.js";

// HACK: Force rollup to include components we depend upon.
if (LightningButtonIcon) {
}
if (LightningMenu) {
}
if (LightningPopup) {
}

/**
 * Lightning button menu.
 *
 * Note: Lightning calls this a "button menu"; Elix calls this a "menu button".
 * They're the same thing.
 */
export default class LightningButtonMenu extends MenuButton {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      menuPartType: LightningMenu,
      popupPartType: LightningPopup,
      sourcePartType: LightningButtonIcon,
      symbol: "chevrondown",
      variant: "neutral",
    });
  }

  [internal.render](changed) {
    super[internal.render](changed);

    if (changed.size) {
      const { size } = this[internal.state];
      const source = this[internal.ids].source as any;
      if ("size" in source) {
        source.size = size;
      }
    }

    if (changed.symbol) {
      const { symbol } = this[internal.state];
      const source = this[internal.ids].source as any;
      if ("symbol" in source) {
        source.symbol = symbol;
      }
    }

    if (changed.variant) {
      const { variant } = this[internal.state];
      const source = this[internal.ids].source as any;
      if ("variant" in source) {
        source.variant = variant;
      }
    }
  }

  get size(): string {
    return this[internal.state].size;
  }
  set size(size) {
    this[internal.setState]({ size });
  }

  get symbol(): string {
    return this[internal.state].symbol;
  }
  set symbol(symbol) {
    this[internal.setState]({ symbol });
  }

  get variant(): string {
    return this[internal.state].variant;
  }
  set variant(variant) {
    this[internal.setState]({ variant });
  }
}

customElements.define("lightning-button-menu", LightningButtonMenu);
