<template>
  <div class="page-header">
    <div class="page-header__wrapper container">
      <div class="page-header__username">
        <span class="page-header__font page-header__font--username">Welcome back, {{username}}</span>
      </div>

      <Button color="secondary" class="page-header__button" @click="logoutClick">Logout</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Button from "@/components/common/Button";
import router from "@/router";

export default {
  name: "PageHeader",
  components: {
    Button,
  },
  computed: {
    ...mapGetters({
      username: 'mainData/username',
    }),
  },
  methods: {
    ...mapActions({
      logout: 'mainData/logout',
    }),

    logoutClick() {
      this.logout();
      router.push('/')
    }
  }
}
</script>
