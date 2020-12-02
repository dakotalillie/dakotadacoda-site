<script>
  export let image;
  export let name;
</script>

<figure class="space-y-2">
  <img src={`img/${image}`} alt={name} class="h-24" />
  <figcaption class="w-24 text-center text-sm leading-4">{name}</figcaption>
</figure>
