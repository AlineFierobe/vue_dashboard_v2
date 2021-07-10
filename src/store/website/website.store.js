import getters from "./website.getters";
import mutations from "./website.mutations";
import actions from "./website.actions";

export default {
  namespaced: true,
  state: {
    datas: [],
  },
  getters,
  mutations,
  actions
}