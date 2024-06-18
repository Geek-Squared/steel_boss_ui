<script>
  // let backgroundVideo = './hero.mp4';
  export let headingText = "Our Products";
</script>

<style lang="scss">
  .hero {
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    overflow: hidden;
  }

  .hero::before {
    content: "";
    background-image: url('/hero.jpeg'); /* Use your background image here */
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2; /* Ensure background image is behind the video */
  }

  .hero video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ensure the whole video fits within the hero section */
    transform: translate(-50%, -50%);
    z-index: -1; /* Ensure video stays behind content */
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0; /* Ensure overlay is behind content but above video */
  }

  .content {
    position: relative;
    text-align: center;
    z-index: 1;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    .hero {
      height: 50vh; /* Maintain height for smaller screens */
    }

    .content h1 {
      font-size: 24px;
    }
  }
</style>

<div class="hero">
  <!-- <video src={backgroundVideo} autoplay loop muted></video> -->
  <!-- <div class="overlay"></div> -->
  <div class="content">
    <h1>{headingText}</h1>
  </div>
</div>
