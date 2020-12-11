<template>
  <main class="book-main">
    <section class="main-section main-section--book">
      <div class="main-section--book__info">
        <div class="main-section--book__info__desk">
          <h2>Księga miliona serc</h2>
          <p>
            <b>
              Powstaje po to, aby twoje wyznanie ocalało od zapomnienia, Wyraź w
              niej najskrytsze myśli i pragnienia, opisz najpiekniejsze w życiu
              chwilę
            </b>
          </p>
          <p>
            Każde słowo wyrażone w tej Księdze na zawsze zostanie w pamięci
            najbliższych i najważniejszych w Twoim życiu ludzi. Zupełnie tak,
            jakbyś podzielił się z kimś swoim sercem.
          </p>
        </div>
        <div class="main-section--book__info__img">
          <img
            src="@/assets/images/3_1.jpg"
            alt="Otwarta Księga Miliona Serc"
          />
        </div>
      </div>
      <div class="main-section--book__plans">
        <div class="main-section--book__plans__item">
          <img src="@/assets/icons/logos/guinness.png" alt="Rekord guinnesa" />
          <p>
            Planujemy, by Księga wypełniła sie milionem najpiękniejszych i
            płynących prosto z głębi uczuć. Jeśli tak się stanie,
            <strong>zgłosimy ją do Księgi Rekordów Guinessa</strong> i
            zaprezentujemy w największych miastach w Polsce.
          </p>
        </div>
        <div class="main-section--book__plans__item">
          <img src="@/assets/icons/ik_7.svg" alt="Rekord guinnesa" />
          <p>
            Planujemy, by Księga wypełniła sie milionem najpiękniejszych i
            płynących prosto z głębi uczuć. Jeśli tak się stanie,
            <strong>zgłosimy ją do Księgi Rekordów Guinessa</strong> i
            zaprezentujemy w największych miastach w Polsce.
          </p>
        </div>
      </div>
    </section>
    <section
      class="main-section main-section--no-line main-section--confessions"
    >
      <h3>Wpisy dodane do księgi miliona serc</h3>
      <ConfessionsGrid />
    </section>
  </main>
</template>

<script>
import ConfessionsGrid from "@/components/layout/ConfessionsGrid";
export default {
  name: "Book",
  components: { ConfessionsGrid }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables";
@import "../styles/_mixins";
@import "../styles/components/linedList";

img {
  max-width: 100%;
}
.book-main {
  display: grid;
  @include wrapper;
  margin: 0 auto;
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-size: 1.4em;
  }
  align-content: center;
  justify-content: center;
  justify-items: center;
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
  width: 100%;
  box-sizing: border-box;

  &--confessions {
    width: 100%;
  }

  &--book {
    &__info {
      padding: 32px 24px;
      box-sizing: border-box;
      display: grid;
      width: 100%;
      @media (min-width: $breakpoint-md) {
        grid-template-columns: auto auto;
        column-gap: 24px;
      }

      &__desk {
        text-align: left;
        h2 {
          font-weight: 500;
        }
        b {
          font-weight: 500;
        }
      }
      &__img {
        margin: 0 auto;
        @media (min-width: $breakpoint-md) {
          margin: 0;
        }
        max-width: 400px;
      }
    }

    &__plans {
      @media (min-width: $breakpoint-md) {
        display: flex;
      }
      &__item {
        display: flex;
        text-align: left;
        line-height: 140%;
        p {
          margin-top: 0;
        }
        img {
          margin-right: 12px;
          height: 80px;
        }
      }
    }
  }
}
</style>
