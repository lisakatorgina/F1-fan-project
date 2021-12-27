<template>
  <div :class="['menu', {'menu_opened': opened}]">
    <div class="menu__button" @click="opened = !opened"><span></span></div>
    <transition name="slide">
      <div class="menu__items" v-if="opened">
        <router-link to="/" class="menu__item" v-if="$route.name !== 'Home'">Home</router-link>
        <router-link to="/gallery" class="menu__item" v-if="$route.name !== 'Gallery'">Gallery</router-link>
        <router-link to="/laugh" class="menu__item" v-if="$route.name !== 'Laugh'">Laugh</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'siteMenu',
  props: {

  },
  data() {
    return {
      opened: false,
    }
  },
  mounted() {
  },
  watch: {
    '$route'() {
      this.opened = false;
    }
  },
  methods: {

  },
}
</script>
