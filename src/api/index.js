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
    return axios.get('/categories.php', data)
};
//
let getBrandsDataAPI = (data) => {
    return axios.get('/brands.php', data)
};

//搜索结果页面
let getSearchResultDataAPI=(data)=>{
    return axios.post('/search/result.php')
};

//图形验证码
let getImgAPI=(data)=>{
    return axios.get('imgCheckOut.php')
};
//图形验证码
let getTelAPI=(data)=>{
    return axios.get('telCheckOut.php')
};
//
let getLoginAPI=(data)=>{
    return axios.get('login.php')
};
let getDetailDataAPI = (data) => {
    return axios.get('detail.php',{
        params: {id: data.id}
    })
};
export {
    getHomeBannerDataAPI, getHomeDataAPI, getHomeIconAPI, getHomeTabListAPI, getHomeBrandAPI, getHomeTableAPI, getSortDataAPI, getBrandsDataAPI,
    getSearchResultDataAPI,getImgAPI, getTelAPI, getLoginAPI, getDetailDataAPI
    
}