

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.alxm85UF.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.mhvAXJXJ.js","_app/immutable/chunks/Navbar.iUrdLeXi.js","_app/immutable/chunks/PageHero.lzqVz6jO.js"];
export const stylesheets = ["_app/immutable/assets/5.imkKyDoQ.css","_app/immutable/assets/Navbar.6XNwtdiE.css","_app/immutable/assets/PageHero.c0QBXrr8.css"];
export const fonts = [];
