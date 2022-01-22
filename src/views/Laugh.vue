<template>
  <div>
    <h1 class="content__title">How they laugh</h1>
    <div class="sounds">
      <play-sound class="sounds__item" audio-source="lando.mp3" with-image image-path="/laugh/lando-1.png" image-path-on="/laugh/lando-2.png" name="lando"></play-sound>
      <play-sound class="sounds__item" audio-source="carlos.mp3" with-image image-path="/laugh/carlos-1.png" image-path-on="/laugh/carlos-2.png" name="carlos"></play-sound>
      <play-sound class="sounds__item" audio-source="daniel.mp3" with-image image-path="/laugh/daniel-1.png" image-path-on="/laugh/daniel-2.png" name="daniel"></play-sound>
      <play-sound class="sounds__item" audio-source="max.mp3" with-image image-path="/laugh/max-1.png" image-path-on="/laugh/max-2.png" name="max"></play-sound>
      <play-sound class="sounds__item" audio-source="checo.mp3" with-image image-path="/laugh/checo-1.png" image-path-on="/laugh/checo-2.png" name="checo"></play-sound>
      <play-sound class="sounds__item" audio-source="charles.mp3" with-image image-path="/laugh/charles-1.png" image-path-on="/laugh/charles-2.png" name="charles"></play-sound>
      <play-sound class="sounds__item" audio-source="lewis.mp3" with-image image-path="/laugh/lewis-1.png" image-path-on="/laugh/lewis-2.png" name="lewis"></play-sound>
      <play-sound class="sounds__item" audio-source="seb.mp3" with-image image-path="/laugh/seb-1.png" image-path-on="/laugh/seb-2.png" name="seb"></play-sound>
      <play-sound class="sounds__item" audio-source="esteban.mp3" with-image image-path="/laugh/esteban-1.png" image-path-on="/laugh/esteban-2.png" name="esteban"></play-sound>
      <play-sound class="sounds__item" audio-source="pierre.mp3" with-image image-path="/laugh/pierre-1.png" image-path-on="/laugh/pierre-2.png" name="pierre"></play-sound>
      <play-sound class="sounds__item" audio-source="lance.mp3" with-image image-path="/laugh/lance-1.png" image-path-on="/laugh/lance-2.png" name="lance"></play-sound>
      <play-sound class="sounds__item" audio-source="kimi.mp3" with-image image-path="/laugh/kimi-1.png" image-path-on="/laugh/kimi-2.png" name="kimi"></play-sound>
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
