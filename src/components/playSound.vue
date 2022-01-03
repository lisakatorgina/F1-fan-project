<template>
  <div :class="['audio', {'audio_with-image': withImage, 'audio_on': playing}]" @click="play">
      <div class="audio__play">
        <svg v-if="!playing" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm17 4h-5v2h5v-2zm-1.584-6.232l-4.332 2.5 1 1.732 4.332-2.5-1-1.732zm1 12.732l-4.332-2.5-1 1.732 4.332 2.5 1-1.732z"/>
        </svg>
      </div>
      <div v-if="withImage" class="audio__pic">
        <img v-if="!playing" :src="image1" :alt="name">
        <img v-else :src="image2" :alt="name">
      </div>
  </div>
</template>

<script>
export default {
  name: 'playSound',
  props: {
    audioSource: {
      type: String,
      default: '',
    },
    withImage: {
      type: Boolean,
      default: false
    },
    imagePath: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      playing: false,
      audio: {},
      audioPath: '',
      image1: '',
      image2: '',
      currentTime: 0,
      myTimeout: 0
    }
  },
  mounted() {
    this.audioPath = require(`../media/${this.audioSource}`);
    this.audio = new Audio(this.audioPath);
    this.audio.load();
    this.duration = this.audio.duration;
    if (this.withImage) {
      this.image1 = require(`../assets/img${this.imagePath}-1.png`);
      this.image2 = require(`../assets/img${this.imagePath}-2.png`);
    }
  },
  methods: {
    play() {
      if(!this.playing) {
        this.playing = true;
        this.audio.play();
        this.myTimeout = setTimeout(() => {
          this.$nextTick(() => {
            this.playing = false;
            this.currentTime = 0;
          });
        }, (this.audio.duration - this.currentTime) * 1000 + 200);
      } else {
        this.audio.pause();
        this.playing = false;
        this.currentTime = this.audio.currentTime;
        clearTimeout(this.myTimeout);
      }
    },
  },
}
</script>
