<template>
  <div class="fixed top-0 left-0 right-0 -mx-3 z-1000">
    <div class="p-.4 bg-primary shadow rounded ease-in" :style="{
      width: progress + '%',
      transition: transition + 's',
      opacity: opacity,
    }"></div>
  </div>
  <div v-if="opacity == 1" class="fixed top-0 left-0 right-0 bottom-0 z-1000 cursor-wait">
  </div>
  <slot></slot>
</template>

<style></style>

<script lang="ts" setup>
const progress = ref<number>(0);
const opacity = ref<number>(0);
const transition = ref<number>(.5);

export interface Loading {
  start: () => void;
  finish: () => void;
}

const second = 1000;

provide('loading', {
  start: () => {
    transition.value = 0;
    progress.value = 0;
    setTimeout(() => {
      transition.value = .5;
      opacity.value = 1;
      progress.value = 20;
    }, 100);
  },
  finish: () => {
    progress.value = 100;
    setTimeout(() => {
      opacity.value = 0;
    }, 500);
  }
});
</script>