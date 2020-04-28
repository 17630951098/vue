<template>
    <div class="Register">
        <van-nav-bar title="手机注册" left-arrow @click-left="onClickLeft"/>
        <div class="container">
            <p class="hint"></p>
            <div class="section">
                <form @submit.prevent method="post">
                    <div class="sc" :style="{ borderColor: telBot ? '#000' : '' }">
                        <i class="phone"></i>
                        <span>+86</span>
                        <input type="hidden" name="type"/>
                        <input
                                ref="telephone"
                                v-model="tel"
                                type="text"
                                name="username"
                                autocomplete="off"
                                placeholder="请输入常用手机号"
                        />
                        <van-icon v-if="showDel" @click.stop="del(1)" name="close"/>
                    </div>
                    <div class="sc check" :style="{ borderColor: telBot ? '#000' : '' }">
                        <i class="phone"></i>
                        <input type="hidden" name="type"/>
                        <input
                                v-model="checkNum"
                                type="text"
                                placeholder="请输入图形验证码"
                        />
                        <b @click="getNewNum">{{osg}}</b>
                    </div>
                    <div class="sc check" :style="{ borderColor: telBot ? '#000' : '' }">
                        <i class="phone"></i>
                        <input type="hidden" name="type"/>
                        <input
                                v-model="telNum"
                                type="text"
                                placeholder="请输入手机验证码"
                        />
                        <span @click="checkout">发送验证码</span>
                    </div>
                    <div class="sc check" :style="{ borderColor: telBot ? '#000' : '' }">
                        <i class="phone"></i>
                        <input type="hidden" name="type"/>
                        <input
                                @blur="cahangeSub"
                                v-model="password"
                                type="password"
                                placeholder="6-20位字符，由数字和字母组成"
                        />
                    </div>
                    <p>用户注册代表同 <a href="#">《服务条款》</a>级<a href="#">《隐私条款》</a></p>
                    <button :style="{backgroundColor:canRegister?'#1bbc9b':''}" @click="register">立即注册</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    import {on} from "vant/lib/utils/dom/event";
    
    export default {
        data() {
            return {
                telBot: false,
                showDel: false,
                tel: "",
                //图形验证码
                checkNum:'',
                //获取到的图形验证码
                password:'',
                osg:'',
                telNum:'',
                canRegister:false,
            };
        },
        methods: {
            cahangeSub(){
                if (this.tel!=''&&this.password!=''&&this.checkNum!=''&&this.telNum!=''){
                    this.canRegister=true
                }else {
                    this.canRegister = false
                }
            },
            register(){
               if (!/^[A-z0-9-_]{6,20}$/.test(this.password)){
                    this.$toast('请输入合法密码');
                    this.getNewNum()
                }else {
                    this.$toast.success('注册成功,2s后跳转登录页面');
                    this.$router.push('/login')
                }
            },
            getNewNum(){
                this.$api.getImgAPI().then(res => {
                    // console.log()
                    this.osg = res.data
                }).catch(err => {
                    this.$toast('网络错误')
                })
            },
            checkout(){
                if (this.checkNum==''||this.tel==''){
                    this.$toast('请输入手机号或图形验证码')
                }else if (!/^\d{11}$/.test(this.tel)){
                    this.$toast('请输入11位手机号')
                }
                else if(this.checkNum!=this.osg){
                    this.$toast('图形验证码错误')
                }else {
                    this.$toast('验证码已发送');
                    this.$api.getTelAPI({
                        tel:this.tel
                    }).then(res=>{
                        // this.$toast('验证码为'+res.data);
                    }).catch(err=>{
                        this.$toast('网络错误');
                    })
                }
            },
            del(type) {
                if (type == 1) {
                    this.tel = "";
                    this.$refs.telephone.focus();
                }
            },
            onClickLeft() {
                this.$router.go(-1);
            },
        },
        created() {
            this.$api.getImgAPI().then(res=>{
                // console.log()
                this.osg= res.data
            }).catch(err=>{
                this.$toast('网络错误')
            })
        },
        mounted() {
            this.$nextTick(function () {
            });
        },
    };
</script>

<style scoped lang="less">
    .container {
        .hint {
            display: block;
            -ms-flex-align: center;
            align-items: center;
            margin: 0.36rem 0.6rem;
            font-size: 0.3rem;
            line-height: 0.42rem;
            padding-left: 0.12rem;
        }
        
        .section {
            margin: 0 0.6rem;
            
            .sc {
                display: flex;
                height: 1rem;
                line-height: 1rem;
                padding-left: 0.12rem;
                box-sizing: content-box;
                align-items: center;
                border-bottom: 1px solid #e0e0e0;
                
                .phone {
                    width: 0.42rem;
                    height: 0.42rem;
                    background-image: url("../assets/images/register.png");
                    background-size: 1.68rem 1.68rem;
                    background-position: -1.26rem -0.44rem;
                }
                
                span {
                    margin-left: 0.2rem;
                    font-size: 0.3rem;
                    color: #333;
                    letter-spacing: 0;
                    line-height: 0.3rem;
                }
                
                input[type="hidden"] {
                    flex: 1;
                    margin-left: 0.16rem;
                    height: 0.4rem;
                    font-size: 0.3rem;
                    color: #333;
                    width: 100%;
                    line-height: 0.4rem;
                    border: none;
                    outline: none;
                    text-decoration: none;
                }
                
                input[type="text"] {
                    flex: 1;
                    margin-left: 0.16rem;
                    height: 0.4rem;
                    font-size: 0.3rem;
                    color: #333;
                    width: 100%;
                    line-height: 0.4rem;
                    border: none;
                    outline: none;
                    text-decoration: none;
                    display: block;
                }
    
                input[type="password"] {
                    flex: 1;
                    margin-left: 0.16rem;
                    height: 0.4rem;
                    font-size: 0.3rem;
                    color: #333;
                    width: 100%;
                    line-height: 0.4rem;
                    border: none;
                    outline: none;
                    text-decoration: none;
                    display: block;
                }
            }
            .sc:nth-of-type(2){
                i{
                    background-size: 1.68rem 1.68rem;
                    width: .42rem;
                    height: .42rem;
                    background-position: -.82rem 0;
                }
            }
            .sc:nth-of-type(3){
                i{
                    background-size: 1.68rem 1.68rem;
                    width: .42rem;
                    height: .42rem;
                    background-position: -1.26rem 0;
                    background-repeat: no-repeat;
                }
                span{
                    width: 2rem;
                    height: .68rem;
                    line-height: .68rem;
                    display: inline-block;
                    font-size: .24rem;
                    border-radius: .34rem;
                    background-color: #1bbc9b;
                    border: none;
                    text-align: center;
                    color: #fff;
                    outline: none;
                }
            }
            .sc:nth-of-type(4){
                input{
                }
            }
            p{
                align-items: center;
                padding: .4rem 0 0;
                font-size: .24rem;
                color: #999;
                a{
                    color: turquoise;
                }
            }
            button{
                margin-top: 0.3rem;
                margin-bottom: .3rem;
                border-radius: .03rem;
                overflow: hidden;
                position: relative;
                z-index: 123;
                height: .88rem;
                line-height: .8rem;
                display: block;
                width: 6.3rem;
                font-size: .28rem;
                background: #ccc;
                border: 0;
                color: #FFFFFF;
            }
        }
    }
</style>
