<template>
    <div class="Address">
        <div class="header">
            <van-nav-bar @click-left="onClickLeft" title="确认订单" left-text="返回" left-arrow>
                <template #left>
                    <van-icon size="0.4rem" color="#787878" name="arrow-left"/>
                </template>
            </van-nav-bar>
        </div>
        <van-address-edit class="ad"
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
   let address=require('../data/address');
    export default {
        data() {
            return {
                areaList:null,
                searchResult: [],
            };
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            onSave() {
            
            },
            onDelete() {
            
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [
                        {
                            name: '黄龙万科中心',
                            address: '杭州市西湖区',
                        },
                    ];
                } else {
                    this.searchResult = [];
                }
            },
        },
        created() {
            this.areaList= address.default.address
            console.log(address.default.address)
        }
    }
</script>

<style scoped lang="less">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
    .ad{
        margin-top: 1rem;
    }
</style>