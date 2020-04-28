//引入mockjs
import mock from "mockjs";
//banner 数据
const data = require("../data/index");
// console.log(bannerData)
//拦截banner
mock.mock("http://kk.com/home/banner.php", function () {
    let res = data.bannerData;
    // console.log(res);
    return res;
});
mock.mock("http://kk.com/home.php", function () {
    let res = data.homeData;
    // console.log(res);
    return res;
});
mock.mock("http://kk.com/home/icon.php", function () {
    let res = data.homeSmallIcon;
    // console.log(res);
    return res;
});
mock.mock("http://kk.com/home/table.php", function () {
    let res = data.tabList;
    // console.log(res);
    return res;
});
mock.mock("http://kk.com/home/brand.php", function () {
    let res = data.brand;
    // console.log(res);
    return res;
});
mock.mock("http://kk.com/home/tablechange.php", function () {
    let res = data.homeTable;
    // console.log(res);
    return res;
});
//分类页面数据
mock.mock("http://kk.com/categories.php", function () {
    let res = data.categories;
    // console.log(res);
    return res;
});
//品牌数据
mock.mock("http://kk.com/brands.php", function () {
    let res = data.brandData;
    // console.log(res);
    return res;
});
//login
mock.mock("http://kk.com/login.php", function () {
    let res = {
        code:'0',
        result:'ok'
    };
    // console.log(res);
    return res;
});
//图形验证码
mock.mock("http://kk.com/imgCheckOut.php", function () {
    let res = (Math.random() * (9999-1000)+1000).toFixed(0);
    // console.log(res);
    return res;
});
//图形验证码
mock.mock("http://kk.com/telCheckOut.php", function () {
    let res = (Math.random() * (999999-100000)+100000).toFixed(0);
    // console.log(res);
    return res;
});
//搜索结果页面数据
mock.mock("http://kk.com/search/result.php", function () {
    let i;
    let obj;
    let res = [];
    for (i = 0; i < Math.floor(Math.random() * 100) + 50; i++) {
        obj = {
            img: mock.Random.image("300x300"),
            name: mock.Random.ctitle(20),
            price: '£'+mock.Random.float(20, 300).toFixed(2),
            market_price: '£'+ mock.Random.float(100, 500).toFixed(2),
            foreign_price: '￥' +mock.Random.float(100, 1000).toFixed(2),
        };
        res.push(obj);
    }
    return res;
});

//详情页页面数据=
mock.mock("http://kk.com/detail.php", function () {
    let obj;
        obj = {
            id:(Math.random()*(999999999-100000000)+100000000).toFixed(0),
            img: mock.Random.image("375x300"),
            name: mock.Random.ctitle(10),
            price: '£' + mock.Random.float(20, 200).toFixed(2),
            market_price: '£' + mock.Random.float(100, 500).toFixed(2),
            foreign_price: '￥' + mock.Random.float(100, 1000).toFixed(2),
        };
    return obj;
});

export { mock };
