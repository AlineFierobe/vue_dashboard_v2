import getters from "./meetings.getters";
import mutations from "./meetings.mutations";
import actions from "./meetings.actions";

export default {
  namespaced: true,
  state: {
    datas: [],
    isLoading: false,
    errors: [],
    current: [],
    types: [],
  },
  getters,
  mutations,
  actions
}