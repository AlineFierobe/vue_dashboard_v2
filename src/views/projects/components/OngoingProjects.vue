<template>
  <div v-if="isLoading" class="loading">
    <img src="../../../assets/loading.gif" alt="loading" />
  </div>
  <ul class="list-projects" v-else-if="ongoingProjects.length">
    <li v-for="project in ongoingProjects" :key="project.id">
      <router-link
        :to="{
          name: 'SingleProject',
          params: { id: project.id },
        }"
      >
        {{ project.name }}
      </router-link>
    </li>
  </ul>
  <div v-else class="empty">
    aucun projet à afficher
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import _ from "lodash";

export default {
  name: "OngoingProjects",
  data() {
    return {};
  },

  computed: {
    ...mapState("projects", ["datas", "isLoading"]),

    allProjects() {
      return _.orderBy(this.datas, "name", "asc");
    },

    ongoingProjects() {
      return this.allProjects.filter((p) => p.status.id == 1);
    },
  },

  methods: {
    ...mapMutations("projects", ["displayProjects"]),
  },

  created() {
    this.$store.dispatch("projects/fetchProjects");
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/style.scss";
</style>
