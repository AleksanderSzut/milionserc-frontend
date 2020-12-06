<template>
  <footer class="main-footer">
    <nav class="main-footer__nav">
      <router-link class="main-footer__nav__item" to="/pytania-i-odpowiedzi">
        Pytania i odpowiedzi
      </router-link>
      <router-link class="main-footer__nav__item" to="/regulamin">
        Regulamin
      </router-link>
      <router-link class="main-footer__nav__item" to="/polityka-prywatnosci">
        Polityka prywatności
      </router-link>
    </nav>
    <div class="main-footer__footer">
      2020 &copy;
      <a href="https://milionserc.pl">Milionserc.pl</a>
      All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter"
};
</script>

<style lang="scss" scoped>
@import "../../styles/__variables";
@import "../../styles/__mixins";

.main-footer {
  background-color: black;
  width: 100%;
  color: white;
  padding: 20px 0;
  margin-top: 60px;
  line-height: 50px;
  &__nav {
    @include wrapper();
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid $colorGold;
    &__item {
      padding: 0 8px;
      position: relative;
      &:not(:last-child) {
        &:after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -1px;
          height: 14px;
          width: 1px;
          background-color: white;
          display: block;
          margin: 0 8px;
        }
      }
    }
  }
  &__footer {
    a {
      color: $colorGold;
      text-decoration: underline;
    }
  }
}
</style>
