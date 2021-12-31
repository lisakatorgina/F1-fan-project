<template>
  <div id="app">
    <site-menu/>
    <router-view/>
    <div :class="['sharing', `sharing_${$route.name}`]">
      <span class="sharing__title">Share</span>
      <div class="ya-share2" data-curtain data-size="s" data-lang="en" data-services="facebook,twitter"></div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
<script>
import SiteMenu from "@/components/Menu";
export default {
  components: {SiteMenu},
  metaInfo: {
    title: 'Formula 1 fan project',
    titleTemplate: 'Formula 1 fan project | %s',
    meta: [
      {name: 'description', content:  'Season 2022 countdown. F1 humor, gallery, art.'},
      {property: 'og:title', content: "Formula 1 fan project"},
      {property: 'og:description', content: 'Season 2022 countdown. F1 humor, gallery, art.'},
    ]
  }
}
</script>
