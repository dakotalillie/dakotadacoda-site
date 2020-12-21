<script>
  export let image;
  export let name;
  export let className = "";
</script>

<style>
  img,
  figcaption {
    @apply w-24;
  }

  @media (max-width: 375px) {
    img,
    figcaption {
      @apply w-20;
    }
  }

  @media (max-width: 320px) {
    img,
    figcaption {
      @apply w-16;
    }
  }
</style>

<figure class={className}>
  <img data-splide-lazy={`img/${image}`} data-src={`img/${image}`} alt={name} loading="lazy" class="lazyload" />
  <figcaption class="mt-2 text-center text-sm leading-4">{name}</figcaption>
</figure>
