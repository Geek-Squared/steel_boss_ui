import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as ContactFormSection } from "../../../chunks/ContactFormSection.js";
import { N as Navbar, F as Footer } from "../../../chunks/Navbar.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(PageHero, "PageHero").$$render($$result, { headingText: "Contact Us" }, {}, {})} ${validate_component(ContactFormSection, "ContactFormSection").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
