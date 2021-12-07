<script>
  import Spinner from "./Spinner.svelte";

  let name = "";
  let email = "";
  let subject = "";
  let message = "";
  let requestStatus = "";

  function handleSubmit(e) {
    e.preventDefault();
    requestStatus = "requested";

    fetch("https://mpf6bdi5vd.execute-api.us-east-1.amazonaws.com/Prod/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then(() => {
        requestStatus = "succeeded";
      })
      .catch((err) => {
        requestStatus = "failed";
      });
  }
</script>

<div id="contact" />
<section class="bg-gray-800">
  <div class="container mx-auto py-12 px-8 space-y-8 md:py-16">
    <h2 class="text-3xl text-center md:text-left">Get in Touch</h2>
    <form id="contact-form" class="space-y-6" on:submit={handleSubmit}>
      <div class="grid md:grid-cols-2 gap-x-8 gap-y-8">
        <div class="space-y-8">
          <div class="space-y-2">
            <label class="block" for="name">Name</label>
            <input class="w-full text-black py-1 px-2 rounded" id="name" required bind:value={name} />
          </div>
          <div class="space-y-2">
            <label class="block" for="email">Email</label>
            <input class="w-full text-black py-1 px-2 rounded" id="email" type="email" required bind:value={email} />
          </div>
          <div class="space-y-2">
            <label class="block" for="subject">Subject</label>
            <input class="w-full text-black py-1 px-2 rounded" id="subject" required bind:value={subject} />
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="block" for="message">Message</label>
          <textarea class="w-full flex-1 text-black py-1 px-2 rounded" id="message" required bind:value={message} />
        </div>
      </div>
      <div class="flex flex-row justify-end space-x-4">
        {#if requestStatus === "succeeded"}
          <p class="flex items-center text-green-400">Your message has been sent!</p>
        {:else if requestStatus === "failed"}
          <p class="flex items-center text-red-400">Oops! Something went wrong.</p>
        {/if}
        <button
          class="py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded"
          disabled={requestStatus === "requested"}
          type="submit"
        >
          {#if requestStatus === "requested"}
            <Spinner />
          {:else}Submit{/if}
        </button>
      </div>
    </form>
  </div>
</section>

<style>
  #contact {
    padding-top: 4rem;
    margin-top: -4rem;
  }

  textarea {
    min-height: 12rem;
    resize: none;
  }

  button {
    width: 84px;
  }
</style>
