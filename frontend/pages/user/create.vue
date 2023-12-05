<template>
  <PanelTitle>Tambah User</PanelTitle>
  <Card>
    <form @submit.prevent="handleSubmit">
      <FormField label="Email" required>
        <input type="email" class="input max-w-2xl" placeholder="example@gmail.com">
        <FormError :error="errors?.email"></FormError>
      </FormField>
      <FormField label="Password" required>
        <input type="password" class="input max-w-xl" placeholder="********">
      </FormField>
      <FormField label="Password Konfirmasi" required>
        <input type="password" class="input max-w-xl" placeholder="********">
      </FormField>
      <FormField label="Nama" required>
        <input type="text" class="input max-w-2xl" placeholder="Masukkan Nama">
        <FormError :error="errors?.nama"></FormError>
      </FormField>
      <FormField label="Nomor Telepon" required>
        <input type="text" class="input max-w-lg" placeholder="08xxxxxxxxx">
      </FormField>
      <FormField label="Alamat">
        <textarea rows="5" class="input max-w-2xl" placeholder="Masukkan Alamat"></textarea>
      </FormField>
      <button type="submit" class="mt-5 btn btn-primary">Simpan</button>
    </form>
  </Card>
</template>

<script lang="ts" setup>
import type { Loading } from '~/components/LoadingTop.vue';

const errors = ref<any>();
const loading = inject<Loading>('loading');

async function handleSubmit() {
  errors.value = null;
  loading?.start();

  try {
    await fetch('http://localhost:8000/user');
  } catch (e: any) {
    errors.value = {
      nama: 'Nama harus diisi',
      email: 'Email harus diisi',
    };
  }

  loading?.finish();
}
</script>