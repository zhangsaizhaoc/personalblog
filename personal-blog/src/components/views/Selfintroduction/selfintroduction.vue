<template>
  <div id="">
    <el-row>
      <el-col :span="24"><div class="hidden-xl-only hidden-lg-only hidden-md-only hidden-sm-only grid-content bg-purple ">yd</div></el-col>
      <el-col :span="24"><div class="hidden-xl-only hidden-lg-only hidden-md-only hidden-xs-only grid-content bg-purple ">ipd</div></el-col>
      <el-col :span="24"><div class="hidden-sm-only hidden-xs-only grid-content bg-purple ">
        <div class="selfintroduction">
            <div class="selfintroduction_head">
              <h5>简介</h5>
              <p>张帅，字子道，生于1998年农历9月初7，河北沧州人士;</p>
            </div>
            <div class="selfintroduction_con">
                <ul>
                  <li><b></b><span>2011年</span><span>潞中</span></li>
                  <li><b></b><span>2011年</span><span>潞中</span></li>
                  <li><b></b><span>2011年</span><span>潞中</span></li>
                  <li><b></b><span>2011年</span><span>潞中</span></li>
                  <li><b></b><span>2011年</span><span>潞中</span></li>
                  <li><b></b><span>2011年</span><span>潞中</span></li>
                  <li><b></b><span>2011年</span><span>潞中</span></li>
                  <li><b></b><span>2011年</span><span>潞中</span></li>
                  <li><b></b><span>2011年</span><span>潞中</span></li>
                </ul>
                <div class="line"></div>
            </div>
            <div class="selfintroduction_foot">
              <h5>自我评价</h5>
              <p></p>
            </div>
        </div>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
      return {

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
@import './selfintroduction.style.css';
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
