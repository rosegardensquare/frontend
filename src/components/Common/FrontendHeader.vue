<template>
  <!-- element-ui -->
  <el-container>
    <el-header height="80px">
      <div class="header">
        <div class="nav-left">
          <img
            style="height:100%;width:100%"
            src="https://backend-frontend.oss-cn-beijing.aliyuncs.com/微信截图_20210212225105.png"
            alt
          />
        </div>
        <div class="nav-center">
          <ul>
            <li v-for="(list,index) in headerList" :key="index">
              <router-link :to="{name:list.name}">{{list.title}}</router-link>
            </li>
          </ul>
        </div>

        <!-- <el-dropdown> -->

        <div class="nav-right" v-if="isLogin">
          <span class="el-dropdown-link">学习中心</span>
          <span class="user">zs</span>
          <img src alt />
          <ul class="my_account" v-show="isShow">
            <li>
              我的账户
              <i>></i>
            </li>
            <li>
              我的订单
              <i>></i>
            </li>
            <li>
              我的优惠券
              <i>></i>
            </li>
            <li>
              我的消息
              <span class="msg">(40)</span>
              <i>></i>
            </li>
            <li>
              购物车
              <span class="count">(2)</span>
              <i>></i>
            </li>
            <li>
              退出
              <i>></i>
            </li>
          </ul>
        </div>

        <!-- </el-dropdown> -->
        <div class="nav-right" v-else>
          <span>登录</span>
          &nbsp;| &nbsp;
          <span>注册</span>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: "FrontendHeader",
  data() {
    return {
      headerList: [
        { id: "1", name: "Home", title: "首页" },
        { id: "2", name: "Photo", title: "图片" },
        { id: "3", name: "Music", title: "音乐" },
        { id: "4", name: "Video", title: "视频" },
        { id: "5", name: "Shop", title: "商城" }
      ],
      isLogin: false
    };
  },
  methods: {},
  computed: {}
};
</script>

<style lang="css" scoped>
/*点击文字变颜色*/
.blue {
  color: rgb(155, 12, 12);
}
.el-header {
  border-bottom: #c9c9c9;
  box-shadow: 0 1px 3px 0 #999;
}
.header {
  width: 1200px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}
.nav-left {
  float: left;
  margin-top: 15px;
  width: 94px;
  height: 57px;
}
.nav-center {
  float: left;
  margin-left: 100px;
}
.nav-center ul {
  overflow: hidden;
}
.nav-center ul li {
  float: left;
  margin: 0 5px;
  /*width: 100px;*/
  padding: 0 20px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.nav-center ul li a {
  color: #4a4a4a;
  width: 100%;
  height: 60px;
  display: inline-block;
}
.nav-center ul li a:hover {
  color: #e30011;
}
.nav-center ul li a.is-active {
  color: #e30011;
  border-bottom: 4px solid #e30011;
}
.nav-right {
  float: right;
  position: relative;
}
.nav-right span {
  cursor: pointer;
}
.nav-right .user {
  margin-left: 15px;
}
.nav-right img {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
}
.nav-right ul {
  position: absolute;
  width: 221px;
  z-index: 100;
  font-size: 12px;
  top: 80px;
  background: #fff;
  border-top: 2px solid #d0d0d0;
  box-shadow: 0 2px 4px 0 #e8e8e8;
}
.nav-right ul li {
  height: 40px;
  color: #4a4a4a;
  padding-left: 30px;
  padding-right: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s linear;
}
.nav-right ul li span.msg {
  margin-left: -80px;
  color: red;
}
.nav-right ul li span.count {
  margin-left: -100px;
  color: red;
}

.expand-enter-active {
   transition: all 3s ease;
   height: 50px;
   overflow: hidden;
}
.expand-leave-active {
   transition: all 3s ease;
   height: 0px;
   overflow: hidden;
}
.expand-enter,
.expand-leave {
   height: 0;
   opacity: 0;
}
</style>
