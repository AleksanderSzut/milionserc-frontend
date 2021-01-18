<template>
  <main class="thanks-for-payment">
    <h2>Dziękujemy za płatność</h2>
    <p>na maila dostaniesz link do stworzenia wyznania</p>
  </main>
</template>

<script>
export default {
  name: "ThanksForPayment"
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables";
@import "../styles/_mixins";
@import "../styles/components/linedList";
.thanks-for-payment {
  display: grid;
  align-content: center;
  border: 10px solid #ebebeb;
  padding: 20px;
  @include wrapper;
  margin: 40px auto 0 auto;
  p {
    font-size: 18px;
    margin: 0 auto;
    max-width: 300px;
  }
  h2 {
    margin-bottom: 12px;
    font-family: "Gelasio", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>
