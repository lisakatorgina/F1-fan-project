<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">Racing season 2022</h1>
    <div class="races">
      <race-item v-for="(item, index) in tracks" :key="index" :item="item" :index="index + 1"></race-item>
    </div>
  </div>
</template>

<script>
import racing from "@/data/racing";
import RaceItem from "@/components/raceItem";

export default {
  components: {
    RaceItem
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
  }
}
</script>
