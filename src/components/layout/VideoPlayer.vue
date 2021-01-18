<template>
  <div class="video-player">
    <video
      :src="url"
      class="video-player__video"
      :class="{ outside: outside }"
      id="videoElement"
      @canplay="updatePaused"
      @playing="updatePaused"
      @pause="updatePaused"
    />
    <div class="video-player__controls" :class="{ outside: outside }">
      <div
        class="video-player__controls__start"
        :class="{ paused: paused }"
        @click="toggle"
      >
        <div class="shape"></div>
      </div>
      <div
        class="video-player__controls__enlarge"
        :class="{ paused: paused }"
        @click="enlargeThis"
        v-if="enlarge"
      >
        <div class="shape"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  data: () => {
    return {
      videoElement: null,
      paused: null
    };
  },
  emits: ["enlarge"],
  props: {
    url: {
      type: String,
      required: true
    },
    enlarge: {
      type: Boolean,
      default: false
    },
    outside: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    enlargeThis() {
      this.$emit("enlarge", this.url);
      this.pause();
    },
    updatePaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },
    toggle() {
      if (this.paused) this.play();
      else this.pause();
    },
    play() {
      this.videoElement.play();
    },
    pause() {
      this.videoElement.pause();
    }
  }
};
</script>

<style lang="scss" scoped>
$clip-play: polygon(
  0 0,
  0 0,
  0 0,
  0 0,
  0 0,
  100% 50%,
  100% 50%,
  0 100%,
  0 100%,
  0 100%,
  0 100%,
  0% 100%
);

$clip-square: polygon(
  0 0,
  33% 0,
  33% 0,
  66% 0,
  66% 0,
  100% 0,
  100% 100%,
  66% 100%,
  66% 100%,
  33% 100%,
  33% 100%,
  0% 100%
);

$clip-pause: polygon(
  0 0,
  33% 0,
  33% 50%,
  66% 50%,
  66% 0,
  100% 0%,
  100% 100%,
  66% 100%,
  66% 50%,
  33% 50%,
  33% 100%,
  0% 100%
);

.video-player {
  position: relative;

  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &.outside {
      max-width: 90vw;
      max-height: 80vh;
    }
  }

  &__controls {
    $root: &;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    &.outside {
      z-index: 500;
    }
    &:hover {
      #{$root}__start {
        background-color: rgba(0, 0, 0, 0.4);
        &:not(.paused) {
          .shape {
            background-color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
    &__enlarge {
      position: absolute;
      bottom: 10%;
      right: 10%;
      width: 30px;
      height: 30px;
      border-radius: 40px;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      .shape {
        width: 45%;
        height: 45%;
        transition: all ease 0.7s;
        position: relative;
        &:hover {
          width: 60%;
          height: 60%;
        }
        &::after {
          content: "";
          display: block;
          clip-path: polygon(80% 80%, 80% 0, 100% 0, 100% 100%, 0 100%, 0 80%);
          background-color: white;
          width: 10px;
          height: 10px;
          position: absolute;
          right: 0;
          bottom: 0;
        }
        &::before {
          content: "";
          display: block;
          clip-path: polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%);
          background-color: white;
          width: 10px;
          height: 10px;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
    &__start {
      position: absolute;
      left: calc(50% - 15px);
      top: calc(50% - 15px);
      z-index: 20;
      border-radius: 40px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      transition: background-color ease 0.7s;
      .shape {
        margin-left: 7px;
        width: 50%;
        height: 50%;
        background-color: rgba(255, 255, 255, 0);
        clip-path: $clip-pause;
        transition: all ease 0.7s;
      }
      &.paused {
        background-color: rgba(0, 0, 0, 0.4);
        .shape {
          margin-left: 9px;
          width: 50%;
          height: 50%;
          background-color: rgba(255, 255, 255, 1);
          clip-path: $clip-play;
        }
      }

      &:hover {
        .shape {
          background-color: rgba(255, 255, 255, 1);
        }
      }
    }

    &__mute {
      position: absolute;
      right: 10%;
      top: 10%;
      width: 30px;
      background-color: rgba(255, 255, 255, 0.4);
      height: 30px;
    }
  }
}
</style>
