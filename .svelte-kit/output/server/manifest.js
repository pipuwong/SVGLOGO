export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","fonts/GeistMonoVariableVF.woff2","fonts/InterVariable.woff2","images/.DS_Store","images/banner.png","images/banner_corner.png","images/hero-pattern_dark.svg","images/hero-pattern_light.svg","images/icons/icon-192x192.png","images/icons/icon-256x256.png","images/icons/icon-384x384.png","images/icons/icon-512x512.png","images/logo.png","images/logo.svg","images/readme.png","images/screenshot.png","images/svgl.svg","library/.DS_Store","library/bank-北京银行 BOB-wordmark.svg","library/bank-北京银行 BOB.svg","library/school-北京大学 PKU-wordmark.svg","library/school-北京大学 PKU.svg","library/social-QQ.svg","library/social-YouTube.svg","library/social-blog-1.svg","library/social-dribbble.svg","library/social-keep.svg","library/social-lofter.svg","library/social-今日头条.svg","library/social-公众号.svg","library/social-即刻.svg","library/social-哔哩哔哩.svg","library/social-喜马拉雅.svg","library/social-小宇宙.svg","library/social-小报童.svg","library/social-小红书.svg","library/social-微信.svg","library/social-微博.svg","library/social-快手.svg","library/social-懂球帝.svg","library/social-抖音.svg","library/social-播客.svg","library/social-斗鱼.svg","library/social-知乎.svg","library/social-知识星球.svg","library/social-竹白.svg","library/social-虎扑.svg","library/social-虎牙.svg","library/social-蜻蜓 FM.svg","library/social-西瓜视频.svg","library/social-视频号.svg","library/social-豆瓣.svg","library/social-钉钉.svg","library/social-飞书.svg","manifest.json","robots.txt"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.D4N_md4E.js","app":"_app/immutable/entry/app.Be_x4qYd.js","imports":["_app/immutable/entry/start.D4N_md4E.js","_app/immutable/chunks/entry.BsJ2e86l.js","_app/immutable/chunks/scheduler.WZi4KXPH.js","_app/immutable/chunks/index.Cmh1rBLb.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.Be_x4qYd.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.WZi4KXPH.js","_app/immutable/chunks/index.C9yuT2mK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/categories",
				pattern: /^\/api\/categories\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/categories/_server.ts.js'))
			},
			{
				id: "/api/svgs",
				pattern: /^\/api\/svgs\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/svgs/_server.ts.js'))
			},
			{
				id: "/api/svgs/svgr",
				pattern: /^\/api\/svgs\/svgr\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/svgs/svgr/_server.ts.js'))
			},
			{
				id: "/directory/[slug]",
				pattern: /^\/directory\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
