import getters from "./global.getters";
import mutations from "./global.mutations";
import actions from "./global.actions";

export default {
  namespaced: true,
  state: {
    today: null,
    errors: [],
    now: null,
    status: [],
    openMenu: null
  },
  getters,
  mutations,
  actions
}