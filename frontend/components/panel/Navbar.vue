<template>
  <div class="h-20 flex items-center justify-between bg-white shadow-sm px-6">
    <div class="flex items-center space-x-4">
      <button class="bg-transparent border-transparent rounded-full outline-none" type="button"
        @click="$emit('toggleSidebar')">
        <Icon type="menu" class="lg:hidden w-5 h-5 text-gray-500 cursor-pointer" />
      </button>
      <Icon type="search" class="w-5 h-5 text-gray-500" />
    </div>
    <div class="flex items-center space-x-3">
      <div class="rounded-full bg-gray-200 h-12 w-12"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  toggleSidebar: [];
}>();
</script>