export default {
  // async trySignin(context, credentials) {
  //   try {
  //     context.commit("updateIsLoading", true);
  //     const response = await axios.post("/api/auth", credentials);
  //     context.commit("signinSuccess", response.data);
  //     router.push("/profile");
  //   } catch (err) {
  //     context.commit("signError", err);
  //   }
  // },
  // async fetchCurrentUser(context) {
  //   try {
  //     context.commit("updateIsLoading", true);
  //     const response = await axios.get("/api/user/current");
  //     context.commit("fetchCurrentUserSuccess", response.data);
  //   } catch (err) {
  //     context.commit("signError", err);
  //   }
  // },
  // async refreshToken(context) {
  //   try {
  //     const response = await axios.get("/api/auth/refresh-token");
  //     setTimeout(() => {
  //       context.dispatch("refreshToken");
  //     }, 14 * 60 * 1000);
  //     context.commit("refreshTokenSuccess", response.data);
  //   } catch (err) {
  //     context.commit("refreshTokenError");
  //   }
  // }
}