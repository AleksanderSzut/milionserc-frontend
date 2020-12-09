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
  </main>
</template>

<script>
export default {
  name: "HowThisWork"
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
  align-content: center;
  justify-content: center;
  justify-items: center;
  h2,
  h3,
  h4 {
    font-family: "Gelasio", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
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
  @include wrapper;
  margin: 40px auto 0 auto;

  &--info__instruction-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 12px;
    h3 {
      grid-column: 1 / -1;
      font-weight: 600;
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
}

.main-section--info {
  @include wrapper;
}
.main-section--bordered {
  border: 10px solid $lightGray;
  padding: 30px;
}
</style>
