import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: () => import('../pages/LoginPage.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !localStorage.getItem('userData')) {
//     next({ name: 'login' })
//   } else {next()}
// })

export default router;
