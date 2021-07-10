<template>
  <!-- MAIN CONTAINER -->
  <div class="main-container">
    <!-- START FORM -->
    <form method="POST" class="myForm flex-center" @submit.prevent="trySubmit">
      <h2 class="title">Connexion</h2>
      <div class="one-col">
        <div>
          <label for="name">Prénom</label>
          <input type="text" v-model="form.name" />
        </div>
      </div>
      <div class="one-col">
        <div>
          <label for="password">Mot de Passe</label>
          <input type="password" v-model="form.password" />
        </div>
      </div>
      <div class="one-btn">
        <button class="btn-dark">connexion</button>
      </div>
      <!-- IF ERROR MESSAGE -->
      <div v-if="errors.length" class="warning">
        {{ errors }}
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },

  computed: {
    ...mapGetters("user", ["errors"]),
  },

  methods: {
    trySubmit() {
      if (this.isValid()) {
        var CryptoJS = require("crypto-js");
        let dataUsed = {
          name: this.form.name,
          password: CryptoJS.MD5(this.form.password).toString(),
        };
        this.$store.dispatch("user/trySignin", dataUsed);
      }
    },

    isValid() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.main-container {
  width: 60%;
}
.myForm {
  width: 35%;
  h2 {
    margin: 4rem;
  }
}
</style>
