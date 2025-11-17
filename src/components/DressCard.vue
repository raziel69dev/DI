<template>
  <div class="dress-card">
    <router-link :to="`/dress/${dress.id}`" class="image-link">
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

const phoneNumber = '79268235297' // номер без + и пробелов

const buy = () => {
  const message = `Здравствуйте! Я хочу купить платье: ${props.dress.name} за ${props.dress.price} ₽`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const rent = () => {
  const message = `Здравствуйте! Я хочу арендовать платье: ${props.dress.name} за ${props.dress.rentPrice} ₽`
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.dress-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 16px;
  text-align: center;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
  }

  .image-link {
    display: block;
    width: 100%;
    overflow: hidden;
    border-radius: 12px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: transform 0.3s ease;

      @media (min-width: 600px) {
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  h3 {
    margin: 12px 0;
    font-size: 1.1rem;
    color: #333333;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 12px;

    button {
      flex: 1;
      padding: 12px 0;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;

      &.buy {
        background-color: #ff7f50;
        color: #ffffff;

        &:active {
          background-color: #e76a3d;
        }
      }

      &.rent {
        background-color: #4caf50;
        color: #ffffff;

        &:active {
          background-color: #419645;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 12px;

    h3 {
      font-size: 1rem;
    }

    .buttons {
      flex-direction: column;
      gap: 8px;

      button {
        font-size: 1rem;
        padding: 14px 0;
      }
    }
  }
}
</style>
