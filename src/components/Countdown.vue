<template>
  <div :class="['countdown', {'countdown_dark': dark}]">
    <countdown :end-time="new Date(2022, 2, 17, 18, 0, 0)">
      <template v-slot:process="countdown">
        <div class="load-bar">
          <div class="load-bar__progress-wrap">
            <div class="load-bar__progress" :style="{width: `${Math.round(100 - (100/93 * countdown.timeObj.d))}%`}">{{ `${Math.round(100 - (100/93 * countdown.timeObj.d))}%` }}</div>
          </div>
          <span class="load-bar__mark" :style="{left: `${Math.round(100/93 * 17)}%`}"><span>NY</span></span>
          <span class="load-bar__mark" :style="{left: `${Math.round(100/93 * 69)}%`}"><span>Tests</span></span>
        </div>
        <h2>
          Today is {{ todayString }}<br/>
          next racing weekend is starting in
        </h2>
        <div class="countdown__wrap">
          <div>
            <span>{{ countdown.timeObj.d }}</span>
            <small>days</small>
          </div>
          <div>
            <span>{{ countdown.timeObj.h }}</span>
            <small>hrs</small>
          </div>
          <div>
            <span>{{ countdown.timeObj.m }}</span>
            <small>min</small>
          </div>
          <div>
            <span>{{ countdown.timeObj.s }}</span>
            <small>sec</small>
          </div>
        </div>
      </template>
      <template
          v-slot:finish>
        <span>Hurray!</span>
      </template>
    </countdown>
  </div>
</template>

<script>
export default {
  name: 'myCountdown',
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      todayString: '',
    }
  },
  mounted() {
    var today = new Date().toLocaleTimeString('en-US', { day:"numeric", month: "long", year: "numeric" });
    var _date = today.split(',')[0];
    var _year = today.split(',')[1];
    this.todayString = _date + ', ' + _year;
    console.log(this.todayString);
  }
}
</script>
