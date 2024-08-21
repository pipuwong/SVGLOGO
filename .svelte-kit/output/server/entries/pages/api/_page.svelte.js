import { c as create_ssr_component, f as escape, a as add_attribute, v as validate_component, m as missing_component } from "../../../chunks/ssr.js";
import { c as cn } from "../../../chunks/cn.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-4bv4vk_START -->${$$result.title = `<title>${escape(data.meta.title)}-SVGLOGO</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><meta property="og:description"${add_attribute("content", data.meta.description, 0)}><!-- HEAD_svelte-4bv4vk_END -->`, ""} <section class="bg-white dark:bg-neutral-900 bg-[url('/images/hero-pattern_light.svg')] dark:bg-[url('/images/hero-pattern_dark.svg')]" data-svelte-h="svelte-crl0di"><div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-10 relative"><div class="flex items-center space-x-4 text-center justify-center"><h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-neutral-900 md:text-5xl lg:text-6xl dark:text-white">关于本站</h1> </div> <p class="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">SVGLOGO 将专注于收录国内矢量 LOGO</p></div></section> <article${add_attribute("class", cn("prose dark:prose-invert", "mx-auto py-10 px-4 max-w-3xl", "prose-h2:font-medium", "prose-pre:m-0"), 0)}>${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
