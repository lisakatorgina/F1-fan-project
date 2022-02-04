<template>
  <div>
    <h1 class="content__title">Season 2022 drivers</h1>
    <h3 class="content__subtitle">In order of last season standings</h3>
    <div class="table">
      <div v-for="(driver, index) in driversData" :key="index" :class="['table__item', 'row']">
        <div class="row__position">
          <template v-if="index === 0">🏆</template>
          <template v-else-if="index === 1">🥈</template>
          <template v-else-if="index === 2">🥉</template>
          <template v-else>{{ index + 1 }}</template>
        </div>
        <div class="row__name">
          <div>
            <h2><a href="" @click.prevent="openPopup(index)">{{ driver.name }}</a></h2>
          </div>
          <span class="row__number">{{ driver.number }}</span>
        </div>
        <div class="row__team">
          {{ driver.team }}
          <p v-if="driver.note" class="row__note">{{ driver.note }}</p>
        </div>
        <div class="row__country" @click="changePhoto(currentGalleryIndex)"><span>{{ driver.country }}</span> {{ getFlag(driver.country) }}</div>
        <span v-if="Object.keys(results).length > 0" class="row__points">{{ driver.points }}</span>
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
import results from "@/data/results";
import getPoints from "@/utils/getPoints";

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
      results: results
    }
  },
  mounted() {
    for (var i = 0; i < this.driversData.length; i++) {
      var _id = this.driversData[i].id;
      this.driversData[i].points = getPoints()[_id] ? getPoints()[_id] : 0;
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
    getPoints,
  }
}
</script>
