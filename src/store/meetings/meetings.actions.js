import ajaxService from "../../config/ajaxService";

export default {
  fetchMeetings(context) {
    ajaxService
      .getRead('readMeeting')
      .then(promise => {
        const data = promise;
        context.commit('displayMeetings', data)
      })
      .catch( err => console.log(err));
  }
}