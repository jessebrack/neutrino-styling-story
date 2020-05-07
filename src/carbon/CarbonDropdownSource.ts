import Button from "elix/src/base/Button.js";
import * as internal from "elix/src/base/internal.js";
import html from "elix/src/core/html.js";
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

    result.content.append(html`
      <style>
        :host {
          display: inline-block;
        }

        [part~="inner"] {
          display: inline-flex;
        }

        /* Don't want Carbon right padding. */
        .bx--dropdown-text {
          padding: 0 1rem;
        }
      </style>
    `);

    return result;
  }
}

customElements.define("carbon-dropdown-source", CarbonDropdownSource);
