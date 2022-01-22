<template>
  <div id="app">
    <div :class="['layout', `layout_${$route.name}`]">
      <site-header/>
      <div class="content">
        <router-view/>
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
  }
}
</script>
