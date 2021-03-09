<template>
  <nav>
    <div class="nav-group">
      <router-link to="/" custom v-slot="{navigate}">
        <img @click="navigate" src="/assets/logo.png" alt="DFC Logo"/>
      </router-link>
      <router-link to="/" custom v-slot="{navigate}" class="mobile-hide">
        <a @click="navigate" class="novecento text text-dfc">dfc</a>
      </router-link>
    </div>
    <div class="nav-group nav-group-right mobile-hide">
      <router-link to="/titles" custom v-slot="{navigate}">
        <a @click="navigate" class="novecento text text-dfc">titles</a>
      </router-link>
      <router-link to="/steam" custom v-slot="{navigate}">
        <a @click="navigate" class="novecento text">steam</a>
      </router-link>
      <router-link to="/join" custom v-slot="{navigate}">
        <a @click="navigate" class="novecento text">join us</a>
      </router-link>
      <div id="nav-divider">

      </div>
      <router-link to="/login" custom v-slot="{navigate}" v-if="!loggedIn">
        <a @click="navigate" class="novecento text">log in</a>
      </router-link>
      <router-link to="/profile" custom v-slot="{navigate}" v-else>
        <a @click="navigate" class="novecento text">profile</a>
      </router-link>
    </div>

  </nav>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Navigation',
  computed: mapState([
    'loggedIn'
  ])
}
</script>

<style scoped>

nav {
  top: 0;
  position: sticky;
  z-index: 2;
  background-color: var(--bg-accent);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  width: 100%;
  padding: 0 1rem;
  border-bottom: 5px solid black;
  margin: 0;
}

.nav-group {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-group-right {
  flex: 1;
  justify-content: flex-end;
}

img {
  border-radius: 50%;
  border: 3px solid black;
  height: 85%;
}

#nav-divider {
  margin: 0 .75rem;
  border-right: 3px solid var(--bg);
  height: 60%;
}

img:hover {
  cursor: pointer;
}

a:hover {
  cursor: pointer;
}

.text {
  padding-bottom: .4rem;
  font-size: 2rem;
  color: var(--bright-red)
}

.text + .text {
  margin-left: 1.5rem;
}

.text-dfc {
  margin-left: .5rem;
}

</style>
