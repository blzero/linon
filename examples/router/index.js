import Vue from 'vue'
import Router from 'vue-router'
import app from '../App.vue'
import index from '../components/index'

import alert from '../components/alert'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    },
    {
      path:'/components',
      component:index,
      children:[{
          path:'alert',
          component:alert,
      }]
    }
  ]
})
