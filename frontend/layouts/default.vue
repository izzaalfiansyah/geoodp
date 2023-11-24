<template>
  <div class="bg-gray50 h-screen flex">
    <div class="min-h-screen bg-white w300px rounded-r-lg shadow">
      <div class="flex justify-center py10">
        <Logo width="80px" height="80px" />
      </div>
      <div class="px8">
        <ul class="list-none pl0">
          <li class="mb2" v-for="menu in menus">
            <NuxtLink :to="menu.path"
              :class="`flex items-center p2.5 px4.5 decoration-none text-gray800 transition ${menu.path == '/' ? 'bg-primary text-white' : 'hover:text-primary'} rounded rounded-full`">
              <Icon :type="menu.icon" class="mr3 w5 h5" />
              <span>{{ menu.title }}</span>
            </NuxtLink>
          </li>
          <li class="mb2">
            <button type="button"
              class="w-full bg-transparent border-none text-base cursor-pointer flex items-center p2.5 px4.5 decoration-none text-gray800 transition hover:text-primary rounded rounded-full">
              <Icon type="logout" class="mr3 w5 h5" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-1">
      <div class="p-6">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IconType } from "../components/Icon.vue";

const menus: Array<{
  path: string;
  title: string;
  icon: IconType;
}> = [
    {
      path: '/',
      title: 'Dashboard',
      icon: 'home',
    },
    {
      path: '/user',
      title: 'Data User',
      icon: 'users',
    },
    {
      path: '/odp',
      title: 'Data Layanan',
      icon: 'folder-open',
    },
    {
      path: '/pelanggan',
      title: 'Data Pelanggan',
      icon: 'user-group',
    },
    {
      path: '/login',
      title: 'Login',
      icon: 'logout',
    },
  ];
</script>