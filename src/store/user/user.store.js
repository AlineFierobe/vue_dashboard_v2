import getters from "./user.getters";
import mutations from "./user.mutations";
import actions from "./user.actions";

export default {
  namespaced: true,
  state: {
    datas: [],
    isLoading: false,
    isLoggedIn: localStorage.getItem("jwtToken") ? null : false,
    jwtToken: localStorage.getItem("jwtToken"),
    errors: []
  },
  getters,
  mutations,
  actions
}