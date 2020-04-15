// import * as internal from "elix/src/base/internal.js";
// import DropdownList from "elix/src/base/DropdownList.js";
// import html from "elix/src/core/html.js";
// import SdsButton from "./SdsButton";
// import SdsIcon from "./SdsIcon";
// import SdsMenu from "./SdsMenu";
// import SdsPopup from "./SdsPopup";

// // HACK: Force rollup to include components we depend upon.
// if (SdsButton) {
// }
// if (SdsIcon) {
// }
// if (SdsMenu) {
// }
// if (SdsPopup) {
// }

// /**
//  * SDS dropdown list.
//  *
//  * SDS blueprints refer to this as a picklist, while the closest Lightning
//  * component to this is called a "combo box" — but to the rest of the world, a
//  * combo box includes an editable input element.
//  */
// export default class SDSDropdownList extends DropdownList {
//   get [internal.defaultState]() {
//     return Object.assign(super[internal.defaultState], {
//       horizontalAlign: "stretch",
//       menuPartType: SdsMenu,
//       popupPartType: SdsPopup,
//       popupTogglePartType: SdsIcon,
//       sourcePartType: SdsButton,
//     });
//   }

//   [internal.render](changed) {
//     super[internal.render](changed);

//     // Pass symbol to popup toggle.
//     if (changed.popupTogglePartType || changed.symbol) {
//       const { symbol } = this[internal.state];
//       const popupToggle = this[internal.ids].popupToggle as any;
//       if ("symbol" in popupToggle) {
//         popupToggle.symbol = symbol;
//       }
//     }

//     // Pass the variant attribute down to the source element.
//     if (changed.variant) {
//       const { variant } = this[internal.state];
//       const source = this[internal.ids].source as any;
//       if ("variant" in source) {
//         source.variant = variant;
//       }
//     }

//     // Move the popupToggle part into the button icon wrapper, see
//     // [internal.template]() for where that wrapper is being added
//     if (changed.popupTogglePartType) {
//       this[internal.ids].buttonIcon.appendChild(this[internal.ids].popupToggle);
//     }
//   }

//   get [internal.template]() {
//     const result = super[internal.template];

//     /**
//      * When an icon is inside of a button element, SDS CSS expects there to
//      * be a wrapping element. Doing that here.
//      */
//     const icon = result.content.getElementById("popupToggle");
//     icon.parentNode.append(
//       html` <div id="buttonIcon" class="lwc-button__icon-right"></div> `
//     );

//     result.content.append(
//       html`
//         <style>
//           :host {
//             max-width: 15rem;
//             min-width: 12rem;
//           }

//           [part~="value"] {
//             color: currentColor;
//             flex: 1;
//           }
//         </style>
//       `
//     );
//     return result;
//   }

//   get variant(): string {
//     return this.variant;
//   }
//   set variant(variant) {
//     this[internal.setState]({ variant });
//   }
// }

// customElements.define("sds-dropdown-list", SDSDropdownList);
