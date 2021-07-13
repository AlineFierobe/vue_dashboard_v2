<template>
  <div class="small-container" v-if="!connected">
    <h2 class="title">
      oups
    </h2>
    <div class="empty">
      <i class="fas fa-user-check"></i>
      <p>on dirait que tu n'es pas connecté</p>
      <div class="add-btn">
        <router-link class="btn-dark" to="/login">
          connexion
        </router-link>
      </div>
    </div>
  </div>
  <div class="small-container" v-else>
    <h2 class="title">
      déconnexion
    </h2>
    <form @submit.prevent="trySubmit" class="myForm">
      <div class="empty">
        <i class="fas fa-sign-out-alt"></i>
        <p>Es-tu sûr de vouloir te déconnecter ?</p>
        <div class="add-btn">
          <button class="btn-dark">déconnexion</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Logout",
  data() {
    return {
      connected: false,
    };
  },

  created() {
    if (localStorage.getItem("user")) {
      this.connected = true;
    }
  },

  methods: {
    trySubmit() {
      this.$store.dispatch("user/trySignout");
    },
  },
};
</script>

<style lang="scss" scoped>
.empty,
.myForm {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
