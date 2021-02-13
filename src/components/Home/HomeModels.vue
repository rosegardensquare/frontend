<template>
  <div class="course">
    <div class="container clearfix">
        <ul class="coursebox">
              
          <li  >
            <div class="detail">
              <div class="head">
                <img style="  border-radius:10px;" 
                  src="https://backend-frontend.oss-cn-beijing.aliyuncs.com/2037482.jpg"
                  alt
                />
              </div>        
<div class="tip">
<h2 class="tip-h" > 图片</h2>
<span> - 全球优质图片应有尽有 - </span>
</div>

            </div>
          </li>



       
          <li >
            <div class="detail">
              <div class="head">
                <img style="  border-radius:10px;" 
                  src="https://backend-frontend.oss-cn-beijing.aliyuncs.com/237224.jpg"
                  alt
                />
              </div>        
<div class="tip">
<h2 class="tip-h" > 音乐</h2>
<span> - 高品质音乐 - </span>
</div>

            </div>
          </li>

        
          <li >
            <div class="detail">
              <div class="head">
                <img style="  border-radius:10px;" 
                  src="https://backend-frontend.oss-cn-beijing.aliyuncs.com/189279.jpg"
                  alt
                />
              </div>        
<div class="tip">
<h2 class="tip-h" > 视频 </h2>
<span> - 海量视频 - </span>
</div>

            </div>
          </li>

          <li >
            <div class="detail">
              <div class="head">
                <img style="  border-radius:10px;" 
                  src="https://backend-frontend.oss-cn-beijing.aliyuncs.com/287429.jpg"
                  alt
                />
              </div>        
<div class="tip">
<h2 class="tip-h" > 商城</h2>
<span> - 优质好物 - </span>
</div>

            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>+

<script>
export default {
  name: "HomeModels",
  data() {
    return {
      categoryList: [], // 分类列表
      currentIndex: 0, //分类列表选中
      categoryId: 0, //获取所有的课程列表的id
      courseDetail: [] //课程列表详情数据
    };
  },
  methods: {
    categoryClick(index, categoryId) {
      this.currentIndex = index;
    },
    getCategoryList() {
      this.$https
        .courseCategoryList()
        .then(res => {
          // console.log(res);

          if (!res.error_no) {
            this.categoryList = res.data;
            let category = {
              id: 0,
              name: "全部"
            };
            this.categoryList.unshift(category);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCourseDetail() {
      this.$https
        .courseDetail()
        .then(res => {
          // console.log(res);

          if (!res.error_no) {
            this.courseDetail = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getCategoryList();
    this.getCourseDetail();
  }
};
</script>

<style lang="css" scoped>
.course {
  width: 100%;
  height: 3000px;
  /* background: #f3f3f3; */
}
.coursebox {
  padding: 24px 0;
  font-size: 16px;
  color: #666;
  letter-spacing: 0.41px;
  font-family: PingFangSC-Regular;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}


.coursebox li:hover {
  color: #e30011;
  
}
.coursebox li.active {
  border-radius: 5%;
  border: 1px solid #e30011;
  color: #e30011;
}

 .coursebox li {
     display:inline;
     float:left;
             
}
         
/* ul li {
  float: left;
  margin-right: 24px;
  cursor: pointer;
} */

ul li.active {
  color: #00b4e4;
}
.courseList {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.detail {
  width: 500px;
  height: auto;
  /* margin-right: 16px; */
  margin-bottom: 144px;
  position: relative;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 2px 6px 0 #e8e8e8;
  transition: all 0.2s linear;
  cursor: pointer;
  border-radius:4px;
}
.detail:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  transform: translate3d(0, -3px, 0);

}

.detail:hover >   .tip{
    background: red;
    color: #e8e8e8
  }



.detail:hover > .tip >.tip-h{
    color: #e8e8e8; 
}


.detail:nth-of-type(4n) {
  margin-right: 0;
}
.head {
  width: 100%;

  height: 273px;

}
.detail .head img {
  width: 100%;
  /* height: 144px; */
  position: absolute;
  left: 0;
}




.detail .head b {
  width: 100%;
  height: 144px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.9;
  background: #56cbc4;
}
.detail .head p {
  position: absolute;
  height: 144px;
  left: 0;
  top: 0;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-around;
}
.content {
  width: 200px;

  height: 118px;
  padding-top: 30px;
}
.content p {
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  letter-spacing: 0.6px;
  margin-bottom: 20px;
  font-family: PingFangSC-Regular;
  overflow: hidden;
}
.content-detail {
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: relative;
}
.content-detail .span3 {
  position: absolute;
  right: 0;
}
.content-detail .span3 .s {
  text-decoration: line-through;
}
.content-detail .span4 {
  /*margin-left: 100px;*/
  position: absolute;
  right: 0;
  color: #fc0107;
}
.content-detail .span3 .t {
  color: #000;
  margin-left: 5px;
  text-decoration: none !important;
  color: #fc0107;
}

.tip{
    width:300px;
    height:70px;
    background:white;
    bottom:-65px;
    position:absolute;
    left: 0;
    right: 0;
    margin-right:auto;
    margin-left:auto;
    margin:0 auto;
    text-align: center;
    box-shadow: 1px 1.5px 0 0 #ede5e5;

}

.tip-h{
    vertical-align:middle;
    color: #fc0107; 
    margin-top: 5px
}




</style>
