<template>
  <div class="main-container">
    <h2 class="title">
      Ajouter un projet
    </h2>
    <form @submit.prevent="trySubmit" class="myForm">
      <div class="two-col">
        <div>
          <label for="name">Nom du Projet</label>
          <input type="text" v-model="form.name" required />
        </div>
        <div>
          <label for="deadline">Deadline</label>
          <input type="date" v-model="form.deadline" required />
        </div>
      </div>
      <div class="one-col">
        <div>
          <label for="description">Description</label>
          <textarea v-model="form.description" class="large"></textarea>
        </div>
      </div>
      <div class="two-btn">
        <router-link to="/projects" class="btn-dark">
          annuler
        </router-link>
        <button class="btn-dark">ajouter</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateProject",
  data() {
    return {
      form: {
        name: null,
        description: "",
        deadline: null,
      },
    };
  },

  created() {
    this.deadline = new Date();
  },

  methods: {
    trySubmit() {
      this.$store.dispatch("projects/createProject", this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.myForm {
  width: 80%;
}
</style>
