<template>
  <main>
    <div class="index-block transparent">
      <div class="index-block-text">
        <h1 class="novecento heading">
          the largest unofficial
          forts community</h1>
        <hr class="small-rule">
        <p class="fira description">
          The Dirty Filthy Cult is the largest unofficial community for
          <a href="https://www.earthworkgames.com/" target = "_blank" style="color: white;">FORTS</a>,
          a physics-based RTS game.
        </p>
        <p class="fira description">
          If you play Forts and would like to be a part of our community, consider joining us:
        </p>
        <router-link to="/join" custom v-slot="{navigate}">
          <button @click="navigate" class="novecento block-button">join us</button>
        </router-link>
      </div>
      <div class="index-block-graphic mobile-hide">
        <img class="index-block-image" src="/assets/pinchfist.png" alt="Pinchfist image"/>
      </div>
    </div>
    <div class="index-block transparent">
      <div class="index-block-text-full">
        <h1 class="novecento heading">latest news</h1>
        <hr class="small-rule">
        <h2 class="novecento heading-small" v-once v-html="sanitizeHeading()"></h2>
        <p class="fira description" v-once v-html="sanitizeText()"></p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Index",
  computed: {
    news() {
      return this.$store.getters.latestNews
    }
  },
  methods: {
    sanitizeHeading() {
      return this.news ?
          this.$sanitize(this.news.heading) :
          'could not grab news from server'
    },
    sanitizeText() {
      return this.news ?
          this.$sanitize(this.news.text) :
          'Please try reloading the page. If this does not fix the problem, contact the website administrator.'
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
  width: 100%;
}
</style>

<style>
.large-rule {
  background-color: var(--bg);
  height: 5px;
  border: none;
}

.small-rule {
  background-color: var(--bg);
  height: 3px;
  border: none;
}

.heading-small {
  color: white;
  font-size: 1.5rem;
}

.index-block {
  position: relative;
  padding: 0 2rem 2rem;
  background-color: var(--bg-accent);
  width: 90%;
  height: 0%;
}

.transparent {
  background-color: rgba(36, 36, 36, 0.95) !important;
}

.index-block:first-child {
  margin: 0;
}

.index-block:not(:first-child) {
  margin-top: 4rem;
}

.index-block:last-child {
  margin-bottom: 4rem;
}

.index-block-text {
  width: 60%;
}

.index-block-text-full {
  width: 100%;
}

.index-block-graphic {
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

.index-block-image {
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
  font-size: 1.3rem;
}

.description dt {
  margin-top: 0;
  font-weight: bold;
}

.block-button {
  color: white;
  padding-bottom: .7rem;
  border: none;
  font-size: 2.2rem;
  background-color: var(--dark-red);
  min-width: 40%;
}

@media only screen and (max-width: 1500px) {
  .heading {
    font-size: 1.85rem;
  }

  .heading-small {
    font-size: 1.3rem;
  }

  .block-button {
    font-size: 2rem;
  }
}

/* Mobile viewports */
@media only screen and (max-width: 950px) {
  .index-block {
    width: 100%;
  }

  .index-block-text {
    position: relative;
    padding-bottom: 1.5rem;
    width: 100%;
  }

  .heading {
    font-size: 1.5rem;
  }

  .heading-small {
    font-size: 1.1rem;
  }

  .description {
    font-size: 0.8rem;
  }

  .block-button {
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

  .index-block:not(:first-child) {
    margin-top: 2rem;
  }
}

/* Button hover effect on non-mobile viewports */
@media only screen and (min-width: 950px) {
  button {
    transition: .2s
  }
  button:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: .2s;
  }

  button:active {
    transform: scale(0.98);

  }
}
</style>