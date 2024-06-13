<script>
  let backgroundVideo = './hero.mp4';
  export let headingText = "Our Products";
</script>

<style lang="scss">
  .hero {
    position: relative;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    overflow: hidden;
  }

  .hero video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    transform: translate(-50%, -50%);
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
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

  @media (max-width: 768px) {
    .hero {
      height: 50vh;
    }

    .content h1 {
      font-size: 24px;
    }
  }
</style>

<div class="hero">
  <video src={backgroundVideo} autoplay loop muted></video>
  <div class="overlay"></div>
  <div class="content">
    <h1>{headingText}</h1>
  </div>
</div>
