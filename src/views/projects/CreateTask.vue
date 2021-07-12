<template>
  <div class="main-container">
    <h2 class="title">
      ajouter une tâche
    </h2>
    <h3 class="title">
      {{ current.name }}
    </h3>
    <form class="myForm" @submit.prevent="trySubmit">
      <div class="one-col">
        <div>
          <label>Nom de la tâche</label>
          <input type="text" v-model="form.name" required />
        </div>
      </div>
      <div class="two-col">
        <div>
          <label>Type</label>
          <ul class="check">
            <li v-for="type in types" :key="type.id">
              <label :for="type.id">
                <span v-if="type.id == 1">
                  <i class="fas fa-clipboard-list"></i>
                </span>
                <span v-if="type.id == 2">
                  <i class="fas fa-bug"></i>
                </span>
                <span>
                  {{ type.name }}
                </span>
              </label>
              <input
                :id="type.id"
                type="radio"
                v-model="form.type"
                :value="type.id"
              />
            </li>
          </ul>
        </div>
        <div>
          <label>Deadline</label>
          <input type="date" v-model="form.deadline" required />
        </div>
      </div>

      <div class="one-col">
        <div>
          <label>Description</label>
          <textarea v-model="form.description" class="small"></textarea>
        </div>
      </div>
      <div class="two-btn">
        <router-link class="btn-dark" to="/tasks">
          annuler
        </router-link>
        <button class="btn-dark">
          ajouter
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CreateTask",
  data() {
    return {
      form: {
        name: null,
        deadline: null,
        description: "",
        type: 0,
        project: this.$route.params.id,
      },
    };
  },
  computed: {
    ...mapState("projects", ["current", "isLoading"]),
    ...mapState("tasks", ["types"]),
  },

  methods: {
    ...mapMutations("projects", ["currentProject"]),
    ...mapMutations("tasks", ["displayTasks"]),

    trySubmit() {
      this.$store.dispatch("tasks/createTask", this.form);
    },
  },

  created() {
    this.$store.dispatch("projects/fetchCurrentProject", this.$route.params.id);
    this.$store.dispatch("tasks/getTaskTypes");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.myForm {
  width: 80%;
}
</style>
