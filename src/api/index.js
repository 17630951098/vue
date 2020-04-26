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
//首页table切换2
let getHomeTableAPI = (data) => {
    return axios.get('/home/tablechange.php', data)
};

//分类页面数据
let getSortDataAPI = (data) => {
    return axios.get('/home/categories.php', data)
};//分类页面数据
let getBrandsDataAPI = (data) => {
    return axios.get('/home/brands.php', data)
};
export {
    getHomeBannerDataAPI, getHomeDataAPI, getHomeIconAPI, getHomeTabListAPI, getHomeBrandAPI, getHomeTableAPI, getSortDataAPI, getBrandsDataAPI
}