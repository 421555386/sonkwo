import Vue from 'vue'
import App from './App.vue'
import './assets/css/cssreset.css'
import './assets/css/commond.css'
import './assets/font/iconfont.css'


import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './assets/js/router.js'

import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

import Vuex from 'vuex'
// 配置每一个实例对象都可以使用vuex语法
Vue.use(Vuex)
import store from './assets/js/data.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
