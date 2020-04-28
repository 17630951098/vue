<template>
    <div class="HomeScroll" v-if="data">
        <div class="container">
            <ul class="list">
                <li @click="toDetail(item.name)"  v-for="(item,index) in data">
                    <div><a href="javascript:void (0);">
                        <div class="img">
                            <!--图片-->
                            <img :src="item.url" alt="">
                        </div>
                    </a></div>
                    <div class="bot">
                        <!--名字描述-->
                        <a href="javascript:void (0);">
                            <div class="name">
                                <p>{{item.name}}</p>
                            </div>
                            <div class="price">
                                <p>
                                    <span>{{item.price}}</span>
                                    <span class="pppp" v-if="item.market_price">{{item.market_price}}</span>
                                </p>
                            </div>
                            <div class="success">
                                <p>{{item.success_price}}</p>
                            </div>
                        </a>
                    </div>
                    <img class="address" :src="item.addressImg">
                    <van-tag class="tag" v-if="item.lag" plain type="danger">{{item.lag}}</van-tag>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props:['data'],
        methods:{
            toDetail(name) {
                this.$router.push({name: 'Detail', params: {id: name}})
            }
        }
    }
</script>

<style scoped lang="less">
    .HomeScroll{
        .container{
            overflow-x: scroll;
            ul{
                display: flex;
                li{
                    position: relative;
                    width: 2.5rem;
                    margin: .16rem .24rem .6rem;
                    border: none;
                    .img{
                        width: 2rem;
                        margin: .26rem auto .1rem;
                        img{
                            margin:0.2rem 0 0 0.1rem;
                            width: 100%;
                        }
                    }
                    .bot{
                        .name{
                            height: .76rem;
                            line-height: .38rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: normal;
                            text-align: left;
                            p:nth-child(1) {
                                font-size: .28rem;
                                color: #333;
                            }
                        }
                        .price{
                            margin: .2rem 0;
                            text-align: left;
                            p:nth-child(1){
                                font-size: .3rem;
                                color: #d72245;
                                .pppp{
                                    font-size: .24rem;
                                    color: #999;
                                    margin-left: .12rem;
                                    text-decoration: line-through;
                                }
                            }
                        }
                        .success{
                            text-align: left;
                            font-size: .24rem;
                            color: #999;
                        }
                    }
                    .address{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: .9rem;
                    }
                    .tag{
                        position: absolute;
                        top:2.1rem;
                        left: 0;
                        overflow: hidden;
                        padding: .04rem .08rem;
                        font-size: .23rem;
                        height: .26rem;
                        line-height: .26rem;
                    }
                }
            }
        }
    
        .container::-webkit-scrollbar{
            display: none;
        }
    }
</style>