<template>
  <div :class="['races__item', {'races__item_past': past, 'races__item_current': current}, {'races__item_closed': closed && isMobile}]">
    <span class="races__item-number" @click="toggleItem">{{ index }}</span>
    <span class="races__item-close" @click="toggleItem" v-if="isMobile && past">
      <template v-if="closed">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
      </template>
      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
      </template>
    </span>
    <div class="races__item-header">
      <h2>
        <span>{{ item.country }}</span>
        <span>{{ getFlag(item.country) }}</span>
        <span v-if="past">🏁️</span>
        <span v-if="current">🚥</span>
      </h2>
      <span class="races__item-dates">
        {{ item.dates }}
      </span>
    </div>
    <transition name="slide">
      <div class="races__item-inner" v-if="!closed || !isMobile" key="opened">
        <h3>{{ item.place }}</h3>
        <h4>{{ item.name }}</h4>
        <div class="races__item-content">
          <img v-if="item.image !== ''" :src="require(`../assets/img/tracks/${item.image}`)" :alt="item.name">
          <template v-if="results[index]">
            <div class="races__item-info">
              <template v-if="results[index].quali.length > 0">
                <h4>Quali</h4>
                <ul>
                  <li v-for="(item, index) in results[index].quali.slice(0, 10)" :key="index">
                    <b>{{ index + 1 }}.</b>{{ item }}
                  </li>
                </ul>
              </template>
              <template v-if="results[index].race.length > 0">
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
              </template>
              <p v-if="results[index].lap.length != ''">
                <b>Fastest lap: </b>
                <span>{{ getName(results[index].lap) }}</span>
              </p>
              <p v-if="results[index].quali.length > 0" class=""><a href="" class="races__all-result" @click.prevent="showPopup = index">All results</a></p>
            </div>
          </template>
        </div>
        <p class="races__item-laps">{{ item.laps }} laps</p>
      </div>
    </transition>
    <transition name="fade">
      <div class="races__item-info" v-if="hasResults && closed && isMobile" key="closed">
        <ul>
          <li v-for="(item, index) in results[index].race.slice(0, 10)" :key="index">
            <b>{{ index + 1 }}.</b>
            {{ item }}
          </li>
        </ul>
      </div>
    </transition>
    <div class="popup" v-if="showInfo(index)">
      <div class="popup__box">
        <h3>
          {{ item.country }} GP results
          <span class="popup__close" @click="showPopup = null">&times;</span>
        </h3>
        <div class="popup__body">
          <template v-if="results[index].race.length > 0">
            <h4>Race</h4>
            <ul class="race-results">
              <li v-for="(item, i) in results[index].race" :key="item">
                <span>
                  <b>{{ i + 1 }}.</b> {{ getName(item) }}
                  <img v-if="getTeam(item)" :src="require(`@/assets/img/logos/${getTeam(item)}`)" alt="">
                </span>
                <span>
                  <template v-if="item === results[index].lap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>
                  </template>
                  {{ getRacePoints(item, i, false) }}
                </span>
              </li>
              <li v-for="(item, i) in results[index].out" :key="item">
                <span>
                  <b>out</b> {{ getName(item) }}
                  <img v-if="getTeam(item)" :src="require(`@/assets/img/logos/${getTeam(item)}`)" alt="">
                </span>
                <span>
                  <template v-if="item === results[index].lap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>
                  </template>
                  {{ getRacePoints(item, i, true) }}
                </span>
              </li>
            </ul>
          </template>
          <h4>Qualifying</h4>
          <ul class="quali-results">
            <li v-for="(item, i) in results[index].quali" :key="item">
              <b>{{ i + 1 }}.</b> {{ getName(item) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getFlag from "@/utils/getflag";
import getName from "@/utils/getName";
import getTeam from "@/utils/getTeam";
import points from "@/data/points";
import results from "@/data/results";
import Teams from "@/views/Teams";

export default {
  name: 'raceItem',
  components: {Teams},
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
      showPopup: null,
      closed: false,
    }
  },
  computed: {
    isMobile: function () {
      return this.$vssWidth < 768
    },
    past: function () {
      if (this.results[this.index] !== undefined) {
        return this.results[this.index].past;
      }
      return false;
    },
    current: function () {
      if (this.results[this.index] !== undefined) {
        if (this.results[this.index].quali.length > 0 && !this.past) {
          return true;
        }
      }
      return false;
    },
    hasResults: function () {
      if (this.results[this.index] && this.results[this.index].race.length > 0) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    if (this.past && this.isMobile) {
      this.closed = true;
    }
  },
  methods: {
    getName,
    getFlag,
    getTeam,
    showInfo(index) {
      if (index === this.showPopup) {
        return true;
      }
    },
    getRacePoints(item, index, out) {
      var _points = 0;
      if (!out) {
        _points = this.points[index] || 0;
      }
      if (item === this.results[this.index].lap) {
        _points++;
      }
      return _points;
    },
    toggleItem() {
      if (this.isMobile) {
        this.closed = !this.closed;
      }
    }
  },
}
</script>
