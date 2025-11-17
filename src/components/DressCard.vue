<template>
  <div class="dress-card">
    <div
      class="image-container"
      @touchstart="startTouch"
      @touchmove="moveTouch"
      @mousemove="handleMouseMove"
      @mouseleave="resetPhoto"
    >
      <img :src="currentImage" :alt="dress.name" />
    </div>

    <h3>{{ dress.name }}</h3>

    <div class="buttons">
      <button class="buy" @click="buy">Купить</button>
      <button class="rent" @click="rent">Арендовать</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'

const props = defineProps({ dress: Object })
const phoneNumber = '79268235297'

const currentIndex = ref(0)
const startX = ref(0)

const currentImage = computed(() => props.dress.images[currentIndex.value])

// Mobile swipe
const startTouch = (e) => (startX.value = e.touches[0].clientX)

const moveTouch = (e) => {
  const deltaX = e.touches[0].clientX - startX.value
  if (deltaX > 50) {
    // swipe right
    currentIndex.value =
      (currentIndex.value - 1 + props.dress.images.length) % props.dress.images.length
    startX.value = e.touches[0].clientX
  } else if (deltaX < -50) {
    // swipe left
    currentIndex.value = (currentIndex.value + 1) % props.dress.images.length
    startX.value = e.touches[0].clientX
  }
}

// Desktop sectors hover (6 максимум)
const handleMouseMove = (e) => {
  if (window.innerWidth <= 600) return // только для ПК
  const rect = e.currentTarget.getBoundingClientRect()
  const sectorWidth = rect.width / Math.min(props.dress.images.length, 6)
  const x = e.clientX - rect.left
  const index = Math.floor(x / sectorWidth)
  currentIndex.value = Math.min(index, props.dress.images.length - 1)
}

const resetPhoto = () => {
  currentIndex.value = 0
}

// WhatsApp
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

  .image-container {
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    margin-bottom: 12px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: transform 0.3s ease;
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
