<template>
  <footer class="main-footer">
    <div class="main-footer__logo" v-if="hideNavigation">
      <router-link to="/" tag="a" class="main-header__logo">
        <img alt="Milionserc" src="../../assets/logo.svg" />
      </router-link>
    </div>
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
  name: "MainFooter",
  props: {
    hideNavigation: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/__variables";
@import "../../styles/__mixins";

.main-footer {
  background-color: black;
  z-index: 5;
  width: 100%;
  color: white;
  padding: 20px 0;
  margin-top: 60px;
  line-height: 50px;
  &__logo {
    height: 50px;
    img {
      height: 50px;
    }
  }
  &__nav {
    @include wrapper();
    margin: 0 auto;
    border-bottom: 1px solid $colorGold;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 30px;
    padding: 12px 0;
    @media (min-width: $breakpoint-sm) {
      line-height: 50px;
      flex-direction: row;
    }
    &__item {
      display: block;
      padding: 0 8px;
      position: relative;
      @media (min-width: $breakpoint-sm) {
        &:not(:last-child) {
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -9px;
            height: 14px;
            width: 1px;
            background-color: white;
            display: block;
            margin: 0 8px;
          }
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
