<template>
  <div class="item">
    <div class="loading" v-if="isLoading">
      <img src="../../../assets/loading.gif" alt="loading" />
    </div>
    <ul v-else-if="relatedActiveTasks.length">
      <li
        class="list-in-project"
        v-for="task in relatedActiveTasks"
        :key="task.id"
        :class="
          task.deadline < today
            ? 'passed'
            : task.deadline == today
            ? 'forToday'
            : ''
        "
      >
        <router-link
          class="name"
          :to="{
            name: 'SingleTask',
            params: { id: task.id },
          }"
        >
          <span v-if="task.type.id == 1">
            <i class="fas fa-clipboard-list"></i>
          </span>
          <span v-else-if="task.type.id == 2">
            <i class="fas fa-bug"></i>
          </span>
          {{ task.name }}
        </router-link>
        <div class="deadline">
          {{ $filters.formatDate(task.deadline) }}
        </div>
      </li>
    </ul>
    <div class="empty" v-else>
      aucune tâche
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import _ from "lodash";

export default {
  name: "ActiveTasksInProject",
  props: ["project"],
  data() {
    return {
      currentProject: this.project,
    };
  },
  computed: {
    ...mapState("tasks", ["datas", "isLoading"]),
    ...mapState("global", ["today", "formatDate"]),

    sortedTasks() {
      return _.orderBy(this.datas, "deadline", "asc");
    },

    relatedActiveTasks() {
      return this.sortedTasks.filter(
        (t) => t.project.id == this.currentProject && t.status.id == 1
      );
    },
  },

  methods: {
    ...mapMutations("tasks", ["displayTasks"]),
  },

  created() {
    // get tasks from database
    this.$store.dispatch("tasks/fetchTasks");

    // function to compare date
    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/style.scss";
</style>
