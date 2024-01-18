<template>
  <div>
    <h1 class="content__title">Season 2024 teams</h1>
    <div class="table">
      <div v-for="(team, index) in teamsData" :key="index" :class="['table__item', 'row']">
        <div class="row__position" v-if="Object.keys(results).length > 0">
          {{ index + 1 }}
        </div>
        <div class="row__name row__name_team" @click="openPopup(index)">
          <h2>
            <a href="" @click.prevent="openPopup(index)">{{ team.name }}</a>
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
    <div class="popup" v-if="popupOpened" @click="closePopup($event)">
      <div class="popup__box">
        <span class="popup__close" @click="popupOpened = false">&times;</span>
        <h3>{{ currentTeam.name }}</h3>
        <div class="popup__photo popup__photo_horizontal" :style="{'background-image': `url(${openedPhoto}`}">
          <span class="popup__prev" v-if="currentGalleryIndex > 0" @click="changePhoto(currentGalleryIndex - 1)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></span>
          <span class="popup__next" v-if="currentGalleryIndex < (teamsData.length-1)" @click="changePhoto(currentGalleryIndex + 1)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getName from "@/utils/getName";
import results from "@/data/results";
import teams from "@/data/teams";
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
      currentGalleryIndex: 0,
      openedPhoto: '',
      popupOpened: false,
      results: results,
      teamsData: teams,
    }
  },
  mounted() {
    for (var i = 0; i < this.teamsData.length; i++) {
      var _driver1 = this.teamsData[i].drivers[0];
      var _driver2 = this.teamsData[i].drivers[1];
      var _driver3 = this.teamsData[i].drivers[2];
      this.teamsData[i].points = (getPoints(this.results)[_driver1] ? getPoints(this.results)[_driver1] : 0) + (getPoints(this.results)[_driver2] ? getPoints(this.results)[_driver2] : 0) + (getPoints(this.results)[_driver3] ? getPoints(this.results)[_driver3] : 0);
    }
    this.teamsData.sort(function(a, b){
      return b.points - a.points;
      return a.name.localeCompare(b.team);
    });
  },
  computed: {
    currentTeam() {
      return this.teamsData[this.currentGalleryIndex];
    },
  },
  methods: {
    openPopup(index) {
      this.popupOpened = true;
      this.changePhoto(index);
    },
    changePhoto(index) {
      if (index >= this.teamsData.length || index < 0) {
        return;
      }
      this.openedPhoto = require(`@/assets/img/cars/2023/${this.teamsData[index].image}`);
      this.currentGalleryIndex = index;
    },
    closePopup(e) {
      if (e.target.className === 'popup') {
        this.popupOpened = false;
      }
    },
    getName,
    getPoints
  }
}
</script>
