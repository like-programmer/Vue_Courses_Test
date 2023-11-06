<template>
  <div class="banner">
    <p class="banner__font banner__font--text">
      <slot name="text"></slot>
    </p>

    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "BannerItem"
}
</script>
