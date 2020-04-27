<template>
    <div id="app">
        <div id="nav">
        </div>
        <router-view />
        <!--底部-->
        <van-tabbar v-show="$route.meta.showtabbar" v-model="active" active-color="#000" inactive-color="#000" fixed>
            <van-tabbar-item to="/">
                <span>主页</span>
                <template #icon="props">
                    <img :src="props.active ? icon.home : icon.home_inactive"/>
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/sort">
                <span>分类</span>
                <template #icon="props">
                    <img :src="props.active ? icon.sort : icon.sort_inactive"/>
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/brand">
                <span>品牌</span>
                <template #icon="props">
                    <img :src="props.active ? icon.brand : icon.brand_inactive"/>
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="cart">
                <span>购物篮</span>
                <template #icon="props">
                    <img :src="props.active ? icon.cart : icon.cart_inactive"/>
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/personalcenter">
                <span>个人中心</span>
                <template #icon="props">
                    <img :src="props.active ? icon.person : icon.person_inactive"/>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                active: 0,
                icon: {
                    home: require('./assets/images/home.svg'),
                    home_inactive:require('./assets/images/home_inactive.svg'),
                    sort: require('./assets/images/sort.svg'),
                    sort_inactive: require('./assets/images/sort_inactive.svg'),
                    brand: require('./assets/images/brand.svg'),
                    brand_inactive: require('./assets/images/brand_inactive.svg'),
                    cart: '',
                    cart_inactive: require('./assets/images/cart_inactive.svg'),
                    person: require('./assets/images/person.svg'),
                    person_inactive: require('./assets/images/person_inactive.svg'),
                },
            }
        },
        created() {
            this.active=this.$route.meta.index
        }
    }
</script>
<style lang="less" scoped>

</style>
