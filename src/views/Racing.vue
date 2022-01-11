<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">Racing season 2022</h1>
    <div class="races">
      <div v-for="(item, index) in tracks" :key="index" :class="['races__item', {'races__item_past': results[index + 1] && results[index + 1].past, 'races__item_current': results[index + 1] && results[index + 1].quali.length > 0}]">
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
          <template v-if="results[index + 1]">
            <div class="races__item-info">
              <p>
                Quali:
                <span v-for="(item, index) in results[index + 1].quali" :key="index">
                  <template v-if="index < 3"><b>{{ index + 1 }}.</b>{{ getName(item) }} </template>
                </span>
              </p>
              <p>
                Race:
                <span v-for="(item, index) in results[index + 1].race" :key="index">
                  <template v-if="index < 3"><b>{{ index + 1 }}.</b>{{ getName(item) }} </template>
                </span>
              </p>
              <p>
                Fast-lap:
                <span>{{ getName(results[index + 1].lap) }}</span>
              </p>
              <p><a href="" @click.prevent="showPopup = index">Show all results</a></p>
            </div>
            <div class="popup" v-if="showInfo(index)">
              <div class="popup__box">
                <span class="popup__close" @click="showPopup = null">&times;</span>
                <h3>{{ item.country }} GP results</h3>
                <ul class="results">
                  <li v-for="(item, index) in results[index + 1].race" :key="item">
                    <span><b>{{ index + 1 }}.</b> {{ getName(item) }}</span>
                    <span>{{ points[index] || 0}}</span>
                  </li>
                  <li v-for="(item, index) in results[index + 1].out" :key="item">
                    <span><b>out</b> {{ getName(item) }}</span>
                    <span>0</span>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </div>
        <p class="races__item-laps">{{ item.laps }} laps</p>
      </div>
    </div>
  </div>
</template>

<script>
import racing from "@/data/racing";
import getFlag from "@/utils/getflag";
import getName from "@/utils/getName";
import points from "@/data/points";
import results from "@/data/results";

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
      points: points,
      results: results,
      showPopup: null
    }
  },
  mounted() {
  },
  methods: {
    getFlag,
    getName,
    showInfo(index) {
      if (index === this.showPopup) {
        return true;
      }
    }
  }
}
</script>
