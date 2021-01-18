<template>
  <main class="create-confession">
    <div class="loader" :class="{ active: getLoader }">
      <Loader color="gold" size="80" class="loader__ring" />
    </div>
    <div :class="{ active: getModal.active }" class="modal">
      <h3>{{ getModal.label }}</h3>
      <div class="modal__close" @click="getModal.active = false"></div>
      <router-link :to="getModal.button.link">
        <golden-button>{{ getModal.button.label }}</golden-button>
      </router-link>
    </div>
    <header>
      <h1>Twoje wyznanie</h1>
    </header>
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      class="create-confession__form"
      v-slot="{ errors }"
    >
      <section class="create-confession__form__section">
        <InputField
          name="title"
          array="confession"
          :errors="errors"
          placeholder="Tytuł wyznania"
        />
        <div class="form-content">
          <h4>
            Napisz własną treść lub wybierz jedno z naszej listy gotowych życzeń
          </h4>
          <div class="form-content__input">
            <h5>Nagłówek wybrany z listy</h5>
            <InputField
              name="content"
              array="confession"
              :errors="errors"
              as="textarea"
              ref="content"
              placeholder="Treść wyznania"
            />
          </div>
          <div class="form-content__suggestions">
            <h5>Nasze propozycje</h5>
            <section>
              <header>
                Zaznaczone treści trafią do pola edycji w celu dalszej edycji.
              </header>
              <div>
                <label v-for="(value, index) in suggestions" :key="index">
                  <input
                    type="radio"
                    name="suggestion"
                    v-model="suggestion"
                    :value="value"
                  />
                  <span>
                    {{ value }}
                  </span>
                </label>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section class="create-confession__form__section">
        <ImageField name="" @images="addImages" />
        <VideoField name="" @images="addVideos" />
      </section>
      <golden-button>Zakończ i przejdź do wyznania</golden-button>
      <div class="summary__errors">
        <h5
          v-if="
            Object.values(errors).length > 0 ||
              Object.values(getError).length > 0
          "
        >
          Błędy walidacji
        </h5>
        <ul>
          <li v-for="(value, index) in errors" :key="index">
            {{ value }}
          </li>
          <li v-for="(value, index) in getError" :key="index">
            {{ value }}
          </li>
        </ul>
      </div>
    </Form>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Form } from "vee-validate";
import InputField from "@/components/layout/form/item/InputField";
import * as yup from "yup";
import ImageField from "@/components/layout/form/item/ImageField";
import VideoField from "@/components/layout/form/item/VideoField";
import GoldenButton from "@/components/layout/GoldenButton";
import Loader from "@/components/layout/Loader";
import router from "@/router";

export default {
  name: "CreateConfession",
  components: {
    Loader,
    GoldenButton,
    VideoField,
    ImageField,
    InputField,
    Form
  },
  data() {
    const schema = yup.object().shape({
      confession: yup.object().shape({
        title: yup.string().required("Tytuł jest wymagany"),
        content: yup.string().required("Opis jest wymagany")
      })
    });

    const onSubmit = async values => {
      this.createConfession({
        uuid: this.$route.params.uuid,
        token: this.$route.params.secretKey,
        title: values.confession.title,
        content: values.confession.content,
        images: this.images,
        videos: this.videos
      });
    };

    return {
      schema,
      content: "",
      suggestion: "",
      suggestions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisl in lectus eleifend interdum sed eu ex. Cras vehicula porttitor lectus, eu faucibus ligula auctor sit amet. Proin quis mollis sem. Maecenas congue ex nulla, in luctus libero blandit sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris fermentum enim quis suscipit ornare. Nunc interdum nunc ut mi varius pharetra."
      ],
      images: [],
      videos: [],
      onSubmit
    };
  },
  async created() {
    await this.getConfession({
      uuid: this.$route.params.uuid,
      token: this.$route.params.secretKey
    });
    if (this.getLoadedConfession.status === 1) {
      await router.replace({
        name: "Confession",
        params: {
          uuid: this.$route.params.uuid,
          secretKey: this.$route.params.secretKey
        }
      });
    }
  },
  watch: {
    suggestion(value) {
      this.$refs["content"].setValue(value);
    }
  },
  computed: {
    ...mapGetters({
      getError: "Confessions/getError",
      getModal: "Confessions/getModal",
      getLoader: "Confessions/isLoading",
      getLoadedConfession: "Confessions/getLoadedConfession"
    })
  },
  methods: {
    addVideos(images) {
      this.videos = images;
    },
    addImages(images) {
      this.images = images;
    },
    ...mapActions({
      getConfession: "Confessions/getConfession",
      createConfession: "Confessions/createConfession"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables";
@import "../styles/_mixins";
@import "../styles/components/linedList";

.loader {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: white;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity ease 0.7s;
  &.active {
    opacity: 1;
  }
  justify-content: center;
}

.modal {
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
  &__close {
    width: 30px;
    justify-self: flex-end;
    grid-area: close;
    height: 30px;
    border: 2px solid $colorGold;
    position: absolute;
    right: 10px;
    top: 10px;
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

  transition: opacity ease 0.7s;
  opacity: 0;
  background-color: white;
  box-shadow: 0 0 20px -4px black;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  z-index: 200;
}

.input-field {
  height: 40px;
  max-width: 400px;
  margin: 0 auto 20px auto;
}
.form-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "input"
    "suggestions";
  @media (min-width: $breakpoint-md) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "input suggestions";
    column-gap: 24px;
  }
  &__suggestions {
    grid-area: suggestions;
    section {
      height: 300px;
      box-sizing: border-box;
      overflow-y: scroll;
      padding: 12px;
      background-color: $lightGray;
      text-align: left;
      div {
        label {
          margin: 12px 0;
          display: flex;
          input {
            margin: 0 15px 0 3px;
          }
          span {
            display: block;
          }
        }
      }
    }
  }

  h5 {
    font-size: 18px;
    font-weight: 600;
    font-family: "Gelasio", sans-serif;
    margin: 12px 0;
  }
  h4 {
    font-size: 16px;
    grid-area: header;
    font-weight: 500;
    margin: 18px 0;
  }

  &__input {
    grid-area: input;
    height: 100%;
    .input-field {
      max-width: none;
      width: 100%;
      height: 300px;
      margin-bottom: 8px;
    }
  }
}
.create-confession {
  header {
    h1 {
      margin: 70px 0 30px 0;
      font-family: "Gelasio", sans-serif;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 24px;
    }
  }
  display: grid;
  @include wrapper;
  margin: 0 auto;
  &__form {
    &__section {
      &:after {
        content: "";
        display: block;
        height: 80px;
        width: 2px;
        margin: 40px auto 40px auto;
        background-color: $darkGray;
      }
    }
  }
}
</style>
