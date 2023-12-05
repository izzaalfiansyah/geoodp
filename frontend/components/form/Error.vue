<template>
  <div class="text-xs text-red-500 mt-1">
    <template v-if="(typeof error == 'string')">
      <div>
        {{ error }}
      </div>
    </template>
    <template v-else v-for="err in error">
      <div>
        {{ err }}
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  error?: string | string[];
}

defineProps<Props>();
</script>