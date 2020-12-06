<template>
  <main class="main">
    <section>
      <simple-parallax
        parallax-src="parallax-home.mp4"
        type="2"
        orientation="down"
        scale="1.25"
        delay=".5"
        item-height="80"
      />
    </section>
  </main>
</template>

<script>
import SimpleParallax from "@/components/effects/Parallax";
export default {
  name: "Home",
  components: { SimpleParallax }
};
</script>
