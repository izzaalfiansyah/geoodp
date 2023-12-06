<template>
  <div
    class="min-h-screen fixed top-0 bottom-0 left-0 bg-white w300px z-100 shadow -translate-x-full lg:translate-x-0 transition"
    :class="{ '!translate-x-0': open }">
    <div class="flex justify-center py10">
      <Logo width="80px" height="80px" />
    </div>
    <div class="px8">
      <ul class="list-none pl0">
        <template v-for="menu in menus">
          <li class="mb2">
            <NuxtLink :to="menu.path" @click="$emit('toggle')"
              :class="`flex items-center p2.5 px4.5 decoration-none text-gray800 transition ${menu.path == route.path || (menu.path != '/' && route.path.includes(menu.path)) ? 'bg-primary text-white' : 'hover:text-primary'} rounded rounded-full`">
              <Icon :type="menu.icon" class="mr3 w5 h5" />
              <span>{{ menu.title }}</span>
            </NuxtLink>
          </li>
        </template>
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
  <div class="bg-black bg-opacity-25 lg:hidden fixed top-0 left-0 right-0 bottom-0 z-99" :class="{ hidden: !open }"
    @click="$emit('toggle')">
  </div>
</template>

<script setup lang="ts">
import { type IconType } from "~/components/Icon.vue";

const route = useRoute();

defineProps<{
  open: boolean;
}>();

defineEmits<{
  toggle: [],
}>();

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
      title: 'Data ODP',
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