<template>
  <div :class="['laugh__item', {'laugh__item_active': laughing}]" @click="laugh">
    <img v-if="!laughing" :src="require(`../assets/img/laugh/${name}-1.png`)" :alt="name">
    <img v-else :src="require(`../assets/img/laugh/${name}-2.png`)" :alt="name">
    <span class="laugh__item-play">
      <svg v-if="!laughing" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm17 4h-5v2h5v-2zm-1.584-6.232l-4.332 2.5 1 1.732 4.332-2.5-1-1.732zm1 12.732l-4.332-2.5-1 1.732 4.332 2.5 1-1.732z"/>
      </svg>
    </span>
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
    this.audio.load();
  },
  methods: {
    laugh() {
      if(!this.laughing) {
        this.laughing = true;
        this.audio.play();
        setTimeout(() => {
          this.$nextTick(() => {
            this.laughing = false;
          });
        }, this.audio.duration * 1000 + 200);
      }
    },
  },
}
</script>
