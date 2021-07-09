import getters from "./user.getters";
import mutations from "./user.mutations";
import actions from "./user.actions";

export default {
  namespaced: true,
  state: {
    users: [
      {
      id: 1,
      name: "Aline",
      password: "Silver1990",
      icon: "https://www.aht.li/3561622/avatarknowledge.png",
      description: "Junior Front-End Dev de Qualité !"
    }
  ],
    isLoading: false,
    isLoggedIn: localStorage.getItem("jwtToken") ? null : false,
    jwtToken: localStorage.getItem("jwtToken"),
    errors: []
  },
  getters,
  mutations,
  actions
}