<template>
  <div class="main-container">
    <h2 class="title">Mon Profil</h2>
    <router-link to="/logout">
      déconnexion
    </router-link>
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
    ...mapState("user", ["datas"]),
  },
  methods: {
    ...mapMutations("user", ["displayUser"]),
  },
  created() {
    this.$store.dispatch("user/fetchUser");
  },
};
</script>
