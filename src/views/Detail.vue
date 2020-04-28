<template>
    <div class="detail">
        <!--导航-->
        <nav class="header">
            <!--返回-->
            <div @click="$router.go(-1)" class="back"></div>
            <ul>
                <li><b>商品</b></li>
                <li><b>评价</b></li>
                <li><b>详情</b></li>
            </ul>
            <!--分享-->
            <van-cell class="share" @click="showShare = true"/>
            <van-share-sheet class="pupps" v-model="showShare" :options="options" @select="onSelect"/>
            <!--home-->
            <router-link class="goHome" to="/"></router-link>
        </nav>
        <div class="container">
            <!--图片-->
            <div class="goodimg">
                <img :src="goodInfo.img" alt=""/>
            </div>
            <!--价格 名字-->
            <section class="price">
                <div class="goodprice">
                    <div class="finalprice">
                        <p>{{ goodInfo.price }}</p>
                        <p>参考价：{{ goodInfo.foreign_price }}</p>
                    </div>
                    <p class="sdk">{{ goodInfo.market_price }}</p>
                </div>
                <div class="product_name">
                    {{ name }}
                </div>
            </section>
            <!--活动-->
            <div class="section-wrap">
                <div class="left">
                    活动
                </div>
                <ul class="right">
                    <li v-for="(item,index) in activity" :key="index">
                        <a href="#">{{item}}</a>
                        <van-icon name="arrow"/>
                    </li>
                </ul>
            </div>
            <!--分割线-->
            <van-divider
                    :style="{ width:'100%',height:'0.2rem',backgroundColor:'#f0f0f0'}"
            >
            </van-divider>
            <!--数量-->
            <div class="num">
                <div class="con">
                    <p>数量</p>
                    <van-stepper integer v-model="num" min="1" max="10"/>
                    <p>商品限购10件</p>
                </div>
            </div>
            <!--分割线-->
            <van-divider
                    :style="{ width:'100%',height:'0.2rem',backgroundColor:'#f0f0f0'}"
            >
            </van-divider>
            <!--发货-->
            <div class="address">
                <div class="top">
                    <div class="left">
                        <p>发货</p>
                    </div>
                    <div class="right">
                        香港直邮，发货后预计3-7天到手，暂不支持发往港澳台地区。
                    </div>
                </div>
                <div class="bot">
                    <p>税费</p><p>如被税，可联系客服领取£20无门槛限时税费补贴券</p>
                </div>
            </div>
        </div>
        <!--加入购物车-->
        <footer class="bottom">
            <ul>
                <li>
                    <i></i>
                    <div class="cart">{{cartNum}}</div>
                    <p>购物车</p>
                </li>
                <li>
                    <i></i>
                    <p>收藏</p>
                </li>
                <li>
                    <button @click="addToCart">加入购车</button>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showShare: false,
                options: [
                    {name: "微信", icon: "wechat"},
                    {name: "微博", icon: "weibo"},
                    {name: "复制链接", icon: "link"},
                    {name: "分享海报", icon: "poster"},
                    {name: "二维码", icon: "qrcode"},
                ],
                goodInfo: "",
                name: "",
                num:'',
                activity: [
                    "五一小长假，出游防晒专场6折起",
                    "Guerlain英国仓用码【PLAY20】8折",
                    "Murad 75折",
                    "Shea Moisture 75折",
                    "满赠专区",
                ],
                cartNum:0,
                goods:{},
            };
        },
        methods: {
            //加入购物车
            addToCart(){
                this.goods={
                    id:this.goodInfo.id,
                    name:this.name,
                    num:this.num,
                    price:this.goodInfo.price,
                    img:this.goodInfo.img
                };
                console.log(this.goods)
            },
            onSelect(option) {
                // Toast(option.name);
                this.showShare = false;
            },
        },
        created() {
            //设置title
            this.$route.meta.title = this.$route.params.id;
            this.name = this.$route.params.id;
            //获取数据
            this.$api
                .getDetailDataAPI({
                    params: {
                        id: this.$route.params.id,
                    },
                })
                .then((res) => {
                    this.goodInfo = res.data;
                    console.log(res);
                })
                .catch((err) => {
                    this.$toast("网络错误");
                });
        },
    };
</script>

