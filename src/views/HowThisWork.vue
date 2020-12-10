<template>
  <main class="how-this-work-main">
    <section class="main-section main-section--info">
      <h2>Wyraź swoje uczucia inaczej niż wszyscy</h2>
      <p>
        Jeśli chcesz podziękować w szczególny sposób... chcesz dać komuś prezent
        który zapamięta na całe życe, zależy Ci na kimś najbardziej na
        świecie..., to
      </p>
      <p>
        <b>
          uwiecznij, to co czujesz w "Księdze Miliona Serc"!
        </b>
      </p>
      <article
        class="main-section--bordered main-section--info__instruction-grid"
      >
        <h3>Zobacz Jakie to proste</h3>

        <figure class="main-section--info__instruction-grid__fig">
          <img src="@/assets/icons/ik_1.svg" alt="" />
          <figcaption>
            <b>Przypomnij sobie</b>, jak bardzo mocno kochasz, jak bardzo jesteś
            wdzięczny, jak bardzo za kimś tęsknisz.
          </figcaption>
        </figure>
        <figure class="main-section--info__instruction-grid__fig">
          <img src="@/assets/icons/ik_2.svg" alt="" />
          <figcaption>
            <b>Wybierz sposób, w jaki chcesz wyrazić swoje uczucia: </b> chcesz
            coś napisać? chcesz coś powiedzieć? chcesz przesłać którki filmik?
          </figcaption>
        </figure>
        <figure class="main-section--info__instruction-grid__fig">
          <img src="@/assets/icons/ik_3.svg" alt="" />
          <figcaption>
            Zdecyduj, się jak chcesz obdarować bliską Ci osobę, wybierając jeden
            z <a>dostępnych pakietów</a>
          </figcaption>
        </figure>
        <figure class="main-section--info__instruction-grid__fig">
          <img src="@/assets/icons/ik_4.svg" alt="" />
          <figcaption>
            <b>Postępuj, zgodnie z instrukcjami</b> a wybrane przez Ciebie osoba
            dowie się, jakimi uczuciai chcesz ją obdarować w bardzo nietypowy
            sposób.
          </figcaption>
        </figure>
        <figure class="main-section--info__instruction-grid__fig">
          <img src="@/assets/icons/ik_5.svg" alt="" />
          <figcaption>
            Obdarowana osoba dostanie od Ciebie zdjęcie, wyznanie lub nagranie
            oraz unikalne świadectwo twoich uczuć.
          </figcaption>
        </figure>
        <figure class="main-section--info__instruction-grid__fig">
          <img src="@/assets/icons/ik_6.svg" alt="" />
          <figcaption>
            Twoje wyznanie zostanie opubilowane w Księdze Miliona Serc w wybrany
            przez Ciebie sposób.
          </figcaption>
        </figure>
      </article>
    </section>
    <section class="main-section main-section--package">
      <h4>Pakiety</h4>
      <nav class="package__nav">
        <div
          class="package__nav__item"
          :class="{ currentPackage: currentPackage === 1 }"
          @click.prevent="currentPackage = 1"
        >
          Pakiet serduszko
        </div>
        <div
          class="package__nav__item"
          :class="{ currentPackage: currentPackage === 2 }"
          @click.prevent="currentPackage = 2"
        >
          Pakiet wielkie serce
        </div>
        <div
          class="package__nav__item"
          :class="{ currentPackage: currentPackage === 3 }"
          @click.prevent="currentPackage = 3"
        >
          Pakiet złote serce
        </div>
        <div
          class="package__nav__item"
          :class="{ currentPackage: currentPackage === 4 }"
          @click.prevent="currentPackage = 4"
        >
          Pakiet vip
        </div>
      </nav>
      <transition name="fade" appear mode="out-in">
        <article v-if="currentPackage === 1" class="package__article">
          <div class="package__article__desc">
            <h5>Zawartość:</h5>
            <p>
              Możesz wyrazić w nim swoje uczucia wtylko w dwóch formach
              przesyłająć tekst lub rysunek czy zdjęcie.
            </p>
            <h5>Co otrzymasz:</h5>
            <p>
              Wyrażone przez Ciebie uczucia zostaną wpisane do Księgi Miliona
              Serc, która jest zgłoszona do Księgi Rekordów Guinnessa. Otrzymasz
              numerowany, imienny certyfikat, który jest oficjalnym
              potwierdzeniem wpisu. Po dodaniu wpisu dostaniesz link, dzięki
              czemu będziesz mógł obejrzeć wpis lub przesłać go dalej.
            </p>
            <h5>Cena pakietu:</h5>
            <p>
              Dodanie wpisu do Księgi Miliona Serc jest bezpłatne. Płacisz
              jedynie za koszt przesyłki certyfikatu - tylko 9,97&nbsp;PLN
            </p>
          </div>
          <div class="package__article__right-side">
            <div class="package__article__img-container">
              <img src="@/assets/images/2_1_Pakiet_1a.jpg" alt="Pakiet 1" />
            </div>
            <router-link to="">
              <golden-button class="package__article__right-side__button">
                Wybierz
              </golden-button>
            </router-link>
          </div>
        </article>
        <article v-else-if="currentPackage === 2" class="package__article">
          <div class="package__article__desc">
            <h5>test:</h5>
            <p>
              Możesz wyrazić w nim swoje uczucia wtylko w dwóch formach
              przesyłająć tekst lub rysunek czy zdjęcie.
            </p>
            <h5>Co otrzymasz:</h5>
            <p>
              Wyrażone przez Ciebie uczucia zostaną wpisane do Księgi Miliona
              Serc, która jest zgłoszona do Księgi Rekordów Guinnessa. Otrzymasz
              numerowany, imienny certyfikat, który jest oficjalnym
              potwierdzeniem wpisu. Po dodaniu wpisu dostaniesz link, dzięki
              czemu będziesz mógł obejrzeć wpis lub przesłać go dalej.
            </p>
            <h5>Cena pakietu:</h5>
            <p>
              Dodanie wpisu do Księgi Miliona Serc jest bezpłatne. Płacisz
              jedynie za koszt przesyłki certyfikatu - tylko 9,97&nbsp;PLN
            </p>
          </div>
          <div class="package__article__right-side">
            <div class="package__article__img-container">
              <img src="@/assets/images/2_1_Pakiet_1a.jpg" alt="Pakiet 1" />
            </div>
            <router-link to="">
              <golden-button class="package__article__right-side__button">
                Wybierz
              </golden-button>
            </router-link>
          </div>
        </article>
        <article v-else-if="currentPackage === 3" class="package__article">
          <div class="package__article__desc"></div>
          <div class="package__article__img"></div>
        </article>
        <article v-else class="package__article">
          <div class="package__article__desc"></div>
          <div class="package__article__img"></div>
        </article>
      </transition>
    </section>
    <section class="main-section main-section--guinness main-section--no-line">
      <h4>
        Ocal swoje uczucia od zapomnienia i&nbsp;podaruj niezapomniany prezent
      </h4>
      <article class="main-section--guinness__article">
        <div class="main-section--guinness__article__desc">
          <b>
            Dzięki Twojemu wpisowi, Księga Miliona Serc, a przy okazji uczucia,
            którymy chcesz kogoś obdarzyć zostaną uwiecznione na zawsze.
          </b>
          <div class="main-section--guinness__article__logo">
            <img
              src="@/assets/icons/logos/guinness.png"
              alt="Rekord guinnesa"
            />
            <p>
              Kiedy Księga Miliona Serc wypełni się milionem wpisów, zostanie
              wydrukowana, oprawiona i zgłodszona do Księgi Rekordów Guinnessa.
            </p>
          </div>
          <router-link to="">
            <golden-button class="main-section--guinness__article__button"
              >Zobacz wpisy</golden-button
            >
          </router-link>
        </div>
        <div class="main-section--guinness__article__img-cont">
          <img src="@/assets/images/2_2.jpg" alt="guinness" />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import GoldenButton from "@/components/layout/GoldenButton";
