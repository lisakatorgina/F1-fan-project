<template>
  <div id="app">
    <site-menu/>
    <router-view/>
    <div :class="['sharing', `sharing_${$route.name.toLowerCase()}`]">
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
  components: {SiteMenu}
}
</script>
