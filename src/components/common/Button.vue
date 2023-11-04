<template>
  <button
      :class="['button', `button--${color}`]"
      type="button"
      @click="$emit('click')"
  >
    <span class="button__font button__font--button">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const colors = ['primary', 'secondary', 'disabled'];
export default {
  name: "ButtonItem",
  props: {
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        return colors.includes(value);
      },
    }
  }
}
</script>
