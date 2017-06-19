<template>
    <div class="zt-cell">
        <span class="zt-cell-pic"></span><div class="zt-cell-name"><span>软蛋杜兰特</span><span>抱大腿</span></div>
    </div>
</template>
<script>
    export default {
        name: 'zt-cell',
        data () {
            return {
                defaultPic: 'https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/touxiang.png'
            }
        },
        components:{}
    }
</script>
<style type="text/less">
    .zt-cell{
        position: relative;
        width: 100%;
        padding: .4rem 0;
        border-bottom: 1px solid #dcdcdc;
        .zt-cell-pic{
            display: inline-block;
            height: 2rem;
            width: 2rem;
            background: url('https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/touxiang.png') no-repeat;
            background-size: 100% 100%;
            border-radius: 5px;
            vertical-align: top;
        }
        .zt-cell-pics{
            background:	#D3D3D3 url('https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/wenjianjia.png') no-repeat center;
            background-size: 80% 80%;
        }
        .zt-cell-name{
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