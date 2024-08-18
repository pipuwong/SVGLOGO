import { c as create_ssr_component } from "../../chunks/ssr.js";
import { r as redirect } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  redirect(301, "/");
  return ``;
});
export {
  Error as default
};
