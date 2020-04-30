<template>
    <div class="Setting">
        <div class="nav">
            <van-nav-bar title="账户设置" @click-left="$router.go(-1)" left-arrow>
                <template #right>
                    <van-icon @click="$router.push('/')" size=".4rem" color="#787878" name="wap-home-o"/>
                </template>
            </van-nav-bar>
            <van-nav-bar>
                <template #left>
                    <span style="font-size: .3rem">头像</span>
                </template>
                <template #right>
                    <van-icon color="#787878" size=".4rem"  name="arrow"/>
                </template>
            </van-nav-bar>
            <van-nav-bar>
                <template #left>
                    <span style="font-size: .3rem">昵称</span>
                </template>
                <template #right>
                    {{username}}
                    <van-icon color="#787878" size=".4rem" name="arrow"/>
                </template>
            </van-nav-bar>
            <van-nav-bar>
                <template #left>
                    <span style="font-size: .3rem">登录密码</span>
                </template>
                <template #right>
                    修改密码
                    <van-icon color="#787878" size=".4rem" name="arrow"/>
                </template>
            </van-nav-bar>
            <van-nav-bar>
                <template #left>
                    <span style="font-size: .3rem">绑定手机</span>
                </template>
                <template #right>
                    {{username.slice(0,11)}}
                    <van-icon color="#787878" size=".4rem" name="arrow"/>
                </template>
            </van-nav-bar>
            <van-nav-bar>
                <template #left>
                    <span style="font-size: .3rem">邮箱</span>
                </template>
                <template #right>
                    去绑定
                    <van-icon color="#787878" size=".4rem" name="arrow"/>
                </template>
            </van-nav-bar>
        </div>
        <div class="btn">
            <button @click="remove">退出登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                username:''
            }
        },
        methods:{
            remove(){
                this.$jsCookie.remove('f_username');
                this.$router.push({name:'Home',params:{
                        index:0
                }});
                //刷新
                this.$router.go(0);
            }
        },
        created() {
            this.username=this.$jsCookie.get('f_username');
        }
    }
</script>

<style scoped lang="less">
    .btn{
        display: flex;
        
        button{
            width: 3.4rem;
            height: .8rem;
            line-height: .8rem;
            margin: 1.4rem auto 0;
            border-radius: .4rem;
            font-size: .28rem;
            color: #FFFFFF;
            background-color: #1bbc9b;
            border: 0;
            outline:none;
        }
    }
</style>