import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/ViewHome.vue';
import Favorites from '@/views/ViewFavorites.vue';
import Dogs from '@/views/ViewDogs.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/favorites',
        name: 'favorites',
        component: Favorites
    },{
        path: '/:id',
        name: 'dogs',
        component: Dogs
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
