<template>
  <div class="course-page">
    <CourseItem
        v-for="(course) in courseList"
        :key="course.id"
        :course="course"
    >
      <Lesson
          v-for="(lesson, index) in course.lessons"
          :key="index"
          :index="index + 1"
          :lesson="lesson"
          :lessonProgress="lessonProgress(course.id, lesson.id)"
          @lessonClick="openLesson"
      />
    </CourseItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
    ...mapGetters({
      courseList: 'mainData/courses',
      progressList: 'mainData/progress',
    }),
  },
  methods: {
    lessonProgress(courseId, lessonId) {
      if(!Object.keys(this.progressList)) {
        return [];
      }

      if(!this.progressList[courseId]) {
        return [];
      }

      if(!this.progressList[courseId][lessonId]) {
        return [];
      }

      return this.progressList[courseId][lessonId]
    },

    openLesson(lessonId) {
      const currentCourse = this.courseList.find(course => course.lessons.findIndex(lesson => lesson.id === lessonId))

        this.$router.push({
          name: 'lesson',
          params: { courseId: currentCourse.id, lessonId: lessonId.id },
        });
      },
  }
}
</script>
