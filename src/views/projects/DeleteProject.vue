<template>
  <div class="small-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="small-container" v-else>
    <form @submit.prevent="trySubmit" class="myForm flex-center">
      <h2 class="title">Supprimer le projet</h2>
      <h3 class="title">
        {{ current.name }}
      </h3>
      <div class="empty">
        <p>la suppression est définitive</p>
        <p>es-tu sûr de vouloir continuer ?</p>
      </div>
      <div class="two-btn">
        <router-link
          class="btn-dark"
          :to="{
            name: 'SingleProject',
            params: { id: current.id },
          }"
        >
          annuler
        </router-link>
        <button class="btn-dark">supprimer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "DeleteProject",
  data() {
    return {};
  },

  computed: {
    ...mapState("projects", ["current", "isLoading"]),
  },

  methods: {
    ...mapMutations("projects", ["currentProject"]),

    trySubmit() {
      this.$store.dispatch("projects/deleteProject", this.current.id);
    },
  },

  created() {
    this.$store.dispatch("projects/fetchCurrentProject", this.$route.params.id);
  },
};
</script>
