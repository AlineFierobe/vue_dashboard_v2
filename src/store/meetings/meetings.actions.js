import ajaxService from "../../config/ajaxService";

export default {
  async fetchMeetings(context) {
   try {
     context.commit('updateIsLoading', true);
    ajaxService
    .getRead('readMeeting')
    .then(promise => {
      const data = promise;
      context.commit('displayMeetings', data);
      context.commit('updateIsLoading', false);
    })
    .catch( err => console.log(err));
   } catch (error) {
     context.commit('getErrors', error);
   }
  }
}