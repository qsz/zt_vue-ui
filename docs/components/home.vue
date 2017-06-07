<template>
    <div class="homepage">
        home
        <zt-ninebox :items="listInfo1" columnNum="4" lineNum="2" :type="typee" title="edit"></zt-ninebox>
        <button @click="load">点击编辑</button>
        <button @click="load2">点击完成</button>

        <zt-ninebox :items="listInfo2" columnNum="4" lineNum="2" type="add" title="add" :editFuc="fucc2"></zt-ninebox>
        <zt-ninebox :items="listInfo3" columnNum="4" lineNum="2" type="delete" title="delete" :editFuc="fucc3"></zt-ninebox>

        <!--<zt-selectbox></zt-selectbox>-->


        <div id="demo">
            <button v-on:click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>


    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    import { ZtLoading,Selectbox } from 'Src/index'
    import ZtNinebox from "../../packages/nineBox/src/nineBox";

    export default {
        name: 'home',
        data () {
            return {
                show: true,
                typee: 'edit',
                listInfo1:[
                    {
                        name: 'test1',
                        src: 'https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/daibangongzuo.png',
                        href: '',
                        trankey: '',
                        tip: '99',
                        inTab: true
                    },
                    {
                        name: 'test2',
                        src: 'https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/wodeshenqing.png',
                        href: '',
                        trankey: '',
                        tip: '',
                        inTab: false
                    }
                ],
                listInfo2:[
                    {
                        name: '我的审批',
                        src: 'https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/daibangongzuo.png',
                        href: '',
                        trankey: '',
                        tip: '99',
                        inTab: true
                    },
                    {
                        name: '我的申请',
                        src: 'https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/wodeshenqing.png',
                        href: '',
                        trankey: '',
                        tip: '',
                        inTab: false
                    }
                ],
                listInfo3:[
                    {
                        name: 'test3',
                        src: 'https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/daibangongzuo.png',
                        href: '',
                        trankey: '',
                        tip: '99',
                        inTab: true
                    },
                    {
                        name: 'test4',
                        src: 'https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/wodeshenqing.png',
                        href: '',
                        trankey: '',
                        tip: '',
                        inTab: true
                    }
                ],

            }
        },
        components:{
            ZtNinebox
        },
        methods:{
            load: function () {
                this.typee = 'add';
//                Indicator.open({
//                    text: '加载中...',
//                    spinnerType: 'snake',
//                });
            },
            load2: function () {
                this.typee = 'edit';
            },
            fucc2: function (index) {
                var info = this.listInfo2[index];
                if(!info.inTab){
                    info.inTab = true;
                    this.listInfo3.push(info)
                }
            },
            fucc3: function (index) {
                var info = this.listInfo3[index];
                this.listInfo3.splice(index,1);
                info.inTab = false;
                this.listInfo2.push(info)
            }

        }
    }
</script>
<style type="text/less">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

</style>