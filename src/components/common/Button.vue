<template>
  <button class="button" type="button" @click="$emit('click')">
    <span class="button__font button__font--button">
      <slot></slot>
    </span>
  </button>
</template>

<script>

export default {
  name: "ButtonItem",
}
</script>
