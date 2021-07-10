<template>
  <header class="header">
    <h1>{{ siteName }}</h1>
    <nav>
      <ul v-if="isLoggedIn">
        <li>déconnexion</li>
      </ul>
      <ul v-else>
        <li>connexion</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["siteName", "isLoggedIn"],
  data() {
    return {};
  },
};
</script>
