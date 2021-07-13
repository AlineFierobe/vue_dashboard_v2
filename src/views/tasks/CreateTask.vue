<template>
  <div class="main-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="small-container" v-else-if="!ongoingProject.length">
    <h2 class="title">Message Important</h2>
    <div class="empty">
      <i class="fas fa-exclamation-triangle"></i>
      <p>
        attend une minute, il n'y a aucun projet actif
      </p>
      <p>
        pour créer une tâche, tu dois déjà créer un projet !
      </p>
      <div class="add-btn">
        <router-link class="btn-dark" to="/create-project"
          >créer un projet</router-link
        >
      </div>
    </div>
  </div>
  <div class="main-container" v-else>
    <form class="myForm" @submit.prevent="trySubmit">
      <h2 class="title">
        ajouter une tâche
      </h2>
      <div class="two-col">
        <div>
          <label>Projet concerné</label>
          <select v-model="form.project" required>
            <option value="" selected disabled>sélectionne un projet</option>
            <option
              v-for="project in ongoingProject"
              :key="project.id"
              :value="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="status">Type</label>
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
                v-model="form.type"
                :value="type.id"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="two-col">
        <div>
          <label>Nom de la tâche</label>
          <input type="text" v-model="form.name" required />
        </div>
        <div>
          <label>Deadline</label>
          <input type="date" v-model="form.deadline" required />
        </div>
      </div>
      <div class="one-col">
        <div>
          <label>Description</label>
          <textarea v-model="form.description" class="medium"></textarea>
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
import _ from "lodash";
import { mapState } from "vuex";

export default {
  name: "CreateTask",
  data() {
    return {
      form: {
        name: null,
        deadline: null,
        description: "",
        type: null,
        project: null,
      },
    };
  },
  computed: {
    ...mapState("tasks", ["types", "isLoading"]),
    ...mapState("projects", ["datas"]),

    sortProject() {
      return _.orderBy(this.datas, "name", "asc");
    },

    ongoingProject() {
      return this.sortProject.filter((p) => p.status.id == 1);
    },
  },

  methods: {
    trySubmit() {
      this.$store.dispatch("tasks/createTask", this.form);
    },
  },

  created() {
    this.$store.dispatch("tasks/getTaskTypes");
    this.$store.dispatch("projects/fetchProjects");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.myForm {
  width: 70%;
}
.empty {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
