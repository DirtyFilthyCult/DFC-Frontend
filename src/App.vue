<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import axios from "axios"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

/* eslint-disable no-unused-vars */
export default {
  components: {
    Navigation,
    Footer
  },

  data() {
    return {
      news: null,
      newsEndpoint: '/api/news'
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = `DFC | ${to.name}` || "DFC";
      }
    },
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

:root {
  --bg-accent: #242424;
  --bg: #4d4d4d;
  --bright-red: #e51526;
  --dark-red: #ab000e;
  --footer-text: #979797;
}

html, body {
  font-size: 30px;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {

}

</style>