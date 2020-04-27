<template>
    <div class="Search">
        <!--头部搜索框-->
        <header class="header">
            <form method="get" class="form">
                <button class="btn" @click="goBack">
                    <van-icon size="0.4rem" name="arrow-left"/>
                </button>
                <input @input="searchGoods" type="search" class="search" v-model="searchName">
                <button class="btn" @click="goSearch">搜索</button>
            </form>
        </header>
        <!--热门搜索-->
        <div class="hotSearch">
            <h1>热门搜素</h1>
            <div class="hotSearchWord">
                <div class="hots">
                    <button @click="goSearch" v-for="(item,index) in hots">{{item}}</button>
                </div>
            </div>
        </div>
        <!--历史记录-->
        <div class="history" v-if="searchHistory.length!=0">
            <div class="title">历史记录</div>
            <!--历史记录列表-->
            <ul class="searchInfo">
                <li v-for="(item,index) in searchHistory">
                    <span>{{item}}</span>
                    <!--删除按钮-->
                    <van-icon @click="removeHistory(index)" size="0.4rem" name="cross"/>
                </li>
                <li @click="removeAllCookie" class="del_all">清除历史记录</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        data(){
            return{
                hots:['极速香港仓','CT Pillow Talk','搪瓷隔离','水逆盘','娇兰','e.l.f','HOURGLASS'],
                searchName:'',
                searchHistory:[],
                historyCookie:'',
            }
        },
        watch:{
        },
        methods:{
            /*清除全部历史记录*/
            removeAllCookie(){
                /*清空数组*/
                this.searchHistory=[];
                /*删除缓存*/
                this.$jsCookie.remove('searchHistoryInfo');
            },
            // ×
            removeHistory(index) {
                this.searchHistory.splice(index, 1);
                //存cookie
                this.$jsCookie.set('searchHistoryInfo', JSON.stringify(this.searchHistory), {expires: 7})
            },
            searchGoods(){
                // console.log(this.searchName);
                /*axios.get('https://cn.feelunique.com/queryapi/suggest?query='+ this.searchName).then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                })*/
            },
            /*确认搜索*/
            goSearch(){
                let canPush = true;
                //判断是否为空
                if (this.searchName==''){
                    this.$toast('请输入搜索内容')
                }else {
                    //不为空则判断历史记录是否存在
                    this.searchHistory.forEach((val,key)=>{
                        if (val== this.searchName){
                            canPush=false;
                        }
                    });
                    //如果为true则添加
                    if (canPush){
                        this.searchHistory.push(this.searchName);
                        //存cookie
                        this.$jsCookie.set('searchHistoryInfo', JSON.stringify(this.searchHistory), {expires: 7})
                    }
                    this.$router.push('/result')
                    // console.log(this.searchHistory);
                }
            },
            //返回前一页
            goBack(){
                this.$router.go(-1);
            }
        },
        created() {
            //取cookie
            if (this.$jsCookie.get('searchHistoryInfo')){
                this.searchHistory = JSON.parse(this.$jsCookie.get('searchHistoryInfo'));
            }
        }
    }
</script>

<style scoped lang="less">
    .Search{
        .header{
            
            .form{
                padding: 0 0.2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: .9rem;
                border-bottom: 1px solid #999;
                    .search{
                        box-sizing: border-box;
                        width:5.54rem;
                        height: .6rem;
                        line-height: normal;
                        border-radius: .06rem;
                        font-size: .24rem;
                        text-indent: .24rem;
                        outline: 0;
                        border: 1px solid #999;
                    }
                .btn{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: .28rem;
                    color: #666;
                    margin-left: .1rem;
                    background-color: #FFFFFF;
                    border: none;
                    outline: none;
                }
            }
        }
        .hotSearch{
            width: 100%;
            padding: .16rem 0;
            overflow: hidden;
            h1{
                font-size: .28rem;
                line-height: .64rem;
                padding: 0 .32rem;
            }
            .hotSearchWord{
                padding: 0 .32rem;
                .hots{
                    padding: .16rem 0;
                    overflow: hidden;
                    button{
                        color: #d72245;
                        border: 1px solid #eb4040;
                        padding: 0 .3rem;
                        height: .5rem;
                        line-height: .5rem;
                        margin-right: .24rem;
                        margin-bottom: .3333rem;
                        font-size: .26rem;
                        text-align: center;
                        border-radius: .06rem;
                        background-color: #FFFFFF;
                    }
                }
            }
        }
    
        .history {
            padding: 0 .3rem;
            background: #fff;
            overflow: hidden;
            font-size: .26rem;
            line-height: .83rem;
        
            .title {
                font-size: .26rem;
                line-height: .83rem;
            }
            .searchInfo{
                font-size: .26rem;
                line-height: .83rem;
                li{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    vertical-align: middle;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                    overflow: hidden;
                    border-bottom: 1px solid #e8e8e8;
                }
                li:last-child{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
</style>