export default {
  name: "HowThisWork",
  components: { GoldenButton },
  data() {
    return {
      currentPackage: 1,
      panel: 1
    };
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
.how-this-work-main {
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

  &--info__instruction-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 12px;
    h3 {
      grid-column: 1 / -1;
      font-size: 1.4em;
      margin-top: 0;
    }
    @media (min-width: $breakpoint-md) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: $breakpoint-xl) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    a {
      color: black;
      text-decoration: underline;
      font-weight: 500;
    }
    img {
      width: 50%;
    }
    &__fig {
      margin: 0;
    }
  }

  &--guinness {
    h4 {
      font-weight: 600;
      max-width: 40ch;
    }
    &__article {
      text-align: left;
      display: grid;
      grid-column-gap: 32px;
      @media (min-width: $breakpoint-md) {
        grid-template-columns: auto auto;
      }
      &__img-cont {
        margin: 24px 0;

        @media (min-width: $breakpoint-md) {
          margin: 0;
        }
      }
      &__logo {
        margin: 24px 0;
        display: flex;
        align-items: center;
        line-height: 140%;
        img {
          margin-right: 12px;
          height: 80px;
        }
      }

      &__button {
        width: 100%;
        @media (min-width: $breakpoint-md) {
          width: auto;
        }
      }
      &__desc {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
    }
  }
}

.package {
  &__article {
    border: 2px solid $darkGray;
    padding: 32px 24px;
    box-sizing: border-box;
    display: grid;
    width: 100%;
    @media (min-width: $breakpoint-md) {
      grid-template-columns: auto auto;
      column-gap: 24px;
    }

    &__desc {
      text-align: left;
      max-width: 50ch;
      h5,
      p {
        margin: 0.5em;
      }
      h5 {
        &:not(:first-child) {
          margin-top: 24px;
        }
        text-transform: uppercase;
        font-family: "Gelasio", sans-serif;
        font-size: 1em;
      }
    }
    &__right-side {
      @media (min-width: $breakpoint-md) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-end;
      }
      &__button {
        margin-top: 12px;
      }
    }

    &__img-container {
      @media (min-width: $breakpoint-md) {
        max-width: 400px;
      }
      margin-top: 10px;
    }
  }
  &__nav {
    //display: flex;
    width: 100%;
    @media (min-width: $breakpoint-md) {
      display: flex;
    }
    &__item {
      @media (min-width: $breakpoint-md) {
        margin: 12px 8px 12px 0;
        &:last-child {
          margin-right: 0;
        }
      }
      width: 100%;
      flex-grow: 1;
      white-space: nowrap;
      padding: 12px 12px;
      box-sizing: border-box;
      margin: 12px 0;
      font-size: 20px;
      font-weight: 400;
      transition: background-color ease 0.5s, color ease 0.5s;
      cursor: pointer;
      &:hover {
        background-color: $darkGray;
        color: $lightGray;
      }
      &.currentPackage {
        background-color: black;
        color: white;
      }
      font-family: "Gelasio", sans-serif;
      background-color: $lightGray;
      color: black;
    }
  }
}

.main-section--bordered {
  border: 10px solid $lightGray;
  padding: 30px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
