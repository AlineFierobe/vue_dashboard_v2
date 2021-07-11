export default {
  updateToday(state, date) {
    state.today = date;
  },  

  getError(state, error) {
    state.errors = error;
  },
}