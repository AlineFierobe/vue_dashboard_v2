<template>
  <div class="small-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="small-container" v-else>
    <form @submit.prevent="trySubmit" class="myForm">
      <h2 class="title">clore cette réunion</h2>
      <div class="empty">
        <p>es-tu sûr de vouloir clôturer cette réunion ?</p>
      </div>
      <div class="one-col">
        <div>
          <label>compte rendu</label>
          <TextEditButtons :textBox="current.report" @changed="modifiedText" />
          <textarea v-model="current.report" class="large"></textarea>
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
        <button class="btn-dark">clore</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TextEditButtons from "../../components/TextEditButtons.vue";

export default {
  name: "CloseMeeting",
  components: { TextEditButtons },
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

    modifiedText(modified) {
      this.current.report = modified;
    },
    trySubmit() {
      this.$store.dispatch("meetings/closeMeeting", this.current);
    },
  },

  created() {
    this.$store.dispatch("meetings/fetchCurrentMeeting", this.$route.params.id);
    this.$store.dispatch("meetings/getMeetingTypes");
    this.$store.dispatch("global/getStatus");
  },
};
</script>
