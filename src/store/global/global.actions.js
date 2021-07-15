import ajaxService from "../../config/ajaxService";

export default {
  // used to get Today's date to the right format
  async dateToCompare(context, date) {
    try {
      let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

      if (month.length < 2) {
        month = "0" + month;
      } 
      if (day.length < 2) {
        day = "0" + day;
      }

      const today = year + "-" + month + "-" + day;

      context.commit('updateToday', today);

    } catch (error) {
      context.commit('getError', error);
    }
  },

  // used to get the time to the right format
  async timeToCompare(context, date) {
    try {

      let d = new Date(date),
        hour = "" + d.getHours(),
        minute = "" + d.getMinutes(),
        second = "" + d.getSeconds();

      if (hour.length < 2) hour = "0" + hour;
      if (minute.length < 2) minute = "0" + minute;
      if (second.length < 2) second = "0" + second;
    
      const now = hour + ":" + minute + ":" + second;

      context.commit('updateNow', now);

    } catch (error) {
      context.commit('getError', error);
    }
  },
 
  // get status
  async getStatus(context) {
    try {
      ajaxService
        .getRead("readStatus")
        .then((promise) => {
          const listStatus = promise
          context.commit('displayStatus', listStatus)
        })
        .catch((error) => console.log(error));
    } catch (error) {
      context.commit('getError', error);
      
    }
  },

  // toggle Menu in Mobile
  toggleMenu(context) {
      context.commit('toggleMenu');
  },

  updateMenu(context, value) {
    context.commit('updateMenu', value);

  },

  removeMenu(context) {
    const header = document.querySelector(".header");
    const menu = document.querySelector("#menu");
    const body = document.querySelector("body");
    header.classList.remove("open");
    menu.classList.add("hideMenu");
    body.classList.remove("no-scroll");
    context.commit('updateMenu', false);
  },




}