<template>
  <div v-if="isLoading" class="loading">
    <img src="../../../assets/loading.gif" alt="loading" />
  </div>
  <ul class="list-projects" v-else-if="ongoingProjects.length">
    <router-link
      :to="{
        name: 'SingleProject',
        params: { id: project.id },
      }"
      v-for="project in ongoingProjects"
      :key="project.id"
      :class="
        project.deadline < today
          ? 'passed-bloc'
          : project.deadline == today
          ? 'forToday-bloc'
          : 'bloc-gray'
      "
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
    aucun projet en cours
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
    ...mapState("global", ["today"]),

    allProjects() {
      return _.orderBy(this.datas, "deadline", "asc");
    },

    ongoingProjects() {
      return this.allProjects.filter((p) => p.status.id == 1);
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
  grid-template-columns: 1fr 1fr;
}
</style>
