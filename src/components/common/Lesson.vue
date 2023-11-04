<template>
  <Card align="left" class="lesson">
    <template #header>
      <div class="lesson__title">
          <div class="lesson__step">
            <span class="lesson__font lesson__font--step">{{index}}</span>
          </div>
        <span class="lesson__font lesson__font--title">Lesson title</span>
      </div>
    </template>

    <div class="lesson__description">
      <p class="lesson__font lesson__font--description">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
    </div>

    <div class="lesson__bottom">
    <div class="lesson__info">
      <p class="lesson__font lesson__font--info">Last try time: </p>
      <span class="lesson__font lesson__font--number">0</span>
    </div>
    <div class="lesson__info">
      <p class="lesson__font lesson__font--info">Tries used: </p>
      <span class="lesson__font lesson__font--number">0</span>
    </div>
    <div class="lesson__info">
      <p class="lesson__font lesson__font--info">Last try date:</p>
      <span class="lesson__font lesson__font--number">0</span>
    </div>
  </div>

    <template #actions>
      <Button color="secondary" class="lesson__button">Open lesson</Button>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default {
  name: "LessonCard",
  props: {
    index: {
      type: Number,
      default: 1
    }
  },
  components: {
    Card,
    Button,
  },
}
</script>
