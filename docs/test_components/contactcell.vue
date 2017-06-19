<template>
    <div class="contact-cell" @click="push(item)">
        <span class="contact-cell-pic" :class="item.type == 'user' ? '': 'contact-cell-pics'"></span><div class="contact-cell-name"><span :style="{marginTop: item.type == 'user'? '':'.4rem'}" >{{item.OName || item.UName || '未知人名'}}</span><span v-show="item.type == 'user'">{{ item.Post || '未知'}}</span></div>
    </div>
</template>
<script>
    export default {
        name: 'contact-cell',
        data () {
            return {
                defaultPic: 'https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/touxiang.png'
            }
        },
        components:{},
        props:['item'],
        methods: {
            push: function (item) {
                if(item.type == 'user'){
                    this.$router.push({
                        name:'UserInfo',
                        params: {
                            ADCode: item.ADCode || '暂无',
                            ADName: item.ADName || '暂无',
                            Email: item.Email || '暂无',
                            HRUserid: item.HRUserid || '暂无',
                            Post: item.Post || '暂无',
                            UName: item.UName || '暂无',
                            USERID: item.USERID || '暂无',
                            mobilePhone: item.mobilePhone || '暂无',
                            p6000: item.p6000 || '暂无',
                            poffice: item.poffice || '暂无'
                        }
                    })

                }else if(item.OID && item.PID){
                    this.$router.push(`/home/${item.OID}`)
                }
            }
        }
    }
</script>
<style type="text/less">
    .contact-cell{
        position: relative;
        width: 100%;
        padding: .4rem 0;
        border-bottom: 1px solid #dcdcdc;
        .contact-cell-pic{
            display: inline-block;
            height: 2rem;
            width: 2rem;
            background: url('https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/touxiang.png') no-repeat;
            background-size: 100% 100%;
            border-radius: 5px;
            vertical-align: top;
        }
        .contact-cell-pics{
            background:	#D3D3D3 url('https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/wenjianjia.png') no-repeat center;
            background-size: 80% 80%;
        }
        .contact-cell-name{
            display: inline-block;
            height: 2rem;
            width: 88%;
            vertical-align: top;
            padding-left: .7rem;

            span{
                display: block;
                width: 100%;
                height: 1.2rem;
                line-height: 1.2rem;
                vertical-align: top;
                font-size: .9rem;
            }
            span:nth-child(2){
                height: .8rem;
                line-height: .8rem;
                font-size: .7rem;
                color: #708090;
            }
        }
    }
</style>