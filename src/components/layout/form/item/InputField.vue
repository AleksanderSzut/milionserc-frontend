<template>
  <div class="input-field">
    <Field
      :name="name"
      :class="`input-field__${as}`"
      :as="as"
      :placeholder="placeholder"
      :type="type"
    />
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  name: "InputField",
  components: { Field },
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      required: true
    },
    errors: {
      type: Object,
      required: true
    },
    as: {
      type: String,
      default: "input"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/_variables";
@import "../../../../styles/_mixins";
.input-field {
  &__textarea,
  &__input {
    width: 100%;
    border: 2px solid $lightGray;
    padding: 0 12px;
    resize: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    box-sizing: border-box;
    height: 100%;

    &::-webkit-input-placeholder {
      color: $darkGray;
    }
  }
  &__textarea {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
