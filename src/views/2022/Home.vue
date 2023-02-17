<template>
  <div>
    <h1 class="content__title">Racing season 2022</h1>

    <h1 class="content__title content__title_margin-top">Drivers standings</h1>
    <div class="table">
      <div v-for="(driver, index) in driversData" :key="index" :class="['table__item', 'row', {'row_reserve': driver.reserve}]">
        <div class="row__position" v-if="Object.keys(results).length > 0">{{ index + 1 }}</div>
        <div class="row__name">
          <div>
            <h2><a href="" @click.prevent="openPopup(index)">{{ driver.name }}</a></h2>
          </div>
          <span class="row__number">{{ driver.number }}</span>
        </div>
        <div class="row__team">
          {{ driver.team }}
          <!-- p v-if="driver.note" class="row__note">{{ driver.note }}</p -->
          <p v-if="driver.reserve" class="row__note">Reserve driver</p>
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

    <h1 class="content__title content__title_margin-top">Teams standings</h1>
    <div class="table">
      <div v-for="(team, index) in teamsData" :key="index" :class="['table__item', 'row']">
        <div class="row__position" v-if="Object.keys(results).length > 0">
          {{ index + 1 }}
        </div>
        <div class="row__name row__name_team" @click="openPopupTeams(index)">
          <h2>
            <a href="" @click.prevent="openPopupTeams(index)">{{ team.name }}</a>
          </h2>
        </div>
        <div class="row__team row__team_small">
          {{ getName(team.drivers[0]) }}<br/>
          {{ getName(team.drivers[1]) }}
        </div>
        <div class="row__logo" v-if="team.logo != ''">
          <img :src="require(`@/assets/img/logos/${team.logo}`)" :alt="team.name">
        </div>
        <span v-if="Object.keys(results).length > 0" class="row__points">{{ team.points }}</span>
      </div>
    </div>
    <div class="popup" v-if="popupOpenedTeams" @click="closePopup($event)">
      <div class="popup__box">
        <span class="popup__close" @click="popupOpenedTeams = false">&times;</span>
        <h3>{{ currentTeam.name }}</h3>
        <div class="popup__photo popup__photo_horizontal" :style="{'background-image': `url(${openedPhotoTeams}`}">
          <span class="popup__prev" v-if="currentGalleryIndexTeams > 0" @click="changePhotoTeams(currentGalleryIndexTeams - 1)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></span>
          <span class="popup__next" v-if="currentGalleryIndexTeams < (teamsData.length-1)" @click="changePhotoTeams(currentGalleryIndexTeams + 1)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        </div>
      </div>
    </div>

    <h1 class="content__title content__title_margin-top">Races</h1>
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

import drivers from "@/data/2022/drivers";
import getFlag from "@/utils/getflag";
import getName from "@/utils/getName";
import getPoints from "@/utils/getPoints";

import teams from "@/data/2022/teams";

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

      driversData: drivers,
      currentGalleryIndex: 0,
      openedPhoto: '',
      popupOpened: false,

      currentGalleryIndexTeams: 0,
      openedPhotoTeams: '',
      popupOpenedTeams: false,
      teamsData: teams,
    }
  },
  mounted() {
    for (var i = 0; i < this.driversData.length; i++) {
      var _id = this.driversData[i].id;
      this.driversData[i].points = getPoints(this.results)[_id] ? getPoints(this.results)[_id] : 0;
    }
    this.driversData.sort(function(a, b){
      return b.points - a.points;
      //return a.team.localeCompare(b.team);
    });

    for (var i = 0; i < this.teamsData.length; i++) {
      var _driver1 = this.teamsData[i].drivers[0];
      var _driver2 = this.teamsData[i].drivers[1];
      var _driver3 = this.teamsData[i].drivers[2];
      this.teamsData[i].points = (getPoints(this.results)[_driver1] ? getPoints(this.results)[_driver1] : 0) + (getPoints(this.results)[_driver2] ? getPoints(this.results)[_driver2] : 0) + (getPoints(this.results)[_driver3] ? getPoints(this.results)[_driver3] : 0);
    }
    this.teamsData.sort(function(a, b){
      return b.points - a.points;
      //return a.team.localeCompare(b.team);
    });
  },
  computed: {
    currentDriver() {
      return this.driversData[this.currentGalleryIndex];
    },
    currentTeam() {
      return this.teamsData[this.currentGalleryIndexTeams];
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
    openPopupTeams(index) {
      this.popupOpenedTeams = true;
      this.changePhotoTeams(index);
    },
    changePhotoTeams(index) {
      if (index >= this.teamsData.length || index < 0) {
        return;
      }
      this.openedPhotoTeams = require(`@/assets/img/cars/2022/${this.teamsData[index].image}`);
      this.currentGalleryIndexTeams = index;
    },
    closePopupTeams(e) {
      if (e.target.className === 'popup') {
        this.popupOpenedTeams = false;
      }
    },
  }
}
</script>
