<template>
    <div class="login">
        <van-nav-bar
                title="帐户登录"
                right-text="注册"
                left-arrow
                size="0.36rem"
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
        <div class="container">
            <form method="post" @submit.prevent>
                <!--用户名-->
                <div class="input" :class="hasBottom ? 'has' : ''">
                    <van-icon color="#787878" size="0.42rem" name="user-circle-o"/>
                    <input
                            @blur="hasBottom = false"
                            @click.stop="onInput(1)"
                            ref="code"
                            v-model="username"
                            type="text"
                            name="username"
                            placeholder="邮箱/手机"
                    />
                </div>
                <!--密码-->
                <div class="input" :class="obk ? 'has' : ''">
                    <van-icon color="#787878" size="0.42rem" name="lock"/>
                    <input
                            @blur="obk = false"
                            @click.stop="onInput(2)"
                            ref="code"
                            v-model="password"
                            :type="type ? 'password' : 'text'"
                            name="password"
                            placeholder="邮箱/手机"
                    />
                    <van-icon @click="type = !type" class="del" size="0.36rem" color="#787878" name="eye"/>
                </div>
                <button
                        @click="login(1)"
                        :style="{ backgroundColor: this.username != '' && this.password != '' ? '#000' : '' }"
                        class="sub"
                >
                    登录
                </button>
                <p class="forgot">忘记密码？</p>
                <div class="sc">
                    <van-divider
                            :style="{
                            color: '#999',
                            'font-size': '.24rem',
                            'font-weight': 400,
                            borderColor: '#999',
                            padding: '0 16px',
                        }"
                    >
                        使用其它方式登录
                    </van-divider>
                </div>
            </form>
            <ul class="list">
                <li @click="login(2)">
                    <a>
                        <img
                                src="http://basedata.azoyacdn.com/uploads/basedata/images/fd598b23364e95f373757e068801e2b0.png"
                                alt=""
                        />
                    </a>
                </li>
                <li @click="login(3)">
                    <a>
                        <img
                                src="http://basedata.azoyacdn.com/uploads/basedata/images/a8f8396a2af7a07555247dbd906d1a68.png"
                                alt=""
                        />
                    </a>
                </li>
                <li @click="login(4)">
                    <a>
                        <img
                                src="http://basedata.azoyacdn.com/uploads/basedata/images/005699ef3bb8ec2bba25e1496c45d65b.png"
                                alt=""
                        />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    
    export default {
        data() {
            return {
                pwd: false,
                //下边框
                hasBottom: false,
                //提交
                submit: false,
                username: "",
                password: "",
                obk: false,
                type: true,
            };
        },
        methods: {
            login(type) {
                if (type == 1) {
                    this.$api
                        .getLoginAPI({
                            promise: {
                                fmdo: "username/telphone",
                                username: this.username,
                                password: this.password,
                            },
                        })
                        .then((res) => {
                            if (res.data.code == 0) {
                                this.$jsCookie.set('f_username', this.username, {expires: 365});
                                this.$toast("登录成功");
                                if (this.$route.query.then) {
                                    this.$router.push(this.$route.query.then);
                                } else {
                                    if (this.$route.params.path){
                                        this.$router.push(this.$route.params.path)
                                    }else {
                                        this.$router.push("/");
                                    }
                                    
                                }
                            }
                            console.log(res);
                        })
                        .catch((err) => {
                            console.log(err)
                            this.$toast("登录失败");
                        });
                }
                else if (type==2||type==3||type==4){
                    this.$api.getLoginAPI({
                        fmdo: "third",
                        dopost: "login",
                        token: ""
                    }).then((res) => {
        
                    }).catch((err) => {
                        this.$toast('登录失败')
                    })
                }
            },
            onInput(type) {
                if (type == 1) {
                    this.hasBottom = true;
                } else {
                    this.obk = true;
                }
            },
            onClickLeft() {
                this.$router.go(-1);
            },
            onClickRight() {
                this.$router.push("/register");
            },
        },
        mounted() {
            this.$nextTick(() => {
            });
        },
    };
</script>

<style scoped lang="less">
    .login {
        height: 100vh;
    }
    
    .container {
        padding-top: 0.4rem;
        background-color: #ffffff;
        
        form {
            padding: 0 0.6rem;
            
            .input {
                margin-top: 0.4rem;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 0.2rem 0.2rem 0.2rem;
                width: 100%;
                border-bottom: 1px solid #e0e0e0;
                
                input {
                    margin-left: 0.16rem;
                    height: 0.4rem;
                    font-size: 0.26rem;
                    color: #333;
                    width: 100%;
                    line-height: 0.4rem;
                    border: none;
                    outline: none;
                    text-decoration: none;
                    background-color: #ffffff;
                }
                
                .del {
                    position: absolute;
                    right: 0.2rem;
                }
            }
            
            .has {
                border-bottom: 1px solid #000;
            }
            
            .sub {
                margin-top: 0.5rem;
                margin-bottom: 0.3rem;
                border-radius: 0.03rem;
                overflow: hidden;
                height: 0.88rem;
                line-height: 0.8rem;
                display: block;
                width: 6.3rem;
                font-size: 0.28rem;
                background: #ccc;
                border: 0;
                color: #ffffff;
            }
            
            .forgot {
                text-align: right;
                float: right;
                color: #999;
            }
            
            .sc {
                width: 100%;
                display: block;
                margin-top: 2rem;
            }
        }
        
        .list {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            
            li {
                width: 0.64rem;
                height: 0.64rem;
                vertical-align: middle;
                margin: 0 0.5rem;
                
                img {
                    width: 100%;
                }
            }
        }
    }
</style>
