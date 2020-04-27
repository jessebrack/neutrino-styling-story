import * as internal from "elix/src/base/internal.js";
import Menu from "elix/src/base/Menu.js";
import html from "elix/src/core/html.js";

/**
 * Lightning Menu
 */
export default class LightningMenu extends Menu {
  get [internal.template]() {
    const result = super[internal.template];
    const wrapper = result.content.getElementById("content");
    wrapper.classList.add("lwc-menu");
    result.content.append(
      html`
        <style>
          :host {
            font-size: var(--lwc-c-menu-font-size, inherit);
          }
        </style>
      `
    );
    return result;
  }
}

customElements.define("lightning-menu", LightningMenu);
