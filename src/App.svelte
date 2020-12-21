<script>
  import Global from "./Global.svelte";
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import Footer from "./Footer.svelte";
</script>

<style>
  :global(html) {
    @apply bg-gray-900;
    scroll-behavior: smooth;
  }
</style>

<Global />
<Header />
<Main />
<Footer />
