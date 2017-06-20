<template>
    <div class="userinfo-box">
        <div class="userinfo-top">
            <div class="userinfo-companyname">正泰新能源</div>
            <img class="userinfo-userphoto" src="https://res.astronergy.com/Astronergy.Static/src/mobile/1.0.0/img/touxiang.png">
            <div class="userinfo-username">{{UName}}</div>
            <div class="userinfo-userpost">{{Post}}</div>
        </div>
        <div class="userinfo-bottom">
            <ul>
                <li><span>手机</span><a :href="`tel:${mobilePhone}`">{{mobilePhone}}</a></li>
                <li><span>座机</span><a :href="`tel:${poffice}`">{{poffice}}</a></li>
                <li><span>短号</span><a :href="`tel:${p6000}`">{{p6000}}</a></li>
                <li><span>邮箱</span>{{Email}}</li>
                <li><span>部门</span>{{OName}}</li>
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
                USERID: this.$route.params.USERID || '',
                p6000: this.$route.params.p6000 || '暂无',
                poffice: this.$route.params.poffice || '暂无',
                OName: '正泰新能源',
                contactInfo: {}
            }
        },
        props:['info'],
        mounted: function () {
            let _this = this;
            if(_this.USERID){
                try{
                    _this.contactInfo.org = JSON.parse(localStorage.getItem("org"));
                    _this.contactInfo.users = JSON.parse(localStorage.getItem("users"));
                    _this.contactInfo.userlist = JSON.parse(localStorage.getItem("userlist"));
                }catch(err) {
                    console.log(err);
                }

                let OID = null;
                if(_this.contactInfo.users.length > 0){
                    _this.contactInfo.users.map((u, i) => {
                        if(u.USERID == _this.USERID){
                            OID = u.OID;
                        }
                    })
                }
                if(OID){
                    if(_this.contactInfo.org.length > 0){
                        _this.contactInfo.org.map((u, i) => {
                            if(u.OID == OID){
                                _this.OName = u.OName;
                            }
                        })
                    }
                }
            }
        }
    }
</script>
<style type="text/less">
    .userinfo-box{
        padding-top: 2rem;
        a{
            color: #6495ED;
        }
        .userinfo-top{
            position: relative;
            margin: .6rem .8rem;
            padding: 1rem 1rem;
            background-color: #ffffff;
            border-radius: .3rem;
            box-shadow: 0 0 1.2rem .2rem #C0C0C0;

            .userinfo-companyname{
                color: #808080;
                font-weight: bold;
                font-size: .9rem;
            }

            .userinfo-userphoto{
                position: absolute;
                top: 1rem;
                right: 1rem;
                height: 4rem;
                width: 4rem;
            }

            .userinfo-username{
                margin-top: 3rem;
                color: #000000;
                font-weight: bold;
                font-size: 1.2rem;

            }

            .userinfo-userpost{
                margin-top: .4rem;
                color: #808080;
                font-size: .7rem;
            }
        }

        .userinfo-bottom{
            margin-top: 2rem;
            ul{
                padding: 0 .8rem;
                background-color: #ffffff;
                border-top: 1px solid #dcdcdc;
                border-bottom: 1px solid #dcdcdc;
            }
            li{
                display: block;
                padding: .5rem 0;
                font-size: .7rem;

                span{
                    margin-right: .5rem;
                }
            }
            li+li{
                border-top: 1px solid #dcdcdc;
                margin-top: -0.5px;
            }
        }
    }

</style>