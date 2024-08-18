import { c as create_ssr_component, b as subscribe, f as escape, v as validate_component, g as each, l as set_store_value } from "../../../../chunks/ssr.js";
import { q as queryParam, S as Search, G as Grid, a as SvgCard, N as NotFound } from "../../../../chunks/notFound.js";
import { C as Container } from "../../../../chunks/container.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchParam, $$unsubscribe_searchParam;
  let { data } = $$props;
  let svgsByCategory = data.svgs || [];
  let category = data.category || "";
  const searchParam = queryParam("search");
  $$unsubscribe_searchParam = subscribe(searchParam, (value) => $searchParam = value);
  let searchTerm = $searchParam || "";
  let filteredSvgs = [];
  if (searchTerm.length === 0) {
    filteredSvgs = svgsByCategory.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }
  const searchSvgs = () => {
    set_store_value(searchParam, $searchParam = searchTerm || null, $searchParam);
    return filteredSvgs = svgsByCategory.filter((svg) => {
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
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-eruwv6_START -->${$$result.title = `<title>${escape(category)} logos - Svgl</title>`, ""}<!-- HEAD_svelte-eruwv6_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Search, "Search").$$render(
          $$result,
          {
            clearSearch: () => clearSearch(),
            placeholder: `搜索 ${filteredSvgs.length} ${category} logos...`,
            searchTerm
          },
          {
            searchTerm: ($$value) => {
              searchTerm = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
          default: () => {
            return `${each(filteredSvgs, (svg) => {
              return `${validate_component(SvgCard, "SvgCard").$$render($$result, { svgInfo: svg }, {}, {})}`;
            })}`;
          }
        })} ${filteredSvgs.length === 0 ? `${validate_component(NotFound, "NotFound").$$render($$result, { notFoundTerm: searchTerm }, {}, {})}` : ``}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_searchParam();
  return $$rendered;
});
export {
  Page as default
};
