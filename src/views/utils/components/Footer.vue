<template>
  <footer class="footer">
    {{ siteName }} by
    <a :href="devSite" target="_blank" rel="noopener noreferrer"
      >{{ devName }}
    </a>
    © tout droit réservé
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["siteName", "devName", "devSite"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../../assets/sass/style.scss";
.footer {
  background: $back;
  padding: 1rem;
  text-align: center;
  @include mobile {
    font-size: 1.4rem;
    a {
      font-size: 1.4rem;
    }
  }
}
</style>
