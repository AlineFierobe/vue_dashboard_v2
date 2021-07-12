<template>
  <div class="small-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="small-container" v-else>
    <form @submit.prevent="trySubmit" class="myForm flex-center">
      <h2 class="title">
        Clore la tâche
      </h2>
      <h3 class="title">
        {{ current.name }}
      </h3>
      <div class="empty">
        <p>
          es-tu sûr de vouloir clore
          <span v-if="current.type.id == 1">cette</span><span v-else>ce</span>
          {{ current.type.name }} ?
        </p>
      </div>
      <div class="two-btn">
        <router-link
          class="btn-dark"
          :to="{
            name: 'SingleTask',
            params: { id: current.id },
          }"
        >
          annuler
        </router-link>
        <button class="btn-dark">clore</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CloseTask",
  data() {
    return {};
  },

  computed: {
    ...mapState("tasks", ["current", "isLoading"]),
  },

  methods: {
    ...mapMutations("tasks", ["updateCurrent"]),

    trySubmit() {
      this.$store.dispatch("tasks/closeTask", this.current);
    },
  },

  created() {
    this.$store.dispatch("tasks/fetchCurrentTask", this.$route.params.id);
  },
};
</script>
