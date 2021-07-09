import ajaxService from "../../config/ajaxService";

export default {
  fetchProjects(context) {
    ajaxService
      .getRead("readProject")
      .then((promise) => {
        const data = promise;
        context.commit('displayProjects', data)
      })
      .catch((error) => console.log(error));
  }
}