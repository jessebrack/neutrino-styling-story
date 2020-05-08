import * as internal from "elix/src/base/internal.js";
import MenuItem from "elix/src/base/MenuItem.js";
import html from "elix/src/core/html.js";
import CarbonStyleMixin from "./CarbonStyleMixin";

/**
 * Carbon MenuItem
 */
export default class CarbonMenuItem extends CarbonStyleMixin(MenuItem) {
  get [internal.template]() {
    const result = super[internal.template];

    result.content.append(html`
      <style>
        :host {
          font-size: var(--cds-body-short-01-font-size, 0.875rem);
          font-weight: var(--cds-body-short-01-font-weight, 400);
          line-height: var(--cds-body-short-01-line-height, 1.125rem);
          letter-spacing: var(--cds-body-short-01-letter-spacing, 0.16px);
          height: 2.5rem;
          color: var(--cds-text-02, #393939);
          cursor: pointer;
          -webkit-user-select: none;
          user-select: none;
          position: relative;
          transition: background 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
        }

        :host([selected]) {
          background-color: var(--cds-hover-ui, #e5e5e5);
          color: var(--cds-text-01, #161616);
          border-color: transparent;
        }
      </style>

      <div class="bx--list-box__menu-item__option">
        <slot></slot>
      </div>
    `);

    return result;
  }
}

customElements.define("carbon-menu-item", CarbonMenuItem);
