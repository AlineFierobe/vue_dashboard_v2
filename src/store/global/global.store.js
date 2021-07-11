import getters from "./global.getters";
import mutations from "./global.mutations";
import actions from "./global.actions";

export default {
  namespaced: true,
  state: {
    today: null,
    errors: [],
  },
  getters,
  mutations,
  actions
}