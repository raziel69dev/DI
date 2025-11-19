<template>
  <main>
    <LayoutHeader />
    <router-view></router-view>
  </main>

</template>

<script setup>
import LayoutHeader from '@/components/LayoutHeader.vue'

</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;

  main {
    width: 100wv;
    overflow: hidden;
  }
}
</style>
