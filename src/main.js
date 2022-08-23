import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import MyPlugin from './plugins/plugin'
Vue.use(MyPlugin)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
