<template>
    <div :class="editType">
        <h2 v-if="title">{{ title }}</h2>

        <transition-group name="flip-ninelist" tag="ul">
            <li v-for="(item,index) in dataItems" :class="parseInt(index+1) % columnNum == 0 ? 'noRightBorder': ''" :style="{width: parseInt(index+1) % columnNum == 0 ? `${width - liWidth*(columnNum-1)}%`: `${liWidth}%`, height:`${parseInt(height/columnNum)}rem`}" ref="nineItem" :key="item">
                <transition name="boxfade" v-if="type == `edit`">
                    <div class="itemBoxContain">
                        <a :href="item.href || '/'" v-if="item.isA">
                            <div v-if="item.src" class="boxImg" :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
                            <span v-if="item.name" :tran="item.tran || ''" class="boxName">{{item.name}}</span>
                        </a>
                        <router-link :to="item.href || '/'" v-else>
                            <div v-if="item.src" class="boxImg" :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
                            <span v-if="item.name" :tran="item.tran || ''" class="boxName">{{item.name}}</span>
                        </router-link>
                    </div>
                </transition>
                <transition name="boxfade" v-else>
                    <div class="itemBoxContain">
                        <span :class="item.inTab ? `boxMessageTip boxMessageTipInTab`: `boxMessageTip`" @click="editAjax($event,index)"></span>
                        <div class="aedit">
                            <div v-if="item.src" class="boxImg" :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
                            <span v-if="item.name" :tran="item.tran || ''" class="boxName">{{item.name}}</span>
                        </div>
                    </div>
                </transition>
            </li>
        </transition-group>

    </div>
</template>

<script>
    let addArray = function (arr,length,v) {
        let _arr = arr.concat();
        if(arr.length < length){
            _arr = _arr.concat(v);
            return addArray(_arr, length, v)
        }else if(arr.length >= length){
            return _arr.slice(0, length);
        }else{
            return _arr;
        }
    };
    export default{
        name: 'normal-box',
        computed: {
            dataItems(){
                return this.items;
            },
            editType(){
                switch (this.type){
                    case 'edit':
                        return 'zt-editNinebox';
                    case 'add':
                        return 'zt-editNinebox zt-editAddNinebox';
                    case 'delete':
                        return 'zt-editNinebox zt-editDeleteNinebox';
                    default:
                        return 'zt-editNinebox';
                }
            },
            liWidth(){
                return parseInt(this.width/this.columnNum)
            }
        },
        created(){
            // 可以操作data, 但未生成DOM（未挂载）发起异步请求，初始化组件状态数据 data
            console.log('created ==> 实例创建完成，属性已绑定')
        },
        data(){
            return {
                width: '100',
                height: '22.8',
            }
        },
        methods: {
            editAjax: function(event,index){
                if(this.type == 'add' && !this.items[index].inTab){
                    console.log(this.$refs.nineItem[index].style,this.items[index].inTab);
                    this.editFuc(index);
                }
                if(this.type == 'delete'){
                    console.log(this.$refs.nineItem[index].style,this.items[index].inTab);
                    this.editFuc(index);
                }

            }
        },
        components: {},
        watch:{


        },
        props:{
            columnNum: {
                default: 4
            },
            lineNum: {
                default: 2
            },
            title:{},
            items:{
                type: Array,
                required: true
            },
            type:{},
            editFuc:{
                type: Function
            }
        }
    }
</script>

<style type="text/less">
    .zt-editNinebox{
        margin: 0 auto;
        width: 100%;
        height: auto;
        overflow: hidden;

        h2{
            font-size: 0.7rem;
            text-align: center;
            line-height: 1.5rem;
            height: 1.5rem;
            background-color: #F1F1F1;
            /*border-top: 0.05rem solid #DCDCDC;*/
            padding-left: 0.5rem;
            font-weight: 600;
        }
        ul{
            width: 100%;
            height: 100%;
            overflow: hidden;
            clear: both;
            border-top-width: 0.05rem;
            border-top-style: solid;
            border-top-color: #F1F1F1;
            background-color: inherit;
        }

        li{
            position: relative;
            float: left;
            border-top-width: 0.05rem;
            border-top-style: solid;
            border-top-color: #F1F1F1;
            border-bottom-width: 0.05rem;
            border-bottom-style: solid;
            border-bottom-color: #F1F1F1;
            border-right-width: 0.05rem;
            border-right-style: solid;
            border-right-color: #F1F1F1;
            margin-top: -0.05rem;
            background-color: inherit;
            text-align: center;
            transition: all 0.5s linear 0s;
        }
        li.noRightBorder{
            border-right: none;
        }
        .itemBoxContain{
            position: absolute;
            top:0;
            bottom:0;
            left: 0;
            right: 0;
            margin: auto;
            height: 90%;
            width: 90%;
            transition: all 0.2s linear 0.2s;
        }
        li a{
            display: inline-block;
            width: 100%;
            height: 100%;
        }
        li .aedit{
            display: inline-block;
            width: 100%;
            height: 100%;
        }
        li img{
            display: inline-block;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 40%;
            height: 40%;
        }
        li .boxImg{
            display: inline-block;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 40%;
            height: 40%;
            background-size: contain;
            background-repeat: no-repeat;
        }
        li .boxName{
            position: absolute;
            width: 100%;
            display: inline-block;
            bottom: 15%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.6rem;
            color: #000000;
        }
        .boxMessageTip{
            display: inline-block;
            position: absolute;
            width: 18%;
            height: 18%;
            transform: scale(0);
            top: 6%;
            right: 6%;
            color: #fff;
            font-size: 0.8rem;
            transform-origin: 50% 50%;
            /*transition: transform 0.2s linear 0.4s;*/
        }
    }
    .zt-editAddNinebox {
        .itemBoxContain{
            background-color: #DCDCDC;
        }
        .boxMessageTip{
            transform: scale(1);
            background: url("https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/zenjia.png") no-repeat;
            background-size: 100% 100%;
        }
        .boxMessageTip.boxMessageTipInTab{
            background: url("https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/gou.png") no-repeat;
            background-size: 100% 100%;
        }
    }
    .zt-editDeleteNinebox{
        .itemBoxContain{
            background-color: #DCDCDC;
        }
        .boxMessageTip{
            transform: scale(1);
            background: url("https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/shanchu.png") no-repeat;
            background-size: 100% 100%;
        }
    }

    .flip-ninelist-enter, .flip-ninelist-leave-active {
        opacity: 0;
        transform: scale(0);
    }
    .flip-ninelist-leave-active {
        position: absolute;
    }
    .flip-ninelist-move {
        transition: transform 1s;
    }

    .boxfade-enter-active, .boxfade-leave-active {
        transition: opacity .5s
    }
    .boxfade-enter, .boxfade-leave-active {
        opacity: 0
    }
</style>