<template>
  <div class="bg-gray50 bg-opacity-50 h-screen flex">
    <PanelSidebar :open="sidebarOpen" @toggle="toggleSidebar"></PanelSidebar>
    <div class="flex-1">
      <PanelNavbar @toggle-sidebar="toggleSidebar"></PanelNavbar>
      <div class="p-6 text-sm">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebarOpen = ref(false);

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
</script>