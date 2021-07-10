<template>
  <header class="header">
    <router-link to="/">
      <h1>{{ siteName }}</h1>
    </router-link>
    <nav>
      <ul v-if="isLoggedIn">
        <li>
          <router-link to="/projects">
            mes projets
          </router-link>
        </li>
        <li>
          <router-link to="/meetings">
            mes réunions
          </router-link>
        </li>
        <li>
          <router-link to="/tasks">
            mes tâches
          </router-link>
        </li>
        <li>
          <router-link to="/profile">
            mon profil
          </router-link>
        </li>
      </ul>
      <ul v-else>
        <li></li>
        <li></li>
        <li>
          <router-link to="/about">
            à propos
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            connexion
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["siteName", "isLoggedIn"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/style.scss";

.header {
  background: $back;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem;
  h1 {
    font-size: 3rem;
  }
  nav {
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;
      justify-items: center;
      li a {
        font-size: 1.8rem;
        text-transform: lowercase;
        font-weight: 700;
        padding-bottom: 1rem;
        &.router-link-active {
          text-transform: uppercase;
          border-bottom: 4px $dark solid;
        }
      }
    }
  }
}
</style>
