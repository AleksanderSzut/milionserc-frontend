<template>
  <div class="search-container">
    <input
      class=""
      @input="handleInput"
      v-model="searchValue"
      placeholder="Szukaj..."
      @focusout="focusOut()"
    />

    <div
      class="search-container__result-list result-list"
      :class="
        Object.keys(results).length > 0 && toggleResultContainer
          ? `is-expand`
          : ``
      "
    >
      <div class="result-list__expand">
        <div
          class="result-list__item"
          v-for="(item, key) in results.slice(0, 3)"
          :key="key"
          @click="previewThis(item.id)"
        >
          <div class="result-list__item__text">
            <h5>{{ item.title }}</h5>
            <p>{{ item.content }}</p>
          </div>
          <div class="result-list__item__img-container">
            <img :src="item.images[0]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import debounce from "lodash.debounce";

export default {
  name: "ConfessionsSearch",

  data: () => {
    return {
      searchModal: false,
      searchValue: "",
      results: [],
      toggleResultContainer: false
    };
  },
  emits: ["confession-preview"],
  methods: {
    focusIn() {
      this.toggleResultContainer = true;
    },
    focusOut() {
      this.toggleResultContainer = false;
    },
    previewThis(id) {
      this.$emit("confession-preview", id);
    },
    handleInput: debounce(async function() {
      this.focusIn();
      if (this.searchValue.length >= 2) {
        this.results = [];
        this.results = await this.confessionsSearch({
          perPage: 4,
          query: this.searchValue
        });
        console.log(this.results);
      } else this.focusOut();
    }, 500),
    ...mapActions({
      confessionsSearch: "Confessions/confessionsSearch"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.search-container {
  position: relative;
  margin-bottom: 24px;
  input {
    height: 24px;
    width: 70%;
    border-style: none none solid none;
  }
}
.result-list {
  max-height: 0;
  overflow: hidden;
  transition: max-height ease 0.5s;
  &.is-expand {
    max-height: 376px;
  }
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  position: absolute;
  margin-top: 4px;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  z-index: 200;
  &__item {
    display: flex;
    justify-content: space-between;
    $lineHeight: 18px;
    line-height: $lineHeight;
    padding: 6px 12px 6px 12px;
    cursor: pointer;
    position: relative;

    &:after {
      content: "Pogląd";
      color: transparent;
      left: 0;
      font-weight: 400;
      font-family: "Gelasio", sans-serif;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: background-color ease 0.5s, backdrop-filter ease 0.5s,
        color ease 0.5s;
    }
    &:hover {
      &:after {
        color: white;
        backdrop-filter: blur(2px);
        background-color: rgba(0, 0, 0, 0.75);
      }
    }
    &__text {
      text-align: left;
      width: calc(100% - 120px);
      h5,
      p {
        margin: 0;
      }
      h5 {
        font-size: 16px;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-family: "Gelasio", sans-serif;
      }
      p {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    &__img-container {
      width: 80px;
      height: 80px;
      border-radius: 100px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
