<template>
  <div class="intro">
    <h1>I Love Formula 1</h1>
    <img src="../assets/img/logo.png">
    <div class="countdown">
      <h2>New race season starts in</h2>
      <countdown :end-time="new Date(2022, 2, 17, 18, 0, 0)">
        <template v-slot:process="anyYouWantedScopName">
          <div class="countdown__wrap">
            <div>
              <span>{{ anyYouWantedScopName.timeObj.d }}</span>
              <small>days</small>
            </div>
            <div>
              <span>{{ anyYouWantedScopName.timeObj.h }}</span>
              <small>hr</small>
            </div>
            <div>
              <span>{{ anyYouWantedScopName.timeObj.m }}</span>
              <small>min</small>
            </div>
            <div>
              <span>{{ anyYouWantedScopName.timeObj.s }}</span>
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
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
  },
}
</script>
