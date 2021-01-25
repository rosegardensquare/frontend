import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Course from '@/components/Course/Course'
import LightCourse from '@/components/LightCourse/LightCourse'
import Micro from '@/components/Micro/Micro'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: "Home" }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Course',
      name: 'Course',
      component: Course
    },
    {
      path: '/LightCourse',
      name: 'LightCourse',
      component: LightCourse
    },
    {
      path: '/Micro',
      name: 'Micro',
      component: Micro
    }
  ]
})
