import Router from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import Index from "./pages/Index.vue"

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    }
  ]
})

new Vue({
  el: "#app",
  render: h => h(App),
  router
})