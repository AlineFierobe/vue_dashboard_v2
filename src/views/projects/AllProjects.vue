<template>
  <div class="main-container">
    <div class="title-add">
      <h2>
        mes projets
      </h2>
      <router-link class="desktop btn-dark" to="create-project">
        ajouter un projet
      </router-link>
    </div>
    <!-- START PROJECT BLOC -->
    <div class="bloc-projects">
      <!-- ONGOING PROJECTS -->
      <div class="ongoing-project border">
        <div class="title">
          <h3>en cours</h3>
        </div>
        <OngoingProjects />
      </div>
      <!-- CLOSED PROJECTS -->
      <div class="closed-project">
        <div class="title">
          <h3>clos</h3>
        </div>
        <ClosedProjects />
      </div>
    </div>
  </div>
</template>

<script>
import OngoingProjects from "./components/OngoingProjects";
import ClosedProjects from "./components/ClosedProjects";

export default {
  name: "AllProjects",
  components: { OngoingProjects, ClosedProjects },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("global/removeMenu");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";

.bloc-projects {
  height: 83%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.border {
  border-right: 1px $dark solid;
  padding-right: 2rem;
  @include mobile {
    border-right: none;
    padding-right: 0;
  }
}
</style>
