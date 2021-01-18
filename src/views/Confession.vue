<template>
  <main class="confession-view__wrapper">
    <div
      class="confession-view__wrapper__background"
      :class="{ active: loading }"
    >
      <video
        src="../assets/otwarcie-ksiegi-milion-serc.mp4"
        ref="videoBg"
      ></video>
    </div>
    <div class=""></div>
    <div
      :class="{ active: !loading }"
      class="confession-view__container confession-view__container--black"
      v-if="!show"
    >
      <article class="preview">
        <div class="wrapper">
          <header class="logo">
            <img src="@/assets/logo.svg" />
          </header>
          <div>
            <h3>Za pośrednictwem naszego serwisu</h3>
            <h2>Ktoś chce ci powiedzieć coś ważnego...</h2>
          </div>
          <div class="preview__approve">
            <span> Czy zgadasz się aby twoje życzenia były publiczne?</span>
            <span>
              Szczegóły znajdziesz w
              <router-link to="polityka-prywatnosci">
                Polityce prywatności
              </router-link>
            </span>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="accepted"
                value="1"
                v-model="accepted"
              />
              Tak
            </label>
            <label>
              <input
                type="radio"
                name="accepted"
                value="0"
                v-model="accepted"
              />
              Nie
            </label>
          </div>
          <div>
            <golden-button @click="showConfession">
              Zobacz wpis
            </golden-button>
          </div>
        </div>
        <div class="preview__error">
          {{ error }}
        </div>
      </article>
    </div>
    <div
      :class="{ active: !loading }"
      class="confession-view__container"
      v-else
    >
      <article class="confession-view">
        <h4 class="confession-view__header">{{ header }}</h4>
        <article class="confession-view__content">
          <p>{{ description }}</p>
          <p>{{ name }}</p>
        </article>
        <ImgSlider
          class="confession-preview__slider"
          :images-url="images"
          :video-url="videos"
        />
      </article>
    </div>
  </main>
</template>

<script>
import ImgSlider from "@/components/layout/ImgSlider";
import { mapActions, mapGetters } from "vuex";
import router from "@/router";
import GoldenButton from "@/components/layout/GoldenButton";
import debounce from "lodash.debounce";

export default {
  name: "Confession",
  components: {
    GoldenButton,
    ImgSlider
  },
  watch: {
    accepted() {
      this.error = null;
    }
  },
  data: () => {
    return {
      accepted: [],
      show: false,
      loading: false,
      images: [],
      videos: [],
      header: null,
      description: null,
      error: null,
      name: null
    };
  },
  methods: {
    async showConfession() {
      if (this.accepted.length > 0) {
        this.setPublic(this.accepted[0]);

        this.loading = true;
        this.$refs["videoBg"].play();

        this.show = true;
        let wait = debounce(() => {
          this.loading = false;
        }, 14000);

        wait();

        // this.show = true;
      } else this.error = "Wybierz jedną z opcji";
    },
    setData(payload) {
      this.header = payload.title;
      this.description = payload.content;
      this.images = payload.images;
      this.videos = payload.videos;
      this.currentId = payload.id;
    },

    ...mapActions({
      getConfession: "Confessions/getConfession",
      createConfession: "Confessions/createConfession",
      setPublic: "Confessions/setPublic"
    })
  },
  computed: {
    ...mapGetters({
      getError: "Confessions/getError",
      getModal: "Confessions/getModal",
      getLoader: "Confessions/isLoading",
      getLoadedConfession: "Confessions/getLoadedConfession"
    })
  },
  async created() {
    await this.getConfession({
      uuid: this.$route.params.uuid,
      token: this.$route.params.secretKey
    });
    if (this.getLoadedConfession.status === 0) {
      await router.replace({
        name: "CreateConfession",
        params: {
          uuid: this.$route.params.uuid,
          secretKey: this.$route.params.secretKey
        }
      });
    } else this.setData(this.getLoadedConfession);
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

  &__background {
    position: fixed;
    z-index: 0;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 200px);
    opacity: 0;
    transition: opacity ease-in-out 1.5s;
    &.active {
      opacity: 1;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.confession-view__container {
  @include wrapper();
  padding: 20px;
  background-color: white;
  opacity: 0;
  transition: opacity ease 1.5s;
  &.active {
    opacity: 1;
  }
  z-index: 5;
  &--black {
    background-color: black;
  }
}

.preview {
  &__error {
    color: rgb(222, 0, 0);
    height: 24px;
    margin-top: 24px;
  }
  &__approve {
    display: flex;
    flex-direction: column;
  }
  .wrapper {
    max-width: 55ch;
    div {
      margin: 24px 0;
      &:first-child {
        margin: 0 0 24px 0;
      }
      &:last-child {
        margin: 2px 0 0 0;
      }
    }
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
      max-width: 250px;
      width: 80%;
    }
  }
  h2,
  h3 {
    font-family: "Gelasio", sans-serif;
    letter-spacing: 2px;
    font-weight: 500;
    text-transform: uppercase;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 14px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  transition: max-height 0.6s ease-in-out, padding 0.6s ease-in-out,
    border 0.35s ease-in-out;
  grid-column-gap: 24px;
  background-color: black;

  border: 8px solid;
  border-image-slice: 1;
  border-image-source: $goldenGradient;
  padding: 30px 30px 10px 30px;
  color: white;
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
