<script setup>
import Titlebar from "./titlebar/Titlebar.vue";
</script>

<template>
  <Titlebar />
  <div class="viewport"></div>
</template>

<style scoped>
.viewport {
  width: 100wv;
  height: calc(100vh - 30px);
}
</style>
