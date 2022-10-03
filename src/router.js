import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/ViewHome.vue';
import Favorites from '@/views/ViewFavorites.vue';
import Dogs from '@/views/ViewDogs.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {title: ''},
        component: Home
    },{
        path: '/favorites',
        name: 'favorites',
        meta: {title: 'Пёсель - Избранное'},
        component: Favorites
    },{
        path: '/:id',
        name: 'dogs',
        meta: {title: 'Пёсель'},
        component: Dogs
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
    let documentTitle = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Пёсель';
    if(toRoute.params && toRoute.params.id){
        documentTitle += ' - ' + toRoute.params.id[0].toUpperCase() + toRoute.params.id.slice(1); 
    }
    window.document.title = documentTitle;
    next();
})

export default router
