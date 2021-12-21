<template>
  <div class="home">
    <video width="100%" height="100%" autoplay muted loop playsinline>
      <source src="../assets/videobg.mp4" type="video/mp4">
      <source src="../assets/videobg.ogg" type="video/ogg">
    </video>
    <a href="https://www.instagram.com/lisalovesformula1/" class="inst" target="_blank">
      <img class="qr" src="../assets/img/qr.png" alt=""/>
      <span>@lisalovesformula1</span>
    </a>
    <Intro/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro";

export default {
  name: 'Home',
  components: {
    Intro,
  }
}
</script>
