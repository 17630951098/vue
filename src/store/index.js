import Vue from 'vue'
import Vuex from 'vuex'
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";
import mock from "mockjs";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        goodList:[
            {
                id:1475823694,
                name: '【极速香港仓】The Ordinary buffet多重胜肽精华 30ml 抗老化',
                num:5,
                price: '£' +12.70,
                market_price: '£' +10,
                img:'https://source-feelunique.azoyacdn.com/media/catalog/product/t/h/The_Ordinary___039_Buffet__039__30ml_1522741668_2.png?imageMogr2/thumbnail/400x400/extent/400x400/background/d2hpdGU=',
            },
            {
                id: 1475887594,
                market_price: '£' + 100,
                name: 'Noble Isle 香氛沐浴啫喱四件套装 4 x 30ml',
                num:10,
                price: '£' +8.40,
                img: 'https://source-feelunique.azoyacdn.com/media/catalog/product/n/o/Noble_Fragrance_Sampler_Gift_Set_4_x_30ml_1540557680.jpg?imageMogr2/thumbnail/400x400/extent/400x400/background/d2hpdGU=',
            },
            {
                id: 5285887594,
                name: 'The Ordinary 5%咖啡因 + EGCG眼部精华 30ml 淡化黑眼圈',
                num: 1,
                price: '£' + 5.80,
                market_price: '£' + 50,
                img: 'https://source-feelunique.azoyacdn.com/media/catalog/product/t/h/The_Ordinary_Caffeine_Solution_5____EGCG_30ml_1502351082.png?imageMogr2/thumbnail/400x400/extent/400x400/background/d2hpdGU=',
            }
        ],
    },
    getters:{
        getGoodList(state){
            return state.goodList
        }
    },
    mutations: {
        /*加入购物车*/
        addGood(state, good){
            let can=true;
            state.goodList.forEach((item,index)=>{
                if (item.id == good.id && item.name == good.name) {
                    can=false;
                    item.num=good.num
                }
            });
            if (can){
                state.goodList.push(good)
            }
        },
        //移除
        removeGood(state,good){
            let i=-1;
            state.goodList.forEach((item,index)=>{
                if (item.id==good.id&&item.name==good.name){
                    i=index;
                }
            });
            if (i!=-1){
                state.goodList.splice(i,1)
            }
        },
        //修改数量
        modifyNum(state, good) {
            state.goodList.forEach((item, index) => {
                if (item.id == good.id && item.id == good.product_id) {
                    item.num = good.num;
                }
            })
        }
    },
    actions: {},
    modules: {},
});
