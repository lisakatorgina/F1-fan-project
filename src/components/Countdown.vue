<template>
  <div class="countdown">
    <countdown :end-time="new Date(2022, 2, 17, 18, 0, 0)">
      <template v-slot:process="countdown">
        <h1 v-if="!noTitle">New season is loading...</h1>
        <div class="load-bar">
          <div class="load-bar__progress-wrap">
            <div class="load-bar__progress" :style="{width: `${Math.round(100 - (100/93 * countdown.timeObj.d))}%`}">{{ `${Math.round(100 - (100/93 * countdown.timeObj.d))}%` }}</div>
          </div>
          <span class="load-bar__mark" :style="{left: `${Math.round(100/93 * 17)}%`}"><span>NY</span></span>
          <span class="load-bar__mark" :style="{left: `${Math.round(100/93 * 69)}%`}"><span>T</span></span>
        </div>
        <h2>The next racing weekend starts in</h2>
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
    noTitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>
