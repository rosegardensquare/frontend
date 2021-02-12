// 导入axios
import Axios from 'axios'
// 设置公共的URL
// Axios.defaults.baseURL = 'http://localhost:8085/'


export const courseCategoryList = () => {
    return Axios.get('course/category/free/?courseType=free').then(res => res.data);
}


export const courseDetail = () => {
    return Axios.get('course/free/').then(res => res.data);
}

export const getBannerList = () => {
    return Axios.get('api/pic/getBanners?type=1').then(res => res.data);
}