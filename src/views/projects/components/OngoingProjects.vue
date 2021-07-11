<template>
  <ul class="list-projects" v-if="ongoingProjects.length">
    <li v-for="project in ongoingProjects" :key="project.id">
      <router-link
        :to="{
          name: 'SingleProject',
          params: { name: project.name },
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

export default {
  name: "OngoingProjects",
  data() {
    return {};
  },

  computed: {
    ...mapState("projects", ["datas"]),

    ongoingProjects() {
      return this.datas.filter((p) => p.status.id == 1);
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
