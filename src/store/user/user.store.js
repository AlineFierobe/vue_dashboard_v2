import getters from "./user.getters";
import mutations from "./user.mutations";
import actions from "./user.actions";

export default {
  namespaced: true,
  state: {
    datas: [],
    isLoading: false,
    isLoggedIn: localStorage.user ? true : false,
    errors: []
  },
  getters,
  mutations,
  actions
}