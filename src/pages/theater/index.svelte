<script>
  import { about } from "images";
  import Link from "components/link.svelte";
</script>

<style>
  .info {
    padding: 0% 5%;
    width: 45vw;
    display: flex;
    flex-direction: column;
  }

  .main-image {
    height: 100%;
    width: 35vw;
  }

  .main-image img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin-bottom: 1em;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    .main-image,
    .info {
      width: 80vw;
    }
  }
</style>

<div class="main-image">
  <img width="2500" height="3125" src={about.ines} alt="Inés Lozano Palacio" />
</div>
<div class="info">
  <h1>THEATER PAGE</h1>
  <Link href="mailto:ines.lozano.palacio@gmail.com" text="Contact" />
</div>
