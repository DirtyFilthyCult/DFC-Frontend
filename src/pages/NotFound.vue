<template>
  <main>
    <div class="index-block">
      <div class="index-block-text">
        <h1 class="novecento heading">
          404</h1>
        <p class="fira description">
          We're sorry, but Cronkhina-chan has nuked this page with the sheer power of his weebery.
        </p>
        <p class="fira description">
          Here's a button back home, for those of you who are too lazy to use a navigation bar:
        </p>
        <router-link to="/" custom v-slot="{navigate}">
          <button @click="navigate" class="novecento block-button">index</button>
        </router-link>
      </div>
      <div class="index-block-graphic mobile-hide">
        <img class="index-block-image" src="/assets/pinchfist.png" alt="Pinchfist image"/>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "NotFound",
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  width: 100%;
}
</style>