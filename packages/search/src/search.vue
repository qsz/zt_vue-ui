<template>
    <div class="zt-search">
        <div :class="type == 'button' ? 'zt-searchbar zt-long-searchbar':'zt-searchbar'">
            <div class="zt-searchbar-inner" @click="turnSearch">
                <i class="ztui-search zt-searchbar-icon"></i>
                <span v-show="!currentValue">搜索</span>
                <input type="button" v-show="type == 'button'"/>
                <input type="search" v-show="type == 'search'" ref="searchInput" @keyup="search" @search="search" v-model="currentValue"/>
            </div>
            <div class="zt-searchbar-btn" v-show="type == 'search'" @click="turnButton">取消</div>
        </div>
        <div style="height: 2.2rem;width: 100%;display: block" v-show="type == 'button'"></div>
        <div class="zt-search-list zt-search-warp" v-show="type == 'search' && !currentValue" @click="turnButton"></div>

        <div class="zt-search-list-warp" style="margin-left: .5rem">
            <slot>
                <zt-cell v-for="(item, index) in result"></zt-cell>
            </slot>
        </div>
    </div>
</template>

<script>
    import ZtCell from '../../cell/index'
    export default {
        name: 'zt-search',
        data () {
            return {
                type: 'button',
                currentValue: this.value
            }
        },
        props:{
            result:{
                type: Array
            },
            searchFuc: {
                type: Function
            },
            cancelFuc: {
                type: Function
            },
            value: {
                type: String
            }
        },
        components:{
            ZtCell
        },
        watch:{
            currentValue(val) {
                this.$emit('input', val);
            },
            value(val) {
                this.currentValue = val;
            }
        },
        methods:{
            turnSearch: function () {
                let _this = this;
                if(this.type == 'button'){
                    this.type = 'search';
                    setTimeout(function () {
                        _this.$refs.searchInput.focus();
                    },300)
                }
            },
            turnButton: function () {
                this.type = 'button';
                this.currentValue = '';
                this.searchText = '';
                if(this.cancelFuc){
                    this.cancelFuc()
                }
            },
            search: function (e) {
                //this.searchText = e.target.value;
                let keycode = e.keyCode;
                if(this.searchFuc){
                    if(keycode=='13') {
                        e.preventDefault();
                        return;
                    }
                    this.searchFuc(this.currentValue);
                }
            }
        }
    }
</script>
<style type="text/less">
    @import "../../../src/style/ztui.less";
    .zt-search{
        overflow: hidden;
        .zt-searchbar{
            position: relative;
            background-color: #dcdcdc;
            box-sizing: border-box;
            padding: .4rem .5rem;
            z-index: 1;
            clear: both;
            .zt-searchbar-inner{
                height: 1.4rem;
                padding: .2rem .3rem;
                background-color: #fff;
                border-radius: 2px;
                display: inline-block;
                width: 85%;
                vertical-align: top;
                overflow: hidden;
                .zt-searchbar-icon{
                    position: absolute;
                    display: inline-block;
                    height: 1.1rem;
                    width: 1.1rem;
                    vertical-align: top;
                    transition: all .3s ease;
                    left: .7rem;
                }
                .zt-searchbar-icon+span{
                    position: absolute;
                    display: inline-block;
                    width: 1.5rem;
                    vertical-align: top;
                    transition: all .3s ease;
                    left: 2.4rem;
                    font-size: .7rem;
                    color: #707070;
                }
                input{
                    display: inline-block;
                    margin-left: 1.5rem;
                    width: 85%;
                    height: 100%;
                    vertical-align: top;
                    font-size: .7rem;
                    text-align: left;
                    color: #707070;
                }
            }
            .zt-searchbar-btn{
                display: inline-block;
                margin-left: .1rem;
                font-size: .8rem;
                line-height: 1.4rem;
                color: #4682B4;
                width: 10%;
                vertical-align: top;
            }
        }

        .zt-long-searchbar{
            position: fixed;
            z-index: 999;
            width: 100%;
            .zt-searchbar-inner{
                width: 100%;
                .zt-searchbar-icon{
                    position: absolute;
                    left: 38%;
                    transition: all .3s ease;
                }
                .zt-searchbar-icon+span{
                    position: absolute;
                    left: 45%;
                    transition: all .3s ease;
                }
                input{
                    text-align: center;
                }
            }
        }

        .zt-search-list{

        }

        .zt-search-warp{
            position: absolute;
            z-index: 99;
            width: 100%;
            height: 100%;
            background-color: rgba(105,105,105,0.5);
            /*transition: all .5s ease;*/
        }
    }


</style>
