<template>
  <div id="app">
    
      <div class="yd">
        <router-view></router-view>
      </div>
      <div class="pc">
        <router-view></router-view>
      </div>
    


    <!--<el-row>
      <el-col :span="24" class='mobile'>
      <div class="hidden-xl-only hidden-lg-only hidden-md-only hidden-sm-only grid-content bg-purple mobile">
        <router-view></router-view>
      </div></el-col>
      <el-col :span="24"><div class="hidden-xl-only hidden-lg-only hidden-md-only hidden-xs-only grid-content bg-purple ">
        <router-view></router-view>
      </div></el-col>
      <el-col :span="24"><div class="hidden-sm-only hidden-xs-only grid-content bg-purple pcwrap">
        <router-view></router-view>
      </div></el-col>
    </el-row>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import 'element-ui/lib/theme-chalk/display.css';


.pcwrap{
  width:100%;
  height:100%;
}
#app{
  background:url('./static/images/11.jpg')  no-repeat  center 74px;

}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    width:100%;
    height:100%;
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
