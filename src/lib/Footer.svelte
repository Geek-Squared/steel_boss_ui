<script>
// import { Instagram, Facebook } from 'svelte-icons';
</script>

<style lang="scss">
.footer {
    display: flex !important;
    justify-content: space-between !important;
    padding: 20px 56px;
    box-sizing: border-box !important;
    background-color: #888 !important;
}

.footer h2 {
    margin-bottom: 20px !important;
}

.faded-header {
    color: #888 !important;
    /* Added */
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
    margin-top: 20px !important;
    line-height: 1.6em !important;
    color: #888 !important;
}

.contact-info i {
    margin-right: 10px !important;
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
    color: #fff !important
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
  
        <div class="contact-info">
            <p><i class="fas fa-map-marker-alt"></i> 30074 Unit G Makoni Shops, Opp City Council, Seke, Chitungwiza, Zimbabwe</p>
            <p><i class="fas fa-phone"></i> +263 77 803 2070</p>
        </div>
</div>
