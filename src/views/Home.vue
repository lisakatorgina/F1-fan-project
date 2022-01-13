<template>
  <div class="layout">
    <video v-if="isMobile || videoBg" class="layout__bg layout__bg_video" width="100%" height="100%" poster="../assets/video-poster.png" autoplay muted loop playsinline>
      <source src="../assets/videobg.mp4" type="video/mp4">
      <source src="../assets/videobg.ogg" type="video/ogg">
    </video>
    <img v-else src="../assets/video-poster.png" alt="" class="layout__bg layout__bg_image" @click="videoBg = !videoBg">
    <a href="https://www.instagram.com/lisalovesformula1/" class="inst" target="_blank">
      <img class="qr" src="../assets/img/qr.png" alt=""/>
      <span>@lisalovesformula1</span>
    </a>
    <div class="twch">
      <play-sound audio-source="twch.mp3"></play-sound>
    </div>
    <div class="popup-link" @click="musicPopupOpened = true">
      🎻🎻🎻
    </div>
    <div class="popup-link" @click="lastLapVideo = true">
      Abu Dhabi final lap
    </div>
    <div class="intro">
      <img src="../assets/img/logo.png">
      <my-countdown></my-countdown>
    </div>
    <div class="popup popup_video" v-if="musicPopupOpened" @click="closePopup($event)">
      <div class="popup__box">
        <h3>Formula 1 Music Theme</h3>
        <span class="popup__close" @click="musicPopupOpened = false">&times;</span>
        <iframe src="https://www.youtube.com/embed/8AYy-BcjRXg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div class="popup popup_video" v-if="lastLapVideo" @click="closePopup($event)">
      <div class="popup__box">
        <h3>The final lap of Abu Dhabi GP</h3>
        <span class="popup__close" @click="lastLapVideo = false">&times;</span>
        <iframe src="https://www.youtube.com/embed/zJjiz8yXf0E?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyCountdown from "@/components/Countdown";
import SiteMenu from "@/components/Menu";
import PlaySound from "@/components/playSound";

export default {
  name: 'Home',
  components: {
    PlaySound,
    SiteMenu,
    MyCountdown
  },
  metaInfo: {
    titleTemplate: null
  },
  data() {
    return {
      musicPopupOpened: false,
      videoBg: false,
      lastLapVideo: false
    }
  },
  mounted() {
  },
  computed: {
    isMobile: function () {
      return this.$vssWidth < 1024
    },
  },
  methods: {
    closePopup(e) {
      if (e.target.classList.contains('popup')) {
        this.musicPopupOpened = false;
      }
    }
  }
}
</script>
