<template>
  <div id="app">
    <component :is="currentLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout.vue';

export default {
  name: 'App',
  components: {
    AppLayout,
  },
  computed: {
    currentLayout() {
      return this.$route?.meta?.layout || 'div';
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
</style>
