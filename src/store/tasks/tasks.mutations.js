export default {
  displayTasks(state, tasks) {
    state.datas = tasks;
  },

  updateIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },

  getError(state, error){
    state.errors = error;
  },

  updateDate(state, date) {
    state.date = date;
  }
}