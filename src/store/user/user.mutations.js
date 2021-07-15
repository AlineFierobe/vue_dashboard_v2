export default {
  displayUser(state, users) {
    state.datas = users;
  },

  updateIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },

  signinSuccess(state, user) {
    state.isLoading = false;
    state.errors = [];
    state.isLoggedIn = true;
    delete user.password;
    state.current = user;
    localStorage.setItem('user', user.id);
    localStorage.setItem('session', new Date().getTime());
  },

  signError(state, errors) {
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
  },
}