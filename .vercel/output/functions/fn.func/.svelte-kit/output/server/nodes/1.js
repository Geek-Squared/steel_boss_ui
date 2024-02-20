

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.66r3Lji_.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.mhvAXJXJ.js","_app/immutable/chunks/entry.nH-r-60l.js"];
export const stylesheets = [];
export const fonts = [];
