import getters from "./user.getters";
import mutations from "./user.mutations";
import actions from "./user.actions";

export default {
  namespaced: true,
  state: {
    datas: [],
    isLoading: true,
    isLoggedIn: localStorage.user ? true : false,
    errors: [],
    current: [],
  },
  getters,
  mutations,
  actions
}