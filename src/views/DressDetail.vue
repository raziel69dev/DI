<template>
  <div class="detail-page">
    <router-link to="/DI">← Назад</router-link>
    <img :src="dress.image" :alt="dress.name" />
    <h2>{{ dress.name }}</h2>
    <p>{{ dress.description }}</p>
    <div class="buttons">
      <button class="buy" @click="buy">Купить за {{ dress.price }} ₽</button>
      <button class="rent" @click="rent">Арендовать за {{ dress.rentPrice }} ₽</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { dresses } from '@/data/dresses.js'

const route = useRoute()
const dressId = computed(() => parseInt(route.params.id))

const dress = ref(dresses.find((d) => d.id === dressId.value))

const buy = () => alert(`Купить: ${dress.value.name}`)
const rent = () => alert(`Арендовать: ${dress.value.name}`)
</script>

<style lang="scss" scoped>
.detail-page {
  max-width: 600px;
  margin: 40px auto;
  text-align: center;

  img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;

      &.buy {
        background-color: #ff7f50;
        color: #fff;
        &:hover {
          background-color: darken(#ff7f50, 5%);
        }
      }

      &.rent {
        background-color: #4caf50;
        color: #fff;
        &:hover {
          background-color: darken(#4caf50, 5%);
        }
      }
    }
  }
}
</style>
