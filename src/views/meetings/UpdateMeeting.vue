<template>
  <div class="main-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="main-container" v-else>
    <h2 class="title">
      modifier la réunion
    </h2>
    <form @submit.prevent="trySubmit" class="myForm">
      <div class="item-name">
        <input class="item-name" type="text" v-model="current.name" />
      </div>
      <div class="three-col">
        <div>
          <label>date</label>
          <input type="date" v-model="current.date" />
        </div>
        <div>
          <label>heure</label>
          <input type="time" v-model="current.time" />
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
      <div class="two-col">
        <div>
          <label for="type">Type</label>
          <ul class="check-two">
            <li v-for="type in types" :key="type.id">
              <input
                :id="type.id"
                type="radio"
                v-model="current.type.id"
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
          <input type="text" v-model="current.more" />
        </div>
      </div>
      <div class="two-col" v-if="current.status.id == 2">
        <div>
          <label>description</label>
          <textarea v-model="current.description" class="small"></textarea>
        </div>
        <div>
          <label>compte rendu</label>
          <textarea v-model="current.report" class="small"></textarea>
        </div>
      </div>
      <div class="one-col" v-else>
        <div>
          <label>description</label>
          <textarea v-model="current.description" class="small"></textarea>
        </div>
      </div>
      <div class="two-btn">
        <router-link
          class="btn-dark"
          :to="{
            name: 'SingleMeeting',
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

export default {
  name: "UpdateMeeting",
  data() {
    return {};
  },
  computed: {
    ...mapState("meetings", ["current", "types", "isLoading"]),
    ...mapState("global", ["status"]),
  },

  methods: {
    ...mapMutations("meetings", ["updateCurrent", "updateTypes"]),
    ...mapMutations("global", ["getStatus"]),
    trySubmit() {
      this.$store.dispatch("meetings/updateMeeting", this.current);
    },
  },

  created() {
    this.$store.dispatch("meetings/fetchCurrentMeeting", this.$route.params.id);
    this.$store.dispatch("meetings/getMeetingTypes");
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
