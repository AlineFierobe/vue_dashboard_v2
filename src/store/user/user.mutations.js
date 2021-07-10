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
    delete data.user.password;
    state.datas = data.user;
    localStorage.setItem('user', data.user.id);
  },

  signError(state, errors) {
    console.log(errors);
    state.errors = errors;
  },

  signOut(state) {
    state.jwtToken = null;
    state.datas = null;
    state.isLoggedIn = false;
    localStorage.removeItem("user");
  },

  fetchCurrentUser(state, user) {
    delete user.password;
    state.datas = user;
  },

  updateUser(state, user) {
    state.datas = user;
  }
}