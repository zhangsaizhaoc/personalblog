<template>
  <div id="">
      <div class="yd">
        <div class="list">
          <h5>经典视频</h5>
          <main class='main'>
            
          </main>
        </div>
        <div class="confucian_list_con">
            <h5>儒家经典</h5>
            <ul>
              <li>
                <router-link to=''>论语</router-link>
              </li>
              <li>
                <router-link to=''>中庸</router-link>
              </li>
              <li>
                <router-link to=''>大学</router-link>
              </li>
              <li>
                <router-link to=''>易经</router-link>
              </li>
              <li>
                <router-link to=''>诗经</router-link>
              </li>
              <li>
                <router-link to=''>左传</router-link>
              </li>
              <li>
                <router-link to=''>三字经</router-link>
              </li>
              <li>
                <router-link to=''>弟子规</router-link>
              </li>
              <li>
                <router-link to=''>千字文</router-link>
              </li>
            </ul>
          </div>
    
      </div>
      <div class="pc">
        <div class="confucian">
            <div class="branner">
                <el-carousel height="600px">
                    <el-carousel-item v-for="(item,index) in data" :key="index">
                      <img :src="item.img" alt="" width='100%' height='100%'>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="list">
              <h5>经典视频</h5>
              <main class='main'>
                
              </main>
            </div>
            <div class="confucian_list_con">
              <h5>儒家经典</h5>
              <ul>
                <li>
                  <router-link to=''>论语</router-link>
                </li>
                <li>
                  <router-link to=''>中庸</router-link>
                </li>
                <li>
                  <router-link to=''>大学</router-link>
                </li>
                <li>
                  <router-link to=''>易经</router-link>
                </li>
                <li>
                  <router-link to=''>诗经</router-link>
                </li>
                <li>
                  <router-link to=''>左传</router-link>
                </li>
                <li>
                  <router-link to=''>三字经</router-link>
                </li>
                <li>
                  <router-link to=''>弟子规</router-link>
                </li>
                <li>
                  <router-link to=''>千字文</router-link>
                </li>
              </ul>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
      return {
        data:[
          {
            img:'http://www.sxjyxxw.org/upload/vod/2017-05-27/201705271495890760.jpg'
          },{
            img:'http://www.sxjyxxw.org/upload/vod/2017-08-27/201708271503825404.jpg'
          },{
            img:'http://www.sxjyxxw.org/upload/vod/2017-05-27/201705271495879278.jpg'
          }
        ]
      }
  },
  components:{

  },
  mounted() {
      
  },
  methods:{
    
  }
  
}
</script>

<style scoped>
@import 'element-ui/lib/theme-chalk/display.css';
@import './confucian.style.css';
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
  }
</style>
