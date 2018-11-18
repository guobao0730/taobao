<template>
  <!--使用自定义的导航栏组件-->
    <div>
      <nav-bar title="新闻详情"></nav-bar>

      <!--自定义视图-->
      <div id="newsDetails">
        <!--新闻详情顶部-->
        <div id="newsDetailsTopDiv">
          <!--新闻标题-->
          <div id="newsDetailsTopTitleDiv">
            {{message.title}}
          </div>
          <!--新闻点击测试和时间-->
          <div id="clickAndTimeDiv">
            <span id="clickSpan">点击了{{message.click}}次</span>
            <span id="addTime">添加时间:{{message.add_time}}</span>
          </div>
        </div>
        <!--新闻详情内容-->
        <div id="newsDetailsBottomDiv">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{message.content}}</div>

      </div>
    </div>



</template>

<script>
  const TAG = "NewsDetails";
    export default {
        name: "NewsDetails",
      data(){
        return {
          message:{
            "id":1,
            "title":"习近平会见蒙古国总统巴特图勒嘎",
            "click":3,
            "add_time":"2018-09-07 15:30",
            "content":"新华社符拉迪沃斯托克9月12日电（记者孟娜 蒋国鹏）国家主席习近平12日在符拉迪沃斯托克会见蒙古国总统巴特图勒嘎。\n" +
              "\n" +
              "习近平指出，中方始终高度重视中蒙关系，将按照亲诚惠容理念和与邻为善、以邻为伴方针，同蒙方加强交流合作，不断推动中蒙全面战略伙伴关系更好更快发展。双方要加强对两国关系的政治引领，从战略高度和长远角度把握好两国关系发展正确方向。要相互理解和尊重彼此核心利益，深化彼此互信。中方尊重蒙古国独立、主权、领土完整，尊重蒙古国人民自主选择的发展道路。双方要继续大力推动“一带一路”同“发展之路”对接，发挥好大项目对两国务实合作的带动和引领作用，积极支持两国边境毗邻地区扩大交流合作。中方欢迎蒙方搭乘中国发展快车，分享中国改革开放成果，实现自身高质量发展。中方也支持蒙古国发展畜牧业和加工业，从蒙古国进口更多优质农牧产品。双方要促进人文交流，夯实两国关系的民意和社会基础。双方要加强在国际和地区事务中的沟通协调，协力推进区域合作。\n" +
              "\n" +
              "巴特图勒嘎表示，发展稳定的对华友好关系和互利合作是蒙古国坚定不移的方针。蒙方致力于在相互尊重主权和领土完整、互不干涉内政、平等互利原则基础上深化对华关系，恪守一个中国原则，承认台湾、西藏、新疆是中国领土不可分割的一部分。蒙方愿积极参与共建“一带一路”，加强同中方在贸易、电力、农牧业、基础设施建设等领域合作，推进蒙中俄经济走廊建设，促进本地区国家共同发展。\n" +
              "\n" +
              "丁薛祥、杨洁篪、王毅、何立峰等参加会见。"
          }
        }
      },
      created(){
          //当创建的时候获取跳转页面时传递过来的参数
        console.log(TAG+"当前新闻详情的ID为："+this.$route.query.id);

        /*
        然后根据此ID去后台服务器请求获取对应的新闻详情数据
        因为目前没有对应的服务，所以该请求时获取不到数据的
         */
        let id =this.$route.query.id;
        this.$axios.get('getNewsDetails/'+id)
          .then(response=>{
            console.log(response);
            /*
            * 将请求的数据复制给message对象即可
            * */

          })
          .catch(error=>{
            console.log(error);
          })
      }


    }
</script>

<style scoped>

  #newsDetails {
    padding: 10px;
  }

  #newsDetailsTopDiv {
    height: 100px;
    border-bottom: 1px solid gray;

    position: relative;
  }


  #newsDetailsBottomDiv {
    color: gray;
    font-size: 14px;
    margin-top: 10px;
  }

  #newsDetailsTopTitleDiv {
    color: black;
    font-size: 18px;
    font-weight: bold;

    float: top;
  }

  #clickAndTimeDiv {
    position: absolute;
    bottom: 10px;

  }

  #clickSpan {
  }

  #addTime {
    margin-left: 30px;
  }




</style>
