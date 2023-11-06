<template>
  <Card align="left" class="course">
    <template #header>
      <div class="course__title">
        <span class="course__font course__font__title">{{course.title}}</span>
      </div>
    </template>

    <div class="course__lessons">
      <slot></slot>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/common/Card";

export default {
  name: "CourseItem",
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    Card,
  },
}
</script>
