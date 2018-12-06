<template>
  <div id="">
    <div class="yd">
      <div class="road_yd">
        <div class="road_yd_main">
            <h4>经典视频</h4>
            <div class="buddha_yd_main_in">
            
            </div>
          </div>
          <div class="road_yd_main">
            <h4>经典文章</h4>
            <div class="road_yd_main_in">
            
            </div>
          </div>
      </div>
    </div>
    <div class="pc">
      <div class="road_pc">
        <div class="branner">
            <el-carousel height="500px">
                <el-carousel-item v-for="(item,index) in data" :key="index">
                  <img :src="item.img" alt="" width='100%' height='100%'>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="road_pc_main">
            <h4>经典视频</h4>
            <div class="buddha_pc_main_in">
            
            </div>
          </div>
          <div class="road_pc_main">
            <h4>经典文章</h4>
            <div class="road_pc_main_in">
            
            </div>
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
            img:'/static/images/dao1.jpg'
          },
          {
            img:'/static/images/dao2.jpg'
          },{
            img:'/static/images/dao3.jpg'
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
@import './road.style.css';
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
</style>
