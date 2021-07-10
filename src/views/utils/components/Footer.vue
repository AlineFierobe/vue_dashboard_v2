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

<style lang="sass"></style>
