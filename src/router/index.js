import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home')
    },
    {
      path: '/b-map',
      name: 'BMap',
      component: () =>  import('../views/BMap')
    }
  ]
})

export default router
