<template>
  <div id="app">
    <div>
      <FrontendHeader></FrontendHeader>
    </div>
    <GoTop>111111111111111111111111111111111111111</GoTop>
    <router-view />
    <Footer></Footer>
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
