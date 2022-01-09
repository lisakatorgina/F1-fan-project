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
        <div class="driver__country" @click="changePhoto(currentGalleryIndex)"><span>{{ driver.country }}</span> {{ driver.flag }}</div>
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
          <p>{{ currentDriver.country }} {{ currentDriver.flag }}</p>
          <p>BD: {{ getBirthday(currentDriver.birthdate) }}</p>
          <p>Age: {{ getAge(currentDriver.birthdate) }}</p>
          <p v-if="currentDriver.champ">🏆 {{ currentDriver.champ }}</p>
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
        {name: 'Max Verstappen', team: 'Red Bull', number: '33', country: 'Nederland', flag: '🇳🇱', points: 0, photo: 'max.jpg', birthdate: '1997/09/30', champ: '2021'},
        {name: 'Lewis Hamilton', team: 'Mercedes', number: '44', country: 'UK', flag: '🇬🇧', points: 0, photo: 'lewis.jpg', birthdate: '1985/01/07', champ: '2008, 2014, 2015, 2017, 2018, 2019, 2020'},
        {name: 'Valtteri Bottas', team: 'Alfa Romeo', number: '77', country: 'Finland', flag: '🇫🇮', points: 0, photo: 'valtteri.jpg', note: '2021 Mercedes', birthdate: '1989/08/28'},
        {name: 'Sergio Perez', team: 'Red Bull', number: '11', country: 'Mexico', flag: '🇲🇽', points: 0, photo: 'checo3.jpg', birthdate: '1990/01/26'},
        {name: 'Carlos Sainz', team: 'Ferrari', number: '55', country: 'Spain', flag: '🇪🇸', points: 0, photo: 'carlos9.jpg', birthdate: '1994/09/01'},
        {name: 'Lando Norris', team: 'McLaren', number: '4', country: 'UK', flag: '🇬🇧', points: 0, photo: 'lando7.jpg', birthdate: '1999/11/13'},
        {name: 'Charles Leclerc', team: 'Ferrari', number: '16', country: 'Monaco', flag: '🇲🇨', points: 0, photo: 'charles4.jpg', birthdate: '1997/10/16'},
        {name: 'Daniel Ricciardo', team: 'McLaren', number: '3', country: 'Australia', flag: '🇦🇺', points: 0, photo: 'daniel4.webp', birthdate: '1989/07/01'},
        {name: 'Pierre Gasly', team: 'Alphatauri', number: '10', country: 'France', flag: '🇫🇷', points: 0, photo: 'pierre.jpg', birthdate: '1996/02/07'},
        {name: 'Fernando Alonso', team: 'Alpine', number: '14', country: 'Spain', flag: '🇪🇸', points: 0, photo: 'fernando.jpg', birthdate: '1981/07/29', champ: '2005, 2006'},
        {name: 'Esteban Ocon', team: 'Alpine', number: '31', country: 'France', flag: '🇫🇷', points: 0, photo: 'esteban.jpg', birthdate: '1996/09/17'},
        {name: 'Sebastian Vettel', team: 'Aston Martin', number: '5', country: 'Germany', flag: '🇩🇪', points: 0, photo: 'seb2.jpg', birthdate: '1987/07/03', champ: '2010, 2011, 2012, 2013'},
        {name: 'Lance Stroll', team: 'Aston Martin', number: '18', country: 'Canada', flag: '🇨🇦', points: 0, photo: 'lance2.jpg', birthdate: '1998/10/29'},
        {name: 'Yuki Tsunoda', team: 'Alphatauri', number: '22', country: 'Japan', flag: '🇯🇵', points: 0, photo: 'yuki.jpg', birthdate: '2000/05/11'},
        {name: 'George Russell', team: 'Mercedes', number: '15', country: 'UK', flag: '🇬🇧', points: 0, photo: 'george.jpg', note: '2021 Williams', birthdate: '1998/02/15'},
        {name: 'Kimi Raikkonen', team: 'Alfa Romeo', number: '7', country: 'Finland', flag: '🇫🇮', points: 0, photo: 'kimi.jpg', note: 'Retired', out: true, birthdate: '1979/10/17'},
        {name: 'Nicholas Latifi', team: 'Williams', number: '6', country: 'Canada', flag: '🇨🇦', points: 0, photo: 'nicholas.jpg', birthdate: '1995/06/29'},
        {name: 'Antonio Giovinazzi', team: 'Alfa Romeo', number: '99', country: 'Italy', flag: '🇮🇹', points: 0, photo: 'antonio.jpg', note: '2022 Formula E', out: true, birthdate: '1993/12/14'},
        {name: 'Mick Schumacher', team: 'Haas', number: '19', country: 'Germany', flag: '🇩🇪', points: 0, photo: 'mick.jpg', birthdate: '1999/03/22'},
        {name: 'Nikita Mazepin', team: 'Haas', number: '9', country: 'Russia', flag: '🇷🇺', points: 0, photo: 'nikita.jpg', birthdate: '1999/03/02'},
        {name: 'Alex Albon', team: 'Williams', number: '23', country: 'Thailand', flag: '🇹🇭', points: 0, photo: 'alex.webp', note: 'Returning', new: true, birthdate: '1996/03/23'},
        {name: 'Guanyu Zhou', team: 'Alfa Romeo', number: '24', country: 'China', flag: '🇨🇳', points: 0, photo: 'guanyu.jpg', note: 'New', new: true, birthdate: '1999/05/30'},
      ],
      currentGalleryIndex: 0,
      openedPhoto: '',
      popupOpened: false,
    }
  },
  mounted() {
    this.driversData.sort(function(a, b){
      return b.points - a.points;
      //return a.team.localeCompare(b.team);
    });
  },
  computed: {
    currentDriver() {
      return this.driversData[this.currentGalleryIndex];
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
    }
  }
}
</script>
