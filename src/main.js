// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入 vuex
import Vuex from 'vuex'
// 引入全局样式
import '../static/global/index.css'
// 将header注册为全局组件
import FrontendHeader from '@/components/Common/FrontendHeader'
Vue.component(FrontendHeader.name, FrontendHeader)

import GoTop from '@/components/Common/GoTop'
Vue.component(GoTop.name, GoTop)

import Footer from '@/components/Common/Footer'
Vue.component(Footer.name, Footer)


import Home from '@/components/Home/Home'
Vue.component(Home.name, Home)

import Photo from '@/components/Photo/Photo'
Vue.component(Photo.name, Photo)

import * as api from './restful/api'

//挂载到vue原型上
Vue.prototype.$https = api;


Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
