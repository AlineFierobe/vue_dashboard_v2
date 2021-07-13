import ajaxService from "../../config/ajaxService";
import router from '../../router/index';

export default {
  fetchWebsite(context) {
    ajaxService
      .getRead('readConfig')
      .then(promise => {
        const data = promise;
        context.commit('displayWebsite', data);
      })
      .catch (err => console.log(err));
  },

  async fetchCurrentWebsite(context, id) {
    try {
      context.commit("updateIsLoading", true);
      let params = new FormData();
      params.append("id", id);
      ajaxService
        .get("getConfig", params)
        .then((promise) => {
        context.commit("updateIsLoading", false);
        context.commit('updateCurrent', promise);
        })
        .catch((error) => console.log(error));
    }
    catch (err) {
      context.commit("signError", err);
    }
  },

  async updateWebsite(context, data) {
      try {
      context.commit("updateIsLoading", true);
        // Object FormData to set parameters
        let params = new FormData();
        params.append("id", data.id);
        params.append("siteName", data.siteName);
        params.append("devName", data.devName);
        params.append("devSite", data.devSite);
        params.append("about", data.about);
        // call ajax service
        ajaxService
          .maj("updateConfig", params)
          .then((promise) => {
            console.log(promise);

            ajaxService
            .getRead('readConfig')
            .then(promise => {
              context.commit('displayWebsite', promise);
              context.commit("updateIsLoading", false);
            })
            .catch (err => console.log(err));
            // Redirect to profile page
            router.push('/');
          })
          .catch((error) => console.log(error));
  
      } catch (err) {
        context.commit("signError", err);
      }
  },
}