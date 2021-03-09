<template>
  <main>
    <div class="index-summary">
      <div class="index-summary-text">
        <h1 class="novecento heading">
          the largest unofficial
          forts community</h1>
        <p class="fira description">
          The Dirty Filthy Cult is the largest unofficial
          community for FORTS, a physics-based RTS game.
        </p>
        <p class="fira description">
          If you play Forts and would like to be a part of our community, consider joining us:
        </p>
        <router-link to="/join" custom v-slot="{navigate}">
          <button @click="navigate" class="novecento button">join us</button>
        </router-link>
      </div>
      <div class="index-summary-graphic mobile-hide">
        <img class="index-summary-image" src="/assets/pinchfist.png" alt="Pinchfist image"/>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Index",
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