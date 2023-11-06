<template>
  <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('change', $event.target.value)"
  >
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
    value: {
      type: String,
      required: true,
    }
  }
}
</script>
