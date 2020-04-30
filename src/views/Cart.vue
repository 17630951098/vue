<template>
    <div class="cart">
        <!--头部-->
        <header class="header">
            <nav class="nav">
                <van-icon @click="back" size="0.45rem" color="#787878" name="arrow-left" />
                <p>购物车</p>
                <p></p>
            </nav>
        </header>
        <!--内容区-->
        <div class="container">
            <!--没有商品显示-->
            <div class="cart_empty" v-if="getGoodList == ''">
                <div class="img"></div>
                <p>
                    <router-link class="to" to="/">去逛逛</router-link>
                </p>
            </div>
            <!--有商品显示-->
            <ul class="list" v-else>
                <li v-for="(item, index) in getGoodList" :key="index">
                    <div class="product">
                        <div class="cart-product-info">
                            <!--复选框-->
                            <input @click="itemCheckbox(index,item)" checked type="checkbox" />
                            <!--img-->
                            <div class="img">
                                <img :src="item.img" alt="" />
                            </div>
                            <!--name-->
                            <div class="pr">
                                <p>{{ item.name }}</p>
                                <p>
                                    <span>{{ item.price }}</span>
                                    <span v-if="item.market_price">{{ item.market_price }}</span>
                                </p>
                                <van-stepper
                                    input-width="1rem"
                                    button-size="0.5rem"
                                    @change="handleChange"
                                    integer
                                    v-model="item.num"
                                    min="1"
                                    max="10"
                                />
                            </div>
                            <!--收藏-->
                            <div @click.stop="collectGoods(index)" :class="collect ? 'collect_inactive' : 'collect_active'" class="collect"></div>
                            <!--删除-->
                            <div @click="removeList(index)" class="del"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!--价格统计-->
        <div class="total">
            <div class="left">
                <!--全选反选-->
                <van-checkbox @click="selectAll" icon-size=".48rem" v-model="checked" checked-color="#D72245">
                    {{ sel }}
                </van-checkbox>
                <!--总价-->
                <p>
                    <span>合计:</span><span>£{{allPrice}}</span>
                </p>
            </div>
            <van-button @click="goToPay" style="width: 3rem; height: 100%;" color="#D72245">去结算</van-button>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import Vuex from "vuex";
// import {Dialog} from 'vant';
export default {
    data() {
        return {
            //全选按钮
            checked: true,
            //收藏
            collect: false,
            show: true,
            //total price
            sel: "取消",
            selectGoods: [],
        };
    },
    methods: {
        /*结算*/
        goToPay(){
            if (this.selectGoods.length!=0){
                this.getGoodList.forEach((item, index) => {
                    for (let i = 0; i < this.selectGoods.length; i++) {
                        if (item.id == this.selectGoods[i]) {
                            this.getBuyList.push(item)
                        }
                    }
                });
                this.$router.push('/order')
            }else {
                this.$toast('请选择商品进行结算')
            }
            // console.log(this.selectGoods);
            // console.log(this.getBuyList)
        },
        //收藏
        collectGoods(index){
            // console.log(index)
            this.collect=!this.collect;
        },
        //商品复选框
        itemCheckbox(index,item) {
            if (!$(".container input:checkbox").eq(index).prop("checked")) {
                this.checked = false;
                this.sel = "全选";
            } else if ($(".container input:checked").length == this.getGoodList.length) {
                this.checked = true;
                this.sel = "取消";
                // this.totalPrice = this.total_price;
            }
            // console.log(event);
            if (event.currentTarget.checked){
                this.selectGoods.push(this.getGoodList[index].id);
            }else {
                for (let i=0;i<this.selectGoods.length;i++){
                    if (this.getGoodList[index].id==this.selectGoods[i]){
                        this.selectGoods.splice(i,1);
                        break;
                    }
                }
            }
            // console.log(this.selectGoods)
            // console.log($('.container input:checkbox').eq(index).prop('checked'))
        },
        //全选
        selectAll() {
            if (this.checked) {
                //全选
                this.sel = "取消";
                // this.totalPrice = this.total_price;
                $(".container input:checkbox").prop("checked", true);
                this.selectGoods=[];
                this.getGoodList.forEach((val, key) => {
                    this.selectGoods.push(val.id);
                })
            } else {
                //反选
                this.sel = "全选";
                // this.totalPrice = "0.00";
                $(".container input:checkbox").prop("checked", false);
                this.selectGoods = [];
            }
            // console.log(this.selectGoods)
        },
        //移除
        removeList(index) {
            this.$dialog
                .confirm({
                    title: "提示",
                    message: "确认从购物车中移除此商品吗？",
                })
                .then(() => {
                    this.$store.commit("removeGood", this.getGoodList[index]);
                    // this.totalPrice = this.total_price;
                    this.$toast("移除成功");
                })
                .catch(() => {
                    // on cancel
                });
            // this.$store.commit('removeGood',this.getGoodList[index])
        },
        //修改数量
        handleChange(value) {
            // console.log(value);
            // this.totalPrice = this.total_price;
            this.$store.commit("modifyNum", value);
        },
        back(){
            this.$router.go(-1)
        }
    },
    computed: {
        allPrice(){
            let totalprice=0;
            this.getGoodList.forEach((val,key)=>{
                if (this.selectGoods.indexOf(val.id) !== -1){
                    totalprice+=val.num*val.price.substring(1,val.price.length);
                }
            });
            return totalprice= totalprice.toFixed(2);
        },
        ...Vuex.mapGetters(["getGoodList"]),
        ...Vuex.mapGetters(['getBuyList']),
    },
    created() {
        this.getGoodList.forEach((item,index)=>{
            this.selectGoods.push(item.id)
        });
        // this.totalPrice = this.total_price;
    },
    mounted() {
        this.$nextTick(function () {
        
        });
    },
};
</script>

