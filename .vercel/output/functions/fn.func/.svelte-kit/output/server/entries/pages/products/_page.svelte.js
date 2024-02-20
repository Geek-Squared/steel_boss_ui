import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../chunks/Navbar.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
const css = {
  code: ".product-card-container.svelte-xrwc68{display:grid;grid-template-columns:repeat(3, 1fr);gap:20px;padding:50px}.product-card.svelte-xrwc68{border:1px solid #ddd;border-radius:4px;padding:20px;text-align:center}.product-header.svelte-xrwc68{text-align:left}.product-description.svelte-xrwc68{text-align:left;line-height:1.6em;color:#888\n}h2.svelte-xrwc68{text-align:left;margin-left:3%;font-size:40px;line-height:1.3em;font-weight:400;margin-bottom:0}h4.svelte-xrwc68{text-align:left;font-size:30px;line-height:1.3em;font-weight:400;margin-bottom:0}img.svelte-xrwc68{width:100%;height:200px;object-fit:cover}@media(max-width: 768px){.product-card-container.svelte-xrwc68{grid-template-columns:1fr}}",
  map: null
};
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<h2 class="svelte-xrwc68" data-svelte-h="svelte-b99pso">Our Products</h2> <div class="product-card-container svelte-xrwc68">${each(products, (product) => {
    return `<div class="product-card svelte-xrwc68"><img${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)} class="svelte-xrwc68"> <h4 class="product-header svelte-xrwc68">${escape(product.name)}</h4> <p class="product-description svelte-xrwc68">${escape(product.description)}</p> </div>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(PageHero, "PageHero").$$render($$result, {}, {}, {})} ${validate_component(Products, "Products").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
