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
              if (listTasks.length > 0) {
                lastTaskID = listTasks[listTasks.length - 1].id;
                lastTaskID = new Number(lastTaskID);
              }
              context.commit('updateIsLoading', false);

              // redirect to the new task
              context.commit('displayTasks', listTasks);
              router.push({ 
                name: "SingleTask",
                params: { id: lastTaskID }
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

  async closeTask(context, data) {
    try {
      context.commit('updateIsLoading', true);

      let params = new FormData();
      params.append("id", data.id);
      params.append("name", data.name);
      params.append("type", data.type.id);
      params.append("project", data.project.id);
      params.append("deadline", data.deadline);
      params.append("description", data.description);
      params.append("status", 2);

      // call ajax service
      ajaxService
        .maj("updateTask", params)
        .then((promise) => {
          console.log(promise);
          context.commit('updateIsLoading', false);

          // Redirect to project page
          router.push({ name: "SingleTask", params: { id: data.id } });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      context.commit('getErrors', error);
    }
  },

  async deleteTask(context, task) {
    try {
      context.commit('updateIsLoading', true);
      
      let params = new FormData();
      params.append("id", task.id);
      // call Ajax service
      ajaxService
        .maj("deleteTask", params)
        .then((promise) => {
          console.log(promise);
          
          context.commit('updateIsLoading', false);

          // Redirect to admin page
          router.push({name: 'SingleProject', params: {id: task.project.id}});
        })
        .catch((error) => console.log(error));

    } catch (error) {
      context.commit('getErrors', error);
    }
  },

  async updateTask(context, data) {
    try {
      context.commit('updateIsLoading', true);
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", data.id);
      params.append("name", data.name);
      params.append("deadline", data.deadline);
      params.append("type", data.type.id);
      params.append("project", data.project.id);
      params.append("description", data.description);
      params.append("status", data.status.id);
      // call ajax service
      ajaxService
        .maj("updateTask", params)
        .then((promise) => {
          console.log(promise);
          context.commit('updateCurrent', data);
          context.commit('updateIsLoading', false);

          // redirect to project
          router.push({name: 'SingleTask', params: { id: data.id }});
        })
        .catch((error) => console.log(error));

    } catch (err) {
      context.commit("getErrors", err);
    }
  },
}