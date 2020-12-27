<script>
  import ExperienceTileContent from "./ExperienceTileContent.svelte";

  export let image;
  export let name;
  export let link = undefined;
  export let className = "";
</script>

{#if link !== undefined}
  <a class={className} href={link} target="_blank" rel="noopener noreferrer">
    <ExperienceTileContent {image} {name} />
  </a>
{:else}
  <ExperienceTileContent {image} {name} {className} />
{/if}
