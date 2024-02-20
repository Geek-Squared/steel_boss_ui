

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ghYMsI5H.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.mhvAXJXJ.js"];
export const stylesheets = [];
export const fonts = [];
