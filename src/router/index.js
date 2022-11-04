import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home'
import Main from '../view/Main'
// import User from '../view/User'
// import Login from '../view/Login'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Main,
            name: 'main',
            redirect: '/home',
            children: [
                {path: '/home',name: 'home', component: Home},
                // {path: '/user',name: 'user', component: User},
            ]
        },
        // { path: '/login', name: 'login', component: Login }
    ]
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//     let token = Cookie.get('token')
//     if(!token && to.name !== 'login') {
//       next({ name: 'login' })
//     }else if (token && to.name === 'login') {
//       next({ name: 'home' })
//     }else {
//       next()
//     }
// })

export default router