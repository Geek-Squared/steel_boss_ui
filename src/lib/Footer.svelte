<script>
// import { Instagram, Facebook } from 'svelte-icons';
</script>

<style>
.footer {
    display: flex;
    justify-content: space-between;
    padding-left: 6%;
    padding-right: -1%;
    padding-top: 2%;
    padding-bottom: 2%;
    box-sizing: border-box;
    background-color: #f8f8f8;
}

.footer h2 {
    margin-bottom: 20px;
}

.faded-header {
    color: #888;
    /* Added */
}

.footer-links {
    display: flex;
    flex-direction: column;
    width: 70%;
}

.footer-links-row {
    display: flex;
    justify-content: space-between;
    width: 90%;
}

.contact-info {
    margin-top: 20px;
    line-height: 1.6em;
    color: #888;
}

.contact-info i {
    margin-right: 10px;
}

h2 {
    text-align: left;
    font-size: 30px;
    line-height: 1.3em;
    font-weight: 400;
}

.link-button {
    display: inline-block;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 0;
    background-color: #0001ff;
    color: #fff;
    text-decoration: none;
    text-align: center;
    width: 300px;
}

@media (max-width: 768px) {
    .link-button {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .footer {
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .footer-links-row {
        flex-direction: column;
        align-items: center;
    }
}
</style>

<div class="footer">
    <div>
        <h2>Steel: Building dreams, shaping futures.<br /> With Steel Boss Inc, your vision becomes reality.</h2>
    </div>

    <div class="second-section">
        <h2 class="faded-header">Helpful Links</h2>
        <div class="footer-links">
            <div class="footer-links-row">
                <a href="/" class="link-button">Home</a>
                <a href="/products" class="link-button">Our Products</a>
                <a href="/about" class="link-button">About</a>
            </div>
            <div class="footer-links-row">
                <a href="/products" class="link-button">Services</a>
                <a href="/contact" class="link-button">Contact</a>
            </div>
        </div>
        <div class="contact-info">
            <p><i class="fas fa-map-marker-alt"></i> 30074 Unit G Makoni Shops, Opp City Council, Seke, Chitungwiza, Zimbabwe</p>
            <p><i class="fas fa-phone"></i> +263 77 803 2070</p>
        </div>
    </div>
</div>
