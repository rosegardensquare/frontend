<template>
  <div id="app">
    <div class="header_class">
      <FrontendHeader></FrontendHeader>
    </div>
    <div style="margin-top:100px;">
      <GoTop>111111111111111111111111111111111111111</GoTop>
      <router-view />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import FrontendHeader from "@/components/Common/FrontendHeader";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    FrontendHeader
  }
};
</script>

<style lang="css" scoped>
.header_class {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 50;
  background-color: rgb(255, 255, 255);
}
</style>
