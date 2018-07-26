import Vue from 'vue'
import Router from 'vue-router'
import alert from '../components/alert'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'alert',
      component: alert
    }
  ]
})
