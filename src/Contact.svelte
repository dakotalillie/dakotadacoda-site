<script>
  let name = "";
  let email = "";
  let subject = "";
  let message = "";

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://mpf6bdi5vd.execute-api.us-east-1.amazonaws.com/Prod/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("succeeded");
        console.log(res);
      })
      .catch((err) => {
        console.log("failed");
        console.log(err);
      });
  }
</script>

<style>
  textarea {
    min-height: 12rem;
    resize: none;
  }
</style>

<section id="contact" class="bg-gray-900">
  <div class="container mx-auto py-16 px-8 space-y-8">
    <h2 class="text-3xl">Get in Touch</h2>
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
      <div class="flex flex-row justify-end">
        <button class="py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded" type="submit">Submit</button>
      </div>
    </form>
  </div>
</section>
