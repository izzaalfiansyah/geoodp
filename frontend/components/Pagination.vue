<template>
  <div class="flex items-center space-x-2">
    <button
      class="bg-transparent border-transparent w-auto h-auto text-gray-500 disabled:text-gray-300 hover:text-primary cursor-pointer transition"
      @click="$emit('update:modelValue', 1)">
      <Icon class="w-3 h-3" type="chevron-double-left"></Icon>
    </button>
    <button
      class="bg-transparent border-transparent w-auto h-auto text-gray-500 disabled:text-gray-300 hover:text-primary cursor-pointer transition"
      @click="$emit('update:modelValue', modelValue - 1)" :disabled="modelValue <= 1">
      <Icon class="w-3 h-3" type="chevron-left"></Icon>
    </button>
    <div class="text-gray-600">
      {{ modelValue }} - {{ totalPage }}
    </div>
    <button
      class="bg-transparent border-transparent w-auto h-auto text-gray-500 disabled:text-gray-300 hover:text-primary cursor-pointer transition"
      @click="$emit('update:modelValue', modelValue + 1)" :disabled="modelValue >= totalPage">
      <Icon class="w-3 h-3" type="chevron-right"></Icon>
    </button>
    <button
      class="bg-transparent border-transparent w-auto h-auto text-gray-500 disabled:text-gray-300 hover:text-primary cursor-pointer transition"
      @click="$emit('update:modelValue', totalPage)">
      <Icon class="w-3 h-3" type="chevron-double-right"></Icon>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  totalRecords: number;
  limit: number;
  modelValue: number;
}>();

defineEmits<{
  (e: 'update:modelValue', val: number): void;
}>();

const totalPage = computed(() => {
  return Math.ceil(props.totalRecords / props.limit);
});
</script>