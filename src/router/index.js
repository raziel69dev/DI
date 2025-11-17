import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DressDetail from '../views/DressDetail.vue'

const routes = [
  { path: '/DI/', name: 'Home', component: HomePage },
  { path: '/dress/:id', name: 'DressDetail', component: DressDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
