import * as internal from "elix/src/base/internal.js";
import ListBox from "elix/src/base/ListBox.js";
import html from "elix/src/core/html.js";

/**
 * Lightning component boilerplate
 */
export default class LightningListBox extends ListBox {
  get [internal.template]() {
    const result = super[internal.template];

    result.content.append(html`
      <style>
        @import url("src/sds/common.css");
        @import url("src/lightning/LightningListBox.css");
      </style>
    `);
    return result;
  }
}

customElements.define("lightning-list-box", LightningListBox);
