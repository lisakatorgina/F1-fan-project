<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">How they laugh</h1>
    <div class="sounds">
      <play-sound class="sounds__item" audio-source="lando.mp3" with-image image-path="/laugh/lando" name="lando"></play-sound>
      <play-sound class="sounds__item" audio-source="carlos.mp3" with-image image-path="/laugh/carlos" name="carlos"></play-sound>
      <play-sound class="sounds__item" audio-source="daniel.mp3" with-image image-path="/laugh/daniel" name="daniel"></play-sound>
      <play-sound class="sounds__item" audio-source="max.mp3" with-image image-path="/laugh/max" name="max"></play-sound>
      <play-sound class="sounds__item" audio-source="checo.mp3" with-image image-path="/laugh/checo" name="checo"></play-sound>
      <play-sound class="sounds__item" audio-source="charles.mp3" with-image image-path="/laugh/charles" name="charles"></play-sound>
      <play-sound class="sounds__item" audio-source="lewis.mp3" with-image image-path="/laugh/lewis" name="lewis"></play-sound>
      <play-sound class="sounds__item" audio-source="seb.mp3" with-image image-path="/laugh/seb" name="seb"></play-sound>
      <play-sound class="sounds__item" audio-source="esteban.mp3" with-image image-path="/laugh/esteban" name="esteban"></play-sound>
      <play-sound class="sounds__item" audio-source="pierre.mp3" with-image image-path="/laugh/pierre" name="pierre"></play-sound>
      <play-sound class="sounds__item" audio-source="lance.mp3" with-image image-path="/laugh/lance" name="lance"></play-sound>
      <play-sound class="sounds__item" audio-source="kimi.mp3" with-image image-path="/laugh/kimi" name="kimi"></play-sound>
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
    title: 'Laugh',
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
