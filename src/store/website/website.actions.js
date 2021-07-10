import ajaxService from "../../config/ajaxService"

export default {
  fetchWebsite(context) {
    ajaxService
      .getRead('readConfig')
      .then(promise => {
        const data = promise;
        context.commit('displayWebsite', data);
      })
      .catch (err => console.log(err));
  }
}