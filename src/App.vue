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
        if(to.meta.auth === true) {
          if(this.$store.state.userSession == null) {
            this.$router.push({ name: 'Log In'})
          }
        }
        document.title = `DFC | ${to.name}` || 'DFC';
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
  background-color: var(--bg);
  font-size: 25px;
  width: 100%;
  margin: 0;
  padding: 0;
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

.index-summary {
  position: relative;
  padding: 0 2rem;
  background-color: var(--bg-accent);
  width: 90%;
}
.index-summary-text {
  width: 50%;
}
.index-summary-graphic {
  background-color: var(--dark-red);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  position: absolute;
  transform: translate(1rem, 1rem);
  top: 0;
  right: 0;
}

.index-summary-image {
  height: 80%;
  width: 80%;
  object-fit: contain;
}

.heading {
  margin-top: 1rem;
  color: white;
  font-size: 3rem;
}

.description {
  color: white;
  line-height: 150%;
  font-size: 2rem;
}

@media only screen and (max-width: 1500px) {
  .index-summary-text {
  }

  .heading {
    font-size: 2rem;
  }
  .description {
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 950px) {
  .index-summary-graphic {
    display: none;
  }
  .index-summary-text {
    width: 100%;
    text-align: center;
  }

  .heading {
    font-size: 1.7rem;
  }
  .description {
    font-size: 1.1rem;
  }
}


</style>