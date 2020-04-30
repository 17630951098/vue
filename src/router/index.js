import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sort from "../views/Sort.vue";
import Brand from "../views/Brand.vue";
import Cart from "../views/Cart.vue";
import Search from "../views/Search.vue";
import Result from "../views/Result.vue";
import PersonalCenter from "../views/PersonalCenter.vue";
import Detail from "../views/Detail.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Setting from "../views/Setting.vue";
import Order from "../views/Order.vue";
import Address from "../views/Address.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Feelunique | 美无止境",
            showtabbar:true,
            index:0
        },
    },
    {
        path: "/sort",
        name: "Sort",
        component: Sort,
        meta: {
            title: "全部分类feelunique",
            showtabbar: true,
            index: 1
        },
    },
    {
        path: "/brand",
        name: "Brand",
        component: Brand,
        meta: {
            title: "全部品牌feelunique",
            showtabbar: true,
            index: 2
        },
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "帐户登录",
        },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "手机注册",
        },
    },
    {
        path: "/search/result",
        name: "Result",
        component: Result,
        meta: {
            title: "搜索商品",
        },
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: {
            title:'购物车',
            auth:true,
            index: 3
        }
    },
    {
        path: "/order",
        name: "Order",
        component: Order,
        meta: {
            title:'确认订单',
            auth:true,
        }
    },{
        path: "/address",
        name: "Address",
        component: Address,
        meta: {
            title:'添加收货地址',
            auth:true,
        }
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: Detail,
        meta: {
            title: ''
        }
    },
    {
        path: "/personalcenter",
        name: "PersonalCenter",
        component: PersonalCenter,
        meta: {
            title: '个人中心',
            showtabbar: true,
            auth: true,
            index: 4
        }
    },
    {
        path: "/personalcenter/setting",
        name: "Setting",
        component: Setting,
        meta: {
            title: '账户设置',
        }
    },
];

const router = new VueRouter({
    routes,
    //跳转顶部归零
    /*scrollBehavior: () => {
        return {
            x: 0,
            y: 0,
        };
    },*/
});
import jsCookie from 'js-cookie'
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    window.scrollTo(0,0);
    if (to.meta.auth){
        if (!jsCookie.get('f_username')){
            next('/login?then='+to.path)
        }else {
            next();
        }
    }else {
        next();
    }
});
export default router;
