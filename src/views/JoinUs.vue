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
    <section class="main-section main-section--chose-packages">
      <h3>
        Wybierz jeden z dostępnych pakietów i wyraź swoje uczucia inaczej niż
        wszyscy.
      </h3>
      <div class="main-section--chose-packages__wrapper">
        <Package
          header="Pakiet serduszko"
          :content="[
            'Wpis wyrażający uczucia w Księdze Miliona Serc',
            'Imienny certyfikat',
            'Wpis w formie kartki wydrukowanej oraz online'
          ]"
          price="0"
          additional-price-info="+ koszty wysyłki: 9,97 PLN"
        />
        <Package
          header="Pakiet wielkie serce"
          :content="[
            'Wpis wyrażający uczucia w Księdze Miliona Serc',
            'Imienny certyfikat',
            'Wpis w formie kartki wydrukowanej oraz online',
            'Srebrny naszyjnik z zawieszką'
          ]"
          price="0"
          additional-price-info="+ koszty wysyłki: 0,00 PLN"
        />
        <Package
          header="Pakiet złote serce"
          :content="[
            'Wpis wyrażający uczucia w Księdze Miliona Serc',
            'Imienny certyfikat',
            'Wpis w formie kartki wydrukowanej oraz online',
            'Pakiet biżuterii dla kobiet lub mężczyzn'
          ]"
          price="0"
          additional-price-info="+ koszty wysyłki: 9,97"
        />
        <Package
          header="Pakiet vip"
          :content="[
            'Wpis wyrażający uczucia w Księdze Miliona Serc',
            'Imienny certyfikat',
            'Wpis w formie kartki wydrukowanej oraz online',
            'Pakiet biżuterii dla kobiet lub mężczyzn',
            'Wizyta niezwykłego 3m Misia Pandy'
          ]"
          price="5500"
          additional-price-info="brak dodatkowych kosztów"
        />
      </div>
    </section>
  </main>
</template>

<script>
import Package from "@/components/layout/Package";
export default {
  name: "JoinUs",
  components: { Package }
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
}
</style>
