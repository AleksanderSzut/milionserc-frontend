<template>
  <Form
    v-slot="{ errors }"
    @submit="submit"
    :validation-schema="schema"
    class="form"
  >
    <InputField
      class="form__item form__item form__item"
      name="fullName"
      placeholder="Imie i Nazwisko *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="city"
      placeholder="Miasto *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="country"
      placeholder="Kraj *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="region"
      placeholder="Region *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item form__item--small-double-row"
      name="streetAddress"
      placeholder="Nazwa ulicy, numer budynku/lokalu *"
      as="textarea"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item"
      name="zipCode"
      placeholder="Kod pocztowy *"
      :errors="errors"
      type="text"
    />
    <InputField
      class="form__item form__item--textarea form__item--small-double-row"
      name="orderRemark"
      as="textarea"
      placeholder="Uwagi do zamówienia(opcjonalne)"
      :errors="errors"
      type="tel"
    />

    <InputField
      class="form__item"
      name="tel"
      placeholder="Telefon *"
      :errors="errors"
      type="tel"
    />
    <InputField
      class="form__item"
      name="email"
      placeholder="E-mail *"
      :errors="errors"
      type="email"
    />
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as yup from "yup";
import InputField from "@/components/layout/form/item/InputField";

export default {
  components: { InputField, Form },
  data: () => {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required()
        .email(),
      phone: yup
        .string()
        .required()
        .min(6)
    });

    return {
      schema
    };
  },
  methods: {
    submit: value => {
      console.log(value);
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
