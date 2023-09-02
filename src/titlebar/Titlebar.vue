<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const toggleImages = [new URL("./chrome-maximize.svg", import.meta.url).href, new URL("./chrome-restore.svg", import.meta.url).href];
const toggleImage = ref(toggleImages[0]);

const minimize = () => {
  window.windowTitlebar.minimize();
};

const onMaximized = () => {
  toggleImage.value = toggleImages[1];
};

const onRestored = () => {
  toggleImage.value = toggleImages[0];
};

const toggle = () => {
  window.windowTitlebar.toggle((result) => {
    if (result == "maximized") {
      onMaximized();
    } else {
      onRestored();
    }
  });
};

const close = () => {
  window.windowTitlebar.close();
};

onMounted(() => {
  window.windowTitlebar.onMaximize(() => {
    onMaximized();
  });

  window.windowTitlebar.onUnmaximize(() => {
    onRestored();
  });
});

onUnmounted(() => {
  window.windowTitlebar.removeMaximizeListener();
  window.windowTitlebar.removeUnmaximizeListener();
});
</script>

<template>
  <div class="window-title-bar">
    <div class="logo">
      <img src="./22x22.svg" />
    </div>
    <div class="title">
      <span>vue-electron-boilerplate</span>
    </div>
    <div class="btn-box">
      <div @click="minimize" class="btn"><img src="./chrome-minimize.svg" /></div>
      <div @click="toggle" class="btn"><img :src="toggleImage" /></div>
      <div @click="close" class="btn btn-close"><img src="./chrome-close.svg" /></div>
    </div>
  </div>
</template>

<style scoped>
.window-title-bar {
  width: 100%;
  height: 30px;
  background: #242424;
  user-select: none;
  -webkit-app-region: drag;

  .logo {
    float: left;
    padding-top: 4px;
    padding-left: 4px;
  }

  .title {
    float: left;
    padding-top: 7px;
    padding-left: 6px;
    font-size: 12px;
    color: #fff;
  }

  .btn-box {
    float: right;
    height: calc(100% - 5px);
    .btn {
      width: 45px;
      height: 100%;
      text-align: center;
      display: inline-block;
      padding-top: 5px;
      -webkit-app-region: no-drag;

      & > img {
        filter: brightness(0) invert(90%);
      }

      &:hover {
        background-color: #373737;
        transition: background-color 0.3s ease;
      }

      &.btn-close:hover {
        background-color: #e81123;
        transition: background-color 0.3s ease;
      }
    }
  }
}
</style>
