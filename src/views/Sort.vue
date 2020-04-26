<template>
    <div class="sort">
        <!--搜索框-->
        <div @click="goto" class="header">
            <div class="search_box">
                <span>请输入关键字</span>
                <span><img src="../assets/images/search.png" alt=""></span>
            </div>
        </div>
        <!--侧边栏切换-->
        <div class="container">
            <ul class="left">
                <ul>
                    <li :class="index==val?'active':''" @click="changeActive(index)" v-for="(item,index) in name">{{item}}</li>
                </ul>
            </ul>
            <div class="right">
                <ul v-if="val==0">
                    <li v-for="(item,index) in sortData" :key="index" v-if="item.length!=0">
                        <div class="item" v-for="(val,key) in item" v-if="val!=''">
                            <img :src="val.url" alt="">
                            <p>{{val.name}}</p>
                        </div>
                    </li>
                </ul>
                <ul class="simple" v-if="val==1">
                    <li v-for="(item,index) in sortData[val-1]" :key="index">
                            <img :src="item.url" alt="">
                            <p>{{item.name}}</p>
                    </li>
                </ul>
                <ul class="simple" v-if="val==2">
                    <li v-for="(item,index) in sortData[val-1]" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
                <ul class="simple" v-if="val==3">
                    <li v-for="(item,index) in sortData[val-1]" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
                <ul class="simple" v-if="val==4">
                    <li v-for="(item,index) in sortData[val-1]" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
                <ul class="simple" v-if="val==5">
                    <li v-for="(item,index) in sortData[val-1]" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
                <ul class="simple" v-if="val==6">
                    <li v-for="(item,index) in sortData[val-1]" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
                <ul class="simple" v-if="val==7">
                    <li v-for="(item,index) in sortData[val-1]" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
                <ul class="simple" v-if="val==8">
                    <li v-for="(item,index) in sortData[val-1]" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:['全部','面部护肤','魅力彩妆','沐浴美体','洗护造型','母婴用品','男士护理','美容电器','礼品专区','旅行专区'],
                sortData:'',
                val:0,
            }
        },
        methods:{
            changeActive(index){
                this.val=index;
                console.log(this.val)
            },
            goto() {
                this.$router.push('/search')
            }
        },
        created() {
            this.$api.getSortDataAPI().then(res=>{
                console.log(res.data);
                this.sortData=res.data;
            })
        }
    }
</script>

<style scoped lang="less">
.sort{
    .header{
        padding: .2rem;
        border-bottom: 1px solid #e8e8e8;
        width: 100%;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 99;
        height: 1rem;
        .search_box{
            display: flex;
            /*align-items: center;*/
            box-sizing: border-box;
            padding-left: .2rem;
            height: .6rem;
            line-height: .6rem;
            border: .02rem solid #e5e5e5;
            font-size: 0;
            border-radius: .3rem;
            span:nth-child(1){
                width: 90%;
                box-sizing: border-box;
                display: inline-block;
                vertical-align: middle;
                outline: 0;
                border: none;
                padding: 0;
                font-size: .22rem;
                color: #b5b5b5;
            }
            span{
                padding-top: 0.1rem;
                width: .4rem;
                img{
                    width: 100%;
                }
            }
        }
        
    }
    position: relative;
    .container {
        display: grid;
        grid-template-columns: 28% 72%;
        position: absolute;
        top: 1rem;
        bottom: 1rem;
        left: 0;
        right: 0;
        background-color: #fff;
        color: #333;
        font-size: .28rem;
        .left {
            height: 100vh;
            overflow: auto;
                li {
                    box-sizing: border-box;
                    width: 100%;
                    height: 1.28rem;
                    border-left: .06rem solid transparent;
                    background-color: #fafafa;
                    text-align: center;
                    line-height: 1.28rem;
                }
            .active{
                background-color: #FFFFFF;
                /*border-color: #1b1a19;*/
                border-right: 2px solid #1b1a19;
                color: #1b1a19;
            }
        }
        .right{
            position: relative;
            color: #333;
            font-size: .28rem;
            overflow-y: scroll;
            height: 100vh;
            margin-bottom: 1rem;
    
            .simple{
                display: flex;
                li{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 0.1rem;
                    text-align: center;
                    padding-bottom: 0.5rem;
                    margin-bottom: 0.2rem;
                    width: 33%;
                    p {
                        margin-top: 0.1rem;
                        color: #000;
                        cursor: pointer;
                        margin-bottom: 0.2rem;
                    }
    
                    img {
                        margin-bottom: 0.2rem;
                        padding: 0.1rem;
                        width: 80%;
                    }
                }
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                justify-content: start;
                li {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    padding-top: 0.1rem;
                    text-align: center;
                    padding-bottom: 0.5rem;
                    margin-bottom: 0.2rem;
                    .item{
                        width: 33%;
                    }
                    p {
                        margin-top: 0.1rem;
                        color: #000;
                        cursor: pointer;
                        margin-bottom: 0.2rem;
                    }
        
                    img {
                        margin-bottom: 0.2rem;
                        padding: 0.1rem;
                        width: 80%;
                    }
                }
            }
            
        }
    }
}
</style>