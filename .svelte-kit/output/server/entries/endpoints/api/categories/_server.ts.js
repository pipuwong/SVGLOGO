import { j as json } from "../../../../chunks/index.js";
import { r as ratelimit } from "../../../../chunks/redis.js";
import { s as svgs } from "../../../../chunks/svgs.js";
const GET = async ({ request }) => {
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
  const categoryTotals = {};
  svgs.forEach((svg) => {
    if (typeof svg.category === "string") {
      categoryTotals[svg.category] = (categoryTotals[svg.category] || 0) + 1;
    } else if (Array.isArray(svg.category)) {
      svg.category.forEach((category) => {
        categoryTotals[category] = (categoryTotals[category] || 0) + 1;
      });
    }
  });
  const categories = Object.entries(categoryTotals).map(([category, total]) => ({
    category,
    total
  }));
  return json(categories, { status: 200 });
};
export {
  GET
};
