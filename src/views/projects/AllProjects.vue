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
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  @include mobile {
    flex-direction: column;
  }
  .ongoing-project {
    flex: 2;
  }
  .closed-project {
    flex: 1;
  }
  .ongoing-project,
  .closed-project {
    max-height: 55vh;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1rem;
    margin: 2rem 0;
    @include mobile {
      max-height: initial;
      justify-items: center;
    }
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
