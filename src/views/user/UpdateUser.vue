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
          <input type="text" v-model="datas.firstName" />
        </div>
        <div>
          <label for="lastName">Nom</label>
          <input type="text" v-model="datas.lastName" />
        </div>
      </div>
      <div class="two-col">
        <div>
          <img :src="datas.icon" alt="avatar" class="icon" />
          <input type="text" v-model="datas.icon" />
        </div>
        <div>
          <label for="lastName">Petite Phrase</label>
          <textarea v-model="datas.more" class="medium"></textarea>
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
    return {
      id: localStorage.getItem("user"),
    };
  },
  computed: {
    ...mapState("user", ["datas", "isLoading"]),
  },
  methods: {
    ...mapMutations("user", ["fetchCurrentUser"]),

    trySubmit() {
      this.$store.dispatch("user/updateUser", this.datas);
    },
  },
  created() {
    this.$store.dispatch("user/fetchCurrentUser", this.id);
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
