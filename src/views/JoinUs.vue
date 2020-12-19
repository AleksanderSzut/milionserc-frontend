<template>
  <main class="join-us-main">
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
      <form class="main-section--summary__wrapper summary">
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
                      Dodaj antyramę - {{ value.additional.box.price }}&nbsp;PLN
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
              <h5>Dane użytkownika</h5>
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
            <section
              v-if="companyData"
              class="summary__payment-data__form"
            ></section>
            <section v-else class="summary__payment-data__form"></section>
          </div>
        </div>
        <div v-else>
          Nie wybrano żadnego pakietu.
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import Package from "@/components/layout/Package";
//
// import { Form, Field } from "vee-validate";
// import * as Yup from "yup";

export default {
  name: "JoinUs",
  components: { Package /*Form, Field*/ },
  data() {
    /*
    const schema = Yup.object().shape({
      title: Yup.string().required("Title is required"),
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last name is required"),
      dob: Yup.string()
        .required("Date of Birth is required")
        .matches(
          /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
          "Date of Birth must be a valid date in the format YYYY-MM-DD"
        ),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      acceptTerms: Yup.string().required("Accept Ts & Cs is required")
    });

    const onSubmit = values => {
      // display form values on success
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
    };*/

    return {
      /*
      schema,
      onSubmit,*/
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
      expandPaymentData: false,
      expandShippingData: false,
      companyData: false
    };
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
    &__basket {
      @media (max-width: $breakpoint-md) {
        max-height: 35px;
      }
      transition: max-height ease-in-out 1s;
      &.is-expand {
        max-height: 800px;
        @media (min-width: $breakpoint-md) {
          max-height: none;
        }
      }
      overflow: hidden;
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
    &__paymentData {
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
