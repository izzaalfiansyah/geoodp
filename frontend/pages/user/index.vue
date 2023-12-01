<template>
  <PanelTitle>Data User</PanelTitle>
  <Card>
    <div class="flex items-center justify-between gap-4 flex-wrap">
      <input type="text"
        class="lg:w-400px w-full rounded h-10 border-solid border-gray-100 border outline-none px-3 focus:(border-blue-500 ring ring-indigo-100) transition"
        placeholder="Cari...">
      <NuxtLink to="/user/create" class="btn btn-primary no-underline">Tambah</NuxtLink>
    </div>
    <div class="mt-8">
      <Table :headers="['Email', 'Nama', 'Nomor Telepon', 'Opsi']" :items="[
        {
          email: 'iansyah724@gmail.com',
          nama: 'Muhammad Izza Alfiansyah',
          nomor_telepon: '081231921351',
        }
      ]">
        <template #item-opsi="{ item }">
          <button
            class="bg-white cursor-pointer transition hover:bg-gray-50 rounded-full h-8 w-8 flex items-center justify-center border-none">
            <Icon type="more" class="w-4 h-4 m-0"></Icon>
          </button>
        </template>
      </Table>
    </div>
  </Card>
</template>