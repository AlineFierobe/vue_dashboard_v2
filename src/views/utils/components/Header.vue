<template>
  <header class="header">
    <h1>
      <router-link to="/">
        {{ siteName }}
      </router-link>
      <span v-if="openMenu">
        <i class="mobile burger fas fa-ellipsis-v" v-on:click="toggleMenu"></i>
      </span>
      <span v-else>
        <i class="mobile burger fas fa-ellipsis-h" v-on:click="toggleMenu"></i>
      </span>
    </h1>

    <nav>
      <ul v-if="isLoggedIn" id="menu" class="hideMenu">
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
      <ul class="hideMenu" id="menu" v-else>
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
import { mapState } from "vuex";

export default {
  name: "Header",
  props: ["siteName", "isLoggedIn"],
  data() {
    return {};
  },

  computed: {
    ...mapState("global", ["openMenu"]),
  },

  methods: {
    toggleMenu() {
      this.$store.dispatch("global/toggleMenu");

      const header = document.querySelector(".header");
      const menu = document.querySelector("#menu");
      header.classList.toggle("open");
      menu.classList.toggle("hideMenu");

      const body = document.querySelector("body");
      body.classList.toggle("no-scroll");
    },
  },

  created() {
    this.$store.dispatch("global/updateMenu", false);

    let session = localStorage.getItem("session");

    // if session ongoing check if still active if too long signout and redirect to home
    if (session) {
      localStorage.setItem("now", new Date().getTime());
      let newDate = localStorage.getItem("now");
      session = new Number(session);
      const oneDay = 1000 * 60 * 60 * 1;
      // const oneDay = 1000 * 10;
      session = session + oneDay;
      newDate = new Number(newDate);
      if (newDate > session) {
        this.$store.dispatch("user/trySignout");
      }
    }
    // if no session signout and redirect homepage
    if (!session) {
      this.$store.dispatch("user/trySignout");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/style.scss";
@include mobile {
  .hideMenu {
    display: none !important;
  }
}
.header {
  background: $back;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem;
  @include mobile {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    &.open {
      height: 100vh;
    }
  }
  h1 {
    a {
      font-size: 3rem;
    }
    @include mobile {
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      i {
        font-size: 3rem;
      }
    }
  }
  nav {
    @include mobile {
      height: 100%;
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;
      justify-items: center;
      @include mobile {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      li a {
        font-size: 1.8rem;
        text-transform: lowercase;
        font-weight: 700;
        padding-bottom: 1rem;
        @include mobile {
          text-transform: uppercase;
          font-size: 2.2rem;
        }
        &.router-link-active {
          text-transform: uppercase;
          border-bottom: 4px $dark solid;
          @include mobile {
            font-size: 2.2rem;
            border-bottom: none;
          }
        }
        @include mobile {
          display: inline-block;
          margin: 4rem;
        }
      }
    }
  }
}
</style>
