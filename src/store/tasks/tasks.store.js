import getters from "./tasks.getters";
import mutations from "./tasks.mutations";
import actions from "./tasks.actions";

export default {
  namespaced: true,
  state: {
    datas: [],
    current: [],
    isLoading: false,
    errors: [],
    date: null,
  },
  getters,
  mutations,
  actions
}