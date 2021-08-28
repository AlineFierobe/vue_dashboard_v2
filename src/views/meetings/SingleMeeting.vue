<template>
  <div class="main-container" v-if="isLoading">
    <div class="loading">
      <img src="../../assets/loading.gif" alt="loading" />
    </div>
  </div>
  <div class="main-container" v-else>
    <div class="title-date-status">
      <h2>
        {{ current.name }}
      </h2>
      <div
        class="date"
        :class="
          current.date < today && current.status.id == 1
            ? 'passed'
            : current.date == today &&
              current.time < now &&
              current.status.id == 1
            ? 'passed'
            : current.date == today &&
              current.time > now &&
              current.status.id == 1
            ? 'forToday'
            : ''
        "
      >
        prévue le {{ $filters.formatDate(current.date) }} à
        {{ $filters.formatTime(current.time) }}
      </div>
      <div
        class="status"
        :class="
          current.status.id == 3
            ? 'btn-red'
            : current.status.id == 2
            ? 'btn-green'
            : 'btn-light'
        "
      >
        {{ current.status.name }}
      </div>
    </div>
    <!-- BLOC DETAILS -->
    <div class="bloc-details">
      <div class="project">
        <div>
          projet concerné
        </div>
        <router-link
          :to="{
            name: 'SingleProject',
            params: { id: current.project.id },
          }"
        >
          {{ current.project.name }}
        </router-link>
        <div class="type">
          <div class="type-icon">
            <span v-if="current.type.id == 1">
              <i class="fas fa-phone-alt"></i>
            </span>
            <span v-else-if="current.type.id == 2">
              <i class="fas fa-video"></i>
            </span>
            <span v-else-if="current.type.id == 3">
              <i class="fas fa-chalkboard-teacher"></i>
            </span>
            <span v-else-if="current.type.id == 4">
              <i class="fas fa-handshake"></i>
            </span>
          </div>
          <div class="type-text">
            <span>
              {{ current.type.name }}
            </span>
            <span v-if="current.more">
              {{ current.more }}
            </span>
          </div>
        </div>
      </div>
      <div class="description myDesc" v-if="!current.report"></div>
      <div class="description report" v-else>
        <div class="descr">
          {{ current.description }}
        </div>
        <h3>Compte Rendu</h3>
        <div class="rep">
          {{ current.report }}
        </div>
      </div>
      <div class="desktop delete">
        <router-link
          class="btn-red"
          :to="{
            name: 'DeleteMeeting',
            params: { id: current.id },
          }"
        >
          supprimer
        </router-link>
      </div>
      <div class="desktop update">
        <router-link
          class="btn-dark"
          :to="{
            name: 'UpdateMeeting',
            params: { id: current.id },
          }"
        >
          modifier
        </router-link>
      </div>
      <div class="close" v-if="current.status.id == 1">
        <router-link
          class="btn-dark"
          :to="{
            name: 'CloseMeeting',
            params: { id: current.id },
          }"
        >
          clore
          <span class="mobile">
            la réunion
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SingleMeeting",
  data() {
    return {};
  },

  computed: {
    ...mapState("meetings", ["current", "isLoading"]),
    ...mapState("global", ["today", "now"]),
  },

  methods: {
    ...mapMutations("meetings", ["updateCurrent"]),
  },

  created() {
    this.$store.dispatch("meetings/fetchCurrentMeeting", this.$route.params.id);

    // function to compare date
    const today = new Date();
    this.$store.dispatch("global/dateToCompare", today);
    this.$store.dispatch("global/timeToCompare", today);
  },

  updated() {
    let myDescription = document.querySelector(".myDesc");
    let description = document.querySelector(".descr");
    if (myDescription) {
      myDescription.innerHTML = this.current.description;
    }
    if (description) {
      description.innerHTML = this.current.description;
    }
    let report = document.querySelector(".rep");
    if (report) {
      report.innerHTML = this.current.report;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/style.scss";

.report {
  display: grid;
  gap: 0 2rem;
  grid:
    "descr h3" auto
    "descr report" 1fr
    / 1fr 1fr;
  @include mobile {
    grid:
      "descr" auto
      "h3" auto
      "report" auto
      / 1fr;
  }
  h3 {
    font-size: 2rem;
    margin: 2rem;
    text-align: center;
    grid-area: h3;
    text-transform: uppercase;
  }
  div {
    height: 100%;
    overflow: auto;
  }
  .descr {
    grid-area: descr;
    line-height: 2rem;
  }
  .rep {
    grid-area: report;
  }
}
.type {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  border-top: 1px solid $dark;
  padding-top: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.type-icon {
  align-self: center;
  i {
    font-size: 3rem;
  }
}
.type-text {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem 0;
  align-items: center;
  span:first-child {
    font-style: italic;
  }
}
</style>
