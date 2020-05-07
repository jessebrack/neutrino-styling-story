import DropdownList from "elix/src/base/DropdownList.js";
import * as internal from "elix/src/base/internal.js";
import html from "elix/src/core/html.js";
import CarbonDropdownSource from "./CarbonDropdownSource";
import CarbonPopup from "./CarbonPopup";
// import DropdownSource, { dropdownArrow } from "./dropdownSource/index.js";
import CarbonStyleMixin from "./CarbonStyleMixin";

// HACK: Force rollup to include components we depend upon.
if (CarbonDropdownSource) {
}

/**
 * Carbon variation of an Elix [DropdownList](https://component.kitchen/elix/DropdownList).
 */
export default class CarbonDropdownList extends CarbonStyleMixin(DropdownList) {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      popupPartType: CarbonPopup,
      // popupTogglePartType: dropdownArrow,
      sourcePartType: CarbonDropdownSource,
      valuePartType: "span",
    });
  }

  [internal.render](changed) {
    super[internal.render](changed);

    if (this[internal.firstRender]) {
      this.classList.add("bx--dropdown");
      this.classList.add("bx--list-box");
    }

    if (changed.opened) {
      const { opened } = this[internal.state];
      this.classList.toggle("bx--dropdown--open", opened);
      this.classList.toggle("bx--list-box--expanded", opened);
    }

    if (changed.valuePartType) {
      this[internal.ids].value.classList.add("bx--list-box__label");
    }
  }

  get [internal.template]() {
    const result = super[internal.template];

    result.content.append(html`
      <style>
        /* Use host styling instead of class styling so we can style from inside */

        /* .bx--list-box { */
        :host {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-size: 100%;
          font-family: inherit;
          vertical-align: initial;
          position: relative;
          width: 100%;
          height: 2.5rem;
          max-height: 2.5rem;
          background-color: var(--cds-field-01, #f4f4f4);
          border: none;
          border-bottom: 1px solid var(--cds-ui-04, #8d8d8d);
          cursor: pointer;
          color: var(--cds-text-01, #161616);
          transition: all 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
        }

        /* .bx--dropdown { */
        :host {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-size: 100%;
          font-family: inherit;
          vertical-align: initial;
          outline-offset: -2px;
          position: relative;
          list-style: none;
          display: block;
          background-color: var(--cds-field-01, #f4f4f4);
          border: none;
          border-bottom: 1px solid var(--cds-ui-04, #8d8d8d);
          width: 100%;
          height: 2.5rem;
          cursor: pointer;
          color: var(--cds-text-01, #161616);
          outline: 2px solid transparent;
          transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
        }

        [part="value"] {
          color: currentColor;
          flex: 1;
        }

        :host([aria-expanded="true"]) [part="popup-toggle"] svg {
          transform: rotate(-180deg);
        }

        :host([aria-expanded="true"]) {
          --bx-dropdown-position: relative;
          --bx-dropdown-height: 15rem;
          --bx-dropdown-transition: max-height 110ms
            cubic-bezier(0, 0, 0.38, 0.9);
        }
      </style>
    `);
    return result;
  }

  get variant() {
    return this[internal.state].variant;
  }
  set variant(variant) {
    this[internal.setState]({ variant });
  }
}

customElements.define("carbon-dropdown-list", CarbonDropdownList);
