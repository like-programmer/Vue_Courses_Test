<template>
  <select name="select">
    <option v-for="(option, index) in options" :key="index" :value="option">{{option}}</option>
  </select>
</template>

<script>
export default {
  name: "SelectItem",
  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>
