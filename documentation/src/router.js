import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './pages/main'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/simple-syntax-highlighter/',
      component: main
    },
    {
      path: '*',
      redirect: '/simple-syntax-highlighter/'
    }
  ]
})
