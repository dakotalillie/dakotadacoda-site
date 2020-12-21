<script>
  import Github from "./Github.svelte";
  import LinkedIn from "./LinkedIn.svelte";
</script>

<style>
  section {
    background: transparent url("../img/background-mobile.png") no-repeat 50% fixed;
    background-size: cover;
    height: 36rem;
  }

  :global(.webp) section {
    background-image: url("../img/background-mobile.webp");
  }

  @screen lg {
    section {
      background-image: url("../img/background-desktop.png");
    }

    :global(.webp) section {
      background-image: url("../img/background-desktop.webp");
    }
  }

  @screen xl {
    section {
      background-image: url("../img/background-widescreen.png");
    }

    :global(.webp) section {
      background-image: url("../img/background-widescreen.webp");
    }
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
