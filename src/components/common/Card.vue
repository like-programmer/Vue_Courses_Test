<template>
<div :class="['card', `card--${align}`]">
   <slot name="header"></slot>

  <slot></slot>

  <slot name="actions"></slot>
</div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    align: {
      type: String,
      default: 'center'
    }
  }
}
</script>
