<template>
  <PanelTitle>Tambah ODP</PanelTitle>
  <Card>
    <FormField label="Kode" required>
      <input type="text" class="input max-w-2xl" placeholder="Masukkan Kode ODP">
    </FormField>
    <FormField label="Alamat" required>
      <textarea rows="3" class="input max-w-2xl" placeholder="Masukkan Alamat"></textarea>
    </FormField>
    <FormField label="Koordinat" required>
      <input type="text" class="max-w-xl input" placeholder="Koordinat ODP">
    </FormField>
    <FormField label="Kapasitas" required>
      <input type="number" class="input max-w-xl" placeholder="Jumlah Kapasitas" min="0">
    </FormField>
    <FormField label="Kunci SDK" required>
      <input type="text" class="input max-w-2xl" placeholder="xxxxxxxxx">
    </FormField>
    <button type="submit" class="btn btn-primary mt-5">Simpan</button>
  </Card>
</template>