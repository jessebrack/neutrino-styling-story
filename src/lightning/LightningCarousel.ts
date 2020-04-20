import * as internal from "elix/src/base/internal.js";
import Carousel from "elix/src/base/Carousel.js";
import CenteredStrip from "elix/src/base/CenteredStrip.js";
import html from "elix/src/core/html.js";
import LightningPageDot from "./LightningPageDot";
import SlidingStage from "elix/src/base/SlidingStage.js";

/**
 * Lightning carousel
 */
export default class LightningCarousel extends Carousel {
  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      proxyListOverlap: false,
      proxyListPartType: CenteredStrip,
      proxyPartType: LightningPageDot,
      showArrowButtons: false,
      stagePartType: SlidingStage,
    });
  }

  get [internal.template]() {
    const result = super[internal.template];
    result.content.append(
      html`
        <style>
          @import url("src/lightning/LightningCarousel.css");
        </style>
      `
    );
    return result;
  }
}

customElements.define("lightning-carousel", LightningCarousel);
