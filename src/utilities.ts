/**
 * Remove any existing CSS classes that start with the given prefix and add
 * a new class name that starts with that prefix.
 *
 * The SDS class syntax makes extensive use of CSS classes that share a
 * consistent prefix. E.g., the SDS button classes look like `lwc-button_brand`,
 * which starts with the prefix `lwc-button_`.
 *
 * You can use this function to apply a new class name like
 * `lwc-button_brand-outline`. If you pass in `lwc-button_` as the prefix and
 * `brand-outline` as the class name, this function will remove any existing
 * classes with that same prefix, like `lwc-button_brand`, and will add the new
 * `lwc-button_brand-outline` to the class list.
 */
export function applyPrefixedCssClass(
  element: HTMLElement | SVGElement,
  prefix: string,
  name: string
) {
  const prefixedClass = `${prefix}${name}`;
  // Remove all existing classes that have that prefix.
  const classList = element.classList;
  classList.forEach((existingClass) => {
    if (existingClass.startsWith(prefix) && existingClass !== prefixedClass) {
      classList.remove(existingClass);
    }
  });
  // Add the new prefixed class.
  classList.add(prefixedClass);
}
