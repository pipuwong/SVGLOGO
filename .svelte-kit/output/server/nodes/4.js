import * as universal from '../entries/pages/api/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/api/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/api/+page.ts";
export const imports = ["_app/immutable/nodes/4.3tiQSwd0.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.g5YcAAdQ.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.WZi4KXPH.js","_app/immutable/chunks/index.C9yuT2mK.js","_app/immutable/chunks/cn.C-5SdYIA.js"];
export const stylesheets = [];
export const fonts = [];
