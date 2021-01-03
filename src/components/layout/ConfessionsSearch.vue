<template>
  <div class="search-container">
    <input
      class=""
      @input="handleInput"
      v-model="searchValue"
      placeholder="Szukaj..."
    />
    <div class="search-container__result-list"></div>
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
      searchValue: ""
    };
  },
  methods: {
    handleInput: debounce(() => {
      if (this.searchValue.length > 3) {
        const searchResponse = this.confessionsSearch(this.searchValue);

        console.log(searchResponse);
      }
    }, 500),
    ...mapActions({
      confessionsSearch: "Confessions/confessionsSearch"
    })
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  margin-bottom: 24px;
  input {
    height: 24px;
    width: 70%;
    border-style: none none solid none;
  }
}
</style>
