import * as internal from "elix/src/base/internal.js";
import html from "elix/src/core/html.js";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

/**
 * Lightning component boilerplate
 */
export default class LightningComponentNameHere extends ReactiveElement {
  get [internal.template]() {
    const result = super[internal.template];

    result.content.append(html`
      <style>
        @import url("src/sds/common.css");
      </style>
    `);
    return result;
  }
}

customElements.define(
  "lightning-component-name-here",
  LightningComponentNameHere
);
