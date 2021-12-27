<template>
  <div id="app">
    <site-menu/>
    <router-view/>
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
