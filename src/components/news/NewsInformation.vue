<template>
  <div class="bottom-style-div">

    <!--
    使用自定义的全局组件NavBar
    title="新闻列表  此时的title是nav-bar中自定义的变量，表示将新闻列表字符串传递给子组件中的title变量,也就是父子之间数据传递
    -->
    <nav-bar title="新闻列表"></nav-bar>


    <!--
    该图文列表组件使用的是MUI插件
    -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsData" :key="index" >

        <!--
        通过router-link携带参数并跳转页面
        query:{id:item.id}  表示将当前item.id作为值，id作为键传递过去,然后再通过id在服务器请求获取对应的数据
        -->
        <router-link :to="{name:'newsDetails',query:{id:item.id}}">
          <!--
          :src="item.img_url"
          :src 是v-bind:src 的缩写 ,也就是单项数据绑定,只有通过这种方式才可以正常显示图片
          -->
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            {{item.title}}
            <div>
              <div id="left_div" class="describe-div">点击数：{{item.click}}</div>
              <div id="right_div" class="describe-div">{{item.add_time}}</div>
            </div>
          </div>
        </router-link>
      </li>

    </ul>

    <!--
    在Vue项目中想操作时间可以使用moment时间处理类库来完成
    详见：http://momentjs.cn/
    -->


  </div>
    
</template>

<script>

    export default {
        name: "NewsInformation",
      data(){
          return{
            //定义一个数组存放新闻列表数据
            newsData:[
              {
                "id":"1",
                "title":"关于中非合作，习近平这些提法有深意",
                "add_time":"2018-09-07 15:30",
                "click":"1",
                "img_url":"http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg",
              },
              {
                "id":"2",
                "title":"工信部回应李克强呼吁2",
                "add_time":"2018-09-07 15:40",
                "click":"2",
                "img_url":"https://goss2.vcg.com/creative/vcg/800/version23/VCG41143249440.jpg",
              },
              {
                "id":"3",
                "title":"关于中非合作，习近平这些提法有深意",
                "add_time":"2018-09-07 15:30",
                "click":"1",
                "img_url":"http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg",
              },
              {
                "id":"4",
                "title":"工信部回应李克强呼吁2",
                "add_time":"2018-09-07 15:40",
                "click":"2",
                "img_url":"https://goss2.vcg.com/creative/vcg/800/version23/VCG41143249440.jpg",
              },
              {
                "id":"5",
                "title":"关于中非合作，习近平这些提法有深意",
                "add_time":"2018-09-07 15:30",
                "click":"1",
                "img_url":"http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg",
              },
              {
                "id":"6",
                "title":"工信部回应李克强呼吁2",
                "add_time":"2018-09-07 15:40",
                "click":"2",
                "img_url":"https://goss2.vcg.com/creative/vcg/800/version23/VCG41143249440.jpg",
              },
              {
                "id":"6",
                "title":"关于中非合作，习近平这些提法有深意",
                "add_time":"2018-09-07 15:30",
                "click":"1",
                "img_url":"http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg",
              },
              {
                "id":"7",
                "title":"工信部回应李克强呼吁2",
                "add_time":"2018-09-07 15:40",
                "click":"2",
                "img_url":"https://goss2.vcg.com/creative/vcg/800/version23/VCG41143249440.jpg",
              },
              {
                "id":"8",
                "title":"关于中非合作，习近平这些提法有深意",
                "add_time":"2018-09-07 15:30",
                "click":"1",
                "img_url":"http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg",
              },
              {
                "id":"9",
                "title":"工信部回应李克强呼吁2",
                "add_time":"2018-09-07 15:40",
                "click":"2",
                "img_url":"https://goss2.vcg.com/creative/vcg/800/version23/VCG41143249440.jpg",
              },
              {
                "id":"10",
                "title":"关于中非合作，习近平这些提法有深意",
                "add_time":"2018-09-07 15:30",
                "click":"1",
                "img_url":"http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg",
              },
              {
                "id":"11",
                "title":"工信部回应李克强呼吁2",
                "add_time":"2018-09-07 15:40",
                "click":"2",
                "img_url":"https://goss2.vcg.com/creative/vcg/800/version23/VCG41143249440.jpg",
              },
            ],
          }
      },
      created(){
          /*
          当创建该页面时去服务器请求新闻列表的数据
          注意：目前没有对应的服务，所以目前展示的数据都是写死的
           */
        this.$axios.get('getNewsList')
          .then(response =>{
            console.log(response);
            //当获取数据后将当前数据中的数据复制给当前的newsData数据即可
            this.newsData = response.data.newsData;
          })
          .catch(error =>{
            console.log(error);
          })
      }
    }
</script>

<style scoped>

  /*
  自定义样式
  */
  #left_div {
    float: left;
  }

  #right_div {
    float: right;
  }

  .describe-div {
    font-size: 12px;
    color: gray;
  }
</style>
