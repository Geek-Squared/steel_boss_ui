<script>
  import { onMount } from 'svelte';
  import emailjs from '@emailjs/browser';

  let name = '';
  let email = '';
  let message = '';
  let isLoading = false;
  let isSuccess = false;

  const sendEmail = (e) => {
    e.preventDefault();
    isLoading = true;

    emailjs
      .sendForm('service_r7e9icz', 'template_ufb7hmo', e.target, {
        publicKey: 'Da7__hrn3zhYhLOhR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          isLoading = false;
          isSuccess = true;
        },
        (error) => {
          console.log('FAILED...', error.text);
          isLoading = false;
        },
      );
  };
</script>

<style lang="scss">
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
    <button type="submit" disabled={isLoading}>
      {#if isLoading}
        Sending...
      {:else}
        Send Message
      {/if}
    </button>
  </form>
  {#if isSuccess}
    <p>Message sent successfully!</p>
  {/if}
</div>