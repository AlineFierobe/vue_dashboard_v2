import ajaxService from "../../config/ajaxService";
import router from "../../router/index";

export default {
  async fetchProjects(context) {
    try {
      context.commit('updateIsLoading', true);
      ajaxService
      .getRead("readProject")
      .then((promise) => {
        const data = promise;
        context.commit('displayProjects', data);
        context.commit('updateIsLoading', false);
      })
      .catch((error) => console.log(error));
    }
    catch(err) {
      context.commit("signError", err);
    }
  },

  async createProject(context, data) {
    try {
    // Object FormData to set parameters
    let params = new FormData();
    // set parameters
    params.append("name", data.name);
    params.append("description", data.description);
    params.append("deadline", data.deadline);
    params.append("status", 1);
    // call Ajax service
    ajaxService
      .maj("createProject", params)
      .then((promise) => {
        console.log(promise);

        ajaxService
          .getRead("readProject")
          .then((promise) => {
            const listProjects = promise;
              // get last project ID and add one to get the one we create if no project yet set default value to 1
              let lastProjectID = 1;
              let newProjectID = 1;
              if (listProjects.length > 0) {
                lastProjectID = listProjects[listProjects.length - 1].id;
                lastProjectID = new Number(lastProjectID);
                newProjectID = lastProjectID;
              }

              // redirect to all projects
              context.commit('displayProjects', listProjects);
              router.push({ 
                name: "SingleProject",
                params: { id: newProjectID }
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

  async fetchCurrentProject(context, id) {
    try {
      context.commit('updateIsLoading', true);
      let params = new FormData();
      params.append("id", id);
      ajaxService
        .get("getProject", params)
        .then((promise) => {
          context.commit('currentProject', promise);
          context.commit('updateIsLoading', false);
        })
        .catch((error) => console.log(error));
    }
    catch (err) {
      context.commit("signError", err);
    }
  },

  async updateProject(context, data) {
    try {
      context.commit('updateIsLoading', true);
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", data.id);
      params.append("name", data.name);
      params.append("deadline", data.deadline);
      params.append("description", data.description);
      params.append("status", data.status.id);
      // call ajax service
      ajaxService
        .maj("updateProject", params)
        .then((promise) => {
          console.log(promise);
          context.commit('currentProject', data);
          context.commit('updateIsLoading', false);

          // redirect to project
          router.push({name: 'SingleProject', params: { id: data.id }});
        })
        .catch((error) => console.log(error));

    } catch (err) {
      context.commit("getErrors", err);
    }
  },

  async deleteProject(context, id) {
    try {
      context.commit('updateIsLoading', true);
      
      let params = new FormData();
      params.append("id", id);
      // call Ajax service
      ajaxService
        .maj("deleteProject", params)
        .then((promise) => {
          console.log(promise);
          
          context.commit('updateIsLoading', false);

          // Redirect to admin page
          router.push("/projects");
        })
        .catch((error) => console.log(error));

    } catch (error) {
      context.commit('getErrors', error);
    }
  },

  async closeProject(context, data) {
    try {
      context.commit('updateIsLoading', true);

      let params = new FormData();
      params.append("id", data.id);
      params.append("name", data.name);
      params.append("deadline", data.deadline);
      params.append("description", data.description);
      params.append("status", 2);

      // call ajax service
      ajaxService
        .maj("updateProject", params)
        .then((promise) => {
          console.log(promise);

          context.commit('updateIsLoading', false);

          // Redirect to project page
          router.push({ name: "SingleProject", params: { id: data.id } });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      context.commit('getErrors', error);
    }
  }
}