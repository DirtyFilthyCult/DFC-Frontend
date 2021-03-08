<template>
  <nav>
    <div class="nav-group">
      <router-link to="/" custom v-slot="{navigate}">
        <img @click="navigate" src="/assets/logo.png" alt="DFC Logo"/>
      </router-link>
      <router-link to="/" custom v-slot="{navigate}">
        <a @click="navigate" class="text text-dfc">DFC</a>
      </router-link>
    </div>
    <div class="nav-group">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>

nav {
  background-color: var(--bg-accent);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  width: 100%;
  padding: 0 35px;
  border-bottom: 5px solid black;
  margin: 0;
}

.nav-group {
  height: 100%;
  display: flex;
  align-items: center;
}

img {
  border-radius: 50%;
  border: 3px solid black;
  height: 85%;
}

img:hover {
  cursor: pointer;
}

.text {
  margin-left: .5rem;
  font-size: 1rem;
  color: var(--bright-red)
}

.text-dfc {

}

</style>
