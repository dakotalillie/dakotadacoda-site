<script>
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import Footer from "./Footer.svelte";
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html {
    scroll-behavior: smooth;
  }
</style>

<Header />
<Main />
<Footer />
