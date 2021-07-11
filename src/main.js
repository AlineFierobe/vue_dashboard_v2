import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router/index';
import store from './store';

import moment from 'moment';

const app = createApp(App)
app.use(store).use(router).mount('#app')


// filter for formatting dates
app.config.globalProperties.$filters = {
  formatDate(value) {
    if(value) {
      return moment(String(value)).format("DD/MM/YYYY");
    }
  },

  formatTime(value) {
    if (value) {
      let time = value.split("");
      let hOne = time[0];
      let hTwo = time[1];
      let mOne = time[3];
      let mTwo = time[4];
      return hOne + hTwo + "h" + mOne + mTwo;
    }
  }
}