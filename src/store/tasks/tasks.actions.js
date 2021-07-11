import ajaxService from "../../config/ajaxService";
import router from "../../router/index";

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

  async getTaskTypes(context) {
    try {
      ajaxService
      .getRead("readTaskType")
      .then((promise) => {
        context.commit('updateTypes', promise);
      })
      .catch((error) => console.log(error));
      
    } catch (error) {
      context.commit('getErrors', error);
    }
  },

  async createTask(context, data) {
    try {

    context.commit('updateIsLoading', true);

    // Object FormData to set parameters
    let params = new FormData();
    // set parameters
    params.append("name", data.name);
    params.append("deadline", data.deadline);
    params.append("description", data.description);
    params.append("type", data.type);
    params.append("project", data.project);
    params.append("status", 1);
    // call Ajax service
    ajaxService
      .maj("createTask", params)
      .then((promise) => {
        console.log(promise);

        ajaxService
          .getRead("readTasks")
          .then((promise) => {
            const listTasks = promise;
            context.commit('displayTasks', listTasks);
              // get last task ID and add one to get the one we create if no task yet set default value to 1
              let lastTaskID = 1;
              let newTaskID = 1;
              if (listTasks.length > 0) {
                lastTaskID = listTasks[listTasks.length - 1].id;
                lastTaskID = new Number(lastTaskID);
                newTaskID = lastTaskID + 1;
              }
              context.commit('updateIsLoading', false);

              // redirect to the new task
              context.commit('displayTasks', listTasks);
              router.push({ 
                name: "SingleTask",
                params: { id: newTaskID }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    }
    catch(err) {
      context.commit("signError", err);
    }
  },

  async fetchCurrentTask(context, id) {
    try {
      context.commit('updateIsLoading', true);
      let params = new FormData();
      params.append("id", id);
      ajaxService
        .get("getTask", params)
        .then((promise) => {
          context.commit('updateCurrent', promise);
          context.commit('updateIsLoading', false);
        })
        .catch((error) => console.log(error));
    }
    catch (err) {
      context.commit("getErrors", err);
    }
  },

}