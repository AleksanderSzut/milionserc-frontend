<template>
  <section class="confessions-grid">
    <div
      v-for="item in confessions"
      :key="item.name"
      class="confessions-grid__item "
      :class="
        item.size === `big`
          ? `confessions-grid__item--big`
          : `confessions-grid__item--small`
      "
    >
      <img :src="item.image" :alt="item.name" />
    </div>
    <!--    <div class="confessions-grid__item confessions-grid__item&#45;&#45;big">-->
    <!--      <img src="@/assets/images/2_2.jpg" alt="Nazwa wyznania" />-->
    <!--    </div>-->
    <!--    <div class="confessions-grid__item confessions-grid__item&#45;&#45;small">-->
    <!--      <img src="@/assets/images/2_2.jpg" alt="Nazwa wyznania" />-->
    <!--    </div>-->
    <!--    <div class="confessions-grid__item confessions-grid__item&#45;&#45;big">-->
    <!--      <img src="@/assets/images/2_2.jpg" alt="Nazwa wyznania" />-->
    <!--    </div>-->
  </section>
</template>

<script>
export default {
  name: "ConfessionsGrid",
  data() {
    return {
      confessions: [
        {
          id: 1,
          name: "Jakieś tam wyznanie",
          size: "big",
          image: require("../../assets/images/1_2a.jpg")
        },
        {
          id: 2,
          name: "Jakieś tam wyznanie",
          size: "small",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 3,
          name: "Jakieś tam wyznanie",
          size: "small",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 4,
          name: "Jakieś tam wyznanie",
          size: "big",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 4,
          name: "Jakieś tam wyznanie",
          size: "big",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 2,
          name: "Jakieś tam wyznanie",
          size: "small",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 4,
          name: "Jakieś tam wyznanie",
          size: "big",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 4,
          name: "Jakieś tam wyznanie",
          size: "small",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 4,
          name: "Jakieś tam wyznanie",
          size: "big",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 4,
          name: "Jakieś tam wyznanie",
          size: "small",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 4,
          name: "Jakieś tam wyznanie",
          size: "big",
          image: require("../../assets/images/2_2.jpg")
        },
        {
          id: 4,
          name: "Jakieś tam wyznanie",
          size: "small",
          image: require("../../assets/images/2_2.jpg")
        }
      ]
    };
  },
  computed: {
    getConfessions() {
      return [
        {
          id: 1,
          name: "Jakieś tam wyznanie",
          size: "big",
          src: "@/assets/images/2_2.jpg"
        },
        {
          id: 2,
          name: "Jakieś tam wyznanie",
          size: "small",
          src: "@/assets/images/2_2.jpg"
        },
        {
          id: 3,
          name: "Jakieś tam wyznanie",
          size: "small",
          src: "@/assets/images/2_2.jpg"
        },
        {
          id: 4,
          name: "Jakieś tam wyznanie",
          size: "big",
          src: "@/assets/images/2_2.jpg"
        }
      ];
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
