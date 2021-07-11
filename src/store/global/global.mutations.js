export default {
  updateToday(state, date) {
    state.today = date;
  },  

  updateNow(state, date) {
    state.now = date;
  }, 

  getError(state, error) {
    state.errors = error;
  },
}