import getters from "./meetings.getters";
import mutations from "./meetings.mutations";
import actions from "./meetings.actions";

export default {
  namespaced: true,
  state: {
    datas: [],
    isLoading: false,
    errors: []
,  },
  getters,
  mutations,
  actions
}