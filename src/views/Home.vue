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
    <router-link class="nav" to="/gallery">Gallery</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import MyCountdown from "@/components/Countdown";

export default {
  name: 'Home',
  components: {
    MyCountdown
  }
}
</script>
