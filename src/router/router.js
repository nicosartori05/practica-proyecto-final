import {createRouter, createWebHashHistory} from "vue-router";

import Splash from '../pages/Splash.vue'
import Home from '../pages/Home.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'

const routes = [
    {path:"/", component: Splash},
    {path:"/home", component: Home},
    {path:"/register", component: Register},
    {path:"/login", component: Login},
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})


export default router;