<style scoped lang="less">
    .detail {
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            width: 100%;
            height: 0.88rem;
            border-bottom: 1px solid #ddd;
            background: #fff;
            font-size: 0;
            white-space: nowrap;
            
            .back {
                position: absolute;
                left: 0.4rem;
                top: 0.3rem;
                content: "";
                width: 0.22rem;
                height: 0.22rem;
                border: 1px solid #333;
                border-right: none;
                border-bottom: none;
                transform: rotate(-45deg);
            }
            
            ul {
                box-sizing: border-box;
                display: table;
                table-layout: fixed;
                width: 100%;
                padding: 0 1.98rem;
                
                li {
                    display: table-cell;
                    height: 0.88rem;
                    line-height: 0.88rem;
                    font-size: 0.32rem;
                    color: #999;
                    text-align: center;
                    vertical-align: middle;
                    
                    b {
                        display: inline-block;
                        line-height: 0.84rem;
                        border-bottom: 1px solid #fff;
                        font-weight: 400;
                        vertical-align: top;
                    }
                }
            }
            
            .share {
                position: absolute;
                top: 0.12rem;
                right: 1.04rem;
                background: url("https://cn.feelunique.com/web/detail/wap/images/css_sprites_2ab06c029e.png") no-repeat -1.12rem -0.1rem;
                background-size: 3.63rem auto;
                width: 0.64rem;
                height: 0.64rem;
                outline: none;
                border: 0;
            }
            
            .goHome {
                position: absolute;
                top: 0.26rem;
                right: 0.28rem;
                background: url("https://basedata.azoyacdn.com/uploads/basedata/images/e9caa7c9e36511e56ee21756626eadce.png")
                    no-repeat -2.26rem -2.24rem;
                background-size: 3.63rem auto;
                width: 0.39rem;
                height: 0.37rem;
            }
        }
    
        .container::-webkit-scrollbar{
            display: none;
        }
        .container {
            width: 100%;
            height: 100vh;
            padding-top: 0.88rem;
            padding-bottom: 0.97rem;
            overflow-y: auto;
            touch-action: pan-y;
            
            .goodimg {
                margin: 0 0.28rem;
                border-bottom: 1px solid #ddd;
                
                img {
                    width: 100%;
                    display: block;
                    height: 5.94rem;
                    margin: 0 auto;
                }
            }
            
            .price {
                padding-bottom: 0.1rem;
                margin: 0 0.28rem;
                border-bottom: 1px solid #ddd;
                font-size: 0.24rem;
                background-color: #ffffff;
                
                .goodprice {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 0.3rem;
                    
                    .finalprice {
                        P:nth-of-type(1) {
                            color: #d72245;
                            font-weight: 700;
                            font-size: 0.4rem;
                            vertical-align: middle;
                        }
                        
                        p:nth-of-type(2) {
                            display: block;
                            margin-top: 0.1rem;
                            color: #999;
                            font-size: 0.24rem;
                            cursor: none !important;
                        }
                    }
                    
                    .sdk {
                        text-decoration-line: line-through;
                        line-height: 0.36rem;
                        color: #999;
                    }
                }
                
                .product_name {
                    line-height: 1.4375;
                    margin-top: 0.28rem;
                    font-size: 0.32rem;
                    color: #333;
                }
            }
            
            .section-wrap {
                padding-top: 0.2rem;
                display: grid;
                grid-template-columns:15% 85%;
                margin: 0 0.28rem;
                
                .left {
                    font-size: 0.24rem;
                    color: #999;
                }
                
                .right {
                    line-height: 0.34rem;
                    font-size: 0.24rem;
                    
                    li {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        a {
                            line-height: 0.38rem;
                            font-size: 0.26rem;
                            color: #d72245;
                        }
                    }
                }
            }
            .num{
                background: #fff;
                font-size: .24rem;
                .con{
                    display: flex;
                    align-items: center;
                    margin: 0 .28rem;
                    p:nth-of-type(1){
                        color: #999;
                        font-size: .24rem;
                        margin-right: 0.2rem;
                    }
                    
                    p:nth-of-type(2){
                        margin-left: .2rem;
                        color: #333;
                        vertical-align: top;
                    }
                }
            }
            .address{
                margin: 0 .28rem;
                .top{
                    display: flex;
                    .left{
                        width: 20%;
                        padding-right: 0.2rem;
                        p:nth-of-type(1){
                            padding-bottom: 0.2rem;
                            border-bottom: 1px solid #ddd;
                            color: #999;
                        }
                    }
                    .right{
                        width: 80%;
                        line-height: 0.6rem;
                        border-bottom: 1px solid #ddd;
                        color: #999;
                    }
                }
                .bot{
                    display: flex;
                    border-bottom: 1px solid #ddd;
                    color: #999;
                    font-size: 0.22rem;
                    p:nth-of-type(1){
                        line-height: 0.6rem;
                        width: 1.5rem;
                    }
                    p:nth-of-type(2){
                        line-height: 0.6rem;
                    }
                }
            }
        }
        .bottom{
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 50;
            width: 100%;
            height: 1rem;
            border-top: 1px solid #ddd;
            background: #fff;
            font-size: 0;
            white-space: nowrap;
            ul{
                display: flex;
            }
            li:nth-of-type(1), li:nth-of-type(2){
                position: relative;
                width: 1.8rem;
                font-size: .2rem;
                color: #333;
                text-align: center;
                i{
                    display: block;
                    width: .34rem;
                    height: .36rem;
                    margin: .17rem auto .12rem;
                    background: url(https://basedata.azoyacdn.com/uploads/basedata/images/e9caa7c9e36511e56ee21756626eadce.png) no-repeat -1.72rem -1.68rem;
                    background-size: 3.63rem auto;
                }
                div.cart{
                    position: absolute;
                    left: 50%;
                    top: .09rem;
                    line-height: .27rem;
                    padding: 0 .08rem;
                    border-radius: .13rem;
                    font-size: .2rem;
                    color: #fff;
                    background-color: #d72245;
                }
                p{
                    line-height: .27rem;
                    padding: 0 .08rem;
                    border-radius: .13rem;
                    font-size: .2rem;
                    color: #000;
                }
            }
            li:nth-of-type(2){
                i{
                    margin: .18rem auto .13rem;
                    background: url(https://basedata.azoyacdn.com/uploads/basedata/images/e9caa7c9e36511e56ee21756626eadce.png) no-repeat -0.6rem -0.6rem;
                    background-size: 3.63rem auto;
                    width: 0.36rem;
                    height: 0.34rem;
                }
            }
            li:nth-of-type(3){
                width: 3.9rem;
                height: 1rem;
                button{
                    background-color: #d72245;
                    width: 100%;
                    height: .98rem;
                    border: none;
                    font-size: .32rem;
                    color: #fff;
                    text-align: center;
                }
            }
        }
    }
</style>
