<template>
  <PanelTitle>Data User</PanelTitle>
  <Card>
    <div class="flex items-center justify-between gap-4 flex-wrap">
      <div class="relative w-full lg:w-auto">
        <button class="btn absolute top-0 right-0 w-10 bg-transparent text-gray-500 flex items-center justify-center p-0">
          <Icon type="search" class="w-4 h-4"></Icon>
        </button>
        <input type="text" class="lg:w-400px input pr-10" placeholder="Cari">
      </div>
      <NuxtLink to="/user/create" class="btn btn-primary no-underline order-first lg:order-last">Tambah</NuxtLink>
    </div>
    <div class="mt-5">
      <Table :headers="['Email', 'Nama', 'Nomor Telepon', 'Opsi']" :items="[
        {
          email: 'iansyah724@gmail.com',
          nama: 'Muhammad Izza Alfiansyah',
          nomor_telepon: '081231921351',
        },
      ]">
        <template v-slot:item-opsi="{ item }">
          <div class="space-x-1">
            <button type="button"
              class="cursor-pointer text-gray-600 hover:text-primary transition bg-transparent border-transparent">
              <Icon type="edit" class="w-4 h-4"></Icon>
            </button>
            <button type="button"
              class="cursor-pointer text-gray-600 hover:text-primary transition bg-transparent border-transparent"
              @click="deleteDialog = true">
              <Icon type="delete" class="w-4 h-4"></Icon>
            </button>
          </div>
        </template>
      </Table>
    </div>
  </Card>

  <Dialog v-model="deleteDialog">
    <Card class="w-500px" title="Hapus User">
      Anda yakin menghapus user terpilih?
      <div class="mt-4 flex justify-end">
        <button @click="deleteDialog = false" type="submit" class="btn btn-primary">Hapus</button>
      </div>
    </Card>
  </Dialog>
</template>

<script setup>
const deleteDialog = ref(false);
</script>