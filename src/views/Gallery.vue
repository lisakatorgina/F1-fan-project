<template>
  <div class="home home_template">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in shuffle(imagesArray)" :key="index">
        <img class="home__bg" :src="require(`@/assets/img/photos/${item}`)" alt="">
      </swiper-slide>
    </swiper>
    <router-link class="nav" to="/">Home</router-link>
    <div class="intro intro_dark">
      <my-countdown></my-countdown>
    </div>
  </div>
</template>

<script>
import MyCountdown from "@/components/Countdown";
export default {
  name: 'Gallery',
  components: {
    MyCountdown
  },
  data() {
    return {
      nIntervId: null,
      imagesArray: [
          'carlos.jpg',
          'lando.jpg',
          'carlando.jpg',
          'lando2.jpg',
          'carlando2.jpg',
          'lando3.jpg',
          'carlos2.jpg',
          'carlos3.jpg',
          'carlos4.jpg',
          'max.jpg',
          'max2.jpg'
      ],
      swiperOptions: {
        effect: 'fade',
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
      }
    }
  },
  mounted() {
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
  }
}
</script>

<style>
.swiper-container {
  color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
