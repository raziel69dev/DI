<template>
  <div class="dress-card" @click="goToDetails">
    <div
      class="image-wrapper"
      @mousemove="onMouseMove"
      @mouseleave="resetImage"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
    >
      <img :src="currentImage" alt="" />
    </div>

    <h3>{{ dress.title }}</h3>

    <div class="btns" @click.stop>
      <a :href="whatsappBuy" class="buy">Купить</a>
      <a :href="whatsappRent" class="rent">Арендовать</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  dress: Object,
})

const router = useRouter()
const goToDetails = () => router.push(`/dress/${props.dress.id}`)

const number = '79268235297'
const whatsappBuy = `https://wa.me/${number}?text=Хочу купить: ${encodeURIComponent(props.dress.title)}`
const whatsappRent = `https://wa.me/${number}?text=Хочу арендовать: ${encodeURIComponent(props.dress.title)}`

// images logic
const currentIndex = ref(0)
const currentImage = ref(props.dress.images[0])

const onMouseMove = (e) => {
  if (window.innerWidth < 768) return

  const sectors = 6
  const rect = e.target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const sectorWidth = rect.width / sectors
  const index = Math.min(props.dress.images.length - 1, Math.floor(x / sectorWidth))

  currentIndex.value = index
  currentImage.value = props.dress.images[index]
}

const resetImage = () => {
  currentIndex.value = 0
  currentImage.value = props.dress.images[0]
}

let touchStartX = 0

const onTouchStart = (e) => {
  touchStartX = e.touches[0].clientX
}

const onTouchMove = (e) => {
  const delta = e.touches[0].clientX - touchStartX
  if (Math.abs(delta) < 50) return

  if (delta < 0) {
    currentIndex.value = (currentIndex.value + 1) % props.dress.images.length
  } else {
    currentIndex.value =
      (currentIndex.value - 1 + props.dress.images.length) % props.dress.images.length
  }

  currentImage.value = props.dress.images[currentIndex.value]
  touchStartX = e.touches[0].clientX
}
</script>

<style scoped lang="scss">
.dress-card {
  background: #ffffff;
  padding: 0;
  cursor: pointer;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

h3 {
  font-size: 15px;
  margin: 8px 0 10px;
  font-weight: 500;
  text-transform: uppercase;
}

.btns {
  display: flex;
  gap: 6px;

  a {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    font-size: 13px;
    font-weight: 600;
    color: white;
    text-decoration: none;
  }

  .buy {
    background: #ee6459;
  }

  .rent {
    background: #f9ac67;
  }
}
</style>
