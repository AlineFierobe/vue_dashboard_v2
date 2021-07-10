import ajaxService from "../../config/ajaxService";
import router from "../../router/index";

export default {
  fetchUser(context){
    ajaxService
      .getRead('readUser')
      .then(promise => {
        const data = promise;
        context.commit('displayUser', data);
      })
      .catch( err => console.log(err));
  },

  async trySignin(context, credentials) {
    try {
      context.commit("updateIsLoading", true);
    
      ajaxService
      .getRead("readUser")
      .then((promise) => {
        const listUser = promise;

        listUser.forEach(user => {
          if (user.password === credentials.password &&
            user.firstName.toLowerCase === credentials.name.toLowerCase){
            const data = {
              user,
              jwtToken: "test",
            }
            context.commit("signinSuccess", data);
            // redirect to user profile
            router.push("/profile");
          } else {
            const loggedFail = "identifiant ou mot de passe incorrect";
            context.commit('signError', loggedFail);
          }
        });
        
      })
      .catch((error) => console.log(error));
      
    }
      catch (err) {
      context.commit("signError", err);
    }

  },

  async trySignout(context) {
    try {
      context.commit("updateIsLoading", true);
      context.commit("signOut");
      router.push('/');
      }
      catch (err) {
      context.commit("signError", err);
    }

  },

  async fetchCurrentUser(context, user) {
    try {
      let params = new FormData();
      params.append("id", user);
      ajaxService
        .get("getUser", params)
        .then((promise) => {
          context.commit('fetchCurrentUser', promise);
        })
        .catch((error) => console.log(error));
    }
    catch (err) {
      context.commit("signError", err);
    }
  }
}