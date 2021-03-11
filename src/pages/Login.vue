<template>
  <main>
    <div class="index-block">
      <div class="index-block-text">
        <h1 class="novecento heading">
          log in</h1>
        <hr class="small-rule">
        <p class="fira description">
          You can log in with your Discord account via OAuth here.
        </p>
        <p class="fira description">
          <b>This does not give us access to your Discord credentials.</b> For more information, please see our
          <router-link to="/privacy" style="color: white;">
            privacy policy.
          </router-link>
        </p>
        <button @click="logIn()" id="loginButton" class="novecento block-button">log in</button>
      </div>
      <div class="index-block-graphic mobile-hide">
        <img class="index-block-image" src="/assets/discord.png" alt="Discord image"/>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login",
  methods: {
    logIn() {
      const button = document.querySelector("#loginButton")
      this.$store.commit('generateTempUUID')
      this.$store.dispatch('oauthInitiate')

      button.disabled = true
      button.classList.add("disabled")
      button.innerHTML = "waiting..."
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

.disabled {
  transform: scale(1.00);
  filter: brightness(50%);
}

.disabled:hover {
  transition: none;
  cursor: auto;
}

@media only screen and (max-width: 950px) {
  .disabled {
    transform: translateX(-50%);
  }
}
</style>