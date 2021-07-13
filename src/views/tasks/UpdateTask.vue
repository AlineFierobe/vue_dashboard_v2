<template>
  <div class="main-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="main-container" v-else>
    <h2 class="title">
      modifier la tâche
    </h2>
    <form @submit.prevent="trySubmit" class="myForm">
      <div class="item-name">
        <input class="item-name" type="text" required v-model="current.name" />
      </div>
      <div class="three-col">
        <div>
          <label for="type">Type</label>
          <ul class="check-one">
            <li v-for="type in types" :key="type.id">
              <label :for="type.id">
                <span v-if="type.id == 1">
                  <i class="fas fa-clipboard-list"></i>
                </span>
                <span v-if="type.id == 2">
                  <i class="fas fa-bug"></i>
                </span>
                {{ type.name }}
              </label>
              <input
                required
                name="type"
                :id="type.id"
                type="radio"
                v-model="current.type.id"
                :value="type.id"
              />
            </li>
          </ul>
        </div>
        <div>
          <label>deadline</label>
          <input type="date" v-model="current.deadline" required />
        </div>
        <div>
          <label for="status">Status</label>
          <ul class="check-one">
            <li v-for="s in status" :key="s.id">
              <label :for="s.name">{{ s.name }}</label>
              <input
                :id="s.name"
                type="radio"
                v-model="current.status.id"
                :value="s.id"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="one-col">
        <div>
          <label>Description</label>
          <textarea
            v-model="current.description"
            class="large"
            required
          ></textarea>
        </div>
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
        <button class="btn-dark">modifier</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "UpdateTask",
  data() {
    return {};
  },

  computed: {
    ...mapState("tasks", ["current", "isLoading", "types"]),
    ...mapState("global", ["status"]),
  },

  methods: {
    ...mapMutations("tasks", ["updateCurrent", "updateTypes"]),
    ...mapMutations("global", ["getStatus"]),
    trySubmit() {
      this.$store.dispatch("tasks/updateTask", this.current);
    },
  },

  created() {
    this.$store.dispatch("tasks/fetchCurrentTask", this.$route.params.id);
    this.$store.dispatch("tasks/getTaskTypes");
    this.$store.dispatch("global/getStatus");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.myForm {
  width: 80%;
}
</style>
