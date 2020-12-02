<script>
  import Logo from "./Logo.svelte";
</script>

<header class="bg-black bg-opacity-50 w-full fixed py-2">
  <div class="container mx-auto flex flex-row justify-between px-8">
    <Logo />
    <nav class="flex flex-row space-x-4 items-center">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>
