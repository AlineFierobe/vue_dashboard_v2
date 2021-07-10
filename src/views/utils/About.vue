<template>
  <div class="main-container">
    <h2 class="title">à propos</h2>
    <div class="bloc-text" v-for="site in datas" :key="site.id">
      {{ site.about }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {};
  },
  computed: {
    ...mapState("website", ["datas"]),
  },
  methods: {
    ...mapMutations("website", ["displayWebsite"]),
  },
  created() {
    this.$store.dispatch("website/fetchWebsite");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/style.scss";
.main-container {
  width: 60%;
}
.bloc-text {
  height: 94%;
  margin: auto;
  text-align: justify;
  overflow: auto;
  white-space: pre-line;
}
</style>
