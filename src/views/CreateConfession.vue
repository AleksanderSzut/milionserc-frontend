<template>
  <main class="create-confession-main">
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <InputField
        name="title"
        array="confession"
        :errors="errors"
        placeholder="Tytuł wyznania"
      />
      <InputField
        name="content"
        array="confession"
        :errors="errors"
        as="textarea"
        placeholder="Treść wyznania"
      />

      <ImageField name="" @images="addImages" />
      <VideoField name="" @images="addVideos" />
      <golden-button>Zakończ i przejdź do wyznania</golden-button>
    </Form>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { Form } from "vee-validate";
import InputField from "@/components/layout/form/item/InputField";
import * as yup from "yup";
import ImageField from "@/components/layout/form/item/ImageField";
import VideoField from "@/components/layout/form/item/VideoField";
import GoldenButton from "@/components/layout/GoldenButton";

export default {
  name: "CreateConfession",
  components: { GoldenButton, VideoField, ImageField, InputField, Form },
  data() {
    const schema = yup.object().shape({});

    const onSubmit = async values => {
      console.log(values);
      console.log(this.images);
      console.log(this.videos);
    };

    return {
      schema,
      images: [],
      videos: [],
      onSubmit
    };
  },
  created() {
    this.getConfession({
      uuid: this.$route.params.uuid,
      token: this.$route.params.secretKey
    });
  },
  methods: {
    addVideos(images) {
      this.videos = images;
    },
    addImages(images) {
      this.images = images;
    },
    ...mapActions({
      getConfession: "Confessions/getConfession"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables";
@import "../styles/_mixins";
@import "../styles/components/linedList";

.create-confession-main {
  display: grid;
  @include wrapper;
  margin: 0 auto;
}
</style>
