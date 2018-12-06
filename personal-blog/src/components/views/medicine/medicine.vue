<template>
  <div id="">
    <div class="yd">
      <div class="medicine_yd">
          <div class="medicine_yd_main">
            <h4>经典视频</h4>
            <div class="medicine_yd_main_in">
            
            </div>
          </div>
          <div class="medicine_yd_main">
            <h4>经典文章</h4>
            <div class="medicine_yd_main_in">
            
            </div>
          </div>
      </div>
    </div>
    <div class="pc">
      <div class="medicine_pc">
          <div class="branner">
            <el-carousel height="420px">
                <el-carousel-item v-for='(item,index) in data' :key='index'>
                    <img :src="item.img" alt="" width='100%' height='100%'>
                </el-carousel-item>
            </el-carousel>
          </div>
          <div class="medicine_pc_main">
            <h4>经典视频</h4>
            <div class="medicine_pc_main_in">
            
            </div>
          </div>
          <div class="medicine_pc_main">
            <h4>经典文章</h4>
            <div class="medicine_pc_main_in">
            
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Slide from '../../Component/slide/slide'
export default {
  name: '',
  data(){
      return {
          data:[
            {
              img:'/static/images/yi1.jpg'
            },
            {
              img:'/static/images/yi2.jpg'
            },
            {
              img:'/static/images/yi3.jpg'
            }
          ]
      }
  },
  components:{
    Slide
  },
  mounted() {
      
  },
  methods:{

  }
  
}
</script>

<style scoped>
@import 'element-ui/lib/theme-chalk/display.css';
@import './medicine.style.css';
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
