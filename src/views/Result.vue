<template>
    <div class="Result">
        <!--head-->
        <header class="header">
            <!--返回-->
            <van-icon @click="goBack" class="back" color="#787878" size="0.5rem" name="arrow-left"/>
            <!--搜索框-->
            <div class="search_box">
                <input v-model="key" type="search">
                <img @click="search" src="../assets/images/search.png" alt="">
            </div>
            <!--切换排列样式-->
            <div  @click="changeListStyle">
                <van-icon v-if="count" color="#787878" size="0.5rem" name="qr"/>
                <van-icon v-else color="#787878" size="0.5rem" name="apps-o"/>
            </div>`
            <!--回到首页-->
            <div @click="goHome" class="to_home">
                <van-icon color="#787878" size="0.5rem" name="home-o"/>
            </div>
        </header>
        <van-sticky>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1"/>
            <van-dropdown-item v-model="value2" :options="option2"/>
        </van-dropdown-menu>
        </van-sticky>
        <!--列表-->
        <section class="container" v-if="result">
            <ul :class="count==true?'list':'square'">
                <li @click="toDetail(item.name)" v-for="(item,index) in result" :key="index">
                    <!--左侧图片-->
                    <div class="left">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="right">
                        <p class="name">{{item.name}}</p>
                        <p>
                            <span>{{item.price}}</span>
                            <span v-if="item.price!=item.market_price">{{item.market_price}}</span>
                        </p>
                        <p>参考价：{{item.foreign_price}}</p>
                        <div @click.stop="addCart(item)" class="addCartr">
                        
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        <div class="backTop">
            <p @click="$router.push('/cart')">
                <span>{{cartNum}}</span>
            </p>
            <!--返回顶部-->
            <p></p>
        </div>
    </div>
</template>

<script>
    import Vuex from "vuex";
    import $ from 'jquery'
    export default {
        data(){
            return{
                key:'',
                result:'',
                style:0,
                count:true,
                goods:'',
                cartNum:0,
                value1: 0,
                value2: 'a',
                option1: [
                    {text: '全部商品', value: 0},
                    {text: '新款商品', value: 1},
                    {text: '活动商品', value: 2},
                ],
                option2: [
                    {text: '默认排序', value: 'a'},
                    {text: '好评排序', value: 'b'},
                    {text: '销量排序', value: 'c'},
                    {text: '价格排序', value: 'd'},
                ],
            }
        },
        methods:{
            //加入购物车
            addCart(item){
                if (this.$jsCookie.get('f_username')){
                    this.$toast('加入成功');
                    this.goods = {
                        id: item.id,
                        name: item.name,
                        num: 1,
                        price: item.price,
                        market_price: item.market_price,
                        img: item.img
                    }
                }else {
                    this.$toast('请先登录');
                    this.$router.push({name:'Login',params:{
                            path:'/search/result'
                        }})
                }
                    this.$store.commit('addGood', this.goods);
                //购物车商品数量
                if (this.$jsCookie.get('f_username')){
                    this.cartNum = this.getGoodList.length
                }else {
                    this.cartNum=0
                }
            },
            //详情页
            toDetail(name) {
                this.$router.push({name: 'Detail', params: {id: name}})
            },
            changeListStyle(){
               this.count=!this.count;
            },
            search(){
                if (this.result){
                    //输入框传值
                    this.key = this.$route.query.key;
                    //
                    this.$api.getSearchResultDataAPI({
                        key: this.$route.query.key,
                    }).then(res => {
                        this.result = res.data;
                        console.log(this.result);
                    }).catch(err => {
                        this.$toast('404--网络错误')
                    })
                }
            },
            /*返回前一页*/
            goBack(){
                this.$router.go(-1);
            },
            goHome(){
                this.$router.push('/')
            }
        },
        computed: {
            ...Vuex.mapGetters(['getGoodList']),
        },
        created() {
            //设置title
            this.$route.meta.title = this.$route.query.key;
            //购物车商品数量
            if (this.$jsCookie.get('f_username')){
                this.cartNum = this.getGoodList.length
            }else {
                this.cartNum=0
            }
            //输入框传值
            this.key=this.$route.query.key;
            //
            this.$api.getSearchResultDataAPI({
                key: this.$route.query.key,
            }).then(res=>{
                this.result=res.data;
                // console.log(this.result);
            }).catch(err=>{
                this.$toast('404--网络错误')
            })
        },
        mounted() {
            this.$nextTick(function () {
                $(window).on("scroll", () => {
                    let top = $(window).scrollTop() > 100 ? $(".backTop p:nth-child(2)").stop().fadeIn() : $(".backTop p:nth-child(2)").stop().fadeOut();
                });
                $(".backTop").on("click", () => {
                    $("body,html").animate(
                        {
                            scrollTop: 0,
                        },
                        1000
                    );
                });
                //获取标签栏距离顶部的距离
                this.scrolltop = $(".Result").offset().top;
            })
        }
    }
</script>

<style scoped lang="less">
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: .88rem;
        box-sizing: border-box;
        padding: .15rem .24rem;
        overflow: hidden;
        transition: all .3s ease;
        background-color: #fff;
        .back{
            width: .64rem;
        }
        div.search_box{
            display: flex;
            align-items: center;
            width: 4.9rem;
            padding-left: .08rem;
            border-radius: .32rem;
            box-sizing: border-box;
            background-color: #f2f2f2;
            font-size: 0;
            height: .6rem;
            line-height: .6rem;
            input{
                width: 4.15rem;
                height: 100%;
                box-sizing: border-box;
                background: transparent;
                padding: 0 .12rem;
                outline: none;
                border: none;
                font-size: .26rem;
            }
    
            input::-webkit-search-cancel-button {
                display: none;
            }
            img{
                width: 0.36rem;
            }
        }
        .listStyle{
            display: flex;
            align-items: center;
            width: .64rem;
            margin-left: .08rem;
        }
        .to_home{
            display: flex;
            align-items: center;
            width: .64rem;
            margin-left: .08rem;
        }
    }
    .container{
        ul.list{
            padding-top: 0.1rem;
            background-color: #f0f0f0;
            li:first-child{
                margin-top: 0;
            }
            li{
                display: flex;
                justify-content: space-between;
                height: 2.8rem;
                background-color: #fff;
                margin-top: .1rem;
                padding: .3rem .2rem;
                box-sizing: border-box;
                .left{
                    width: 2.2rem;
                    img{
                        width: 100%;
                    }
                }
                .right{
                    position: relative;
                    width: 4.6rem;
                    p:nth-child(1){
                        color: #333;
                        font-weight: 600;
                        font-size: .26rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        height: .78rem;
                    }
                    p:nth-child(2){
                        margin-top: .2rem;
                        span:nth-child(1){
                            font-size: .3rem;
                            font-weight: 600;
                            color: #d72245;
                        }
                        span:nth-child(2){
                            display: inline-block;
                            margin-left: 0.15rem;
                            color: #999;
                            font-size: .24rem;
                            text-decoration: line-through;
                        }
                    }
                    p:nth-child(3){
                        margin-top: 0.1rem;
                        color: #999;
                        font-size: .24rem;
                    }
                    .addCartr{
                        position: absolute;
                        right: 0.1rem;
                        bottom: 0.1rem;
                        background: url('../assets/images/icon_icon.png') no-repeat -2.15rem -0.92rem;
                        background-size: 3.1rem auto;
                        width: 0.72rem;
                        height: 0.72rem;
                    }
                }
            }
        }
        ul.square{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-top: 0.1rem;
            background-color: #f0f0f0;
            li:first-child,li:nth-child(2){
                margin-top: 0;
            }
            li{
                position: relative;
                height: 5.7rem;
                width: 3.6rem;
                float: left;
                margin-left: .1rem;
                background-color: #fff;
                margin-top: .1rem;
                padding: .3rem .2rem;
                box-sizing: border-box;
                .left{
                    width: 3rem;
                    margin: 0 auto;
                    img{
                        width: 100%;
                    }
                }
                .right{
                    p:nth-child(1){
                        margin-top: 0.2rem;
                        color: #333;
                        font-weight: 600;
                        font-size: .26rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        height: .78rem;
                    }
                    p:nth-child(2){
                        margin-top: .16rem;
                        span:nth-child(1){
                            font-size: .3rem;
                            font-weight: 600;
                            color: #d72245;
                        }
                        span:nth-child(2){
                            display: inline-block;
                            margin-left: 0.12rem;
                            font-size: .24rem;
                            text-decoration: line-through;
                            color: #999999;
                        }
                    }
                    p:nth-child(3){
                        font-size: .24rem;
                        color: #999999;
                    }
    
                    .addCartr {
                        position: absolute;
                        right: 0.2rem;
                        bottom:0.2rem;
                        background: url('../assets/images/icon_icon.png') no-repeat -2.15rem -0.92rem;
                        background-size: 3.1rem auto;
                        width: 0.72rem;
                        height: 0.72rem;
                    }
                }
            }
        }
    }
    .backTop{
        position: fixed;
        right: .3rem;
        bottom: 1.5rem;
        p{
            display: block;
            position: relative;
            width: .96rem;
            height: 0.96rem;
            background: url(http://basedata.azoyacdn.com/uploads/basedata/images/ea678dab5c6afc38909f2b547c869ecc.png) no-repeat 0 -0.9rem;
            background-size: 3.1rem auto;
            span{
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #d72245;
                position: absolute;
                right: 0;
                top: -.1rem;
                font-size: 0.24rem;
                color: #fff;
                width: .4rem;
                height: .4rem;
                line-height: .4rem;
                text-align: center;
                border-radius: .18rem;
                font-style: normal;
            }
        }
    
        p:nth-of-type(2) {
            display: none;
            margin-top: .5rem;
            background: url(http://basedata.azoyacdn.com/uploads/basedata/images/ea678dab5c6afc38909f2b547c869ecc.png) no-repeat -1.08rem -0.92rem;
            background-size: 3.1rem auto;
            width: 0.92rem;
            height: 0.92rem;
        }
    }
</style>