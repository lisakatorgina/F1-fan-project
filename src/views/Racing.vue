<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">Racing season 2022</h1>
    <div class="races">
      <div v-for="(item, index) in tracks" :key="index" class="races__item">
        <div class="races__item-header">
          <span class="races__item-number">{{ index + 1 }}</span>
          <span class="races__item-dates">{{ item.dates }}</span>
        </div>
        <h2>
          <span>{{ item.country }}</span>
          <span>{{ item.flag }}</span>
          <small>{{ item.place }}</small>
        </h2>
        <h3>{{ item.name }}</h3>
        <img v-if="item.image !== ''" :src="require(`../assets/img/tracks/${item.image}`)" :alt="item.name">
        <p class="races__item-laps">{{ item.laps }} laps</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  metaInfo: {
    title: 'Racing',
    meta: [
      {name: 'description', content: 'Racing schedule and info' },
    ]
  },
  data() {
    return {
      tracks: [
        {country: 'Bahrain', flag: '🇧🇭', place: 'Sakhir', name: 'Bahrain International Circuit', dates: 'March 18-20', laps: '57', image: 'sakhir.svg'},
        {country: 'Saudi Arabia', flag: '🇸🇦', place: 'Jeddah', name: 'Jeddah Corniche Circuit', dates: 'March 25-27', laps: '50', image: 'jeddah.svg'},
        {country: 'Australia', flag: '🇦🇺', place: 'Melbourn', name: 'Melbourne Grand Prix Circuit', dates: 'April 8-10', laps: '58', image: 'melbourn.svg'},
        {country: 'Italy', flag: '🇮🇹', place: 'Imola', name: 'Autodromo Enzo e Dino Ferrari', dates: 'April 22-24', laps: '63', image: 'imola.svg'},
        {country: 'United States', flag: '🇺🇸', place: 'Miami', name: 'Miami International Autodrome', dates: 'May 6-8', laps: '57', image: 'miami.svg'},
        {country: 'Spain', flag: '🇪🇸', place: 'Catalunya', name: 'Circuit de Barcelona-Catalunya', dates: 'May 20-22', laps: '66', image: 'barcelona.svg'},
        {country: 'Monaco', flag: '🇲🇨', place: 'Monte Carlo', name: 'Circuit de Monaco', dates: 'May 27-29', laps: '78', image: ''},
        {country: 'Azerbaijan', flag: '🇦🇿', place: 'Baku', name: 'Baku City Circuit', dates: 'June 10-12', laps: '51', image: ''},
        {country: 'Canada', flag: '🇨🇦', place: 'Montreal', name: 'Circuit Gilles-Villeneuve', dates: 'June 17-19', laps: '70', image: ''},
        {country: 'Great Britain', flag: '🇬🇧', place: 'Silverstone', name: 'Silverstone Circuit', dates: 'July 1-3', laps: '52', image: ''},
        {country: 'Austria', flag: '🇦🇹', place: 'Spielberg', name: 'Red Bull Ring', dates: 'July 8-10', laps: '71', image: ''},
        {country: 'France', flag: '🇫🇷', place: 'Le Castellet', name: 'Circuit Paul Ricard', dates: 'July 22-24', laps: '53', image: ''},
        {country: 'Hungary', flag: '🇭🇺', place: 'Budapest', name: 'Hungaroring', dates: 'July 29-31', laps: '70', image: ''},
        {country: 'Belgium', flag: '🇧🇪', place: 'Spa-Francorchamps', name: 'Circuit de Spa-Francorchamps', dates: 'August 26-28', laps: '44', image: ''},
        {country: 'Netherlands', flag: '🇳🇱', place: 'Zandvoort', name: 'Circuit Zandvoort', dates: 'September 2-4', laps: '72', image: ''},
        {country: 'Italy', flag: '🇮🇹', place: 'Monza', name: 'Autodromo Nazionale Monza', dates: 'September 9-11', laps: '53', image: ''},
        {country: 'Russia', flag: '🇷🇺', place: 'Sochi', name: 'Sochi Autodrom', dates: 'September 23-25', laps: '53', image: ''},
        {country: 'Singapore', flag: '🇸🇬', place: 'Singapore', name: 'Marina Bay Street Circuit', dates: 'Septenber 30 - October 2', laps: '61', image: ''},
        {country: 'Japan', flag: '🇯🇵', place: 'Suzuka', name: 'Suzuka International Racing Course', dates: 'October 7-9', laps: '53', image: ''},
        {country: 'United States', flag: '🇺🇸', place: 'Austin', name: 'Circuit of The Americas', dates: 'October 21-23', laps: '56', image: ''},
        {country: 'Mexico', flag: '🇲🇽', place: 'Mexico City', name: 'Autódromo Hermanos Rodríguez', dates: 'October 28-30', laps: '71', image: ''},
        {country: 'Brazil', flag: '🇧🇷', place: 'São Paulo', name: 'Autódromo José Carlos Pace', dates: 'November 11-13', laps: '71', image: ''},
        {country: 'Abu Dhabi', flag: '🇦🇪', place: 'Yas Island', name: 'Yas Marina Circuit', dates: 'November 18-20', laps: '58', image: ''}
      ]
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>
