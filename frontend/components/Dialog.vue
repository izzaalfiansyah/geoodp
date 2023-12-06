<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 p-5 z-2000 flex items-center justify-center"
    :class="{ '!hidden': !modelValue }">
    <div class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25" @click="$emit('update:modelValue', false)">
    </div>
    <div class="max-w-full scale-0 delay-1000 transition" :class="{ '!scale-100': modelValue }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();
</script>