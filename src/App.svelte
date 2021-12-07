<script>
  import "@splidejs/splide/dist/css/splide.min.css";

  import Global from "./Global.svelte";
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import Footer from "./Footer.svelte";
</script>

<Global />
<Header />
<Main />
<Footer />

<style>
  :global(html) {
    @apply bg-gray-900;
    scroll-behavior: smooth;
  }
</style>
