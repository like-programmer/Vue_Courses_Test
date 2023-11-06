<template>
  <div class="lesson-page">
    <div class="lesson-page__title">
      <h1 class="lesson-page__font lesson-page__font--title">{{currentLesson.title}}</h1>
    </div>

    <div class="lesson-page__text">
      <div
          class="lesson-page__paragraph"
          v-for="(paragraph, index) in currentLesson.text"
          :key="`${currentLesson.id}-${index}`"
      >
        <p class="lesson-page__font lesson-page__font--paragraph">
          {{paragraph}}
        </p>
      </div>
    </div>

    <div ref="finalBanner" class="lesson-page__end-banner">
      <Banner>
        <template #text>
          Good job! You are finished the lesson!
        </template>

        <template #actions>
          <div class="lesson-page__actions">
            <router-link
                class="lesson-page__font lesson-page__font--action"
                :to="coursesHref"
            >
              Back to courses
            </router-link>

            <router-link
                v-if="!!nextLesson"
                class="lesson-page__font lesson-page__font--action"
                :to="nextLessonHref"
            >
              Next lesson
            </router-link>
          </div>
        </template>
      </Banner>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

import Banner from "@/components/common/Banner";

import {courses} from "@/config/courses";

import observer from '@/mixins/observer';
import timer from '@/mixins/timer';

import {getTimeFromMilliseconds} from '@/tools/helpers';

export default {
  name: "CoursePage",
  mixins: [observer, timer],
  props: {
    courseId: {
      type: String,
      required: true
    },
    lessonId: {
      type: String,
      required: true
    }
  },
  components: {
    Banner,
  },
  data() {
    return {
      course: courses.find(course => course.id === this.courseId)
    }
  },
  computed: {
    currentLessonIndex() {
      return this.course.lessons.findIndex(lesson => lesson.id === this.lessonId)
    },
    currentLesson() {
      return this.course.lessons.find(lesson => lesson.id === this.lessonId)
    },

    nextLesson() {
      return this.currentLessonIndex < this.course.lessons.length - 1
          ? this.course.lessons.find((lesson, index) => index === this.currentLessonIndex + 1)
          : null
    },

    nextLessonHref() {
      return {name: 'lesson', params: {courseId: this.courseId, lessonId: this.nextLesson?.id}};
    },

    coursesHref() {
      return {name: 'courses'};
    },
  },

  mounted() {
    this.startTimer();
    this.addScrollChangeObserver();
  },

  methods: {
    ...mapActions({
      saveNewTry: 'mainData/saveNewTry',
    }),

    getSpentTime() {
      const startTimestamp = this.startDate.getTime()
      const endTimestamp = this.finishDate.getTime()
      const diffInMilliseconds = endTimestamp - startTimestamp;

      const { hours, minutes, seconds } = getTimeFromMilliseconds(diffInMilliseconds);

      return `${hours}:${minutes}:${seconds}`;
    },

    saveTryData() {
      const time = this.getSpentTime();

      this.saveNewTry({
        courseId: this.courseId,
        lessonId: this.lessonId,
        dateTme: {
          time,
          date: this.startDate,
        }
      })
    },

    addScrollChangeObserver() {
      this.addObserver({
        target: this.$refs.finalBanner,
        threshold: 1,
        callback: (entry) => {
          if (
              entry.isIntersecting
          ) {
            this.stopTimer()
            this.saveTryData()
          }
        },
      });
    },
  },
}
</script>
