<template>
  <div class="main-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="main-container" v-else>
    <div class="title-date-status">
      <h2>
        {{ current.name }}
      </h2>
      <div
        class="date"
        :class="
          current.deadline < today && current.status.id == 1
            ? 'passed'
            : current.deadline == today && current.status.id == 1
            ? 'forToday'
            : ''
        "
      >
        deadline : {{ $filters.formatDate(current.deadline) }}
      </div>
      <div
        class="status"
        :class="
          current.status.id == 3
            ? 'btn-red'
            : current.status.id == 2
            ? 'btn-green'
            : 'btn-light'
        "
      >
        {{ current.status.name }}
      </div>
    </div>
    <!-- PROJECT DETAILS -->
    <div class="bloc-details-project">
      <!-- DESCRIPTION -->
      <div class="description">
        {{ current.description }}
      </div>
      <!-- MEETINGS -->
      <div class="list border">
        <div class="title-add">
          <h3>réunions</h3>
          <router-link
            class="desktop"
            :to="{
              name: 'CreateMeetingInProject',
              params: { id: current.id },
            }"
          >
            <i class="fas fa-plus-square"></i>
          </router-link>
        </div>
        <div class="list-grid">
          <div class="ongoing">
            <h4 class="title">prévues</h4>
            <ActiveMeetingsInProject :project="current.id" />
          </div>
          <div class="closed">
            <h4 class="title">closes</h4>
            <ClosedMeetingsInProject :project="current.id" />
          </div>
        </div>
      </div>
      <!-- TASKS -->
      <div class="list">
        <div class="title-add">
          <h3>tâches</h3>
          <router-link
            :to="{
              name: 'CreateTaskInProject',
              params: { id: current.id },
            }"
            class="desktop"
          >
            <i class="fas fa-plus-square"></i>
          </router-link>
        </div>
        <div class="list-grid">
          <div class="ongoing">
            <h4 class="title">en cours</h4>
            <ActiveTasksInProject :project="current.id" />
          </div>
          <div class="closed">
            <h4 class="title">closes</h4>
            <ClosedTasksInProject :project="current.id" />
          </div>
        </div>
      </div>
      <!-- BTN DELETE -->
      <div class="desktop btn-delete">
        <router-link
          class="btn-red"
          :to="{
            name: 'DeleteProject',
            params: { id: current.id },
          }"
        >
          Supprimer
        </router-link>
      </div>
      <!-- BTN UPDATE -->
      <div class="desktop btn-update">
        <router-link
          class="btn-dark"
          :to="{
            name: 'UpdateProject',
            params: { id: current.id },
          }"
        >
          modifier
        </router-link>
      </div>
      <!-- BTN CLOSE -->
      <div class="btn-close" v-if="current.status.id == 1">
        <router-link
          class="btn-dark"
          :to="{
            name: 'CloseProject',
            params: { id: current.id },
          }"
        >
          clore
          <span class="mobile">
            le projet
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ActiveTasksInProject from "./components/ActiveTasksInProject";
import ActiveMeetingsInProject from "./components/ActiveMeetingsInProject";
import ClosedTasksInProject from "./components/ClosedTasksInProject";
import ClosedMeetingsInProject from "./components/ClosedMettingsInProject";

export default {
  name: "SingleProject",
  components: {
    ActiveTasksInProject,
    ActiveMeetingsInProject,
    ClosedTasksInProject,
    ClosedMeetingsInProject,
  },
  data() {
    return {};
  },

  computed: {
    ...mapState("projects", ["current", "isLoading"]),
    ...mapState("global", ["today"]),
  },

  methods: {
    ...mapMutations("projects", ["currentProject"]),
  },

  created() {
    this.$store.dispatch("projects/fetchCurrentProject", this.$route.params.id);

    // function to compare date
    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
  },

  updated() {
    let description = document.querySelector(".description");
    description.innerHTML = this.current.description;
  },
};
</script>

<style lang="scss" scoped>
@import ".././../assets/sass/style.scss";
.bloc-details-project {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  justify-items: center;
  margin-top: 1rem;
  gap: 1rem 2rem;
  @include mobile {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    gap: 3rem;
  }
}
.description {
  width: 100%;
  height: 50vh;
  overflow: auto;
  background: $gray;
  padding: 1rem;
  white-space: pre-line;
  text-align: justify;
  @include mobile {
    height: auto;
  }
}

.list {
  width: 100%;
  &-grid {
    height: 40vh;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
    .item {
      height: 15vh;
      overflow: auto;
      margin: 0.5rem auto;
    }
  }
}

.border {
  border-right: 1px solid $dark;
  padding-right: 3rem;
  @include mobile {
    border-right: none;
    padding-right: 0;
  }
}
</style>
