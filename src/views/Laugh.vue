<template>
  <div class="layout layout_simple">
    <h1 class="layout__title">How they laugh</h1>
    <div class="laugh">
      <laugh-item name="lando"></laugh-item>
      <laugh-item name="carlos"></laugh-item>
      <laugh-item name="daniel"></laugh-item>
      <laugh-item name="max"></laugh-item>
      <laugh-item name="checo"></laugh-item>
      <laugh-item name="charles"></laugh-item>
      <laugh-item name="lewis"></laugh-item>
      <laugh-item name="seb"></laugh-item>
      <laugh-item name="esteban"></laugh-item>
      <laugh-item name="pierre"></laugh-item>
      <laugh-item name="lance"></laugh-item>
      <laugh-item name="kimi"></laugh-item>
    </div>
  </div>
</template>

<script>
import LaughItem from "@/components/LaughItem";
export default {
  components: {
    LaughItem,
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style>

</style>
