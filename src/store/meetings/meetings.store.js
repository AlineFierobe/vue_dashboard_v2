import getters from "./meetings.getters";
import mutations from "./meetings.mutations";
import actions from "./meetings.actions";

export default {
  namespaced: true,
  state: {
    datas: [],
  },
  getters,
  mutations,
  actions
}