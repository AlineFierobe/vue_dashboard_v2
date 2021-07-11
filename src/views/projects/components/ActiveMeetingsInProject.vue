<template>
  <div class="item">
    <ul v-if="relatedActiveMeetings.length">
      <li
        class="list-in-project"
        v-for="meeting in relatedActiveMeetings"
        :key="meeting.id"
        :class="
          meeting.date < today
            ? 'passed'
            : meeting.date == today && meeting.time < now
            ? 'passed'
            : meeting.date == today && meeting.time > now
            ? 'forToday'
            : ''
        "
      >
        <router-link
          class="name"
          :to="{
            name: 'SingleMeeting',
            params: { id: meeting.id },
          }"
        >
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
          {{ meeting.name }}
        </router-link>
        <div class="date">
          {{ $filters.formatDate(meeting.date) }} à
          {{ $filters.formatTime(meeting.time) }}
        </div>
      </li>
    </ul>
    <div v-else class="empty">
      aucune réunion
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import _ from "lodash";

export default {
  name: "ActiveMeetingsInProject",
  props: ["project"],
  data() {
    return {
      currentProject: this.project,
    };
  },

  computed: {
    ...mapState("meetings", ["datas", "isLoading"]),
    ...mapState("global", ["today", "now"]),

    sortedMeetings() {
      return _.orderBy(this.datas, ["date", "time"], ["asc", "asc"]);
    },

    relatedActiveMeetings() {
      return this.sortedMeetings.filter(
        (m) => m.project.id == this.currentProject && m.status.id == 1
      );
    },
  },

  methods: {
    ...mapMutations("meetings", ["displayMeetings"]),
  },

  created() {
    // get tasks from database
    this.$store.dispatch("meetings/fetchMeetings");

    // function to compare date
    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
    this.$store.dispatch("global/timeToCompare", today);
  },
};
</script>
