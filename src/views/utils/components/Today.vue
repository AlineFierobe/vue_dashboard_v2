<template>
  <div class="grid-home">
    <div class="container-top">
      <h2>
        programme de la journée
      </h2>
      <h3>
        {{ today }}
      </h3>
    </div>

    <div class="container-tasks">
      <h4>
        tâches
      </h4>
      <TodayTasks />
    </div>
    <div class="container-meetings">
      <h4>
        réunions
      </h4>
      <TodayMeetings />
    </div>
  </div>
</template>

<script>
import TodayTasks from "./TodayTasks";
import TodayMeetings from "./TodayMeetings";
import { mapGetters } from "vuex";

export default {
  name: "LoggedIn",
  components: { TodayTasks, TodayMeetings },
  data() {
    return {
      today: null,
    };
  },

  computed: {
    ...mapGetters("user", ["isLoggedIn"]),
  },

  created() {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const today = new Date().toLocaleDateString("fr-FR", options);
    this.today = today;
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/style.scss";

// IF LOGGEDIN
.grid-home {
  width: 90%;
  display: grid;
  height: 90%;
  margin: auto;
  grid:
    "top top" auto
    "tasks meetings" 1fr
    / 40% 60%;
  @include mobile {
    height: 100%;
    grid:
      "top" auto
      "meetings" auto
      "tasks" auto
      / 1fr;
  }
  gap: 2rem;
  .container-top {
    grid-area: top;
    background: $back;
    padding: 4rem;
    text-align: center;
    h2 {
      font-weight: 400;
      font-size: 2.2rem;
      text-transform: uppercase;
    }
    h3 {
      margin-top: 1rem;
      font-size: 1.9rem;
    }
  }
  .container-meetings,
  .container-tasks {
    height: 100%;
    background: $back;
    overflow: auto;
    padding: 1rem;
    h4 {
      text-transform: uppercase;
      font-size: 2.2rem;
    }
  }
  .container-tasks {
    grid-area: tasks;
  }
  .container-meetings {
    grid-area: meetings;
  }
}
</style>
