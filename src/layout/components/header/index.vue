<template>
  <div class="header-contanier">
    <ul class="layui-nav-logo">
      <li class="layui-nav-item1"></li>
    </ul>
    <div class="img-left">
      <!-- <nav-bar /> -->
      <span class="header-title">金财投资管理系统</span>
    </div>
    <div class="user-right" v-if='false'>
      <img src="@/assets/layout/user-logo.png" alt="" class="user-logo">
      <span class="user-name">王翔想</span>
    </div>
  </div>
</template>

<script>
import navBar from '../navBar/index'
export default {
  components: {
    navBar
  }
}
</script>

<style lang="scss" scoped>
.layui-nav-logo{
	background: #D09551;
  width: 210px;
  height: 58px;
  padding: 8px;
  position: relative;
  box-sizing: border-box;
  float: left;
}
.layui-nav-logo .layui-nav-item1{
	height: 100%;
	width: 100%;
	/* background: url(./会议室管理_files/logo.png) no-repeat center; */
	background-image:url(./logo.png) !important;
	background-repeat: no-repeat !important;
  background-size: contain !important;
  background-position: center;
}
.header-contanier{
  width: 100%;
  height: 58px;
  // line-height: 58px;
  background-color: #fff;
  padding: 0 25px 0 0;
  // display: flex;
  // justify-content: space-between;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.1);
  .img-left{
    float: left;
  }
  .user-right{
    float: right;
    line-height: 58px;
  }
  .img-left,.user-right{
    display: flex;
    align-items: center;
  }
  .header-title{
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(102,102,102,1);
    line-height: 58px;
    padding-left: 23px;
    // margin-left: 45px;
  }
  .user-name{
    font-size: 14px;
    color: #666666;
    padding-left: 6px;
  }
}
</style>
