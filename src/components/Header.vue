<template>
  <div :class="['header', {'header_menu-opened': opened}]">
    <div class="header__top">
      <div class="header__col">
        <div class="header__menu-button" @click="opened = !opened"><span></span></div>
        <a class="header__music" href="" @click.prevent="callRoot">🎻🎻🎻</a>
      </div>
      <div class="header__col">
        <div class="header__logo"><router-link to="/"><img src="../assets/img/logo.png"></router-link></div>
      </div>
      <div class="header__col">
        <div class="header__sharing">
          <div class="ya-share2" data-curtain data-size="s" data-lang="en" data-services="facebook,twitter"></div>
          <span class="header__sharing-title">Share</span>
        </div>
      </div>
    </div>
    <transition name="slide">
      <div class="header__menu" v-if="opened">
        <router-link to="/" class="header__menu-item" v-if="$route.name !== 'Home'">Racing</router-link>
        <router-link to="/drivers" class="header__menu-item" v-if="$route.name !== 'Drivers'">Drivers</router-link>
        <router-link to="/teams" class="header__menu-item" v-if="$route.name !== 'Teams'">Teams</router-link>
        <!--router-link to="/gallery" class="header__menu-item" v-if="$route.name !== 'Gallery'">Gallery</router-link-->
        <!--router-link to="/laugh" class="header__menu-item" v-if="$route.name !== 'Laugh'">Laugh</router-link-->
        <router-link to="/about" class="header__menu-item" v-if="$route.name !== 'About'">About</router-link>
        <router-link to="/2022" class="header__menu-item" v-if="$route.name !== '2022-home'">2022</router-link>
        <router-link to="/2023" class="header__menu-item" v-if="$route.name !== '2023-home'">2023</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'siteHeader',
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
      window.scrollTo(0, 0);
    }
  },
  methods: {
    callRoot() {
      this.$parent.musicPopupOpened = true;
    }
  }
}
</script>
