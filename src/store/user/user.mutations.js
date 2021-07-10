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
    state.data = data.user;
    localStorage.setItem('user', data.user.id);
  },

  signError(state, errors) {
    console.log(errors);
    state.errors = errors;
  },

  signOut(state) {
    state.jwtToken = null;
    state.data = null;
    state.isLoggedIn = false;
    localStorage.removeItem("user");
  },
}