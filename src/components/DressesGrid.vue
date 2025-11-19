<template>
  <div class="dresses-grid">
    <DressCard v-for="dress in dresses" :key="dress.id" :dress="dress" />
  </div>
</template>

<script setup lang="ts">
import dresses from '@/data/dresses';
import DressCard from '@/components/DressCard.vue'
</script>

<style scoped lang="scss">
.dresses-grid {
  display: grid;
  gap: 12px;
  padding: 12px;
  width: 100%;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>
