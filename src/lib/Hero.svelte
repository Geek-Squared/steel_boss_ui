<script>
  let imageIndex = 0;
  let images = ['/hero.jpeg', '/header2.jpeg', '/header3.jpeg', '/header4.jpeg'];
  let backgroundImage = images[imageIndex];
  import { goto } from '$app/navigation';

  setInterval(() => {
    imageIndex = (imageIndex + 1) % images.length;
    backgroundImage = images[imageIndex];
  }, 3000); // Change image every 3 seconds
</script>

<style lang="scss">
  .hero {
    background-size: cover;
    background-position: center;
    position: relative;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    text-align: center;
    z-index: 1;
    padding: 0 20px;
  }

  .button {
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    width: 300px;
  }

  h1 {
    font-size: 60px;
  }

  p {
    line-height: 1.3em;
    font-size: 30px;
  }

  @media (max-width: 768px) {
    .hero {
      height: 80vh;
    }

    .content h1 {
      font-size: 40px;
    }

    .content p {
      font-size: 14px;
    }

    .button {
      font-size: 14px;
      padding: 8px 16px;
    }
  }
</style>

<div class="hero" style="background-image: url({backgroundImage});">
  <div class="overlay"></div>
  <div class="content">
    <h1>Empowering Zimbabwe's Infrastructure with Premium Metal Solutions</h1>
    <p>Steel Boss Inc stands at the forefront of Zimbabwe's metal supply industry,<br/> offering a comprehensive range of premium products meticulously <br/> crafted to meet diverse industrial and construction needs. </p>
    
   <button class="button" on:click={() => goto('/products')}>Our Products</button>
  </div>
</div>