import getters from "./projects.getters";
import mutations from "./projects.mutations";
import actions from "./projects.actions";

export default {
  namespaced: true,
  state: {
    projects: [
      {
        id: 1,
        name: "Dashboard",
        deadline: "2021-10-31",
        description: "un super projet",
        status: {
          id: 1,
          name: "en cours"
        }
      },
      {
        id: 2,
        name: "Portfolio React",
        deadline: "2021-10-31",
        description: "un truc trop dur à faire mais trop bien",
        status: {
          id: 2,
          name: "terminé"
        }
      }
    ],
  },
  getters,
  mutations,
  actions
}