<template>
  <div v-if="isLoading" class="loading">
    <img src="../../../assets/loading.gif" alt="loading" />
  </div>
  <ul class="list-projects" v-else-if="closedProjects.length">
    <router-link
      :to="{
        name: 'SingleProject',
        params: { id: project.id },
      }"
      v-for="project in closedProjects"
      :key="project.id"
    >
      <li>
        <span v-if="project.type.id == 1" :title="project.type.name">
          <i class="fas fa-code"></i>
        </span>
        <span v-else-if="project.type.id == 2" :title="project.type.name">
          <i class="fas fa-database"></i>
        </span>
        <span v-else-if="project.type.id == 3" :title="project.type.name">
          <i class="fas fa-layer-group"></i>
        </span>
        <span v-else-if="project.type.id == 4" :title="project.type.name">
          <i class="fab fa-wordpress"></i>
        </span>
        <span v-else-if="project.type.id == 5" :title="project.type.name">
          <i class="fas fa-circle"></i>
        </span>
        <div class="name">
          {{ project.name }}
        </div>
      </li>
    </router-link>
  </ul>
  <div v-else class="empty">
    aucun projet clos
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import _ from "lodash";

export default {
  name: "ClosedProjects",
  data() {
    return {};
  },

  computed: {
    ...mapState("projects", ["datas", "isLoading", "types"]),
    ...mapState("global", ["today"]),

    allProjects() {
      return _.orderBy(this.datas, "name", "asc");
    },

    closedProjects() {
      return this.allProjects.filter((p) => p.status.id != 1);
    },
  },

  methods: {
    ...mapMutations("projects", ["displayProjects", "updateTypes"]),
  },

  created() {
    this.$store.dispatch("projects/fetchProjects");
    this.$store.dispatch("projects/getTypeProject");

    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/style.scss";
.list-projects {
  grid-template-columns: 1fr;
  a:nth-child(odd) {
    @extend .bloc-gray;
  }
}
</style>
