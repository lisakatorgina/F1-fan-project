<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">Racing season 2022</h1>
    <div class="races">
      <div v-for="(item, index) in tracks" :key="index" class="races__item">
        <div class="races__item-header">
          <span class="races__item-number">{{ index + 1 }}</span>
          <span class="races__item-dates">{{ item.dates }}</span>
        </div>
        <h2>
          <span>{{ item.country }}</span>
          <span>{{ getFlag(item.country) }}</span>
          <small>{{ item.place }}</small>
        </h2>
        <h3>{{ item.name }}</h3>
        <div class="races__item-image">
          <img v-if="item.image !== ''" :src="require(`../assets/img/tracks/${item.image}`)" :alt="item.name">
          <p class="races__item-laps">{{ item.laps }} laps</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import racing from "@/data/racing";
import getFlag from "@/utils/getflag";

export default {
  components: {
  },
  metaInfo: {
    title: 'Racing',
    meta: [
      {property: 'og:title', content: "Racing schedule and info"},
    ]
  },
  data() {
    return {
      tracks: racing,
    }
  },
  mounted() {
  },
  methods: {
    getFlag
  }
}
</script>
