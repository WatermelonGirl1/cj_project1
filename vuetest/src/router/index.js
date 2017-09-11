import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import one from '@/components/one'
import two from '@/components/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    }
  ]
})
