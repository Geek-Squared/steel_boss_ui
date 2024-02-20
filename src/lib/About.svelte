<script>
  import { goto } from "$app/navigation";
</script>

<style>
  .hero {
    display: flex;
    justify-content: space-evenly;
    padding: 90px
  }

  .hero h1 {
    text-align: left;
    font-size: 40px;
    line-height: 1.3em;
    font-weight: 400;
  }

  .header {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .hero p {
    width: 50%;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.3em;
    color: #888;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 30px;
    }

    .header, .hero p {
      width: 100%;
    }

    .hero h1 {
      font-size: 30px;
      text-align: center;
    }

    .hero p {
      font-size: 18px;
    }
  }
</style>

<section class="hero">
  <div class="header">
    <h1>Celebrating Quality, Innovation,  <br /> and Dependability in Every Alloy</h1>
  </div>
  <p>At Steel Boss Inc, we are the premier supplier of quality metals in Zimbabwe. With a commitment to excellence and customer satisfaction, we provide a wide range of metal products to meet various industrial and construction needs. <br/><br/>At Steel Boss Inc, we are dedicated to providing top-notch products and unparalleled service to our valued customers across Zimbabwe. Contact us today to discover how we can meet your metal supply needs with precision and reliability.</p>
</section>