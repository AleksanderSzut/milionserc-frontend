<template>
  <div id="app">
    <header
      class="header header__container"
      :class="{ header__container__scrolled: isScrolled }"
    >
      <img
        alt="Milionserc"
        src="../../assets/logo.svg"
        class="header header__logo"
      />
      <div class="header header__nav" :class="{ isOpen: isOpen }">
        <div
          class="header__burgerButton"
          @click="closeNav()"
          :class="{ isOpen: isOpen }"
        ></div>
        <nav class="header header__navLinks">
          <router-link to="/" @click="closeNav()" tag="a">Home</router-link>
          <router-link to="/jak-to-dziala" @click="closeNav()" tag="a"
            >Jak to działa?</router-link
          >
          <router-link to="/pakiety" @click="closeNav()" tag="a"
            >Pakiety</router-link
          >
          <router-link to="/ksiega" @click="closeNav()" tag="a"
            >Księga</router-link
          >
          <router-link to="/certyfikat" @click="closeNav()" tag="a"
            >Certyfikat</router-link
          >
          <router-link to="/regulamin" @click="closeNav()" tag="a"
            >Regulamin</router-link
          >
          <router-link to="/kontakt" @click="closeNav()" tag="a"
            >Kontakt</router-link
          >
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isScrolled: false,
      isOpen: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    closeNav() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/_variables";
.header {
  z-index: 100;
  &__container {
    position: fixed;
    height: 100px;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    box-sizing: border-box;
    align-items: center;
    transition: height ease-out 0.5s, background-color ease-out 0.5s;
    &__scrolled {
      height: 60px;
      background-color: rgba(50, 50, 50, 0.8);
    }
  }
  &__logo {
    height: 100%;
    max-width: 150px;
    transition: max-width ease-out 0.5s, height ease-out 0.5s;
  }
  &.isOpen > &__navLinks {
    right: 0;
  }
  &__navLinks {
    @media (max-width: $breakpoint-xl) {
      right: -100%;
      top: 0;
      position: absolute;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.8);
      transition: all ease-out 0.5s;
    }
    @media (min-width: $breakpoint-xl) {
      font-size: 13px;
    }
    a {
      $margin: 20px;
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-decoration: inherit;
      color: inherit;
      transition: color ease-out 0.3s;
      padding: 4px 0;
      &:hover,
      &.router-link-exact-active {
        color: $colorGold;
      }
      @media (min-width: $breakpoint-xl) {
        padding: $margin;
        position: relative;
        &:not(:first-child) {
          &:after {
            content: "";
            width: 3px;
            height: 3px;
            background-color: white;
            border-radius: 10px;
            position: absolute;
            display: block;
            top: calc(50% - 1px);
            left: -1.5px;
          }
        }
      }
    }
  }
  &__nav {
    display: flex;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    white-space: nowrap;
  }
  &__burgerButton {
    @media (min-width: $breakpoint-xl) {
      display: none;
    }
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 150;
    &::after,
    &::before {
      content: "";
      display: block;
      width: 90%;
      left: 5%;
      height: 4px;
      position: absolute;
      background-color: white;
      border-radius: 5px;
      transition: transform ease-out 0.5s, top ease-out 0.5s,
        box-shadow ease-out 0.2s;
    }
    &::after {
      top: 11px;
    }
    &::before {
      top: 23px;
      box-shadow: 0 12px 0 0 white;
    }
    &.isOpen::after,
    &.isActive::before {
      top: calc(50% - 1.5px);
    }
    &.isOpen::after {
      transform: rotate(-45deg);
    }
    &.isOpen::before {
      transform: rotate(45deg);
      box-shadow: 0 12px 0 0 transparent;
    }
  }
}
</style>
