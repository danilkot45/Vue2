import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import MyPlugin from './plugins/plugin'
import store from './store'

Vue.use(MyPlugin)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
