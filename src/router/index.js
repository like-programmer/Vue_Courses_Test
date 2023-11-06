import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../pages/LoginPage.vue'),
  },
  {
    path: '/courses',
    component: () => import('../components/layout/CoursesLayout.vue'),
    children: [
      {
        path: '',
        name: 'courses',
        meta: {
          layout: 'AppLayout',
        },
        component: () => import('../pages/CoursesPage.vue'),
      },
      {
        path: ':courseId/:lessonId',
        name: 'lesson',
        meta: {
          layout: 'AppLayout',
        },
        props: (route) => ({ courseId: route.params.courseId, lessonId: route.params.lessonId }),
        component: () => import('../pages/LessonPage.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth', };
    },
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('userName')) {
    next({ name: 'login' })
  } else {next()}
})

export default router;
