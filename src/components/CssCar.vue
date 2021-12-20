<template>
  <div class="car__inner">
    <label class="switcher">
      <input type="checkbox" @click="photoHidden = !photoHidden">
      hide photo
    </label>
    <label class="switcher" style="left: 150px;">
      <input type="checkbox" @click="carHidden = !carHidden">
      hide car
    </label>
    <img src="../assets/img/car.jpeg" alt="" :class="{'_hidden': photoHidden}">
    <div :class="['car__canvas',{'car__canvas_broken': broken}]" v-if="!carHidden" @click="broken = !broken">
      <div class="_base">
        <div class="_wheels">
          <div class="_front _left"></div>
          <div class="_front _right"></div>
          <div class="_back _left"></div>
          <div class="_back _right"></div>
        </div>
        <div class="_body">
          <div class="_back">
            <div class="_spine">
              <div></div>
            </div>
          </div>
        </div>
        <div class="_chassis">
          <div class="_left"></div>
          <div class="_right"></div>
        </div>
        <div class="_cockpit">
          <div class="_bottom"></div>
          <div class="_front"></div>
          <div class="_nose"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssCar',
  props: {
  },
  data() {
    return {
      carHidden: false,
      photoHidden: false,
      broken: false
    }
  },
}
</script>
