<template>
  <section class="img-slider">
    <div>
      <template v-for="(item, index) in media" :key="index">
        <img
          class="img-slider__media"
          :src="item.url"
          v-if="item.type === `image`"
          :class="{ active: currentImg === index }"
        />
        <video-player
          :ref="`videoPlayer_${index}`"
          class="img-slider__media"
          :url="item.url"
          v-if="item.type === `video`"
          :class="{ active: currentImg === index }"
        />
      </template>
    </div>
    <div class="img-slider__dots">
      <div
        v-for="(item, index) in media"
        :key="index"
        :class="
          modifierClass(
            'img-slider__dots__item',
            'active',
            index === currentImg
          )
        "
      ></div>
    </div>
    <nav class="img-slider__nav">
      <div
        class="img-slider__nav__button img-slider__nav__button--back"
        @click="previousPage"
      >
        <img src="@/assets/icons/back.svg" />
      </div>
      <div
        class="img-slider__nav__button img-slider__nav__button--next"
        @click="nextPage"
      >
        <img src="@/assets/icons/next.svg" />
      </div>
    </nav>
  </section>
</template>

<script>
import VideoPlayer from "@/components/layout/VideoPlayer";
export default {
  name: "ImgSlider",
  components: { VideoPlayer },
  data() {
    return { currentImg: 0 };
  },
  computed: {
    modifierClass() {
      return (mainClass, modifier, boolean) =>
        mainClass + " " + (boolean ? `${mainClass}--${modifier}` : mainClass);
    },
    media() {
      let media = [];

      this.imagesUrl.forEach(value => {
        media.push({ url: value, type: "image" });
      });
      this.videoUrl.forEach(value => {
        media.push({ url: value, type: "video" });
      });

      return media;
    }
  },
  methods: {
    stopVideo() {
      if (this.media[this.currentImg].type === "video")
        this.$refs[`videoPlayer_${this.currentImg}`].pause();
    },
    nextPage() {
      this.stopVideo();
      if (this.currentImg === this.media.length - 1) this.currentImg = 0;
      else this.currentImg++;
    },

    previousPage() {
      this.stopVideo();
      if (this.currentImg === 0) this.currentImg = this.media.length - 1;
      else this.currentImg--;
    }
  },
  props: {
    imagesUrl: {
      type: Array
    },
    videoUrl: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.img-slider {
  position: relative;
  padding-top: calc(2 / 3 * 100%);
  &__media {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity ease 0.5s;
    z-index: -1;

    &.active {
      opacity: 1;
      z-index: 0;
    }
  }
  &__dots {
    position: absolute;
    bottom: 0;
    z-index: 3;

    display: flex;
    left: 50%;
    transform: translateX(-50%);
    &__item {
      width: 8px;
      border: 1px solid white;
      background-color: transparent;
      margin: 12px 8px;
      height: 8px;
      border-radius: 20px;
      transition: background-color ease 0.5s;
      &--active {
        background-color: white;
      }
    }
  }
  &__nav {
    z-index: 3;

    &__button {
      cursor: pointer;
      width: 30px;
      height: 30px;
      position: absolute;
      opacity: 0.5;
      transition: opacity ease 0.5s, transform ease 0.5s;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
      top: calc(50% - 15px);
      img {
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      &--next {
        right: 0;
      }
      &--back {
        left: 0;
      }
    }
  }
}
</style>
