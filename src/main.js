import "./scss/app.scss";

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vueAwesomeCountdown from 'vue-awesome-countdown';

Vue.config.productionTip = false;
Vue.use(vueAwesomeCountdown, 'vac');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
