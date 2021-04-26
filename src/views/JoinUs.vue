<template>
  <main class="join-us-main">
    <div :class="{ active: getModal.active }" class="modal">
      <h3>{{ getModal.label }}</h3>
      <div class="modal__close" @click="getModal.active = false"></div>
      <a :href="getModal.button.url">
        <golden-button>{{ getModal.button.label }}</golden-button>
      </a>
    </div>
    <section class="main-section main-section--header">
      <h1>Wybierz sposób,w jaki chcesz wyrazić swoje uczucia</h1>
    </section>
    <section class="main-section main-section--no-line main-section--steps">
      <div class="main-section--steps__graph">
        <div class="main-section--steps__graph__step">
          <img src="@/assets/icons/ik_11.svg" />
        </div>
        <div class="main-section--steps__graph__step">
          <img src="@/assets/icons/ik_10.svg" />
        </div>
        <div class="main-section--steps__graph__step">
          <img src="@/assets/icons/ik_9.svg" />
        </div>
        <div class="main-section--steps__graph__step">
          <img src="@/assets/icons/ik_8.svg" />
        </div>
      </div>
      <div class="main-section--steps__description">
        <div>
          1. Wybierz interesujący Cię Pakiet oraz dokonaj wyboru, jeżeli będą
          dostępne opcje dodatkowe.
        </div>
        <div>2. Podaj swoje dane oraz opłać koszty wybranego pakietu</div>
        <div>
          3. Na podany adres mailowy otrzymasz link do Księgi Miliona Serc, w
          którym umieścisz swój wpis.
        </div>
        <div>
          4. Postępuj zgodnie ze wskazówkami zawartymi w korespondencji e-mail.
        </div>
      </div>
    </section>
    <section
      class="main-section main-section--no-line main-section--chose-packages"
    >
      <h3>
        Wybierz jeden z dostępnych pakietów i wyraź swoje uczucia inaczej niż
        wszyscy.
      </h3>
      <div class="main-section--chose-packages__wrapper">
        <Package
          v-for="(value, key) in packages"
          :key="key"
          :id="value.id"
          @add-to-basket="addToBasket"
          @clear-basket="clearItemFromBasket"
          :header="value.header"
          :content="value.content"
          :price="value.price"
          :real-price="value.realPrice"
        />
      </div>
    </section>
    <section class="main-section main-section--no-line main-section--summary">
      <h4>Podsumowanie</h4>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="main-section--summary__wrapper summary"
      >
        <div v-if="Object.keys(basket).length > 0">
          <h4>Koszyk</h4>
          <div class="summary__basket" :class="{ 'is-expand': expandBasket }">
            <header
              class="summary__basket__header summary__sections__header"
              @click="expandBasket = !expandBasket"
              :class="{ 'is-expand': expandBasket }"
            >
              <h5>Produkty</h5>
            </header>

            <div class="summary__basket__table">
              <!-- onlu for md size and larger -->
              <div class="summary__basket__table__header">
                <div>
                  produkt
                </div>
                <div>
                  cena
                </div>
                <div>
                  ilość
                </div>
                <div>kwota</div>
              </div>

              <div
                v-for="(value, key) in basket"
                :key="key"
                class="summary__basket__table__item"
              >
                <div class="summary__basket__table__item__info">
                  <h5 class="summary__basket__table__item__name">
                    <div
                      class="summary__basket__table__item__close"
                      @click="clearItemFromBasket(value.id)"
                    ></div>
                    {{ packages[value.id].header }}
                  </h5>
                  <div class="summary__basket__table__item__price">
                    {{ packages[value.id].realPrice }}&nbsp;PLN
                  </div>
                  <div class="summary__basket__table__item__count">
                    <input type="number" min="0" v-model="value.count" />
                  </div>
                  <div class="summary__basket__table__item__total">
                    {{
                      parseFloat(
                        (
                          packages[value.id].realPrice * value.count +
                          (value.additional.box.active === true
                            ? value.additional.box.price
                            : 0) +
                          (value.additional.packaging.active === true
                            ? value.additional.packaging.price
                            : 0)
                        ).toFixed(2)
                      )
                    }}&nbsp;PLN
                  </div>
                </div>
                <div class="summary__basket__table__item__additional">
                  <h6>Opcje dodatkowe: &nbsp;</h6>
                  <label>
                    <input
                      type="checkbox"
                      v-model="value.additional.box.active"
                    />
                    <div>
                      Dodaj antyramę -
                      {{ value.additional.box.price }}&nbsp;PLN
                    </div>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      v-model="value.additional.packaging.active"
                    />
                    <div>
                      Zapakuj na prezent -
                      {{ value.additional.packaging.price }}&nbsp;PLN
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="summary__total">
            <div><b>łącznie:</b></div>
            <div>
              <b> {{ totalPrice }}&nbsp;PLN</b>
            </div>
          </div>

          <div
            class="summary__payment-data"
            :class="{ 'is-expand': expandPaymentData }"
          >
            <header
              class="summary__sections__header"
              @click="expandPaymentData = !expandPaymentData"
              :class="{ 'is-expand': expandPaymentData }"
            >
              <h5>Dane Płatności</h5>
            </header>
            <div class="summary__payment-data__chose">
              <span
                @click="companyData = false"
                :class="{ active: !companyData }"
              >
                Osoba fizyczna
              </span>
              <span
                @click="companyData = true"
                :class="{ active: companyData }"
              >
                Firma
              </span>
            </div>
            <section class="summary__payment-data__form">
              <PaymentDataCompany v-if="companyData" :errors="errors" />
              <PaymentDataIndividual v-else :errors="errors" />
              <small class="summary__payment-data__form__legend">
                * pole obowiązkowe
              </small>
            </section>
          </div>

          <div
            class="summary__shipping-data"
            :class="{ 'is-expand': expandShippingData }"
          >
            <header
              class="summary__sections__header"
              @click="expandShippingData = !expandShippingData"
              :class="{ 'is-expand': expandShippingData }"
            >
              <h5>
                Dane do wysyłki
                <span class="small-characters">(opcjonalne)</span>
              </h5>
            </header>
            <section class="summary__shipping-data__form">
              <ShippingData :errors="errors" />
              <small class="summary__payment-data__form__legend">
                * pole obowiązkowe
              </small>
            </section>
          </div>
          <section class="summary__submit">
            <div class="summary__submit__checkbox">
              <label>
                <Field as="input" name="terms" type="checkbox" value="true" />
                <small>
                  Twoje dane osobowe będą użyte do przetworzenia twojego
                  zamówienia, obsługi twojej wizytki na naszej stronie oraz dla
                  innych celków o których mówi nasza
                  <router-link to="/polityka-prywatnosci">
                    polityka prywatności
                  </router-link>
                  oraz
                  <router-link to="/regulamin"> regulamin </router-link>
                </small>
              </label>
            </div>
            <golden-button class="summary__submit__button">
              Kupuje i płacę
            </golden-button>
          </section>
          <div class="summary__errors">
            <h5
              v-if="
                Object.values(errors).length > 0 ||
                  Object.values(getError).length > 0
              "
            >
              Błędy walidacji
            </h5>
            <ul>
              <li v-for="(value, index) in errors" :key="index">
                {{ value }}
              </li>
              <li v-for="(value, index) in getError" :key="index">
                {{ value }}
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          Nie wybrano żadnego pakietu.
        </div>
      </Form>
    </section>
  </main>
