<template>
    <div class="userinfo-box">
        <div class="userinfo-top">
            <div>正泰新能源</div>
            <div>{{UName}}</div>
            <div>{{Post}}</div>
        </div>
        <div class="userinfo-bottom">
            <ul>
                <li>手机:{{mobilePhone}}</li>
                <li>邮箱:{{Email}}</li>
                <li>部门:{{poffice}}</li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default{
        name: 'user-info',
        data () {
            return {
                UName: this.$route.params.UName || '未知',
                Post: this.$route.params.Post || '未知',
                mobilePhone: this.$route.params.mobilePhone || '未知',
                Email: this.$route.params.Email || '未知',
                poffice: this.$route.params.poffice || '未知'

            }
        },
        props:['info']
    }
</script>
<style type="text/less">
    .userinfo-box{
        margin-top: 2rem;
        .userinfo-top{
            margin: .8rem 1rem;
        }

        .userinfo-bottom{
            margin-top: 2rem;
            li{
                display: block;
            }
        }
    }

</style>