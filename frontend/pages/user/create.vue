<template>
  <PanelTitle>Tambah User</PanelTitle>
  <Card>
    <Form @submit="handleSubmit">
      <Field label="Email" required>
        <input type="text" class="input max-w-xl" placeholder="example@gmail.com">
      </Field>
      <Field label="Nama" required>
        <input type="text" class="input max-w-xl" placeholder="Masukkan Nama">
      </Field>
      <Field label="Nomor Telepon" required>
        <input type="text" class="input max-w-xl" placeholder="08xxxxxxxxx">
      </Field>
      <button type="submit" class="mt-5 btn btn-primary">Simpan</button>
    </Form>
  </Card>
</template>

<script lang="ts" setup>
function handleSubmit() {
  alert('tes');
}
</script>