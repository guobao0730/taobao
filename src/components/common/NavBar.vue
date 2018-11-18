<template>

  <!--
  对多次使用的导航条进行封装，以便其它组件进行复用,并且对该组件进行全局配置
  该导航条组件是MUI插件中的
  -->
  <header class="mui-bar mui-bar-nav">
    <!--返回键-->
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack"></a>
    <!--标题-->
    <h1 class="mui-title">{{title}}</h1>
  </header>
</template>

<script>
    export default {
        name: "NavBar",
      //接受从父容器传递过来的title变量
      props:['title'],
      methods:{
          goBack(){
            //返回上一页
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>
  /*因为header标签使用的是固定定位，而固定定位会将顶部的淘宝导航栏给屏蔽掉，那么就需将当前组件的定位模式改变下*/
  .mui-bar {
    /*
    设置为相对定位模式
    */
    position: relative;
  }

</style>
