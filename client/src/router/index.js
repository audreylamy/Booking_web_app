import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Landing from '../layout/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    }
  ]
})