<template>
    <div class="PersonalCenter">
        <div class="head" @click="$router.push('/personalcenter/setting')">
            <div class="section">
                <van-icon class="set" size="0.4rem" color="#fff" name="setting-o"/>
                <div class="user">
                    <div class="img"></div>
                    <p>{{ userName }}</p>
                </div>
            </div>
        </div>
        <div class="main">
            <!--我的订单-->
            <div class="order">
                <span>我的订单</span> <span><van-icon size="0.4rem" name="arrow"/></span>
            </div>
            <ul class="pay">
                <li>
                    <p></p>
                    <p>待付款</p>
                </li>
                <li>
                    <p></p>
                    <p>已付款</p>
                </li>
                <li>
                    <p></p>
                    <p>已发货</p>
                </li>
                <li>
                    <p></p>
                    <p>已完成</p>
                </li>
                <li>
                    <p></p>
                    <p>已取消</p>
                </li>
            </ul>
            <van-divider style="background-color: #f0f0f0;height: 0.2rem"/>
            <div class="order">
                <span>我的服务</span> <span></span>
            </div>
            <div class="serve">
                <ul>
                    <li><span></span><span>优惠券</span></li>
                    <li><span></span><span>收藏夹</span></li>
                    <li><span></span><span>评价晒单</span></li>
                    <li><span></span><span>地址</span></li>
                    <li><span></span><span>安全中心</span></li>
                    <li><span></span><span>分享奖励</span></li>
                </ul>
            </div>
            <van-divider style="background-color: #f0f0f0;height: 0.2rem"/>
            <!--帮助中心-->
            <div class="order">
                <span>帮助中心</span> <span><van-icon size="0.4rem" name="arrow"/></span>
            </div>
            <!--关于我们-->
            <div class="order">
                <span>关于我们</span> <span><van-icon size="0.4rem" name="arrow"/></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userName: "",
            };
        },
        created() {
            // console.log(this.$jsCookie.get('f_username'))
            this.userName = this.$jsCookie.get("f_username");
        },
    };
</script>

<style scoped lang="less">
    .main {
        padding-bottom: 1rem;
        overflow: hidden;
        position: relative;
        
        .order {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            padding-left: 0.4rem;
            padding-right: 0.4rem;
            width: 100%;
            box-sizing: border-box;
            font-size: 0.28rem;
            color: #333;
            line-height: 1rem;
            border-bottom: 1px solid #e0e0e0;
            
            span {
                display: flex;
            }
        }
        .serve{
            ul{
                padding: .4rem;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                li {
                    padding: 0.2rem 0;
                    width: 25%;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
        
                    span:nth-of-type(1) {
                        background-image: url(https://basedata.azoyacdn.com/uploads/basedata/images/6bde47753de0ca74b4905bcfaa779090.png);
                        background-size: 14.21rem 9.94rem;
                        background-position: -2.67rem -8.78rem;
                        width: .5rem;
                        height: .5rem;
                    }
                    span:nth-of-type(2){
                        display: block;
                        padding-top: .2rem;
                        font-size: .24rem;
                    }
                }
                li:nth-of-type(2){
                    span:nth-of-type(1){
                        background-position: -3.77rem -8.78rem;
                    }
                }li:nth-of-type(3){
                    span:nth-of-type(1){
                        background-position: -8.58rem -8.78rem;
                    }
                }li:nth-of-type(4){
                    span:nth-of-type(1){
                        background-position: -4.32rem -8.78rem;
                    }
                }li:nth-of-type(5){
                    span:nth-of-type(1){
                        background-position: -6.52rem -8.78rem;
                    }
                }li:nth-of-type(6){
                    span:nth-of-type(1){
                        background-position: -9.13rem -8.78rem;
                    }
                }
            }
        }
        .pay {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.4rem 0.4rem;
            
            li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                
                p:nth-of-type(1) {
                    background-image: url(https://basedata.azoyacdn.com/uploads/basedata/images/6bde47753de0ca74b4905bcfaa779090.png);
                    background-size: 14.21rem 9.94rem;
                    background-position: -5.42rem -8.78rem;
                    width: 0.5rem;
                    height: 0.5rem;
                }
                
                P:nth-of-type(2) {
                    font-size: 0.24rem;
                    padding-top: 0.24rem;
                }
            }
            
            li:nth-of-type(1) {
                p:nth-of-type(1) {
                    background-image: url(https://basedata.azoyacdn.com/uploads/basedata/images/6bde47753de0ca74b4905bcfaa779090.png);
                    background-size: 14.21rem 9.94rem;
                    background-position: -4.87rem -8.78rem;
                    width: 0.5rem;
                    height: 0.5rem;
                }
            }
            
            li:nth-of-type(2) {
                p:nth-of-type(1) {
                    background-position: -5.42rem -8.78rem;
                }
            }
            
            li:nth-of-type(3) {
                p:nth-of-type(1) {
                    background-position: -7.07rem -8.78rem;
                }
            }
            
            li:nth-of-type(4) {
                p:nth-of-type(1) {
                    background-position: -5.97rem -8.78rem;
                    background-size: 14.21rem 9.94rem;
                }
            }
            
            li:nth-of-type(5) {
                p:nth-of-type(1) {
                    background-position: -3.22rem -8.78rem;
                    background-size: 14.21rem 9.94rem;
                }
            }
        }
    }
    
    .head {
        position: relative;
        text-align: left;
        font-size: 12px;
        font-weight: 400;
        background: url("../assets/images/mybg.jpg");
        background-size: 100%;
        width: 100%;
        min-height: 3rem;
        
        .section {
            position: relative;
            font-weight: 400;
            font-style: normal;
            
            .set {
                position: absolute;
                right: 0.3rem;
                top: 0.2rem;
            }
            
            .user {
                display: flex;
                align-items: center;
                position: absolute;
                top: 0.8rem;
                padding: 0.3rem 0.4rem;
                width: 100%;
                
                .img {
                    background-position: 0 -8.78rem;
                    width: 1.16rem;
                    height: 1.16rem;
                    background-image: url(https://basedata.azoyacdn.com/uploads/basedata/images/6bde47753de0ca74b4905bcfaa779090.png);
                    background-size: 14.21rem 9.94rem;
                }
                
                p {
                    display: block;
                    margin-left: 0.2rem;
                    font-size: 0.3rem;
                    color: #fff;
                    line-height: 1.4rem;
                }
            }
        }
    }
</style>
