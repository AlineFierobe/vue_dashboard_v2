<template>
  <div class="main-container">
    <div class="title-add">
      <h2>
        mes tâches
      </h2>
      <router-link class="btn-dark" to="/create-task">
        ajouter une tâche
      </router-link>
    </div>
    <!-- LIST TASKS -->
    <div class="loading" v-if="isLoading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
    <div v-else-if="!isLoading && !ongoingTasks.length" class="empty">
      <i class="far fa-clipboard"></i>
      <p>on dirait bien qu'il n'y a aucune tâche à faire</p>
    </div>
    <ul class="list-t-m" v-else>
      <router-link
        v-for="task in ongoingTasks"
        :key="task.id"
        :to="{
          name: 'SingleTask',
          params: { id: task.id },
        }"
        class="name"
      >
        <li
          :class="
            task.deadline < today
              ? 'passed-bloc'
              : task.deadline == today
              ? 'forToday-bloc'
              : ''
          "
        >
          <div class="one">
            <span v-if="task.type.id == 1">
              <i class="fas fa-clipboard-list"></i>
            </span>
            <span v-else-if="task.type.id == 2">
              <i class="fas fa-bug"></i>
            </span>
          </div>
          <div class="two">
            <div class="name">
              {{ task.name }}
            </div>

            <div class="project">
              {{ task.project.name }}
            </div>
          </div>
          <div class="three">
            {{ $filters.formatDate(task.deadline) }}
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapMutations } from "vuex";

export default {
  name: "AllTasks",
  data() {
    return {};
  },

  computed: {
    ...mapState("tasks", ["datas", "isLoading"]),
    ...mapState("global", ["today", "formatDate"]),

    orderTasks() {
      return _.orderBy(this.datas, "deadline", "asc");
    },

    ongoingTasks() {
      return this.orderTasks.filter((t) => t.status.id == 1);
    },
  },

  methods: {
    ...mapMutations("task", ["displayTasks"]),
  },

  created() {
    this.$store.dispatch("tasks/fetchTasks");

    // function to compare date
    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";

.loading {
  height: 80%;
}
</style>
