<template>
  <div class="loading" v-if="isLoading">
    <img src="../../../assets/loading.gif" alt="loading" />
  </div>
  <div class="empty" v-else-if="!forToday.length">
    <i class="far fa-clipboard"></i>
    <p>tu as terminé tes tâches de la journée</p>
  </div>
  <ul class="list-homepage my-list" v-else>
    <router-link
      v-for="task in forToday"
      :key="task.id"
      :to="{
        name: 'SingleTask',
        params: { id: task.id },
      }"
      class="name"
    >
      <li :class="task.deadline < today ? 'passed-bloc' : ''">
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
</template>

<script>
import { mapMutations, mapState } from "vuex";
import _ from "lodash";

export default {
  name: "TodayTasks",
  data() {
    return {};
  },
  computed: {
    ...mapState("tasks", ["datas", "isLoading"]),
    ...mapState("global", ["today"]),

    sortedTasks() {
      return _.orderBy(this.datas, "deadline", "asc");
    },

    forToday() {
      return this.sortedTasks.filter(
        (t) => t.deadline <= this.today && t.status.id == 1
      );
    },
  },

  methods: {
    ...mapMutations("tasks", ["displayTasks"]),
  },
  created() {
    this.$store.dispatch("tasks/fetchTasks");

    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
  },
};
</script>

<style lang="scss" scoped>
.loading {
  height: 85%;
}
</style>
