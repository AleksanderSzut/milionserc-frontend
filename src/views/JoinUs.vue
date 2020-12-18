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
      <div class="main-section--summary__wrapper summary">
        <h4>Koszyk</h4>
        <div class="summary__basket">
          <header class="summary__basket__header">
            <h5>Produkty</h5>
          </header>
          <div class="summary__basket__table">
            <div
              v-for="(value, key) in basket"
              :key="key"
              class="summary__basket__table__item"
            >
              <div class="summary__basket__table__item__info">
                <div
                  class="summary__basket__table__item__close"
                  @click="clearItemFromBasket(value.id)"
                ></div>
                <h5 class="summary__basket__table__item__name">
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
                      (packages[value.id].realPrice * value.count).toFixed(2)
                    )
                  }}&nbsp;PLN
                </div>
              </div>
              <div class="summary__basket__table__item__additional">
                <h6>Opcje dodatkowe</h6>
                <label>
                  <input type="checkbox" v-model="value.additional.box" />
                  <div>Dodaj antyramę - 19,99&nbsp;PLN</div>
                </label>
                <label>
                  <input type="checkbox" v-model="value.additional.packaging" />
                  <div>Zapakuj na prezent - 9,99&nbsp;PLN</div>
                </label>
              </div>
            </div>
          </div>
          <!--          <table class="summary__basket__table">-->
          <!--            <thead>-->
          <!--              <tr>-->
          <!--                <th>Produkt</th>-->
          <!--                <th>Cena</th>-->
          <!--                <th>Ilość</th>-->
          <!--                <th>Kwota</th>-->
          <!--              </tr>-->
          <!--            </thead>-->
          <!--            <tbody>-->
          <!--              <tr v-for="(value, key) in basket" :key="key">-->
          <!--                <td>{{ packages[value.id].header }}</td>-->
          <!--                <td>{{ packages[value.id].realPrice }}&nbsp;PLN</td>-->
          <!--                <td>{{ value.count }}</td>-->
          <!--                <td>-->
          <!--                  {{-->
          <!--                    parseFloat(-->
          <!--                      (packages[value.id].realPrice * value.count).toFixed(2)-->
          <!--                    )-->
          <!--                  }}&nbsp;PLN-->
          <!--                </td>-->
          <!--              </tr>-->
          <!--            </tbody>-->
          <!--          </table>-->
          <div class="summary__basket__total">
            <b>łącznie: {{ totalPrice }}&nbsp;PLN</b>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Package from "@/components/layout/Package";
export default {
  name: "JoinUs",
  components: { Package },
  data() {
    return {
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
      totalPrice: null
    };
  },
  watch: {
    basket: function() {
      console.log("XDD");
    }
  },
  methods: {
    addToBasket(packages) {
      this.basket[packages.id] = packages;
    },
    clearItemFromBasket(id) {
      delete this.basket[id];
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
    &__basket {
      &__table {
        &__item {
          &__info {
            position: relative;
            padding-left: 40px;
          }

          &__additional {
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
            font-weight: 700;
            font-size: 16px;
            margin: 0.5em 0;
          }
          &__count {
            input {
              width: 25px;
            }
          }
          &__price,
          &__total,
          &__count {
            width: 100%;
            display: flex;
            justify-content: space-between;
            &::before {
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
