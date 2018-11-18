<template>
  <div >
    <!--轮播图(mint-ui中的组件)-->

    <!--该轮播图使用VUX插件完成的-->
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>


    <!--
    九宫格(使用mui插件完成)
    -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'newsinformation'}">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'graphicSharing'}">
          <span class="mui-icon mui-icon-email"></span>
          <div class="mui-media-body">图文分享</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品展示</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">搜索资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div></a></li>
      </ul>
    </div>

  </div>
</template>

<script>
  import {Swiper} from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]


  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `${item.title}`
  }))


  const SWIPER_URL = "getLunBo";

  export default {
  name: 'home',
  components: {
    Swiper
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      demo06_list: urlList,
      demo06_index: 0,
    }
  },
    /*created()函数是vue生命周期中的一个函数
 当DOM还未生成时所调用的函数
 这个函数一般都用来做数据的初始化
 */
  created(){

    /*
    * 当页面创建的时候，从服务器获取轮播图所要展示的数据
    * 注意：该请求是无法连接的，写这段代码主要是为了模拟网络到显示的过程
    * */
    this.$axios.get(SWIPER_URL)
      .then(response=>{
        console.log(response);
        //将从服务器获取的数据设置为demo06_list数组并显示
        this.demo06_list = response.data.message;
      })
      .catch(error=>{
        console.log(error);
      })

  },
  mounted(){

  },
  methods:{

    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*
  删除九宫格默认的图片
  */
  .mui-icon-home:before,.mui-icon-email:before,.mui-icon-chatbubble:before,.mui-icon-location:before,.mui-icon-search:before,.mui-icon-phone:before {
    content: '';
  }


  /*给所有的九宫格图片设置宽高*/
  .mui-icon {
    width: 50px;
    height: 50px;
  }

  /*
  给新闻资讯设置背景图片
  */
  .mui-icon-home {
    /*
    background: url("../../static/img/news.png") round;  表示给新闻资讯设置背景图片,并且让其图片以中心点进行平铺
    ../ 表示跳到上一层文件夹
    ../../ 表示跳到上上层文件夹
    */
    background: url("../../static/img/news.png") round;
  }


  /*图文分享*/
  .mui-icon-email {
    background: url("../../static/img/picShare.png") round;
  }

  /*
  商品展示
  */
  .mui-icon-chatbubble {
    background: url("../../static/img/goodShow.png") round;
  }

  /*留言反馈*/
  .mui-icon-location {
    background: url("../../static/img/feedback.png") round;
  }

  /*搜索资讯*/
  .mui-icon-search {
    background: url("../../static/img/search.png") round;
  }


  /*关于我们*/
  .mui-icon-phone {
    background: url("../../static/img/callme.png") round;
  }

  /*去除距离顶部的间距*/
  .mui-table-view.mui-grid-view.mui-grid-9{
    margin-top: 0px;
    /*设置ul标签的背景颜色*/
    background-color:white;
  }

</style>
