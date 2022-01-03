<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">Lando</h1>
    <div class="sounds">
      <play-sound class="sounds__item" audio-source="itsfriday.mp3" with-image image-path="/lando/1.jpg" image-path-on="/lando/1.jpg" name="lando"></play-sound>
      <play-sound class="sounds__item" audio-source="rollercoaster.mp3" with-image image-path="/lando/2.jpg" image-path-on="/lando/2.jpg" name="lando"></play-sound>
    </div>
  </div>
</template>

<script>
import PlaySound from "@/components/playSound";
export default {
  components: {
    PlaySound,
  },
  metaInfo: {
    title: 'Lando',
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style>

</style>
