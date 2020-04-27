<template>
    <div class="brand">
        <!--搜索框-->
        <div @click="goto" class="header">
            <div class="search_box">
                <span>请输入关键字</span>
                <span><img src="../assets/images/search.png" alt=""></span>
            </div>
        </div>
        <!--推荐品牌-->
        <div class="container">
            <div class="suggest">
                <!--标题-->
                <div class="title">
                    推荐品牌
                </div>
                <!--图片列表-->
                <ul class="brandList">
                    <li>
                        <a href="#">
                            <img src="https://source-feelunique.azoyacdn.com/media/wysiwyg/logo/CT7.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://source-feelunique.azoyacdn.com/media/wysiwyg/logo/by_terry3.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://source-feelunique.azoyacdn.com/media/wysiwyg/logo/nyx2.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://source-feelunique.azoyacdn.com/media/wysiwyg/logo/pauljoe.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://source-feelunique.azoyacdn.com/media/wysiwyg/logo/niod4.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://source-feelunique.azoyacdn.com/media/wysiwyg/logo/logo_elemis.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://source-feelunique.azoyacdn.com/media/wysiwyg/logo/hudabeauty5.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://source-feelunique.azoyacdn.com/media/wysiwyg/logo/zoeva6.jpg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <!--所有品牌-->
            <div class="all">
                <div class="title">所有品牌</div>
            </div>
            <van-index-bar sticky sticky-offset-top="50" highlight-color="#000">
                <div v-for="(item,index) in brands">
                    <van-index-anchor  :index="item.name"/>
                    <van-cell @click="toSearch(val)"  v-if="val!=null" v-for="(val,key) in item.brand.txt" :title="val"/>
                </div>
            </van-index-bar>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                brands:'',
            }
        },
        methods:{
            toSearch(val){
                this.$router.push({
                    name: "Result",
                    query: {
                        key: val,
                    },
                });
            },
            goto(){
                this.$router.push('/search')
            }
        },
        created() {
            this.$api.getBrandsDataAPI().then(res=>{
                this.brands=res.data;
                // console.log(res.data)
            })
        }
    }
</script>

<style scoped lang="less">
    .header {
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
    
        .search_box {
            display: flex;
            /*align-items: center;*/
            box-sizing: border-box;
            padding-left: .2rem;
            height: .6rem;
            line-height: .6rem;
            border: .02rem solid #e5e5e5;
            font-size: 0;
            border-radius: .3rem;
        
            span:nth-child(1) {
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
        
            span {
                padding-top: 0.1rem;
                width: .4rem;
            
                img {
                    width: 100%;
                }
            }
        }
        
    }
    .container{
        margin: 1rem 0;
        background-color: #f0f0f0;
        .suggest{
            margin-top: .2rem;
            padding-bottom: .34rem;
            width: 100%;
            background-color: #fff;
            .title {
                line-height: .86rem;
                text-indent: .2rem;
                font-size: .28rem;
                color: #333;
                border-bottom: 1px solid #e8e8e8;
                font-weight: bold;
            }
            .brandList{
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 25%;
                    text-align: center;
                    img{
                        width: 80%;
                    }
                }
            }
        }
    
        .all {
            margin-top: .2rem;
            width: 100%;
            overflow: hidden;
            background-color: #FFFFFF;
        
            .title {
                line-height: .86rem;
                text-indent: .2rem;
                font-size: .28rem;
                color: #333;
                border-bottom: 1px solid #e8e8e8;
                background-color: #FFFFFF;
            }
        }
    }
</style>