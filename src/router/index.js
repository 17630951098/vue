import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sort from "../views/Sort.vue";
import Brand from "../views/Brand.vue";
import Cart from "../views/Cart.vue";
import PersonalCenter from "../views/PersonalCenter.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/sort",
        name: "Sort",
        component: Sort,
    },
    {
        path: "/brand",
        name: "Brand",
        component: Brand,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },{
        path: "/detail",
        name: "Detail",
        component: Detail,
    },
    {
        path: "/personalcenter",
        name: "PersonalCenter",
        component: PersonalCenter,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
