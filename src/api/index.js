import axios from 'axios';
import './mockData.js'
axios.defaults.baseURL='http://kk.com';

//首页banner 数据
let getHomeBannerDataAPI=(data)=>{
    return axios.get('/home/banner.php',data)
};
//首页 数据
let getHomeDataAPI = (data) => {
    return axios.get('/home.php', data)
};
//首页 10个图标数据
let getHomeIconAPI = (data) => {
    return axios.get('/home/icon.php', data)
};
//首页tablist
let getHomeTabListAPI = (data) => {
    return axios.get('/home/table.php', data)
};
//首页brand
let getHomeBrandAPI = (data) => {
    return axios.get('/home/brand.php', data)
};
export {
    getHomeBannerDataAPI, getHomeDataAPI, getHomeIconAPI, getHomeTabListAPI, getHomeBrandAPI
}