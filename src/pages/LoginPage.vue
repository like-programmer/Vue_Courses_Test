<template>
  <div class="login-page">
  <LoginForm @submit="onSubmit" />
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex';
import router from "@/router";

import LoginForm from "@/components/LoginForm";

export default {
  name: "LoginPage",
  components: {
    LoginForm,
  },

  methods: {
    ...mapActions({
      getUserData: 'mainData/getUserData',
    }),
    ...mapMutations({
      setUsername: 'mainData/setUsername',
    }),

    redirectToInnerPage() {
      router.push('/courses')
    },

    onSubmit(username) {
      this.setUsername(username)
      this.getUserData();
      this.redirectToInnerPage()
    }
  }
}
</script>
