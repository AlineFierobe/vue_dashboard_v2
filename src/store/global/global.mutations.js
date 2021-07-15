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

  displayStatus(state, status) {
    state.status = status;
  },

  updateMenu(state, value) {
    state.openMenu = value;
  },

  toggleMenu(state) {
    state.openMenu = !state.openMenu;
  },


}