<template>
  <div >
    <!--头部使用mint-ui插件
    fixed title="淘宝"  其中加上此属性表示这个头部组件是绝对定位，去除该属性就是相对定位
    -->
    <mt-header  title="淘宝"></mt-header>

    <router-view></router-view>

    <!-- 底部内容 使用的是mui插件 -->
    <nav class="mui-bar mui-bar-tab">
      <!--
      当前的 :to="{name:'home'} 代表的是点击首页以后将会去哪里，home表示所要跳转的页面
      mui-active  表示默认选中首页选项
      icon-shouye1  是自定义图标
      -->
      <router-link class="mui-tab-item " :to="{name:'home'}">
        <span class="mui-icon icon-shouye1"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'member'}">
        <span class="mui-icon icon-diamond"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'shopcart'}">
        <span class="mui-icon icon-gouwucheman"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'search'}">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">查找</span>
      </router-link>
    </nav>
    <div>


    </div>
  </div>
</template>

<script>
  const URL = "http://restapi.amap.com/v3/place/text?&keywords=公交站点&city=杭州&output=json&offset=20&page=1&key=6b6ebee4f2f6ef4c55d1b4b52310acec&extensions=all";
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
    }
  },
  methods:{

  }
}
</script>

<style>

</style>
