
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/.pnpm/@sveltejs+kit@2.5.7_@sveltejs+vite-plugin-svelte@3.1.0_svelte@4.2.15_vite@5.2.10__svelte@4.2.15_vite@5.2.10/node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width\" />\n  <meta name=\"robots\" content=\"index, follow\" />\n  <meta name=\"author\" content=\"@Huazi\" />\n  <meta name=\"description\" content=\"免费下载矢量LOGO素材，专注收录国内矢量LOGO\" />\n  <meta name=\"keywords\" content=\"矢量Logo素材下载, Logo素材免费, SVG格式Logo素材，国内矢量LOGO，企业LOGO，矢量图标，SVG，LOGO下载\" />\n  <meta name=\"msvalidate.01\" content=\"A95592A640FDAA6838A243B73D86A54B\" />\n  <meta name=\"google-site-verification\" content=\"HrfuhYS0GZ7ztlJarcMbwy6Pa7GEw4kGTcL7AKP61Uw\" />\n  <meta name=\"google-adsense-account\" content=\"ca-pub-7984938986090440\">\n  <!-- Favicon -->\n  <link rel=\"icon\" type=\"image/svg+xml\" href=\"" + assets + "/images/logo.svg\" />\n\n  <!-- OG -->\n  <meta property=\"og:type\" content=\"website\" />\n  <meta property=\"og:title\" content=\"SVGLOGO\" />\n  <meta property=\"og:description\" content=\"免费下载矢量LOGO素材，专注收录国内矢量LOGO\" />\n  <meta property=\"og:url\" content=\"https://svglogo.top/\" />\n  <meta property=\"og:image\" content=\"https://huazispace.s3.bitiful.net/SVGLOGO/svglogo.png\" />\n\n  <!-- Twitter -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\" />\n  <meta name=\"twitter:title\" content=\"SVGLOGO\" />\n  <meta name=\"twitter:description\" content=\"免费下载矢量LOGO素材，专注收录国内矢量LOGO\" />\n  <meta name=\"twitter:creator\" content=\"@HeyHuazi\" />\n  <meta name=\"twitter:image\" content=\"https://huazispace.s3.bitiful.net/SVGLOGO/svglogo.png\" />\n\n  <!-- Analytics -->\n  <script type=\"text/javascript\">\n    (function (c, l, a, r, i, t, y) {\n      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };\n      t = l.createElement(r); t.async = 1; t.src = \"https://www.clarity.ms/tag/\" + i;\n      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);\n    })(window, document, \"clarity\", \"script\", \"non5oxt2pr\");\n  </script>\n  <!-- 51LA -->\n  <script charset=\"UTF-8\" id=\"LA_COLLECT\" src=\"//sdk.51.la/js-sdk-pro.min.js\"></script>\n  <script>LA.init({ id: \"Kdb6i5hQGkAkkUoZ\", ck: \"Kdb6i5hQGkAkkUoZ\" })</script>\n  <!-- Google Ad -->\n  <script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7984938986090440\"\n  crossorigin=\"anonymous\"></script>\n  <!-- Title -->\n  <title>收录国内矢量 LOGO - SVGLOGO</title>\n  " + head + "\n</head>\n\n<body data-sveltekit-preload-data=\"hover\"\n  class=\"min-h-screen bg-white font-sans text-mini dark:bg-dark dark:text-white antialiased selection:bg-neutral-200 scroll-smooth [text-rendering:optimizeLegibility;] dark:selection:bg-neutral-700\">\n  <div>" + body + "</div>\n</body>\n\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "wjvu7s"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
