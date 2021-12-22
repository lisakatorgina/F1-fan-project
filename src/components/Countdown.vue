<template>
  <div class="countdown">
    <countdown :end-time="new Date(2022, 2, 17, 18, 0, 0)">
      <template v-slot:process="countdown">
        <h1>New season is loading...</h1>
        <div class="load-bar">
          <div class="load-bar__progress" :style="{width: `${Math.round(100 - (100/93 * countdown.timeObj.d))}%`}">{{ `${Math.round(100 - (100/93 * countdown.timeObj.d))}%` }}</div>
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
}
</script>
