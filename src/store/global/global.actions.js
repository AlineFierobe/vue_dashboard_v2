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

  // async formattingDate(context, date) {
  //   try {
  //     const day = date[2];
  //     const month = date[1]; 
  //     const year = date[0];

  //     const newDate = day + "/" + month + "/"+ year;

  //     context.commit('formattingDate', newDate);

  //   } catch (error) {
  //     context.commit('getError', error);
  //   }
  // }
}