<template>
  <div class="small-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="small-container" v-else>
    <div class="title-add">
      <h2>Mon Profil</h2>
      <router-link to="/logout" class="btn-dark">
        déconnexion
      </router-link>
    </div>
    <!-- ID CARD -->
    <div class="bloc-profile">
      <img :src="current.icon" alt="avatar" class="img" />
      <div class="name">
        {{ current.firstName }} <span> {{ current.lastName }}</span>
      </div>
      <div class="job">{{ current.more }}</div>
    </div>
    <!-- UPDATE BUTTONS -->
    <div class="update-profile">
      <router-link
        class="btn-dark"
        :to="{
          name: 'UpdatePassword',
          params: { id: current.id },
        }"
      >
        modifier le mot de passe
      </router-link>
      <router-link
        class="btn-dark"
        :to="{
          name: 'UpdateUser',
          params: { id: current.id },
        }"
      >
        modifier les infos
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Profile",
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["current", "isLoading"]),
  },
  methods: {
    ...mapMutations("user", ["fetchCurrentUser"]),
  },
  created() {
    this.$store.dispatch("user/fetchCurrentUser", localStorage.getItem("user"));
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.bloc-profile {
  width: 70%;
  margin: 2rem auto;
  height: 60%;
  background: $gray;
  border-radius: 20px;
  padding: 2rem;
  display: grid;
  grid:
    "img name" 1fr
    "job job" 1fr
    / auto 1fr;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  .img {
    grid-area: img;
    width: 12rem;
    height: 12rem;
  }
  .name {
    grid-area: name;
    font-size: 3rem;
    font-weight: 700;
    span {
      font-size: 3rem;
      text-transform: uppercase;
    }
  }
  .job {
    grid-area: job;
    font-size: 2rem;
  }
}
.update-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
