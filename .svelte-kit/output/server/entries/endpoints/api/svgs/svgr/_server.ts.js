import { transform } from "@svgr/core";
import { j as json } from "../../../../../chunks/index.js";
import { r as ratelimit } from "../../../../../chunks/redis.js";
import svgrJSX from "@svgr/plugin-jsx";
const POST = async ({ request }) => {
  const ip = request.headers.get("x-forwarded-for") ?? "";
  const { success, reset } = await ratelimit.limit(ip);
  if (!success) {
    const now = Date.now();
    const retryAfter = Math.floor((reset - now) / 500);
    return new Response("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": retryAfter.toString()
      }
    });
  }
  try {
    const body = await request.json();
    const svgCode = body.code;
    const typescript = body.typescript;
    const name = body.name;
    const jsCode = await transform(
      svgCode,
      {
        plugins: [svgrJSX],
        icon: true,
        typescript
      },
      { componentName: name }
    );
    return json({ data: jsCode }, { status: 200 });
  } catch (error) {
    return json(
      { error: `Error al transformar el SVG a componente React: ${error}` },
      { status: 500 }
    );
  }
};
export {
  POST
};
