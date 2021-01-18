<template>
  <section class="image-field">
    <header class="image-field__header">
      <label for="videoUpload"><b>+ Dodaj film</b> (max 4 sztuk)</label>
      <p>
        Twój film zostanie dodany do życzeń w wersji elektronicznej
      </p>
    </header>
    <input
      type="file"
      accept="video/*"
      multiple="multiple"
      @change="previewMultiImage"
      class="image-field__input"
      id="videoUpload"
    />
    <div class="image-field__enlarge" :class="{ active: enlarge.active }">
      <div class="image-field__enlarge__item">
        <video-player class="" :url="enlarge.item" :outside="true" />
      </div>
      <div
        class="image-field__enlarge__close"
        @click="enlarge.active = false"
      ></div>
    </div>
    <div class="image-field__preview">
      <template v-if="preview_list.length">
        <div
          v-for="(item, index) in preview_list"
          :key="index"
          class="image-field__preview__item"
        >
          <video-player
            class=""
            :url="item"
            :enlarge="true"
            @enlarge="enlargeVideo"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import VideoPlayer from "@/components/layout/VideoPlayer";
export default {
  name: "VideoField",
  components: { VideoPlayer },
  data: () => {
    return {
      preview: null,
      enlarge: {
        active: false,
        item: null
      },
      image: null,
      preview_list: [],
      image_list: []
    };
  },
  emits: ["images"],
  methods: {
    enlargeVideo: function(item) {
      this.enlarge = {
        active: true,
        item: item
      };
    },
    previewMultiImage: function(event) {
      let input = event.target;
      let count = input.files.length;

      let index = 0;
      if (input.files) {
        while (count--) {
          if (this.image_list.length < 4) {
            let reader = new FileReader();
            reader.onload = e => {
              this.preview_list.push(e.target.result);
            };
            this.image_list.push(input.files[index]);
            reader.readAsDataURL(input.files[index]);
            index++;
          }
        }
      }
      this.$emit("images", this.image_list);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/__variables";

.image-field {
  margin-top: 24px;
  &__header {
    text-align: left;
    label {
      cursor: pointer;
    }
    p {
      margin: 0;
    }
  }
  &__input {
    opacity: 0;
    display: none;
  }
  &__enlarge {
    position: fixed;
    z-index: 200;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    pointer-events: none;

    transition: opacity ease 0.7s;

    &__item {
      max-width: 90vw;
      max-height: 80vh;
      .video-player {
        width: 100%;
        height: 100%;
      }
    }
    &.active {
      opacity: 1;
      pointer-events: all;
    }
    &__close {
      width: 30px;
      top: 20px;
      right: 20px;
      position: absolute;
      justify-self: flex-end;
      grid-area: close;
      height: 30px;
      border: 2px solid $colorGold;
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

  &__preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 12px;
    &__item {
      position: relative;
      cursor: pointer;
      .video-player {
        width: 100%;
        left: 0;
        top: 0;
        height: 100%;
        object-fit: cover;
        position: absolute;
      }

      &::before {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
  }
}
</style>
