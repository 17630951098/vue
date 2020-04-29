<template>
    <div class="order">
        <div class="header">
            <van-nav-bar @click-left="onClickLeft" title="确认订单" left-text="返回" left-arrow>
                <template #left>
                    <van-icon  size="0.4rem" color="#787878" name="arrow-left"/>
                </template>
            </van-nav-bar>
        </div>
        <div class="container">
            <div class="divider" style="width: 100%;height:0.2rem;background-color: #f0f0f0"></div>
            <van-notice-bar style="font-size: 0.24rem" color="#d4495d" background="#ecf9ff" left-icon="info-o" wrapable :scrollable="false">
                根据海关要求，必填中文真实姓名和中文地址，请勿填写英文名、英文地址、XX女士/小姐/先生等
            </van-notice-bar>
            <div class="addAdress">
                <div @click="addAdress" class="add">+添加收货地址</div>
            </div>
            <div class="divider" style="width: 100%;height:0.2rem;background-color: #f0f0f0"></div>
            <div class="txt">
                <div class="title">
                    运送服务
                </div>
                <div class="con">
                    <P>英国仓：折后满80英镑包邮，如被税，商家会代缴税金，用户无需直接向海关缴纳，预估到货时效15~20天。 </P>
                    <br>
                    <br>
                    <P>香港仓：折后满50英镑包邮，预计到货时效为3~7天。</P>
                </div>
            </div>
            <div class="divider" style="width: 100%;height:0.2rem;background-color: #f0f0f0"></div>
    
            <ul class="list">
                <li v-for="(item,index) in getBuyList">
                    <van-card
                            currency=""
                            :num="item.num"
                            :price="item.price"
                            :title="item.name"
                            :thumb="item.img"
                    />
                    <div class="divider" style="width: 100%;height:0.2rem;background-color: #f0f0f0"></div>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <div class="left">
                <span>应付总额：</span>
                <span>{{totalPrice.toFixed(2)}}</span>
            </div>
            <div class="right">
                提交订单
            </div>
        </div>
    </div>
</template>

<script>
    import Vux from 'vuex'
    export default {
        data(){
            return{
                data:'',
                totalPrice:0,
            }
        },
        methods: {
            addAdress(){
                this.$router.push('/address');
            },
            onClickLeft(){
                this.$router.push('/cart')
            }
        },
        computed:{
            ...Vux.mapGetters(['getBuyList']),
        },
        created() {
            this.getBuyList.forEach((item,index)=>{
                this.totalPrice+=item.num*item.price.substring(1,item.price.length);
            });
            this.data=this.getBuyList;
        }
    }
</script>

<style scoped lang="less">
    .bottom{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1rem;
        border-top: 1px solid #e8e4e4;
        z-index: 1000;
        .left{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 70%;
            background: #fff;
            text-align: center;
            font-size: .3rem;
            span:nth-of-type(2){
                color: #333;
                font-size: .35rem;
                font-weight: 600;
            }
        }
        .right{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 30%;
            text-align: center;
            font-size: .37333rem;
            color: #fff;
            background: #d72245;
        }
    }
    .header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
    .container{
        padding: 1rem 0;
    }
    .list{
    
    }
    .addAdress{
        position: relative;
        min-height: 1.86667rem;
        .add{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0);
            width: 3.41333rem;
            height: .77333rem;
            line-height: .77333rem;
            text-align: center;
            font-size: .28rem;
            color: #FFFFFF;
            border: 2px solid #000;
            border-radius:10px;
        }
    }
    .txt{
        background: #fff;
        padding: 0 .33333rem .33333rem;
        .title{
            height: 1.13333rem;
            line-height: 1.13333rem;
            font-size: .42667rem;
            color: #333;
        }
        .con{
            font-size: .24rem;
            color: #999;
        }
    }
</style>