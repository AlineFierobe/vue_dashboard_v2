<template>
  <LoggedOut v-if="!isLoggedIn" />
  <div class="inside-route" v-else>
    <router-view />
  </div>
</template>

<script>
import LoggedOut from "./components/IfLoggedOut";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { LoggedOut },
  data() {
    return {};
  },

  computed: {
    ...mapGetters("user", ["isLoggedIn"]),
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.inside-route {
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @include mobile {
    margin: 3rem auto;
  }
}
</style>
