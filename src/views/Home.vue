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
            <div class="head_box">
                <div class="search" @click="toSearch">
                        <img src="../assets/images/search.png"/>
                        <span>搜索商品/品牌</span>
                </div>
            </div>
        </div>
        <!--轮播图-->
        <van-swipe class="ban" :width="'100%'" :autoplay="3500" v-if="bannerData">
            <van-swipe-item v-for="(image, index) in bannerData" :key="index">
                <img style="width: 100%;" :src="image.image_url"/>
            </van-swipe-item>
        </van-swipe>
        <!--10个分类展示-->
        <ul class="smallIcon" v-if="iconData">
            <li @click="search(item.name)" v-for="(item, index) in iconData">
                <a class="ov" href="javascript:void(0);">
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
                <li @click="search('Huda香港仓')">
                    <a href="javascript:void (0);">
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
                <li @click="search('Filorga')">
                    <a href="javascript:void (0);">
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
                <li @click="search('Natasha')">
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
                <li @click="search('Eucerin')">
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
                <li @click="search('雅顿')">
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
                    <van-tab title="超值推荐">
                        
                        <TabCom :tabdata="tabData.slice(0, 12)"></TabCom>
                        
                    </van-tab>
                    <van-tab  title="香港仓推荐">
                        
                        <TabCom :tabdata="tabData.slice(12, 24)" ></TabCom
                        >
                    </van-tab>
                    <van-tab title="美妆工具">
                        
                        <TabCom :tabdata="tabData.slice(24, 36)" ></TabCom
                        >
                        
                    </van-tab>
                    <van-tab  title="送给她">
                        
                        <TabCom :tabdata="tabData.slice(36, 48)" ></TabCom
                        >
                        
                    </van-tab>
                    <van-tab title="送给他">
                        
                        <TabCom :tabdata="tabData.slice(48, 60)" ></TabCom
                        >
                        
                    </van-tab>
                </van-tabs>
            </div>
        </section>
        <!--精选品牌-->
        <section class="index_like">
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
                    <li  v-for="(item,index) in brand">
                        <a href="#">
                            <img :src="item.url" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <!--小编精选-->
        <section class="index_search">
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
        </section>
        <!--猜你喜欢-->
        <van-divider
                :style="{ backgroundColor: '#f0f0f0',padding:'0.1rem' }"
        >
        </van-divider>
        <div class="percentage-container">
            <div class="title">
                <p>猜你喜欢</p>
                <div class="icon" @click="cahngeYourLike">
                    <van-icon size="0.24rem" name="exchange"/><span>换一换</span>
                </div>
            </div>
            <div class="con">
                <home-two-types v-if="yourLikeCount==1" :popdata="HomeData.slice(0,8)">
                
                </home-two-types>
                <home-two-types v-else-if="yourLikeCount==2" :popdata="HomeData.slice(8,16)">
    
                </home-two-types>
                <home-two-types v-else :popdata="HomeData.slice(16,24)">
    
                </home-two-types>
            </div>
        </div>
        <!--发现心头好-->
        <section class="index_topList">
            <div class="topList">
                <div class="title">
                    发现新头好
                </div>
                <ul class="tab">
                    <li :class="inActive==1?'active':''" @click="changeActive(1)">小众美妆</li>
                    <li :class="inActive==2?'active':''" @click="changeActive(2)">身体护理</li>
                    <li :class="inActive==3?'active':''" @click="changeActive(3)">彩妆工具</li>
                </ul>
                <div v-if="topTab">
                    <TabCom v-if="inActive==1" :toptab="topTab.slice(0,6)">
                    
                    </TabCom>
                    <TabCom v-if="inActive==2" :toptab="topTab.slice(6,12)">
                    
                    </TabCom>
                    <TabCom v-if="inActive==3" :toptab="topTab.slice(12,18)">
                    
                    </TabCom>
                </div>
            </div>
            <!--查看更多-->
            <div @click="search('小众美妆')" class="more">
                查看更多 &gt;
            </div>
        </section>
        <section class="index_promise">
            <div class="container">
                <!--tou-->
                <div class="title">
                    <img src="https://fu-assets.azoyacdn.com/active/img/mb-fu.png" alt="">
                    <p>关注官方帐号，获取更多福利咨询</p>
                </div>
                <!--guanzhu-->
                <ul class="social">
                    <li>
                        <div class="left">
                            <img src="https://fu-assets.azoyacdn.com/active/img/mb-f.png" alt="">
                            <div class="txt">
                                <p>微博账号<br>@FEELUNIQUE-UK</p>
                            </div>
                        </div>
                        <img src="https://fu-assets.azoyacdn.com/active/img/mb-guanzhu.png" class="add">
                    </li>
                    <li>
                        <div class="left">
                            <img src="https://fu-assets.azoyacdn.com/active/img/mb-code.png" alt="">
                            <div class="txt">
                                <p>微信账号<br>FEELUNIQUE</p>
                            </div>
                        </div>
                        <img src="https://fu-assets.azoyacdn.com/active/img/mb-saoma.png" class="add">
                    </li>
                </ul>
                <van-divider
                        :style="{ backgroundColor: '#f0f0f0',height:'0.2rem' }"
                >
                </van-divider>
                <ul class="bbb">
                    <li>
                        <img src="https://fu-assets.azoyacdn.com/active/img/mb-icon-1.png" alt="">
                        <div class="right">
                            <p>无忧购物</p>
                            <p>中国大陆 满额免邮</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://fu-assets.azoyacdn.com/active/img/mb-icon-2.png" alt="">
                        <div class="right">
                            <p>汇聚美妆</p>
                            <p>数百品牌 数万单品</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://fu-assets.azoyacdn.com/active/img/mb-icon-3.png" alt="">
                        <div class="right">
                            <p>便捷支付</p>
                            <p>银联+支付宝集成</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://fu-assets.azoyacdn.com/active/img/mb-icon-4.png" alt="">
                        <div class="right">
                            <p>[品牌授权]</p>
                            <p>100%正规渠道</p>
                        </div>
                    </li>
                </ul>
                <van-divider
                        :style="{ backgroundColor: '#f0f0f0',height:'0.2rem' }"
                >
                </van-divider>
                <div class="money">今日参考汇率:1英镑=8.8人民币</div>
                <van-divider
                        :style="{ backgroundColor: '#f0f0f0',height:'0.2rem' }"
                >
                </van-divider>
                <!--手风琴-->
                <div class="handPiano">
                    <van-collapse v-model="activeName" accordion>
                        <van-collapse-item title="关于我们" name="1">
                            <ul class="item" >
                                <li>关于我们</li>
                                <li>服务条款</li>
                                <li>隐私政策</li>
                                <li>消费者告知书</li>
                            </ul>
                        </van-collapse-item>
                        <van-collapse-item title="税费政策" name="2">
                            <ul class="item">
                                <li>税费补贴说明：</li>
                                <li>
                                    从2020年3月13日起，凡在Feelunique中文官网英国仓下单可享受折后80英镑包邮，如被税将由商家代缴税金，用户无需向海关缴税；香港仓下单的用户享受税费补贴政策，期间订单按照相关法律法规及政策缴纳相应税金的，用户自行缴纳税款后凭海关出具的完税证明及订单编号，通过您的网站注册邮箱发送到中文客服china@feelunique.com，领取20英镑无门槛税金补贴优惠券（每优惠券限用一次，下次购物可使用）拒收及退运的订单不适用于本活动，部分折扣优惠不能使用。</li>
                            </ul>
                        </van-collapse-item>
                        <van-collapse-item title="正品承诺" name="3">
                            <ul class="item">
                                <li>税费补贴说明：</li>
                                <li>
                                    从2020年3月13日起，凡在Feelunique中文官网英国仓下单可享受折后80英镑包邮，如被税将由商家代缴税金，用户无需向海关缴税；香港仓下单的用户享受税费补贴政策，期间订单按照相关法律法规及政策缴纳相应税金的，用户自行缴纳税款后凭海关出具的完税证明及订单编号，通过您的网站注册邮箱发送到中文客服china@feelunique.com，领取20英镑无门槛税金补贴优惠券（每优惠券限用一次，下次购物可使用）拒收及退运的订单不适用于本活动，部分折扣优惠不能使用。</li>
                            </ul>
                        </van-collapse-item>
                        <van-collapse-item title="活动规则" name="4"></van-collapse-item>
                        <van-collapse-item title="消费者指南" name="5">
                            <ul class="item">
                                <li>购物流程</li>
                                <li>退货政策</li>
                                <li>关于我们</li>
                            </ul>
                        </van-collapse-item>
                    </van-collapse>
                    <ul class="credit-cards">
                        <li>
                            <img src="../assets/images/zhifubao.png" alt="">
                        </li>
                       <li>
                           <img src="../assets/images/vx.png" alt="">
                       </li>
                        <li>
                            <img src="../assets/images/mayi.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/images/online.png" alt="">
                        </li>
                    </ul>
                    <ul class="alt-sites">
                        <li>
                            <img src="../assets/images/uk.jpg" alt="">
                            <span>UK</span>
                        </li>
                        <li>
                            <img src="../assets/images/FK.jpg" alt="">
                            <span>FK</span>
                        </li>
                        <li>
                            <img src="../assets/images/de.jpg" alt="">
                            <span>DE</span>
                        </li>
                        <li>
                            <img src="../assets/images/no.png" alt="">
                            <span>NO</span>
                        </li>
                        <li>
                            <img src="../assets/images/eu.png" alt="">
                            <span>EU</span>
                        </li>
                        <li>
                            <img src="../assets/images/us.png" alt="">
                            <span>US</span>
                        </li>
                        <li>
                            <img src="../assets/images/in.png" alt="">
                            <span>international</span>
                        </li>
                    </ul>
                </div>
                <div class="copyright-strip">
                    <p>feelunique.com © 2005-2019. All rights reserved.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import HomeTwoTypes from "../components/HomeTwoTypes";// 猜你喜欢
    import HomeScroll from '../components/HomeScroll';//横向滚动列表
    import TabCom from "../components/TabCom";//tab 切换
    import $ from "jquery";
    
    export default {
        name: "Home",
        data() {
            return {
                yourLikeCount:1,
                activeName: '',
                /*banner数据*/
                /*banner数据*/
                bannerData: "",
                // 10
                iconData: "",
                // 列表
                HomeData: "",
                // 热销推荐
                tabData: '',
                active: 0,
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
                //激活状态
                inActive:1,
                //toptab 切换数据
                topTab:'',
            };
        },
        components: {
            TabCom, HomeScroll,HomeTwoTypes
        },
        methods: {
            search(item){
                this.$router.push({
                    name: "Result",
                    query: {
                        key: item,
                    },
                });
            },
            toSearch(){
                this.$router.push('/search')
            },
            //猜你喜欢
            cahngeYourLike(){
                this.yourLikeCount++;
                if (this.yourLikeCount>=4){
                    this.yourLikeCount=1;
                }
            },
            //发现心头好Tab切换
           changeActive(type){
               this.inActive=type;
           },
        },
        computed: {},
        created() {
            //tab 切换
            this.$api.getHomeTableAPI({}).then(res=>{
                this.topTab=res.data;
                // console.log(res);
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
                    this.HomeData = res.data.results;
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
                $(window).on('scroll',function () {
                    // console.log($(window).scrollTop())
                    if ($(window).scrollTop() > 100) {
                        $('.header .head_box .search').appendTo('.header .global .top .center');
                        $('.header .global .top .center>img ').css({display:'none'})
                    }else {
                        $('.header .search').appendTo('.header  .head_box');
                        $('.header .global .top .center>img ').css({display: 'inline-block'});
                    }
                });
            });
        },
    };
