<script>
  import { onMount } from 'svelte';
  let name = '';
  let email = '';
  let message = '';

  onMount(async () => {
    const emailjs = await import('https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js');
    emailjs.init("your-user-id"); // replace 'your-user-id' with your actual EmailJS user ID
  });

  function sendEmail(event) {
    event.preventDefault(); // prevent the form from being submitted normally

    emailjs.send("service_id", "template_id", { // replace 'service_id' and 'template_id' with your actual EmailJS service ID and template ID
      from_name: name,
      from_email: email,
      message: message
    })
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
      console.log("FAILED...", error);
    });
  }
</script>

<style>
  .contact-section {
    width: 95%;
    margin: auto;
    padding: 60px;
    box-sizing: border-box;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
  }

  .contact-form input, .contact-form textarea {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 0;
    outline: none;
  }

  .contact-form textarea {
    height: 150px;  /* Added */
  }

  .contact-form button {
    width: 30%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 0;
    color: #fff;
    cursor: pointer;
  }
  h2 {
      text-align: left;
      font-size: 40px;
      font-weight: 400;
  }
  button{
      align-self: left;
      background-color: #0001ff;
  }
</style>

<div class="contact-section">
  <h2>Love to hear from you, Get In Touch 👋</h2>

  <form class="contact-form" on:submit|preventDefault={sendEmail}>
    <input bind:value={name} type="text" placeholder="Name" />
    <input bind:value={email} type="email" placeholder="Email" />
    <textarea bind:value={message} placeholder="Message"></textarea>
    <button type="submit">Send Message</button>
  </form>
</div>