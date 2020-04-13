import { applyPrefixedCssClass } from "./utilities";
import * as internal from "elix/src/base/internal.js";
import * as template from "elix/src/core/template.js";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

/**
 * SdsIcon represents common User Interface iconography. The Icons comes in 5 sets:
 *
 *  - Utility: No Background, common user interface iconography [In PoC]
 *  - Action: Represent actions a user can take on any given screen.
 *  - Standard: Represent entities and objects within Salesforce. [In PoC]
 *  - Custom: For the identity of user created objects.
 *  - Doctypes: Doctype icons represent a type of file when a preview or image is unavailable
 *
 * @param {string} boundarySize Sets dimensions of bounding container holding the SVG.
 * @param {string} size Sets dimensions of the SVG icon.
 * @param {string} set Grabs sprite sheet set.
 * @param {string} symbol Points to name of ID in sprite sheet.
 * @param {string} variant Sets color variant on SVG icon.
 */
export default class SdsIcon extends ReactiveElement {
  /**
   * Sets dimensions of bounding container holding the SVG.
   *
   * @default null
   */
  get boundarySize(): string {
    return this[internal.state].boundarySize;
  }
  set boundarySize(boundarySize) {
    this[internal.setState]({ boundarySize });
  }

  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      set: "utility",
      symbol: "add",
    });
  }

  [internal.render](changed) {
    super[internal.render](changed);

    /**
     * Every icon comes with a boundary, this boundary size can be alter independently from the icon size.
     * Sizes range from x-large to xx-small. Changing the boundary will not change the size of the icon.
     *
     * By default, the icon boundary is the size of the icon.
     */
    if (changed.boundarySize) {
      const { boundarySize } = this[internal.state];
      applyPrefixedCssClass(
        this[internal.ids].boundary,
        "lwc-icon-boundary_",
        boundarySize
      );
    }

    /**
     * Icons accept a sizing class that will change the dimensions of the SVG icon.
     * Sizes range from x-large to xx-small. Changing the size of the icon is independent of the icons boundary size.
     *
     * By default, utility icons are 16px by 16px. For action, custom, doctype, and standard sets, the default is 24px by 24px.
     */
    if (changed.size) {
      const { size } = this[internal.state];
      applyPrefixedCssClass(this[internal.ids].icon, "lwc-icon_", size);
    }

    /**
     * Five separate SVG sprites are used to create icons — action, custom, doctype, standard and utility.
     * Link to the icon SVG sprite by targeting the icon’s hash/ID value in the use href attribute.
     */
    if (changed.set || changed.symbol) {
      const { set, symbol } = this[internal.state];
      applyPrefixedCssClass(
        this[internal.ids].icon,
        `lwc-icon-${set}-`,
        symbol
      );

      const path = `public/icons/${set}/symbols.svg#${symbol}`;
      const useEl = this[internal.ids].icon.querySelector("use");
      useEl.setAttribute("xlink:href", path);
    }

    /**
     * Icons can have their color modified by overriding the CSS custom property, --lwc-c-icon-color inside of :host.
     *
     * SDS provide three color variants for user feedback states such as success, warning, and error.
     * SDS also provides a muted color variant where an icon doesn't required as much emphasis.
     */
    if (changed.variant) {
      const { variant } = this[internal.state];
      applyPrefixedCssClass(this[internal.ids].icon, "lwc-icon_", variant);
    }
  }

  /**
   * The sprite sheet set that contains the SVGs
   *
   * @default utility
   */
  get set(): string {
    return this[internal.state].set;
  }
  set set(set) {
    this[internal.setState]({ set });
  }

  /**
   * Sets dimensions of the SVG icon. Default inherits a size of 1rem.
   *
   * @default 1rem
   */
  get size(): string {
    return this[internal.state].size;
  }
  set size(size) {
    this[internal.setState]({ size });
  }

  /**
   * Points to name of ID in sprite sheet.
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
    return template.html`
      <style>
        @import url("src/sds/common.css");
        @import url("src/sds/SdsIcon.css");
      </style>
      <span id="boundary" class="lwc-icon-boundary" part="icon-source">
				<span id="icon" class="lwc-icon">
					<svg class="lwc-svg" aria-hidden="true">
						<use xlink:href=""></use>
					</svg>
        </span>
      </span>
    `;
  }

  /**
   * Sets color variant on SVG icon.
   */
  get variant(): string {
    return this[internal.state].variant;
  }
  set variant(variant) {
    this[internal.setState]({ variant });
  }
}

customElements.define("sds-icon", SdsIcon);
