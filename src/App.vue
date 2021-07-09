<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./views/utils/Header";
import Footer from "./views/utils/Footer";

export default {
  name: "App",
  component: { Header, Footer },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
