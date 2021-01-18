<template>
  <div class="lds-ring" :style="loaderStyle(size)" :class="color">
    <div
      :style="divStyle(size)"
      class="lds-ring__border"
      v-for="n in 4"
      :key="n"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  methods: {
    loaderStyle: sizeScale => {
      return {
        width: `${sizeScale * 1}px`,
        height: `${sizeScale * 1}px`
      };
    },
    divStyle: size => {
      return {
        width: `${size * 0.8}px`,
        height: `${size * 0.8}px`,
        margin: `${size * 0.1}px`,
        borderWidth: `${size * 0.1}px`
      };
    }
  },
  props: {
    color: {
      type: String,
      required: true,
      default: "black"
    },
    size: {
      type: Number,
      required: false,
      default: 40
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/__variables";
@import "../../styles/__mixins";
.lds-ring {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  &.black &__border {
    border-color: #000 transparent transparent transparent;
  }
  &.white &__border {
    border-color: #fff transparent transparent transparent;
  }
  &.gold &__border {
    border-color: $colorGold transparent transparent transparent;
  }

  &__border {
    box-sizing: border-box;
    display: block;
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
