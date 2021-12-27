<template>
  <div :class="['laugh__item', {'laugh__item_active': laughing}]" @click="laugh">
    <img v-if="!laughing" :src="require(`../assets/img/laugh/${name}-1.png`)" :alt="name">
    <img v-else :src="require(`../assets/img/laugh/${name}-2.png`)" :alt="name">
    <transition name="fade"><span class="laugh__item-play" v-if="!laughing">Play ►</span></transition>
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
      audioPath: ''
    }
  },
  mounted() {
    this.audioPath = require(`../media/${this.name}.mp3`);
    this.audio = new Audio(this.audioPath);
  },
  methods: {
    laugh() {
      this.laughing = true;
      this.audio.play();
      setTimeout(() => {
        this.$nextTick(() => {
          this.laughing = false;
        });
      }, this.audio.duration * 1000 + 200);
    },
  },
}
</script>
