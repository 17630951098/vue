import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/js/flexible.min";
import "./assets/css/public.css";
//引入vant 组件
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
//api注册原型
import * as api from "./api/index";

Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
