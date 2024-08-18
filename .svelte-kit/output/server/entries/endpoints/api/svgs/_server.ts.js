import { j as json, e as error } from "../../../../chunks/index.js";
import { r as ratelimit } from "../../../../chunks/redis.js";
import { s as svgsData } from "../../../../chunks/index3.js";
const GET = async ({ url, request }) => {
  const fullUrl = url.origin ?? "svgl.app";
  const ip = request.headers.get("x-forwarded-for") ?? "";
  const { success, reset } = await ratelimit.limit(ip);
  if (!success) {
    const now = Date.now();
    const retryAfter = Math.floor((reset - now) / 1e3);
    return new Response("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": retryAfter.toString()
      }
    });
  }
  const getLimitParams = url.searchParams.get("limit");
  const getCategoryParams = url.searchParams.get("category");
  const getSearchParams = url.searchParams.get("search");
  const addFullUrl = (value) => {
    if (typeof value === "string") {
      return `${fullUrl}${value}`;
    } else if (typeof value === "object") {
      return {
        light: `${fullUrl}${value.light}`,
        dark: `${fullUrl}${value.dark}`
      };
    }
    return value;
  };
  const fullRouteSvgsData = svgsData.map((svg) => {
    return {
      ...svg,
      route: addFullUrl(svg.route),
      wordmark: svg.wordmark ? addFullUrl(svg.wordmark) : void 0
    };
  });
  if (!getLimitParams && !getCategoryParams && !getSearchParams) {
    return json(fullRouteSvgsData, { status: 200 });
  }
  const limit = Number(getLimitParams);
  const category = getCategoryParams;
  if (category) {
    const targetCategory = category.charAt(0).toUpperCase() + category.slice(1);
    const categorySvgs = fullRouteSvgsData.filter((svg) => {
      if (typeof svg.category === "string") {
        return svg.category === targetCategory;
      }
      if (Array.isArray(svg.category)) {
        return svg.category.includes(targetCategory);
      }
      return false;
    });
    if (categorySvgs.length === 0) {
      error(400, {
        message: "Category does not exist."
      });
    }
    if (!getLimitParams) {
      return json(categorySvgs, { status: 200 });
    }
    return json(categorySvgs.slice(0, limit), { status: 200 });
  }
  if (getSearchParams) {
    const searchSvgs = fullRouteSvgsData.filter((svg) => {
      return svg.title.toLowerCase().includes(getSearchParams.toLowerCase());
    });
    if (searchSvgs.length === 0) {
      error(400, {
        message: "Search does not exist."
      });
    }
    if (!getLimitParams) {
      return json(searchSvgs, { status: 200 });
    }
    return json(searchSvgs.slice(0, limit), { status: 200 });
  }
  if (isNaN(limit)) {
    error(400, {
      message: "Limit must be a number."
    });
  }
  if (limit < 1) {
    error(400, {
      message: "Limit must be a positive number."
    });
  }
  if (limit > fullRouteSvgsData.length) {
    error(400, {
      message: "Limit is greater than the number of svgs."
    });
  }
  return json(fullRouteSvgsData.slice(0, limit), { status: 200 });
};
export {
  GET
};
