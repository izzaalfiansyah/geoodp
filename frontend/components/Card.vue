<template>
  <div class="bg-white rounded-lg shadow p-5 max-w-full">
    <template v-if="title">
      <div class="mb-4 text-base font-semibold">{{ title }}</div>
    </template>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>