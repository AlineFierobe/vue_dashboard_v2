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
      <div class="desktop delete">
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
      <div class="desktop update">
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
          <span class="mobile">la tâche</span>
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
    ...mapState("global", ["today"]),
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
