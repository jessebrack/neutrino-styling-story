import * as internal from "elix/src/base/internal.js";
import Menu from "elix/src/base/Menu.js";
import html from "elix/src/core/html.js";
import CarbonStyleMixin from "./CarbonStyleMixin";

/**
 * Carbon Menu
 */
export default class CarbonMenu extends CarbonStyleMixin(Menu) {
  get [internal.template]() {
    const result = super[internal.template];

    result.content.append(html`
      <style>
        /* .bx--list-box__menu { */
        :host {
          /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); */
          /* position: absolute; */
          /* left: 0; */
          /* right: 0; */
          /* width: 100%; */
          background-color: var(--cds-ui-01, #f4f4f4);
          /* max-height: 0; */
          /* transition: max-height 0.11s cubic-bezier(0.2, 0, 0.38, 0.9); */
          overflow-y: auto;
          /* z-index: 9100; */
        }

        /* .bx--list-box--expanded .bx--list-box__menu { */
        :host {
          /* max-height: 8.75rem; */
        }
      </style>
    `);

    return result;
  }
}

customElements.define("carbon-menu", CarbonMenu);
