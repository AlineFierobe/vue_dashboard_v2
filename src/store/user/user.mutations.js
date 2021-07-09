export default {
  displayUser(state, user) {
    state.datas = user;
  }

  // updateIsLoading(state, isLoading) {
  //   state.isLoading = isLoading;
  // },
  // signinSuccess(state, data) {
  //   state.isLoading = false;
  //   state.errors = [];
  //   state.isLoggedIn = true;
  //   delete data.user.password;
  //   state.data = data.user;
  //   state.jwtToken = data.jwtToken;
  //   localStorage.setItem("jwtToken", data.jwtToken);
  // },
  // signOut(state) {
  //   state.jwtToken = null;
  //   state.data = null;
  //   state.isLoggedIn = false;
  //   localStorage.removeItem("jwtToken");
  // },
  // fetchCurrentUserSuccess(state, user) {
  //   state.data = user;
  //   state.isLoading = false;
  //   state.isLoggedIn = true;
  //   state.errors = [];
  // },
  // refreshTokenSuccess(state, data) {
  //   state.data = data.user;
  //   state.isLoggedIn = true;
  //   state.jwtToken = data.jwtToken;
  //   localStorage.setItem("jwtToken", data.jwtToken);
  // },
  // refreshTokenError(state) {
  //   state.data = null;
  //   state.isLoggedIn = false;
  //   state.jwtToken = null;
  //   localStorage.removeItem("jwtToken");
  // }
}