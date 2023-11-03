<template>
  <div
      class="todo-card"
      :class="{
    'todo-card--completed': todo.completed,
    'todo-card--favourite': todo.favourite,
  }"
  >
    <div class="todo-card__header">user id: {{todo.userId}}</div>

    <div class="todo-card__content">
      <p class="todo-card__font todo-card__font--title">{{todo.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoCard",
  props: {
    todo: {
      type: Object,
      required: true,
    }
  }
}
</script>
