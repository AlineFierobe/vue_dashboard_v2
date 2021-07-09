import getters from "./tasks.getters";
import mutations from "./tasks.mutations";
import actions from "./tasks.actions";

export default {
  namespaced: true,
  state: {
    tasks: [
      {
        id: 1,
        name: "Dashboard Front",
        deadline: "2021-10-31",
        description: "une super tâche",
        type: {
          id: 1,
          name: "todo"
        },
        status: {
          id: 1,
          name: "en cours"
        },
      },
      {
        id: 2,
        name: "Portfolio Front",
        deadline: "2021-10-31",
        description: "une super tâche à faire",
        type: {
          id: 1,
          name: "todo"
        },
        status: {
          id: 2,
          name: "terminé"
        },
      },{
        id: 3,
        name: "Debug Front Dashboard",
        deadline: "2021-10-31",
        description: "un bug méga chiant",
        type: {
          id: 2,
          name: "bug"
        },
        status: {
          id: 1,
          name: "en cours"
        },
      },
    ],
  },
  getters,
  mutations,
  actions
}