<template>
  <div class="dress-card">
    <router-link :to="`/dress/${dress.id}`">
      <img :src="dress.image" :alt="dress.name" />
    </router-link>
    <h3>{{ dress.name }}</h3>
    <div class="buttons">
      <button class="buy" @click="buy">Купить</button>
      <button class="rent" @click="rent">Арендовать</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  dress: Object,
})

const buy = () => {
  alert(`Вы выбрали купить: ${props.dress.name} за ${props.dress.price} ₽`)
}

const rent = () => {
  alert(`Вы выбрали арендовать: ${props.dress.name} за ${props.dress.rentPrice} ₽`)
}
</script>

<style lang="scss" scoped>
.dress-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 16px;
  text-align: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  }

  img {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
  }

  h3 {
    margin: 12px 0;
    font-size: 1.2rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
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
