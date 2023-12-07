<template>
  <PanelTitle>Tambah ODP</PanelTitle>
  <Card>
    <FormField label="Kode" required>
      <input type="text" class="input max-w-2xl" placeholder="Masukkan Kode ODP">
    </FormField>
    <FormField label="Alamat" required>
      <textarea rows="3" class="input max-w-2xl" placeholder="Masukkan Alamat"></textarea>
    </FormField>
    <FormField label="Kapasitas" required>
      <input type="number" class="input max-w-xl" placeholder="Jumlah Kapasitas" min="0">
    </FormField>
    <FormField label="Kunci SDK" required>
      <input type="text" class="input max-w-2xl" placeholder="xxxxxxxxx">
    </FormField>
    <FormField label="Koordinat" required>
      <div class="rounded h-400px overflow-hidden">
        <Map v-model="koordinat" :zoom="13" :center="[-8.170203976659543, 113.7002556698126]">
        </Map>
      </div>
    </FormField>
    <button type="submit" class="btn btn-primary mt-5">Simpan</button>
  </Card>
</template>

<script setup lang="ts">
const koordinat = ref();

watch([koordinat], () => {
  console.log(koordinat.value);
});
</script>