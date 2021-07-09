import param from "./cnx.backend";
import axios from "axios";
// import Vue from "vue";
// import store from "../store";

// axios.interceptors.request.use(request => {
//   const jwtToken = store.getters["user/jwtToken"];
//   if (jwtToken) {
//     request.headers["Authorization"] = `Bearer ${jwtToken}`;
//   }
//   return request;
// });

export default {
  getRead(type) {
    return axios.get(param[type]).then((response) => {
      return response.data;
    });
  },

  get(type, params) {
    return axios.post(param[type], params).then((response) => {
      return response.data;
    });
  },

  maj(type, params) {
    return axios.post(param[type], params).then((response) => {
      return response.data;
    });
  },
};
