import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BPKl7kYh.js","_app/immutable/chunks/scheduler.CZGhpber.js","_app/immutable/chunks/index.DCs1Hnk1.js","_app/immutable/chunks/Icon.D4NiZAN9.js","_app/immutable/chunks/cn.C-5SdYIA.js","_app/immutable/chunks/index.beeCUfaA.js","_app/immutable/chunks/arrow-up-right.DTBKhVGG.js"];
export const stylesheets = ["_app/immutable/assets/0.BI0rKRsU.css","_app/immutable/assets/arrow-up-right.CZzI-Nh6.css"];
export const fonts = [];
