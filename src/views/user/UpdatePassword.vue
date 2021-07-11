<template>
  <div class="small-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="small-container" v-else>
    <form @submit.prevent="trySubmit" class="myForm flex-center">
      <h2 class="title">modifier mon mot de passe</h2>
      <div class="one-col">
        <div>
          <label for="password">Nouveau Mot de Passe</label>
          <input type="password" v-model="password" />
        </div>
      </div>
      <div class="two-btn">
        <router-link to="/profile" class="btn-dark">
          annuler
        </router-link>
        <button class="btn-dark">
          modifier
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "UpdatePassword",
  data() {
    return {
      id: localStorage.getItem("user"),
      password: null,
    };
  },
  computed: {
    ...mapState("user", ["datas", "isLoading"]),
  },
  methods: {
    ...mapMutations("user", ["fetchCurrentUser"]),

    trySubmit() {
      var CryptoJS = require("crypto-js");
      this.password = CryptoJS.MD5(this.password).toString();
      const dataForm = {
        id: this.datas.id,
        password: this.password,
      };
      this.$store.dispatch("user/updatePassword", dataForm);
    },
  },
  created() {
    this.$store.dispatch("user/fetchCurrentUser", this.id);
  },
};
</script>

<style lang="scss" scoped>
.one-col {
  width: 50%;
}
</style>
