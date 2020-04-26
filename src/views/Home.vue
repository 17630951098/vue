<template>
    <div class="home">
        <!--顶部-->
        <div class="header">
            <div class="global">
                <div class="top">
                    <!--客服-->
                    <div class="left">
                        <img
                                src="https://source-feelunique.azoyacdn.com/skin/frontend/PlumTree/fu_mb/images/kefu-mb.png"
                                alt=""
                        />
                    </div>
                    <div class="center">
                        <img
                                src="https://source-feelunique.azoyacdn.com/skin/frontend/PlumTree/fu_mb/images/logo-fu.png"
                                alt=""
                        />
                    </div>
                    <!--通知-->
                    <div class="right">
                        <img src="https://fu-assets.azoyacdn.com/active/img/inform_mb.png" alt=""/>
                    </div>
                </div>
            </div>
            <!--search-->
            <div class="search">
                <img src="../assets/images/search.png"/>
                <span>搜索商品/品牌</span>
            </div>
        </div>
        <!--顶部 end-->
        <!--轮播图-->
        <van-swipe :width="'100%'" :autoplay="3500" v-if="bannerData" :key="index">
            <van-swipe-item v-for="(image, index) in bannerData" :key="index">
                <img style="width: 100%;" :src="image.image_url"/>
            </van-swipe-item>
        </van-swipe>
        <!--10个分类展示-->
        <ul class="smallIcon" v-if="iconData">
            <li v-for="(item, index) in iconData">
                <a class="ov" href="#">
                    <img :src="item.imgUrl" alt=""/>
                    <p>{{ item.name }}</p>
                </a>
            </li>
        </ul>
        <!--通知信息提示-->
        <section class="index_notice">
            <div class="img">
                <img src="https://fu-assets.azoyacdn.com/active/img/mb-lishuo.png" alt=""/>
            </div>
            
            <div class="notice_roll">
                <ul>
                    <li><a href="#">英国仓商品包税直邮</a></li>
                    <li><a href="#">关注微信公众号：feelunique_uk</a></li>
                    <li><a href="#">回复【优惠码】领2英镑优惠券。</a></li>
                    <li><a href="#">香港仓满£50包邮，英国仓满£80包邮。</a></li>
                    
                    <li><a href="#">英国仓商品包税直邮</a></li>
                    <li><a href="#">关注微信公众号：feelunique_uk</a></li>
                    <li><a href="#">回复【优惠码】领2英镑优惠券。</a></li>
                    <li><a href="#">香港仓满£50包邮，英国仓满£80包邮。</a></li>
                </ul>
            </div>
        </section>
        <!--点击选购-->
        <section class="index-activity">
            <ul class="hot-activity">
                <li>
                    <a href="#">
                        <img
                                src="//img-resource.azoyacdn.com/media/46d515b9032dc66012d658985aa39d1b/11860/0761e928948b75dea35ec8785f00a6ec.jpg"
                                alt=""
                        />
                        <div class="activityInfo">
                            <p>Huda香港仓</p>
                            <p>7折起+满赠</p>
                            <p>
                                <span>点击选购</span>
                                <img src="../assets/images/right.png" alt=""/>
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                                src="//img-resource.azoyacdn.com/media/46d515b9032dc66012d658985aa39d1b/8425/479e528dd6615af2b8f362a83739a79d.jpg"
                                alt=""
                        />
                        <div class="activityInfo">
                            <p>Filorga</p>
                            <p>2件7折</p>
                            <p>
                                <span>点击选购</span>
                                <img src="../assets/images/right.png" alt=""/>
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
            <ul class="hot-activity2">
                <li>
                    <img
                            src="//img-resource.azoyacdn.com/media/3a8f46b2a3236da37e23da09f4275cf8/11398/855f94f8cf20b737c78645eefa18307d.jpg"
                            alt=""
                    />
                    <div class="hot">
                        <p>Natasha</p>
                        <p>75折</p>
                        <p>
                            <span>点击选购</span>
                            <img src="../assets/images/right.png" alt=""/>
                        </p>
                    </div>
                </li>
                <li>
                    <img
                            src="//img-resource.azoyacdn.com/media/3a8f46b2a3236da37e23da09f4275cf8/8025/a1fdf23be844e83ed7e3fe5a5be9b66d.jpg"
                            alt=""
                    />
                    <div class="hot">
                        <p>Eucerin</p>
                        <p>香港仓72折</p>
                        <p>
                            <span>点击选购</span>
                            <img src="../assets/images/right.png" alt=""/>
                        </p>
                    </div>
                </li>
                <li>
                    <img
                            src="//img-resource.azoyacdn.com/media/3a8f46b2a3236da37e23da09f4275cf8/14228/3a3c29932f1897721b9bc062781f64aa.jpg"
                            alt=""
                    />
                    <div class="hot">
                        <p>雅顿</p>
                        <p>雅顿</p>
                        <p>
                            <span>点击选购</span>
                            <img src="../assets/images/right.png" alt=""/>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
        <!--热销推荐-->
        <section class="hot-recommend">
            <div class="container">
                <h2 class="recommend-title">热销推荐</h2>
                <van-tabs v-model="active" v-if="tabData">
                    <van-tab @click="changeTable(1)" title="超值推荐">
                        
                        <TabCom :tabdata="tabData.slice(0, 12)" :n="n"></TabCom>
                        
                    </van-tab>
                    <van-tab @click="changeTable(2)" title="香港仓推荐">
                        
                        <TabCom :tabdata="tabData.slice(12, 24)" :n="n"></TabCom
                        >
                    </van-tab>
                    <van-tab @click="changeTable(3)" title="美妆工具">
                        
                        <TabCom :tabdata="tabData.slice(24, 36)" :n="n"></TabCom
                        >
                        
                    </van-tab>
                    <van-tab @click="changeTable(4)" title="送给她">
                        
                        <TabCom :tabdata="tabData.slice(36, 48)" :n="n"></TabCom
                        >
                        
                    </van-tab>
                    <van-tab @click="changeTable(5)" title="送给他">
                        
                        <TabCom :tabdata="tabData.slice(48, 60)" :n="n"></TabCom
                        >
                        
                    </van-tab>
                </van-tabs>
            </div>
        </section>
        <!--精选品牌-->
        <div class="index_like">
            <div class="container">
                <div class="head">
                    <h3>精选品牌</h3>
                    <a href="#">查看更多></a>
                </div>
                <!--轮播-->
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(item,index) in img" :key="index">
                        <img  style="width: 100%" :src="item" alt="">
                    </van-swipe-item>
                </van-swipe>
                <ul class="brand">
                    <li v-for="(item,index) in brand">
                        <a href="#">
                            <img :src="item.url" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--小编精选-->
        <div class="index_search">
            <div class="container">
                <div class="head">
                    <h3>小编精选</h3>
                </div>
                <div>
                    <img style="width: 100%" src="//img-resource.azoyacdn.com/media/a02d8793ce7b4958a170fc51e09cbae8/83366/ad5c15fbd6a64f3401ea6d94f883f635.jpg" alt="">
                </div>
    
                <HomeScroll :data="brandData.slice(0,9)"></HomeScroll>
                <div class="img">
                    <img src="//img-resource.azoyacdn.com/media/f91794f12d2f4c5d73f1cd2449370ede/47976/8cee05c09c8eaf849f45b8791354ff0e.jpg" style="width: 100%" alt="">
                </div>
                <HomeScroll :data="brandData.slice(9,18)"></HomeScroll>
                <div class="img">
                    <img src="//img-resource.azoyacdn.com/media/f91794f12d2f4c5d73f1cd2449370ede/46936/99b5c6e16cd7abb6087cee3891a8e9d5.jpg"
                         style="width: 100%" alt="">
                </div>
                <HomeScroll :data="brandData.slice(18,27)"></HomeScroll>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeScroll from '../components/HomeScroll';
    import TabCom from "../components/TabCom";
    import $ from "jquery";
    
    export default {
        name: "Home",
        data() {
            return {
                /*banner数据*/
                bannerData: "",
                iconData: "",
                HomeData: "",
                tabData: '',
                active: 0,
                n: 1,
                img: [
                    '//img-resource.azoyacdn.com/media/f91794f12d2f4c5d73f1cd2449370ede/66735/1bcad4bc4c69f60b8bddd3f887b56921.jpg',
                    '//img-resource.azoyacdn.com/media/f91794f12d2f4c5d73f1cd2449370ede/86150/74a220040461e0a7709d818274f5ca28.jpg',
                    '//img-resource.azoyacdn.com/media/f91794f12d2f4c5d73f1cd2449370ede/122606/32b45665d46738f9ffc7468d7043f7f6.jpg'
                ],
                brand: [
                    {
                        url: 'https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/b/y/by_terry.jpg'
                    },
                    {
                        url: 'https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/n/i/niod_1.jpg'
                    },
                    {
                        url: 'https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/n/y/nyx_professional_makeup_.jpg'
                    },
                    {
                        url: 'https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/v/e/verso_1.jpg'
                    },
                    {
                        url: 'https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/c/o/cover_fx.jpg'
                    },
                    {
                        url: 'https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/p/a/paul_joe.jpg'
                    },
                    {
                        url: 'https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/s/a/sarah_chapman.jpg'
                    },
                    {
                        url: 'https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/z/o/zoeva_.jpg'
                    }
                ],
                brandData:'',
            };
        },
        components: {
            TabCom, HomeScroll
        },
        methods: {
            changeTable(index) {
                this.n = index;
            },
        },
        computed: {},
        created() {
            //tab 切换
            this.$api.getHomeTableAPI({}).then(res=>{
                console.log(res);
            });
            /*brand api*/
            this.$api.getHomeBrandAPI({}).then(res=>{
                this.brandData=res.data;
                // console.log(res);
            });
            this.$api.getHomeTabListAPI({}).then((res) => {
                // console.log(res.data.slice(0,12))
                this.tabData = res.data;
            });
            //获取banner数据
            this.$api
                .getHomeBannerDataAPI({page_type: "home"})
                .then((res) => {
                    // console.log(res.data.data);
                    this.bannerData = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
            //获取home数据
            this.$api
                .getHomeDataAPI({page_type: "home"})
                .then((res) => {
                    // console.log(res.data.results);
                    this.HomeData = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
            //获取icon数据
            this.$api
                .getHomeIconAPI({page_type: "home"})
                .then((res) => {
                    // console.log(res.data);
                    this.iconData = res.data;
                    // this.bannerData = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        mounted() {
            this.$nextTick(function () {
            });
        },
    };
</script>
<style scoped lang="less">
    /*.home::-webkit-scrollbar{*/
    /*    display: none;*/
    /*}*/
    .home {
    /*<!-- 小编精选-- >*/
        .index_search{
            background-color: #f0f0f0;
            padding-top: .2rem;
            overflow: hidden;
            .container{
                text-align: center;
                background-color: #FFFFFF;
                .head {
                    position: relative;
                    text-align: center;
    
                    h3 {
                        height: .9rem;
                        line-height: .9rem;
                        text-align: center;
                        font-size: .32rem;
                        color: #333;
                    }
                }
            }
        }
        //<!--将选品牌-->
        .index_like{
            background-color: #f0f0f0;
            padding-top: .2rem;
            overflow: hidden;
            .container{
                background-color: #FFFFFF;
                .head {
                    position: relative;
                    text-align: center;
                    h3 {
                        line-height: .9rem;
                        margin: 0;
                        padding-left: 0;
                        font-size: .32rem;
                        color: #333;
                    }
    
                    a {
                        position: absolute;
                        right: .24rem;
                        top: .3rem;
                        line-height: .3rem;
                        font-size: .24rem;
                        color: #666;
                    }
                }
                .brand{
                    display: grid;
                    grid-template-columns: repeat(4,25%);
                    text-align: center;
                    img{
                        width: 98%;
                    }
                }
            }
           
        }
        /*background-color: #F0F0F0;*/
        margin-bottom: 1rem;
        
        .header {
            width: 100%;
            background-color: #fff;
            padding-bottom: 0.25rem;
            border-bottom: 1px solid #e8e8e8;
            
            .top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.15rem 0.3rem 0;
                
                .left {
                    width: 0.4rem;
                }
                
                .center {
                    width: 3.3rem;
                }
                
                .right {
                    width: 0.38rem;
                }
                
                img {
                    width: 100%;
                }
            }
            
            .search {
                display: flex;
                align-items: center;
                padding-left: 0.4rem;
                margin: 0 auto;
                width: 6.94rem;
                height: 0.6rem;
                border: 1px solid #999;
                border-radius: 0.3rem;
                line-height: 0.56rem;
                font-size: 0.24rem;
                color: #999;
                
                img {
                    margin-right: 0.15rem;
                    width: 0.32rem;
                }
                
                span {
                    font-size: 0.24rem;
                    color: #999;
                }
            }
        }
        
        //轮播
        .van-swipe {
            .van-swipe__indicators {
                .van-swipe__indicator {
                    width: 0.4rem !important;
                    height: 0.06rem;
                    background: #a89e9e;
                    opacity: 1;
                    border-radius: 0.03rem;
                }
            }
        }
        
        //10
        .smallIcon {
            display: flex;
            flex-wrap: wrap;
            background-color: #fff;
            padding-top: 0.2rem;
            overflow: hidden;
            
            li {
                width: 20%;
                margin-bottom: 0.4rem;
                text-align: center;
                font-size: 0.24rem;
                color: #333;
                overflow: hidden;
                
                .ov {
                    display: block;
                    color: #000;
                    text-align: center;
                    font-size: 0.24rem;
                    
                    img {
                        margin-bottom: 0.1rem;
                        width: 0.88rem;
                    }
                    
                    p {
                        cursor: pointer;
                        color: #000000;
                    }
                }
            }
        }
        
        //notice
        .index_notice {
            display: flex;
            padding: 0.24rem 0;
            margin: 0 auto;
            width: 7.02rem;
            border-top: 1px solid #e8e8e8;
            /*overflow: hidden;*/
            box-shadow: 0 0 black;
            background-color: #fff;
            
            .img {
                width: 0.98rem;
                margin-right: 0.3rem;
                
                img {
                    width: 100%;
                }
            }
            
            .notice_roll {
                height: 0.32rem;
                width: 5.4rem;
                /*height:2rem;*/
                line-height: 0.32rem;
                overflow: scroll;
                position: relative;
                
                li {
                    width: 100%;
                    /*overflow: hidden;*/
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    transition: all 0.5s;
                    
                    a {
                        font-size: 0.24rem;
                        color: #d72245;
                    }
                }
            }
            
            .notice_roll::-webkit-scrollbar {
                display: none;
            }
        }
        
        .index-activity {
            padding-top: 0.2rem;
            background-color: #f0f0f0;
            font-size: 0;
            
            .hot-activity {
                display: flex;
                justify-content: space-between;
                overflow: hidden;
                background-color: #f0f0f0;
                
                li {
                    position: relative;
                    width: 49%;
                    
                    img {
                        width: 100%;
                    }
                    
                    .activityInfo {
                        position: absolute;
                        width: 1.7rem;
                        right: 0.24rem;
                        top: 0.5rem;
                        z-index: 1;
                        overflow: hidden;
                        
                        p:nth-child(1) {
                            line-height: 0.38rem;
                            font-size: 0.26rem;
                            color: #000;
                            overflow: hidden;
                            text-align: center;
                        }
                        
                        p:nth-child(2) {
                            line-height: 0.38rem;
                            font-size: 0.26rem;
                            color: #d72245;
                            overflow: hidden;
                            text-align: center;
                        }
                        
                        p:nth-child(3) {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-top: 0.22rem;
                            
                            span {
                                line-height: 0.38rem;
                                font-size: 0.26rem;
                                color: #000;
                            }
                            
                            img {
                                margin-left: 0.1rem;
                                width: 0.28rem;
                                height: 0.28rem;
                                display: inline-block;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
            
            .hot-activity2 {
                display: flex;
                justify-content: space-between;
                padding-top: 0.2rem;
                overflow: hidden;
                background-color: #f0f0f0;
                
                li {
                    position: relative;
                    width: 32%;
                    
                    img {
                        width: 100%;
                    }
                    
                    .hot {
                        position: absolute;
                        width: 1.82rem;
                        right: 0.2rem;
                        top: 1.76rem;
                        
                        P:nth-child(1) {
                            line-height: 0.38rem;
                            font-size: 0.26rem;
                            color: #000;
                            overflow: hidden;
                            text-align: center;
                        }
                        
                        P:nth-child(2) {
                            color: #d72245;
                            line-height: 0.38rem;
                            font-size: 0.26rem;
                            overflow: hidden;
                            text-align: center;
                        }
                        
                        p:nth-child(3) {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-top: 0.15rem;
                            
                            span {
                                line-height: 0.38rem;
                                font-size: 0.26rem;
                            }
                            
                            img {
                                margin-left: 0.1rem;
                                width: 0.28rem;
                                height: 0.28rem;
                                display: inline-block;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
        }
        
        /*热销推荐*/
        
        .hot-recommend {
            overflow: hidden;
            background-color: #f0f0f0;
            
            .container {
                margin-top: 0.2rem;
                background-color: #ffffff;
                
                .recommend-title {
                    line-height: 0.8rem;
                    text-align: center;
                    font-size: 0.32rem;
                    color: #333;
                }
            }
        }
    }
</style>
