import { c as create_ssr_component } from "./ssr.js";
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto px-6 pt-4 xl:px-4">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Container as C
};
