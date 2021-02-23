<template>
  <main class="contact-main">
    <section class="contact-main__section contact-main__section--contact">
      <article>
        <h1>Kontakt</h1>
        <p>
          Jeśli maasz jakieś pytania, coś jest niejasne, masz kłopoty
          techniczne, skontaktuj się z Biurem Obsługi Klienta. Na wszystkie
          zgłoszenia odpowiadamy błyskawicznie.
        </p>
      </article>
      <article>
        <h2>Pytania i odpowiedzi</h2>
        <p>
          Polecamy również zapoznać się z naszym działem, gdzie odpowiadamy na
          najczęstsze pytania.
        </p>
        <golden-button>Czytaj więcej</golden-button>
      </article>
      <section class="contact-form">
        <input type="text" placeholder="Imię (Pole wymagane)" />
        <input type="email" placeholder="Adres e-mail" />
        <textarea></textarea>
        <label>
          <input type="checkbox" />
          <p>
            Zapoznałem się z
            <router-link to="polityka-prywatnosci">
              Polityka prywatności
            </router-link>
            oraz <router-link to="regulamin">regulaminem</router-link> i wyrażam
            zgodę na przetwarzanie danych osobowych
          </p>
        </label>
      </section>
    </section>
    <section class="contact-main__section contact-main__section--no-lined">
      <article>
        <h3>Po pierwsze jakość</h3>
        <img src="" />
        <p>
          Elektroniczna wersja Księgi Miliona Serc jest bardzo intuicyjna.
          Stworzyliśmy ją, łącząc najpopularniejsze rozwiązania w spójną całość.
          Dlatego bez problemu samodzielnie dodasz życzenia, prześlesz zdjęcie,
          wyślesz film. W razie kłopotów, skontaktuj się z Biurem Obsługi
        </p>
      </article>
    </section>
  </main>
</template>

<script>
import GoldenButton from "@/components/layout/GoldenButton";
export default {
  name: "Contact",
  components: { GoldenButton }
};
</script>

<style lang="scss" scoped></style>
