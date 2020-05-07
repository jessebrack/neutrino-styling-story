import Button from "elix/src/base/Button.js";
import * as internal from "elix/src/base/internal.js";
import CarbonStyleMixin from "./CarbonStyleMixin";

/**
 * Carbon Button
 */
export default class CarbonDropdownSource extends CarbonStyleMixin(Button) {
  [internal.render](changed) {
    super[internal.render](changed);

    if (this[internal.firstRender]) {
      this.classList.add("bx--list-box__field");
    }
  }

  get [internal.template]() {
    const result = super[internal.template];

    const inner = result.content.querySelector('[part~="inner"]');
    if (inner) {
      inner.classList.add("bx--dropdown-text");
    }

    return result;
  }
}

customElements.define("carbon-dropdown-source", CarbonDropdownSource);
