<template>
  <main class="home-main">
    <section class="home-section home-section--header">
      <h3>
        CZASAMI NASZA WDZIĘCZNOŚĆ, MIŁOŚĆ i TĘSKNOTA <br />są tak wielkie że nie
        sposób je wyrazić słowami.
      </h3>
      <simple-parallax
        parallax-src="parallax-home.mp4"
        type="2"
        orientation="down"
        scale="1.25"
        delay=".5"
        item-height="80"
      />
    </section>
    <section class="home-section home-section--reasons">
      <div class="row">
        <div class="text-col">
          <ul class="lined-list">
            <li>
              Są sytuacje, kiedy proste dziękuje, <br />
              kocham, tęsknie nie wystarcza
            </li>
            <li>
              Kiedy czujesz, że osoba którą chcesz obdarować tym słowem
              załsuguje na więcej...
            </li>
          </ul>
          <p>
            <b>
              To znaczy że chcesz powiedzieć światu, że ten człowiek jest kimś
              wyjątkowym i zasługuje na szczególne uznanie.
            </b>
          </p>
        </div>
        <div class="img-col">
          <img src="@/assets/images/1_1.jpg" />
        </div>
      </div>
    </section>
    <section class="home-section home-section--book">
      <h2>Księga miliona serc</h2>
      <p>
        <b>
          Doskonale to rozumiemy, bo tworząc projekt "Milion serc" mieliśmy
          wielką potrzebę wyrażania tych wszystkich uczuć, które zasługują na
          specjalną oprawę.
        </b>
      </p>
      <p>
        Chcieliśmy, by wszystkie ważne słowa trwały dłużej niż ułamki sekund,
        kiedy, są wypowiadane i by został po nich trwały, niezapomniany ślad.
        Dlatego postanowiliśmy stworzyć Księgę Miliona Serc, w której umieścimy
        najpiekniejsze i płynące z głebi serca uczucia radości, wdzięczności,
        miłości czy tęsknoty.
      </p>
      <div class="quotes-image-row">
        <figure class="quotes-image-row__figure">
          <img
            src="@/assets/images/1_2a.jpg"
            alt="twoje &bdquo;dziękuje&rdquo;"
          />
          <figcaption class="quotes-image-row__figcaption">
            Twoje &bdquo;dziękuje&rdquo;
          </figcaption>
        </figure>
        <figure class="quotes-image-row__figure">
          <img src="@/assets/images/1_2b.jpg" alt="&bdquo;Kocham&rdquo;" />
          <figcaption class="quotes-image-row__figcaption">
            &bdquo;Kocham&rdquo;
          </figcaption>
        </figure>
        <figure class="quotes-image-row__figure">
          <img
            src="@/assets/images/1_2c.jpg"
            alt="&bdquo;... tęskniłam &rdquo;"
          />
          <figcaption class="quotes-image-row__figcaption">
            &bdquo;... tęskniłam &rdquo;
          </figcaption>
        </figure>
      </div>

      <h4>Załugują na wieczną pamięć</h4>
      <p>
        Chcemy dać ci możliwość wyrażenia swoich uczuć w sposób nietypowy, na
        długo zapadający w pamięć osoby, którą darzysz uczuciem lub chcesz
        potraktować w wyjątkowy sposób.
      </p>
    </section>
    <section
      class="home-section home-section--self-promo home-section--no-line"
    >
      <h4>Wyraź swoje uczucia inaczej niż wszyscy!</h4>
      <p class="home-section--self-promo__text">
        Umieść jużdziś swój wpis w &bdquo; Księdze Miliona Serc &rdquo; i
        obdaruj świadectwem pamięci osobę dla Ciebie tak ważną i wyjątkową.
      </p>
      <p class="home-section--self-promo__bold">
        <b
          >Wyraź to, co czujesz inaczej niż wszyscy - niech Twoje uczucia
          zostaną uwiecznione na zawsze</b
        >
      </p>
      <router-link to="dodaj-wpis" class="home-section--self-promo__button">
        <golden-button>Dodaj bezpłatny wpis</golden-button>
      </router-link>
      <img src="@/assets/images/1_3.jpg" alt="zaświadczenie wiz" />
    </section>
    <!--    <section class="home-section home-section&#45;&#45;posts">-->
    <!--      <h4>Wybrane wpisy księgi miliona serc</h4>-->
    <!--    </section>-->
    <!--    <section></section>-->
  </main>
