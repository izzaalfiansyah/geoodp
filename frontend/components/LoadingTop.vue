<template>
  <div class="fixed top-0 left-0 right-0 -mx-3">
    <div class="p-.45 bg-yellow rounded ease-in" :style="{
      width: progress + '%',
      transition: '.5s',
    }"></div>
  </div>
</template>

<script lang="ts" setup>
const progress = ref<number>(23);

onMounted(() => {
  setTimeout(() => {
    progress.value = 100;
  }, 1500);
});
</script>