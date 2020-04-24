//引入mockjs
import mock from "mockjs";
//banner 数据
import bannerData from "../data/index";

//拦截banner
mock.mock("http://kk.com/home/banner.php", function () {
    let res = bannerData;
    return res;
});

export {mock};
