import ajaxService from "../../config/ajaxService";

export default {
  fetchTasks(context) {
    ajaxService
      .getRead("readTasks")
      .then((promise) => {
        const data = promise;
        context.commit('displayTasks', data)
      })
      .catch((error) => console.log(error));
  }
}