<template>
  <div class="main-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="main-container" v-else>
    <form @submit.prevent="trySubmit" class="myForm">
      <h2 class="title">
        Ajouter un projet
      </h2>
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
          <label>type de projet</label>
          <ul class="check-two">
            <li v-for="type in types" :key="type.id">
              <input
                required
                name="type"
                :id="type.id"
                type="radio"
                v-model="form.type"
                :value="type.id"
              />
              <label :for="type.id" v-if="type.id == 1" class="icon">
                <i class="fas fa-code"></i>
              </label>
              <label :for="type.id" v-else-if="type.id == 2" class="icon">
                <i class="fas fa-database"></i>
              </label>
              <label :for="type.id" v-else-if="type.id == 3" class="icon">
                <i class="fas fa-layer-group"></i>
              </label>
              <label :for="type.id" v-else-if="type.id == 4" class="icon">
                <i class="fab fa-wordpress"></i>
              </label>
              <label :for="type.id" v-else-if="type.id == 5" class="icon">
                <i class="fas fa-circle"></i>
              </label>
              <label :for="type.id" class="text">
                {{ type.name }}
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="one-col">
        <div>
          <label for="description">Description</label>
          <TextEditButtons
            :textBox="form.description"
            @changed="modifiedText"
          />
          <textarea
            v-model="form.description"
            class="small-plus"
            required
          ></textarea>
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
import { mapState, mapMutations } from "vuex";
import TextEditButtons from "../../components/TextEditButtons.vue";
export default {
  name: "CreateProject",
  components: { TextEditButtons },
  data() {
    return {
      form: {
        name: null,
        description: "",
        deadline: null,
        type: null,
      },
    };
  },

  computed: {
    ...mapState("projects", ["types", "isLoading"]),
  },

  methods: {
    ...mapMutations("projects", ["updateTypes"]),
    modifiedText(modified) {
      this.form.description = modified;
    },
    trySubmit() {
      this.$store.dispatch("projects/createProject", this.form);
    },
  },

  created() {
    this.$store.dispatch("projects/getTypeProject");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.myForm {
  width: 80%;
}
</style>
