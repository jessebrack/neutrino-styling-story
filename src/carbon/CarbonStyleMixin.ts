import * as internal from "elix/src/base/internal.js";
import html from "elix/src/core/html.js";

export default function CarbonStyleMixin(Base: Constructor<HTMLElement>) {
  return class CarbonStyle extends Base {
    get [internal.template]() {
      const result = super[internal.template];

      result.content.append(
        html`
          <style>
            @import url("node_modules/carbon-components/css/carbon-components.min.css");
          </style>
        `
      );
      return result;
    }
  };
}
