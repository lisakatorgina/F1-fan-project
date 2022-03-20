<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">Racing season 2022</h1>
    <my-countdown dark></my-countdown>
    <div class="races">
      <race-item v-for="(item, index) in tracks" :key="index" :item="item" :index="index + 1"></race-item>
    </div>
  </div>
</template>

<script>
import racing from "@/data/racing";
import RaceItem from "@/components/raceItem";
import MyCountdown from "@/components/Countdown";

export default {
  components: {
    RaceItem,
    MyCountdown
  },
  metaInfo: {
    title: 'Racing',
    meta: [
      {property: 'og:title', content: "Formula 1 racing schedule and results"},
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
  }
}
</script>
