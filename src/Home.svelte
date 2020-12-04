<script>
  import Github from "./Github.svelte";
  import LinkedIn from "./LinkedIn.svelte";
</script>

<style>
  section {
    background: transparent url("../img/background.png") no-repeat 50% fixed;
    background-size: cover;
    height: 36rem;
  }
</style>

<section id="home" class="flex flex-col justify-center items-center">
  <h1 class="text-5xl sm:text-7xl">Dakota Lillie</h1>
  <h3 class="text-xl sm:2xl mt-3">Software Engineer</h3>
  <div class="flex space-x-6 mt-6">
    <Github />
    <LinkedIn />
  </div>
</section>
