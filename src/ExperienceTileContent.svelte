<script>
  import clsx from "clsx";

  export let image;
  export let name;
  export let className = "";

  $: isCarouselSlide = className === "splide__slide";
</script>

<figure class={clsx(className, "space-y-2")}>
  <img
    data-splide-lazy={isCarouselSlide ? `img/${image}` : undefined}
    data-src={isCarouselSlide ? undefined : `img/${image}`}
    alt={name}
    loading={isCarouselSlide ? undefined : "lazy"}
    class={isCarouselSlide ? undefined : "lazyload"}
    height="64px"
    width="64px"
  />
  <figcaption class="text-center text-sm leading-4">{name}</figcaption>
</figure>

<style>
  img {
    @apply w-24 h-24;
  }

  figcaption {
    @apply w-24;
  }

  @media (max-width: 375px) {
    img {
      @apply w-20 h-20;
    }

    figcaption {
      @apply w-20;
    }
  }

  @media (max-width: 320px) {
    img {
      @apply w-16 h-16;
    }

    figcaption {
      @apply w-16;
    }
  }
</style>
