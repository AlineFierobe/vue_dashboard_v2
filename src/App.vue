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
import Header from "./views/utils/components/Header";
import Footer from "./views/utils/components/Footer";

export default {
  name: "App",
  component: { Header, Footer },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./assets/sass/style.scss";
</style>
