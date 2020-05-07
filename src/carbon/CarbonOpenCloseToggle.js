import * as internal from "elix/src/base/internal.js";
import ReactiveElement from "elix/src/core/ReactiveElement.js";
import * as template from "elix/src/core/template.js";

/**
 * Carbon UpDownToggle
 */
export default class CarbonOpenCloseToggle extends ReactiveElement {
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "direction") {
      if (this.direction !== newValue) {
        this.direction = newValue;
      }
    } else {
      super.attributeChangedCallback(name, oldValue, newValue);
    }
  }

  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      direction: "down",
      disabled: false,
    });
  }

  /**
   * Indicates which direction the element should point to.
   *
   * @type {'down'|'up'}
   * @default 'down'
   */
  get direction() {
    return this[internal.state].direction;
  }
  set direction(direction) {
    this[internal.setState]({ direction });
  }

  get disabled() {
    return this[internal.state].disabled;
  }
  set disabled(disabled) {
    this[internal.setState]({ disabled });
  }

  [internal.render](changed) {
    super[internal.render](changed);

    if (changed.direction) {
      const { direction } = this[internal.state];
      this.setAttribute("direction", direction);
    }
  }

  get [internal.template]() {
    return template.html`
      <style>
        :host {
          display: inline-block;
        }

        #icon {
          display: block;
          transition: transform 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
        }

        :host([direction="up"]) #icon {
          transform: rotate(180deg);
        }
      </style>
      <div id="iconContainer" class="bx--list-box__menu-icon">
        <svg
          id="icon"
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          style="will-change: transform;"
          xmlns="http://www.w3.org/2000/svg"
          class="bx--dropdown__arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
        </svg>
      </div>
    `;
  }
}

customElements.define("carbon-open-close-toggle", CarbonOpenCloseToggle);
