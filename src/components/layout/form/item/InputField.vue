<template>
  <div class="input-field">
    <Field
      :name="`${array}.${name}`"
      :class="inputClass"
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
  data: () => {},
  computed: {
    inputClass() {
      // let error;

      if (typeof this.errors[this.array + "." + this.name] !== "undefined")
        return `error input-field__${this.as}`;
      else return `input-field__${this.as}`;
    }
  },
  props: {
    array: {
      type: String
    },
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
    border-radius: 2px;
    height: 100%;
    transition: border ease 0.5s;
    &.error {
      border-color: rgb(220, 0, 0);
    }

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
