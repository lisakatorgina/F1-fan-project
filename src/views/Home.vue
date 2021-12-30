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
    titleTemplate: null,
    meta: [
      {name: 'description', content: 'Season 2022 countdown. F1 humor, gallery, art' },
    ]
  },
}
</script>
