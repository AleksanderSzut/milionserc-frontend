<template>
  <div class="form">
    <InputField
      class="form__item form__item--wide"
      name="name"
      array="shippingAddress"
      placeholder="Nazwa / Imię i Nazwisko *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="country"
      array="shippingAddress"
      placeholder="Kraj *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item form__item--wide"
      name="streetAddress"
      array="shippingAddress"
      placeholder="Nazwa ulicy, numer budynku/lokalu *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="region"
      array="shippingAddress"
      placeholder="Region *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="city"
      array="shippingAddress"
      placeholder="Miasto *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="zipCode"
      array="shippingAddress"
      placeholder="Kod pocztowy *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="phoneNumber"
      array="shippingAddress"
      placeholder="Telefon *"
      :errors="errors"
      type="tel"
    />
  </div>
</template>

<script>
import InputField from "@/components/layout/form/item/InputField";

export default {
  components: { InputField },

  props: {
    errors: {
      type: Object,
      required: true
    }
  },
  name: "ShippingData"
};
</script>

<style lang="scss" scoped>
@import "../../../styles/_variables";

.form {
  display: grid;
  grid-row-gap: 8px;
  grid-auto-rows: 40px;

  @media (min-width: $breakpoint-md) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 12px;
  }

  &__item {
    width: 100%;

    @media (min-width: $breakpoint-md) {
      &--wide {
        grid-column: span 2;
      }
      &--textarea {
        grid-column: span 2;
        grid-row: span 2;
      }
    }
  }
}
</style>
