<template>
  <main class="home-main">
    <section class="home-section__header">
      <h3>
        CZASAMI NASZA WDZIĘCZNOŚĆ, MIŁOŚĆ i TĘSKNOTA <br />są tak wielkie że nie
        sposób je wyrazić słowami.
      </h3>
      <simple-parallax
        parallax-src="parallax-home.mp4"
        type="2"
        orientation="down"
        scale="1.25"
        delay=".5"
        item-height="80"
      />
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </main>
</template>

<script>
import SimpleParallax from "@/components/effects/Parallax";
export default {
  name: "Home",
  components: { SimpleParallax }
};
</script>

<style lang="scss">
@import "../styles/_variables";

.home-main {
  display: grid;
}
.home-section {
}
.home-section__header {
  color: white;
  font-family: "Gelasio", sans-serif;
  display: flex;
  &::after {
    content: "";
    width: 100%;
    height: 8px;
    position: absolute;
    bottom: 0;
    z-index: 20;
    background: rgb(194, 136, 49);
    background: $goldenGradient;
  }
  justify-content: center;
  align-items: center;
  height: 70vh;
  .parallax__container {
    filter: brightness(40%);
  }
  position: relative;
  h3 {
    line-height: 180%;
    font-weight: 300;
  }
}
</style>
