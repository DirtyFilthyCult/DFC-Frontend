<template>
  <main>
    <div class="index-block">
      <div class="index-block-text-full">
        <h1 class="novecento heading">
          join us</h1>
        <hr class="large-rule">
        <p class="fira description"><strong>Interested in joining the DFC?</strong></p>
        <p class="fira description">We're primarily a Discord-based community, so you can join us
          with the button below. We look forward to seeing you!
        </p>
        <p class="fira description">When you join, you will initially be labeled as a Visitor. To become
          a true cult member, you must go through verification to ensure that you own FORTS and are not malicious.
          You must also change your Steam tag to include "[DFC]" if you are a competitive player.
        </p>
        <button @click="join()" class="novecento block-button">discord invite</button>
        <br>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Join",
  methods: {
    join() {
      window.open('https://dirtyfilthycu.lt/discord', 'blank')
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