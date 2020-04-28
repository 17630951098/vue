<template>
    <div class="cart">
        <header class="header">
            <nav class="nav">
                <van-icon @click="$router.go(-1)" size="0.45rem" color="#787878" name="arrow-left"/>
                <p>购物车</p>
                <p></p>
            </nav>
        </header>
        <div class="container">
            <div class="cart_empty" v-if="getGoodList==''">
                <div class="img"></div>
                <p>
                    <router-link class="to" to="/">去逛逛</router-link></p>
            </div>
            
            <ul class="list" v-else>
                <li v-for="(item,index) in getGoodList" :key="index">
                    <div class="product">
                        <div class="cart-product-info">
                            <!--复选框-->
                            <input type="checkbox">
                            <!--img-->
                            <div class="img">
                                <img :src="item.img" alt="">
                            </div>
                            <!--name-->
                            <div class="pr">
                                <p>{{item.name}}</p>
                                <p>
                                    <span>{{item.price}}</span>
                                    <span v-if="item.market_price">{{item.market_price}}</span></p>
                                <van-stepper input-width="1rem" button-size="0.5rem" @change="handleChange" integer v-model="item.num" min="1" max="10"/>
                            </div>
                            <!--收藏-->
                            <div :class="collect?'collect_inactive':'collect_active'"  class="collect"></div>
                            <!--删除-->
                            <div @click="removeList(index)" class="del"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vuex from "vuex";
    export default {
        data(){
            return{
                //收藏
                collect:false,
            }
        },
        methods:{
            //移除
            removeList(index){
                this.$store.commit('removeGood',this.getGoodList[index])
            },
            //修改数量
            handleChange(value) {
                // console.log(value);
                this.$store.commit('modifyNum', value);
            },
        },
        computed:{
            ...Vuex.mapGetters(['getGoodList']),
        }
    }
</script>

<style scoped lang="less">
    .cart{
        .header {
            padding: 0.28rem 0.2rem;
            background: #fff;
            box-sizing: border-box;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            border-bottom: 1px solid #ddd;
            z-index: 1000;
            .nav{
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: center;
            }
        }
        .container{
            padding: 1rem 0;
            .cart_empty {
                background: #fff;
                padding: .8rem 0 .4rem;
                .img{
                    width: 3.36rem;
                    height: 3.36rem;
                    background: url('../assets/images/empty.png') no-repeat center;
                    background-size: contain;
                    margin: 0 auto;
                }
                text-align: center;
                p{
                    margin-top: 0.5rem;
                }
                .to{
                    display: inline-block;
                    text-align: center;
                    border: 1px solid #000;
                    background: #000;
                    text-decoration: none;
                    color: #fff;
                    width: 2.66667rem;
                    height: .90667rem;
                    line-height: .90667rem;
                    border-radius: 0;
                    font-size: .32rem;
                }
            }
            .list{
                li {
                    border-bottom: 1px solid #ddd;
                }
                li:nth-of-type(1){
                    border-top: 1px solid #ddd;
                }
                .product{
                    margin-left: 1.06667rem;
                    padding: .26667rem .33333rem .26667rem 0;
                    .cart-product-info{
                        display: flex;
                        align-items: center;
                        position: relative;
                        .img{
                            position: relative;
                            display: inline-block;
                            vertical-align: middle;
                            box-sizing: border-box;
                            width: 2rem;
                            white-space: nowrap;
                            font-size: 0;
                            img{
                                width: 100%;
                                border: 1px solid #ddd;
                            }
                        }
                        .pr{
                            display: inline-block;
                            vertical-align: top;
                            width: 5.62667rem;
                            padding-left: .2rem;
                            box-sizing: border-box;
                            p:nth-of-type(1){
                                display: inline-block;
                                height: .90667rem;
                                font-size: .24rem;
                                line-height: .45333rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                            P:nth-of-type(2){
                                margin-bottom: 0.2rem;
                                span:nth-of-type(1){
                                    display: inline-block;
                                    margin-right: .2rem;
                                    color: #d72245;
                                    font-size: .37333rem;
                                }
                                span:nth-of-type(2){
                                    color: #999;
                                    font-size: .24rem;
                                    text-decoration: line-through;
                                }
                            }
                        }
                        .del{
                            position: absolute;
                            bottom: .1rem;
                            right: 0;
                            width: .36rem;
                            height: .45333rem;
                            background: url(https://staticfile.azoyacdn.com/promotion/fu/wap/images/delete-icon_854995e4da.png) no-repeat center;
                            background-size: contain;
                        }
                        .collect{
                            position: absolute;
                            bottom: .1rem;
                            right: .93333rem;
                            width: .36rem;
                            height: .48rem;
                        }
                        .collect_inactive{
                            position: absolute;
                            bottom: .1rem;
                            right: .93333rem;
                            width: .36rem;
                            height: .48rem;
                            background: url(https://staticfile.azoyacdn.com/promotion/fu/wap/images/favourites-success-icon_fdafc1ec41.png) no-repeat center;
                            background-size: contain;
                            pointer-events: none;
                        }
                        .collect_active{
                            position: absolute;
                            bottom: .1rem;
                            right: .93333rem;
                            width: .36rem;
                            height: .48rem;
                            background: url(https://staticfile.azoyacdn.com/promotion/fu/wap/images/favourites-icon_f557c6275d.png) no-repeat center;
                            background-size: contain;
                            pointer-events: none;
                        }
                        input:checked{
                            border: none;
                            background: url('../assets/images/checked.png') no-repeat center;
                            background-size: contain;
                            transform: translate3d(0, -50%, 0);
                            -webkit-appearance: none;
                            width: .48rem;
                            height: .48rem;
                            box-sizing: border-box;
                            vertical-align: middle;
                            border-radius: 50%;
                            outline: 0;
                        }
                        input{
                            position: absolute;
                            margin-left: -.73333rem;
                            top: 50%;
                            transform: translate3d(0, -50%, 0);
                            -webkit-appearance: none;
                            width: .48rem;
                            height: .48rem;
                            box-sizing: border-box;
                            vertical-align: middle;
                            border: 1px solid #999999;
                            cursor: pointer;
                            border-radius: 50%;
                            
                        }
                    }
                }
            }
        }
    }
   
</style>