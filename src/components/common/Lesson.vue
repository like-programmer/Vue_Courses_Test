<template>
  <Card align="left" class="lesson">
    <template #header>
      <div class="lesson__title">
          <div class="lesson__step">
            <span class="lesson__font lesson__font--step">{{index}}</span>
          </div>
        <span class="lesson__font lesson__font--title">{{lesson.title}}</span>
      </div>
    </template>

    <div class="lesson__description">
      <p class="lesson__font lesson__font--description">{{lesson.description}}</p>
    </div>

    <div class="lesson__bottom">
      <div class="lesson__info">
        <p class="lesson__font lesson__font--info">Last try time: </p>
        <span class="lesson__font lesson__font--number">{{lastTryTime}}</span>
      </div>
      <div class="lesson__info">
        <p class="lesson__font lesson__font--info">Tries used: </p>
        <span class="lesson__font lesson__font--number">{{triesUsed}}</span>
      </div>
      <div class="lesson__info">
        <p class="lesson__font lesson__font--info">Last try date:</p>
        <span class="lesson__font lesson__font--number">{{lastTryDate}}</span>
      </div>
    </div>

    <template #actions>
      <Button color="secondary" class="lesson__button" @click="onLessonClick">Open lesson</Button>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

import {getFormattedDate} from '@/tools/helpers';

export default {
  name: "LessonCard",
  props: {
    index: {
      type: Number,
      default: 1
    },
    lesson: {
      type: Object,
      required: true
    },
    lessonProgress: {
      type: Array,
      required: true,
    },
  },
  components: {
    Card,
    Button,
  },
  computed: {
    isProgressExist() {
      return this.lessonProgress.length > 0
    },

    lastTryTime() {
      return this.isProgressExist ? this.lessonProgress[this.lessonProgress.length - 1].time : '-'
    },

    triesUsed() {
      return this.isProgressExist ? this.lessonProgress.length : '-'
    },

    lastTryDate() {
      return this.isProgressExist ? getFormattedDate(this.lessonProgress[this.lessonProgress.length - 1].date) : '-'
    },
  },
  methods: {
    onLessonClick() {
      this.$emit('lessonClick', {id: this.lesson.id})
    }
  }
}
</script>
