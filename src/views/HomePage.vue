<template>
  <div>
    <Header />
    <div class="dress-list">
      <DressCard v-for="dress in dresses" :key="dress.id" :dress="dress" />
    </div>
    <footer>
      <p>Контакты дизайнера: designer@mail.com</p>
      <p>Контакты продюсера: producer@mail.com</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/LayoutHeader.vue'
import DressCard from '@/components/DressCard.vue'
import { dresses as dressesData } from '@/data/dresses.js'

const dresses = ref(dressesData)
</script>

<style lang="scss" scoped>
.dress-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  padding: 0 40px;
}

footer {
  text-align: center;
  margin: 50px 0;
  color: #555;
  font-size: 0.9rem;
}
</style>
