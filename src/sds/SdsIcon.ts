import { applyPrefixedCssClass } from "./utilities";
import * as internal from "elix/src/base/internal.js";
import * as template from "elix/src/core/template.js";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

export default class SdsIcon extends ReactiveElement {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      set: "utility",
      size: "medium",
      symbol: "add",
    });
  }

  [internal.render](changed) {
    super[internal.render](changed);

    if (changed.size) {
      const { size } = this[internal.state];
      applyPrefixedCssClass(this[internal.ids].icon, "lwc-icon_", size);
      applyPrefixedCssClass(
        this[internal.ids].boundary,
        "lwc-icon-boundary_",
        size
      );
    }

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
  }

  get set() {
    return this[internal.state].set;
  }
  set set(set) {
    this[internal.setState]({ set });
  }

  get size() {
    return this[internal.state].size;
  }
  set size(size) {
    this[internal.setState]({ size });
  }

  get symbol() {
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
}

customElements.define("sds-icon", SdsIcon);
