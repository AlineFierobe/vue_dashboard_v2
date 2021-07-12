<template>
  <div class="main-container">
    <div class="title-add">
      <h2>
        mes réunions
      </h2>
      <router-link class="btn-dark" to="/meetings">
        ajouter une réunion
      </router-link>
    </div>
    <div class="loading" v-if="isLoading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
    <div v-else-if="!isLoading && !ongoingMeetings.length" class="empty-list">
      <i class="far fa-calendar"></i>
      <span>Aucune réunion à venir</span>
    </div>
    <ul class="list-t-m" v-else>
      <router-link
        v-for="meeting in ongoingMeetings"
        :key="meeting.id"
        :to="{
          name: 'SingleMeeting',
          params: { id: meeting.id },
        }"
        class="name"
      >
        <li
          :class="
            meeting.date < today
              ? 'passed-bloc'
              : meeting.date == today && meeting.time < now
              ? 'passed-bloc'
              : meeting.date == today && meeting.time > now
              ? 'forToday-bloc'
              : ''
          "
        >
          <div class="one">
            <span v-if="meeting.type.id == 1">
              <i class="fas fa-phone-alt"></i>
            </span>
            <span v-else-if="meeting.type.id == 2">
              <i class="fas fa-video"></i>
            </span>
            <span v-else-if="meeting.type.id == 3">
              <i class="fas fa-chalkboard-teacher"></i>
            </span>
            <span v-else-if="meeting.type.id == 4">
              <i class="fas fa-handshake"></i>
            </span>
          </div>
          <div class="two">
            <div class="name">
              {{ meeting.name }}
            </div>
            <div class="project">
              {{ meeting.project.name }}
            </div>
          </div>
          <div class="three">
            le {{ $filters.formatDate(meeting.date) }} à
            {{ $filters.formatTime(meeting.time) }}
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
import { mapMutations, mapState } from "vuex";

export default {
  name: "AllMeetings",
  data() {
    return {};
  },

  computed: {
    ...mapState("meetings", ["datas", "isLoading"]),
    ...mapState("global", ["today", "now"]),

    orderMeetings() {
      return _.orderBy(this.datas, ["date", "time"], ["asc", "asc"]);
    },

    ongoingMeetings() {
      return this.orderMeetings.filter((m) => m.status.id == 1);
    },
  },

  methods: {
    ...mapMutations("meetings", ["displayMeetings"]),
  },

  created() {
    this.$store.dispatch("meetings/fetchMeetings");
    // function to compare date
    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
    this.$store.dispatch("global/timeToCompare", today);
    // console.log(this.datas);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";

.loading {
  height: 80%;
}
</style>
