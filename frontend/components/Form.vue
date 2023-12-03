<template>
  <form @submit.prevent="handleSubmit" ref="el">
    <slot></slot>
  </form>
</template>

<script lang="ts" setup>
const el = ref<HTMLFormElement>();
const emits = defineEmits<{
  submit: [],
}>();

function handleSubmit() {
  console.log(el.value);
  emits('submit');
}
</script>