<script>
    export let image1 = "/header.jpeg";
    export let image2 = "/product.jpeg";
  </script>
  
  <style>
    .image-container {
      display: flex;
      justify-content: space-between;
      padding: 50px;
    }
  
    .image-container img:first-child {
      width: 55%;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
    }
  
    .image-container img:last-child {
      width: 40%;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
    }
  </style>
  
  <div class="image-container">
    <img src={image1} alt="Factory for coils" />
    <img src={image2} alt="Coiled product " />
  </div>