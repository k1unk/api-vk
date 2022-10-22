import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import store from "@/store"
import LoadScript from "vue-plugin-load-script";
import Users from "@/components/Users/Users";
import FriendPage from "@/components/Users/FriendPage";

const routes = [
    {
        path: '/',
        component: Users
    },
    {
        path: '/friend/:id',
        component: FriendPage
    },

]

const router = createRouter({
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)
export default router

createApp(App)
    .use(LoadScript)
    .use(router)
    .use(store)
    .mount('#app')
