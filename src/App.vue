<template>
  <div id="app">
    <div style="margin-top: 30px;">
      <FrontendHeader></FrontendHeader>
    </div>
    <GoTop>111111111111111111111111111111111111111</GoTop>
    <router-view />
    <div style="margin-top: 30px;">
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

<style>
</style>
