<template>
  <div class="layout">
    <video width="100%" height="100%" poster="../assets/video-poster.png" autoplay muted loop playsinline>
      <source src="../assets/videobg.mp4" type="video/mp4">
      <source src="../assets/videobg.ogg" type="video/ogg">
    </video>
    <a href="https://www.instagram.com/lisalovesformula1/" class="inst" target="_blank">
      <img class="qr" src="../assets/img/qr.png" alt=""/>
      <span>@lisalovesformula1</span>
    </a>
    <div class="twch" @click="sound">
      <svg v-if="!audioOn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm17 4h-5v2h5v-2zm-1.584-6.232l-4.332 2.5 1 1.732 4.332-2.5-1-1.732zm1 12.732l-4.332-2.5-1 1.732 4.332 2.5 1-1.732z"/>
      </svg>
    </div>
    <div class="intro">
      <img src="../assets/img/logo.png">
      <my-countdown></my-countdown>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyCountdown from "@/components/Countdown";
import SiteMenu from "@/components/Menu";

export default {
  name: 'Home',
  components: {
    SiteMenu,
    MyCountdown
  },
  metaInfo: {
    titleTemplate: null
  },
  data() {
    return {
      audioOn: false,
      audio: {},
      audioPath: ''
    }
  },
  mounted() {
    this.audioPath = require(`../media/twch.mp3`);
    this.audio = new Audio(this.audioPath);
    this.audio.load();
  },
  methods: {
    sound() {
      if (!this.audioOn) {
        this.audioOn = true;
        this.audio.play();
        setTimeout(() => {
          this.$nextTick(() => {
            this.audioOn = false;
          });
        }, this.audio.duration * 1000 + 200);
      }
    },
  }
}
</script>
