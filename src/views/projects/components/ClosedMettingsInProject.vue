<template>
  <div class="item">
    <ul v-if="relatedClosedMeetings.length">
      <li
        class="list-in-project"
        v-for="meeting in relatedClosedMeetings"
        :key="meeting.id"
      >
        <router-link
          class="name"
          :to="{
            name: 'SingleTask',
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
  name: "ClosedMeetingsInProject",
  props: ["project"],
  data() {
    return {
      currentProject: this.project,
    };
  },

  computed: {
    ...mapState("meetings", ["datas", "isLoading"]),
    ...mapState("global", ["today", "formatDate"]),

    sortedMeetings() {
      return _.orderBy(this.datas, "date", "asc");
    },

    relatedClosedMeetings() {
      return this.sortedMeetings.filter(
        (m) => m.project.id == this.currentProject && m.status.id != 1
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
  },
};
</script>
