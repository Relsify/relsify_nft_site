import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../pages/Intro.vue'
import Main from '../pages/Main.vue'
const routes = [
    {
        path: '/into',
        name: 'Intro',
        component: Intro
    },
    {
        path: '/',
        name: 'Main',
        component: Main
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router