import DropdownList from "elix/src/base/DropdownList.js";
import * as internal from "elix/src/base/internal.js";
import html from "elix/src/core/html.js";
import LightningButton from "./LightningButton";
import LightningMenu from "./LightningMenu";
import LightningPopup from "./LightningPopup";
import LightningPopupToggle from "./LightningPopupToggle";

// HACK: Force rollup to include components we depend upon.
if (LightningButton) {
}
if (LightningMenu) {
}
if (LightningPopup) {
}
if (LightningPopupToggle) {
}

/**
 * Lightning dropdown list.
 *
 * Lightning blueprints refer to this as a picklist, while the closest Lightning
 * component to this is called a "combo box" — but to the rest of the world, a
 * combo box includes an editable input element.
 */
export default class LightningDropdownList extends DropdownList {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      horizontalAlign: "stretch",
      menuPartType: LightningMenu,
      popupPartType: LightningPopup,
      popupTogglePartType: LightningPopupToggle,
      sourcePartType: LightningButton,
    });
  }

  [internal.render](changed) {
    super[internal.render](changed);

    // Pass symbol to popup toggle.
    if (changed.popupTogglePartType || changed.symbol) {
      const { symbol } = this[internal.state];
      const popupToggle = this[internal.ids].popupToggle as any;
      if ("symbol" in popupToggle) {
        popupToggle.symbol = symbol;
      }
    }

    // Pass the variant attribute down to the source element.
    if (changed.variant) {
      const { variant } = this[internal.state];
      const source = this[internal.ids].source as any;
      if ("variant" in source) {
        source.variant = variant;
      }
    }
  }

  get [internal.template]() {
    const result = super[internal.template];

    result.content.append(
      html`
        <style>
          :host {
            max-width: 15rem;
            min-width: 12rem;
          }

          [part~="value"] {
            color: currentColor;
            flex: 1;
          }
        </style>
      `
    );

    return result;
  }

  get variant(): string {
    return this.variant;
  }
  set variant(variant) {
    this[internal.setState]({ variant });
  }
}

customElements.define("lightning-dropdown-list", LightningDropdownList);
