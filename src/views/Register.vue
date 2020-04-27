<template>
    <div class="Register">
        <van-nav-bar
                title="手机注册"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
    </div>
</template>

<script>
    export default {
        methods: {
            onClickLeft() {
                Toast('返回');
            },
            onClickRight() {
                Toast('按钮');
            },
        },
    }
</script>

<style scoped>

</style>