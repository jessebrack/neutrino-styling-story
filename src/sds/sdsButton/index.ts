import * as internal from 'elix/src/base/internal.js';
import Button from 'elix/src/base/Button.js';
import html from 'elix/src/core/html.js';

/**
 * SDS variation of an Elix [Button](https://component.kitchen/elix/Button).
 */
export default class SdsButton extends Button {
    /**
     * SDS Buttons come with a set of variants to change the visual
     * display depending on the action a user is taking
     */
    get variant() {
        return this.variant;
    }
    set variant(variant) {
        this[internal.setState]({ variant });
    }

    [internal.render](changed) {
        super[internal.render](changed);
        // Add base class at firstRender
        if (this[internal.firstRender]) {
            this[internal.ids].inner.classList.add('sds-button');
        }
        /**
         * Append variant class, if attribute exist. Variants use classes
         * instead of attaching to attributes to keep blueprints decoupled
         */
        if (changed.variant) {
            const computedClassName = `sds-button_${
                this[internal.state].variant
            }`;
            this[internal.ids].inner.classList.add(computedClassName);
        }
    }

    get [internal.template]() {
        const result = super[internal.template];
        result.content.append(
            html`
                <style>
                    @import url('src/sds/common.css');
                    @import url('src/sds/sdsButton/index.css');
                </style>
            `
        );
        return result;
    }
}

customElements.define('sds-button', SdsButton);
