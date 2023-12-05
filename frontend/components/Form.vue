<template>
  <form @submit.prevent="handleSubmit">
    <slot :errors="errors"></slot>
  </form>
</template>

<script lang="ts" setup>
const emits = defineEmits<{
  (e: 'submit'): any,
}>();

const errors = ref<{
  [key: string]: string;
}>({});

async function handleSubmit() {
  try {
    emits('submit');
  } catch (e: any) {
    console.log(e);
    errors.value = e;
  }
}
</script>