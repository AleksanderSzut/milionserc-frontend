<template>
  <main class="confession-view__wrapper">
    <div class="confession-view__container">
      <article class="confession-view">
        <h4 class="confession-view__header">{{ header }}</h4>
        <article class="confession-view__content">
          <p>{{ description }}</p>
          <p>{{ name }}</p>
        </article>
        <ImgSlider class="confession-view__slider" :images-url="imagesUrl" />
      </article>
    </div>
  </main>
</template>

<script>
import ImgSlider from "@/components/layout/ImgSlider";
import { mapGetters } from "vuex";

export default {
  name: "Confession",
  components: { ImgSlider },
  data: () => {
    return {
      imagesUrl: [],
      header: null,
      description: null,
      name: null
    };
  },
  methods: {
    setData(payload) {
      this.header = payload.header;
      this.description = payload.description;
      this.name = payload.name;
      this.imagesUrl = payload.imagesUrl;
      this.currentId = payload.id;
    }
  },
  computed: {
    ...mapGetters({
      getConfessionById: "Confessions/getConfessionById"
    })
  },
  created() {
    const confession = this.getConfessionById(1);

    if (confession) this.setData(confession);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/__variables";
@import "../styles/__mixins";

.confession-view__wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.confession-view__container {
  @include wrapper();
  padding: 20px;
  background-color: white;
}
.confession-view {
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
  display: grid;
  transition: max-height 0.6s ease-in-out, padding 0.6s ease-in-out,
    border 0.35s ease-in-out;
  grid-column-gap: 24px;
  grid-template-areas:
    "header "
    "content "
    "slider ";
  grid-template-rows: auto auto auto;
  border: 8px solid;
  border-image-slice: 1;
  border-image-source: $goldenGradient;

  padding: 0 30px 30px 30px;

  @media (min-width: $breakpoint-md) {
    grid-template-areas:
      "header header"
      "content slider";
    grid-template-columns: 4fr 3fr;
    grid-template-rows: min-content auto;
  }
  &__content {
    grid-area: content;
    max-width: 40ch;
    margin-top: 0;
    p {
      margin-top: 0;
    }
  }
  &__header {
    text-transform: uppercase;
    text-align: center;
    font-family: "Gelasio", sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    grid-area: header;
  }
  &__nav {
    grid-area: nav;
    display: flex;
    justify-content: space-between;
    &__item {
      text-transform: uppercase;
      display: flex;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      align-items: center;
      img {
        height: 1.3em;
        filter: invert(100%);
        &.first {
          margin-right: 10px;
        }
        &.second {
          margin-left: 10px;
        }
      }
    }
  }
  &__slider {
    grid-area: slider;
    width: 100%;
  }
  &__close {
    width: 30px;
    justify-self: flex-end;
    grid-area: close;
    height: 30px;
    border: 2px solid $colorGold;
    position: relative;
    transition: background-color ease 0.5s;
    cursor: pointer;
    &::after,
    &::before {
      content: "";
      display: block;
      background-color: $colorGold;
      width: 80%;
      position: absolute;
      left: 50%;
      top: 50%;
      height: 2px;
      transform-origin: center;
      transition: background-color ease 0.5s;
    }
    &:hover {
      background-color: $colorGold;
      &:after,
      &:before {
        background-color: white;
      }
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
