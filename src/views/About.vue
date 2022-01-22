<template>
  <div>
    <h1 class="content__title">About</h1>
    <div class="about">
      <p>Hello! My name is Lisa.</p>
      <p>I am russian currently living in Mexico web-developer and this silly little website is a project to share my love for Formula 1, because to love is to share 🧡.<br/> I started it after the end of the 2021 racing season to survive the winter break.</p>
      <p>I hope you enjoy what you can find here and I promise I will improve it. If you want to give me any feedback you can contact me by <a href="mailto:lisakatorgina@gmail.com">lisakatorgina@gmail.com</a></p>
      <p>I also have an instagram account about Formula 1 <a href="https://www.instagram.com/lisalovesformula1/" target="_blank">@lisalovesformula1</a></p>
      <p><a href="" @click.prevent="musicPopupOpened = true">🎻🎻🎻</a></p>
      <!--p><img class="qr" src="../assets/img/qr.png" alt=""/></p-->
      <p><play-sound audio-source="twch.mp3"></play-sound></p>
    </div>
    <div class="popup popup_video" v-if="musicPopupOpened" @click="closePopup($event)">
      <div class="popup__box">
        <h3>Formula 1 Music Theme</h3>
        <span class="popup__close" @click="musicPopupOpened = false">&times;</span>
        <iframe src="https://www.youtube.com/embed/8AYy-BcjRXg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
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
    title: 'About',
    meta: [
      {property: 'description', content: 'About site creator'},
    ]
  },
  data() {
    return {
      musicPopupOpened: false,
    }
  },
  mounted() {
  },
  computed: {
    isMobile: function () {
      return this.$vssWidth < 1024
    },
  },
  methods: {
    closePopup(e) {
      if (e.target.classList.contains('popup')) {
        this.musicPopupOpened = false;
      }
    }
  }
}
</script>
