<template>
  <div class="home">
    <video width="100%" height="100%" autoplay muted loop>
      <source src="../assets/videobg.mp4" type="video/mp4">
      <source src="../assets/videobg.ogg" type="video/ogg">
    </video>
    <Intro/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Intro from "@/components/Intro";

export default {
  name: 'Home',
  components: {
    Intro,
    HelloWorld,
  }
}
</script>
