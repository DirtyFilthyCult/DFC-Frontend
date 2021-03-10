import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import VueSanitize from "vue-sanitize"
import VueCookies from "vue-cookies"

import App from './App.vue'
import Index from "./pages/Index.vue"
import Titles from "./pages/Titles.vue"
import Steam from "./pages/Steam.vue"
import Join from "./pages/Join.vue"
import Login from "./pages/Login.vue"
import Profile from "./pages/Login.vue"
import NotFound from "./pages/NotFound.vue"
import axios from "axios"

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Vuex)
Vue.use(VueSanitize)
Vue.use(VueCookies)
Vue.use(VuePageTransition)
Vue.prototype.axios = axios

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
    loggedIn: false,
    userData: null
  },

  getters: {
    latestNews: state => state.news ? (state.news[0] ?? null) : null,
    fullNews: state => state.news || null,
    userSession: state => state.userSession || null,
    userData: state => state.userData || null
  },

  mutations: {
    setNews: (state, payload) => state.news = payload,
    setUserData: (state, payload) => state.userData = payload,
    setUserSession: (state, payload) => {
      state.userSession = payload
      state.loggedIn = (payload !== null)
    }
  },
  actions: {
    async grabSessionFromCookie(context) {
      let userSession = this._vm.$cookies.isKey("user-session") ?
          this._vm.$cookies.get("user-session") : null
      if (userSession === null) {
        console.log("User session is null")
        return
      }
      context.commit('setUserSession', userSession)
    },
    async updateSession(context, payload) {
      switch(payload.type) {
        case "valid": {
          console.log("Session is valid")
          context.commit('setUserSession', payload.token)
          this._vm.apiGet('setUserData', '/api/userData', {token: payload.token})
          window.location.reload()
          break
        }
        case "refresh": {
          console.log("New token received from server; setting user token")
          context.commit('setUserSession', payload.token)
          this._vm.$cookies.set("user-session", payload.token)
          window.location.reload()
          break
        }
        case "invalid": {
          console.log("Session is invalid; new login required")
          context.commit('setUserSession', null)
          this._vm.$cookies.remove("user-session")
          window.location.reload()
          break
        }
        default: {
          console.log("Invalid refresh response from server; this is probably a bug")
        }
      }
    }
  }
})

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  created() {
    this.$cookies.config(Infinity, '', '',true)
    this.$store.dispatch('grabSessionFromCookie').then(() => {
      if(this.$store.getters.userSession !== null) {
        console.log("Refreshing session")
        this.apiGet('updateSession', 'api/updateSession', {current: this.$store.getters}, true)
      } else console.log("Skipping session refresh")
    })
    this.apiGet('setNews', 'api/news', {limit: "15"})
  },
  methods: {
    apiGet(commitType, endpoint, params = null, action = false) {
      this.axios.get(window.location.href + endpoint, {
        params: params
      }).then(response => {
        action ? this.$store.commit(commitType, response.data) : this.$store.dispatch(commitType, response.data)
      }).catch(_ => {
        action ? this.$store.commit(commitType, null) : this.$store.dispatch(commitType, null)
        console.log(`Unable to fetch data from endpoint: ${endpoint}`)
      })
    }
  }
})