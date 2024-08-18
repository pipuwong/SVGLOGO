import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.COoZ1Z27.js","_app/immutable/chunks/scheduler.WZi4KXPH.js","_app/immutable/chunks/index.C9yuT2mK.js","_app/immutable/chunks/Icon.DVeZRKbC.js","_app/immutable/chunks/cn.C-5SdYIA.js","_app/immutable/chunks/index.Cmh1rBLb.js","_app/immutable/chunks/arrow-up-right.eh3d6go0.js"];
export const stylesheets = ["_app/immutable/assets/0.BCkFz0yd.css","_app/immutable/assets/arrow-up-right.CZzI-Nh6.css"];
export const fonts = [];
