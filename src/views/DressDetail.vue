<template>
  <div class="details">
    <div class="image-view">
      <img :src="currentImage" alt="" @touchstart="touchStart" @touchmove="touchMove" />
    </div>

    <h1>{{ dress.title }}</h1>

    <div class="btns">
      <a :href="whatsappBuy" class="buy">Купить</a>
      <a :href="whatsappRent" class="rent">Арендовать</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import dresses from '../data/dresses'

const route = useRoute()
const dress = dresses.find((d) => d.id == route.params.id)

const currentIndex = ref(0)
const currentImage = ref(dress.images[0])

const number = '79268235297'
const whatsappBuy = `https://wa.me/${number}?text=Хочу купить: ${encodeURIComponent(dress.title)}`
const whatsappRent = `https://wa.me/${number}?text=Хочу арендовать: ${encodeURIComponent(dress.title)}`

// Swipe
let startX = 0

const touchStart = (e) => {
  startX = e.touches[0].clientX
}

const touchMove = (e) => {
  const delta = e.touches[0].clientX - startX
  if (Math.abs(delta) < 50) return

  if (delta < 0) {
    currentIndex.value = (currentIndex.value + 1) % dress.images.length
  } else {
    currentIndex.value = (currentIndex.value - 1 + dress.images.length) % dress.images.length
  }

  currentImage.value = dress.images[currentIndex.value]
  startX = e.touches[0].clientX
}
</script>

<style scoped lang="scss">
.details {
  padding: 20px;
}

.image-view {
  height: 430px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }
}

h1 {
  font-size: 22px;
  margin-bottom: 20px;
}

.btns {
  display: flex;
  gap: 14px;

  a {
    flex: 1;
    padding: 14px;
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
    text-decoration: none;
    color: white;
  }

  .buy {
    background: #ee6459;
  }

  .rent {
    background: #f9ac67;
  }
}
</style>
