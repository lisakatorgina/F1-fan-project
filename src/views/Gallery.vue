<template>
  <div class="layout layout_gallery">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in shuffle(this.photos)" :key="index">
        <!-- img :src="require(`@/assets/img/photos/${item}`)" alt="" -->
        <img :src="item" alt="">
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
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
      swiperOptions: {
        effect: 'fade',
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          disabledClass: "is-disabled"
        },
      }
    }
  },
  computed: {
    photos() {
      const paths = require.context('@/assets/img/photos/', false)
      return paths .keys().map(x => paths (x))
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
