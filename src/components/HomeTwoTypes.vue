<template>
    <div class="HomeTwoTypes" v-if="popdata">
        <ul class="container">
            <li @click="toDetail(item.name)" v-for="(item,index) in popdata" :key="index">
                <div class="img">
                    <img :src="item.image_url" alt="">
                </div>
                <van-tag class="tag" color="#f2826a" plain>{{item.store_name}}</van-tag>
                <div class="bot">
                    <p><span>{{item.name}}</span></p>
                    <p>
                        <span>£{{item.price}}</span>
                        <span v-if="item.price!=item.final_price">£{{item.final_price}}</span>
                    </p>
                    <p>参考价：￥{{item.reference_price}}</p>
                    <div @click.stop="addToCart(item)" class="btn">
                        加入购物篮
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goods: "",
            }
        },
        props:['popdata'],
        methods:{
            //加入购物车
            addToCart(item) {
                this.$toast('加入成功');
                this.goods = {
                    id: '',
                    name: item.name,
                    num: 1,
                    price: '£'+item.price,
                    market_price: '£' +item.reference_price,
                    img: item.image_url
                },
                    this.$store.commit('addGood', this.goods);
                //购物车商品数量
                // this.cartNum = this.getGoodList.length;
            },
            toDetail(name) {
                this.$router.push({name: 'Detail', params: {id: name}})
            }
        },
        created() {
        
        }
    }
</script>

<style scoped lang="less">
.container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0.2rem;
    li{
        position: relative;
        margin: 0 0 .14rem 0;
        padding: .2rem .2rem 0;
        width: 48%;
        border: 1px solid #e8e8e8;
        .img{
            display: block;
            width: 2.8rem;
            height: 2.8rem;
            margin: .1rem auto;
            img{
                width: 100%;
            }
        }
        .tag{
            position: absolute;
            top: 2.55rem;
        }
        .bot{
            width: 100%;
            padding-top: .1rem;
            p:nth-child(1){
                font-size: .28rem;
                height: .76rem;
                line-height: .38rem;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
            }
            p:nth-child(2){
                margin-top: 0.22rem;
                span:nth-child(1){
                    color: #d72245;
                }
                span:nth-child(2){
                    text-decoration: line-through;
                    display: inline-block;
                    font-size: .22rem;
                    color: #cccccc;
                    margin-left: .3rem;
                }
            }
            p:nth-child(3){
                margin: .12rem 0 0;
                font-size: .24rem;
                color: #999;
            }
            .btn{
                margin-top: 0.2rem;
                width: 100%;
                line-height: .68rem;
                background-color: #1b1a19;
                font-size: .27rem;
                text-align: center;
                color: #FFFFFF;
            }
        }
    }
}
</style>