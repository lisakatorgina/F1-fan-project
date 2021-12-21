<template>
  <div class="home home_template">
    <div class="home__bg" :style="{'background-image': 'url(' + require('@/assets/img/photos/lando.jpg') + ')'}"></div>
    <div class="intro intro_dark">
      <div class="countdown">
        <countdown :end-time="new Date(2022, 2, 17, 18, 0, 0)">
          <template v-slot:process="anyYouWantedScopName">
            <h1>Loading in progress...</h1>
            <div class="load-bar">
              <div class="load-bar__progress" :style="{width: `${Math.round(100 - (100/93 * anyYouWantedScopName.timeObj.d))}%`}">{{ `${Math.round(100 - (100/93 * anyYouWantedScopName.timeObj.d))}%` }}</div>
            </div>
            <h2>The new racing season starts in</h2>
            <div class="countdown__wrap">
              <div>
                <span>{{ anyYouWantedScopName.timeObj.d }}</span>
                <small>days</small>
              </div>
              <div>
                <span>{{ anyYouWantedScopName.timeObj.h }}</span>
                <small>hrs</small>
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
  </div>
</template>

<script>
import Intro from "@/components/Intro";

export default {
  name: 'Template',
  components: {
    Intro,
  }
}
</script>
