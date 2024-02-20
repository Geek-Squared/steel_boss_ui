import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
/* empty css                                                      */
import { C as ContactFormSection } from "../../chunks/ContactFormSection.js";
import { N as Navbar, F as Footer } from "../../chunks/Navbar.js";
const css$2 = {
  code: ".hero.svelte-11eemtl.svelte-11eemtl{display:flex;justify-content:space-evenly;padding:90px\n  }.hero.svelte-11eemtl h1.svelte-11eemtl{text-align:left;font-size:40px;line-height:1.3em;font-weight:400}.header.svelte-11eemtl.svelte-11eemtl{display:flex;flex-direction:column;width:50%}.hero.svelte-11eemtl p.svelte-11eemtl{width:50%;font-size:24px;font-weight:300;line-height:1.3em;color:#888}.button.svelte-11eemtl.svelte-11eemtl{background-color:#007bff;width:30%;color:white;border:none;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;border-radius:4px}@media(max-width: 768px){.hero.svelte-11eemtl.svelte-11eemtl{flex-direction:column;align-items:center;text-align:center;padding:30px}.header.svelte-11eemtl.svelte-11eemtl,.hero.svelte-11eemtl p.svelte-11eemtl{width:100%}.hero.svelte-11eemtl h1.svelte-11eemtl{font-size:30px;text-align:center}.hero.svelte-11eemtl p.svelte-11eemtl{font-size:18px}.button.svelte-11eemtl.svelte-11eemtl{width:60%;align-self:center}}",
  map: null
};
const AboutSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="hero svelte-11eemtl"><div class="header svelte-11eemtl"><h1 class="svelte-11eemtl" data-svelte-h="svelte-1jeuik4">About <br> Steel Boss Inc</h1> <button class="button svelte-11eemtl" data-svelte-h="svelte-1lcd1yc">Learn More</button></div> <p class="svelte-11eemtl" data-svelte-h="svelte-1tqwjvj">At Steel Boss Inc, we are the premier supplier of quality metals in Zimbabwe. With a commitment to excellence and customer satisfaction, we provide a wide range of metal products to meet various industrial and construction needs. <br><br>At Steel Boss Inc, we are dedicated to providing top-notch products and unparalleled service to our valued customers across Zimbabwe. Contact us today to discover how we can meet your metal supply needs with precision and reliability.</p></section>`;
});
const css$1 = {
  code: ".hero.svelte-svbb22.svelte-svbb22{background-size:cover;background-position:center;position:relative;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;color:white}.overlay.svelte-svbb22.svelte-svbb22{background-color:rgba(0, 0, 0, 0.6);position:absolute;top:0;bottom:0;left:0;right:0}.content.svelte-svbb22.svelte-svbb22{position:relative;text-align:center;z-index:1;padding:0 20px}.button.svelte-svbb22.svelte-svbb22{color:white;border:none;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;border-radius:4px}h1.svelte-svbb22.svelte-svbb22{font-size:60px}p.svelte-svbb22.svelte-svbb22{line-height:1.3em;font-size:30px}@media(max-width: 768px){.hero.svelte-svbb22.svelte-svbb22{height:50vh}.content.svelte-svbb22 h1.svelte-svbb22{font-size:40px}.content.svelte-svbb22 p.svelte-svbb22{font-size:14px}.button.svelte-svbb22.svelte-svbb22{font-size:14px;padding:8px 16px}}",
  map: null
};
let backgroundImage = "/header.jpeg";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="hero svelte-svbb22" style="${"background-image: url(" + escape(backgroundImage, true) + ");"}"><div class="overlay svelte-svbb22"></div> <div class="content svelte-svbb22"><h1 class="svelte-svbb22" data-svelte-h="svelte-ldxhsb">Empowering Zimbabwe&#39;s Infrastructure with Premium Metal Solutions</h1> <p class="svelte-svbb22" data-svelte-h="svelte-1fpqwbg">Steel Boss Inc stands at the forefront of Zimbabwe&#39;s metal supply industry,<br> offering a comprehensive range of premium products meticulously <br> crafted to meet diverse industrial and construction needs.</p> <button class="button svelte-svbb22" data-svelte-h="svelte-pc2xja">Our Products</button></div></div>`;
});
const css = {
  code: ".product-card-container.svelte-18y3c1v{display:flex;justify-content:flex-start;padding:0 20px;overflow-x:auto;white-space:nowrap;flex-wrap:nowrap;width:100%;-webkit-overflow-scrolling:touch}.product-card-container.svelte-18y3c1v::-webkit-scrollbar{display:none}.product-description.svelte-18y3c1v{text-align:left;white-space:normal;line-height:1.6em}.wrapper.svelte-18y3c1v{padding:90px}.product-card.svelte-18y3c1v{flex:0 0 auto;width:30%;border:1px solid #ddd;border-radius:4px;padding:20px;text-align:center;margin-right:20px;display:flex;flex-direction:column;align-items:flex-start}img.svelte-18y3c1v{width:100%;height:200px;object-fit:cover}h3.svelte-18y3c1v{text-align:left;margin-left:20px;font-size:40px;line-height:1.3em;font-weight:400}h4.svelte-18y3c1v{text-align:left;font-size:30px;line-height:1.3em;font-weight:400;margin-bottom:0}p.svelte-18y3c1v{text-align:left;font-size:18px;font-weight:300;line-height:1.3em;color:#888}@media(max-width: 768px){.product-card-container.svelte-18y3c1v{flex-direction:row;padding:0}.product-card.svelte-18y3c1v{width:100%;margin:0}h3.svelte-18y3c1v{font-size:30px}h4.svelte-18y3c1v{font-size:20px}p.svelte-18y3c1v{font-size:16px}.wrapper.svelte-18y3c1v{padding:20px}}",
  map: null
};
const ProductSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products = [
    {
      name: "Galvanised Coils",
      description: "We offer high-quality galvanised coils, meticulously crafted through a precision hot-dip process, ensuring exceptional durability and corrosion resistance. Our galvanised coils serve as the cornerstone of structural integrity in various industries, ranging from construction to automotive. With a resilient zinc coating, these coils endure harsh environments while maintaining their structural integrity, providing our clients with unmatched reliability and longevity.",
      image: "/1.jpeg"
    },
    {
      name: "Chromadek Coils",
      description: "Elevate your construction projects with our premium Chromadek coils, meticulously engineered to deliver superior performance and aesthetic appeal. Crafted from top-grade steel and coated with a pre-painted zinc-aluminium alloy, our Chromadek coils offer unparalleled corrosion resistance and durability. Whether used for roofing or cladding applications in residential, commercial, or industrial settings, our Chromadek coils ensure long-lasting protection and visual allure, setting the standard for excellence in the industry.",
      image: "/2.jpeg"
    },
    {
      name: "Allucusion /Allububble insulation rolls",
      description: "Enhance the energy efficiency and comfort of your spaces with our cutting-edge Allucusion/Allububble insulation rolls. Engineered to regulate temperature and reduce energy consumption, our insulation rolls combine innovative materials and advanced manufacturing techniques to deliver unmatched performance. From bubble wrap to reflective foil laminates, our insulation rolls offer versatile solutions for a wide range of applications, ensuring optimal thermal comfort and energy savings for your buildings.",
      image: "/16.png"
    },
    {
      name: "BULLNOSE/DOOR CAPS",
      description: "At our service, we specialize in providing premium BULLNOSE/DOOR CAPS, meticulously crafted to enhance the durability and aesthetic appeal of your doors and exposed edges. Our expertly designed caps offer superior protection against damage and wear, ensuring long-lasting performance and visual allure. Whether you're looking to add a finishing touch to your doors or safeguard vulnerable edges, our BULLNOSE/DOOR CAPS are the perfect solution, combining functionality with elegance to meet your exacting requirements.",
      image: "https://via.placeholder.com/200"
    },
    {
      name: "Safe top nails",
      description: "Safety meets performance with our exclusive range of Safe Top Nails, designed to prioritize both functionality and user safety. Featuring a unique rounded or domed head, our nails minimize the risk of injury and snagging, making them ideal for a wide range of applications where safety is paramount. From playground equipment to furniture manufacturing, our Safe Top Nails offer peace of mind without compromising on performance, ensuring secure and hassle-free installations every time.",
      image: "/17.png"
    },
    {
      name: "Flashings",
      description: "Protect your building against the elements with our premium Flashings service, offering tailored solutions to prevent water penetration and safeguard critical areas. Our meticulously crafted flashings, expertly installed by our seasoned professionals, provide superior weatherproofing and drainage management, ensuring long-term structural integrity and peace of mind. Whether it's roof valleys, chimneys, or windows, our comprehensive flashings service delivers unmatched protection and durability, keeping your building dry and secure in any weather condition.",
      image: "/15.png"
    },
    {
      name: "Valley Gutters",
      description: "Ensure efficient rainwater management with our specialized Valley Gutters service, designed to channel and divert water away from vulnerable roof intersections. Crafted from high-quality materials and installed with precision, our valley gutters offer reliable protection against water pooling and potential leaks, preserving the integrity of your roofing system for years to come. With our tailored solutions and expert craftsmanship, you can trust our Valley Gutters service to keep your building dry and secure, no matter the weather.",
      image: "/14.png"
    },
    {
      name: "IBR Chromadek Sheets",
      description: "Transform your roofing and cladding projects with our premium IBR Chromadek Sheets service, delivering unmatched durability, aesthetic appeal, and weather resistance. Crafted from top-grade steel and coated with Chromadek for superior corrosion protection, our IBR sheets offer exceptional performance in residential, commercial, and industrial applications. Whether it's enhancing curb appeal or ensuring long-term structural integrity, our IBR Chromadek Sheets service sets the benchmark for excellence, providing clients with enduring quality and peace of mind.",
      image: "/13.png"
    },
    {
      name: "IBR Galvanized Sheets",
      description: "Rely on our expertise in IBR Galvanized Sheets to elevate your roofing and cladding projects to new heights of durability and reliability. Engineered from premium galvanized steel, our IBR sheets boast exceptional corrosion resistance and structural strength, making them ideal for a wide range of applications. Whether it's residential, commercial, or industrial, our IBR Galvanized Sheets service delivers lasting protection and peace of mind, ensuring your building stands strong against the elements for years to come.",
      image: "/11.png"
    },
    {
      name: "Q Tiles Chromadek Sheets",
      description: "Discover the perfect blend of style and durability with our Q Tiles Chromadek Sheets service, offering innovative roofing solutions that redefine aesthetics and performance. Crafted from premium materials and coated with Chromadek for superior corrosion resistance, our Q Tiles Sheets bring the timeless elegance of tiled roofs to modern construction projects. Whether it's residential villas or commercial complexes, our Q Tiles Chromadek Sheets service delivers unparalleled beauty and longevity, setting your building apart with timeless sophistication.",
      image: "/10.png"
    },
    {
      name: "Rolltop Ridges",
      description: "Elevate the functionality and aesthetics of your roofing system with our Rolltop Ridges service, providing expertly crafted ridge caps designed to enhance protection and ventilation. Engineered for optimal weatherproofing and moisture management, our rolltop ridges ensure reliable performance and long-term durability in any climate. Whether it's new construction or roof renovation, our Rolltop Ridges service offers tailored solutions to meet your specific requirements, ensuring a seamless and secure finish that stands the test of time.",
      image: "/9.png"
    }
  ];
  $$result.css.add(css);
  return `<main><div class="wrapper svelte-18y3c1v"><h3 class="svelte-18y3c1v" data-svelte-h="svelte-1n5i6rm">Our Products</h3> <div class="product-card-container svelte-18y3c1v">${each(products, (product) => {
    return `<div class="product-card svelte-18y3c1v"><img${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)} class="svelte-18y3c1v"> <h4 class="product-header svelte-18y3c1v">${escape(product.name)}</h4> <p class="product-description svelte-18y3c1v">${escape(product.description)}</p> </div>`;
  })}</div></div></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(AboutSection, "AboutSection").$$render($$result, {}, {}, {})} ${validate_component(ProductSection, "ProductSection").$$render($$result, {}, {}, {})} ${validate_component(ContactFormSection, "ContactFormSection").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
