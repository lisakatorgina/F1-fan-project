<template>
  <div>
    <h1 class="content__title">Season 2022 teams</h1>
    <h3 class="content__subtitle">In order of last season standings</h3>
    <div class="table">
      <div v-for="(team, index) in teamsData" :key="index" :class="['table__item', 'row']">
        <div class="row__position">
          {{ index + 1 }}
        </div>
        <div class="row__name row__name_team" @click="openPopup(index)">
          <h2>{{ team.name }}</h2>
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
  </div>
</template>

<script>
import getFlag from "@/utils/getflag";
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
      teamsData: teams
    }
  },
  mounted() {
    for (var i = 0; i < this.teamsData.length; i++) {
      var _driver1 = this.teamsData[i].drivers[0];
      var _driver2 = this.teamsData[i].drivers[1];
      this.teamsData[i].points = (getPoints()[_driver1] ? getPoints()[_driver1] : 0) + (getPoints()[_driver2] ? getPoints()[_driver2] : 0);
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
    getPoints
  }
}
</script>
