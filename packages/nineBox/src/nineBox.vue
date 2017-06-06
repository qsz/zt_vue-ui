<template>
    <div class="zt-ninebox">
        <!--<component :is="column"></component>-->
        <h2 v-if="title">{{ title }}</h2>
        <ul>
            <li v-for="(item,index) in dataItems" :class="parseInt(index+1) % columnNum == 0 ? 'noRightBorder': ''" :style="{width:`${parseInt(width/columnNum)}%`, height:`${parseInt(height/columnNum)}rem`}">
                <a :href="item.href || '/'" v-if="item.isA">
                    <div v-if="item.src" class="boxImg" :style="{backgroundImage: 'url(' + item.src + ')'}">
                        <span class="boxMessageTip" v-if="item.tip">
                            <i :class="item.tip > 99 ? 'moreTip':''">{{item.tip > 99 ? '99+' : item.tip}}</i>
                        </span>
                    </div>
                    <span v-if="item.src" :tran="item.tran || ''" class="boxName">{{item.name}}</span>
                </a>
                <router-link :to="item.href || '/'" v-else>
                    <div v-if="item.src" class="boxImg" :style="{backgroundImage: 'url(' + item.src + ')'}">
                        <span class="boxMessageTip" v-if="item.tip">
                            <i :class="item.tip > 99 ? 'moreTip':''">{{item.tip > 99 ? '99+' : item.tip}}</i>
                        </span>
                    </div>
                    <span v-if="item.src" :tran="item.tran || ''" class="boxName">{{item.name}}</span>
                </router-link>
            </li>
        </ul>
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
        name: 'zt-ninebox',
        computed: {
            dataItems(){
                let _length = parseInt(this.lineNum*this.columnNum);
                return addArray(this.items, _length ,{name: '',src: '',href: '/',trankey: '/',tip: null,isA:false});
            }
        },
        data(){
            return {
                width: '100',
                height: '22.8',
            }
        },
        components: {},
        props:{
            columnNum: {
                default: 4
            },
            lineNum: {
                default: 2
            },
            title:{},
            items:{}
        }
    }
</script>

<style type="text/less">
    .zt-ninebox{
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
            border-top: 0.05rem solid #DCDCDC;
        }

        li{
            position: relative;
            float: left;
            border-top: 0.05rem solid #DCDCDC;
            border-bottom: 0.05rem solid #DCDCDC;
            border-right: 0.05rem solid #DCDCDC;
            margin-top: -0.05rem;
            background-color: #ffffff;
            text-align: center;
        }
        li.noRightBorder{
            border-right: none;
        }
        /*li:nth-child(4n){*/
        /*border-right: none;*/
        /*}*/
        li a{
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
            background-color: red;
            width: 42%;
            height: 42%;
            top: -20%;
            right: -20%;
            color: #fff;
            font-size: 0.8rem;
            border-radius: 50%;
        }
        .boxMessageTip i{
            position: absolute;
            display: inline-block;
            top: 50%;
            transform: translateY(-50%) translateX(-50%) scale(0.6);
            left: 50%;
        }
        .boxMessageTip i.moreTip{
            transform: translateY(-50%) translateX(-50%) scale(0.5);
        }
    }
</style>