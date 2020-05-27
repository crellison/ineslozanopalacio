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
  <h1>About Inés Lozano Palacio</h1>
  <p>
    Inés Lozano Palacio (Logroño 1994) is a Spanish photographer, writer and
    filmmaker based in Logroño and London. After studying a BA in English
    Studies and a professional degree in Piano in La Rioja, she moved to London
    to pursue her postgraduate studies in Comparative Literature at Goldsmiths,
    University of London, where she also studied screenwriting. To these studies
    she owes her current interest and work as a screenwriter and a playwright.
    She is currently pursuing a PhD in Cognitive Linguistics and Literary
    Theory.
  </p>

  <p>
    The wide scope of her interests and studies has led her to understand art as
    inevitably interdisciplinary; she believes the evocative side of any
    artistic work makes it impossible to experience it through one single
    channel. She takes analogue and digital photographs both in colour and in
    black and white although she has recently focused almost exclusively in the
    latter. The philosophy behind her work is that of spontaneity. She sees the
    world as an unconsciously but carefully crafted cosmos where beauty resides
    in the things we never intended to make beautiful. Her most recent interest
    has been the genesis and symbolism of light.
  </p>
  <Link href="mailto:ines.lozano.palacio@gmail.com" text="Contact" />
</div>
