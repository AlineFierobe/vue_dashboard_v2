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
        pour créer une réunion, tu dois déjà créer un projet !
      </p>
      <div class="add-btn">
        <router-link class="btn-dark" to="/create-project"
          >créer un projet</router-link
        >
      </div>
    </div>
  </div>
  <div class="main-container" v-else>
    <form @submit.prevent="trySubmit" class="myForm">
      <h2 class="title">
        Créer une réunion
      </h2>
      <div class="three-col">
        <div>
          <label>projet concerné</label>
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
          <label>date</label>
          <input type="date" v-model="form.date" required />
        </div>
        <div>
          <label>heure</label>
          <input type="time" v-model="form.time" required />
        </div>
      </div>
      <div class="three-col">
        <div>
          <label>nom de la réunion</label>
          <input type="text" v-model="form.name" required />
        </div>
        <div>
          <label for="type">Type de réunion</label>
          <ul class="check-two">
            <li v-for="type in types" :key="type.id">
              <input
                required
                :id="type.id"
                type="radio"
                v-model="form.type"
                :value="type.id"
                name="type"
              />
              <label :for="type.id" v-if="type.id == 1" class="icon">
                <i class="fas fa-phone-alt"></i>
              </label>
              <label :for="type.id" v-else-if="type.id == 2" class="icon">
                <i class="fas fa-video"></i>
              </label>
              <label :for="type.id" v-else-if="type.id == 3" class="icon">
                <i class="fas fa-chalkboard-teacher"></i>
              </label>
              <label :for="type.id" v-else-if="type.id == 4" class="icon">
                <i class="fas fa-handshake"></i>
              </label>
              <label :for="type.id" class="text">
                {{ type.name }}
              </label>
            </li>
          </ul>
        </div>
        <div>
          <label>information supplémentaire</label>
          <input type="text" v-model="form.more" />
        </div>
      </div>
      <div class="one-col">
        <div>
          <label>description</label>
          <TextEditButtons
            :textBox="form.description"
            @changed="modifiedText"
          />
          <textarea v-model="form.description" class="small-plus"></textarea>
        </div>
      </div>
      <div class="two-btn">
        <router-link class="btn-dark" to="/meetings">
          annuler
        </router-link>
        <button class="btn-dark">créer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";
import TextEditButtons from "../../components/TextEditButtons.vue";

export default {
  name: "CreateMeeting",
  components: { TextEditButtons },
  data() {
    return {
      form: {
        name: null,
        date: null,
        time: null,
        description: "",
        more: "",
        report: "",
        type: null,
        project: 0,
      },
    };
  },

  computed: {
    ...mapState("meetings", ["types", "isLoading"]),
    ...mapState("global", ["today", "now"]),
    ...mapState("projects", ["datas"]),

    sortProject() {
      return _.orderBy(this.datas, "name", "asc");
    },

    ongoingProject() {
      return this.sortProject.filter((p) => p.status.id == 1);
    },
  },

  methods: {
    modifiedText(modified) {
      this.form.description = modified;
    },

    trySubmit() {
      this.$store.dispatch("meetings/createMeeting", this.form);
    },
  },

  created() {
    this.$store.dispatch("meetings/getMeetingTypes");
    this.$store.dispatch("projects/fetchProjects");

    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
    this.$store.dispatch("global/timeToCompare", today);
  },
};
</script>

<style lang="scss" scoped>
.empty {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
