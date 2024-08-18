import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Container } from "../../../../chunks/container.js";
import { I as Icon } from "../../../../chunks/Icon.js";
const Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowLeft = Arrow_left;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<a href="/"><div class="flex items-center space-x-2 duration-100 hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-white group md:mt-2">${validate_component(ArrowLeft, "ArrowLeft").$$render(
        $$result,
        {
          size: 20,
          class: "group-hover:-translate-x-[2px] group-hover:duration-200"
        },
        {},
        {}
      )} <span data-svelte-h="svelte-11ehhay">查看全部</span></div></a>`;
    }
  })} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