</template>

<script>
import Package from "@/components/layout/Package";
import PaymentDataCompany from "@/components/layout/form/PaymentDataCompany";
import PaymentDataIndividual from "@/components/layout/form/PaymentDataIndividual";
import ShippingData from "@/components/layout/form/ShippingData";
import GoldenButton from "@/components/layout/GoldenButton";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import { mapActions, mapGetters } from "vuex";
//

export default {
  name: "JoinUs",
  components: {
    GoldenButton,
    ShippingData,
    PaymentDataIndividual,
    PaymentDataCompany,
    Package,
    Form,
    Field
  },
  data() {
    let billingAddressSchema;
    if (this.companyData)
      billingAddressSchema = yup.object().shape({
        email: yup
          .string()
          .required("Adres email jest wymagany")
          .email("Adres email jest nie prawidłowy"),
        phoneNumber: yup
          .string()
          .required("Numer telefonu jest wymagany")
          .min(3, "Numer telefonu jest za krótki"),
        fullName: yup.string().required("Nazwa firmy jest wymagana"),
        city: yup.string().required("Miasto jest wymagane"),
        country: yup
          .string()
          .required("Kraj jest wymagany")
          .matches(/^[a-zA-Z]{2,}/, { message: "Błedny format kraju" }),
        region: yup.string().required("Region jest wymagany"),
        streetAddress: yup.string().required("Adres jest wymagany"),
        zipCode: yup.string().required("Kod pocztowy jest wymagany"),
        orderRemark: yup
          .string()
          .max(2, "Uwagi mogą mieć maksymalnie 65 tyś. znaków"),
        taxId: yup.string().required("Numer nip jest wymagany"),
        companyName: yup.string().required("Nazwa firmy jest wymagana")
      });
    else
      billingAddressSchema = yup.object().shape({
        email: yup
          .string()
          .required("Adres email jest wymagany")
          .email("Adres email jest nie prawidłowy"),
        phoneNumber: yup
          .string()
          .required("Numer telefonu jest wymagany")
          .min(3, "Numer telefonu jest za krótki"),
        fullName: yup
          .string()
          .required("Imię i nazwisko jest wymagane")
          .matches(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/, {
            message: "Błędne imię i nazwisko"
          }),
        city: yup.string().required("Miasto jest wymagane"),
        country: yup
          .string()
          .required("Kraj jest wymagany")
          .matches(/^[a-zA-Z]{2,}/, { message: "Błedny format kraju" }),
        region: yup.string().required("Region jest wymagany"),
        streetAddress: yup.string().required("Adres jest wymagany"),
        zipCode: yup.string().required("Kod pocztowy jest wymagany"),
        orderRemark: yup
          .string()
          .max(2, "Uwagi mogą mieć maksymalnie 65 tyś. znaków")
      });

    const shippingAddressSchema = yup.object().shape({
      email: yup
        .string()
        .required("Adres email jest wymagany")
        .email("Adres email jest nie prawidłowy"),
      phoneNumber: yup
        .string()
        .required("Numer telefonu jest wymagany")
        .min(3, "Numer telefonu jest za krótki"),
      name: yup
        .string()
        .required("Imię i nazwisko jest wymagane")
        .matches(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/, {
          message: "Błędne imię i nazwisko"
        }),
      city: yup.string().required("Miasto jest wymagane"),
      country: yup
        .string()
        .required("Kraj jest wymagany")
        .matches(/^[a-zA-Z]{2,}/, { message: "Błedny format kraju" }),
      region: yup.string().required("Region jest wymagany"),
      streetAddress: yup.string().required("Adres jest wymagany"),
      zipCode: yup.string().required("Kod pocztowy jest wymagany"),
      orderRemark: yup
        .string()
        .max(2, "Uwagi mogą mieć maksymalnie 65 tyś. znaków")
    });

    const schema = yup.object().shape({
      billingAddress: billingAddressSchema,
      shippingAddress: yup.lazy(() => {
        if (this.expandShippingData) {
          // Return our normal validation
          return shippingAddressSchema;
        }
        // Otherwise, return a simple validation
        return yup.mixed().notRequired();
      }),
      terms: yup
        .boolean()
        .required("Zaakceptuj regulamin")
        .oneOf([true, 1], "Zaakceptuj regulamin")
    });

    const onSubmit = async values => {
      let cartItems = [];

      Object.values(this.basket).forEach(value => {
        for (let i = 0; i < value.count; i++) {
          let additionals = [];

          Object.values(value.additional).forEach(value => {
            if (value.active) additionals.push({ id: value.id });
          });

          let cartItem = [];

          if (additionals.length === 0) cartItem = { packageId: value.id };
          else cartItem = { packageId: value.id, additionals };

          cartItems.push(cartItem);
        }
      });

      let payload;

      if (this.expandShippingData) {
        payload = {
          shippingAddress: values.shippingAddress,
          billingAddress: values.billingAddress,
          terms: values.terms,
          cartItems
        };
      } else {
        payload = {
          terms: values.terms,
          billingAddress: values.billingAddress,
          cartItems
        };
      }

      await this.order(payload);
    };

    return {
      schema,
      onSubmit,
      packages: {
        1: {
          id: 1,
          header: "Pakiet serduszko",
          content: [
            "Wpis wyrażający uczucia w Księdze Miliona Serc",
            "Imienny certyfikat",
            "Wpis w formie kartki wydrukowanej oraz online"
          ],
          realPrice: 9.97,
          price: 0
        },
        2: {
          id: 2,
          header: "Pakiet wielkie serce",
          content: [
            "Wpis wyrażający uczucia w Księdze Miliona Serc",
            "Imienny certyfikat",
            "Wpis w formie kartki wydrukowanej oraz online",
            "Srebrny naszyjnik z zawieszką"
          ],
          realPrice: 0.0,
          price: 0
        },
        3: {
          id: 3,
          header: "Pakiet złote serce",
          content: [
            "Wpis wyrażający uczucia w Księdze Miliona Serc",
            "Imienny certyfikat",
            "Wpis w formie kartki wydrukowanej oraz online",
            "Pakiet biżuterii dla kobiet lub mężczyzn"
          ],
          realPrice: 0.0,
          price: 0
        },
        4: {
          id: 4,
          header: "Pakiet vip",
          content: [
            "Wpis wyrażający uczucia w Księdze Miliona Serc",
            "Imienny certyfikat",
            "Wpis w formie kartki wydrukowanej oraz online",
            "Pakiet biżuterii dla kobiet lub mężczyzn",
            "Wizyta niezwykłego 3m Misia Pandy"
          ],
          realPrice: 5500,
          price: 5500
        }
      },
      basket: {},
      totalPrice: 0,
      expandBasket: false,
      expandPaymentData: true,
      expandShippingData: false,
      companyData: false
    };
  },
  computed: {
    ...mapGetters({
      getError: "Order/getError",
      getModal: "Order/getModal"
    })
  },
  watch: {
    basket: {
      deep: true,
      handler() {
        this.calcTotalPrice();
      }
    }
  },
  methods: {
    ...mapActions({
      order: "Order/order"
    }),
    calcTotalPrice() {
      if (Object.keys(this.basket).length > 0)
        this.totalPrice = Object.values(this.basket)
          .reduce((acc, item) => {
            return (
              acc +
              parseInt(this.packages[item.id].realPrice * item.count) +
              (item.additional.box.active === true
                ? item.additional.box.price
                : 0) +
              (item.additional.packaging.active === true
                ? item.additional.packaging.price
                : 0)
            );
          }, 0)
          .toFixed(2);
    },
    addToBasket(packages) {
      this.basket[packages.id] = packages;
      this.expandBasket = true;
      this.calcTotalPrice();
    },
    clearItemFromBasket(id) {
      delete this.basket[id];
      this.calcTotalPrice();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables";
@import "../styles/_mixins";
@import "../styles/components/linedList";

img {
  max-width: 100%;
}
.join-us-main {
  display: grid;
  @include wrapper;
  margin: 0 auto;
}

.modal {
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
  &__close {
    width: 30px;
    justify-self: flex-end;
    grid-area: close;
    height: 30px;
    border: 2px solid $colorGold;
    position: absolute;
    right: 10px;
    top: 10px;
    transition: background-color ease 0.5s;
    cursor: pointer;
    &::after,
    &::before {
      content: "";
      display: block;
      background-color: $colorGold;
      width: 80%;
      position: absolute;
      left: 50%;
      top: 50%;
      height: 2px;
      transform-origin: center;
      transition: background-color ease 0.5s;
    }
    &:hover {
      background-color: $colorGold;
      &:after,
      &:before {
        background-color: white;
      }
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  transition: opacity ease 0.7s;
  opacity: 0;
  background-color: white;
  box-shadow: 0 0 20px -4px black;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  z-index: 20;
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  box-sizing: border-box;

  h4 {
    font-size: 1.4em;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Gelasio", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
  }

  b {
    font-weight: 600;
  }

  &:not(&--no-line) {
    &:after {
      content: "";
      display: block;
      height: 80px;
      width: 2px;
      margin: 40px auto 0 auto;
      background-color: $darkGray;
    }
  }
  &--header {
    margin-top: 2em;
  }
  &--chose-packages {
    &__wrapper {
      display: grid;
      margin-bottom: 32px;
      flex-direction: row;

      @media (min-width: $breakpoint-md) {
        column-gap: 12px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
      }
      @media (min-width: $breakpoint-lg) {
        column-gap: 12px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto auto auto;
      }
    }
  }

  &--steps {
    margin: 32px 0;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    text-align: left;

    @media (min-width: $breakpoint-sm) {
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      text-align: center;
      align-items: flex-start;
    }
    column-gap: 12px;
    row-gap: 24px;
    justify-content: space-between;
    position: relative;
    &__graph {
      width: 100%;
      display: contents;
      &::after {
        content: "";
        display: block;
        height: 80%;
        top: 10%;
        z-index: -1;
        @media (min-width: $breakpoint-sm) {
          width: 80%;
          height: 2px;
          left: 10%;
          top: 39px;
        }

        left: 39px;
        position: absolute;
        width: 2px;
        background-color: black;
      }
      &__step {
        width: 80px;
        height: 80px;
        border-radius: 200px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: $breakpoint-sm) {
          grid-column: 1/2;
          &:nth-child(1) {
            grid-row: 1/2;
            align-self: flex-start;
          }
          &:nth-child(2) {
            grid-row: 2/3;
          }
          &:nth-child(3) {
            grid-row: 3/4;
          }
          &:nth-child(4) {
            grid-row: 4/5;
          }
        }
        img {
          width: 80%;
        }
      }
    }
    &__description {
      display: contents;
      height: 100%;
      font-size: 16px;
      div {
        @media (max-width: $breakpoint-sm) {
          grid-column: 2/3;
          &:nth-child(1) {
            grid-row: 1/2;
          }
          &:nth-child(2) {
            grid-row: 2/3;
          }
          &:nth-child(3) {
            grid-row: 3/4;
          }
          &:nth-child(4) {
            grid-row: 4/5;
          }
        }
      }
    }
  }

  .summary {
    h5 {
      .small-characters {
        text-transform: lowercase;
      }
    }

    &__errors {
      margin-top: 12px;
      color: rgba(222, 0, 0, 1);
      h5 {
        font-size: 15px;
        margin: 0;
        font-weight: 500;
      }
      font-size: 14px;
      font-weight: 500;
    }

    &__submit {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: $breakpoint-md) {
        flex-direction: row;
      }
      &__checkbox {
        margin-bottom: 18px;
        @media (min-width: $breakpoint-md) {
          flex-direction: row;
          margin: 0 24px 0 0;
        }
        a {
          color: $colorGold;
          text-decoration: underline;
        }
        label {
          display: flex;
        }
        input {
          margin-right: 8px;
        }
      }
      &__button {
        width: min-content;
        white-space: nowrap;
      }
    }
    &__total {
      width: 100%;
      text-transform: uppercase;
      font-family: "Gelasio", sans-serif;
      font-size: 18px;
      justify-content: space-between;
      border-bottom: 2px solid black;
      padding: 0 6px;
      position: relative;
      display: flex;
      margin: 24px 0;
      align-items: center;
      height: 35px;
      box-sizing: border-box;
    }
    &__sections {
      &__header {
        width: 100%;
        text-transform: uppercase;
        font-family: "Gelasio", sans-serif;
        font-size: 20px;
        border-bottom: 2px solid black;
        padding: 0 6px;
        position: relative;
        display: flex;
        align-items: center;
        height: 35px;
        box-sizing: border-box;
        cursor: pointer;
        &.is-expand {
          &::after {
            transform: translateY(-50%);
          }
        }
        &::after {
          content: "";
          width: 20px;
          transform: translateY(-50%) rotate(-90deg);
          display: block;
          height: 20px;
          transition: transform ease 0.5s;
          right: 5px;
          top: 50%;
          position: absolute;
          background-image: url("../assets/icons/down-chevron.svg");
          background-repeat: no-repeat, repeat;
          /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
          background-position: center;
          /* icon size, then gradient */
          background-size: cover;
        }

        h5 {
          margin: 0;
        }
      }
    }
    &__basket,
    &__payment-data,
    &__shipping-data {
      overflow: hidden;
      max-height: 35px;
      transition: max-height ease-in-out 1s;
      &.is-expand {
        max-height: 800px;
      }
    }
    &__basket {
      &__header {
        width: 100%;
        text-transform: uppercase;
        font-family: "Gelasio", sans-serif;
        font-size: 20px;
        border-bottom: 2px solid black;
        padding: 0 6px;
        @media (min-width: $breakpoint-md) {
          display: none;
        }
        position: relative;
        display: flex;
        align-items: center;
        height: 35px;
        box-sizing: border-box;
        cursor: pointer;
        &.is-expand {
          &::after {
            transform: translateY(-50%);
          }
        }
        &::after {
          content: "";
          width: 20px;
          transform: translateY(-50%) rotate(-90deg);
          display: block;
          height: 20px;
          transition: transform ease 0.5s;
          right: 5px;
          top: 50%;
          position: absolute;
          background-image: url("../assets/icons/down-chevron.svg");
          background-repeat: no-repeat, repeat;
          /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
          background-position: center;
          /* icon size, then gradient */
          background-size: cover;
        }

        h5 {
          margin: 0;
        }
      }
      &__table {
        @media (min-width: $breakpoint-md) {
          display: grid;
          grid-template-columns: auto auto auto auto;
          align-items: center;
        }

        &__header {
          display: none;
          @media (min-width: $breakpoint-md) {
            display: contents;

            div {
              border-bottom: 2px solid black;
              line-height: 150%;
              text-transform: uppercase;
              font-family: "Gelasio", sans-serif;
              font-weight: 600;
            }
          }
        }

        &__item {
          display: contents;

          &__info {
            @media (min-width: $breakpoint-md) {
              display: contents;
              padding: 12px 0;
            }
            position: relative;
            padding-left: 40px;
          }

          &__additional {
            @media (min-width: $breakpoint-md) {
              grid-column: 1/-1;
              margin-top: 0;
            }
            display: flex;
            flex-wrap: wrap;
            padding: 8px;
            background-color: $lightGray;
            margin-top: 12px;
            h6 {
              font-weight: 600;
              text-transform: uppercase;
              font-size: 14px;
              margin: 0 0 4px 0;
            }
            label {
              display: flex;
              input {
                margin-right: 4px;
              }
              line-height: 150%;
              font-weight: 500;
              font-size: 12px;
            }
          }

          &__close {
            position: absolute;
            left: 0;
            top: 0;
            width: 20px;
            height: 20px;
            cursor: pointer;
            transition: border 0.5s ease;
            border: 2px solid $mediumGray;
            &:hover {
              border: 2px solid red;
              &:after,
              &:before {
                background-color: red;
              }
            }
            &::after,
            &::before {
              content: "";
              position: absolute;
              left: 10%;
              width: 80%;
              top: calc(50% - 1px);
              height: 2px;
              transition: background-color 0.5s ease;

              background-color: $mediumGray;
            }
            &::after {
              transform: rotate(-45deg);
            }
            &::before {
              transform: rotate(45deg);
            }
          }
          &__name {
            text-transform: uppercase;
            @media (min-width: $breakpoint-md) {
              padding-left: 40px;
              position: relative;
            }
            font-weight: 700;
            font-size: 16px;
            margin: 0.5em 0;
          }
          &__count {
            input {
              text-align: center;
              &::-webkit-outer-spin-button,
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              width: 35px;
            }
          }
          &__price,
          &__total,
          &__count {
            width: 100%;
            display: flex;
            justify-content: space-between;

            @media (min-width: $breakpoint-md) {
              padding: 16px 0;
            }

            &::before {
              @media (min-width: $breakpoint-md) {
                display: none;
              }
              text-transform: uppercase;
              font-family: "Gelasio", sans-serif;
              font-weight: 500;
            }
          }
          &__price {
            &::before {
              content: "Cena";
            }
          }
          &__count {
            &::before {
              content: "Ilość";
            }
          }
          &__total {
            &::before {
              content: "Kwota";
            }
          }
        }
      }
    }
    &__payment-data {
      margin: 24px 0;
      &__chose {
        padding: 12px 0;
        text-transform: uppercase;
        color: $mediumGray;
        font-weight: 600;
        span {
          cursor: pointer;
          transition: color ease 0.4s;

          &.active {
            color: $colorGold;
          }
          &:first-child {
            margin-right: 16px;
          }
        }
      }
      &__form {
        &__legend {
          color: red;

          font-weight: 400;
        }
      }
    }
    &__shipping-data {
      &__form {
        margin-top: 12px;
      }
      margin: 24px 0;
    }
  }

  &--summary {
    margin: 32px 0;
    &__wrapper {
      h4 {
        color: $colorGold;
      }
      width: 100%;
      box-sizing: border-box;
      padding: 30px;

      text-align: left;
      border: 10px solid $lightGray;
    }
  }
}
</style>
