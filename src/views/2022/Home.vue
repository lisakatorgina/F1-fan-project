<template>
  <div>
    <h1 class="content__title">Racing season 2022</h1>
    <!-- my-countdown dark></my-countdown -->
    <div class="races">
      <race-item
          v-for="(item, index) in tracks"
          :key="index"
          :item="item"
          :index="index + 1"
          :points="points"
          :results="results"
      ></race-item>
    </div>
  </div>
</template>

<script>
import racing from "@/data/2022/racing";
import RaceItem from "@/components/raceItem";
import MyCountdown from "@/components/Countdown";
import points from "@/data/points";
import results from "@/data/2022/results";

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
      points: points,
      results: results,
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
