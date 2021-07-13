<template>
  <div class="main-container">
    <form @submit.prevent="trySubmit" class="myForm">
      <h2 class="title">modifier les infos du site</h2>
      <div class="three-col">
        <div>
          <label>Nom du Site</label>
          <input type="text" v-model="current.siteName" required />
        </div>
        <div>
          <label>Nom du Dev</label>
          <input type="text" v-model="current.devName" required />
        </div>
        <div>
          <label>Site du Dev</label>
          <input type="text" v-model="current.devSite" required />
        </div>
      </div>
      <div class="one-col">
        <div>
          <label>Texte de la page à propos</label>
          <textarea v-model="current.about" class="large" required></textarea>
        </div>
      </div>
      <div class="two-btn">
        <router-link class="btn-dark" to="/">retour à l'accueil</router-link>
        <button class="btn-dark">modifier</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "UpdateInfo",
  data() {
    return {};
  },
  computed: {
    ...mapState("website", ["current", "isLoading"]),
  },
  created() {
    this.$store.dispatch("website/fetchCurrentWebsite", 1);
  },
  methods: {
    ...mapMutations("website", ["updateCurrent"]),
    trySubmit() {
      this.$store.dispatch("website/updateWebsite", this.current);
    },
  },
};
</script>
