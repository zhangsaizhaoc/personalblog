<template>
  <div id="index">
      <div class="yd">
        <div class="mobile">
          <div class="scroll">
            <div class="branner">
                <ul class='swiper-wrapper'>
                  <li v-for="(item,index) in data" :key="index" class='swiper-slide'>
                    <img :src="item.img" alt="" width='100%' min-height='240' >
                  </li>
                </ul>
            </div>
              <div class="nav">
                <!--<span><router-link to="/index/indexs" router-link-active >首页</router-link></span>-->
                <span><router-link to="/index/confucian" router-link-active >儒</router-link></span>
                <span><router-link to="/index/buddha" router-link-active >释</router-link></span>
                <span><router-link to="/index/road" router-link-active>道</router-link></span>
                <span><router-link to="/index/medicine" router-link-active>医</router-link></span>
                <span><router-link to="/index/martialarts" router-link-active>武</router-link></span>
                <!--<span><router-link to="/index/selfintroduction" router-link-active> 自我介绍</router-link></span>-->
              </div>
              <div class="main">
                <router-view></router-view>
              </div>
          </div>
          <div class="footer">
            <p>
              <router-link to="/index/indexs" router-link-active >
                  <span></span>
                  <span>首页</span>
              </router-link>
            </p>
            <p>
              <router-link to="/index/selfintroduction" router-link-active >
                  <span></span>
                  <span>自我介绍</span>
              </router-link>
            </p>
          </div>
        </div>
      </div>

        <div class="pc wapper">
            <div class="head">
              <div class="header">
                  
              </div>
            </div>
            <div class="air"><audio src="/static/audio/管平湖-流水.mp3" ></audio></div>
            <div class="main">
              <div class="nav">
                <span><router-link to="/index/indexs" router-link-active >首页</router-link></span>
                <span><router-link to="/index/confucian" router-link-active >儒家文化</router-link></span>
                <span><router-link to="/index/buddha" router-link-active >释文化</router-link></span>
                <span><router-link to="/index/road" router-link-active>道家文化</router-link></span>
                <span><router-link to="/index/medicine" router-link-active>医药</router-link></span>
                <span><router-link to="/index/martialarts" router-link-active>武术</router-link></span>
                <span><router-link to="/index/selfintroduction" router-link-active> 自我介绍</router-link></span>
              </div>
              <div class="content">
                  <router-view></router-view>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: '',
  data(){
      return {
        data:[
          {
            img:'/static/images/a.jpg'
          },{
            img:'/static/images/b.jpg'
          },{
            img:'/static/images/c.jpg'
          },{
            img:'/static/images/b.jpg'
          }
        ]
      }
  },
  components:{

  },
  mounted() {
      new Swiper('.branner',{
        autoplay: 5000,
        loop:true
      })
  },
  methods:{

  }
  
}
</script>

<style scoped>
@import 'element-ui/lib/theme-chalk/display.css';
@import '../static/css/style.index.css';
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
  .el-carousel{
    width:100%;
    height:200px;
  }
  .el-carousel__item{
    width:100%;
    height:auto;
  }
  .el-carousel__item h3 {
    width:100%;
    height:200px;
    color: #475669;
    font-size: 14px;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item  img{
    width:100%;
    height:200px;
  }
</style>
