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

mock.mock("http://kk.com/home/categories.php", function () {
    let res = data.categories;
    // console.log(res);
    return res;
});
mock.mock("http://kk.com/home/brands.php", function () {
    let res = data.brandData;
    // console.log(res);
    return res;
});

export { mock };