</script>
<style scoped lang="less">
    /*.home::-webkit-scrollbar{*/
    /*    display: none;*/
    /*}*/
    .home {
        .percentage-container{
            width: 100%;
            .title{
                position: relative;
                padding-bottom: 0.2rem;
                text-align: center;
                font-size: .32rem;
                font-weight: 700;
                color: #333;
                .icon{
                    position: absolute;
                    right:0.22rem;
                    top: 0;
                    span{
                        display: inline-block;
                        margin-left: 0.1rem;
                        font-size: .24rem;
                        color: #666;
                    }
                }
            }
            .con{
                width: 100%;
            }
        }
        .header {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10000;
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
                    width:6rem;
                    text-align: center;
                }
    
                .center > img {
                    width: 55%;
                }
                .right {
                    width: 0.38rem;
                }
            
                img {
                    width: 100%;
                }
            }
            .head_box{
                width: 100%;
                margin: auto;
            }
    
            .search {
                display: flex;
                align-items: center;
                padding-left: 0.4rem;
                margin: 0 auto;
                width: 85%;
                height: 0.6rem;
                border: 1px solid #999;
                border-radius: 0.3rem;
                line-height: 0.56rem;
                font-size: 0.24rem;
                color: #999;
                transition: all 0.5s;
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
        .ban{
            margin-top: 1.7rem;
        }
        .index_promise{
            padding-top: .2rem;
            background-color: #f0f0f0;
            .container{
                background-color: #FFFFFF;
                .title{
                    padding-top: .5rem;
                    text-align: center;
                    img{
                        width: 70%;
                    }
                    p{
                        margin-top: 0.24rem;
                        display: block;
                        font-size: .24rem;
                        color: #1b1a19;
                    }
                }
                .social{
                    margin-top: 0.2rem;
                    padding: 0 .24rem .24rem;
                    background-color: #fff;
                    overflow: hidden;
                    li{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding:0.24rem;
                        margin-bottom: .1rem;
                        background-color: #f0f0f0;
                        .left{
                            display: flex;
                            align-items: center;
                            img{
                                width: 1.2rem;
                            }
                            .txt{
                                p:nth-child(1){
                                    margin-left: .24rem;
                                    font-size: .24rem;
                                    line-height: .42rem;
                                    color: #333;
                                }
                            }
                        }
                        .add{
                            width: 1.8rem;
                            height: auto;
                        }
                    }
                }
                .bbb{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: .6rem .24rem 0;
                    box-sizing: border-box;
                    font-size: 0;
                    background-color: #fff;
                    overflow: hidden;
                    li{
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        margin-bottom: 0.5rem;
                        width: 45%;
                        img{
                            width: .7rem;
                            height: .7rem;
                            margin-right: .19rem;
                        }
                        .right{
                            p:nth-child(1){
                                font-size: .28rem;
                                color: #333;
                                margin-bottom: .1rem;
                                overflow: hidden;
                            }
                            p:nth-child(2){
                                font-size: .24rem;
                                color: #999;
                                overflow: hidden;
                            }
                        }
                    }
                }
                .money{
                    padding-left: 0.26rem;
                    font-size: .26rem;
                    color: #333;
                    background-color: #fff;
                }
                .handPiano{
                    margin-top: -0.3rem;
                    background-color: #444;
                    box-sizing: border-box;
                    padding: 0 .24rem .2rem;
                    .item{
                        li{
                            color: #ccc;
                            display: block;
                            font-size: .24rem;
                            line-height: .5rem;
                        }
                    }
                    .credit-cards{
                        font-size: 0;
                        text-align: center;
                        margin-top: .6rem;
                        padding-bottom: .5rem;
                        border-bottom: none;
                        li{
                            display: inline-block;
                            width: 1.4rem;
                            height: .5rem;
                            margin-right: .2rem;
                            vertical-align: middle;
                            img{
                                width: 100%;
                            }
                        }
                    }
                    .alt-sites{
                        font-size: 0;
                        text-align: center;
                        margin: 0 auto;
                        li{
                            display: inline-block;
                            width: auto;
                            height: .22rem;
                            line-height: .22rem;
                            font-size: .2rem;
                            vertical-align: middle;
                            text-align: left;
                            margin: 0 .35rem .34rem;
                            img{
                                display: inline-block;
                                margin-right: .15rem;
                                vertical-align: middle;
                                height: .2rem;
                                width: .4rem;
                            }
                            span{
                                color: #fff;
                            }
                        }
                    }
                }
                .copyright-strip{
                    height: .68rem;
                    line-height: .68rem;
                    font-size: .24rem;
                    background: #1b1a19;
                    color: #fff;
                    text-align: center;
                }
            }
        }
        /*发现心头好*/
        .index_topList{
            background-color: #f0f0f0;
            padding-top: .2rem;
            overflow: hidden;
           .topList{
               background-color: #FFFFFF;
               div.title{
                   line-height: .9rem;
                   text-align: center;
                   font-size: .32rem;
                   color: #333;
               }
               .tab{
                   display: flex;
                   li{
                       width: 33%;
                       line-height: .8rem;
                       border: 1px solid #ececec;
                       color: #666;
                       font-size: .28rem;
                       overflow: hidden;
                       text-align: center;
                       border-right: 0;
                   }
                   .active{
                       border: none;
                       border-top: .04rem solid #1b1a19;
                       font-weight: 700;
                       color: #333;
                   }
               }
           }
            .more{
                line-height: .8rem;
                text-align: center;
                background-color: #FFFFFF;
                font-size: .26rem;
                color: #999;
            }
        }
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
