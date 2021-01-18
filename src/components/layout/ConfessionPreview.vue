<template>
  <section class="confession-preview" :class="{ 'is-visible': isVisible }">
    <h4 class="confession-preview__header">{{ title }}</h4>
    <article class="confession-preview__content">
      <p>{{ content }}</p>
    </article>
    <nav class="confession-preview__nav">
      <div class="confession-preview__nav__item" @click="previousConfession()">
        <img src="@/assets/icons/back.svg" class="first" />
        Poprzedni
      </div>
      <div class="confession-preview__nav__item" @click="nextConfession()">
        Następny <img src="@/assets/icons/next.svg" class="second" />
      </div>
    </nav>
    <div
      class="confession-preview__close"
      @click="toggleConfessionPreview"
    ></div>
    <ImgSlider
      class="confession-preview__slider"
      :images-url="images"
      :video-url="videos"
    />
  </section>
</template>

<script>
import ImgSlider from "@/components/layout/ImgSlider";
import { mapGetters } from "vuex";

export default {
  name: "ConfessionPreview",
  components: { ImgSlider },
  watch: {
    id: function() {
      this.loadPreview();
    }
  },
  data() {
    return {
      isVisible: false,
      title: null,
      content: null,
      images: [],
      videos: [],
      currentId: null
    };
  },
  computed: {
    ...mapGetters({
      getConfessionById: "Confessions/getConfessionById",
      getNextConfessionById: "Confessions/getNextConfessionById",
      getPreviousConfessionById: "Confessions/getPreviousConfessionById"
    })
  },
  props: {
    id: {
      type: Number
    }
  },
  methods: {
    setData(payload) {
      this.title = payload.title;
      this.content = payload.content;
      this.images = payload.images;
      this.videos = payload.videos;
      this.currentId = payload.id;
    },
    showConfessionPreview() {
      this.isVisible = true;
    },

    loadPreview() {
      const confession = this.getConfessionById(this.id);

      if (confession) this.setData(confession);
      else this.isVisible = false;
    },

    hideConfessionPreview() {
      this.isVisible = false;
    },
    previousConfession() {
      const confession = this.getPreviousConfessionById(this.currentId);

      if (confession) this.setData(confession);
      else this.isVisible = false;
    },
    nextConfession() {
      const confession = this.getNextConfessionById(this.currentId);
      if (confession) this.setData(confession);
    },
    toggleConfessionPreview() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/__variables";

.confession-preview {
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  text-align: left;
  display: grid;
  max-height: 0;
  transition: max-height 0.6s ease-in-out, padding 0.6s ease-in-out,
    border 0.35s ease-in-out;
  &.is-visible {
    max-height: 1000px;
    padding: 32px 24px;
    border: 1px solid black;
  }
  grid-column-gap: 24px;
  grid-template-areas:
    "header close"
    "content content"
    "slider slider"
    "nav nav";
  grid-template-columns: 1fr 40px;
  grid-template-rows: auto auto auto 50px;

  @media (min-width: $breakpoint-md) {
    grid-template-areas:
      "header close"
      "content slider"
      "nav slider";
    grid-template-columns: 4fr 3fr;
    grid-template-rows: min-content auto 50px;
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
    max-width: 40ch;
    font-family: "Gelasio", sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    margin-top: 0;
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
    min-width: 300px;
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
