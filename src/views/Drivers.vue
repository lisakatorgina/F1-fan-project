<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">Season 2022 drivers</h1>
    <h3 class="layout__subtitle">In order of last season standings</h3>
    <div class="drivers">
      <div v-for="(driver, index) in driversData" :key="index" :class="['drivers__item', 'driver', {'driver_out': driver.out, 'driver_new': driver.new}]">
        <div class="driver__position">
          <template v-if="index === 0">🏆</template>
          <template v-else-if="index === 1">🥈</template>
          <template v-else-if="index === 2">🥉</template>
          <template v-else>{{ index + 1 }}</template>
        </div>
        <div class="driver__name" @click="openPopup(index)">
          <div>
            <h2>{{ driver.name }}</h2>
          </div>
          <span class="driver__number">{{ driver.number }}</span>
        </div>
        <div class="driver__team">
          {{ driver.team }}
          <p v-if="driver.note" class="driver__note">{{ driver.note }}</p>
        </div>
        <div class="driver__country" @click="changePhoto(currentGalleryIndex)"><span>{{ driver.country }}</span> {{ getFlag(driver.country) }}</div>
        <!-- span class="driver__points">{{ driver.points }}</span -->
      </div>
    </div>
    <div class="popup" v-if="popupOpened" @click="closePopup($event)">
      <div class="popup__box">
        <span class="popup__close" @click="popupOpened = false">&times;</span>
        <h3>{{ currentDriver.name }}</h3>
        <div class="popup__photo" :style="{'background-image': `url(${openedPhoto}`}">
          <span class="popup__prev" v-if="currentGalleryIndex > 0" @click="changePhoto(currentGalleryIndex - 1)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></span>
          <span class="popup__next" v-if="currentGalleryIndex < (driversData.length-1)" @click="changePhoto(currentGalleryIndex + 1)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        </div>
        <div class="popup__info">
          <p>{{ currentDriver.team }}</p>
          <p>{{ currentDriver.country }} {{ getFlag(currentDriver.country) }} №: {{ currentDriver.number }}</p>
          <p>BD: {{ getBirthday(currentDriver.birthdate) }}</p>
          <p>Age: {{ getAge(currentDriver.birthdate) }}</p>
          <p v-if="currentDriver.champ">🏆 {{ currentDriver.champ }}</p>
        </div>
        <div class="popup__info popup__info_right">
          <p><a :href="currentDriver.link" target="_blank">Wikipedia</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drivers from "@/data/drivers";
import getFlag from "@/utils/getflag";
import getName from "@/utils/getName";
import points from "@/data/points";
import results from "@/data/results";

export default {
  components: {
  },
  metaInfo: {
    title: 'Standings',
    meta: [
      {property: 'og:title', content: "F1 fan project | Standings"},
    ]
  },
  data() {
    return {
      driversData: drivers,
      currentGalleryIndex: 0,
      openedPhoto: '',
      popupOpened: false,
      points: points,
      results: results
    }
  },
  mounted() {
    for (var i = 0; i < this.driversData.length; i++) {
      var _id = this.driversData[i].id;
      this.driversData[i].points = this.getPoints[_id] ? this.getPoints[_id] : 0;
    }
    this.driversData.sort(function(a, b){
      return b.points - a.points;
      //return a.team.localeCompare(b.team);
    });
  },
  computed: {
    currentDriver() {
      return this.driversData[this.currentGalleryIndex];
    },
    getPoints() {
      var result = {};
      for (var i = 1; i <= Object.keys(this.results).length; i++ ) {
        var race = this.results[i].race;
        for (var k = 0; k < race.length; k++) {
          var name = race[k];
          result[name] = result[name] ? result[name] + points[k] : points[k];
        }
      }
      return result;
    }
  },
  methods: {
    openPopup(index) {
      this.popupOpened = true;
      this.changePhoto(index);
    },
    changePhoto(index) {
      if (index >= this.driversData.length || index < 0) {
        return;
      }
      this.openedPhoto = require(`@/assets/img/photos/${this.driversData[index].photo}`);
      this.currentGalleryIndex = index;
    },
    closePopup(e) {
      if (e.target.className === 'popup') {
        this.popupOpened = false;
      }
    },
    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    getBirthday(dateString) {
      var d = new Date(dateString);
      var formatD = d.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
      return formatD;
    },
    getFlag,
    getName,
  }
}
</script>
