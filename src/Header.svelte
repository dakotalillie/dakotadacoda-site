<script>
  import { onMount } from "svelte";
  import Logo from "./Logo.svelte";
  import Hamburger from "./Hamburger.svelte";

  let showMobileNav = false;
  let mobileNav;
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  function toggleMobileNav(ev) {
    ev.stopPropagation();
    showMobileNav = !showMobileNav;
  }

  onMount(() => {
    document.addEventListener("click", (ev) => {
      console.log(ev.target);
      if (showMobileNav && !mobileNav.contains(ev.target)) {
        showMobileNav = false;
      }
    });
  });
</script>

<header class="fixed w-full">
  <div class="bg-gray-900 py-4 h-16 shadow-2xl">
    <div class="container mx-auto flex flex-row justify-between px-8">
      <Logo />
      <nav class="hidden flex-row space-x-4 items-center sm:flex">
        {#each links as { href, label }}<a {href}>{label}</a>{/each}
      </nav>
      <button class="sm:hidden" on:click={toggleMobileNav}><Hamburger /></button>
    </div>
  </div>
  {#if showMobileNav}
    <nav
      class="bg-gray-900 max-w-max rounded-bl-lg px-4 float-right shadow-2xl sm:hidden flex flex-col divide-y"
      bind:this={mobileNav}>
      {#each links as { href, label }}<a class="p-2" {href} on:click={toggleMobileNav}>{label}</a>{/each}
    </nav>
  {/if}
</header>
