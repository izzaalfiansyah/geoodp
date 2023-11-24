<template>
  <div class="bg-gray50 bg-opacity-50 h-screen flex">
    <PanelSidebar></PanelSidebar>
    <div class="flex-1">
      <PanelNavbar></PanelNavbar>
      <div class="p-6 text-sm">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>