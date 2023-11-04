<template>
  <div class="course-page">
    <CourseItem>
      <Lesson
          v-for="(item, index) in Array(3).fill('')"
          :key="index"
          :index="index + 1"
      />
    </CourseItem>
  </div>
</template>

<script>
import CourseItem from "@/components/common/CourseItem";
import Lesson from "@/components/common/Lesson";

export default {
  name: "CoursesPage",
  components: {
    CourseItem,
    Lesson,
  },
  data() {
    return {
      selectedLesson: null,
    }
  },
  computed: {
  }
}
</script>
