<template>
  <div class="small-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="small-container" v-else>
    <h2 class="title">modifier mes infos</h2>
    <form @submit.prevent="trySubmit" class="myForm flex-center">
      <div class="two-col">
        <div>
          <label for="firstName">Prénom</label>
          <input type="text" v-model="current.firstName" required />
        </div>
        <div>
          <label for="lastName">Nom</label>
          <input type="text" v-model="current.lastName" required />
        </div>
      </div>
      <div class="two-col">
        <div>
          <img :src="current.icon" alt="avatar" class="icon" />
          <input type="text" v-model="current.icon" required />
        </div>
        <div>
          <label for="lastName">Petite Phrase</label>
          <textarea v-model="current.more" class="medium" required></textarea>
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
  name: "UpdateUser",
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["current", "isLoading"]),
  },
  methods: {
    ...mapMutations("user", ["fetchCurrentUser"]),

    trySubmit() {
      this.$store.dispatch("user/updateUser", this.current);
    },
  },
  created() {
    this.$store.dispatch("user/fetchCurrentUser", localStorage.getItem("user"));
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";

.icon {
  width: 13rem;
  height: 13rem;
  align-self: center;
}
</style>
