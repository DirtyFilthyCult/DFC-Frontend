<template>
  <footer>
    <div class="footer-banner">
      <h2 class="novecento footer-heading">dirty filthy cult</h2>
      <div class="footer-nav mobile-hide">
        <router-link to="/titles" custom v-slot="{navigate}">
          <a @click="navigate" class="novecento footer-heading">titles</a>
        </router-link>
        <router-link to="/steam" custom v-slot="{navigate}">
          <a @click="navigate" class="novecento footer-heading">steam</a>
        </router-link>
        <router-link to="/join us" custom v-slot="{navigate}">
          <a @click="navigate" class="novecento footer-heading">join us</a>
        </router-link>
      </div>
    </div>
    <div class="flex-break"/>
    <div class="footer-socials">
      <ul class="footer-socials-list">
        <li><router-link to="/join" custom v-slot="{navigate}">
            <i @click="navigate" class="fab fa-discord fa-2x"/>
        </router-link></li>
        <li>
          <a href="https://steamcommunity.com/groups/DirtyFilthyCult" target="_blank"><i class="fab fa-steam fa-2x"></i></a>
        </li>
        <li>
          <a href="https://github.com/DirtyFilthyCult" target="_blank"><i class="fab fa-github fa-2x"></i></a>
        </li>
      </ul>
    </div>
    <div class="footer-bottom">
      <hr class="large-rule" style="margin: 0;">
      <div class="footer-bottom-banner">

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  border-top: 5px solid black;
  height: 350px;
  background-color: var(--bg-accent);
  width: 100%;
  padding: 0 1rem;
  margin: 0;
  position: relative;
}

.flex-break {
  flex-basis: 100%;
}

.footer-banner {
  display: flex;
  justify-content: space-between;
}

.footer-heading {
  color: var(--footer-text);
  font-size: 2.5rem;
  margin: 1rem 0;
}

a.footer-heading {
  cursor: pointer;
}

.footer-heading + .footer-heading {
  margin-left: 2rem;
}

.footer-nav {
  display: flex;
  align-items: flex-end;
}

.footer-socials-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-socials-list li {
  cursor: pointer;
  display: inline;
  color: var(--footer-text);
}

.footer-socials-list li:not(:first-child) {
  margin-left: 1rem;
}

.footer-socials-list li a {
  text-decoration: none;
  color: var(--footer-text);
}

.footer-bottom {
  position: absolute;
  padding: 0 1rem;
  bottom: 5px;
  left: 0;
  margin: 0;
  height: 20%;
  width: 100%;
}

.footer-bottom-banner {
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 1200px) {
  .mobile-hide {
    display: none;
  }
  footer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .footer-banner {
    justify-content: center;
    margin-bottom: -5rem;
  }

  .footer-heading {
    font-size: 2rem;
  }

  .footer-socials-list {
    margin-top: 0;
  }
}

</style>
