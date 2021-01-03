<template>
  <div ref="parallaxCont" class="parallax parallax__container">
    <img
      v-if="type === '1'"
      ref="parallaxitem"
      :src="require(`@/assets/${this.parallaxSrc}`)"
      class="parallax parallax__item"
      alt=""
    />
    <video
      v-else
      ref="parallaxitem"
      :src="require(`@/assets/${this.parallaxSrc}`)"
      class="parallax parallax__item"
      autoplay
      muted
      playsinline
      loop
    ></video>
  </div>
</template>

<script>
function setParallax(item, container, height) {
  const clientRect = container.getBoundingClientRect();
  const offTop = clientRect.top * -0.75;
  item.setAttribute(
    "style",
    "height: " + height + "vh; transform: translateY(" + offTop + "px)"
  );
}
export default {
  name: "Parallax",
  data() {
    return {};
  },
  props: {
    parallaxSrc: {
      type: String
    },
    type: {
      type: String
    },
    itemHeight: {
      type: String,
      default: "100"
    }
  },
  mounted() {
    console.log("parallax");
    const item = this.$refs.parallaxitem;
    const container = this.$refs.parallaxCont;
    const height = this.itemHeight;
    setParallax(item, container, height);
    window.addEventListener("scroll", function() {
      setParallax(item, container, height);
    });
    window.addEventListener("resize", function() {
      setParallax(item, container, height);
    });
  }
};
</script>

<style lang="scss">
.parallax {
  z-index: -1;
  .simpleParallax {
    height: 100%;
  }
  &__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  &__item {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
  }
}
</style>
