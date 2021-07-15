<template>
  <div class="main-container logged-out">
    <div class="quote">
      La raison d’être d’une organisation est de permettre à des gens ordinaires
      de faire des choses extraordinaires.
    </div>
    <div>
      <router-link class="btn-large" to="/login">
        se connecter
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoggedOut",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/style.scss";

// IF LOGGEDOUT
.logged-out {
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  justify-items: center;
  @include mobile {
    grid-template-columns: 1fr;
  }
  .quote {
    text-align: center;
    font-size: 3rem;
    margin: 5rem;
    border: 1px solid $dark;
    border-radius: $br;
    padding: 3rem;
    @include mobile {
      width: 100%;
      margin: 0;
    }
  }
  .btn-large {
    background: $dark;
    color: $light;
    padding: 2.5rem;
    font-size: 2.5rem;
    text-transform: uppercase;
    border-radius: $br;
  }
}
</style>
