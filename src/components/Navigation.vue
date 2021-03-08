<template>
  <nav class="">
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    active: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav {
  background-color: black;
  height: 80px;
  width: 100%;
}

</style>
