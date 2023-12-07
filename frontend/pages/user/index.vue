<template>
  <PanelTitle>Data User</PanelTitle>
  <Card class="shadow-sm">
    <div class="flex items-center flex-wrap gap-3 justify-between">
      <div class="w-full lg:w-auto">
        <select class="input">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
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
  <Card>
    <Table :headers="['Email', 'Nama', 'Nomor Telepon', 'Opsi']" :items="Array.from({ length: 10 }).map(() => ({
      email: 'iansyah724@gmail.com',
      nama: 'Muhammad Izza Alfiansyah',
      nomor_telepon: '081231921351',
    }))">
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
  </Card>

  <Card>
    <div class="flex items-center justify-center">
      <Pagination v-model="page" :total-records="35" :limit="10"></Pagination>
    </div>
  </Card>

  <NuxtLink to="/user/create" class="fab">
    <Icon type="add"></Icon>
  </NuxtLink>

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
const page = ref(1);
</script>