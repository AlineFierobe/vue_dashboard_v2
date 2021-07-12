<template>
  <div class="small-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="small-container" v-else>
    <form @submit.prevent="trySubmit" class="myForm flex-center">
      <h2 class="title">
        Supprimer la réunion
      </h2>
      <h3 class="title">
        {{ current.name }}
      </h3>
      <div class="empty">
        <p>la suppression est définitive</p>
        <p>es-tu sûr de vouloir continuer ?</p>
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
        <button class="btn-red">supprimer</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "DeleteMeeting",
  data() {
    return {};
  },
  computed: {
    ...mapState("meetings", ["current", "types", "isLoading"]),
  },

  methods: {
    ...mapMutations("meetings", ["updateCurrent", "updateTypes"]),
    trySubmit() {
      this.$store.dispatch("meetings/deleteMeeting", this.current);
    },
  },

  created() {
    this.$store.dispatch("meetings/fetchCurrentMeeting", this.$route.params.id);
  },
};
</script>