</template>

<script>
import SimpleParallax from "@/components/effects/Parallax";
import GoldenButton from "@/components/layout/GoldenButton";
export default {
  name: "Home",
  components: { GoldenButton, SimpleParallax }
};
</script>

<style lang="scss">
@import "../styles/__variables";
@import "../styles/__mixins";
@import "../styles/components/linedList";

img {
  max-width: 100%;
}
.home-main {
  display: grid;
}
.home-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  h2,
  h4 {
    font-family: "Gelasio", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
  }
  b {
    font-weight: 600;
  }
  &:not(:first-child):not(&--no-line) {
    &:after {
      content: "";
      display: block;
      height: 80px;
      width: 2px;
      margin: 40px auto 0 auto;
      background-color: $darkGray;
    }
  }
  &:not(:first-child) {
    @include wrapper;
    margin: 40px auto 0 auto;
  }
}
.home-section--reasons {
  .lined-list {
    margin-bottom: 32px;
  }
  .row {
    display: grid;
    max-width: 100%;
    justify-content: center;
    flex-direction: column;
    column-gap: 24px;
    row-gap: 24px;
    @media (min-width: $breakpoint-md) {
      grid-template-columns: 2fr 1fr;
      text-align: left;
    }
    img {
      min-width: 300px;
      max-width: 100%;
    }
  }
}
.home-section--book {
  h2 {
    margin-top: 0.3em;
  }
  h4 {
    font-size: 1.5em;
    margin-bottom: 0;
    margin-top: 40px;
  }
  .quotes-image-row {
    display: grid;
    column-gap: 12px;
    row-gap: 20px;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(3, 1fr);
    }

    &__figure {
      position: relative;
      margin: 0 0;
    }
    &__figcaption {
      background-color: white;
      position: absolute;
      width: 80%;
      font-weight: 450;
      font-family: "Gelasio", sans-serif;
      font-size: 1.2em;
      line-height: 2em;
      left: 10%;
      bottom: 12px;
    }
  }
}
.home-section--header {
  color: white;
  font-family: "Gelasio", sans-serif;
  display: flex;
  &::after {
    content: "";
    width: 100%;
    height: 8px;
    position: absolute;
    bottom: 0;
    z-index: 20;
    background: rgb(194, 136, 49);
    background: $goldenGradient;
  }
  justify-content: center;
  align-items: center;
  height: 70vh;
  .parallax__container {
    filter: brightness(40%);
  }
  position: relative;
  h3 {
    @include wrapper;
    max-width: 90%;
    line-height: 180%;
    letter-spacing: 3px;
    @media (min-width: $breakpoint-sm) {
      font-size: 1.5em;
    }
    font-weight: 300;
  }
}

.home-section--self-promo {
  border: 10px solid $lightGray;
  padding: 30px;
  display: grid;
  justify-items: flex-start;
  text-align: left;
  grid-template-areas: "header" "text" "bold" "button" "image";
  @media (min-width: $breakpoint-md) {
    grid-template-columns: auto minmax(200px, 530px);
    grid-template-areas: "header header" "text image" "bold image" "button image";
  }
  h4 {
    grid-area: header;
    margin-top: 12px;
    font-size: 1.5em;
    text-align: left;
  }
  p {
    margin: 6px 0;
  }
  &__text {
    grid-area: text;
  }
  &__bold {
    grid-area: bold;
  }
  img {
    grid-area: image;
    max-width: 450px;
    margin: 20px auto 0 auto;
    @media (min-width: $breakpoint-md) {
      margin: 0;
    }
    width: 100%;
  }
}
</style>
