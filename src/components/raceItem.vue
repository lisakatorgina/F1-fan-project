<template>
  <div :class="['races__item', {'races__item_past': past, 'races__item_current': current}, {'races__item_closed': closed && isMobile}]">
    <span class="races__item-number">{{ index }}</span>
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
          <div class="races__item-image" v-if="item.image !== ''" :style="{'background-image': `url(${trackImage}`}"></div>
          <template v-if="raceResults">
            <div class="races__item-info">
              <template v-if="raceResults.quali">
                <h4>Quali</h4>
                <ul>
                  <li v-for="(item, index) in raceResults.quali.slice(0, 8)" :key="`quali${index}`">
                    <b>{{ index + 1 }}.</b>{{ item }}
                  </li>
                </ul>
              </template>
              <template v-if="raceResults.sprint">
                <h4>Sprint</h4>
                <ul>
                  <li v-for="(item, index) in raceResults.sprint.slice(0, 8)" :key="`sprint${index}`">
                    <b>{{ index + 1 }}.</b>{{ item }}
                  </li>
                </ul>
              </template>
              <template v-if="raceResults.race">
                <h4>Race</h4>
                <ul>
                  <li v-for="(item, index) in raceResults.race.slice(0, 10)" :key="`race${index}`">
                    <b>
                      <template v-if="index === 0">🥇</template>
                      <template v-else-if="index === 1">🥈</template>
                      <template v-else-if="index === 2">🥉</template>
                      <template v-else><b>{{ index + 1 }}</b>.</template>
                    </b>
                    {{ item }}
                  </li>
                </ul>
              </template>
              <p v-if="raceResults.lap">
                <b>Fastest lap: </b>
                <span>{{ getName(raceResults.lap) }}</span>
              </p>
              <p v-if="raceResults && raceResults.quali" class=""><a href="" class="races__all-result" @click.prevent="showPopup = index">All results</a></p>
            </div>
          </template>
        </div>
        <p class="races__item-laps">{{ item.laps }} laps</p>
      </div>
    </transition>
    <transition name="fade">
      <div class="races__item-info" v-if="raceResults && closed && isMobile" key="closed">
        <ul>
          <li v-for="(item, index) in raceResults.race.slice(0, 10)" :key="index">
            <template v-if="index === 0">🥇</template>
            <template v-else-if="index === 1">🥈</template>
            <template v-else-if="index === 2">🥉</template>
            <template v-else><b>{{ index + 1 }}</b>.</template>
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
          <div style="background: red" v-if="raceResults.descr" v-html="raceResults.descr"></div>
          <template v-if="raceResults.race">
            <h4>Race</h4>
            <ul class="race-results">
              <li v-for="(item, i) in raceResults.race" :key="`race${item}`">
                <span>
                  <b>{{ i + 1 }}.</b> {{ getName(item) }}
                  <img v-if="getTeam(item)" :src="require(`@/assets/img/logos/${getTeam(item)}`)" alt="">
                </span>
                <span>
                  <template v-if="item === raceResults.lap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z"/></svg>
                  </template>
                  {{ getRacePoints(item, i, false) }}
                </span>
              </li>
              <li v-for="(item, i) in raceResults.out" :key="`out${item}`">
                <span>
                  <b>DNF</b> {{ getName(item) }}
                  <img v-if="getTeam(item)" :src="require(`@/assets/img/logos/${getTeam(item)}`)" alt="">
                </span>
                <span>
                  <template v-if="item === raceResults.lap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>
                  </template>
                  {{ getRacePoints(item, i, true) }}
                </span>
              </li>
            </ul>
          </template>
          <template v-if="raceResults.sprint">
            <h4>Sprint</h4>
            <ul class="race-results">
              <li v-for="(item, i) in raceResults.sprint" :key="`sprint${item}`">
                <span><b>{{ i + 1 }}.</b> {{ getName(item) }}</span>
                <span>
                  {{ 8 - i >= 0 ? 8 - i : 0 }}
                </span>
              </li>
            </ul>
          </template>
          <h4>Qualifying</h4>
          <ul class="quali-results">
            <li v-for="(item, i) in raceResults.quali" :key="`quali${item}`">
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
      trackImage: '',
      raceResults: results[this.index],
    }
  },
  computed: {
    isMobile: function () {
      return this.$vssWidth < 768
    },

    past: function () {
      if (this.raceResults) {
        return this.raceResults.past;
      }
      return false;
    },
    current: function () {
      if (this.raceResults) {
        if (this.raceResults.quali && !this.past) {
          return true;
        }
      }
      return false;
    },
    pointsScale: function () {
      if (this.raceResults) {
        return this.raceResults.scores || "default";
      }
      return 'default';
    }
  },
  mounted() {
    if (this.past && this.isMobile) {
      this.closed = true;
    }
    this.trackImage = require(`@/assets/img/tracks/${this.item.image}`);
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
        _points = this.points[this.pointsScale][index] || 0;
      }
      if (item === this.raceResults.lap) {
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
