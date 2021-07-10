<template>
  <div id="app">
    <div id="body" v-for="site in datas" :key="site.id">
      <Header :siteName="site.siteName" :isLoggedIn="isLoggedIn" />
      <main class="main">
        <router-view />
      </main>
      <Footer
        :siteName="site.siteName"
        :devName="site.devName"
        :devSite="site.devSite"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Header from "./views/utils/components/Header.vue";
import Footer from "./views/utils/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      siteName: "",
      devName: "",
      devSite: "",
      isLoggedIn: false,
    };
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

<style lang="scss">
@import "./assets/sass/style.scss";

/* GRID BODY TO ALWAYS HAVE FOOTER IN BOTTOM PAGE */
#body {
  background: url(https://www.aht.li/3601151/photo-1518607692857-bff9babd9d40.jpeg)
    50% / cover;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
