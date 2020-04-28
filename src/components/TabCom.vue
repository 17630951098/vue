<template>
    <div>
        <div class="TabCom" v-if="tabdata">
            <div class="item" @click="toDetail(item.goodsName)" v-for="(item,index) in tabdata" :key="index">
                <div class="img">
                    <img :src="item.imgUrl">
                </div>
                <div class="right">
                    <p>{{item.goodsName}}</p>
                    <p>
                        <van-tag color="#f2826a" plain>{{item.address}}</van-tag>
                        &emsp; &emsp;
                        <van-tag style="margin-left: 0.1rem" color="#f2826a">{{'2件'+(Math.random()*10-2).toFixed(0)+'折'}}</van-tag>
                    </p>
                    <p v-if="item.price.length<10&&item.price.length!=0">{{item.price}}</p>
                    <p v-else>£{{(Math.random()*100-10).toFixed(2)}}</p>
                    <p>参考价：￥{{Math.abs((Math.random()*800-100).toFixed(2))}}</p>
                    <button @click.stop="addToCart(item)" class="btn">
                        加入购物篮
                    </button>
                </div>
            </div>
        </div>
        <div class="TabCom" v-if="toptab">
            <div @click="toDetail(item.name)" class="item" v-for="(item,index) in toptab" :key="index">
                <div class="img">
                    <img :src="item.src">
                </div>
                <div class="right">
                    <p>{{item.name}}</p>
                    <p>
                        <img :src="item.address" alt="">
                        &emsp; &emsp;
                        <van-tag v-if="item.lag!=''" plain color="#f2826a">{{item.lag}}</van-tag>
                    </p>
                    <p><span>{{item.price}}</span><span>{{item.suggest_price}}</span></p>
                    <p>{{item.market_price}}</p>
                    <button @click.stop="addToiCart(item)" class="btn" >
                        {{item.addCart}}
                    </button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
                goods:"",
            }
        },
        props:['tabdata','toptab'],
        methods:{
            addToiCart(item){
                this.$toast('加入成功');
                this.goods = {
                    id: '',
                    name: item.goodsName,
                    num: 1,
                    price: item.price,
                    market_price: item.market_price,
                    img: item.src
                },
                    this.$store.commit('addGood', this.goods);
            },
            //加入购物车
            addToCart(item) {
                this.$toast('加入成功');
                this.goods = {
                    id: '',
                    name: item.goodsName,
                    num: 1,
                    price: item.price,
                    market_price: '',
                    img: item.imgUrl
                },
                    this.$store.commit('addGood', this.goods);
                //购物车商品数量
                // this.cartNum = this.getGoodList.length;
            },
            toDetail(name){
                this.$router.push({name: 'Detail', params: {id:name}})
            }
        },
        created() {
            // console.log(this)
            // console.log(this.tabdata)
        }
    }
</script>

<style scoped lang="less">
.TabCom{
    .item{
        display: flex;
        border-bottom: 1px solid #e8e8e8;
        border-top: none;
        padding: .4rem;
        .img{
            width: 32%;
            height: 2.4rem;
            img{
                width: 100%;
            }
        }
        .right{
            position: relative;
            width: 68%;
            padding-left: .2rem;
            P:nth-child(1){
                height: .76rem;
                font-size: .28rem;
                color: #333;
                white-space: normal;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            P:nth-child(2){
                display: flex;
                align-items: center;
                margin-top: 0.1rem;
                img{
                    width: .9rem;
                    margin-right: 0.1rem;
                }
            }
            P:nth-child(3){
                margin-top: 0.3rem;
                font-size: .3rem;
                color: #1b1a19;
    
                span:nth-child(2) {
                    display: inline-block;
                    margin-left: .12rem;
                    font-size: .24rem;
                    color: #999;
                    text-decoration: line-through;
                }
            }
            P:nth-child(4){
                margin-top: .05rem;
                font-size: .24rem;
                color: #999;
            }
            .btn{
                position: absolute;
                width: 1.8rem;
                height: .68rem;
                background-color: #1b1a19;
                color: #fff;
                line-height: .68rem;
                font-size: .28rem;
                right: .3rem;
                bottom: .1rem;
                border-radius: .02rem;
                border: 0;
                outline: none;
            }
            .disabled{
                background-color: #999;
            }
        }
    }
}
</style>