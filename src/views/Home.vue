<template>
  <div class="home">
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
