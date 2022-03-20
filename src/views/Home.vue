<template>
  <div>
    <h1 class="content__title">Racing season 2022</h1>
    <!-- my-countdown dark></my-countdown -->
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
    title: 'Home',
    meta: [
      {property: 'og:title', content: "Formula 1 racing schedule and results"},
    ],
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
