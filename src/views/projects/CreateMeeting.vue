<template>
  <div class="main-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="main-container" v-else>
    <form @submit.prevent="trySubmit" class="myForm">
      <h2 class="title">
        Créer une réunion
      </h2>
      <h3 class="title">
        {{ current.name }}
      </h3>
      <div class="three-col">
        <div>
          <label>nom de la réunion</label>
          <input type="text" v-model="form.name" required />
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
      <div class="two-col">
        <div>
          <label for="type">Type de réunion</label>
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
          <textarea v-model="form.description" class="small"></textarea>
        </div>
      </div>
      <div class="two-btn">
        <router-link
          class="btn-dark"
          :to="{
            name: 'SingleProject',
            params: { id: current.id },
          }"
        >
          annuler
        </router-link>
        <button class="btn-dark">créer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "CreateMeeting",
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
        project: this.$route.params.id,
      },
    };
  },

  computed: {
    ...mapState("meetings", ["types", "isLoading"]),
    ...mapState("global", ["today", "now"]),
    ...mapState("projects", ["current"]),
  },

  methods: {
    ...mapMutations("projects", ["updateCurrent"]),
    trySubmit() {
      this.$store.dispatch("meetings/createMeeting", this.form);
    },
  },

  created() {
    this.$store.dispatch("meetings/getMeetingTypes");
    this.$store.dispatch("projects/fetchCurrentProject", this.$route.params.id);

    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
    this.$store.dispatch("global/timeToCompare", today);
  },
};
</script>
