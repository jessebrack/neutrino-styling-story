import CarouselSlideshow from "elix/src/base/CarouselSlideshow.js";
import CenteredStrip from "elix/src/base/CenteredStrip.js";
import * as internal from "elix/src/base/internal.js";
import SlidingStage from "elix/src/base/SlidingStage.js";
import { forwardFocus } from "elix/src/core/dom.js";
import html from "elix/src/core/html.js";
import SDSButtonIcon from "../sds/SDSButtonIcon";
import LightningPageDot from "./LightningPageDot";

// HACK: Force rollup to include components we depend upon.
if (SDSButtonIcon) {
}

/**
 * SLDS carousel slideshow
 *
 * In the Lightning base components set, the carousel slideshow is implemented as the default
 * mode of a lightning-carousel rather than a separate component. However, that arrangement
 * unnecessarily complicates the base lightning-carousel component.
 */
export default class LightningCarouselSlideshow extends CarouselSlideshow {
  [internal.componentDidMount]() {
    super[internal.componentDidMount]();
    this[internal.ids].playButton.addEventListener("click", () => {
      this[internal.raiseChangeEvents] = true;
      this.playing = !this.playing;
      this[internal.raiseChangeEvents] = false;
    });
  }

  get [internal.defaultState]() {
    return Object.assign(super[internal.defaultState], {
      proxyListOverlap: false,
      proxyListPartType: CenteredStrip,
      proxyPartType: LightningPageDot,
      selectionTimerDuration: 5000,
      showArrowButtons: false,
      stagePartType: SlidingStage,
    });
  }

  // Pressing Space is the same as clicking the play/pause button.
  [internal.keydown](/** @type {KeyboardEvent} */ event) {
    let handled;

    switch (event.key) {
      case " ":
        this.playing = !this.playing;
        handled = true;
        break;
    }

    // Prefer mixin result if it's defined, otherwise use base result.
    return (
      handled || (super[internal.keydown] && super[internal.keydown](event))
    );
  }

  [internal.render](changed) {
    super[internal.render](changed);

    if (this[internal.firstRender]) {
      // Keep focus on the carousel, not the play/pause button.
      const playButton = this[internal.ids].playButton;
      if (playButton instanceof HTMLElement) {
        forwardFocus(playButton, this);
      }
    }

    if (changed.playing) {
      const { playing } = this[internal.state];
      const playButton = <any>this[internal.ids].playButton;
      if ("symbol" in playButton) {
        playButton.symbol = playing ? "pause" : "play";
      }
    }
  }

  get [internal.template]() {
    const result = super[internal.template];

    // Graft in play/pause button.
    // TODO: Expose part type for button.
    const explorerContainer = result.content.getElementById(
      "explorerContainer"
    );
    if (explorerContainer) {
      explorerContainer.append(html`
        <sds-button-icon
          id="playButton"
          part="play-button"
          size="x-small"
          variant="neutral"
        ></sds-button-icon>
      `);
    }

    result.content.append(
      html`
        <style>
          @import url("src/lightning/LightningCarousel.css");
          @import url("src/lightning/LightningCarouselSlideshow.css");
        </style>
      `
    );
    return result;
  }
}

customElements.define(
  "lightning-carousel-slideshow",
  LightningCarouselSlideshow
);
