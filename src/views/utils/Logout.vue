<template>
  <div class="main-container">
    <h2 class="title">
      déconnexion
    </h2>
    <form @submit.prevent="trySubmit" class="myForm">
      <p>Es-tu sûr de vouloir te déconnecter ?</p>
      <button class="btn-dark">déconnexion</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Logout",
  data() {
    return {};
  },

  methods: {
    trySubmit() {
      this.$store.dispatch("user/trySignout");
    },
  },
};
</script>
