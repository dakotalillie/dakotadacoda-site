<script>
  export let image;
  export let name;
  export let link = undefined;
  export let className = "";

  $: isCarouselSlide = className === "splide__slide";
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

<a class={className} href={link} target="_blank">
  <figure class="space-y-2">
    <img
      data-splide-lazy={isCarouselSlide ? `img/${image}` : undefined}
      data-src={isCarouselSlide ? undefined : `img/${image}`}
      alt={name}
      loading={isCarouselSlide ? undefined : 'lazy'}
      class={isCarouselSlide ? undefined : 'lazyload'} />
    <figcaption class="text-center text-sm leading-4">{name}</figcaption>
  </figure>
</a>
