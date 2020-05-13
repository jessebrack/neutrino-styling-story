import * as internal from 'elix/src/base/internal.js';
import html from 'elix/src/core/html.js';

export default function Purple3StyleMixin(Base: Constructor<HTMLElement>) {
  return class Purple3Style extends Base {
    get [internal.template]() {
      const result =
        super[internal.template] || document.createElement('template');

      result.content.append(
        html`
          <style>
            @import url('public/css/purple3-components.min.css');
          </style>
        `
      );
      return result;
    }
  };
}
