export default {
  displayUser(state, user) {
    state.datas = user;
  },

  updateIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },

  signinSuccess(state, data) {
    state.isLoading = false;
    state.errors = [];
    state.isLoggedIn = true;
    delete data.password;
    state.datas = data;
    localStorage.setItem('user', data.id);
    localStorage.setItem('session', new Date().getTime());
  },

  signError(state, errors) {
    console.log(errors);
    state.errors = errors;
  },

  signOut(state) {
    state.datas = null;
    state.isLoggedIn = false;
    localStorage.removeItem("user");
    localStorage.removeItem("session");
    localStorage.removeItem("now");
  },

  fetchCurrentUser(state, user) {
    delete user.password;
    state.current = user;
  },

  updateUser(state, user) {
    state.datas = user;
  }
}