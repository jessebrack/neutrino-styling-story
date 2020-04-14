import * as internal from "elix/src/base/internal.js";
import * as template from "elix/src/core/template.js";
import MenuItem from "elix/src/base/MenuItem.js";

export default class SdsMenuItem extends MenuItem {
  get [internal.template]() {
    return template.html`
      <style>
        @import url("src/sds/common.css");
        @import url("src/sds/SdsMenu.css");

        /* TODO: Fold into CSS */
        :host([selected]) .lwc-menuitem__content {
          background-color:var(--lwc-c-menuitem-color-background-active, #f3f2f2);
        }
      </style>
      <div class="lwc-menuitem">
        <div class="lwc-menuitem__content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("sds-menu-item", SdsMenuItem);
