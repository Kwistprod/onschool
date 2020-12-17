import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/signin',
    name: 'Sginin',
    component: ()=>import('../views/Signin.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/Courses.vue'),
    // children:[{
    //   path: 'about',
    //   name: 'AboutCourses',
    //   component: () => import('../views/AbCourse.vue'),
    // }]
  },
  {
    path: '/lessons',
    name: 'Lessons',
    component: () => import('../views/Lessons.vue'),
  },
  {
    path: '/courses/about/:id',
    name:'AboutCourses',
    component: () => import('../views/AbCourse.vue')
  },
  {
    path: '/lessons/:courseId/:lessonId',
    name: 'LessonsPage',
    component: () => import('../views/LessonPage.vue'),
  },

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
