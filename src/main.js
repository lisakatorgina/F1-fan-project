import "./scss/app.scss";
import 'swiper/swiper-bundle.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vueAwesomeCountdown from 'vue-awesome-countdown';
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, Navigation, EffectFade } from 'swiper/swiper.esm';
//import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import VueScreenSize from 'vue-screen-size';

Vue.config.productionTip = false;
Vue.use(vueAwesomeCountdown, 'vac');
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation, EffectFade]);
//Vue.use(getAwesomeSwiper(SwiperClass));
Vue.use(VueScreenSize);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
