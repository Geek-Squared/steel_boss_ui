<script>
// import { Instagram, Facebook } from 'svelte-icons';
</script>

<style lang="scss">
.footer {
    display: flex !important;
    justify-content: flex-start;
    gap: 5%;
    height: 43vh;
    padding: 20px 56px;
    box-sizing: border-box !important;
    background-color: #333 !important;
  }

.footer h2 {
    margin-bottom: 20px !important;
}

.faded-header {
    color: #888 !important;
   
}

.footer-links {
    display: flex !important;
    flex-direction: column !important;
    width: 70% !important;
}

.footer-links-row {
    display: flex !important;
    justify-content: space-between !important;
    width: 90% !important;
}

.contact-info {
    margin-top: 10px !important;
    line-height: 1.6em !important;
    color: #888 !important;
}

.contact-info i {
    margin-right: 10px !important;
    margin-top: 0.5%;
}

h2 {
    text-align: left !important;
    font-size: 30px;
    line-height: 1.3em !important;
    font-weight: 400 !important;
    color: #fff !important
}

.link-button {
    display: inline-block !important;
    margin: 10px 0 !important;
    padding: 10px !important;
    border: 1px solid #ddd !important;
    border-radius: 0 !important;
    background-color: #0001ff !important;
    color: #fff !important;
    text-decoration: none !important;
    text-align: center !important;
    width: 300px !important;
}

p {
    color: #fff !important;
}

.about {
    width: 25%;
}

.social-media {
  display: flex;
  flex-direction: column;
  width: 20%; 
  margin-top: 0.5%;
}

.quick-links {
    display: flex;
    flex-direction: column;
    margin-top: 0.5%;
}

.quick-links a {
  display: flex;
  align-items: center; 
  line-height: 2em;
}
.social-media a {
  display: flex;
  align-items: center; 
  line-height: 2em;
}

 .quick-links a::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 2px;
  margin-right: 10px;
}

.social-media a::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 2px;
  margin-right: 10px;
}

a {
    text-decoration: none;
    color: #fff;
}

@media (max-width: 768px) {
    .link-button {
        width: 100% !important;
    }
}

@media (max-width: 768px) {
    .footer {
        flex-direction: column !important;
        align-items: center !important;
        padding: 20px !important;
    }

    .footer-links-row {
        flex-direction: column !important;
        align-items: center !important;
    }
}
</style>

<div class="footer">
    <div class="about">
      <h2>About</h2>
      <p>Steel Boss Incorporated is a Steel Fabrication company which started off in 2022 selling galvanised  and Chromadek IBR sheets decoiled from mother coils and cut to specified lengths.<br/>
        The client base consist exclusively of Retail and informal business customers in Chitungwiza and surrounding areas.
        Steel Boss Incorporated also does curving, bull nosing and cranking of sheets was and has a trading section for steel and roofing accessories also in operation.</p>
    </div>
  
    <div class="contact-info">
      <h2>Contact Info</h2>
      <p><i class="fas fa-map-marker-alt"></i> 30074 Unit G Makoni Shops, Opp City Council, <br/> Seke, Chitungwiza, Zimbabwe</p>
      <p><i class="fas fa-phone"></i> +263 77 803 2070</p>
      <p><i class="fas fa-envelope"></i> info@steelboss.org</p>
    </div>
  
    <div class="quick-links">
      <h2>Quick Links</h2>
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>

    <div class="social-media">
        <h2>Connect</h2>
        <a href="https://www.facebook.com/steelbossinc">Facebook</a>
      </div>
  </div>
