import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App.vue'
import Index from "./pages/Index.vue"
import Titles from "./pages/Titles.vue"
import Steam from "./pages/Steam.vue"
import Join from "./pages/Join.vue"
import Login from "./pages/Login.vue"
import Profile from "./pages/Login.vue"
import NotFound from "./pages/NotFound.vue"

import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Vuex)

Vue.use(VuePageTransition)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/titles",
      name: "Titles",
      component: Titles
    },
    {
      path: "/steam",
      name: "Steam",
      component: Steam
    },
    {
      path: "/join",
      name: "Join Us",
      component: Join
    },
    {
      path: "/login",
      name: "Log In",
      component: Login
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        auth: true
      }
    },
    {
      path: '*',
      name: "Not Found",
      component: NotFound
    }
  ]
})

const store = new Vuex.Store({
  state: {
    news: null,
    userSession: null,
    loggedIn: false
  },

  getters: {
    latestNews: state => state.news[0] || null,
    fullNews: state => state.news
  },

  mutations: {
    setNews: (state, payload) => state.news = payload,
    setUserSession: (state, payload) => {
      state.userSession = payload
      state.loggedIn = true
    }
  }
})

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
})