import { c as create_ssr_component, f as add_attribute, e as escape } from "./ssr.js";
import "@emailjs/browser";
const css = {
  code: ".contact-section.svelte-1rsuo5c.svelte-1rsuo5c{width:95%;margin:auto;padding:60px;box-sizing:border-box}.contact-form.svelte-1rsuo5c.svelte-1rsuo5c{display:flex;flex-direction:column}.contact-form.svelte-1rsuo5c input.svelte-1rsuo5c,.contact-form.svelte-1rsuo5c textarea.svelte-1rsuo5c{width:100%;margin:10px 0;padding:10px;border:1px solid #ddd;border-radius:0;outline:none}.contact-form.svelte-1rsuo5c textarea.svelte-1rsuo5c{height:150px}.contact-form.svelte-1rsuo5c button.svelte-1rsuo5c{width:30%;margin:10px 0;padding:10px;border:1px solid #ddd;border-radius:0;color:#fff;cursor:pointer}h2.svelte-1rsuo5c.svelte-1rsuo5c{text-align:left;font-size:40px;font-weight:400}button.svelte-1rsuo5c.svelte-1rsuo5c{align-self:left;background-color:#0001ff}",
  map: null
};
const ContactFormSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let email = "";
  $$result.css.add(css);
  return `<div class="contact-section svelte-1rsuo5c"><h2 class="svelte-1rsuo5c" data-svelte-h="svelte-1xms6yw">Love to hear from you, Get In Touch 👋</h2> <form class="contact-form svelte-1rsuo5c"><input type="text" placeholder="Name" class="svelte-1rsuo5c"${add_attribute("value", name, 0)}> <input type="email" placeholder="Email" class="svelte-1rsuo5c"${add_attribute("value", email, 0)}> <textarea placeholder="Message" class="svelte-1rsuo5c">${escape("")}</textarea> <button type="submit" ${""} class="svelte-1rsuo5c">${`Send Message`}</button></form> ${``}</div>`;
});
export {
  ContactFormSection as C
};
