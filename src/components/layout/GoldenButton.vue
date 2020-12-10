<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "GoldenButton"
};
</script>

<style lang="scss" scoped>
@import "../../styles/__variables";

.button {
  grid-area: button;
  color: $colorGold;
  padding: 8px 12px;
  background-color: transparent;
  cursor: pointer;
  box-sizing: border-box;
  text-transform: uppercase;
  border: 3px solid $colorGold;
  font-family: "Gelasio", sans-serif;
  font-size: 18px;
  text-align: center;
  transition: background-color ease 0.5s, color ease 0.5s;
  &:hover {
    background-color: $colorGold;
    color: white;
  }
}
</style>
