<template>
  <div class="layout layout_gallery">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in shuffle(imagesArray)" :key="index">
        <img :src="require(`@/assets/img/photos/${item}`)" alt="">
      </swiper-slide>
    </swiper>
    <div class="intro intro_dark">
      <my-countdown no-title></my-countdown>
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
  metaInfo: {
    title: 'Gallery',
  },
  data() {
    return {
      imagesArray: [
        'carlos.jpg',
        'carlos2.jpg',
        'carlos3.jpg',
        'carlos4.jpg',
        'carlos5.jpg',
        'carlos6.jpg',
        'carlos7.jpg',
        'carlos8.jpg',
        'carlando.jpg',
        'carlando2.jpg',
        'carlando3.jpg',
        'lando.jpg',
        'lando2.jpg',
        'lando3.jpg',
        'lando4.png',
        'lando5.jpg',
        'lando6.jpg',
        'max.jpg',
        'max2.jpg',
        'max3.jpg',
        'maxandlando.jpg',
        'daniel.jpg',
        'daniel2.jpg',
        'charles.jpg',
        'charles2.jpg',
        'charles3.jpg',
        'checo.jpg',
        'checo2.jpg',
        'maxiel.jpg',
        'dando.jpg'
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

</style>
