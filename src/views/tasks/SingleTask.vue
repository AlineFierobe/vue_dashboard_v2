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
    <!-- BLOC DETAILS -->
    <div class="bloc-details">
      <div class="project">
        <div>
          projet concerné
        </div>

        <router-link
          :to="{
            name: 'SingleProject',
            params: { id: current.project.id },
          }"
        >
          {{ current.project.name }}
        </router-link>
      </div>
      <div class="description">
        {{ current.description }}
      </div>
      <div class="delete">
        <router-link
          class="btn-red"
          :to="{
            name: 'DeleteTask',
            params: { id: current.id },
          }"
        >
          supprimer
        </router-link>
      </div>
      <div class="update">
        <router-link
          class="btn-dark"
          :to="{
            name: 'UpdateTask',
            params: { id: current.id },
          }"
        >
          modifier
        </router-link>
      </div>
      <div class="close" v-if="current.status.id == 1">
        <router-link
          class="btn-dark"
          :to="{
            name: 'CloseTask',
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
import { mapMutations, mapState } from "vuex";

export default {
  name: "SingleTask",
  data() {
    return {};
  },

  computed: {
    ...mapState("tasks", ["current", "isLoading"]),
    ...mapState("global", ["today", "formatDate"]),
  },

  methods: {
    ...mapMutations("tasks", ["updateCurrent"]),
  },

  created() {
    this.$store.dispatch("tasks/fetchCurrentTask", this.$route.params.id);

    // function to compare date
    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";

.bloc-details {
  width: 100%;
  height: 84%;
  margin-top: 1rem;
  display: grid;
  grid:
    "project description description" 1fr
    "delete update close" auto
    / 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  .project {
    width: 70%;
    grid-area: project;
    border-top: 1px solid $dark;
    border-bottom: 1px solid $dark;
    padding: 3rem 1rem;
    margin: 3rem;
    text-align: center;
    a {
      display: inline-block;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 700;
      margin-top: 2rem;
    }
  }
  .description {
    height: 47vh;
    overflow: auto;
    grid-area: description;
    text-align: justify;
    justify-self: start;
    align-self: start;
    white-space: pre-line;
    line-height: 2rem;
  }
  .delete {
    grid-area: delete;
  }
  .update {
    grid-area: update;
  }
  .close {
    grid-area: close;
  }
}
</style>
