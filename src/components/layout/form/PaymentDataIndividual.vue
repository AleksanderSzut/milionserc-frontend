<template>
  <div class="form">
    <InputField
      class="form__item form__item form__item"
      array="billingAddress"
      name="fullName"
      placeholder="Imie i Nazwisko *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      array="billingAddress"
      name="city"
      placeholder="Miasto *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      array="billingAddress"
      name="country"
      placeholder="Kraj *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      array="billingAddress"
      name="region"
      placeholder="Region *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item form__item--small-double-row"
      array="billingAddress"
      name="streetAddress"
      placeholder="Nazwa ulicy, numer budynku/lokalu *"
      as="textarea"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      array="billingAddress"
      name="zipCode"
      placeholder="Kod pocztowy *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item form__item--textarea form__item--small-double-row"
      array="billingAddress"
      name="orderRemark"
      as="textarea"
      placeholder="Uwagi do zamówienia(opcjonalne)"
      :errors="errors"
      type="tel"
    />

    <InputField
      class="form__item"
      array="billingAddress"
      name="phoneNumber"
      placeholder="Telefon *"
      :errors="errors"
      type="tel"
    />
    <InputField
      class="form__item"
      array="billingAddress"
      name="email"
      placeholder="E-mail *"
      :errors="errors"
      type="email"
    />
  </div>
</template>

<script>
import InputField from "@/components/layout/form/item/InputField";

export default {
  components: { InputField },
  props: {
    errors: {
      type: Object
    }
  },
  name: "PaymentDataIndividual"
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

    @media (max-width: $breakpoint-md) {
      &--small-double-row {
        grid-row: span 2;
      }
    }
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
