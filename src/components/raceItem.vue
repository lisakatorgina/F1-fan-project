<template>
  <div :class="['races__item', {'races__item_past': results[index] && results[index].past, 'races__item_current': results[index] && results[index].quali.length > 0 && !results[index].past}]">
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
          <div v-if="results[index].quali.length > 0">
            <h4>Quali</h4>
            <ul>
              <li v-for="(item, index) in results[index].quali.slice(0, 10)" :key="index">
                <b>{{ index + 1 }}.</b>{{ item }}
              </li>
            </ul>
          </div>
          <div v-if="results[index].race.length > 0">
            <h4>Race</h4>
            <ul>
              <li v-for="(item, index) in results[index].race.slice(0, 10)" :key="index">
                <b>
                  <template v-if="index === 0">🥇</template>
                  <template v-else-if="index === 1">🥈</template>
                  <template v-else-if="index === 2">🥉</template>
                  <template v-else>{{ index + 1 }}</template>
                </b>
                {{ item }}
              </li>
            </ul>
          </div>
          <p v-if="results[index].lap.length != ''">
            <b>Fastest lap: </b>
            <span>{{ getName(results[index].lap) }}</span>
          </p>
          <p v-if="results[index].quali.length > 0" class=""><a href="" class="races__all-result" @click.prevent="showPopup = index">All results</a></p>
        </div>
        <div class="popup" v-if="showInfo(index)">
          <div class="popup__box">
            <h3>
              {{ item.country }} GP results
              <span class="popup__close" @click="showPopup = null">&times;</span>
            </h3>
            <div class="popup__body">
              <h4>Qualifying</h4>
              <ul class="quali-results">
                <li v-for="(item, i) in results[index].quali" :key="item">
                  <b>{{ i + 1 }}.</b> {{ getName(item) }}
                </li>
              </ul>
              <template v-if="results[index].race.length > 0">
              <h4>Race</h4>
                <ul class="race-results">
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
              </template>
            </div>
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
