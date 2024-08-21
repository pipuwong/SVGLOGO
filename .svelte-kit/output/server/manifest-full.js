export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","fonts/GeistMonoVariableVF.woff2","fonts/InterVariable.woff2","images/banner.png","images/banner_corner.png","images/hero-pattern_dark.svg","images/hero-pattern_light.svg","images/icons/icon-192x192.png","images/icons/icon-256x256.png","images/icons/icon-384x384.png","images/icons/icon-512x512.png","images/logo.png","images/logo.svg","images/readme.png","images/reward.png","images/screenshot.png","images/svgl.svg","library/.DS_Store","library/SVGLOGO.svg","library/bank-北京银行 BOB-wordmark.svg","library/bank-北京银行 BOB.svg","library/social-QQ.svg","library/social-YouTube.svg","library/social-blog-1.svg","library/social-dribbble.svg","library/social-keep.svg","library/social-lofter.svg","library/social-今日头条.svg","library/social-公众号.svg","library/social-即刻.svg","library/social-哔哩哔哩.svg","library/social-喜马拉雅.svg","library/social-小宇宙.svg","library/social-小报童.svg","library/social-小红书.svg","library/social-微信.svg","library/social-微博.svg","library/social-快手.svg","library/social-懂球帝.svg","library/social-抖音.svg","library/social-播客.svg","library/social-斗鱼.svg","library/social-知乎.svg","library/social-知识星球.svg","library/social-竹白.svg","library/social-虎扑.svg","library/social-虎牙.svg","library/social-蜻蜓 FM.svg","library/social-西瓜视频.svg","library/social-视频号.svg","library/social-豆瓣.svg","library/social-钉钉.svg","library/social-飞书.svg","library/上海交通大学 SJTU-wordmark.svg","library/上海交通大学 SJTU.svg","library/上海海事大学 SHMTU-wordmark.svg","library/上海海事大学 SHMTU.svg","library/上海理工大学 USST.svg","library/东北大学 NEU-wordmark.svg","library/东北大学 NEU.svg","library/东南大学 SEU-wordmark.svg","library/东南大学 SEU.svg","library/中南大学 CSU-wordmark.svg","library/中南大学 CSU.svg","library/中南民族大学 SCMZU.svg","library/中国人民大学 RUC-wordmark.svg","library/中国人民大学 RUC.svg","library/中国传媒大学 CUC-wordmark.svg","library/中国传媒大学 CUC.svg","library/中国农业大学 CAU-wordmark.svg","library/中国农业大学 CAU.svg","library/中国地质大学 CUG.svg","library/中国海洋大学 OUC-wordmark.svg","library/中国海洋大学 OUC.svg","library/中国石油大学（北京） CUP-wordmark.svg","library/中国石油大学（北京） CUP.svg","library/中国石油大学（华东） UPC-wordmark.svg","library/中国石油大学（华东） UPC.svg","library/中国科学技术大学 USTC-wordmark.svg","library/中国科学技术大学 USTC.svg","library/中国科学院大学 UCAS-wordmark.svg","library/中国科学院大学 UCAS.svg","library/中国美术学院 CAA-wordmark.svg","library/中国美术学院 CAA.svg","library/中央戏剧学院-wordmark.svg","library/中央民族大学 MUC-wordmark.svg","library/中央民族大学 MUC.svg","library/中央美术学院 CAFA-wordmark.svg","library/中央财经大学 CUFE-wordmark.svg","library/中央财经大学 CUFE.svg","library/中央音乐学院 CCOM-wordmark.svg","library/中央音乐学院 CCOM.svg","library/中山大学 SYSU-wordmark.svg","library/中山大学 SYSU.svg","library/云南大学 YNU-wordmark.svg","library/云南大学 YNU.svg","library/兰州大学 LZU-wordmark.svg","library/兰州大学 LZU.svg","library/北京中医药大学 BUCM-wordmark.svg","library/北京中医药大学 BUCM.svg","library/北京交通大学 BJTU-wordmark.svg","library/北京交通大学 BJTU.svg","library/北京体育大学 BSU-wordmark.svg","library/北京体育大学 BSU.svg","library/北京化工大学 BUCT-wordmark.svg","library/北京化工大学 BUCT.svg","library/北京外国语大学 BFSU-wordmark.svg","library/北京外国语大学 BFSU.svg","library/北京大学 PKU-wordmark.svg","library/北京大学 PKU.svg","library/北京工业大学 BJUT-wordmark.svg","library/北京工业大学 BJUT.svg","library/北京师范大学 BNU-wordmark.svg","library/北京师范大学 BNU.svg","library/北京林业大学 BJFU-wordmark.svg","library/北京林业大学 BJFU.svg","library/北京理工大学 BIT-wordmark.svg","library/北京理工大学 BIT.svg","library/北京科技大学 USTB-wordmark.svg","library/北京科技大学 USTB.svg","library/北京航空航天大学 BUAA-wordmark.svg","library/北京航空航天大学 BUAA.svg","library/北京邮电大学 BUPT-wordmark.svg","library/北京邮电大学 BUPT.svg","library/华东师范大学 ECNU-wordmark.svg","library/华东师范大学 ECNU.svg","library/华中农业大学 HZAU-wordmark.svg","library/华中农业大学 HZAU.svg","library/华中师范大学 CCNU.svg","library/华中科技大学 HUST todo.svg","library/华中科技大学 HUST-wordmark.svg","library/华南师范大学 SCNU-wordmark.svg","library/华南师范大学 SCNU.svg","library/华南理工大学 SCUT-wordmark.svg","library/华南理工大学 SCUT.svg","library/南京中医药大学 NJUCM-wordmark.svg","library/南京中医药大学 NJUCM.svg","library/南京信息工程大学 NUIST-wordmark.svg","library/南京信息工程大学 NUIST.svg","library/南京大学 NJU-wordmark.svg","library/南京大学 NJU.svg","library/南京师范大学 NJNU-wordmark.svg","library/南京师范大学 NJNU.svg","library/南京林业大学 NJFU.svg","library/南开大学 NKU-wordmark.svg","library/南开大学 NKU.svg","library/厦门大学 XMU-wordmark.svg","library/厦门大学 XMU.svg","library/合肥学院 HFUU-wordmark.svg","library/合肥学院 HFUU.svg","library/合肥工业大学 HFUT-wordmark.svg","library/合肥工业大学 HFUT.svg","library/吉林大学 JLU-wordmark.svg","library/吉林大学 JLU.svg","library/同济大学 TJU todo-wordmark.svg","library/同济大学 TJU.svg","library/哈尔滨工业大学 HIT-wordmark.svg","library/哈尔滨工业大学 HIT.svg","library/四川农业大学 SICAU-wordmark.svg","library/四川农业大学 SICAU.svg","library/四川大学 SCU-wordmark.svg","library/四川大学 SCU.svg","library/国防科学技术大学 NUDT-wordmark.svg","library/国防科学技术大学 NUDT.svg","library/复旦大学 FDU-wordmark.svg","library/复旦大学 FDU.svg","library/外交学院 CFAU.svg","library/大连理工大学 DUT-wordmark.svg","library/大连理工大学 DUT.svg","library/天津大学 TJU-wordmark.svg","library/天津大学 TJU.svg","library/宁夏大学 NXU.svg","library/宁波大学 NBU-wordmark.svg","library/宁波大学 NBU.svg","library/宁波诺丁汉大学 UNNC-wordmark.svg","library/宁波诺丁汉大学 UNNC.svg","library/安徽大学 AHU-wordmark.svg","library/安徽大学 AHU.svg","library/对外经济贸易大学 UIBE.svg","library/山东大学 SDU-wordmark.svg","library/山东大学 SDU.svg","library/山西大学 SXU.svg","library/山西财经大学 SXUFE.svg","library/广州中医药大学 GZUCM-wordmark.svg","library/广州中医药大学 GZUCM.svg","library/广西大学 GXU-wordmark.svg","library/广西大学 GXU.svg","library/成都理工大学 CDUT-wordmark.svg","library/成都理工大学 CDUT.svg","library/新疆大学 XJU-wordmark.svg","library/新疆大学 XJU.svg","library/暨南大学 JNU-wordmark.svg","library/暨南大学 JNU.svg","library/武汉大学 WHU-wordmark.svg","library/武汉大学 WHU.svg","library/武汉理工大学 WUT-wordmark.svg","library/武汉理工大学 WUT.svg","library/武汉科技大学 WUST-wordmark.svg","library/武汉科技大学 WUST.svg","library/江南大学 JNU-wordmark.svg","library/江南大学 JNU.svg","library/江西师范大学 JXNU-wordmark.svg","library/江西师范大学 JXNU.svg","library/河南工业大学 HAUT-wordmark.svg","library/河南工程学院-wordmark.svg","library/河南工程学院.svg","library/洛阳理工学院 LIT-wordmark.svg","library/洛阳理工学院 LIT.svg","library/济南大学 UJN-wordmark.svg","library/济南大学 UJN.svg","library/浙江大学 ZJU-wordmark.svg","library/浙江大学 ZJU.svg","library/浙江工业大学 ZJUT-wordmark.svg","library/浙江工业大学.svg","library/深圳大学 SZU-wordmark.svg","library/深圳大学 SZU.svg","library/清华大学 THU-wordmark.svg","library/清华大学 THU.svg","library/湖北中医药大学 HBUCM-wordmark.svg","library/湖北中医药大学 HBUCM.svg","library/湖北大学 HUBU-wordmark.svg","library/湖北大学 HUBU.svg","library/湖南大学 HNU-wordmark.svg","library/湖南大学 HNU.svg","library/湖南师范大学 HNNU-wordmark.svg","library/湖南师范大学 HNNU.svg","library/电子科技大学 UESTC-wordmark.svg","library/电子科技大学 UESTC.svg","library/福州大学 FZU-wordmark.svg","library/福州大学 FZU.svg","library/福建师范大学 FJNU.svg","library/福建理工大学 FJUT-wordmark.svg","library/福建理工大学 FJUT.svg","library/西北农林科技大学 NWAFU-wordmark.svg","library/西北农林科技大学 NWAFU.svg","library/西北大学 NWU-wordmark.svg","library/西北大学 NWU.svg","library/西北工业大学 NWPU-wordmark.svg","library/西北工业大学 NWPU.svg","library/西南交通大学 SWJTU-wordmark.svg","library/西南交通大学 SWJTU.svg","library/西南民族大学 SWUN-wordmark.svg","library/西南民族大学 SWUN.svg","library/西南财经大学 SWUFE-wordmark.svg","library/西南财经大学 SWUFE.svg","library/西安交通大学 XJTU-wordmark.svg","library/西安交通大学 XJTU.svg","library/西安电子科技大学 XDU-wordmark.svg","library/西安电子科技大学 XDU.svg","library/西藏大学 UTIBET-wordmark.svg","library/西藏大学 UTIBET.svg","library/贵州大学 GZU-wordmark.svg","library/贵州大学 GZU.svg","library/贵州师范大学 GZNU-wordmark.svg","library/贵州师范大学 GZNU.svg","library/郑州大学 ZZU-wordmark.svg","library/郑州大学 ZZU.svg","library/重庆大学 CQU.svg","library/长安大学 CHU-wordmark.svg","library/长安大学 CHU.svg","library/陕西师范大学 SNNU-wordmark.svg","library/陕西师范大学 SNNU.svg","library/青岛理工大学 QUT-wordmark.svg","library/青岛理工大学 QUT.svg","library/青海大学 QHU-wordmark.svg","library/青海大学 QHU.svg","library/首都师范大学 CNU-wordmark.svg","library/首都师范大学 CNU.svg","manifest.json","robots.txt"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DKein8Rz.js","app":"_app/immutable/entry/app.BTi6E0LN.js","imports":["_app/immutable/entry/start.DKein8Rz.js","_app/immutable/chunks/entry.CTZZenHI.js","_app/immutable/chunks/scheduler.CZGhpber.js","_app/immutable/chunks/index.beeCUfaA.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BTi6E0LN.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.CZGhpber.js","_app/immutable/chunks/index.DCs1Hnk1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
