<template>
  <div class=" package">
    <h4 class="package__header" @click="expanded = !expanded">
      {{ header }}
    </h4>
    <div class="package__expander" :class="{ 'is-active': expanded }">
      <div class="package__content">
        <ul>
          <li v-for="(item, key) in content" :key="key">{{ item }}</li>
        </ul>
      </div>
      <div class="package__bottom">
        <div class="package__price">
          <div>Cena: {{ price }}&nbsp;PLN</div>
          <small>{{ additionalPriceInfo(price, realPrice) }}</small>
        </div>
        <div class="package__chose">
          <label>
            <input type="checkbox" v-model="active" />
            wybierz
          </label>
          <div class="package__chose__quantity">
            <div @click="decrementCount">-</div>
            <input type="number" :value="count" step="1" />
            <div @click="count++">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Package",
  data() {
    return {
      expanded: false,
      count: 1,
      active: false
    };
  },
  emits: ["add-to-basket", "clear-basket"],
  watch: {
    active: function() {
      if (this.active) this.addItemEmit();
      else this.$emit("clear-basket", this.id);
    },
    count: function() {
      if (this.active) {
        this.addItemEmit();
      }
    }
  },
  methods: {
    addItemEmit() {
      this.$emit("add-to-basket", {
        count: this.count,
        id: this.id,
        additional: {
          box: {
            active: false,
            price: 19.99,
            id: 1
          },
          packaging: { active: false, price: 9.99, id: 2 }
        }
      });
    },
    decrementCount() {
      if (this.count > 1) this.count--;
    },
    additionalPriceInfo(price, realPrice) {
      let diff = parseInt(realPrice) - parseInt(price);
      if (diff !== 0) {
        return `+ koszty wysyłki: ${realPrice}`;
      } else return `brak dodatkowych kosztów`;
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    header: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    realPrice: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.package {
  border: 1px solid;
  margin: 3px 0;
  text-align: left;

  @media (min-width: $breakpoint-md) {
    display: grid;
    grid-template-rows: 50px auto 140px;
  }
  &__expander {
    max-height: 0;
    overflow: hidden;
    transition: max-height ease-in-out 1s;

    @media (min-width: $breakpoint-md) {
      display: contents;
      max-height: none;
    }
    &.is-active {
      max-height: 400px;
    }
  }

  &__header {
    margin: 0;
    color: white;
    height: 50px;
    padding: 0 1em;
    display: flex;
    align-items: center;
    font-size: 1.2em;
    font-weight: 400;
    background-color: $colorGold;
  }
  &__button {
  }
  &__price {
    border-top: 1px solid black;
    width: 50%;
    min-width: 200px;
    margin: 0 auto;
    padding: 12px 0;
    div {
      text-transform: uppercase;
      font-size: 1.2em;
      font-weight: 500;
      font-family: "Gelasio", sans-serif;
    }
    text-align: center;
  }
  &__content {
    margin: 16px 0;
    ul {
      margin: 0;
      padding: 0 10px 0 30px;
      li {
        margin: 8px 0;
      }
    }
  }
  &__chose {
    background-color: $lightGray;
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 12px;
    justify-content: space-between;
    label {
      cursor: pointer;
      font-size: 16px;
      display: flex;
      align-items: center;
    }
    &__quantity {
      display: flex;
      align-items: center;
      div {
        font-size: 20px;
        height: 100%;
        display: flex;
        width: 20px;
        align-items: center;
        cursor: pointer;
        border-radius: 20px;
        justify-content: center;
        transition: color ease 0.25s, background-color ease 0.25s;
        &:hover {
          color: white;
          background-color: $colorGold;
        }
      }
      input {
        text-align: center;
        height: 25px;
        margin: 0 8px;
        width: 30px;
        border: none;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }
}
</style>
