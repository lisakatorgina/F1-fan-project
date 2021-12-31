<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">Season 2022 drivers</h1>
    <div class="drivers">
      <div v-for="(driver, index) in driversData" :key="index" class="drivers__item driver">
        <span class="driver__position">{{ index + 1 }}</span>
        <span class="driver__name" @click="openPopup(driver.photo, driver.name)">
          <h2>{{ driver.name }}</h2>
          <span class="driver__number">{{ driver.number }}</span>
        </span>
        <span class="driver__team">{{ driver.team }}</span>
        <span class="driver__country"><span>{{ driver.country }}</span> {{ driver.flag }}</span>
        <span class="driver__points">{{ driver.points }}</span>
      </div>
    </div>
    <div class="popup" v-if="popupOpened" @click="closePopup($event)">
      <div class="popup__box">
        <span class="popup__close" @click="popupOpened = false">&times;</span>
        <h3>{{ popupName }}</h3>
        <img :src="openedPhoto" alt="">
      </div>
    </div>
  </div>
</template>

<script>
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
      driversData: [
        {name: 'Max Verstappen', team: 'Red Bull', number: '33', country: 'Nederland', flag: '🇳🇱', points: 0, photo: 'max.jpg'},
        {name: 'Lewis Hamilton', team: 'Mercedes', number: '44', country: 'UK', flag: '🇬🇧', points: 0, photo: 'lewis.jpg'},
        {name: 'Valtteri Bottas', team: 'Alfa Romeo', number: '77', country: 'Finland', flag: '🇫🇮', points: 0, photo: 'valtteri.jpg'},
        {name: 'Sergio Perez', team: 'Red Bull', number: '11', country: 'Mexico', flag: '🇲🇽', points: 0, photo: 'checo3.jpg'},
        {name: 'Carlos Sainz', team: 'Ferrari', number: '55', country: 'Spain', flag: '🇪🇸', points: 0, photo: 'carlos9.jpg'},
        {name: 'Lando Norris', team: 'McLaren', number: '4', country: 'UK', flag: '🇬🇧', points: 0, photo: 'lando7.jpg'},
        {name: 'Charles Leclerc', team: 'Ferrari', number: '16', country: 'Monaco', flag: '🇲🇨', points: 0, photo: 'charles4.jpg'},
        {name: 'Daniel Ricciardo', team: 'Mclaren', number: '3', country: 'Australia', flag: '🇦🇺', points: 0, photo: 'daniel3.jpg'},
        {name: 'Pierre Gasly', team: 'Alphatauri', number: '10', country: 'France', flag: '🇫🇷', points: 0, photo: 'pierre.jpg'},
        {name: 'Fernando Alonso', team: 'Alpine', number: '14', country: 'Spain', flag: '🇪🇸', points: 0, photo: 'fernando.jpg'},
        {name: 'Esteban Ocon', team: 'Alpine', number: '31', country: 'France', flag: '🇫🇷', points: 0, photo: 'esteban.jpg'},
        {name: 'Sebastian Vettel', team: 'Aston Martin', number: '5', country: 'Germany', flag: '🇩🇪', points: 0, photo: 'seb.jpg'},
        {name: 'Lance Stroll', team: 'Aston Martin', number: '18', country: 'Canada', flag: '🇨🇦', points: 0, photo: 'lance.jpg'},
        {name: 'Yuki Tsunoda', team: 'Alphatauri', number: '22', country: 'Japan', flag: '🇯🇵', points: 0, photo: 'yuki.jpg'},
        {name: 'George Russell', team: 'Mercedes', number: '15', country: 'UK', flag: '🇬🇧', points: 0, photo: 'george.jpg'},
        {name: 'Nicholas Latifi', team: 'Williams', number: '6', country: 'Canada', flag: '🇨🇦', points: 0, photo: 'nicholas.jpg'},
        {name: 'Mick Schumacher', team: 'Haas', number: '19', country: 'Germany', flag: '🇩🇪', points: 0, photo: 'mick.jpg'},
        {name: 'Nikita Mazepin', team: 'Haas', number: '9', country: 'Russia', flag: '🇷🇺', points: 0, photo: 'nikita.jpg'},
        {name: 'Alex Albon', team: 'Williams', number: '23', country: 'Thailand', flag: '🇹🇭', points: 0, photo: 'alex.webp'},
        {name: 'Guanyu Zhou', team: 'Alfa Romeo', number: '24', country: 'China', flag: '🇨🇳', points: 0, photo: 'guanyu.jpg'},
      ],
      openedPhoto: '',
      popupOpened: false,
      popupName: 'Name'
    }
  },
  mounted() {
    this.driversData.sort(function(a, b){
      return b.points - a.points;
    });
  },
  methods: {
    openPopup(image, name) {
      this.popupOpened = true;
      this.openedPhoto = require(`@/assets/img/photos/${image}`);
      this.popupName = name;
    },
    closePopup(e) {
      if (e.target.className === 'popup') {
        this.popupOpened = false;
      }
    }
  }
}
</script>
