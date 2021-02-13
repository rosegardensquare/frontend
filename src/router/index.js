import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Photo from '@/components/Photo/Photo'
import Video from '@/components/Video/Video'
import Shop from '@/components/Shop/Shop'
import Music from '@/components/Music/Music'
import HomeModels from '@/components/Home/HomeModels'

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
      path: '/Photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/HomeModels',
      name: 'HomeModels',
      component: HomeModels
    }
  ]
})
