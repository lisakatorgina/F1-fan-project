<template>
  <div id="app">
    <div :class="['layout', `layout_${$route.name}`]">
      <site-header/>
      <div class="content">
        <router-view/>
      </div>
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

<style lang="scss">

</style>
<script>
import SiteHeader from "@/components/Header";
export default {
  components: {SiteHeader},
  metaInfo: {
    title: 'Formula 1 fan project',
    titleTemplate: 'Formula 1 fan project | %s',
    meta: [
      {name: 'description', content:  'Season 2022 countdown. F1 humor, gallery, art.'},
      {property: 'og:title', content: "Formula 1 fan project"},
      {property: 'og:description', content: 'Season 2022 countdown. F1 humor, gallery, art.'},
    ]
  },
  data() {
    return {
      musicPopupOpened: false,
    }
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
