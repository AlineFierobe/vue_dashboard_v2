import ajaxService from "../../config/ajaxService";
import router from '../../router/index';

export default {
  async fetchMeetings(context) {
   try {
    context.commit('updateIsLoading', true);
    ajaxService
    .getRead('readMeeting')
    .then(promise => {
      context.commit('displayMeetings', promise);
      context.commit('updateIsLoading', false);
    })
    .catch( err => console.log(err));
   } catch (error) {
     context.commit('getErrors', error);
   }
  },

  async fetchCurrentMeeting(context, id) {
    try {
      context.commit('updateIsLoading', true);
      let params = new FormData();
      params.append("id", id);
      ajaxService
        .get("getMeeting", params)
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

   async getMeetingTypes(context) {
    try {
      context.commit('updateIsLoading', true);
      ajaxService
      .getRead("readMeetingType")
      .then((promise) => {
        context.commit('updateTypes', promise);
        context.commit('updateIsLoading', false);
      })
      .catch((error) => console.log(error));
      
    } catch (error) {
      context.commit('getErrors', error);
    }
  },

  async updateMeeting(context, data) {
    try {
      context.commit('updateIsLoading', true);
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", data.id);
      params.append("name", data.name);
      params.append("date", data.date);
      params.append("time", data.time);
      params.append("type", data.type.id);
      params.append("project", data.project.id);
      params.append("description", data.description);
      params.append("report", data.report);
      params.append("more", data.more);
      params.append("status", data.status.id);
      // call ajax service
      ajaxService
        .maj("updateMeeting", params)
        .then((promise) => {
          console.log(promise);
          context.commit('updateCurrent', data);
          context.commit('updateIsLoading', false);

          // redirect to project
          router.push({name: 'SingleMeeting', params: { id: data.id }});
        })
        .catch((error) => console.log(error));

    } catch (err) {
      context.commit("getErrors", err);
    }
  },

  async closeMeeting(context, data) {
    try {
      context.commit('updateIsLoading', true);
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", data.id);
      params.append("name", data.name);
      params.append("date", data.date);
      params.append("time", data.time);
      params.append("type", data.type.id);
      params.append("project", data.project.id);
      params.append("description", data.description);
      params.append("report", data.report);
      params.append("more", data.more);
      params.append("status", 2);
      // call ajax service
      ajaxService
        .maj("updateMeeting", params)
        .then((promise) => {
          console.log(promise);
          context.commit('updateCurrent', data);
          context.commit('updateIsLoading', false);

          // redirect to project
          router.push({name: 'SingleMeeting', params: { id: data.id }});
        })
        .catch((error) => console.log(error));

    } catch (err) {
      context.commit("getErrors", err);
    }
  },

  async deleteMeeting(context, meeting) {
    try {
      context.commit('updateIsLoading', true);
      
      let params = new FormData();
      params.append("id", meeting.id);
      // call Ajax service
      ajaxService
        .maj("deleteMeeting", params)
        .then((promise) => {
          console.log(promise);
          
          context.commit('updateIsLoading', false);

          // Redirect to admin page
          router.push({name: 'SingleProject', params: {id: meeting.project.id}});
        })
        .catch((error) => console.log(error));

    } catch (error) {
      context.commit('getErrors', error);
    }
  },
}