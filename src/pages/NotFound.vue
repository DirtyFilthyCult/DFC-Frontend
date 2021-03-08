<template>
  <main>
    <div class="index-summary">
      <div class="index-summary-text">
        <h1 class="novecento heading">
          404</h1>
        <p class="fira description">
          The page you requested either does not exist or Joe forgot to implement it again.
        </p>
        <p class="fira description">
          Here's a button back home, for those of you who are too lazy to use a navigation bar:
        </p>
      </div>
      <div class="index-summary-graphic">
        <img class="index-summary-image" src="/assets/pinchfist.png" alt="Pinchfist image"/>
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