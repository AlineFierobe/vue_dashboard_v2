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
    <div class="bloc-details">
      <!-- DESCRIPTION -->
      <div class="description">
        {{ current.description }}
      </div>
      <!-- MEETINGS -->
      <div class="list border">
        <div class="title-add">
          <h3>réunions</h3>
          <router-link
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
      <div class="btn-delete">
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
      <div class="btn-update">
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
      <div class="btn-close">
        <router-link
          class="btn-dark"
          :to="{
            name: 'CloseProject',
            params: { id: current.id },
          }"
        >
          clore
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
    ...mapState("global", ["today", "formatDate"]),
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
};
</script>

<style lang="scss" scoped>
@import ".././../assets/sass/style.scss";
.bloc-details {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  justify-items: center;
  gap: 2rem;
}
.description {
  width: 100%;
  height: 50vh;
  overflow: auto;
  background: $gray;
  padding: 1rem;
  white-space: pre-line;
  text-align: justify;
}

.list {
  width: 100%;
  &-grid {
    height: 93%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
    .item {
      height: 17vh;
      overflow: auto;
      margin: 0.5rem auto;
    }
  }
}

.border {
  border-right: 1px solid $dark;
  padding-right: 3rem;
}
</style>
