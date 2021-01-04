<template>
  <div class="confessions-grid__container">
    <ConfessionPreview
      class="main-section--confessions__preview"
      ref="confessionPreview"
      :id="preview.id"
    />
    <section class="confessions-grid">
      <div
        v-for="item in getConfessions"
        :key="item.name"
        class="confessions-grid__item "
        :class="
          item.size === `big`
            ? `confessions-grid__item--big`
            : `confessions-grid__item--small`
        "
        @click="showConfessionPreview(item.id)"
      >
        <img :src="item.imagesUrl[0]" :alt="item.name" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ConfessionPreview from "@/components/layout/ConfessionPreview";

export default {
  name: "ConfessionsGrid",
  components: { ConfessionPreview },
  data() {
    return {
      preview: {
        id: null
      }
    };
  },
  computed: {
    ...mapGetters({
      getConfessions: "Confessions/getConfessions"
    })
  },
  methods: {
    showConfessionPreview(id) {
      this.preview.id = id;
      this.$refs.confessionPreview.loadPreview();
      this.$refs.confessionPreview.showConfessionPreview();
    },
    toggleConfessionsPreview() {
      this.$refs.confessionPreview.toggleConfessionPreview();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";
@import "../../styles/_mixins";
@import "../../styles/components/linedList";

.confessions-grid {
  width: 100%;
  display: grid;
  margin-top: 24px;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: $breakpoint-sm) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(6, 1fr);
  }

  grid-gap: 12px;
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  &__container {
    width: 100%;
  }

  &__item {
    background-color: $lightGray;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
    }
    &::after {
      content: "Podgląd";
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: "Gelasio", sans-serif;
      font-size: 20px;
      line-height: 20px;
      font-weight: 300;
      text-transform: uppercase;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.4);
      transition: opacity ease 0.25s;
      cursor: pointer;
    }
    &:hover:after {
      opacity: 1;
    }
    &::before {
      content: "";
      padding-bottom: 100%;
      display: inline-block;
      vertical-align: top;
    }
    &--big {
      grid-column: auto / span 2;

      &::before {
        padding-bottom: 50%;
      }
    }
    &--small {
      &::before {
        padding-bottom: 100%;
      }
    }
  }
}
</style>
