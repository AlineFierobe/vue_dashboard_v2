<template>
  <ul class="list-projects" v-if="closedProjects.length">
    <li v-for="project in closedProjects" :key="project.id">
      {{ project.name }}
    </li>
  </ul>
  <div v-else class="empty">
    aucun projet à afficher
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ClosedProjects",
  data() {
    return {};
  },

  computed: {
    ...mapState("projects", ["datas"]),

    closedProjects() {
      return this.datas.filter((p) => p.status.id != 1);
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
