<template>
  <div class="small-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="main-container" v-else>
    <form @submit.prevent="tryUpdate" class="myForm">
      <h2 class="title">Modifier le projet</h2>
      <div class="item-name">
        <input class="item-name" type="text" v-model="current.name" required />
      </div>
      <div class="two-col">
        <div>
          <label for="date">Deadline</label>
          <input type="date" v-model="current.deadline" required />
        </div>
        <div>
          <label for="status">Status</label>
          <ul class="check-one">
            <li v-for="s in status" :key="s.id">
              <label :for="s.id">{{ s.name }}</label>
              <input
                :id="s.id"
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
          <label>type de projet</label>
          <ul class="check-two">
            <li v-for="type in types" :key="type.id">
              <input
                :id="type.name"
                type="radio"
                v-model="current.type.id"
                :value="type.id"
              />
              <label :for="type.name" v-if="type.id == 1" class="icon">
                <i class="fas fa-code"></i>
              </label>
              <label :for="type.name" v-else-if="type.id == 2" class="icon">
                <i class="fas fa-database"></i>
              </label>
              <label :for="type.name" v-else-if="type.id == 3" class="icon">
                <i class="fas fa-layer-group"></i>
              </label>
              <label :for="type.name" v-else-if="type.id == 4" class="icon">
                <i class="fab fa-wordpress"></i>
              </label>
              <label :for="type.name" v-else-if="type.id == 5" class="icon">
                <i class="fas fa-circle"></i>
              </label>
              <label :for="type.name" class="text">
                {{ type.name }}
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="one-col">
        <div>
          <label>description</label>
          <TextEditButtons
            :textBox="current.description"
            @changed="modifiedText"
          />
          <textarea
            v-model="current.description"
            class="small"
            required
          ></textarea>
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
        <button class="btn-dark">modifier</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TextEditButtons from "../../components/TextEditButtons.vue";

export default {
  name: "UpdateProject",
  components: { TextEditButtons },
  data() {
    return {};
  },

  computed: {
    ...mapState("projects", ["current", "isLoading", "types"]),
    ...mapState("global", ["status"]),
  },

  methods: {
    ...mapMutations("projects", ["currentProject", "updateTypes"]),

    modifiedText(modified) {
      this.current.description = modified;
    },
    tryUpdate() {
      this.$store.dispatch("projects/updateProject", this.current);
    },
  },

  created() {
    this.$store.dispatch("projects/getTypeProject");
    this.$store.dispatch("projects/fetchCurrentProject", this.$route.params.id);
    this.$store.dispatch("global/getStatus");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.myForm {
  width: 80%;
  .btn-dark {
    cursor: pointer;
  }
}
.name {
  text-align: center;
}
</style>
