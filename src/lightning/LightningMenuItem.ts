import * as internal from "elix/src/base/internal.js";
import MenuItem from "elix/src/base/MenuItem.js";
import * as template from "elix/src/core/template.js";

export default class LightningMenuItem extends MenuItem {
  get [internal.template]() {
    return template.html`
      <style>
        @import url("src/sds/common.css");
        @import url("src/lightning/LightningMenu.css");

        /* TODO: Fold into CSS */
        :host {
          outline: none;
        }
        
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

customElements.define("lightning-menu-item", LightningMenuItem);
