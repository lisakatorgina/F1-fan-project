<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">Season 2022 drivers</h1>
    <h3 class="layout__subtitle">In order of last season standings</h3>
    <div class="drivers">
      <div v-for="(driver, index) in driversData" :key="index" class="drivers__item driver">
        <div class="driver__position">
          <template v-if="index === 0">🏆</template>
          <template v-else-if="index === 1">🥈</template>
          <template v-else-if="index === 2">🥉</template>
          <template v-else>{{ index + 1 }}</template>
        </div>
        <div class="driver__name" @click="openPopup(index)">
          <div>
            <h2>{{ driver.name }}</h2>
            <p v-if="driver.note" class="driver__note">{{ driver.note }}</p>
          </div>
          <span class="driver__number">{{ driver.number }}</span>
        </div>
        <div class="driver__team">{{ driver.team }}</div>
        <div class="driver__country" @click="changePhoto(currentGalleryIndex)"><span>{{ driver.country }}</span> {{ driver.flag }}</div>
        <!-- span class="driver__points">{{ driver.points }}</span -->
      </div>
    </div>
    <div class="popup" v-if="popupOpened" @click="closePopup($event)">
      <div class="popup__box">
        <span class="popup__close" @click="popupOpened = false">&times;</span>
        <h3>{{ popupName }}</h3>
        <div class="popup__photo" :style="{'background-image': `url(${openedPhoto}`}">
          <span class="popup__prev" v-if="currentGalleryIndex > 0" @click="changePhoto(currentGalleryIndex - 1)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></span>
          <span class="popup__next" v-if="currentGalleryIndex < (driversData.length-1)" @click="changePhoto(currentGalleryIndex + 1)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></span>
        </div>
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
        {name: 'Daniel Ricciardo', team: 'Mclaren', number: '3', country: 'Australia', flag: '🇦🇺', points: 0, photo: 'daniel4.webp'},
        {name: 'Pierre Gasly', team: 'Alphatauri', number: '10', country: 'France', flag: '🇫🇷', points: 0, photo: 'pierre.jpg'},
        {name: 'Fernando Alonso', team: 'Alpine', number: '14', country: 'Spain', flag: '🇪🇸', points: 0, photo: 'fernando.jpg'},
        {name: 'Esteban Ocon', team: 'Alpine', number: '31', country: 'France', flag: '🇫🇷', points: 0, photo: 'esteban.jpg'},
        {name: 'Sebastian Vettel', team: 'Aston Martin', number: '5', country: 'Germany', flag: '🇩🇪', points: 0, photo: 'seb2.jpg'},
        {name: 'Lance Stroll', team: 'Aston Martin', number: '18', country: 'Canada', flag: '🇨🇦', points: 0, photo: 'lance2.jpg'},
        {name: 'Yuki Tsunoda', team: 'Alphatauri', number: '22', country: 'Japan', flag: '🇯🇵', points: 0, photo: 'yuki.jpg'},
        {name: 'George Russell', team: 'Mercedes', number: '15', country: 'UK', flag: '🇬🇧', points: 0, photo: 'george.jpg'},
        {name: 'Kimi Raikkonen', team: 'Alfa Romeo', number: '7', country: 'Finland', flag: '🇫🇮', points: 0, photo: 'kimi.jpg', note: 'Retired'},
        {name: 'Nicholas Latifi', team: 'Williams', number: '6', country: 'Canada', flag: '🇨🇦', points: 0, photo: 'nicholas.jpg'},
        {name: 'Antonio Giovinazzi', team: 'Alfa Romeo', number: '99', country: 'Italy', flag: '🇮🇹', points: 0, photo: 'antonio.jpg', note: 'Went to Formula E'},
        {name: 'Mick Schumacher', team: 'Haas', number: '19', country: 'Germany', flag: '🇩🇪', points: 0, photo: 'mick.jpg'},
        {name: 'Nikita Mazepin', team: 'Haas', number: '9', country: 'Russia', flag: '🇷🇺', points: 0, photo: 'nikita.jpg'},
        {name: 'Alex Albon', team: 'Williams', number: '23', country: 'Thailand', flag: '🇹🇭', points: 0, photo: 'alex.webp', note: 'Returning'},
        {name: 'Guanyu Zhou', team: 'Alfa Romeo', number: '24', country: 'China', flag: '🇨🇳', points: 0, photo: 'guanyu.jpg', note: 'New'},
      ],
      currentGalleryIndex: 0,
      openedPhoto: '',
      popupOpened: false,
      popupName: 'Name'
    }
  },
  mounted() {
    this.driversData.sort(function(a, b){
      return b.points - a.points;
      //return a.team.localeCompare(b.team);
    });
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
      this.popupName = this.driversData[index].name;
      this.currentGalleryIndex = index;
    },
    closePopup(e) {
      if (e.target.className === 'popup') {
        this.popupOpened = false;
      }
    }
  }
}
</script>
