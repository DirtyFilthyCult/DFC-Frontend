<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>

import axios from 'axios'
import Navigation from "./components/Navigation"

/* eslint-disable no-unused-vars */
export default {
  components: {
    Navigation
  },

  data() {
    return {
      news: null,
      newsEndpoint: '/api/news'
    }
  },

  created() {
    this.getNews()
  },

  methods: {
    getNews() {
      axios.get(this.newsEndpoint, {
        params: {
          limit: "15"
        }
      })
        .then(response => {
          this.news = response.data
        })
        .catch(_ => {
          console.log("Could not fetch user data.")
        })
    }
  }
}
</script>

<style lang="css">

* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {

}

</style>