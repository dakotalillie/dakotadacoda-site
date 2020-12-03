<script>
  import BloombergLogo from "./BloombergLogo.svelte";
</script>

<style>
  section {
    scroll-margin-top: 4rem;
  }
</style>

<section id="about" class="bg-gray-800">
  <div class="container mx-auto py-12 px-8 flex flex-col items-center sm:flex-row sm:justify-between md:py-16">
    <div class="space-y-3 text-2xl text-center sm:text-left md:text-3xl">
      <p>My name is Dakota</p>
      <p class="flex flex-row items-center justify-center sm:justify-start">
        I work at
        <BloombergLogo />
      </p>
      <div class="space-y-1">
        <p>I write code and make music</p>
        <p class="text-base md:text-xl">(The two are not so dissimilar)</p>
      </div>
    </div>
    <picture class="mt-8 sm:mt-0">
      <img src="img/profile.jpg" alt="Dakota profile" class="h-56 rounded-3xl" />
    </picture>
  </div>
</section>
