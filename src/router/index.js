import Vue from 'vue'
import Router from 'vue-router'
import r from '../views'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lab-index',
      component: r
    }
  ]
})
