<template>
  <div>
    <div style="width:1200px;margin:20px auto ; ">
      <el-carousel indicator-position="outside" arrow="always" height="500px">
        <el-carousel-item v-for="item in lunboImgs" :key="item.id">
          <img :src="item.metavalue" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div style="margin-top: 30px; height: 3000px;">
      <HomeModels></HomeModels>
    </div>
  </div>
</template>

<script>
import HomeModels from "@/components/Home/HomeModels";

export default {
  name: "Home",
  components: {
    HomeModels
  },
  data() {
    return {
      lunboImgs: [
        {
          id: 1,
          metavalue:
            "https://backend-frontend.oss-cn-beijing.aliyuncs.com/2038889.jpg"
        },
        {
          id: 2,
          metavalue:
            "https://backend-frontend.oss-cn-beijing.aliyuncs.com/2042170.jpg"
        },
        {
          id: 3,
          metavalue:
            "https://backend-frontend.oss-cn-beijing.aliyuncs.com/2042482.jpg"
        },
        {
          id: 4,
          metavalue:
            "https://backend-frontend.oss-cn-beijing.aliyuncs.com/2032866.jpg"
        }
      ]
    };
  },
  created() {
    // 获取首页轮播
    this.getBannerList();
  },
  methods: {
    getBannerList() {
      this.$https
        .getBannerList()
        .then(res => {
          if (!res.error_no) {
            this.lunboImgs = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="css" scoped>
img {
  width: 100%;
}
</style>
