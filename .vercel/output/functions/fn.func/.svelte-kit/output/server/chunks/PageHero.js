import { c as create_ssr_component, e as escape } from "./ssr.js";
/* empty css                                       */
const css = {
  code: ".hero.svelte-115cu6y.svelte-115cu6y{background-size:cover;background-position:center;position:relative;height:40vh;display:flex;justify-content:center;align-items:center;flex-direction:column;color:white}.overlay.svelte-115cu6y.svelte-115cu6y{background-color:rgba(0, 0, 0, 0.5);position:absolute;top:0;bottom:0;left:0;right:0}.content.svelte-115cu6y.svelte-115cu6y{position:relative;text-align:center;z-index:1;padding:0 20px}@media(max-width: 768px){.hero.svelte-115cu6y.svelte-115cu6y{height:50vh}.content.svelte-115cu6y h1.svelte-115cu6y{font-size:24px}}",
  map: null
};
let backgroundImage = "./product.jpeg";
const PageHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { headingText = "Our Products" } = $$props;
  if ($$props.headingText === void 0 && $$bindings.headingText && headingText !== void 0)
    $$bindings.headingText(headingText);
  $$result.css.add(css);
  return `<div class="hero svelte-115cu6y" style="${"background-image: url(" + escape(backgroundImage, true) + ");"}"><div class="overlay svelte-115cu6y"></div> <div class="content svelte-115cu6y"><h1 class="svelte-115cu6y">${escape(headingText)}</h1></div></div>`;
});
export {
  PageHero as P
};
