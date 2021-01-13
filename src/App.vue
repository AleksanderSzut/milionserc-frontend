<template>
  {{}}
  <div
    :class="{
      'hide-navigation': $route.meta.hideNavigation,
      'one-page': $route.meta.onePage,
      'background-color-black': $route.meta.backgroundColorBlack
    }"
    id="main-app"
    v-if="this.$route.params.code === `IdaIdaMilionserc98` || permActive"
  >
    <main-header v-if="!$route.meta.hideNavigation" />
    <router-view v-slot="slotProps">
      <transition name="fade" appear mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <main-footer :hideNavigation="$route.meta.hideNavigation" />
  </div>
</template>

<script>
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
export default {
  data: () => {
    return {
      permActive: false
    };
  },
  updated() {
    if (this.$route.params.code === `IdaIdaMilionserc98`) {
      window.localStorage.setItem("active", "true");
      this.permActive = true;
      this.$router.push("/");
    }
    console.log(window.localStorage.getItem("active"));
    if (window.localStorage.getItem("active") === "true") {
      this.permActive = true;
    }
  },
  components: { MainFooter, MainHeader }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out, filter ease 0.5s;
  filter: blur(0px);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(10px);
}
#main-app {
  padding-top: 80px;
  min-height: 100vh;

  &.hide-navigation {
    padding-top: 0;
  }
  &.background-color-black {
    background-color: black;
  }
  &.one-page {
    display: grid;
    grid-template-rows: auto min-content;
  }
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
