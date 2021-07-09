import getters from "./meetings.getters";
import mutations from "./meetings.mutations";
import actions from "./meetings.actions";

export default {
  namespaced: true,
  state: {
    meetings: [
      {
        id: 1,
        name: "Réunion Design",
        date: "2021-10-31",
        time: "13:00",
        description: "brainstorm idée de design",
        feedback: "",
        type: {
          id: 1,
          name: "visio"
        },
        status: {
          id: 1,
          name: "en cours"
        }
      },
      {
        id: 2,
        name: "Réunion RGPD",
        date: "2021-10-31",
        time: "13:00",
        description: "faire un point CNIL",
        feedback: "",
        type: {
          id: 2,
          name: "téléphone"
        },
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