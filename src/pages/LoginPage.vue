<template>
  <div class="login-page">
  <LoginForm @submit="onSubmit" />
  </div>
</template>

<script>
import router from "@/router";

import LoginForm from "@/components/LoginForm";

export default {
  name: "LoginPage",
  components: {
    LoginForm,
  },

  methods: {
    redirectToInnerPage() {
      router.push('/courses')
    },

    onSubmit() {
      this.redirectToInnerPage();
    }
  }
}
</script>
