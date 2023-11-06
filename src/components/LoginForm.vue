<template>
  <div class="login-form">
    <Card align="center">
      <template #header>
        <span class="login-form__font login-form__font--header">Login</span>
      </template>

      <div class="login-form__input">
        <Input
            type="text"
            placeholder="Username"
            :value="userName"
            @change="setNewName"
        />
      </div>

      <template #actions>
        <Button color="primary" @click="onSubmit">
          <span>Login</span>
        </Button>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default {
  name: "LoginForm",
  props: {
    isError: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    Button,
    Card,
    Input,
  },
  data() {
    return {
      userName: '',
    }
  },
  watch: {
    userName(newName) {
      this.userName = newName.replace(/[^a-zA-zа-яА-Я\s]/, '')
    },
  },
  methods: {
    setNewName(value) {
      this.userName = value
    },

    onSubmit() {
      this.$emit('submit', this.userName)
    }
  }
}
</script>
