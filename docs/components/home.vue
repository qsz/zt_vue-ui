<template>
    <div class="homepage">
        <zt-search :result="contactList" v-show="contactList">
            <cell v-for="(item, index) in contactList" :item="item"></cell>
        </zt-search>

        <div class="no-contactList" v-show="contactList.length == 0">
            <span>部门暂无成员</span>
        </div>
        <!--home-->
        <!--<zt-ninebox :items="listInfo1" columnNum="4" lineNum="2" :type="typee" title="edit"></zt-ninebox>-->
        <!--<button @click="load">点击编辑</button>-->
        <!--<button @click="load2">点击完成</button>-->

        <!--<zt-ninebox :items="listInfo2" columnNum="4" lineNum="2" type="add" title="add" :editFuc="fucc2"></zt-ninebox>-->
        <!--<zt-ninebox :items="listInfo3" columnNum="4" lineNum="2" type="delete" title="delete" :editFuc="fucc3"></zt-ninebox>-->

        <!--&lt;!&ndash;<zt-selectbox></zt-selectbox>&ndash;&gt;-->

        <!--<div id="demo">-->
            <!--<button v-on:click="show = !show">-->
                <!--Toggle-->
            <!--</button>-->
            <!--<transition name="fade">-->
                <!--<p v-if="show">hello</p>-->
            <!--</transition>-->
            <!--<transition name="fade">-->
                <!--<p v-if="show">hello</p>-->
            <!--</transition>-->
            <!--<transition name="fade">-->
                <!--<p v-if="show">hello</p>-->
            <!--</transition>-->
            <!--<transition name="fade">-->
                <!--<p v-if="show">hello</p>-->
            <!--</transition>-->
        <!--</div>-->
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    import { ZtLoading,Selectbox } from 'Src/index'
    import ZtNinebox from "../../packages/nineBox/src/nineBox";
    import ZtSearch from "../../packages/search/src/search";
    import cell  from "Test_Components/contactcell.vue";
    import axios from 'axios';

    export default {
        name: 'home',
        data () {
            return {
                result:[1,2,3,4,5,6,6,6,6,6],
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
                contactInfo:{
                    org: '',
                    users: '',
                    userList: ''
                },
                contactList:[
                    {
                        OName:'正泰新能源',
                        OID:1,
                        PID: '0'
                    }
                ]

            }
        },
        components:{
            ZtSearch,
            ZtNinebox,
            cell
        },
        watch: {
            '$route' (to, from) {
                this.productList();
            }
        },
        mounted: function () {
//            let _this = this;
//            try{
//                this.contactInfo.org = JSON.parse(localStorage.getItem("org"));
//                this.contactInfo.users = JSON.parse(localStorage.getItem("users"));
//                this.contactInfo.userlist = JSON.parse(localStorage.getItem("userlist"));
//            }catch(err) {
//                console.log(err);
//            }
//            let href = window.location.href;
//            let href_list = href.split('/').slice(-1);
//            let OID = href_list[0];
//         //   let PID = href_list[1];
//
//            let userIdlist = [];
//            let contactUsersList = [];
//            let contactOList = [];
//            this.contactInfo.org.map(function (o,i) {
//                if(o.PID == OID){
//                    contactOList.push({
//                        HRoid: o.HRoid || '暂无',
//                        OID: o.OID || '暂无',
//                        OName: o.OName || '暂无',
//                        PID: o.PID || '暂无'
//                    })
//                }
//
//            });
//            this.contactInfo.userlist.map(function (u , i) {
//                if(u.OID == OID){
//                    userIdlist.push(u.USERID)
//                }
//            });
//
//            this.contactInfo.users.map(function (u, i) {
//                if(userIdlist.indexOf(u.USERID) > -1){
//                    contactUsersList.push({
//                        ADCode: u.ADCode || '暂无',
//                        ADName: u.ADName || '暂无',
//                        Email: u.Email || '暂无',
//                        HRUserid: u.HRUserid || '暂无',
//                        Post: u.Post || '暂无',
//                        UName: u.UName || '暂无',
//                        USERID: u.USERID || '暂无',
//                        mobilePhone: u.mobilePhone || '暂无',
//                        p6000: u.p6000 || '暂无',
//                        poffice: u.poffice || '暂无'
//                    })
//                }
//            });
//            let contactList = [].concat(contactUsersList, contactOList);
//            this.contactList = contactList;
//            console.log("contactList*****************","OID:",OID,"list",contactList)
            this.productList();

        },
        methods:{
            productList: function () {
                let _this = this;
                try{
                    this.contactInfo.org = JSON.parse(localStorage.getItem("org"));
                    this.contactInfo.users = JSON.parse(localStorage.getItem("users"));
                    this.contactInfo.userlist = JSON.parse(localStorage.getItem("userlist"));
                }catch(err) {
                    console.log(err);
                }
                let href = window.location.href;
                let href_list = href.split('/').slice(-1);
                let OID = href_list[0];
                //   let PID = href_list[1];

                let userIdlist = [];
                let contactUsersList = [];
                let contactOList = [];
                this.contactInfo.org.map(function (o,i) {
                    if(o.PID == OID){
                        contactOList.push({
                            HRoid: o.HRoid || '暂无',
                            OID: o.OID || '暂无',
                            OName: o.OName || '暂无',
                            PID: o.PID || '暂无'
                        })
                    }

                });
                this.contactInfo.users.map(function (u , i) {
                    if(u.OID == OID){
                        userIdlist.push(u.USERID)
                    }
                });
                this.contactInfo.userlist.map(function (u, i) {
                    if(userIdlist.indexOf(u.USERID) > -1){
                        contactUsersList.push({
                            type: 'user',
                            ADCode: u.ADCode || '暂无',
                            ADName: u.ADName || '暂无',
                            Email: u.Email || '暂无',
                            HRUserid: u.HRUserid || '暂无',
                            Post: u.Post || '暂无',
                            UName: u.UName || '暂无',
                            USERID: u.USERID || '暂无',
                            mobilePhone: u.mobilePhone || '暂无',
                            p6000: u.p6000 || '暂无',
                            poffice: u.poffice || '暂无'
                        })
                    }
                });
                let contactList = [].concat(contactUsersList, contactOList);
                this.contactList = contactList;
            },
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
    /*p{*/
        /*background-color: #42b983;*/
    /*}*/

    .no-contactList{
        position: absolute;
        width: 100%;
        height: 100%;
        color: #696969;

        span{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            -webkit-transform: translateX(-50%) translateY(-50%);
        }
    }

</style>