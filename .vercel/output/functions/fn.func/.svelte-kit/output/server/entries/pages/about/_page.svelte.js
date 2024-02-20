import { c as create_ssr_component, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../chunks/Navbar.js";
/* empty css                                                     */
import "../../../chunks/client.js";
/* empty css                                                         */
const css$2 = {
  code: ".image-container.svelte-wy7y61.svelte-wy7y61{display:flex;justify-content:space-between;padding:50px}.image-container.svelte-wy7y61 img.svelte-wy7y61:first-child{width:55%;clip-path:polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)}.image-container.svelte-wy7y61 img.svelte-wy7y61:last-child{width:40%;clip-path:polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)}",
  map: null
};
const AboutImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image1 = "/header.jpeg" } = $$props;
  let { image2 = "/product.jpeg" } = $$props;
  if ($$props.image1 === void 0 && $$bindings.image1 && image1 !== void 0)
    $$bindings.image1(image1);
  if ($$props.image2 === void 0 && $$bindings.image2 && image2 !== void 0)
    $$bindings.image2(image2);
  $$result.css.add(css$2);
  return `<div class="image-container svelte-wy7y61"><img${add_attribute("src", image1, 0)} alt="Factory for coils" class="svelte-wy7y61"> <img${add_attribute("src", image2, 0)} alt="Coiled product " class="svelte-wy7y61"></div>`;
});
const css$1 = {
  code: ".text-container.svelte-mrqame.svelte-mrqame{display:flex;justify-content:space-between;padding:60px}.header.svelte-mrqame.svelte-mrqame{width:40%;font-size:40px;text-align:left;font-weight:400}.text-container.svelte-mrqame p.svelte-mrqame{width:50%;text-align:left;font-size:24px;line-height:1.5em;font-weight:300;color:#888}",
  map: null
};
const AboutText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "Our Values" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css$1);
  return `<div class="text-container svelte-mrqame"><h1 class="header svelte-mrqame">${escape(heading)}</h1> <p class="svelte-mrqame" data-svelte-h="svelte-lx7d31">Quality: We never compromise on the quality of our products. Each alloy that bears the Steel Boss Inc name undergoes rigorous testing and inspection to ensure it meets the highest standards of performance and durability.

        Innovation: We embrace innovation as the cornerstone of our success. From cutting-edge manufacturing techniques to groundbreaking product designs, we constantly push the boundaries of what&#39;s possible to deliver solutions that exceed expectations.

        Integrity: We conduct our business with the utmost integrity, honesty, and transparency. Our customers trust us to deliver on our promises, and we take that responsibility seriously.

        Reliability: Dependability is at the core of everything we do. Our customers rely on us to provide consistent, timely, and efficient service, and we go above and beyond to exceed their expectations every step of the way.</p></div>`;
});
const css = {
  code: ".hero.svelte-zc36qs.svelte-zc36qs{display:flex;justify-content:space-evenly;padding:90px\n  }.hero.svelte-zc36qs h1.svelte-zc36qs{text-align:left;font-size:40px;line-height:1.3em;font-weight:400}.header.svelte-zc36qs.svelte-zc36qs{display:flex;flex-direction:column;width:50%}.hero.svelte-zc36qs p.svelte-zc36qs{width:50%;font-size:24px;font-weight:300;line-height:1.3em;color:#888}@media(max-width: 768px){.hero.svelte-zc36qs.svelte-zc36qs{flex-direction:column;align-items:center;text-align:center;padding:30px}.header.svelte-zc36qs.svelte-zc36qs,.hero.svelte-zc36qs p.svelte-zc36qs{width:100%}.hero.svelte-zc36qs h1.svelte-zc36qs{font-size:30px;text-align:center}.hero.svelte-zc36qs p.svelte-zc36qs{font-size:18px}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="hero svelte-zc36qs" data-svelte-h="svelte-1d9dpnm"><div class="header svelte-zc36qs"><h1 class="svelte-zc36qs">Celebrating Quality, Innovation,  <br> and Dependability in Every Alloy</h1></div> <p class="svelte-zc36qs">At Steel Boss Inc, we are the premier supplier of quality metals in Zimbabwe. With a commitment to excellence and customer satisfaction, we provide a wide range of metal products to meet various industrial and construction needs. <br><br>At Steel Boss Inc, we are dedicated to providing top-notch products and unparalleled service to our valued customers across Zimbabwe. Contact us today to discover how we can meet your metal supply needs with precision and reliability.</p></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(AboutImages, "AboutImages").$$render($$result, {}, {}, {})} ${validate_component(AboutText, "AboutText").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
