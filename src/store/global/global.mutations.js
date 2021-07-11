export default {
  updateToday(state, date) {
    state.today = date;
  },  

  getError(state, error) {
    state.errors = error;
  },

  // formattingDate(state, date) {
  //   state.formatDate = date;
  // }
}