<script>
  import BloombergLogo from "./BloombergLogo.svelte";
</script>

<div id="about" />
<section class="bg-gray-800">
  <div class="container mx-auto py-12 px-8 flex flex-col items-center sm:flex-row sm:justify-between md:py-16">
    <div class="space-y-4 text-2xl text-left sm:pr-12 md:text-3xl">
      <p>My name is Dakota</p>
      <p class="flex flex-row items-center justify-start">
        I work at
        <BloombergLogo />
      </p>
      <p>Some things I'm into:</p>
      <ul class="text-left list-disc ml-8 space-y-2 text-xl">
        <li>Writing effective tests for keeping applications bug-free while maintaining development velocity</li>
        <li>Adopting software patterns and standards that keep code easy to change and understand</li>
        <li>Architecting applications using cloud-native solutions for high availability at minimal cost</li>
      </ul>
    </div>
    <picture class="mt-8 sm:mt-0 flex-shrink-0">
      <source data-srcset="img/profile.webp" type="image/webp" />
      <source data-srcset="img/profile.jpg" type="image/jpeg" />
      <img data-src="img/profile.jpg" alt="Dakota profile" width="256px" height="256px" class="lazyload rounded-3xl" />
    </picture>
  </div>
</section>

<style>
  #about {
    padding-top: 4rem;
    margin-top: -4rem;
  }
</style>
