import { c as create_ssr_component, v as validate_component, b as subscribe, a as add_attribute, f as escape, g as each, l as set_store_value } from "../../chunks/ssr.js";
import { c as cn } from "../../chunks/cn.js";
import { q as queryParam, S as Search, G as Grid, a as SvgCard, N as NotFound } from "../../chunks/notFound.js";
import { s as svgsData } from "../../chunks/index3.js";
import { C as Container } from "../../chunks/container.js";
import { b as buttonStyles } from "../../chunks/arrow-up-right.js";
import { I as Icon } from "../../chunks/Icon.js";
const Arrow_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M12 5v14" }], ["path", { "d": "m19 12-7 7-7-7" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowDown = Arrow_down;
const Arrow_up_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m21 16-4 4-4-4" }],
    ["path", { "d": "M17 20V4" }],
    ["path", { "d": "m3 8 4-4 4 4" }],
    ["path", { "d": "M7 4v16" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-up-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowUpDownIcon = Arrow_up_down;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchParam, $$unsubscribe_searchParam;
  const allSvgs = JSON.parse(JSON.stringify(svgsData));
  const searchParam = queryParam("search");
  $$unsubscribe_searchParam = subscribe(searchParam, (value) => $searchParam = value);
  let isFirstLoad = true;
  let showAll = false;
  let searchTerm = $searchParam || "";
  let filteredSvgs = [];
  if (searchTerm.length === 0) {
    filteredSvgs = allSvgs.sort((a, b) => {
      return b.id - a.id;
    });
  }
  const loadSvgs = () => {
    if (isFirstLoad || showAll) {
      filteredSvgs = allSvgs;
      isFirstLoad = false;
    } else {
      filteredSvgs = allSvgs.slice(0, 30);
    }
  };
  const searchSvgs = () => {
    set_store_value(searchParam, $searchParam = searchTerm || null, $searchParam);
    loadSvgs();
    filteredSvgs = allSvgs.filter((svg) => {
      let svgTitle = svg.title.toLowerCase();
      return svgTitle.includes(searchTerm.toLowerCase());
    });
  };
  const clearSearch = () => {
    searchTerm = "";
    searchSvgs();
  };
  if ($searchParam) {
    searchSvgs();
  } else {
    loadSvgs();
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1ud54tf_START -->${$$result.title = `<title>A beautiful library with SVG logos - Svgl</title>`, ""}<!-- HEAD_svelte-1ud54tf_END -->`, ""} ${validate_component(Search, "Search").$$render(
      $$result,
      {
        clearSearch: () => clearSearch(),
        placeholder: `搜索 ${filteredSvgs.length} logos...`,
        searchTerm
      },
      {
        searchTerm: ($$value) => {
          searchTerm = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex items-center justify-end mb-4"><button${add_attribute("class", cn("flex items-center justify-center space-x-1 rounded-md px-3 py-1.5 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity", filteredSvgs.length === 0 && "hidden"), 0)}>${`${validate_component(ArrowUpDownIcon, "ArrowUpDownIcon").$$render($$result, { size: 16, strokeWidth: 2, class: "mr-1" }, {}, {})}`} <span>${escape("按字母顺序排序")}</span></button></div> ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
          default: () => {
            return `${each(filteredSvgs.slice(0, 30), (svg) => {
              return `${validate_component(SvgCard, "SvgCard").$$render($$result, { svgInfo: svg }, {}, {})}`;
            })}`;
          }
        })} ${filteredSvgs.length > 30 && !showAll ? `<div class="flex items-center justify-center mt-4"><button${add_attribute("class", buttonStyles, 0)}><div class="flex items-center space-x-2 relative">${validate_component(ArrowDown, "ArrowDown").$$render($$result, { size: 16, strokeWidth: 2 }, {}, {})} <span data-svelte-h="svelte-bzf1a6">加载全部图标</span> <span class="opacity-70">(${escape(filteredSvgs.length - 30)} 更多)</span></div></button></div>` : ``} ${filteredSvgs.length === 0 ? `${validate_component(NotFound, "NotFound").$$render($$result, { notFoundTerm: searchTerm }, {}, {})}` : ``}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_searchParam();
  return $$rendered;
});
export {
  Page as default
};
