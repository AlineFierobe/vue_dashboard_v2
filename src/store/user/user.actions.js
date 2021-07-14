import ajaxService from "../../config/ajaxService";
import router from "../../router/index";

export default {
  async fetchUser(context){
   try {
    context.commit("updateIsLoading", true);
    ajaxService
      .getRead('readUser')
      .then(promise => {
        const data = promise;
        context.commit('displayUser', data);
        context.commit("updateIsLoading", false);
      })
      .catch( err => console.log(err));
   } catch (error) {
    context.commit("signError", error);
   }
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
            context.commit("signinSuccess", user);
            context.commit("updateIsLoading", false);
            // redirect to user profile
            router.push("/");
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
      context.commit("signOut");
      router.push('/');
      }
      catch (err) {
      context.commit("signError", err);
    }

  },

  async fetchCurrentUser(context, id) {
    try {
      context.commit("updateIsLoading", true);
      let params = new FormData();
      params.append("id", id);
      ajaxService
        .get("getUser", params)
        .then((promise) => {
        context.commit("updateIsLoading", false);
        context.commit('fetchCurrentUser', promise);
        })
        .catch((error) => console.log(error));
    }
    catch (err) {
      context.commit("signError", err);
    }
  },

  async updateUser(context, data) {
    try {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", data.id);
      params.append("firstName", data.firstName);
      params.append("lastName", data.lastName);
      params.append("more", data.more);
      params.append("icon", data.icon);
      // call ajax service
      ajaxService
        .maj("updateUser", params)
        .then((promise) => {
          console.log(promise);
          // Redirect to profile page
          router.push('/profile');
        })
        .catch((error) => console.log(error));

    } catch (err) {
      context.commit("signError", err);
    }
  },

  async updatePassword(context, data) {
    try {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", data.id);
      params.append("password", data.password);
      // call ajax service
      ajaxService
        .maj("updatePassword", params)
        .then((promise) => {
          console.log(promise);
          // Redirect to profile page
          router.push('/profile');
        })
        .catch((error) => console.log(error));

    } catch (err) {
      context.commit("signError", err);
    }
  },

}