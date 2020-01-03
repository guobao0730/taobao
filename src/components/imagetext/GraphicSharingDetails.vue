<template>
    <div>
      <!--图文分享详情-->
      <nav-bar title="图片详情"></nav-bar>
      <div>

        <!--顶部模块-->
        <div class="paddingDiv" id="topDiv">
          <!--标题-->
          <div id="titleDiv">
            {{pictureDetails.title}}
          </div>
          <!--发起日期-->
          <div id="timeDiv">
            <span>发起日期：{{pictureDetails.time}}</span>
            <span>&nbsp;{{pictureDetails.click}}次浏览</span>
            <span>&nbsp;&nbsp;分类：{{pictureDetails.type}}</span>
          </div>

        </div>

        <!--图片模块-->
        <div class="paddingDiv">



          <ul id="imgs-ul">
            <!--
            v-for="(item,index) in pictureDetails.imgs" :key="index"
            -->
            <li id="item-li">
              <!--
              该缩略图是使用的vue2-preview 插件
              height="120" width="120" 表示缩略图的宽高
              -->
              <img class="preview-img" id="preview-img" v-for="(item, index) in pictureDetails.slide" :src="item.src" height="120" width="120" @click="$preview.open(index, pictureDetails.slide)">
            </li>
          </ul>


        </div>

        <!--详情模块-->
        <div class="paddingDiv" id="detailsDiv">
          {{pictureDetails.details}}
        </div>



        <!--
        评论
        -->


      </div>



    </div>
</template>

<script>
  const DEFAULT_DATA = {
    title:"德维尔商城定制家具：生活居然可以过得这么精致",
    time:"2018-10-9 14:58:27",
    click:"3",
    type:"家具生活",
    slide:[
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539343918727&di=a6ac7cb9aa3d69b753c2131f4b68472c&imgtype=0&src=http%3A%2F%2Fbk.17house.com%2Fuploads%2F201606%2F1465897557BJDfAqrz.jpg',
        w: 600,
        h: 400
      },
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539343919103&di=e54cedabb32364c8738a2ffd48cf30db&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150516%2F0037037034267808_b.jpg',
        w: 1200,
        h: 900
      },
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539343919101&di=d5fcaf57f2701d34f909b6a21b4d0b74&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F902397dda144ad3465849594daa20cf431ad85ed.jpg',
        w: 1200,
        h: 900
      },
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539343919101&di=beba123c937db38175dc153080e7c5db&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F58%2F07%2F76d58PICVBN_1024.jpg',
        w: 1200,
        h: 900
      },
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539343919098&di=04a24b38f524a474b609638b47e34b6f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F031124b56ad728900000198528e92a3.jpg',
        w: 1200,
        h: 900
      },
      {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539343919095&di=ec21cd05290b711f1999d210958bf52e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F61%2F22%2F62m58PICFNs_1024.jpg',
        w: 1200,
      },

    ],
    details:"生活即是简单，生活充满精细。原木色的家具，更是把生活的简单自然展现的尽致淋漓。",


  }
    export default {
        name: "GraphicSharingDetails",
      data(){
        return {
          /*图文详情数据*/
          pictureDetails:{},
        }
      },
      created(){

          //首先加载默认数据
        this.pictureDetails = DEFAULT_DATA;


          //获取页面跳转时所传递过来的id数据
          let id = this.$route.params.id;
          console.log("id:"+id);
          //id:53
        this.getImgDetails(id);


      },
      methods:{
          /*根据图文信息中ID去服务器获取该ID对应的图片详情数据*/
          getImgDetails(id){
            this.$axios.get("getImgDetails/"+id)
              .then(response=>{
                console.log(response);
                this.pictureDetails = response.data;
              })
              .catch(error=>{
                console.log(error)
              });

          },
        closeImg(){
            console.log("关闭了图片")
        }
      }
    }
</script>

<style scoped>

  .paddingDiv {
    padding: 10px;

  }
  #topDiv {
    border-bottom: 1px solid #D8D9D6;
  }
  #titleDiv {
    font-size: 20px;
    color: #26A2FF;
  }

  #timeDiv {
    font-size: 15px;
    margin-top: 10px;
  }

  #detailsDiv {
    font-size: 16px;
    color: gray;
  }

  #imgs-ul {
    /*去除ul列表左侧的小圆点*/
    list-style: none;
    padding-left: 0px;
  }

  #item-img {
    width: 120px;
    height: 120px;

  }

  #item-li {
    float: left;
    margin-right: 10px;
  }

  #detailsDiv {
    /*设置该DIV不跟随上一个DIV横向排列*/
    float: left;
  }


  #preview-img {

    margin-right: 5px;
  }


</style>
