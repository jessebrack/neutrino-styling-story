import DropdownList from "elix/src/base/DropdownList.js";
import * as internal from "elix/src/base/internal.js";
import html from "elix/src/core/html.js";
import CarbonDropdownSource from "./CarbonDropdownSource";
import CarbonMenu from "./CarbonMenu";
import CarbonOpenCloseToggle from "./CarbonOpenCloseToggle";
import CarbonPopup from "./CarbonPopup";
import CarbonStyleMixin from "./CarbonStyleMixin";

// HACK: Force rollup to include components we depend upon.
if (CarbonDropdownSource) {
}
if (CarbonOpenCloseToggle) {
}
if (CarbonPopup) {
}

/**
 * Carbon variation of an Elix [DropdownList](https://component.kitchen/elix/DropdownList).
 */
export default class CarbonDropdownList extends CarbonStyleMixin(DropdownList) {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      horizontalAlign: "stretch",
      menuPartType: CarbonMenu,
      popupPartType: CarbonPopup,
      popupTogglePartType: CarbonOpenCloseToggle,
      sourcePartType: CarbonDropdownSource,
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

      // HACK: This should get moved to Elix PopupSource
      this.toggleAttribute("opened", opened);
    }

    // Tell the toggle which direction it should point to based on whether
    // dropdown is currently open.
    if (
      changed.opened ||
      changed.popupPosition ||
      changed.popupTogglePartType
    ) {
      const { opened } = this[internal.state];
      const direction = !opened ? "down" : "up";
      /** @type {any} */ const popupToggle = this[internal.ids].popupToggle;
      if ("direction" in popupToggle) {
        popupToggle.direction = direction;
      }
    }

    if (changed.valuePartType) {
      this[internal.ids].value.classList.add("bx--list-box__label");
    }
  }

  get [internal.template]() {
    const result = super[internal.template];

    result.content.append(html`
      <style>
        :host {
          display: inline-block;
        }

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
          /* width: 100%; */
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
          /* display: block; */
          background-color: var(--cds-field-01, #f4f4f4);
          border: none;
          border-bottom: 1px solid var(--cds-ui-04, #8d8d8d);
          /* width: 100%; */
          height: 2.5rem;
          cursor: pointer;
          color: var(--cds-text-01, #161616);
          outline: 2px solid transparent;
          transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
        }

        /* Don't want Carbon padding. */
        .bx--list-box__field {
          padding: 0;
        }

        /* Hack in Carbon focus styling */
        :host([focus-visible]:focus-within) {
          outline: 2px solid var(--cds-focus, #0f62fe);
          outline-offset: -2px;
        }

        [part~="value"] {
          flex: 1;
          margin-right: 2em;
        }

        [part~="menu"] {
          /* max-height: 0; */
          /* transition: max-height 0.11s cubic-bezier(0.2, 0, 0.38, 0.9); */
        }

        :host([opened]) [part~="menu"] {
          /* max-height: 8.75rem; */
        }
      </style>
    `);

    return result;
  }
}

customElements.define("carbon-dropdown-list", CarbonDropdownList);
