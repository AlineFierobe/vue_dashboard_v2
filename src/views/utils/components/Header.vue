<template>
  <div>
    <h1>mes Users</h1>
    <ul v-for="user in datas" :key="user.id">
      <li>
        {{ user.firstName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["datas"]),
  },
  methods: {
    ...mapMutations("user", ["displayUser"]),
  },

  created() {
    this.$store.dispatch("user/fetchUser");
  },
};
</script>
