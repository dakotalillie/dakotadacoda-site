<script>
  import BloombergLogo from "./BloombergLogo.svelte";
</script>

<section id="about" class="bg-gray-900">
  <div class="container mx-auto py-16 px-8 flex flex-row justify-between items-center">
    <div class="space-y-3">
      <p class="text-3xl">My name is Dakota</p>
      <p class="text-3xl flex items-center">
        I work at
        <BloombergLogo />
      </p>
      <div class="space-y-1">
        <p class="text-3xl">I write code and make music</p>
        <p class="text-xl">(The two are not so dissimilar)</p>
      </div>
    </div>
    <picture> <img src="img/profile.jpg" alt="Dakota profile" class="h-56 rounded-3xl" /> </picture>
  </div>
</section>
