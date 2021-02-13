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
            "http://picture1.yidianchina.com/assets/upload/image/d426850409a28496d9fd486166a7445d.jpg"
        },
        {
          id: 2,
          metavalue:
            "http://picture1.yidianchina.com/assets/upload/image/92e2ee2bcbc869ad7c986a5d896fa1aa.jpg"
        },
        {
          id: 3,
          metavalue:
            "http://picture1.yidianchina.com/assets/upload/product/9cda594561df839876a2e61667a992db.jpg"
        },
        {
          id: 4,
          metavalue:
            "http://picture1.yidianchina.com/assets/upload/image/c1974be488d8a8976f2f7e1c3c66140b.jpg"
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
