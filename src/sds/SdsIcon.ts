import * as internal from "elix/src/base/internal.js";
import * as template from "elix/src/core/template.js";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

export default class SdsIcon extends ReactiveElement {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      boundarySize: "",
      set: "utility",
      symbol: "add",
    });
  }

  get boundarySize() {
    return this[internal.state].boundarySize;
  }
  set boundarySize(boundarySize) {
    this[internal.setState]({ boundarySize });
  }

  get set() {
    return this[internal.state].set;
  }
  set set(set) {
    this[internal.setState]({ set });
  }

  get symbol() {
    return this[internal.state].symbol;
  }
  set symbol(symbol) {
    this[internal.setState]({ symbol });
  }

  [internal.render](changed) {
    super[internal.render](changed);

    if (changed.size) {
      const computedSizeClassName = `lwc-icon_${this[internal.state].size}`;
      this[internal.ids].icon.classList.add(computedSizeClassName);
    }

    if (changed.boundarySize) {
      const { boundarySize } = this[internal.state];
      const computedSizeClassName = `lwc-icon-boundary_${boundarySize}`;
      this[internal.ids].boundary.classList.add(computedSizeClassName);
    }

    if (changed.set || changed.symbol) {
      const computedSizeClassName = `lwc-icon-${this[internal.state].set}-${
        this[internal.state].symbol
      }`;
      this[internal.ids].icon.classList.add(computedSizeClassName);
      const path = `public/icons/${this[internal.state].set}/symbols.svg#${
        this[internal.state].symbol
      }`;
      const useEl = this[internal.ids].icon.querySelector("use");
      useEl.setAttribute("xlink:href", path);
    }
  }

  get size() {
    return this.size;
  }
  set size(size) {
    this[internal.setState]({ size });
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
