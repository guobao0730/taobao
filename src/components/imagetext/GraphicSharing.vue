<template>
    <div id="graphicSharingRootDiv">
      <nav-bar title="图文分享"></nav-bar>


      <div class="photo-header">
        <ul>
          <li v-for="item in menuBar" :key="item.id">
            <a href="javascript:;" @click="loadImg(item.id)">{{item.title}}</a>
          </li>
        </ul>
      </div>




      <!--该组件是MUI中的卡片视图·-->
      <div class="mui-card" v-for="(item,index) in menuBarItem" :key="index">
        <!--
        http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg
        :style="'height:40vw;background-image:url('+item.img_url+')'"
        -->
        <router-link :to="{name:'graphicSharingDetails',params:{id:item.id}}">
          <div class="mui-card-header mui-card-media" :style="'height:40vw;background-image:url('+item.img_url+')'"></div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <!--Posted on January 18, 2016-->
              <p>{{item.time}}</p>
              <!--这里显示文章摘要，让读者对文章内容有个粗略的概念...-->
              <p style="color: #333;">{{item.title}}</p>
            </div>
          </div>
        </router-link>

      </div>



     <!-- 该组件是mint-ui中的
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>

      &lt;!&ndash; tab-container
      该组件是mint-ui中的
      &ndash;&gt;
      <mt-tab-container v-model="selected" >
        <mt-tab-container-item id="1"  class="mint-tab-item ">


          &lt;!&ndash;该组件是MUI中的卡片视图·&ndash;&gt;
          <div class="mui-card">
            <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg)"></div>
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <p>Posted on January 18, 2016</p>
                <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
              </div>
            </div>
          </div>


        </mt-tab-container-item>

        <mt-tab-container-item id="2"  class="mint-tab-item ">
          <mt-cell v-for="n in content" :key="n" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3" class="mint-tab-item ">
          <mt-cell v-for="n in content" :key="n" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>-->







    </div>
</template>

