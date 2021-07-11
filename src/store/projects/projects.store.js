import getters from "./projects.getters";
import mutations from "./projects.mutations";
import actions from "./projects.actions";

export default {
  namespaced: true,
  state: {
    datas: [],
    current: [],
    isLoading: false,
    errors: [],
  },
  getters,
  mutations,
  actions
}