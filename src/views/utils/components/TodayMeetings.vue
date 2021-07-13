<template>
  <div class="loading" v-if="isLoading">
    <img src="../../../assets/loading.gif" alt="loading" />
  </div>
  <div class="empty" v-else-if="!forToday.length">
    <i class="far fa-calendar"></i>
    <p>tu n'as plus de réunion aujourd'hui</p>
  </div>
  <ul class="list-homepage my-list" v-else>
    <router-link
      v-for="meeting in forToday"
      :key="meeting.id"
      :to="{ name: 'SingleMeeting', params: { id: meeting.id } }"
    >
      <li
        :class="
          meeting.date < today
            ? 'passed-bloc'
            : meeting.date == today && meeting.time < now
            ? 'passed-bloc'
            : 'bloc-gray'
        "
      >
        <div class="one">
          <span v-if="meeting.type.id == 1" :title="meeting.type.name">
            <i class="fas fa-phone-alt"></i>
          </span>
          <span v-else-if="meeting.type.id == 2" :title="meeting.type.name">
            <i class="fas fa-video"></i>
          </span>
          <span v-else-if="meeting.type.id == 3" :title="meeting.type.name">
            <i class="fas fa-chalkboard-teacher"></i>
          </span>
          <span v-else-if="meeting.type.id == 4" :title="meeting.type.name">
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
          <span v-if="meeting.date < today">
            le&nbsp;{{ $filters.formatDate(meeting.date) }}
          </span>
          <span v-else>aujourd'hui</span>
          à&nbsp;{{ $filters.formatTime(meeting.time) }}
        </div>
      </li>
    </router-link>
  </ul>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import _ from "lodash";

export default {
  name: "TodayMeetings",
  data() {
    return {};
  },
  computed: {
    ...mapState("meetings", ["datas", "isLoading"]),
    ...mapState("global", ["today", "now"]),

    sortedMeetings() {
      return _.orderBy(this.datas, ["date", "time"], ["asc", "asc"]);
    },

    forToday() {
      return this.sortedMeetings.filter(
        (m) => m.date <= this.today && m.status.id == 1
      );
    },
  },

  methods: {
    ...mapMutations("meetings", ["displayMeetings"]),
  },
  created() {
    this.$store.dispatch("meetings/fetchMeetings");

    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
    this.$store.dispatch("global/timeToCompare", today);
  },
};
</script>

<style lang="scss" scoped>
.loading {
  height: 85%;
}
</style>
