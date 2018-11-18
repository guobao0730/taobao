/* eslint-disable spaced-comment,key-spacing,no-unused-vars,import/first,comma-spacing */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//安装vue-Router，mint-ui,axios插件
/*
引入vue-router
* */

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './components/home/Home'


/*
* 引入mint-ui插件
* */
import Mint from 'mint-ui';
//引入mint-ui中的样式
import 'mint-ui/lib/style.css';
Vue.use(Mint);

//MUI:引入mui的样式
import './static/vendor/mui/dist/css/mui.css';

/*
* 引入Axios
* */
import Axios from 'axios'
Vue.prototype.$axios = Axios
//设置网络请求的相同的baseurl,类似于Android网络请求模块
Axios.defaults.baseURL = 'http://101.200.177.100:8383/api/'


//引入vue2-preview
import Vue2Preview from 'vue2-preview'
Vue.use(Vue2Preview)


import Member from './components/member/Member'
import Search from './components/search/Search'
import Shopcart from './components/shopcart/Shopcart'
import NewsInformation from './components/news/NewsInformation'
import NewsDetails from './components/news/NewsDetails'
import GraphicSharing from './components/imagetext/GraphicSharing'
import GraphicSharingDetails from './components/imagetext/GraphicSharingDetails'
// 创建路由并配置路由规则
let router = new VueRouter({
  /*
  linkActiveClass:'mui-active'
     主要用来设置链接激活时使用的CSS类名，可以使用构造函数中的linkActiveClass属性来全局配置
     给当前选中的标签添加了一个样式，而这个样式可以自定义来实现，mui-active就是类选择器的名称
   */
  linkActiveClass:'mui-active',
  routes: [
    /*配置路由规则*/
    //设置重定向(也就是设置运行该项目时默认打开的页面)
    {path: '/', redirect: {name: 'home'}},
    {name:'home',path:'/home',component:home},

    {name:'member',path:'/member',component:Member},
    {name:'search',path:'/search',component:Search},
    {name:'shopcart',path:'/shopcart',component:Shopcart},

    {name:'newsinformation',path:'/news/newsinformation',component:NewsInformation},

    {name:'newsDetails',path:'/news/newsinformation/newsDetails',component:NewsDetails},

    {name:'graphicSharing',path:'/imagetext/graphicSharing',component:GraphicSharing},

    {name:'graphicSharingDetails',path:'/imagetext/graphicSharingDetails',component:GraphicSharingDetails},
  ]
})



/*全局引入自定义的CSS演示*/
import './static/css/global.css'


/*
* 全局使用导航条组件
* 'navBar'  全局使用的组件名称
* NavBar  表示组件对象
* */
import NavBar from './components/common/NavBar'
Vue.component('navBar',NavBar);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
