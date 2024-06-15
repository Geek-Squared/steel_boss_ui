<script>
let products = [
    {
        name: 'IBR Chromadek Sheets',
        description: 'Transform your roofing and cladding projects with our premium IBR Chromadek Sheets service, delivering unmatched durability, aesthetic appeal, and weather resistance. Crafted from top-grade steel and coated with Chromadek for superior corrosion protection, our IBR sheets offer exceptional performance in residential, commercial, and industrial applications. Whether it\'s enhancing curb appeal or ensuring long-term structural integrity, our IBR Chromadek Sheets service sets the benchmark for excellence, providing clients with enduring quality and peace of mind.',
        image: '/ibr.jpeg'
    },
    {
        name: 'IBR Galvanized Sheets',
        description: 'Rely on our expertise in IBR Galvanized Sheets to elevate your roofing and cladding projects to new heights of durability and reliability. Engineered from premium galvanized steel, our IBR sheets boast exceptional corrosion resistance and structural strength, making them ideal for a wide range of applications. Whether it\'s residential, commercial, or industrial, our IBR Galvanized Sheets service delivers lasting protection and peace of mind, ensuring your building stands strong against the elements for years to come.',
        image: '/11.jpeg'
    },
    {
        name: 'IBR Corrugated Sheets',
        description: 'Discover the perfect blend of style and durability with our Q Tiles Chromadek Sheets service, offering innovative roofing solutions that redefine aesthetics and performance. Crafted from premium materials and coated with Chromadek for superior corrosion resistance, our Q Tiles Sheets bring the timeless elegance of tiled roofs to modern construction projects. Whether it\'s residential villas or commercial complexes, our Q Tiles Chromadek Sheets service delivers unparalleled beauty and longevity, setting your building apart with timeless sophistication.',
        image: '/ibr-cor.jpeg'
    },
    {
        name: 'Q-Tiles Chromadek Sheets',
        description: 'Discover the perfect blend of style and durability with our Q Tiles Chromadek Sheets service, offering innovative roofing solutions that redefine aesthetics and performance. Crafted from premium materials and coated with Chromadek for superior corrosion resistance, our Q Tiles Sheets bring the timeless elegance of tiled roofs to modern construction projects. Whether it\'s residential villas or commercial complexes, our Q Tiles Chromadek Sheets service delivers unparalleled beauty and longevity, setting your building apart with timeless sophistication.',
        image: '/q-tile.jpeg'
    },
    {
        name: 'Rolltop Ridges',
        description: 'Elevate the functionality and aesthetics of your roofing system with our Rolltop Ridges service, providing expertly crafted ridge caps designed to enhance protection and ventilation. Engineered for optimal weatherproofing and moisture management, our rolltop ridges ensure reliable performance and long-term durability in any climate. Whether it\'s new construction or roof renovation, our Rolltop Ridges service offers tailored solutions to meet your specific requirements, ensuring a seamless and secure finish that stands the test of time.',
        image: '/roll.jpeg'
    },
    {
        name: 'Valley Gutters',
        description: 'Ensure efficient rainwater management with our specialized Valley Gutters service, designed to channel and divert water away from vulnerable roof intersections. Crafted from high-quality materials and installed with precision, our valley gutters offer reliable protection against water pooling and potential leaks, preserving the integrity of your roofing system for years to come. With our tailored solutions and expert craftsmanship, you can trust our Valley Gutters service to keep your building dry and secure, no matter the weather.',
        image: '/gutter.jpeg'
    },
    {
        name: 'Flashings',
        description: 'Protect your building against the elements with our premium Flashings service, offering tailored solutions to prevent water penetration and safeguard critical areas. Our meticulously crafted flashings, expertly installed by our seasoned professionals, provide superior weatherproofing and drainage management, ensuring long-term structural integrity and peace of mind. Whether it\'s roof valleys, chimneys, or windows, our comprehensive flashings service delivers unmatched protection and durability, keeping your building dry and secure in any weather condition.',
        image: '/flash.jpeg'
    },

    {
        name: 'BULLNOSE/DOOR CAPS',
        description: 'At our service, we specialize in providing premium BULLNOSE/DOOR CAPS, meticulously crafted to enhance the durability and aesthetic appeal of your doors and exposed edges. Our expertly designed caps offer superior protection against damage and wear, ensuring long-lasting performance and visual allure. Whether you\'re looking to add a finishing touch to your doors or safeguard vulnerable edges, our BULLNOSE/DOOR CAPS are the perfect solution, combining functionality with elegance to meet your exacting requirements.',
        image: '/bull.jpeg'
    },
    {
        name: 'Safe top nails',
        description: 'Safety meets performance with our exclusive range of Safe Top Nails, designed to prioritize both functionality and user safety. Featuring a unique rounded or domed head, our nails minimize the risk of injury and snagging, making them ideal for a wide range of applications where safety is paramount. From playground equipment to furniture manufacturing, our Safe Top Nails offer peace of mind without compromising on performance, ensuring secure and hassle-free installations every time.',
        image: '/17.jpeg'
    },
    {
        name: 'Galvanised Coils',
        description: 'We offer high-quality galvanised coils, meticulously crafted through a precision hot-dip process, ensuring exceptional durability and corrosion resistance. Our galvanised coils serve as the cornerstone of structural integrity in various industries, ranging from construction to automotive. With a resilient zinc coating, these coils endure harsh environments while maintaining their structural integrity, providing our clients with unmatched reliability and longevity.',
        image: '/x.jpeg'
    },
    {
        name: 'Chromadek Coils',
        description: 'Elevate your construction projects with our premium Chromadek coils, meticulously engineered to deliver superior performance and aesthetic appeal. Crafted from top-grade steel and coated with a pre-painted zinc-aluminium alloy, our Chromadek coils offer unparalleled corrosion resistance and durability. Whether used for roofing or cladding applications in residential, commercial, or industrial settings, our Chromadek coils ensure long-lasting protection and visual allure, setting the standard for excellence in the industry.',
        image: '/2.jpeg'
    },
    {
        name: 'Allucusion /Allububble insulation rolls',
        description: 'Enhance the energy efficiency and comfort of your spaces with our cutting-edge Allucusion/Allububble insulation rolls. Engineered to regulate temperature and reduce energy consumption, our insulation rolls combine innovative materials and advanced manufacturing techniques to deliver unmatched performance. From bubble wrap to reflective foil laminates, our insulation rolls offer versatile solutions for a wide range of applications, ensuring optimal thermal comfort and energy savings for your buildings.',
        image: '/bubble.jpeg'
    },
];
</script>

  
  <style lang="scss">
.product-card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 3 cards per row */
    gap: 20px;
    /* space between cards */
    padding: 50px;
}

.product-card {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
}

.product-header {
    text-align: left;
}

.product-description {
    text-align: left;
    line-height: 1.6em;
    color: #888
}

h2 {
    text-align: left;
    margin-left: 3%;
    font-size: 40px;
    line-height: 1.3em;
    font-weight: 400;
    margin-bottom: 0;
}

h4 {
    text-align: left;
    font-size: 30px;
    line-height: 1.3em;
    font-weight: 400;
    margin-bottom: 0;
}

img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

@media (max-width: 768px) {
    .product-card-container {
        grid-template-columns: 1fr;
        /* 1 card per row on mobile */
    }
}
</style>

<h2>Our Products</h2>
<div class="product-card-container">
    {#each products as product (product.name)}
    <div class="product-card">
        <img src={product.image} alt={product.name} />
        <h4 class="product-header">{product.name}</h4>
        <p class="product-description">{product.description}</p>
    </div>
    {/each}
</div>
