import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "./ssr.js";
const css$1 = {
  code: ".footer.svelte-lveobx.svelte-lveobx{display:flex;justify-content:space-between;padding-left:6%;padding-right:-1%;padding-top:2%;padding-bottom:2%;box-sizing:border-box;background-color:#f8f8f8}.footer.svelte-lveobx h2.svelte-lveobx{margin-bottom:20px}.faded-header.svelte-lveobx.svelte-lveobx{color:#888}.footer-links.svelte-lveobx.svelte-lveobx{display:flex;flex-direction:column;width:70%}.footer-links-row.svelte-lveobx.svelte-lveobx{display:flex;justify-content:space-between;width:90%}.contact-info.svelte-lveobx.svelte-lveobx{margin-top:20px;line-height:1.6em;color:#888}.contact-info.svelte-lveobx i.svelte-lveobx{margin-right:10px}h2.svelte-lveobx.svelte-lveobx{text-align:left;font-size:30px;line-height:1.3em;font-weight:400}.link-button.svelte-lveobx.svelte-lveobx{display:inline-block;margin:10px 0;padding:10px;border:1px solid #ddd;border-radius:0;background-color:#0001ff;color:#fff;text-decoration:none;text-align:center;width:300px}@media(max-width: 768px){.link-button.svelte-lveobx.svelte-lveobx{width:100%}}@media(max-width: 768px){.footer.svelte-lveobx.svelte-lveobx{flex-direction:column;align-items:center;padding:20px}.footer-links-row.svelte-lveobx.svelte-lveobx{flex-direction:column;align-items:center}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="footer svelte-lveobx" data-svelte-h="svelte-q1vlxo"><div><h2 class="svelte-lveobx">Steel: Building dreams, shaping futures.<br> With Steel Boss Inc, your vision becomes reality.</h2></div> <div class="second-section"><h2 class="faded-header svelte-lveobx">Helpful Links</h2> <div class="footer-links svelte-lveobx"><div class="footer-links-row svelte-lveobx"><a href="/" class="link-button svelte-lveobx">Home</a> <a href="/products" class="link-button svelte-lveobx">Our Products</a> <a href="/about" class="link-button svelte-lveobx">About</a></div> <div class="footer-links-row svelte-lveobx"><a href="/products" class="link-button svelte-lveobx">Services</a> <a href="/contact" class="link-button svelte-lveobx">Contact</a></div></div> <div class="contact-info svelte-lveobx"><p><i class="fas fa-map-marker-alt svelte-lveobx"></i> 30074 Unit G Makoni Shops, Opp City Council, Seke, Chitungwiza, Zimbabwe</p> <p><i class="fas fa-phone svelte-lveobx"></i> +263 77 803 2070</p></div></div></div>`;
});
const css = {
  code: ".navbar.svelte-xe7zqz.svelte-xe7zqz{display:flex;justify-content:space-between;align-items:center;padding:20px;background-color:white;position:sticky;top:0;z-index:100}.logo.svelte-xe7zqz.svelte-xe7zqz{font-size:1.5em;font-weight:bold}.menu.svelte-xe7zqz.svelte-xe7zqz{display:flex;gap:30px;justify-content:space-evenly;width:100%}a.svelte-xe7zqz.svelte-xe7zqz{text-decoration:none;font-size:23px;font-weight:500;color:#333}.menu-button-container.svelte-xe7zqz.svelte-xe7zqz{display:flex;align-items:center;gap:80px}.quote-button.svelte-xe7zqz.svelte-xe7zqz{color:white;width:200px;border:none;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;border-radius:4px;background-color:#0001ff}.menu-icon.svelte-xe7zqz.svelte-xe7zqz{display:none;cursor:pointer;font-size:30px}.close-menu.svelte-xe7zqz.svelte-xe7zqz{display:none;position:absolute;top:10px;right:10px;background:none;border:none;font-size:2em}.logo.svelte-xe7zqz img.svelte-xe7zqz{height:100px;width:auto}@media(max-width: 768px){.navbar.svelte-xe7zqz.svelte-xe7zqz{position:relative}.menu.svelte-xe7zqz.svelte-xe7zqz{position:absolute;top:100%;left:0;right:0;background:white;width:100%;flex-direction:column;display:none}.menu-icon.svelte-xe7zqz.svelte-xe7zqz{display:block}.menu-button-container.active.svelte-xe7zqz .menu.svelte-xe7zqz,.menu-button-container.active.svelte-xe7zqz .close-menu.svelte-xe7zqz{display:flex}.quote-button.svelte-xe7zqz.svelte-xe7zqz{display:none}.close-menu.svelte-xe7zqz.svelte-xe7zqz{background-color:none}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuItems = [
    { name: "Home", url: "/" },
    { name: "Our Products", url: "/products" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" }
  ];
  $$result.css.add(css);
  return `<div class="navbar svelte-xe7zqz"><div class="logo svelte-xe7zqz" data-svelte-h="svelte-1qqaa1z"><img src="/logo.jpeg" alt="Logo" class="svelte-xe7zqz"></div> <div class="${["menu-button-container svelte-xe7zqz", ""].join(" ").trim()}"><button class="close-menu svelte-xe7zqz" data-svelte-h="svelte-n77rh3">X</button> <div class="menu svelte-xe7zqz">${each(menuItems, (item) => {
    return `<a${add_attribute("href", item.url, 0)} class="svelte-xe7zqz">${escape(item.name)}</a>`;
  })}</div> <a href="/contact" class="svelte-xe7zqz" data-svelte-h="svelte-12yi2t3"><button class="quote-button svelte-xe7zqz">GET A QUOTE</button></a></div> ${`<div class="menu-icon svelte-xe7zqz" data-svelte-h="svelte-x8unm6">☰</div>`}</div>`;
});
export {
  Footer as F,
  Navbar as N
};
