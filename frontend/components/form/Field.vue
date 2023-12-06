<template>
  <div class="mb-3">
    <div class="mb-1">
      {{ label }}
      <template v-if="required">
        <span class="text-red-500">*</span>
      </template>
    </div>
    <label class="block">
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts" setup>

withDefaults(defineProps<{
  label?: string;
  required?: boolean;
}>(), {
  required: false,
});
</script>