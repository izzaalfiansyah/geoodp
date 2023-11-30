<template>
  <div class="bg-white rounded-lg p-10 max-w-400px shadow w-full">
    <div class="mb-8 flex justify-center">
      <Logo width="70px" height="70px" />
    </div>
    <div class="text-sm text-center">Login terlebih dahulu sebelum memulai sesi!</div>
    <div class="mt-10">
      <input type="text"
        class="w-full px-3 h-10 rounded border border-solid border-gray-200 focus:(border-blue-400 ring-2 ring-indigo-100 outline-none) mb-3"
        placeholder="Username" autofocus v-model="req.username">
      <input type="text"
        class="w-full px-3 h-10 rounded border border-solid border-gray-200 focus:(border-blue-400 ring-2 ring-indigo-100 outline-none) mb-3"
        placeholder="Password" v-model="req.password">
    </div>
    <div class="mt-8">
      <button class="w-full cursor-pointer uppercase rounded h-10 bg-primary text-white border-none">Login</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
});

const req = reactive<{
  username?: string;
  password?: string;
}>({});
</script>