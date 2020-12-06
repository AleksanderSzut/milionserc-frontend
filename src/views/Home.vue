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
        potraktować w wyjątkowy sposób
      </p>
    </section>
    <section></section>
    <section></section>
    <section></section>
  </main>
</template>

<script>
import SimpleParallax from "@/components/effects/Parallax";
export default {
  name: "Home",
  components: { SimpleParallax }
};
</script>

<style lang="scss">
@import "../styles/_variables";
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
    font-weight: 400;
    text-transform: uppercase;
  }
  b {
    font-weight: 500;
  }
  &:not(:first-child) {
    margin: 40px auto 0 auto;
    &:after {
      content: "";
      display: block;
      height: 80px;
      width: 2px;
      margin: 40px auto 0 auto;
      background-color: $darkGray;
    }
  }
}
.home-section--reasons {
  .lined-list {
    margin-bottom: 32px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .text-col {
      max-width: 550px;
    }
    img {
      max-width: 400px;
    }
  }
}
.home-section--book {
  .quotes-image-row {
    &__figure {
      position: relative;
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
    max-width: 90%;
    line-height: 180%;
    font-weight: 300;
  }
}
</style>