<script>
  import { Indicator } from 'mint-ui';
  import { Toast } from 'mint-ui';
  const STAR_PORTRAIT = [
    {
      id:52,
      time:'2018-10-9 14:58:27',
      title:"柳岩出席设计师好友兰玉的高级诚意发布SHOW",
      img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539079981714&di=1a9084e04565d6d38d1c682132c5466c&imgtype=0&src=http%3A%2F%2Fwww.hinews.cn%2Fpic%2F0%2F12%2F39%2F12%2F12391211_993284.jpg",
      des:"北京四季酒店,柳岩出席设计师好友兰玉的高级成衣发布Show,她身穿兰玉设计的纯白卡肩礼服惊艳登场,优雅晚装发髻搭配翡翠镶钻珠宝,举手投足尽显大气温婉,而卡肩低胸的礼服设计更是衬托出柳岩傲人的事业线资本,性感指数爆灯,入场即引来现场阵阵骚动,柳岩轻松看秀全程甜笑连连,心情靓绝。",
    },
    {
      id:53,
      time:'2018-10-9 14:58:28',
      title:"揭刘亦菲与亿万富翁干爹真正关系（12月27日）",
      img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539077289759&di=b7179b3d1cee1061e95552d754be37fd&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2Fk%3DQceAjJ2gfdDQiPQsL8UtfAfi0RGpvrDFcMgoVRFOWy01537525401631.jpg",
      des:"她家境富有，在北京住在号称有4个足球场那么大的宅子里。18岁的成年礼在钓鱼台国宾馆举行，耗资180万元。但拍《神雕侠侣》的时候，她能跳进砸了个洞的有大粪的冰窟窿里待足一个小时不叫苦。",
    },
    {
      id:54,
      time:'2018-10-9 14:58:29',
      title:"终于知道为什么鹿晗喜欢上关晓彤而没有和迪丽热巴在一起了",
      img_url:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=769056920,1801422746&fm=173&s=5586C9BEC08232E20906D2A503009009&w=600&h=400&img.JPEG",
      des:"如果单纯说婚姻是要讲究个门当户对，很多人会不服气，而举出一系列王子爱上乞丐的故事，但是那些反驳的事例只是童话而已。当然，并不是说门不当户不对的人，不会在一起，而是在一起会比门当户对的情侣，会累很多，这一点大家没有异议吧。",
    },
  ];

  const FURNITURE_LIFE = [
    {
      id:52,
      time:'2018-10-9 14:58:27',
      title:"原味生活",
      img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539080940564&di=0cbdf2ad271926fd4a529bd6e2b6653e&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi3%2F279628378%2FTB2tciAlJrJ8KJjSspaXXXuKpXa_%2521%2521279628378-0-daren.jpg",
      des:"生活即是简单，生活充满精细。原木色的家具，更是把生活的简单自然展现的尽致淋漓。",
    },
    {
      id:53,
      time:'2018-10-9 14:58:28',
      title:"德维尔商城定制家具：生活居然可以过得这么精致",
      img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539080940563&di=221b2c248347011e040bbd2f54aff788&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F59%2F81%2F50v58PICTp3_1024.jpg",
      des:"餐厅就设在了客厅沙发的后面，中间间隔这一个简约的餐边酒柜，让休闲与美食近在咫尺。",
    },
    {
      id:54,
      time:'2018-10-9 14:58:29',
      title:"清新淡雅家具生活你喜欢吗？",
      img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539080940563&di=5dea0b2c82bda753b82caf939af3a74b&imgtype=0&src=http%3A%2F%2Fimg3.guilinlife.com%2Fshop%2FImages%2Fimage%2F201505%2F20150522122809_63392.jpg",
      des:"房艺装饰认为清新风格的家装，怡然自得的家居设计感觉为生活怎添活力。现代生活环境污染严重，拥有清新自然地居住环境非常重要。清新淡雅的居住氛围空气中仿佛飘散着一股花香。清新风格家装让人感受到清爽而新鲜。干净利落有种简单 单纯 甜美 阳光的美好感觉。\n" +
        "\n" +
        "主色调：白色淡雅的主色调，透亮的窗户轻薄的纱窗，为客厅增加了一丝小浪漫的气息茶几上简单雅致的摆设为客厅增加几分舒适感。简单平静中流淌着自然之风。",
    },

  ];
    export default {
        name: "GraphicSharing",
      components:{
      },
      data(){
        return {
          /*
          * selected:"1" 表示默认选择第一项
          * */
          selected:"1",
          content:[1,2,3],
          img:'http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg',
          menuBar:[
            {
              title:"家具生活",
              id:14
            },
            {
              title:"摄影设计",
              id:15
            },
            {
              title:"明星美女",
              id:16
            },
            {
              title:"空间设计",
              id:17
            },
            {
              title:"户型装饰",
              id:18
            },
            {
              title:"广告摄影",
              id:19
            },
            {
              title:"摄影学习",
              id:20
            },
            {
              title:"摄影器材",
              id:21
            },
            {
              title:"明星写真",
              id:22
            },
            {
              title:"青春甜美",
              id:23
            },
            {
              title:"古典美女",
              id:24
            },
          ],
          menuBarItem:[],

        }
      },
      created(){


        this.getTextSharingMenuBar();

        this.addAllMenuBar();


      },
      methods:{
        loadImg(id){
          console.log("当前点击的选项列表ID为："+id)


          switch (id) {
            case 13:
              //this.addAllMenuBarData();
              break;
            case 14:
              Indicator.open('加载中...');
              this.menuBarItem = FURNITURE_LIFE;
              break;
            case 15:
              Toast('无数据！');
              break;
            case 16:
              Indicator.open('加载中...');
              this.menuBarItem = STAR_PORTRAIT;
              break;
            case 17:
              Toast('无数据！');
              break;
            case 18:
              Toast('无数据！');
              break;
            case 19:
              Toast('无数据！');
              break;
            case 20:
              Toast('无数据！');
              break;
            case 21:
              Toast('无数据！');
              break;
            case 22:
              Toast('无数据！');
              break;
            case 23:
              Toast('无数据！');
              break;
            case 24:
              Toast('无数据！');
              break;
          };

          /*
        * 实际开发是需要通过当前的id去服务器获取对应的数据，然后再次展示数据
        * */
          this.$axios.get("getMenuBarItem/"+id)
            .then(response=>{
              console.log(response);
              this.menuBarItem = response.data;
            })
            .catch(error=>{
              console.log(error);
            });


          //模拟网络请求延时
          setTimeout(() => Indicator.close(),500);

        },
        getTextSharingMenuBar(){
          /*
          * 图文分类中有两个请求
          *   1、获取顶部滑动导航栏的服务，其中包含导航栏中的条目名称和类型ID
          *   2、在点击导航栏中的条目时根据类型ID获取对应的数据
          *
          *首先在进入该页面时需要获取第一个导航栏条目的数据
          * */
          //获取导航栏数据
          this.$axios.get("getTextSharingMenuBar")
            .then(response=>{
              console.log(response);
              //获取数据以后将当前
            })
            .catch(error=>{
              console.log(error);
            })
        },
        addAllMenuBar(){
          /*在数组的第一位添加对象数据*/
          this.menuBar.unshift({
            title:"全部",
            id:13
          });

          this.addAllMenuBarData();

        },

        addAllMenuBarData(){

          for (let i = 0; i < FURNITURE_LIFE.length; i++) {
            this.menuBarItem.push(FURNITURE_LIFE[i]);
          }

          for (let i = 0; i < STAR_PORTRAIT.length; i++) {
            this.menuBarItem.push(STAR_PORTRAIT[i]);
          }
        }
      },

      /*
      * beforeDestroy 是Vue生命周期函数,
      * 在实例销毁之前调用
      * */
      beforeDestroy(){
        //在实力销毁之前销毁进度条对话框
        Indicator.close();
      }
    }
</script>

<style scoped>

  .photo-header li {
    /*去除li标签前面的小圆点*/
    list-style: none;
    /*行内块标签*/
    display: inline-block;
    margin-left: 10px;
    height: 30px;
  }

  .photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    /*表示如果溢出框，则应该提供滚动机制。*/
    overflow-x: auto;
    padding-left: 0px;
    margin: 5px;
  }

  #graphicSharingRootDiv {
    margin-bottom: 80px;
  }



</style>
