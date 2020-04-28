<template>
    <div class="Search">
        <!--头部搜索框-->
        <header class="header">
            <form @submit.prevent.stop method="get" class="form">
                <button class="btn" @click="goBack">
                    <van-icon size="0.4rem" name="arrow-left"/>
                </button>
                <!--@click="searchName = lastHistory"-->
                <input
                        ref="code"
                        :placeholder="lastHistory"
                        @input="searchGoods"
                        type="search"
                        class="search"
                        v-model="searchName"
                />
                <button class="btn" @click="goSearch">搜索</button>
            </form>
        </header>
        <!--热门搜索-->
        <div class="hotSearch">
            <h1>热门搜素</h1>
            <div class="hotSearchWord">
                <div class="hots">
                    <button @click="goHotSearch(item)" v-for="(item, index) in hots">
                        {{ item }}
                    </button>
                </div>
            </div>
        </div>
        <!--历史记录-->
        <div class="history" v-if="searchHistory.length != 0">
            <div class="title">历史记录</div>
            <!--历史记录列表-->
            <ul class="searchInfo">
                <li v-for="(item, index) in searchHistory" :key="index">
                    <span @click="goHistorySearch(item)">{{ item }}</span>
                    <!--删除按钮-->
                    <van-icon @click="removeHistory(index)" size="0.4rem" name="cross"/>
                </li>
                <li @click="removeAllCookie" class="del_all">清除历史记录</li>
            </ul>
        </div>
    </div>
</template>

<script>
    // import axios from "axios";
    
    export default {
        data() {
            return {
                hots: ["极速香港仓", "CT Pillow Talk", "搪瓷隔离", "水逆盘", "娇兰", "e.l.f", "HOURGLASS"],
                searchName: "",
                searchHistory: [],
                historyCookie: "",
                lastHistory: "",
                code: "",
            };
        },
        watch: {},
        methods: {
            //点击历史搜索
            goHistorySearch(item) {
                this.goHotSearch(item);
            },
            //点击热门搜索
            goHotSearch(item) {
                // console.log(item);
                let i = null;
                this.searchHistory.forEach((val, key) => {
                    if (val == item) {
                        i = key;
                    }
                });
                //删除原本存在的
                this.searchHistory.splice(i, 1);
                //添加到最前面
                this.searchHistory.unshift(item);
                //存cookie
                this.$jsCookie.set("searchHistoryInfo", JSON.stringify(this.searchHistory), {expires: 365});
                this.$router.push({
                    name: "Result",
                    query: {
                        key: item,
                    },
                });
            },
            /*清除全部历史记录*/
            removeAllCookie() {
                /*清空数组*/
                this.searchHistory = [];
                /*删除缓存*/
                this.$jsCookie.remove("searchHistoryInfo");
            },
            // ×
            removeHistory(index) {
                this.searchHistory.splice(index, 1);
                //存cookie
                this.$jsCookie.set("searchHistoryInfo", JSON.stringify(this.searchHistory), {expires: 365});
            },
            searchGoods() {
                // console.log(this.searchName);
                /*axios.get('https://cn.feelunique.com/queryapi/suggest?query='+ this.searchName).then(res=>{
                                                          console.log(res);
                                                      }).catch(err=>{
                                                          console.log(err);
                                                      })*/
            },
            /*确认搜索*/
            goSearch() {
                let i = null;
                //判断是否为空
                if (this.searchName == "") {
                    this.$toast("请输入搜索内容");
                } else {
                    //不为空则判断历史记录是否存在
                    this.searchHistory.forEach((val, key) => {
                        if (val == this.searchName) {
                            i = key;
                        }
                    });
                    //删除原本存在的
                    this.searchHistory.splice(i, 1);
                    this.searchHistory.unshift(this.searchName);
                    //存cookie
                    this.$jsCookie.set("searchHistoryInfo", JSON.stringify(this.searchHistory), {expires: 7});
                    this.$router.push({
                        name: "Result",
                        query: {
                            key: this.searchName,
                        },
                    });
                    // console.log(this.searchHistory);
                }
            },
            //返回前一页
            goBack() {
                this.$router.go(-1);
            },
        },
        created() {
            //取cookie
            if (this.$jsCookie.get("searchHistoryInfo")) {
                this.searchHistory = JSON.parse(this.$jsCookie.get("searchHistoryInfo"));
                this.lastHistory = this.searchHistory[0];
            }
        },
        mounted() {
            this.$nextTick(() => {
                //默认获取焦点
                this.$refs.code.focus();
            });
        },
    };
</script>

<style scoped lang="less">
    .Search {
        .header {
            position: fixed;
            top: 0;
            left: 0;
            .form {
                padding: 0 0.2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 0.9rem;
                border-bottom: 1px solid #999;
                
                .search {
                    box-sizing: border-box;
                    width: 5.54rem;
                    height: 0.6rem;
                    line-height: normal;
                    border-radius: 0.06rem;
                    font-size: 0.24rem;
                    text-indent: 0.24rem;
                    outline: 0;
                    border: 1px solid #999;
                }
                
                input::-webkit-search-cancel-button {
                    display: none;
                }
                
                .btn {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.28rem;
                    color: #666;
                    margin-left: 0.1rem;
                    background-color: #ffffff;
                    border: none;
                    outline: none;
                }
            }
        }
        
        .hotSearch {
            margin-top: 1rem;
            width: 100%;
            padding: 0.16rem 0;
            overflow: hidden;
            
            h1 {
                font-size: 0.28rem;
                line-height: 0.64rem;
                padding: 0 0.32rem;
            }
            
            .hotSearchWord {
                padding: 0 0.32rem;
                
                .hots {
                    padding: 0.16rem 0;
                    overflow: hidden;
                    
                    button {
                        color: #d72245;
                        border: 1px solid #eb4040;
                        padding: 0 0.3rem;
                        height: 0.5rem;
                        line-height: 0.5rem;
                        margin-right: 0.24rem;
                        margin-bottom: 0.3333rem;
                        font-size: 0.26rem;
                        text-align: center;
                        border-radius: 0.06rem;
                        background-color: #ffffff;
                    }
                }
            }
        }
        
        .history {
            margin-bottom: 1rem;
            padding: 0 0.3rem;
            background: #fff;
            overflow: hidden;
            font-size: 0.26rem;
            line-height: 0.83rem;
            
            .title {
                font-size: 0.26rem;
                line-height: 0.83rem;
            }
            
            .searchInfo {
                font-size: 0.26rem;
                line-height: 0.83rem;
                
                li {
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
                    
                    span:nth-child(1) {
                        width: 100%;
                    }
                }
                
                li:last-child {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
</style>
