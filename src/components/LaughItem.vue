<template>
  <div :class="['laugh__item', {'laugh__item_active': laughing}]" @click="laugh">
    <img v-if="!laughing" :src="require(`../assets/img/laugh/${name}-1.png`)" :alt="name">
    <img v-else :src="require(`../assets/img/laugh/${name}-2.png`)" :alt="name">
    <transition name="fade"><span class="laugh__item-play" v-if="!laughing">Play ►</span></transition>
    <audio ref="audio">
      <source :src="require(`../media/${name}.ogg`)" type="audio/ogg">
      <source :src="require(`../media/${name}.mp3`)" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  name: 'laughItem',
  props: {
    name: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      laughing: false,
      audio: {},
    }
  },
  mounted() {
    this.audio = this.$refs.audio;
  },
  methods: {
    laugh() {
      this.laughing = true;
      this.audio.play();
      setTimeout(() => {
        this.$nextTick(() => {
          this.laughing = false;
        });
      }, this.audio.duration * 1000);
    },
  },
}
</script>
