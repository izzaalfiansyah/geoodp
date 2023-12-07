<template>
  <div ref="el" class="w-full h-full">

  </div>
</template>

<script setup lang="ts">
type LatLng = {
  lat: number;
  lng: number;
} | [number, number];

const props = defineProps<{
  zoom: number;
  center: LatLng;
  modelValue?: LatLng;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', val: LatLng): void;
}>();

const el = ref();

onMounted(async () => {
  const L = await import('leaflet');

  const map = L.map(el.value as HTMLElement);
  const marker = ref<L.Marker>();

  map.setView(props.center);
  map.setZoom(props.zoom);

  L.tileLayer('https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}').addTo(map);

  map.on('click', (e) => {
    marker.value?.remove();
    marker.value = L.marker(e.latlng).bindPopup(`${e.latlng.lat},${e.latlng.lng}`).addTo(map);

    emits('update:modelValue', e.latlng);

    setTimeout(() => {
      marker.value?.openPopup();
    }, 100);
  });
});
</script>