<template>
  <PanelTitle>Data ODP</PanelTitle>
  <Card class="shadow-sm">
    <div class="flex items-center flex-wrap gap-3 justify-between">
      <div class="w-full lg:w-auto">
        <select class="input">
          <option value="10">8</option>
          <option value="20">20</option>
          <option value="50">40</option>
        </select>
      </div>
      <div class="relative w-full lg:w-auto">
        <button class="btn absolute top-0 right-0 w-10 bg-transparent text-gray-500 flex items-center justify-center p-0">
          <Icon type="search" class="w-4 h-4"></Icon>
        </button>
        <input type="text" class="lg:w-400px input pr-10" placeholder="Cari">
      </div>
    </div>
  </Card>
  <div class="grid lg:grid-cols-4 grid-cols-2 gap-5">
    <template v-for="item in Array.from({ length: 8 })">
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="bg-gray-100 h-200px"></div>
        <div class="p-4">
          <div class="text-base font-semibold">ODP 1</div>
          <div class="text-gray-500 text-xs">Sumbersari, Jember</div>
          <div class="mt-4 space-x-1">
            <button type="button"
              class="cursor-pointer text-gray-600 hover:text-primary transition bg-transparent border-transparent">
              <Icon type="edit" class="w-4 h-4"></Icon>
            </button>
            <button type="button"
              class="cursor-pointer text-gray-600 hover:text-primary transition bg-transparent border-transparent">
              <Icon type="delete" class="w-4 h-4"></Icon>
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
  <Card>
    <div class="flex items-center justify-center">
      <Pagination v-model="page" :total-records="120" :limit="8"></Pagination>
    </div>
  </Card>
</template>

<script setup lang="ts">
const page = ref(1);
</script>