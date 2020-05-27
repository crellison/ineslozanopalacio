<script>
  export let images;
</script>

<style>
  .gallery-img {
    width: auto;
  }
</style>

{#each images as { src, name } (src)}
  <img class="gallery-img" src={src} alt={name}/>
{/each}