<style scoped lang="less">
.cart {
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

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .container {
        padding: 1rem 0;

        .cart_empty {
            background: #fff;
            padding: 0.8rem 0 0.4rem;

            .img {
                width: 3.36rem;
                height: 3.36rem;
                background: url("../assets/images/empty.png") no-repeat center;
                background-size: contain;
                margin: 0 auto;
            }

            text-align: center;

            p {
                margin-top: 0.5rem;
            }

            .to {
                display: inline-block;
                text-align: center;
                border: 1px solid #000;
                background: #000;
                text-decoration: none;
                color: #fff;
                width: 2.66667rem;
                height: 0.90667rem;
                line-height: 0.90667rem;
                border-radius: 0;
                font-size: 0.32rem;
            }
        }

        .list {
            li {
                border-bottom: 1px solid #ddd;
            }

            li:nth-of-type(1) {
                border-top: 1px solid #ddd;
            }

            .product {
                margin-left: 1.06667rem;
                padding: 0.26667rem 0.33333rem 0.26667rem 0;

                .cart-product-info {
                    display: flex;
                    align-items: center;
                    position: relative;

                    .img {
                        position: relative;
                        display: inline-block;
                        vertical-align: middle;
                        box-sizing: border-box;
                        width: 2rem;
                        white-space: nowrap;
                        font-size: 0;

                        img {
                            width: 100%;
                            border: 1px solid #ddd;
                        }
                    }

                    .pr {
                        display: inline-block;
                        vertical-align: top;
                        width: 5.62667rem;
                        padding-left: 0.2rem;
                        box-sizing: border-box;

                        p:nth-of-type(1) {
                            display: inline-block;
                            height: 0.90667rem;
                            font-size: 0.24rem;
                            line-height: 0.45333rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        P:nth-of-type(2) {
                            margin-bottom: 0.2rem;

                            span:nth-of-type(1) {
                                display: inline-block;
                                margin-right: 0.2rem;
                                color: #d72245;
                                font-size: 0.37333rem;
                            }

                            span:nth-of-type(2) {
                                color: #999;
                                font-size: 0.24rem;
                                text-decoration: line-through;
                            }
                        }
                    }

                    .del {
                        position: absolute;
                        bottom: 0.1rem;
                        right: 0;
                        width: 0.36rem;
                        height: 0.45333rem;
                        background: url(https://staticfile.azoyacdn.com/promotion/fu/wap/images/delete-icon_854995e4da.png)
                            no-repeat center;
                        background-size: contain;
                    }

                    .collect {
                        position: absolute;
                        bottom: 0.1rem;
                        right: 0.93333rem;
                        width: 0.36rem;
                        height: 0.48rem;
                    }

                    .collect_inactive {
                        position: absolute;
                        bottom: 0.1rem;
                        right: 0.93333rem;
                        width: 0.36rem;
                        height: 0.48rem;
                        background: url(https://staticfile.azoyacdn.com/promotion/fu/wap/images/favourites-success-icon_fdafc1ec41.png)
                            no-repeat center;
                        background-size: contain;
                        pointer-events: none;
                    }

                    .collect_active {
                        position: absolute;
                        bottom: 0.1rem;
                        right: 0.93333rem;
                        width: 0.36rem;
                        height: 0.48rem;
                        background: url(https://staticfile.azoyacdn.com/promotion/fu/wap/images/favourites-icon_f557c6275d.png)
                            no-repeat center;
                        background-size: contain;
                        pointer-events: none;
                    }

                    input:checked {
                        border: none;
                        background: url("../assets/images/checked.png") no-repeat center;
                        background-size: contain;
                        transform: translate3d(0, -50%, 0);
                        -webkit-appearance: none;
                        width: 0.48rem;
                        height: 0.48rem;
                        box-sizing: border-box;
                        vertical-align: middle;
                        border-radius: 50%;
                        outline: 0;
                    }

                    input {
                        position: absolute;
                        margin-left: -0.73333rem;
                        top: 50%;
                        transform: translate3d(0, -50%, 0);
                        -webkit-appearance: none;
                        width: 0.48rem;
                        height: 0.48rem;
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

    .total {
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        left: 0;
        bottom: 0;
        padding-left: 0.33333rem;
        white-space: nowrap;
        background: #fff;
        width: 100%;
        z-index: 10;

        .left {
            display: flex;
            align-items: center;
        }

        p {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 0.3rem;
            /*width: 4rem;*/
            color: #999;
            height: 100%;

            span:nth-of-type(1) {
                line-height: 1;
                color: #999;
                font-size: 0.22rem;
                margin-right: 0.1rem;
            }

            span:nth-of-type(2) {
                color: #d72245;
                font-size: 0.4rem;
            }
        }
    }
}
</style>
