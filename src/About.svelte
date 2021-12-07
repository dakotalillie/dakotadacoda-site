<script>
  import BloombergLogo from "./BloombergLogo.svelte";
</script>

<div id="about" />
<section class="bg-gray-800">
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
      <source data-srcset="img/profile.webp" type="image/webp" />
      <source data-srcset="img/profile.jpg" type="image/jpeg" />
      <img data-src="img/profile.jpg" alt="Dakota profile" width="224px" height="224px" class="lazyload rounded-3xl" />
    </picture>
  </div>
</section>

<style>
  #about {
    padding-top: 4rem;
    margin-top: -4rem;
  }
</style>
