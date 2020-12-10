<template>
  <header
    class="main-header"
    :class="{ header__container__scrolled: isScrolled }"
  >
    <router-link to="/" tag="a" class="main-header__logo">
      <img
        alt="Milionserc"
        src="../../assets/logo.svg"
        class="main-header__logo"
      />
    </router-link>
    <div class="main-header__nav" :class="{ isOpen: isOpen }">
      <div
        class="main-header__burger-button"
        @click="toggleNav()"
        :class="{ isOpen: isOpen }"
      ></div>
      <nav class="main-header__nav-links">
        <router-link to="/" tag="a">
          <span @click="closeNav()"> Strona główna</span>
        </router-link>
        <router-link to="jak-to-dziala" tag="a">
          <span @click="closeNav()"> Jak to działa?</span>
        </router-link>
        <router-link to="/ksiega-miliona-serc" tag="a">
          <span @click="closeNav()"> Księga miliona serc</span>
        </router-link>
        <router-link to="/ksiega" tag="a">
          <span @click="closeNav()"> Dołącz do nas</span>
        </router-link>
        <router-link to="/kontakt" tag="a">
          <span @click="closeNav()"> Kontakt</span>
        </router-link>
        <a href="https://fb.com/" class="main-header__icons">
          <img src="../../assets/icons/logos/001-facebook.svg" />
        </a>
        <a href="https://yt.com" class="main-header__icons">
          <img src="../../assets/icons/logos/002-youtube.svg" />
        </a>
      </nav>
    </div>
  </header>
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
    toggleNav() {
      this.isOpen = !this.isOpen;
    },
    closeNav() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/_variables";

a {
  color: inherit;
  text-decoration: inherit;
  &:hover,
  &.router-link-exact-active {
    color: $colorGold;
  }
}

.main-header {
  $this: &;
  z-index: 100;

  height: 80px;
  background-color: black;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  color: white;

  @media (min-width: $breakpoint-lg) {
    &:before,
    &:after {
      content: "";
      display: block;
    }
  }

  &__icons {
    display: flex;
    align-items: center;
    img {
      height: 1.3rem;
    }
  }

  &__nav {
    display: flex;
    font-weight: 700;
    text-transform: uppercase;
    white-space: nowrap;

    &.isOpen > #{$this}__nav-links {
      right: 0;
    }
    a {
      margin: 0 10px;
    }
  }
  &__nav-links {
    @media (max-width: $breakpoint-lg) {
      right: -100%;
      top: 0;
      position: absolute;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.8);
      transition: all ease-out 0.5s;

      font-size: 20px;
      a {
        padding: 10px 0;
      }
    }
    a {
      transition: color ease-out 0.3s;
    }

    @media (min-width: $breakpoint-lg) {
      a {
        &:first-child {
          display: none;
        }
      }
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-content: center;
      justify-items: center;
      align-items: center;
    }
  }

  &__logo {
    height: 100%;
    max-width: 150px;
    transition: max-width ease-out 0.5s, height ease-out 0.5s;
  }

  &__burger-button {
    @media (min-width: $breakpoint-lg) {
      display: none;
    }
    width: 40px;
    height: 30px;
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
      top: 26px;
    }
    &::before {
      top: 0;
      box-shadow: 0 13px 0 0 white;
    }
    &.isOpen::after,
    &.isOpen::before {
      top: calc(50% - 2px);
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
