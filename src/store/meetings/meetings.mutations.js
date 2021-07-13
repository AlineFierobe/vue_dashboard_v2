export default {
  displayMeetings(state, meetings) {
    state.datas = meetings;
  },

  updateIsLoading(state, isLoading){
    state.isLoading = isLoading;
  },

  getErrors(state, error) {
    state.errors = error;
  },

  updateCurrent(state, meeting) {
    state.current = meeting;
  },

  updateTypes(state, type) {
    state.types = type;
  },

}