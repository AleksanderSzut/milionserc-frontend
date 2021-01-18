<template>
  <div class="form">
    <InputField
      class="form__item form__item--wide"
      name="fullName"
      billingAddress
      array="billingAddress"
      placeholder="Nazwa firmy *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="taxId"
      placeholder="NIP *"
      array="billingAddress"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item form__item--wide"
      name="streetAddress"
      array="billingAddress"
      placeholder="Nazwa ulicy, numer budynku/lokalu *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="country"
      array="billingAddress"
      placeholder="Kraj *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="region"
      placeholder="Region *"
      array="billingAddress"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="city"
      placeholder="Miasto *"
      array="billingAddress"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="zipCode"
      placeholder="Kod pocztowy *"
      :errors="errors"
      type="text"
      array="billingAddress"
    />
    <InputField
      class="form__item"
      name="phoneNumber"
      array="billingAddress"
      placeholder="Telefon *"
      :errors="errors"
      type="tel"
    />
    <InputField
      class="form__item form__item--textarea"
      name="orderRemark"
      as="textarea"
      array="billingAddress"
      placeholder="Uwagi do zamówienia(opcjonalne)"
      :errors="errors"
      type="tel"
    />

    <InputField
      class="form__item"
      name="email"
      array="billingAddress"
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
  methods: {
    submit: value => {
      console.log(value);
    }
  },
  props: {
    errors: {
      type: Object,
      required: true
    }
  },
  name: "PaymentDataCompany"
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
