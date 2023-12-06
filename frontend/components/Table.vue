<template>
  <div class="overflow-x-auto">
    <table class="border border-collapse w-full whitespace-nowrap">
      <thead>
        <tr>
          <template v-for="header in headers">
            <td class="p-3 font-semibold">{{ header }}</td>
          </template>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in items">
          <tr class="border-b-solid border border-t-solid border-gray-100">
            <template v-for="header in headers">
              <td class="p-3">
                <slot :name="'item-' + header.replace(/ /gi, '-').toLowerCase()" :item="item">
                  {{ item[header.replace(/ /gi, '_').toLowerCase()] }}
                </slot>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  items: any[];
  headers: string[];
}>();
</script>