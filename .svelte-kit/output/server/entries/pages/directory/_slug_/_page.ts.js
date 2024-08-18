import { e as error } from "../../../../chunks/index.js";
import { s as svgs } from "../../../../chunks/svgs.js";
const load = async ({ params }) => {
  const { slug } = params;
  if (!slug) {
    return error(404, "Not found");
  }
  const svgsByCategory = svgs.filter((svg) => {
    if (Array.isArray(svg.category)) {
      return svg.category.some((categoryItem) => categoryItem.toLowerCase() === slug);
    } else {
      return svg.category.toLowerCase() === slug;
    }
  });
  if (svgsByCategory.length === 0) {
    return error(404, "Not found");
  }
  return {
    category: slug,
    svgs: svgsByCategory
  };
};
export {
  load
};
