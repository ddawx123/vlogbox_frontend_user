import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
