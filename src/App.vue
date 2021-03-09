<template>
  <div id="app">
    <Navigation />
    <vue-page-transition name="fade-in-down">
      <router-view />
    </vue-page-transition>
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
      newsEndpoint: '/api/news'
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = `DFC | ${to.name}` || 'DFC';
        if(to.meta.auth === true) {
          if(this.$store.state.userSession == null) {
            this.$router.push({ name: 'Log In'})
          }
        }
        if(to.name !== "Index") {
          document.getElementsByTagName("body")[0]
              .classList.add("body-color")
        } else {
          document.getElementsByTagName("body")[0]
              .classList.remove("body-color")
        }
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
          this.$store.commit('setNews', response.data)
        })
        .catch(_ => {
          console.log("Could not fetch latest news data.")
        })
    }
  }
}
/*        if(to.name !== "Index") {
          document.getElementsByTagName("body")[0]
              .setAttribute("style", "background: var(--bg); transition: 2s;")
        } else {
          document.getElementsByTagName("body")[0]
              .setAttribute("style", "")
        }*/

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

html {
  font-size: 25px;
  margin: 0;
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  min-height: 100%;
  width: 100%;
  position: relative;
  background-color: var(--bg);
}

body:after {
  position: absolute;
  z-index: -1;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  opacity: 1;
  background-image: url("/assets/bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top center;
  background-size: cover;
  transition: 0.25s;
}

.body-color:after {
  opacity: 0;
  transition: 0.25s;
}

#app {
}

.novecento {
  font-family: novecento-sans, sans-serif;
  font-weight: 800;
  font-style: normal;
}

.fira {
  font-family: fira-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
}

main {
  margin: 0;
}

@media only screen and (max-width: 950px) {
  .mobile-hide {
    display: none !important;
  }
}
</style>