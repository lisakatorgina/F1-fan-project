<template>
  <div class="layout layout_laugh">
    <h1 class="layout__title">How they laugh</h1>
    <div class="laugh">
      <laugh-item name="lando"></laugh-item>
      <laugh-item name="carlos"></laugh-item>
      <laugh-item name="daniel"></laugh-item>
      <laugh-item name="max"></laugh-item>
    </div>
  </div>
</template>

<script>
import LaughItem from "@/components/LaughItem";
export default {
  name: 'Gallery',
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
