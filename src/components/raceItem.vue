<template>
  <div :class="['races__item', {'races__item_past': results[index] && results[index].past, 'races__item_current': results[index] && results[index].quali.length > 0}]">
    <div class="races__item-header">
      <span class="races__item-number">{{ index }}</span>
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
      <template v-if="results[index]">
        <div class="races__item-info">
          <p v-if="results[index].quali.length > 0">
            Quali:
            <span v-for="(item, index) in results[index].quali.slice(0, 3)" :key="index">
              <b>{{ index + 1 }}.</b>{{ getName(item) }}
            </span>
          </p>
          <p v-if="results[index].race.length > 0">
            Race:
            <span v-for="(item, index) in results[index].race.slice(0, 3)" :key="index">
              <b>{{ index + 1 }}.</b>{{ getName(item) }}
            </span>
          </p>
          <p v-if="results[index].lap.length != ''">
            Fast-lap:
            <span>{{ getName(results[index].lap) }}</span>
          </p>
          <p v-if="results[index].race.length > 0"><a href="" @click.prevent="showPopup = index">Show all results</a></p>
        </div>
        <div class="popup" v-if="showInfo(index)">
          <div class="popup__box">
            <span class="popup__close" @click="showPopup = null">&times;</span>
            <h3>{{ item.country }} GP results</h3>
            <ul class="results">
              <li v-for="(item, i) in results[index].race" :key="item" :class="{'_fast': item === results[index].lap}">
                <span><b>{{ i + 1 }}.</b> {{ getName(item) }}</span>
                <span>
                  {{ getPoints(item, i, false) }}
                </span>
              </li>
              <li v-for="(item, i) in results[index].out" :key="item">
                <span><b>out</b> {{ getName(item) }}</span>
                <span>
                  {{ getPoints(item, i, true) }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
    <p class="races__item-laps">{{ item.laps }} laps</p>
  </div>
</template>

<script>
import getFlag from "@/utils/getflag";
import getName from "@/utils/getName";
import points from "@/data/points";
import results from "@/data/results";

export default {
  name: 'raceItem',
  props: {
    item: {
      type: Object,
      default: {},
    },
    index: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      points: points,
      results: results,
      showPopup: null
    }
  },
  mounted() {

  },
  methods: {
    getName,
    getFlag,
    showInfo(index) {
      if (index === this.showPopup) {
        return true;
      }
    },
    getPoints(item, index, out) {
      var _points = 0;
      if (!out) {
        _points = this.points[index] || 0;
      }
      if (item === this.results[this.index].lap) {
        _points++;
      }
      return _points;
    }
  },
}
</script>
