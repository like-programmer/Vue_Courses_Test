<template>
  <input class="input" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
  name: "InputItem",
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  }
}
</script>
