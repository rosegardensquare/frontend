// 导入axios
import Axios from 'axios'
// 设置公共的URL
Axios.defaults.baseURL = 'https://api.luffycity.com/api/v1/'

export const courseCategoryList = () => {
    return Axios.get('course/category/free/?courseType=free').then(res => res.data);
}


export const courseDetail = () => {
    return Axios.get('course/free/').then(res => res.data);
}

export const getBannerList = () => {
    return Axios.get('pic/getPicPage/').then(res => res.data);
}