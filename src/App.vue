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
          console.log("Could not fetch latest news data.")
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
  padding: 0rem 2rem 2rem;
  background-color: var(--bg-accent);
  width: 90%;
}
.index-summary-text {
  width: 60%;
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
  font-size: 2.5rem;
}

.description {
  color: white;
  line-height: 150%;
  font-size: 1.5rem;
}

.button {
  color: white;
  padding-bottom: .7rem;
  border: none;
  font-size: 2.5rem;
  background-color: var(--dark-red);
  min-width: 50%;
}

@media only screen and (max-width: 1500px) {
  .heading {
    font-size: 1.85rem;
  }
  .description {
    font-size: 1.3rem;
  }

  .button {
    min-width: 80%;
    font-size: 2rem;
  }
}

/* Mobile viewports */
@media only screen and (max-width: 950px) {
  .mobile-hide {
    display: none !important;
  }

  .index-summary {
    width: 100%;
  }

  .index-summary-text {
    position: relative;
    padding-bottom: 1.5rem;
    width: 100%;
  }

  .heading {
    font-size: 1.5rem;
  }
  .description {
    font-size: 0.8rem;
  }

  .button {
    position: absolute;
    margin-left: auto;
    min-width: 80%;
    font-size: 1.5rem;
    padding-bottom: .4rem;
    left: 50%;
    transform: translateX(-50%);
  }

  nav {
    height: 4rem !important;
  }
}

/* Button hover effect on non-mobile viewports */
@media only screen and (min-width: 950px) {
  .button:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: .2s;
  }

  .button:active {
    transform: scale(0.98);
  }
}
</style>