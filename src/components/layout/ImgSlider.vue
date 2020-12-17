<template>
  <section class="img-slider">
    <div>
      <img
        v-for="(item, index) in imagesUrl"
        class="img-slider__img"
        :src="item"
        :key="index"
        :class="{ active: currentImg === index }"
      />
    </div>
    <div class="img-slider__dots">
      <div
        v-for="(item, index) in imagesUrl"
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
export default {
  name: "ImgSlider",
  data() {
    return { currentImg: 0 };
  },
  computed: {
    modifierClass() {
      return (mainClass, modifier, boolean) =>
        mainClass + " " + (boolean ? `${mainClass}--${modifier}` : mainClass);
    }
  },
  methods: {
    nextPage() {
      if (this.currentImg === this.imagesUrl.length - 1) this.currentImg = 0;
      else this.currentImg++;
    },

    previousPage() {
      if (this.currentImg === 0) this.currentImg = this.imagesUrl.length - 1;
      else this.currentImg--;
    }
  },
  props: {
    imagesUrl: {}
  }
};
</script>

<style lang="scss" scoped>
.img-slider {
  position: relative;
  padding-top: calc(2 / 3 * 100%);
  &__img {
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
