<template>
  <div class="layout">
    <PageHeader></PageHeader>

    <div class="layout__wrapper container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";

export default {
  name: "AppLayout",
  components: {
    PageHeader,
  },
}
</script>
