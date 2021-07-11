import ajaxService from "../../config/ajaxService";

export default {
  async fetchTasks(context) {
   try {
    context.commit('updateIsLoading', true);
    ajaxService
    .getRead("readTasks")
    .then((promise) => {
      const data = promise;
      context.commit('displayTasks', data)
      // console.log(data);
      context.commit('updateIsLoading', false);

    })
    .catch((error) => console.log(error));
   } catch (error) {
     context.commit('getError', error);
   }
  },

}